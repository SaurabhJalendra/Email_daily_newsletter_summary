---
name: AI Plugin Standard
description: Aug 2026 shared spec for AI plugins agreed by Amazon + Cursor + Microsoft + OpenAI + Vercel — build-once, run-anywhere across frontier assistant platforms
type: topic
---

# AI Plugin Standard

> **Type**: topic
> **First mentioned**: 2026-08-07-morning
> **Last updated**: 2026-08-07-evening (**OpenAI ships [[agent-plugins]] as branded open standard for bundling agent skills + MCP server configs — pairs with the AI Plugin Standard multi-vendor cohort framing since OpenAI is co-signer on both; suggests Agent Plugins is either OpenAI's implementation of the multi-vendor spec or a distinct spec being harmonized with it**. AINews HIGH: *"OpenAI has launched Agent Plugins, an open standard for bundling agent skills and MCP server configs"*. Daily-digest Top Story #2. Extends the morning-cycle five-vendor AI Plugin Standard cohort framing (Amazon + Cursor + Microsoft + OpenAI + Vercel) with a *vendor-branded implementation-tier or harmonized-companion spec* on OpenAI's side. First publicly framed on this cycle: *twin cross-vendor plugin standards emerging in same week from same cohort* — the AI Plugin Standard (Amazon + Cursor + Microsoft + OpenAI + Vercel) + OpenAI's own Agent Plugins spec sit alongside [[model-context-protocol]] as the *mid-2026 canonical assistant-plugin ecosystem substrates*. Structurally significant: raises the open question of *"is Agent Plugins the OpenAI-branded implementation of AI Plugin Standard, or a competing spec being harmonized?"* — likely resolves in future cycles. See [[agent-plugins]] (NEW) + [[openai]] + [[model-context-protocol]] — *source: data/summaries/2026-08-07-evening.json (AINews HIGH "[AINews] AMD buys Taalas"; daily-digest Top Story #2)*)
> **Previously updated**: 2026-08-07-morning
> **Status**: active
> **Related**: [[model-context-protocol]], [[agentic-ai-foundation]], [[agent-frameworks]], [[amazon]], [[cursor]], [[microsoft]], [[openai]], [[vercel]]

## Summary

The AI Plugin Standard is a shared plugin specification agreed in early August 2026 by five frontier-adjacent AI vendors — **[[amazon]], [[cursor]], [[microsoft]], [[openai]], and [[vercel]]** — allowing a plugin built once to be exposed across all participating assistant platforms without per-vendor re-implementation. It sits alongside [[model-context-protocol]] (Anthropic-originated, donated to [[agentic-ai-foundation]]) as a second cross-vendor interop primitive for the agent ecosystem, though notably differs by grouping [[openai]] + [[microsoft]] on one side (with [[amazon]] + [[cursor]] + [[vercel]] as tool/platform partners) while MCP anchors around [[anthropic]] + the broader Linux Foundation coalition. The convergence signals that mid-2026 assistant-plugin fragmentation is being replaced by two standards rather than one — but each dominant enough to reduce the *"write a custom connector per assistant"* tax for developers.

## Timeline

- **2026-08-07-morning**: **Announced — Amazon + Cursor + Microsoft + OpenAI + Vercel settle on a shared spec for AI plugins; build-once, run-anywhere across the cohort**. TAAFT MEDIUM: *"Build an AI Plugin Once, Use it Anywhere. Five companies (Amazon, Cursor, Microsoft, OpenAI, and Vercel) have settled on a shared spec for AI plugins, allowing a plugin built once to be used across different platforms"*. Daily-digest Top Story #5 anchor: *"Microsoft and other companies settle on a shared spec for AI plugins, allowing for greater compatibility and versatility across different platforms"* + *"standardization can accelerate the development and integration of AI solutions, making it easier for businesses and individuals to leverage AI across various applications and services"*. First publicly framed in this wiki. Structurally significant three ways: (a) *five-vendor cross-industry plugin-standard convergence* — extends the [[model-context-protocol]] interop-primitive arc into a *second-standard alongside MCP* posture; (b) *OpenAI + Microsoft + Amazon three-hyperscaler alignment* — first publicly framed *three-hyperscaler-tier plugin-spec cohort* in this wiki, structurally distinct from MCP's Anthropic-led coalition; (c) *Cursor + Vercel as developer-tier co-signers* — first publicly framed *IDE + edge-platform tier alignment* on a plugin standard, positions the spec as *coding-agent + web-hosting compatible* out of the gate. See [[model-context-protocol]] + [[agentic-ai-foundation]] + [[agent-frameworks]] — *source: data/summaries/2026-08-07-morning.json (TAAFT MEDIUM "🦾 ChatGPT Goes Unlimited for Everyone" — Build an AI Plugin Once Use it Anywhere; daily-digest Top Story #5 — Microsoft and other companies settle on a shared spec for AI plugins)*

## Key Facts

- Founding cohort: [[amazon]], [[cursor]], [[microsoft]], [[openai]], [[vercel]] (5 vendors)
- Value prop: build-once plugin, run across all cohort platforms
- Sibling standard: [[model-context-protocol]] (Anthropic-originated, MCP)
- Notably absent: [[anthropic]], [[google]] (both anchor their own agent-plugin surfaces)

## Open Questions

- Spec name and versioning scheme
- Transport / wire protocol (HTTP+JSON? gRPC? WebSocket? MCP-compatible?)
- Auth + capabilities model (per-plugin scopes? OAuth? bearer tokens?)
- Governance: neutral foundation like [[agentic-ai-foundation]] or vendor-run?
- Relationship to MCP — bridge, competitor, or eventual convergence?
- Whether [[anthropic]] and [[google]] will adopt or double down on MCP + their own protocols

## Sources

- data/summaries/2026-08-07-morning.json (TAAFT MEDIUM "🦾 ChatGPT Goes Unlimited for Everyone" — Build an AI Plugin Once + Amazon Cursor Microsoft OpenAI Vercel five-vendor cohort; daily-digest Top Story #5 — Microsoft and other companies settle on a shared spec for AI plugins)
