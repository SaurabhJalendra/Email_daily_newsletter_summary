---
name: dsh-superagent
description: DeepSeek Harness bundle — open-sourced MIT-licensed proactive coding agent that monitors GitHub repositories and autonomously picks up authorized work without a fresh prompt
type: product
---

# dsh-superagent

> **Type**: product
> **Vendor**: [[deepseek]] (DeepSeek Harness team)
> **First mentioned**: 2026-11-03-morning
> **Last updated**: 2026-11-03-morning
> **Status**: open-source research prototype (MIT licensed)
> **Related**: [[deepseek]], [[deepseek-v4-1-flash]], [[agent-harness]], [[agent-frameworks]], [[claude-code]], [[openai-codex]], [[recursive-self-improvement]], [[ai-supply-chain-attacks]]

## Summary

dsh-superagent is an open-source coding agent prototype released by DeepSeek's Harness team in late October / early November 2026 as a bundle for the DeepSeek Harness runtime. Unlike chat-style coding assistants, dsh-superagent *watches* GitHub repositories (and optionally developer discussions), opens work items on its own, runs tasks in separate sessions, and can return artifacts such as pull requests — without requiring a fresh user prompt per task. It is packaged with permission scoping and session isolation but is explicitly framed as a *research prototype* rather than a production tool.

Structurally, dsh-superagent is DeepSeek's entry into the proactive-coding-agent tier that previously included Anthropic's always-on [[claude-code]] Routines, [[openai-codex]] / Codex superapp, and the Mirendil Lor persistent-R&D-system canonical anchor. It graduates DeepSeek from chat-style assistant positioning into the *observe-workflow-and-act* category and intensifies pressure on commercial coding-agent pricing while introducing new permission, review, and reliability concerns typical of autonomous software-development agents.

## Timeline

- **2026-11-03-morning**: **dsh-superagent open-sourced — MIT-licensed research prototype packaged as a DeepSeek Harness bundle; monitors GitHub, picks up authorized work without a fresh prompt, runs isolated sessions, returns pull requests** — TLDR AI top update + daily-digest AI Models & Research anchor + researchFindings canonicalizes DeepSeek-Harness-team as release owner + Bloomberg + TechNode cross-coverage; graduates DeepSeek into direct-competition posture with Claude Code + OpenAI Codex in the proactive-coding-agent tier — *source: data/summaries/2026-11-03-morning.json (TLDR AI MEDIUM "DeepSeek super agent 🤖, GPT-6 Rosalind 🧬, Google orbital compute 🛰️"; Import AI MEDIUM "Import AI 479: Spacewar; low-latency tasks versus LLMs; Genie 4"; researchFindings.additionalContext — DeepSeek)*

## Key Facts

- **Vendor**: [[deepseek]] (DeepSeek Harness team)
- **License**: MIT (research prototype)
- **Packaging**: bundle for DeepSeek Harness runtime
- **Behavior**: watches GitHub repositories (optionally dev discussions), opens work items, runs in isolated sessions, returns PRs
- **Trigger model**: no fresh prompt required per task — proactive agent-tier
- **Repo**: github.com/deepseek-ai/dsh-superagent-prototype
- **Positioning**: direct competition with [[claude-code]] + [[openai-codex]] / Codex-superapp proactive-coding-agent tier
- **Operational constraints flagged**: permissions, code review, autonomous-behavior reliability

## Open Questions

- Which DeepSeek model backs dsh-superagent by default — [[deepseek-v4-1-flash]], an earlier V3-tier model, or vendor-agnostic?
- Rate / cost ceilings — is this gated to self-hosted use only or does it hit DeepSeek's hosted API?
- Supply-chain-attack surface — pairs structurally with the same-cycle 0.1%-pretraining-poisoning RCE-backdoor paper ([[ai-supply-chain-attacks]]) as a *proactive-agent-plus-poisoned-model* risk-stack
- Guardrails against prompt-injection via issue titles / PR bodies / commit messages
- Enterprise adoption posture — does the MIT research-prototype license permit productization?

## Sources

- data/summaries/2026-11-03-morning.json (TLDR AI MEDIUM "DeepSeek super agent 🤖, GPT-6 Rosalind 🧬, Google orbital compute 🛰️"; Import AI MEDIUM "Import AI 479: Spacewar; low-latency tasks versus LLMs; Genie 4"; researchFindings.additionalContext — DeepSeek open-sources dsh-superagent)
