---
name: TREX
description: Greptile's runtime-validation extension for AI code review — autonomously writes and executes tests for each PR in a dynamic sandbox, returning screenshots + logs as concrete proof of failure; the runtime validation layer beneath any coding agent
type: product
---

# TREX

> **Type**: product
> **Vendor**: [[greptile]]
> **First mentioned**: 2026-08-02-morning
> **Last updated**: 2026-08-02-morning (**Created — Greptile's TREX runtime validation extension anchors AlphaSignal MEDIUM cycle-headline *"The missing layer in AI coding: runtime validation"* and daily-digest Top Story #4**. AlphaSignal MEDIUM body: *"Greptile, a Y Combinator–backed AI code review platform, has introduced a new tool called TREX, which performs runtime validation by autonomously writing and running tests for each pull request in a sandbox, to tackle the bottleneck of trusting and validating generated or rapidly written code"* + *"TREX actively runs PR branches in a dynamic sandbox, executes interactions, and returns concrete proof of failure, such as screenshots and logs, to catch critical issues that static analysis misses, including runtime bugs, complex security vulnerabilities, and cross-service logical bugs"* + *"teams relying on this automated validation layer merge pull requests up to 4x faster and catch 3x more production-blocking bugs than those relying on static review alone"*. researchFindings adds Greptile's TREX detail: *"spinning up services, dev servers, mocks, browser agents, and API calls to surface bugs that only appear when the code actually runs"* + *"per-review pricing model (with higher credit usage for TREX reviews) rolled out in March 2026 to reflect the added cost of runtime validation"*. Structurally significant three ways: (i) **First publicly framed *runtime-validation as first-class review-tier product surface* in this wiki** — sharpens the [[software-factories]] triage → spec → implement → **review → verify** → ship → monitor loop by productizing the *verify* stage as an explicit dynamic-sandbox execution surface; sits alongside [[claude-code-security]] + [[codex-security]] as *AI-code-review substrate* but occupies the *runtime-tier* rather than *static-tier* review slot; (ii) **"Screenshots and logs" as concrete-proof-of-failure output-artifact anchor** — first publicly framed *evidence-artifact-based runtime-validation review* pattern in this wiki; extends the [[cursor]] + [[claude-code]] + Cognition Devin agent-tier output-artifact surfaces from *code-diffs + test-results* into *browser-agent screenshots + service-execution logs* multimodal proof-of-failure artifacts; (iii) **"4× faster merges + 3× more production-blocking bugs" concrete productivity anchor** — quantifies the runtime-validation-layer productivity delta for enterprise adoption pitches; positions TREX as *validation-layer complement to any coding-agent* rather than *coding-agent competitor*. Reads as a *coding-agent-agnostic validation substrate* — TREX sits *under* Claude Code / Codex / Cursor / Devin outputs, running the tests those agents can't reliably run themselves; likely to be adopted by frontier-lab-tier coding agents as a *third-party runtime-eval dependency* over the coming cycles. See [[greptile]] + [[codex-security]] + [[claude-code-security]] + [[software-factories]] + [[loop-engineering]] — *source: data/summaries/2026-08-02-morning.json (AlphaSignal MEDIUM "🔍 The missing layer in AI coding: runtime validation")*)
> **Status**: active (announced Aug 2026; per-review pricing model + 14-day free trial)
> **Related**: [[greptile]], [[codex-security]], [[claude-code-security]], [[software-factories]], [[loop-engineering]], [[ai-cybersecurity-arms-race]], [[cursor]], [[claude-code]]

## Summary

TREX is [[greptile]]'s runtime-validation extension to its Y-Combinator-backed AI code review platform, positioned as the *"missing layer in AI coding"* — an autonomous test-generation-and-execution agent that runs each pull request inside a dynamic sandbox, executing interactions and returning concrete proof of failure (screenshots + logs). Where static analysis catches syntactic issues and lint violations, TREX targets *runtime* bugs: complex security vulnerabilities, cross-service logical bugs, and behaviors that only manifest when code is actually executed. TREX spins up dependent services, dev servers, mocks, browser agents, and API calls to reproduce production-like conditions.

Greptile's positioning frames TREX as a *coding-agent-agnostic validation layer* — a substrate that sits under Claude Code, Codex, Cursor, Devin, and human PR authors alike, catching bugs the generator layer misses. Benchmarks Greptile publishes claim teams using TREX merge PRs up to **4× faster** and catch **3× more production-blocking bugs** than teams relying on static review alone. TREX runs on a per-review pricing model that reflects the higher compute cost of dynamic sandbox execution (rolled out March 2026); enterprise controls include self-hosted, air-gapped deployments, SOC 2 Type II compliance, SSO, and comprehensive audit logs.

## Timeline

- **2026-08-02-morning**: **Created — TREX announced as Greptile's runtime-validation extension; AlphaSignal MEDIUM cycle-headline + daily-digest Top Story #4**. AlphaSignal frames it as *"the missing layer in AI coding: runtime validation"*, with concrete productivity anchors: 4× faster merges + 3× more production-blocking bugs caught vs static-only review. Greptile has been used at Brex to navigate their monorepo with 30% faster feature shipping, and has caught bugs at `workos/oagen` and `hashgraph-online/hol-guard`. 14-day free trial + per-review pricing model reflecting runtime-validation compute cost — *source: data/summaries/2026-08-02-morning.json (AlphaSignal MEDIUM "🔍 The missing layer in AI coding: runtime validation")*

## Key Facts

- Vendor: [[greptile]] (Y Combinator–backed AI code review platform)
- Category: runtime validation / dynamic-sandbox PR testing
- Workflow: autonomously write tests → spin up sandbox with services/dev-servers/mocks/browser-agents/API-calls → execute interactions → return screenshots + logs as proof of failure
- Failure modes caught: runtime bugs, complex security vulnerabilities, cross-service logical bugs (bugs static analysis misses)
- Productivity anchors: **4× faster PR merges** + **3× more production-blocking bugs** vs static-only review
- Pricing: per-review model (higher credit usage than static reviews to reflect sandbox compute); 14-day free trial
- Enterprise controls: self-hosted air-gapped deployments, SOC 2 Type II, SSO, audit logs
- Positioning: coding-agent-agnostic runtime-validation substrate — sits under any generator (human or AI)

## Open Questions

- Concrete comparison vs Cognition Devin's autonomous-testing loop + [[claude-code]] test-generation + Codex CI integration
- Language + framework coverage (does TREX handle non-JS/Python stacks? mobile? embedded?)
- Sandbox resource limits + max concurrent PR execution
- Whether TREX findings become training signal for upstream coding-agent RL loops
- Adoption by frontier-lab coding agents as a third-party runtime-eval dependency

## Sources

- data/summaries/2026-08-02-morning.json (AlphaSignal MEDIUM "🔍 The missing layer in AI coding: runtime validation" — Greptile introduces TREX runtime validation + autonomous test-writing in sandbox + concrete proof of failure with screenshots and logs + catches runtime bugs, complex security vulns, cross-service logical bugs + 4× faster merges + 3× more production-blocking bugs caught + per-review pricing model + 14-day free trial; researchFindings.additionalContext for Greptile — TREX spins up services, dev servers, mocks, browser agents, API calls; per-review pricing rolled out March 2026)
