---
name: Gemini 3.5 Flash-Lite
description: Google's Jul 2026 budget-workhorse Gemini tier — $0.30/M input + $2.50/M output, configurable thinking levels, beats older Gemini 3 Flash on several evaluations
type: product
---

# Gemini 3.5 Flash-Lite

> **Type**: product
> **First mentioned**: 2026-07-22-evening
> **Last updated**: 2026-07-22-evening (**Launch cycle — World of AI MEDIUM ***"Gemini 3.6 Flash Is Out! 👀 + Still No Flagship"***: Gemini 3.5 Flash-Lite ships as *"the budget workhorse"* at **$0.30 per million input + $2.50 per million output**, beats Google's older Gemini 3 Flash on several evaluations, and exposes *configurable thinking levels for cost vs. depth trade-offs*. Ships alongside [[gemini-3-6-flash]] workhorse tier + [[gemini-3-5-flash-cyber]] gated cyber tier. Positioned for high-volume, low-latency workloads (translation + classification + data extraction + agentic workflows) — extends the Flash-Lite line from [[gemini-3-1-flash-lite]] (Mar 2026) into a 3.5-generation successor. Notable: retains the *configurable thinking level* pattern first introduced with 3.1 Flash-Lite while dropping price further. Cycle context: Google falls out of top 5 AI labs on Artificial Analysis Intelligence Index; 3.5 Pro flagship still delayed (third missed deadline). See [[gemini-3-6-flash]] + [[gemini-3-1-flash-lite]] + [[google]] — *source: data/summaries/2026-07-22-evening.json (World of AI MEDIUM "Gemini 3.6 Flash Is Out! 👀 + Still No Flagship"; researchFindings.additionalContext — Gemini Flash-Lite)*)
> **Status**: active
> **Related**: [[google]], [[gemini]], [[gemini-3-1-flash-lite]], [[gemini-3-6-flash]], [[gemini-3-5-flash-cyber]], [[gemini-3-5-flash]]

## Summary

Gemini 3.5 Flash-Lite is [[google]]'s budget-tier Gemini model launched July 2026 as the successor to [[gemini-3-1-flash-lite]] (Mar 2026). Priced at $0.30 per million input tokens and $2.50 per million output tokens, it beats the older Gemini 3 Flash on several evaluations and exposes configurable "thinking levels" that let developers trade cost against depth on a per-request basis. Positioned as the *"budget workhorse"* for high-volume low-latency workloads — translation, classification, data extraction, agentic workflows, bulk document processing, and UI generation — where per-token cost dominates the deployment economics. Available via the Gemini API, Google AI Studio, Vertex AI, and the Gemini Enterprise Agent Platform. Ships as part of Google's July 2026 three-model bundle alongside [[gemini-3-6-flash]] (workhorse) and [[gemini-3-5-flash-cyber]] (gated cyber).

## Timeline

- **2026-07-22-evening**: **Launch — $0.30/M input + $2.50/M output; beats Gemini 3 Flash on several evaluations; configurable thinking levels**. World of AI MEDIUM: ***"Gemini 3.5 Flash-Lite is the budget workhorse, priced at $0.30 per million input and $2.50 per million output, beating Google's older 3 Flash on several evaluations, and exposing configurable thinking levels for cost vs. depth trade-offs"***. First publicly framed on this cycle: (a) *$0.30/$2.50 per-million-token pricing* concrete anchor — sharpens the Flash-Lite "budget" framing into a *specific price-point below all comparable frontier-lab budget tiers*; (b) *"beats older 3 Flash on several evaluations"* — positions Flash-Lite as *quality-superior + cheaper simultaneously* over the prior-gen full-Flash tier, structurally novel because Flash-Lite tiers historically traded quality for price; (c) *configurable thinking levels for cost vs. depth trade-offs* — extends the 3.1 Flash-Lite configurable-thinking pattern into the 3.5 generation, canonicalizing *thinking-level-as-first-class-API-parameter* on Google budget-tier models. Structural significance three ways: (i) **Sub-$1/$5 tier price-anchor** — $0.30/$2.50 pricing sits well below [[claude-haiku-4-5]] and comparable budget tiers, extending Google's *aggressive-price-floor* posture (see [[gemini-3-1-flash-lite]] Mar 2026 precedent); (ii) **Three-SKU Flash-tier segmentation** — Flash-Lite (budget) + [[gemini-3-6-flash]] (workhorse) + [[gemini-3-5-flash-cyber]] (gated cyber) creates the first *three-way Flash-tier fanout* in Gemini history; (iii) **Configurable thinking levels as canonical UX pattern** — pairs with [[gpt-5-6]] Sol/Terra/Luna tier-switching and [[claude-sonnet-5]] extended-thinking mode as the mid-2026 canonical *thinking-tier as first-class dev API parameter* pattern. Same-cycle: [[gemini-3-6-flash]] workhorse launch + [[gemini-3-5-flash-cyber]] gated cyber launch + Google 3.5 Pro third missed deadline + Google drops out of top 5 AI labs + Google pre-training [[gemini]] 4. See [[gemini-3-6-flash]] + [[gemini-3-5-flash-cyber]] + [[google]] — *source: data/summaries/2026-07-22-evening.json (World of AI MEDIUM "Gemini 3.6 Flash Is Out! 👀 + Still No Flagship"; researchFindings.additionalContext — Gemini Flash-Lite)*

## Key Facts

- Vendor: [[google]] / Google DeepMind
- Pricing: $0.30 per million input tokens + $2.50 per million output tokens
- Quality: beats older Gemini 3 Flash on several evaluations
- Configurable thinking levels for cost vs depth trade-offs (per-request)
- Target workloads: high-volume + low-latency (translation, classification, extraction, agentic workflows, UI gen, bulk document processing)
- Multimodal: text + image + video + audio + PDF inputs (family standard)
- Distribution: Gemini API + Google AI Studio + Vertex AI + Gemini Enterprise Agent Platform

## Open Questions

- Context window at the 3.5 Flash-Lite tier
- Time-to-first-token and sustained tokens/sec vs [[gemini-3-1-flash-lite]] and [[gemini-3-6-flash]]
- Concrete benchmark scores (MMLU-Pro / HumanEval / MGSM) vs Gemini 3 Flash and [[claude-haiku-4-5]]
- Which thinking-level tiers are exposed and how they map to token/latency cost
- Whether the 3.5 Flash-Lite naming reflects a 3.5-family alignment despite the workhorse jumping to 3.6

## Sources

- data/summaries/2026-07-22-evening.json (World of AI MEDIUM "Gemini 3.6 Flash Is Out! 👀 + Still No Flagship"; researchFindings.additionalContext — Gemini Flash-Lite)
