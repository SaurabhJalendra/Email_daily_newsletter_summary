---
name: Claude Tag
description: Anthropic's multiplayer, proactive, persistent AI agent that lives inside Slack as a shared team member; beta/research preview for Claude Enterprise and Claude Team customers (Jun 2026)
type: product
---

# Claude Tag

> **Type**: product
> **Vendor**: [[anthropic]]
> **First mentioned**: 2026-06-24-evening
> **Last updated**: 2026-06-24-evening
> **Status**: beta / research preview
> **Related**: [[anthropic]], [[slack]], [[claude-opus-4-7]], [[claude-opus-4-8]], [[claude-code]], [[claude-cowork]], [[claude-managed-agents]], [[agent-frameworks]], [[enterprise-ai]], [[recursive-self-improvement]], [[chatgpt-tasks]], [[gemini-spark]], [[microsoft-scout]]

## Summary

Claude Tag is [[anthropic]]'s **multiplayer, proactive, and persistent AI agent** that lives inside [[slack]] as a shared team member rather than a one-to-one chatbot. Teams @-mention Claude in channels or threads, grant it scoped access to specific channels, tools, data, and codebases, and let it follow ongoing conversations to summarize discussions, break down tasks, and surface relevant updates over time without explicit prompting each turn. The system is designed with enterprise controls: admins tightly configure what Claude can see and do in each channel; the feature launched in beta/research preview for **Claude Enterprise and Claude Team customers on Slack** in late June 2026.

Structurally, Claude Tag shifts workplace AI from single-user chat windows to *embedded, team-wide agents* — closer to how a human teammate operates than to how a chatbot integration like Slack AI or earlier Slackbot worked. Anthropic and external coverage frame it as a concrete step toward always-on organizational agents that maintain memory across channels, orchestrate workflows, and handle background execution, permissions, and monitoring. Anthropic's own internal use (e.g., Claude writing a majority of some product teams' code per [[recursive-self-improvement]]) is cited as a proof point for productivity impact. Industry commentators read Claude Tag as part of a broader competitive push among leading AI labs to own the **"operational layer"** between foundation models and day-to-day enterprise work — paralleling [[chatgpt-tasks]] (scheduled agents in ChatGPT), [[gemini-spark]] (24/7 personal agent on Google Cloud VMs), and [[microsoft-scout]] (always-on Scout tab in Microsoft Super App).

## Timeline

- **2026-06-24-evening**: **Claude Tag launched** — AINews HIGH-priority "Claude Tag: Multiplayer, Proactive, Persistent Agents in Slack" cycle headline. First publicly framed *multiplayer, proactive, persistent AI agent inside Slack* in this wiki. Capabilities: @-mention Claude in channels/threads, grant scoped access to channels + tools + data + codebases, follow ongoing conversations to summarize discussions / break down tasks / surface updates over time. Enterprise controls: admins configure what Claude can see and do per channel. Distribution: beta/research preview for Claude Enterprise + Claude Team customers on Slack. Industry framing: part of leading AI labs' competitive push to own the "operational layer" between foundation models and day-to-day enterprise work. AINews subject reads: ***"Claude Tag: Multiplayer, Proactive, Persistent Agents in Slack — Claude finally gets a Slackbot upgrade."*** Research context lands "the Age of Async Agents" framing on the broader cycle. Pairs structurally with [[slack]]'s evolution into an AI-native workspace (Slack AI + Slackbot + Slack GPT + real-time search RTS API + dedicated MCP server) — Claude Tag is the first frontier-lab named agent to consume Slack's MCP server in production. Body-recovery items: (a) Claude Enterprise + Claude Team tier-specific pricing for Claude Tag, (b) which underlying Claude model powers Tag ([[claude-opus-4-7]] vs [[claude-opus-4-8]] vs Haiku), (c) memory + persistence architecture (per-channel? per-team? per-workspace?), (d) competitive comparison with Slack's native [[salesforce]] Einstein integration, (e) GA timeline beyond beta — *source: data/summaries/2026-06-24-evening.json (AINews HIGH — Claude Tag: Multiplayer, Proactive, Persistent Agents in Slack / Claude finally gets a Slackbot upgrade / Anthropic launched Claude Tag a new multiplayer proactive and persistent AI agent that integrates with Slack allowing teams to work with Claude as a shared team member rather than a one-to-one chatbot / @-mention Claude in channels or threads grant it scoped access to specific channels tools data and codebases / follow ongoing conversations to summarize discussions break down tasks and surface relevant updates over time / enterprise controls / beta/research preview for Claude Enterprise and Claude Team customers on Slack / Anthropic's own use of similar agents writing a majority of some product teams' code cited as proof point for productivity impact / broader competitive push among leading AI labs to own the operational layer between foundation models and day-to-day enterprise work; researchFindings.additionalContext on Claude Tag and Slack confirms)*

## Key Facts

- Vendor: [[anthropic]]
- Substrate: [[slack]] (channels, threads, scoped tool/data/codebase access)
- Architecture: multiplayer (shared team member, not 1:1 chatbot) + proactive (follows conversations without explicit prompting) + persistent (memory across channels over time)
- Distribution: beta / research preview
- Eligible tiers: Claude Enterprise + Claude Team customers
- Enterprise controls: admins configure what Claude can see and do per channel
- Slack-side enablers: real-time search (RTS) API + dedicated Model Context Protocol (MCP) server (see [[slack]])
- Internal-use proof point: Anthropic's own product teams use similar agents that write a majority of their code (consistent with [[recursive-self-improvement]] essay framing)

## Open Questions

- Underlying model: [[claude-opus-4-7]] / [[claude-opus-4-8]] / Haiku / Sonnet — and is it user-selectable per workspace?
- Pricing: per-seat add-on vs included in Enterprise/Team tier?
- Memory architecture: per-channel? per-thread? per-workspace? cross-workspace?
- Cross-platform roadmap: Microsoft Teams? Discord? Mattermost? or Slack-exclusive long-term?
- Permissioning model: how does Tag's scoped access compose with Slack's existing channel-permission and data-loss-prevention (DLP) layers?
- Audit + compliance: SOC 2 / HIPAA / FedRAMP coverage for Tag's data access?
- How does Claude Tag compare against [[copilot-cowork]] (Microsoft 365 Copilot's Claude-powered task agent across Office apps)?

## Sources

- data/summaries/2026-06-24-evening.json (AINews — Claude Tag: Multiplayer, Proactive, Persistent Agents in Slack; researchFindings.additionalContext on Claude Tag and Slack)
