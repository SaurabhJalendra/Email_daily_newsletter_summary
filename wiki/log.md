# Wiki Changelog

Append-only chronological record of all wiki edits. Newest entries at the top.

---

## LINT 2026-04-18 (week 2026-W16) — re-run

**Lint actions**:
- Fixed contradictions: none spotted. Earlier lint's note about the 2025-10-16 log entry listing [[veo-3]] as newly created (when it was first created on 2025-10-13) remains intact because log.md is append-only.
- Resolved orphans: 0 — verified every existing page has at least one incoming `[[link]]` reference from another page. Lowest-in-degree pages ([[ai-bubble-concerns]], [[alibaba]], [[andrej-karpathy]], [[auth0]], [[claude-haiku-4-5]], [[fine-tuning]], [[github-spec-kit]], [[microsoft]], [[muse-spark]], [[nanochat]], [[qwen-3-vl]], [[replit]]) all have exactly 1 incoming reference, which meets the threshold.
- Merged duplicates: none (no near-duplicate pages detected).
- Stale pages re-verified: 39 pages remain marked `> **Status**: stale` (every page with "Last updated" before 2026-02-17, the 60-day threshold from today 2026-04-18). No additional pages crossed the stale threshold since the earlier lint today because no new ingest has landed. Breakdown: companies (13), products (19), topics (6), trends (2).
- Index: no regeneration needed — the existing [[index.md]] matches the directory listing, and stale annotations are intact.

**Digest generated**: wiki/digests/2026-W16.md regenerated with ~4500 words of refreshed prose covering the 2026-04-16 ingest — the Opus 4.7 + Claude Design + Adobe Firefly convergence; Meta's Muse Spark open-weights pivot; OpenAI Codex superapp repositioning; the Heppner AI-chat-privilege ruling; Google's TTS/Mac/Chrome desktop-surface cluster; the $21B Meta–CoreWeave + Vera Rubin deal; and Anthropic's $800B valuation talks. Prose-heavy throughout per the current digest spec; Top-10 entries and cross-cutting-pattern sections each run as full paragraphs rather than bullets.

**Re-run context**: this is a same-day re-run of the weekly LINT workflow. No new ingests landed between the two runs (last ingest remains 2026-04-16), so lint state is unchanged from the earlier entry below. The digest was regenerated to ensure the file reflects the current page state after any intra-day edits.

## LINT 2026-04-18 (week 2026-W16)

