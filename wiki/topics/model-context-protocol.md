---
name: Model Context Protocol
description: Anthropic-originated open protocol for connecting tools/data to LLMs; donated to the Agentic AI Foundation Dec 2025
type: topic
---

# Model Context Protocol

> **Type**: topic
> **First mentioned**: 2025-11-22
> **Last updated**: 2026-07-30-morning (**MCP goes stateless in "biggest update yet" — production-grade protocol upgrade enabling serverless deployment, load balancing, horizontal scaling without shared session store**. AlphaSignal MEDIUM cycle-headline sub: *"MCP has gone stateless in its biggest update yet, making it a real production-grade protocol and allowing AI agents to scale like normal web services. This update unlocks serverless deployment, enabling load balancing and horizontal scaling without a shared session store."* tokens& HIGH: *"The MCP protocol has been updated to be stateless, dropping the handshake and session. This change allows for more efficient and scalable AI deployments."* First publicly framed on this cycle: (a) **Stateless MCP as "biggest update yet"** — canonicalizes this as the MCP protocol's largest post-donation upgrade since Anthropic donated MCP to [[agentic-ai-foundation]] on 2025-12-11; graduates MCP from *stateful-session-tier* into *stateless-request-tier*; (b) **"Real production-grade protocol"** framing — sharpens the multi-cycle *MCP-adoption-and-tool-ecosystem-growth* arc into a *production-scale-primitive graduation* — implies MCP was previously *proto-production-tier* (stateful sessions limited horizontal scalability); (c) **"Scale like normal web services"** framing — first publicly framed *web-services-scalability-tier framing* on MCP in this wiki, aligns MCP's scaling model with standard REST/HTTP scaling patterns (stateless request → load-balancer → horizontal-worker pool); (d) **"Drops the handshake and session"** concrete architectural anchor (tokens&) — first publicly framed *concrete-handshake-drop + session-drop* protocol-level anchor in this wiki, resolves the *what-changed-technically* body-recovery item — the multi-round stateful-handshake + persistent-session pattern is replaced by *single-request stateless-tier* semantics. Structurally significant three ways: (i) **Stateless graduation productizes MCP for serverless-tier deployment** — extends MCP from *long-running-agent-connection-tier* into *serverless-tier request-response* deployment model, structurally aligning MCP with Vercel/Cloudflare-Workers/Lambda-tier serverless architectures — critical for MCP adoption in cost-sensitive high-scale enterprise environments; (ii) **Load-balancing + horizontal-scaling without shared session store** — resolves the multi-cycle body-recovery item on MCP's stateful-scaling constraints (shared-session-store dependency was the main scaling blocker) by *eliminating the session-store dependency entirely*; sharpens MCP's *"open standard for tool-connections"* thesis with a *"production-grade-scaling primitive"* dimension; (iii) **Same-cycle Anthropic MCP-stewardship visibility** — the MCP stateless upgrade lands the same edition as [[claude-mythos]] Möbius Bridge + [[ai-pace-letter]] cycle-2 saturation + [[open-secure-ai-alliance]] cycle-4 — the *MCP-as-Anthropic-originated-open-standard* thesis is now paired with a *concrete-production-tier-graduation motion*, canonicalizing Anthropic's *open-standards leadership* posture inside the same cycle where Anthropic's Mythos-tier cybersecurity capability lands. Body-recovery items: (a) whether the stateless MCP upgrade breaks backward compatibility with stateful clients or is dual-mode, (b) specific MCP-server implementations updated (Anthropic-official? Claude Code? Cursor? third-party?), (c) whether the stateless upgrade includes new session-substitute primitives (opaque tokens? cursor-tier pagination?), (d) enterprise-tier authentication + authorization pattern under stateless MCP. See [[anthropic]] + [[agentic-ai-foundation]] + [[agent-frameworks]] + [[claude-code]] + [[cursor]] — *source: data/summaries/2026-07-30-morning.json (AlphaSignal MEDIUM "Claude autonomously broke post-quantum encryption experts missed for 2" — MCP has gone stateless in its biggest update yet, making it a real production-grade protocol and allowing AI agents to scale like normal web services + serverless deployment enabling load balancing and horizontal scaling without a shared session store; tokens& HIGH "NVIDIA bet $5B on Ilya's silence" — MCP protocol has been updated to be stateless, dropping the handshake and session)*)
> **Previously updated**: 2026-07-02-morning (**X ships a hosted MCP server** — tokens& HIGH ***"X shipped a hosted MCP server, allowing Claude, Grok, and Cursor to read and search X accounts"*** — first publicly framed *social-platform hosted MCP endpoint* in this wiki; positions X as a native tool-plane surface for Claude + Grok + Cursor, extending MCP from developer/IDE-tool tier into social-data-search tier)
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
