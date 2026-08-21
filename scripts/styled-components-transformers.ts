import { transformSync as babelTransformSync } from "@babel/core";
import { transformSync as swcTransformSync } from "@swc/core";
import babelStyledComponentsPlugin from "babel-plugin-styled-components";
import { printSync as oxcPrintSync } from "oxc-codegen";
import { parseSync as oxcParseSync, rawTransferSupported } from "oxc-parser";
import { walk } from "yuku-ast";
import { generate as yukuGenerate } from "yuku-codegen";
import { parse as yukuParse, type Program } from "yuku-parser";
import type {
  StyledComponentsCorpus,
  StyledComponentsCorpusFile,
} from "./styled-components-corpus";
import {
  transformStyledComponentsYuku,
  type YukuStyledComponentsOptions,
} from "./yuku-styled-components-plugin";

export const STYLED_COMPONENTS_OPTIONS = {
  cssProp: true,
  displayName: true,
  fileName: true,
  meaninglessFileNames: ["index"],
  minify: true,
  namespace: "",
  pure: true,
  ssr: true,
  topLevelImportPaths: [],
  transpileTemplateLiterals: true,
} satisfies YukuStyledComponentsOptions;

export const STYLED_COMPONENTS_TRANSFORMERS = [
  "Babel + JS plugin",
  "SWC + WASM plugin",
  "Yuku + JS plugin",
  "OXC + Yuku walk plugin",
  "OXC raw transfer + Yuku walk",
] as const;

export type StyledComponentsTransformerName =
  (typeof STYLED_COMPONENTS_TRANSFORMERS)[number];

export interface StyledComponentsOutput {
  code: string;
  relativePath: string;
}

export interface StyledComponentsValidation {
  componentIds: number;
  displayNames: number;
  files: number;
  jsxElements: number;
  outputBytes: number;
  outputCodeUnits: number;
  pureAnnotations: number;
  taggedTemplates: number;
  uniqueComponentIds: number;
  withConfigCalls: number;
}

function transformBabel(file: StyledComponentsCorpusFile): string {
  const result = babelTransformSync(file.source, {
    ast: false,
    babelrc: false,
    code: true,
    comments: true,
    compact: false,
    configFile: false,
    filename: file.filename,
    parserOpts: {
      attachComment: false,
      sourceType: "module",
    },
    plugins: [[babelStyledComponentsPlugin, STYLED_COMPONENTS_OPTIONS]],
    sourceMaps: false,
  });
  if (result?.code == null) throw new Error("Babel did not generate code");
  return result.code;
}

function transformSwc(file: StyledComponentsCorpusFile): string {
  return swcTransformSync(file.source, {
    filename: file.filename,
    jsc: {
      experimental: {
        plugins: [["@swc/plugin-styled-components", STYLED_COMPONENTS_OPTIONS]],
      },
      parser: {
        jsx: true,
        syntax: "ecmascript",
      },
      target: "es2022",
    },
    minify: false,
    module: { type: "es6" },
    sourceMaps: false,
  }).code;
}

function transformYuku(file: StyledComponentsCorpusFile): string {
  const parsed = yukuParse(file.source, {
    attachComments: false,
    lang: "jsx",
    sourceType: "module",
  });
  transformStyledComponentsYuku(
    parsed.program,
    file.source,
    file.filename,
    STYLED_COMPONENTS_OPTIONS,
  );
  const result = yukuGenerate(parsed.program, {
    comments: "some",
    format: "pretty",
  });
  if (result.errors.length > 0) {
    throw new Error(`Yuku codegen failed: ${result.errors[0]!.message}`);
  }
  return result.code;
}

function transformOxc(
  file: StyledComponentsCorpusFile,
  rawTransfer: boolean,
): string {
  if (rawTransfer && !rawTransferSupported()) {
    throw new Error("OXC experimentalRawTransfer is not supported on this platform");
  }
  const options = {
    experimentalRawTransfer: rawTransfer,
    lang: "jsx",
    sourceType: "module",
  } as const;
  const parsed = oxcParseSync(file.filename, file.source, options as never);
  if (parsed.errors.length > 0) {
    throw new Error(`OXC parser failed: ${parsed.errors[0]!.message}`);
  }
  transformStyledComponentsYuku(
    parsed.program as unknown as Program,
    file.source,
    file.filename,
    STYLED_COMPONENTS_OPTIONS,
  );
  return oxcPrintSync(parsed.program, { jsx: true });
}

