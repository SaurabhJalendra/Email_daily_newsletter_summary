---
name: Dig.bench
description: Benchmark measuring whether an agent can experiment to discover a game's unknown rules — 70 text-based games (21 publicly released)
type: product
---

# Dig.bench

> **Type**: product (benchmark)
> **First mentioned**: 2026-08-19-morning
> **Last updated**: 2026-08-19-morning
> **Status**: active (initial release)
> **Related**: [[agent-frameworks]], [[ai-benchmarks]], [[loop-engineering]]

## Summary

Dig.bench is an agent benchmark that measures whether an AI agent can **experiment to discover a game's unknown rules** — rather than testing rule-following or optimization within known rules. It contains **70 text-based games** total, with **21 publicly released** and the remainder held back to prevent contamination. Dig.bench probes an underexplored capability axis: *rule-discovery-through-experimentation*, which is distinct from planning under known rules, memorization, or in-distribution generalization. It sits alongside other 2026-tier agent benchmarks (ARC-AGI-3, Terminal-Bench, DeepSWE) but targets the *scientific-method-tier hypothesis-generation-and-testing* skill rather than task-completion or code-generation.

## Timeline

- **2026-08-19-morning**: **First-mention: TLDR AI lands Dig.bench as a 70-text-based-game / 21-publicly-released agent benchmark for rule-discovery-through-experimentation**. TLDR AI MEDIUM: *"Dig.bench is a benchmark that measures whether an agent can experiment to discover a game's unknown rules, containing 70 text-based games, 21 of which have been publicly released"*. Daily-digest Tools & Products anchor. First publicly framed on this cycle: (a) *rule-discovery-through-experimentation as agent-benchmark axis* — novel benchmarking dimension distinct from *plan-under-known-rules* / *code-generation* / *in-distribution-QA*; canonicalizes *scientific-method-tier hypothesis-generation-and-testing* as measurable agent capability; (b) *70-game / 21-public split anti-contamination benchmark design* — first publicly framed *hold-out-majority anti-contamination substrate* in this wiki on an agent benchmark (structurally distinct from full-public-eval-set benchmarks); (c) *text-based games as evaluation substrate* — text-based-game-tier evaluation surface (structurally similar to classic Zork/TextWorld-style rule-inference environments but repurposed for LLM-agent capability measurement). Pairs cycle-structurally with the multi-cycle *frontier-flagship benchmark saturation* problem (ARC-AGI-3 saturation via preserved-reasoning API flags, 08-19-morning [[gpt-5-6]] Ultrafast Cerebras coverage) — Dig.bench targets an *underexplored capability axis* likely to remain unsaturated longer. See [[agent-frameworks]] + [[loop-engineering]] — *source: data/summaries/2026-08-19-morning.json (TLDR AI MEDIUM "Cursor Origin 👨‍💻, Anthropic $65B revenue 💰, deadline dividend scaling 📈")*

## Key Facts

- Task: agent must experiment to discover a game's unknown rules
- Corpus: 70 text-based games (21 publicly released; ~49 held back for anti-contamination)
- Capability axis: rule-discovery-through-experimentation (distinct from plan-under-known-rules / code-generation / in-distribution QA)

## Open Questions

- Which agents / frontier models have been evaluated on Dig.bench? Any published leaderboard?
- Scoring methodology — pass/fail per game, partial credit for hypothesis-generation quality, or turn-count efficiency?
- Whether Dig.bench admits multi-agent / self-play variants or is strictly single-agent
- Anti-contamination refresh schedule — how often are new hold-out games rotated in?
- Relationship to prior text-adventure benchmarks (TextWorld, Zork-style, BabyAI)

## Sources

- data/summaries/2026-08-19-morning.json (TLDR AI MEDIUM "Cursor Origin 👨‍💻, Anthropic $65B revenue 💰, deadline dividend scaling 📈")
