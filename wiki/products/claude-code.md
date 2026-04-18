---
name: Claude Code
description: Anthropic's CLI/coding agent — plugins, always-on Routines, Claude Design hand-off
type: product
---

# Claude Code

> **Type**: product
> **First mentioned**: 2025-10-13
> **Last updated**: 2026-04-16 (backfill 2026-01-05..2026-02-19)
> **Status**: active
> **Related**: [[anthropic]], [[claude-opus-4-7]], [[claude-opus-4-5]], [[claude-design]], [[claude-code-web]], [[claude-cowork]], [[agent-frameworks]], [[jules]], [[cursor]]

## Summary

Claude Code is [[anthropic]]'s official command-line coding agent, built around the Claude model family (now [[claude-opus-4-7]]). In October 2025 it gained a plugins capability, entering the same category as [[jules]] (Google) and [[cursor]] (IDE). By April 2026 it had become a full automation surface: "Routines" let users package prompts, repositories, and connectors into reusable configurations that run automatically on Anthropic-managed cloud infrastructure, triggered by APIs, schedules, or GitHub repository events. Claude Code also acts as the build-stage hand-off target for [[claude-design]] — users take a prototype from Claude Design and have Claude Code implement it.

## Timeline

- **2026-04-16**: Always-on Routines launched — reusable prompt/repo/connector bundles running on managed cloud on API / schedule / GitHub event triggers — *source: AlphaSignal "Anthropic presents always-on Routines in Claude Code"*
- **2026-04-16**: [[claude-design]] ships with direct hand-off into Claude Code for build stage — *source: TAAFT "Claude Just Became a Designer"; World of AI "ANTHROPIC DROPS Claude Design!"*
- **2026-04-16**: Nate Herk demos a fully autonomous Claude Code 4.7 trading bot that researches, trades on Alpaca, manages stops, and self-reports on cron — illustrative of agentic Claude Code workflows in the community — *source: AI Automation Society*
- **2026-02-19**: Claude Code referenced as design-to-implementation downstream surface in Figma's Code-to-Canvas integration — *source: 2026-02-19 cycle*
- **2026-02-09**: Anthropic Claude SDK lands in Apple Xcode 26.3 alongside [[openai-codex]] — first-party Mac IDE integration for Claude — *source: 2026-02-09 cycle*
- **2026-02-04**: Creator of Claude Code shares 10 power-user hacks; community comparisons with [[codex-app]] highlight diverging agent-UX approaches — *source: The Code by Superhuman "Chinese lab dethroned DeepSeek"*
- **2026-02-01**: Nate Herk video "I Tested Clawdbot Against Claude Code: What You Need to Know" circulates; community comparisons — *source: AI Automation Society Weekly Digest*
- **2026-01-27**: Anthropic Security Center for Claude Code announced — simplifies security workflows for developers amid "Claude CoWork effect" traffic surge — *source: AI Breakfast "Clawdbot"*
- **2026-01-17**: Coverage of Claude Code tutorials continues; bundled with [[claude-cowork]] positioning — *source: 2026-01-17 cycle*
- **2026-01-14**: Claude Code framed as usable beyond coding — "organizing digital lives," file-based workflows — sits adjacent to [[claude-cowork]] launch — *source: 2026-01-14 cycle*
- **2026-01-12**: [[anthropic]] blocks third-party tools that spoof Claude Code to access Opus 4.5 — affects xAI + other clients; cat-and-mouse framing — *source: 2026-01-12 cycle*
- **2026-01-10**: Claude Code 2.1.0 released — hooks for agents + skills, hot reload for skills, `/move` command to continue sessions at claude.ai/code — *source: 2026-01-10 cycle (Superhuman — Big Claude Code update arrives; World of AI)*
- **2026-01-09**: Claude Code upgraded for stronger agent control + stability; terminal upgrades for developer reliability — *source: 2026-01-09 cycle (World of AI — Claude Code Just Got BETTER)*
- **2026-01-05**: Claude Code masterclass published by Boris (Claude Code creator); demo builds a full working NES emulator end-to-end — framing: Claude Code as "autonomous developer" that explores, plans, executes, verifies — *source: 2026-01-05 cycle (TAAFT — Claude Code masterclass)*
- **2026-01-02**: Claude Code cited as a leading example of agents "writing code autonomously" — core to the [[vibe-coding]] revolution framing — *source: 2026-01-02 cycle*
- **2025-12-30**: Claude Code recurs alongside [[cursor]] as the default reference for AI-driven development — *source: 2025-12-30 cycle*
- **2025-12-25**: Karpathy-vibe-coding future cites Claude Code + [[lovable]] as primary examples of agent-driven development — *source: 2025-12-25 cycle*
- **2025-12-21**: Claude browser extension GA — reads console errors + DOM state inside the page, enabling in-browser Claude Code-style debug flows — *source: 2025-12-21 cycle*
- **2025-12-12**: Async subagents and faster compaction added to Claude Code CLI — *source: AlphaSignal "Microsoft 37.5M Copilot"*
- **2025-12-10**: Claude Code launches inside Slack — coding tasks delegable directly from threads ("Debuggers, REJOICE") — *source: The Rundown AI "Inside OpenAI's massive AI enterprise report"; TLDR AI; Mindstream*
- **2025-10-31**: "Claude Code secrets" coverage — power-user features and patterns surface — *source: TLDR AI "Claude Code secrets"*
- **2025-10-21**: [[claude-code-web]] launches — browser-/cloud-based Claude Code execution outside the terminal — *source: AlphaSignal "Anthropic releases Claude Code Web for cloud-based dev work"; TLDR AI "Claude Code Web"*
- **2025-10-13**: Claude Code plugins coverage — *source: TLDR AI "Claude Code plugins"*

## Key Facts

- Vendor: [[anthropic]]
- Underlying model (Apr 2026): [[claude-opus-4-7]]
- Form factor: CLI coding agent (counterpart to [[jules]])
- Extensibility: plugins (Oct 2025); Routines for scheduled / event-driven automation (Apr 2026)
- Hand-off target: downstream build step for [[claude-design]] artifacts

## Open Questions

- Routines pricing and quota model for managed-cloud execution?
- Relationship between Routines and GitHub Actions (do users see them as substitutes or complements)?
- Plugin distribution model — repository, registry, or curated?
- Does the plugin format align with [[claude-skills]], or remain a separate surface?

## Sources

- data/summaries/2025-10-13.json (TLDR AI — Claude Code plugins)
- data/summaries/2025-10-21.json (AlphaSignal — Claude Code Web; TLDR AI — Claude Code Web)
- data/summaries/2025-10-31.json (TLDR AI — Claude Code secrets)
- data/summaries/2025-12-10.json (The Rundown AI — Inside OpenAI's massive AI enterprise report [Claude Code in Slack]; TLDR AI; Mindstream)
- data/summaries/2025-12-12.json (AlphaSignal — Microsoft 37.5M Copilot [async subagents + compaction])
- data/summaries/2026-04-16.json (AlphaSignal — Anthropic presents always-on Routines in Claude Code; TAAFT — Claude Just Became a Designer; World of AI — ANTHROPIC DROPS Claude Design!; AI Automation Society — Nate Herk posted "Claude Opus 4.7 Just Dropped"; AI Automation Society — Nate Herk autonomous trading bot)
