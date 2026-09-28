---
name: AI Deanonymization
description: Using LLMs to unmask anonymous online users by stylometric + attribute-inference profile-matching across platforms — ETH Zurich + Nicholas Carlini (Anthropic) demonstrate ~90% success at $1–$4 per person in Sep 2026
type: topic
---

# AI Deanonymization

> **Type**: topic
> **First mentioned**: 2026-09-28-morning
> **Last updated**: 2026-09-28-morning
> **Status**: active
> **Related**: [[anthropic]], [[chatgpt]], [[gemini]], [[ai-cybersecurity-arms-race]], [[ai-regulation]], [[prompt-injection]]

## Summary

**AI deanonymization** is the use of large language models to unmask anonymous online users by analyzing their writing style and cross-referencing incidentally leaked personal details (city, job, hobbies, phrasing patterns) against public profiles on other platforms like LinkedIn or Instagram. A **September 2026 paper from researchers at ETH Zurich and Nicholas Carlini (Anthropic)** demonstrated the attack at scale: **~90% success rate at $1–$4 per target person**, using [[gpt-5-2]]-tier and Gemini-3-tier LLMs to read posts and search for matching profiles.

The economic shift is what matters. Arvind Narayanan (a Netflix Prize deanonymization co-author) has warned about the underlying attack surface for over a decade; a January 2026 paper had already demonstrated similar attacks. What is new is the **dramatic cost collapse** — LLM inference makes population-scale unmasking cheap enough for individual attackers, harassment campaigns, or aggregation-by-vendor. Defenses are emerging: EFF's Surveillance Self-Defense guide, tools like Redact for scrubbing old Reddit comments, and adversarial paraphrasing systems built by other research groups.

## Timeline

- **2026-09-28-morning**: **The AI Leverage MEDIUM cycle-headline *"Read this before your next anonymous post"* — ETH Zurich + Nicholas Carlini (Anthropic) canonical paper anchor**. *"AI can unmask anonymous online users by analyzing their writing style and searching for matching profiles, with a success rate of around 9 out of 10, and at a cost of between $1 and $4 per person"* + *"The system uses large language models (LLMs) like GPT-5.2 and Gemini 3 to read and analyze online posts, and can identify users who have mentioned specific details such as their city, job, or hobbies, which can be matched to their real identity"* + Arvind Narayanan (Netflix Prize attack co-author) attributed multi-year warning + January 2026 prior paper demonstrated similar attacks + EFF Surveillance Self-Defense guide + Redact scrub tool for Reddit comments named as defenses. daily-digest Top Story #5: *"Researchers demonstrate the ability to unmask anonymous online users using AI and large language models"*. First-in-wiki canonical anchor cluster: (a) **ETH Zurich + Nicholas Carlini (Anthropic) named-affiliation canonical author attribution anchor**; (b) **~9-out-of-10 success rate + $1–$4 per person concrete cost-and-accuracy canonical anchor pair**; (c) **GPT-5.2 + Gemini 3 named-frontier-LLM concrete-attacker-substrate canonical anchor pair**; (d) **Arvind Narayanan multi-year-warning + January-2026-prior-paper canonical prior-art anchor pair**; (e) **EFF Surveillance Self-Defense + Redact concrete-defense-tool canonical anchor pair**. See [[anthropic]] + [[ai-cybersecurity-arms-race]] + [[chatgpt]] + [[gemini]] — *source: data/summaries/2026-09-28-morning.json (The AI Leverage MEDIUM "Read this before your next anonymous post"; daily-digest Top Story #5)*

## Key Facts

- **Attack recipe**: LLM reads target's public anonymous posts → extracts stylometric fingerprint + incidentally-leaked attributes (city, job, hobbies) → cross-references against LinkedIn/Instagram/other-platform profiles → returns candidate identity match with confidence
- **Cost per target (Sep 2026)**: $1–$4 per person
- **Success rate**: ~90% (9 out of 10 in the ETH Zurich + Carlini demonstration)
- **Attacker-side substrate**: GPT-5.2, Gemini 3 (any general-purpose frontier LLM with search access)
- **Named researchers**: ETH Zurich team + Nicholas Carlini (adversarial-ML researcher at [[anthropic]]); Arvind Narayanan (Princeton, Netflix Prize deanonymization co-author) as multi-year warning voice
- **Prior art**: January 2026 paper on the same attack recipe
- **Defense tools cited**: EFF Surveillance Self-Defense guide (ssd.eff.org); Redact (redact.dev) for scrubbing old Reddit comments; adversarial-paraphrasing research by other groups
- **Risk factor**: Overlapping information posted anonymously and on real-name platforms — the more platform-crossover, the higher the match rate

## Open Questions

- Full paper title, arXiv ID, and formal publication venue (not disclosed in the newsletter body)
- Which specific platforms were used for cross-reference profile-matching in the study
- Whether Reddit, X, and similar platforms are considering platform-level defensive measures (differential privacy on public post archives, adversarial rewrite APIs)
- Legal/regulatory posture — does this fall under GDPR right-to-be-forgotten enforcement, or under CFAA-style unauthorized-access framings when the LLM traverses public data?
- Frontier-lab response — will Anthropic, OpenAI, Google add usage-policy carve-outs for stylometric-deanonymization workloads or ship active refusal training?

## Sources

- data/summaries/2026-09-28-morning.json (The AI Leverage MEDIUM "Read this before your next anonymous post"; daily-digest Top Story #5 "Researchers demonstrate the ability to unmask anonymous online users using AI and large language models")
