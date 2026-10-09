import assert from "node:assert/strict";
import { test } from "node:test";
import { pipelineMetadata } from "../scripts/pipeline-labels";

test("labels distinguish OXC transfer modes and include plugin and codegen", () => {
  const cases = [
    ["OXC + Yuku walk plugin", "default JSON transfer"],
    ["OXC raw transfer + Yuku walk", "experimentalRawTransfer"],
    ["OXC lazy + Yuku walk", "experimentalLazy + ESTree adapter"],
  ];
  for (const [name, feature] of cases) {
    const metadata = pipelineMetadata(name!);
    assert.ok(metadata.parser.includes(feature!));
    assert.equal(metadata.plugin, "styled-components plugin (JS, Yuku walk)");
    assert.equal(metadata.codegen, "OXC codegen (JS)");
    assert.deepEqual(metadata.lines, [metadata.parser, metadata.plugin, metadata.codegen]);
    assert.equal(metadata.fullLabel, metadata.lines.join(" + "));
  }
});

test("historical results keep the recorded Yuku codegen runtime", () => {
  assert.equal(pipelineMetadata("Yuku + JS plugin", { yukuCodegen: "0.8.5" }).codegen,
    "Yuku codegen (native)");
  assert.equal(pipelineMetadata("Yuku + JS plugin", { yukuCodegen: "0.18.0" }).codegen,
    "Yuku codegen (JS)");
  assert.equal(pipelineMetadata("Yuku + JS plugin", { yukuCodegen: "unknown" }).codegen,
    "Yuku codegen");
});

test("SWC Next labels expose binary transfer, walker and native codegen", () => {
  const yuku = pipelineMetadata("SWC Next + Yuku walk");
  const zimmerframe = pipelineMetadata("SWC Next + Zimmerframe");
  assert.equal(yuku.parser, "SWC Next parser (binary AST transfer)");
  assert.equal(yuku.codegen, "SWC Next codegen (JS encode + native)");
  assert.equal(zimmerframe.parser, yuku.parser);
  assert.equal(zimmerframe.codegen, yuku.codegen);
  assert.equal(zimmerframe.plugin, "styled-components plugin (JS, Zimmerframe)");
});

test("unknown pipelines fail instead of producing an incomplete label", () => {
  assert.throws(() => pipelineMetadata("unregistered pipeline"), /Missing pipeline metadata/);
});
