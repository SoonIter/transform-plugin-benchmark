# Transform Plugin Benchmark

Reproducible benchmark of six styled-components transform pipelines:

- `babel-plugin-styled-components` as a Babel JavaScript plugin
- `@swc/plugin-styled-components` as an SWC WASM plugin
- the Babel plugin behavior ported to a Yuku JavaScript plugin
- the same Yuku parser and plugin with `oxc-codegen`
- `oxc-parser` + the Yuku walk plugin + `oxc-codegen`
- the same OXC pipeline with `experimentalRawTransfer`

The workload is a pinned real-world multi-file corpus. Every timed iteration starts with the same
87 source files and ends with generated code for all 87 files.

## Result

Node.js 24.18.1 on the machine documented below. Lower is better.

![End-to-end styled-components transform latency](charts/styled-components-latency.svg)

| Transformer | Median | Independent run medians | Run spread | Relative to Yuku |
|-------------|-------:|-------------------------|-----------:|-----------------:|
| **OXC raw transfer + Yuku walk** | **6.49 ms** | 6.473, 6.492, 6.551 ms | 1.20% | 0.74× |
| Yuku + OXC codegen | 6.61 ms | 6.516, 6.644, 6.606 ms | 1.94% | 0.75× |
| Yuku + JS plugin | 8.82 ms | 8.832, 8.712, 8.822 ms | 1.36% | 1.00× |
| OXC + Yuku walk plugin | 9.21 ms | 9.074, 9.206, 9.250 ms | 1.91% | 1.04× |
| Babel + JS plugin | 33.16 ms | 33.158, 33.422, 33.052 ms | 1.12% | 3.76× |
| SWC + WASM plugin | 85.02 ms | 84.464, 85.365, 85.021 ms | 1.06% | 9.64× |

Replacing Yuku's AST encode and native codegen path with `oxc-codegen` reduced the complete Yuku
pipeline median by 25.1%, from 8.82 ms to 6.61 ms. OXC raw transfer reduced the complete OXC
pipeline median by 29.5%, from 9.21 ms to 6.49 ms. These are full `parse → plugin → codegen`
results across 87 modules, not standalone walker or codegen microbenchmarks.

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
coverage: all six pipelines emit 32 `.withConfig` calls, 32 display names, 32 unique component
IDs, preserve 137 JSX elements, and leave no styled tagged templates. Every output is reparsed
before measurement. JSX lowering is outside the measured transform endpoint.

**OXC limitation:** `oxc-codegen` does not print comments; its three rows drop PURE annotations.

## Inspectable artifacts

The full inputs are the vendored corpus. A representative styled component and all six generated
forms are committed under [`artifacts/styled-components`](artifacts/styled-components):

- [`input.jsx`](artifacts/styled-components/input.jsx)
- [`babel-output.jsx`](artifacts/styled-components/babel-output.jsx)
- [`swc-output.jsx`](artifacts/styled-components/swc-output.jsx)
- [`yuku-output.jsx`](artifacts/styled-components/yuku-output.jsx)
- [`yuku-oxc-codegen-output.jsx`](artifacts/styled-components/yuku-oxc-codegen-output.jsx)
- [`oxc-output.jsx`](artifacts/styled-components/oxc-output.jsx)
- [`oxc-raw-transfer-output.jsx`](artifacts/styled-components/oxc-raw-transfer-output.jsx)
- [`manifest.json`](artifacts/styled-components/manifest.json), containing aggregate corpus/output
  hashes, byte sizes, and validation counts

The Yuku-parser, regular OXC, and raw-transfer OXC outputs printed by `oxc-codegen` are asserted
byte-for-byte equal across the complete corpus.

## Stage breakdown

Stage profiling is a separate instrumented run over the same corpus. Each value is the median of
three independent run means; stage values add up within a pipeline.

![Styled-components pipeline stage shares](charts/styled-components-stages.svg)

