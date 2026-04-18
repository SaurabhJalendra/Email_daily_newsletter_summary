---
name: GitHub Agent HQ
description: GitHub's unified control plane for running AI coding agents from OpenAI, Anthropic, Google, and Copilot
type: product
---

# GitHub Agent HQ

> **Type**: product
> **First mentioned**: 2025-10-29
> **Last updated**: 2025-11-03
> **Status**: active
> **Related**: [[claude-code]], [[jules]], [[openai-codex]], [[cursor]], [[agent-frameworks]]

## Summary

Agent HQ is GitHub's vendor-neutral control plane for AI coding agents, announced in late October 2025. It lets developers pick from a fleet of agents — Copilot, OpenAI Codex, Anthropic Claude (via Claude Code), Google Jules, and others — assign work in parallel, and track progress from any device. Conceptually it is the agent-era counterpart to GitHub Actions: less about CI than about routing autonomous work to whatever agent is best for it. Shipped alongside GitHub Code Quality (CodeQL-based maintainability flagging), GitHub immutable releases, and a CLI flag that delegates work directly to Copilot — the broader bet being that Agent HQ becomes the default surface for managing many concurrent coding agents.

## Timeline

- **2025-11-03**: GitHub Copilot CLI gains a delegation flag — assign tasks to the Copilot coding agent from the command line — *source: AlphaSignal "Google unveils SRL"*
- **2025-11-01**: Agent HQ + Code Quality coverage continues — *source: Hello, World! "Github goes into Shipping spree"*
- **2025-10-31**: Agent HQ included in same news cycle as Cursor 2.0 multi-agent UI — *source: TAAFT*
- **2025-10-29**: Launch coverage — unifies agents from OpenAI, Anthropic, Google, GitHub Copilot; parallel assignment; progress tracking — *source: TLDR AI "OpenAI recapitalization, ChatGPT PayPal checkout, GitHub Agent HQ"; TAAFT "AI Video Creates Itself Live"*

## Key Facts

- Vendor: GitHub (Microsoft)
- Supported agents at launch: GitHub Copilot, OpenAI Codex, Anthropic [[claude-code]], Google [[jules]]
- Sibling features: GitHub Code Quality (CodeQL), immutable releases, Copilot CLI delegation
- Strategic role: GitHub bids to be the multi-agent "router" rather than picking a winner
- Form factor: web dashboard plus CLI hooks

## Open Questions

- Pricing — included in Copilot Enterprise, or separate metered tier per agent?
- Telemetry / handoff format between agents — proprietary or built on a published spec?
- Does Agent HQ act on third-party-agent permissions (read/write to PRs, branches), or only orchestrate?
- Will third-party agents (Cursor, Cognition SWE-1.5) integrate, or build competing dashboards?

## Sources

- data/summaries/2025-10-29.json (TLDR AI — GitHub Agent HQ; TAAFT — AI Video Creates Itself Live)
- data/summaries/2025-10-31.json (TAAFT — Udio's Big Music takeover)
- data/summaries/2025-11-01.json (Hello, World! — Github goes into Shipping spree)
- data/summaries/2025-11-03.json (AlphaSignal — Google unveils SRL [Copilot CLI delegation])
