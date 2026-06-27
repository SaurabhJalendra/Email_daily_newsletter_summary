---
name: LFM 2.5
description: Liquid AI's 230M-parameter non-transformer foundation model built on state-space + liquid-neural-network continuous-time formulations; claims performance parity with transformer models three times its size on core edge reasoning + sequence generation benchmarks (Jun 2026)
type: product
---

# LFM 2.5

> **Type**: product
> **Vendor**: [[liquid-ai]]
> **First mentioned**: 2026-06-27-morning
> **Last updated**: 2026-06-27-morning
> **Status**: released
> **Related**: [[liquid-ai]], [[ai-hardware]], [[diffusion-gemma]], [[gemma-3-270m]], [[apple]]

## Summary

LFM 2.5 is [[liquid-ai]]'s 230-million-parameter foundation model, structurally distinct from prior on-device-LLM efforts by *replacing* the transformer architecture with state-space + liquid-neural-network continuous-time formulations rather than scaling down a transformer. The vendor claims LFM 2.5 achieves performance parity with transformer models *three times its size* on core edge-reasoning and sequence-generation benchmarks — implying a 230M LFM 2.5 matches the performance of a 690M-equivalent transformer at roughly 1/3 the parameter count.

The release positions Liquid AI on a structurally novel axis in the edge-AI deployment landscape: while most edge-LLM releases (Apple AFM 3 Core Advanced, Gemma 3 270M, Phi-3) compress transformer architectures, LFM 2.5 productizes the *architectural-replacement* thesis — that transformer-architecture-side bottlenecks at edge tier are severe enough that non-transformer alternatives can deliver compression gains beyond what transformer-side compression alone can achieve. The continuous-time formulations are the load-bearing differentiator vs the prior LFM2-2.6B-Exp generation.

## Timeline

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
