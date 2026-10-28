import { parseLazyEstree } from "./oxc-lazy-estree";
import {
  parseSync as babelParseSync,
  transformFromAstSync as babelTransformFromAstSync,
} from "@babel/core";
import {
  parseSync as swcNextParseSync,
  printSync as swcNextPrintSync,
} from "@swc-next/core";
import babelStyledComponentsPlugin from "./babel-styled-components-plugin";
import { printSync as oxcPrintSync } from "oxc-codegen";
import { parseSync as oxcParseSync, rawTransferSupported } from "oxc-parser";
import { generate as yukuGenerate } from "yuku-codegen";
import { parse as yukuParse, type Program } from "yuku-parser";
import type { StyledComponentsCorpusFile } from "./styled-components-corpus";
import {
  printEstreeProgramWithOxc,
  STYLED_COMPONENTS_OPTIONS,
  transformStyledComponentsFor,
  type StyledComponentsTransformerName,
} from "./styled-components-transformers";
import { transformStyledComponentsYuku } from "./yuku-styled-components-plugin";
import { transformStyledComponentsSwcNext } from "./swc-next-styled-components-plugin";
import { transformStyledComponentsZimmerframe } from "./zimmerframe-styled-components-plugin";

export interface ProfileIteration {
  durationsNs: number[];
  output: string;
}

export interface ProfileStageDefinition {
  name: string;
  runtime: string;
}

const PROFILE_STAGE_DEFINITIONS: Record<
  StyledComponentsTransformerName,
  readonly ProfileStageDefinition[]
> = {
  "Babel + JS plugin": [
    { name: "parse", runtime: "JS" },
    { name: "plugin transform", runtime: "JS" },
    { name: "codegen", runtime: "JS" },
  ],
  "SWC + WASM plugin": [
    { name: "parse + plugin + codegen", runtime: "native + WASM" },
  ],
  "SWC Next + SWC Next walker": [
    { name: "parse", runtime: "native" },
    { name: "AST decode", runtime: "JS" },
    { name: "plugin transform", runtime: "JS" },
    { name: "AST encode + codegen", runtime: "JS + native" },
  ],
  "SWC Next + OXC codegen": [
    { name: "parse", runtime: "native" },
    { name: "AST decode", runtime: "JS" },
    { name: "plugin transform", runtime: "JS" },
    { name: "codegen", runtime: "JS" },
  ],
  "SWC Next + Yuku walk": [
    { name: "parse", runtime: "native" },
    { name: "AST decode", runtime: "JS" },
    { name: "plugin transform", runtime: "JS" },
    { name: "AST encode + codegen", runtime: "JS + native" },
  ],
  "SWC Next + Zimmerframe": [
    { name: "parse", runtime: "native" },
    { name: "AST decode", runtime: "JS" },
    { name: "plugin transform", runtime: "JS" },
    { name: "AST encode + codegen", runtime: "JS + native" },
  ],
  "Yuku + JS plugin": [
    { name: "parse", runtime: "native" },
    { name: "AST decode", runtime: "JS" },
    { name: "plugin transform", runtime: "JS" },
    { name: "codegen", runtime: "JS" },
  ],
  "Yuku + OXC codegen": [
    { name: "parse", runtime: "native" },
    { name: "AST decode", runtime: "JS" },
    { name: "plugin transform", runtime: "JS" },
    { name: "codegen", runtime: "JS" },
  ],
  "OXC + Yuku walk plugin": [
    { name: "parse + AST transfer", runtime: "native + JS" },
    { name: "plugin transform", runtime: "JS" },
    { name: "codegen", runtime: "JS" },
  ],
  "OXC lazy + Yuku walk": [
    { name: "parse + lazy AST setup", runtime: "native + JS" },
    { name: "plugin transform", runtime: "JS (includes lazy ESTree reads)" },
    { name: "codegen", runtime: "JS (includes lazy ESTree reads)" },
    { name: "dispose", runtime: "native + JS" },
  ],
  "OXC raw transfer + Yuku walk": [
    { name: "parse + raw AST transfer", runtime: "native + JS" },
    { name: "plugin transform", runtime: "JS" },
    { name: "codegen", runtime: "JS" },
  ],
};

export function profileStageDefinitions(
  name: StyledComponentsTransformerName,
): readonly ProfileStageDefinition[] {
  return PROFILE_STAGE_DEFINITIONS[name];
}

