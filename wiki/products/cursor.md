---
name: Cursor
description: Cursor — AI coding IDE; ships 2.0 with in-house Composer model and multi-agent UI
type: product
---

# Cursor

> **Type**: product
> **First mentioned**: 2025-10-04
> **Last updated**: 2026-05-26
> **Status**: active
> **Related**: [[agent-frameworks]], [[jules]], [[claude-code]], [[replit]], [[cursor-composer]], [[cursor-composer-2-5]], [[spacex]], [[cognition]]

## Summary

Cursor is an AI-native coding IDE (a VS Code fork) that has become the reference product for agentic software development — sitting alongside [[claude-code]] and [[jules]] on the pro-developer axis of AI coding tools, with [[replit]] anchoring the non-coder end of the same market. In early October 2025 it shipped 1.7 and introduced Plan Mode (an explicit plan-then-execute workflow). At the end of the month it shipped Cursor 2.0 with [[cursor-composer]] — its first in-house coding model, billed as ~4× faster than peers in the same intelligence tier and able to complete tasks in under 30 seconds — alongside a multi-agent interface that lets developers run several agents in parallel, framed as "less single AI assistant, more small dev team."

## Timeline

- **2026-05-27**: **40% of Cursor's own codebase pull requests now come from cloud agents** (up sharply from six months ago) — concrete production-engineering data point that the autonomous-agent share of internal developer work has crossed the threshold-of-meaningful-default at the company most identified with the agentic-coding paradigm; Cursor publishes findings on how it builds and manages cloud agents (uses **Temporal** workflow engine, designed to survive machine failures) — first-party reference architecture for "agents in production" — *source: 2026-05-27 cycle (The Code — Cursor 40% cloud-agent PRs + Temporal workflow engine)*
- **2026-05-26**: Coverage repeats and locks in **Cursor $3B annualized sales + 3,000+ enterprise customers** as the durable headline (The Code "Cursor is having a moment"); Cursor framed as the canonical specialized-coding-model success story driving the "frontier models won't eat the vertical AI market" thesis (Composer 2.5 economics referenced); same cycle: **OpenAI's Codex now routes 10% of production traffic through third-party platforms** like Pi Terminal and OpenCode (Codex matches Anthropic's earlier OpenClaw concession by going the other direction — letting third parties tap free ChatGPT accounts for inference) — concrete pressure point on Cursor's lock-in surfaces — *source: 2026-05-26 cycle (The Code — Cursor is having a moment / $3B annual sales 3000+ customers; AlphaSignal — Cursor cited in Karpathy CLAUDE.md cross-tool framing; Forward Future — Cerebras IPO context)*
- **2026-05-23**: Cursor reaches **$3B annualized revenue** in late April with 3,000+ customers paying ≥$100K each; SpaceX 30-day post-IPO option to acquire Cursor at $60B (with $10B breakup fee) reaffirmed; coverage frames Cursor as one of two top AI coding agents (alongside [[claude-code]]) per Mintlify traffic analysis — *source: 2026-05-23 cycle (TLDR AI — Anthropic Microsoft deal + Cursor $3B ARR; The Code — Microsoft and Uber ditch Claude Code)*
- **2026-05-20**: Cursor [[cursor-composer-2-5]] recirculates as Anthropic competitive datapoint; SpaceX $60B Cursor option detailed — Cursor "significantly larger model" with SpaceXAI using 10× more compute confirmed — *source: 2026-05-20 cycle (AINews; Forward Future — Musk lost; Superhuman — Gemini becomes your personal agent)*
- **2026-05-19**: **[[cursor-composer-2-5]] released** — 79.8% SWE-Bench Multilingual, sub-30s tasks, $0.50/$2.50 per M tokens (~10× cheaper than rivals); cloud agent development environments launched; SpaceX-Cursor $60B option emerges — *source: 2026-05-19 cycle (AlphaSignal — Anthropic doubles + Cursor Composer 2.5; Evolving AI Insights; TLDR Newsletter — Google IO + Cursor; The Rundown AI — Musk case + Composer 2.5)*
- **2026-05-15**: Cursor cloud development environments ship — agents can juggle multiple repositories at once, similar to engineers operating across microservices; Dockerfile-based configs, version history, audit logs, cached builds; Hallmark "skill" for AI agents reduces generic UI output — *source: 2026-05-15 cycle (The Code — Anthropic faces developers backlash; AlphaSignal — agentmemory)*
- **2026-04-24**: **SpaceX partners with [[cursor]] in a $60B deal** continues coverage — aim: provide [[spacex]] a shortcut into the AI coding market; underscores Cursor's strategic-asset status — *source: 2026-04-24 cycle (SpaceX-Cursor $60B deal extended framing)*
- **2026-04-23**: **[[spacex]] partners with Cursor for $60B potential acquisition** — strategic partnership aiming to integrate Cursor's AI coding capabilities with SpaceX's **Colossus supercomputer**; positions the combined entity to compete directly with frontier AI labs in coding-agent development — first publicly disclosed SpaceX-scale acquisition target in the AI-coding sector — *source: 2026-04-23 cycle (SpaceX-Cursor $60B partnership)*
- **2026-04-19**: **Cursor multi-agent system optimizes CUDA kernels** with avg 38% speedup — automatically writes and optimizes kernels, treating optimization as a continuous loop of writing, testing, refining code; positions Cursor's multi-agent architecture as a GPU-performance-engineering tool — *source: 2026-04-19 cycle (AlphaSignal — Cursor multi-agent CUDA optimization 38% speedup)*
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
- data/summaries/2026-05-26.json (The Code — Cursor is having a moment / $3B annual sales 3,000+ enterprise customers; Codex 10% production traffic via third-party platforms Pi Terminal and OpenCode)
