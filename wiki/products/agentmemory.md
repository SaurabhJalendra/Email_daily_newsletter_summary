---
name: agentmemory
description: Open-source persistent-memory layer for AI coding agents; 92% token reduction across sessions (May 2026)
type: product
---

# agentmemory

> **Type**: product
> **First mentioned**: 2026-05-18
> **Last updated**: 2026-05-19
> **Status**: active
> **Related**: [[claude-code]], [[openai-codex]], [[cursor]], [[ai-memory]], [[agent-frameworks]], [[andrej-karpathy]]

## Summary

agentmemory is an open-source tool by Tom Dörr that gives [[claude-code]], [[openai-codex]], [[cursor]], Gemini CLI, Cline, and Windsurf persistent memory across sessions — runs silently in the background, records what the agent does each session, compresses it with AI, and injects the right context when the next session starts. Connects via MCP or REST. Claims **92% fewer tokens per session** and **95.2% retrieval accuracy**, reducing yearly per-developer costs to roughly $10. Fully self-hosted (SQLite only) with no external database requirements. Reached 11k GitHub stars within days of launch (May 2026), reflecting the developer-community pain point around per-session context loss in agentic coding. Lands the same cycle as Anthropic's [[claude-code-agent-view]] (multi-session dashboard) and the broader push to make AI coding agents persistent across days/weeks rather than per-session.

## Timeline

- **2026-05-19**: agentmemory hits 11k stars on GitHub — 92% fewer tokens for Claude/Cursor; full memory-injection-on-session-start workflow detailed; reduces yearly per-dev costs to ~$10 — *source: 2026-05-19 cycle (AlphaSignal — agentmemory hits 11k stars)*
- **2026-05-18**: agentmemory first surfaces in coverage; persistent memory across sessions for Claude Code, Codex, Cursor — *source: 2026-05-18 cycle (AlphaSignal — agentmemory; OpenHuman parallel)*

## Key Facts

- Author: Tom Dörr
- License: open-source
- GitHub stars: 11k+ within days of launch
- 92% fewer tokens per session
- 95.2% retrieval accuracy
- ~$10/year per-developer cost
- Self-hosted with SQLite only (no external DB)
- Supports Claude Code, Codex, Cursor, Gemini CLI, Cline, Windsurf via MCP or REST

## Open Questions

- Does agentmemory's "compress-with-AI" step add latency to session-start that offsets the token savings?
- How does it compare to commercial alternatives (Mem0, OpenHuman, Hermes Agent v0.14.0)?
- Will Anthropic/OpenAI ship native equivalents that obsolete the third-party layer?

## Sources

- data/summaries/2026-05-18.json (AlphaSignal — recursive architectures)
- data/summaries/2026-05-19.json (AlphaSignal — agentmemory hits 11k stars)
