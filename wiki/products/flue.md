---
name: Flue
description: Fred Schott's React-style meta-harness for building agents — hooks-based API where an agent is defined by its harness; Astro-creator's second framework
type: product
---

# Flue

> **Type**: product
> **Vendor**: Independent (Fred Schott, Astro creator)
> **First mentioned**: 2026-08-16-morning
> **Last updated**: 2026-08-16-morning
> **Status**: 2.0 stable release
> **Related**: [[agent-frameworks]], [[vercel-eve]], [[cloudflare]], [[claude-skills]], [[claude-code]]

## Summary

Flue is an open-source meta-harness for building agents, created by [[cloudflare|Cloudflare]]-employed Fred Schott (the creator of Astro). Flue 2 — the framework's first stable release — takes its inspiration from React and introduces **"Agent Hooks"** that let developers enable dynamic agent configuration: the agent can manage its own state, listen to agent lifecycle events, and attach different resources and capabilities dynamically. Flue is built on top of **Pi**, an open-source minimal harness, and ships with **16 built-in hooks** including `useSkill()`, `useTool()`, and `useSubagent()`, with the ability to add custom hooks.

Schott's central thesis: *"an agent must have a harness to function effectively"* — the harness (not the model) is what provides context and capabilities. Flue positions as a direct competitor to [[vercel-eve]] (Vercel's agent framework, also treating the harness as foundational) but with an emphasis on **host portability** and being *"an open source framework for every host"*.

## Timeline

- **2026-08-16-morning**: **Flue 2 launches as first stable release — React-style Agent Hooks (16 built-ins: `useSkill()`, `useTool()`, `useSubagent()`, custom hooks) enabling dynamic per-turn agent reconfiguration on top of the Pi minimal harness; positioned as host-portable open-source competitor to Vercel [[vercel-eve]]**. Latent.Space MEDIUM headline *"React for Agents: Astro Creator Brings Hooks to his Meta-Harness, Flue"*: *"Fred Schott, creator of Astro, has released version 2 of Flue, a meta-harness for building agents, which takes inspiration from React and introduces React-style 'Agent Hooks' to enable dynamic agent configuration"* + *"Schott emphasizes that an agent must have a harness to function effectively"* + *"positioned as a competitor to Vercel's eve, another agent framework that also treats the harness as foundational, but with a focus on host portability and being an 'open source framework for every host'"*. Also mentions **re-renders on every turn** (React parallel) + Bret Taylor (Sierra CEO, OpenAI Chairman) commentary. Same-cycle: Flue joins the mid-2026 meta-harness cohort ([[deepseek-harness]] + [[vercel-eve]] + [[harnessx]] + [[self-harness]]) but is the first to explicitly borrow *component-lifecycle hooks* from web-UI frameworks. See [[agent-frameworks]] + [[vercel-eve]] + [[cloudflare]] — *source: data/summaries/2026-08-16-morning.json (Latent.Space MEDIUM "React for Agents: Astro Creator Brings Hooks to his Meta-Harness, Flue")*

## Key Facts

- **Creator**: Fred Schott (Astro framework creator; Astro was acquired by [[cloudflare]])
- **Substrate**: built on top of **Pi**, an open-source minimal harness
- **API paradigm**: React-style Agent Hooks — re-renders on every turn
- **Built-in hooks**: 16 (including `useSkill()`, `useTool()`, `useSubagent()`); custom hooks supported
- **Distribution**: open source
- **Positioning**: host-portable meta-harness; direct competitor to [[vercel-eve]]
- **Use cases**: support bots, triage bots, dynamic agents that adapt to user needs / situations
- **Central thesis**: agents are defined by their harness, not by the model

## Open Questions

- License (MIT? Apache?)
- Repo URL and concrete first-party documentation surface
- Model support — bring-your-own vs curated set
- Comparison against [[deepseek-harness]] plugin-first architecture on the concrete hook-vs-plugin developer-ergonomics axis
- Concrete adoption examples beyond Schott's demos
- Cloudflare-tier hosting integration given Schott's employment context

## Sources

- data/summaries/2026-08-16-morning.json (Latent.Space MEDIUM "React for Agents: Astro Creator Brings Hooks to his Meta-Harness, Flue" — Flue 2 first stable release + React-style Agent Hooks + 16 built-in hooks including `useSkill()`, `useTool()`, `useSubagent()` + Pi minimal-harness substrate + re-renders on every turn + competitor to Vercel eve + host portability focus + agent-defined-by-harness thesis + Bret Taylor commentary)
