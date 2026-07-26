---
name: Honeycomb (Claude Honeycomb EAP)
description: Unreleased Anthropic research model briefly visible inside Cursor's model selector — widely speculated to be Claude Opus 5; 1M-token context, "extra high effort" reasoning tier, safety fallback to Claude Opus 4.8
type: product
---

# Honeycomb (Claude Honeycomb EAP)

> **Type**: product
> **Vendor**: [[anthropic]]
> **First mentioned**: 2026-07-16-evening
> **Last updated**: 2026-07-26-morning (**RESOLVED — Honeycomb identity confirmed as [[claude-opus-5]] which shipped Jul 24 2026, 8 days after the Cursor leak**. Anthropic's official Opus 5 launch materials + five-newsletter saturation coverage (World of AI HIGH + AINews HIGH + NLP Newsletter HIGH + AI Automation Society HIGH + Uncovering AI HIGH) canonicalize the Cursor-observed *"Claude Honeycomb EAP"* Anthropic-research-model listing as the Opus 5 Early Access Preview: the 1M-token context + safety-fallback-to-Opus-4.8 architecture + "extra high effort" reasoning tier all match Opus 5's shipped feature set (Opus 5 pricing $5/$25 unchanged from Opus 4.8 + 1M context + effort setting low/medium/high + automatic safety fallbacks that route disallowed requests to lower-tier models). Structurally significant three ways: (i) **Honeycomb → Opus 5 8-day leak-to-ship interval** — validates the mid-2026 *frontier-lab-preview-through-Cursor-model-picker* pattern (parallels [[kimi-k3]] pulled-Moonshot-page leak → Kimi K3 formal release, both ~1 week); (ii) **Safety-fallback-to-Opus-4.8 productized as ship-tier feature** — the leaked *tiered-safety-instrumentation architecture* (frontier tier automatically routes sensitive prompts to a well-audited previous flagship rather than hard-blocking) is now Opus 5's canonical safety-fallback pattern, first-in-industry ship-tier design; (iii) **"Extra high effort" reasoning tier maps to Opus 5's effort setting (low/medium/high)** — Honeycomb's leaked reasoning-tier framing sharpens into Opus 5's productized effort knob. See [[claude-opus-5]] (NEW) + [[anthropic]] + [[cursor]] — *source: data/summaries/2026-07-26-morning.json (World of AI HIGH "Claude Opus 5 Is OUT!"; AINews HIGH "Claude Opus 5: Fable-level performance at Opus price"; Uncovering AI HIGH; researchFindings.additionalContext — Claude Opus 5)*)
> **Previously updated**: 2026-07-16-evening (**Created — World of AI HIGH "OPUS 5 LEAKS 🍯 + Kimi K3 Incoming 👀" surfaces an unreleased Anthropic model codenamed *Honeycomb* that briefly appeared inside [[cursor]]'s model selector as "Claude Honeycomb EAP" (Early Access Preview) and vanished within hours** — flagged by developer @chetaslua on X; description reads *"Anthropic research model with per-turn controls and safety fallbacks"* + **1-million-token context window** + **"extra high effort" reasoning tier** + reported safety fallback that routes sensitive prompts down to **Claude Opus 4.8**; researchFindings web-search cohort (multi-source: ExplainX, The New Stack, WinCentral) treats Honeycomb as strongest evidence yet that Anthropic is preparing **Claude Opus 5** for launch by end-of-July 2026, potentially built on or alongside the [[claude-fable-5]] architecture with ~20-25% benchmark gains over 4.5 Opus + SWE-Bench Verified >90% (per prior CEO commentary). Structurally significant three ways: (i) **1M-context frontier tier normalization on Anthropic's flagship line** — Claude Opus 4.x historically capped at 500K-1M-context tiers via extension; Honeycomb's 1M native context matches [[claude-fable-5]] + [[kimi-k3]] + [[gpt-5-6]] Sol; (ii) **Safety-fallback-to-Opus-4.8 as architectural pattern** — first publicly framed *frontier-tier model with a lower-tier automatic-fallback for sensitive prompts* in this wiki, reads as a *tiered safety-instrumentation* pattern where the top model routes down to a well-audited previous flagship on high-risk categories rather than refusing; structurally novel and likely to be copied; (iii) **Cursor-as-early-access-surface** — Cursor briefly acting as Honeycomb's EAP surface reinforces the pattern of frontier-lab model previews landing first in coding-agent IDEs before official announcement (parallels [[gpt-5-6]] Sol's early Codex sightings). Anthropic has not acknowledged or documented Honeycomb; all details from screenshots + developer reports + community analysis. Body-recovery items: (a) full spec sheet (parameter count / MoE-vs-dense / training corpus), (b) formal Opus 5 launch date + pricing, (c) whether Honeycomb is Opus 5 or a distinct research tier, (d) safety-fallback trigger criteria and evaluation methodology — *source: data/summaries/2026-07-16-evening.json (World of AI HIGH "OPUS 5 LEAKS 🍯 + Kimi K3 Incoming 👀" — Anthropic's Honeycomb slipped out inside Cursor and looks a lot like Opus 5; researchFindings.additionalContext for Anthropic + Claude Honeycomb EAP + Claude Opus 5)*)
> **Status**: **RESOLVED as [[claude-opus-5]]** — Anthropic shipped Opus 5 on Jul 24 2026 (8 days after the Cursor leak); Honeycomb was the Early Access Preview build
> **Related**: [[claude-opus-5]], [[anthropic]], [[claude-opus-4-8]], [[claude-fable-5]], [[cursor]], [[kimi-k3]], [[gpt-5-6]], [[claude-mythos]]

