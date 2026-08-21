import { spawnSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { arch, cpus, platform, release, totalmem } from "node:os";
import { join } from "node:path";
import { Bench } from "tinybench";
import {
  loadStyledComponentsCorpus,
  STYLED_COMPONENTS_CORPUS_COMMIT,
  STYLED_COMPONENTS_CORPUS_NAME,
  STYLED_COMPONENTS_CORPUS_REPOSITORY,
  type StyledComponentsCorpus,
} from "./styled-components-corpus";
import {
  profileStageDefinitions,
  profileStyledComponentsOnce,
} from "./styled-components-profiler";
import {
  assertComparableStyledComponentsFeatures,
  STYLED_COMPONENTS_OPTIONS,
  STYLED_COMPONENTS_TRANSFORMERS,
  transformStyledComponentsCorpusFor,
  transformStyledComponentsFor,
  validateStyledComponentsOutputs,
  type StyledComponentsOutput,
  type StyledComponentsTransformerName,
  type StyledComponentsValidation,
} from "./styled-components-transformers";

const BENCH_TIME = Number(process.env.BENCH_TIME ?? 10_000);
const BENCH_WARMUP = Number(process.env.BENCH_WARMUP ?? 2_000);
const BENCH_RUNS = Number(process.env.BENCH_RUNS ?? 3);
const PROFILE_TIME = Number(process.env.PROFILE_TIME ?? BENCH_TIME);
const PROFILE_WARMUP = Number(process.env.PROFILE_WARMUP ?? BENCH_WARMUP);
const PROFILE_ITERATIONS_MAX = 100_000;
const RESULT_FILE = process.env.STYLED_COMPONENTS_RESULT ?? "styled-components.json";
const RESULT_FILE_PATTERN = /^[a-z0-9][a-z0-9-]*\.json$/;

interface RunResult extends StyledComponentsValidation {
  median: number;
  name: StyledComponentsTransformerName;
  rme: number;
  samples: number;
}

interface BenchResult extends StyledComponentsValidation {
  median: number;
  medianRunRme: number;
  name: StyledComponentsTransformerName;
  runMedians: number[];
  runSpreadPct: number;
  runs: number;
  samples: number;
}

interface ProfileRunResult {
  iterations: number;
  name: StyledComponentsTransformerName;
  outputCodeUnits: number;
  stageTotalsNs: number[];
}

interface ProfileStageResult {
  meanMs: number;
  name: string;
  runMeansMs: number[];
  runtime: string;
  share: number;
}

interface ProfileResult {
  iterations: number;
  meanMs: number;
  name: StyledComponentsTransformerName;
  runs: number;
  stages: ProfileStageResult[];
}

interface StyledComponentsBenchResult {
  benchmark: {
    runs: number;
    timeMs: number;
    warmupMs: number;
  };
  corpus: {
    commit: string;
    files: number;
    name: string;
    repository: string;
    sourceBytes: number;
    styledComponentsFiles: number;
  };
  options: typeof STYLED_COMPONENTS_OPTIONS;
  profile: {
    results: ProfileResult[];
    runs: number;
    timeMs: number;
    warmupMs: number;
  };
  reproduction: {
    command: string;
    resultFile: string;
  };
  results: BenchResult[];
  runtime: string;
  system: {
    cores: number;
    cpu: string;
    memoryGb: number;
    os: string;
  };
  versions: {
    babelCore: string;
    babelPlugin: string;
    oxcCodegen: string;
    oxcParser: string;
    swcCore: string;
    swcPlugin: string;
    yukuAst: string;
    yukuCodegen: string;
    yukuParser: string;
  };
}

let outputCodeUnitsLast = 0;

function taskArguments(...args: string[]): string[] {
  return ["--import", "tsx", "scripts/bench-styled-components.ts", ...args];
}

function spawnTask(...args: string[]) {
  const child = spawnSync(process.execPath, taskArguments(...args), {
    encoding: "utf8",
    env: process.env,
    stdio: ["ignore", "pipe", "inherit"],
  });
  if (child.error !== undefined) throw child.error;
  return child;
}

function isTransformerName(value: string): value is StyledComponentsTransformerName {
  return STYLED_COMPONENTS_TRANSFORMERS.some((name) => name === value);
}

function createTask(
  name: StyledComponentsTransformerName,
  corpus: StyledComponentsCorpus,
): () => void {
  return () => {
    let outputCodeUnits = 0;
    for (const file of corpus.files) {
      outputCodeUnits += transformStyledComponentsFor(name, file).length;
    }
    outputCodeUnitsLast = outputCodeUnits;
  };
}

async function runTask(name: StyledComponentsTransformerName): Promise<void> {
  const corpus = loadStyledComponentsCorpus();
  const outputs = transformStyledComponentsCorpusFor(name, corpus);
  const validation = validateStyledComponentsOutputs(name, outputs);
  const bench = new Bench({ time: BENCH_TIME, warmupTime: BENCH_WARMUP });
  bench.add(name, createTask(name, corpus));
  await bench.run();

  const task = bench.tasks[0];
  if (!task?.result || task.result.state !== "completed") {
    process.stdout.write(JSON.stringify({ ok: false }));
    return;
  }
  if (outputCodeUnitsLast !== validation.outputCodeUnits) {
    throw new Error(`${name} output changed during the benchmark`);
  }

  const latency = task.result.latency;
  const result: RunResult = {
    name,
    median: latency.p50,
    rme: latency.rme,
    samples: latency.samplesCount,
    ...validation,
  };
  process.stdout.write(JSON.stringify({ ok: true, result }));
}

function profileCorpusOnce(
  name: StyledComponentsTransformerName,
  corpus: StyledComponentsCorpus,
): { durationsNs: number[]; outputs: StyledComponentsOutput[] } {
  const durationsNs = profileStageDefinitions(name).map(() => 0);
  const outputs = corpus.files.map((file) => {
    const profile = profileStyledComponentsOnce(name, file);
    if (profile.durationsNs.length !== durationsNs.length) {
      throw new Error(`${name} profile returned an unexpected number of stages`);
    }
    for (let index = 0; index < durationsNs.length; index++) {
      durationsNs[index] += profile.durationsNs[index]!;
    }
    return { code: profile.output, relativePath: file.relativePath };
  });
  return { durationsNs, outputs };
}

function runProfileTask(name: StyledComponentsTransformerName): void {
  const corpus = loadStyledComponentsCorpus();
  const validationIteration = profileCorpusOnce(name, corpus);
  const validation = validateStyledComponentsOutputs(
    name,
    validationIteration.outputs,
  );
  const stageCount = profileStageDefinitions(name).length;

  const warmupDeadline = performance.now() + PROFILE_WARMUP;
  for (let iteration = 0; iteration < PROFILE_ITERATIONS_MAX; iteration++) {
    if (performance.now() >= warmupDeadline) break;
    profileCorpusOnce(name, corpus);
    if (iteration === PROFILE_ITERATIONS_MAX - 1) {
      throw new Error(`${name} exhausted the profile warmup iteration bound`);
    }
  }

  const stageTotalsNs = Array.from({ length: stageCount }, () => 0);
  const measurementDeadline = performance.now() + PROFILE_TIME;
  let iterations = 0;
  let outputCodeUnits = 0;
  while (iterations < PROFILE_ITERATIONS_MAX) {
    if (performance.now() >= measurementDeadline) break;
    const profile = profileCorpusOnce(name, corpus);
    for (let index = 0; index < stageCount; index++) {
      stageTotalsNs[index] += profile.durationsNs[index]!;
    }
    outputCodeUnits = profile.outputs.reduce(
      (total, output) => total + output.code.length,
      0,
    );
    iterations++;
  }
  if (iterations === 0) throw new Error(`${name} profile collected no iterations`);
  if (iterations === PROFILE_ITERATIONS_MAX && performance.now() < measurementDeadline) {
    throw new Error(`${name} exhausted the profile measurement iteration bound`);
  }
  if (outputCodeUnits !== validation.outputCodeUnits) {
    throw new Error(`${name} profile output changed during measurement`);
  }

  const result: ProfileRunResult = {
    iterations,
    name,
    outputCodeUnits,
    stageTotalsNs,
  };
  process.stdout.write(JSON.stringify({ ok: true, result }));
}

function median(values: number[]): number {
  const sorted = [...values].sort((left, right) => left - right);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) return sorted[middle]!;
  return (sorted[middle - 1]! + sorted[middle]!) / 2;
}

