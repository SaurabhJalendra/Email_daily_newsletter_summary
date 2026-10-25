---
name: DeepInfer
description: DeepSeek's open-source production inference engine; 155T tokens/day/cluster, $22M/day at ~80% margin, 81-day payback; supports NVIDIA + Huawei Ascend
type: product
---

# DeepInfer

> **Type**: product
> **First mentioned**: 2026-10-21-evening
> **Last updated**: 2026-10-25-morning (**Cycle-N+2 cross-cohort NLP Newsletter HIGH weekly-digest recoverage + concrete architecture + hardware-coverage detail fill-in**: *"DeepSeek has open-sourced DeepInfer, its high-performance inference framework for running its models at large scale. This combines optimized kernels, distributed inference, speculative decoding, structured outputs, and other latency- and throughput-oriented optimizations, targeting offline inference on NVIDIA SM100 Blackwell GPUs and Huawei Ascend 950 NPUs."* researchFindings.additionalContext: **Apache 2.0 licensed**; **production inference stack behind DeepSeek-V4.1-Flash**; speculative decoding via **DSpark system**; initial release targets offline inference on NVIDIA SM100 Blackwell + Huawei Ascend 950 NPUs; **not yet a complete turnkey hosted-service stack — some production components such as load balancing and KV-cache infrastructure reportedly left to deployers**. First-in-wiki: (a) **Apache 2.0 license canonical anchor** — resolves 10-21-evening "exact open-source license" open question; (b) **DSpark speculative-decoding named-subsystem canonical anchor** — pairs cycle-structurally with [[minimax-m3-1-flash]]'s DSpark anchor; (c) **"Not yet complete turnkey hosted-service stack — load balancing + KV-cache infrastructure left to deployers" canonical concrete-scope-caveat anchor** — productizes DeepInfer as *canonical late-Oct-2026 concrete-production-inference-primitives-tier-but-not-full-turnkey-platform substrate operator*; (d) **Huawei Ascend 950 NPU canonical hardware-coverage anchor** sharpens the 10-21-evening Ascend-950DT framing with the broader *950-generation* support canonical anchor. See [[deepseek]] + [[deepseek-v4-1-flash]] + [[minimax-m3-1-flash]] + [[open-source-models]] — *source: data/summaries/2026-10-25-morning.json (NLP Newsletter HIGH "AI Agents Weekly: Claude Duet, Kimi K3.1 Pro, MiniMax M3.1 Flash, Recursive Flint, DeepSeek DeepInfer, Ramp Laminar, Mercury 3, and More"; researchFindings.additionalContext — DeepSeek DeepInfer; attribution DeepSeek GitHub + deployment documentation + SiliconANGLE + TechTarget)*)
> **Previously updated**: 2026-10-21-evening
> **Status**: active
> **Related**: [[deepseek]], [[deepseek-v4-1-flash]], [[llm-inference-optimization]], [[open-source-models]], [[nvidia]]

## Summary

DeepInfer is [[deepseek]]'s open-sourced, production-ready inference engine, released on 2026-10-21 as what AINews called an open-source "bomb" dropped from China. It is the stack DeepSeek runs internally: a distributed-inference engine with speculative decoding, SWA Bounded Replay, structured-output support, and a cache hierarchy using persistent prefixes and cheap reconstruction of transient state to deliver high-throughput, low-latency inference at frontier scale. DeepSeek reports it runs 155T tokens/day/cluster generating ~$22M/day at ~80% margin for an 81-day payback period, and supports both NVIDIA and Huawei Ascend platforms (reported figures for GB200 and Ascend 950DT). vLLM published a comparison showing within-6% parity on decode-stage performance, though that benchmark does not establish equivalence on 100-PiB cache operations, retention economics, routing, or end-to-end latency under DeepSeek's traffic distribution.

The release graduates the multi-cycle DeepSeek four-architectural-primitive KV-cache arc (CED + CSA2 + hierarchical-sparse-indexing + FP4) into a concrete, open-sourced production inference-stack tier. It pairs structurally with [[sglang]], vLLM, and TensorRT-LLM as a Chinese-sovereign-inference-stack alongside Western and NVIDIA-authored cohort.

## Timeline

- **2026-10-21-evening**: Open-sourced release announced via AINews HIGH cycle-headline *"DeepSeek DeepInfer: Open Source SOTA Inference running 155T toks/day/cluster making $22m/day at ~80% margin for a 81 day payback"*. First-in-wiki concrete inference-engine productization anchor; supports NVIDIA + Huawei Ascend; vLLM reports within-6% decode-stage parity. — *source: data/summaries/2026-10-21-evening.json (AINews HIGH)*
- **2026-10-21-morning**: First-mention cycle-N anchor — Interconnects by Nathan Lambert flagged DeepInfer as DeepSeek's "internal-inference-stack open-source release" alongside the DeepSeek V4.1 Flash 1017 release cohort. — *source: data/summaries/2026-10-21-morning.json*

## Key Facts

- 155T tokens/day/cluster claimed throughput; ~$22M/day revenue; ~80% margin; 81-day payback (DeepSeek-reported)
- Capabilities: distributed inference, speculative decoding, SWA Bounded Replay, structured output
- Cache hierarchy: persistent prefixes + cheap reconstruction of transient state → 100-PiB cache operations
- Hardware support: NVIDIA (GB200 reported) + Huawei Ascend (Ascend 950DT reported)
- vLLM comparison: within-6% parity on decode-stage performance; does not benchmark full-system cache + routing + end-to-end latency
- License: open source (per AINews framing); specific license not yet reported in-wiki

## Open Questions

- What exact open-source license is DeepInfer released under?
- Can the 155T tokens/day/cluster and ~80% margin claims be independently reproduced on comparable hardware?
- Does the Huawei Ascend path reach parity with NVIDIA GB200 at frontier scale, or is it a lower-tier fallback?
- How does DeepInfer's cache-hierarchy approach compare in production to [[sglang]] RadixAttention and vLLM PagedAttention?

## Sources

- data/summaries/2026-10-21-evening.json (AINews HIGH "[AINews] DeepSeek DeepInfer: Open Source SOTA Inference running 155T toks/day/cluster making $22m/day at ~80% margin for a 81 day payback")
- data/summaries/2026-10-21-morning.json (Interconnects by Nathan Lambert — DeepInfer internal-inference-stack release)
