import assert from "node:assert/strict";
import { test } from "node:test";
import {
  createScalingFixture,
  fitErrors,
  fitOffsetPower,
  fitScalingCurve,
  predictOffsetPower,
} from "../scripts/styled-components-scaling";

test("scaling fixtures have exact sizes and a fixed plugin-hit count", () => {
  const oneKiB = createScalingFixture(1);
  const sixtyFourKiB = createScalingFixture(64);
  assert.equal(Buffer.byteLength(oneKiB.source), 1_024);
  assert.equal(Buffer.byteLength(sixtyFourKiB.source), 64 * 1_024);
  assert.equal(oneKiB.styledComponents, 1);
  assert.equal(sixtyFourKiB.styledComponents, 1);
  assert.ok(sixtyFourKiB.source.match(/record-/g)!.length > 100);
});

test("curve selection can choose a changing log-log slope", () => {
  const points = [1, 2, 4, 8, 16, 32, 64, 128].map((sizeKiB) => {
    const x = Math.log(sizeKiB);
    return { sizeKiB, timeMs: Math.exp(-2 + 0.7 * x + 0.04 * x * x) };
  });
  const fit = fitScalingCurve(points);
  assert.equal(fit.model, "log-quadratic");
  assert.ok(fit.mapePct < 0.1);
});

test("offset-power fitting recovers a known scaling function", () => {
  const points = [1, 2, 4, 8, 16, 32, 64, 128].map((sizeKiB) => ({
    sizeKiB,
    timeMs: 0.25 + 0.01 * sizeKiB ** 1.08,
  }));
  const fit = fitOffsetPower(points);
  assert.ok(Math.abs(fit.interceptMs - 0.25) < 0.01);
  assert.ok(Math.abs(fit.exponent - 1.08) < 0.01);
  assert.ok(Math.abs(fit.slopeMsPerKiBPower - 0.01) < 0.001);
  assert.ok(fit.mapePct < 0.1);
  assert.ok(fit.looMapePct < 0.5);
  assert.ok(Math.abs(predictOffsetPower(fit, 256) - (0.25 + 0.01 * 256 ** 1.08)) < 0.1);
  assert.ok(fitErrors(points, fit).maxErrorPct < 0.2);
});
