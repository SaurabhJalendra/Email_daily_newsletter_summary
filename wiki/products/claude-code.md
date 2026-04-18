---
name: Claude Code
description: Anthropic's CLI/coding agent — plugins, always-on Routines, Claude Design hand-off
type: product
---

# Claude Code

> **Type**: product
> **First mentioned**: 2025-10-13
> **Last updated**: 2026-04-16 (backfill 2026-02-20..2026-04-15)
> **Status**: active
> **Related**: [[anthropic]], [[claude-opus-4-7]], [[claude-opus-4-5]], [[claude-design]], [[claude-code-web]], [[claude-code-security]], [[claude-cowork]], [[agent-frameworks]], [[jules]], [[cursor]]

## Summary

Claude Code is [[anthropic]]'s official command-line coding agent, built around the Claude model family (now [[claude-opus-4-7]]). In October 2025 it gained a plugins capability, entering the same category as [[jules]] (Google) and [[cursor]] (IDE). By April 2026 it had become a full automation surface: "Routines" let users package prompts, repositories, and connectors into reusable configurations that run automatically on Anthropic-managed cloud infrastructure, triggered by APIs, schedules, or GitHub repository events. Claude Code also acts as the build-stage hand-off target for [[claude-design]] — users take a prototype from Claude Design and have Claude Code implement it.

## Timeline

