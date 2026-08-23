---
name: Hy-MT2
description: Tencent's Aug 2026 specialized multilingual translation model family — Hy-MT2-30B-A3B + Hy-MT2-1.8B — released ~2026-08-20 for high-quality machine translation across multiple languages
type: product
---

# Hy-MT2

> **Type**: product (specialized translation model family)
> **Vendor**: [[tencent]]
> **First mentioned**: 2026-08-23-evening
> **Last updated**: 2026-08-23-evening
> **Status**: released (~2026-08-20)
> **Related**: [[tencent]], [[open-source-models]]

## Summary

Hy-MT2 is [[tencent]]'s Aug 2026 specialized multilingual translation model family — comprising **Hy-MT2-30B-A3B** and **Hy-MT2-1.8B** — released around 2026-08-20 and canonicalized in the 2026-08-23-evening daily digest as one of the week's Top Stories. The models are targeted at high-quality machine translation across multiple languages and are part of a growing wave of *specialized LLMs* that focus on translation and cross-lingual understanding rather than general-purpose chat.

Structurally, Hy-MT2 matters as evidence that translation is consolidating around **purpose-built model families** distinct from generalist frontier chat models — the same pattern already visible in coding (GLM-5.3 for coding), cybersecurity ([[claude-mythos]] + [[gpt-5-6-cyber]]), and other specialized-domain LLM cohorts. For practitioners, Hy-MT2 gives enterprise + localization workflows an additional Chinese-vendor option optimized for translation quality rather than general reasoning.

## Timeline

- **2026-08-23-evening**: **Created** — daily-digest Top Story #4: *"Tencent releases Hy-MT2 translation models, extending specialized multilingual LLMs"*; researchFindings.missingStories anchors: *"Tencent launched two Hy-MT2 translation models — Hy-MT2-30B-A3B and Hy-MT2-1.8B — around August 20, 2026, targeted at high-quality machine translation across multiple languages ... part of a growing wave of specialized LLMs focused on translation and cross-lingual understanding rather than general-purpose chat"*; practitioner framing: *"often outperforming general-purpose LLMs for translation-heavy workflows and enabling more reliable localization, international product support, and multilingual agents"* — *source: data/summaries/2026-08-23-evening.json (daily digest Top Story #4 + researchFindings.missingStories — Tencent Hy-MT2)*

## Key Facts

- **Vendor**: [[tencent]]
- **Release date**: ~2026-08-20
- **Variants**:
  - **Hy-MT2-30B-A3B** — 30B parameters with A3B naming (suggests active-3B / MoE routing)
  - **Hy-MT2-1.8B** — smaller variant
- **Purpose**: high-quality machine translation across multiple languages
- **Positioning**: specialized translation LLM, not general-purpose chat
- **Cohort context**: joins the wave of specialized-domain LLMs (translation, coding, cyber, math) distinct from generalist frontier chat models

## Open Questions

- License and open-weight availability
- Full list of supported languages + benchmark placement (FLORES, WMT, in-domain translation benchmarks)
- Whether Hy-MT2 is part of the Hunyuan family or a separate Tencent AI-lab product line
- Concrete cost / latency profile vs Google Translate, DeepL, and open-weight translation-tier competitors
- Distribution surfaces (Hugging Face? Tencent Cloud API? On-premise?)
- Enterprise design-partner cohort

## Sources

- data/summaries/2026-08-23-evening.json (daily digest Top Story #4 "Tencent releases Hy-MT2 translation models"; researchFindings.missingStories — Hy-MT2-30B-A3B + Hy-MT2-1.8B released ~2026-08-20 for high-quality machine translation; specialized-LLMs wave framing)
