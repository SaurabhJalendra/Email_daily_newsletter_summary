---
name: Self-Harness
description: Shanghai Artificial Intelligence Laboratory framework enabling an LLM agent to autonomously rewrite and improve its own operating harness — 60% performance boost, three-stage iterative loop (weakness mining, harness proposal, proposal validation)
type: product
---

# Self-Harness

> **Type**: product
> **First mentioned**: 2026-07-06-morning
> **Last updated**: 2026-07-06-morning
> **Status**: active
> **Related**: [[agent-frameworks]], [[loop-engineering]], [[recursive-self-improvement]], [[harnessx]], [[claude-code]], [[openclaw]], [[nous-research]]

## Summary

Self-Harness is a research framework introduced by the **Shanghai Artificial Intelligence Laboratory** in mid-2026 that enables an LLM agent to **autonomously rewrite and improve its own operating harness** without relying on human engineers or a stronger teacher model — reportedly boosting agent performance by **~60%** on evaluated tasks. In the framework's framing, the "harness" is the code around the bare language model — system prompts, tool-use logic, memory management, error handling, verification rules — historically hand-engineered and brittle. Self-Harness drives continuous evolution through a **three-stage iterative loop**: (1) **weakness mining** (identifying failure modes in the agent's own execution traces), (2) **harness proposal** (generating candidate rewrites of the operating rules), (3) **proposal validation** (testing candidates against verifiable goals before committing). Alongside [[harnessx]] (Xiaomi Darwin Agent Team) and the broader [[loop-engineering]] discipline, Self-Harness is positioned as an early concrete instance of [[recursive-self-improvement]] operating at the *harness* level rather than the model-weights level.

## Timeline

- **2026-07-06-morning**: **First publicly framed in this wiki via AlphaSignal HIGH "🚀 AI agents rewrite their own harness to boost performance by 60%"**. AlphaSignal names the framework, attributes it to researchers at the **Shanghai Artificial Intelligence Laboratory**, and describes the **three-stage iterative loop** (weakness mining → harness proposal → proposal validation). Framed against manual harness engineering as "rigid ... requires manual intervention when an edge case breaks the application"; Self-Harness enables models to "analyze their own execution traces, test new logic, and optimize their operating environments autonomously." Paired framing with [[harnessx]] (Xiaomi's Darwin Agent Team) as sibling architectures — together representing the *loop engineering* / autonomous-software-assembly-line trend. AlphaSignal names general-purpose harnesses as the substrate the framework operates on: [[claude-code]], Codex, [[openclaw]], and Nous Hermes Agent ([[nous-research]]). Body-recovery items: (a) benchmark under which the ~60% gain was measured, (b) which base model the agent uses, (c) code + paper links, (d) whether the harness rewrites persist across sessions or reset — *source: data/summaries/2026-07-06-morning.json (AlphaSignal HIGH "🚀 AI agents rewrite their own harness to boost performance by 60%")*

## Key Facts

- Origin: **Shanghai Artificial Intelligence Laboratory**
- Claimed gain: **~60%** performance boost via self-rewritten harness
- Three-stage iterative loop: **weakness mining** → **harness proposal** → **proposal validation**
- Category: harness-updating framework (not model-weight updating)
- Sibling architecture: [[harnessx]] (Xiaomi Darwin Agent Team)

## Open Questions

- Which benchmark(s) produced the 60% number?
- What base LLM does Self-Harness use, and does performance transfer across models?
- Is Self-Harness open-source (code + weights)?
- Do the proposed harness rewrites converge or drift with continued self-iteration?
- Relationship to the 2026-06-07-evening *Disentangling Agent Self-Evolution* paper's harness-updating vs harness-benefit decomposition — does Self-Harness scale monotonically with base-model strength, or hit the non-monotonic ceiling that paper identified?

## Sources

- data/summaries/2026-07-06-morning.json (AlphaSignal HIGH "🚀 AI agents rewrite their own harness to boost performance by 60%")
