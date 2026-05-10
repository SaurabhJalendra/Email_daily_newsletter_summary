---
name: AI Memory
description: Persistent context in AI assistants — preferences, writing style, past conversations carried across sessions
type: topic
---

# AI Memory

> **Type**: topic
> **First mentioned**: 2026-03-01
> **Last updated**: 2026-03-06 (backfill 2026-02-20..2026-03-06)
> **Status**: stale
> **Related**: [[anthropic]], [[chatgpt]], [[claude-opus-4-7]], [[agent-frameworks]], [[claude-cowork]]

## Summary

AI memory — the ability of an assistant to persist user preferences, writing style, context, and past conversations across sessions — became a first-class competitive axis in early March 2026. [[anthropic]] shipped Claude Memory (preferences + style + context carried across chats), launched a migration tool that transfers ChatGPT memories to Claude, and watched Claude surge to #1 on the App Store. Memory sits alongside [[agent-frameworks]] features like Cloudflare Agent Memory and OpenAI's "Stateful AI" (leaked for GPT-5.4), signaling that persistent context — not just context-window size — is now the differentiator.

## Timeline

- **2026-03-06**: [[openai]] GPT-5.4 leak references "Stateful AI" — workflow and project environment retained across sessions (distinct from conversation memory) — *source: 2026-03-06 cycle*
- **2026-03-04**: [[anthropic]] launches tool to transfer ChatGPT memories to Claude — reduces switching friction between assistants — *source: 2026-03-04 cycle*
- **2026-03-04**: Claude Memory ships — remembers user preferences, writing style, context, and past conversations; paired with App Store #1 surge — *source: 2026-03-04 cycle*
- **2026-03-01**: [[anthropic]] launches Auto-Memory — Claude automatically maintains memory across chats without prompting — *source: 2026-03-01 cycle*

## Key Facts

- Vendors shipping memory (Mar 2026): [[anthropic]] (Claude Memory, Auto-Memory), [[openai]] (Stateful AI — leaked)
- Cross-vendor friction tool: ChatGPT→Claude memory migration
- Adjacent infra: Cloudflare Agent Memory (managed service, Apr 2026)

## Open Questions

- Retention policy and user controls for Claude Memory?
- Does Stateful AI apply to both ChatGPT consumer and API use?
- Memory interop standards — will the labs converge on a format?

## Sources

- data/summaries/2026-03-01.json (Anthropic Auto-Memory)
- data/summaries/2026-03-04.json (Claude Memory + ChatGPT→Claude migration + App Store #1)
- data/summaries/2026-03-06.json (GPT-5.4 Stateful AI leak)
