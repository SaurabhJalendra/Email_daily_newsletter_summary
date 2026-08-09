---
name: Qwen-CUA
description: Alibaba's Aug 2026 computer-use agent — operates GUIs directly via screenshots + native keyboard/mouse events; claims SOTA on OSWorld-Verified (86.2) and strong WebArena results
type: product
---

# Qwen-CUA

> **Type**: product
> **First mentioned**: 2026-08-09-morning
> **Last updated**: 2026-08-09-morning
> **Status**: launched
> **Related**: [[alibaba]], [[qwen-3-8-max]], [[computer-use]], [[agent-frameworks]], [[gemini-2-5-computer-use]], [[hark-handoff]]

## Summary

Qwen-CUA is [[alibaba]]'s computer-use agent — a model designed to operate graphical user interfaces directly using **screenshots plus native keyboard and mouse events**, rather than relying on text-only APIs or browser DOM access. Launch positioning frames it as "native computer use" for "almost everything" and part of Alibaba's broader agentic push alongside [[qwen-3-8-max]] and [[qwen-agentworld]]. Vendor-reported benchmarks include a new SOTA on **OSWorld-Verified (86.2)** and strong results on **WebArena**, placing it competitively against leading proprietary computer-use agents from [[anthropic]] and [[google]].

Structurally, Qwen-CUA extends [[computer-use]] into a *native-input* tier (screenshots + keyboard + mouse events, no DOM) that sits alongside coding-agent + browser-agent + lifestyle-agent existing tiers — canonical for desktop automation and enterprise workflows where software must be operated the way a human would.

## Timeline

- **2026-08-09-morning**: **Launched — Alibaba releases Qwen-CUA, a computer-use agent operating GUIs via screenshots + keyboard/mouse events; claims 86.2 on OSWorld-Verified and strong WebArena results**. NLP Newsletter HIGH ***"🤖 AI Agents Weekly: Agent Plugins Standard, Qwen3.8-Max, Meta Muse Code, Prime Agent, LFM2.5-2.6B, Qwen-CUA, Harness Evolution Papers"***: *"Alibaba released Qwen-CUA, a computer-use agent designed to operate graphical user interfaces directly using screenshots, keyboard, and mouse events. The agent has achieved strong results on benchmarks such as WebArena and OSWorld-Verified"* + *"Qwen-CUA Hits 86.2 on OSWorld"*. researchFindings additional context: *"'native computer use' system for 'almost everything'"* + *"community reports say it is competitive with leading proprietary computer-use agents"* + *"part of the broader Qwen push into agentic AI, which also includes earlier Qwen models with stronger autonomous task execution and visual agentic capabilities"* + *"benchmark claims such as strong results on WebArena and a new state-of-the-art result on OSWorld-Verified"*. First publicly framed in this wiki. Structurally significant three ways: (a) **Native-input computer-use tier** — Qwen-CUA operates via screenshots + native keyboard/mouse rather than DOM or browser-API tiers, extending [[computer-use]] into a *desktop-native* substrate; (b) **OSWorld-Verified 86.2 SOTA claim** — puts Alibaba into the same top-tier benchmark cohort as Claude Computer Use + [[gemini-2-5-computer-use]] on the canonical computer-use benchmark; (c) **Same-edition cross-productization with [[qwen-3-8-max]] + Ori Harness (OpenRouter) + Alibaba's broader agentic push** — reads as *Alibaba productizing a full agentic stack* (frontier model + computer-use agent + harness) in the same NLP Newsletter cycle. See [[alibaba]] + [[qwen-3-8-max]] + [[computer-use]] + [[agent-frameworks]] — *source: data/summaries/2026-08-09-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: Agent Plugins Standard, Qwen3.8-Max, Meta Muse Code, Prime Agent, LFM2.5-2.6B, Qwen-CUA, Harness Evolution Papers"; researchFindings.additionalContext for Qwen-CUA)*

## Key Facts

- Vendor: [[alibaba]]
- Category: computer-use agent (native input tier — screenshots + keyboard + mouse)
- Benchmark claim: 86.2 on OSWorld-Verified (SOTA claim, vendor-reported); strong WebArena results
- Positioning: "native computer use for almost everything"
- Companion stack: [[qwen-3-8-max]] frontier model + Ori Harness ([[agent-frameworks]] context)
- Competitive framing: competitive with leading proprietary computer-use agents (Claude Computer Use, [[gemini-2-5-computer-use]])

## Open Questions

- License and open-weights status
- Model architecture — VLM-tier vision backbone + policy head, or unified single model?
- Independent OSWorld-Verified verification (vendor-reported 86.2)
- Concrete WebArena number
- Pricing and distribution channel — QwenCloud API only or downloadable weights?
- Compute footprint and latency for real-time GUI operation
- Safety story — misclick / destructive-action bounds, payment-authorization scope

## Sources

- data/summaries/2026-08-09-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: Agent Plugins Standard, Qwen3.8-Max, Meta Muse Code, Prime Agent, LFM2.5-2.6B, Qwen-CUA, Harness Evolution Papers" — Qwen-CUA computer-use agent + screenshots + keyboard/mouse events + WebArena + OSWorld-Verified + 86.2 SOTA; researchFindings.additionalContext for Qwen-CUA — "native computer use for almost everything" + competitive with proprietary computer-use agents + part of broader Qwen agentic push)
