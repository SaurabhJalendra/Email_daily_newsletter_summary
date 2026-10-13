---
name: Dynamic Workflows
description: Anthropic's Oct 2026 feature for Claude Managed Agents — multi-agent orchestration where Claude writes a plan + an orchestration program to launch sub-agents, collect results, and manage information flow for projects larger than a single agent or roster
type: product
---

# Dynamic Workflows

> **Type**: product
> **Vendor**: [[anthropic]]
> **First mentioned**: 2026-10-13-morning
> **Status**: launched (Claude Console; API-accessible)
> **Related**: [[anthropic]], [[claude-managed-agents]], [[claude-code]], [[agent-frameworks]], [[software-factories]], [[recursive-self-improvement]]

## Summary

Dynamic Workflows (also referred to as **"flows"**) is [[anthropic]]'s new feature for [[claude-managed-agents]], announced at AI Engineer New York 2026 by CJ Avilla and Harrison Stall (Members of Technical Staff). The feature coordinates multiple agents so Claude can tackle projects bigger than a single agent or roster without overwhelming developers. Drawing on lessons from Unix and Linux, the lead agent builds a plan, then Claude *writes an orchestration program* that launches sub-agents, collects their results, and manages information flow between them. Developers can introduce specialist sub-agents if the plan calls for them.

Dynamic Workflows is available via Claude Console (the developer-facing interface used to access Claude through the API). Anthropic frames the feature as more expensive than a single-agent approach but better suited to large tasks, and explicitly targets letting general users tackle scientific research projects at the Navier–Stokes-Millennium-Prize scale.

## Timeline

- **2026-10-13-morning**: **Launch anchor** — Latent.Space MEDIUM "How Anthropic's Dynamic Workflows Coordinate Claude Agents" covers the AI Engineer New York 2026 keynote by [[anthropic]] MTS CJ Avilla + Harrison Stall. Dynamic Workflows coordinate multiple agents for bigger projects; Claude writes an orchestration program to launch agents, collect results, and manage information flow; longer-running than a single agent or roster; developer can plug in specialist sub-agents; "flows" nickname; available in Claude Console; more expensive than single-agent runs; framed as enabling general users to tackle Navier–Stokes-tier scientific projects. — *source: data/summaries/2026-10-13-morning.json (Latent.Space MEDIUM "How Anthropic's Dynamic Workflows Coordinate Claude Agents")*

## Key Facts

- **Vendor**: [[anthropic]]
- **Platform**: [[claude-managed-agents]] (accessed through Claude Console / API)
- **Pattern**: lead agent writes a plan → Claude writes an orchestration program → that program launches sub-agents, collects results, and routes information flow
- **Nickname**: "flows"
- **Design inspiration**: Unix / Linux process orchestration
- **Positioning**: larger-than-single-agent, longer-than-single-roster projects (scientific research + complex engineering)
- **Cost tier**: more expensive than a single-agent approach; designed for big tasks
- **Public launch venue**: AI Engineer New York 2026 (announced "on Friday" per Latent.Space)
- **Speakers**: CJ Avilla + Harrison Stall (Members of Technical Staff, Anthropic)
- **Example use case cited**: Navier–Stokes Millennium Prize-scale scientific research

## Open Questions

- Concrete pricing delta vs single-agent and roster-of-agents tiers
- Programmatic API shape (how a developer declares a flow vs letting Claude author one)
- Interplay with Claude Code's existing sub-agent / "specialist" primitives
- Observability + replay tooling for the orchestration-program layer
- Default resource caps + max sub-agent fan-out
- Formal relationship to Claude Managed Agents' prior MCP-tunnels + outcomes + memory + scheduled-execution primitives

## Sources

- data/summaries/2026-10-13-morning.json (Latent.Space MEDIUM "How Anthropic's Dynamic Workflows Coordinate Claude Agents" — AI Engineer New York 2026 keynote; CJ Avilla + Harrison Stall; "flows" nickname; Claude writes orchestration program to launch + collect + route sub-agents; available in Claude Console; Navier–Stokes-tier framing)
