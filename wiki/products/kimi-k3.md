---
name: Kimi K3
description: Moonshot AI's leaked next-gen Kimi model — ~2.5T-parameter mixture-of-experts, 1M-token context, targeting long-horizon agents with a new "Kimi Linear" attention architecture; likely open-weight and priced below comparable frontier models
type: product
---

# Kimi K3

> **Type**: product
> **Vendor**: [[moonshot-ai]]
> **First mentioned**: 2026-07-16-evening
> **Last updated**: 2026-07-16-evening (**Created — World of AI HIGH "OPUS 5 LEAKS 🍯 + Kimi K3 Incoming 👀" surfaces a **Moonshot Kimi K3 promotion page that briefly appeared on the company's own platform**, indicating potential launch on July 15 2026** — described in leaks as a **roughly 2.5-trillion-parameter, 1-million-token model aimed at long-horizon agents, built on a new architecture, expected to be priced lower than comparable models**. researchFindings web-search cohort (multi-source: AI-leak feeds, prediction-market commentary) adds substantive detail: (a) **ultra-sparse MoE** in the **3-4T total parameter** range with **~60-80B active parameters per query**; (b) new **"Kimi Linear"** attention mechanism that blends softmax with linear attention to make long-context inference economically viable; (c) **target 1M-token context window** + likely Apache 2.0–style open-weight license; (d) OpenAI-compatible API inherited from K2.x; (e) projected pricing **~8× cheaper than GPT-5.5** per million tokens + below [[deepseek-v4]] Pro; (f) built on the K2.6-tier serving infrastructure (agent-swarm orchestration + long-context execution stack) allowing drop-in replacement with minimal client changes; (g) reported release windows ranging from March 2026 through Q3 2026 across leak sources, with speculative claims as high as 25T parameters in some crypto-news framings. K2.6 anchored the arc as the first open-weight model to narrowly beat GPT-5.4 (xhigh) on SWE-Bench Pro; K3 inherits and extends that positioning at the *frontier-plus-long-horizon-agents-plus-open-weight* intersection. Structurally significant three ways: (i) **Kimi Linear as the first named non-standard attention architecture on a Chinese frontier-lab flagship** — Kimi Linear (softmax + linear attention hybrid) is Moonshot's first architected departure from vanilla transformer attention, structurally significant because *1M-token context economics remain the load-bearing constraint on agentic-workload cost*; Kimi Linear reads as Moonshot's answer to that constraint; (ii) **Same-day frontier-leak convergence with Anthropic [[honeycomb]]** — two frontier leaks in one week (Kimi K3 briefly live on Moonshot's own platform + Anthropic Honeycomb briefly in Cursor) marks the mid-2026 *frontier-model-preview-through-leaks* pattern as canonical; both models share 1M-context + long-horizon-agent framing; (iii) **Priced ~8× below GPT-5.5** — extends the Chinese-open-weight cost-efficiency arc ([[glm-5-2]] + [[kimi-k2-6]] + [[qwen-3-7-max]] + [[deepseek-v4]]) into a *frontier-tier ~8× multiplier* on the leading US-lab pricing anchor; positions K3 as the *cost-anchor open-weight flagship* alongside GLM-5.2 for enterprises seeking non-US-lab options at production scale. Body-recovery items: (a) exact parameter count (leaks span 2.5T → 3-4T → 25T), (b) formal Moonshot launch confirmation + license terms (Apache 2.0 vs modified license), (c) full Kimi Linear architecture paper + performance vs standard transformer attention at long-context, (d) SWE-Bench Pro / τ³-Banking / Agentic Web App Arena benchmarks vs [[gpt-5-6]] Sol + [[claude-opus-4-8]] + [[claude-fable-5]] + [[inkling]] — *source: data/summaries/2026-07-16-evening.json (World of AI HIGH "OPUS 5 LEAKS 🍯 + Kimi K3 Incoming 👀" — Kimi K3 leaked through Moonshot's own platform; researchFindings.additionalContext for Kimi K3)*)
> **Status**: leaked / imminent (Moonshot's own platform briefly published a K3 promotion page)
> **Related**: [[moonshot-ai]], [[kimi-k2-6]], [[kimi-k2-7-code]], [[kimi-k2-thinking]], [[open-source-models]], [[inkling]], [[honeycomb]], [[deepseek-v4]], [[glm-5-2]]

## Summary

Kimi K3 is [[moonshot-ai]]'s next-generation Kimi model, briefly surfaced in mid-July 2026 when a K3 **promotion page went live on Moonshot's own platform** and was then pulled — indicating a **potential launch on or around July 15, 2026**. Leaks describe K3 as a **roughly 2.5-trillion-parameter, 1-million-token model aimed at long-horizon agents, built on a new architecture, expected to be priced lower than comparable frontier models**. Deeper analyst tracking places K3 as an **ultra-sparse mixture-of-experts** model in the **3-4-trillion-parameter range with 60-80B active parameters per query**, using a new **"Kimi Linear"** attention mechanism (softmax + linear attention hybrid) engineered to make 1M-context inference economically viable at agentic-workload scale.

K3 extends the K2 lineage — [[kimi-k2-thinking]] (Nov 2025, open-source SOTA), [[kimi-k2-6]] (Apr 2026, trillion-parameter multimodal Agent Swarm), and [[kimi-k2-7-code]] (Jun 2026, coding-specialized on Ollama's US-hosted cloud) — and is expected to inherit K2.x's OpenAI-compatible API and likely Apache 2.0-style open-weight license. Community projections put K3's price at **~8× cheaper than GPT-5.5** per million tokens and below [[deepseek-v4]]-Pro, positioning it as the cost-anchor open-weight flagship for enterprises seeking non-US frontier alternatives at production scale. Same-cycle context: Anthropic's [[honeycomb]] leak inside [[cursor]] marks the second frontier-model leak of the same week — both models share 1M-context + long-horizon-agent framing.

## Timeline

- **2026-07-16-evening**: **Created** — Moonshot's own platform briefly publishes a Kimi K3 promotion page indicating July 15 launch; leaks describe ~2.5T-parameter / 1M-context / long-horizon-agent / new-architecture model priced lower than comparable frontier models; researchFindings adds *Kimi Linear* attention hybrid + 3-4T ultra-sparse MoE + 60-80B active + ~8×-cheaper-than-GPT-5.5 pricing + likely Apache 2.0 — *source: data/summaries/2026-07-16-evening.json (World of AI HIGH "OPUS 5 LEAKS 🍯 + Kimi K3 Incoming 👀"; researchFindings.additionalContext for Kimi K3)*

## Key Facts

- Vendor: [[moonshot-ai]]
- Positioning: next-gen Kimi flagship, successor to [[kimi-k2-6]] / [[kimi-k2-7-code]]
- Reported parameter count: **~2.5T total** (leak-source range: 2.5T → 3-4T ultra-sparse MoE with 60-80B active per query)
- Context window: **1M tokens (target)**
- Architecture: **"Kimi Linear"** attention hybrid (softmax + linear attention)
- License: likely **Apache 2.0** open-weight (following K2.x precedent)
- API: OpenAI-compatible (inherited from K2.x)
- Projected price: **~8× cheaper than GPT-5.5** per million tokens; below [[deepseek-v4]]-Pro
- Target workloads: **long-horizon agents, agentic + coding + long-context**
- Launch signal: promotion page briefly live on Moonshot platform (~July 15 2026)

## Open Questions

- Formal Moonshot launch announcement date + confirmed parameter count
- Full Kimi Linear architecture paper + benchmark performance at 1M context vs standard-attention transformers
- SWE-Bench Pro / τ³-Banking / Agentic Web App Arena scores vs [[gpt-5-6]] Sol + [[claude-opus-4-8]] + [[claude-fable-5]] + [[inkling]]
- License terms (Apache 2.0 vs modified restricted-commercial license)
- Rate limits + region availability + [[ollama]] hosting continuation
- Migration path for K2.6 / K2.7-Code integrations
- Whether K3 supports multimodal inputs (image/audio) or is text-only

## Sources

- data/summaries/2026-07-16-evening.json (World of AI HIGH "OPUS 5 LEAKS 🍯 + Kimi K3 Incoming 👀" — Moonshot's Kimi K3 briefly went live on the company's own platform / ~2.5-trillion-parameter 1M-token model aimed at long-horizon agents / new architecture / priced lower than comparable models; researchFindings.additionalContext for Kimi K3 — ultra-sparse MoE 3-4T range + 60-80B active + Kimi Linear attention + ~8× cheaper than GPT-5.5)
