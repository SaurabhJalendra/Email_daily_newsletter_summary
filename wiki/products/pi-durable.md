---
name: Pi Durable
description: Earendil's Oct 1 2026 TypeScript port of Pi — adds crash survival, portability, concurrency, extensibility, context management, and multiplayer/state sync to the minimal coding-agent harness design
type: product
---

# Pi Durable

> **Type**: product
> **Vendor**: [[earendil]]
> **First mentioned**: 2026-10-02-evening
> **Last updated**: 2026-10-02-evening
> **Status**: announced (TypeScript port, companion to [[pi-1-0]])
> **Related**: [[pi-1-0]], [[earendil]], [[agent-harness]]

## Summary

Pi Durable is [[earendil]]'s TypeScript port of [[pi-1-0]], announced alongside the Pi 1.0 stable release on October 1, 2026. The port's framing centers on **crash survival, portability, concurrency, extensibility, context management, and multiplayer/state sync** — graduating the Pi harness from a single-user, single-session substrate into a production-grade reliability tier. Positioned as a complement rather than a replacement, Pi Durable targets long-running agent workloads where a stock Pi process would lose state on crash or across machines.

## Timeline

- **2026-10-02-evening**: **Pi Durable TypeScript-port announcement** alongside [[pi-1-0]] stable release — AINews HIGH *"[AINews] Pi 1.0, Pi Durable, and AIE NYC"*: *"Pi Durable, a TypeScript port of Pi, has been announced, offering crash survival, portability, concurrency, extensibility, context management, and multiplayer/state sync capabilities"*. — *source: data/summaries/2026-10-02-evening.json (AINews HIGH "[AINews] Pi 1.0, Pi Durable, and AIE NYC")*

## Key Facts

- **Vendor**: [[earendil]]
- **Announced**: 2026-10-01 (alongside [[pi-1-0]])
- **Language**: TypeScript (port of Pi)
- **Capabilities**: crash survival, portability, concurrency, extensibility, context management, multiplayer/state sync
- **Relation to [[pi-1-0]]**: companion release targeting production-grade reliability

## Open Questions

- Durable state-sync backend (Postgres? Redis? Custom protocol?)
- Multiplayer semantics — collaborative editing of agent state? Shared tool-call history?
- Interop with Pi 1.0 — can a Pi session migrate to Pi Durable mid-run?
- License (likely MIT per Pi 1.0, not yet confirmed)

## Sources

- data/summaries/2026-10-02-evening.json (AINews HIGH "[AINews] Pi 1.0, Pi Durable, and AIE NYC")
