---
name: Recursive Architectures
description: Latent-space recurrent reasoning models — HRM, TRM, RecursiveMAS — token-free, hierarchical reasoning at fraction of LLM cost (May 2026)
metadata:
  type: topic
---

# Recursive Architectures

> **Type**: topic
> **First mentioned**: 2026-05-18
> **Last updated**: 2026-05-23
> **Status**: active
> **Related**: [[agent-frameworks]], [[fine-tuning]], [[andrej-karpathy]], [[recursive-superintelligence]], [[ineffable-intelligence]]

## Summary

Recursive architectures are a re-emerging class of AI models that perform reasoning in **latent space** (math-internal representations) rather than token space, using recurrent / weight-sharing modules to simulate the reasoning depth of much larger LLMs at a fraction of the cost. Two flagship examples surfaced in 2026: the **Hierarchical Reasoning Model (HRM)** — two coupled recurrent modules (a high-level abstract-planning module H and a low-level fast-computation module L) achieving ~100× speedup on deterministic tasks; and the **Tiny Recursive Model (TRM)** — a single weight-sharing two-layer network at 5-7M params that beats both HRM and frontier LLMs on Sudoku-Extreme and ARC-AGI-1. Extensions to multi-agent systems (**RecursiveMAS**) show ~2.4× end-to-end speedups and 75.6% token reduction by letting agents communicate "telepathically" in math representations rather than text. The category re-emerged in May 2026 alongside the broader "post-LLM" narrative — Yann LeCun's world-models bet, [[ineffable-intelligence]] / NVIDIA's RL "superlearners" partnership, [[recursive-superintelligence]]'s open-endedness raise, and [[andrej-karpathy]]'s move to [[anthropic]] to use Claude on pretraining. Concrete demos include KAIST's 10M-param reasoning model hitting 97% on Sudoku and 52% on ARC-AGI-1.

## Timeline

- **2026-05-23**: KAIST 10M-param reasoning model: 97% Sudoku, 52% ARC-AGI-1, outperforming much larger models — *source: 2026-05-23 cycle (AlphaSignal — Google managed agents)*
- **2026-05-19**: Sapient Intelligence releases a 1B reasoning model trained in one day for $1,000 — recursive-architecture cost-collapse data point — *source: 2026-05-19 cycle (AlphaSignal — agentmemory hits 11k stars)*
- **2026-05-18**: AlphaSignal cover story on revisiting recursive architectures — HRM, TRM, RecursiveMAS introduced as 100× faster than LLMs on deterministic logic; "return of recursion" framing — *source: 2026-05-18 cycle (AlphaSignal — Why AI is revisiting recursive architectures; NLP Newsletter — top AI papers; Import AI 457)*
- **2026-05-15**: Hierarchical Reasoning Model (HRM) gets recap mention as 1B text generation model trainable with 130-600× less compute and 150-900× less data — *source: 2026-05-15 cycle (Forward Future — Anthropic just passed OpenAI)*

## Key Facts

- HRM: two-module hierarchical recurrence; H plans, L computes; up to 100× speedup on deterministic tasks
- TRM: single weight-sharing 2-layer network; 5-7M parameters; outperforms HRM and frontier LLMs on Sudoku-Extreme + ARC-AGI-1
- RecursiveMAS: multi-agent latent-space communication; ~2.4× end-to-end speedup, 75.6% token reduction
- KAIST 10M reasoning model: 97% Sudoku, 52% ARC-AGI-1
- Sapient Intelligence 1B: trained in one day for $1,000
- HRM-Text 1B: 130-600× less compute, 150-900× less data than foundation models

## Open Questions

- Will recursive architectures generalize beyond deterministic / closed-domain tasks (Sudoku, ARC) to open-ended natural language?
- How do they interact with the embedded LLMs they often complement?
- Concrete adoption — are major labs (Anthropic, OpenAI, Google) actively integrating recursive modules?
- Karpathy at Anthropic — will Claude-on-pretraining work surface recursive-architecture artifacts as a research direction?

## Sources

- data/summaries/2026-05-15.json (Forward Future — Anthropic passed OpenAI; AINews — End of Finetuning + HRM)
- data/summaries/2026-05-18.json (AlphaSignal — Why AI is revisiting recursive architectures; NLP Newsletter — Top AI Papers; Import AI 457)
- data/summaries/2026-05-19.json (AlphaSignal — agentmemory + 1B reasoning model)
- data/summaries/2026-05-23.json (AlphaSignal — Google managed agents + KAIST 10M)
