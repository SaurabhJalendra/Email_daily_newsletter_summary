---
name: Prompt Compression
description: Techniques for compressing long prompts into smaller representations while preserving task-relevant information — reduces context size, inference cost, and agent latency
type: topic
---

# Prompt Compression

> **Type**: topic
> **First mentioned**: 2026-09-05-evening (as canonical wiki topic; individual techniques appeared earlier)
> **Last updated**: 2026-09-05-evening
> **Status**: active
> **Related**: [[long-context-scaling]], [[agent-frameworks]], [[loop-engineering]]

## Summary

Prompt compression covers techniques for reducing the token footprint of long prompts *without losing task-relevant information* — a practical lever for driving down inference cost, keeping agent loops fast, and staying under context windows on long-running tasks. In September 2026, [[shopify]]'s exploration of **"gisting"** brought the technique back into wider newsletter coverage as an agent-runtime concern: agents that accumulate long context histories (tool traces, retrieved documents, multi-step reasoning) benefit disproportionately from prompt compression because their per-request context grows monotonically over the loop.

Related-but-distinct ideas: prompt caching (cache-tier discount on repeated prefixes — see [[claude-fable-5-1]]'s 75% cache-read discount), context distillation, memory-tier summarization ([[engram]] / [[chroma-foundation]]), and speculative decoding.

## Timeline

- **2026-09-05-evening**: **[[shopify]] exploring "gisting" — compress long prompts into smaller representations while keeping important information intact** — reduces context size, lowers inference cost, and makes AI agents faster. First publicly framed *"gisting" compress-long-prompts-into-smaller-representations* canonical anchor in this wiki, positioned specifically as an *AI-agent-latency + cost-reduction lever* — *source: data/summaries/2026-09-05-evening.json (Hello, World! MEDIUM "Microsoft jealous with Google and Broadcom and pnpm gets Rusted!")*

## Key Facts

- **Named technique surfaced**: "gisting" (Shopify, Sep 2026) — compress prompts into gist-representations
- **Practitioner value**: (a) reduced context size (fits more into fixed windows); (b) lower per-request inference cost; (c) faster agent-loop iteration
- **Applies particularly to**: long-running agents accumulating tool-call traces, RAG systems with large retrieved contexts, and multi-turn chat sessions

## Open Questions

- Is Shopify's "gisting" implementation open-sourced or internal-only?
- What is the accuracy/fidelity trade-off vs uncompressed baseline on Shopify's agent workloads?
- How does gisting interact with prompt caching (cache-hit rate impact)?
- Standard benchmarks for prompt-compression quality (task-preservation rate, compression ratio)?

## Sources

- data/summaries/2026-09-05-evening.json (Hello, World! MEDIUM "Microsoft jealous with Google and Broadcom and pnpm gets Rusted!" — Shopify is exploring "gisting" a technique to compress long prompts into smaller representations while keeping important information intact / reduces context size lowers inference costs makes AI agents faster)
