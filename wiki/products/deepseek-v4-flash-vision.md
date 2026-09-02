---
name: DeepSeek V4-Flash-Vision-Exp
description: DeepSeek's Aug 2026 experimental multimodal vision-language variant of the V4-Flash open-weights model — adds image understanding to the existing V4-Flash text-and-code backbone; nearly matches Claude Opus 4.8 on multimodal agent benchmarks at Flash-tier pricing
type: product
---

# DeepSeek V4-Flash-Vision-Exp

> **Type**: product
> **Vendor**: [[deepseek]]
> **First mentioned**: 2026-08-22-evening (initial AINews launch anchor)
> **Last updated**: 2026-09-02-morning (**Cycle-N canonical anchor — DeepSeek makes DeepSeek-V4-Flash-Vision-Exp weights publicly downloadable under MIT license — first-in-wiki *305B-parameter multimodal MoE + MIT-license + full-weights-downloadable-with-inference-code canonical open-weight release anchor* + *~10-day API-only-to-open-weights cadence canonical anchor***. researchFindings.missingStories canonicalizes: *"DeepSeek has made the weights of its 305B-parameter multimodal Mixture-of-Experts model, DeepSeek‑V4‑Flash‑Vision‑Exp, publicly downloadable under an MIT license. The release includes inference code and follows about ten days after the model was available as API-only, significantly expanding access for developers and researchers"* + *"A frontier‑scale, open‑weights 305B multimodal MoE model under an MIT license is a major development for practitioners who need high‑capacity models without restrictive licensing. It enables fine‑tuning, on‑prem deployment, and in‑depth research on scaling, multimodality, and MoE architectures, potentially narrowing the gap between closed and open frontier systems"*. AlphaSignal MEDIUM restates cross-cohort: *"DeepSeek has released a fast experimental vision model that can read images and text, making it a significant development in the field of computer vision"*. First-in-wiki: (a) *305B multimodal MoE + MIT-license + inference-code-included canonical open-weight release anchor cluster* — extends the multi-cycle DeepSeek-V4-Flash-Vision arc from *API-only-tier* into *full-open-weight + MIT-license canonical tier*; (b) *~10-day API-only-to-open-weight cadence canonical anchor* — first-in-wiki *concrete API-only-to-open-weight-cadence canonical anchor* on DeepSeek release-timing template (validates *"gated API-release-first, then open-weights ~10 days later"* as a canonical DeepSeek release cadence pattern); (c) *"significantly expanding access for developers and researchers" + "narrowing the gap between closed and open frontier systems" canonical positioning anchor* — graduates DeepSeek-V4-Flash-Vision from *frontier-model-canonical* into *closed-vs-open-frontier-gap-narrowing canonical substrate anchor* on the [[open-source-models]] arc; (d) *fine-tuning + on-prem + MoE-scaling-research canonical downstream-use-case cluster anchor* on the 305B open-weight release. Structurally significant: **305B + multimodal + MIT canonical positions DeepSeek-V4-Flash-Vision-Exp as the most-open frontier-tier multimodal MoE substrate of mid-2026**, structurally distinct from Hy4-preview (770B + text-only + Tencent-license-terms unclear) — DeepSeek's canonical *frontier-scale + multimodal + MIT-license triple-anchor cluster* graduates it into *canonical enterprise-ready open-weight multimodal-substrate tier*. See [[deepseek]] + [[deepseek-v4]] + [[open-source-models]] + [[hy4-preview]] — *source: data/summaries/2026-09-02-morning.json (AlphaSignal MEDIUM "Google TimesFM-3 📊, Anthropic Claude 5.1 25% cheaper 💸, Runway Solaris"; researchFindings.missingStories — DeepSeek releases open-weight 305B multimodal model DeepSeek-V4-Flash-Vision-Exp under MIT license)*)
> **Previously updated**: 2026-08-25-morning (**Cross-cohort morning cluster — TLDR AI + AlphaSignal + daily-digest all confirm launch with concrete new anchors — nearly matches Opus 4.8 on agent benchmarks + rivals Claude on multimodal agent benchmarks + available at Flash pricing** — TLDR AI MEDIUM: *"DeepSeek V4-Flash-Vision-Exp ... nearly matches Opus 4.8 on agent benchmarks. This model can describe images, extract text from screenshots, analyze diagrams, and handle different image formats"*. AlphaSignal MEDIUM: *"DeepSeek has launched V4-Flash-Vision-Exp, a new model that adds image understanding to the existing V4-Flash model, enabling agents to read screenshots, charts, and documents, and act on them. This model rivals Claude on multimodal agent benchmarks and is available at Flash pricing"*. First publicly framed on this cycle: (a) **"Nearly matches Opus 4.8" concrete-competitor-tier anchor** — first publicly framed *frontier-tier competitor-comparison anchor* on V4-Flash-Vision-Exp in this wiki; positions Chinese-open-weights multimodal-experimental variant as *near-frontier tier* on multimodal-agent-benchmark-substrate; (b) **"Read screenshots, charts, and documents, and act on them" concrete-agentic-use-case framing** — canonicalizes multimodal-agentic-substrate as canonical mid-2026 use-case tier; (c) **"Flash pricing" cost-tier preservation-across-modality-extension anchor** — first publicly framed *cost-tier-preservation-across-modality-extension anchor* on V4-Flash line. See [[deepseek]] + [[deepseek-v4]] + [[claude-opus-5]] + [[open-source-models]] — *source: data/summaries/2026-08-25-morning.json (TLDR AI MEDIUM "DeepSeek Flash Vision 👀, Claude Mythos security 🛡️, inside Grok Bot 🤖"; AlphaSignal MEDIUM "Claude Code Remote Control 🔄, DeepSeek V4-Flash-Vision Launch 👁️, Anth"; daily-digest AI Models & Research)*)
> **Status**: experimental (Aug 2026 launch, "Exp" designation)
> **Related**: [[deepseek]], [[deepseek-v4]], [[claude-opus-5]], [[open-source-models]], [[chatgpt-atlas]]

## Summary

DeepSeek V4-Flash-Vision-Exp is an **experimental multimodal vision-language variant** of DeepSeek's V4-Flash open-weights model, launched in mid-August 2026. It keeps V4-Flash's existing text and code strengths while adding **native image understanding** — screenshots, charts, diagrams, scanned documents, and standard image formats (JPEG/PNG/GIF/WebP) — and exposes them as first-class inputs so agents can *read* and then *act on* visual context together with text.

The product's competitive posture is anchored by two claims that landed with cross-newsletter agreement in the 2026-08-25 morning cluster: (a) it **nearly matches Claude Opus 4.8** on multimodal agent benchmarks, and (b) it ships at **Flash-tier pricing** — i.e., the price/quality ratio of V4-Flash is preserved when moving from text-only into multimodal, rather than being folded into a higher-tier Pro variant. This positioning makes V4-Flash-Vision-Exp a canonical mid-2026 *Chinese-open-weights multimodal-agent substrate* competing directly against Anthropic's Opus-tier vision cohort on cost.

The "Exp" designation implies DeepSeek is adopting a *Preview → Stable graduation* release cadence structurally similar to Gemini Experimental variants and OpenAI's `preview / GA / mini` tiering, rather than shipping straight to GA.

## Timeline

- **2026-08-25-morning**: **Cross-cohort morning cluster — TLDR AI + AlphaSignal + daily-digest all confirm launch with concrete new anchors — nearly matches Opus 4.8 on agent benchmarks + rivals Claude on multimodal agent benchmarks + available at Flash pricing** — see Last updated frontmatter for detail. First publicly framed *nearly-matches-Opus-4.8 near-frontier-tier canonical comparison anchor* + *screenshots/charts/documents/act-on-them concrete-agentic-use-case substrate*. See [[claude-opus-5]] + [[deepseek]] — *source: data/summaries/2026-08-25-morning.json (TLDR AI MEDIUM; AlphaSignal MEDIUM; daily-digest AI Models & Research)*

- **2026-08-22-evening**: **Initial AINews launch anchor** — AINews HIGH: *"DeepSeek has launched its V4-Flash-Vision-Exp model, which adds multimodal support and improves performance on various benchmarks"*; researchFindings.missingStories restates: *"DeepSeek's V4 Flash Vision Exp focuses on enhanced vision-language performance with faster inference"* (part of a mid-to-frontier multimodal release cohort with Meta Muse Spark 1.2 Contributor). First publicly framed *V4-Flash-Vision-Exp variant* as *multimodal-experimental variant on the V4-Flash line*. See [[deepseek]] + [[deepseek-v4]] — *source: data/summaries/2026-08-22-evening.json (AINews HIGH "[AINews] 10% worse, 100x cheaper, 10000x faster: Why Simulation is taking over"; researchFindings.missingStories)*

## Key Facts

- **Vendor**: [[deepseek]]
- **Base model**: V4-Flash (~284B parameters per 2026-08-07 canonical anchor) — vision extension preserves text/code strengths
- **Modality**: text + code + image inputs → text outputs
- **Image formats supported**: JPEG, PNG, GIF, WebP; screenshots, charts, diagrams, scanned documents
- **Pricing tier**: Flash pricing preserved (approximately V4-Flash rate card — vision does not push into Pro tier)
- **Benchmark positioning**: nearly matches Claude Opus 4.8 on multimodal agent benchmarks per Aug-25 anchor
- **Release stage**: experimental / preview ("Exp" designation) — Preview → Stable graduation cadence implied
- **Distribution**: DeepSeek API (`deepseek-v4-flash-vision-exp` or similar identifier) + presumed open-weights per DeepSeek's default posture

## Open Questions

- Concrete benchmark numbers on which multimodal agent benchmarks V4-Flash-Vision-Exp is compared to Opus 4.8 (MMMU? ScreenSpot? WebArena? OSWorld?)
- Whether the vision extension ships as an open-weights checkpoint on Hugging Face / ModelScope or is API-only during the Exp phase
- Timeline for graduation from Exp → Stable
- Whether V4-Pro-Vision or a V4.1 multimodal generation-jump variant is on the roadmap
- Concrete image-token pricing (per-image tokenization overhead vs text-only tokens)
- Latency profile for image inputs vs text-only V4-Flash

## Sources

- data/summaries/2026-08-25-morning.json (TLDR AI MEDIUM "DeepSeek Flash Vision 👀, Claude Mythos security 🛡️, inside Grok Bot 🤖"; AlphaSignal MEDIUM "Claude Code Remote Control 🔄, DeepSeek V4-Flash-Vision Launch 👁️, Anth"; daily-digest AI Models & Research)
- data/summaries/2026-08-22-evening.json (AINews HIGH "[AINews] 10% worse, 100x cheaper, 10000x faster: Why Simulation is taking over"; researchFindings.missingStories — Meta releases Muse Spark 1.2 Contributor and DeepSeek debuts V4 Flash Vision Exp)
