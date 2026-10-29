---
name: Slack Code
description: Slack's shared-room coding surface for AI agents and human teammates (Aug 2026 launch); Oct 2026 extended with Slack Code API — programmatic access for agents to start code channels, add people and files, post updates, and archive on completion
type: product
---

# Slack Code

> **Type**: product
> **Vendor**: [[slack]] / [[salesforce]]
> **First mentioned**: 2026-08-21-evening
> **Last updated**: 2026-10-29-evening (**[[slack]] introduces the **Slack Code API** — programmatic agent surface letting third-party agents (a) **start code channels**, (b) **add relevant people and files**, (c) **post updates as they work**, (d) **archive channels when the work is done**. Framed by Slack as *"Your agents, your team, one code channel"*. Productizes the 2026-08-21-evening launch's shared-room coding surface into a *first-class agent-callable API-tier* — any agent (not just the Slack-native in-app agent) can orchestrate full coding-session lifecycles inside Slack. First-in-wiki *concrete Slack Code programmable-API canonical anchor* on the chat-native coding surface; graduates the 2026-08-21 "AI agents write + humans watch/steer/direct" launch anchor into a *concrete agent-neutral API-callable productization anchor tier* alongside peer coding-agent surfaces ([[cursor]] + [[claude-code]] + [[grok-bot]]). See [[slack]] + [[claude-tag]] + [[claude-code]] + [[cursor]] + [[software-factories]] — *source: data/summaries/2026-10-29-evening.json (TLDR MEDIUM "Touchscreen MacBook Pro 💻, Gemini 4 Carbon 🤖, Slack Code API 👨‍💻" — "Introducing the Slack Code API: Your agents, your team, one code channel")*)
> **Previously updated**: 2026-08-21-evening (launch)
> **Status**: active (shared-room surface Aug 2026; programmable API Oct 2026)
> **Related**: [[slack]], [[salesforce]], [[claude-tag]], [[claude-code]], [[cursor]], [[grok-bot]], [[agent-frameworks]], [[software-factories]]

## Summary

Slack Code is [[slack]]'s coding surface that turns software development into a **shared-room group activity** inside the messaging platform. AI agents author the code while human teammates from across the org watch, steer, and direct the session in real time — with live previews rendered inline and **deploy actions gated behind human approval**. The Rundown AI framed the launch as *"Slack turns coding into a group project"* — positioning Slack against IDE-embedded ([[cursor]]) and terminal-embedded ([[claude-code]]) coding-agent surfaces on a *chat-native + cross-functional-audience* axis distinct from single-developer-and-agent workflows.

## Timeline

- **2026-10-29-evening**: **Slack Code API launches** — programmatic surface for agents to **start code channels + add relevant people and files + post updates as they work + archive channels on completion**. Slack framing: *"Your agents, your team, one code channel"*. Extends the Aug 2026 shared-room launch's human-plus-agent surface into a first-class agent-callable API tier. — *source: data/summaries/2026-10-29-evening.json (TLDR MEDIUM "Touchscreen MacBook Pro 💻, Gemini 4 Carbon 🤖, Slack Code API 👨‍💻" — slack.com/blog/developers/slack-code-api "Introducing the Slack Code API")*

- **2026-08-21-evening**: Slack Code launched — shared-room coding sessions with AI agents authoring code + human teammates observing/steering + live previews + human-approval gate on deploy; positioned as *"turns coding into a group project"* — *source: data/summaries/2026-08-21-evening.json (The Rundown AI MEDIUM "🤝 Slack turns coding into a group project")*

## Key Facts

- **Vendor**: [[slack]] / [[salesforce]]
- **Surface**: Slack shared rooms (chat-native)
- **Agent role**: writes the software
- **Human role**: watch, steer, direct the session; cross-team participation
- **Previews**: rendered live inline in the session
- **Deploy gate**: human approval required before changes ship
- **Positioning**: chat-native cross-functional coding surface vs IDE-embedded ([[cursor]]) or terminal-embedded ([[claude-code]])

## Open Questions

- Which model(s) back Slack Code — [[claude-tag]] / Claude, Salesforce Einstein GPT, or vendor-agnostic?
- Whether Slack Code integrates with GitHub / GitLab / Bitbucket for repo access
- How the "steer and direct" primitive works — natural-language guidance, inline edits, or chat-thread control?
- Enterprise pricing tier and rollout timeline
- Relationship to Slack's existing developer-tool + MCP server surface

## Sources

- data/summaries/2026-08-21-evening.json (The Rundown AI MEDIUM "🤝 Slack turns coding into a group project" — shared rooms + AI agents write + humans watch/steer/direct + live previews + human-approval-gate for deploy)
