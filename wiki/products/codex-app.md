---
name: Codex App
description: OpenAI's native macOS app for managing multiple parallel Codex coding agents — "command center" with Skills library and Automations
type: product
---

# Codex App

> **Type**: product
> **First mentioned**: 2026-02-04
> **Last updated**: 2026-05-25
> **Status**: stale
> **Related**: [[openai]], [[openai-codex]], [[gpt-5-2-codex]], [[gpt-5-3-codex]], [[chatgpt]], [[agent-frameworks]], [[claude-code]]

## Summary

Codex App is [[openai]]'s native macOS application for [[openai-codex]], positioned by OpenAI as a "command center" for AI coding agents. It extends Codex from CLI + web into a first-class desktop surface where multiple agents run in parallel, tasks continue after a browser tab closes, and work no longer has to finish inside a single response. Key surfaces include a Skills library (extends agents beyond code generation into Figma design implementation, cloud deployment, image generation), Automations for scheduled tasks, parallel/background execution with asynchronous return, and first-class support for long-running jobs. Its release frames OpenAI's coding-agent strategy as "infrastructure, not a feature" — a direct bid against [[claude-code]] and [[cursor]].

## Timeline

- **2026-05-25**: **Codex lands on the [[chatgpt]] mobile app** — OpenAI brings Codex to your phone so coding/tasking is reachable wherever the user is (recirculates the 2026-05-15/16 Codex Mobile preview into a public-launch positioning); **OpenAI-Dell partnership** extends Codex to **hybrid and on-premises environments** for enterprise/regulated customers (extends the 2026-05-20 Dell announcement) — *source: 2026-05-25 cycle (The AI Brief — OpenAI brought Codex to your phone + Dell hybrid+on-prem)*
- **2026-03-06**: Codex App on Windows — native agent sandbox + full PowerShell support; direct interaction with local filesystem and IDE — *source: 2026-03-06 cycle*
- **2026-02-09**: Codex App reportedly 40% faster following backend optimization update — *source: 2026-02-09 cycle*
- **2026-02-05**: Codex App ships with [[gpt-5-3-codex]] integration as the new default coding model — *source: 2026-02-05 cycle*
- **2026-02-04**: Codex App for macOS released — parallel agents, asynchronous long-running tasks (survive tab close), Skills library (Figma, cloud deploy, image gen), scheduled Automations (run only when device awake); available to ChatGPT Free and Go users for a limited time with doubled rate limits for paid tiers; framed as the new "unit of work" moving from linear to non-blocking — *source: World of AI "OpenAI DROPS Codex Desktop"; The Rundown AI "social network / Codex command center"; TLDR "SpaceX buys xAI / OpenAI Codex app"; TLDR AI "Codex App"; Superhuman "SpaceX acquires xAI / Codex App"; AlphaSignal "OpenAI data agent"; TAAFT "$1T Empire"; The Code by Superhuman "Chinese lab dethroned DeepSeek"*

## Key Facts

- Vendor: [[openai]]
- Platform: macOS (native), sits alongside Codex CLI and Codex Web
- Underlying model: [[gpt-5-2-codex]] family
- Surfaces: parallel agents, Skills library, Automations (schedules), background execution, asynchronous return-of-results
- Skills examples: Figma design implementation, cloud deployment, image generation
- Automations restriction at launch: only run when the device is awake (not a true always-on cloud runtime)
- Access: ChatGPT Free/Go (limited-time) + doubled rate limits for Pro/Business/Enterprise
- Positioning: coding agents as "infrastructure, not a feature" — direct competitor to [[claude-code]] and [[cursor]]

## Open Questions

- Windows and Linux support timeline?
- Relationship to [[openai-codex]] CLI — shared runtime or separate binary?
- Skills library — open to third-party publication, or OpenAI-curated only?
- Can Automations eventually run on OpenAI-managed cloud (matching [[claude-code]] Routines)?
- Rate-limit differences vs Codex CLI/web at GA pricing?

## Sources

- data/summaries/2026-02-04.json (World of AI — OpenAI DROPS Codex Desktop!; The Rundown AI — social network where humans just watch; TLDR — SpaceX buys xAI / OpenAI Codex app; TLDR AI — Claude Sonnet 5 leaks / OpenAI Codex app; Superhuman — SpaceX acquires xAI; AlphaSignal — OpenAI's internal data agent; TAAFT — SpaceX + xAI = $1T Empire; The Code by Superhuman — Chinese lab dethroned DeepSeek)
- data/summaries/2026-03-06.json (Codex App on Windows with PowerShell support)
- data/summaries/2026-05-25.json (The AI Brief — Codex on phone via ChatGPT mobile app; Dell hybrid + on-premises partnership)
