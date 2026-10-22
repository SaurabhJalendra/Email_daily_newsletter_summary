---
name: Claude Mods
description: Anthropic's user-authored middleware for the Claude Code agent harness — TypeScript/JavaScript functions that inject code into Claude Code's execution and rendering flow, canonicalized by Latent.Space as an early form of the "Attention Interface" (Harness 3.0)
type: product
---

# Claude Mods

> **Type**: product
> **Vendor**: [[anthropic]]
> **First mentioned**: 2026-10-03-morning (as a Claude Code feature on [[claude-code]])
> **Promoted to standalone**: 2026-10-22-morning
> **Last updated**: 2026-10-22-morning
> **Status**: active
> **Related**: [[anthropic]], [[claude-code]], [[modsmith]], [[attention-interface]], [[agent-harness]], [[next-steps-supervisor]]

## Summary

**Claude Mods** are user-authored middleware for the [[claude-code]] agent harness. They are TypeScript or JavaScript functions that run inside Claude Code and inject code into its execution and rendering flow — customizing how Claude behaves and what the user sees in the CLI and Desktop. Latent.Space's October 2026 essay *"Claude Mods: Flipping the Harness Inside Out"* canonicalizes them as the first productized instance of the **[[attention-interface]]** (Harness 3.0 in Latent.Space's three-era [[agent-harness]] framework): the paradigm shift from the harness *facing the machine* (environment, tools, context, guardrails) to the harness *facing the human* (when to interrupt, what to show, which decisions require human input).

Claude Code itself ships with a built-in skill that writes mods for users, and ships with six built-in mods out of the box. Mods are distributed through the companion **[[modsmith]]** platform. The canonical first-party example is the **Next Steps Supervisor** mod, which runs after any turn that edits files, runs commands, or makes multiple tool calls — surfacing suggested next steps and keyboard shortcuts rather than leaving the user to type the follow-up.

## Timeline

- **2026-10-22-morning**: **Promoted to standalone page — Latent.Space MEDIUM essay "Claude Mods: Flipping the Harness Inside Out" canonicalizes Claude Mods as early-form Attention Interface + TypeScript/JavaScript middleware for Claude Code's execution and rendering flow + six-built-in-mods out-of-box + Next Steps Supervisor named-first-party mod + ModSmith distribution-platform companion + Claude Code built-in mod-authoring skill**. First-in-wiki: (a) **Claude Mods named-middleware canonical anchor** — first concrete productized instance of the Harness 3.0 "Attention Interface" era predicted by Latent.Space's 2026-08-22-evening *Evolution of the Agent Harness* essay; graduates the multi-cycle [[agent-harness]] three-era framework from *predicted-attention-era* into *concrete-Anthropic-shipped-user-authored-middleware* canonical anchor tier. (b) **"Harness facing the human rather than the machine" canonical framing anchor** — repositions the agent-harness discipline from *tool/context/guardrail substrate* to *human-attention-governance substrate*. (c) **Six-built-in-mods out-of-box productization anchor** — distinct from pure-SDK positioning. (d) **Next Steps Supervisor concrete first-party mod anchor** — turns post-turn next-step suggestion into a programmable layer. (e) **Comparator-tier cohort anchor** — Latent.Space names [[openai]] ChatGPT Intelligent UI (on-the-fly interface generation) and [[cursor]] PR Routing & Approval (reviewer assignment via code-ownership + commit-history) as structurally parallel attention-interface work. See [[attention-interface]] + [[modsmith]] + [[claude-code]] + [[agent-harness]] — *source: data/summaries/2026-10-22-morning.json (Latent.Space MEDIUM "Claude Mods: Flipping the Harness Inside Out")*

## Key Facts

- **Vendor**: [[anthropic]]
- **Surface**: [[claude-code]] (CLI and Desktop)
- **Authoring language**: TypeScript or JavaScript
- **Role**: middleware — injects code into Claude Code's execution + rendering flow
- **Built-in**: Claude Code ships with six built-in mods and a built-in mod-authoring skill
- **Distribution**: companion [[modsmith]] platform for sharing and installing mods
- **Named example**: **Next Steps Supervisor** — runs after turns that edit files, run commands, or make multiple tool calls; suggests next steps and provides shortcuts
- **Framework position**: concrete productization of the Harness 3.0 "Attention Interface" era in Latent.Space's [[agent-harness]] canonical three-era framework
- **Comparator cohort**: [[openai]] ChatGPT Intelligent UI (on-the-fly interface generation); [[cursor]] PR Routing & Approval (reviewer assignment via code ownership + commit history)

## Open Questions

- Full enumeration of the six built-in mods beyond Next Steps Supervisor
- Mod sandboxing / permission model inside Claude Code (what APIs mods can call, what filesystem/network access they get)
- Discovery + trust model on [[modsmith]] — signing, verification, or community reputation
- Whether Claude Mods extends to [[claude-code-web]] + [[claude-code-agent-view]] surfaces or stays CLI+Desktop
- Vendor equivalents on competing harnesses — is this a format other coding-agent vendors adopt, or Anthropic-specific?

## Sources

- data/summaries/2026-10-22-morning.json (Latent.Space MEDIUM "Claude Mods: Flipping the Harness Inside Out")
- data/summaries/2026-10-09-evening.json (TLDR MEDIUM "SpaceX mobile 🛰️, Touchscreen MacBook 💻, Claude Code mods 👨‍💻" — panes + commands + tool call rules three-primitive mod-API-surface restatement)
- data/summaries/2026-10-03-morning.json (AlphaSignal MEDIUM — Anthropic introduces mod system for Claude Code allowing TypeScript plugins to modify agent behavior)