export function transformStyledComponentsFor(
  name: StyledComponentsTransformerName,
  file: StyledComponentsCorpusFile,
): string {
  switch (name) {
    case "Babel + JS plugin":
      return transformBabel(file);
    case "SWC + WASM plugin":
      return transformSwc(file);
    case "Yuku + JS plugin":
      return transformYuku(file);
    case "OXC + Yuku walk plugin":
      return transformOxc(file, false);
    case "OXC raw transfer + Yuku walk":
      return transformOxc(file, true);
  }
}

export function transformStyledComponentsCorpusFor(
  name: StyledComponentsTransformerName,
  corpus: StyledComponentsCorpus,
): StyledComponentsOutput[] {
  return corpus.files.map((file) => ({
    code: transformStyledComponentsFor(name, file),
    relativePath: file.relativePath,
  }));
}

function countMatches(source: string, pattern: RegExp): number {
  return source.match(pattern)?.length ?? 0;
}

export function validateStyledComponentsOutputs(
  name: StyledComponentsTransformerName,
  outputs: StyledComponentsOutput[],
): StyledComponentsValidation {
  const componentIdValues: string[] = [];
  const validation: StyledComponentsValidation = {
    componentIds: 0,
    displayNames: 0,
    files: outputs.length,
    jsxElements: 0,
    outputBytes: 0,
    outputCodeUnits: 0,
    pureAnnotations: 0,
    taggedTemplates: 0,
    uniqueComponentIds: 0,
    withConfigCalls: 0,
  };

  for (const output of outputs) {
    if (output.code.length === 0) {
      throw new Error(`${name} generated an empty output for ${output.relativePath}`);
    }
    const reparsed = yukuParse(output.code, {
      lang: "jsx",
      sourceType: "module",
    });
    if (reparsed.diagnostics.length > 0) {
      throw new Error(
        `${name} generated invalid code for ${output.relativePath}: ` +
          reparsed.diagnostics[0]!.message,
      );
    }
    walk(reparsed.program, {
      JSXElement() {
        validation.jsxElements++;
      },
      TaggedTemplateExpression() {
        validation.taggedTemplates++;
      },
    });
    componentIdValues.push(
      ...Array.from(
        output.code.matchAll(/\bcomponentId\s*:\s*["'`]([^"'`]+)["'`]/g),
        (match) => match[1]!,
      ),
    );
    validation.displayNames += countMatches(output.code, /\bdisplayName\s*:/g);
    validation.outputBytes += Buffer.byteLength(output.code);
    validation.outputCodeUnits += output.code.length;
    validation.pureAnnotations += countMatches(output.code, /#__PURE__/g);
    validation.withConfigCalls += countMatches(output.code, /\.withConfig\s*\(/g);
  }

  validation.componentIds = componentIdValues.length;
  validation.uniqueComponentIds = new Set(componentIdValues).size;
  if (validation.withConfigCalls === 0) {
    throw new Error(`${name} did not transform any styled components`);
  }
  if (validation.displayNames !== validation.withConfigCalls) {
    throw new Error(`${name} did not add a display name to every transformed component`);
  }
  if (validation.componentIds !== validation.withConfigCalls) {
    throw new Error(`${name} did not add an ID to every transformed component`);
  }
  if (validation.uniqueComponentIds !== validation.componentIds) {
    throw new Error(`${name} generated duplicate component IDs`);
  }
  if (validation.taggedTemplates !== 0) {
    throw new Error(`${name} left styled tagged templates in the corpus output`);
  }
  if (name.startsWith("OXC")) {
    if (validation.pureAnnotations !== 0) {
      throw new Error(`${name} unexpectedly emitted comments`);
    }
  } else if (validation.pureAnnotations < validation.withConfigCalls) {
    throw new Error(`${name} did not annotate every transformed component as pure`);
  }
  return validation;
}

export function assertComparableStyledComponentsFeatures(
  validations: StyledComponentsValidation[],
): void {
  const first = validations[0];
  if (first === undefined) throw new Error("No styled-components output was validated");
  for (const validation of validations.slice(1)) {
    if (
      validation.componentIds !== first.componentIds ||
      validation.displayNames !== first.displayNames ||
      validation.taggedTemplates !== first.taggedTemplates ||
      validation.uniqueComponentIds !== first.uniqueComponentIds ||
      validation.withConfigCalls !== first.withConfigCalls
    ) {
      throw new Error("Styled-components feature coverage differs between transformers");
    }
  }
}
