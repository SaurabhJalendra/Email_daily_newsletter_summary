---
name: Liquid AI
description: MIT-spinout small-model lab behind the LFM2 family
type: company
---

# Liquid AI

> **Type**: company
> **First mentioned**: 2025-12-27
> **Last updated**: 2026-08-25-evening (**Pipette launch cycle — Liquid AI + Artificial Analysis publish [[pipette]] open-source on-device benchmark stack measuring *quality, speed, latency, memory across model × quantization × runtime × device combinations*. AINews HIGH: *"Liquid AI + Artificial Analysis has launched a serious on-device benchmark stack, called Pipette, which measures quality, speed, latency, and memory across model + quantization + runtime + device combinations"*. Rundown AI MEDIUM: *"Liquid AI has launched Pipette, a new open-source suite that benchmarks AI models on phones and laptops"*. First publicly framed *cross-vendor + cross-runtime + cross-quantization + cross-device on-device benchmark grid* on Liquid AI in this wiki — graduates Liquid AI from *edge-optimized model vendor* into *canonical on-device benchmark-methodology publisher*. Structurally significant: pairs cycle-structurally with [[benchmark-integrity]] trend (evaluation-tier substrate as first-class artifact) — Pipette is the *on-device-tier concrete instantiation* of the harness-transparency thesis. See [[pipette]] (NEW) + [[benchmark-integrity]] — *source: data/summaries/2026-08-25-evening.json (AINews HIGH "Andrew Ng gets into AI Engineering"; The Rundown AI "SpaceX-Nvidia partnership heads for orbit")*)
> **Previously updated**: 2026-06-27-morning (**Reactivated from stale — TLDR HIGH "US vs. OpenAI 🏛️" lands ***"Liquid AI announced the release of LFM 2.5, a 230-million-parameter non-transformer model architecture built on top of state-space and liquid neural network continuous-time formulations, achieving performance parity with transformer models three times its size on core edge reasoning and sequence generation benchmarks"*** — first publicly framed *LFM 2.5 230M non-transformer release* + first publicly framed *3× transformer parity at 1/3 the parameter count* benchmark claim + first publicly framed *state-space + liquid-neural-network continuous-time formulations* architecture detail in this wiki; see [[lfm-2-5]]**)
> **Status**: active
> **Related**: [[lfm-2-5]], [[ai-hardware]], [[agent-frameworks]]

## Summary

Liquid AI is the MIT-spinout AI lab best known for its Liquid Foundation Model (LFM) line — compact, efficient models aimed at on-device and cost-sensitive workloads. In late December 2025 newsletters highlight LFM2-2.6B-Exp, a new 3B-tier model that outperforms other 3B open models on instruction following, knowledge, and math benchmarks.

## Timeline

- **2026-06-27-morning**: **LFM 2.5 release — 230M-parameter non-transformer model + state-space + liquid-neural-network continuous-time formulations + 3× transformer parity at 1/3 the parameter count + core edge reasoning + sequence generation benchmarks**. TLDR HIGH "US vs. OpenAI 🏛️" lands ***"Liquid AI announced the release of LFM 2.5, a 230-million-parameter non-transformer model architecture built on top of state-space and liquid neural network continuous-time formulations, achieving performance parity with transformer models three times its size on core edge reasoning and sequence generation benchmarks"*** — first publicly framed *LFM 2.5 230M non-transformer* release in this wiki + first publicly framed *3× transformer parity at 1/3 the parameter count* benchmark claim + first publicly framed *state-space + liquid-neural-network continuous-time formulations* architecture detail. Structurally significant three ways: (a) **non-transformer architecture at edge tier** — most edge-deployable LLMs target on-device efficiency by *scaling down* transformer architectures (e.g., Apple AFM 3 Core Advanced, Gemma 3 270M, Phi-3); LFM 2.5 inverts the strategy by *replacing* the transformer architecture entirely with state-space + liquid-neural-network continuous-time formulations, suggesting transformer-architecture-side bottlenecks at edge tier are sufficiently severe that architectural replacement is more efficient than transformer-architecture compression; (b) **3× parameter compression at parity** — if the benchmark claim holds in independent eval, a 230M LFM 2.5 matching 690M-equivalent-transformer performance unlocks substantial new edge-hardware deployment tiers (smartphones with limited NPU + memory budgets, IoT devices, automotive infotainment, wearables); (c) **edge-reasoning + sequence-generation focus** — explicit dual-benchmark framing positions LFM 2.5 as not just an efficient embedding/classification model but as an *edge-capable reasoning + generation substrate*, which is the structurally novel claim (prior on-device-LLM positioning has been weak on multi-step reasoning at the 230M-tier). See [[lfm-2-5]] for product-side detail + [[ai-hardware]] for the broader edge-AI architectural-pressure cycle context. Productizes the company's prior LFM2-2.6B-Exp 3B-tier-leadership posture into a *new non-transformer architectural-axis* posture rather than a pure parameter-scaling progression — *source: data/summaries/2026-06-27-morning.json (TLDR AI HIGH "US vs. OpenAI 🏛️" — Liquid AI announced the release of LFM 2.5 a 230-million-parameter non-transformer model architecture built on top of state-space and liquid neural network continuous-time formulations + achieving performance parity with transformer models three times its size on core edge reasoning and sequence generation benchmarks)*

- **2025-12-27**: LFM2-2.6B-Exp released — 3B-tier model leading instruction following, knowledge, math benchmarks among similarly-sized open models — *source: 2025-12-27 cycle*

## Key Facts

- Lineage: MIT spinout
- Model line: LFM / LFM2 (compact, efficient, on-device-friendly)
- Dec 2025 flagship: LFM2-2.6B-Exp (3B-tier)

## Open Questions

- Licensing terms for LFM2-2.6B-Exp?
- Commercial deployment / partners?
- Roadmap to larger models vs focus on small-model efficiency?

## Sources

- data/summaries/2025-12-27.json (LFM2-2.6B-Exp tops 3B-tier benchmarks)
