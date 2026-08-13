import { transformSync as babelTransformSync } from "@babel/core";
import { transformSync as swcTransformSync } from "@swc/core";
import babelStyledComponentsPlugin from "babel-plugin-styled-components";
import { printSync as oxcPrintSync } from "oxc-codegen";
import { parseSync as oxcParseSync, rawTransferSupported } from "oxc-parser";
import { walk } from "yuku-ast";
import { generate as yukuGenerate } from "yuku-codegen";
import { parse as yukuParse, type Program } from "yuku-parser";
import type { StyledComponentsFixture } from "./styled-components-fixture";
import { STYLED_COMPONENTS_FILENAME } from "./styled-components-fixture";
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
  "OXC + OXC Visitor plugin",
  "OXC raw transfer + OXC Visitor",
] as const;

export type StyledComponentsTransformerName =
  (typeof STYLED_COMPONENTS_TRANSFORMERS)[number];

export interface StyledComponentsValidation {
  componentIds: number;
  displayNames: number;
  minifiedRules: number;
  outputBytes: number;
  outputCodeUnits: number;
  pureAnnotations: number;
  taggedTemplates: number;
  uniqueComponentIds: number;
  withConfigCalls: number;
}

export function transformStyledComponentsBabel(source: string): string {
  const result = babelTransformSync(source, {
    ast: false,
    babelrc: false,
    code: true,
    comments: true,
    compact: false,
    configFile: false,
    filename: STYLED_COMPONENTS_FILENAME,
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

export function transformStyledComponentsSwc(source: string): string {
  return swcTransformSync(source, {
    filename: STYLED_COMPONENTS_FILENAME,
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

export function transformStyledComponentsYukuPipeline(source: string): string {
  const parsed = yukuParse(source, {
    attachComments: false,
    lang: "jsx",
    sourceType: "module",
  });
  transformStyledComponentsYuku(
    parsed.program,
    source,
    STYLED_COMPONENTS_FILENAME,
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

function transformStyledComponentsOxcPipeline(
  source: string,
  walker: "yuku" | "oxc",
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
  const parsed = oxcParseSync(STYLED_COMPONENTS_FILENAME, source, options as never);
  if (parsed.errors.length > 0) {
    throw new Error(`OXC parser failed: ${parsed.errors[0]!.message}`);
  }
  const program = parsed.program as unknown as Program;
  transformStyledComponentsYuku(
    program,
    source,
    STYLED_COMPONENTS_FILENAME,
    STYLED_COMPONENTS_OPTIONS,
    walker,
  );
  return oxcPrintSync(parsed.program, { jsx: true });
}

export function transformStyledComponentsFor(
  name: StyledComponentsTransformerName,
  source: string,
): string {
  switch (name) {
    case "Babel + JS plugin":
      return transformStyledComponentsBabel(source);
    case "SWC + WASM plugin":
      return transformStyledComponentsSwc(source);
    case "Yuku + JS plugin":
      return transformStyledComponentsYukuPipeline(source);
    case "OXC + Yuku walk plugin":
      return transformStyledComponentsOxcPipeline(source, "yuku", false);
    case "OXC raw transfer + Yuku walk":
      return transformStyledComponentsOxcPipeline(source, "yuku", true);
    case "OXC + OXC Visitor plugin":
      return transformStyledComponentsOxcPipeline(source, "oxc", false);
    case "OXC raw transfer + OXC Visitor":
      return transformStyledComponentsOxcPipeline(source, "oxc", true);
  }
}

function countMatches(source: string, pattern: RegExp): number {
  return source.match(pattern)?.length ?? 0;
}

export function validateStyledComponentsOutput(
  name: StyledComponentsTransformerName,
  output: string,
  fixture: StyledComponentsFixture,
): StyledComponentsValidation {
  if (output.length === 0) throw new Error(`${name} generated empty output`);

  const reparsed = yukuParse(output, { lang: "jsx", sourceType: "module" });
  if (reparsed.diagnostics.length > 0) {
    throw new Error(`${name} generated invalid JavaScript: ${reparsed.diagnostics[0]!.message}`);
  }

  let taggedTemplates = 0;
  walk(reparsed.program, {
    TaggedTemplateExpression() {
      taggedTemplates++;
    },
  });

  const componentIdValues = Array.from(
    output.matchAll(/\bcomponentId\s*:\s*["'`]([^"'`]+)["'`]/g),
    (match) => match[1]!,
  );
  const validation: StyledComponentsValidation = {
    componentIds: componentIdValues.length,
    displayNames: countMatches(output, /\bdisplayName\s*:/g),
    minifiedRules: countMatches(output, /display:grid/g),
    outputBytes: Buffer.byteLength(output),
    outputCodeUnits: output.length,
    pureAnnotations: countMatches(output, /#__PURE__/g),
    taggedTemplates,
    uniqueComponentIds: new Set(componentIdValues).size,
    withConfigCalls: countMatches(output, /\.withConfig\s*\(/g),
  };

  if (validation.withConfigCalls !== fixture.transformedComponentCount) {
    throw new Error(
      `${name} generated ${validation.withConfigCalls} withConfig calls, ` +
        `expected ${fixture.transformedComponentCount}`,
    );
  }
  if (validation.displayNames !== fixture.transformedComponentCount) {
    throw new Error(
      `${name} generated ${validation.displayNames} display names, ` +
        `expected ${fixture.transformedComponentCount}`,
    );
  }
  if (validation.componentIds !== fixture.transformedComponentCount) {
    throw new Error(
      `${name} generated ${validation.componentIds} component IDs, ` +
        `expected ${fixture.transformedComponentCount}`,
    );
  }
  if (validation.uniqueComponentIds !== fixture.transformedComponentCount) {
    throw new Error(`${name} generated duplicate component IDs`);
  }
  const pureAnnotationsMinimum = fixture.transformedComponentCount + 3;
  if (name.startsWith("OXC")) {
    if (validation.pureAnnotations !== 0) {
      throw new Error(`${name} unexpectedly emitted comments`);
    }
  } else if (validation.pureAnnotations < pureAnnotationsMinimum) {
    throw new Error(
      `${name} generated ${validation.pureAnnotations} PURE annotations, ` +
        `expected at least ${pureAnnotationsMinimum}`,
    );
  }
  if (validation.taggedTemplates !== 0) {
    throw new Error(`${name} left ${validation.taggedTemplates} tagged templates`);
  }
  if (validation.minifiedRules < fixture.styledComponentCount) {
    throw new Error(`${name} did not minify every display rule`);
  }
  return validation;
}
