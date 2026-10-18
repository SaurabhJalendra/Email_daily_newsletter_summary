---
name: OpenCode
description: Anomaly's open-source AI coding agent — Oct 2026 OpenCode 2.0 overhaul with shared background server (terminal + web + desktop interfaces), redesigned API, embeddable TypeScript SDK, hot-reloadable plugins, async shell commands, background subagents, and Code Mode (agents compose + execute JavaScript to batch MCP + OpenAPI tool calls)
type: product
---

# OpenCode

> **Type**: product
> **Vendor**: Anomaly
> **First mentioned**: 2026-10-18-morning
> **Last updated**: 2026-10-18-morning
> **Status**: active (2.0 breaking upgrade; v1 plugins incompatible)
> **Related**: [[claude-code]], [[codex-app]], [[antigravity]], [[antigravity-2]], [[model-context-protocol]], [[agent-frameworks]], [[agent-plugins]], [[webmcp]]

## Summary

OpenCode is Anomaly's **open-source AI coding agent**. The **OpenCode 2.0** overhaul landed in October 2026, replacing the previous architecture with a **shared background server** used by terminal, web, and desktop interfaces — enabling **persistent sessions and consistent workflows across clients**. The 2.0 release includes a **redesigned API, an embeddable TypeScript SDK, extensible hot-reloadable plugins, asynchronous shell commands, and background subagents** for delegated tasks.

Its most significant technical change is **Code Mode**, which lets agents **compose and execute JavaScript to batch calls to MCP servers and OpenAPI tools** rather than invoking tools sequentially — reducing latency and context overhead in complex coding workflows. **Background subagents** allow longer tasks to run without interrupting interactive work. The release is positioned less as a standalone coding assistant and more as **infrastructure for programmable, multi-agent development systems**. It is a **breaking upgrade** — v1 plugins are incompatible and users must explicitly upgrade to the 2.0 line.

## Timeline

