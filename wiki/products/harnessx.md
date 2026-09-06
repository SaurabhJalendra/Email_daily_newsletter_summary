---
name: HarnessX
description: Xiaomi Darwin Agent Team's "agent foundry" framework — treats the agent architecture as a nine-component behavior pipeline, each behavior implemented as a self-contained "processor" that plugs into different parts of the harness like lego pieces
type: product
---

# HarnessX

> **Type**: product
> **First mentioned**: 2026-07-06-morning
> **Last updated**: 2026-07-06-morning
> **Status**: stale
> **Related**: [[xiaomi]], [[agent-frameworks]], [[loop-engineering]], [[self-harness]], [[recursive-self-improvement]], [[mimo-code]]

## Summary

HarnessX is a research framework from **Xiaomi's Darwin Agent Team**, positioned as an **"agent foundry"** that treats the agent architecture as a **behavior pipeline composed of nine components** — including context assembly, memory management, tool ecosystems, control flow, and observability. Each behavior is implemented as a **self-contained "processor"** that plugs into different parts of the harness, allowing the system to **swap, add, or remove processors like lego pieces** without breaking the surrounding code. The framework is the modularity-first counterpart to [[self-harness]] (Shanghai AI Lab)'s self-rewriting-loop framework — both surfaced in the same 2026-07-06-morning AlphaSignal HIGH cycle and framed as concrete examples of the [[loop-engineering]] discipline shifting the developer's leverage point from prompting individual models toward designing the meta-systems that let models safely iterate on themselves.

## Timeline

- **2026-07-06-morning**: **First publicly framed in this wiki via AlphaSignal HIGH "🚀 AI agents rewrite their own harness to boost performance by 60%"**. AlphaSignal names HarnessX as **Xiaomi's Darwin Agent Team**'s framework, describes it as an *"agent foundry"* treating the agent as a **nine-component behavior pipeline** (context assembly + memory management + tool ecosystems + control flow + observability + four more), and characterizes each behavior as a *"self-contained processor that plugs into different parts of the harness ... swap, add, or remove ... like lego pieces without breaking the surrounding code."* Paired framing with [[self-harness]] (Shanghai AI Lab) — together explicitly named as *"highly productive applications of the broader loop engineering trend, which involves designing autonomous software assembly lines"*; Xiaomi's Darwin Agent Team is a distinct organizational unit from the Xiaomi group product surface previously anchored in [[mimo-code]] (2026-06 three-cycle Xiaomi coding-model convergence). AlphaSignal names general-purpose harnesses as the substrate examples: [[claude-code]], Codex, [[openclaw]], and Nous Hermes Agent. Body-recovery items: (a) all nine named components of the behavior pipeline (only five surfaced in AlphaSignal body), (b) whether HarnessX is open-source with a public GitHub repository, (c) how HarnessX composes with (or diverges from) Xiaomi's [[mimo-code]] coding-model surface, (d) whether HarnessX supports self-modification (Self-Harness-style) or only human-editable modular composition — *source: data/summaries/2026-07-06-morning.json (AlphaSignal HIGH "🚀 AI agents rewrite their own harness to boost performance by 60%")*

## Key Facts

- Origin: **Xiaomi Darwin Agent Team**
- Positioning: *"agent foundry"* — modular behavior-pipeline architecture
- Architecture: **nine components** (context assembly, memory management, tool ecosystems, control flow, observability, + four unnamed)
- Composition model: self-contained processors, swap/add/remove without breaking surrounding code
- Sibling framework: [[self-harness]] (Shanghai AI Lab) — self-rewriting-loop counterpart

## Open Questions

- What are the four unnamed components in HarnessX's nine-component pipeline?
- Is HarnessX open-source? Public GitHub repository?
- How does HarnessX relate to Xiaomi's other AI surfaces — [[mimo-code]] coding model, on-device agents, home-robotics deployments?
- Does HarnessX support self-modification (Self-Harness-style autonomous harness rewriting) or only human-editable modular composition?
- Which base LLM(s) does HarnessX target?

## Sources

- data/summaries/2026-07-06-morning.json (AlphaSignal HIGH "🚀 AI agents rewrite their own harness to boost performance by 60%")
