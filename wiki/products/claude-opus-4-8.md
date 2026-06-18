---
name: Claude Opus 4.8
description: Anthropic's May 2026 flagship — 4× less likely to fake confidence; SWE-bench Pro / Terminal-Bench 2.1 / OSWorld-Verified / GDPval-AA SOTA; fast mode 2.5× / 1/3 cost; 1M context; same price as 4.7
type: product
---

# Claude Opus 4.8

> **Type**: product
> **First mentioned**: 2026-05-26 (rumored)
> **Last updated**: 2026-06-10-morning ([[claude-fable-5]] release framed as "Beats Opus" per TAAFT — first publicly framed cross-cycle Anthropic-internal-supersession signal pointing at Opus 4.8 being overtaken on at least one published benchmark by the new Fable tier)
> **Status**: launched (potentially superseded as Anthropic flagship by [[claude-fable-5]] as of 2026-06-10-morning)
> **Related**: [[anthropic]], [[claude-opus-4-7]], [[claude-code]], [[claude-mythos]], [[claude-fable-5]], [[claude-sonnet-4-6]], [[gpt-5-5]], [[gemini-3-5-flash]], [[agent-frameworks]], [[frontiercode]]

## Summary

Claude Opus 4.8 is [[anthropic]]'s 2026-05-30 flagship model, launched alongside Anthropic's $65B / $965B Series H raise and the [[claude-code]] **Dynamic Workflows** orchestration feature. Headline framing: **4× less likely than [[claude-opus-4-7]] to leave flaws in its own code unflagged** + a roughly 4× reduction in confidently-stated guesses ("honesty pitch"). Ships at the same price as Opus 4.7 with a new **fast mode running ~2.5× faster at roughly one-third the cost**, a **1M-token context window**, a lower **1,024-token minimum cacheable prompt length** to make large-context workflows cheaper, and mid-conversation system messages. SOTA on SWE-Bench Pro, FrontierSWE, APEX-SWE, Terminal-Bench 2.1, OSWorld-Verified, and GDPval-AA in launch coverage; outperforms [[gpt-5-5]] and Gemini 3.1 Pro on agentic coding, computer use, and financial analysis per The Rundown AI's launch synthesis. Rolled out across AWS Bedrock regions on day one. Positioned in coverage as a *reliability-and-efficiency* release ("Anthropic pushes reliability over raw gains") rather than a raw-capability jump — the Mythos-class capability is reserved for [[claude-mythos]] which heads to Claude Code + a new Claude Security dashboard the same week.

## Timeline

