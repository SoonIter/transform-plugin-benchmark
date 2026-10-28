# Transform Plugin Benchmark

Reproducible benchmark of nine styled-components transform pipelines:

- `babel-plugin-styled-components` as a Babel JavaScript plugin
- `@swc/plugin-styled-components` as an SWC WASM plugin
- `@swc-next/core` parse/print with a JavaScript plugin using `@swc-next/walker`
- the same SWC Next parser and walker plugin with `oxc-codegen`
- the Babel plugin behavior ported to a Yuku JavaScript plugin
- the same Yuku parser and plugin with `oxc-codegen`
- `oxc-parser` + the Yuku walk plugin + `oxc-codegen`
- the same OXC pipeline with `experimentalRawTransfer`
- OXC `experimentalLazy` with an on-demand mutable ESTree adapter, the Yuku plugin, and OXC codegen

The workload is a pinned real-world multi-file corpus. Every timed iteration starts with the same
87 source files and ends with generated code for all 87 files.

## Pipeline labels

Chart labels show all three stages. The stable short `name` in raw JSON remains an ID;
new measurements and artifact manifests also include structured `pipeline` metadata.
Historical charts resolve codegen runtime from their recorded dependency versions.

| Parser and feature | Styled-components plugin | Codegen |
|---|---|---|
| Babel parser (JS, JSX) | styled-components plugin (JS, Babel traverse) | Babel codegen (JS) |
| SWC parser (native, JSX) | styled-components plugin (WASM, SWC visitor) | SWC codegen (native) |
| SWC Next parser (binary AST transfer) | styled-components plugin (JS, @swc-next/walker) | SWC Next codegen (JS encode + native) |
| SWC Next parser (binary AST transfer) | styled-components plugin (JS, @swc-next/walker) | OXC codegen (JS) |
| Yuku parser (binary AST transfer) | styled-components plugin (JS, Yuku walk) | Yuku codegen (JS) |
| Yuku parser (binary AST transfer) | styled-components plugin (JS, Yuku walk) | OXC codegen (JS) |
| OXC parser (default JSON transfer) | styled-components plugin (JS, Yuku walk) | OXC codegen (JS) |
| OXC parser (experimentalRawTransfer) | styled-components plugin (JS, Yuku walk) | OXC codegen (JS) |
| OXC parser (experimentalLazy + ESTree adapter) | styled-components plugin (JS, Yuku walk) | OXC codegen (JS) |

## Dependency update

SWC Next core and walker are pinned to npm `latest` 0.4.0, checked on 2026-10-28.
Both SWC Next cases use `@swc-next/walker` directly for every traversal and edit.
They share parser settings and plugin behavior; one prints with SWC Next, the other with
`oxc-codegen`. The OXC variant passes the transformed ESTree directly to the JS printer.
The other dependencies retain their 2026-10-09 pins: Babel 8.0.7, SWC 1.16.13,
OXC 0.153.0, and Yuku 0.18.0. The nine-pipeline results below were rerun with these versions.
Both the SWC Next version and walker changed, so comparisons with older results do not
isolate a walker speedup. Linked historical walker reports retain their original versions and timings.

`babel-plugin-styled-components@2.3.0` still declares a Babel 7 peer and calls
three removed JSX builder aliases. A scoped npm override and
[`babel-styled-components-plugin.ts`](scripts/babel-styled-components-plugin.ts)
map those aliases to Babel 8's equivalent builders and preserve the upstream
visitor's temporary identifier for intrinsic hyphenated JSX tags. The full parity suite covers
this compatibility wrapper. Babel parsing, traversal, and printing all use Babel 8.
Yuku 0.18's codegen is now JavaScript, so current profiles use its public `generate`
API and no longer report the removed native encode/codegen stages.

## SWC Next walker comparison

The comparison keeps SWC Next parse/print, corpus, and plugin options unchanged. Each walker
has its own complete styled-components implementation:

