---
name: Vibe Coding
description: Prompt-driven software development where agents write most of the code; Karpathy-popularized framing
type: trend
---

# Vibe Coding

> **Type**: trend
> **First mentioned**: 2025-12-25
> **Last updated**: 2026-06-28-morning (AlphaSignal canonicalizes *"voice is the new keyboard"* framing via [[wispr-flow]] — first publicly framed *voice-as-primary-vibe-coding-modality* lexical anchor in this wiki: developers prompting AI agents ~4× faster than typing, hands-free [[cursor]] / VS Code / JetBrains agent steering, ~50% character input via voice within 3 months of onboarding; productizes voice as the *prompting modality* for agents rather than just dictation; structurally complementary to the [[ethan-mollick]] writing-with-agents generalization and the cycle's broader procurement/cost-discipline arc — the *human–agent interaction surface* itself is the cycle's discovery, with voice surfacing as the dominant production-tier modality for IDE-adjacent agent steering)
> **Previously updated**: 2026-06-27-evening (**Hello, World! Industry News: ***"The cost of AI coding tools is rising quickly, with analysts warning that it could soon exceed the cost of employing software developers, emphasizing the need for stronger governance and cost management"*** — first publicly framed *AI-coding-tool-cost-may-soon-exceed-software-developer-salaries* canonical lexical anchor in this wiki + first publicly framed *cost-governance-as-vibe-coding-discipline* framing; pairs structurally with [[plandex]] open-source AI coding agent launch + [[glm-5-2]] *credible alternative to premium commercial coding assistants* framing — the cycle's broader pattern is that vibe-coding's economic equation is becoming a procurement question, not just a productivity question, with open-source alternatives ([[plandex]] / [[glm-5-2]]) emerging as cost-side responses to premium commercial assistant pricing pressure)
> **Previously updated**: 2026-06-08 (evening edition — MIT/Wharton + DORA study on 100K+ active GitHub devs: async agents generate **17× more code** but only **20% more software releases**; "attenuation effect" + "marketplace paradox" + Agentic Development Lifecycle (ADLC) framing)
> **Status**: stale
> **Related**: [[andrej-karpathy]], [[ethan-mollick]], [[claude-code]], [[cursor]], [[lovable]], [[cognition]], [[agent-frameworks]], [[enterprise-ai]]

## Summary

