---
name: Muse Glimmer
description: Meta's open-source 30B-parameter model optimized for "always-on" agents — extends the Muse family into a continuous-operation agent substrate
type: product
---

# Muse Glimmer

> **Type**: product
> **Vendor**: [[meta]]
> **First mentioned**: 2026-08-10-evening
> **Last updated**: 2026-08-10-evening (**Created — AI Breakfast HIGH: Meta releases Muse Glimmer, an open-source 30B parameter model optimized for "always-on" agents. Extends the Muse family (Muse Spark reasoning + Muse Code coding-agent + Muse Image) with a fourth product-line: a mid-scale open-weights model specifically tuned for continuous-operation agentic workloads. Same cycle as OpenAI Astra safety brakes + Cloudflare Kitesurf agent-browser + NVIDIA 11B speech-model open release**.)
> **Status**: released (open-source)
> **Related**: [[meta]], [[muse-spark]], [[muse-code]], [[muse-image]], [[open-source-models]], [[agent-frameworks]]

## Summary

Muse Glimmer is [[meta]]'s **open-source 30B-parameter model optimized for "always-on" agents** — a fourth Muse-family product-line extending Meta's mid-2026 pivot back into open-weights releases. Unlike the flagship [[muse-spark]] (frontier reasoning) or [[muse-code]] (coding agent), Glimmer is positioned as a **mid-scale substrate for continuous background agent operation**, aligning with Zuckerberg's mid-2026 forecast that billions of users will run persistent AI agents through WhatsApp + Messenger.

Muse Glimmer's *"always-on"* framing is architecturally significant — it suggests optimization for low-cost sustained inference (as opposed to burst-mode high-effort reasoning), placing it competitively adjacent to smaller open-weights models sized for edge or per-user-dedicated deployment. The 30B parameter count sits below the frontier open-weights tier ([[kimi-k3]] 2.8T, [[inkling]] 975B, [[hy3]] 295B) but above the small-model tier ([[gemma-3-270m]], [[bonsai-27b]]) — a mid-tier gap Meta appears to be targeting deliberately.

## Timeline

- **2026-08-10-evening**: **Created — Meta releases Muse Glimmer, open-source 30B parameter model optimized for "always-on" agents**. AI Breakfast HIGH: *"Meta releases Muse Glimmer, an open-source 30B parameter model optimized for 'always-on' agents"*. Same-cycle context: OpenAI Astra critical-cyber safety brakes + Cloudflare Kitesurf agent-first browser launch reframing + NVIDIA 11B open speech model with live tool calling + ByteDance 10T pre-training. Extends Meta's mid-2026 open-source momentum ([[muse-code]] 2026-08-06-evening + [[muse-spark]] Olympiad-gold 2026-08-07-evening) — *source: data/summaries/2026-08-10-evening.json (AI Breakfast HIGH "OpenAI splits frontier AI into 'Doug' and 'Astra'")*

## Key Facts

- **Vendor**: [[meta]]
- **Parameters**: 30B
- **License**: open-source (specific license not stated at first-mention)
- **Positioning**: "always-on" agents — continuous background operation optimization
- **Family**: fourth Muse-family product-line alongside [[muse-spark]] + [[muse-code]] + [[muse-image]]

## Open Questions

- Specific open-source license (Apache 2.0? MIT? Muse-branded custom license?)
- Architecture — dense 30B or MoE with 30B activated? Native multimodal?
- Distribution surface — direct download, Hugging Face, or Meta AI Cloud only?
- Whether Glimmer is intended as a substrate for third-party agents or a Meta-consumer-app-tier model (WhatsApp/Messenger persistent-agent runtime)
- Benchmarks vs comparable open-weights mid-tier models
- Relationship to [[muse-spark]] — distilled from Spark? Trained independently? Co-trained?

## Sources

- data/summaries/2026-08-10-evening.json (AI Breakfast HIGH "OpenAI splits frontier AI into 'Doug' and 'Astra'" — Meta releases Muse Glimmer, an open-source 30B parameter model optimized for 'always-on' agents)
