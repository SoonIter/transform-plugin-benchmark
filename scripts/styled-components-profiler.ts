import {
  parseSync as babelParseSync,
  transformFromAstSync as babelTransformFromAstSync,
} from "@babel/core";
import babelStyledComponentsPlugin from "babel-plugin-styled-components";
import { printSync as oxcPrintSync } from "oxc-codegen";
import { parseSync as oxcParseSync, rawTransferSupported } from "oxc-parser";
import yukuCodegenBinding from "yuku-codegen/binding.js";
import { encode as yukuEncode } from "yuku-codegen/encode.js";
import yukuParserBinding from "yuku-parser/binding.js";
import { decode as yukuDecode } from "yuku-parser/decode.js";
import type { Program } from "yuku-parser";
import type { StyledComponentsCorpusFile } from "./styled-components-corpus";
import {
  STYLED_COMPONENTS_OPTIONS,
  transformStyledComponentsFor,
  type StyledComponentsTransformerName,
} from "./styled-components-transformers";
import { transformStyledComponentsYuku } from "./yuku-styled-components-plugin";

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
  "Yuku + JS plugin": [
    { name: "source encode", runtime: "JS" },
    { name: "parse", runtime: "native" },
    { name: "AST decode", runtime: "JS" },
    { name: "plugin transform", runtime: "JS" },
    { name: "AST encode", runtime: "JS" },
    { name: "codegen", runtime: "native" },
  ],
  "OXC + Yuku walk plugin": [
    { name: "parse + AST transfer", runtime: "native + JS" },
    { name: "plugin transform", runtime: "JS" },
    { name: "codegen", runtime: "JS" },
  ],
  "OXC raw transfer + Yuku walk": [
    { name: "parse + raw AST transfer", runtime: "native + JS" },
    { name: "plugin transform", runtime: "JS" },
    { name: "codegen", runtime: "JS" },
  ],
};

const sourceEncoder = new TextEncoder();

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

function profileYuku(file: StyledComponentsCorpusFile): ProfileIteration {
  const start = process.hrtime.bigint();
  const sourceBytes = sourceEncoder.encode(file.source);
  const sourceEncodedAt = process.hrtime.bigint();
  const buffer = yukuParserBinding.parse(sourceBytes, {
    attachComments: false,
    lang: "jsx",
    sourceType: "module",
  });
  const parsedAt = process.hrtime.bigint();
  const parsed = yukuDecode(buffer, file.source);
  const program = parsed.program;
  const decodedAt = process.hrtime.bigint();
  transformStyledComponentsYuku(
    program,
    file.source,
    file.filename,
    STYLED_COMPONENTS_OPTIONS,
  );
  const transformedAt = process.hrtime.bigint();
  const encoded = yukuEncode(program);
  const encodedAt = process.hrtime.bigint();
  const generated = yukuCodegenBinding.generate(encoded, {
    comments: "some",
    format: "pretty",
  });
  const generatedAt = process.hrtime.bigint();
  if (generated.errors.length > 0) {
    throw new Error(`Yuku codegen failed: ${generated.errors[0]!.message}`);
  }

  return {
    durationsNs: [
      durationNs(start, sourceEncodedAt),
      durationNs(sourceEncodedAt, parsedAt),
      durationNs(parsedAt, decodedAt),
      durationNs(decodedAt, transformedAt),
      durationNs(transformedAt, encodedAt),
      durationNs(encodedAt, generatedAt),
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
  const output = oxcPrintSync(parsed.program, { jsx: true });
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

export function profileStyledComponentsOnce(
  name: StyledComponentsTransformerName,
  file: StyledComponentsCorpusFile,
): ProfileIteration {
  switch (name) {
    case "Babel + JS plugin":
      return profileBabel(file);
    case "SWC + WASM plugin":
      return profileSwc(file);
    case "Yuku + JS plugin":
      return profileYuku(file);
    case "OXC + Yuku walk plugin":
      return profileOxc(file, false);
    case "OXC raw transfer + Yuku walk":
      return profileOxc(file, true);
  }
}
