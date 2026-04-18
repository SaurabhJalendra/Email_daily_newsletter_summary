---
name: OpenClaw
description: Open-source persistent personal AI assistant; creator joins OpenAI Feb 2026
type: product
---

# OpenClaw

> **Type**: product
> **First mentioned**: 2026-02-17
> **Last updated**: 2026-04-08 (backfill 2026-04-06..2026-04-08)
> **Status**: active
> **Related**: [[openai]], [[anthropic]], [[moonshot-ai]], [[moltbot]], [[agent-frameworks]]

## Summary

OpenClaw is an open-source AI agent system created by Peter Steinberger that operates persistently across tools, apps, and workflows. In February 2026 OpenAI hired Steinberger to build a personal-assistant agent product around the same ideas; OpenClaw itself remains open source under a new independent foundation. The acquihire was widely framed as OpenAI's bet on "agents for everyone." Within days, [[moonshot-ai]] launched Kimi Claw — a browser integration for OpenClaw with cloud deployment and a community ClawHub of 5,000+ skills — turning OpenClaw into a multi-vendor agent runtime.

## Timeline

- **2026-04-08**: Follow-on to 2026-04-07 third-party restriction — coverage emphasizes that using [[claude-code]] via OpenClaw becomes more expensive for subscribers; developers noted to continue migrating to Moonshot K2.5 / MiniMax M2.7 / GLM-5.1 alternatives via Ollama Cloud — *source: 2026-04-08 cycle*
- **2026-04-07**: [[anthropic]] blocks third-party agents using [[claude-code]] — OpenClaw explicitly called out; rationale stated as "engineering challenges due to surging demand" (follow-on to 2026-04-05 billing cutoff) — *source: 2026-04-07 cycle (TLDR AI — Anthropic Blocks Third-Party Agents)*
- **2026-04-06**: OpenClaw runs on [[ollama]] Cloud — framed as a "personal AI assistant that manages inbox, email, and calendar via messaging apps" with Ollama's kimi-k2.5 / glm-5 / minimax-m2.7 / gemma4:31b cloud models — confirms the multi-vendor runtime thesis in the wake of the 2026-04-05 Anthropic cutoff — *source: 2026-04-06 cycle (Ollama Newsletter)*
- **2026-04-05**: [[anthropic]] ends free OpenClaw access under Claude subscriptions — effective next day 12pm PT, OpenClaw usage is no longer covered by the $20 Claude subscription tier; Anthropic cites unsustainable usage patterns (third-party harness consuming millions of tokens/day per user, far beyond subscription economics); framed by World of AI as "the flat-rate subscription model ending for agentic AI" and as the first of many pricing-strategy resets at frontier labs; same-day: developers migrating in volume to [[kimi-k2-5]] (Moonshot) and MiniMax M2.7 for cheaper OpenClaw harness runtime; [[openai]] — which hired OpenClaw creator Peter Steinberger in Feb 2026 — is reported to continue allowing OpenClaw use via ChatGPT Pro subscription, framed as a strategic counter-move that pulls dev mindshare toward OpenAI — *source: 2026-04-05 cycle (World of AI — Anthropic KILLS Free OpenClaw; Hello World — Claude goes open source / OpenClaw fallout)*
- **2026-03-31**: [[ollama]] launches Pi — explicitly framed as the coding agent that sits under OpenClaw; `ollama launch pi --model kimi-k2.5:cloud` boots it with Kimi K2.5 as default; extensions, skills, prompt templates, themes, `pi-subagents`, and `pi-autoresearch` are the user-facing harness OpenClaw wraps; Meta's MetaClaw (learn-during-downtime layer) and [[anthropic]]'s Claude Operon biology desktop mode this same cycle signal OpenClaw's emergence as the de-facto agent-runtime abstraction across labs — *source: 2026-03-31 cycle (Ollama Newsletter — Ollama launch Pi: the coding agent behind OpenClaw; AI Breakfast — MetaClaw / Claude Operon)*
- **2026-03-30**: Managed-deployment wave — [[amazon]] Lightsail adds 1-click OpenClaw-into-AWS deployment; [[nvidia]] NemoClaw wraps OpenClaw in a secure sandbox; Zenity ships open-source agent-action inspection framework; Onyx AI publishes "CLAW-10" enterprise requirements (sandboxed execution, RBAC, immutable audit logs, data isolation, verified supply chains); BitStrike + BitDefender studies find tens of thousands of exposed OpenClaw instances; a "confused deputy" incident cited at Meta Superintelligence Labs as cautionary example of agent losing constraints while retaining system privileges — *source: 2026-03-30 cycle (AlphaSignal — The end of the Mac Mini era for scaling OpenClaw agents)*
- **2026-03-29**: OpenClaw deployed on Chinese household and humanoid robots — Ecovacs' Bajie household robot, Unitree's G1 humanoid, plus Xiaomi variants across smartphones and smart-home devices — used for real-time navigation and natural-language control; ~300K GitHub stars cited as inflection point for agent-runtime adoption — *source: 2026-03-29 cycle (Superhuman — China straps OpenClaw to robots; The Tech Buzz — $1B solo-company framing)*
- **2026-03-20**: Blink Claw released — managed deployment platform for OpenClaw agents; positions itself as removing the barrier of running agent infrastructure — *source: 2026-03-20 cycle*
- **2026-03-07**: Supply-chain prompt-injection attack — a GitHub issue title compromises ~4,000 developer machines by installing OpenClaw when pasted into AI tools that interpret prompts as instructions; highlights prompt-injection risk surface for agentic dev tools — *source: TLDR "GPT-5.4 + Anthropic's leaked memo"; see [[prompt-injection]]*
- **2026-02-18**: Peter Steinberger joins OpenAI to build a personal-assistant agent; OpenClaw remains open-source under a foundation — *source: 2026-02-18 cycle (multiple — Mindstream, Superhuman, AI Breakfast, TLDR AI)*
- **2026-02-17**: [[moonshot-ai]] launches Kimi Claw — OpenClaw in the browser via Kimi; access to 5,000+ ClawHub skills; 40GB cloud storage; "Bring Your Own Claw" option — *source: 2026-02-17 cycle (The Code; AlphaSignal)*
- **2026-02-17**: First widely circulated coverage of OpenClaw's 24/7 persistent-memory framing — *source: 2026-02-17 cycle (AlphaSignal)*

