---
name: Attention Interface
description: Latent.Space's framing for Harness 3.0 — the portion of the agent harness that faces the human (when the agent interrupts, what it shows, which decisions require human input), as predicted in the "Evolution of the Agent Harness" essay and productized by Anthropic's Claude Mods
type: topic
---

# Attention Interface

> **Type**: topic
> **First mentioned**: 2026-08-22-evening (as prediction in [[agent-harness]])
> **Promoted to standalone**: 2026-10-22-morning
> **Last updated**: 2026-10-22-morning
> **Status**: active
> **Related**: [[agent-harness]], [[claude-mods]], [[modsmith]], [[claude-code]], [[chatgpt-intelligent-ui]], [[anthropic]], [[openai]], [[cursor]]

## Summary

The **Attention Interface** is Latent.Space's framing for *Harness 3.0* in the three-era [[agent-harness]] canonical framework. As models absorb more harness capability into their weights (tool use, planning, long-context reasoning), the remaining harness surface *sheds its scaffold* and inverts: instead of facing the machine (environment, tools, context, guardrails), it faces the human — deciding when the agent is allowed to interrupt, what it shows the user, when it should keep working autonomously, and which decisions require human input. This interface itself is designed as a *learnable component* that improves with data on human-agent interaction.

[[anthropic]]'s **[[claude-mods]]** (October 2026) is the first concrete productization of this era — TypeScript/JavaScript middleware that lets users shape the attention interface of their own [[claude-code]] instance. Latent.Space names two cohort-tier parallel efforts: [[openai]]'s ChatGPT Intelligent UI (which generates interfaces on the fly) and [[cursor]]'s PR Routing & Approval (which assigns reviewers based on code ownership and commit history). The common thread is treating the human-agent coordination layer as a programmable, shareable, learnable surface rather than a hardcoded UI chrome.

## Timeline

- **2026-10-22-morning**: **Promoted to standalone topic — Latent.Space essay "Claude Mods: Flipping the Harness Inside Out" productizes the Attention Interface as a shipped substrate via [[claude-mods]] + [[modsmith]]**. First-in-wiki *concrete productization of the Harness 3.0 "Attention Interface" era* predicted by the 2026-08-22-evening *Evolution of the Agent Harness* essay. Three structural anchors in one cycle: (a) Claude Mods as user-authored TypeScript/JavaScript middleware for Claude Code's execution + rendering flow; (b) [[modsmith]] as companion distribution platform; (c) comparator-tier cohort naming [[openai]] ChatGPT Intelligent UI (on-the-fly interface generation) + [[cursor]] PR Routing & Approval (code-ownership + commit-history reviewer assignment) as structurally parallel attention-interface work across the frontier-coding-agent cohort. See [[claude-mods]] + [[modsmith]] + [[agent-harness]] — *source: data/summaries/2026-10-22-morning.json (Latent.Space MEDIUM "Claude Mods: Flipping the Harness Inside Out")*
- **2026-08-22-evening**: **Framework introduced — Latent.Space HIGH "The Evolution of the Agent Harness" predicts the Attention Interface as Harness 3.0 — the harness becoming an interface to human attention governing when the agent interrupts, when it keeps working, and which decisions it can make alone; "learnable component that can learn with more data"**. See [[agent-harness]] — *source: data/summaries/2026-08-22-evening.json (Latent.Space HIGH "The Evolution of the Agent Harness")*

## Key Facts

- **Author of framing**: Latent.Space (swyx)
- **Position in framework**: Harness 3.0 era in Latent.Space's three-era [[agent-harness]] framework (Bolt-On 1.0 → Co-Training 2.0 → Attention 3.0)
- **Core inversion**: harness *facing the human* rather than *facing the machine*
- **Primitive questions it governs**: when the agent may interrupt the user; what the agent shows; when it keeps working autonomously; which decisions require human input
- **Design property**: learnable — improves with data on human-agent interaction
- **First concrete productization**: [[claude-mods]] (Anthropic, October 2026)
- **Named parallel cohort**: [[openai]] ChatGPT Intelligent UI (on-the-fly interface generation); [[cursor]] PR Routing & Approval (reviewer assignment via code ownership + commit history)

## Open Questions

- How attention-interface components are *trained* — supervised examples of good interrupt timing, RL from user feedback, or heuristic bootstrap first then learned?
- Whether cross-vendor interoperability emerges (shared primitives for interrupt / notify / defer) or each harness vendor builds proprietary mod formats
- Interaction with Anthropic's approval-gate vs auto-execute [[computer-use]] discourse — the attention interface is the same surface that decides which actions auto-run vs ask
- How attention-interface mods interact with [[agent-skills]] + [[agent-plugins]] — do they compose, overlap, or share a registry
- Measurement: what the right benchmark for a good attention interface is (user interruption rate? decision correctness? time to task completion?)

## Sources

- data/summaries/2026-10-22-morning.json (Latent.Space MEDIUM "Claude Mods: Flipping the Harness Inside Out")
- data/summaries/2026-08-22-evening.json (Latent.Space HIGH "The Evolution of the Agent Harness")
