---
name: Prime Agent
description: Prime Intellect's Aug 2026 open-source coding agent — 95.5% on ARC-AGI-3 (surpasses human expert baseline); Recursive Language Model + Continual Harness architecture
type: product
---

# Prime Agent

> **Type**: product
> **First mentioned**: 2026-08-07-morning
> **Last updated**: 2026-08-09-morning (**Cycle-2 morning — NLP Newsletter HIGH AI Agents Weekly cross-cohort recoverage locks in *MIT-license + one-command-install-on-macOS-and-Linux + subscription-login / API-key / self-hosted-model-endpoint support* deployment-tier details from researchFindings; extends 08-07-morning launch framing into concrete deployment-substrate anchor**. NLP Newsletter HIGH: *"Prime Intellect released Prime Agent, an open-source, self-improving AI agent harness designed for coding workflows and long-running autonomous tasks. The agent uses a Recursive Language Model (RLM) and a Continual Harness to enable persistent context and tool calling"*. researchFindings additional context: *"open-source, self-improving AI agent harness from Prime Intellect, designed for coding workflows and long-running autonomous tasks"* + *"a Recursive Language Model (RLM) and a Continual Harness, which together let the agent use persistent context, tool calling, multi-agent messaging, and a rewritable runtime state rather than treating each interaction as stateless"* + *"fully open-source and MIT-licensed, with one-command installation on macOS and Linux, and support for subscription logins, API keys, or self-hosted model endpoints"*. First publicly framed on this cycle: (a) *MIT-license anchor* — first publicly framed *concrete open-source license* on Prime Agent (resolves the 08-07-morning "Apache 2.0? MIT?" open question); (b) *one-command-install-on-macOS-and-Linux distribution anchor* — first publicly framed *concrete installation-tier distribution posture* (structurally consistent with the 08-06-evening [[muse-code]] "single-command install on macOS + Linux" pattern — reads as *canonical mid-2026 coding-agent installation-tier norm*); (c) *"subscription logins, API keys, or self-hosted model endpoints" three-way model-substrate anchor* — first publicly framed *three-way model-substrate flexibility* on Prime Agent (resolves the 08-07-morning "own weights? uses frontier-lab APIs?" open question — the answer is *all three*); (d) *"multi-agent messaging"* explicit primitive — first publicly framed *multi-agent messaging as first-class Prime Agent primitive* (structurally consistent with the 08-08-evening [[claude-code]] session-to-session messaging + Zawinski's Law of MultiAgents cycle); (e) *"rewritable runtime state"* framing — sharpens the 08-07-morning *"self-modifying harness"* framing into a *rewritable-runtime-state* concrete anchor. Structurally significant: **Twin release with [[muse-code]] + sibling cluster [[qwen-3-8-max]] + [[lfm-2-5]] + [[qwen-cua]] + [[agent-plugins]] in the same NLP Newsletter cycle productizes the coding-agent-tier as canonical multi-vendor competitive-race axis** — Prime Agent's *open-source-tier* posture pairs cycle-structurally with [[muse-code]] mid-tier-price + [[claude-code]] flagship-tier + [[openai-codex]] frontier-tier as *four-vendor coding-agent tier-cohort competitive-axis*. See [[muse-code]] + [[claude-code]] + [[openai-codex]] + [[agent-frameworks]] + [[self-harness]] — *source: data/summaries/2026-08-09-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: Agent Plugins Standard, Qwen3.8-Max, Meta Muse Code, Prime Agent, LFM2.5-2.6B, Qwen-CUA, Harness Evolution Papers"; researchFindings.additionalContext for Prime Agent)*)
> **Previously updated**: 2026-08-07-morning
> **Status**: launched (open-source, MIT)
> **Related**: [[agent-frameworks]], [[muse-code]], [[claude-code]], [[openai-codex]], [[recursive-architectures]], [[self-harness]], [[qwen-3-8-max]]

## Summary

Prime Agent is [[prime-intellect]]'s open-source coding agent released in early August 2026, reported to score **95.5% on ARC-AGI-3 — surpassing the human expert baseline**. It is architected around a **Recursive Language Model (RLM)** paired with a **Continual Harness**: the agent writes LM programs as actions over its own context, and can retain context between steps, allowing it to iteratively self-improve on complex multi-step tasks. Positioned as an open-source alternative to closed frontier coding agents like [[claude-code]], [[openai-codex]], and [[muse-code]], with a distinguishing architectural bet on *self-modifying-harness* + *recursive-model-invocation* substrates.

## Timeline

- **2026-08-09-morning**: **Cycle-2 morning — NLP Newsletter HIGH AI Agents Weekly cross-cohort recoverage locks in MIT-license + one-command-install-on-macOS-and-Linux + subscription-login / API-key / self-hosted-model-endpoint three-way model-substrate flexibility + "multi-agent messaging" first-class primitive + "rewritable runtime state" architecture concreteness; sibling launch cluster with [[muse-code]] + [[qwen-3-8-max]] + [[lfm-2-5]] + [[qwen-cua]] + [[agent-plugins]] in same NLP Newsletter edition productizes coding-agent-tier as multi-vendor competitive-race axis** — *source: data/summaries/2026-08-09-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: Agent Plugins Standard, Qwen3.8-Max, Meta Muse Code, Prime Agent, LFM2.5-2.6B, Qwen-CUA, Harness Evolution Papers"; researchFindings.additionalContext for Prime Agent)*

- **2026-08-07-morning**: **Prime Agent released — open-source coding agent scores 95.5% on ARC-AGI-3, surpassing human expert baseline; built on Recursive Language Model + Continual Harness**. AlphaSignal MEDIUM: *"Prime Intellect has released an open-source coding agent called Prime Agent, which scores 95.5% on ARC-AGI-3, surpassing the human expert baseline. This agent is notable for its ability to retain context between steps, allowing it to perform complex tasks more effectively"*. TLDR AI MEDIUM: *"Prime Agent, a self-improving coding harness designed around the Recursive Language Model (RLM) and Continual Harness, has been introduced, allowing the model to write language model programs as actions over its own context"*. First publicly framed in this wiki. Structurally significant: (a) *first open-source coding-agent-tier product to publicly cross the ARC-AGI-3 human-expert baseline* — pairs with prior [[self-harness]] Shanghai AI Lab autonomous-harness-rewrite work into a **self-modifying-harness cohort**; (b) *RLM + Continual Harness architecture* introduces LM-programs-as-actions into the coding-agent design space, structurally analog to [[recursive-architectures]] latent-recurrent-reasoning family. See [[agent-frameworks]] + [[recursive-architectures]] + [[self-harness]] — *source: data/summaries/2026-08-07-morning.json (AlphaSignal MEDIUM "Prime Intellect Agent 🧠, Meta Muse Code Terminal 💻, Skills.sh v1.2 Upd"; TLDR AI MEDIUM "Google DeepMind reshuffle 🧠, Meta Muse Code 💻, Anthropic chip team 🧩")*

## Key Facts

- Vendor: [[prime-intellect]]
- License: MIT (fully open-source)
- Benchmark: 95.5% on ARC-AGI-3 (surpasses human expert baseline)
- Architecture: Recursive Language Model (RLM) + Continual Harness — persistent context, tool calling, multi-agent messaging, rewritable runtime state
- Installation: one-command install on macOS and Linux
- Model-substrate flexibility: subscription logins, API keys, or self-hosted model endpoints (three-way choice)
- Distinguishing capability: retains context between steps; writes LM programs as actions over its own context (self-modifying harness); multi-agent messaging as first-class primitive

## Open Questions

- Underlying model substrate (own weights? uses frontier-lab APIs?)
- License terms (Apache 2.0? MIT?) and repo URL
- Concrete ARC-AGI-3 methodology (parallel-samples? single-attempt?)
- Comparison against [[claude-code]] / [[openai-codex]] / [[muse-code]] on SWE-bench Pro or Terminal-Bench
- Compute cost per solved task

## Sources

- data/summaries/2026-08-07-morning.json (AlphaSignal MEDIUM "Prime Intellect Agent 🧠, Meta Muse Code Terminal 💻, Skills.sh v1.2 Upd" — Prime Agent open-source 95.5% ARC-AGI-3 human expert baseline surpass + retains context between steps; TLDR AI MEDIUM "Google DeepMind reshuffle 🧠, Meta Muse Code 💻, Anthropic chip team 🧩" — Prime Agent Recursive Language Model + Continual Harness + LM programs as actions over its own context)
