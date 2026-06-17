---
name: Nous Research
description: Nous Research — open-source AI research collective; Hermes Agent self-improving AI agent (Feb 2026)
type: company
---

# Nous Research

> **Type**: company
> **First mentioned**: 2026-02-27
> **Last updated**: 2026-06-17-morning (**first publicly framed user-tier downstream tutorial-monetization artifact on Hermes Agent in this wiki** — Abhijay's AI Action Letter "I Built an AI Chief of Staff That Runs My Inbox for $5/Month | Hermes Agent Tutorial" lands as a builder-tutorial-tier downstream of the Feb 2026 Hermes Agent release; pipeline summaries unavailable across all 9 newsletters — twelfth consecutive cycle with the OpenRouter 403 key-limit-exceeded blocker)
> **Status**: active
> **Related**: [[agent-frameworks]], [[hermes-desktop]], [[nvidia]]

## Summary

Nous Research is an open-source AI research collective best known for the Hermes model family. In late February 2026 it released the Hermes Agent — an open-source, self-improving AI agent built in Python that learns and adapts to projects over time — extending Nous from open-weight models into the agent-framework layer. In June 2026 it shipped [[hermes-desktop]], a native GUI client of the open-source self-improving Hermes agent for macOS / Windows / Linux, MIT-licensed and model-agnostic — positioned as the open-weights/open-infra counterpart to [[claude-code]] and [[openai-codex]].

## Timeline

- **2026-06-17-morning**: **First publicly framed *user-tier downstream tutorial-monetization* artifact on Hermes Agent in this wiki**. **Abhijay's AI Action Letter "I Built an AI Chief of Staff That Runs My Inbox for $5/Month | Hermes Agent Tutorial"** lands as the first publicly framed builder-tutorial-tier downstream of the Feb 2026 Hermes Agent release — a community-tier builder publishes a tutorial showing personal-AI-Chief-of-Staff inbox automation built on the open-source Hermes Agent for $5/month operating cost. Body links reference **supabase.link/N3ar6hP** (Supabase used as persistent backend for the inbox-agent state — pairs structurally with [[hermes-desktop]]'s persistent cross-app memory feature), suggesting the tutorial architecture is: Hermes Agent (orchestration / self-improvement) + Supabase (state / memory backend) + email-provider (Gmail or IMAP integration). The $5/month framing is the cleanest cross-cycle *operating-cost ceiling* for a persistent personal-AI-assistant deployment in this wiki — frames open-source Hermes-Agent-stack deployments as having reached the *consumer-tier always-on personal-AI-assistant cost ceiling*. Lands the Hermes Agent product surface in *three distinct downstream cohorts*: (a) [[ollama]] launcher / hermes-desktop install surface (2026-06-09-evening), (b) standalone-app [[hermes-desktop]] (2026-06-04), (c) user-built tutorial-monetization tier (this cycle) — the strongest cross-surface circulation signal yet for the Hermes Agent stack. Body-recovery items: (a) the specific email-provider integration (Gmail IMAP / SendGrid / etc.), (b) Hermes Agent base-model choice (per the open Hermes-Desktop multi-model framing), (c) how the $5/month cost decomposes (Supabase free-tier + compute on Ollama Cloud vs OpenRouter), (d) whether Abhijay's tutorial is positioned alongside any [[claude-code]] / [[openai-codex]] / [[hermes-desktop]] comparison. **Pipeline summaries unavailable** — all 9 newsletters failed with OpenRouter 403 key-limit-exceeded error (twelfth consecutive cycle with same blocker) — *source: data/summaries/2026-06-17-morning.json (Abhijay's AI Action Letter — I Built an AI Chief of Staff That Runs My Inbox for $5/Month | Hermes Agent Tutorial / body link: supabase.link/N3ar6hP; all 9 newsletter summaries failed with OpenRouter 403 key-limit-exceeded error — twelfth consecutive cycle)*
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
