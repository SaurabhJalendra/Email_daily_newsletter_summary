---
name: Muse Ember
description: Meta Superintelligence Labs' smallest and most cost-efficient Muse-family model (Nov 9 2026) — small reasoning model optimized for high-volume agent tasks (tool calls, coding subtasks, routing, extraction, long-document parsing); matches Claude Haiku 5.5's highest reasoning score at ~1/3 the cost; outperforms GPT-6 Luna across reasoning settings
type: product
---

# Muse Ember

> **Type**: product
> **Vendor**: [[meta]] (Meta Superintelligence Labs)
> **First mentioned**: 2026-11-10-morning (captured implicitly on [[meta]] canonical anchor cluster)
> **Last updated**: 2026-11-11-morning (**TLDR AI HIGH daily-digest Top Story #2 standalone page creation — "Meta introduced Muse Ember, a small reasoning model optimized for agent tasks such as tool calling, coding, and document parsing, which matches Claude Haiku 5.5's highest reasoning score at roughly one-third the cost and outperforms GPT-6 Luna across reasoning settings" canonical anchor + researchFindings.additionalContext canonical pricing anchor: $0.10/M input + $0.004/M cached input + $0.50/M output + Model API `muse-ember-1.0` + Muse Code availability + canonical five-primitive agent-work scope (tool calls + coding subtasks + routing + information extraction + long-document parsing) + canonical pairs-with-Muse-Wonder heterogeneous-agent-stack framing + canonical three-primitive safety-eval scope (chem/bio + cybersecurity + loss-of-control)**)
> **Status**: generally available (Nov 9 2026); Meta Model API + Muse Code
> **Related**: [[meta]], [[muse-wonder]], [[claude-haiku-5-5]], [[gpt-6-luna]], [[simon-willison]], [[artificial-analysis]], [[model-routers]]

## Summary

Muse Ember (officially `muse-ember-1.0`) is [[meta]] Superintelligence Labs' smallest and most cost-efficient Muse-family model, released November 9 2026. Rather than serving as a frontier general-purpose model, it is designed for high-volume, repetitive agent work — tool calls, coding subtasks, routing, information extraction, long-document parsing — meant to work alongside larger Muse models like [[muse-wonder]] inside heterogeneous agent stacks that dispatch cheap execution steps to small models and reserve frontier models for hard planning.

TLDR AI's HIGH-tier framing is that Muse Ember matches [[claude-haiku-5-5]]'s highest reasoning score at roughly one-third the cost and outperforms [[gpt-6-luna]] across reasoning settings on Artificial Analysis benchmarks, making it a concrete early-Nov-2026 reference anchor for the shift away from "scale one model up" and toward specialized small-models-for-repeated-operations deployed via routers. Meta reports safety evaluations covering chemical and biological risks, cybersecurity, and loss-of-control scenarios, though independent assessments of real-world performance and adoption remain limited.

## Timeline

- **2026-11-11-morning**: TLDR AI HIGH daily-digest Top Story #2 canonical productization anchor — matches Claude Haiku 5.5 highest reasoning score at ~1/3 cost + outperforms GPT-6 Luna on reasoning; pricing $0.10/M input + $0.004/M cached + $0.50/M output; Model API `muse-ember-1.0` + Muse Code — *source: TLDR AI HIGH "Claude Fable 5.2 ✨, Meta Ember 🤖, Google's new TPUs ⚡"*
- **2026-11-10-morning**: Meta Muse Ember first mentioned — captured implicitly on [[meta]] canonical anchor cluster with Tactus + Custom Spaces + Superintelligence Scaling Framework quad-cluster — *source: TLDR AI HIGH "AI R&D accelerates 📈, OpenAI at $1.25T 💰, GitHub's multiplayer harness 🤖"*
- **2026-11-10-evening**: Simon Willison MEDIUM practitioner-tier benchmark comparison on Artificial Analysis vs [[claude-haiku-5-5]] + [[gpt-6-luna]] canonical three-model small-tier benchmark-cohort anchor — *source: Simon Willison MEDIUM "Locating the source of a mysterious beep with Claude"*

## Key Facts

- **Vendor**: [[meta]] Superintelligence Labs
- **Release**: November 9 2026
- **API identifier**: `muse-ember-1.0`
- **Pricing**: $0.10/M input tokens; $0.004/M cached input tokens; $0.50/M output tokens
- **Positioning**: smallest + most cost-efficient Muse family member; pairs with [[muse-wonder]] inside heterogeneous agent stacks
- **Target workloads**: tool calls + coding subtasks + routing + information extraction + long-document parsing
- **Benchmarks (vendor-attributed)**: matches [[claude-haiku-5-5]] highest reasoning score at ~1/3 cost; outperforms [[gpt-6-luna]] across reasoning settings
- **Distribution surfaces**: Meta Model API + Muse Code
- **Safety-eval scope**: chemical + biological risks + cybersecurity + loss-of-control scenarios

## Open Questions

- Independent benchmark scores (Artificial Analysis Intelligence Index, SWE-bench, Terminal-Bench)
- Parameter count and architecture (MoE vs dense)
- Context-window + output-token limits
- Positioning vs other Muse-family small models ([[muse-spark]], [[muse-glimmer]]) in the heterogeneous-agent-stack strategy

## Sources

- data/summaries/2026-11-11-morning.json (newsletter: TLDR AI HIGH "Claude Fable 5.2 ✨, Meta Ember 🤖, Google's new TPUs ⚡"; researchFindings.additionalContext — Meta Ember)
- data/summaries/2026-11-10-morning.json (newsletter: TLDR AI HIGH "AI R&D accelerates 📈, OpenAI at $1.25T 💰, GitHub's multiplayer harness 🤖")
- data/summaries/2026-11-10-evening.json (newsletter: Simon Willison MEDIUM "Locating the source of a mysterious beep with Claude")
