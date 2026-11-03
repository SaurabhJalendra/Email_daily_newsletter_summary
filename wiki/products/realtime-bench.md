---
name: Realtime-Bench
description: Benchmark of 50 interactive game and web tasks measuring frontier AI performance on low-latency, real-time interactive problems
type: product
---

# Realtime-Bench

> **Type**: product (benchmark)
> **First mentioned**: 2026-11-03-morning
> **Last updated**: 2026-11-03-morning
> **Status**: active
> **Related**: [[benchmark-integrity]], [[world-models]], [[genie-4]], [[agent-frameworks]], [[reasoning-models]]

## Summary

Realtime-Bench is a benchmark suite of 50 interactive game and web tasks introduced in late October / early November 2026 to evaluate the performance of modern AI systems on low-latency, real-time interactive problems. Framed by *Import AI* as the research artifact behind "Spacewar; low-latency tasks versus LLMs," the benchmark probes whether frontier models can act fast enough and consistently enough on dynamic, interactive environments — including small arcade-style games and live web tasks — rather than purely static, batch-style reasoning benchmarks. Initial results reported alongside the launch indicate that even the best current models struggle to achieve high success rates, highlighting a persistent gap between offline reasoning capability and real-time decision-making.

Structurally, Realtime-Bench sits adjacent to the broader late-2026 world-model and interactive-environment cohort ([[genie-4]], [[marble]], [[gwm-worlds-2]]) but on the *evaluation* side rather than the *generation* side — it asks what current frontier systems can do inside a reactive, time-pressured loop. Its appearance signals growing practitioner interest in benchmarks for agentic timing and reactive control, complementing economic-domain benchmarks like SemiAnalysis's GDPx and the broader [[benchmark-integrity]] discussion.

## Timeline

- **2026-11-03-morning**: **Realtime-Bench introduced — 50 interactive game and web tasks evaluating frontier models on low-latency, real-time interactive problems; best models still struggle at high success rates** — *Import AI 479* HIGH-visibility feature anchor + arXiv paper reference *"Realtime-Bench: Can Frontier Models Solve Real-time Interactive Problems?"* + Jack Clark Spacewar / low-latency / Genie-4 cycle framing — *source: data/summaries/2026-11-03-morning.json (Import AI MEDIUM "Import AI 479: Spacewar; low-latency tasks versus LLMs; Genie 4")*

## Key Facts

- **Scope**: 50 interactive game + web tasks
- **Target**: low-latency, real-time interactive problem solving
- **Source paper**: *Realtime-Bench: Can Frontier Models Solve Real-time Interactive Problems?* (arXiv)
- **Framing (Import AI)**: companion probe to the long-running "Spacewar" / LLM-vs-vision-model lineage essay cycle
- **Initial result**: best frontier models struggle to achieve high success rates
- **Positioning**: evaluation complement to interactive-world-model generators like [[genie-4]]

## Open Questions

- Which specific frontier models were evaluated? (Claude Opus 5.5 / GPT-6 family / Gemini 4 family / open-weight tier)
- Score ranges and leaderboard structure — is there a per-game or per-category breakdown?
- Access model — open leaderboard, submission portal, or paper-only?
- Does the benchmark distinguish perception-latency from decision-latency bottlenecks?
- Relationship (if any) to prior real-time evaluation efforts like Pokémon Red / Atari suites in prior Google DeepMind research?

## Sources

- data/summaries/2026-11-03-morning.json (Import AI MEDIUM "Import AI 479: Spacewar; low-latency tasks versus LLMs; Genie 4"; TLDR AI MEDIUM — top-stories cross-mention)
