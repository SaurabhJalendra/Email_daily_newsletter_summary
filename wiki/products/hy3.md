---
name: Hy3 (Hunyuan)
description: Tencent Hunyuan's 295B-parameter open-source MoE model (21B active); Apache 2.0; competitive with larger systems on reasoning, coding, and agentic tasks; runs on lower-end hardware (Jul 2026)
type: product
---

# Hy3 (Hunyuan)

> **Type**: product
> **Vendor**: Tencent (Hunyuan)
> **First mentioned**: 2026-07-07-evening
> **Last updated**: 2026-07-07-evening
> **Status**: released (Apache 2.0)
> **Related**: [[glm-5-2]], [[deepseek-v4]], [[kimi-k2-6]], [[kimi-k2-7-code]], [[qwen-3-7-max]], [[longcat-2]], [[claude-fable-5]], [[gpt-5-6]], [[ai-regulation]], [[ai-distillation-attacks]]

## Summary

**Hy3** is Tencent Hunyuan's July 2026 open-source flagship large language model — a 295B-parameter Mixture-of-Experts architecture with 21B active parameters, released under the Apache 2.0 license. Newsletter framing positions Hy3 as *"competitive with larger systems on reasoning, coding, and agentic tasks"* and highlights that its sparse-MoE-with-modest-active-count design makes it deployable on *lower-end hardware* while still achieving strong benchmarks — a positioning consistent with the broader Chinese-open-weight-model cohort ([[glm-5-2]], [[deepseek-v4]], [[kimi-k2-6]]/[[kimi-k2-7-code]], [[qwen-3-7-max]], [[longcat-2]]) pushing frontier-adjacent capability into the freely-downloadable tier.

Hy3 is Tencent's most substantial open-source Hunyuan release surfaced in this wiki to date. It arrives alongside a two-week access window making the weights broadly available and slots into the same July-2026 open-source cluster that includes [[longcat-2]] (Meituan 1.6T) and [[glm-5-2]] — collectively demonstrating that Chinese labs are shipping open-source releases at cadences that keep them near or ahead of Western frontier tiers on measured benchmarks, at fraction-of-the-cost economics.

## Timeline

