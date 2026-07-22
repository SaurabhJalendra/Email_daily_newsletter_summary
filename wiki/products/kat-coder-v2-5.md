---
name: KAT-Coder V2.5
description: Kwaipilot's second-generation coding-agent model family — two tiers (Pro V2.5 with 256K context / native tool calling / structured outputs at $0.74/$2.96 per M, and Air V2.5 lighter tier at $0.15/$0.60 per M with a free variant); shipped on OpenRouter alongside its task-aware auto-beta router
type: product
---

# KAT-Coder V2.5

> **Type**: product
> **Vendor**: Kwaipilot (Kuaishou AI-coding team)
> **First mentioned**: 2026-07-22-morning
> **Last updated**: 2026-07-22-morning (Created — OpenRouter HIGH ***"The router picks the model now: Kimi K3, KAT-Coder V2.5 and more"*** launches KAT-Coder V2.5 in two tiers: **KAT-Coder-Pro V2.5** (256K context, native tool calling, structured outputs; **$0.74/M input + $2.96/M output**) and **KAT-Coder-Air V2.5** (lighter tier with a free variant to test before committing; **$0.15/M input + $0.60/M output**). First publicly framed *Kwaipilot-vendor coding-model family with concrete Pro/Air two-tier pricing anchor* in this wiki. Sibling to Chinese-vendor coding-agent cohort ([[mimo-code]] Xiaomi, [[kimi-code-cli]] Moonshot, [[zcode]] Zhipu). Ships on OpenRouter alongside [[model-routers]] auto-beta task-aware routing. See [[model-routers]] + [[open-source-models]] — *source: data/summaries/2026-07-22-morning.json (OpenRouter Team HIGH "The router picks the model now: Kimi K3, KAT-Coder V2.5 and more")*)
> **Status**: shipped (on OpenRouter)
> **Related**: [[model-routers]], [[kimi-code-cli]], [[mimo-code]], [[zcode]], [[claude-code]], [[open-source-models]]

## Summary

KAT-Coder V2.5 is Kwaipilot's (Kuaishou's AI-coding team) second-generation coding-agent model family, shipped in two tiers via OpenRouter in July 2026. **KAT-Coder-Pro V2.5** targets serious agentic-coding workloads with a **256K context window**, **native tool calling**, and **structured outputs** at **$0.74/M input + $2.96/M output**. **KAT-Coder-Air V2.5** is a lighter/cheaper tier with a **free variant** available for evaluation before commitment, priced at **$0.15/M input + $0.60/M output** — 5× cheaper than Pro symmetrically on input and output.

The launch situates Kwaipilot inside the mid-2026 Chinese-frontier-lab coding-vertical cohort alongside [[kimi-code-cli]] (Moonshot), [[mimo-code]] (Xiaomi), [[zcode]] (Zhipu), and Alibaba's Qoder. Distribution via OpenRouter alongside its task-aware `openrouter/auto-beta` router (see [[model-routers]]) is structurally significant — a Chinese coding-model vendor entering the Western developer surface through a US routing-middleware layer rather than a first-party API.

## Timeline

- **2026-07-22-morning**: **Created — KAT-Coder V2.5 launches on [[openrouter]] in two tiers**. Pro V2.5: 256K context, native tool calling, structured outputs, $0.74/M input + $2.96/M output. Air V2.5: lighter tier with free variant, $0.15/M input + $0.60/M output. Sibling launch alongside [[kimi-k3]] on OpenRouter + task-aware `openrouter/auto-beta` router shipping — *source: data/summaries/2026-07-22-morning.json (OpenRouter Team HIGH "The router picks the model now: Kimi K3, KAT-Coder V2.5 and more")*

## Key Facts

- Vendor: Kwaipilot (Kuaishou's AI-coding team)
- KAT-Coder-Pro V2.5: 256K context, native tool calling, structured outputs, $0.74/M input + $2.96/M output
- KAT-Coder-Air V2.5: $0.15/M input + $0.60/M output, includes free evaluation variant
- Distribution: OpenRouter (visible via `openrouter/auto-beta` task-aware routing)
- Positioning: Chinese coding-agent model available on Western developer surface via routing middleware

## Open Questions

- Base model architecture, parameter count, and MoE vs dense
- License terms (open weights? proprietary API-only?)
- Benchmark scores (SWE-Bench Pro, Terminal-Bench, LiveCodeBench) vs [[claude-sonnet-5]] + [[gpt-5-6]] Terra + [[kimi-k3]]
- Relationship to any prior KAT-Coder V2 or V1 release (naming continuity)
- Whether Kwaipilot ships a coding-agent CLI/harness comparable to [[kimi-code-cli]] or [[claude-code]]
- First-party distribution surfaces beyond OpenRouter

## Sources

- data/summaries/2026-07-22-morning.json (OpenRouter Team HIGH "The router picks the model now: Kimi K3, KAT-Coder V2.5 and more")
