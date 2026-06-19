---
name: Vercel eve
description: Vercel's open-source agent framework with built-in durable execution, sandboxed compute, approvals, subagents, and evaluations (Jun 2026)
metadata:
  type: product
---

# Vercel eve

> **Type**: product
> **First mentioned**: 2026-06-19-morning
> **Last updated**: 2026-06-19-morning (initial launch surfaced via TLDR AI link list — "Production Infrastructure for AI Agents")
> **Status**: launched (open-source)
> **Related**: [[vercel]], [[agent-frameworks]], [[claude-code]], [[openai-codex]]

## Summary

Vercel eve is [[vercel]]'s open-source agent framework introduced in June 2026 and explicitly framed as "production infrastructure for AI agents." It bundles the production-grade concerns developers typically build themselves — **durable execution, sandboxed compute, approvals, subagents, and evaluations** — into a single framework so teams can ship agents without re-implementing the surrounding machinery. Positioned alongside Vercel's prior Open Agents launch (Apr 2026) and the broader agent-platform expansion of the Vercel developer-tools surface.

## Timeline

- **2026-06-19-morning**: **Vercel introduces eve, an open-source agent framework with built-in capabilities** for *durable execution*, *sandboxed compute*, *approvals*, *subagents*, and *evaluations* — aimed at simplifying production concerns for developers building AI agents. TLDR AI link list framing: **"Production Infrastructure for AI Agents."** Lands inside the same edition that confirms [[replit]]–Claude integration and the launch is one of the cycle's headline tool drops alongside [[vercel-eve]] and other developer-platform agent surfaces. Positions Vercel against [[claude-code]], [[openai-codex]], and other vendor-controlled agent harnesses with an open-source equivalent that runs on Vercel's edge infrastructure. Extends the Vercel "Open Agents" April 2026 fleet-orchestration surface into a single framework SKU emphasizing the *production* concerns (state durability + sandboxing + human-in-the-loop approvals + multi-agent decomposition + offline evals) rather than just parallel-agent execution — *source: data/summaries/2026-06-19-morning.json (TLDR AI — "Vercel introduces eve, an open-source agent framework with built-in capabilities such as durable execution, sandboxed compute, approvals, subagents, and evaluations" + link "Production Infrastructure for AI Agents" — vercel.com/blog/introducing-eve)*

## Key Facts

- Vendor: [[vercel]]
- License: open-source (specific license not surfaced in launch coverage)
- Built-in capabilities: durable execution, sandboxed compute, approvals, subagents, evaluations
- Positioning: "production infrastructure for AI agents"
- Likely runtime: Vercel edge / serverless platform (TBC)

## Open Questions

- Which model providers does eve integrate with out of the box (OpenAI / Anthropic / Google / open-weights)?
- What's the eval harness format — standard JSON / OpenAI-evals-style / Vercel-native?
- Does eve compose with the older Vercel Open Agents / Chat SDK surfaces or replace them?
- Hosted vs self-hosted runtime topology — can eve run outside Vercel infrastructure?

## Sources

- data/summaries/2026-06-19-morning.json (TLDR AI — ChatGPT marketshare drops / Vercel eve / Replit links Claude — "Vercel introduces eve, an open-source agent framework with built-in capabilities such as durable execution, sandboxed compute, approvals, subagents, and evaluations" + link "Production Infrastructure for AI Agents")