- **2026-10-18-morning**: **OpenCode 2.0 release canonical anchor cluster — concrete shared-background-server unified terminal/web/desktop canonical architectural anchor + concrete redesigned-API + concrete embeddable-TypeScript-SDK + concrete hot-reloadable-plugins + concrete async-shell-commands + concrete background-subagents five-primitive canonical productization anchor cluster + concrete Code Mode canonical architectural-primitive anchor (JavaScript-composed batched MCP + OpenAPI tool-calling) + concrete v1-plugin-incompatibility breaking-upgrade canonical anchor**. NLP Newsletter HIGH "AI Agents Weekly": *"OpenCode 2.0, a major overhaul of Anomaly's open-source AI coding agent, has been released with a redesigned API, an embeddable TypeScript SDK, extensible hot-reloadable plugins, asynchronous shell commands, and background subagents for delegated tasks. The update includes Code Mode, which enables agents to compose and execute JavaScript to batch calls to MCP servers and OpenAPI tools"*. researchFindings.additionalContext: *"OpenCode 2.0 is a major overhaul of Anomaly's open-source AI coding agent, released in October 2026. It replaces the previous architecture with a shared background server used by the terminal, web, and desktop interfaces, enabling persistent sessions and more consistent workflows across clients"* + *"Its most significant technical change is Code Mode, which lets agents compose and execute JavaScript to batch calls to MCP servers and OpenAPI tools rather than invoking tools sequentially. This can reduce latency and context overhead in complex coding workflows, while background agents allow longer tasks to run without interrupting interactive work. The release is therefore positioned less as a standalone coding assistant and more as infrastructure for programmable, multi-agent development systems; however, it is a breaking upgrade because version 1 plugins are incompatible and users must explicitly upgrade to the 2.0 line"*. First-in-wiki: (a) **Anomaly as named-vendor canonical anchor** on open-source AI coding agent substrate; (b) **Code Mode "JavaScript-composed batched MCP + OpenAPI tool-calling" canonical architectural-primitive anchor** — first-in-wiki *concrete JavaScript-as-agent-tool-composer canonical anchor* on any coding-agent substrate (structurally significant — pairs cycle-structurally with [[webmcp]] "websites expose direct JavaScript tools callable by AI agents" 10-13-evening canonical anchor as *canonical mid-Oct-2026 twin JavaScript-as-agent-plumbing substrate cluster: WebMCP = website-exposed JS tools + OpenCode Code Mode = agent-composed JS tool-batching*; likely durable reference-anchor for future agent-tool-batching + MCP-call-latency-reduction discussion); (c) **Shared-background-server unified-terminal-web-desktop canonical architectural anchor** — first-in-wiki *concrete persistent-session-across-interface-surfaces canonical anchor* on an open-source coding-agent (structurally distinct from [[claude-code]] terminal + [[claude-code-web]] + Claude Desktop separate-session architecture — productizes OpenCode as *canonical mid-Oct-2026 unified-session cross-interface coding-agent substrate*); (d) **Breaking v1-to-v2 plugin-incompatibility canonical anchor** — productizes OpenCode as *canonical late-2026 breaking-architectural-upgrade coding-agent substrate*. See [[model-context-protocol]] + [[webmcp]] + [[agent-frameworks]] + [[claude-code]] — *source: data/summaries/2026-10-18-morning.json (NLP Newsletter HIGH "AI Agents Weekly: Muse Spark Open, Gemini Agents Beat Minecraft, OpenCode 2.0, Nemotron 3.5 Super VL, OpenRouter Armor, Claude OpenTelemetry, and More"; researchFindings.additionalContext for OpenCode 2.0; daily-digest Top Story #4)*

## Key Facts

- **Vendor**: Anomaly
- **License**: open-source
- **Current version**: 2.0 (October 2026; breaking upgrade from v1)
- **Architecture**: shared background server used by terminal, web, and desktop interfaces; persistent sessions across all client surfaces
- **API**: redesigned (v2); embeddable TypeScript SDK
- **Plugins**: hot-reloadable, extensible; **v1 plugins incompatible** with 2.0 (explicit upgrade required)
- **Shell**: asynchronous shell commands
- **Subagents**: background subagents for delegated tasks (long-running work doesn't block interactive sessions)
- **Code Mode**: agents compose and execute JavaScript to **batch calls to MCP servers and OpenAPI tools** (replaces sequential tool invocation; reduces latency + context overhead)
- **Positioning**: *infrastructure for programmable, multi-agent development systems*, not a standalone coding assistant
- **Co-reported corroboration**: HyperAI and Augmented SWE

## Open Questions

- Concrete per-model LLM backend support (Claude, GPT, Gemini, Muse, open-weights?)
- Pricing / monetization model — open-source + optional hosted tier?
- GitHub repo URL + release-notes URL
- Benchmark positioning vs [[claude-code]], [[antigravity-2]], [[codex-app]], and other agentic coding substrates on SWE-Bench / Terminal-Bench 2.1
- Code Mode sandbox + security model (how is agent-authored JavaScript isolated from host system?)
- Background-subagent orchestration recipe (parallel? dependency-graph? state-shared with primary session?)
- Integration surface for [[webmcp]] protocol (natural pair with Code Mode's JS-tool-batching)

## Sources

- data/summaries/2026-10-18-morning.json (NLP Newsletter HIGH "AI Agents Weekly: Muse Spark Open, Gemini Agents Beat Minecraft, OpenCode 2.0, Nemotron 3.5 Super VL, OpenRouter Armor, Claude OpenTelemetry, and More" — OpenCode 2.0 major overhaul redesigned API embeddable TypeScript SDK extensible hot-reloadable plugins asynchronous shell commands background subagents Code Mode JavaScript batched MCP + OpenAPI tools; researchFindings.additionalContext for OpenCode 2.0; daily-digest Top Story #4)
