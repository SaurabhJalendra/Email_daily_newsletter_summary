---
name: Midtraining
description: Intermediate LLM training stage between pretraining and post-training — includes Continued Pretraining (CPT) and mid-training data-mixture adaptation
type: topic
---

# Midtraining

> **Type**: topic
> **First mentioned**: 2026-08-10-evening
> **Last updated**: 2026-08-10-evening (**Created — Cameron R. Wolfe's "Notes on Midtraining" Deep (Learning) Focus essay canonicalizes *midtraining* as a distinct intermediate LLM-training stage between pretraining and post-training; introduces two sub-primitives — **Continued Pretraining (CPT)** for domain-specialization and **midtraining** for adapting data mixture over time to bridge general pretraining and post-training. Landing example: **[[cursor]] Composer 2** uses CPT + RL to specialize [[kimi-k3]]-tier Kimi-K2.5 for realistic coding tasks; **domain-specialized CPT** used to add capabilities like Multi-Token Prediction (MTP) layers for accelerated inference. Paper cited: *"Characterizing Datasets and Building Better Models with Continued Pre-Training"* — practical recipe using shorter proxy experiments to identify best datasets, learning rates, and training durations**.)
> **Status**: active (canonical framing emerged mid-2026)
> **Related**: [[fine-tuning]], [[cursor]], [[cursor-composer-2-5]], [[claude-code]], [[open-source-models]]

## Summary

**Midtraining** is a class of intermediate LLM-training stages inserted between the base *pretraining* run and *post-training* (SFT + RLHF/RLAIF). It sits inside a broader pipeline that increasingly looks like: **pretraining → (Continued Pretraining or midtraining) → SFT → RL**. The category emerged as a first-class canonical framing in mid-2026 via Cameron R. Wolfe's *"Notes on Midtraining"* essay (Deep (Learning) Focus, 2026-08-10).

Two sub-primitives are usually named:
- **Continued Pretraining (CPT)** — continue training a pretrained model on a specific domain or data distribution to specialize the model, or to add architectural capabilities (e.g. Multi-Token Prediction / MTP layers for accelerated inference).
- **Midtraining proper** — an intermediate stage that adapts the *data mixture over time* to bridge general pretraining and post-training, emphasizing different distributions in scheduled phases.

The technique matters because it lets frontier labs squeeze meaningful capability out of an existing pretrained checkpoint without a full pretraining rerun — critical for cost-efficiency in the mid-2026 open-weights arc where labs like [[cursor]] specialize base open-weights checkpoints ([[kimi-k3]]-family, [[deepseek-v4]]) into targeted coding models.

## Timeline

- **2026-08-10-evening**: **Created — Cameron R. Wolfe / Deep (Learning) Focus publishes *"Notes on Midtraining"* canonical essay**. First publicly framed midtraining as distinct training stage in this wiki; canonical CPT + midtraining sub-primitive naming; landing example: [[cursor]] Composer 2 two-part training framework using CPT + RL to specialize Kimi-K2.5 for realistic coding tasks; MTP-layer domain-specialized CPT for accelerated inference. Referenced paper: *"Characterizing Datasets and Building Better Models with Continued Pre-Training"* — proposes shorter proxy experiments to identify best datasets/LR/duration — *source: data/summaries/2026-08-10-evening.json (Deep (Learning) Focus MEDIUM "Notes on Midtraining")*

## Key Facts

- **Position in the pipeline**: between pretraining and post-training (SFT + RL)
- **Sub-primitives**: Continued Pretraining (CPT) + midtraining (data-mixture adaptation)
- **Effectiveness gate**: dataset quality + learning rate + training duration are the primary CPT knobs
- **Efficiency case**: proxy experiments (shorter runs) let practitioners tune CPT hyperparameters cheaply before committing to a full CPT
- **Named use case**: [[cursor]] Composer 2 uses CPT + RL on top of Kimi-K2.5 for coding specialization
- **Architectural extension case**: domain-specialized CPT to add capabilities (e.g. Multi-Token Prediction layers) into an existing model

## Open Questions

- Standardized definition of *midtraining* vs *CPT* — the community naming is still fluid
- Whether midtraining survives as a distinct discipline or gets absorbed into "post-training" as tooling consolidates
- Best practices for scheduling data-mixture transitions during midtraining
- Cross-lab adoption patterns beyond Cursor Composer 2 — do frontier labs use midtraining internally?
- Interaction with [[fine-tuning]] discipline literature — is midtraining a rebrand of long-form domain-adaptive fine-tuning?

## Sources

- data/summaries/2026-08-10-evening.json (Deep (Learning) Focus MEDIUM "Notes on Midtraining" — CPT vs midtraining sub-primitive distinction, Cursor Composer 2 as canonical CPT + RL landing example, Multi-Token Prediction layer domain-specialized CPT, "Characterizing Datasets and Building Better Models with Continued Pre-Training" paper reference)
