---
name: Claude Opus 4.7
description: Anthropic's flagship model, April 2026 release — stronger coding, 3.75 MP vision, xhigh effort, file-based memory
type: product
---

# Claude Opus 4.7

> **Type**: product
> **First mentioned**: 2026-04-16
> **Last updated**: 2026-06-09-morning (matches dedicated chemistry software ChemDraw on NMR analysis — ±0.079 ppm hydrogen prediction accuracy vs ±0.20 ppm acceptable, no proprietary license needed)
> **Status**: active
> **Related**: [[anthropic]], [[claude-code]], [[claude-design]], [[cursor]], [[agent-frameworks]]

## Summary

Claude Opus 4.7 is [[anthropic]]'s flagship Claude model as of April 2026, positioned as a stronger coding/engineering model with meaningfully better vision and a new "xhigh" reasoning-effort dial. It succeeds Opus 4.6 after what newsletters characterized as a rough reception for that version, and multiple independent testers reported 4.7 clearly outperforms 4.6 on complex vision and software-engineering tasks. Alongside 4.7, Anthropic appears to maintain an unreleased internal model referred to as "Mythos" that is said to still lead Opus 4.7 on SWE-bench Pro.

## Timeline

- **2026-06-09-morning**: **Opus 4.7 matches dedicated chemistry software ChemDraw on NMR analysis** — AlphaSignal headline: Opus 4.7 can now analyze NMR data and propose molecular structures with **±0.079 ppm hydrogen prediction accuracy** vs the field-acceptable **±0.20 ppm margin** — meaningfully *better* than the standard tolerance and not just a parity result. First publicly framed *general-purpose-LLM-vs-domain-specific-software* parity-or-better result on a benchmark traditionally requiring a proprietary chemistry-software license (ChemDraw). AlphaSignal's broader framing: "the real story isn't one model, it's a pattern — general-purpose frontier models are increasingly disrupting the business model of legacy domain-software vendors without a domain fine-tune"; concrete data point that the publicly-available Opus 4.7 (no [[claude-mythos]] tier needed) can substitute for vendor-licensed scientific software in NMR / molecular-structure-proposal workflows — *source: data/summaries/2026-06-09-morning.json (AlphaSignal "🧪 Claude Opus 4.7 beats ChemDraw on NMR analysis, no license needed" — Opus 4.7 ±0.079 ppm hydrogen prediction vs ±0.20 ppm acceptable / no proprietary chemistry software license needed / disrupts legacy chemistry-vendor business model; researchFindings.additionalContext for Claude Opus 4.7 — flagship general-availability model / 1M context / 128k output / 3.75 MP vision / default enterprise reasoning + coding engine / NMR + scientific workflows / Opus 4.8 incremental upgrade now rolling out)*
- **2026-04-16**: Opus 4.7 released across all major cloud platforms at $5 / $25 per million tokens (input / output); features xhigh effort, task budgets, desktop agent controls, file-based memory, 3.75 MP / 2,576-pixel vision, native design tools (see [[claude-design]]) — *source: AlphaSignal "Anthropic Opus 4.7: 3.75MP vision + desktop agent controls"; World of AI "ANTHROPIC: Opus 4.7 DROPS!"; TLDR "Opus 4.7"; TLDR AI "Claude Opus 4.7"; Forward Future "Anthropic challenges OpenAI in London"; AI Breakfast "Claude Opus 4.7 gains native design tools"; Superhuman "Claude Opus 4.7 arrives"; Staying Ahead with AI "opus 4.7 tested"; The Code "Anthropic does it again"; TAAFT "Claude Opus 4.7 Drops"; Hello, World! "Claude Opus 4.7 and Kubernetes is not Enough now!"*

## Key Facts

- Vendor: [[anthropic]]
- Release date: 2026-04-16 (broad, multi-cloud)
- Pricing: $5 / $25 per million tokens (input / output)
- Benchmarks reported: 64.3% SWE-bench Pro (beats GPT-5.4); +13% on Anthropic's internal 93-task coding benchmark; 70% CursorBench; user-task resolution reportedly up from 58% → 70% vs 4.6
- Vision: up to 3.75 MP / 2,576-pixel input (3× higher than prior Opus)
- Reasoning controls: new "xhigh" effort level; explicit task budgets
- Memory: file-based memory that retains context across sessions
- Companion surfaces: [[claude-design]] (native design tools); desktop agent controls
- Positioned below an unreleased internal Anthropic model called "Mythos" that reportedly still leads on SWE-bench Pro
- Domain-software substitute proof points: matches/beats **ChemDraw on NMR analysis** at ±0.079 ppm hydrogen prediction accuracy (Jun 2026, vs ±0.20 ppm acceptable margin)

## Open Questions

- What is Mythos, and when (if ever) does Anthropic release it?
- How does "file-based memory" differ from existing Claude Memory / Skills?
- Do xhigh and task budgets compose with [[claude-code]] [[agent-frameworks|agent]] workflows out of the box?
- Is the 64.3% SWE-bench Pro figure on the public leaderboard or an Anthropic-reported number?

## Sources

- data/summaries/2026-04-16.json (AlphaSignal — Anthropic Opus 4.7: 3.75MP vision + desktop agent controls; World of AI — ANTHROPIC: Opus 4.7 DROPS!; TLDR — Opus 4.7, the clip economy, Cloudflare Agents Week; TLDR AI — Claude Opus 4.7, OpenAI's GPT Rosalind, Perplexity Personal Computer; Forward Future — Anthropic challenges OpenAI in London; AI Breakfast — Claude Opus 4.7 gains native design tools that could challenge Figma; Superhuman — Claude Opus 4.7 arrives; Staying Ahead with AI — opus 4.7 tested; The Code — Anthropic does it again; TAAFT — Claude Opus 4.7 Drops; Hello, World! — Claude Opus 4.7 and Kubernetes is not Enough now!; The Rundown AI — OpenAI's superapp hiding inside Codex)
