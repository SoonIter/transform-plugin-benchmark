import { spawnSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { arch, cpus, platform, release, totalmem } from "node:os";
import { join } from "node:path";
import {
  createScalingFixture,
  fitErrors,
  fitScalingCurve,
  SCALING_SIZES_KIB,
  SCALING_TRAINING_SIZES_KIB,
  SCALING_VALIDATION_SIZES_KIB,
  type ScalingFit,
} from "./styled-components-scaling";
import {
  assertComparableStyledComponentsFeatures,
  STYLED_COMPONENTS_TRANSFORMERS,
  transformStyledComponentsFor,
  validateStyledComponentsOutputs,
  type StyledComponentsTransformerName,
} from "./styled-components-transformers";

const BENCH_TIME = Number(process.env.SCALING_BENCH_TIME ?? 200);
const BENCH_WARMUP = Number(process.env.SCALING_BENCH_WARMUP ?? 200);
const BENCH_RUNS = Number(process.env.SCALING_BENCH_RUNS ?? 3);
const MIN_SAMPLES_PER_SIZE = Number(process.env.SCALING_MIN_SAMPLES ?? 3);
const VALIDATION_MAPE_LIMIT_PCT = 6;
const VALIDATION_MAX_ERROR_LIMIT_PCT = 15;
const RESULT_FILE = process.env.STYLED_COMPONENTS_SCALING_RESULT ??
  "styled-components-scaling.json";
const RESULT_FILE_PATTERN = /^[a-z0-9][a-z0-9-]*\.json$/;

interface TaskResult {
  medianMs: number;
  name: StyledComponentsTransformerName;
  outputCodeUnits: number;
  records: number;
  samples: number;
  sizeKiB: number;
  sourceBytes: number;
  styledComponents: number;
}

interface ScalingPoint {
  medianMs: number;
  records: number;
  role: "training" | "validation";
  runMediansMs: number[];
  runSpreadPct: number;
  samples: number;
  sizeKiB: number;
  sourceBytes: number;
  styledComponents: number;
}

interface ScalingResult {
  fit: ScalingFit & {
    accepted: boolean;
    validationMapePct: number;
    validationMaxErrorPct: number;
  };
  name: StyledComponentsTransformerName;
  points: ScalingPoint[];
}

let outputCodeUnitsLast = 0;

function median(values: number[]): number {
  const sorted = [...values].sort((left, right) => left - right);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 1
    ? sorted[middle]!
    : (sorted[middle - 1]! + sorted[middle]!) / 2;
}

function isTransformerName(value: string): value is StyledComponentsTransformerName {
  return STYLED_COMPONENTS_TRANSFORMERS.some((name) => name === value);
}

function taskArguments(...args: string[]): string[] {
  return ["--expose-gc", "--import", "tsx", "scripts/bench-styled-components-scaling.ts", ...args];
}

function rotated<T>(values: readonly T[], offset: number): T[] {
  const normalized = offset % values.length;
  return [...values.slice(normalized), ...values.slice(0, normalized)];
}

async function runTask(
  name: StyledComponentsTransformerName,
  run: number,
): Promise<void> {
  const sizes = rotated(SCALING_SIZES_KIB, run - 1);
  const results: TaskResult[] = [];
  const warmupFixture = createScalingFixture(16);
  const warmupDeadline = performance.now() + BENCH_WARMUP;
  do {
    outputCodeUnitsLast = transformStyledComponentsFor(name, warmupFixture).length;
  } while (performance.now() < warmupDeadline);
  for (const sizeKiB of sizes) {
    const fixture = createScalingFixture(sizeKiB);
    outputCodeUnitsLast = 0;
    (globalThis as { gc?: () => void }).gc?.();
    const durationsMs: number[] = [];
    const measurementDeadline = performance.now() + BENCH_TIME;
    do {
      const startedAt = performance.now();
      const outputCodeUnits = transformStyledComponentsFor(name, fixture).length;
      durationsMs.push(performance.now() - startedAt);
      if (outputCodeUnitsLast !== 0 && outputCodeUnitsLast !== outputCodeUnits) {
        throw new Error(`${name} output changed while measuring ${sizeKiB} KiB`);
      }
      outputCodeUnitsLast = outputCodeUnits;
    } while (
      performance.now() < measurementDeadline ||
      durationsMs.length < MIN_SAMPLES_PER_SIZE
    );
    if (outputCodeUnitsLast <= 0) throw new Error(`${name} generated empty output`);
    results.push({
      medianMs: median(durationsMs),
      name,
      outputCodeUnits: outputCodeUnitsLast,
      records: fixture.records,
      samples: durationsMs.length,
      sizeKiB,
      sourceBytes: fixture.sourceBytes,
      styledComponents: fixture.styledComponents,
    });
  }
  process.stdout.write(JSON.stringify({ ok: true, results }));
}

function aggregateTransformer(
  name: StyledComponentsTransformerName,
  runs: TaskResult[][],
): ScalingResult {
  const points = SCALING_SIZES_KIB.map((sizeKiB): ScalingPoint => {
    const observations = runs.map((run) => {
      const observation = run.find((candidate) => candidate.sizeKiB === sizeKiB);
      if (observation === undefined) throw new Error(`${name} missed ${sizeKiB} KiB`);
      return observation;
    });
    const runMediansMs = observations.map((observation) => observation.medianMs);
    const reportedMedian = median(runMediansMs);
    return {
      medianMs: reportedMedian,
      records: observations[0]!.records,
      role: SCALING_TRAINING_SIZES_KIB.includes(sizeKiB as never)
        ? "training"
        : "validation",
      runMediansMs,
      runSpreadPct:
        (Math.max(...runMediansMs) - Math.min(...runMediansMs)) /
        reportedMedian * 100,
      samples: observations.reduce((sum, observation) => sum + observation.samples, 0),
      sizeKiB,
      sourceBytes: observations[0]!.sourceBytes,
      styledComponents: observations[0]!.styledComponents,
    };
  });
  const training = points
    .filter((point) => point.role === "training")
    .map((point) => ({ sizeKiB: point.sizeKiB, timeMs: point.medianMs }));
  const validation = points
    .filter((point) => point.role === "validation")
    .map((point) => ({ sizeKiB: point.sizeKiB, timeMs: point.medianMs }));
  const fit = fitScalingCurve(training);
  const validationErrors = fitErrors(validation, fit);
  return {
    fit: {
      ...fit,
      accepted:
        validationErrors.mapePct <= VALIDATION_MAPE_LIMIT_PCT &&
        validationErrors.maxErrorPct <= VALIDATION_MAX_ERROR_LIMIT_PCT,
      validationMapePct: validationErrors.mapePct,
      validationMaxErrorPct: validationErrors.maxErrorPct,
    },
    name,
    points,
  };
}

async function readPackageVersion(packageName: string): Promise<string> {
  const packageData = JSON.parse(
    await readFile(join(process.cwd(), "node_modules", packageName, "package.json"), "utf8"),
  ) as { version?: unknown };
  if (typeof packageData.version !== "string") {
    throw new Error(`Package ${packageName} does not declare a version`);
  }
  return packageData.version;
}

async function benchmarkScaling(): Promise<object> {
  const runsByName = new Map<StyledComponentsTransformerName, TaskResult[][]>(
    STYLED_COMPONENTS_TRANSFORMERS.map((name) => [name, []]),
  );
  console.log(
    `Benchmarking single-file scaling at ${SCALING_SIZES_KIB.length} sizes ` +
      `(1 KiB to 512 KiB)...`,
  );
  console.log("Validating the 1 KiB and 512 KiB endpoint outputs...");
  for (const sizeKiB of [Math.min(...SCALING_SIZES_KIB), Math.max(...SCALING_SIZES_KIB)]) {
    const fixture = createScalingFixture(sizeKiB);
    const validations = STYLED_COMPONENTS_TRANSFORMERS.map((name) => {
      const code = transformStyledComponentsFor(name, fixture);
      const validation = validateStyledComponentsOutputs(name, [
        { code, relativePath: fixture.relativePath },
      ]);
      if (validation.withConfigCalls !== fixture.styledComponents) {
        throw new Error(`${name} failed endpoint feature coverage at ${sizeKiB} KiB`);
      }
      return validation;
    });
    assertComparableStyledComponentsFeatures(validations);
  }
  for (let run = 1; run <= BENCH_RUNS; run++) {
    for (const name of rotated(STYLED_COMPONENTS_TRANSFORMERS, run - 1)) {
      console.log(`  ${name} (run ${run}/${BENCH_RUNS})`);
      const child = spawnSync(process.execPath, taskArguments("--task", name, String(run)), {
        encoding: "utf8",
        env: process.env,
        maxBuffer: 16 * 1024 * 1024,
        stdio: ["ignore", "pipe", "inherit"],
      });
      if (child.error !== undefined) throw child.error;
      if (child.status !== 0) {
        throw new Error(`${name} scaling run ${run} failed with ${child.status ?? "unknown"}`);
      }
      const output = JSON.parse(child.stdout) as { ok: boolean; results?: TaskResult[] };
      if (!output.ok || output.results?.length !== SCALING_SIZES_KIB.length) {
        throw new Error(`${name} scaling run ${run} returned incomplete results`);
      }
      runsByName.get(name)!.push(output.results);
    }
  }
  const results = STYLED_COMPONENTS_TRANSFORMERS.map((name) =>
    aggregateTransformer(name, runsByName.get(name)!),
  );
  console.table(results.map((result) => ({
    Transformer: result.name,
    Model: result.fit.model === "offset-power"
      ? `T = ${result.fit.interceptMs.toFixed(4)} + ` +
        `${result.fit.slopeMsPerKiBPower.toExponential(3)} × KiB^${result.fit.exponent.toFixed(3)}`
      : `ln(T) = ${result.fit.logIntercept.toFixed(4)} + ` +
        `${result.fit.logLinear.toFixed(4)} ln(KiB) + ` +
        `${result.fit.logQuadratic.toFixed(4)} ln(KiB)²`,
    "Fit MAPE": `${result.fit.mapePct.toFixed(2)}%`,
    "LOO MAPE": `${result.fit.looMapePct.toFixed(2)}%`,
    "Validation MAPE": `${result.fit.validationMapePct.toFixed(2)}%`,
    "Validation max": `${result.fit.validationMaxErrorPct.toFixed(2)}%`,
    Accepted: result.fit.accepted,
  })));
  const rejected = results.filter((result) => !result.fit.accepted);
  if (rejected.length > 0) {
    throw new Error(
      "Scaling fits exceeded the held-out error limits: " +
        rejected.map((result) => result.name).join(", "),
    );
  }
  return {
    benchmark: {
      minimumSamplesPerSizePerRun: MIN_SAMPLES_PER_SIZE,
      runs: BENCH_RUNS,
      timeMs: BENCH_TIME,
      warmupMs: BENCH_WARMUP,
    },
    fixture: {
      description:
        "Exact-size synthetic JSX modules with one styled-components hit and stable AST density",
      maximumBytes: Math.max(...SCALING_SIZES_KIB) * 1_024,
      minimumBytes: Math.min(...SCALING_SIZES_KIB) * 1_024,
      trainingSizesKiB: SCALING_TRAINING_SIZES_KIB,
      validationSizesKiB: SCALING_VALIDATION_SIZES_KIB,
    },
    fitValidation: {
      maximumErrorLimitPct: VALIDATION_MAX_ERROR_LIMIT_PCT,
      mapeLimitPct: VALIDATION_MAPE_LIMIT_PCT,
      method: "held-out intermediate file sizes excluded from curve fitting",
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
    throw new Error(`Invalid scaling result filename: ${RESULT_FILE}`);
  }
  const args = process.argv.slice(2);
  if (args[0] === "--task") {
    const name = args[1];
    const run = Number(args[2]);
    if (name === undefined || !isTransformerName(name) || !Number.isInteger(run) || run < 1) {
      throw new Error("Invalid scaling task arguments");
    }
    await runTask(name, run);
    return;
  }
  const result = await benchmarkScaling();
  await mkdir(join(process.cwd(), "result"), { recursive: true });
  await writeFile(join(process.cwd(), "result", RESULT_FILE), JSON.stringify(result, null, 2));
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