- **2026-04-16**: Always-on Routines launched — reusable prompt/repo/connector bundles running on managed cloud on API / schedule / GitHub event triggers — *source: AlphaSignal "Anthropic presents always-on Routines in Claude Code"*
- **2026-04-16**: [[claude-design]] ships with direct hand-off into Claude Code for build stage — *source: TAAFT "Claude Just Became a Designer"; World of AI "ANTHROPIC DROPS Claude Design!"*
- **2026-04-16**: Nate Herk demos a fully autonomous Claude Code 4.7 trading bot that researches, trades on Alpaca, manages stops, and self-reports on cron — illustrative of agentic Claude Code workflows in the community — *source: AI Automation Society*
- **2026-04-14**: Coordinator Mode in development — enables Claude Code to act as an orchestrator and delegate implementation work to parallel sub-agents; major desktop experience overhaul also in progress — *source: 2026-04-14 cycle*
- **2026-04-13**: Leak recirculated in cycle coverage — 512K LOC framed as revealing importance of "harness engineering" (CLI scaffolding around the base model) — *source: 2026-04-13 cycle*
- **2026-04-12**: Chase AI + Claude Code Masterclass adds Skill Packs section (Chase Hannegan's Claude Code skills for research/content) + Agentic OS build-and-sell track — community momentum post-leak — *source: 2026-04-12 cycle (Chase AI Community)*
- **2026-04-10**: Tutorial on building self-evolving agent memory for Claude Code circulates — part of wider rollout of memory-layer innovations; Claude-Eval Benchmark published for evaluating LLM agents on real-world tasks — *source: 2026-04-10 cycle*
- **2026-04-08**: Anthropic restricts third-party tools (e.g., OpenClaw) from using Claude Code — subscribers now have to pay more to reach Claude via those harnesses — *source: 2026-04-08 cycle*
- **2026-04-07**: Cited alongside Anthropic's broader third-party-agent blockage — Claude Code use via non-Anthropic frontends made more expensive — *source: 2026-04-07 cycle*
- **2026-04-06**: Virtual-pet terminal feature ships — post-leak Tamagotchi-style system (seen in leak as "/buddy") publicly confirmed as an actual shipped Claude Code feature; Nate Herk video "Codex Just 10x'd Claude Code Projects" circulates — *source: 2026-04-06 cycle (AI Automation Society)*
- **2026-04-03**: Post-leak cleanup fallout — [[anthropic]]'s DMCA push to purge leaked Claude Code code triggers mass takedowns affecting ~8,000 GitHub repositories (broader than intended — unrelated repos caught); security analysts detail what the leak actually exposed (orchestration logic, memory systems, planning/review flows, model-specific control logic) — TLDR AI frames it as a "live security hazard" with attackers already publishing malicious npm packages targeting developers trying to compile the leaked Claude Code; Trinity-Large-Thinking launches as the strongest open reasoning model outside China, surfaced as a safer open alternative to running leaked Claude Code forks — *source: 2026-04-03 cycle (Forward Future — Anthropic Triggers Mass GitHub Takedowns; TLDR AI — Claude Code leak analysis / malicious-package hazard / Trinity-Large-Thinking)*
- **2026-04-02**: Claude Code source code accidentally leaks via unstripped source-map in the npm package — ~512K lines / ~1,900 TypeScript files exposed; reveals three-layer memory architecture (the mechanism for solving context entropy), multi-agent orchestration, permission-gated tools, 44 feature flags, unreleased projects, internal codenames, and two in-progress product experiments: a Tamagotchi-style "/buddy" virtual-pet (18 species, rarity tiers, shiny variants, DEBUGGING + CHAOS stats — reacts to coding mistakes) and a "KAIROS" always-on background-daemon mode hinting at a persistent ambient Claude Code; a developer rewrites a clone ("claw-code") overnight to ~50K GitHub stars; Anthropic characterizes the event as a packaging error (no customer data exposed) and moves to automate deployment; MiniMax's [[minimax-m2-7]] reported on par with Claude Sonnet 4.6 on [[openclaw]] at a fraction of the cost — new direct competitive reference point for Claude Code-class agents — *source: 2026-04-02 cycle (World of AI — Claude Code LEAKED; AI Breakfast — agent architecture leaked; The Code — Anthropic leaks Claude Code; TLDR AI — three-layer memory architecture; TLDR — Claude Code leaks; Superhuman — major leak again; AI Automation Society — /buddy virtual pet)*
- **2026-04-01**: Claude Code v2.1.88 ships Computer Use (research preview, macOS, Pro/Max) — Claude controls the user's desktop: opens files, navigates apps and browsers, clicks buttons, types, reads screen contents, and runs dev tools directly from a single CLI prompt; closes the write-code → manually-test-code loop (build → run → observe UI → fix without leaving terminal); Dispatch companion feature lets users trigger the same remote computer-use runs from their phone; AlphaSignal frames it as full UI testing + debugging from a single CLI prompt; released same day [[openai-codex]] ships its Codex-as-second-agent Claude Code plugin (dual-model generate-and-review flows) — *source: 2026-04-01 cycle (World of AI — Claude Controls Computers; The Code — Claude Code gets computer use; Superhuman — Claude Code can use your computer now; AlphaSignal — Claude runs full UI testing + debugging; Uncovering AI — Claude's taking over my mouse; Staying Ahead with AI — dispatched it; TLDR AI — Codex Plugin for Claude Code)*
- **2026-03-27**: Auto Mode GA — Claude Code manages its own permissions via classifiers (cuts manual approvals); Anthropic paper on classifier-based permission-skipping as safer-than-bypass; also coverage of self-hosted cloud agents for Claude Code (run inside customer infrastructure) — *source: 2026-03-27 cycle (The Code — Anthropic's third big drop; Superhuman; AlphaSignal — Cursor Self-Hosted context; Daily ChatGPT — migration guide)*
- **2026-03-25**: "Auto dream" memory-consolidation feature — automatically prunes and merges conversation memory files for longer session efficiency — *source: 2026-03-25 cycle*
- **2026-03-21**: Channels launches — Claude Code receives messages from multiple platforms (Slack, email, etc.) into a unified inbox, reinforcing always-on agent surface — *source: 2026-03-21 cycle*
- **2026-03-14**: Claude Visuals ("Imagine with Claude") beta in Claude Chat — auto-picks format (chart, diagram, flowchart) and generates interactive visuals inline; free + paid plans; refinable via follow-up — *source: 2026-03-14 cycle (TLDR AI — Claude Visuals; Superhuman — interactive charts & diagrams; The Code — Anthropic adds visuals)*
- **2026-03-13**: `/btw` contextual-question command added — ask questions without interrupting active Claude Code tasks; Claude Code referenced at $2.5B annualized revenue (TIME cover) — *source: 2026-03-13 cycle (AlphaSignal); TAAFT 2026-03-14*
- **2026-03-11**: Claude Code Review ships (research preview, Team+Enterprise) — multi-agent PR reviewer, 7.5× more bugs on 1K+ line PRs, <1% false-positive rate, $15–$25/review; fork-mid-session adds branch-from-current-point without losing context — *source: 2026-03-11 cycle (AlphaSignal — 7.5x more bugs; The Code — Claude Code Review; TLDR — Code Review; World of AI)*
- **2026-03-10**: Claude Code sleep mode — local scheduled tasks + loop command; loops run up to 3 days without input; cited as turning Claude Code into "always-on" automation surface; Nate Herk tutorials drive community adoption — *source: 2026-03-10 cycle (Superhuman — Claude Code now runs while you sleep; AI Automation Society; Chase AI Community)*
- **2026-03-07**: Auto Mode launched for permission decisions during sessions — safer alternative to bypassing permissions entirely; positioned for isolated environments only — *source: TLDR "GPT-5.4 + Claude Code auto mode"*
- **2026-02-22**: Full PR workflow — preview, review, and merge capabilities added; [[claude-code-security]] announced as in-product security-scanner surface — *source: 2026-02-22 cycle*
- **2026-02-19**: Claude Code referenced as design-to-implementation downstream surface in Figma's Code-to-Canvas integration — *source: 2026-02-19 cycle*
- **2026-02-09**: Anthropic Claude SDK lands in Apple Xcode 26.3 alongside [[openai-codex]] — first-party Mac IDE integration for Claude — *source: 2026-02-09 cycle*
- **2026-02-04**: Creator of Claude Code shares 10 power-user hacks; community comparisons with [[codex-app]] highlight diverging agent-UX approaches — *source: The Code by Superhuman "Chinese lab dethroned DeepSeek"*
- **2026-02-01**: Nate Herk video "I Tested Clawdbot Against Claude Code: What You Need to Know" circulates; community comparisons — *source: AI Automation Society Weekly Digest*
- **2026-01-27**: Anthropic Security Center for Claude Code announced — simplifies security workflows for developers amid "Claude CoWork effect" traffic surge — *source: AI Breakfast "Clawdbot"*
- **2026-01-17**: Coverage of Claude Code tutorials continues; bundled with [[claude-cowork]] positioning — *source: 2026-01-17 cycle*
- **2026-01-14**: Claude Code framed as usable beyond coding — "organizing digital lives," file-based workflows — sits adjacent to [[claude-cowork]] launch — *source: 2026-01-14 cycle*
- **2026-01-12**: [[anthropic]] blocks third-party tools that spoof Claude Code to access Opus 4.5 — affects xAI + other clients; cat-and-mouse framing — *source: 2026-01-12 cycle*
- **2026-01-10**: Claude Code 2.1.0 released — hooks for agents + skills, hot reload for skills, `/move` command to continue sessions at claude.ai/code — *source: 2026-01-10 cycle (Superhuman — Big Claude Code update arrives; World of AI)*
- **2026-01-09**: Claude Code upgraded for stronger agent control + stability; terminal upgrades for developer reliability — *source: 2026-01-09 cycle (World of AI — Claude Code Just Got BETTER)*
- **2026-01-05**: Claude Code masterclass published by Boris (Claude Code creator); demo builds a full working NES emulator end-to-end — framing: Claude Code as "autonomous developer" that explores, plans, executes, verifies — *source: 2026-01-05 cycle (TAAFT — Claude Code masterclass)*
- **2026-01-02**: Claude Code cited as a leading example of agents "writing code autonomously" — core to the [[vibe-coding]] revolution framing — *source: 2026-01-02 cycle*
- **2025-12-30**: Claude Code recurs alongside [[cursor]] as the default reference for AI-driven development — *source: 2025-12-30 cycle*
- **2025-12-25**: Karpathy-vibe-coding future cites Claude Code + [[lovable]] as primary examples of agent-driven development — *source: 2025-12-25 cycle*
- **2025-12-21**: Claude browser extension GA — reads console errors + DOM state inside the page, enabling in-browser Claude Code-style debug flows — *source: 2025-12-21 cycle*
- **2025-12-12**: Async subagents and faster compaction added to Claude Code CLI — *source: AlphaSignal "Microsoft 37.5M Copilot"*
- **2025-12-10**: Claude Code launches inside Slack — coding tasks delegable directly from threads ("Debuggers, REJOICE") — *source: The Rundown AI "Inside OpenAI's massive AI enterprise report"; TLDR AI; Mindstream*
- **2025-10-31**: "Claude Code secrets" coverage — power-user features and patterns surface — *source: TLDR AI "Claude Code secrets"*
- **2025-10-21**: [[claude-code-web]] launches — browser-/cloud-based Claude Code execution outside the terminal — *source: AlphaSignal "Anthropic releases Claude Code Web for cloud-based dev work"; TLDR AI "Claude Code Web"*
- **2025-10-13**: Claude Code plugins coverage — *source: TLDR AI "Claude Code plugins"*

## Key Facts

- Vendor: [[anthropic]]
- Underlying model (Apr 2026): [[claude-opus-4-7]]
- Form factor: CLI coding agent (counterpart to [[jules]])
- Extensibility: plugins (Oct 2025); Routines for scheduled / event-driven automation (Apr 2026)
- Hand-off target: downstream build step for [[claude-design]] artifacts

## Open Questions

- Routines pricing and quota model for managed-cloud execution?
- Relationship between Routines and GitHub Actions (do users see them as substitutes or complements)?
- Plugin distribution model — repository, registry, or curated?
- Does the plugin format align with [[claude-skills]], or remain a separate surface?

## Sources

- data/summaries/2025-10-13.json (TLDR AI — Claude Code plugins)
- data/summaries/2025-10-21.json (AlphaSignal — Claude Code Web; TLDR AI — Claude Code Web)
- data/summaries/2025-10-31.json (TLDR AI — Claude Code secrets)
- data/summaries/2025-12-10.json (The Rundown AI — Inside OpenAI's massive AI enterprise report [Claude Code in Slack]; TLDR AI; Mindstream)
- data/summaries/2025-12-12.json (AlphaSignal — Microsoft 37.5M Copilot [async subagents + compaction])
- data/summaries/2026-04-16.json (AlphaSignal — Anthropic presents always-on Routines in Claude Code; TAAFT — Claude Just Became a Designer; World of AI — ANTHROPIC DROPS Claude Design!; AI Automation Society — Nate Herk posted "Claude Opus 4.7 Just Dropped"; AI Automation Society — Nate Herk autonomous trading bot)
- data/summaries/2026-02-22.json (Claude Code full PR workflow + Claude Code Security announcement)
- data/summaries/2026-03-07.json (Claude Code Auto Mode for permission decisions)
- data/summaries/2026-03-10.json (Claude Code sleep/loop + scheduled tasks)
- data/summaries/2026-03-11.json (Claude Code Review multi-agent PR reviewer; fork-mid-session)
- data/summaries/2026-03-13.json (/btw contextual command; $2.5B ARR)
- data/summaries/2026-03-14.json (Claude Visuals beta)
- data/summaries/2026-03-21.json (Channels multi-platform message ingestion)
- data/summaries/2026-03-25.json (auto-dream memory consolidation)
- data/summaries/2026-03-27.json (The Code; Superhuman; AlphaSignal — Auto Mode GA; classifier-based permissions; self-hosted cloud agents)
- data/summaries/2026-04-01.json (World of AI; The Code; Superhuman; AlphaSignal; Uncovering AI; Staying Ahead with AI; TLDR AI — Claude Code Computer Use / Dispatch / Codex plugin)
- data/summaries/2026-04-02.json (World of AI — Claude Code LEAKED; AI Breakfast — agent architecture leaked; The Code — Anthropic leaks Claude Code; TLDR AI — three-layer memory architecture; TLDR — Claude Code leaks; Superhuman — major leak again; AI Automation Society — /buddy virtual pet)
- data/summaries/2026-04-03.json (Forward Future — Mass GitHub Takedowns; TLDR AI — leak analysis + malicious packages + Trinity-Large-Thinking)
- data/summaries/2026-04-06.json (AI Automation Society — virtual pets feature; Nate Herk Codex 10x Claude Code video)
- data/summaries/2026-04-07.json (third-party frontend access restricted)
- data/summaries/2026-04-08.json (Anthropic blocks third-party Claude Code usage)
- data/summaries/2026-04-10.json (self-evolving agent memory tutorial; Claude-Eval Benchmark)
- data/summaries/2026-04-12.json (Chase AI Masterclass Skill Packs + Agentic OS)
- data/summaries/2026-04-13.json (leak / harness-engineering recirc)
- data/summaries/2026-04-14.json (Coordinator Mode in development; desktop overhaul)
