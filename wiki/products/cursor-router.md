---
name: Cursor Router
description: Cursor's intelligent per-request model router that picks the right LLM automatically — claims 60% lower cost at frontier-model-quality with three modes (Intelligence / Balance / Cost)
type: product
---

# Cursor Router

> **Type**: product
> **Vendor**: [[cursor]]
> **First mentioned**: 2026-07-24-morning
> **Last updated**: 2026-07-24-morning
> **Status**: launched
> **Related**: [[cursor]], [[model-routers]], [[devin-fusion]], [[claude-sonnet-5]], [[claude-opus-4-8]], [[gpt-5-6]], [[grok-4-5]], [[vibe-coding]]

## Summary

Cursor Router is Cursor's intelligent per-request model router that automatically selects the most suitable LLM for each coding request — analyzing task type, complexity, context, and domain to pick between high-end frontier models and cheaper price-efficient options. Launched July 2026, it claims frontier-quality results at up to **60% lower cost**, with early enterprise users seeing 30-50% savings vs sending all work to a single premium model such as [[claude-opus-4-8]]. The router uses a classifier trained on 600,000+ live coding requests and evaluated across millions of production queries; it exposes three modes — **Intelligence** (max capability), **Balance** (everyday quality at lower spend), **Cost** (token efficiency while keeping output usable) — and is integrated across Cursor's desktop, web, iOS, CLI, and SDK. Available by default on Teams and Enterprise plans. Structurally the productization of [[model-routers]] into a canonical coding-agent-tier surface, alongside sibling [[devin-fusion]] from Cognition.

## Timeline

- **2026-07-24-morning**: **Cursor Router launches — smart model router picks right model per request, 60% AI coding cost cut, frontier-quality results, three modes (Intelligence + Balance + Cost)**. Daily-digest Top Story #4 (Tools & Products). TLDR AI HIGH: *"Cursor Router is an intelligent model router that selects the right model for the task at hand, delivering frontier-quality results at 60% lower cost, and is available now across all surfaces on Teams and Enterprise plans"*. AlphaSignal MEDIUM: *"Cursor has shipped a smart model router that cuts AI coding costs by 60%. The router analyzes each request and picks the most suitable model, eliminating the need for manual model selection... allowing organizations to choose between maximum model capability, everyday quality, or token efficiency"*. Superhuman MEDIUM cross-confirmation: *"Cursor has released a model router that delivers frontier-quality results while saving 60% on LLM costs"*. Structurally significant three ways: (a) **60% cost cut concrete anchor + 30-50% early enterprise savings vs single-premium-model default** — sharpens the [[model-routers]] "missing middleware" thesis into productized coding-agent-tier cost-quality tradeoff surface; (b) **Three-mode Intelligence/Balance/Cost stratification** — operationalizes cost-quality tradeoffs as *user-selectable posture* rather than *implicit-behavior*, first publicly framed *three-mode router-tier stratification* on a coding IDE in this wiki; (c) **Classifier trained on 600K+ live coding requests** — first publicly framed *empirical-training-scale anchor* for a coding-tier router; validates *dynamic per-request routing guided by empirical performance data* thesis vs *manual model loyalty* posture. Same-cycle: [[claude-managed-agents]] effort controls + 500 skills + webhooks update pairs cost-control-tier router with agent-scaling-tier orchestration → twin *cost-management-tier* cycle. See [[cursor]] + [[model-routers]] + [[devin-fusion]] — *source: data/summaries/2026-07-24-morning.json (TLDR AI HIGH; AlphaSignal MEDIUM; Superhuman MEDIUM; researchFindings.additionalContext Cursor Router)*

## Key Facts

- Vendor: [[cursor]]
- Claim: 60% lower cost at frontier-quality; 30-50% savings vs Opus-4.8-only default (per early enterprise users)
- Classifier: trained on 600,000+ live coding requests; evaluated across millions of production queries
- Optimization metrics: user satisfaction + "keep rate" (fraction of generated code retained in codebase)
- Modes: Intelligence (max capability) / Balance (everyday quality) / Cost (token efficiency)
- Surface: Cursor desktop + web + iOS + CLI + SDK
- Access: Teams (default) + Enterprise (with admin-config over allowed models + routing modes)

## Open Questions

- Which models are in the routing pool (Claude Opus 4.8 + Sonnet 5 + GPT-5.6 Sol/Terra/Luna + Grok 4.5 + Gemini 3.6 Flash + Kimi K3?) — and how weighted?
- Does Enterprise mode allow custom-model injection (internal fine-tunes)?
- How does the router surface confidence/reasoning-for-routing to users?
- Does the router expose per-request-cost visibility?
- Interaction with [[devin-fusion]] approach (dynamic mid-session routing) — competing philosophies or complementary?

## Sources

- data/summaries/2026-07-24-morning.json (TLDR AI HIGH "Cursor Router 🔀, OpenAI Presence 🤖, AMD + Anthropic deal 🤝🏻"; AlphaSignal MEDIUM "Anthropic Security Plugin 🛡️, Cursor Model Router 💰, Claude Agents 500"; Superhuman MEDIUM "🤖 OpenAI launches enterprise agent platform"; researchFindings.additionalContext Cursor Router)