function durationNs(start: bigint, end: bigint): number {
  const duration = Number(end - start);
  if (!Number.isSafeInteger(duration) || duration < 0) {
    throw new RangeError("profile stage duration is outside the safe integer range");
  }
  return duration;
}

function profileBabel(file: StyledComponentsCorpusFile): ProfileIteration {
  const start = process.hrtime.bigint();
  const parsed = babelParseSync(file.source, {
    babelrc: false,
    configFile: false,
    filename: file.filename,
    parserOpts: {
      attachComment: false,
      plugins: ["jsx"],
      sourceType: "module",
    },
  });
  const parsedAt = process.hrtime.bigint();
  if (parsed === null) throw new Error("Babel did not return a parsed AST");

  const transformed = babelTransformFromAstSync(parsed, file.source, {
    ast: true,
    babelrc: false,
    cloneInputAst: false,
    code: false,
    configFile: false,
    filename: file.filename,
    plugins: [[babelStyledComponentsPlugin, STYLED_COMPONENTS_OPTIONS]],
    sourceMaps: false,
  });
  const transformedAt = process.hrtime.bigint();
  if (transformed?.ast == null) throw new Error("Babel plugin did not return an AST");

  const generated = babelTransformFromAstSync(transformed.ast, file.source, {
    ast: false,
    babelrc: false,
    cloneInputAst: false,
    code: true,
    comments: true,
    compact: false,
    configFile: false,
    filename: file.filename,
    sourceMaps: false,
  });
  const generatedAt = process.hrtime.bigint();
  if (generated?.code == null) throw new Error("Babel did not generate code");

  return {
    durationsNs: [
      durationNs(start, parsedAt),
      durationNs(parsedAt, transformedAt),
      durationNs(transformedAt, generatedAt),
    ],
    output: generated.code,
  };
}

function profileSwc(file: StyledComponentsCorpusFile): ProfileIteration {
  const start = process.hrtime.bigint();
  const output = transformStyledComponentsFor("SWC + WASM plugin", file);
  const generatedAt = process.hrtime.bigint();
  return {
    durationsNs: [durationNs(start, generatedAt)],
    output,
  };
}

function profileSwcNext(
  file: StyledComponentsCorpusFile,
  plugin: typeof transformStyledComponentsYuku | typeof transformStyledComponentsZimmerframe | typeof transformStyledComponentsSwcNext
    = transformStyledComponentsSwcNext,
  codegen: "swc-next" | "oxc" = "swc-next",
): ProfileIteration {
  const start = process.hrtime.bigint();
  const parsed = swcNextParseSync(file.source, {
    comments: "none",
    lang: "jsx",
    preserveParens: true,
    sourceType: "module",
  });
  const parsedAt = process.hrtime.bigint();
  if (parsed.diagnostics.length > 0) {
    throw new Error(`SWC Next parser failed: ${parsed.diagnostics[0]!.message}`);
  }
  const program = parsed.program as Program;
  const decodedAt = process.hrtime.bigint();
  const transformed = plugin(
    program,
    file.source,
    file.filename,
    STYLED_COMPONENTS_OPTIONS,
  );
  const transformedAt = process.hrtime.bigint();
  const output = codegen === "oxc"
    ? printEstreeProgramWithOxc(transformed ?? program)
    : swcNextPrintSync((transformed ?? program) as unknown as typeof parsed.program, {}, parsed.meta).code;
  const generatedAt = process.hrtime.bigint();

  return {
    durationsNs: [
      durationNs(start, parsedAt),
      durationNs(parsedAt, decodedAt),
      durationNs(decodedAt, transformedAt),
      durationNs(transformedAt, generatedAt),
    ],
    output,
  };
}

