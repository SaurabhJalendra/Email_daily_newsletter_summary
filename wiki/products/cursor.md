---
name: Cursor
description: Cursor — AI coding IDE; ships 2.0 with in-house Composer model and multi-agent UI
type: product
---

# Cursor

> **Type**: product
> **First mentioned**: 2025-10-04
> **Last updated**: 2026-04-15 (backfill 2026-04-06..2026-04-15)
> **Status**: active
> **Related**: [[agent-frameworks]], [[jules]], [[claude-code]], [[replit]], [[cursor-composer]], [[cognition]]

## Summary

Cursor is an AI-native coding IDE (a VS Code fork) that has become the reference product for agentic software development — sitting alongside [[claude-code]] and [[jules]] on the pro-developer axis of AI coding tools, with [[replit]] anchoring the non-coder end of the same market. In early October 2025 it shipped 1.7 and introduced Plan Mode (an explicit plan-then-execute workflow). At the end of the month it shipped Cursor 2.0 with [[cursor-composer]] — its first in-house coding model, billed as ~4× faster than peers in the same intelligence tier and able to complete tasks in under 30 seconds — alongside a multi-agent interface that lets developers run several agents in parallel, framed as "less single AI assistant, more small dev team."

## Timeline

- **2026-04-15**: Cursor 3.1 released — lets users manage a *fleet* of coding agents at once; doubles down on the parallel-agent thesis; parallels Google's same-day "manage a fleet of coding agents" feature and [[vercel]]'s Open Agents open-sourcing — multi-agent-management becomes an industry-default surface in a single week — *source: 2026-04-15 cycle*
- **2026-04-11**: Cursor lets agents attach demos and screenshots to pull requests for easier review — PR-review surface for agent output — *source: 2026-04-11 cycle*
- **2026-04-10**: Bugbot (code reviewer) upgraded to learn on the job and track developer interactions — agent-self-tuning from real review feedback — *source: 2026-04-10 cycle*
- **2026-04-05**: Agents Window ships — dedicated surface for running coding agents in parallel across multiple repositories, worktrees, and cloud VMs; covered in TAAFT as "Cursor ditches the IDE" framing (agent-first workflow replacing in-editor pairing); reinforces the Cursor 3 multi-repo thesis and makes parallel-agent work the default rather than opt-in — *source: 2026-04-05 cycle (TAAFT — Cursor launches Agents Window for parallel coding / Cursor Ditches the IDE)*
- **2026-04-04**: Cursor 3 released — major interface overhaul built explicitly for agent-driven development: multi-repo workspace (agents coordinate across multiple repositories without context switching), clearer abstraction over agent work (shows what each agent is doing at a higher level), and seamless hand-off between local and cloud agents (start in local IDE, continue in cloud, return to local); new Design Mode — a visual editing layer where developers click-to-edit, drag-to-draw, and feed selections straight into the agent chat; framed as positioning Cursor for a future where agents handle the bulk of software development and developers operate at a higher level of abstraction; Moonshot AI's Kimi K2.5 is reportedly the underlying model used to build Cursor 3 (Moonshot also quadruples its valuation to $18B the same cycle) — *source: 2026-04-04 cycle (TLDR — Cursor 3; The Code — IDE built for agents; TLDR AI — Cursor 3 multi-repo + clearer abstraction; Forward Future — Cursor introduces Cursor 3; Superhuman — Cursor 3)*
- **2026-03-28**: Real-time RL training detailed for [[cursor-composer]] — Composer learns from real inference tokens by observing user responses (accept / reject / edit), closing the online-learning loop that other in-house coding models haven't exposed — *source: 2026-03-28 cycle (AlphaSignal — Cursor Real-time RL)*
- **2026-03-27**: Self-Hosted Agents launched — cloud agents run inside the customer's own infrastructure (code/secrets/artifacts never leave network); supports parallel agents in isolated environments, Kubernetes, worker pools, autoscaling — security/compliance pitch for regulated orgs — *source: 2026-03-27 cycle (AlphaSignal — Cursor Self-Hosted)*
- **2026-03-25**: Cursor Instant Grep launched — client-side code indexing system scans millions of files in ~13 ms (~1000× faster than traditional code search) — *source: 2026-03-25 cycle*
- **2026-03-14**: CursorBench introduced — internal eval suite for measuring agent performance; [[xai]] poaches two Cursor product leads to build a coding product, signaling xAI entry into the AI-coding market — *source: 2026-03-14 cycle (TLDR AI — CursorBench; xAI poaches Cursor leads)*
- **2026-03-13**: Cursor in talks for funding round at $50B valuation (~2× vs fall 2025); hits $2B ARR; Anduril adjacent: ExoAnalytic acquisition noted same day for context on defense-tech VC momentum — *source: 2026-03-13 cycle (TLDR AI — Cursor eyes $50B valuation)*
- **2026-03-10**: Cursor building research powerhouse to outmaneuver Anthropic and OpenAI in AI coding market; prioritizing enterprise contracts as Claude Code revenue surpasses Cursor; Cursor ARR at $2B — *source: 2026-03-10 cycle (TLDR — Cursor War Time; The Tech Buzz)*
- **2026-03-07**: Cursor Automations launches — always-on AI coding agents triggered by GitHub pull requests, Slack messages, or scheduled tasks; agents can run autonomous coding sessions — *source: TAAFT "OpenAI Launches GPT-5.4"; TLDR AI "Cursor Automations"; AlphaSignal*
- **2026-01-01**: Cursor launches a new editor for designing websites — pushes Cursor beyond pure code IDE into design/web-build workflow — *source: The Rundown AI 2026-01-01 cycle*
- **2025-12-12**: Cursor adds Debug Mode — interactive debugger UX inside the agent loop — *source: TLDR AI "DeepMind's automated lab / reverse engineering ChatGPT / Cursor Debug Mode"*
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
- data/summaries/2025-12-12.json (TLDR AI — Cursor Debug Mode)
- data/summaries/2026-03-07.json (Cursor Automations — always-on coding agents)
- data/summaries/2026-03-10.json (Cursor War Time research push; $2B ARR)
- data/summaries/2026-03-13.json (Cursor $50B valuation talks)
- data/summaries/2026-03-14.json (CursorBench; xAI poaches Cursor leads)
- data/summaries/2026-03-25.json (Instant Grep — 13 ms client-side code search)
- data/summaries/2026-03-27.json (AlphaSignal — Cursor Self-Hosted Agents)
- data/summaries/2026-03-28.json (AlphaSignal — Cursor Real-time RL for Composer)
- data/summaries/2026-04-04.json (TLDR — Cursor 3; The Code — IDE built for agents + Design Mode; TLDR AI — Cursor 3 multi-repo; Forward Future — Cursor 3; Superhuman — Cursor 3)
- data/summaries/2026-04-05.json (TAAFT — Cursor Agents Window / Cursor Ditches the IDE)
