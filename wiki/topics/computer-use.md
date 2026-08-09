---
name: Computer Use
description: Models/agents that directly drive GUIs — clicking, typing, navigating software
type: topic
---

# Computer Use

> **Type**: topic
> **First mentioned**: 2025-10-08
> **Last updated**: 2026-08-09-morning ([[qwen-cua]] launches as first Chinese-frontier-lab computer-use agent entrant; native-input tier operating GUIs via screenshots + native keyboard/mouse events; claims 86.2 on OSWorld-Verified SOTA and strong WebArena results; adds *native-input tier* as fourth category to the existing coding-agent + browser-agent + lifestyle-agent framing)
> **Previously updated**: 2026-08-07-morning ([[hark-handoff]] launches as first-product consumer-tier computer-use agent for everyday tasks (food ordering, shopping, recruiting); revives topic from stale as the *lifestyle-tier* computer-use entrant)
> **Status**: active
> **Related**: [[gemini-2-5-computer-use]], [[google]], [[agent-frameworks]], [[hark-handoff]], [[perplexity-comet]], [[lux]], [[qwen-cua]], [[alibaba]]

## Summary

"Computer use" refers to models that directly operate a computer — clicking, typing, navigating applications — rather than only generating text or calling APIs. In early October 2025 [[google]] launched [[gemini-2-5-computer-use]], joining [[anthropic]]'s earlier Claude Computer Use in making GUI-driving a first-class capability of frontier assistants. By mid-2026 the category has fanned into four tiers: **browser-agent** ([[perplexity-comet]], [[chatgpt-atlas]]), **coding/dev-workflow** ([[claude-code]], [[muse-code]]), **consumer/lifestyle** ([[hark-handoff]] for food ordering, shopping, recruiting), and **native-input desktop** ([[qwen-cua]] operating GUIs via screenshots + keyboard/mouse events, no DOM).

## Timeline

- **2026-08-09-morning**: **[[qwen-cua]] launches** — [[alibaba]] releases Qwen-CUA, a computer-use agent operating GUIs via screenshots + native keyboard/mouse events; claims 86.2 on OSWorld-Verified (SOTA claim, vendor-reported) and strong WebArena results. First Chinese-frontier-lab computer-use agent entrant + adds *native-input tier* (screenshots + keyboard + mouse, no DOM/API) as fourth category alongside browser-agent + coding-agent + lifestyle-agent tiers. Same-edition sibling launches ([[qwen-3-8-max]] frontier model + Ori Harness) productize Alibaba's full agentic-stack — *source: data/summaries/2026-08-09-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: Agent Plugins Standard, Qwen3.8-Max, Meta Muse Code, Prime Agent, LFM2.5-2.6B, Qwen-CUA, Harness Evolution Papers")*

- **2026-08-07-morning**: **[[hark-handoff]] launches** — Hark ships its first product, a consumer-tier computer-use agent for everyday tasks (food ordering, shopping, recruiting talent). First publicly framed *lifestyle-tier* computer-use entrant in this wiki, distinct from prior coding-agent + browser-agent framings — *source: data/summaries/2026-08-07-morning.json (Superhuman MEDIUM "🫨 Four legends leave Google at once" — Hark Handoff computer use agent for tasks that eat up your day)*
- **2025-10-12**: AI Innovations Hub runs "Google Taught AI to Use the Web" follow-up coverage — *source: AI Innovations Hub Newsletter*
- **2025-10-09**: [[google]] launches [[gemini-2-5-computer-use]] — *source: AlphaSignal*
- **2025-10-08**: Gemini Computer Use covered alongside Agentic Retrieval — *source: TLDR AI*

## Key Facts

- Major entrants (Oct 2025): Anthropic Claude Computer Use, Google [[gemini-2-5-computer-use]]
- Lifestyle-tier entrant (Aug 2026): [[hark-handoff]] (food ordering + shopping + recruiting)
- Native-input desktop tier entrant (Aug 2026): [[qwen-cua]] (screenshots + keyboard + mouse; 86.2 OSWorld-Verified SOTA claim; strong WebArena)
- Failure mode watched by practitioners: reliability on long UI trajectories

## Open Questions

- Benchmark comparisons between Google and Anthropic computer-use models?
- Safety: how are misclicks / destructive actions bounded?
- Payment-authorized-action safety (relevant for [[hark-handoff]] food/shopping tasks)?

## Sources

- data/summaries/2026-08-09-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: Agent Plugins Standard, Qwen3.8-Max, Meta Muse Code, Prime Agent, LFM2.5-2.6B, Qwen-CUA, Harness Evolution Papers" — Qwen-CUA operates GUIs via screenshots + keyboard/mouse + WebArena + OSWorld-Verified 86.2)
- data/summaries/2026-08-07-morning.json (Superhuman MEDIUM "🫨 Four legends leave Google at once" — Hark Handoff first product launch)
- data/summaries/2025-10-08.json (TLDR AI — Gemini Computer Use, Cursor Plan Mode, Agentic Retrieval)
- data/summaries/2025-10-09.json (AlphaSignal — Google launches Gemini 2.5 Computer Use)
- data/summaries/2025-10-12.json (AI Innovations Hub — Google Taught AI to Use the Web)
