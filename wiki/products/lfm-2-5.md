---
name: LFM 2.5
description: Liquid AI's 230M-parameter non-transformer foundation model built on state-space + liquid-neural-network continuous-time formulations; claims performance parity with transformer models three times its size on core edge reasoning + sequence generation benchmarks (Jun 2026)
type: product
---

# LFM 2.5

> **Type**: product
> **Vendor**: [[liquid-ai]]
> **First mentioned**: 2026-06-27-morning
> **Last updated**: 2026-08-09-morning (**LFM2.5-2.6B agentic-tier variant surfaces — Liquid AI ships a **2.6B-parameter agentic sibling** built for planning + tool calling + multi-step tasks entirely on-device; 128K context; native tool calling; Hugging Face distribution; day-one inference-runtime support across llama.cpp + MLX + vLLM + SGLang + ONNX**. NLP Newsletter HIGH: *"Liquid AI released LFM2.5-2.6B, a 2.6B-parameter model built for agentic workloads, which can plan, call tools, and handle multi-step tasks while running entirely on-device. The model has a 128K context window and native tool calling, and is available on Hugging Face"*. researchFindings additional context: *"open-weight model built specifically for agentic workloads: it can plan, call tools, and handle multi-step tasks while running entirely on-device, with a 128K context window and native tool calling"* + *"small and efficient enough for phones and other edge devices, while still fast enough for practical local deployment"* + *"available alongside a base checkpoint on Hugging Face"* + *"August 2026 release and rollout across the on-device AI stack, with day-one support for inference runtimes such as llama.cpp, MLX, vLLM, SGLang, and ONNX"* + *"targets privacy-sensitive and cost-sensitive use cases by keeping data local and reducing cloud inference needs, which matters for regulated industries, embedded systems, and developers building local agents"* + *"performs competitively with or better than larger models on instruction following and tool-use tasks"*. First publicly framed on this cycle: (a) *2.6B-parameter agentic-tier variant of the LFM 2.5 family* — sharpens the June 2026 230M non-transformer LFM 2.5 into an *11× larger agentic-tier sibling* (structurally novel — Liquid AI now spans a 230M-to-2.6B model-family range, positioning LFM 2.5 as *architecture-family umbrella* rather than single-model release); (b) *128K context + native tool calling on-device anchor* — first publicly framed *on-device 128K + tool-calling primitive* on Liquid AI in this wiki; positions LFM2.5-2.6B as *on-device agentic-substrate tier* distinct from typical <8K on-device LLM norms; (c) *day-one llama.cpp + MLX + vLLM + SGLang + ONNX five-runtime canonical support* — first publicly framed *day-one five-inference-runtime canonical distribution posture* on any single-vendor open-weights release in this wiki; graduates Liquid AI from *research-tier release* to *canonical on-device inference-runtime cohort* at day-zero; (d) *"privacy-sensitive and cost-sensitive use cases by keeping data local and reducing cloud inference needs"* framing — first publicly framed *canonical on-device competitive positioning* on LFM 2.5 in this wiki (extends the June 2026 edge-reasoning framing into an *on-device-agentic-workload substitution-for-cloud-inference* thesis); (e) *"competitively with or better than larger models on instruction following and tool-use tasks"* benchmark framing — first publicly framed *tool-use-task benchmark superiority* on LFM 2.5 in this wiki. Sibling launch cluster with [[muse-code]] + [[prime-agent]] + [[qwen-3-8-max]] + [[qwen-cua]] + [[agent-plugins]] in the same NLP Newsletter cycle productizes *on-device-agentic-tier* as canonical vertical alongside coding-agent-tier + frontier-model-tier. See [[liquid-ai]] + [[agent-frameworks]] + [[muse-code]] + [[prime-agent]] — *source: data/summaries/2026-08-09-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: Agent Plugins Standard, Qwen3.8-Max, Meta Muse Code, Prime Agent, LFM2.5-2.6B, Qwen-CUA, Harness Evolution Papers"; researchFindings.additionalContext for LFM2.5-2.6B)*)
> **Previously updated**: 2026-06-27-morning
> **Status**: released (LFM 2.5 230M base + LFM2.5-2.6B agentic-tier variant)
> **Related**: [[liquid-ai]], [[ai-hardware]], [[diffusion-gemma]], [[gemma-3-270m]], [[apple]], [[agent-frameworks]]

## Summary

LFM 2.5 is [[liquid-ai]]'s 230-million-parameter foundation model, structurally distinct from prior on-device-LLM efforts by *replacing* the transformer architecture with state-space + liquid-neural-network continuous-time formulations rather than scaling down a transformer. The vendor claims LFM 2.5 achieves performance parity with transformer models *three times its size* on core edge-reasoning and sequence-generation benchmarks — implying a 230M LFM 2.5 matches the performance of a 690M-equivalent transformer at roughly 1/3 the parameter count.

The release positions Liquid AI on a structurally novel axis in the edge-AI deployment landscape: while most edge-LLM releases (Apple AFM 3 Core Advanced, Gemma 3 270M, Phi-3) compress transformer architectures, LFM 2.5 productizes the *architectural-replacement* thesis — that transformer-architecture-side bottlenecks at edge tier are severe enough that non-transformer alternatives can deliver compression gains beyond what transformer-side compression alone can achieve. The continuous-time formulations are the load-bearing differentiator vs the prior LFM2-2.6B-Exp generation.

## Timeline

- **2026-08-09-morning**: **LFM2.5-2.6B agentic-tier variant released — 2.6B-parameter agentic sibling built for planning + tool calling + multi-step tasks entirely on-device; 128K context; native tool calling; Hugging Face distribution + day-one llama.cpp + MLX + vLLM + SGLang + ONNX five-runtime canonical support** — *source: data/summaries/2026-08-09-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: Agent Plugins Standard, Qwen3.8-Max, Meta Muse Code, Prime Agent, LFM2.5-2.6B, Qwen-CUA, Harness Evolution Papers"; researchFindings.additionalContext for LFM2.5-2.6B)*

- **2026-06-27-morning**: **LFM 2.5 announced — 230M-parameter non-transformer + state-space + liquid-neural-network continuous-time formulations + 3× transformer parity at 1/3 the parameter count + core edge reasoning + sequence generation benchmarks**. TLDR HIGH "US vs. OpenAI 🏛️" lands ***"Liquid AI announced the release of LFM 2.5, a 230-million-parameter non-transformer model architecture built on top of state-space and liquid neural network continuous-time formulations, achieving performance parity with transformer models three times its size on core edge reasoning and sequence generation benchmarks"***. First publicly framed in this wiki — see [[liquid-ai]] for company-side detail + [[ai-hardware]] for trend-side edge-AI cycle context. Structurally significant three ways: (a) **non-transformer architecture at edge tier** — inverts the prior edge-LLM compression strategy by replacing the transformer architecture entirely; (b) **3× parameter compression at parity** — unlocks substantial new edge-hardware deployment tiers (smartphones with limited NPU/memory budgets, IoT devices, automotive infotainment, wearables); (c) **edge-reasoning + sequence-generation dual-benchmark focus** — explicitly positions LFM 2.5 not as a classification/embedding-only on-device tier but as an edge-capable reasoning + generation substrate — *source: data/summaries/2026-06-27-morning.json (TLDR AI HIGH "US vs. OpenAI 🏛️" — Liquid AI announced the release of LFM 2.5 a 230-million-parameter non-transformer model architecture built on top of state-space and liquid neural network continuous-time formulations + achieving performance parity with transformer models three times its size on core edge reasoning and sequence generation benchmarks)*

## Key Facts

- Vendor: [[liquid-ai]]
- Parameter count: 230M
- Architecture: non-transformer; state-space + liquid-neural-network continuous-time formulations
- Benchmark claim: parity with transformer models 3× the size on core edge reasoning + sequence generation
- Predecessor: LFM2-2.6B-Exp (Dec 2025, 3B-tier transformer-based)

## Open Questions

- Specific benchmark numbers + which transformer-comparison models were used (Phi-3? Gemma 3? Llama 4 small? OpenELM?)
- Licensing terms — Apache 2.0 / Liquid License / commercial-only?
- Hardware deployment substrates — which mobile NPUs / IoT MCUs / automotive SoCs are supported?
- Quantization story — does the 230M figure refer to FP16 / BF16 / INT8 / INT4?
- Real-world latency + memory footprint vs the 690M-equivalent transformer baseline
- Multilingual support + context-window size
- Inference throughput on commodity edge silicon (Apple A-series + Qualcomm Snapdragon + MediaTek Dimensity)
- Roadmap relationship to the prior LFM2 family — is this LFM2 successor or LFM3 precursor?

## Sources

- data/summaries/2026-06-27-morning.json (TLDR AI HIGH "US vs. OpenAI 🏛️" — Liquid AI announced the release of LFM 2.5)
