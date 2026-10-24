---
name: Build a Reasoning Model (From Scratch)
description: Sebastian Raschka's 2026 book + 8-video / 11h+ Python/PyTorch video course for implementing a reasoning model end-to-end (evaluation, inference-time scaling, RL, distillation)
type: product
---

# Build a Reasoning Model (From Scratch)

> **Type**: product (educational book + video course)
> **Author**: [[sebastian-raschka]]
> **Publisher**: Manning Publications (book)
> **First mentioned**: 2026-10-24-evening
> **Last updated**: 2026-10-24-evening
> **Status**: active (video course shipped Oct 2026)
> **Related**: [[sebastian-raschka]], [[ahead-of-ai]], [[reasoning-models]]

## Summary

**Build a Reasoning Model (From Scratch)** is [[sebastian-raschka]]'s 2026 book + video course for implementing a reasoning model end-to-end in Python and PyTorch, starting from a pretrained base LLM. The companion **"Build Your Own Reasoning Model: A Full Video Course"** shipped Oct 24 2026 via [[ahead-of-ai]] — eight videos, over 11 hours of coding — covering the four pillars of modern reasoning-model construction: **evaluation**, **inference-time scaling**, **reinforcement learning**, and **knowledge distillation**. The course is positioned as a direct sequel to Raschka's earlier *Coding LLMs from the Ground Up* and shares the same reproducibility-first posture as his `LLMs-from-scratch` GitHub repo.

Pedagogically the course walks through: loading a base model, text generation, KV caching, building a verifier for evaluation, running reinforcement-learning updates, applying inference-time scaling, and distilling a reasoning model into a smaller target. The accompanying resources include the book (Manning), a repository with hardware and environment recommendations, and shorter adjunct essays on controlling reasoning effort levels and the components of a coding agent.

## Timeline

- **2026-10-24-evening**: **Video course "Build Your Own Reasoning Model: A Full Video Course" ships** — 8 videos, >11h of Python + PyTorch coding; covers evaluation, inference-time scaling, RL, and distillation; explains the relationship between conventional LLMs, [[reasoning-models]], and agents; walks through loading a base model, text generation, KV caching, building a verifier, inference-time scaling, and distilling a reasoning model; sold / distributed via Substack with free + paid tiers; book companion *Build a Reasoning Model (From Scratch)* available via Manning — *source: data/summaries/2026-10-24-evening.json (Ahead of AI by Sebastian Raschka — "Build Your Own Reasoning Model: A Full Video Course")*

## Key Facts

- **Author**: [[sebastian-raschka]]
- **Format**: book (Manning) + 8-video / >11h coding video course
- **Language / stack**: Python + PyTorch
- **Curriculum**: evaluation → inference-time scaling → reinforcement learning → distillation
- **Covered techniques**: base-model loading, text generation, KV caching, verifier construction for evaluation + RL, inference-time scaling, reasoning-model distillation
- **Positioning**: sequel to *Coding LLMs from the Ground Up*; prerequisites include basic LLM / PyTorch familiarity
- **Audience**: engineers and researchers who want to understand reasoning models beyond the black-box commercial API

## Open Questions

- Which specific open-source reasoning architectures (DeepSeek-R1, Qwen-QwQ, etc.) does the course use as reference implementations?
- Does the course cover GRPO or alternative RL methods for reasoning (DAPO, PPO-with-process-rewards)?

## Sources

- data/summaries/2026-10-24-evening.json (newsletter: Ahead of AI by Sebastian Raschka — "Build Your Own Reasoning Model: A Full Video Course")
