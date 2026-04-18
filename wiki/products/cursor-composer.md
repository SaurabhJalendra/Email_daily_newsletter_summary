---
name: Cursor Composer
description: Cursor's first in-house coding model — completes tasks in under 30 seconds, ~4× faster than peers
type: product
---

# Cursor Composer

> **Type**: product
> **First mentioned**: 2025-10-30
> **Last updated**: 2026-03-31
> **Status**: active
> **Related**: [[cursor]], [[cognition]], [[claude-code]]

## Summary

Composer is [[cursor]]'s first in-house coding model, launched 2025-10-30 as the centerpiece of Cursor 2.0. It is positioned not on raw benchmark scores but on speed: tasks complete in under 30 seconds and Cursor claims it runs roughly 4× faster than models in the same intelligence tier. Composer ships alongside a redesigned multi-agent UI that lets developers run multiple coding agents in parallel — making Cursor "feel like working with a small dev team rather than a single AI." Composer's release pulls Cursor out of being a thin client over OpenAI/Anthropic models and into model-vendor territory itself, in the same week that [[cognition]] shipped SWE-1.5 on Windsurf.

## Timeline

- **2026-03-31**: Composer 2 reported to beat [[claude-opus-4-6]] on terminal benchmarks at roughly 1/10 the cost — framed (alongside [[intercom-apex-1]]'s customer-service results) as evidence that vertical, task-specialized models now outperform general-purpose frontier models on their target domains; reinforces the "vertical-model" thesis highlighted by Andrej Karpathy this cycle — *source: 2026-03-31 cycle (The Code — Midjourney engineer changes websites forever)*
- **2026-03-22**: Composer 2 framing sharpened — reduces coding costs ~50% with multi-file workflow support — *source: 2026-03-22 cycle*
- **2026-03-21**: Composer 2 released — frontier-level coding performance "at a fraction of the cost" of flagship rivals; outperforms Composer 1 on coding tasks — *source: 2026-03-21 cycle*
- **2025-10-31**: AlphaSignal headlines "Cursor unveils Composer: first in-house model, 4× faster coding" — *source: AlphaSignal*
- **2025-10-30**: Composer ships in Cursor 2.0; multi-agent UI alongside — *source: TLDR AI "Cursor 2.0, Cognition's SWE-1.5"; The Rundown AI "Extropic's 10,000x AI energy breakthrough"*

## Key Facts

- Vendor: [[cursor]]
- Type: in-house coding model
- Speed claim: under 30 seconds per task, ~4× faster than peers in the same tier
- Companion product: Cursor 2.0 multi-agent interface
- Same-week competition: [[cognition]] SWE-1.5 (on Windsurf)

## Open Questions

- Architecture and parameter count not disclosed
- Training data sources?
- Will Composer remain Cursor-only, or get any external API?

## Sources

- data/summaries/2025-10-30.json (TLDR AI — Cursor 2.0; The Rundown AI — Extropic's 10,000x AI energy breakthrough)
- data/summaries/2025-10-31.json (AlphaSignal — Cursor unveils Composer)
- data/summaries/2026-03-21.json (Composer 2 release — frontier-level at fraction of cost)
- data/summaries/2026-03-22.json (Composer 2 — 50% cost reduction; multi-file workflows)
- data/summaries/2026-03-31.json (The Code — Composer 2 beats Opus 4.6 on terminal benchmarks at 1/10 cost)