- **2026-07-07-evening**: **Tencent Hunyuan releases Hy3 — 295B MoE with 21B active parameters + Apache 2.0 license + two-week open availability + competitive with larger systems on reasoning/coding/agentic tasks** — cross-newsletter convergence (AINews HIGH + The Rundown AI HIGH + AlphaSignal HIGH + Forward Future). AINews HIGH ***"Tencent Hunyuan released Hy3, a 295B MoE model with 21B active parameters, under the Apache 2.0 license, which is competitive with larger systems on reasoning, coding, and agentic tasks"***. The Rundown AI HIGH: ***"Tencent has open-sourced its small, powerful Hy3 model, which can run on lower-end hardware and still achieve strong performance"***. AlphaSignal HIGH: ***"Tencent has made a 295B open-source MoE model available for use for two weeks, contributing to the advancement of AI research by providing access to state-of-the-art models"***. Structurally novel four ways: (a) **295B total / 21B active MoE architecture** — first publicly framed Tencent frontier-tier MoE on this parameter scale in this wiki; the ~7% active-parameter ratio matches the sparse-MoE efficiency profile of [[glm-5-2]] (753B/40B active per the 2026-06-26-evening cycle) + [[deepseek-v4]] and positions Hy3 as *low-inference-cost-at-frontier-capability* rather than a dense-model competitor; (b) **Apache 2.0 license** — commercial-friendly-permissive licensing (vs GLM's MIT and Qwen's Apache 2.0) puts Hy3 in the *maximum-adoption-friction-minimization* license tier; (c) **"lower-end hardware" deployability** — the Rundown AI framing implies Hy3's active-parameter footprint fits inside single-node A100/H100 deployment (or even consumer-tier RTX 5090 / M5 Max unified memory setups), extending the [[ollama]] local-runtime + [[baseten]] managed-open-weight-inference thesis into a *fully-open-source-frontier-adjacent* substrate; (d) **two-week availability framing** (per AlphaSignal) suggests either a *time-limited-preview* posture or a temporary compute-provider-hosted access window before general repository-download availability; this is structurally unusual for open-weight releases (which are typically released with permanent-availability posture) and warrants monitoring — could be a licensing-window quirk or preview-before-permanent-release rollout pattern. Cycle structural significance: Hy3 lands inside a *dense Chinese-open-weight July-2026 cluster* alongside [[longcat-2]] (Meituan 1.6T, 2026-07-05-morning) + [[glm-5-2]] (Zhipu, ongoing cross-cycle Opus-4.8-parity claims) — three separate Chinese labs shipped or renewed frontier-adjacent open-weight releases within a ~10-day window, structurally consistent with the [[ai-regulation]] export-style-controls regime driving Chinese labs to *maximize open-source visibility as a strategic-brand + trust-building posture* against the closed-source-frontier-lab tier that is now under US-government access gating. Pairs cycle-structurally with the same-edition Anthropic J-space discovery ([[j-space]]) — Anthropic productizes interpretability as differentiator while Tencent productizes access + license permissiveness + hardware-friendliness as differentiator. Body-recovery items: (a) Hy3 architecture details (# experts, routing mechanism, context window), (b) named-benchmark scores vs GLM-5.2 / DeepSeek-V4 / GPT-5.5 / Fable 5 / Opus 4.8, (c) whether Hy3 is a Hunyuan-Turbo-family successor or a distinct product line, (d) two-week availability window resolution (permanent open-weight release vs limited-window preview), (e) whether Tencent-side agentic-benchmark scores extend to Terminal-Bench / SWE-Bench / GDPval-AA — *source: data/summaries/2026-07-07-evening.json (AINews HIGH "The Field Guide to Fable" — Tencent Hunyuan released Hy3 a 295B MoE model with 21B active parameters under the Apache 2.0 license competitive with larger systems on reasoning coding and agentic tasks; The Rundown AI HIGH "🧠 What Anthropic found hiding inside Claude's mind" — Tencent has open-sourced its small powerful Hy3 model which can run on lower-end hardware and still achieve strong performance; AlphaSignal HIGH "🔍 Anthropic's J-space exposes Claude's hidden reasoning layer" — Tencent has made a 295B open-source MoE model available for use for two weeks contributing to the advancement of AI research; Forward Future — Hy3 295B MoE released open-source)*

## Key Facts

- **Vendor**: Tencent (Hunyuan open-source lineage)
- **Architecture**: Mixture-of-Experts, 295B total parameters, 21B active parameters (~7% active ratio)
- **License**: Apache 2.0 (commercial-friendly permissive)
- **Positioning**: competitive with larger systems on reasoning + coding + agentic tasks; deployable on lower-end hardware
- **Cluster peers**: [[glm-5-2]] (Zhipu 753B/40B active), [[longcat-2]] (Meituan 1.6T), [[deepseek-v4]] (open-source Chinese frontier tier)
- **Access window**: two-week open availability framing per AlphaSignal (open question — permanent open-weight vs limited-window)

## Open Questions

- What is Hy3's context window + agentic-coding benchmark score against GLM-5.2 (the current Chinese-open-weight leader for coding)?
- Does Hy3 slot beneath, alongside, or above GLM-5.2 on the frontier-adjacent Chinese-open-weight leaderboard?
- Is the "two-week availability" a preview-window or the permanent-open-weight release? If preview, what follows — GA drop, commercial-licensing shift, or reference-model-only distribution?
- Distribution channels: is Hy3 hosted on [[ollama]] cloud + [[baseten]] + Hugging Face + Tencent-first-party APIs simultaneously, or a subset?
- Has Anthropic surfaced concerns about Hy3 distillation-of-Claude patterns similar to the [[ai-distillation-attacks]] Alibaba-Qwen accusation cycle?

## Sources

- data/summaries/2026-07-07-evening.json (AINews HIGH "The Field Guide to Fable"; The Rundown AI HIGH "🧠 What Anthropic found hiding inside Claude's mind"; AlphaSignal HIGH "🔍 Anthropic's J-space exposes Claude's hidden reasoning layer"; Forward Future — 46 AI predictions that will make you think)
