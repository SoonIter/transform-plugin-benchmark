import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { parseSync, rawTransferSupported } from "oxc-parser";
import { printSync } from "oxc-codegen";
import { parseLazyEstree, type LazyEstreeMetrics } from "../scripts/oxc-lazy-estree";
import { loadStyledComponentsCorpus } from "../scripts/styled-components-corpus";
import { transformStyledComponentsYuku } from "../scripts/yuku-styled-components-plugin";
import type { Program } from "yuku-parser";

const supported = rawTransferSupported();
const upstream = JSON.parse(readFileSync(new URL("./fixtures/babel-plugin-styled-components-v2.3.0.json", import.meta.url), "utf8")) as {
  cases: { name: string; source: string; options: Record<string, any> }[];
};

// Compare node fields and offsets, retaining RegExp/BigInt values. Materializing
// here is intentional: validation, unlike adapter initialization, visits all data.
function materialize(value: any): any {
  if (!value || typeof value !== "object" || value instanceof RegExp) return value;
  if (Array.isArray(value)) return value.map(materialize);
  return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, materialize(child)]));
}

function assertShape(source: string, filename = "fixture.jsx") {
  const expected = parseSync(filename, source, { lang: "jsx", sourceType: "module" });
  assert.equal(expected.errors.length, 0, `eager parse: ${filename}`);
  const actual = parseLazyEstree(filename, source);
  try {
    assert.equal(actual.errors.length, 0, `lazy parse: ${filename}`);
    assert.deepEqual(materialize(actual.program), materialize(expected.program), filename);
  } finally { actual.dispose(); }
}

test("lazy ESTree matches eager Oxc for the complete benchmark corpus", { skip: !supported }, () => {
  for (const file of loadStyledComponentsCorpus().files) assertShape(file.source, file.filename);
});

test("lazy ESTree matches eager Oxc for all upstream styled-components fixtures", { skip: !supported }, () => {
  for (const fixture of upstream.cases) assertShape(fixture.source, `${fixture.name}.jsx`);
});

test("lazy ESTree preserves directives, rest, defaults, JSX, Unicode and literals", { skip: !supported }, () => {
  assertShape(`"use strict";
    const emoji = "😊"; const lone = "\\uD800"; const replacement = "�0041";
    function f(a = 1, ...args) { "use strict-ish"; return args; }
    const g = (...args) => args;
    const { a, b: { c, ...inner }, ...rest } = obj;
    const [x, , ...tail] = arr;
    ({a, b = 1, c: d, ...rest} = obj); [a, ...rest] = arr;
    const A = <><Foo.Bar value={null} /><this.Item /></>;
    const values = [true, false, null, 0xff, 1_000n, /a+/gi];
    const template = tag\`\\uD800${"${emoji}"}�0041\`;
    class C { #x; method() { return #x in this; } }
    function meta() { return [new.target, import.meta]; }
  `);
});

test("lazy construction does not enumerate descendants; accessed fields and arrays are mutable and cached", { skip: !supported }, () => {
  const metrics: LazyEstreeMetrics = { wrappedNodes: 0, fallbackParses: 0, fallbackSourceCodeUnits: 0 };
  const parsed = parseLazyEstree("lazy.jsx", "const first = 1; const second = 2;", metrics);
  try {
    const program = parsed.program as any;
    assert.equal(metrics.wrappedNodes, 1);
    assert.equal(metrics.fallbackParses, 0);
    assert.equal(typeof Object.getOwnPropertyDescriptor(program, "body")!.get, "function");
    const body = program.body;
    assert.strictEqual(program.body, body);
    assert.equal(Object.getPrototypeOf(body), Array.prototype);
    assert.equal(metrics.wrappedNodes, 3);
    assert.equal(typeof Object.getOwnPropertyDescriptor(body[1], "declarations")!.get, "function");
    const declaration = body[0].declarations[0];
    assert.strictEqual(body[0].declarations[0], declaration);
    declaration.id.name = "renamed";
    declaration.init = { type: "Literal", value: 42, raw: "42", start: 0, end: 0 };
    body.splice(1, 1, { type: "ExpressionStatement", start: 0, end: 0, expression: { type: "Identifier", name: "renamed", start: 0, end: 0 } });
    const code = printSync(program, { jsx: true }).code;
    assert.match(code, /const renamed = 42/);
    assert.match(code, /renamed;/);
    assert.doesNotMatch(code, /second/);
  } finally { parsed.dispose(); }
});

