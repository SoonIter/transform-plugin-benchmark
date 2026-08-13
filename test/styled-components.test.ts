import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { join } from "node:path";
import { createStyledComponentsFixture } from "../scripts/styled-components-fixture";
import {
  profileStageDefinitions,
  profileStyledComponentsOnce,
} from "../scripts/styled-components-profiler";
import {
  STYLED_COMPONENTS_TRANSFORMERS,
  transformStyledComponentsFor,
  validateStyledComponentsOutput,
} from "../scripts/styled-components-transformers";

const fixture = createStyledComponentsFixture(4);

for (const name of STYLED_COMPONENTS_TRANSFORMERS) {
  test(`${name} satisfies the styled-components transform contract`, () => {
    const output = transformStyledComponentsFor(name, fixture.source);
    const validation = validateStyledComponentsOutput(name, output, fixture);

    assert.equal(validation.withConfigCalls, fixture.transformedComponentCount);
    assert.equal(validation.uniqueComponentIds, fixture.transformedComponentCount);
    if (name.startsWith("OXC")) {
      assert.equal(validation.pureAnnotations, 0);
    } else {
      assert.ok(validation.pureAnnotations >= fixture.transformedComponentCount + 3);
    }
    assert.equal(validation.taggedTemplates, 0);
  });

  test(`${name} split profile preserves the transform contract`, () => {
    const profile = profileStyledComponentsOnce(name, fixture.source);
    const validation = validateStyledComponentsOutput(name, profile.output, fixture);

    assert.equal(profile.durationsNs.length, profileStageDefinitions(name).length);
    assert.ok(profile.durationsNs.every((duration) => duration > 0));
    assert.equal(validation.withConfigCalls, fixture.transformedComponentCount);
    assert.equal(validation.taggedTemplates, 0);
  });
}

test("committed artifacts reproduce the benchmark fixture and outputs", () => {
  const artifactsPath = join(process.cwd(), "artifacts", "styled-components");
  const manifest = JSON.parse(
    readFileSync(join(artifactsPath, "manifest.json"), "utf8"),
  ) as {
    input: { file: string; sha256: string };
    outputs: Array<{ file: string; sha256: string; transformer: string }>;
  };
  const input = readFileSync(join(artifactsPath, manifest.input.file), "utf8");
  assert.equal(input, createStyledComponentsFixture(240).source);
  assert.equal(createHash("sha256").update(input).digest("hex"), manifest.input.sha256);

  assert.equal(manifest.outputs.length, STYLED_COMPONENTS_TRANSFORMERS.length);
  const codeByTransformer = new Map<string, string>();
  for (const output of manifest.outputs) {
    const transformer = STYLED_COMPONENTS_TRANSFORMERS.find(
      (name) => name === output.transformer,
    );
    assert.notEqual(transformer, undefined);
    const code = readFileSync(join(artifactsPath, output.file), "utf8");
    codeByTransformer.set(output.transformer, code);
    assert.equal(createHash("sha256").update(code).digest("hex"), output.sha256);
    assert.equal(code, transformStyledComponentsFor(transformer!, input));
  }
  assert.equal(
    codeByTransformer.get("OXC + Yuku walk plugin"),
    codeByTransformer.get("OXC raw transfer + Yuku walk"),
  );
  assert.equal(
    codeByTransformer.get("OXC + Yuku walk plugin"),
    codeByTransformer.get("OXC + OXC Visitor plugin"),
  );
});
