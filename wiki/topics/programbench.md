---
name: ProgramBench
description: Oct 2026 benchmark testing an AI system's ability to rebuild entire software programs from scratch; Claude Opus 5.5 scored 18.5% vs 0% from any prior model
type: topic
---

# ProgramBench

> **Type**: topic (benchmark)
> **First mentioned**: 2026-10-27-morning
> **Last updated**: 2026-10-27-morning
> **Status**: active
> **Related**: [[claude-opus-5-5]], [[anthropic]], [[benchmark-integrity]], [[ai-native-sdlc]], [[recursive-self-improvement]]

## Summary

ProgramBench is a mid-to-late-2026 benchmark that evaluates whether a language model can **rebuild complete software programs from scratch** given a specification. Jack Clark's Import AI 478 (2026-10-27-morning) canonicalizes it as a significant difficulty step above typical coding benchmarks (SWE-Bench, Terminal-Bench): **the best prior model scored 0%**, and **[[claude-opus-5-5]] scored 18.5%** — the first non-zero result on the benchmark. ProgramBench pairs with [[recursive-self-improvement]] framing as a *concrete whole-program-reconstruction tier* benchmark that measures full-system synthesis rather than function-level edits.

## Timeline

- **2026-10-27-morning**: **First-in-wiki canonical ProgramBench anchor + Claude Opus 5.5 scored 18.5% + prior best 0% canonical first-non-zero-result anchor**. Import AI 478 "Math for alignment; ProgramBench; and Mirendil shows what RSI means": *"Claude Opus 5.5 has achieved a score of 18.5% on ProgramBench, a benchmark that tests AI systems' ability to rebuild software programs from scratch. This represents significant progress, as the best model previously scored 0% on the benchmark."* Also referenced earlier at practitioner-tier on 2026-10-25-evening Interconnects (Lambert podcast body links) as "Program Bench" alongside K3.1 Pro Artificial Analysis positioning. See [[claude-opus-5-5]] + [[anthropic]] + [[ai-native-sdlc]] — *source: data/summaries/2026-10-27-morning.json (Import AI 478 "Math for alignment; ProgramBench; and Mirendil shows what RSI means"; linked arXiv — "ProgramBench: Can Language Models Rebuild Programs From Scratch?")*

## Key Facts

- **Published**: arXiv paper *"ProgramBench: Can Language Models Rebuild Programs From Scratch?"* (per Import AI 478 link roundup)
- **Task shape**: whole-program reconstruction from specification/intent — not function-level edit, not SWE-Bench-style patch
- **Prior best**: 0% from any prior model (per Jack Clark/Import AI 478)
- **Claude Opus 5.5**: 18.5% (first non-zero result)
- **Positioning**: step above SWE-Bench Pro and Terminal-Bench 4.0 in task difficulty; measures full-system synthesis

## Open Questions

- Full task count + domain scope of ProgramBench (languages, program sizes, libraries)
- Scores for other frontier models — [[gpt-6-sol]], [[openai-astra]], [[gemini-4-argon]], [[kimi-k3-1-pro]]
- Grading rubric — functional correctness vs stylistic match vs test-pass-rate
- Does the 18.5% result use Opus 5.5 Ultracode effort-tier or default effort?
- Whether ProgramBench joins the AA Intelligence Index + Terminal-Bench canonical cross-vendor cluster

## Sources

- data/summaries/2026-10-27-morning.json (Import AI 478 "Math for alignment; ProgramBench; and Mirendil shows what RSI means" — Claude Opus 5.5 18.5% vs best-prior 0% + arXiv link)
