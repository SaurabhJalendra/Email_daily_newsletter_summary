---
name: Slack
description: Salesforce-owned enterprise collaboration platform evolving into an AI-native workspace with Slack AI, Slack GPT, RTS API, and dedicated MCP server for third-party agents (Jun 2026)
type: company
---

# Slack

> **Type**: company
> **First mentioned**: 2026-06-24-evening
> **Last updated**: 2026-08-21-evening (**[[slack-code]] launches — shared-room coding surface where AI agents author the software while human teammates from across the org watch, steer, and direct the session; live previews render inline; deploy actions gated behind human approval**. The Rundown AI MEDIUM cycle-headline *"🤝 Slack turns coding into a group project"*: *"Slack launched Slack Code, a new feature that allows users to develop code via shared rooms directly within the messaging platform, where AI agents write the software and human teammates watch, steer, and direct the session. Slack Code brings agents and users from across teams together, allowing anyone to contribute to the direction of a build and view live previews, with deploying changes gated behind human approval"*. First publicly framed on this cycle: (a) *shared-room coding surface* + *AI-agents-author + humans-watch/steer/direct* division-of-labor — first publicly framed *chat-native cross-functional coding-agent surface* on Slack in this wiki; (b) *live previews rendered inline in the session* — first publicly framed *inline-preview primitive* on Slack Code; (c) *deploy-gated behind human approval* — first publicly framed *human-in-the-loop deploy-gate primitive* on Slack Code. Structurally significant: **Slack Code productizes Slack-as-cross-functional-coding-substrate distinct from IDE-embedded ([[cursor]]) + terminal-embedded ([[claude-code]]) + browser-embedded ([[claude-cowork]]) + iMessage-metaphor ([[grok-bot]]) competing agent-surface motions** — positions Slack against the mid-2026 coding-agent-surface cohort on the *chat-native + cross-team-audience + human-approval-gated-deploy* axis; extends Slack's AI-native-workspace posture from *summarization + Q&A + agent-orchestration* (Slack AI + MCP + RTS API + [[claude-tag]]) into *first-class coding-agent-authoring surface*. See [[slack-code]] + [[claude-tag]] + [[claude-code]] + [[cursor]] + [[grok-bot]] + [[software-factories]] — *source: data/summaries/2026-08-21-evening.json (The Rundown AI MEDIUM "🤝 Slack turns coding into a group project")*)
> **Previously updated**: 2026-06-24-evening
> **Status**: active
> **Related**: [[salesforce]], [[anthropic]], [[claude-tag]], [[openai]], [[model-context-protocol]], [[agent-frameworks]], [[enterprise-ai]], [[chatgpt-company-knowledge]]

## Summary

Slack is the [[salesforce]]-owned enterprise collaboration platform rapidly evolving into an **AI-native workspace** — embedding generative AI and agentic capabilities directly into chats, channels, and workflows rather than treating them as bolt-on integrations. The current product surface spans **Slack AI** (native summarization and Q&A grounded in a user's messages + connected data), a revamped **Slackbot** with generative AI for search and content creation, and **Slack GPT** / native AI features that route Slack into [[salesforce]] Einstein GPT and other large language models including [[anthropic]] Claude and [[openai]] models.

On the developer side, Slack is opening its platform so third-party AI agents and apps can safely use Slack's conversational data as context — via a new **real-time search (RTS) API**, a dedicated **Model Context Protocol (MCP)** server, and related tools. This positions Slack as a central AI-orchestration layer for enterprise work: a secure, context-rich front end where employees interact with multiple LLMs, automate business workflows, and tap into Salesforce and other systems. [[claude-tag]] (Anthropic's multiplayer, proactive, persistent agent launched in Slack 2026-06-24-evening) is the first publicly named frontier-lab agent to consume Slack's MCP server in production beta.

## Timeline

- **2026-06-24-evening**: **Slack publicly framed as AI-native workspace + first publicly named frontier-lab agent ([[claude-tag]]) launches inside Slack**. AINews HIGH-priority "Claude Tag: Multiplayer, Proactive, Persistent Agents in Slack" lands [[anthropic]]'s [[claude-tag]] launch on Slack as the cycle headline; researchFindings.additionalContext on Slack lands first publicly framed *AI-native workspace* canonical framing in this wiki: ***"Slack is a leading enterprise collaboration platform that is rapidly evolving into an AI-native workspace, embedding generative AI and agentic capabilities directly into chats, channels, and workflows. Recent releases include Slack AI (native summarization and Q&A over messages), a revamped Slackbot with generative AI for search and content creation, and Slack GPT/native AI that tie Slack into Salesforce's Einstein GPT and other large language models such as Anthropic's Claude and OpenAI models."*** Developer-platform surface: ***"Slack is opening its platform so AI agents and apps can safely use Slack's conversational data as context, via a new real-time search (RTS) API, a dedicated Model Context Protocol (MCP) server, and related tools."*** Strategic framing: ***"this positions Slack as a central AI orchestration layer for enterprise work: a secure, context-rich front end where employees interact with multiple LLMs, automate business workflows, and tap into Salesforce and other systems."*** First publicly framed *Slack MCP server* in this wiki — productizes Anthropic-originated [[model-context-protocol]] into a major enterprise-collaboration platform's first-party agent-substrate. Pairs cycle-structurally with [[chatgpt-company-knowledge]] which previously framed Slack as a *source-data RAG target* — Slack now repositions itself as a *first-class agent runtime* rather than just a data source for external assistants. Body-recovery items: (a) which third-party agents beyond [[claude-tag]] are MCP-enabled (Cursor? Codex? Perplexity?), (b) Slack RTS API rate-limit + pricing tier, (c) cross-tenant data-residency + DLP controls, (d) competitive comparison vs Microsoft Teams (similar Copilot + first-party agent surfacing) — *source: data/summaries/2026-06-24-evening.json (AINews HIGH — Claude Tag: Multiplayer, Proactive, Persistent Agents in Slack; researchFindings.additionalContext on Slack — AI-native workspace evolution + Slack AI + Slackbot + Slack GPT + RTS API + MCP server + central AI orchestration layer for enterprise work)*

## Key Facts

- Owner: [[salesforce]] (acquired Slack in 2021)
- AI product surface: Slack AI (summarization + Q&A) + Slackbot (generative search + content) + Slack GPT (Einstein GPT + Claude + OpenAI routing)
- Developer surface: real-time search (RTS) API + dedicated [[model-context-protocol]] server + related agent tools
- First named third-party agent on Slack MCP server: [[claude-tag]] (beta, 2026-06-24)
- Strategic positioning: central AI-orchestration layer for enterprise work (secure context-rich front end for multiple LLMs)

## Open Questions

- Which other frontier-lab agents are pre-approved on Slack's MCP server beyond [[claude-tag]]?
- Pricing model for RTS API + MCP server access (per-call? per-seat add-on? included in Enterprise tier?)
- Does Slack route Claude Tag prompts through Salesforce data-residency controls?
- Does the AI-native workspace pivot compete with [[salesforce]] Agentforce, or compose with it?

## Sources

- data/summaries/2026-06-24-evening.json (AINews HIGH — Claude Tag: Multiplayer, Proactive, Persistent Agents in Slack; researchFindings.additionalContext on Slack — AI-native workspace evolution)
