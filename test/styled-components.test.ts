import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import {
  loadStyledComponentsCorpus,
  STYLED_COMPONENTS_CORPUS_COMMIT,
} from "../scripts/styled-components-corpus";
import {
  profileStageDefinitions,
  profileStyledComponentsOnce,
} from "../scripts/styled-components-profiler";
import {
  assertComparableStyledComponentsFeatures,
  styledComponentsTransformerPrintsComments,
  STYLED_COMPONENTS_TRANSFORMERS,
  transformStyledComponentsCorpusFor,
  transformStyledComponentsFor,
  validateStyledComponentsOutputs,
} from "../scripts/styled-components-transformers";

const corpus = loadStyledComponentsCorpus();

test("the benchmark corpus is the pinned production source set", () => {
  assert.equal(
    STYLED_COMPONENTS_CORPUS_COMMIT,
    "d19099afeff64ecfb09133c06c1cb18c0d40887e",
  );
  assert.equal(corpus.files.length, 87);
  assert.equal(corpus.sourceBytes, 57_051);
  assert.equal(
    corpus.files.filter((file) => file.source.includes("styled-components")).length,
    34,
  );
});

test("all transformers provide comparable styled-components feature coverage", () => {
  const validations = STYLED_COMPONENTS_TRANSFORMERS.map((name) => {
    const outputs = transformStyledComponentsCorpusFor(name, corpus);
    const validation = validateStyledComponentsOutputs(name, outputs);
    assert.equal(validation.files, 87);
    assert.equal(validation.withConfigCalls, 32);
    assert.equal(validation.uniqueComponentIds, 32);
    assert.equal(validation.jsxElements, 137);
    assert.equal(validation.taggedTemplates, 0);
    if (!styledComponentsTransformerPrintsComments(name)) {
      assert.equal(validation.pureAnnotations, 0);
    } else {
      assert.ok(validation.pureAnnotations >= 32);
    }
    return validation;
  });
  assertComparableStyledComponentsFeatures(validations);
});

for (const name of STYLED_COMPONENTS_TRANSFORMERS) {
  test(`${name} stage profile preserves its public transform result`, () => {
    const file = corpus.files.find(
      (candidate) =>
        candidate.relativePath === "app/components/Button/StyledButton.js",
    );
    assert.ok(file !== undefined);
    const profile = profileStyledComponentsOnce(name, file);
    assert.equal(profile.output, transformStyledComponentsFor(name, file));
    assert.equal(profile.durationsNs.length, profileStageDefinitions(name).length);
    assert.ok(profile.durationsNs.every((duration) => duration > 0));
  });
}

test("committed artifacts reproduce the representative file and corpus outputs", () => {
  const artifactsPath = join(process.cwd(), "artifacts", "styled-components");
  const manifest = JSON.parse(
    readFileSync(join(artifactsPath, "manifest.json"), "utf8"),
  ) as {
    corpus: { aggregateSha256: string; commit: string; files: number };
    outputs: Array<{
      aggregateSha256: string;
      file: string;
      representativeSha256: string;
      transformer: string;
    }>;
    representativeInput: {
      file: string;
      path: string;
      sha256: string;
    };
  };
  assert.equal(manifest.corpus.commit, STYLED_COMPONENTS_CORPUS_COMMIT);
  assert.equal(manifest.corpus.files, corpus.files.length);

  const sourceHash = createHash("sha256");
  for (const file of corpus.files) {
    sourceHash.update(file.relativePath);
    sourceHash.update("\0");
    sourceHash.update(file.source);
    sourceHash.update("\0");
  }
  assert.equal(sourceHash.digest("hex"), manifest.corpus.aggregateSha256);

  const representative = corpus.files.find(
    (file) => file.relativePath === manifest.representativeInput.path,
  );
  assert.ok(representative !== undefined);
  const input = readFileSync(
    join(artifactsPath, manifest.representativeInput.file),
    "utf8",
  );
  assert.equal(input, representative.source);
  assert.equal(
    createHash("sha256").update(input).digest("hex"),
    manifest.representativeInput.sha256,
  );

  assert.equal(manifest.outputs.length, STYLED_COMPONENTS_TRANSFORMERS.length);
  const oxcHashes: string[] = [];
  for (const outputRecord of manifest.outputs) {
    const transformer = STYLED_COMPONENTS_TRANSFORMERS.find(
      (name) => name === outputRecord.transformer,
    );
    assert.ok(transformer !== undefined);
    const transformed = transformStyledComponentsCorpusFor(transformer, corpus);
    const outputHash = createHash("sha256");
    for (const output of transformed) {
      outputHash.update(output.relativePath);
      outputHash.update("\0");
      outputHash.update(output.code);
      outputHash.update("\0");
    }
    assert.equal(outputHash.digest("hex"), outputRecord.aggregateSha256);
    const representativeOutput = transformed.find(
      (output) => output.relativePath === manifest.representativeInput.path,
    );
    assert.ok(representativeOutput !== undefined);
    const committed = readFileSync(join(artifactsPath, outputRecord.file), "utf8");
    assert.equal(committed, representativeOutput.code);
    assert.equal(
      createHash("sha256").update(committed).digest("hex"),
      outputRecord.representativeSha256,
    );
    if (!styledComponentsTransformerPrintsComments(transformer)) {
      oxcHashes.push(outputRecord.aggregateSha256);
    }
  }
  assert.equal(new Set(oxcHashes).size, 1);
});
