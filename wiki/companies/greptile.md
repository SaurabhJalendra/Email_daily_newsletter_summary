---
name: Greptile
description: Y Combinator–backed AI code review platform — full-codebase graph indexing + swarm of specialized AI reviewers + TREX runtime-validation extension; positioned as coding-agent-agnostic validation substrate
type: company
---

# Greptile

> **Type**: company
> **First mentioned**: 2026-08-02-morning
> **Last updated**: 2026-08-02-morning (**Created — Greptile anchors AlphaSignal MEDIUM cycle-headline via [[trex]] runtime-validation launch + daily-digest Top Story #4**. AlphaSignal MEDIUM body: *"Greptile, a Y Combinator–backed AI code review platform, has introduced a new tool called TREX, which performs runtime validation by autonomously writing and running tests for each pull request in a sandbox"* + *"Greptile's core reading layer catches subtle issues that diff-only AI tools miss by mapping the entire repository, extracting and mapping directories, files, functions, variables, and classes, and continuously learning and adapting to the team's undocumented preferences and engineering standards"* + *"Greptile has been used by companies like Brex to navigate their massive monorepo with high precision and low noise, resulting in 30% faster feature shipping, and has caught bugs and security vulnerabilities in various repositories, including 'workos/oagen' and 'hashgraph-online/hol-guard'"* + *"self-hosted, air-gapped deployments, is SOC 2 Type II compliant, and includes standard enterprise controls like SSO and comprehensive audit logs"*. researchFindings adds: *"Greptile is a Y Combinator–backed AI code review platform that plugs into GitHub and GitLab to review pull requests using full codebase context, rather than just the diff"* + *"constructs a graph index of the repository—mapping files, functions, and dependencies—and then uses a swarm of specialized AI agents to analyze logic, security, style, and architectural impact across multiple files before code is merged"* + *"Greptile learns team-specific conventions from past PR comments and from custom natural-language rules, becoming a consistent, vendor-agnostic validation layer that can sit under any coding agent or AI pair programmer"*. Structurally significant three ways: (i) **First publicly framed *coding-agent-agnostic validation substrate* company in this wiki** — Greptile positions itself as the *validation layer* that sits *under* Claude Code / Codex / Cursor / Devin, rather than competing with them at the *generation layer*; this is a structurally novel *complementary-tier* posture in the mid-2026 AI-coding landscape where most vendors compete head-on at the generation tier; (ii) **Graph-index + swarm-of-specialized-agents architectural pattern** — Greptile's *graph index of files+functions+dependencies* + *swarm of specialized AI agents (logic + security + style + architectural)* extends the [[graph-engineering]] discipline into the *AI-code-review* vertical; sits alongside [[cursor]]-agent-team's minisqlite + Cognition Devin whole-codebase-reasoning + Anthropic Claude Research multi-agent orchestration as the *specialized-agent-swarm-over-graph-substrate* architectural cohort; (iii) **Brex 30% faster feature shipping + `workos/oagen` + `hashgraph-online/hol-guard` concrete customer + bug-caught anchors** — first publicly framed *concrete-enterprise-productivity + concrete-open-source-repo bug-catch* dual-anchor for an AI-code-review vendor in this wiki; validates the *AI-code-review as production-tier substrate* thesis. See [[trex]] (NEW) + [[codex-security]] + [[claude-code-security]] + [[cursor]] + [[software-factories]] — *source: data/summaries/2026-08-02-morning.json (AlphaSignal MEDIUM "🔍 The missing layer in AI coding: runtime validation")*)
> **Status**: active (Y Combinator–backed; TREX runtime-validation extension launched Aug 2026)
> **Related**: [[trex]], [[codex-security]], [[claude-code-security]], [[cursor]], [[cognition]], [[software-factories]], [[loop-engineering]], [[graph-engineering]], [[ai-cybersecurity-arms-race]]

## Summary

Greptile is a Y Combinator–backed AI code review platform that plugs into GitHub and GitLab to review pull requests using **full codebase context**, rather than just the diff. It constructs a **graph index** of the repository — mapping directories, files, functions, variables, classes, and dependencies — and dispatches a **swarm of specialized AI agents** (logic, security, style, architectural impact) to analyze changes across files before merge. Beyond baseline review, Greptile learns team-specific conventions from past PR comments and custom natural-language rules, positioning itself as a **coding-agent-agnostic validation layer** that sits under any generator (human or AI).

In August 2026 Greptile launched [[trex]], a runtime-validation extension that autonomously writes and executes tests for each PR in a dynamic sandbox — spinning up services, dev servers, mocks, browser agents, and API calls — returning screenshots and logs as concrete proof of failure. Greptile's benchmarks claim teams using TREX merge PRs **4× faster** and catch **3× more production-blocking bugs** than teams relying on static review alone. Named enterprise customers include **Brex** (monorepo navigation → 30% faster feature shipping); public bug-catches include `workos/oagen` and `hashgraph-online/hol-guard`. Enterprise controls include self-hosted, air-gapped deployments, SOC 2 Type II compliance, SSO, and comprehensive audit logs.

## Timeline

- **2026-08-02-morning**: **Created — Greptile launches [[trex]] runtime-validation extension; AlphaSignal MEDIUM cycle-headline + daily-digest Top Story #4**. Positioned as *"the missing layer in AI coding"* — runtime validation via autonomous test writing + sandbox execution + screenshots/logs proof-of-failure. Core reading layer already maps entire repositories and learns team-specific conventions; TREX adds the runtime tier. Enterprise anchors: Brex monorepo → 30% faster shipping; open-source repo bug catches at `workos/oagen` and `hashgraph-online/hol-guard`; SOC 2 Type II + SSO + self-hosted air-gapped deployment options — *source: data/summaries/2026-08-02-morning.json (AlphaSignal MEDIUM "🔍 The missing layer in AI coding: runtime validation")*

## Key Facts

- Vendor / founding: Y Combinator–backed
- Category: AI code review + runtime validation
- Integration surface: GitHub + GitLab (PR-level hook)
- Core architecture: **graph index** of repository (files + functions + variables + classes + dependencies) + **swarm of specialized AI agents** (logic + security + style + architectural)
- Learning loop: adapts to team-specific undocumented conventions via past PR comments + custom natural-language rules
- Products: core review platform + [[trex]] runtime-validation extension (Aug 2026)
- Positioning: coding-agent-agnostic validation substrate — sits under Claude Code / Codex / Cursor / Devin / human PRs
- Enterprise controls: self-hosted + air-gapped deployments, SOC 2 Type II, SSO, comprehensive audit logs
- Pricing: per-review model (with higher credit usage for TREX runtime reviews) — updated March 2026
- Named customer: **Brex** — massive monorepo navigation with high precision + low noise → 30% faster feature shipping
- Named public bug-catches: `workos/oagen`, `hashgraph-online/hol-guard`
- Productivity anchors (with TREX): **4× faster PR merges + 3× more production-blocking bugs** vs static-only review

## Open Questions

- Total funding raised + valuation tier
- Team + engineering headcount
- Named enterprise customers beyond Brex (defense/healthcare/financial-services framing implies but doesn't name)
- Language + framework coverage breadth (does the graph index handle non-JS/Python stacks?)
- Relationship to [[cursor]]'s internal agent-team review tooling + Cognition Devin's autonomous testing loop
- Whether Greptile plans to expose the graph-index as a standalone API for third-party coding agents

## Sources

- data/summaries/2026-08-02-morning.json (AlphaSignal MEDIUM "🔍 The missing layer in AI coding: runtime validation" — Greptile Y Combinator–backed AI code review platform introduces TREX runtime validation + full-codebase graph index + specialized AI agent swarm + learns team-specific conventions + Brex 30% faster feature shipping + `workos/oagen` + `hashgraph-online/hol-guard` bug catches + SOC 2 Type II + SSO + self-hosted air-gapped deployment + 4× faster merges + 3× more bugs caught with TREX; researchFindings.additionalContext for Greptile — graph index of repo, swarm of specialized AI agents, vendor-agnostic validation layer, per-review pricing model rolled out March 2026)