| Transformer | Stage | Runtime | Median run mean | Share |
|-------------|-------|---------|----------------:|------:|
| Babel + JS plugin | parse | JS | 4.436 ms | 10.8% |
| Babel + JS plugin | plugin transform | JS | 28.740 ms | 70.2% |
| Babel + JS plugin | codegen | JS | 7.783 ms | 19.0% |
| SWC + WASM plugin | parse + plugin + codegen | native + WASM | 84.775 ms | 100.0% |
| Yuku + JS plugin | source encode | JS | 0.109 ms | 1.2% |
| Yuku + JS plugin | parse | native | 0.753 ms | 8.2% |
| Yuku + JS plugin | AST decode | JS | 0.377 ms | 4.1% |
| Yuku + JS plugin | plugin transform | JS | 5.538 ms | 60.3% |
| Yuku + JS plugin | AST encode | JS | 1.872 ms | 20.4% |
| Yuku + JS plugin | codegen | native | 0.534 ms | 5.8% |
| Yuku + OXC codegen | source encode | JS | 0.125 ms | 1.8% |
| Yuku + OXC codegen | parse | native | 0.720 ms | 10.6% |
| Yuku + OXC codegen | AST decode | JS | 0.357 ms | 5.3% |
| Yuku + OXC codegen | plugin transform | JS | 5.381 ms | 79.1% |
| Yuku + OXC codegen | codegen | JS | 0.219 ms | 3.2% |
| OXC + Yuku walk plugin | parse + AST transfer | native + JS | 1.242 ms | 13.0% |
| OXC + Yuku walk plugin | plugin transform | JS | 8.052 ms | 84.1% |
| OXC + Yuku walk plugin | codegen | JS | 0.281 ms | 2.9% |
| OXC raw transfer + Yuku walk | parse + raw AST transfer | native + JS | 1.065 ms | 15.5% |
| OXC raw transfer + Yuku walk | plugin transform | JS | 5.564 ms | 81.1% |
| OXC raw transfer + Yuku walk | codegen | JS | 0.229 ms | 3.3% |

SWC exposes the WASM plugin through a complete transform call, not as an independently measurable
AST stage. Its row therefore stays combined. The benchmark does not estimate plugin time by
subtraction.

The OXC parse stages include native parsing and transfer into JavaScript ESTree objects. The raw
pipeline uses `{ experimentalRawTransfer: true }`; its lower plugin-stage time is an observed
property of that complete AST representation and walk, not proof that raw transfer alone speeds up
arbitrary JavaScript code.

### Stages excluding separable plugin execution

![Stage shares after removing plugin execution](charts/styled-components-stages-without-plugin.svg)

| Transformer | Directly measured remainder | Remainder normalized to 100% |
|-------------|----------------------------:|------------------------------|
| Babel + JS plugin | 12.219 ms | parse 36.3%, codegen 63.7% |
| SWC + WASM plugin | not separable | plugin shares the public transform call |
| Yuku + JS plugin | 3.645 ms | encode 3.0%, parse 20.7%, decode 10.3%, AST encode 51.4%, codegen 14.7% |
| Yuku + OXC codegen | 1.420 ms | encode 8.8%, parse 50.7%, decode 25.2%, codegen 15.4% |
| OXC + Yuku walk plugin | 1.524 ms | parse + AST transfer 81.5%, codegen 18.5% |
| OXC raw transfer + Yuku walk | 1.294 ms | parse + raw AST transfer 82.3%, codegen 17.7% |

This view removes only the directly measured `plugin transform` stage and renormalizes the
remainder. It is not a separate no-op benchmark.

## Correctness coverage

The Yuku implementation is in
[`scripts/yuku-styled-components-plugin.ts`](scripts/yuku-styled-components-plugin.ts). The test
suite has 71 cases:

- 48 upstream fixtures from `babel-plugin-styled-components@2.3.0`
- 14 additional Babel-to-Yuku parity cases
- 9 corpus, profile, output, and committed-artifact contracts

The benchmark contract validates feature coverage rather than printer formatting. All three
`oxc-codegen` pipelines must also generate identical corpus outputs.

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
| OXC | parser and codegen `0.144.0` |

Each transformer runs in a fresh child process for each of three independent runs. A run warms for
1,000 ms and measures for 5,000 ms. Transformer order rotates between runs. The headline value is
the median of the three run medians; “run spread” is `(maximum − minimum) / reported median`.
The median within-run RME remains in the raw JSON but is not presented as a cross-process
confidence interval.

The profile uses the same process isolation, rotation, warmup, duration, and three-run aggregation.
The raw data is committed in [`result/styled-components.json`](result/styled-components.json).

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

For development:

```bash
npm run type-check
npm test
npm run artifacts
npm run charts
```

Exploratory runs can override `BENCH_TIME`, `BENCH_WARMUP`, `BENCH_RUNS`, `PROFILE_TIME`, or
`PROFILE_WARMUP`. The exact reproduction command always restores the recorded settings.
