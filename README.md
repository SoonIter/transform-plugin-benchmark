# Transform Plugin Benchmark

Reproducible end-to-end and stage-level benchmark of seven styled-components transform pipelines:

- `babel-plugin-styled-components` running as a Babel JavaScript plugin
- `@swc/plugin-styled-components` running as an SWC WASM plugin
- the complete `babel-plugin-styled-components@2.3.0` behavior port running as a Yuku JS plugin
- `oxc-parser`, the Yuku walk plugin, and the JavaScript `oxc-codegen` printer
- `oxc-parser` with `experimentalRawTransfer`, the Yuku walk plugin, and `oxc-codegen`
- `oxc-parser`, the same transform using OXC's `Visitor`, and `oxc-codegen`
- `oxc-parser` with `experimentalRawTransfer`, OXC `Visitor`, and `oxc-codegen`

## Result

Node.js 24.18.1 on the hardware documented below. Lower is better.

![End-to-end styled-components transform latency](charts/styled-components-latency.svg)

| Transformer | Median | Three independent run medians | Relative to Yuku |
|-------------|-------:|-------------------------------|-----------------:|
| **OXC raw transfer + Yuku walk** | **12.89 ms** | 12.889, 13.058, 12.814 ms | 0.75× latency |
| Yuku + JS plugin | 17.15 ms | 17.151, 16.951, 17.240 ms | baseline |
| OXC + Yuku walk plugin | 18.55 ms | 18.314, 18.587, 18.553 ms | 1.08× slower |
| SWC + WASM plugin | 22.80 ms | 22.892, 22.803, 22.801 ms | 1.33× slower |
| OXC raw transfer + OXC Visitor | 23.21 ms | 23.074, 23.207, 23.253 ms | 1.35× slower |
| OXC + OXC Visitor plugin | 29.25 ms | 29.519, 29.215, 29.252 ms | 1.71× slower |
| Babel + JS plugin | 105.88 ms | 105.881, 108.435, 104.925 ms | 6.17× slower |

For this workload, raw transfer reduced the OXC `Visitor` pipeline's end-to-end latency by 20.7%,
from 29.25 ms to 23.21 ms. On the raw-transferred AST, OXC `Visitor` plus the mutation adapter
measured 80.1% higher latency than Yuku walk. These numbers describe this fixture, implementation,
and machine, not every styled-components project.

## Workload

The generated 142,274-byte JSX module contains:

- 240 user-authored styled component declarations
- 60 `css` prop transforms
- 483 tagged templates
- 300 validated output component IDs and display names
- `styled.tag`, `styled(Component)`, `.attrs()`, call-form styles, and nested `css`
- `keyframes`, `createGlobalStyle`, dynamic interpolations, object styles, computed keys,
  and spreads

All seven plugin invocations receive the same options:

```json
{
  "cssProp": true,
  "displayName": true,
  "fileName": true,
  "meaninglessFileNames": ["index"],
  "minify": true,
  "namespace": "",
  "pure": true,
  "ssr": true,
  "topLevelImportPaths": [],
  "transpileTemplateLiterals": true
}
```

Every timed iteration starts with source text and ends with generated code. Before measurement,
each output is reparsed and checked for 300 unique component IDs, 300 display names, minified CSS,
complete template lowering, and valid JSX. Babel, SWC, and Yuku must also preserve PURE annotations.

