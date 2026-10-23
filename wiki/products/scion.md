---
name: Scion
description: Anthropic's custom internal source control system; reported Oct 2026 as equivalent in scale to the custom VCS of a 35,000–70,000-staff company (Google/Meta tier)
type: product
---

# Scion

> **Type**: product
> **First mentioned**: 2026-10-23-evening
> **Last updated**: 2026-10-23-evening
> **Status**: active
> **Related**: [[anthropic]], [[claude-code]], [[software-factories]], [[recursive-self-improvement]]

## Summary

Scion is Anthropic's custom-built internal source control system, surfaced publicly in October 2026 via a Pragmatic Engineer "Pulse" writeup. The system was built because Anthropic's internal code-output volume — amplified by heavy use of [[claude-code]] and autonomous coding agents — reportedly reaches the scale of a 35,000–70,000-staff engineering organization, comparable in magnitude to the custom VCS stacks that Google (Piper) and Meta (Mercurial-at-scale) run internally. The disclosure is structurally significant because Anthropic is a <2,000-person company justifying hyperscaler-tier tooling on the basis of AI-generated-code volume rather than headcount — making Scion a concrete datapoint for how [[recursive-self-improvement]] and [[software-factories]] change the shape of the internal engineering stack.

## Timeline

- **2026-10-23-evening**: TLDR MEDIUM lands first public reference to Scion as Anthropic's own source control system; frames it as *"equivalent to that of a company with 35,000 to 70,000 staff, similar to Google and Meta's custom solutions"*. Body link: blog.pragmaticengineer.com/the-pulse-anthropic-builds-its-own-source-control-system — *source: data/summaries/2026-10-23-evening.json (TLDR MEDIUM "OpenAI Signal leaks 💬, Alexa Tablet 💻, formal software verification 👨‍💻")*

## Key Facts

- Vendor: [[anthropic]] (internal, not publicly released)
- Category: Custom source control system (SCM/VCS)
- Scale justification: Code-output volume equivalent to a 35,000–70,000-staff engineering org
- Comparator tier: Google Piper, Meta's internal Mercurial fork
- Primary driver: AI-generated code volume from [[claude-code]] and internal coding agents

## Open Questions

- Is Scion built on top of an existing VCS (git, Mercurial) or wholly from scratch?
- Does Scion handle code review, dependency management, or CI integration, or only version control proper?
- Will Anthropic open-source or productize Scion externally, or keep it internal?
- Does Scion play a role in the [[claude-code]] team's continuous-review + automated-verifications + multi-layer-checks internal process (2026-10-20-morning)?
- How does Scion relate to the [[dynamic-workflows]] + [[claude-managed-agents]] orchestration substrate?

## Sources

- data/summaries/2026-10-23-evening.json (newsletter: TLDR — OpenAI Signal leaks 💬, Alexa Tablet 💻, formal software verification 👨‍💻)