## Key Facts

- Creator: Peter Steinberger
- Status: open-source; transitioning to a foundation
- Notable integration: [[moonshot-ai]] Kimi Claw + ClawHub
- Acquihirer: [[openai]] (creator joins; product remains independent)

## Open Questions

- Foundation governance and contributor model
- Whether OpenAI's personal assistant will be branded around "Claw" or distinct
- License terms (MIT? Apache? Custom?)
- Compatibility surface for non-Kimi browsers

## Sources

- data/summaries/2026-02-17.json (Kimi Claw launch; AlphaSignal; The Code)
- data/summaries/2026-02-18.json (Steinberger joins OpenAI — multiple)
- data/summaries/2026-03-07.json (TLDR — GitHub issue title prompt-injection attack compromises 4K dev machines)
- data/summaries/2026-03-20.json (Blink Claw — managed OpenClaw deployment platform)
- data/summaries/2026-03-29.json (Superhuman — OpenClaw on Ecovacs Bajie / Unitree G1 / Xiaomi devices)
- data/summaries/2026-03-30.json (AlphaSignal — managed OpenClaw: Amazon Lightsail, Nvidia NemoClaw, Zenity, Onyx AI CLAW-10; exposed-instance studies; Meta Superintelligence Labs incident)
- data/summaries/2026-03-31.json (Ollama Newsletter — Pi coding agent behind OpenClaw; AI Breakfast — MetaClaw / Claude Operon)
- data/summaries/2026-04-05.json (World of AI — Anthropic KILLS Free OpenClaw; Hello World — OpenClaw pricing fallout)
