---
name: Graph Engineering
description: Named developer discipline of designing agent systems as knowledge/orchestration graphs — typed edges, bounded work, verification, replay, split of orchestration (temporary) vs memory (durable) graphs
type: topic
---

# Graph Engineering

> **Type**: topic
> **First mentioned**: 2026-07-24-evening
> **Last updated**: 2026-07-24-evening (**First publicly framed *graph engineering* as a named developer discipline applied to agent systems in this wiki**. Harnoor Singh (Singh in USA blog) HIGH: ***"Origin of Graph Engineering (Roadmap to Building Production-Grade Agents)"*** — ***"Agent systems are moving from a single loop to networks of workers, routers, tools, and verifiers"***. First publicly framed on this cycle: (a) ***graph engineering* as a named discipline** sibling to [[loop-engineering]] / prompt-engineering / context-engineering / harness-engineering — extends the mid-2026 developer-discipline vocabulary cohort with a *graph-centric* framing; (b) **Seven-stage roadmap for building production-grade agents**: (1) Building a Deterministic DAG, (2) Earning the Loop, (3) Building a Typed DAG, (4) Bounding the Fan-Out, (5) Proving Cycles Stop, (6) Verifying Against Reality, (7) Operating It — each stage gated before proceeding to the next; (c) **Split between orchestration graphs (temporary) and memory graphs (durable)** — orchestration graphs govern how work is routed and state is shared inside a single run; memory graphs preserve entities, facts, sources, relationships, and time across runs; first publicly framed *orchestration-vs-memory-graph binary* in this wiki; (d) **Origin-of-discipline framing** — attributes graph engineering's bar to *"twenty years of experience in non-AI graph systems"* (identity/access management + fraud detection + network operations), naming *typed edges + bounded work + independent verification + replay + convergence + durable state + published losses* as inherited primitives; (e) **HydraDB + HydraBrain** named as substrate references alongside Neo4j history + official GraphRAG package. Structurally significant four ways: (i) **discipline-name graduation** — extends the mid-2026 *"agent = model + harness"* Shunyu Yao equation (see [[agent-frameworks]] 2026-07-11-morning) into a *graph-centric harness-substrate framing* — graph engineering describes the *shape* of the harness in a way [[loop-engineering]] doesn't; (ii) **operator-tier discipline vocabulary** — the roadmap's emphasis on *"failure injection + replay + convergence + published losses"* imports SRE/observability vocabulary into agent-system design, structurally parallel to how [[loop-engineering]] imported testing/CI vocabulary and [[software-factories]] imported manufacturing vocabulary; (iii) **memory graphs vs vector RAG** — the *"memory graphs are durable + preserve entities + facts + sources + relationships + time"* framing positions graph-tier memory as a canonical alternative to the vector-DB-tier memory pattern that has dominated 2024-25 RAG architectures, structurally parallel to the researchFindings.additionalContext claim that *"organizations like Microsoft, Stanford, and Anthropic are shifting from traditional RAG to graph-centric architectures, reporting accuracy gains of around 18% and token cost reductions of up to 85%"*; (iv) **HydraDB + HydraBrain named substrate anchor** — surfaces graph-tier infrastructure as a distinct product category alongside Neo4j / GraphRAG. Body-recovery items: (a) HydraDB architecture + pricing + open-source posture, (b) HydraBrain positioning vs HydraDB, (c) the seven-stage roadmap concrete gates (what test/artifact/metric passes each gate), (d) whether *"orchestration graphs (temporary)"* implicitly names LangGraph / [[vercel-eve]] / [[claude-code]] Dynamic Workflows as canonical implementations, (e) whether Anthropic/Stanford/Microsoft graph-RAG 18%-accuracy / 85%-cost-reduction claims have named benchmarks. See [[agent-frameworks]] + [[loop-engineering]] + [[software-factories]] + [[model-context-protocol]] — *source: data/summaries/2026-07-24-evening.json (Singh in USA blog HIGH "Origin of Graph Engineering (Roadmap to Building Production-Grade Agents)"; researchFindings.additionalContext — Graph Engineering)*)
> **Status**: active
> **Related**: [[agent-frameworks]], [[loop-engineering]], [[software-factories]], [[self-harness]], [[harnessx]], [[recursive-self-improvement]], [[model-context-protocol]], [[vercel-eve]], [[claude-code]], [[ai-memory]]

## Summary

Graph engineering is a named developer discipline for building production-grade AI agent systems as networks of workers, routers, tools, and verifiers organized around explicit graphs — rather than as a single LLM-plus-prompt loop. It borrows primitives from twenty years of non-AI graph systems (identity/access management, fraud detection, network operations): typed edges, bounded work, independent verification, replay, convergence, durable state, and published losses. The discipline distinguishes two graph classes: **orchestration graphs** (temporary — govern how work is routed and state is shared inside a single run) and **memory graphs** (durable — preserve entities, facts, sources, relationships, and time across runs, functioning as long-term memory).

The origin framing surfaces mid-2026 via Harnoor Singh's *"Origin of Graph Engineering (Roadmap to Building Production-Grade Agents)"* essay (Singh in USA blog / Substack), which lays out a seven-stage roadmap (Deterministic DAG → Earning the Loop → Typed DAG → Bounding Fan-Out → Proving Cycles Stop → Verifying Against Reality → Operating It) with a gate between each stage. Named substrate references include Neo4j, the official GraphRAG package, HydraDB, and HydraBrain. The framing sits alongside [[loop-engineering]] and [[software-factories]] as another mid-2026 developer-discipline vocabulary graduation moment.

## Timeline

- **2026-07-24-evening**: **First publicly framed *graph engineering* as a named developer discipline applied to agent systems** — Harnoor Singh (Singh in USA blog) HIGH "Origin of Graph Engineering (Roadmap to Building Production-Grade Agents)": *"Agent systems are moving from a single loop to networks of workers, routers, tools, and verifiers"*. Named seven-stage roadmap + orchestration-vs-memory graph binary + HydraDB/HydraBrain named substrate references + bar set by twenty years of non-AI graph-systems experience (identity/access + fraud detection + network operations). Sibling to [[loop-engineering]] / prompt-engineering / context-engineering / harness-engineering discipline cohort. researchFindings.additionalContext frames the broader industry shift: *"organizations like Microsoft, Stanford, and Anthropic are shifting from traditional RAG to graph-centric architectures, reporting accuracy gains of around 18% and token cost reductions of up to 85% when using graph-engineered knowledge bases instead of plain text retrieval"* — *source: data/summaries/2026-07-24-evening.json (Singh in USA blog HIGH "Origin of Graph Engineering (Roadmap to Building Production-Grade Agents)"; researchFindings.additionalContext — Graph Engineering)*

## Key Facts

- **Core framing**: agent systems as networks of workers + routers + tools + verifiers (not single loops)
- **Seven-stage roadmap**: Deterministic DAG → Earning the Loop → Typed DAG → Bounding Fan-Out → Proving Cycles Stop → Verifying Against Reality → Operating It
- **Two graph classes**: orchestration graphs (temporary, per-run) + memory graphs (durable, cross-run)
- **Inherited primitives** (from non-AI graph systems): typed edges + bounded work + independent verification + replay + convergence + durable state + published losses
- **Origin domains**: identity/access management + fraud detection + network operations
- **Named substrate references**: Neo4j history + official GraphRAG package + HydraDB + HydraBrain
- **Author of the origin essay**: Harnoor Singh (Singh in USA blog / Substack, singhinusa.substack.com)
- **Reported industry ROI** (per researchFindings.additionalContext): ~18% accuracy gain + up to 85% token cost reduction vs plain-text RAG (Microsoft / Stanford / Anthropic-reported)

## Open Questions

- What are the concrete pass-gates on each of the seven stages (specific artifacts, tests, metrics)?
- What is HydraDB's architecture and pricing? Open-source or proprietary?
- Does HydraBrain sit on top of HydraDB, or is it a separate product?
- Are LangGraph / [[vercel-eve]] / [[claude-code]] Dynamic Workflows canonical implementations of the *orchestration graph* class, or does graph engineering imply a distinct substrate?
- Which named benchmarks back the 18% accuracy / 85% cost reduction claims?
- How does graph engineering interact with [[model-context-protocol]] — does MCP become the tool-invocation edge type in a typed DAG?
- Is Harnoor Singh planning follow-up posts detailing each of the seven stages, or is this a single-post framing?

## Sources

- data/summaries/2026-07-24-evening.json (Singh in USA blog HIGH "Origin of Graph Engineering (Roadmap to Building Production-Grade Agents)"; researchFindings.additionalContext — Graph Engineering + Production-Grade AI Agents)