function profileYuku(
  file: StyledComponentsCorpusFile,
  codegen: "oxc" | "yuku",
): ProfileIteration {
  const start = process.hrtime.bigint();
  const parsed = yukuParse(file.source, {
    attachComments: false,
    lang: "jsx",
    sourceType: "module",
  });
  const parsedAt = process.hrtime.bigint();
  const program = parsed.program;
  const decodedAt = process.hrtime.bigint();
  transformStyledComponentsYuku(
    program,
    file.source,
    file.filename,
    STYLED_COMPONENTS_OPTIONS,
  );
  const transformedAt = process.hrtime.bigint();
  if (codegen === "oxc") {
    const output = printEstreeProgramWithOxc(program);
    const generatedAt = process.hrtime.bigint();
    return {
      durationsNs: [
        durationNs(start, parsedAt),
        durationNs(parsedAt, decodedAt),
        durationNs(decodedAt, transformedAt),
        durationNs(transformedAt, generatedAt),
      ],
      output,
    };
  }
  const generated = yukuGenerate(program, { comments: "some", format: "pretty" });
  const generatedAt = process.hrtime.bigint();
  if (generated.diagnostics.length > 0) {
    throw new Error(`Yuku codegen failed: ${generated.diagnostics[0]!.message}`);
  }
  return {
    durationsNs: [
      durationNs(start, parsedAt),
      durationNs(parsedAt, decodedAt),
      durationNs(decodedAt, transformedAt),
      durationNs(transformedAt, generatedAt),
    ],
    output: generated.code,
  };
}

function profileOxc(
  file: StyledComponentsCorpusFile,
  rawTransfer: boolean,
): ProfileIteration {
  if (rawTransfer && !rawTransferSupported()) {
    throw new Error("OXC experimentalRawTransfer is not supported on this platform");
  }
  const start = process.hrtime.bigint();
  const options = {
    experimentalRawTransfer: rawTransfer,
    lang: "jsx",
    sourceType: "module",
  } as const;
  const parsed = oxcParseSync(file.filename, file.source, options as never);
  const parsedAt = process.hrtime.bigint();
  if (parsed.errors.length > 0) {
    throw new Error(`OXC parser failed: ${parsed.errors[0]!.message}`);
  }
  transformStyledComponentsYuku(
    parsed.program as unknown as Program,
    file.source,
    file.filename,
    STYLED_COMPONENTS_OPTIONS,
  );
  const transformedAt = process.hrtime.bigint();
  const output = oxcPrintSync(parsed.program, { jsx: true }).code;
  const generatedAt = process.hrtime.bigint();

  return {
    durationsNs: [
      durationNs(start, parsedAt),
      durationNs(parsedAt, transformedAt),
      durationNs(transformedAt, generatedAt),
    ],
    output,
  };
}

function profileOxcLazy(file: StyledComponentsCorpusFile): ProfileIteration {
  const start = process.hrtime.bigint();
  const parsed = parseLazyEstree(file.filename, file.source);
  const parsedAt = process.hrtime.bigint();
  let output: string;
  let transformedAt: bigint;
  let generatedAt: bigint;
  try {
    if (parsed.errors.length > 0) throw new Error(`OXC lazy parser failed: ${parsed.errors[0]!.message}`);
    transformStyledComponentsYuku(parsed.program, file.source, file.filename, STYLED_COMPONENTS_OPTIONS);
    transformedAt = process.hrtime.bigint();
    output = printEstreeProgramWithOxc(parsed.program);
    generatedAt = process.hrtime.bigint();
  } finally {
    parsed.dispose();
  }
  return {
    output,
    durationsNs: [
      durationNs(start, parsedAt),
      durationNs(parsedAt, transformedAt),
      durationNs(transformedAt, generatedAt),
      durationNs(generatedAt, process.hrtime.bigint()),
    ],
  };
}

export function profileStyledComponentsOnce(
  name: StyledComponentsTransformerName,
  file: StyledComponentsCorpusFile,
): ProfileIteration {
  switch (name) {
    case "Babel + JS plugin":
      return profileBabel(file);
    case "SWC + WASM plugin":
      return profileSwc(file);
    case "SWC Next + SWC Next walker":
      return profileSwcNext(file);
    case "SWC Next + OXC codegen":
      return profileSwcNext(file, transformStyledComponentsSwcNext, "oxc");
    case "SWC Next + Yuku walk":
      return profileSwcNext(file, transformStyledComponentsYuku);
    case "SWC Next + Zimmerframe":
      return profileSwcNext(file, transformStyledComponentsZimmerframe);
    case "Yuku + JS plugin":
      return profileYuku(file, "yuku");
    case "Yuku + OXC codegen":
      return profileYuku(file, "oxc");
    case "OXC + Yuku walk plugin":
      return profileOxc(file, false);
    case "OXC raw transfer + Yuku walk":
      return profileOxc(file, true);
    case "OXC lazy + Yuku walk":
      return profileOxcLazy(file);
  }
}
