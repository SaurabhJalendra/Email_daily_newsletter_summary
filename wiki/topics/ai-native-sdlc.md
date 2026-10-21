---
name: AI-Native SDLC
description: Software-delivery model in which AI agents and automation are embedded across the full lifecycle — requirements, planning, design, build, test, review, deploy, operations, handoff — with humans setting intent and approving key decisions
type: topic
---

# AI-Native SDLC

> **Type**: topic
> **First mentioned**: 2026-10-21-evening
> **Last updated**: 2026-10-21-evening
> **Status**: active
> **Related**: [[tenex]], [[agent-frameworks]], [[software-factories]], [[claude-code]], [[recursive-self-improvement]], [[enterprise-ai]]

## Summary

The **AI-Native SDLC** reframes software delivery so that AI agents and automation are embedded across the full lifecycle rather than invoked only as coding copilots. Humans set intent and approve key decisions; agents execute well-scoped work and produce evidence. The lifecycle typically includes requirements and context-building, planning, design review, build, demos, testing and QA, shipping, operations, and hypercare/handoff — with project context, plans, decisions, acceptance criteria, and status treated as shared, version-controlled artifacts that humans and agents operate on together.

The term was canonicalized in a Tenex August 2026 blog post, "Building an AI-Native SDLC," and surfaced on Latent.Space on 2026-10-21 as the operating model behind [[tenex]]'s **MetaHarness** — a system combining reusable agent skills, project documents, a CLI, and integrations with GitHub/Linear/Jira. A sibling concept, "Citizen SDLC," extends the pattern to software created by nontechnical employees and governed for production use. The pattern pairs structurally with [[software-factories]] (Zach Lloyd / Warp) and the multi-agent coding substrate seen in [[claude-code]], Codex, and [[antigravity-2]], but is distinct in that AI-Native SDLC is a *process-and-collaboration* model rather than a specific agent harness or IDE.

## Timeline

- **2026-10-21-evening**: Latent.Space episode canonicalizes AI-Native SDLC as [[tenex]]'s operating model + MetaHarness implementation + eight-stage lifecycle (requirements/access → planning → design review → build → demos → testing/QA → shipping → hypercare/handoff) + Fortune 2000 enterprise target + "Citizen SDLC" extension for nontechnical employees. First-in-wiki standalone topic-page anchor. — *source: data/summaries/2026-10-21-evening.json (Latent.Space MEDIUM)*
- **2026-08-05**: Tenex "Building an AI-Native SDLC" blog post publishes the eight-stage definition (per Latent.Space source attribution). — *source: data/summaries/2026-10-21-evening.json (researchFindings.additionalContext)*

## Key Facts

- Scope: full software lifecycle (requirements → planning → design → build → test → review → ship → operate → handoff) — not just coding
- Separation of concerns: humans set intent + approve key decisions; agents execute scoped work + produce evidence
- Shared-artifact substrate: context, plans, decisions, acceptance criteria, and status are version-controlled and shared between humans and agents
- First concrete named implementation: [[tenex]] **MetaHarness** (reusable agent skills + project documents + CLI + GitHub/Linear integrations)
- Sibling pattern: "Citizen SDLC" — extends AI-Native SDLC to nontechnical employees authoring production software with governance
- Related research: Atlassian AI-native SDLC research (per Latent.Space source attribution)

## Open Questions

- How does AI-Native SDLC compare empirically to AI-augmented-but-still-human-authored SDLC on delivery speed, defect rate, and compliance?
- Which pieces of AI-Native SDLC are generalizable patterns versus Tenex-specific implementation choices (e.g. story-point output-based engineer compensation)?
- How are access control, auditability, and incident response structured when agents own more of the lifecycle?
- Will frontier labs or hyperscalers productize an AI-Native SDLC platform, or does it stay as consulting-plus-internal-tools (Tenex, Ode with Anthropic)?

## Sources

- data/summaries/2026-10-21-evening.json (Latent.Space MEDIUM "AI for the Fortune 2000: How Tenex Builds an AI-Native SDLC — Alex Lieberman & CJ Hess"; researchFindings.additionalContext — Tenex + AI-Native SDLC)
