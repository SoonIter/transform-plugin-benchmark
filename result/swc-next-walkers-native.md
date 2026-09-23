# SWC Next with independent styled-components plugins

These measurements use two independent TypeScript styled-components plugins, with no walker compatibility layer. Both use the same SWC Next parser/printer, options, AST builders, CSS and hashing algorithms, and phase order. Each timed iteration transforms all 87 source files from fresh parses.

Yuku uses its native mutation context. Zimmerframe uses native `path`, `next`, `visit`, and returned replacements; its CSS-prop visitor walks the known JSX attribute list in source order. The full plugin implementation lives in each file. No transform code is shared at runtime.

The earlier `swc-next-walkers.json` measured the compatibility adapter. It is retained as historical data, not used for a controlled before/after claim: both current plugins also use an aligned phase order, and the runs happened at different times.

## Environment and protocol

- Runtime: Node 24.18.1; Apple M5 Max; darwin 25.6.0 (arm64).
- Corpus: react-boilerplate v4.0.0, commit `d19099afeff64ecfb09133c06c1cb18c0d40887e`; 87 files / 57,051 bytes.
- Versions: SWC Next 0.2.1, yuku-ast 0.8.5, Zimmerframe 1.1.5.
- End to end: 6 fresh processes per variant, alternating order; 3 s warmup + 10 s measurement per process.
- Stage profiles: 6 separate processes per variant; 1 s warmup + 5 s measurement.
- End-to-end values are medians of six process medians. Profile stages are medians of six process means, measured in separate runs; they need not sum to the end-to-end median.
- Validation: 211 tests passed, type-check passed. Outputs are byte-identical across all 87 corpus files and 67 plugin cases; the latter also compare PURE comments with Yuku codegen.

## End-to-end measurements

| Pipeline | Median (ms / corpus) | Run spread | Total samples |
|---|---:|---:|---:|
| SWC Next + Yuku walk | 5.247 | 3.94% | 10,961 |
| SWC Next + Zimmerframe | 5.221 | 2.24% | 10,971 |

| Round | Yuku (ms) | Zimmerframe (ms) |
|---|---:|---:|
| 1 | 5.223 | 5.178 |
| 2 | 5.257 | 5.190 |
| 3 | 5.237 | 5.229 |
| 4 | 5.198 | 5.213 |
| 5 | 5.404 | 5.253 |
| 6 | 5.377 | 5.295 |

Zimmerframe / Yuku median ratio: **0.995×**. This is a corpus-specific comparison of the complete native plugin pipelines, not a pure walker benchmark. The approximately 0.5% median difference is smaller than either variant's observed run spread and does not establish a stable winner. Native visitor dispatch, replacement propagation, allocation, and plugin logic still contribute; removing the adapter does not isolate their individual costs.

## Stage profiles

| Stage | Yuku (ms / corpus) | Zimmerframe (ms / corpus) |
|---|---:|---:|
| parse | 0.359 | 0.367 |
| AST decode | 0.255 | 0.253 |
| plugin transform | 4.279 | 4.242 |
| AST encode + codegen | 1.050 | 1.048 |

Profile iterations: Yuku 4,943; Zimmerframe 5,010.

## Reproduction and source identity

```sh
fnm use 24.18.1
npm ci
npm run type-check
npm test
npm run bench:walkers
```

Raw data: [swc-next-walkers-native.json](swc-next-walkers-native.json). Base commit: `9d2cfdab027013faeb87b586b9ebae8d52dd035f`; branch: `codex/separate-walker-plugins`. The measurements include the local changes on that branch.

Plugin source SHA-256 at measurement time:

- [yuku-styled-components-plugin.ts](../scripts/yuku-styled-components-plugin.ts): `d679450360d6d696a46677ab743dc26771149091cc3c70062e0af5b9454537a2`
- [zimmerframe-styled-components-plugin.ts](../scripts/zimmerframe-styled-components-plugin.ts): `378eb042fa646d4c6be49120cb7152ada710133133f4d423b9766d99bd6a539d`
