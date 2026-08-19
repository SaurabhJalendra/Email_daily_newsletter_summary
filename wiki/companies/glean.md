---
name: Glean
description: Enterprise AI search + agent company (ex-Google Distinguished Engineer Arvind Jain co-founded); ships model-routing to control AI costs, Waldo agentic-search model, third-generation Glean Assistant
type: company
---

# Glean

> **Type**: company
> **First mentioned**: 2026-08-19-morning
> **Last updated**: 2026-08-19-morning
> **Status**: active
> **Related**: [[model-routers]], [[openrouter]], [[cursor-router]], [[enterprise-ai]], [[open-source-models]]

## Summary

Glean is an enterprise AI search and agent company co-founded by ex-Google Distinguished Engineer **Arvind Jain**, specializing in bringing AI to large organizations. It rides on a $150M Series F fund raise and ~$300M in annual recurring revenue. In August 2026 Latent Space published a Richard MacManus interview framing Glean as the canonical enterprise implementer of *model routing* — a system that manages AI costs by selecting the most suitable model for each task across explicit user choice, admin restrictions, and an automatic mode picked dynamically per task.

Glean is notable in the [[model-routers]] arc because customers mostly choose the automatic mode for economic reasons: AI model prices have escalated to 2-4× prior costs, making per-task routing a first-order enterprise cost-management primitive. Glean also ships **Waldo**, an agentic-search model that reduces latency 50% and tokens 25% by reserving advanced models for work that needs them, and a third-generation Glean Assistant.

## Timeline

- **2026-08-19-morning**: **First-mention: Latent Space (Richard MacManus, swyx) interview with Arvind Jain frames Glean's model-routing as enterprise AI cost-control primitive + productizes Waldo agentic-search + third-generation Glean Assistant + open-weight-model integration for cost concerns**. Latent Space MEDIUM: *"The cost of frontier models and the popularity of open-weight models are driving demand for model routing, which helps control AI costs for organizations by selecting the most suitable model for each task"* + *"Glean, a company co-founded by ex-Google Distinguished Engineer Arvind Jain, specializes in bringing AI to large organizations and has developed a model routing system to manage AI costs"*. Daily-digest Industry News anchors Glean into the *AI-cost-management-in-enterprise* narrative. First publicly framed on this cycle: (a) *three-mode model routing (explicit-choice / admin-restrictions / automatic-mode)* — canonical mid-2026 enterprise-tier model-routing taxonomy; (b) *"automatic mode mostly chosen for economic reasons"* — first publicly framed *dominant-automatic-mode-selection anchor* in this wiki on enterprise model routing; (c) *"2-4× prior model cost"* — first publicly framed *concrete price-escalation-multiplier anchor* on frontier-model enterprise pricing (extends the mid-2026 price-motion cycles into an enterprise-facing 2-4× canonical framing); (d) *Waldo agentic-search model — reduces latency 50% + tokens 25% by reserving advanced models for work that needs them* — first-mention of Glean's Waldo product; positions Waldo alongside [[cursor-router]] Intelligence/Balance/Cost modes + [[openrouter]] Fusion Router as *cross-vendor cost-vs-capability-routing cohort*; (e) *human-feedback-loop continuously updates model router with real-world traffic* — first publicly framed *human-feedback-loop for enterprise model-routing continuous-learning* substrate anchor; (f) *significant enterprise interest in open-weight models primarily due to cost concerns* — canonicalizes enterprise-adoption-tier open-weight-model demand as *cost-first substrate motion* (validates the multi-cycle [[open-source-models]] enterprise-adoption arc); (g) *$150M Series F + $300M ARR* concrete-financials anchor. See [[model-routers]] + [[openrouter]] + [[cursor-router]] + [[open-source-models]] + [[stripe]] — *source: data/summaries/2026-08-19-morning.json (Latent Space MEDIUM "Frontier Model Cost and Open-Weights Popularity is Driving Demand for Model Routing")*

## Key Facts

- Sector: enterprise AI search + agents
- Co-founder / CEO: Arvind Jain (ex-Google Distinguished Engineer)
- Funding: $150M Series F
- ARR: ~$300M
- Model-routing modes: explicit-user-choice / admin-restrictions / automatic-mode (dominant choice for cost reasons)
- Waldo: agentic search model — 50% latency reduction + 25% token reduction by reserving advanced models for work that needs them
- Third-generation Glean Assistant shipped
- Human-feedback loop continuously updates the model router with real-world traffic

## Open Questions

- Which specific frontier + open-weight models does Glean route across?
- Waldo's pricing / packaging vs the base Glean Assistant tier
- Integration with [[openrouter]] post-Stripe acquisition — does Glean use OpenRouter as its underlying vendor-abstraction layer or maintain its own?
- Evaluation methodology — how does Glean quantify "quality" of results across LLMs on internal enterprise workloads?

## Sources

- data/summaries/2026-08-19-morning.json (Latent Space MEDIUM "Frontier Model Cost and Open-Weights Popularity is Driving Demand for Model Routing")
