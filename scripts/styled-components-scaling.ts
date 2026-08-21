import type { StyledComponentsCorpusFile } from "./styled-components-corpus";

export const SCALING_TRAINING_SIZES_KIB = [
  1, 4, 16, 64, 128, 256, 384, 512,
] as const;

export const SCALING_VALIDATION_SIZES_KIB = [
  2, 8, 32, 96, 192, 320, 448,
] as const;

export const SCALING_SIZES_KIB = [
  ...SCALING_TRAINING_SIZES_KIB,
  ...SCALING_VALIDATION_SIZES_KIB,
].sort((left, right) => left - right);

const FIXTURE_PREFIX = `import styled from "styled-components";

const seed = { foreground: "#123456", background: "#f7f7f7", spacing: 8 };
const SeedCard = styled.article\`
  color: \${props => props.theme?.foreground ?? seed.foreground};
  background: \${props => props.theme?.background ?? seed.background};
  display: grid;
  gap: 8px;
\`;
export const SeedView = props => <SeedCard data-size={props.items.length}>{props.title}</SeedCard>;
export const dataset = [
`;

const FIXTURE_SUFFIX = `];
export const enabledScore = dataset
  .filter(record => record.enabled)
  .reduce((total, record) => total + record.score, 0);
`;

function fixtureRecord(index: number): string {
  const id = index.toString().padStart(7, "0");
  return `  { id: "record-${id}", enabled: ${index % 3 !== 0}, score: ${
    index % 997
  }, category: "group-${index % 17}", tags: ["alpha", "item-${id}"] },\n`;
}

export interface ScalingFixture extends StyledComponentsCorpusFile {
  records: number;
  sourceBytes: number;
  styledComponents: number;
}

export function createScalingFixture(sizeKiB: number): ScalingFixture {
  if (!Number.isInteger(sizeKiB) || sizeKiB < 1) {
    throw new Error(`Scaling fixture size must be a positive integer KiB: ${sizeKiB}`);
  }
  const targetBytes = sizeKiB * 1_024;
  let source = FIXTURE_PREFIX;
  let records = 0;
  for (let index = 1; ; index++) {
    const record = fixtureRecord(index);
    if (
      Buffer.byteLength(source) + Buffer.byteLength(record) +
        Buffer.byteLength(FIXTURE_SUFFIX) + 4 > targetBytes
    ) break;
    source += record;
    records++;
  }
  source += FIXTURE_SUFFIX;
  const remaining = targetBytes - Buffer.byteLength(source);
  if (remaining < 4) {
    throw new Error(`Scaling fixture ${sizeKiB} KiB has no room for exact-size padding`);
  }
  source += `/*${"x".repeat(remaining - 4)}*/`;
  if (Buffer.byteLength(source) !== targetBytes) {
    throw new Error(`Scaling fixture ${sizeKiB} KiB did not reach its target size`);
  }
  const relativePath = `scaling/styled-components-${sizeKiB}kib.jsx`;
  return {
    filename: `/benchmark/${relativePath}`,
    relativePath,
    records,
    source,
    sourceBytes: targetBytes,
    styledComponents: 1,
  };
}

export interface FitPoint {
  sizeKiB: number;
  timeMs: number;
}

export interface OffsetPowerFit {
  exponent: number;
  interceptMs: number;
  looMapePct: number;
  looMaxErrorPct: number;
  mapePct: number;
  maxErrorPct: number;
  model: "offset-power";
  rSquared: number;
  slopeMsPerKiBPower: number;
}

export interface LogQuadraticFit {
  logIntercept: number;
  logLinear: number;
  logQuadratic: number;
  looMapePct: number;
  looMaxErrorPct: number;
  mapePct: number;
  maxErrorPct: number;
  model: "log-quadratic";
  rSquared: number;
}

export type ScalingFit = OffsetPowerFit | LogQuadraticFit;