"Vibe coding" is the late-2025 / early-2026 framing — popularized by Andrej Karpathy — for a style of software development in which the human describes intent in natural language and an AI agent writes, runs, debugs, and iterates on most of the code. In Dec 2025 Karpathy elevates the term to discuss its likely reshaping of the software industry, emphasizing iteration speed and testing as the new bottleneck instead of typing code. By early 2026 newsletters frame [[claude-code]], [[cursor]], [[lovable]], and Replit as category leaders, while funding rounds (e.g. [[lovable]]'s $6.6B valuation) validate the segment as a venture investment thesis rather than a developer-tooling curiosity.

## Timeline

- **2026-06-28-morning**: AlphaSignal "Speak to your IDE, skip the keyboard" lands *"voice is the new keyboard"* canonical-framing on [[wispr-flow]] — devs prompting AI agents ~4× faster than typing, hands-free [[cursor]] / VS Code / JetBrains steering, ~50% character input via voice within 3 months, engineering teams at [[openai]] / [[vercel]] / Clay using; first publicly framed *voice-as-primary-vibe-coding-modality* in this wiki — the human–agent interaction surface itself emerges as the cycle's question, with voice surfacing as the production-tier modality for IDE-adjacent agent steering — *source: data/summaries/2026-06-28-morning.json (AlphaSignal — Speak to your IDE, skip the keyboard)*
- **2026-06-08-evening**: **MIT + Wharton + DORA study on 100,000+ active GitHub developers** finds that **async coding agents generate up to 17× more code** (one framing cites "741% more code") but the rate of shipping finished software has only ticked up by **~20%** — the bottleneck has shifted from syntax-creation to downstream validation (code review, testing) that still requires human oversight (AlphaSignal headline coverage). Two new concepts crystallize: (1) **"attenuation effect"** — massive upstream gains in code generation severely diminish as they approach release; (2) **"marketplace paradox"** — the flood of new software does not translate to user consumption (total user downloads + ratings remain flat within the first three months of launch). The study introduces the **Agentic Development Lifecycle (ADLC)** as the named successor framing to the traditional SDLC — developers shift from hands-on-keyboard creators to **high-level orchestrators**, validating architecture, defining tests, determining risk tolerance, and setting strict guardrails for autonomous tools. AI is framed as a **strict multiplier of an organization's existing capabilities** — flood the pipeline with AI-generated code when testing/CI/code-review processes are already slow, and the bottleneck gets worse, not better (first publicly framed cross-organizational pre-condition for vibe-coding ROI). The same cycle's "QA engineer is becoming the most valuable agent in software development" (The Code) operationalizes the ADLC framing — validation is now the moat, not generation; **Ghost** (open-source Postgres rebuilt for async agents) is the cycle's first DB-tier infrastructure surface explicitly designed for vibe-coding-class workloads. Anthropic's parallel claim that **Claude completes tasks in two hours that would take a human two to three days** (2026-06-06-evening cycle, see [[anthropic]]) is the lab-side speedup framing the study's "attenuation effect" partially absorbs — *source: data/summaries/2026-06-08-evening.json (AlphaSignal "AI floods your repo with code, but humans bottleneck the release" — MIT + Wharton + DORA study / 100K+ GitHub devs / async agents 17× code / 20% release lift / attenuation effect + marketplace paradox + ADLC + AI as strict-multiplier-of-existing-capabilities; The Code "How OpenAI engineers prompt" — QA engineer becomes most valuable agent + recursive loops not babysitting + Ghost open-source Postgres for async agents)*
- **2026-06-04**: [[ethan-mollick]] publicly extends agent-assisted-creation framing beyond coding into *book writing* — uses [[claude-code]] and GPT-5.5 as authorship tools for *Co-Existence and the End of Co-Intelligence*; introduces "AI agents as readers/critics/gatekeepers" — the first cross-discipline (writing) signal that vibe-coding-style agent collaboration is generalizing beyond software — *source: One Useful Thing — Co-Existence and the End of Co-Intelligence*
- **2026-01-17**: [[claude-code]] diff view + GitHub cross-agent memory + OpenCode GitHub Copilot integration — three layers of the vibe-coding stack fill in — *source: AlphaSignal 2026-01-17*
- **2026-01-10**: [[claude-code]] 2.1.0 lands with skills hot reload + hooks + `/move`; Grok Build previewed — *source: 2026-01-10 cycle*
- **2026-01-08**: Tailwind Labs reports 75% layoff, explicitly attributed to AI-driven coding tools reducing staffing needs — first high-profile labor-impact case tied to vibe-coding adoption — *source: 2026-01-08 cycle*
- **2026-01-05**: Claude Code masterclass (Boris, Claude Code creator) — end-to-end NES emulator build as canonical "autonomous developer" demo — *source: TAAFT 2026-01-05*
- **2026-01-02**: Framed as "revolutionizing the programming profession" — agents like [[claude-code]] writing code autonomously; [[lovable]] and Replit cited alongside as pillars of the category — *source: 2026-01-02 cycle*
- **2025-12-25**: Karpathy discusses the future of "vibe coding" and its potential to transform software development — iteration speed and testing as central bottlenecks; [[claude-code]] and [[lovable]] cited as active examples — *source: 2025-12-25 cycle*
- **2025-12-23**: [[lovable]] raises $330M at $6.6B valuation — validates the vibe-coding category as venture thesis — *source: 2025-12-23 cycle*

## Key Facts

- Term popularizer: [[andrej-karpathy]]
- Category leaders (late 2025): [[claude-code]], [[cursor]], [[lovable]], Replit
- Bottleneck shift: from code-writing speed to iteration + testing speed
- Emerging interaction modality (Jun 2026): voice via [[wispr-flow]] — ~4× typing throughput for prompting agents in [[cursor]] / VS Code / JetBrains

## Open Questions

- What share of professional software work will be "vibe-coded" by end of 2026?
- Which vibe-coding layer (CLI / IDE / browser / agent framework) captures the most durable distribution?
- How do regulated sectors (finance, healthcare) adapt review/audit to vibe-coded artifacts?

## Sources

- data/summaries/2026-06-05-morning.json (One Useful Thing — Co-Existence and the End of Co-Intelligence — Mollick on writing-with-Claude-Code)
- data/summaries/2025-12-23.json (Lovable $330M raise)
- data/summaries/2025-12-25.json (Karpathy on vibe coding future)
- data/summaries/2026-01-02.json (vibe-coding revolution framing)
- data/summaries/2026-01-05.json (TAAFT — Claude Code masterclass / NES emulator)
- data/summaries/2026-01-08.json (Tailwind Labs 75% layoff attributed to AI coding tools)
- data/summaries/2026-01-10.json (Claude Code 2.1.0 / Grok Build)
- data/summaries/2026-01-17.json (Claude Code diff view / GitHub cross-agent memory / OpenCode)
