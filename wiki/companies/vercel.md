---
name: Vercel
description: Vercel — frontend/infra platform; open-sources Chat SDK for cross-platform bots (Feb 2026)
type: company
---

# Vercel

> **Type**: company
> **First mentioned**: 2026-02-27
> **Last updated**: 2026-06-19-morning (**Vercel introduces [[vercel-eve]] — open-source agent framework** with durable execution, sandboxed compute, approvals, subagents, evaluations; framed as "production infrastructure for AI agents" per TLDR AI link list)
> **Status**: active
> **Related**: [[vercel-eve]], [[agent-frameworks]], [[claude-code]], [[openai-codex]]

## Summary

Vercel is the frontend/edge deployment platform (known for Next.js). In late February 2026 it open-sourced its Chat SDK for cross-platform bots, letting developers write bot logic once and ship it across multiple channels — an explicit expansion of Vercel's developer-tooling surface into agent plumbing. In June 2026 it launched [[vercel-eve]], an open-source agent framework explicitly positioned as "production infrastructure for AI agents" — bundling durable execution, sandboxed compute, approvals, subagents, and evaluations into a single SKU.

## Timeline

- **2026-06-19-morning**: **Vercel introduces [[vercel-eve]] — open-source agent framework with built-in capabilities** including *durable execution*, *sandboxed compute*, *approvals*, *subagents*, and *evaluations* — aimed at simplifying production concerns for developers building AI agents. TLDR AI link list frames the launch as "Production Infrastructure for AI Agents" (vercel.com/blog/introducing-eve). Extends Vercel's prior Open Agents (Apr 2026) fleet-orchestration surface and Chat SDK (Feb 2026) bot plumbing into a unified production-grade agent framework SKU — positions Vercel against [[claude-code]] / [[openai-codex]] / first-party vendor harnesses with an open-source production stack — *source: data/summaries/2026-06-19-morning.json (TLDR AI — "ChatGPT marketshare drops 📉, Vercel eve 🤖, Replit links Claude 🔌" / Vercel introduces eve, an open-source agent framework with built-in capabilities such as durable execution, sandboxed compute, approvals, subagents, and evaluations / Production Infrastructure for AI Agents)*
- **2026-04-26**: Vercel **security incident** continues to be covered — unauthorized access to Vercel's internal systems caused by a compromised third-party AI tool; treated as a sector-wide cautionary tale for AI-tool supply-chain security — *source: 2026-04-26 cycle (Vercel security incident; third-party AI tool compromise)*
- **2026-04-21**: **Vercel security breach** — attributed to a compromised third-party AI tool; first publicized hyperscaler-tier security incident in 2026 explicitly traced to an AI-tool dependency; highlights the security risks associated with deeply-integrated AI tools and the importance of robust security measures in the AI industry — *source: 2026-04-21 cycle (Vercel security breach via compromised third-party AI tool)*
- **2026-04-15**: Vercel open-sources Open Agents — platform for cloud coding agents that lets teams run hundreds of agents simultaneously with minimal setup; lands same day as [[cursor]] 3.1 fleet management and Google's "fleet of coding agents" feature — multi-agent-orchestration becomes table-stakes for developer-tool vendors in a single week — *source: 2026-04-15 cycle*
- **2026-03-29**: JSON-Render open-sourced — framework that lets an AI generate full user interfaces from simple text prompts; developers define allowed components and the model composes them via structured JSON (bounded-generation approach to agent-driven UI) — *source: 2026-03-29 cycle (Hello, World! — Vercel JSON-Render)*
- **2026-02-27**: Open-sources Chat SDK for cross-platform bots — write bot logic once, ship across multiple platforms — *source: 2026-02-27 cycle*

## Key Facts

- Platform: Vercel (frontend hosting, edge, Next.js)
- Open-source move: Chat SDK (Feb 2026)

## Open Questions

- Which runtimes / models does Chat SDK support out of the box?
- Overlap with existing agent frameworks (LangChain, Claude Agent SDK)?

## Sources

- data/summaries/2026-02-27.json (Vercel Chat SDK open-sourced)
- data/summaries/2026-03-29.json (Hello, World! — Vercel JSON-Render AI-driven UI framework)
