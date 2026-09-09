---
name: Ironwood TPU (TPUv7)
description: Google's 7th-generation TPU for large-scale AI training and inference; Sep 2026 canonicalized as delivering 50% better performance per dollar vs NVIDIA B200/B300 + first Google TPU generation sold outright to external buyers
type: product
---

# Ironwood TPU (TPUv7)

> **Type**: product
> **Vendor**: [[google]]
> **First mentioned**: 2025-11-07
> **Last updated**: 2026-09-09-morning (**TPUv7 Ironwood 50% better perf/$ vs NVIDIA B200/B300 + Google-as-merchant-silicon-vendor productization canonical anchor cluster** — TLDR AI HIGH cycle-headline *"TPU inference ⚡"*: *"Google's TPUv7 Ironwood delivers up to 50% better performance per dollar compared to Nvidia's B200/B300 chips. Ironwood is the first generation in which Google is competing for others' inference workloads with chips that can be purchased outright or rented through its own cloud"*. Daily-digest AI Models & Research: *"Google's TPUv7 Ironwood delivers 50% better performance per dollar compared to Nvidia's B200/B300 chips"*. Notable-link: `inferencex.semianalysis.com/blog/tpu-inferencex-full-steam` (*"TPU Inference Externalization Full Steam Ahead"* SemiAnalysis analysis). First-in-wiki: (a) **"TPUv7 Ironwood" versioned-naming canonical anchor** — sharpens the multi-cycle Ironwood → TPUv7 → TPUv8 lineage with a *concrete TPUv7-Ironwood versioned-tier anchor* (previously Ironwood was framed as "7th gen TPU" without explicit v7 designation); (b) **"50% better performance per dollar vs Nvidia B200/B300" concrete-perf-per-dollar canonical anchor** — first-in-wiki *concrete-perf-per-dollar-superiority-vs-NVIDIA-flagship canonical anchor on a currently-shipping TPU generation* (structurally significant — likely-durable reference-anchor for [[llm-inference-optimization]] arc going forward; validates the multi-cycle *TPU-inference-cost-advantage* thesis with a *concrete numeric anchor*); (c) **"First generation competing for others' inference workloads" canonical distribution-model-shift anchor** — first-in-wiki *TPU-as-merchant-silicon posture canonical anchor* (structurally significant — canonicalizes Google's *TPU exits captive-hyperscaler tier into open-market inference-silicon merchant tier* fundamental substrate-shift; reads as *NVIDIA-alternative-inference-silicon substrate anchor* alongside [[amd]] MI-series + [[cerebras]] wafer-scale + [[etched]] transformer-ASIC + [[groq-3-lpx]] LPU cohort); (d) **"Purchased outright or rented through its own cloud" dual-distribution-mode canonical anchor** — first-in-wiki *TPU-outright-sale + TPU-Cloud-rental twin-distribution-mode canonical anchor* on Google (extends the multi-cycle Google-Cloud captive-TPU distribution arc with a *merchant-silicon second-mode canonical anchor*). Backdrop: Reuters-reported mid-2025 [[openai]] TPU-testing amid rising inference-cost concerns validates the *even-major-AI-labs-evaluate-non-NVIDIA-alternatives* framing. Pairs cycle-structurally with [[frozen-v2]] Google's 2028-target 6-10× more-efficient-than-current-TPUs successor + [[gemini-3-8-flash]] cost-efficient Flash-tier canonical anchor + Google Accelerator Agents for TPU Development GitHub repo — canonicalizes Google as *canonical mid-2026 second silicon-tier inference-substrate anchor after NVIDIA* on the [[llm-inference-optimization]] arc. See [[google]] + [[nvidia]] + [[amd]] + [[cerebras]] + [[etched]] + [[frozen-v2]] + [[llm-inference-optimization]] + [[open-source-models]] — *source: data/summaries/2026-09-09-morning.json (TLDR AI HIGH "OpenAI managed agents 🤖, TPU inference ⚡, Anthropic $517B compute 💰"; daily-digest AI Models & Research; researchFindings.additionalContext for TPU inference — TPU 8t training + TPU 8i inference April 2026 launch + 3× vLLM speculative-decoding gains + OpenAI mid-2025 testing)*)
> **Previously updated**: 2025-11-07
> **Status**: active (competing for external inference workloads Sep 2026)
> **Related**: [[google]], [[ai-hardware]], [[nvidia]], [[llm-inference-optimization]], [[frozen-v2]], [[amd]], [[cerebras]], [[etched]], [[groq-3-lpx]]

## Summary

Ironwood is [[google]]'s **seventh-generation TPU (TPUv7)**, first announced 2025-11-07 alongside the Axion VM line and canonicalized in the 2026-09-09-morning TLDR AI cycle as **delivering up to 50% better performance per dollar than NVIDIA's B200/B300** and — most structurally — being **the first TPU generation Google is offering to external buyers as merchant silicon**, either purchasable outright or rentable through Google Cloud. This marks a fundamental shift from the historically captive TPU model (used almost exclusively inside Google's own hyperscaler) into a *TPU-as-merchant-silicon* posture that directly competes with NVIDIA GPUs, AMD Instinct MI, and specialized inference silicon like Cerebras CS-4 and Etched's transformer-ASIC.

The 50%-better-perf-per-dollar anchor validates the multi-cycle *TPU-inference-cost-advantage* thesis with concrete-numeric grounding and lands as a likely-durable reference anchor for [[llm-inference-optimization]] arc going forward — economically material for AI labs whose inference costs are growing faster than training costs.

## Timeline

- **2026-09-09-morning**: **TPUv7 Ironwood canonicalized as delivering 50% better perf/$ vs NVIDIA B200/B300 + first TPU generation Google is competing for external inference workloads with chips purchasable outright or rentable via Google Cloud** — TLDR AI HIGH: *"Google's TPUv7 Ironwood delivers up to 50% better performance per dollar compared to Nvidia's B200/B300 chips. Ironwood is the first generation in which Google is competing for others' inference workloads with chips that can be purchased outright or rented through its own cloud"*. Daily-digest AI Models & Research. Notable-link to SemiAnalysis *"TPU Inference Externalization Full Steam Ahead"*. Also anchored: Google Accelerator Agents for TPU Development GitHub repo. First-in-wiki concrete-perf-per-dollar-vs-NVIDIA canonical anchor + first-in-wiki TPU-as-merchant-silicon canonical anchor + first-in-wiki purchasable-or-rentable dual-distribution-mode canonical anchor. See [[google]] + [[nvidia]] + [[llm-inference-optimization]] — *source: data/summaries/2026-09-09-morning.json (TLDR AI HIGH "OpenAI managed agents 🤖, TPU inference ⚡, Anthropic $517B compute 💰"; daily-digest AI Models & Research; researchFindings.additionalContext for TPU inference)*

- **2025-11-07**: Ironwood TPU (7th gen) and Axion VMs announced for large-scale AI training and inference — *source: AlphaSignal "Google drops AlphaEvolve, Ironwood, and Gemini Tools across the AI stack"*

## Key Facts

- **Vendor**: [[google]]
- **Generation**: 7th TPU / **TPUv7**
- **Role**: large-scale AI training and inference; inference-tier now externally purchasable/rentable
- **Perf/$ vs NVIDIA**: **up to 50% better performance per dollar vs B200/B300** (per TLDR AI, 09-09-morning)
- **Distribution model**: **first TPU generation available for outright purchase OR Cloud rental** — structural shift from historically-captive TPU posture into merchant-silicon vendor tier
- **Ecosystem context**:
  - Sits below successor [[frozen-v2]] (target ship 2028; 6-10× more efficient than current TPUs)
  - Google Accelerator Agents for TPU Development GitHub repo canonicalized same cycle
  - SemiAnalysis *"TPU Inference Externalization Full Steam Ahead"* essay canonicalized same cycle
  - Backdrop: mid-2025 Reuters-reported [[openai]] TPU-testing amid rising inference-cost concerns
- **Launch context (2025-11-07)**: co-announced with AlphaEvolve and Gemini File Search
- **Companion**: Axion VMs (CPU-class VM line)

## Open Questions

- Absolute per-chip specs (FLOPs, HBM bandwidth, TDP) vs H100 / H200 / B200 / B300
- Concrete purchase-tier pricing anchor vs Cloud-rental pricing anchor
- Which specific inference workloads TPUv7 excels at (dense vs sparse-MoE; long-context prefill vs decode; prefill+decode disaggregation via vLLM)
- Which external customers have committed to TPUv7 purchases outright vs Cloud rental (does [[openai]]'s mid-2025 testing convert to production commitment? [[anthropic]] Google-Cloud TPU deal expansion?)
- Timeline for TPUv7 supply-chain ramp vs [[nvidia]]'s Blackwell / Vera Rubin capacity
- Antitrust implications of Google selling TPUs to rivals while also operating Google Cloud

## Sources

- data/summaries/2025-11-07.json (AlphaSignal — Google drops AlphaEvolve, Ironwood, and Gemini Tools)
- data/summaries/2026-09-09-morning.json (TLDR AI HIGH "OpenAI managed agents 🤖, TPU inference ⚡, Anthropic $517B compute 💰" — TPUv7 Ironwood 50% better perf/$ vs NVIDIA B200/B300 + first generation competing for others' inference workloads + purchasable outright or rentable through Google Cloud; researchFindings.additionalContext for TPU inference — TPU 8t training + TPU 8i inference split April 2026 + 3× vLLM speculative-decoding gains + OpenAI mid-2025 TPU testing)
