---
name: Prime Agent
description: Prime Intellect's Aug 2026 open-source coding agent — 95.5% on ARC-AGI-3 (surpasses human expert baseline); Recursive Language Model + Continual Harness architecture
type: product
---

# Prime Agent

> **Type**: product
> **First mentioned**: 2026-08-07-morning
> **Last updated**: 2026-08-07-morning
> **Status**: launched (open-source)
> **Related**: [[agent-frameworks]], [[muse-code]], [[claude-code]], [[openai-codex]], [[recursive-architectures]], [[self-harness]]

## Summary

Prime Agent is [[prime-intellect]]'s open-source coding agent released in early August 2026, reported to score **95.5% on ARC-AGI-3 — surpassing the human expert baseline**. It is architected around a **Recursive Language Model (RLM)** paired with a **Continual Harness**: the agent writes LM programs as actions over its own context, and can retain context between steps, allowing it to iteratively self-improve on complex multi-step tasks. Positioned as an open-source alternative to closed frontier coding agents like [[claude-code]], [[openai-codex]], and [[muse-code]], with a distinguishing architectural bet on *self-modifying-harness* + *recursive-model-invocation* substrates.

## Timeline

- **2026-08-07-morning**: **Prime Agent released — open-source coding agent scores 95.5% on ARC-AGI-3, surpassing human expert baseline; built on Recursive Language Model + Continual Harness**. AlphaSignal MEDIUM: *"Prime Intellect has released an open-source coding agent called Prime Agent, which scores 95.5% on ARC-AGI-3, surpassing the human expert baseline. This agent is notable for its ability to retain context between steps, allowing it to perform complex tasks more effectively"*. TLDR AI MEDIUM: *"Prime Agent, a self-improving coding harness designed around the Recursive Language Model (RLM) and Continual Harness, has been introduced, allowing the model to write language model programs as actions over its own context"*. First publicly framed in this wiki. Structurally significant: (a) *first open-source coding-agent-tier product to publicly cross the ARC-AGI-3 human-expert baseline* — pairs with prior [[self-harness]] Shanghai AI Lab autonomous-harness-rewrite work into a **self-modifying-harness cohort**; (b) *RLM + Continual Harness architecture* introduces LM-programs-as-actions into the coding-agent design space, structurally analog to [[recursive-architectures]] latent-recurrent-reasoning family. See [[agent-frameworks]] + [[recursive-architectures]] + [[self-harness]] — *source: data/summaries/2026-08-07-morning.json (AlphaSignal MEDIUM "Prime Intellect Agent 🧠, Meta Muse Code Terminal 💻, Skills.sh v1.2 Upd"; TLDR AI MEDIUM "Google DeepMind reshuffle 🧠, Meta Muse Code 💻, Anthropic chip team 🧩")*

## Key Facts

- Vendor: [[prime-intellect]]
- License: open-source
- Benchmark: 95.5% on ARC-AGI-3 (surpasses human expert baseline)
- Architecture: Recursive Language Model (RLM) + Continual Harness
- Distinguishing capability: retains context between steps; writes LM programs as actions over its own context (self-modifying harness)

## Open Questions

- Underlying model substrate (own weights? uses frontier-lab APIs?)
- License terms (Apache 2.0? MIT?) and repo URL
- Concrete ARC-AGI-3 methodology (parallel-samples? single-attempt?)
- Comparison against [[claude-code]] / [[openai-codex]] / [[muse-code]] on SWE-bench Pro or Terminal-Bench
- Compute cost per solved task

## Sources

- data/summaries/2026-08-07-morning.json (AlphaSignal MEDIUM "Prime Intellect Agent 🧠, Meta Muse Code Terminal 💻, Skills.sh v1.2 Upd" — Prime Agent open-source 95.5% ARC-AGI-3 human expert baseline surpass + retains context between steps; TLDR AI MEDIUM "Google DeepMind reshuffle 🧠, Meta Muse Code 💻, Anthropic chip team 🧩" — Prime Agent Recursive Language Model + Continual Harness + LM programs as actions over its own context)
