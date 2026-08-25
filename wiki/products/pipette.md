---
name: Pipette
description: Liquid AI + Artificial Analysis open-source on-device AI-model benchmark stack (quality, speed, latency, memory across model × quantization × runtime × device)
type: product
---

# Pipette

> **Type**: product
> **First mentioned**: 2026-08-25-evening
> **Last updated**: 2026-08-25-evening
> **Status**: active
> **Related**: [[liquid-ai]], [[bonsai-27b]], [[benchmark-integrity]]

## Summary

Pipette is an open-source benchmark suite launched by [[liquid-ai]] in partnership with Artificial Analysis in August 2026 for evaluating AI models running on phones and laptops. It measures quality, speed, latency, and memory across combinations of *model × quantization × runtime × device*, giving practitioners a systematic way to compare on-device deployment tradeoffs that vendor-published benchmarks typically obscure. It sits alongside [[bonsai-27b]] and Liquid's LFM family as part of the mid-2026 on-device / edge-AI substrate wave.

## Timeline
- **2026-08-25-evening**: Launch — Liquid AI + Artificial Analysis publish Pipette as *"a serious on-device benchmark stack"* measuring *"quality, speed, latency, and memory across model + quantization + runtime + device combinations"* — first-in-wiki on-device benchmark stack framed at *cross-vendor cross-runtime-cross-quantization* scope; also framed in Rundown AI as *"benchmarks AI models on phones and laptops"* — *source: data/summaries/2026-08-25-evening.json (AINews HIGH "Andrew Ng gets into AI Engineering"; Rundown AI "SpaceX-Nvidia partnership heads for orbit")*

## Key Facts
- Publisher: [[liquid-ai]] + Artificial Analysis (co-launched)
- License: open source (per AINews framing)
- Measurement axes: quality, speed, latency, memory
- Grid: model × quantization × runtime × device (multi-axis benchmark surface)
- Target hardware tier: phones + laptops (on-device / edge AI)

## Open Questions
- Which specific runtimes are supported at launch (llama.cpp / MLX / MLC / ONNX / vendor NPUs)?
- How many models + devices are indexed at launch, and cadence for adding new entries?
- Is contribution model open (community-submitted benchmarks) or vendor-curated?

## Sources
- data/summaries/2026-08-25-evening.json (AINews HIGH "Andrew Ng gets into AI Engineering"; The Rundown AI "SpaceX-Nvidia partnership heads for orbit")
