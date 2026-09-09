---
name: Recursive Architectures
description: Latent-space recurrent reasoning models — HRM, TRM, RecursiveMAS — token-free, hierarchical reasoning at fraction of LLM cost (May 2026)
type: topic
---

# Recursive Architectures

> **Type**: topic
> **First mentioned**: 2026-05-18
> **Last updated**: 2026-09-09-evening (**Sebastian Raschka HIGH-tier canonical practitioner-education-tier deep-dive on Looped Transformers + [[openai-astra]] recurrent-depth substrate + [[astra-next]] canonical unreleased-successor anchor**. Ahead of AI MEDIUM cycle-headline *"GPT-6 Astra, Looped Transformers, and Hidden Reasoning"*: *"Looped Transformers are a class of transformer architectures that reuse the same block or layer stack repeatedly across multiple passes, rather than relying only on a single forward traversal through a fixed-depth network, and have been framed as a way to increase effective depth, improve parameter efficiency, and support iterative refinement for reasoning, in-context learning, length generalization, and algorithmic tasks"* + *"A recent 2026 line of work also describes 'training-free' variants that retrofit recurrence onto frozen models at inference time, suggesting the idea is moving from a training-time architecture choice to a broader systems technique"* + *"at least one external technical/safety analysis describing GPT-6 Astra as using a **recurrent depth / looped transformer** design"*. arXiv reference cluster: Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach + Mixture-of-Recursions + SMELT: Scaling Laws for Compute-Matched MoE Looped Transformers + Full-bandwidth transformer. First-in-wiki: (a) **Looped Transformers as canonical named architectural family with iterative-refinement + effective-depth + parameter-efficiency triple canonical anchor** — sharpens the 09-03-morning tokens& Weekly *"recurrent depth"* technique canonical anchor + 09-04-morning TLDR AI HIGH *"looped transformer... reuses layers"* concrete-technique canonical anchor into a *canonical architectural-family + four-capability-benefit + arXiv-reference-cluster practitioner-education-tier anchor*; (b) **"Training-free variants retrofit recurrence onto frozen models at inference time" canonical inference-time-retrofit anchor** — first-in-wiki *concrete training-free-recurrence-retrofit canonical anchor* on the mid-2026 Looped-Transformer arc (structurally significant — extends the multi-cycle recurrent-depth canonical anchor from *training-time architectural choice* into a *broader systems-technique category* that can be *retrofitted onto pretrained frozen models*); (c) **[[openai-astra]] as canonical practitioner-education-tier reference-implementation for Looped Transformers architecture** — sharpens the multi-cycle Astra recurrent-depth + reduced-visibility-into-decision-making canonical anchor with a *Sebastian-Raschka-authored practitioner-education-tier deep-dive canonical anchor* (first-in-wiki *practitioner-education-tier canonical reference-anchor for Astra's Looped Transformer architecture*); (d) **[[astra-next]] canonical unreleased-successor productizes the frontier-lab recurrent-depth arc** — see [[astra-next]] for full detail on 10,000-agent × 88-hour × 130B-token × >$40M Navier-Stokes-solve canonical anchor cluster. Structurally significant: **Sebastian Raschka's deep-dive graduates Looped Transformers from *unnamed-recurrent-technique tier* into *canonical-practitioner-education-tier named-architectural-family with arXiv-reference-cluster canonical anchor* — first-in-wiki *canonical practitioner-education-tier reference-anchor on the mid-2026 Looped-Transformer arc* — validates the multi-cycle Astra recurrent-depth canonical anchor + [[latent-space-reasoning]] arc + [[astra-next]] unreleased-successor arc into a *canonical named-architectural-family + practitioner-education-tier deep-dive + concrete-showcase-application (Navier-Stokes) four-anchor cluster on the Looped-Transformer arc**. See [[openai-astra]] + [[astra-next]] + [[latent-space-reasoning]] + [[agent-frameworks]] + [[recursive-self-improvement]] + [[agi-timelines]] — *source: data/summaries/2026-09-09-evening.json (Ahead of AI MEDIUM "GPT-6 Astra, Looped Transformers, and Hidden Reasoning"; researchFindings.additionalContext for Looped Transformers + GPT-6 Astra)*)
> **Previously updated**: 2026-05-23
> **Status**: active
> **Related**: [[agent-frameworks]], [[fine-tuning]], [[andrej-karpathy]], [[recursive-superintelligence]], [[ineffable-intelligence]], [[openai-astra]], [[astra-next]], [[latent-space-reasoning]]

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
