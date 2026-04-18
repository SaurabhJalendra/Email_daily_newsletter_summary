---
name: Claude Code
description: Anthropic's CLI/coding agent — plugins, always-on Routines, Claude Design hand-off
type: product
---

# Claude Code

> **Type**: product
> **First mentioned**: 2025-10-13
> **Last updated**: 2026-04-16 (backfill 2025-12-05..2025-12-19)
> **Status**: active
> **Related**: [[anthropic]], [[claude-opus-4-7]], [[claude-design]], [[claude-code-web]], [[agent-frameworks]], [[jules]], [[cursor]]

## Summary

Claude Code is [[anthropic]]'s official command-line coding agent, built around the Claude model family (now [[claude-opus-4-7]]). In October 2025 it gained a plugins capability, entering the same category as [[jules]] (Google) and [[cursor]] (IDE). By April 2026 it had become a full automation surface: "Routines" let users package prompts, repositories, and connectors into reusable configurations that run automatically on Anthropic-managed cloud infrastructure, triggered by APIs, schedules, or GitHub repository events. Claude Code also acts as the build-stage hand-off target for [[claude-design]] — users take a prototype from Claude Design and have Claude Code implement it.

## Timeline

- **2026-04-16**: Always-on Routines launched — reusable prompt/repo/connector bundles running on managed cloud on API / schedule / GitHub event triggers — *source: AlphaSignal "Anthropic presents always-on Routines in Claude Code"*
- **2026-04-16**: [[claude-design]] ships with direct hand-off into Claude Code for build stage — *source: TAAFT "Claude Just Became a Designer"; World of AI "ANTHROPIC DROPS Claude Design!"*
- **2026-04-16**: Nate Herk demos a fully autonomous Claude Code 4.7 trading bot that researches, trades on Alpaca, manages stops, and self-reports on cron — illustrative of agentic Claude Code workflows in the community — *source: AI Automation Society*
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