- [`swc-next-styled-components-plugin.ts`](scripts/swc-next-styled-components-plugin.ts) calls
  `@swc-next/walker` directly, using its native hooks, ancestors, replacement, and removal APIs.
- [`yuku-styled-components-plugin.ts`](scripts/yuku-styled-components-plugin.ts) uses Yuku's
  native visitors and mutation context.
- [`zimmerframe-styled-components-plugin.ts`](scripts/zimmerframe-styled-components-plugin.ts)
  uses Zimmerframe's native `path`, `next`, `visit`, and returned replacement nodes. CSS props
  are handled directly on JSX opening elements, without emulating Yuku's `replace`/`remove`.

All three plugins use the same option defaults, Yuku AST builders and binding helpers,
CSS/hash algorithms, and phase order:
collect imports/bindings, transform styled nodes, collect scopes/names, then transform CSS props.
Their implementations are intentionally separate; behavior changes must update all three files and
pass the common parity fixtures. There is no shared runtime plugin or walker compatibility layer.
Tests verify byte-identical output across 87 corpus files and 67 plugin cases, including PURE
comments through Yuku codegen, nested templates, copied scopes, CSS props, and import insertion.
This compares native plugin implementations end to end; plugin work remains part of the
measurement, so the result is not a standalone walker speed claim.

Historical walker-only measurements on Node 24.18.1 / Apple M5 Max, before the dependency update:

| Pipeline | End-to-end median | Run spread | Plugin stage |
|---|---:|---:|---:|
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + SWC Next codegen (JS encode + native) | 5.247 ms | 3.94% | 4.279 ms |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, Zimmerframe) + SWC Next codegen (JS encode + native) | 5.221 ms | 2.24% | 4.242 ms |

End-to-end values are medians of six process medians. Plugin stages are medians of six
separately measured process means. The approximately 0.5% end-to-end difference is smaller
than either variant's observed run spread and does not establish a stable winner.

See [the native-plugin report](result/swc-next-walkers-native.md) and
[raw measurements](result/swc-next-walkers-native.json). The earlier
[adapter report](result/swc-next-walkers.md) and [data](result/swc-next-walkers.json) are historical
and include compatibility-layer overhead. These walker-only reports retain their original
dependency versions; the nine-pipeline measurements below are refreshed independently.

```bash
fnm use 24.18.1
npm ci
npm run type-check
npm test
npm run bench:walkers
```

This runs the three SWC Next variants, with six fresh processes per variant and rotating
order, 3 seconds of warmup and 10 seconds of measurement. Stage profiles run separately with
1 second of warmup and 5 seconds of measurement. It writes `result/swc-next-walkers-current.json`, preserving the historical measurements.
The separate `node --import tsx scripts/bench-walker-traversal.mjs` command counts identifiers
on pre-parsed trees with all three walkers, records installed versions, and writes
[`result/swc-next-walkers-traversal-current.json`](result/swc-next-walkers-traversal-current.json).
The committed read-only run uses SWC Next 0.4.0 and visits the same 1,916 identifiers with every walker.
Neither command overwrites historical reports.

## Result

Node.js 24.18.1 on the machine documented below. Lower latency is better. Every timing covers
all 87 modules, including parsing, the plugin, and code generation.

![End-to-end styled-components transform latency](charts/styled-components-latency.svg)