function sameValidation(
  left: StyledComponentsValidation,
  right: StyledComponentsValidation,
): boolean {
  return left.componentIds === right.componentIds &&
    left.displayNames === right.displayNames &&
    left.files === right.files &&
    left.jsxElements === right.jsxElements &&
    left.outputBytes === right.outputBytes &&
    left.outputCodeUnits === right.outputCodeUnits &&
    left.pureAnnotations === right.pureAnnotations &&
    left.taggedTemplates === right.taggedTemplates &&
    left.uniqueComponentIds === right.uniqueComponentIds &&
    left.withConfigCalls === right.withConfigCalls;
}

function aggregateRuns(
  name: StyledComponentsTransformerName,
  runs: RunResult[],
): BenchResult {
  const first = runs[0]!;
  for (const run of runs) {
    if (!sameValidation(first, run)) {
      throw new Error(`${name} validation changed between independent runs`);
    }
  }
  const runMedians = runs.map((run) => run.median);
  const reportedMedian = median(runMedians);
  return {
    componentIds: first.componentIds,
    displayNames: first.displayNames,
    files: first.files,
    jsxElements: first.jsxElements,
    median: reportedMedian,
    medianRunRme: median(runs.map((run) => run.rme)),
    name,
    outputBytes: first.outputBytes,
    outputCodeUnits: first.outputCodeUnits,
    pureAnnotations: first.pureAnnotations,
    runMedians,
    runSpreadPct:
      ((Math.max(...runMedians) - Math.min(...runMedians)) / reportedMedian) * 100,
    runs: runs.length,
    samples: runs.reduce((sum, run) => sum + run.samples, 0),
    taggedTemplates: first.taggedTemplates,
    uniqueComponentIds: first.uniqueComponentIds,
    withConfigCalls: first.withConfigCalls,
  };
}