function weightedOffsetAndSlope(
  points: FitPoint[],
  exponent: number,
): { interceptMs: number; slopeMsPerKiBPower: number } | undefined {
  let sumWeights = 0;
  let sumWeightedX = 0;
  let sumWeightedY = 0;
  let sumWeightedXX = 0;
  let sumWeightedXY = 0;
  for (const point of points) {
    const x = point.sizeKiB ** exponent;
    const weight = 1 / (point.timeMs * point.timeMs);
    sumWeights += weight;
    sumWeightedX += weight * x;
    sumWeightedY += weight * point.timeMs;
    sumWeightedXX += weight * x * x;
    sumWeightedXY += weight * x * point.timeMs;
  }
  const denominator = sumWeights * sumWeightedXX - sumWeightedX * sumWeightedX;
  if (Math.abs(denominator) < Number.EPSILON) return undefined;
  const interceptMs =
    (sumWeightedY * sumWeightedXX - sumWeightedX * sumWeightedXY) / denominator;
  const slopeMsPerKiBPower =
    (sumWeights * sumWeightedXY - sumWeightedX * sumWeightedY) / denominator;
  if (interceptMs < 0 || slopeMsPerKiBPower <= 0) return undefined;
  return { interceptMs, slopeMsPerKiBPower };
}

export function predictOffsetPower(
  fit: Pick<OffsetPowerFit, "exponent" | "interceptMs" | "slopeMsPerKiBPower">,
  sizeKiB: number,
): number {
  return fit.interceptMs + fit.slopeMsPerKiBPower * sizeKiB ** fit.exponent;
}

export function predictScalingFit(fit: ScalingFit, sizeKiB: number): number {
  if (fit.model === "offset-power") return predictOffsetPower(fit, sizeKiB);
  const logSize = Math.log(sizeKiB);
  return Math.exp(
    fit.logIntercept + fit.logLinear * logSize + fit.logQuadratic * logSize * logSize,
  );
}

function absolutePercentageErrors(
  points: FitPoint[],
  fit: Pick<OffsetPowerFit, "exponent" | "interceptMs" | "slopeMsPerKiBPower">,
): number[] {
  return points.map(
    (point) => Math.abs(predictOffsetPower(fit, point.sizeKiB) - point.timeMs) /
      point.timeMs * 100,
  );
}

