import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { ChartConfiguration } from "chart.js";
import { ChartJSNodeCanvas } from "chartjs-node-canvas";

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
  babel: "#7209B7",
  swc: "#3A86FF",
  yuku: "#FF6B35",
} as const;

function transformerColor(name: string): string {
  if (name.startsWith("Babel")) return COLORS.babel;
  if (name.startsWith("SWC")) return COLORS.swc;
  return COLORS.yuku;
}

async function generateLatencyChart(results: TransformResult[]): Promise<void> {
  const dpr = 3;
  const renderer = new ChartJSNodeCanvas({ width: 640 * dpr, height: 155 * dpr });
  const maxTime = Math.max(...results.map((result) => result.median));
  const configuration: ChartConfiguration = {
    type: "bar",
    data: {
      labels: results.map((result) => result.name),
      datasets: [
        {
          data: results.map((result) => result.median),
          backgroundColor: results.map((result) => transformerColor(result.name)),
          borderWidth: 0,
          barPercentage: 0.72,
          categoryPercentage: 0.9,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: false,
      devicePixelRatio: 1,
      layout: { padding: { right: 90 * dpr } },
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false, beginAtZero: true, max: maxTime * 1.12 },
        y: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: "#CAC1B0", font: { size: 10 * dpr } },
        },
      },
    },
    plugins: [
      {
        id: "latency-labels",
        afterDatasetsDraw(chart) {
          const context = chart.ctx;
          const metadata = chart.getDatasetMeta(0);
          for (let index = 0; index < metadata.data.length; index++) {
            const bar = metadata.data[index]!;
            const value = results[index]!.median;
            context.save();
            context.fillStyle = "#CAC1B0";
            context.font = `${10 * dpr}px sans-serif`;
            context.textAlign = "left";
            context.textBaseline = "middle";
            context.fillText(`${value.toFixed(2)} ms`, bar.x + 8 * dpr, bar.y);
            context.restore();
          }
        },
      },
    ],
  };
  await writeFile(
    join(process.cwd(), "charts", "styled-components-latency.png"),
    await renderer.renderToBuffer(configuration),
  );
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

async function generateStageChart(profiles: ProfileResult[]): Promise<void> {
  const categories = [
    ["Source encode", "#FFD166"],
    ["Parse", "#4CC9F0"],
    ["Parse + AST transfer", "#4895EF"],
    ["AST decode", "#43AA8B"],
    ["Babel JS plugin", "#7209B7"],
    ["Yuku JS plugin", "#F72585"],
    ["AST encode", "#FF9F1C"],
    ["Codegen", "#90BE6D"],
    ["AST transfer + WASM plugin + codegen", "#3A86FF"],
  ] as const;
  const dpr = 3;
  const renderer = new ChartJSNodeCanvas({ width: 760 * dpr, height: 245 * dpr });
  const configuration: ChartConfiguration = {
    type: "bar",
    data: {
      labels: profiles.map((profile) => profile.name),
      datasets: categories.map(([category, color]) => ({
        label: category,
        data: profiles.map((profile) =>
          profile.stages
            .filter((stage) => stageCategory(profile.name, stage) === category)
            .reduce((sum, stage) => sum + stage.share * 100, 0),
        ),
        backgroundColor: color,
        borderWidth: 0,
        barPercentage: 0.72,
        categoryPercentage: 0.9,
      })),
    },
    options: {
      indexAxis: "y",
      responsive: false,
      devicePixelRatio: 1,
      plugins: {
        legend: {
          labels: {
            boxHeight: 8 * dpr,
            boxWidth: 8 * dpr,
            color: "#CAC1B0",
            font: { size: 8 * dpr },
          },
          position: "bottom",
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          stacked: true,
          ticks: {
            callback: (value) => `${value}%`,
            color: "#CAC1B0",
            font: { size: 8 * dpr },
          },
        },
        y: {
          stacked: true,
          grid: { display: false },
          border: { display: false },
          ticks: { color: "#CAC1B0", font: { size: 9 * dpr } },
        },
      },
    },
  };
  await writeFile(
    join(process.cwd(), "charts", "styled-components-stages.png"),
    await renderer.renderToBuffer(configuration),
  );
}

async function main(): Promise<void> {
  const inputPath = join(process.cwd(), "result", "styled-components.json");
  const data = JSON.parse(await readFile(inputPath, "utf8")) as BenchmarkResult;
  const results = [...data.results].sort((left, right) => left.median - right.median);
  await mkdir(join(process.cwd(), "charts"), { recursive: true });
  await generateLatencyChart(results);
  await generateStageChart(data.profile.results);
  console.log("Generated charts from result/styled-components.json");
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
