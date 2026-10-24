---
name: Reasoning Models
description: LLM subclass optimized to spend extra inference-time compute (chain-of-thought, verifier loops, tool use) before answering; distinct from conventional LLMs in training recipe and evaluation
type: topic
---

# Reasoning Models

> **Type**: topic
> **First mentioned**: 2026-10-24-evening
> **Last updated**: 2026-10-24-evening
> **Status**: active
> **Related**: [[sebastian-raschka]], [[build-a-reasoning-model]], [[ahead-of-ai]], [[recursive-architectures]], [[latent-space-reasoning]], [[reasoning-trace-extraction]]

## Summary

A **reasoning model** is an LLM optimized to allocate additional inference-time compute to problem solving — generating intermediate reasoning steps, evaluating alternatives, running verifier loops, or using tools — before producing a final answer. Compared with conventional LLMs, reasoning models typically improve performance on difficult mathematics, coding, scientific research, planning, and long-horizon agentic tasks, at the cost of higher latency and per-answer token spend. Canonical commercial examples include OpenAI's o-series ([[gpt-5-6]] Sol, [[gpt-6-sol]]) and reasoning-tier Claude releases; canonical open-weight examples include DeepSeek-R1 and Moonshot AI's Kimi K2 Thinking ([[kimi-k2-thinking]]).

The mid-2026 industry direction is to make reasoning a **configurable capability** rather than a separate model category — recent Anthropic, Google, and OpenAI releases ship with adjustable reasoning-effort levels and longer context/output limits (see [[claude-haiku-5-5]] effort setting, [[gemini-3-5-flash]] tunable thinking, [[claude-opus-5]] effort + Fast mode). Educationally the stack has been popularized through code-along artifacts — most recently [[sebastian-raschka]]'s [[build-a-reasoning-model]] video course (Oct 2026), which implements the four construction pillars from scratch: **evaluation, inference-time scaling, reinforcement learning, and distillation**.

Reasoning models have also surfaced new security and governance surface area: adversaries can extract hidden reasoning tokens from frontier APIs ([[reasoning-trace-extraction]], Aug 2026), and distilled reasoning traces are now a cross-vendor training-data commodity (see [[ai-distillation-attacks]]). Related architectural strands include token-free latent-space reasoning ([[recursive-architectures]], [[latent-space-reasoning]]).

## Timeline

- **2026-10-24-evening**: **[[sebastian-raschka]] / [[ahead-of-ai]] ship [[build-a-reasoning-model]] "Build Your Own Reasoning Model: A Full Video Course"** — 8 videos, >11h, Python + PyTorch — canonicalizes the four-pillar construction recipe (evaluation → inference-time scaling → RL → distillation) as the de-facto open-education on-ramp into reasoning-model engineering, parallel to Karpathy's nanoGPT-style treatment of base LLMs — *source: data/summaries/2026-10-24-evening.json (Ahead of AI by Sebastian Raschka — "Build Your Own Reasoning Model: A Full Video Course")*

## Key Facts

- **Definition**: LLM optimized to spend additional inference-time compute (CoT, verifier loops, tool use, inference-time search) before producing an answer
- **Four construction pillars** (per Raschka's course): evaluation, inference-time scaling, reinforcement learning, knowledge distillation
- **Canonical commercial examples**: OpenAI o-series ([[gpt-5-6]] Sol, [[gpt-6-sol]]), reasoning-tier Claude releases
- **Canonical open-weight examples**: DeepSeek-R1, [[kimi-k2-thinking]], Qwen reasoning variants
- **2026 shift**: reasoning increasingly a *configurable effort knob* on general-purpose models rather than a separate SKU (see [[claude-haiku-5-5]], [[gemini-3-5-flash]], [[claude-opus-5]])
- **Core RL methods**: process-reward models, outcome-reward models, GRPO; distillation of reasoning traces into smaller target models
- **Educational on-ramp**: [[build-a-reasoning-model]] course + book by [[sebastian-raschka]] (Oct 2026)

## Open Questions

- When does *configurable reasoning effort* fully absorb the standalone-reasoning-model SKU category? Or will dedicated reasoning SKUs persist for cost-amortized high-effort workloads?
- How much of the open-weight reasoning-model lineage is distilled from closed-source frontier traces vs natively RL-trained?

## Sources

- data/summaries/2026-10-24-evening.json (newsletter: Ahead of AI by Sebastian Raschka — "Build Your Own Reasoning Model: A Full Video Course")
