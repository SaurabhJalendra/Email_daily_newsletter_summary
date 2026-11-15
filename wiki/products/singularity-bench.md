---
name: Singularity-Bench
description: Nov 2026 open-ended benchmark testing whether autonomous AI agents can build and optimize the systems used to develop the next generation of AI — six end-to-end tasks on fixed compute/time budgets on NVIDIA GB300 hardware; initial Singularity-Index results show Opus 5.5 via Claude Code at 1.25 vs 0.58 average for other agents
type: product
---

# Singularity-Bench

> **Type**: product (benchmark)
> **First mentioned**: 2026-11-15-morning
> **Last updated**: 2026-11-15-morning (**NEW page — NLP Newsletter HIGH "AI Agents Weekly" canonical introduction. Singularity-Bench is a newly introduced open-ended benchmark for testing whether autonomous AI agents can build and optimize the systems used to develop the next generation of AI. Covers six end-to-end tasks — pre-training + mid-training + post-training + inference + agent-harness development + cluster orchestration — giving agents a minimal codebase, fixed compute/time budgets, and a defined objective, then comparing their results with mature human-engineered baselines on identical NVIDIA GB300 hardware. Initial report (Nov 13 2026) says that across 11 agents built from seven frontier models and two harnesses, **[[claude-opus-5-5]] running through [[claude-code]] matched or exceeded the human baseline on all six tasks, achieving a reported Singularity-Index of 1.25**; other agents averaged 0.58. Project stated industry impact: provide a recurring measure of how much AI-development agents can perform end to end, including whether they can create production-relevant components comparable to [[sglang]] + NVIDIA Dynamo. Explicitly cautions that early results should NOT be interpreted as proof of recursive self-improvement or imminent technological singularity. First-in-wiki *concrete full-stack-AI-engineering-ability benchmark canonical anchor* — distinct from isolated coding + reasoning benchmarks. See [[claude-opus-5-5]] + [[claude-code]] + [[nvidia-gb300]] + [[recursive-self-improvement]] + [[benchmark-integrity]] + [[agent-frameworks]] — *source: data/summaries/2026-11-15-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: Claude Fable 5.2, Gemini 4 Hydrogen, RIME, AlphaProof Code, Singularity-Bench, CoT Monitorability, Muse Ember, and More"; researchFindings.additionalContext — Singularity-Bench)*)
> **Status**: launched (research/benchmark-tier; arXiv paper + GitHub repo Nov 13 2026)
> **Related**: [[claude-opus-5-5]], [[claude-code]], [[nvidia]], [[recursive-self-improvement]], [[benchmark-integrity]], [[agent-frameworks]], [[sglang]]

## Summary

Singularity-Bench is a Nov 13 2026 open-ended benchmark that measures practical, full-stack AI-development ability rather than isolated coding or reasoning. It presents autonomous AI agents with six end-to-end tasks — pre-training, mid-training, post-training, inference, agent-harness development, and cluster orchestration — and gives each agent a minimal codebase, fixed compute and time budgets, and a defined objective. Results are compared against mature human-engineered baselines on identical NVIDIA GB300 hardware; the headline metric is the **Singularity-Index**, a ratio against the human baseline.

The initial report tested 11 agents built from seven frontier models and two harnesses. **Claude Opus 5.5 running through Claude Code matched or exceeded the human baseline on all six tasks, scoring a Singularity-Index of 1.25**; the mean across other agents was 0.58. The project frames the benchmark as a recurring measure of how much AI engineering agents can perform end-to-end (including whether they can create production-relevant components comparable to [[sglang]] and NVIDIA Dynamo), while explicitly warning that early scores should not be read as proof of recursive self-improvement or an imminent technological singularity.

## Timeline

- **2026-11-15-morning**: NEW — NLP Newsletter HIGH introduces Singularity-Bench as a six-task open-ended benchmark for autonomous AI-development agents; Opus 5.5 via Claude Code scores Singularity-Index 1.25 (human-parity+) vs 0.58 average for other agents — *source: data/summaries/2026-11-15-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: Claude Fable 5.2, Gemini 4 Hydrogen, RIME, AlphaProof Code, Singularity-Bench, CoT Monitorability, Muse Ember, and More")*

## Key Facts

- **Tasks (six end-to-end)**: pre-training + mid-training + post-training + inference + agent-harness development + cluster orchestration
- **Hardware substrate**: NVIDIA GB300 (identical across agent + human baseline)
- **Agent cohort tested**: 11 agents, seven frontier models, two harnesses
- **Top result**: **[[claude-opus-5-5]] via [[claude-code]] matched or exceeded human baseline on all six tasks** — Singularity-Index **1.25**
- **Average result**: Singularity-Index **0.58** for other agents
- **Release date**: November 13 2026 (arXiv paper + GitHub repo)
- **Industry positioning**: recurring measure of whether frontier agents can produce production-relevant components comparable to [[sglang]] + NVIDIA Dynamo
- **Caveat**: not proof of recursive self-improvement or imminent singularity

## Open Questions

- Full list of 11 agents + seven frontier models + two harnesses evaluated
- Per-task Singularity-Index breakdown
- Whether baseline is Anthropic + NVIDIA engineering teams or an open-community baseline
- Cadence of re-runs (quarterly, continuous, etc.)
- Will the benchmark be hosted on a recurring leaderboard (like Artificial Analysis) or a static paper

## Sources

- data/summaries/2026-11-15-morning.json (newsletter: NLP Newsletter HIGH "🤖 AI Agents Weekly: Claude Fable 5.2, Gemini 4 Hydrogen, RIME, AlphaProof Code, Singularity-Bench, CoT Monitorability, Muse Ember, and More"; researchFindings.additionalContext — Singularity-Bench; arXiv + GitHub attribution)
