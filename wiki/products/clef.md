---
name: Clef
description: Cloudflare's Oct 2 2026 open-source "decision model" family (Clef + Clef-flash) + RL fine-tuning platform; fully Jev-API-compatible, Apache 2.0 on Hugging Face, locally-runnable
type: product
---

# Clef

> **Type**: product
> **Vendor**: [[cloudflare]]
> **First mentioned**: 2026-10-03-morning
> **Last updated**: 2026-10-03-morning
> **Status**: launched (open-sourced, Apache 2.0, Hugging Face)
> **Related**: [[cloudflare]], [[jev]], [[typesafe-ai]], [[agent-frameworks]], [[model-routers]], [[kev]]

## Summary

Clef and Clef-flash are [[cloudflare]]'s open-source "decision models" launched October 2 2026, positioned as fully Jev-API-compatible drop-in alternatives to [[typesafe-ai]]'s [[jev]] "System One Model." Decision models help agents programmatically gather context, make decisions, and take actions on tasks — i.e. the lightweight classification/routing/scoring substrate that sits beside full LLM reasoning. Both models are released under Apache 2.0 on Hugging Face and run locally; Cloudflare also launched a companion RL fine-tuning platform.

Clef lands in a crowded Sep–Oct 2026 decision-model cohort — [[kev]] (Jared Palmer, 0.8B–27B), Amazon's Strands Decider 2B, Perplexity's pplx-decider-v1-27b, and Mercor's Qwen3.5-397B-A17B post-trained variant all shipped in the same window — all built against [[typesafe-ai]]'s Jev API, canonicalizing *System One decision substrate* as a competitive, Jev-API-compatible open-model category.

## Timeline

- **2026-10-02**: **Launch** — Cloudflare blog "Introducing Clef: our open-source decision models, and new RL fine-tuning platform". Clef + Clef-flash released Apache 2.0 on Hugging Face as Jev-API-compatible drop-ins. Companion RL fine-tuning platform launched. — *source: data/summaries/2026-10-03-morning.json (TLDR AI MEDIUM "Decision models 🤖, Claude-shaped science 🧪, OpenAI safety firings 🚨")*

## Key Facts

- **Vendor**: [[cloudflare]]
- **Models**: Clef + Clef-flash
- **License**: Apache 2.0
- **Distribution**: Hugging Face
- **Compatibility**: fully Jev-API-compatible (drop-in for [[typesafe-ai]]'s [[jev]])
- **Deployment**: locally-runnable
- **Companion product**: RL fine-tuning platform
- **Category**: decision models — context gathering, decision-making, action selection for agents

## Open Questions

- Parameter counts for Clef vs Clef-flash
- Benchmark numbers vs [[jev]], [[kev]], and Strands Decider
- Pricing + hosted-tier availability on Cloudflare Workers AI
- How the RL fine-tuning platform differs from other Cloudflare agent-infra primitives

## Sources

- data/summaries/2026-10-03-morning.json (TLDR AI MEDIUM "Decision models 🤖, Claude-shaped science 🧪, OpenAI safety firings 🚨")
