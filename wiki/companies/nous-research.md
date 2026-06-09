---
name: Nous Research
description: Nous Research — open-source AI research collective; Hermes Agent self-improving AI agent (Feb 2026)
type: company
---

# Nous Research

> **Type**: company
> **First mentioned**: 2026-02-27
> **Last updated**: 2026-06-09-evening (Ollama integrates [[hermes-desktop]] with first-party `ollama launch hermes-desktop` launcher backed by Ollama local + cloud models)
> **Status**: active
> **Related**: [[agent-frameworks]], [[hermes-desktop]], [[nvidia]]

## Summary

Nous Research is an open-source AI research collective best known for the Hermes model family. In late February 2026 it released the Hermes Agent — an open-source, self-improving AI agent built in Python that learns and adapts to projects over time — extending Nous from open-weight models into the agent-framework layer. In June 2026 it shipped [[hermes-desktop]], a native GUI client of the open-source self-improving Hermes agent for macOS / Windows / Linux, MIT-licensed and model-agnostic — positioned as the open-weights/open-infra counterpart to [[claude-code]] and [[openai-codex]].

## Timeline

- **2026-06-09-evening**: **[[ollama]] adds first-party Hermes Desktop integration** — `ollama launch hermes-desktop` ships [[hermes-desktop]] as a one-command install against Ollama's local + cloud model runtime; recommended companion models include minimax-m3:cloud, kimi-k2.6:cloud, qwen3.6:27b, gemma4:12b, gemma4:26b (Apple-silicon preferred: qwen3.6:27b-mlx, gemma4:26b-mlx). First publicly framed *first-party launcher* for Hermes Desktop in a major local-runtime distribution (extends the 2026-06-04 standalone-app launch into an Ollama-distributed install surface — Hermes Desktop is now installable through the same channel as [[openclaw]] / Pi / Claude Code, reinforcing the open-weights agent-stack-on-Ollama thesis) — *source: data/summaries/2026-06-09-evening.json (Ollama Newsletter — Ollama now supports Hermes Desktop / ollama launch hermes-desktop / Nous Research / parallel subagents + persistent memory + Slack/Discord/Telegram + recommended-model list)*
- **2026-06-04**: [[hermes-desktop]] released — native desktop app (macOS / Windows / Linux) for the open-source self-improving Hermes agent; side-by-side preview panel, provider/model management UI, persistent cross-app memory across Telegram, Discord, Slack, WhatsApp, email, CLI; auto-generates its own skills, runs scheduled jobs unattended; MIT-licensed, model-agnostic; will run on [[nvidia]]'s RTX Spark chip; framed as the open-source alternative to closed-model cloud lock-in for self-improving agents — *source: AlphaSignal "Nous Research ships Hermes Desktop"; World of AI "Hermes desktop launches"; Superhuman; TAAFT — Hermes Agent Hits the Desktop; The Code*
- **2026-04-01**: Hermes Agent adds video generation and multi-instance agent workflows that run without human intervention — first video-gen capability in the Hermes Agent stack and a step toward long-horizon autonomy — *source: 2026-04-01 cycle (AlphaSignal — Nous Research's Hermes Agent Update)*
- **2026-02-27**: Releases Hermes Agent — open-source, self-improving AI agent built in Python; learns and adapts to projects over time — *source: 2026-02-27 cycle*

## Key Facts

- Model family: Hermes (open-weight)
- Agent stack: Hermes Agent (Feb 2026) → [[hermes-desktop]] (June 2026, MIT-licensed)
- Hardware angle: Hermes Desktop will run on [[nvidia]] RTX Spark

## Open Questions

- Base model(s) that Hermes Agent / Desktop ship with by default?
- Self-improvement mechanism — fine-tuning, memory, skill-library?

## Sources

- data/summaries/2026-02-27.json (Nous Research Hermes Agent release)
- data/summaries/2026-04-01.json (AlphaSignal — Hermes Agent adds video generation + multi-instance agent workflows)
- data/summaries/2026-06-04.json (AlphaSignal — Hermes Desktop launch; World of AI — Hermes desktop launches; Superhuman; TAAFT — Hermes Agent Hits the Desktop; The Code)
