---
name: FoldRun
description: Agentic interface for protein structure prediction — packages a specialized scientific workflow behind an agent; canonical Google [[a2a-protocol]] scientific-computing example
type: product
---

# FoldRun

> **Type**: product
> **First mentioned**: 2026-09-21-evening
> **Last updated**: 2026-09-21-evening
> **Status**: active
> **Related**: [[a2a-protocol]], [[google]], [[gemini-enterprise]], [[agent-frameworks]]

## Summary

**FoldRun** is an agentic interface for protein structure prediction that packages the specialized workflow — traditionally requiring custom compute, specialized code, and expert-only invocation — behind a natural-language agent. As Google's canonical scientific-computing example of the [[a2a-protocol]] Agent2Agent standard, FoldRun can be added to any A2A-compatible environment (e.g., Gemini Enterprise or Gemini CLI) and delegated tasks by other agents through natural language, without custom glue code between them.

The design pattern matters because it demonstrates that A2A can host *long-running scientific tasks that require dynamic decision-making*, not just simple message-passing. FoldRun's role in the A2A ecosystem also positions structural biology / protein-folding tasks as accessible via an agent-native workflow — a substrate that competes with domain-specific tools like AlphaFold-adjacent UIs and structural-bio SaaS.

## Timeline

- **2026-09-21-evening**: **FoldRun canonical Google-highlighted scientific-computing [[a2a-protocol]] example anchor** — first-in-wiki *concrete named-scientific-domain A2A-deployed-agent canonical anchor* on the emerging Agent2Agent substrate. Hello, World! MEDIUM cycle-headline *"How Google's A2A Is Changing How AI Agents Collaborate?"*: *"A2A is demonstrated through FoldRun, an agentic interface for protein structure prediction, which packages the specialized workflow behind an agent"* + *"FoldRun can be added to an A2A-compatible environment, such as Gemini Enterprise or Gemini CLI, and can handle long-running tasks that require dynamic decision-making"*. researchFindings.additionalContext canonicalizes: *"Google highlights use cases such as scientific computing (e.g., the Foldrun structure-prediction agent plugged into A2A so tasks can be delegated via natural language without custom glue code)"*. First-in-wiki: (a) FoldRun named-agent canonical anchor + (b) protein-structure-prediction agent-native workflow-packaging canonical anchor + (c) long-running-tasks-with-dynamic-decision-making concrete-scope canonical anchor on A2A substrate + (d) natural-language-task-delegation-without-custom-glue-code concrete-integration-primitive canonical anchor on A2A. Structurally significant — canonicalizes A2A as *cross-domain substrate operator* (commerce + enterprise-data + IT/DevOps + telecom + regulated-environments + scientific-computing), and canonicalizes FoldRun as *A2A-native scientific-computing agent-tier reference example*. See [[a2a-protocol]] + [[google]] + [[gemini-enterprise]] — *source: data/summaries/2026-09-21-evening.json (Hello, World! MEDIUM "How Google's A2A Is Changing How AI Agents Collaborate?"; researchFindings.additionalContext for Google (A2A and broader AI/ML initiatives))*

## Key Facts

- **Domain**: Protein structure prediction (scientific computing)
- **Interface**: Agentic — packages specialized workflow behind an agent so callers use natural language, not code
- **Substrate**: [[a2a-protocol]] (Agent2Agent) native
- **Integration surface**: Gemini Enterprise, Gemini CLI, any A2A-compatible environment
- **Task profile**: Long-running with dynamic decision-making (not one-shot message-passing)
- **Delegation model**: Client agent formulates a task → FoldRun executes as remote agent, using its own tools and internal state without exposing them to caller

## Open Questions

- Vendor/authorship — is FoldRun built by Google or by a partner and highlighted by Google as an A2A reference?
- Underlying structural-biology model — AlphaFold-adjacent? Independent?
- Pricing model, latency profile, and typical compute cost per prediction
- Overlap with existing structural-biology tools and whether FoldRun replaces or augments them
- Whether FoldRun exposes intermediate reasoning steps (structure candidates, confidence scores) or only final predictions

## Sources

- data/summaries/2026-09-21-evening.json (Hello, World! MEDIUM "How Google's A2A Is Changing How AI Agents Collaborate?"; researchFindings.additionalContext for Google (A2A and broader AI/ML initiatives))
