---
name: GLM-5.3-Flash
description: Zhipu AI's Aug 26 2026 natively multimodal MoE flagship-tier open-weights model (320B total / 18B active); 1M-token context; MIT license; ~$0.15 / $0.50 per M tokens; identified as the previously-anonymous [[ox-alpha]] on OpenRouter
type: product
---

# GLM-5.3-Flash

> **Type**: product (model)
> **Vendor**: [[zhipu-ai]] (Z.ai)
> **First mentioned**: 2026-08-27-evening (created)
> **Last updated**: 2026-08-27-evening
> **Status**: active (day-0 open-weights release + multi-host ecosystem coverage)
> **Related**: [[zhipu-ai]], [[ox-alpha]], [[glm-5-3]], [[glm-5-2]], [[open-source-models]], [[hugging-face]], [[claude-opus-4-8]], [[deepseek-v4]], [[midtraining]]

## Summary

GLM-5.3-Flash is [[zhipu-ai]]'s natively multimodal flagship-tier open-weights model released on **2026-08-26**, and the reveal that the mysterious anonymous [[ox-alpha]] endpoint on OpenRouter was in fact this model. It is a **320B total / 18B active** mixture-of-experts, handles text + images (and per some reports, video frames), supports a **1M-token context window**, and ships under an **MIT license** with day-0 weights on Hugging Face. Pricing is aggressive at roughly **$0.15 per million input tokens** and **$0.50 per million output tokens** (cached input ~$0.03 per million) — about one-tenth the cost of the flagship GLM-5.3.

Architecturally it uses a **hybrid sparse + linear attention** scheme to cut attention compute and KV-cache requirements, making the 1M-token context substantially cheaper to serve than earlier GLM-5.x models. Independent benchmarking and vendor claims put it *approaching [[claude-opus-4-8]]* on coding and agentic benchmarks and comfortably ahead of GLM-5.2 on standard and real-world workloads. Positioned as a **high-volume tier** model — classification, extraction, document processing, coding agents, agent loops, and multimodal knowledge work — it contrasts with the still-not-yet-weights-published flagship [[glm-5-3]], effectively inverting Z.ai's own release cadence (Flash-tier ships day-0 weights while the flagship remains gated).

## Timeline

- **2026-08-27-evening**: Created — Z.ai formally identifies [[ox-alpha]] as GLM-5.3-Flash + day-0 MIT weights on Hugging Face + integrated into OpenRouter, Cloudflare Workers AI, Baseten, Modular, LM Studio, and community GGUF conversions. AINews HIGH: *"GLM-5.3-Flash [is] a natively multimodal model with 320B total parameters and 18B active parameters, [with] a 1M-token context window and support for text, images, and video inputs"*. World of AI HIGH describes six days of anonymous stress-testing as Ox Alpha before the reveal, and frames GLM-5.3-Flash as *"approaching Claude Opus 4.8 on Zhipu's internal coding benchmark"* while shipping weights the same day as its announcement (a sharp contrast to flagship GLM-5.3 whose weights remain unpublished). The Rundown AI HIGH restates as *"AI's powerful mystery model revealed"* + integration into major deployment/hosting ecosystems. Evolving AI Insights HIGH adds *"costing about one-tenth as much as GLM-5.3, making long-context, agentic, and multimodal workflows more economically viable"*. TLDR HIGH lands the reveal as one of the day's top stories — *source: data/summaries/2026-08-27-evening.json (AINews HIGH "NVIDIA buys HuggingFace for $13B, as OpenAI publishes their HF incident retro"; World of AI HIGH "GLM-5.3-Flash DROPS😲 (Ox Alpha)"; The Rundown AI HIGH "😱 AI's powerful mystery model revealed"; Evolving AI Insights HIGH "🤖 Altman Expects OpenAI's Internal AGI By December"; TLDR HIGH "Nvidia buys Hugging Face 💰, Inside OpenAI 🤖, making LLMs faster ⚡"; researchFindings.additionalContext — GLM-5.3-Flash + Ox Alpha)*

## Key Facts

- Architecture: 320B total / 18B active MoE with hybrid sparse + linear attention
- Modality: natively multimodal — text + images (video frames per some reports)
- Context: 1M tokens
- License: MIT (weights on [[hugging-face]] day-0)
- Pricing: ~$0.15 / M input tokens; ~$0.50 / M output tokens; ~$0.03 / M cached input; roughly 1/10 the cost of flagship [[glm-5-3]]
- Distribution: Z.ai API, OpenRouter, Cloudflare Workers AI, Baseten, Modular, LM Studio, community GGUF conversions
- Prior anonymous name: [[ox-alpha]] (~6 days of stealth free-preview on OpenRouter before reveal)
- Benchmarks: outperforms GLM-5.2 across standard + real-world workloads; approaches [[claude-opus-4-8]] on Zhipu's internal coding benchmark
- Positioning: high-volume tier for classification, extraction, document processing, agent loops, multimodal apps

## Open Questions

- Full public benchmark sheet (SWE-Bench, Terminal-Bench, DeepSWE, agentic-tool-use eval numbers vs Opus 4.8 + Sonnet 5 + GPT-5.6 Sol + DeepSeek V4-Flash + Kimi K3)
- Video-input support extent — full video frames, keyframes only, or short-clip only?
- Chinese-domestic-silicon training/serving continuity (Z.ai's 1GW no-NVIDIA data center is the presumed substrate)
- When [[glm-5-3]] flagship weights follow (Flash-first cadence is a deliberate inversion)
- Long-run safety-partner-review posture (parallel to the [[glm-5-3]] delay/gate cycle from Aug 2026)

## Sources

- data/summaries/2026-08-27-evening.json (AINews HIGH — NVIDIA buys HuggingFace for $13B as OpenAI publishes their HF incident retro; World of AI HIGH — GLM-5.3-Flash DROPS (Ox Alpha); The Rundown AI HIGH — AI's powerful mystery model revealed; Evolving AI Insights HIGH — Altman Expects OpenAI's Internal AGI By December; TLDR HIGH — Nvidia buys Hugging Face + Inside OpenAI + making LLMs faster; researchFindings.additionalContext — Ox Alpha + GLM-5.3-Flash)