## Summary

Honeycomb — labeled *"Claude Honeycomb EAP"* in the wild — is an **unreleased Anthropic research model** that briefly appeared inside [[cursor]]'s model picker in mid-July 2026 before being removed within hours. The listing described it as an *"Anthropic research model with per-turn controls and safety fallbacks"* offered as Early Access Preview, with a **1-million-token context window**, an **"extra high effort" reasoning tier**, and a safety fallback that reportedly routes sensitive prompts down to **[[claude-opus-4-8]]** rather than handling them itself. Community consensus — developer @chetaslua on X, plus tracking coverage from ExplainX / The New Stack / WinCentral — treats Honeycomb as the strongest signal yet that Anthropic is preparing to launch **Claude Opus 5**, potentially by end-of-July 2026.

If Honeycomb is Opus 5, it would represent Anthropic's first frontier-tier flagship with an *architected tiered safety-fallback pattern* (frontier model routes down to a well-audited previous flagship for sensitive categories rather than refusing). It also normalizes **1M-token native context** across Anthropic's flagship line, matching [[claude-fable-5]] + [[kimi-k3]] + [[gpt-5-6]] Sol at the frontier tier. Anthropic has not acknowledged or documented Honeycomb; all information to date is from screenshots and developer analysis surfaced via a Cursor sighting.

## Timeline

- **2026-07-16-evening**: **Created** — Honeycomb briefly visible inside Cursor as "Claude Honeycomb EAP" — 1M context, "extra high effort" reasoning tier, safety fallback to Opus 4.8, per-turn controls; widely speculated as Claude Opus 5 preview; @chetaslua screenshots + researchFindings multi-source confirmation — *source: data/summaries/2026-07-16-evening.json (World of AI HIGH "OPUS 5 LEAKS 🍯 + Kimi K3 Incoming 👀"; researchFindings.additionalContext for Anthropic + Claude Honeycomb EAP + Claude Opus 5)*

## Key Facts

- Vendor: [[anthropic]] (unacknowledged; Early Access Preview leak)
- Codename: **Honeycomb** (Cursor UI label: *"Claude Honeycomb EAP"*)
- Context window: **1M tokens**
- Reasoning tier: **"extra high effort"**
- Safety fallback: routes sensitive prompts to **[[claude-opus-4-8]]**
- Discovery: brief appearance in [[cursor]] model selector; developer sighting via @chetaslua on X
- Speculated identity: **Claude Opus 5** (Anthropic's next-gen flagship)
- Reported (per prior CEO comments): ~20-25% benchmark gains vs 4.5 Opus; SWE-Bench Verified >90%

## Open Questions

- Is Honeycomb actually [[claude-opus-4-8]]'s successor (Claude Opus 5), or a distinct research tier?
- Full spec sheet (parameter count, MoE vs dense, training compute)
- Formal launch date + pricing tier
- Safety-fallback trigger criteria — which categories route down to Opus 4.8?
- Evaluation methodology for the "extra high effort" reasoning tier
- Anthropic's official response to the leak
- Relationship to [[claude-fable-5]] and [[claude-mythos]] tiers

## Sources

- data/summaries/2026-07-16-evening.json (World of AI HIGH "OPUS 5 LEAKS 🍯 + Kimi K3 Incoming 👀" — Anthropic's Honeycomb / potentially Claude Opus 5 / briefly visible inside Cursor / 1M context + extra-high-effort reasoning + safety fallback to Opus 4.8; researchFindings.additionalContext for Anthropic + Claude Honeycomb EAP + Claude Opus 5)