function aggregateProfileRuns(
  name: StyledComponentsTransformerName,
  runs: ProfileRunResult[],
): ProfileResult {
  const definitions = profileStageDefinitions(name);
  const runMeansByStage = definitions.map((_, index) =>
    runs.map((run) => run.stageTotalsNs[index]! / run.iterations / 1_000_000),
  );
  const stageMeans = runMeansByStage.map((runMeans) => median(runMeans));
  const totalMeanMs = stageMeans.reduce((sum, mean) => sum + mean, 0);
  if (totalMeanMs === 0) throw new Error(`${name} profile did not measure any work`);

  return {
    iterations: runs.reduce((sum, run) => sum + run.iterations, 0),
    meanMs: totalMeanMs,
    name,
    runs: runs.length,
    stages: definitions.map((definition, index) => ({
      meanMs: stageMeans[index]!,
      name: definition.name,
      runMeansMs: runMeansByStage[index]!,
      runtime: definition.runtime,
      share: stageMeans[index]! / totalMeanMs,
    })),
  };
}

function rotatedTransformers(run: number): StyledComponentsTransformerName[] {
  const offset = (run - 1) % STYLED_COMPONENTS_TRANSFORMERS.length;
  return [
    ...STYLED_COMPONENTS_TRANSFORMERS.slice(offset),
    ...STYLED_COMPONENTS_TRANSFORMERS.slice(0, offset),
  ];
}

async function readPackageVersion(packageName: string): Promise<string> {
  const packagePath = join(process.cwd(), "node_modules", packageName, "package.json");
  const packageData = JSON.parse(await readFile(packagePath, "utf8")) as {
    version?: unknown;
  };
  if (typeof packageData.version !== "string") {
    throw new Error(`Package ${packageName} does not declare a version`);
  }
  return packageData.version;
}

function profileStyledComponents(): ProfileResult[] {
  console.log("\nProfiling styled-components stages...");
  const runsByName = new Map<StyledComponentsTransformerName, ProfileRunResult[]>(
    STYLED_COMPONENTS_TRANSFORMERS.map((name) => [name, []]),
  );
  for (let run = 1; run <= BENCH_RUNS; run++) {
    for (const name of rotatedTransformers(run)) {
      console.log(`  ${name} stages (run ${run}/${BENCH_RUNS})`);
      const processResult = spawnTask("--profile-task", name);
      if (processResult.status !== 0) {
        throw new Error(
          `${name} profile run ${run} failed with exit code ` +
            `${processResult.status ?? "unknown"}`,
        );
      }
      const output = JSON.parse(processResult.stdout) as {
        ok: boolean;
        result?: ProfileRunResult;
      };
      if (!output.ok || output.result === undefined) {
        throw new Error(`${name} profile run ${run} did not complete`);
      }
      runsByName.get(name)!.push(output.result);
    }
  }

  const results = STYLED_COMPONENTS_TRANSFORMERS.map((name) => {
    const runs = runsByName.get(name)!;
    if (runs.length !== BENCH_RUNS) {
      throw new Error(`${name} completed ${runs.length} of ${BENCH_RUNS} profile runs`);
    }
    return aggregateProfileRuns(name, runs);
  });
  console.table(
    results.flatMap((result) =>
      result.stages.map((stage) => ({
        Transformer: result.name,
        Stage: stage.name,
        Runtime: stage.runtime,
        "Median run mean (ms)": stage.meanMs.toFixed(3),
        Share: `${(stage.share * 100).toFixed(1)}%`,
      })),
    ),
  );
  return results;
}

