---
name: Agent Frameworks
description: First-party and third-party frameworks for building AI agents
type: topic
---

# Agent Frameworks

> **Type**: topic
> **First mentioned**: 2025-10-01
> **Last updated**: 2025-10-17
> **Status**: active
> **Related**: [[agentkit]], [[claude-skills]], [[claude-code]], [[jules]], [[cursor]], [[agentforce]], [[github-spec-kit]], [[openai]], [[google]], [[anthropic]], [[salesforce]], [[auth0]]

## Summary

"Agent frameworks" refers to the scaffolding — SDKs, runtime features, tools, and managed services — that lets developers compose LLM-powered agents. In early October 2025 every major lab shipped first-party scaffolding: [[openai]] launched [[agentkit]] at DevDay 2025 plus an earlier Agent Builder; [[anthropic]] shipped [[claude-skills]] (later extended with Agent Skills) and added plugins to [[claude-code]]; [[google]] released [[jules]] Tools (CLI) and the Jules API. Enterprise SaaS entered with [[salesforce]] [[agentforce]] 360 and [[github-spec-kit]] for spec-driven coding. [[auth0]] separately shipped the first dedicated authentication layer for agents. Third-party IDEs like [[cursor]] added agent-planning UX with Plan Mode.

## Timeline

- **2025-10-17**: [[anthropic]] unveils Claude Agent Skills for modular task automation — *source: AlphaSignal; The Rundown AI; TLDR AI*
- **2025-10-15**: [[github-spec-kit]] coverage — spec-driven coding for agents — *source: TLDR*
- **2025-10-14**: [[salesforce]] launches [[agentforce]] 360 — *source: TLDR AI*
- **2025-10-13**: Plugins ship for [[claude-code]] — *source: TLDR AI*
- **2025-10-08**: [[cursor]] Plan Mode surfaces — *source: TLDR AI*
- **2025-10-07**: [[openai]] launches [[agentkit]] at DevDay 2025 — *source: The Rundown AI; TLDR AI; AlphaSignal; Matt from FutureTools*
- **2025-10-06**: OpenAI Agent Builder surfaces; [[google]] ships [[jules]] Tools and API — *source: Mindstream; The Rundown AI; TLDR AI*
- **2025-10-02**: [[claude-skills]] ships — *source: TLDR AI*
- **2025-10-01**: [[auth0]] launches Auth0 for AI Agents — *source: TAAFT*

## Key Facts

- First-party frameworks live in all three major labs as of Oct 2025: OpenAI ([[agentkit]]), Anthropic ([[claude-skills]]), Google ([[jules]])
- Dedicated agent authentication is now a category (Auth0)
- IDE integration ([[cursor]] Plan Mode) shows the planning step is becoming a first-class UX

## Open Questions

- Will frameworks converge on a common tool/skill packaging format, or fragment?
- How does [[model-context-protocol]] (MCP) relate to these first-party frameworks?

## Sources

- data/summaries/2025-10-01.json (TAAFT — Auth0 for AI Agents)
- data/summaries/2025-10-02.json (TLDR AI — Claude Skills)
- data/summaries/2025-10-06.json (Mindstream — OpenAI's Agent Builder; The Rundown AI — Jules Tools; TLDR AI — Jules API)
- data/summaries/2025-10-07.json (The Rundown AI — OpenAI launches AgentKit; TLDR AI — AgentKit; Matt from FutureTools — Altman just made building agents easy)
- data/summaries/2025-10-08.json (TLDR AI — Cursor Plan Mode; AlphaSignal — Inside OpenAI's AgentKit)
- data/summaries/2025-10-13.json (TLDR AI — Claude Code plugins)
- data/summaries/2025-10-14.json (TLDR AI — Salesforce Agentforce 360)
- data/summaries/2025-10-15.json (TLDR — GitHub Spec Kit)
- data/summaries/2025-10-17.json (AlphaSignal — Anthropic unveils Claude Agent Skills; The Rundown AI — Claude gains new Skills; TLDR AI — Claude Skills)
