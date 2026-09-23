# SWC Next：Yuku walk 与 Zimmerframe 性能对比

> 历史兼容层实验。当前 `npm run bench:walkers` 已使用两个独立的原生插件，输出
> `swc-next-walkers-native.json`，不再复现本文的兼容层版本。最新结果见
> [原生插件报告](swc-next-walkers-native.md)。

日期：2026-09-16。所有改动和数据均保留在本地，未推送远端。

本次接入没有测到性能收益。延长采样后，Zimmerframe 端到端耗时高 **8.6%**，插件阶段耗时高 **10.9%**。

## 端到端结果

每个样本完整转换同一批 87 个文件（57,051 bytes、32 个 styled components）。单位 ms，越低越好。

| 方案 | 六次进程中位数的中位数 | 相对 Yuku | 进程中位数范围 | 跨进程波动 | 样本数 |
|---|---:|---:|---:|---:|---:|
| SWC Next + Yuku walk | 5.336 | 1.000× | 5.300–5.552 | 4.72% | 10,421 |
| SWC Next + Zimmerframe | 5.794 | 1.086× | 5.648–6.826 | 20.32% | 9,380 |

| 独立进程轮次 | Yuku walk | Zimmerframe | Zimmerframe 耗时变化 |
|---|---:|---:|---:|
| 1 | 5.353 | 5.648 | +5.5% |
| 2 | 5.302 | 5.746 | +8.4% |
| 3 | 5.300 | 5.843 | +10.2% |
| 4 | 5.454 | 5.657 | +3.7% |
| 5 | 5.552 | 6.826 | +22.9% |
| 6 | 5.320 | 6.191 | +16.4% |

每轮使用两个顺序执行的新进程，顺序按 Yuku→Zimmerframe、Zimmerframe→Yuku 交替。每进程预热 3 秒、测量 10 秒，单次样本包括 parse → plugin → print。主结果取六个进程内 p50 的中位数；波动为 `(max − min) / 中位数`。

## 单独运行的分阶段计时

每项取六个独立进程的阶段均值的中位数。每进程预热 1 秒、测量 5 秒。它和端到端 p50 的统计口径不同，不能相加后当作端到端 p50。

| 阶段 | Yuku walk (ms) | Zimmerframe (ms) | 耗时变化 |
|---|---:|---:|---:|
| parse | 0.362 | 0.370 | +2.4% |
| AST decode | 0.252 | 0.256 | +1.8% |
| plugin transform | 4.083 | 4.528 | +10.9% |
| AST encode + codegen | 1.092 | 1.067 | -2.2% |

插件阶段包括原有插件的作用域收集、文件哈希/文件系统访问、转换逻辑和 walker 适配开销。此次实验没有单独隔离纯遍历成本，因此不能把阶段差值全部归因于 Zimmerframe 的内部遍历实现。

## 首轮结果与波动

首轮每进程预热 1 秒、测量 5 秒，各方案同样运行六个独立进程；因为波动较大，完整保留数据后延长端到端采样复测。两轮使用相同实现，没有按结果调优或剔除进程。

| 测量 | Yuku walk | Zimmerframe | Zimmerframe 耗时变化 |
|---|---:|---:|---:|
| 首轮 | 5.654 ms | 6.082 ms | +7.6% |
| 延长采样 | 5.336 ms | 5.794 ms | +8.6% |

延长采样后的跨进程波动仍为 Yuku 4.72%、Zimmerframe 20.32%，首轮两组范围有重叠；延长采样后的六个配对轮次中，Zimmerframe 均较慢。这是在日常桌面环境的测量，观察到背景进程活动，没有隔离系统负载；不声称统计显著或跨机器可复现的固定百分比。两轮端到端结果和插件阶段都未显示 Zimmerframe 提速。

## 接入与正确性

- 固定 `@swc-next/core@0.2.1` 的解析、AST、打印流程和所有插件选项，仅切换插件中的 walker。
- 基线为 `yuku-ast@0.8.5` 导出的 `walk`；对照为 `zimmerframe@1.1.5`。
- Zimmerframe 的适配层保留插件所用的祖先链、Function 别名、原地替换/删除、替换节点子树遍历和合成节点位置信息。适配成本计入性能数据。
- 插入 CSS prop 所需 import 时改为替换 Program.body 数组，以避免改变正在遍历的数组导致漏访；此修正同样应用于两组。
- 87 个真实文件、14 个附加用例和 48 个上游 fixture 在 SWC Next 两种 walker 下均逐字节一致。
- 两组均生成 32 个 withConfig、32 个唯一 componentId、32 个 displayName，保留 137 个 JSX 元素，无残留 tagged template；输出均为 45,555 bytes。
- 全部 139 项测试通过；`npm run type-check` 通过。

