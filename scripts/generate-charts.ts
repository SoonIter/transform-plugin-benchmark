import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

interface TransformResult {
  median: number;
  name: string;
}

interface ProfileStage {
  meanMs: number;
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

interface ScalingPoint {
  medianMs: number;
  role: "training" | "validation";
  runMediansMs: number[];
  sizeKiB: number;
}

interface ScalingTransformResult {
  fit: {
    exponent?: number;
    interceptMs?: number;
    logIntercept?: number;
    logLinear?: number;
    logQuadratic?: number;
    model: "offset-power" | "log-quadratic";
    slopeMsPerKiBPower?: number;
    validationMapePct: number;
    validationMaxErrorPct: number;
  };
  name: string;
  points: ScalingPoint[];
}

interface ScalingBenchmarkResult {
  benchmark: { runs: number };
  fixture: { maximumBytes: number; minimumBytes: number };
  results: ScalingTransformResult[];
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
  ["Parse + raw AST transfer", "#2dd4bf"],
  ["AST decode", "#34d399"],
  ["Babel JS plugin", "#8b5cf6"],
  ["Yuku JS plugin", "#ec4899"],
  ["AST encode", "#fb923c"],
  ["Codegen", "#84cc16"],
  ["Parse + WASM plugin + codegen", "#2563eb"],
]);

