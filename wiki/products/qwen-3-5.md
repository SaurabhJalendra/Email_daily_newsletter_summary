---
name: Qwen 3.5
description: Alibaba's Feb 2026 vision-language hybrid-attention MoE family; 397B-A17B Max, Medium MoE, Small tiny-model tier
type: product
---

# Qwen 3.5

> **Type**: product
> **First mentioned**: 2026-02-18
> **Last updated**: 2026-03-06 (backfill 2026-02-20..2026-03-06)
> **Status**: stale
> **Related**: [[alibaba]], [[qwen-3-vl]], [[qwen-image-2]], [[qwen3-coder-next]], [[deepseek]]

## Summary

Qwen 3.5 is Alibaba's February 2026 native vision-language model, headlined by Qwen3.5-397B-A17B — a sparse mixture-of-experts that fuses linear attention with sparse MoE for up to ~19× faster decoding than Qwen3-Max. The model handles text/image/video natively and supports 201 languages and dialects, marking Alibaba's strongest multilingual push to date. Released as open weights and pitched at "near-frontier performance at lower cost," it sits alongside [[glm-5]] and Kimi K2 series in the wave of open Chinese frontier models in early 2026.

## Timeline

- **2026-03-04**: Qwen 3.5 Small family released — tiny open-source models that run on laptops/phones and outperform larger models in specific tasks; "built to run AI directly on devices" — *source: 2026-03-04 cycle (also 2026-03-05 cycle)*
- **2026-02-27**: Qwen 3.5 Medium open-sourced — outperforms its larger predecessor via smarter architecture + MoE — *source: 2026-02-27 cycle*
- **2026-02-18**: Released — Qwen3.5-397B-A17B; hybrid linear-attention + sparse MoE; 201 languages/dialects; native multimodal (text/image/video); ~19× faster decoding than Qwen3-Max — *source: 2026-02-18 cycle (TLDR; AlphaSignal; The Rundown AI)*

## Key Facts

- Vendor: [[alibaba]]
- Parameters: 397B total / ~17B active per token (A17B)
- Architecture: hybrid linear attention + sparse MoE
- Languages: 201
- Modalities: text, image, video
- License: open weights

## Open Questions

- Independent benchmark scores vs [[glm-5]] / GPT-5 / Claude Opus 4.6
- Inference hardware footprint for the full 397B variant
- Will smaller distilled Qwen 3.5 variants ship?

## Sources

- data/summaries/2026-02-18.json (Qwen 3.5 release — multiple)
- data/summaries/2026-02-27.json (Qwen 3.5 Medium MoE)
- data/summaries/2026-03-04.json (Qwen 3.5 Small family)
- data/summaries/2026-03-05.json (Qwen 3.5 Small coverage)
