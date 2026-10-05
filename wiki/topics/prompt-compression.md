---
name: Prompt Compression
description: Techniques for compressing long prompts into smaller representations while preserving task-relevant information — reduces context size, inference cost, and agent latency
type: topic
---

# Prompt Compression

> **Type**: topic
> **First mentioned**: 2026-09-05-evening (as canonical wiki topic; individual techniques appeared earlier)
> **Last updated**: 2026-10-05-morning (**NLP Newsletter MEDIUM *"Top AI Papers of the Week (Sep 28 - Oct 4)"* ships two canonical research-tier context-compaction + context-management anchors: (a) **Context Language Models (CLMs) (Meta) — editable-context-as-file canonical research anchor** — *"treat the live context as a file the model can edit freely, deciding what to keep, rewrite, or remove"* + *"reaches 11.4% higher accuracy with 21.5% fewer FLOPs on BrowseComp-Plus than state-of-the-art context-management strategies"*; first-in-wiki *concrete Meta-authored context-as-editable-file three-primitive (keep + rewrite + remove) canonical research anchor* (structurally significant three ways — (i) canonicalizes late-2026 as *canonical concrete-editable-context-as-file inflection anchor* on the context-management substrate; (ii) sharpens the 2026-09-05-evening [[shopify]]-"gisting" canonical anchor with a *concrete three-primitive edit-the-context-as-file canonical research anchor tier* at frontier-lab-research-tier (Meta); (iii) 11.4%-accuracy + 21.5%-FLOPs-reduction concrete-multiplier canonical anchor pair on BrowseComp-Plus — first-in-wiki *concrete context-management twin-multiplier (accuracy-up + compute-down) canonical research anchor pair*; likely durable reference-anchor for future context-management-vs-context-window-growth architectural discussion); (b) **AutoCompact — learned context-compaction-policy canonical research anchor** — *"trains a coding agent to decide when to compact its context, what working state to keep, and how to continue afterward"* + *"shows improvements in pass rates and reduces the need for forced compaction"*; first-in-wiki *concrete learned-when-to-compact + learned-what-to-keep + learned-how-to-continue three-primitive canonical research anchor on coding-agent context-compaction substrate* (structurally significant — sharpens the 2026-08-24-morning *What-Compaction-Destroys* canonical anchor (context compaction destroys safety rules + coding standards) + 2026-09-21-morning *Tamara-Tran-Jev-compaction* practitioner-tier canonical anchor (~1M → 86K tokens in 1s) with a *concrete learned-policy canonical research anchor tier* — graduates context-compaction from *rule-based or Jev-decision-model-mediated* substrate into *learned-policy* substrate; likely durable reference-anchor for future context-compaction-policy discussion). Structurally: **CLMs + AutoCompact pair sharpens the mid-to-late-2026 context-management discipline into a twin-anchor cluster — *editable-context-as-file-tier* (Meta) + *learned-compaction-policy-tier* (AutoCompact)** — reads as *canonical late-2026 twin-primitive context-management substrate inflection cluster* alongside Shopify "gisting" practitioner-tier canonical anchor + Anthropic Bedrock-exposed automatic-context-editing + externalized-memory-store (2026-08-29-evening) + Alibaba Scroll Context-Management-as-Code (2026-08-31-morning) multi-cycle canonical anchor arc. See [[agent-harness]] + [[meta]] + [[ai-memory]] + [[long-context-scaling]] — *source: data/summaries/2026-10-05-morning.json (NLP Newsletter MEDIUM "🥇Top AI Papers of the Week")*)
> **Previously updated**: 2026-09-05-evening
> **Status**: active
> **Related**: [[long-context-scaling]], [[agent-frameworks]], [[loop-engineering]], [[agent-harness]], [[meta]], [[ai-memory]], [[shopify]]

## Summary

Prompt compression covers techniques for reducing the token footprint of long prompts *without losing task-relevant information* — a practical lever for driving down inference cost, keeping agent loops fast, and staying under context windows on long-running tasks. In September 2026, [[shopify]]'s exploration of **"gisting"** brought the technique back into wider newsletter coverage as an agent-runtime concern: agents that accumulate long context histories (tool traces, retrieved documents, multi-step reasoning) benefit disproportionately from prompt compression because their per-request context grows monotonically over the loop.