const SCALING_STYLES = new Map([
  ["Babel + JS plugin", { color: "#8b5cf6", dash: "" }],
  ["SWC + WASM plugin", { color: "#2563eb", dash: "12 5" }],
  ["Yuku + JS plugin", { color: "#f97316", dash: "3 4" }],
  ["Yuku + OXC codegen", { color: "#d97706", dash: "14 4 3 4" }],
  ["OXC + Yuku walk plugin", { color: "#65a30d", dash: "8 4" }],
  ["OXC raw transfer + Yuku walk", { color: "#0891b2", dash: "2 3" }],
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
  if (stage.name === "parse + raw AST transfer") return "Parse + raw AST transfer";
  if (stage.name === "parse + plugin + codegen") {
    return "Parse + WASM plugin + codegen";
  }
  if (stage.name === "parse") return "Parse";
  if (stage.name === "codegen") return "Codegen";
  if (transformer.startsWith("Babel")) return "Babel JS plugin";
  return "Yuku JS plugin";
}

function latencyChart(results: TransformResult[]): string {
  const width = 1_500;
  const height = 90 + results.length * 100;
  const labelWidth = 380;
  const chartWidth = 970;
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
    <text x="1460" y="42" text-anchor="end" class="note">lower is better</text>
    ${rows.join("\n").trim()}
  </svg>\n`;
}

function stageChart(profiles: ProfileResult[]): string {
  const width = 1_600;
  const axisY = 78 + profiles.length * 114;
  const height = axisY + 190;
  const labelWidth = 380;
  const chartWidth = 1_160;
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
    const x = 60 + column * 510;
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

function stagesWithoutPluginChart(profiles: ProfileResult[]): string {
  const width = 1_600;
  const labelWidth = 380;
  const chartWidth = 1_160;
  const rowHeight = 108;
  const axisY = 100 + profiles.length * rowHeight;
  const height = axisY + 150;
  const categories = [
    "Source encode",
    "Parse",
    "Parse + AST transfer",
    "Parse + raw AST transfer",
    "AST decode",
    "AST encode",
    "Codegen",
  ];
  const rows = profiles.map((profile, index) => {
    const y = 84 + index * rowHeight;
    if (profile.name.startsWith("SWC")) {
      return `
      <text x="${labelWidth - 20}" y="${y + 38}" text-anchor="end" class="label">
        ${escapeXML(profile.name)}
      </text>
      <rect x="${labelWidth}" y="${y}" width="${chartWidth}" height="66"
        rx="8" fill="#374151" />
      <text x="${labelWidth + chartWidth / 2}" y="${y + 40}"
        text-anchor="middle" class="unavailable">plugin is not separable in the public API</text>`;
    }
    const remaining = profile.stages.filter((stage) => stage.name !== "plugin transform");
    const remainingMs = remaining.reduce((sum, stage) => sum + stage.meanMs, 0);
    if (remainingMs <= 0) throw new Error(`${profile.name} has no measurable non-plugin stages`);
    let offset = 0;
    const segments = categories.map((category) => {
      const meanMs = remaining
        .filter((stage) => stageCategory(profile.name, stage) === category)
        .reduce((sum, stage) => sum + stage.meanMs, 0);
      if (meanMs === 0) return "";
      const share = meanMs / remainingMs;
      const x = labelWidth + offset * chartWidth;
      const segmentWidth = share * chartWidth;
      offset += share;
      const label = segmentWidth >= 76
        ? `<text x="${(x + segmentWidth / 2).toFixed(2)}" y="${y + 40}"
            text-anchor="middle" class="segment">${(share * 100).toFixed(1)}%</text>`
        : "";
      return `<rect x="${x.toFixed(2)}" y="${y}" width="${segmentWidth.toFixed(2)}"
        height="66" fill="${STAGE_COLORS.get(category)}"><title>${escapeXML(category)}:
        ${(share * 100).toFixed(1)}%, ${meanMs.toFixed(3)} ms</title></rect>${label}`;
    });
    return `
      <text x="${labelWidth - 20}" y="${y + 30}" text-anchor="end" class="label">
        ${escapeXML(profile.name)}
      </text>
      <text x="${labelWidth - 20}" y="${y + 54}" text-anchor="end" class="total">
        ${remainingMs.toFixed(2)} ms remaining
      </text>
      <g clip-path="url(#without-plugin-${index})">${segments.join("\n")}</g>
      <clipPath id="without-plugin-${index}"><rect x="${labelWidth}" y="${y}"
        width="${chartWidth}" height="66" rx="8" /></clipPath>`;
  });
  const legend = categories.map((category, index) => {
    const x = 70 + (index % 4) * 380;
    const y = axisY + 30 + Math.floor(index / 4) * 42;
    return `
      <rect x="${x}" y="${y}" width="20" height="20" rx="4"
        fill="${STAGE_COLORS.get(category)}" />
      <text x="${x + 30}" y="${y + 16}" class="legend">${escapeXML(category)}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"
    viewBox="0 0 ${width} ${height}" role="img"
    aria-label="Non-plugin transform stage shares, remaining stages normalized to 100 percent">
    <style>
      .title { fill: #e5e7eb; font: 700 24px system-ui, sans-serif; }
      .subtitle { fill: #9ca3af; font: 15px system-ui, sans-serif; }
      .label { fill: #d1d5db; font: 600 18px system-ui, sans-serif; }
      .total { fill: #9ca3af; font: 14px ui-monospace, monospace; }
      .segment { fill: #111827; font: 700 14px ui-monospace, monospace; }
      .unavailable { fill: #d1d5db; font: 16px system-ui, sans-serif; }
      .legend { fill: #d1d5db; font: 15px system-ui, sans-serif; }
    </style>
    <rect width="100%" height="100%" rx="14" fill="#111827" />
    <text x="36" y="38" class="title">Stage share without plugin execution</text>
    <text x="36" y="64" class="subtitle">
      directly measured remaining stages, renormalized to 100%
    </text>
    ${rows.join("\n").trim()}
    ${legend.join("\n").trim()}
  </svg>\n`;
}

function scalingChart(data: ScalingBenchmarkResult): string {
  const width = 1_600;
  const height = 1_080;
  const left = 130;
  const right = 80;
  const top = 150;
  const bottom = 310;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const allObserved = data.results.flatMap((result) =>
    result.points.flatMap((point) => point.runMediansMs),
  );
  const yMinimum = 10 ** Math.floor(Math.log10(Math.min(...allObserved) * 0.8));
  const yMaximum = 10 ** Math.ceil(Math.log10(Math.max(...allObserved) * 1.2));
  const xMinimumKiB = data.fixture.minimumBytes / 1_024;
  const xMaximumKiB = data.fixture.maximumBytes / 1_024;
  const logXMinimum = Math.log2(xMinimumKiB);
  const logXMaximum = Math.log2(xMaximumKiB);
  const logYMinimum = Math.log10(yMinimum);
  const logYMaximum = Math.log10(yMaximum);
  const xPosition = (sizeKiB: number) =>
    left + (Math.log2(sizeKiB) - logXMinimum) /
      (logXMaximum - logXMinimum) * plotWidth;
  const yPosition = (timeMs: number) =>
    top + (logYMaximum - Math.log10(timeMs)) /
      (logYMaximum - logYMinimum) * plotHeight;
  const predict = (result: ScalingTransformResult, sizeKiB: number): number => {
    if (result.fit.model === "offset-power") {
      return result.fit.interceptMs! +
        result.fit.slopeMsPerKiBPower! * sizeKiB ** result.fit.exponent!;
    }
    const logSize = Math.log(sizeKiB);
    return Math.exp(
      result.fit.logIntercept! + result.fit.logLinear! * logSize +
        result.fit.logQuadratic! * logSize * logSize,
    );
  };

  const xTicks = Array.from(
    { length: Math.floor(logXMaximum - logXMinimum) + 1 },
    (_, index) => 2 ** (logXMinimum + index),
  );
  const shownXTicks = new Set([1, 4, 16, 64, 256, xMaximumKiB]);
  const xGrid = xTicks.map((value) => {
    const x = xPosition(value);
    const label = value === 1_024 ? "1 MiB" : `${value} KiB`;
    const tickLabel = shownXTicks.has(value)
      ? `\n      <text x="${x.toFixed(2)}" y="${top + plotHeight + 36}"
        text-anchor="middle" class="axis">${label}</text>`
      : "";
    return `<line x1="${x.toFixed(2)}" y1="${top}" x2="${x.toFixed(2)}"
        y2="${top + plotHeight}" class="grid ${shownXTicks.has(value) ? "major" : "minor"}" />${tickLabel}`;
  });
  const yCandidates = [
    0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200,
    500, 1_000, 2_000, 5_000,
  ].filter((value) => value >= yMinimum && value <= yMaximum);
  const shownYTicks = new Set([0.01, 0.1, 1, 10, 100, 1_000]);
  const yGrid = yCandidates.map((value) => {
    const y = yPosition(value);
    const label = value < 1 ? value.toFixed(value < 0.1 ? 2 : 1) : value.toLocaleString("en-US");
    const tickLabel = shownYTicks.has(value)
      ? `\n      <text x="${left - 20}" y="${(y + 6).toFixed(2)}"
        text-anchor="end" class="axis">${label}</text>`
      : "";
    return `<line x1="${left}" y1="${y.toFixed(2)}" x2="${left + plotWidth}"
        y2="${y.toFixed(2)}" class="grid ${shownYTicks.has(value) ? "major" : "minor"}" />${tickLabel}`;
  });

  const series = data.results.map((result) => {
    const style = SCALING_STYLES.get(result.name);
    if (style === undefined) throw new Error(`Missing scaling style for ${result.name}`);
    const curvePoints = Array.from({ length: 181 }, (_, index) => {
      const logSize = logXMinimum + index / 180 * (logXMaximum - logXMinimum);
      const sizeKiB = 2 ** logSize;
      const timeMs = predict(result, sizeKiB);
      return `${xPosition(sizeKiB).toFixed(2)},${yPosition(timeMs).toFixed(2)}`;
    });
    const observations = result.points.map((point) => {
      const x = xPosition(point.sizeKiB);
      const y = yPosition(point.medianMs);
      const low = yPosition(Math.min(...point.runMediansMs));
      const high = yPosition(Math.max(...point.runMediansMs));
      const marker = point.role === "training"
        ? `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="5.5"
            fill="${style.color}" stroke="#ffffff" stroke-width="1.5" />`
        : `<rect x="${(x - 5).toFixed(2)}" y="${(y - 5).toFixed(2)}" width="10"
            height="10" transform="rotate(45 ${x.toFixed(2)} ${y.toFixed(2)})"
            fill="#ffffff" stroke="${style.color}" stroke-width="2.5" />`;
      return `<line x1="${x.toFixed(2)}" y1="${high.toFixed(2)}" x2="${x.toFixed(2)}"
          y2="${low.toFixed(2)}" stroke="${style.color}" stroke-width="2" opacity="0.42" />
        ${marker}`;
    });
    return `<polyline points="${curvePoints.join(" ")}" fill="none" stroke="${style.color}"
        stroke-width="4" stroke-linejoin="round" stroke-linecap="round"
        ${style.dash === "" ? "" : `stroke-dasharray="${style.dash}"`} />
      ${observations.join("\n")}`;
  });

  const legend = data.results.map((result, index) => {
    const style = SCALING_STYLES.get(result.name)!;
    const column = index % 3;
    const row = Math.floor(index / 3);
    const x = left + column * 460;
    const y = top + plotHeight + 100 + row * 78;
    return `<line x1="${x}" y1="${y}" x2="${x + 52}" y2="${y}"
        stroke="${style.color}" stroke-width="4" stroke-linecap="round"
        ${style.dash === "" ? "" : `stroke-dasharray="${style.dash}"`} />
      <text x="${x + 66}" y="${y + 5}" class="legend-name">${escapeXML(result.name)}</text>
      <text x="${x + 66}" y="${y + 29}" class="legend-detail">${result.fit.model === "offset-power" ? `p=${result.fit.exponent!.toFixed(3)}` : "log-quadratic"} · holdout MAPE ${result.fit.validationMapePct.toFixed(1)}% · max ${result.fit.validationMaxErrorPct.toFixed(1)}%</text>`;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"
    viewBox="0 0 ${width} ${height}" role="img"
    aria-label="Single-file styled-components transform latency by file size">
    <style>
      .title { fill: #111827; font: 700 28px system-ui, sans-serif; }
      .subtitle { fill: #4b5563; font: 16px system-ui, sans-serif; }
      .axis { fill: #4b5563; font: 14px ui-monospace, monospace; }
      .axis-title { fill: #374151; font: 600 16px system-ui, sans-serif; }
      .grid { stroke: #e5e7eb; stroke-width: 1; }
      .grid.minor { stroke: #f3f4f6; }
      .grid.major { stroke: #d1d5db; }
      .legend-name { fill: #1f2937; font: 600 15px system-ui, sans-serif; }
      .legend-detail { fill: #6b7280; font: 13px ui-monospace, monospace; }
      .note { fill: #6b7280; font: 14px system-ui, sans-serif; }
    </style>
    <rect width="100%" height="100%" fill="#ffffff" />
    <text x="${left}" y="48" class="title">Single-file transform latency by file size</text>
    <text x="${left}" y="78" class="subtitle">1 KiB–512 KiB synthetic JSX · one styled-components hit · log scales · ${data.benchmark.runs} independent process runs</text>
    <text x="${left}" y="105" class="subtitle">Curves: training-LOO-selected smooth fits · points: measured run medians · lower is better</text>
    ${xGrid.join("\n")}
    ${yGrid.join("\n")}
    <line x1="${left}" y1="${top + plotHeight}" x2="${left + plotWidth}"
      y2="${top + plotHeight}" stroke="#6b7280" stroke-width="1.5" />
    <line x1="${left}" y1="${top}" x2="${left}" y2="${top + plotHeight}"
      stroke="#6b7280" stroke-width="1.5" />
    ${series.join("\n")}
    <text x="${left + plotWidth / 2}" y="${top + plotHeight + 70}"
      text-anchor="middle" class="axis-title">Source file size</text>
    <text x="32" y="${top + plotHeight / 2}" text-anchor="middle" class="axis-title"
      transform="rotate(-90 32 ${top + plotHeight / 2})">Median latency per transform (ms)</text>
    ${legend.join("\n")}
    <circle cx="${left}" cy="${height - 58}" r="5.5" fill="#4b5563" />
    <text x="${left + 16}" y="${height - 53}" class="note">filled circles = fit anchors</text>
    <rect x="${left + 210}" y="${height - 63}" width="10" height="10"
      transform="rotate(45 ${left + 215} ${height - 58})" fill="#ffffff" stroke="#4b5563" stroke-width="2" />
    <text x="${left + 234}" y="${height - 53}" class="note">open diamonds = held-out validation</text>
    <text x="${left + 540}" y="${height - 53}" class="note">whiskers = min–max run medians</text>
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
  await writeFile(
    join(chartsPath, "styled-components-stages-without-plugin.svg"),
    stagesWithoutPluginChart(data.profile.results),
  );
  const scalingInputPath = join(process.cwd(), "result", "styled-components-scaling.json");
  const scalingData = JSON.parse(
    await readFile(scalingInputPath, "utf8"),
  ) as ScalingBenchmarkResult;
  await writeFile(
    join(chartsPath, "styled-components-scaling.svg"),
    scalingChart(scalingData),
  );
  console.log("Generated SVG charts from committed benchmark results");
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