**Lint actions**:
- Fixed contradictions: none spotted in this pass (the prior lint's note about the 2025-10-16 log entry listing [[veo-3]] as newly created when it was first created on 2025-10-13 remains intact because log.md is append-only).
- Resolved orphans: 1 ([[fine-tuning]] — added to [[tinker-api]]'s Related line; fine-tuning is [[thinking-machines]]' category and Tinker is its flagship fine-tuning product).
- Fixed broken links: 1 — [[model-context-protocol]] reference in [[agent-frameworks]] Open Questions unwrapped to plain text with a "create when coverage accumulates" note, since no dedicated MCP page exists yet.
- Merged duplicates: none (no near-duplicate pages detected).
- Stale pages marked: 39 — every page with a "Last updated" date earlier than 2026-02-17 (the 60-day threshold from today 2026-04-18) was marked `> **Status**: stale`. This covers essentially the entire Oct-2025 backfill that did not receive a fresh entry during the 2026-04-16 ingest. Affected sections: companies (13), products (19), topics (6), trends (2). This is expected behavior because the wiki jumped from 2025-10-20 to 2026-04-16 with a multi-month gap; as new daily ingests land on a regular cadence, pages with current relevance will accumulate fresh timeline entries and drop back to `active`.
- Regenerated [[index.md]] from directory listing, annotating stale pages with `*(stale)*` tags inline so users can see freshness at a glance.

**Digest generated**: wiki/digests/2026-W16.md (~4100 words; covers the single 2026-04-16 ingest — Opus 4.7 + Claude Design + Adobe Firefly convergence; Meta open-weights pivot; OpenAI Codex superapp; Heppner ruling; Gemini TTS/Mac/Chrome stack; $21B Meta–CoreWeave; Anthropic $800B talks). Note: only one ingest falls in ISO week 2026-W16 because the pipeline re-started after the Oct-2025 → Apr-2026 backfill gap.

## 2026-04-16
**Ingested**: data/summaries/2026-04-16.json (46 newsletters; first daily ingest after the Oct-2025 backfill — date gap spans ~6 months)

**Pages updated**:
- [[anthropic]] — Opus 4.7 launch, Claude Design, Claude Code Routines, $800B valuation talks, London expansion
- [[google]] — Gemini 3.1 Flash TTS, Gemini Mac app, Chrome Skills
- [[openai]] — Codex superapp repositioning, GPT-Rosalind, Agents SDK, Trusted Access expansion
- [[meta]] — Muse Spark + open-weights pivot, $21B CoreWeave deal
- [[nvidia]] — Cosmos 2.5 GA / Cosmos 3 pre-announce, Ising quantum chips, Vera Rubin deployments, TSMC capacity "very tight"
- [[xai]] — Terafab chipmaking effort, external compute rental
- [[claude-code]] — always-on Routines; Claude Design hand-off
- [[gemini]] — 3.1 Flash TTS variant, Mac app, Chrome Skills
- [[agent-frameworks]] — Routines, Claude Design, Cloudflare Agent Memory, OpenAI Agents SDK, Ollama+Hermes
- [[ai-hardware]] — Meta-CoreWeave $21B / Vera Rubin, NVIDIA Ising, TSMC +40.6%, Terafab, Allbirds→NewBird AI pivot
- [[ai-funding-rounds]] — Anthropic $800B talks, Eli Lilly-Insilico $2.75B, Allbirds $50M
- [[ai-regulation]] — United States v. Heppner ruling (AI chats not attorney-client privileged)

**Pages created**: [[claude-opus-4-7]], [[claude-design]], [[gemini-3-1-flash-tts]], [[openai-codex]], [[muse-spark]], [[nvidia-cosmos]], [[adobe]]

**Notable**: Three themes dominated this day. (1) A Claude Opus 4.7 + Claude Design + Adobe Firefly AI Assistant cluster — design tooling is now a first-class lab battleground, and Anthropic shipping both a flagship model and a Figma-adjacent product on the same day is a major strategic move. (2) Meta's pivot from open weights (via Muse Spark) is a regime change for a lab that defined the open-model era. (3) The judicial-privilege ruling in *United States v. Heppner* is the first US federal precedent explicitly denying attorney-client privilege to AI-chatbot conversations — it immediately reshapes how regulated professionals should treat these tools. Also watching: xAI's Terafab move plus compute-rental pivot, and Allbirds rebranding to NewBird AI as a GPU landlord — a signal that "pivot to compute" is reaching public-company rebrand territory.

## LINT 2026-04-18 (week 2025-W42)

**Lint actions**:
- Fixed contradictions: removed broken `[[walmart]]` wiki-link in [[openai]] summary (Walmart has no page and doesn't warrant one — kept as plain text)
- Resolved orphans: 2 ([[microsoft]] — added incoming link from [[enterprise-ai]] Related + timeline; [[replit]] — added incoming link from [[cursor]] Related + summary, positioning Replit as the non-coder anchor alongside pro-dev IDEs)
- Merged duplicates: none (no near-duplicate pages detected)
- Stale pages marked: 0 (wiki is a historical backfill of Oct 2025; all pages last-updated within 60 days of the most-recent ingest 2025-10-20, so the stale rule does not fire against the backfill's own timeline)
- Noted but not auto-fixed: log entry for 2025-10-16 lists [[veo-3]] as newly created, but [[veo-3]] was actually first created on 2025-10-13 (leak entry) — left intact because log.md is append-only.

**Digest generated**: wiki/digests/2025-W42.md (covers 2025-10-13 → 2025-10-19, 7 ingests)

## 2025-11-04
**Ingested**: data/summaries/2025-11-04.json (12 newsletters; LLM summaries plus subject-line signals; the deal-flow finale of the late-2025 backfill window)

**Pages updated**:
- [[openai]] — $38B multi-year [[amazon]] AWS compute deal; AGI roadmap framing
- [[amazon]] — $38B OpenAI compute win
- [[anthropic]] — Dario Amodei ~2030 AGI timeline articulated
- [[google]] — [[gemma]] open model pulled after Senator Marsha Blackburn defamation incident
- [[alibaba]] — Qwen3-Max-Thinking reportedly hits 100% AIME 2025
- [[ai-funding-rounds]] — $38B AWS-OpenAI deal; Massive Deals Offset Bubble Concerns
- [[ai-hardware]] — $38B AWS-OpenAI: hundreds of thousands of NVIDIA GPUs across AWS data centers
- [[ai-regulation]] — Gemma defamation pull adds political-defamation as a regulatory vector
- [[ai-bubble-concerns]] — "Massive AI Deals Continue To Offset Bubble Concerns" framing

**Pages created**: *(none — all entities already had pages from earlier backfill)*

**Notable**: The $38B OpenAI-AWS deal is OpenAI's first major hyperscaler diversification away from Microsoft Azure and the largest single AI-cloud customer win for AWS to date — flipping the narrative that landed earlier in the week (AWS layoffs, AWS-struggling-on-AI). Combined with Qwen3-Max-Thinking's headline 100% AIME and Anthropic's public AGI-by-2030 timeline, the day frames a "frontier labs commit to compute, model timelines, and reasoning benchmarks all at once" theme. The Gemma defamation pull is the first time a major US senator has forced a frontier lab to remove a model — a regulatory-pressure first.

## 2025-11-03
**Ingested**: data/summaries/2025-11-03.json (12 newsletters; strong LLM coverage day; Apple-Gemini story dominates)

**Pages updated**:
- [[apple]] — Apple licenses a private [[google]] [[gemini]] model to power the next Siri; "abandons solo AI strategy"; Q3 2025 revenue $102.5B
- [[google]] — Apple-Siri/Gemini deal; SRL (Structured Reasoning Learning) for small LLMs; Veo-made ad
- [[anthropic]] — reports of ~$300B valuation talks
- [[openai]] — Ilya Sutskever deposition reveals new details on Nov 2023 board ouster
- [[perplexity]] — favorable court/licensing ruling ("legal permission")
- [[chatgpt]] / [[ai-browsers]] — [[chatgpt-atlas]] adds Agent Mode for autonomous task execution
- [[ai-video-generation]] — Veo-made ad coverage
- [[ai-funding-rounds]] — Anthropic $300B rumor

**Pages created**: *(none)*

**Notable**: Apple's Siri-via-Gemini deal is a structural reversal of the "Apple does AI alone" thesis that drove most of October 2025 Apple coverage (M5, internal Siri, AI-team reshuffles). It puts Google in two of the three major US assistant surfaces (its own + Apple's). The Ilya deposition feeds the "what really happened in Nov 2023" archive without changing the present.

## 2025-11-02
**Ingested**: data/summaries/2025-11-02.json (6 newsletters; mostly weekend ephemera; only OpenAI $1T IPO carries weekend)

**Pages updated**:
- [[openai]] / [[ai-funding-rounds]] — $1T IPO discussion continues from 2025-10-30 — *source: AI Innovations Hub*

**Pages created**: *(none)*

**Notable**: Lightest weekday-equivalent of the backfill window. AI Innovations Hub re-litigates the $1T IPO; Mindstream covers a creator-hypergrowth story; TAAFT covers a "Dying Robot Mental Breakdown" narrative without substantive AI/ML/dev coverage. Weekend low.

## 2025-11-01
**Ingested**: data/summaries/2025-11-01.json (8 newsletters; Saturday; Sora-vs-Veo + GitHub shipping coverage)

**Pages updated**:
- [[sora-2]] / [[ai-video-generation]] — TAAFT publishes "Sora 2 vs Veo 3.1: Who Wins?" head-to-head
- [[cursor]] — Cursor 2.0 / Composer continues to dominate post-launch coverage

**Pages created**: *(none)*

**Notable**: GitHub shipping spree coverage in Hello, World! is a "GitHub keeps moving" signal alongside the Oct 29 [[github-agent-hq]] launch. Lumi.new (build apps with AI) surfaces in World of AI as part of the long tail of agentic-coding tools spawned in the 2025-10-29..30 window.

## 2025-10-31
**Ingested**: data/summaries/2025-10-31.json (16 newsletters; LLM coverage rich; the launch-cluster day before the weekend)

**Pages updated**:
- [[openai]] — [[aardvark]] launches (GPT-5 code-security agent; 92% identification, 10 CVEs); [[sora-2]] monetization rolls out
- [[xai]] — [[grokipedia]] launches as Grok-built Wikipedia alternative
- [[meta]] — Meta raises $25B in bonds for AI infrastructure
- [[alibaba]] — Quark AI Glasses surface in coverage
- [[claude-code]] — "Claude Code secrets" power-user coverage
- [[cursor]] / [[cursor-composer]] — AlphaSignal headlines Composer at "first in-house model, 4× faster coding"
- [[agent-frameworks]] — Composer launch in this category
- [[prompt-injection]] — TAAFT "AI's Brain Got Hacked" + Aardvark security-agent framing
- [[perplexity]] — defense-in-depth security write-up for [[perplexity-comet]]
- [[ai-bubble-concerns]] — "Vertical AI Eats SaaS" framing as bull-case counter
- [[ai-hardware]] — Meta $25B bond
- [[ai-funding-rounds]] — Meta $25B bond; NVIDIA $5T context

**Pages created**: *(none — Aardvark, Grokipedia pages were created in the previous backfill batch and remain on disk)*

**Notable**: Three ship-day items hit at once: OpenAI's first agentic-security product (Aardvark), xAI's first knowledge product (Grokipedia), and Cursor's first in-house model (Composer). Combined with [[sora-2]] monetization and Meta's $25B AI-infra bond, the day is the densest single-day product/funding cluster in the 15-day window.

## 2025-10-30
**Ingested**: data/summaries/2025-10-30.json (9 newsletters; LLM-summary day; Cursor 2.0 + Extropic + Cognition SWE-1.5 + $1T IPO + $5T NVIDIA)

**Pages updated**:
- [[cursor]] / [[cursor-composer]] — Cursor 2.0 launches with in-house Composer model and multi-agent UI
- [[cognition]] — SWE-1.5 ships on Windsurf
- [[extropic]] — TSU thermodynamic-sampling chip with ~10,000× energy-efficiency claim
- [[openai]] / [[ai-funding-rounds]] — $1T IPO exploration
- [[nvidia]] / [[ai-funding-rounds]] — market cap reportedly tops $5T
- [[microsoft]] — Copilot App Builder turns Copilot into no-code enterprise app surface
- [[meta]] — $75B AI-infrastructure spend coverage continues
- [[agent-frameworks]] — Cursor 2.0 multi-agent IDE; Cognition SWE-1.5
- [[ai-hardware]] — Extropic TSU; NVIDIA $5T; Meta $75B
- [[ai-bubble-concerns]] — $1T IPO and $5T cap as bubble-watch milestones
- [[enterprise-ai]] — Microsoft Copilot App Builder

**Pages created**: *(none — Extropic, Cursor Composer, Cognition were created earlier in the backfill batch)*

**Notable**: Two-track day. Track one is product velocity in agentic coding IDEs — Cursor 2.0 + SWE-1.5 ship the same day, both with their own coding model, marking the moment the AI-IDE category crossed from "thin client over OpenAI/Anthropic" to "model vendor." Track two is finance — $1T OpenAI IPO and $5T NVIDIA cap land alongside Meta's $75B infra commitment, sustaining the bubble-debate cycle. Extropic is the dark-horse hardware story.

## 2025-10-29
**Ingested**: data/summaries/2025-10-29.json (16 newsletters; LLM-rich; OpenAI recapitalization, Mercor $10B, GitHub Agent HQ, Uber 100k robotaxi, ChatGPT mental-health & PayPal)

**Pages updated**:
- [[openai]] — for-profit (PBC) recapitalization completes; Microsoft renewed at ~27%; PayPal in ChatGPT; AGI roadmap revealed; ChatGPT mental-health/suicide-prevention plan
- [[microsoft]] — OpenAI partnership renewed at reported ~27% stake
- [[anthropic]] — featured agent in [[github-agent-hq]] launch
- [[mercor]] — $350M raise at $10B valuation
- [[nvidia]] — Uber to deploy 100k NVIDIA-powered robotaxis
- [[character-ai]] — announces ban on minors using its chatbots (effective Nov 25 2025)
- [[chatgpt]] — PayPal checkout; mental-health plan
- [[sora-2]] / [[ai-video-generation]] — "AI Video Creates Itself Live"
- [[agent-frameworks]] — GitHub Agent HQ as multi-agent control plane
- [[enterprise-ai]] — GitHub Agent HQ
- [[ai-funding-rounds]] — OpenAI recapitalization, Mercor $10B
- [[ai-regulation]] — Character.AI minors ban; ChatGPT mental-health plan

**Pages created**: *(none — Mercor, GitHub Agent HQ, Character.AI pages were created in the earlier backfill batch)*

**Notable**: Highest-density day for OpenAI-corporate news in the window: the recapitalization closes the for-profit transition, the Microsoft renewal sets the new ownership math, PayPal joins Walmart as the second commerce surface, and the AGI roadmap is published the same day. GitHub Agent HQ is structurally important — it's the first hyperscaler-grade multi-agent control plane outside the labs themselves.

## 2025-10-28
**Ingested**: data/summaries/2025-10-28.json (14 newsletters; LLM-rich; Excel + Company Knowledge + Qualcomm + Mercor + Amazon layoffs)

**Pages updated**:
- [[openai]] / [[chatgpt]] / [[chatgpt-company-knowledge]] — workplace-RAG ChatGPT launches over Slack/Drive/SharePoint/GitHub/Gmail with citations
- [[anthropic]] / [[claude-for-excel]] — Claude as Excel sidebar with finance-tuned Agent Skills
- [[amazon]] — 30,000 corporate-staff layoffs announced
- [[qualcomm]] — AI200 / AI250 data-center AI chips announced
- [[mercor]] — $10B valuation surfaces
- [[deepseek]] — World of AI flags new DeepSeek release ("DeepSeek DROPPED a NEW AI!")
- [[enterprise-ai]] — Company Knowledge + Excel as the two main enterprise launches of the day
- [[ai-hardware]] — Qualcomm AI200/AI250

**Pages created**: *(none — Company Knowledge, Claude for Excel, Qualcomm, Mercor, Amazon pages all from earlier backfill)*

**Notable**: The two flagship workplace-AI launches land in the same 24-hour window — Claude moves into Excel for finance teams, ChatGPT moves into the rest of enterprise SaaS via Company Knowledge. Qualcomm's data-center entry is the most significant non-NVIDIA / non-AMD silicon news of the period. Amazon's layoffs and the AI-coding-tools narrative converge.

## 2025-10-27
**Ingested**: data/summaries/2025-10-27.json (11 newsletters; LLM-rich; SoftBank $22.5B, OpenAI music, AWS struggles, Mistral Studio, Google vibe coding, Perplexity-Getty)

**Pages updated**:
- [[openai]] — SoftBank invests $22.5B; music-generator project surfaces; mitigation guidance for prompt injections
- [[google]] — vibe-coding tool surfaces; Pomelli-class consumer surface coverage
- [[mistral]] / [[mistral-studio]] — production-AI platform launches
- [[perplexity]] — Getty Images licensing deal coverage
- [[nvidia]] — robotaxi coverage; AWS-vs-NVIDIA framing
- [[amazon]] — AWS criticized as struggling on AI / internal bureaucracy
- [[prompt-injection]] — OpenAI publishes mitigation guidance for ChatGPT
- [[enterprise-ai]] — Mistral Studio
- [[ai-funding-rounds]] — SoftBank $22.5B

**Pages created**: *(none — Mistral, Mistral Studio created in earlier backfill batch)*

**Notable**: SoftBank's $22.5B is the largest single financing event of the 15-day window prior to the AWS deal. OpenAI's music-generator surfacing the same day as the SoftBank tranche is interesting timing — points to where the next consumer surface is going. Mistral Studio gives Europe a credible production-AI platform alongside the US-lab launches.

## 2025-10-26
**Ingested**: data/summaries/2025-10-26.json (8 newsletters; Sunday; subject-line-only)

**Pages updated**:
- [[openai]] — "OpenAI's Secret Music Lab" surfaces as Sunday teaser ahead of Mon Oct 27 SoftBank/music coverage
- [[ai-bubble-concerns]] — "You Have No Idea How Screwed OpenAI Actually Is" Medium-curated bubble-skeptic essay

**Pages created**: *(none)*

**Notable**: Sunday low day. The "Secret Music Lab" framing is the only signal that recurs into Monday coverage. Dropbox redefining work with Dash and "Largest Science Project Ever" appear as adjacencies but don't reach the AI/ML/dev-tools threshold.

## 2025-10-25
**Ingested**: data/summaries/2025-10-25.json (7 newsletters; Saturday; mostly subject-line-only or off-topic)

**Pages updated**:
- [[ai-bubble-concerns]] — "Apple Just Pulled the Plug on the AI Hype" (Medium); "AI, AGI, and the End of Coding" (TAAFT) — bubble-vs-transformation framings

**Pages created**: *(none)*

**Notable**: AWS-saga retrospective in Hello, World! Mindstream "Email marketing? Use Claude" is a use-case piece. Saturday low.

## 2025-10-24
**Ingested**: data/summaries/2025-10-24.json (12 newsletters; LLM-rich; AWS post-mortem, Google-Anthropic deal, Microsoft Mico, Meta cuts AI staff, Netflix AI era)

**Pages updated**:
- [[anthropic]] / [[google]] — Google Cloud + Anthropic multi-year TPU deal (reported up to ~$50B / 1M TPUs)
- [[microsoft]] — "Mico" Copilot personality upgrade; Microsoft AI browser surfaces
- [[meta]] — Meta cuts AI staff (Vibes group / AI org reorg)
- [[amazon]] — AWS post-mortem coverage on the global outage
- [[ai-hardware]] — Google-Anthropic TPU deal as the day's silicon headline
- [[ai-funding-rounds]] — Google-Anthropic TPU deal
- [[enterprise-ai]] — Microsoft Mico personality and AI browser surface

**Pages created**: *(none)*

**Notable**: The Google-Anthropic TPU deal is the third multi-billion-dollar lab-hyperscaler compute commitment in three weeks (after AMD-OpenAI and Broadcom-OpenAI), and it explicitly diversifies Anthropic away from sole AWS dependence. Mico is Microsoft consciously trying to repeat the Clippy/Cortana brand-personality experiment with a more capable Copilot underneath.

## 2025-10-23
**Ingested**: data/summaries/2025-10-23.json (9 newsletters; LLM-rich; Atlas hidden-text hijack, ASI freeze open letter, Meta AI layoffs, Google quantum)

**Pages updated**:
- [[chatgpt-atlas]] / [[chatgpt]] / [[ai-browsers]] / [[prompt-injection]] — hidden-text browser-hijack vulnerability disclosed against Atlas
- [[openai]] — Open letter demands ASI freeze
- [[google]] — Google quantum-algorithm coverage
- [[meta]] — Meta AI layoffs coverage
- [[ai-regulation]] — Open letter demands ASI freeze; hidden-text browser-security regulatory questions

**Pages created**: *(none)*

**Notable**: Atlas's first big public security event arrives within 24 hours of launch — a fast feedback loop that defines the [[prompt-injection]] / [[ai-browsers]] beat for the rest of the window. The ASI-freeze letter is a notable industry-coordination signal even if non-binding.

## 2025-10-22
**Ingested**: data/summaries/2025-10-22.json (15 newsletters; the [[chatgpt-atlas]] launch day; richest LLM-summary day of the backfill window)

**Pages updated**:
- [[openai]] / [[chatgpt]] / [[chatgpt-atlas]] / [[ai-browsers]] — Atlas launches as Chromium-based browser with built-in ChatGPT; OpenAI enters the browser war
- [[anthropic]] — "Special agent Claude" coverage on agentic Claude positioning; "Anthropic + Google" framing

**Pages created**: *(none — Atlas page from earlier backfill batch)*

**Notable**: Single-product-launch headline day. Atlas is OpenAI's most direct attack on the Google Chrome / Microsoft Edge consumer-browser stack to date and reframes [[ai-browsers]] from a niche category (Opera, Comet) into a frontier-lab category. Amazon's "automating 500k jobs" coverage plays as adjacent labor narrative.

## 2025-10-21
**Ingested**: data/summaries/2025-10-21.json (13 newsletters; LLM-rich; AWS global outage, Sora-Hollywood, Claude Code Web, DeepSeek OCR, AI bubble framing)

**Pages updated**:
- [[anthropic]] / [[claude-code]] / [[claude-code-web]] / [[agent-frameworks]] — Claude Code Web launches for browser/cloud-based dev work
- [[openai]] / [[sora-2]] / [[ai-video-generation]] — "Sora breaks bad with Hollywood" — IP/cameo backlash and studio pushback
- [[deepseek]] / [[deepseek-ocr]] — DeepSeek-OCR open-source release coverage (10× vision-token compression, 97% accuracy)
- [[amazon]] / [[ai-hardware]] — global AWS outage disrupts services worldwide
- [[ai-bubble-concerns]] — "is AI a bubble?" framing in TLDR AI cycle

**Pages created**: *(none — Claude Code Web, DeepSeek, DeepSeek-OCR, Amazon pages all from earlier backfill batch)*

**Notable**: Day-1 of the 15-day backfill window. Claude Code Web is the first browser-native deployment of a major frontier-lab CLI coding agent — a notable move from terminal-only to managed-cloud surface. The AWS outage is the infrastructure event that frames the rest of the week's AWS-vs-NVIDIA / AWS-struggling-on-AI / OpenAI-AWS-deal arc.

## 2025-10-20
**Ingested**: data/summaries/2025-10-20.json (13 newsletters; most had failed LLM summarization — worked from subject lines)

**Pages updated**:
- [[google]] — Gemini 3.0 confirmed; Google Maps data added to Gemini API
- [[gemini]] — 3.0 confirmation; Maps-API location data
- [[gemini-3]] — confirmation entry (created earlier on 2025-10-13 leak, confirmed here)
- [[openai]] — "OpenAI vs Hollywood" coverage
- [[andrej-karpathy]] — agent reality check / AGI commentary
- [[ai-bubble-concerns]] — "AI's big problem" (Mindstream)

**Pages created**: *(none — all entities already had pages created in earlier ingests this batch)*

**Notable**: Gemini 3.0 moved from leak (2025-10-13) to confirmation (2025-10-20) inside the batch — good illustration of the wiki's cross-day synthesis value.

## 2025-10-19
**Ingested**: data/summaries/2025-10-19.json (6 newsletters; all subject-line-only)

**Pages updated**: *(none — no substantive AI/dev content survived from the subject lines: "AI Robot Phone Is Coming", "AI Became the Web's Biggest Author", plus Replit hacker-origins retrospective)*

**Pages created**: *(none)*

**Notable**: Lightest ingest-day of the batch. "AI Became the Web's Biggest Author" hints at an AI-content-saturation trend worth watching if it recurs.

## 2025-10-18
**Ingested**: data/summaries/2025-10-18.json (8 newsletters; all subject-line-only, mostly off-topic or ephemera)

**Pages updated**: *(none — no AI/dev-tools news of lasting relevance)*

**Pages created**: *(none)*

**Notable**: Heavy webinar / ephemera weekend. SEO→AEO framing appeared (Mindstream) but is candidate-only without corroboration.

## 2025-10-17
**Ingested**: data/summaries/2025-10-17.json (13 newsletters; Matt from FutureTools produced the only full summary — Apple M5, Japan vs OpenAI, AFL-CIO)

**Pages updated**:
- [[apple]] — M5 launch; AI-team reshuffle
- [[anthropic]] — Claude Agent Skills unveiled
- [[claude-skills]] — extended to Agent Skills (modular task automation)
- [[openai]] — Japan copyright request; physicist hire; Sora 2 upgrades
- [[sora-2]] — Japan complaint; upgrade wave
- [[chatgpt]] — "golden hour" memory cull; shared prompts
- [[ai-video-generation]] — Japan complaint as regulatory pressure vector
- [[ai-hardware]] — Apple M5 added to silicon timeline
- [[enterprise-ai]] — data-infrastructure-hard-assets framing

**Pages created**: [[apple-m5]], [[ai-regulation]]

**Notable**: Japan becoming the first major government to formally complain about Sora 2 IP is the defining item of the day. The AFL-CIO "Workers First Initiative on AI" is a second independent regulatory-pressure vector, together justifying the new [[ai-regulation]] trend page.

## 2025-10-16
**Ingested**: data/summaries/2025-10-16.json (11 newsletters; all subject-line-only)

**Pages updated**:
- [[anthropic]] — Claude Haiku 4.5 release
- [[google]] — Veo 3.1 launch; DeepMind cancer-treatment research
- [[gemini]] — (no direct change — Veo captured on product page)
- [[ai-video-generation]] — Veo 3.1 as second major player alongside Sora 2
- [[ai-hardware]] — M5 MacBook Pro coverage; "Nvidia isn't done yet"
- [[nvidia]] — ongoing dominance defense
- [[apple]] — M5 MacBook Pro coverage

**Pages created**: [[claude-haiku-4-5]], [[alibaba]], [[qwen-3-vl]], [[veo-3]]

**Notable**: Two frontier-lab small-model/fast-tier launches in the same day (Qwen3-VL from Alibaba, Haiku 4.5 from Anthropic) — worth tracking whether the small-model segment is accelerating.

## 2025-10-15
**Ingested**: data/summaries/2025-10-15.json (12 newsletters; all subject-line-only)

**Pages updated**:
- [[openai]] — Walmart integration; 18+ policy; "OpenAI gets a brain"
- [[chatgpt]] — Walmart checkout; 18+ mode
- [[amd]] — Oracle partnership
- [[google]] — real-time Gemini in Google Meet
- [[gemini]] — Google Meet integration
- [[ai-bubble-concerns]] — "Is the AI bubble about to burst?"
- [[enterprise-ai]] — Walmart/ChatGPT + Meet Gemini as enterprise/commerce signals

**Pages created**: [[oracle]], [[github-spec-kit]]

**Notable**: ChatGPT became a commerce surface (Walmart) and relaxed age gating on the same day — two policy-surface shifts, reinforcing OpenAI's platform-company posture.

## 2025-10-14
**Ingested**: data/summaries/2025-10-14.json (11 newsletters; all subject-line-only)

**Pages updated**:
- [[openai]] — Broadcom custom-chip partnership ("OpenAI's AI chip era begins")
- [[ai-hardware]] — OpenAI↔Broadcom deal added to silicon timeline
- [[agent-frameworks]] — Agentforce 360 added as enterprise entrant
- [[enterprise-ai]] — Agentforce 360; Microsoft image-gen tool
- [[ai-bubble-concerns]] — "Dual-Use Defense AI Tech" supercycle framing

**Pages created**: [[broadcom]], [[andrej-karpathy]], [[nanochat]], [[salesforce]], [[agentforce]], [[microsoft]]

**Notable**: OpenAI now has two explicit silicon partners (AMD + Broadcom) in an eight-day span — the cleanest signal so far of the multi-supplier AI-chip norm emerging in Q4 2025.

## 2025-10-13
**Ingested**: data/summaries/2025-10-13.json (9 newsletters; all subject-line-only)

**Pages updated**:
- [[thinking-machines]] — co-founder departs for Meta
- [[meta]] — poaches TML co-founder; "Inside Apple's pivot" coverage
- [[apple]] — buys an unspecified AI startup
- [[google]] — Gemini 3 leak; Veo 3.1 leak
- [[gemini]] — Gemini 3 leak
- [[anthropic]] — Claude Code plugins
- [[agent-frameworks]] — Claude Code plugins added

**Pages created**: [[claude-code]], [[veo-3]], [[gemini-3]]

**Notable**: Three pre-launch leaks landed on a single day (Gemini 3, Veo 3.1, Claude Code plugins). Treat as leak-day anchor; look for the subsequent launch confirmations.

## 2025-10-12
**Ingested**: data/summaries/2025-10-12.json (7 newsletters; all subject-line-only)

**Pages updated**:
- [[computer-use]] — AI Innovations Hub "Google Taught AI to Use the Web" as follow-up to Gemini 2.5 Computer Use

**Pages created**: *(none)*

**Notable**: Very thin ingest — mostly weekend digest / ephemera. "Superman's Publisher Bans AI" noted but filed as non-developer-AI.

## 2025-10-11
**Ingested**: data/summaries/2025-10-11.json (7 newsletters; all subject-line-only)

**Pages updated**:
- [[perplexity]] — Spaces feature compared head-to-head against OpenAI GPTs

**Pages created**: *(none)*

**Notable**: Most newsletters had failed LLM summaries; only directly-relevant hook was Perplexity Spaces framing as a GPTs competitor.

## 2025-10-10
**Ingested**: data/summaries/2025-10-10.json (13 newsletters)

**Pages updated**:
- [[google]] — added Gemini Enterprise launch
- [[gemini]] — added Gemini Enterprise variant
- [[openai]] — Sora growth outpacing early ChatGPT
- [[sora-2]] — growth/adoption entry
- [[chatgpt]] — Sora vs ChatGPT growth comparison
- [[ai-funding-rounds]] — Reflection $2B; BoE/IMF/JPM bubble warnings
- [[ai-hardware]] — Figure 03 humanoid; Intel chip coverage
- [[enterprise-ai]] — Gemini Enterprise anchor event
- [[ai-video-generation]] — Sora growth milestone

**Pages created**: [[gemini-enterprise]], [[reflection]], [[figure]], [[ai-bubble-concerns]]

**Notable**: BoE, IMF, and JPM each flagging AI bubble risk in the same week as OpenAI's $500B mark is a signal worth watching across future ingests.

## 2025-10-09
**Ingested**: data/summaries/2025-10-09.json (10 newsletters)

**Pages updated**:
- [[google]] — Gemini 2.5 Computer Use launch, Gemini bundling
- [[gemini]] — Computer Use variant; bundling
- [[ai-hardware]] — Jony Ive "peaceful" AI hardware vision
- [[computer-use]] — Gemini 2.5 Computer Use launch

**Pages created**: [[gemini-2-5-computer-use]], [[computer-use]]

**Notable**: Google's Gemini 2.5 Computer Use matches Anthropic's earlier Claude Computer Use — the category is now multi-vendor.

## 2025-10-08
**Ingested**: data/summaries/2025-10-08.json (13 newsletters)

**Pages updated**:
- [[openai]] — AgentKit post-DevDay analysis, Sam Altman DevDay interview
- [[agentkit]] — Inside coverage after launch
- [[cursor]] — Plan Mode feature
- [[google]] — Opal goes global; Agentic Retrieval coverage
- [[nvidia]] — xAI deal
- [[xai]] — NVIDIA deal
- [[ai-hardware]] — NVIDIA/xAI deal; Qualcomm acquires Arduino
- [[agent-frameworks]] — Cursor Plan Mode as IDE-side agent UX
- [[enterprise-ai]] — Google Opal going global

**Pages created**: [[nvidia]], [[xai]]

**Notable**: Three compute deals in a week (Meta/Rivos, OpenAI/AMD, NVIDIA/xAI) — silicon is the new battleground for frontier labs.

## 2025-10-07
**Ingested**: data/summaries/2025-10-07.json (11 newsletters)

**Pages updated**:
- [[openai]] — DevDay 2025, AgentKit launch, AMD partnership, ChatGPT Apps
- [[agentkit]] — launch event entries
- [[chatgpt]] — apps-platform pivot at DevDay
- [[agent-frameworks]] — AgentKit as first-party agent scaffolding

**Pages created**: [[agentkit]], [[chatgpt]], [[amd]]

**Notable**: DevDay reframed ChatGPT as a distribution platform for third-party apps — the "app store" framing stuck across newsletters.

## 2025-10-06
**Ingested**: data/summaries/2025-10-06.json (12 newsletters)

**Pages updated**:
- [[openai]] — Agent Builder, Sora copyright controls tightening
- [[sora-2]] — copyright/rights guardrails
- [[google]] — Jules Tools (CLI), Jules API, Gemini app revamp
- [[gemini]] — consumer app revamp
- [[jules]] — launch of Jules Tools and API
- [[apple]] — Tim Cook successor speculation
- [[ai-hardware]] — Jony Ive's AI hardware surfaces
- [[agent-frameworks]] — Jules Tools entering the agent-IDE space

**Pages created**: [[jules]]

**Notable**: Google exposing Jules via CLI + API on the same day OpenAI's Agent Builder surfaces is a tight competitive signal — first-party coding agents are converging on a CLI form factor.

## 2025-10-05
**Ingested**: data/summaries/2025-10-05.json (8 newsletters)

**Pages updated**:
- [[thinking-machines]] — continued Tinker coverage as a landmark AI platform
- [[tinker-api]] — follow-up coverage
- [[fine-tuning]] — Tinker as a category-defining fine-tuning platform
- [[enterprise-ai]] — enterprise AI playbook anchor event

**Pages created**: *(none — all entities already pages from prior days)*

**Notable**: "The Great AI Pivot Begins" framing in TAAFT suggests a wider market-positioning shift worth tracking forward.

## 2025-10-04
**Ingested**: data/summaries/2025-10-04.json (4 newsletters)

**Pages updated**:
- [[cursor]] — 1.7 release with TOCTOU-related coverage

**Pages created**: [[cursor]]

**Notable**: npm security ("getting a Shield") discussed alongside Cursor 1.7 and TOCTOU — supply-chain security is creeping into AI dev-tool coverage. Candidate for a future topic page if the pattern persists.

## 2025-10-03
**Ingested**: data/summaries/2025-10-03.json (11 newsletters)

**Pages updated**:
- [[openai]] — $500B valuation, world's most valuable private company
- [[anthropic]] — new CTO announcement
- [[perplexity]] — Comet coverage
- [[perplexity-comet]] — first coverage entry
- [[meta]] — data-training opt-in controversy
- [[thinking-machines]] — Tinker launch entry
- [[tinker-api]] — launch coverage
- [[fine-tuning]] — Tinker as category marker
- [[ai-funding-rounds]] — OpenAI $500B valuation anchor

**Pages created**: [[perplexity]], [[perplexity-comet]], [[thinking-machines]], [[tinker-api]], [[fine-tuning]], [[ai-funding-rounds]]

**Notable**: Microsoft Copilot feature expansion ("Copilot now has way more features") covered briefly — worth a page if Microsoft shows up again in future ingests.

## 2025-10-02
**Ingested**: data/summaries/2025-10-02.json (10 newsletters)

**Pages updated**:
- [[openai]] — continued Sora 2 launch coverage
- [[sora-2]] — physics + audio launch analysis
- [[google]] — "Google Learns to Speak Visual"
- [[gemini]] — multimodal/visual advancements
- [[anthropic]] — Claude Skills launch
- [[claude-skills]] — Skills ships
- [[apple]] — AI glasses pivot, VR pivot
- [[meta]] — AI glasses lead
- [[ai-hardware]] — Apple/Meta glasses dynamics
- [[opera-neon]] — favorable coverage
- [[ai-browsers]] — Opera Neon follow-up
- [[enterprise-ai]] — Slack gives AI access
- [[agent-frameworks]] — Claude Skills entering the framework space

**Pages created**: [[claude-skills]]

**Notable**: Three major-lab agent frameworks in the same week (AgentKit, Claude Skills, Jules) — this is the defining product pattern of the period.

## 2025-10-01
**Ingested**: data/summaries/2025-10-01.json (12 newsletters)

**Pages updated**:
- [[openai]] — Sora 2 launch
- [[sora-2]] — page created with launch details
- [[google]] — Gemini prompt-injection disclosure
- [[gemini]] — security issue
- [[apple]] — secret Siri upgrade
- [[meta]] — Rivos acquisition
- [[replit]] — pivot to non-coders; ARR $2.8M → $150M
- [[auth0]] — Auth0 for AI Agents launch
- [[anthropic]] — hiring bonanza
- [[prompt-injection]] — disclosure event
- [[ai-video-generation]] — Sora 2 anchor event
- [[ai-browsers]] — Opera Neon launch
- [[opera-neon]] — launch page
- [[ai-hardware]] — Meta acquires Rivos
- [[agent-frameworks]] — Auth0 for AI Agents
- [[ai-funding-rounds]] — Periodic Labs coverage

**Pages created**: [[openai]], [[anthropic]], [[google]], [[meta]], [[apple]], [[replit]], [[auth0]], [[sora-2]], [[gemini]], [[opera-neon]], [[prompt-injection]], [[ai-video-generation]], [[ai-browsers]], [[agent-frameworks]], [[ai-hardware]]

**Notable**: Sora 2 dominated the daily coverage across 6+ newsletters — "breaks the internet" framing. Only the TAAFT newsletter had a successfully generated summary on this date; other newsletters contributed subject-line context only.