`oxc-codegen@0.144.0` does not print comments, so all four OXC outputs drop the 303 PURE annotations
produced by the plugin. Those rows are real end-to-end styled-components transforms, but they are
not drop-in-equivalent results when the tree-shaking hints matter. This is work performed but output
not retained, rather than work excluded from the timed path. See
[OXC PR #25488](https://github.com/oxc-project/oxc/pull/25488).

## Inspect the source and generated code

The exact 142 KB source passed to every timed pipeline and all seven generated outputs are committed
under [`artifacts/styled-components`](artifacts/styled-components):

- [`input.jsx`](artifacts/styled-components/input.jsx) is the exact benchmark source.
- [`babel-output.jsx`](artifacts/styled-components/babel-output.jsx) is the Babel result.
- [`swc-output.jsx`](artifacts/styled-components/swc-output.jsx) is the SWC result.
- [`yuku-output.jsx`](artifacts/styled-components/yuku-output.jsx) is the Yuku result.
- [`oxc-output.jsx`](artifacts/styled-components/oxc-output.jsx) uses regular OXC transfer and Yuku walk.
- [`oxc-raw-transfer-output.jsx`](artifacts/styled-components/oxc-raw-transfer-output.jsx) uses
  OXC raw transfer and Yuku walk.
- [`oxc-visitor-output.jsx`](artifacts/styled-components/oxc-visitor-output.jsx) uses regular OXC
  transfer and OXC `Visitor`.
- [`oxc-raw-transfer-visitor-output.jsx`](artifacts/styled-components/oxc-raw-transfer-visitor-output.jsx)
  uses OXC raw transfer and OXC `Visitor`.
- [`manifest.json`](artifacts/styled-components/manifest.json) records SHA-256 hashes, byte sizes,
  and validation statistics.

The four OXC files are asserted byte-for-byte equal. The input begins with shared `css`,
`keyframes`, and `createGlobalStyle` declarations, followed by four repeating styled-component
shapes. It ends with object-valued `css` props containing dynamic computed keys, nested objects,
and spreads.

## Stage breakdown

The stage benchmark is a separate instrumented run. Stage means are additive within each tool;
they should not be compared directly with the end-to-end medians above.

![Styled-components pipeline stage shares](charts/styled-components-stages.svg)

| Transformer | Stage | Runtime | Mean | Share |
|-------------|-------|---------|-----:|------:|
| Babel + JS plugin | parse | JS | 3.714 ms | 3.0% |
| Babel + JS plugin | plugin transform | JS | 101.397 ms | 82.3% |
| Babel + JS plugin | codegen | JS | 18.037 ms | 14.6% |
| SWC + WASM plugin | parse + AST transfer | native + JS | 10.627 ms | 17.4% |
| SWC + WASM plugin | AST transfer + plugin + codegen | JS + WASM + native | 50.402 ms | 82.6% |
| Yuku + JS plugin | source encode | JS | 0.123 ms | 0.7% |
| Yuku + JS plugin | parse | native | 0.489 ms | 2.8% |
| Yuku + JS plugin | AST decode | JS | 0.511 ms | 2.9% |
| Yuku + JS plugin | plugin transform | JS | 11.901 ms | 67.6% |
| Yuku + JS plugin | AST encode | JS | 3.662 ms | 20.8% |
| Yuku + JS plugin | codegen | native | 0.913 ms | 5.2% |
| OXC + Yuku walk plugin | parse + AST transfer | native + JS | 1.330 ms | 6.8% |
| OXC + Yuku walk plugin | plugin transform | JS | 17.395 ms | 89.6% |
| OXC + Yuku walk plugin | codegen | JS | 0.695 ms | 3.6% |
| OXC raw transfer + Yuku walk | parse + raw AST transfer | native + JS | 0.979 ms | 7.1% |
| OXC raw transfer + Yuku walk | plugin transform | JS | 12.188 ms | 88.3% |
| OXC raw transfer + Yuku walk | codegen | JS | 0.628 ms | 4.6% |
| OXC + OXC Visitor plugin | parse + AST transfer | native + JS | 1.316 ms | 4.5% |
| OXC + OXC Visitor plugin | plugin transform | JS, OXC Visitor | 27.363 ms | 92.6% |
| OXC + OXC Visitor plugin | codegen | JS | 0.881 ms | 3.0% |
| OXC raw transfer + OXC Visitor | parse + raw AST transfer | native + JS | 1.438 ms | 6.1% |
| OXC raw transfer + OXC Visitor | plugin transform | JS, OXC Visitor | 21.491 ms | 90.5% |
| OXC raw transfer + OXC Visitor | codegen | JS | 0.821 ms | 3.5% |

SWC's public WASM plugin API returns generated code rather than an intermediate transformed AST.
Its WASM plugin, return transfer, and native codegen are therefore one directly measured stage.
Splitting them by subtraction would not be a direct measurement.

OXC's regular `parseSync` stage includes native parse and conversion into JavaScript ESTree objects.
The raw rows pass `{ experimentalRawTransfer: true }`. In this run, the Yuku walk plugin measured
12.188 ms on raw-transferred objects versus 17.395 ms on regular objects. OXC `Visitor` measured
21.491 ms on raw-transferred objects versus 27.363 ms on regular objects. The benchmark reports that
repeatable whole-pipeline observation without attributing the plugin difference to transfer alone.

The OXC `Visitor` row uses `new Visitor(...).visit(program)` for traversal. Since its public visitor
does not expose Yuku's mutation context, the adapter maintains ancestors and applies `replace` and
`remove` operations to the ESTree object at node exit. It runs the identical transform logic and
generates identical code, so the row measures this concrete adapter rather than a read-only walk.

### Stage share after removing plugin execution

![Stage shares after removing plugin execution](charts/styled-components-stages-without-plugin.svg)

| Transformer | Directly measured remainder | Remainder normalized to 100% |
|-------------|----------------------------:|------------------------------|
| Babel + JS plugin | 21.751 ms | parse 17.1%, codegen 82.9% |
| SWC + WASM plugin | not separable | plugin shares a public API stage with transfer and codegen |
| Yuku + JS plugin | 5.698 ms | source encode 2.2%, parse 8.6%, AST decode 9.0%, AST encode 64.3%, codegen 16.0% |
| OXC + Yuku walk plugin | 2.025 ms | parse + AST transfer 65.7%, codegen 34.3% |
| OXC raw transfer + Yuku walk | 1.607 ms | parse + raw AST transfer 60.9%, codegen 39.1% |
| OXC + OXC Visitor plugin | 2.197 ms | parse + AST transfer 59.9%, codegen 40.1% |
| OXC raw transfer + OXC Visitor | 2.259 ms | parse + raw AST transfer 63.6%, codegen 36.4% |

This view removes the directly measured `plugin transform` stage, then renormalizes the remaining
stage means to 100%. It is not a separate no-op end-to-end benchmark. SWC is intentionally shown as
unavailable because its public API does not expose a separable plugin duration.

## Yuku plugin completeness

The implementation is in
[`scripts/yuku-styled-components-plugin.ts`](scripts/yuku-styled-components-plugin.ts). The
`walkWithYuku` and `walkWithOxcVisitor` functions select the traversal backend while sharing all
transform logic. It ports the complete public transform surface of
`babel-plugin-styled-components@2.3.0`:

- default, named, namespace, custom top-level, CommonJS, and transpiler-wrapped imports
- styled aliases, member/call chains, `.attrs()`, `.withConfig()`, and object-call forms
- display names, filenames, meaningless filenames, namespaces, SSR IDs, and MurmurHash2 IDs
- CSS minification, interpolation elimination, template lowering, and PURE annotations
- string, template, helper, dynamic, and object `css` props
- computed object keys, nested objects, spreads, JSX member names, and injected imports
- every public plugin option plus the macro custom-import hook

Correctness is checked by 77 tests:

- all 48 fixtures from upstream version 2.3.0 at commit
  `ab3aaf50921075b219718f9357abd4fae4bcb9b7`
- 14 additional focused Babel-to-Yuku parity cases
- 14 end-to-end and split-profile contracts across the seven pipelines
- 1 committed-artifact integrity contract covering the input and seven outputs, including equality
  across the four OXC outputs

The upstream fixture comparison canonicalizes only generated private identifier spellings such as
`_styled2`; it separately checks PURE annotation counts and compares the remaining generated AST.
The vendored corpus and its MIT license are in [`test/fixtures`](test/fixtures).

## Measurement environment

| Item | Exact value |
|------|-------------|
| Runtime | Node.js 24.18.1 |
| Package manager | npm 11.16.0 |
| CPU | Apple M1 Max |
| Reported CPU cores | 10 |
| Memory | 32 GB |
| OS | Darwin 24.6.0, arm64 |
| Babel | `@babel/core@7.29.7`, plugin `2.3.0` |
| SWC | `@swc/core@1.15.46`, WASM plugin `12.19.0` |
| Yuku | parser, AST, and codegen `0.8.5` |
| OXC | `oxc-parser@0.144.0`, `oxc-codegen@0.144.0` |

Node is intentional rather than Bun. OXC 0.144.0 raw transfer explicitly supports Node 22 or
newer on 64-bit little-endian systems and rejects Bun. It reserves a reusable 6 GiB virtual-address
buffer per active raw parsing operation; most pages are untouched, so this is not 6 GiB of resident
memory. The first call also lazy-loads the raw-transfer implementation. Both benchmark instruments
warm each child process for 1,000 ms before sampling, so one-time initialization is excluded.

Node 24.18.1 is pinned because it was the latest Node 24 release when this result was recorded. See
the [official Node 24 archive](https://nodejs.org/en/download/archive/v24).

Each tool runs in a fresh child process for each of three independent runs. Every run warms for
1,000 ms and measures for 5,000 ms. Tool order rotates between runs. The reported end-to-end value
is the median of the three run medians. The profile repeats the same warmup, duration, run count,
process isolation, and rotation, and retains raw per-run stage means.

## Exact reproduction

The immutable `styled-components-oxc-raw-visitor-v6` tag fixes the source. `package-lock.json`
fixes the dependency graph. The script rejects any Node version other than 24.18.1, overrides
measurement environment variables with the recorded settings, runs all 77 correctness tests, runs
both benchmark instruments, validates the result metadata, and regenerates artifacts and charts.

```bash
git clone https://github.com/SoonIter/transform-plugin-benchmark.git
cd transform-plugin-benchmark
git checkout styled-components-oxc-raw-visitor-v6

fnm install 24.18.1
fnm use 24.18.1
node --version # must print v24.18.1
npm --version  # must print 11.16.0
npm ci
npm run reproduce:styled-components
```

If `fnm` is not installed, use any Node version manager and verify the two printed versions. The
command writes [`result/styled-components.json`](result/styled-components.json), regenerates every
file under [`artifacts/styled-components`](artifacts/styled-components), and rebuilds all three SVG
files under [`charts`](charts). Inspect machine-specific differences with:

```bash
git diff -- result/styled-components.json artifacts/ charts/
```

Absolute latency depends on CPU, operating-system load, power mode, and thermal state. The raw JSON
records hardware, tool versions, fixture size, options, all run medians, sample counts, RME, stage
means, stage shares, and individual stage-run means.

## Development

```bash
npm ci
npm run type-check
npm test
npm run artifacts
npm run charts
```

For exploratory non-canonical runs, invoke `npm run bench:styled-components` with `BENCH_TIME`,
`BENCH_WARMUP`, `BENCH_RUNS`, `PROFILE_TIME`, `PROFILE_WARMUP`, or
`STYLED_COMPONENTS_COUNT`. The exact reproduction command intentionally overrides those variables.
