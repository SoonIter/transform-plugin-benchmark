# Transform Plugin Benchmark

Reproducible end-to-end and stage-level benchmark of three styled-components transform systems:

- `babel-plugin-styled-components` running as a Babel JavaScript plugin
- `@swc/plugin-styled-components` running as an SWC WASM plugin
- the complete `babel-plugin-styled-components@2.3.0` behavior port running as a Yuku JS plugin

## Result

Node.js 24.18.1 on the hardware documented below. Lower is better.

![End-to-end styled-components transform latency](charts/styled-components-latency.svg)

| Transformer | Median | Three independent run medians | Relative to Yuku |
|-------------|-------:|-------------------------------|-----------------:|
| **Yuku + JS plugin** | **17.84 ms** | 17.841, 18.150, 17.100 ms | **baseline** |
| SWC + WASM plugin | 22.95 ms | 22.784, 23.048, 22.949 ms | 1.29× slower |
| Babel + JS plugin | 106.13 ms | 106.135, 109.623, 104.989 ms | 5.95× slower |

For this workload, Yuku measured 22.3% lower latency than SWC and 83.2% lower latency than Babel.
These numbers describe this fixture and machine, not every styled-components project.

## Workload

The generated 142,274-byte JSX module contains:

- 240 user-authored styled component declarations
- 60 `css` prop transforms
- 483 tagged templates
- 300 validated output component IDs and display names
- `styled.tag`, `styled(Component)`, `.attrs()`, call-form styles, and nested `css`
- `keyframes`, `createGlobalStyle`, dynamic interpolations, object styles, computed keys,
  and spreads

All three implementations receive the same options:

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
each output is reparsed and checked for 300 unique component IDs, 300 display names, PURE
annotations, minified CSS, complete template lowering, and valid JSX.

## Stage breakdown

The stage benchmark is a separate instrumented run. Stage means are additive within each tool;
they should not be compared directly with the end-to-end medians above.

![Styled-components pipeline stage shares](charts/styled-components-stages.svg)

| Transformer | Stage | Runtime | Mean | Share |
|-------------|-------|---------|-----:|------:|
| Babel + JS plugin | parse | JS | 3.54 ms | 2.7% |
| Babel + JS plugin | plugin transform | JS | 108.48 ms | 83.2% |
| Babel + JS plugin | codegen | JS | 18.39 ms | 14.1% |
| SWC + WASM plugin | parse + AST transfer | native + JS | 10.85 ms | 17.3% |
| SWC + WASM plugin | AST transfer + plugin + codegen | JS + WASM + native | 51.80 ms | 82.7% |
| Yuku + JS plugin | source encode | JS | 0.13 ms | 0.7% |
| Yuku + JS plugin | parse | native | 0.50 ms | 2.8% |
| Yuku + JS plugin | AST decode | JS | 0.51 ms | 2.8% |
| Yuku + JS plugin | plugin transform | JS | 12.19 ms | 67.5% |
| Yuku + JS plugin | AST encode | JS | 3.71 ms | 20.5% |
| Yuku + JS plugin | codegen | native | 1.03 ms | 5.7% |

SWC's public WASM plugin API returns generated code rather than an intermediate transformed AST.
Therefore its WASM plugin, return transfer, and native codegen are one directly measured stage.
Splitting them by subtraction would not be a direct measurement.

## Yuku plugin completeness

The Yuku implementation is in
[`scripts/yuku-styled-components-plugin.ts`](scripts/yuku-styled-components-plugin.ts). It ports
the complete public transform surface of `babel-plugin-styled-components@2.3.0`:

- default, named, namespace, custom top-level, CommonJS, and transpiler-wrapped imports
- styled aliases, member/call chains, `.attrs()`, `.withConfig()`, and object-call forms
- display names, filenames, meaningless filenames, namespaces, SSR IDs, and MurmurHash2 IDs
- CSS minification, interpolation elimination, template lowering, and PURE annotations
- string, template, helper, dynamic, and object `css` props
- computed object keys, nested objects, spreads, JSX member names, and injected imports
- every public plugin option plus the macro custom-import hook

Correctness is checked by 68 tests:

- all 48 fixtures from upstream version 2.3.0 at commit
  `ab3aaf50921075b219718f9357abd4fae4bcb9b7`
- 14 additional focused Babel-to-Yuku parity cases
- 6 end-to-end and split-profile contracts across Babel, SWC, and Yuku

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

Node 24.18.1 is pinned because it was the latest Node 24 release when this result was recorded. See
the [official Node 24 archive](https://nodejs.org/en/download/archive/v24).

Each tool runs in a fresh child process for each of three independent runs. Every run warms for
1,000 ms and measures for 5,000 ms. Tool order rotates between runs. The reported end-to-end value
is the median of the three run medians. The profile repeats the same warmup, duration, run count,
process isolation, and rotation, and retains raw per-run stage means.

## Exact reproduction

The immutable `styled-components-full-port-v2` tag fixes the source. `package-lock.json` fixes the
dependency graph. The script rejects any Node version other than 24.18.1, overrides measurement
environment variables with the recorded settings, runs all 68 correctness tests, runs both
benchmarks, validates the result metadata, and regenerates the SVG charts.

```bash
git clone https://github.com/SoonIter/transform-plugin-benchmark.git
cd transform-plugin-benchmark
git checkout styled-components-full-port-v2

node --version # must print v24.18.1
npm --version  # must print 11.16.0
npm ci
npm run reproduce:styled-components
```

The command writes [`result/styled-components.json`](result/styled-components.json) and regenerates
both files under [`charts`](charts). Inspect machine-specific differences with:

```bash
git diff -- result/styled-components.json charts/
```

Absolute latency depends on CPU, operating-system load, power mode, and thermal state. The raw JSON
records hardware, tool versions, fixture size, options, all run medians, sample counts, RME, stage
means, stage shares, and individual stage-run means.

## Development

```bash
npm ci
npm run type-check
npm test
npm run charts
```

For exploratory non-canonical runs, invoke `npm run bench:styled-components` with `BENCH_TIME`,
`BENCH_WARMUP`, `BENCH_RUNS`, `PROFILE_TIME`, `PROFILE_WARMUP`, or
`STYLED_COMPONENTS_COUNT`. The exact reproduction command intentionally overrides those variables.