Zimmerframe 的原生 API 与 Yuku 的可变 AST 接口不同，因此这里测的是实际兼容适配后的替换方案。API 语义参考 [Zimmerframe 官方说明](https://github.com/sveltejs/zimmerframe)。

## 补充：直接调用 walker 的只读遍历

后续为解释差异，额外移除插件和兼容适配层，直接对同一批 87 个预解析 SWC Next AST 做 Identifier 计数。两种 walker 均计数 1,916 个 Identifier。每种方案六个独立进程，交替顺序，预热 1 秒、测量 2 秒；重复使用已解析 AST 和 visitor 对象，不计 parse、插件转换或 print。

| 直接调用的 walker | 每批遍历中位数 |
|---|---:|
| yuku-ast walk | 0.199770 ms |
| Zimmerframe walk | 0.178208 ms |

在这个只读遍历实验中，Zimmerframe 耗时低 10.8%。因此前面的端到端结果不支持“Yuku walker 本体更快”的结论。

源码显示当前 Zimmerframe 适配层在每个命中的 visitor 处额外构造 context/闭包；替换节点时通过 Object.keys / indexOf 重新查找父节点字段，并为替换子树重新构造 visitor 映射和启动 walk。Yuku 原生可变遍历已经持有父字段/数组位置，直接应用替换并继续遍历。适配开销是组合差距的合理解释，但此次没有逐项消融，不能量化每一项的贡献。只读遍历与真实转换的工作不同，也不能把两次测量的差值相减作为适配成本。

另外，Zimmerframe 支持不可变替换，但这次适配层直接修改父节点、不返回替换节点，没有走它的祖先克隆路径，不能用“不可变克隆成本”解释上面的结果。

[只读遍历原始数据](swc-next-walkers-traversal.json)；复现命令（仓库根目录）：

```bash
fnm exec --using 24.18.1 node scripts/bench-walker-traversal.mjs
```

### 原因验证：Yuku 每次 walk 的分发表初始化

只对 yuku-ast 的临时副本增加一个变化：用 WeakMap 按 visitors 对象身份缓存 createDispatch 的结果。该实验的 visitors 固定且不修改，其他遍历代码不变，未修改已安装依赖。仍为六个独立进程、每进程预热 1 秒/测量 2 秒，均计数 1,916 个 Identifier。

| Yuku 只读遍历变体 | 每批中位数 |
|---|---:|
| 原实现（本轮重测） | 0.198938 ms |
| 缓存分发表 | 0.187125 ms |

缓存后耗时低 5.9%，说明每批 87 次 walk 的分发表初始化确实构成可测成本。缓存组有一次进程中位数升至 0.262125 ms，原始数据完整保留，未剔除；其余五轮缓存组均较对应基线快。这个实验只验证了一个因素，不能把不同轮次的百分比相减、宣称解释了前述 10.8% 差距中的固定比例。

源码还显示 Yuku 为每个节点在进入和离开时维护 context 位置、检查修改与 leave 钩子；Zimmerframe 在节点没有匹配 visitor 时直接递归，不构建 context。这些是只读稀疏 visitor 场景下其他可能的开销来源，尚未单独量化。缓存实验要求 visitor 对象不变；不能直接作为支持可变 visitors 的通用修复。

[分发表缓存实验原始数据](swc-next-walkers-dispatch.json)。

## 测量环境

- Node 24.18.1；npm 11.16.0。
- Apple M5 Max；18 个逻辑核；64 GB RAM。
- darwin 25.6.0 (arm64)；macOS 26.6.2。
- corpus：react-boilerplate v4.0.0，commit `d19099afeff64ecfb09133c06c1cb18c0d40887e`。
- 仓库旧 README 的性能数据来自 M1 Max，不与本次绝对耗时作直接对比。

## 复现与原始数据

```bash
fnm use 24.18.1
npm ci
npm run type-check
npm test
npm run bench:walkers
```

- [延长采样原始 JSON](swc-next-walkers.json)：各进程中位数、样本数、阶段均值、输出校验计数、版本和环境。
- [首轮原始 JSON](swc-next-walkers-initial.json)：首轮输出完成后归档，保留原始测量参数。

首轮复现（当前脚本的短时配置）：

```bash
BENCH_RUNS=6 BENCH_TIME=5000 BENCH_WARMUP=1000 \
PROFILE_TIME=5000 PROFILE_WARMUP=1000 \
STYLED_COMPONENTS_RESULT=swc-next-walkers-initial.json \
node --import tsx scripts/bench-styled-components.ts --walkers
```
