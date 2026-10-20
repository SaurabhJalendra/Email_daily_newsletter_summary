---
name: MiniMax M3.1 Flash
description: MiniMax's Oct 2026 Flash-tier model for agentic + coding + computer-use + cybersecurity — claimed ~3× faster online inference and 70% lower usage cost than predecessor; 1M-token context + text-plus-image inputs; Ollama day-0 US-hosted zero-data-retention + open weights promised Oct 23
type: product
---

# MiniMax M3.1 Flash

> **Type**: product
> **Vendor**: [[minimax]]
> **First mentioned**: 2026-10-20-evening
> **Last updated**: 2026-10-20-evening
> **Status**: released (free on Ollama Cloud through Oct 22 2026, 23:59 UTC; open weights announced for Oct 23 2026)
> **Related**: [[minimax]], [[minimax-h3]], [[ollama]], [[deepseek-v4-1-flash]], [[open-source-models]], [[glm-5-3-flash]], [[kimi-k3]], [[llm-inference-optimization]]

## Summary

**MiniMax M3.1 Flash** is a Flash-tier model announced October 19 2026 by Chinese AI lab [[minimax]] and positioned for agentic workloads, coding, computer-use, and cybersecurity. MiniMax reports **~3× faster online inference** and **~70% lower usage cost** vs its predecessor, with a **1-million-token context window** and **text-plus-image inputs**. The model is available through MiniMax's API, the M Plan subscription, and MiniMax Code — and launched day-0 on [[ollama]] Cloud (US-hosted, zero data retention), free through October 22 2026 at 23:59 UTC, with subsequent pricing listed at **$0.15 per million tokens**. MiniMax has publicly committed to **releasing open weights on October 23 2026**.

Structurally, M3.1 Flash extends MiniMax's multi-cycle productization arc (M2.1 / M2.7 / M3 / H3 video) into a **cost-collapse-plus-speed-up Flash-tier canonical anchor** on the mid-to-late-2026 Chinese-open-frontier substrate — sits alongside [[deepseek-v4-1-flash]], [[glm-5-3-flash]], and [[kimi-k3]] as late-2026 Chinese-open-weight-cost-collapse cohort. Early third-party evaluations (per MiniMax announcement coverage) describe substantial capability-per-dollar improvement over M3 on reasoning and coding, though reviewers also flag a high tendency to answer uncertain questions rather than abstain.

## Timeline

- **2026-10-20-evening**: **MiniMax M3.1 Flash launched** — ~3× faster + 70% lower cost vs predecessor + 1M-token context + text-plus-image inputs; Ollama Cloud day-0 free through Oct 22 (then $0.15/M tokens); open weights planned Oct 23. AINews MEDIUM + Ollama Newsletter MEDIUM + researchFindings.additionalContext (MiniMax announcement + Ollama model page + Reuters). *"MiniMax M3.1 Flash is a newly released 'Flash' model from Chinese AI startup MiniMax, announced on October 19, 2026. The company positions it for agentic tasks, coding, computer use, and cybersecurity"*. — *source: data/summaries/2026-10-20-evening.json (AINews MEDIUM "[AINews] not much happened today"; Ollama "MiniMax M3.1 Flash is now available, free until October 22"; researchFindings.additionalContext — MiniMax M3.1 Flash)*

## Key Facts

- Vendor: [[minimax]]
- Announcement: 2026-10-19; Ollama Cloud launch 2026-10-20 (free through Oct 22 23:59 UTC)
- Positioning: agentic tasks + coding + computer use + cybersecurity
- Performance claim: ~3× faster online inference + ~70% lower usage cost vs predecessor
- Context window: up to 1,000,000 tokens
- Modalities: text + image inputs
- Distribution: MiniMax API + M Plan + MiniMax Code + Ollama Cloud (US-hosted, zero data retention)
- Ollama Cloud pricing after promo: $0.15 per million tokens
- Open-weight commitment: open weights announced for release 2026-10-23
- Ollama launcher integration: `ollama launch claude --model minimax-m3.1-flash:cloud` + `ollama run minimax-m3.1-flash:cloud`

## Open Questions

- Parameter counts (total + active) and architectural tier — MoE / sparse / dense?
- Named benchmark scores on independent evaluations (SWE-Bench / Terminal-Bench / AAII / HLE)
- License terms for the Oct-23 open-weight release — MIT / Apache 2.0 / revenue-gated?
- Pricing on MiniMax's own API outside Ollama Cloud (input vs output per-M-token split)
- Scope of the predecessor comparison — is "predecessor" MiniMax M3 or the earlier M2.7 / M2.1?
- Independent benchmarking of the "high tendency to answer uncertain questions rather than abstain" caveat flagged in third-party early reviews
- Distribution partners beyond Ollama for the open-weight release (Hugging Face / Fireworks / Baseten / Together / Cloudflare)

## Sources

- data/summaries/2026-10-20-evening.json (AINews MEDIUM "[AINews] not much happened today"; Ollama Newsletter MEDIUM "MiniMax M3.1 Flash is now available, free until October 22"; researchFindings.additionalContext — MiniMax M3.1 Flash + Ollama; attribution MiniMax announcement + Ollama model page + Reuters)