Related-but-distinct ideas: prompt caching (cache-tier discount on repeated prefixes — see [[claude-fable-5-1]]'s 75% cache-read discount), context distillation, memory-tier summarization ([[engram]] / [[chroma-foundation]]), and speculative decoding.

## Timeline

- **2026-10-05-morning**: **NLP Newsletter *Top AI Papers of the Week (Sep 28 - Oct 4)* ships twin canonical research-tier anchors — Context Language Models (CLMs, Meta): treat live context as editable file (keep/rewrite/remove three-primitive), 11.4% accuracy + 21.5% fewer FLOPs on BrowseComp-Plus vs state-of-the-art; AutoCompact: trained coding-agent policy for when-to-compact + what-to-keep + how-to-continue, improves pass rates + reduces forced-compaction.** First-in-wiki *concrete Meta-authored editable-context-as-file canonical research anchor + concrete learned-context-compaction-policy canonical research anchor pair* — graduates the mid-to-late-2026 context-management discipline from *rule-based + practitioner-tier* substrate ([[shopify]] "gisting") into *frontier-lab-research-tier (Meta) + trained-policy-tier (AutoCompact) twin-anchor substrate*. See [[agent-harness]] + [[meta]] + [[ai-memory]] + [[long-context-scaling]] — *source: data/summaries/2026-10-05-morning.json (NLP Newsletter MEDIUM "🥇Top AI Papers of the Week")*

- **2026-09-05-evening**: **[[shopify]] exploring "gisting" — compress long prompts into smaller representations while keeping important information intact** — reduces context size, lowers inference cost, and makes AI agents faster. First publicly framed *"gisting" compress-long-prompts-into-smaller-representations* canonical anchor in this wiki, positioned specifically as an *AI-agent-latency + cost-reduction lever* — *source: data/summaries/2026-09-05-evening.json (Hello, World! MEDIUM "Microsoft jealous with Google and Broadcom and pnpm gets Rusted!")*

## Key Facts

- **Named techniques surfaced**:
  - **"gisting"** ([[shopify]], Sep 2026) — compress prompts into gist-representations at practitioner-tier
  - **Context Language Models (CLMs)** ([[meta]], Oct 2026 — NLP Newsletter) — treat live context as editable file; three-primitive (keep + rewrite + remove); 11.4% accuracy gain + 21.5% FLOP reduction on BrowseComp-Plus vs SOTA context-management strategies
  - **AutoCompact** (Oct 2026 — NLP Newsletter) — trained coding-agent policy for when-to-compact + what-to-keep + how-to-continue; improves pass rates + reduces forced-compaction
  - **What-Compaction-Destroys** (Aug 2026 — NLP Newsletter) — study showing compaction destroys safety rules + coding standards; proposes type-aware routing
  - **Jev-based compaction** (Sep 2026 — Tamara Tran via The AI Corner) — practitioner-tier receipt: ~1M → 86K tokens in 1 second using [[jev]] as decision-tier compaction primitive
- **Practitioner value**: (a) reduced context size (fits more into fixed windows); (b) lower per-request inference cost; (c) faster agent-loop iteration
- **Applies particularly to**: long-running agents accumulating tool-call traces, RAG systems with large retrieved contexts, and multi-turn chat sessions

## Open Questions

- Is Shopify's "gisting" implementation open-sourced or internal-only?
- What is the accuracy/fidelity trade-off vs uncompressed baseline on Shopify's agent workloads?
- How does gisting interact with prompt caching (cache-hit rate impact)?
- Standard benchmarks for prompt-compression quality (task-preservation rate, compression ratio)?

## Sources

- data/summaries/2026-10-05-morning.json (NLP Newsletter MEDIUM "🥇Top AI Papers of the Week" — Context Language Models (CLMs) Meta + AutoCompact)
- data/summaries/2026-09-05-evening.json (Hello, World! MEDIUM "Microsoft jealous with Google and Broadcom and pnpm gets Rusted!" — Shopify is exploring "gisting" a technique to compress long prompts into smaller representations while keeping important information intact / reduces context size lowers inference costs makes AI agents faster)
