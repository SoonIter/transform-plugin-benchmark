import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

interface TransformResult {
  median: number;
  name: string;
}

interface ProfileStage {
  name: string;
  share: number;
}

interface ProfileResult {
  name: string;
  stages: ProfileStage[];
}

interface BenchmarkResult {
  profile: {
    results: ProfileResult[];
  };
  results: TransformResult[];
}

const COLORS = {
  babel: "#8b5cf6",
  oxc: "#22c55e",
  swc: "#3b82f6",
  yuku: "#f97316",
} as const;

const STAGE_COLORS = new Map([
  ["Source encode", "#facc15"],
  ["Parse", "#38bdf8"],
  ["Parse + AST transfer", "#60a5fa"],
  ["AST decode", "#34d399"],
  ["Babel JS plugin", "#8b5cf6"],
  ["Yuku JS plugin", "#ec4899"],
  ["AST encode", "#fb923c"],
  ["Codegen", "#84cc16"],
  ["AST transfer + WASM plugin + codegen", "#2563eb"],
]);

function escapeXML(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function transformerColor(name: string): string {
  if (name.startsWith("Babel")) return COLORS.babel;
  if (name.startsWith("OXC")) return COLORS.oxc;
  if (name.startsWith("SWC")) return COLORS.swc;
  return COLORS.yuku;
}

function stageCategory(transformer: string, stage: ProfileStage): string {
  if (stage.name === "source encode") return "Source encode";
  if (stage.name === "AST decode") return "AST decode";
  if (stage.name === "AST encode") return "AST encode";
  if (stage.name === "parse + AST transfer") return "Parse + AST transfer";
  if (stage.name === "AST transfer + plugin + codegen") {
    return "AST transfer + WASM plugin + codegen";
  }
  if (stage.name === "parse") return "Parse";
  if (stage.name === "codegen") return "Codegen";
  if (transformer.startsWith("Babel")) return "Babel JS plugin";
  return "Yuku JS plugin";
}

function latencyChart(results: TransformResult[]): string {
  const width = 1_200;
  const height = 90 + results.length * 100;
  const labelWidth = 260;
  const chartWidth = 810;
  const maximum = Math.max(...results.map((result) => result.median));
  const rows = results.map((result, index) => {
    const y = 72 + index * 100;
    const barWidth = (result.median / maximum) * chartWidth;
    return `
      <text x="${labelWidth - 20}" y="${y + 31}" text-anchor="end" class="label">
        ${escapeXML(result.name)}
      </text>
      <rect x="${labelWidth}" y="${y}" width="${barWidth.toFixed(2)}" height="58"
        rx="8" fill="${transformerColor(result.name)}" />
      <text x="${(labelWidth + barWidth + 18).toFixed(2)}" y="${y + 36}" class="value">
        ${result.median.toFixed(2)} ms
      </text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"
    viewBox="0 0 ${width} ${height}" role="img"
    aria-label="Styled-components transform latency, lower is better">
    <style>
      .title { fill: #e5e7eb; font: 700 24px system-ui, sans-serif; }
      .label { fill: #d1d5db; font: 600 20px system-ui, sans-serif; }
      .value { fill: #f9fafb; font: 700 19px ui-monospace, monospace; }
      .note { fill: #9ca3af; font: 15px system-ui, sans-serif; }
    </style>
    <rect width="100%" height="100%" rx="14" fill="#111827" />
    <text x="36" y="42" class="title">End-to-end latency</text>
    <text x="1160" y="42" text-anchor="end" class="note">lower is better</text>
    ${rows.join("\n").trim()}
  </svg>\n`;
}

function stageChart(profiles: ProfileResult[]): string {
  const width = 1_400;
  const axisY = 78 + profiles.length * 114;
  const height = axisY + 190;
  const labelWidth = 260;
  const chartWidth = 1_080;
  const categories = Array.from(STAGE_COLORS.keys());
  const rows = profiles.map((profile, index) => {
    const y = 78 + index * 114;
    let offset = 0;
    const segments = categories.map((category) => {
      const share = profile.stages
        .filter((stage) => stageCategory(profile.name, stage) === category)
        .reduce((sum, stage) => sum + stage.share, 0);
      if (share === 0) return "";
      const x = labelWidth + offset * chartWidth;
      const segmentWidth = share * chartWidth;
      offset += share;
      return `<rect x="${x.toFixed(2)}" y="${y}" width="${segmentWidth.toFixed(2)}"
        height="66" fill="${STAGE_COLORS.get(category)}"><title>${escapeXML(category)}:
        ${(share * 100).toFixed(1)}%</title></rect>`;
    });
    return `
      <text x="${labelWidth - 20}" y="${y + 40}" text-anchor="end" class="label">
        ${escapeXML(profile.name)}
      </text>
      <g clip-path="url(#row-${index})">${segments.join("\n")}</g>
      <clipPath id="row-${index}"><rect x="${labelWidth}" y="${y}"
        width="${chartWidth}" height="66" rx="8" /></clipPath>`;
  });
  const legend = categories.map((category, index) => {
    const column = index % 3;
    const row = Math.floor(index / 3);
    const x = 60 + column * 440;
    const y = axisY + 25 + row * 42;
    return `
      <rect x="${x}" y="${y}" width="20" height="20" rx="4"
        fill="${STAGE_COLORS.get(category)}" />
      <text x="${x + 30}" y="${y + 16}" class="legend">${escapeXML(category)}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"
    viewBox="0 0 ${width} ${height}" role="img"
    aria-label="Styled-components transform stage shares">
    <style>
      .title { fill: #e5e7eb; font: 700 24px system-ui, sans-serif; }
      .label { fill: #d1d5db; font: 600 20px system-ui, sans-serif; }
      .legend { fill: #d1d5db; font: 16px system-ui, sans-serif; }
      .axis { fill: #9ca3af; font: 14px ui-monospace, monospace; }
    </style>
    <rect width="100%" height="100%" rx="14" fill="#111827" />
    <text x="36" y="42" class="title">Pipeline stage share</text>
    ${rows.join("\n").trim()}
    <text x="${labelWidth}" y="${axisY}" class="axis">0%</text>
    <text x="${labelWidth + chartWidth / 2}" y="${axisY}"
      text-anchor="middle" class="axis">50%</text>
    <text x="${labelWidth + chartWidth}" y="${axisY}"
      text-anchor="end" class="axis">100%</text>
    ${legend.join("\n").trim()}
  </svg>\n`;
}

async function main(): Promise<void> {
  const inputPath = join(process.cwd(), "result", "styled-components.json");
  const data = JSON.parse(await readFile(inputPath, "utf8")) as BenchmarkResult;
  const results = [...data.results].sort((left, right) => left.median - right.median);
  const chartsPath = join(process.cwd(), "charts");
  await mkdir(chartsPath, { recursive: true });
  await writeFile(join(chartsPath, "styled-components-latency.svg"), latencyChart(results));
  await writeFile(
    join(chartsPath, "styled-components-stages.svg"),
    stageChart(data.profile.results),
  );
  console.log("Generated SVG charts from result/styled-components.json");
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