- **2026-06-10-morning**: **[[claude-fable-5]] released and explicitly framed as "Beats Opus"** by TAAFT ("🦾 Claude Fable 5 Drops (Beats Opus)") — first publicly framed cross-cycle Anthropic-internal-supersession signal where Opus 4.8 is overtaken by a *new* versioned Claude tier (Fable) rather than by an Opus 4.9 / Opus 5 successor in the Claude 4.x numbering track; corroborated same cycle by World of AI ("Anthropic: Claude Fable 5 DROPS! 🧠🔥") and Interconnects ("Claude Fable 5 and new AI safety fables"). Subject-only data this cycle (OpenRouter key-limit-exceeded pipeline error on all 10 newsletters) — full disambiguation of *which* Opus 4.8 launch-coverage SOTA benchmark Fable 5 beats (SWE-Bench Pro / FrontierSWE / APEX-SWE / Terminal-Bench 2.1 / OSWorld-Verified / GDPval-AA / FrontierCode) will need to wait on a follow-up summarization cycle. Reframes Opus 4.8's ~12-day reign as Anthropic's flagship (2026-05-30 → 2026-06-10) into the new shortest-flagship-window pattern seen in this wiki, consistent with the 2026-06-08-evening coordinated-pause cycle's framing that Anthropic itself is accelerating capability releases — *source: data/summaries/2026-06-10-morning.json (TAAFT — Claude Fable 5 Drops (Beats Opus); World of AI — Claude Fable 5 DROPS!; Interconnects by Nathan Lambert — Claude Fable 5 and new AI safety fables; pipeline summaries unavailable due to OpenRouter key-limit-exceeded error)*
- **2026-06-09-evening**: **Opus 4.8 scores ~13% on the hardest subset of [[frontiercode]]** — AINews / Latent Space's new code-quality benchmark, where each task required >40 hours of OSS-maintainer work to construct and the success metric is whether code is *actually mergeable*, not whether it passes unit tests. AINews explicit framing: "coding is much less 'solved' than popular benchmarks imply." First publicly framed sharp gap between Opus 4.8's SOTA on SWE-Bench Pro / FrontierSWE / APEX-SWE / Terminal-Bench 2.1 / OSWorld-Verified / GDPval-AA (2026-05-30 launch) and its single-digit-ish-teens score on a code-quality-first benchmark — concretizes the AINews "War on Slop" framing into a Claude-flagship benchmark number; positions FrontierCode as the new evaluation floor that frontier coding-agent vendors must address — *source: data/summaries/2026-06-09-evening.json (AINews "[AINews] FrontierCode: Benchmarking for Code Quality over Slop" — best model Opus 4.8 ~13% on hardest subset / 40-hour tasks / OSS maintainers / coding much less solved than popular benchmarks imply)*
- **2026-05-30**: Claude Opus 4.8 released — same price as 4.7; 4× lower unflagged-code-flaw rate; new fast mode (~2.5× faster, ~1/3 the cost); 1M-token context; 1,024-token minimum cacheable prompt; mid-conversation system messages; SOTA on SWE-Bench Pro / FrontierSWE / APEX-SWE / Terminal-Bench 2.1 / OSWorld-Verified / GDPval-AA; outperforms [[gpt-5-5]] and Gemini 3.1 Pro on agentic coding + computer use + financial analysis per launch coverage; AWS Bedrock rollout across regions same day; [[claude-code]] **Dynamic Workflows** orchestrate up to **1,000 parallel sub-agents in a single session** as a paired research-preview feature; framed in coverage as a *reliability-and-efficiency* release rather than a raw-capability jump — *source: 2026-05-30 cycle (World of AI — Claude Opus 4.8 Just Dropped / 4× less likely to fake confidence / fast mode 2.5× / 1024 cacheable prompt / Mythos to all customers in coming weeks; AINews — Anthropic $965B Series H + Opus 4.8 + Dynamic Workflows + ultracode / fast mode 2.5× and 3× cheaper / 1M context; The Rundown AI — Anthropic just eclipsed OpenAI / Opus 4.8 outperforms GPT-5.5 + Gemini 3.1 Pro on agentic coding + computer use + financial analysis; Evolving AI Insights — Opus 4.8 hybrid reasoning + 1M context + 4× lower unflagged code flaws; Forward Future — Anthropic pushes reliability over raw gains; TLDR Newsletter — Opus 4.8 + Dynamic Workflows; Staying Ahead with AI — opus vs opus / honesty test pass for both 4.7 and 4.8 — "sets a new floor for honesty in AI models")*
- **2026-05-26**: First "Claude Opus 4.8 rumored" mention in TLDR AI's Mythos-1 coverage — *source: 2026-05-26 cycle (TLDR AI — Mythos 1 + Claude Opus 4.8 rumored)*

## Key Facts

- Vendor: [[anthropic]]
- Pricing: same as [[claude-opus-4-7]] ($5/$25 per M tokens); fast mode ~1/3 the cost
- Context window: 1M tokens
- Minimum cacheable prompt: 1,024 tokens (lower than Opus 4.7)
- Fast mode: ~2.5× speed vs normal Opus 4.8
- Reliability: 4× less likely to leave code flaws unflagged vs Opus 4.7
- Honesty: "tells you when it's unsure" framing; 4× drop in confidently-stated guesses
- Benchmarks (launch coverage SOTA claims): SWE-Bench Pro, FrontierSWE, APEX-SWE, Terminal-Bench 2.1, OSWorld-Verified, GDPval-AA
- Cross-lab comparison: outperforms [[gpt-5-5]] and Gemini 3.1 Pro on agentic coding, computer use, financial analysis (Anthropic launch framing)
- Distribution: Claude.ai + Claude API + AWS Bedrock (multi-region day-one) + Google Cloud Vertex AI + Microsoft Foundry (expected, given Opus 4.7 distribution lineage)
- Paired release: [[claude-code]] Dynamic Workflows (up to 1,000 parallel sub-agents per session)

## Open Questions

- Does Opus 4.8's honesty improvement hold up under adversarial probing beyond the launch-cycle press tests?
- Are the SOTA-benchmark claims independently reproduced once external evals (Artificial Analysis, DeepSWE, AIDER Polyglot) refresh?
- How does Opus 4.8 compare against [[claude-mythos]] inside [[claude-code]] when Mythos reaches all customers "in the coming weeks"?
- Token-economics inflection — does fast mode's 1/3 cost reverse the late-May Uber / Microsoft "tokenmaxxing" backlash?

## Sources

- data/summaries/2026-05-26.json (TLDR AI — Claude Opus 4.8 rumored)
- data/summaries/2026-05-30.json (World of AI — Claude Opus 4.8 Just Dropped; AINews — Anthropic $965B Series H + Opus 4.8 + Dynamic Workflows; The Rundown AI — Anthropic eclipsed OpenAI; Evolving AI Insights — Opus 4.8 hybrid reasoning + 1M context; Forward Future — Opus 4.8 reliability over raw gains; TLDR Newsletter — Opus 4.8 + Dynamic Workflows; Staying Ahead with AI — opus vs opus honesty test; Simon Willison's Newsletter — Anthropic and OpenAI have found product-market fit)
