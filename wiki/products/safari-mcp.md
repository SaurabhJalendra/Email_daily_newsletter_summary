---
name: Safari MCP
description: Apple's WebKit-native Model Context Protocol server shipped in Safari 27.0 — lets a coding agent (Claude, ChatGPT, "agent of choice") take control of the browser window (Sep 2026)
type: product
---

# Safari MCP

> **Type**: product
> **Vendor**: [[apple]]
> **First mentioned**: 2026-09-18-evening
> **Last updated**: 2026-09-18-evening
> **Status**: active
> **Related**: [[apple]], [[model-context-protocol]], [[chatgpt-atlas]], [[perplexity]], [[claude-code]]

## Summary

Safari MCP is [[apple]]'s WebKit-native [[model-context-protocol]] server shipped as part of the WebKit features for Safari 27.0 in September 2026. It lets any MCP-speaking coding agent — Claude, ChatGPT, or "agent of choice" — take control of the browser window and drive a Safari session as part of an agent workflow. TLDR frames the launch as *"makes working with coding agents dramatically easier"* and *"more seamless interaction between humans and AI systems"*.

Safari MCP is the first browser-tier MCP server from a first-party vendor. It extends MCP adoption — previously anchored in coding-agent tools (IDE, Claude Code), the operational-database tier (MongoDB Atlas), a social platform (X), the smart-home tier (Google Home MCP), and the consumer-web tier (ChatGPT WebMCP) — into the browser substrate itself.

## Timeline

- **2026-09-18-evening**: Apple ships Safari 27.0 WebKit features including Safari MCP. TLDR MEDIUM: *"The WebKit features for Safari 27.0 have been released, including Safari MCP, which makes working with coding agents dramatically easier"* + *"enables users to give their agent of choice control over the browser window, allowing for more seamless interaction between humans and AI systems"*. First-in-wiki Apple-authored MCP-native-in-browser canonical productization anchor + rival-agent-neutral browser-control canonical anchor pair — *source: data/summaries/2026-09-18-evening.json (TLDR MEDIUM "Hacking OpenAI 👨‍💻, Claude leads R&D 🤖, Safari MCP 🌍")*

## Key Facts

- Vendor: [[apple]] (WebKit team)
- Ships in: Safari 27.0 (WebKit features release)
- Protocol: [[model-context-protocol]]
- Agent-neutral: Claude, ChatGPT, "agent of choice" as day-one clients
- Positioning: first-party browser-tier MCP-server

## Open Questions

- Full API surface (what browser primitives are exposed — DOM read/write, form fill, screenshot, navigation)
- Authentication + permission model (per-tab? per-origin? user-approval for sensitive sites?)
- Privacy handling (does the agent see cookies? credentials? autofill?)
- Interoperability with the OS-level Extensions Framework (Sep 2026 Apple third-party-AI-assistant substrate)
- macOS + iPadOS + iOS availability parity
- Sandbox model — is the agent bound to specific windows, or can it open new tabs?

## Sources

- data/summaries/2026-09-18-evening.json (TLDR — Safari MCP shipping in Safari 27.0)
