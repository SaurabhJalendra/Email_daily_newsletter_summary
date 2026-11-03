---
name: Pando
description: OpenAI's horizontally scalable Git backend for its monorepo, announced Nov 2 2026 — Git-client-compatible, ~5× lower median push latency, serves ~1 PB of Git data/day, built for AI-agent-driven development scale
type: product
---

# Pando

> **Type**: product
> **Vendor**: [[openai]]
> **First mentioned**: 2026-11-03-evening
> **Last updated**: 2026-11-03-evening (created)
> **Status**: in production internally (powers OpenAI's monorepo); not open source but OpenAI says it is exploring ways to share underlying technology
> **Related**: [[openai]], [[openai-codex]], [[ai-native-sdlc]], [[software-factories]], [[the-git-forge]], [[github-agent-hq]]

## Summary

**Pando** is OpenAI's custom Git-repository backend, announced in its engineering post *"Scaling Git at OpenAI"* on **November 2, 2026**. Pando preserves full compatibility with standard Git clients and workflows while supporting **horizontally scalable writes** and **high-throughput reads**. It now powers OpenAI's monorepo, has **reduced median push latency by nearly 5×**, and serves **almost 1 petabyte of Git data per day**.

The motivation is explicitly AI-agent-driven: OpenAI reports **quarterly commits to its monorepo rising more than 2,400%** compared with early 2024 as more developers and autonomous agents (notably [[openai-codex]]) work concurrently, and that conventional Git-backend reliability had **fallen below 90%** before Pando. OpenAI's choice to preserve Git compatibility — rather than ship a Git replacement — reads as a thesis that AI-era source control evolves through *scalable backends and agent-aware infrastructure* behind existing developer workflows, not through a new developer-facing system. Pando is not currently open source, though OpenAI says it is exploring ways to share the underlying technology.

Pando pairs structurally with [[the-git-forge]] (Anthropic's agent-oriented Git fork) as the two frontier-lab answers to the same problem — Anthropic rebuilt the developer-facing primitives; OpenAI rebuilt the server-side backend.

## Timeline

- **2026-11-03-evening**: **Created — OpenAI publishes *"Scaling Git at OpenAI"* on Nov 2 2026 announcing Pando — concrete-horizontally-scalable-writes + concrete-high-throughput-reads + concrete-Git-client-compatibility three-primitive canonical anchor + concrete ~5×-lower-median-push-latency + concrete ~1-PB-of-Git-data-per-day two-primitive canonical performance anchor + concrete >2,400%-commit-growth-vs-early-2024 + concrete <90%-pre-Pando-reliability two-primitive canonical motivation anchor + "not currently open source but exploring ways to share underlying technology" canonical availability anchor**. TLDR MEDIUM "Apple's home robot 🤖, OpenAI scales git 📈, open source value 👨‍💻": *"OpenAI has developed a new backend for Git repositories called Pando, which supports horizontally scalable writes and high-throughput reads while preserving compatibility with standard Git clients. Pando has reduced median push latency by nearly 5x and serves almost 1 petabyte of Git data per day"*. researchFindings.additionalContext (OpenAI + Git): *"Pando now powers OpenAI's monorepo, reduced median push latency by nearly fivefold, and serves nearly one petabyte of Git data per day"* + *"quarterly commits to its monorepo were expected to rise more than 2,400% compared with early 2024, while conventional Git-backend reliability had fallen below 90% before Pando"* + *"Pando is not currently open source, although OpenAI said it is exploring ways to share underlying technology"*. See [[openai]] + [[ai-native-sdlc]] + [[openai-codex]] + [[the-git-forge]] — *source: data/summaries/2026-11-03-evening.json (TLDR MEDIUM "Apple's home robot 🤖, OpenAI scales git 📈, open source value 👨‍💻"; Top Story #3; researchFindings.additionalContext — OpenAI + Git; OpenAI "Scaling Git at OpenAI" (November 2, 2026); The New Stack "OpenAI built itself a new Git backend, too" (November 3, 2026))*

## Key Facts

- **Vendor**: [[openai]]
- **Launch post**: *"Scaling Git at OpenAI"*, published **2026-11-02**
- **Role**: Server-side backend for Git repositories, powers OpenAI's monorepo
- **Compatibility**: Preserves full compatibility with standard Git clients and workflows
- **Architecture**: Horizontally scalable writes + high-throughput reads
- **Measured gain**: ~5× lower median push latency
- **Scale**: Serves nearly 1 petabyte of Git data per day
- **Load driver**: Quarterly commits to the monorepo are up more than 2,400% vs early 2024, largely attributed to [[openai-codex]] + more AI agents working concurrently
- **Reliability motivation**: Conventional Git-backend reliability had fallen below 90% at OpenAI before Pando
- **Open-source status**: Not open source; OpenAI says it is exploring ways to share the underlying technology

## Open Questions

- Architecture detail — sharded object store, custom replication protocol, FoundationDB-tier metadata layer?
- Does Pando also change `git fetch` / `git clone` performance for very large repos, or only push/write paths?
- How does Pando interact with [[openai-codex]] agent concurrency on branches (merge-pressure mitigation, conflict resolution)?
- Any benchmark comparison to GitLab-at-scale, Google's internal Piper/CitC, or Meta's Mononoke/Sapling?
- Will OpenAI publish a reference implementation or a hosted offering, or will the "sharing" be a paper/standard?
- Does Pando replace the entire Git server stack, or does it sit alongside a standard Git server (hybrid)?

## Sources

- data/summaries/2026-11-03-evening.json (TLDR MEDIUM "Apple's home robot 🤖, OpenAI scales git 📈, open source value 👨‍💻"; Top Story #3; researchFindings.additionalContext — OpenAI + Git; attribution OpenAI "Scaling Git at OpenAI" November 2 2026 + The New Stack "OpenAI built itself a new Git backend, too" November 3 2026)