function mean(values: number[]): number {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function fitAtExponent(points: FitPoint[], exponent: number) {
  const coefficients = weightedOffsetAndSlope(points, exponent);
  if (coefficients === undefined) return undefined;
  const errors = absolutePercentageErrors(points, { exponent, ...coefficients });
  return { ...coefficients, score: mean(errors.map((error) => error * error)) };
}

function fitWithoutCrossValidation(points: FitPoint[]) {
  let best:
    | { exponent: number; interceptMs: number; slopeMsPerKiBPower: number; score: number }
    | undefined;
  for (let step = 0; step <= 700; step++) {
    const exponent = 0.65 + step * 0.001;
    const candidate = fitAtExponent(points, exponent);
    if (candidate !== undefined && (best === undefined || candidate.score < best.score)) {
      best = { exponent, ...candidate };
    }
  }
  if (best === undefined) throw new Error("Could not fit a positive offset-power curve");
  return best;
}

export function fitOffsetPower(points: FitPoint[]): OffsetPowerFit {
  if (points.length < 5 || points.some((point) => point.sizeKiB <= 0 || point.timeMs <= 0)) {
    throw new Error("Offset-power fitting requires at least five positive points");
  }
  const best = fitWithoutCrossValidation(points);
  const fit = {
    exponent: best.exponent,
    interceptMs: best.interceptMs,
    slopeMsPerKiBPower: best.slopeMsPerKiBPower,
  };
  const errors = absolutePercentageErrors(points, fit);
  const observedMean = mean(points.map((point) => point.timeMs));
  const residualSumSquares = points.reduce(
    (sum, point) => sum + (point.timeMs - predictOffsetPower(fit, point.sizeKiB)) ** 2,
    0,
  );
  const totalSumSquares = points.reduce(
    (sum, point) => sum + (point.timeMs - observedMean) ** 2,
    0,
  );
  const looErrors = points.map((point, index) => {
    const training = points.filter((_, candidateIndex) => candidateIndex !== index);
    const looFit = fitWithoutCrossValidation(training);
    return Math.abs(predictOffsetPower(looFit, point.sizeKiB) - point.timeMs) /
      point.timeMs * 100;
  });
  return {
    ...fit,
    looMapePct: mean(looErrors),
    looMaxErrorPct: Math.max(...looErrors),
    mapePct: mean(errors),
    maxErrorPct: Math.max(...errors),
    model: "offset-power",
    rSquared: totalSumSquares === 0 ? 1 : 1 - residualSumSquares / totalSumSquares,
  };
}

function solveThreeByThree(matrix: number[][], vector: number[]): number[] {
  const rows = matrix.map((row, index) => [...row, vector[index]!]);
  for (let column = 0; column < 3; column++) {
    let pivot = column;
    for (let row = column + 1; row < 3; row++) {
      if (Math.abs(rows[row]![column]!) > Math.abs(rows[pivot]![column]!)) pivot = row;
    }
    [rows[column], rows[pivot]] = [rows[pivot]!, rows[column]!];
    const divisor = rows[column]![column]!;
    if (Math.abs(divisor) < Number.EPSILON) throw new Error("Singular fit matrix");
    for (let index = column; index < 4; index++) rows[column]![index]! /= divisor;
    for (let row = 0; row < 3; row++) {
      if (row === column) continue;
      const factor = rows[row]![column]!;
      for (let index = column; index < 4; index++) {
        rows[row]![index]! -= factor * rows[column]![index]!;
      }
    }
  }
  return rows.map((row) => row[3]!);
}

function fitLogQuadraticWithoutCrossValidation(points: FitPoint[]) {
  const sums = Array.from({ length: 5 }, () => 0);
  const targets = Array.from({ length: 3 }, () => 0);
  for (const point of points) {
    const x = Math.log(point.sizeKiB);
    const y = Math.log(point.timeMs);
    for (let power = 0; power <= 4; power++) sums[power]! += x ** power;
    for (let power = 0; power <= 2; power++) targets[power]! += y * x ** power;
  }
  const [logIntercept, logLinear, logQuadratic] = solveThreeByThree(
    [
      [sums[0]!, sums[1]!, sums[2]!],
      [sums[1]!, sums[2]!, sums[3]!],
      [sums[2]!, sums[3]!, sums[4]!],
    ],
    targets,
  );
  return { logIntercept: logIntercept!, logLinear: logLinear!, logQuadratic: logQuadratic! };
}

export function fitLogQuadratic(points: FitPoint[]): LogQuadraticFit {
  if (points.length < 5 || points.some((point) => point.sizeKiB <= 0 || point.timeMs <= 0)) {
    throw new Error("Log-quadratic fitting requires at least five positive points");
  }
  const coefficients = fitLogQuadraticWithoutCrossValidation(points);
  const base = { model: "log-quadratic" as const, ...coefficients };
  const errors = points.map((point) =>
    Math.abs(predictScalingFit(base as LogQuadraticFit, point.sizeKiB) - point.timeMs) /
      point.timeMs * 100,
  );
  const observedMean = mean(points.map((point) => point.timeMs));
  const residualSumSquares = points.reduce(
    (sum, point) =>
      sum + (point.timeMs - predictScalingFit(base as LogQuadraticFit, point.sizeKiB)) ** 2,
    0,
  );
  const totalSumSquares = points.reduce(
    (sum, point) => sum + (point.timeMs - observedMean) ** 2,
    0,
  );
  const looErrors = points.map((point, index) => {
    const loo = {
      model: "log-quadratic" as const,
      ...fitLogQuadraticWithoutCrossValidation(
        points.filter((_, candidateIndex) => candidateIndex !== index),
      ),
    };
    return Math.abs(predictScalingFit(loo as LogQuadraticFit, point.sizeKiB) - point.timeMs) /
      point.timeMs * 100;
  });
  return {
    ...base,
    looMapePct: mean(looErrors),
    looMaxErrorPct: Math.max(...looErrors),
    mapePct: mean(errors),
    maxErrorPct: Math.max(...errors),
    rSquared: totalSumSquares === 0 ? 1 : 1 - residualSumSquares / totalSumSquares,
  };
}

export function fitScalingCurve(points: FitPoint[]): ScalingFit {
  const candidates: ScalingFit[] = [fitOffsetPower(points), fitLogQuadratic(points)];
  return candidates.sort((left, right) => left.looMapePct - right.looMapePct)[0]!;
}

export function fitErrors(
  points: FitPoint[],
  fit: ScalingFit,
): { mapePct: number; maxErrorPct: number } {
  const errors = points.map((point) =>
    Math.abs(predictScalingFit(fit, point.sizeKiB) - point.timeMs) / point.timeMs * 100,
  );
  return { mapePct: mean(errors), maxErrorPct: Math.max(...errors) };
}
