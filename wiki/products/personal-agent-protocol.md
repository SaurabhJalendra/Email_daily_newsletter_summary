---
name: Personal Agent Protocol
description: Meta + Sierra open standard (Oct 2026) for how personal AI agents authenticate with and interact with businesses, supporting agent-driven actions across websites, applications, and customer-support systems
type: product
---

# Personal Agent Protocol

> **Type**: product (open standard)
> **Vendors**: [[meta]] + [[sierra]]
> **First mentioned**: 2026-10-07-morning
> **Last updated**: 2026-10-07-morning
> **Status**: announced
> **Related**: [[meta]], [[sierra]], [[model-context-protocol]], [[ai-agents]], [[openai]]

## Summary

Personal Agent Protocol is an open standard co-announced by [[meta]] and customer-service AI company [[sierra]] in early October 2026 that defines how personal AI agents authenticate with and interact with businesses. It is designed to support agent-driven actions across websites, applications, and customer-support systems — a shared protocol aimed at reducing fragmentation in agent-to-business integrations and establishing common patterns for identity, permissions, and automated transactions.

The protocol sits alongside Anthropic's [[model-context-protocol]], Google's A2A, Shopify's Universal Commerce Protocol, and Storefront MCP as part of a late-2026 cross-vendor agent-interoperability-standard cluster. Its distinct positioning is the *personal-agent-to-business* axis — i.e. consumer-side agents (like Meta's Muse or OpenAI's "dots" ChatGPT agents) acting on a user's behalf against third-party business surfaces.

## Timeline

- **2026-10-07-morning**: **Announced** — Meta and Sierra co-announce the Personal Agent Protocol: an open standard for personal AI agents to authenticate with and interact with businesses across websites, applications, and customer-support systems. First-in-wiki Meta+Sierra co-authored open-standard canonical anchor pair on personal-agent-to-business interoperability. See [[meta]] + [[sierra]] + [[model-context-protocol]] — *source: data/summaries/2026-10-07-morning.json (TLDR AI HIGH "Instinct group chats 💬, Reflection's 501B model 🧠, OpenAI text watermarks 🏷️"; daily-digest Tools & Products; researchFindings.missingStories — Meta and Sierra announce Personal Agent Protocol)*

## Key Facts

- **Co-authors**: [[meta]] + [[sierra]]
- **Type**: open standard (specific license + spec repository pending)
- **Scope**: personal AI agent → business authentication + interaction
- **Target surfaces**: websites + applications + customer-support systems
- **Positioning**: distinct from MCP (agent↔tool), A2A (agent↔agent), or UCP (commerce) — targets *personal-agent↔business* identity + action layer

## Open Questions

- Spec repository / governance body (Meta-hosted? Sierra-hosted? vendor-neutral foundation?)
- Named launch adopters beyond Meta + Sierra (does OpenAI/Anthropic/Google sign on?)
- Relationship to [[model-context-protocol]] + Google A2A — complementary layer, competing standard, or interoperable overlay?
- Identity model — OAuth-like delegation? verifiable credentials? agent-attestations?
- Permission + transaction primitives — payment authorization, data-sharing scopes, revocation flow
- Enforcement model — opt-in by business, or default-on via browser/agent-runtime integration?

## Sources

- data/summaries/2026-10-07-morning.json (TLDR AI HIGH "Instinct group chats 💬, Reflection's 501B model 🧠, OpenAI text watermarks 🏷️"; daily-digest Tools & Products; researchFindings.missingStories — Meta and Sierra announce Personal Agent Protocol)
