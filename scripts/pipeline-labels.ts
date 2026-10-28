/** Package versions recorded with a benchmark, not the currently installed versions. */
export interface PipelineVersions {
  yukuCodegen?: string;
}

export interface PipelineMetadata {
  parser: string;
  plugin: string;
  codegen: string;
  lines: readonly [string, string, string];
  fullLabel: string;
}

function yukuCodegenLabel(versions?: PipelineVersions): string {
  // Keep committed 0.8.5 measurements native; 0.18.0 uses the JS generator.
  // Do not infer the runtime of other historical versions from today's install.
  if (versions?.yukuCodegen === "0.8.5") return "Yuku codegen (native)";
  if (versions === undefined || versions.yukuCodegen === "0.18.0") {
    return "Yuku codegen (JS)";
  }
  return "Yuku codegen";
}

/** Resolve presentation metadata without changing the stable benchmark name. */
export function pipelineMetadata(
  name: string,
  versions?: PipelineVersions,
): PipelineMetadata {
  let parser: string;
  let plugin = "styled-components plugin (JS, Yuku walk)";
  let codegen: string;
  switch (name) {
    case "Babel + JS plugin":
      parser = "Babel parser (JS, JSX)";
      plugin = "styled-components plugin (JS, Babel traverse)";
      codegen = "Babel codegen (JS)";
      break;
    case "SWC + WASM plugin":
      parser = "SWC parser (native, JSX)";
      plugin = "styled-components plugin (WASM, SWC visitor)";
      codegen = "SWC codegen (native)";
      break;
    case "SWC Next + OXC codegen":
    case "SWC Next + SWC Next walker":
    case "SWC Next + Yuku walk":
    case "SWC Next + Zimmerframe":
      parser = "SWC Next parser (binary AST transfer)";
      if (name === "SWC Next + SWC Next walker" || name === "SWC Next + OXC codegen") {
        plugin = "styled-components plugin (JS, @swc-next/walker)";
      } else if (name === "SWC Next + Zimmerframe") {
        plugin = "styled-components plugin (JS, Zimmerframe)";
      }
      codegen = name === "SWC Next + OXC codegen"
        ? "OXC codegen (JS)"
        : "SWC Next codegen (JS encode + native)";
      break;
    case "Yuku + JS plugin":
    case "Yuku + OXC codegen":
      parser = "Yuku parser (binary AST transfer)";
      codegen = name === "Yuku + JS plugin"
        ? yukuCodegenLabel(versions)
        : "OXC codegen (JS)";
      break;
    case "OXC + Yuku walk plugin":
      parser = "OXC parser (default JSON transfer)";
      codegen = "OXC codegen (JS)";
      break;
    case "OXC raw transfer + Yuku walk":
      parser = "OXC parser (experimentalRawTransfer)";
      codegen = "OXC codegen (JS)";
      break;
    case "OXC lazy + Yuku walk":
      parser = "OXC parser (experimentalLazy + ESTree adapter)";
      codegen = "OXC codegen (JS)";
      break;
    default:
      throw new Error(`Missing pipeline metadata for ${name}`);
  }
  const lines = [parser, plugin, codegen] as const;
  return { parser, plugin, codegen, lines, fullLabel: lines.join(" + ") };
}
