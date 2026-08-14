---
name: Gemini 3.7 Flash
description: Google's Aug 2026 GA workhorse Flash-tier model tuned for coding + agents; $0.75/$3.75 introductory pricing through Dec 31 2026 (doubles Jan 1 2027); 1M context + tunable thinking + third Flash release in three weeks
type: product
---

# Gemini 3.7 Flash

> **Type**: product
> **Vendor**: [[google]]
> **First mentioned**: 2026-08-14-evening
> **Last updated**: 2026-08-14-evening
> **Status**: released (GA)
> **Related**: [[google]], [[gemini]], [[gemini-3-6-flash]], [[gemini-3-5-flash]], [[gemini-3-5-flash-lite]], [[google-ai-studio]], [[gpt-5-6]], [[grok-4-6]]

## Summary

Gemini 3.7 Flash is [[google]]'s Aug 13 2026 GA Flash-tier successor to [[gemini-3-6-flash]] — positioned as Google's *"most intelligent workhorse model yet for coding and agents"* with substantial gains in software engineering, document work, and web development. Vendor benchmarks report a **16-point jump on DeepSWE** and near-doubling on AutomationBench versus 3.6 Flash. It supports a **1M-token context window**, tunable thinking levels, and updated safeguards for cyber and CBRN misuse.

Pricing is aggressively introductory: **$0.75 per 1M input tokens + $3.75 per 1M output tokens through December 31 2026**, then doubling to **$1.50 / $7.50 on January 1 2027** — described as half the original 3.6 Flash price during the introductory window. The Gemini API deprecated the `temperature`, `top_p`, and `top_k` parameters alongside this release. Distribution rolls into the Gemini API, [[google-ai-studio]], Android Studio, Gemini Enterprise, and Gemini Spark.

The release lands as Google's **third Flash-tier ship in three weeks** — while flagship Gemini 3.5 Pro has missed at least four internal deadlines and got no mention in this cycle, sparking speculation about a full flagship skip in favor of Gemini 4.

## Timeline

- **2026-08-14-evening**: **Gemini 3.7 Flash launched GA — 16-point DeepSWE jump + near-doubling on AutomationBench + $0.75/$3.75 introductory pricing through Dec 31 2026 (doubles Jan 1 2027) + 1M context + tunable thinking + Gemini API deprecates temperature/top_p/top_k**. Positioned as coding/agent workhorse; daily-digest Top Story #1. World of AI framing: *"Google's third Flash model in three weeks at half price with real coding gains; flagship has now missed four deadlines and got no mention at all."* The Rundown AI recoverage. — *source: data/summaries/2026-08-14-evening.json (World of AI MEDIUM "GOOGLE: Gemini 3.7 Flash Is OUT! 🚨"; The Rundown AI HIGH "💨 OpenAI feels the frontier need for speed"; researchFindings.additionalContext — Gemini 3.7 Flash + Google)*

## Key Facts

- **Vendor**: [[google]] / Google DeepMind
- **Release**: 2026-08-13 GA
- **Positioning**: workhorse Flash-tier optimized for coding, agentic workflows, multi-step execution
- **Context window**: 1M tokens
- **Reasoning controls**: tunable thinking levels
- **Pricing (introductory through Dec 31 2026)**: $0.75/M input + $3.75/M output
- **Pricing (Jan 1 2027 onward)**: $1.50/M input + $7.50/M output (doubles)
- **Benchmarks**: 16-point jump on DeepSWE + near-doubling on AutomationBench vs 3.6 Flash; gains across FrontierCode + GDP.pdf
- **API changes**: Gemini API deprecates `temperature`, `top_p`, `top_k` params
- **Distribution**: Gemini API, [[google-ai-studio]], Android Studio, Gemini Enterprise, Gemini Spark
- **Safeguards**: updated for cyber and CBRN misuse prevention
- **Cadence**: third Flash release in three weeks; flagship Gemini 3.5 Pro has missed at least four internal deadlines

## Open Questions

- Training methodology has not been disclosed
- Whether Gemini 3.5 Pro will ship or be superseded by Gemini 4 (per [[google]] Gemini-4-pretraining posture 2026-07-22-evening)
- Concrete parameter count + architecture (MoE vs dense)
- Full third-party benchmark placement (Artificial Analysis Intelligence Index, Vals Index)
- Whether Jan 1 2027 price doubling is firm or negotiable for enterprise deals
- Impact of deprecated sampling parameters on existing production integrations

## Sources

- data/summaries/2026-08-14-evening.json (World of AI MEDIUM "GOOGLE: Gemini 3.7 Flash Is OUT! 🚨" — pricing + benchmarks + 1M context + tunable thinking + API param deprecation + third-Flash-in-three-weeks framing + flagship-slip context; The Rundown AI HIGH "💨 OpenAI feels the frontier need for speed" — Gemini 3.7 Flash as fast/low-cost model optimized for coding/agentic workflows; researchFindings.additionalContext for Gemini 3.7 Flash + Google — full pricing structure + benchmark suite + distribution surfaces)
