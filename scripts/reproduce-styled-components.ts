import { spawnSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { STYLED_COMPONENTS_CORPUS_COMMIT } from "./styled-components-corpus";
import {
  styledComponentsTransformerPrintsComments,
  type StyledComponentsTransformerName,
} from "./styled-components-transformers";

const SETTINGS = {
  BENCH_RUNS: "3",
  BENCH_TIME: "5000",
  BENCH_WARMUP: "1000",
  PROFILE_TIME: "5000",
  PROFILE_WARMUP: "1000",
} as const;

const NODE_VERSION = "24.18.1";
const REPRODUCTION_COMMAND = "npm run reproduce:styled-components";
const RESULT_FILE = "styled-components.json";

interface ReproductionResult {
  benchmark: {
    runs: number;
    timeMs: number;
    warmupMs: number;
  };
  corpus: {
    commit: string;
    files: number;
    sourceBytes: number;
  };
  profile: {
    results: Array<{ name: string }>;
    runs: number;
    timeMs: number;
    warmupMs: number;
  };
  reproduction: {
    command: string;
    resultFile: string;
  };
  results: Array<{
    componentIds: number;
    jsxElements: number;
    name: StyledComponentsTransformerName;
    pureAnnotations: number;
    withConfigCalls: number;
  }>;
  runtime: string;
  versions: {
    oxcCodegen: string;
    oxcParser: string;
  };
}

function assertRuntime(): void {
  if (process.versions.node !== NODE_VERSION) {
    throw new Error(
      `Exact reproduction requires Node ${NODE_VERSION}, received ${process.versions.node}`,
    );
  }
}

function assertResult(result: ReproductionResult): void {
  if (result.benchmark.runs !== Number(SETTINGS.BENCH_RUNS)) {
    throw new Error("Reproduction result has an unexpected benchmark run count");
  }
  if (result.benchmark.timeMs !== Number(SETTINGS.BENCH_TIME)) {
    throw new Error("Reproduction result has an unexpected benchmark duration");
  }
  if (result.benchmark.warmupMs !== Number(SETTINGS.BENCH_WARMUP)) {
    throw new Error("Reproduction result has an unexpected benchmark warmup");
  }
  if (result.profile.runs !== Number(SETTINGS.BENCH_RUNS)) {
    throw new Error("Reproduction result has an unexpected profile run count");
  }
  if (result.profile.timeMs !== Number(SETTINGS.PROFILE_TIME)) {
    throw new Error("Reproduction result has an unexpected profile duration");
  }
  if (result.profile.warmupMs !== Number(SETTINGS.PROFILE_WARMUP)) {
    throw new Error("Reproduction result has an unexpected profile warmup");
  }
  if (result.corpus.commit !== STYLED_COMPONENTS_CORPUS_COMMIT) {
    throw new Error("Reproduction result has an unexpected corpus revision");
  }
  if (result.corpus.files !== 87 || result.corpus.sourceBytes !== 57_051) {
    throw new Error("Reproduction result has an unexpected corpus shape");
  }
  if (result.runtime !== `Node ${NODE_VERSION}`) {
    throw new Error(`Expected runtime Node ${NODE_VERSION}, received ${result.runtime}`);
  }
  if (result.versions.oxcParser !== "0.144.0") {
    throw new Error("Reproduction result has an unexpected OXC parser version");
  }
  if (result.versions.oxcCodegen !== "0.144.0") {
    throw new Error("Reproduction result has an unexpected OXC codegen version");
  }
  if (result.results.length !== 6 || result.profile.results.length !== 6) {
    throw new Error("Reproduction result has an unexpected transformer count");
  }
  for (const resultEntry of result.results) {
    if (
      resultEntry.componentIds !== 32 ||
      resultEntry.jsxElements !== 137 ||
      resultEntry.withConfigCalls !== 32
    ) {
      throw new Error(`${resultEntry.name} has incomplete styled-components coverage`);
    }
    if (!styledComponentsTransformerPrintsComments(resultEntry.name)) {
      if (resultEntry.pureAnnotations !== 0) {
        throw new Error(`${resultEntry.name} unexpectedly retained comments`);
      }
    } else if (resultEntry.pureAnnotations < 32) {
      throw new Error(`${resultEntry.name} has incomplete PURE annotations`);
    }
  }
  if (result.reproduction.command !== REPRODUCTION_COMMAND) {
    throw new Error("Reproduction result did not record the invoking command");
  }
  if (result.reproduction.resultFile !== RESULT_FILE) {
    throw new Error("Reproduction result did not record its output file");
  }
}

function runScript(path: string): void {
  const child = spawnSync(process.execPath, ["--import", "tsx", path], {
    env: {
      ...process.env,
      ...SETTINGS,
      BENCH_REPRODUCTION_COMMAND: REPRODUCTION_COMMAND,
      STYLED_COMPONENTS_RESULT: RESULT_FILE,
    },
    stdio: "inherit",
  });
  if (child.error !== undefined) throw child.error;
  if (child.status !== 0) {
    throw new Error(`${path} exited with status ${child.status ?? "unknown"}`);
  }
}

function runTests(): void {
  const child = spawnSync(
    process.execPath,
    [
      "--import",
      "tsx",
      "--test",
      "test/styled-components.test.ts",
      "test/yuku-styled-components-parity.test.ts",
    ],
    { stdio: "inherit" },
  );
  if (child.error !== undefined) throw child.error;
  if (child.status !== 0) {
    throw new Error(`Compatibility tests exited with status ${child.status ?? "unknown"}`);
  }
}

async function main(): Promise<void> {
  assertRuntime();
  console.log(`\nExact styled-components reproduction with Node ${NODE_VERSION}`);
  console.table(SETTINGS);

  console.log("\nValidating the Yuku port and all benchmark outputs...");
  runTests();
  runScript("scripts/bench-styled-components.ts");
  const resultPath = join(process.cwd(), "result", RESULT_FILE);
  const result = JSON.parse(await readFile(resultPath, "utf8")) as ReproductionResult;
  assertResult(result);
  runScript("scripts/generate-artifacts.ts");
  runScript("scripts/generate-charts.ts");
  console.log(`\nVerified reproduction result: ${resultPath}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
