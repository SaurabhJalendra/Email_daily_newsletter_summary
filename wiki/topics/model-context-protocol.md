---
name: Model Context Protocol
description: Anthropic-originated open protocol for connecting tools/data to LLMs; donated to the Agentic AI Foundation Dec 2025
type: topic
---

# Model Context Protocol

> **Type**: topic
> **First mentioned**: 2025-11-22
> **Last updated**: 2026-07-02-morning (**X ships a hosted MCP server** — tokens& HIGH ***"X shipped a hosted MCP server, allowing Claude, Grok, and Cursor to read and search X accounts"*** — first publicly framed *social-platform hosted MCP endpoint* in this wiki; positions X as a native tool-plane surface for Claude + Grok + Cursor, extending MCP from developer/IDE-tool tier into social-data-search tier)
> **Previously updated**: 2025-12-16
> **Status**: active
> **Related**: [[anthropic]], [[openai]], [[xai]], [[grok-4-1]], [[agentic-ai-foundation]], [[agent-frameworks]], [[cursor]], [[spacex]]

## Summary

Model Context Protocol (MCP) is an open standard originated by [[anthropic]] for connecting tools, data sources, and capabilities to LLM-based agents over a single, well-typed protocol. Throughout late 2025 it became the de facto interop layer behind tool-using agents — picked up natively by xAI's Grok 4.1 Fast Agent Tools API in November and widely supported across IDE coding agents. On 2025-12-11 [[anthropic]] formally donated MCP to the newly-founded [[agentic-ai-foundation]] under the Linux Foundation, transferring stewardship to a neutral cross-lab body.

## Timeline

- **2026-07-02-morning**: **X ships a hosted MCP server for Claude / Grok / Cursor to read + search X accounts**. tokens& HIGH ***"tokens& Weekly 7/1"*** cycle top-story enumeration lands: ***"X shipped a hosted MCP server, allowing Claude, Grok, and Cursor to read and search X accounts"***. First publicly framed *social-platform hosted MCP endpoint* in this wiki. Structurally novel three ways: (a) **hosted-tier MCP** — X operates the MCP server itself rather than requiring third-party developers to build wrappers; graduates MCP surface adoption from *IDE-and-tool-side self-hosted* into *platform-native hosted* tier (parallel to GitHub / Slack / Google Workspace MCP adoption patterns); (b) **cross-vendor client support at launch** — Claude + Grok + Cursor named as day-one clients; the tri-client posture (Anthropic + xAI + Cursor/SpaceXAI) reads as X positioning its MCP surface *neutrally* despite the SpaceX-Cursor + SpaceX-xAI vertical integration — Anthropic's Claude explicitly included even though Anthropic remains the primary competitive counterweight to SpaceXAI in the frontier-lab tier; (c) **social-data-search as MCP-mediated tool-tier** — first publicly framed *"read and search X accounts"* MCP capability in this wiki; positions X's social graph + tweet corpus + follower graph as a *first-class data-plane for AI agents*, analogous to Perplexity's web-index surface but specifically for X's proprietary social data. Body-recovery items: (a) auth model (per-user OAuth? enterprise API key?), (b) rate limits + pricing (free tier? X Premium+ gated? Grok-integrated free-for-subscribers?), (c) capability scope beyond read+search (post? DM? follow?), (d) whether the hosted MCP server exposes tweet-generation actions or is read-only — *source: data/summaries/2026-07-02-morning.json (tokens& HIGH "tokens& Weekly 7/1 - 🌍 Together AI's $800M Bet: Make Frontier AI Accessible to All" — X shipped a hosted MCP server allowing Claude Grok and Cursor to read and search X accounts)*

- **2025-12-16**: TAAFT "GUIDE: MCP" cycle reflects developer-side momentum — *source: TAAFT "GUIDE MCP"*
- **2025-12-11**: [[anthropic]] donates MCP to [[agentic-ai-foundation]] — first major project of the Linux Foundation–hosted body — *source: TAAFT "First AGI Achieved"; TLDR AI "OpenAI Image-2"*
- **2025-11-22**: xAI Grok 4.1 Fast Agent Tools API adds native MCP-server integration alongside autonomous web/X search and Python execution — *source: AI Breakfast "Nano Banana Pro Sets New Standard"*

## Key Facts

- Originator: [[anthropic]]
- Steward (post Dec 11 2025): [[agentic-ai-foundation]] (Linux Foundation)
- Notable adopters (2025): Anthropic (Claude/Claude Code), xAI (Grok 4.1 Agent Tools API), various IDE coding agents
- Role: tool/data connectivity protocol for LLM agents

## Open Questions

- Will [[openai]] adopt MCP natively in its Agents SDK and [[openai-codex]]?
- Does the Foundation handover change Anthropic's release cadence for MCP?
- How does MCP's surface relate to OpenAPI / function-calling tool schemas?

## Sources

- data/summaries/2025-11-22.json (AI Breakfast — Nano Banana Pro Sets New Standard [Grok 4.1 + MCP])
- data/summaries/2025-12-11.json (TAAFT — First AGI Achieved; TLDR AI — OpenAI Image-2 [MCP donation])
- data/summaries/2025-12-16.json (TAAFT — GUIDE MCP)