test("omitted native fields are recovered only when read and disposal is idempotent", { skip: !supported }, () => {
  const metrics: LazyEstreeMetrics = { wrappedNodes: 0, fallbackParses: 0, fallbackSourceCodeUnits: 0 };
  const parsed = parseLazyEstree("lazy.jsx", '"use strict"; const f = (...args) => args;', metrics);
  const program = parsed.program as any;
  assert.equal(metrics.fallbackParses, 0);
  assert.equal(program.body[0].directive, "use strict");
  assert.equal(metrics.fallbackParses, 1);
  assert.equal(program.body[1].declarations[0].init.params[0].type, "RestElement");
  assert.equal(metrics.fallbackParses, 2);
  parsed.dispose();
  parsed.dispose();
  assert.throws(() => program.hashbang, /disposed/);
  assert.throws(() => parsed.errors, /disposed/);
  const next = parseLazyEstree("next.jsx", "const next = 1;");
  try { assert.equal(next.program.body.length, 1); } finally { next.dispose(); }
});

test("lazy adapter styled-components transformation matches eager Oxc output", { skip: !supported }, () => {
  for (const fixture of upstream.cases) {
    const filename = `${fixture.name}.jsx`;
    const eager = parseSync(filename, fixture.source, { lang: "jsx", sourceType: "module" });
    const lazy = parseLazyEstree(filename, fixture.source);
    try {
      transformStyledComponentsYuku(eager.program as unknown as Program, fixture.source, filename, fixture.options);
      transformStyledComponentsYuku(lazy.program, fixture.source, filename, fixture.options);
      assert.equal(printSync(lazy.program as never, { jsx: true }).code, printSync(eager.program, { jsx: true }).code, fixture.name);
    } finally { lazy.dispose(); }
  }
});

test("lazy adapter matches eager transformed output for all benchmark files", { skip: !supported }, () => {
  for (const file of loadStyledComponentsCorpus().files) {
    const eager = parseSync(file.filename, file.source, { lang: "jsx", sourceType: "module" });
    const lazy = parseLazyEstree(file.filename, file.source);
    const options = { cssProp: true, displayName: true, minify: true, pure: true, ssr: true, transpileTemplateLiterals: true };
    try {
      transformStyledComponentsYuku(eager.program as unknown as Program, file.source, file.filename, options);
      transformStyledComponentsYuku(lazy.program, file.source, file.filename, options);
      assert.equal(printSync(lazy.program as never, { jsx: true }).code, printSync(eager.program, { jsx: true }).code, file.relativePath);
    } finally { lazy.dispose(); }
  }
});

test("lazy parse errors are exposed and the buffer can still be disposed", { skip: !supported }, () => {
  const parsed = parseLazyEstree("invalid.jsx", "const = ;");
  try {
    assert.ok(parsed.errors.length > 0);
    assert.equal(typeof parsed.errors[0]!.message, "string");
  } finally { parsed.dispose(); }
});

test("fragment recovery preserves generator and function expression contexts", { skip: !supported }, () => {
  const cases = [
    "function* g(){ class C extends (yield foo) {} }",
    "function* g(){ const {a = yield foo, ...rest} = bar; }",
    "function* g(){ ([a = yield foo, ...rest] = bar); }",
    "function f(){ const {a = new.target, ...rest} = obj; }",
    "function f(){ class C extends new.target {} }",
    "async function f(){ const {a = await foo, ...rest} = obj; }",
    "async function* f(){ const [a = yield await foo, ...rest] = arr; }",
    "class C extends B { m({a = super.x, ...rest}) {} }",
    "class C { #x; m(){ const {a = this.#x, ...rest} = obj; } }",
  ];
  for (const source of cases) assertShape(source);
  const metrics: LazyEstreeMetrics = { wrappedNodes: 0, fallbackParses: 0, fallbackSourceCodeUnits: 0 };
  const parsed = parseLazyEstree("context.jsx", cases[0]!, metrics);
  try {
    materialize(parsed.program);
    assert.equal(metrics.fallbackParses, 2, "count the failed standalone and successful contextual fragment parses");
  } finally { parsed.dispose(); }
});
