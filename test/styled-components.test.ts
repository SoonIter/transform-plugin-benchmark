import assert from "node:assert/strict";
import { test } from "node:test";
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
    assert.ok(validation.pureAnnotations >= fixture.transformedComponentCount + 3);
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
