---
name: Cursor
description: Cursor — AI coding IDE; ships 2.0 with in-house Composer model and multi-agent UI
type: product
---

# Cursor

> **Type**: product
> **First mentioned**: 2025-10-04
> **Last updated**: 2025-11-17
> **Status**: active
> **Related**: [[agent-frameworks]], [[jules]], [[claude-code]], [[replit]], [[cursor-composer]], [[cognition]]

## Summary

Cursor is an AI-native coding IDE (a VS Code fork) that has become the reference product for agentic software development — sitting alongside [[claude-code]] and [[jules]] on the pro-developer axis of AI coding tools, with [[replit]] anchoring the non-coder end of the same market. In early October 2025 it shipped 1.7 and introduced Plan Mode (an explicit plan-then-execute workflow). At the end of the month it shipped Cursor 2.0 with [[cursor-composer]] — its first in-house coding model, billed as ~4× faster than peers in the same intelligence tier and able to complete tasks in under 30 seconds — alongside a multi-agent interface that lets developers run several agents in parallel, framed as "less single AI assistant, more small dev team."

## Timeline

- **2025-11-17**: Cursor raises $2.3B — further underlining the AI coding IDE boom — *source: TAAFT cycle "Cursor raises $2.3 billion"*
- **2025-11-06**: Reports 12.5% accuracy gain from semantic code retrieval; trains custom embedding model — *source: AlphaSignal "Cursor semantic code retrieval"*
- **2025-11-01**: Cursor 2.0 / Composer continues to dominate post-launch coverage — *source: TAAFT "Sora 2 vs Veo 3.1: Who Wins?"*
- **2025-10-31**: AlphaSignal: Composer described as 4× faster than models in the same intelligence tier; multi-agent IDE workflows — *source: AlphaSignal "Cursor unveils Composer: first in-house model, 4× faster coding"*
- **2025-10-30**: Cursor 2.0 launches with [[cursor-composer]] (in-house model) plus multi-agent UI — *source: TLDR AI "Cursor 2.0, Cognition's SWE-1.5"; The Rundown AI "Extropic's 10,000x AI energy breakthrough"*
- **2025-10-08**: Plan Mode coverage — *source: TLDR AI "Cursor Plan Mode"*
- **2025-10-04**: Cursor 1.7 release and TOCTOU-related security coverage — *source: AlphaSignal "npm getting a Shield, Cursor 1.7 and TOCTOU!"*

## Key Facts

- Product: VS Code-based AI IDE
- Notable features (Oct 2025): Plan Mode, 1.7, then 2.0 multi-agent interface
- In-house model: [[cursor-composer]] (debut Oct 30 2025)
- Speed claim: tasks in under 30 seconds; ~4× faster than peers in the same intelligence tier
- Direct competition for [[cognition]]'s SWE-1.5 (Windsurf) shipping the same week

## Open Questions

- Composer parameter scale and training data?
- Pricing impact of in-house vs API-routed model use?
- Multi-agent UI ergonomics — does it scale beyond 2-3 concurrent agents?

## Sources

- data/summaries/2025-10-04.json (AlphaSignal — Cursor 1.7 and TOCTOU)
- data/summaries/2025-10-08.json (TLDR AI — Cursor Plan Mode)
- data/summaries/2025-10-30.json (TLDR AI — Cursor 2.0; The Rundown AI — Extropic's 10,000x AI energy breakthrough)
- data/summaries/2025-10-31.json (AlphaSignal — Cursor unveils Composer)
- data/summaries/2025-11-01.json (TAAFT — Sora 2 vs Veo 3.1)
- data/summaries/2025-11-06.json (AlphaSignal — Cursor semantic code retrieval / custom embeddings)
- data/summaries/2025-11-17.json (TAAFT — Cursor raises $2.3B)
