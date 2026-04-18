---
name: Model Context Protocol
description: Anthropic-originated open protocol for connecting tools/data to LLMs; donated to the Agentic AI Foundation Dec 2025
type: topic
---

# Model Context Protocol

> **Type**: topic
> **First mentioned**: 2025-11-22
> **Last updated**: 2025-12-16
> **Status**: active
> **Related**: [[anthropic]], [[openai]], [[xai]], [[grok-4-1]], [[agentic-ai-foundation]], [[agent-frameworks]]

## Summary

Model Context Protocol (MCP) is an open standard originated by [[anthropic]] for connecting tools, data sources, and capabilities to LLM-based agents over a single, well-typed protocol. Throughout late 2025 it became the de facto interop layer behind tool-using agents — picked up natively by xAI's Grok 4.1 Fast Agent Tools API in November and widely supported across IDE coding agents. On 2025-12-11 [[anthropic]] formally donated MCP to the newly-founded [[agentic-ai-foundation]] under the Linux Foundation, transferring stewardship to a neutral cross-lab body.

## Timeline

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
