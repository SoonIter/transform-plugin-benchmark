import {
  parseSync as babelParseSync,
  transformFromAstSync as babelTransformFromAstSync,
} from "@babel/core";
import {
  parseSync as swcParseSync,
  transformSync as swcTransformSync,
} from "@swc/core";
import babelStyledComponentsPlugin from "babel-plugin-styled-components";
import { printSync as oxcPrintSync } from "oxc-codegen";
import { parseSync as oxcParseSync, rawTransferSupported } from "oxc-parser";
import yukuCodegenBinding from "yuku-codegen/binding.js";
import { encode as yukuEncode } from "yuku-codegen/encode.js";
import yukuParserBinding from "yuku-parser/binding.js";
import { decode as yukuDecode } from "yuku-parser/decode.js";
import type { Program } from "yuku-parser";
import { STYLED_COMPONENTS_FILENAME } from "./styled-components-fixture";
import {
  STYLED_COMPONENTS_OPTIONS,
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
    { name: "parse + AST transfer", runtime: "native + JS" },
    {
      name: "AST transfer + plugin + codegen",
      runtime: "JS + WASM + native",
    },
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
  "OXC + OXC Visitor plugin": [
    { name: "parse + AST transfer", runtime: "native + JS" },
    { name: "plugin transform", runtime: "JS, OXC Visitor" },
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

function profileBabel(source: string): ProfileIteration {
  const start = process.hrtime.bigint();
  const parsed = babelParseSync(source, {
    babelrc: false,
    configFile: false,
    filename: STYLED_COMPONENTS_FILENAME,
    parserOpts: {
      attachComment: false,
      plugins: ["jsx"],
      sourceType: "module",
    },
  });
  const parsedAt = process.hrtime.bigint();
  if (parsed === null) throw new Error("Babel did not return a parsed AST");

  const transformed = babelTransformFromAstSync(parsed, source, {
    ast: true,
    babelrc: false,
    cloneInputAst: false,
    code: false,
    configFile: false,
    filename: STYLED_COMPONENTS_FILENAME,
    plugins: [[babelStyledComponentsPlugin, STYLED_COMPONENTS_OPTIONS]],
    sourceMaps: false,
  });
  const transformedAt = process.hrtime.bigint();
  if (transformed?.ast == null) throw new Error("Babel plugin did not return an AST");

  const generated = babelTransformFromAstSync(transformed.ast, source, {
    ast: false,
    babelrc: false,
    cloneInputAst: false,
    code: true,
    comments: true,
    compact: false,
    configFile: false,
    filename: STYLED_COMPONENTS_FILENAME,
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

function profileSwc(source: string): ProfileIteration {
  const start = process.hrtime.bigint();
  const parsed = swcParseSync(source, {
    comments: false,
    jsx: true,
    syntax: "ecmascript",
  });
  const parsedAt = process.hrtime.bigint();
  const generated = swcTransformSync(parsed, {
    filename: STYLED_COMPONENTS_FILENAME,
    jsc: {
      experimental: {
        plugins: [["@swc/plugin-styled-components", STYLED_COMPONENTS_OPTIONS]],
      },
      target: "es2022",
    },
    minify: false,
    module: { type: "es6" },
    sourceMaps: false,
  });
  const generatedAt = process.hrtime.bigint();

  return {
    durationsNs: [
      durationNs(start, parsedAt),
      durationNs(parsedAt, generatedAt),
    ],
    output: generated.code,
  };
}

function profileYuku(source: string): ProfileIteration {
  const start = process.hrtime.bigint();
  const sourceBytes = sourceEncoder.encode(source);
  const sourceEncodedAt = process.hrtime.bigint();
  const buffer = yukuParserBinding.parse(sourceBytes, {
    attachComments: false,
    lang: "jsx",
    sourceType: "module",
  });
  const parsedAt = process.hrtime.bigint();
  const parsed = yukuDecode(buffer, source);
  const program = parsed.program;
  const decodedAt = process.hrtime.bigint();
  transformStyledComponentsYuku(
    program,
    source,
    STYLED_COMPONENTS_FILENAME,
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
  source: string,
  walker: "yuku" | "oxc",
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
  const parsed = oxcParseSync(STYLED_COMPONENTS_FILENAME, source, options as never);
  const parsedAt = process.hrtime.bigint();
  if (parsed.errors.length > 0) {
    throw new Error(`OXC parser failed: ${parsed.errors[0]!.message}`);
  }
  transformStyledComponentsYuku(
    parsed.program as unknown as Program,
    source,
    STYLED_COMPONENTS_FILENAME,
    STYLED_COMPONENTS_OPTIONS,
    walker,
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
  source: string,
): ProfileIteration {
  switch (name) {
    case "Babel + JS plugin":
      return profileBabel(source);
    case "SWC + WASM plugin":
      return profileSwc(source);
    case "Yuku + JS plugin":
      return profileYuku(source);
    case "OXC + Yuku walk plugin":
      return profileOxc(source, "yuku", false);
    case "OXC raw transfer + Yuku walk":
      return profileOxc(source, "yuku", true);
    case "OXC + OXC Visitor plugin":
      return profileOxc(source, "oxc", false);
  }
}