| Transformer | Median | Independent run medians | Run spread | Relative to Yuku codegen pipeline | Peak RSS |
|-------------|-------:|-------------------------|-----------:|-----------------:|---------:|
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + OXC codegen (JS) | 4.292 ms | 4.207, 4.299, 4.292 ms | 2.14% | 0.88× | 715.6 MiB |
| OXC parser (experimentalRawTransfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | 4.655 ms | 4.754, 4.607, 4.655 ms | 3.16% | 0.95× | 453.4 MiB |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | 4.721 ms | 4.643, 4.821, 4.721 ms | 3.77% | 0.96× | 467.3 MiB |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + SWC Next codegen (JS encode + native) | 4.837 ms | 4.785, 4.837, 4.842 ms | 1.17% | 0.99× | 685.3 MiB |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + Yuku codegen (JS) | 4.901 ms | 4.901, 4.891, 4.921 ms | 0.60% | 1.00× | 465.7 MiB |
| OXC parser (default JSON transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | 6.316 ms | 6.316, 6.309, 6.499 ms | 3.01% | 1.29× | 681.4 MiB |
| OXC parser (experimentalLazy + ESTree adapter) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | 12.340 ms | 12.340, 11.785, 13.259 ms | 11.94% | 2.52× | 509.5 MiB |
| Babel parser (JS, JSX) + styled-components plugin (JS, Babel traverse) + Babel codegen (JS) | 15.657 ms | 15.677, 15.657, 15.361 ms | 2.02% | 3.19× | 469.4 MiB |
| SWC parser (native, JSX) + styled-components plugin (WASM, SWC visitor) + SWC codegen (native) | 54.621 ms | 53.251, 54.621, 55.480 ms | 4.08% | 11.14× | 188.7 MiB |

The lazy pipeline measured 12.340 ms versus 4.655 ms for raw transfer
(2.65× the latency) on this corpus. This includes the mutable ESTree adapter and
its on-demand source-fragment parsing; it does not isolate the cost of OXC's lazy API or establish
a general limit for lazy AST designs.

All independent runs are retained. Read the reported medians alongside their run spreads;
small differences do not establish a stable performance ranking.

Peak RSS is the maximum child-process high-water mark across the three runs. It includes process
startup, loaded dependencies, correctness validation, warmup, and timing, rather than incremental
AST memory. Per-run values are preserved in the raw JSON.

## Single-file scaling

The scaling benchmark measures one complete transform call as an exact-size synthetic JSX module
grows from 1 KiB to 512 KiB. Every file contains exactly one styled-components transform target;
the growing portion has stable ordinary JavaScript AST density. This controls the number of
plugin matches while measuring the full pipeline's response to increasing file size.

![Single-file transform latency by file size](charts/styled-components-scaling.svg)

Training-set leave-one-out error selects between an offset-power model and a log-quadratic model.
Offset-power rows report `p` in `T = a + b × KiB^p`; log-quadratic rows fit `ln(T) = a + b × ln(KiB) + c × ln(KiB)^2`. Seven intermediate sizes are measured but
excluded from fitting. A fit passes only when held-out MAPE is at most 6% and the worst held-out
point error is at most 15%. All nine fits pass. Rejected fits, when present, retain their measurements while the chart
omits their fitted curves. The thresholds are unchanged.

| Transformer | 1 KiB | 512 KiB | Model / exponent `p` | Held-out MAPE | Worst held-out error | Fit status |
|-------------|------:|--------:|----------------------:|--------------:|---------------------:|------------|
| Babel parser (JS, JSX) + styled-components plugin (JS, Babel traverse) + Babel codegen (JS) | 0.486 ms | 187.396 ms | 1.091 | 3.91% | 8.89% | accepted |
| SWC parser (native, JSX) + styled-components plugin (WASM, SWC visitor) + SWC codegen (native) | 1.396 ms | 43.354 ms | 0.996 | 0.77% | 1.19% | accepted |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + SWC Next codegen (JS encode + native) | 0.047 ms | 10.302 ms | 0.996 | 2.43% | 4.88% | accepted |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + OXC codegen (JS) | 0.037 ms | 7.510 ms | 0.996 | 0.98% | 2.78% | accepted |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + Yuku codegen (JS) | 0.059 ms | 14.642 ms | 1.009 | 1.96% | 3.28% | accepted |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | 0.053 ms | 12.974 ms | 1.005 | 1.12% | 1.66% | accepted |
| OXC parser (default JSON transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | 0.090 ms | 30.578 ms | 1.003 | 0.87% | 1.57% | accepted |
| OXC parser (experimentalRawTransfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | 0.048 ms | 12.615 ms | 1.001 | 0.74% | 1.48% | accepted |
| OXC parser (experimentalLazy + ESTree adapter) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | 0.231 ms | 197.623 ms | 1.176 | 3.15% | 6.71% | accepted |

Each point is the median of three independent process-run medians. Each process warms on a
16 KiB module for 200 ms, then measures each of the 15 sizes for at least 200 ms and at least
three complete transforms. The chart uses log scales, shows every measured point, and draws
min–max whiskers for the three run medians.

Passing fit validation describes the aggregated points; it does not imply low run-to-run
variability. Independent run medians and spreads are retained for every point. Fitted exponents
describe this controlled workload over the measured range; they do not establish asymptotic
complexity or an inherent limit of lazy AST access. No curve is extrapolated past 512 KiB.

All observations, candidate fits, and acceptance flags are retained in
[`result/styled-components-scaling.json`](result/styled-components-scaling.json). The scaling
command exits nonzero when any fit is rejected; the JSON is still saved and can be rendered
with `npm run charts`.

## Real-world workload

The corpus is the production JavaScript under `app/` from
[`react-boilerplate` v4.0.0](https://github.com/react-boilerplate/react-boilerplate/tree/d19099afeff64ecfb09133c06c1cb18c0d40887e),
pinned at commit `d19099afeff64ecfb09133c06c1cb18c0d40887e`. Tests are excluded. The source is
vendored under [`benchmark/fixtures/react-boilerplate`](benchmark/fixtures/react-boilerplate) with
its MIT license.

| Corpus property | Value |
|-----------------|------:|
| Production modules | 87 |
| Source size | 57,051 bytes |
| Source lines | 2,313 |
| Modules importing styled-components | 34 |
| Modules containing JSX | 27 |
| Transformed styled components | 32 |

Files are transformed separately in stable path order. They are not concatenated: per-module API,
parse, codegen, filename, displayName, and component ID costs remain part of the workload.

All pipelines receive the same source and options:

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

The outputs need not be byte-identical. They must provide the same styled-components feature
coverage: all nine pipelines emit 32 `.withConfig` calls, 32 display names, 32 unique component
IDs, preserve 137 JSX elements, and leave no styled tagged templates. Every output is reparsed
before measurement. JSX lowering is outside the measured transform endpoint.

**OXC limitation:** `oxc-codegen` does not print comments; its five rows drop PURE annotations. Both SWC Next cases also parse without comments.

## Inspectable artifacts

The full inputs are the vendored corpus. A representative styled component and all nine generated
forms are committed under [`artifacts/styled-components`](artifacts/styled-components):

- [`input.jsx`](artifacts/styled-components/input.jsx)
- [`babel-output.jsx`](artifacts/styled-components/babel-output.jsx)
- [`swc-output.jsx`](artifacts/styled-components/swc-output.jsx)
- [`swc-next-output.jsx`](artifacts/styled-components/swc-next-output.jsx)
- [`swc-next-oxc-codegen-output.jsx`](artifacts/styled-components/swc-next-oxc-codegen-output.jsx)
- [`yuku-output.jsx`](artifacts/styled-components/yuku-output.jsx)
- [`yuku-oxc-codegen-output.jsx`](artifacts/styled-components/yuku-oxc-codegen-output.jsx)
- [`oxc-output.jsx`](artifacts/styled-components/oxc-output.jsx)
- [`oxc-raw-transfer-output.jsx`](artifacts/styled-components/oxc-raw-transfer-output.jsx)
- [`oxc-lazy-output.jsx`](artifacts/styled-components/oxc-lazy-output.jsx)
- [`manifest.json`](artifacts/styled-components/manifest.json), containing aggregate corpus/output
  hashes, byte sizes, and validation counts

The SWC Next, Yuku-parser, regular OXC, raw-transfer OXC, and lazy OXC outputs printed by `oxc-codegen` are asserted
byte-for-byte equal across the complete corpus.

## Stage breakdown

Stage profiling is a separate instrumented run over the same corpus. Each reported stage value is
the median of three independent run means. The profile total is the sum of those stage medians;
it is not the end-to-end median above. The range column exposes variability between profile runs.

![Styled-components pipeline stage shares](charts/styled-components-stages.svg)

| Transformer | Stage | Runtime | Median run mean | Run-mean range | Share |
|-------------|-------|---------|----------------:|----------------|------:|
| Babel parser (JS, JSX) + styled-components plugin (JS, Babel traverse) + Babel codegen (JS) | parse | JS | 2.112 ms | 2.084–2.177 ms | 11.4% |
| Babel parser (JS, JSX) + styled-components plugin (JS, Babel traverse) + Babel codegen (JS) | plugin transform | JS | 13.076 ms | 12.975–13.216 ms | 70.9% |
| Babel parser (JS, JSX) + styled-components plugin (JS, Babel traverse) + Babel codegen (JS) | codegen | JS | 3.265 ms | 3.143–3.350 ms | 17.7% |
| SWC parser (native, JSX) + styled-components plugin (WASM, SWC visitor) + SWC codegen (native) | parse + plugin + codegen | native + WASM | 59.576 ms | 58.022–65.371 ms | 100.0% |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + SWC Next codegen (JS encode + native) | parse | native | 0.410 ms | 0.370–0.441 ms | 7.9% |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + SWC Next codegen (JS encode + native) | AST decode | JS | 0.169 ms | 0.164–0.182 ms | 3.3% |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + SWC Next codegen (JS encode + native) | plugin transform | JS | 3.765 ms | 3.668–4.050 ms | 73.0% |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + SWC Next codegen (JS encode + native) | AST encode + codegen | JS + native | 0.812 ms | 0.764–0.869 ms | 15.7% |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + OXC codegen (JS) | parse | native | 0.394 ms | 0.391–0.489 ms | 8.7% |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + OXC codegen (JS) | AST decode | JS | 0.164 ms | 0.157–0.190 ms | 3.6% |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + OXC codegen (JS) | plugin transform | JS | 3.824 ms | 3.744–4.309 ms | 84.0% |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + OXC codegen (JS) | codegen | JS | 0.168 ms | 0.163–0.212 ms | 3.7% |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + Yuku codegen (JS) | parse | native | 0.522 ms | 0.503–0.590 ms | 9.7% |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + Yuku codegen (JS) | AST decode | JS | 0.185 ms | 0.180–0.196 ms | 3.4% |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + Yuku codegen (JS) | plugin transform | JS | 4.286 ms | 4.165–4.548 ms | 79.6% |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + Yuku codegen (JS) | codegen | JS | 0.390 ms | 0.373–0.395 ms | 7.2% |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | parse | native | 0.509 ms | 0.504–0.513 ms | 10.1% |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | AST decode | JS | 0.180 ms | 0.178–0.193 ms | 3.6% |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | plugin transform | JS | 4.178 ms | 4.162–4.216 ms | 82.9% |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | codegen | JS | 0.172 ms | 0.171–0.173 ms | 3.4% |
| OXC parser (default JSON transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | parse + AST transfer | native + JS | 0.679 ms | 0.661–0.703 ms | 10.4% |
| OXC parser (default JSON transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | plugin transform | JS | 5.658 ms | 5.612–5.732 ms | 86.6% |
| OXC parser (default JSON transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | codegen | JS | 0.195 ms | 0.192–0.203 ms | 3.0% |
| OXC parser (experimentalRawTransfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | parse + raw AST transfer | native + JS | 0.539 ms | 0.536–0.565 ms | 11.1% |
| OXC parser (experimentalRawTransfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | plugin transform | JS | 4.167 ms | 4.082–4.189 ms | 85.4% |
| OXC parser (experimentalRawTransfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | codegen | JS | 0.171 ms | 0.163–0.180 ms | 3.5% |
| OXC parser (experimentalLazy + ESTree adapter) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | parse + lazy AST setup | native + JS | 0.754 ms | 0.694–0.803 ms | 5.6% |
| OXC parser (experimentalLazy + ESTree adapter) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | plugin transform | JS (includes lazy ESTree reads) | 11.989 ms | 11.529–12.024 ms | 89.3% |
| OXC parser (experimentalLazy + ESTree adapter) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | codegen | JS (includes lazy ESTree reads) | 0.656 ms | 0.628–0.670 ms | 4.9% |
| OXC parser (experimentalLazy + ESTree adapter) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | dispose | native + JS | 0.030 ms | 0.027–0.030 ms | 0.2% |

Per-stage ranges expose variation across the independent profile runs. These stage medians
are not a stable decomposition of the headline latency and should not be used to infer
small performance differences.

SWC exposes its WASM plugin through a complete transform call, so its profile remains combined.
The benchmark does not estimate plugin time by subtraction. Eager OXC parse stages include AST
transfer; the lazy parse stage initializes the handle and root adapter view. Lazy ESTree field
materialization and source-fragment parsing are charged to whichever stage requests them,
including the plugin and printer. The lazy profile also measures handle disposal explicitly.

### Measured stages outside the plugin interval

![Measured stage shares outside the plugin interval](charts/styled-components-stages-without-plugin.svg)

| Transformer | Sum outside the plugin interval | Remaining measured stages, normalized to 100% |
|-------------|--------------------------------:|-----------------------------------------------|
| Babel parser (JS, JSX) + styled-components plugin (JS, Babel traverse) + Babel codegen (JS) | 5.377 ms | parse 39.3%, codegen 60.7% |
| SWC parser (native, JSX) + styled-components plugin (WASM, SWC visitor) + SWC codegen (native) | not separable | plugin shares the public transform call |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + SWC Next codegen (JS encode + native) | 1.390 ms | parse 29.5%, AST decode 12.2%, AST encode + codegen 58.4% |
| SWC Next parser (binary AST transfer) + styled-components plugin (JS, @swc-next/walker) + OXC codegen (JS) | 0.727 ms | parse 54.3%, AST decode 22.6%, codegen 23.1% |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + Yuku codegen (JS) | 1.097 ms | parse 47.6%, AST decode 16.9%, codegen 35.5% |
| Yuku parser (binary AST transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | 0.862 ms | parse 59.1%, AST decode 20.9%, codegen 20.0% |
| OXC parser (default JSON transfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | 0.873 ms | parse + AST transfer 77.7%, codegen 22.3% |
| OXC parser (experimentalRawTransfer) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | 0.710 ms | parse + raw AST transfer 76.0%, codegen 24.0% |
| OXC parser (experimentalLazy + ESTree adapter) + styled-components plugin (JS, Yuku walk) + OXC codegen (JS) | 1.439 ms | parse + lazy AST setup 52.4%, codegen 45.5%, dispose 2.1% |

This view removes the entire measured `plugin transform` interval and renormalizes the remaining
stages. For the lazy pipeline, that also removes any AST materialization and fragment parsing
triggered inside the plugin interval. These are timing boundaries, not a separation of parser
work from plugin work. The view is not a no-op benchmark and cannot establish pure parser or
AST-bridge overhead.

## Correctness coverage

Tests verify all nine pipelines against the complete 87-file corpus, including feature counts,
valid generated JavaScript/JSX, output hashes, and stage-profile/public-transform equality.
The independent SWC Next, Yuku, and Zimmerframe styled-components ports also run the upstream plugin
fixtures and additional scope, CSS-prop, import, and mutation cases.

The lazy adapter is checked against the default OXC parser for every AST field and source offset
in the corpus and upstream fixtures, and against the eager pipeline's generated output.
Targeted tests cover lazy initialization, stable identity, field assignment, array mutation,
inserted nodes, directives, rest patterns/parameters, Unicode, literals, contextual expressions,
parser errors, and disposal. Its tests intentionally materialize trees for comparison; timed
adapter initialization does not.

## Experimental lazy pipeline

The new row calls `parseSync({ experimentalLazy: true })`; it does not also enable
`experimentalRawTransfer`, which would take precedence. OXC 0.153.0 exposes read-only native
node shapes here, not mutable ESTree. The local
[`oxc-lazy-estree.ts`](scripts/oxc-lazy-estree.ts) adapter creates one root view initially,
caches node identity, and resolves writable ESTree fields and ordinary child arrays on demand.
The existing styled-components plugin uses Yuku's walker, followed by OXC's JavaScript printer.
It does not use OXC's generated lazy visitor and does not mutate the native AST.

The experimental API omits directives, rest elements, class superclasses, and some literal
information. The adapter recovers these on demand through local source-fragment parsing;
function context is restored when a fragment contains `yield` or `new.target`. All adaptation,
fragment parsing, lazy reads during printing, and native-handle disposal remain inside the
end-to-end measurement. Profiles attribute lazy reads to the stage that requests them.
This is a JavaScript/JSX compatibility experiment for this benchmark, not a general TypeScript
adapter or a measurement of OXC's native lazy visitor in isolation.

The parser handle is disposed in `finally`, including on errors. Optional diagnostic counters
can report wrapped nodes and fragment parsing; those counters are disabled during timing.

## Measurement environment

| Item | Exact value |
|------|-------------|
| Runtime | Node 24.18.1 |
| Package manager | npm 11.16.0 |
| CPU | Apple M5 Max |
| Reported CPU cores | 18 |
| Memory | 64 GiB |
| OS | darwin 25.6.0 (arm64) |
| Babel | `@babel/core@8.0.7`, plugin `2.3.0` |
| SWC | `@swc/core@1.16.13`, WASM plugin `17.0.0` |
| SWC Next | `@swc-next/core@0.4.0`, `@swc-next/walker@0.4.0` |
| Yuku | parser `0.18.0`, AST `0.18.0`, codegen `0.18.0` (JS) |
| OXC | parser `0.153.0`, codegen `0.153.0` (JS) |
| Zimmerframe | `1.1.5` |

Each transformer runs in a fresh child process for each of three independent runs. A run warms for
1,000 ms and measures for 5,000 ms. Transformer order rotates between runs. The headline value is
the median of the three run medians; “run spread” is `(maximum − minimum) / reported median`.
The median within-run RME remains in the raw JSON but is not a cross-process confidence interval.
Peak RSS uses `process.resourceUsage().maxRSS`, converted to MiB, and takes the maximum over the
three child processes; it measures the whole process lifetime, as described with the result table.

The profile also uses three fresh processes per pipeline, 1,000 ms warmup, and 5,000 ms measurement,
with rotating pipeline order. Its per-stage medians come from these separate runs. The raw data,
including all timing and memory observations, is committed in
[`result/styled-components.json`](result/styled-components.json).

## Reproduce

```bash
fnm install 24.18.1
fnm use 24.18.1
node --version # v24.18.1
npm --version  # 11.16.0

npm ci
npm run reproduce:styled-components
```

The reproduction command rejects another Node version, runs all tests, records three end-to-end
and stage-profile runs, validates the result metadata, and regenerates the artifacts and SVGs.
Single-file scaling is a separate measurement; run it before regenerating the charts to refresh
all four current figures:

```bash
npm run bench:scaling
npm run charts
```

If a scaling fit misses the validation limits, `bench:scaling` exits nonzero after saving the
complete measurements and rejection flags. Run `npm run charts` separately to display those
observations; rejected fitted curves are omitted. All fits in the committed scaling run pass the validation limits.

For development:

```bash
npm run type-check
npm test
npm run artifacts
npm run charts
```

Exploratory runs can override `BENCH_TIME`, `BENCH_WARMUP`, `BENCH_RUNS`, `PROFILE_TIME`, or
`PROFILE_WARMUP`. The exact reproduction command always restores the recorded settings.