async function benchStyledComponents(): Promise<StyledComponentsBenchResult> {
  const corpus = loadStyledComponentsCorpus();
  console.log(
    `\nBenchmarking ${corpus.files.length} real-world styled-components modules ` +
      `(${corpus.sourceBytes} bytes)...`,
  );

  const runsByName = new Map<StyledComponentsTransformerName, RunResult[]>(
    STYLED_COMPONENTS_TRANSFORMERS.map((name) => [name, []]),
  );
  for (let run = 1; run <= BENCH_RUNS; run++) {
    for (const name of rotatedTransformers(run)) {
      console.log(`  ${name} (run ${run}/${BENCH_RUNS})`);
      const processResult = spawnTask("--task", name);
      if (processResult.status !== 0) {
        throw new Error(
          `${name} run ${run} failed with exit code ` +
            `${processResult.status ?? "unknown"}`,
        );
      }
      const output = JSON.parse(processResult.stdout) as {
        ok: boolean;
        result?: RunResult;
      };
      if (!output.ok || output.result === undefined) {
        throw new Error(`${name} run ${run} did not complete`);
      }
      runsByName.get(name)!.push(output.result);
    }
  }

  const results = STYLED_COMPONENTS_TRANSFORMERS.map((name) => {
    const runs = runsByName.get(name)!;
    if (runs.length !== BENCH_RUNS) {
      throw new Error(`${name} completed ${runs.length} of ${BENCH_RUNS} runs`);
    }
    return aggregateRuns(name, runs);
  }).sort((left, right) => left.median - right.median);
  assertComparableStyledComponentsFeatures(results);

  console.table(
    results.map((result) => ({
      Transformer: result.name,
      "Median (ms)": result.median.toFixed(3),
      "Run spread": `${result.runSpreadPct.toFixed(2)}%`,
      Samples: result.samples,
      Components: result.withConfigCalls,
      "Output (bytes)": result.outputBytes,
    })),
  );

  const profileResults = profileStyledComponents();

  return {
    benchmark: {
      runs: BENCH_RUNS,
      timeMs: BENCH_TIME,
      warmupMs: BENCH_WARMUP,
    },
    corpus: {
      commit: STYLED_COMPONENTS_CORPUS_COMMIT,
      files: corpus.files.length,
      name: STYLED_COMPONENTS_CORPUS_NAME,
      repository: STYLED_COMPONENTS_CORPUS_REPOSITORY,
      sourceBytes: corpus.sourceBytes,
      styledComponentsFiles: corpus.files.filter((file) =>
        file.source.includes('"styled-components"') ||
        file.source.includes("'styled-components'"),
      ).length,
    },
    options: STYLED_COMPONENTS_OPTIONS,
    profile: {
      results: profileResults,
      runs: BENCH_RUNS,
      timeMs: PROFILE_TIME,
      warmupMs: PROFILE_WARMUP,
    },
    reproduction: {
      command: process.env.BENCH_REPRODUCTION_COMMAND ?? "custom benchmark invocation",
      resultFile: RESULT_FILE,
    },
    results,
    runtime: `Node ${process.versions.node}`,
    system: {
      cores: cpus().length,
      cpu: cpus()[0]?.model ?? "Unknown CPU",
      memoryGb: Math.round(totalmem() / (1024 * 1024 * 1024)),
      os: `${platform()} ${release()} (${arch()})`,
    },
    versions: {
      babelCore: await readPackageVersion("@babel/core"),
      babelPlugin: await readPackageVersion("babel-plugin-styled-components"),
      oxcCodegen: await readPackageVersion("oxc-codegen"),
      oxcParser: await readPackageVersion("oxc-parser"),
      swcCore: await readPackageVersion("@swc/core"),
      swcPlugin: await readPackageVersion("@swc/plugin-styled-components"),
      yukuAst: await readPackageVersion("yuku-ast"),
      yukuCodegen: await readPackageVersion("yuku-codegen"),
      yukuParser: await readPackageVersion("yuku-parser"),
    },
  };
}

async function main(): Promise<void> {
  if (!RESULT_FILE_PATTERN.test(RESULT_FILE)) {
    throw new Error(`Invalid styled-components result filename: ${RESULT_FILE}`);
  }
  const args = process.argv.slice(2);
  if (args[0] === "--task") {
    const name = args[1];
    if (name === undefined || !isTransformerName(name)) {
      throw new Error(`Unknown transformer: ${name ?? "missing"}`);
    }
    await runTask(name);
    return;
  }
  if (args[0] === "--profile-task") {
    const name = args[1];
    if (name === undefined || !isTransformerName(name)) {
      throw new Error(`Unknown transformer: ${name ?? "missing"}`);
    }
    runProfileTask(name);
    return;
  }

  const result = await benchStyledComponents();
  await mkdir(join(process.cwd(), "result"), { recursive: true });
  await writeFile(
    join(process.cwd(), "result", RESULT_FILE),
    JSON.stringify(result, null, 2),
  );
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
