---
name: Router (Ramp)
description: Ramp's Aug 2026 single-endpoint LLM aggregator (Router.com) routing across OpenAI/Anthropic/DeepSeek/xAI on benchmark/cost/difficulty; ~40% inference cost claim; free through 2026 + $26 launch credit
type: product
---

# Router (Ramp)

> **Type**: product
> **Vendor**: [[ramp]]
> **First mentioned**: 2026-08-21-evening
> **Last updated**: 2026-08-21-evening
> **Status**: active
> **Related**: [[ramp]], [[openrouter]], [[model-routers]], [[cursor-router]], [[openai]], [[anthropic]], [[deepseek]], [[xai]]

## Summary

Router (Router.com) is [[ramp]]'s single-endpoint LLM aggregator, launched August 2026. It exposes one API that switches among major frontier models — [[openai]], [[anthropic]], [[deepseek]], [[xai]], and others — with routing decisions driven by **benchmarks, cost, or task difficulty**. Ramp claims roughly **40% inference cost reduction** versus single-vendor use, and offers the service **free through 2026** with a **$26 launch credit** on signup. Positioning is explicitly cost-focused, competing structurally with [[openrouter]]'s marketplace + Auto Router substrate but arriving from a fintech-adjacent surface rather than an inference-marketplace-native origin.

## Timeline

- **2026-08-21-evening**: Router launched — single-endpoint API across OpenAI/Anthropic/DeepSeek/xAI + benchmark/cost/difficulty routing + ~40% cost-reduction claim + free through 2026 + $26 launch credit — *source: data/summaries/2026-08-21-evening.json (Evolving AI Insights MEDIUM "🎓 Anthropic Opens Its AI School Free for Everyone"; Forward Future MEDIUM "White House AI plan keeps companies guessing"; daily-digest Top Story #3)*

## Key Facts

- **Vendor**: [[ramp]]
- **Surface**: Router.com single-endpoint API
- **Model coverage at launch**: [[openai]] + [[anthropic]] + [[deepseek]] + [[xai]] + others (full roster not enumerated)
- **Routing basis**: benchmarks, cost, difficulty
- **Cost claim**: ~40% inference cost reduction vs single-vendor
- **Pricing**: free through end of 2026 + $26 launch credit
- **Structural competitor**: [[openrouter]] Auto Router (community-spend-weighted 30-task classifier), [[cursor-router]]

## Open Questions

- Router methodology internals — heuristic rules, learned classifier, or community-spend-weighted?
- Full model roster (which vendors beyond the four named)
- What the "$26" launch credit denominates — dollars of API spend, tokens, or requests
- Post-2026 pricing model (per-token markup? subscription? enterprise tier?)
- Latency overhead vs direct vendor calls
- Data-handling posture (whether Router logs prompts/completions across vendors)

## Sources

- data/summaries/2026-08-21-evening.json (Evolving AI Insights MEDIUM "🎓 Anthropic Opens Its AI School Free for Everyone" — Router.com single endpoint + ~40% cost cut; Forward Future MEDIUM "White House AI plan keeps companies guessing" — benchmark/cost/difficulty routing + free through 2026 + $26 launch credit + vendor roster; daily-digest Top Story #3)
