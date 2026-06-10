---
name: Cognition
description: AI coding-agent lab; ships SWE-1.5 on Windsurf in late Oct 2025; same week as Cursor 2.0
type: company
---

# Cognition

> **Type**: company
> **First mentioned**: 2025-10-30
> **Last updated**: 2026-06-10-morning (FrontierCode code-quality benchmark explicitly attributed to Cognition per AlphaSignal — earlier coverage cycle had framed it as an AINews / Latent Space artifact; corrects vendor attribution and threads the benchmark into Cognition's product strategy)
> **Status**: active
> **Related**: [[cursor]], [[claude-code]], [[jules]], [[agent-frameworks]], [[frontiercode]], [[claude-opus-4-8]], [[claude-fable-5]]

## Summary

Cognition is the lab behind the Devin coding agent and the Windsurf AI IDE (acquired earlier in 2025). In late October 2025 it shipped SWE-1.5, a faster coding agent available on Windsurf — released the same week as [[cursor]] 2.0 / [[cursor-composer]], cementing the "AI IDE labs ship their own coding model" pattern that defined the period. Coverage frames Cognition + Cursor as the two highest-velocity vendors in the agentic coding-IDE category, with [[claude-code]] and [[jules]] as the first-party / lab-side peers.

## Timeline

- **2026-06-10-morning**: **[[frontiercode]] attributed to Cognition** per AlphaSignal headline "🧪 Cognition's FrontierCode: AI models score just 13/100 on real code" — first publicly framed Cognition-side attribution for the code-quality benchmark; corrects the 2026-06-09-evening AINews / Latent Space framing as the *coverage* venue rather than the builder. Threads neatly into Cognition's product strategy: the 2026-05-29 funding cycle positioned Devin's 89%-self-coding claim as the top-of-leaderboard data point under SWEBench-style code-correctness evaluation; FrontierCode reframes the evaluation surface to where Cognition can articulate the gap between *agent writes code* and *code is actually mergeable* as the next-generation defensible benchmark — Cognition has clear strategic incentive to publish a code-quality (not just code-correctness) benchmark even as its own Devin agent dominates the prior generation of code-correctness evals. **[[claude-opus-4-8]] best score: ~13/100** ("AI models score just 13/100 on real code"); coverage casts the result as "coding is much less 'solved' than popular benchmarks imply" (AINews "War on Slop" framing). Pipeline summaries unavailable this cycle (OpenRouter key-limit-exceeded error on all 10 newsletters) — subject-only data; full Cognition-side launch artifact (release announcement / leaderboard / GitHub artifact / judging protocol) will be reconstructed on the next successful summarization pass — *source: data/summaries/2026-06-10-morning.json (AlphaSignal — Cognition's FrontierCode: AI models score just 13/100 on real code; pipeline summary unavailable due to OpenRouter key-limit-exceeded error)*
- **2026-05-29**: **Cognition raises $1B Series D at $26B valuation** (~2.5× the prior round; one of the largest independent agent-lab raises to date); Devin **now writes 89% of its own code** (up from 13% in December 2025) — first publicly disclosed "agent writes its own implementation at supermajority share" data point; **revenue grew from $37M to $492M in 12 months**; over **$1B ARR projection by year-end**; named customers include Exa + Modal; coverage frames Cognition as the second-largest independent agent lab (alongside [[anthropic]] given the Claude Code surface) — *source: 2026-05-29 cycle (AINews — Cognition raises $1B in $26B Series D; The Rundown AI — Cognition $1B at $26B / 10× growth since January; Forward Future — Cognition $1B; AlphaSignal — Cognition $1B / Devin 89% own code / $37M → $492M revenue; Evolving AI Insights — Cognition $1B at $26B more than doubling in 8 months)*
- **2025-11-06**: Launches Codemaps — builds structured maps of complex codebases — *source: AlphaSignal "Cognition launches Codemaps"*
- **2025-10-31**: AlphaSignal: Cognition releases a faster coding agent on Windsurf — *source: AlphaSignal "Cursor unveils Composer"*
- **2025-10-30**: SWE-1.5 lands on Windsurf — *source: TLDR AI "Cursor 2.0, Cognition's SWE-1.5, agent labs"*

## Key Facts

- Flagship products: Devin (autonomous coding agent), Windsurf (AI IDE), Codemaps, [[frontiercode]] benchmark
- Late-2025 release: SWE-1.5 (faster coding agent)
- Distribution: Windsurf
- Same-week peer: [[cursor-composer]]
- Devin self-coding rate (2026-05-29): 89% of Devin's own code authored by Devin
- 2026 funding: $1B Series D at $26B valuation (revenue grew $37M → $492M in 12 months; $1B ARR projection by year-end)
- Benchmarks published: [[frontiercode]] (code-quality / mergeability, June 2026; best model [[claude-opus-4-8]] at ~13%)

## Open Questions

- Cognition's funding and valuation as of Oct 2025?
- Devin vs SWE-1.5 — distinct surfaces or overlapping?
- Pricing of SWE-1.5 vs other agentic coding offerings?

## Sources

- data/summaries/2025-10-30.json (TLDR AI — Cursor 2.0, Cognition's SWE-1.5)
- data/summaries/2025-10-31.json (AlphaSignal — Cursor unveils Composer)
- data/summaries/2025-11-06.json (AlphaSignal — Cognition launches Codemaps)
- data/summaries/2026-05-29.json (AINews — Cognition $1B Series D / $26B; The Rundown AI — 10× growth since January; Forward Future — Cognition $1B; AlphaSignal — Devin 89% own code / $37M → $492M revenue; Evolving AI Insights — Cognition doubling in 8 months)
- data/summaries/2026-06-09-evening.json (AINews "[AINews] FrontierCode: Benchmarking for Code Quality over Slop" — FrontierCode benchmark coverage; vendor attribution originally framed as AINews / Latent Space, corrected on 2026-06-10-morning)
- data/summaries/2026-06-10-morning.json (AlphaSignal — Cognition's FrontierCode: AI models score just 13/100 on real code — explicit Cognition attribution; subject-only data due to OpenRouter key-limit-exceeded pipeline error)
