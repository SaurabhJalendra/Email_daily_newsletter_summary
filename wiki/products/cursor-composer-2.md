---
name: Cursor Composer 2
description: Cursor's coding-specialized model built via Continued Pretraining + Reinforcement Learning on top of Kimi-K2.5 base weights — realistic-coding-task-tuned frontier substrate
type: product
---

# Cursor Composer 2

> **Type**: product
> **Vendor**: [[cursor]]
> **First mentioned**: 2026-08-10-evening
> **Last updated**: 2026-08-10-evening (**Created — Cameron R. Wolfe / Deep (Learning) Focus canonicalizes *Cursor Composer 2* as a two-part training framework using **Continued Pretraining (CPT) + Reinforcement Learning (RL)** to specialize the **Kimi-K2.5 base model** for realistic coding tasks. Composer 2 Technical Report cited as canonical reference; first frontier-model-tier landing example of the [[midtraining]] canonical framing**.)
> **Status**: active (Cursor in-house model)
> **Related**: [[cursor]], [[cursor-composer]], [[cursor-composer-2-5]], [[kimi-k3]], [[moonshot-ai]], [[midtraining]], [[fine-tuning]]

## Summary

Cursor Composer 2 is [[cursor]]'s **coding-specialized in-house model**, built via a **two-part training framework**: Continued Pretraining (CPT) on a code-focused data mixture, followed by Reinforcement Learning (RL) — layered on top of a **Kimi-K2.5 base model** from [[moonshot-ai]]. The training recipe canonicalizes [[cursor]]'s use of open-weights foundation models as substrates for its own coding-tuned production models, distinct from its predecessor [[cursor-composer-2-5]] (RL-only tuning).

Composer 2 is the canonical mid-2026 landing example of the emerging [[midtraining]] discipline — it demonstrates how a mid-tier vendor without frontier-scale pretraining budget can produce a specialized coding model by adapting an open-weights base with cheaper CPT + RL. The approach validates the *Model Factory* thesis broader across the mid-2026 open-weights arc: base weights become substrate, and value-add moves to the training-recipe + specialization layer.

## Timeline

- **2026-08-10-evening**: **Created — Cameron R. Wolfe / Deep (Learning) Focus "Notes on Midtraining" canonicalizes Cursor Composer 2 as CPT + RL two-part framework on Kimi-K2.5 base for realistic coding tasks; Composer 2 Technical Report cited as canonical reference** — *source: data/summaries/2026-08-10-evening.json (Deep (Learning) Focus MEDIUM "Notes on Midtraining")*

## Key Facts

- **Vendor**: [[cursor]]
- **Base model**: Kimi-K2.5 from [[moonshot-ai]]
- **Training recipe**: two-part — Continued Pretraining (CPT) + Reinforcement Learning (RL)
- **Specialization**: realistic coding tasks (production developer workflows)
- **Canonical reference**: Composer 2 Technical Report

## Open Questions

- Named Cursor product surface — is Composer 2 shipped inside the Cursor IDE, or held as an internal experimental checkpoint?
- Relationship to [[cursor-composer-2-5]] — does Composer 2 supersede 2-5, or coexist as a different track?
- Performance benchmarks vs [[claude-sonnet-5]] + [[gpt-5-6]] Sol + [[kimi-k3]] frontier tier
- Whether the CPT data mixture is documented publicly
- Whether Cursor plans to layer Composer-style training on other open-weights bases (e.g. K3, Inkling, Laguna S)

## Sources

- data/summaries/2026-08-10-evening.json (Deep (Learning) Focus MEDIUM "Notes on Midtraining" — Composer 2 model from Cursor uses two-part training framework with CPT and reinforcement learning (RL) to specialize the Kimi-K2.5 model for realistic coding tasks)
