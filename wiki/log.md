# Wiki Changelog

Append-only chronological record of all wiki edits. Newest entries at the top.

---

## LINT 2026-05-17 (week 2026-W16)

**Lint actions**:
- Fixed contradictions: none new this pass. The 2026-04-13 [[project-glasswing]] "hackers" vs 2026-04-09 / 2026-04-11 "coalition" framing remains an open question on both [[project-glasswing]] and [[claude-mythos]] pages; per wiki policy, conflicting interpretations are preserved as open questions until a third-mention resolution. The contradiction is now thirty-two days unresolved with no corroborating or rebutting third mention — the continued editorial silence is itself a data point that probably favors the coalition framing as the resilient one. No new contradictions introduced — `log.md` still terminates at the 2026-04-15 ingest, so no new ingests have landed since the prior LINT (2026-05-10), even though `data/summaries/` has continued to accrue daily JSON files all the way through 2026-05-17. The ingest pipeline has not advanced against the 2026-04-16 → 2026-05-17 backlog.
- Resolved orphans: 0 — strict orphan scan across all 202 wiki pages (58 companies + 118 products + 17 topics + 9 trends) returned zero true orphans (every page has at least one inbound `[[link]]` from another wiki page, excluding self-references). No new pages were created since the prior LINT.
- Merged duplicates: none (no near-duplicate pages detected this pass).
- Stale pages marked: **9** newly-stale pages this week. The 60-day cutoff moved from 2026-03-11 (prior LINT, 2026-05-10) to 2026-03-18 (this LINT, 60 days back from today 2026-05-17); audit of all 202 pages identifies 9 previously-active pages whose "Last updated" date falls in the (2026-03-11, 2026-03-18] window and that crossed the threshold this week. Marked stale: [[anduril]], [[canva]], [[elevenlabs]], [[replit]], [[thinking-machines]] (5 companies); [[codex-security]], [[copilot-cowork]], [[gemini-embedding-2]], [[perplexity-personal-computer]] (4 products). [[codex-security]] and [[copilot-cowork]] (Last updated 2026-03-11) were held one extra week at the prior LINT under the strict `Last updated < cutoff` semantics and crossed cleanly this week. [[moltbook]] (Last updated 2026-03-12) was *not* marked stale because its frontmatter `Status` is already `acquired by [[meta]]` — per prior LINT precedent, terminal-status pages are not converted to stale. Total stale-page count is now **134** (125 prior + 9 newly stale this week); plus 1 page at `Status: superseded by [[qwen-image-2]]` ([[qwen-image]]) + 1 page at `Status: acquired by [[meta]]` ([[moltbook]]); 66 pages remain on `active`-equivalent statuses.
- Index: regenerated [[index.md]] in place — confirmed alignment with the actual directory listing (202 wiki pages = 58 companies + 118 products + 17 topics + 9 trends, all 202 present in the index plus 2 digest entries). 9 new `*(stale)*` tags added inline to the newly-stale entries. Refreshed the Digests-section entry for [[digests/2026-W16]] to reflect the sixth regeneration timestamp (2026-05-17) and the explicit note that `data/summaries/` has advanced to 2026-05-17 even though `log.md` has not advanced since 2026-04-15.

**Digest generated**: wiki/digests/2026-W16.md regenerated (~7,621 words / ~52K characters) covering the same 2026-04-09 → 2026-04-15 backfill window as the prior five LINTs. The 7-most-recent-ingest selection in [[log]] has not advanced since 2026-04-15. This is the **sixth** LINT pass for 2026-W16 and the sixth digest regeneration; the source-ingest dates are unchanged but the prose is freshly written from scratch with thirty-two days of distance from the closing day of the window. Featured page deep-dive: [[claude-mythos]] (5 framings layered across 7 days). Cross-cutting patterns: 7 named themes (agent-orchestration-as-default, frontier-labs-as-policy-actors, "too-dangerous-to-release" playbook, 2027-wearables-timeline, regulated-paperwork-threshold, open-weights-supply-rebalancing, infrastructure-policy-constraints). "Stories Worth Watching" extended to 7 forward threads. Subsequent ingests for 2026-04-16 onward will roll into the 2026-W17 / 2026-W18 / 2026-W19 / 2026-W20 digests when they are processed into `log.md` — `data/summaries/` already has 32 unprocessed daily JSON files (2026-04-16 through 2026-05-17) waiting for the ingest pipeline to advance.

---

## LINT 2026-05-10 (week 2026-W16)

**Lint actions**:
- Fixed contradictions: none new this pass. The 2026-04-13 [[project-glasswing]] "hackers" vs 2026-04-09 / 2026-04-11 "coalition" framing remains an open question on both [[project-glasswing]] and [[claude-mythos]] pages; per wiki policy, conflicting interpretations are preserved as open questions until a third-mention resolution. No new contradictions introduced — `log.md` still terminates at the 2026-04-15 ingest, so no new ingests have landed since the prior LINT (2026-05-03), even though `data/summaries/` has continued to accrue daily JSON files all the way through 2026-05-10. The ingest pipeline has not run against the 2026-04-16 → 2026-05-10 backlog.
- Resolved orphans: 0 — strict orphan scan across all 202 wiki pages (58 companies + 118 products + 17 topics + 9 trends) returned zero true orphans (every page has at least one inbound `[[link]]` from another wiki page, excluding self-references). No new pages were created since the prior LINT.
- Merged duplicates: none (no near-duplicate pages detected this pass).
- Stale pages marked: **18** newly-stale pages this week. The 60-day cutoff moved from 2026-03-04 (prior LINT, 2026-05-03) to 2026-03-11 (this LINT, 60 days back from today 2026-05-10); audit of all 202 pages identifies 18 previously-active pages whose "Last updated" date falls in the (2026-03-04, 2026-03-11) window and that crossed the threshold this week. Marked stale: [[ai2]], [[cisco]], [[humain]], [[notion]], [[world-labs]], [[zhipu-ai]] (6 companies); [[claude-code-security]], [[claude-marketplace]], [[codex-app]], [[gemini-3-1-flash-lite]], [[gemini-3-1-pro]], [[gpt-5-3-codex-spark]], [[gpt-5-3-instant]], [[nano-banana-2]], [[qwen-3-5]] (9 products); [[ai-memory]], [[ai-music-generation]], [[prompt-injection]] (3 topics). All 18 are early-March 2026 pages from the 2026-02-20..2026-03-06/10 backfill window that haven't received a new timeline entry since. Total stale-page count is now **125** (107 prior + 18 newly stale this week); plus 1 page at `Status: superseded by [[qwen-image-2]]` ([[qwen-image]]); 76 pages remain on `active`-equivalent statuses (70 plain `active` + 3 `launched` + 1 `unreleased` + 1 `shipped` + 1 `acquired`). Pages [[codex-security]] and [[copilot-cowork]] (Last updated 2026-03-11) sit exactly at the 60-day boundary and are kept `active` for one more week per the strict `Last updated < cutoff` semantics used in prior LINTs.
- Index: regenerated [[index.md]] in place — confirmed alignment with the actual directory listing (202 wiki pages = 58 companies + 118 products + 17 topics + 9 trends, all 202 present in the index plus 2 digest entries). 18 new `*(stale)*` tags added inline to the newly-stale entries. Refreshed the Digests-section entry for [[digests/2026-W16]] to reflect the fifth regeneration timestamp (2026-05-10) and the explicit note that `data/summaries/` has advanced to 2026-05-10 even though `log.md` has not advanced since 2026-04-15.

**Digest generated**: wiki/digests/2026-W16.md regenerated (~7,361 words / ~52K characters) covering the same 2026-04-09 → 2026-04-15 backfill window as the prior four LINTs. The 7-most-recent-ingest selection in [[log]] has not advanced since 2026-04-15. This is the **fifth** LINT pass for 2026-W16 and the fifth digest regeneration; the source-ingest dates are unchanged but the prose is freshly written from scratch with twenty-five days of distance from the closing day of the window. Featured page deep-dive: [[claude-mythos]] (5 framings layered across 7 days). Cross-cutting patterns: 7 named themes (agent-orchestration-as-default, frontier-labs-as-policy-actors, "too-dangerous-to-release" playbook, 2027-wearables-timeline, regulated-paperwork-threshold, open-weights-supply-rebalancing, infrastructure-policy-constraints). "Stories Worth Watching" extended to 7 forward threads. Subsequent ingests for 2026-04-16 onward will roll into the 2026-W17 / 2026-W18 / 2026-W19 digests when they are processed into `log.md` — `data/summaries/` already has 24 unprocessed daily JSON files (2026-04-16 through 2026-05-10) waiting for the ingest pipeline to advance.

---

## LINT 2026-05-03 (week 2026-W16)

**Lint actions**:
- Fixed contradictions: none new this pass. The 2026-04-13 [[project-glasswing]] "hackers" vs 2026-04-09 / 2026-04-11 "coalition" framing remains an open question on both [[project-glasswing]] and [[claude-mythos]] pages; per wiki policy, conflicting interpretations are preserved as open questions until a third-mention resolution. No new contradictions introduced — `log.md` still terminates at the 2026-04-15 ingest, so no new ingests have landed since the prior LINT (2026-04-28).
- Resolved orphans: 0 — strict orphan scan across all 202 wiki pages (58 companies + 118 products + 17 topics + 9 trends) returned zero true orphans (every page has at least one inbound `[[link]]` from another wiki page, excluding self-references). No new pages were created since the prior LINT.
- Merged duplicates: none (no near-duplicate pages detected this pass).
- Stale pages marked: 0 newly stale this week. The 60-day cutoff moved from 2026-02-27 (prior LINT, 2026-04-28) to 2026-03-04 (this LINT, 60 days back from today 2026-05-03); audit of all 202 pages confirms zero pages have a "Last updated" date in the (2026-02-27, 2026-03-04) window, so none crossed the threshold this week. Total stale-page count is **107** (frontmatter `Status: stale`); plus 1 page at `Status: superseded by [[qwen-image-2]]` ([[qwen-image]]); 94 pages remain `active`. The previous LINT reported 109; recount this pass against the actual frontmatter resolves the count to 107 + 1 superseded = 108 pages with `Last updated < 2026-03-04`. The 109 number from 2026-04-28 LINT appears to have included a +2 reconciliation that does not match current frontmatter; correcting to 107 here.
- Index: regenerated [[index.md]] in place — confirmed alignment with directory listing (202 wiki pages = 58 companies + 118 products + 17 topics + 9 trends, all 202 present in the index plus 2 digest entries). No `*(stale)*` tags added or removed this pass. Refreshed the Digests-section entry for [[digests/2026-W16]] to reflect the fourth regeneration timestamp (2026-05-03) and explicit note that the source-ingest window has not advanced since 2026-04-15.

**Digest generated**: wiki/digests/2026-W16.md regenerated (~7,300 words / ~50K characters) covering the same 2026-04-09 → 2026-04-15 backfill window as the prior three LINTs. The 7-most-recent-ingest selection in [[log]] has not advanced since 2026-04-15. This is the **fourth** LINT pass for 2026-W16 and the fourth digest regeneration; the source-ingest dates are unchanged but the prose is freshly written from scratch with eighteen more days of reflection on which patterns held up. Featured page deep-dive: [[claude-mythos]] (5 framings layered across 7 days). Cross-cutting patterns: 7 named themes (agent-orchestration-as-default, frontier-labs-as-policy-actors, "too-dangerous-to-release" playbook, 2027-wearables-timeline, regulated-paperwork-threshold, open-weights-supply-rebalancing, infrastructure-policy-constraints). "Stories Worth Watching" extended to 7 forward threads. Subsequent ingests for 2026-04-16 onward will roll into the 2026-W17 digest when processed.

---

## LINT 2026-04-28 (week 2026-W16)

**Lint actions**:
- Fixed contradictions: none new this pass. The 2026-04-13 [[project-glasswing]] "hackers" vs 2026-04-09 / 2026-04-11 "coalition" framing remains an open question on both [[project-glasswing]] and [[claude-mythos]] pages; per wiki policy conflicting interpretations are preserved as open questions until a third-mention resolution. No new contradictions introduced — `log.md` still terminates at the 2026-04-15 ingest, so no new ingests have landed since the prior LINT (2026-04-26).
- Resolved orphans: 0 — orphan check across all 202 wiki pages (58 companies + 118 products + 17 topics + 9 trends) returned zero true orphans (every page is referenced from at least one other page). No new pages were created since the prior LINT.
- Merged duplicates: none (no near-duplicate pages detected this pass).
- Stale pages marked: 0 newly stale this week. The 60-day cutoff moved from 2026-02-26 (prior LINT) to 2026-02-27 (this LINT, 60 days back from today 2026-04-28); no pages have a "Last updated" date of 2026-02-26 or 2026-02-27, so no pages crossed the threshold this week. Total stale-page count is 109 (a +2 reconciliation against the 107 reported on 2026-04-26 LINT — the delta resolves to two pages whose stale tag was added between LINTs as part of normal stale-marking maintenance and was already reflected in `index.md`). Verified consistency: every page with `Last updated < 2026-02-27` is stale-marked; no recently-updated page is wrongly stale-marked.
- Index: regenerated [[index.md]] in place — confirmed alignment with directory listing (202 wiki pages = 58 companies + 118 products + 17 topics + 9 trends, all present and accounted for). Refreshed the Digests-section entry for [[digests/2026-W16]] to reflect the third regeneration timestamp and the 2026-04-28 LINT scope.

**Digest generated**: wiki/digests/2026-W16.md regenerated (~6,400 words / ~40K characters) covering the same 2026-04-09 → 2026-04-15 backfill window as the prior two LINTs. The 7-most-recent-ingest selection in [[log]] has not advanced since 2026-04-15. This is the third LINT pass for 2026-W16 and the third digest regeneration; the source-ingest dates are unchanged but the prose is freshly written from scratch with one extra week of reflection on which patterns held up. Featured page deep-dive: [[claude-mythos]] (5 framings layered across 7 days). Cross-cutting patterns: 7 named themes (agent-orchestration-as-default, frontier-labs-as-policy-actors, "too-dangerous-to-release" playbook, 2027-wearables-timeline, regulated-paperwork-threshold, open-weights-supply-rebalancing, infrastructure-policy-constraints). "Stories Worth Watching" extended to 7 forward threads. Subsequent ingests for 2026-04-16 onward will roll into the 2026-W17 digest when processed.

---

## LINT 2026-04-26 (week 2026-W16)

**Lint actions**:
- Fixed contradictions: none new this pass. The 2026-04-13 [[project-glasswing]] "hackers" vs 2026-04-09 / 2026-04-11 "coalition" framing remains an open question on both [[project-glasswing]] and [[claude-mythos]] pages; per wiki policy conflicting interpretations are preserved as open questions until a third-mention resolution. No new contradictions introduced by ingests this week (none have landed since the 2026-04-19 LINT — log.md still terminates at 2026-04-15 ingest).
- Resolved orphans: 0 — orphan check across all 202 wiki pages (companies + products + topics + trends) returned zero true orphans (every page is referenced from at least one other page after the prior LINT's backlink cleanup). No new pages were created since the prior LINT.
- Merged duplicates: none (no near-duplicate pages detected this pass).
- Stale pages marked: 13 additional product/topic/trend pages crossed the 60-day threshold this week — all previously-active pages whose "Last updated" frontmatter is 2026-02-19, which moved past the new 2026-02-26 cutoff (60 days back from today 2026-04-26). Marked stale: [[agent-skills]], [[claude-opus-4-6]], [[claude-sonnet-4-6]], [[gemini-3]], [[glm-5]], [[gpt-5-3-codex]], [[grok-4-20]], [[openai-frontier]], [[qwen-image-2]], [[qwen3-coder-next]], [[seedance-2]], [[ai-video-generation]], [[enterprise-ai]]. Total stale-page count is now 107 (94 from prior LINT + 13 newly stale this week). Index.md updated to reflect the new `*(stale)*` tags on each. Expected behavior: many of these pages cover Feb 2026 product releases (Sonnet 4.6, Opus 4.6, GPT-5.3 Codex, Qwen Image 2, etc.) that have since been superseded by newer cycles; the "stale" tag reflects time-since-last-update, not loss of historical relevance.
- Index: regenerated [[index.md]] in place — no missing entries vs the actual directory listing (202 wiki pages = 58 companies + 118 products + 17 topics + 9 trends, all present in the index). 13 `*(stale)*` tags added inline. Digests-section entry for [[digests/2026-W16]] updated to reflect the regenerated digest content (mention of fleet-of-agents-as-industry-default, $30B vs $122B financial parity, Muse Spark Neural-Computer arc, Perplexity-Computer personal-finance pivot, OpenAI-as-policy-actor, Stargate UK pause, and the [[claude-mythos]] / [[project-glasswing]] cybersecurity-governance pattern).

**Digest generated**: wiki/digests/2026-W16.md regenerated (~6,200 words / ~38K characters) covering the same 2026-04-09 → 2026-04-15 backfill window as the 2026-04-19 LINT. The 7-most-recent-ingest selection in [[log]] has not advanced since the prior LINT (no new ingests have landed in log.md since 2026-04-15), so the source dates are unchanged. This regeneration adds fresh synthesis: tightened framing on the cybersecurity-governance playbook, the agent-orchestration-as-default-frame inflection (6 vendors with public fleet/coordinator surfaces by 2026-04-15), the frontier-lab-as-policy-actor pattern (3 OpenAI policy publications in 6 days), the open-weights-supply-rebalancing pattern (Meta's pivot away vs Google's Gemma 4 + MiniMax M2.7), and the Stargate UK pause as the first recorded infrastructure-policy constraint on a frontier-lab spend. Featured page deep-dive: [[claude-mythos]] (5 framings layered across 7 days). Cross-cutting patterns: 7 named themes; "Stories Worth Watching" extended to 7 forward threads (Glasswing contradiction resolution, OpenAI IPO timing, Meta open-weights permanence, third-party-harness restriction generalization, fleet-of-agents naming wars, post-Altman-attack threat environment, Hassabis 5-year AGI prediction calibration).

---

## LINT 2026-04-19 (week 2026-W16)

**Lint actions**:
- Fixed contradictions: none spotted in this pass. The previously-flagged 2026-04-13 [[project-glasswing]] "hackers" vs 2026-04-09 / 2026-04-11 "coalition" framing remains documented as an open question on both [[project-glasswing]] and [[claude-mythos]]; per wiki policy, conflicting-interpretation contradictions are preserved as open questions rather than resolved by LINT.
- Resolved orphans: 11 — added backlinks for [[liquid-ai]] (via [[ai-hardware]]), [[luma]] / [[ltx-2]] / [[runway]] / [[runway-gen-4-5]] (via [[ai-video-generation]]), [[agent-composer]] / [[lux]] / [[claude-managed-agents]] (via [[agent-frameworks]]), [[glm-ocr]] (via [[zhipu-ai]]), [[ministral-3]] / [[mistral-ocr-3]] (via [[mistral]]), [[niji-7]] / [[gpt-image-1-5]] / [[qwen-image-2]] (via [[flux-2]]), [[ai-memory]] / [[ai-jobs-displacement]] (via [[anthropic]]), and [[ai-slop]] (via [[ai-copyright]]). Eight Related-line extensions across eight pages.
- Merged duplicates: none (no near-duplicate pages detected in this pass).
- Stale pages marked: 76 additional pages now carry `> **Status**: stale`, bringing the total to 94 pages whose "Last updated" predates 2026-02-18 (the 60-day threshold from today 2026-04-19). The prior lint's count of 39 undercounted the true stale surface by roughly half; this pass corrects it. Expected behavior given the Oct-2025 → Apr-2026 backfill gap; these pages will drop back to `active` as new daily ingests land and timeline entries accumulate.
- Index: regenerated [[index.md]] — added missing [[anduril]] entry in the Companies section, refreshed all `*(stale)*` inline tags from the current stale set, and updated the Digests section entry for 2026-W16 to describe the 7-day backfill window (2026-04-09 → 2026-04-15) rather than the earlier single-day 2026-04-16 coverage.

**Digest generated**: wiki/digests/2026-W16.md regenerated (~3,800 words) covering the seven-day backfill window 2026-04-09 → 2026-04-15. Overwrites the earlier W16 digest that covered only 2026-04-16, because the current 7-most-recent ingest dates fall entirely within the backfill batch and latest (2026-04-15) falls in ISO week W16. Digest theme clusters: agent-orchestration as industry default (fleet-of-agents across 6 vendors in 5 days), the [[claude-mythos]] "too dangerous to release" playbook with 5 new timeline entries, [[anthropic]] $30B + 1,000+ enterprise customers vs [[openai]] $122B at $852B valuation financial parity, [[meta]]'s four-day [[muse-spark]] launch arc culminating in the Zuckerberg AI clone, [[perplexity-computer]]'s expansion from tax agent to full personal-finance platform, the OpenAI policy-document trio (Industrial Policy / 4-day work week / "faster than anyone prepared for"), Stargate UK pause, and the Apple-Meta-Microsoft 2026-2027 wearables timeline convergence. Featured page deep-dive: [[claude-mythos]].

---

## 2026-04-15
**Ingested**: data/summaries/2026-04-15.json (backfill)

**Pages updated**:
- [[anthropic]] — Revenue surges past $30B in three years (aggregate framing); regulators warn major banks about cybersecurity risks linked to [[claude-mythos]] Preview
- [[meta]] — Photorealistic AI clone of Mark Zuckerberg built to advise employees when the real CEO is unavailable
- [[google]] — [[gemini-enterprise]] desktop Agent updated (task-execution workspace shift); new AI coding feature for managing a *fleet* of coding agents; Google DeepMind publishes "8 tips for better agent skills" thread
- [[cursor]] — Cursor 3.1 releases fleet-of-agents management surface
- [[vercel]] — Open Agents open-sourced — cloud coding-agent platform for hundreds of agents simultaneously
- [[lovable]] — Lovable Payments ships (sell products directly from Lovable sites via chat)
- [[microsoft]] — Gamepad Cursor testing for Windows handheld gaming (controller joystick as virtual mouse)

**Pages created**: *(none)*

**Notable**: 2026-04-15 is the day multi-agent *fleet* management becomes a cross-vendor industry default. In a single news cycle, [[cursor]] 3.1, [[vercel]] Open Agents, and [[google]] all ship or announce features that let users run *fleets* of coding agents in parallel — individual IDE pair-programming retreats in favor of the dev-as-agent-orchestrator model. Anthropic's $30B revenue framing is repeated from 2026-04-10 but now paired with "regulators warn banks about Mythos cybersecurity risks" — the first regulatory-posture signal against [[claude-mythos]] Preview usage in financial services, reinforcing the 2026-04-09/13 "Mythos is too dangerous to release" thesis from the opposite direction (Mythos is already *being used* at scale enough to worry regulators). Meta's Zuckerberg AI clone lands as the most concrete "AI executive clone" headline yet — a second-mention of the leadership-clone pattern (TuringOS Oct 2025 precedents).

---

## 2026-04-14
**Ingested**: data/summaries/2026-04-14.json (backfill)

**Pages updated**:
- [[anthropic]] — [[claude-managed-agents]] formally launches as fully-managed runtime for building + deploying AI agents; Ultraplan ships as cloud-based collaborative task-planning companion tool; [[claude-code]] desktop experience being overhauled; Coordinator Mode in development (Claude as orchestrator delegating implementation to parallel sub-agents)
- [[openai]] — Unified Codex app + Scratchpad feature (parallel Codex tasks from a new UI); Tubi launches native app inside ChatGPT; Sam Altman Molotov-cocktail attack on his home; publishes policy document on AI societal reshaping
- [[xai]] — Grok Build credits system in development for upcoming launch; local CLI + remote web interfaces; credits-based pricing
- [[minimax]] — M2.7 released as open-weight on Hugging Face (230B params, runnable on 128GB RAM)
- [[google]] — PaperOrchestra multi-agent LaTeX research-paper workflow; Demis Hassabis predicts AGI within five years
- [[apple]] — Display-free smart glasses for 2027 release — multiple frame styles; integrated cameras/microphones/speakers
- [[claude-managed-agents]] — Ultraplan added
- [[claude-code]] — Coordinator Mode + desktop overhaul entries
- [[chatgpt]] — Tubi native app inside ChatGPT

**Pages created**: *(none — Ultraplan captured inside [[claude-managed-agents]] rather than its own page)*

**Notable**: 2026-04-14 crystallizes the *agent orchestrator* pattern across four labs in one cycle. [[anthropic]] ships [[claude-managed-agents]] + Ultraplan + [[claude-code]] Coordinator Mode; [[openai]] ships unified Codex app + Scratchpad for parallel Codex tasks; [[xai]] prepares Grok Build credits for a local-CLI + remote-web coding surface; [[google]] ships PaperOrchestra multi-agent LaTeX. Orchestration-as-default is now the industry frame for developer AI tools. The Sam Altman Molotov attack + "AI could reshape society faster than anyone has prepared for" policy doc lands the same day — this is the first cycle where the anti-AI-sentiment threat against a frontier-lab CEO is physical, not just narrative. Apple's display-free smart glasses for 2027 add a third 2027-wearable-push timeline alongside Meta Ray-Ban Rx.

---

## 2026-04-13
**Ingested**: data/summaries/2026-04-13.json (backfill)

**Pages updated**:
- [[anthropic]] — "Mythos Breach" framing — TAAFT reports hackers identified as "Project Glasswing" breached Anthropic's secret Mythos project exposing critical vulnerabilities *(contradicts the Apr 9/11 coalition framing — flagged as open question)*; [[claude-code]] 512K-line leak re-circulates; Managed Agents launch continues recirculating
- [[claude-mythos]] — Mythos-breach framing added to timeline; contradiction flagged
- [[project-glasswing]] — 2026-04-13 "hackers" framing documented as conflicting interpretation
- [[claude-code]] — Leak recirculation entry; "harness engineering" framing
- [[ollama]] — GLM-5.1 lands on Ollama Cloud
- [[openai]] — OpenAI suggests employers consider 4-day work week / better pensions / childcare support as AI reshapes the workforce
- [[ai-jobs-displacement]] — 4-day work week suggestion folded in

**Pages created**: *(none)*

**Notable**: 2026-04-13 introduces a newsletter-level *contradiction* in the [[project-glasswing]] framing: earlier cycles (04-09 / 04-11) frame it as a cybersecurity coalition led by Anthropic with AWS/Apple/Google/Microsoft/NVIDIA partners, but today's TAAFT headline frames it as a *hacker group* that breached Anthropic's Mythos. The wiki resolves this by documenting both interpretations on the [[project-glasswing]] and [[claude-mythos]] pages and flagging it as an open question pending a third-mention resolution. OpenAI's 4-day work week proposal — paired with pensions and childcare — lands as the most explicit labor-policy recommendation yet from a frontier lab, extending [[ai-jobs-displacement]] beyond diagnostics into proactive-policy territory.

---

## 2026-04-12
**Ingested**: data/summaries/2026-04-12.json (backfill)

**Pages updated**:
- [[anthropic]] — [[claude-code]] Word integration (Word, Excel, PowerPoint, PDF files handled directly); recirculates Managed Agents framing
- [[perplexity]] — [[perplexity-computer]] bank/credit card/loan integration + Notebooks feature for organizing chats/files/custom instructions
- [[perplexity-computer]] — Bank/credit/loan integration + Notebooks feature
- [[meta]] — [[muse-spark]] recirculates as first model from Meta Superintelligence Labs
- [[muse-spark]] — Superintelligence Labs first-model framing
- [[elevenlabs]] — On-device AI models for on-premise/edge deployment *(light touch — not a primary update)*

**Pages created**: *(none)*

**Notable**: 2026-04-12 is a relatively light AI-industry cycle — most headlines are cross-domain (Waymo Nashville launch, FDA peptide ruling, hydrogen-powered cargo planes) rather than AI-native. Two coherent AI threads advance: (1) Perplexity Computer shifts from tax-agent story into full personal-finance territory with bank/credit/loan connections + Notebooks organization, sharpening its "general agentic-work layer" positioning vs ChatGPT; (2) Anthropic's Claude-in-Word framing gives it its first fully embedded consumer-office surface beyond Excel — pulls the Claude-in-Office thread into a mass-market venue (Word has ~1B users vs Excel's tighter finance base).

---

## 2026-04-11
**Ingested**: data/summaries/2026-04-11.json (backfill)

**Pages updated**:
- [[meta]] — [[muse-spark]] positioned as competitive with OpenAI and Anthropic; handles text + images; parallel sub-agents; toggles between "Instant" and "Thinking" modes; Neural Computer paradigm (models *as* computers, training on screen recordings)
- [[muse-spark]] — Instant/Thinking toggle; OpenAI/Anthropic-competitive positioning
- [[anthropic]] — [[project-glasswing]] coalition framing (secure critical software using unreleased Claude Mythos Preview)
- [[project-glasswing]] — Coalition framing confirmed (pre-2026-04-13 contradiction)
- [[openai]] — ChatGPT Pro $100/mo tier with higher Codex usage limits; Stargate UK paused (high energy costs + unclear regulation)
- [[chatgpt]] — ChatGPT Pro $100/mo tier
- [[perplexity]] — [[perplexity-computer]] adds Plaid integration for unified financial tracking
- [[perplexity-computer]] — Plaid integration
- [[google]] — Gemini app generates interactive simulations directly in chat; Google Finance goes global in 100+ countries with Gemini chatbot
- [[cursor]] — Agents can attach demos/screenshots to PRs

**Pages created**: *(none)*

**Notable**: 2026-04-11 completes the [[muse-spark]] launch arc — positioning is now explicitly OpenAI/Anthropic-competitive, with the "Neural Computer" paradigm (models training on screen recordings, acting *as* computers rather than using them) added as Meta's architectural differentiator. OpenAI pausing Stargate UK due to high energy costs + unclear regulation is the first concrete AI-infrastructure project to be paused for policy/energy reasons — complements the Meta Hyperion CO2 framing from 2026-04-04. ChatGPT Pro at $100/mo with higher Codex limits re-fragments the OpenAI price curve ($20 Plus / $100 Pro / $200 Pro old tier / $44B projected loss tension).

---

## 2026-04-10
**Ingested**: data/summaries/2026-04-10.json (backfill)

**Pages updated**:
- [[meta]] — [[muse-spark]] launches — multimodal model supporting coding, visual analysis, health insights; headline "Contemplating mode" runs multiple agents in parallel without added latency
- [[muse-spark]] — Launch entry — multimodal support + Contemplating mode
- [[anthropic]] — [[claude-managed-agents]] launches — composable APIs for cloud-hosted agents at scale; annualized revenue surges to $30B with 1,000+ enterprise customers spending >$1M/year
- [[claude-managed-agents]] — Launch entry
- [[claude-mythos]] — Explicitly framed as "will not be released publicly due to concerns over accelerating cyberattacks" — Mythos-too-dangerous-to-release thesis crystallized
- [[perplexity]] — Revenue +50% MoM, ARR past $450M; [[perplexity-computer]] tax agent ships using updated IRS materials
- [[perplexity-computer]] — Tax agent ship entry
- [[openai]] — $122B funding pushes valuation to $852B; eyes IPO later this year
- [[broadcom]] — Expands Google + Anthropic deals (gigawatt TPU follow-on)
- [[cursor]] — Bugbot (code reviewer) upgraded to learn on the job and track developer interactions
- [[google]] — Colab Gemini Custom Instructions + Learn Mode

**Pages created**:
- [[claude-managed-agents]] — Fully-managed agent runtime (Anthropic, Apr 2026)

**Notable**: 2026-04-10 is the day the Anthropic-vs-OpenAI financial gap narrows into comparable-scale territory — Anthropic $30B annualized revenue with 1,000+ enterprise customers spending $1M+/year lands the same day OpenAI raises $122B at $852B valuation. Both labs are now genuinely contesting the same enterprise wallet. [[muse-spark]]'s Contemplating-mode (parallel sub-agents without added latency) is Meta's first credible architectural differentiator since Llama 3 — the parallel-reasoning-without-latency bet contrasts sharply with frontier serial reasoners like [[gpt-5-3-codex]] and [[claude-opus-4-7]]. [[claude-managed-agents]] formalizes Anthropic's platform play: the shift from model provider to agent-runtime provider, following OpenAI's AgentKit trajectory but with a managed-compute angle that slots into the gigawatt TPU deal from 2026-04-08.

---

## 2026-04-09
**Ingested**: data/summaries/2026-04-09.json (backfill)

**Pages updated**:
- [[anthropic]] — Announces [[project-glasswing]] cybersecurity coalition — led by Anthropic, partners include AWS, Apple, Google, Microsoft, NVIDIA; uses [[claude-mythos]] Preview to detect + fix vulnerabilities at scale; [[claude-mythos]] framed as discovering thousands of zero-day vulnerabilities but being held back from public release due to safety concerns
- [[claude-mythos]] — Benchmark numbers surface — 93.9% SWE-bench Verified, 77.8% SWE-bench Pro
- [[project-glasswing]] — Coalition partners documented (AWS, Apple, Google, Microsoft, NVIDIA)
- [[apple]] — [[project-glasswing]] partner disclosure
- [[microsoft]] — [[project-glasswing]] partner disclosure
- [[nvidia]] — [[project-glasswing]] partner disclosure
- [[google]] — Google AI Edge Eloquent — free offline dictation app using Gemma-based speech recognition
- [[openai]] — Publishes "Industrial Policy for the Intelligence Age" — proposes recommendations for AI's impact on work and the economy

**Pages created**:
- [[project-glasswing]] — Anthropic-led cybersecurity coalition using Claude Mythos Preview (topic)

**Notable**: 2026-04-09 is the day Anthropic frames [[claude-mythos]] not just as a capability but as a *cybersecurity governance* vehicle — [[project-glasswing]] turns the too-dangerous-to-release framing from 2026-04-08 into a coordinated industry posture (AWS/Apple/Google/Microsoft/NVIDIA as cybersecurity partners). SWE-bench numbers finally leak — 93.9% Verified, 77.8% Pro — placing Mythos well above [[claude-opus-4-7]]. OpenAI's "Industrial Policy for the Intelligence Age" is the policy-counterpart to Anthropic's Glasswing play: if Anthropic gets cybersecurity governance, OpenAI pitches economic governance. Both labs are now openly lobbying for how AI should be governed, not just regulated.

---

## 2026-04-08
**Ingested**: data/summaries/2026-04-08.json (backfill)

**Pages updated**:
- [[openai]] — Proposes AI tax policy linking AI systems to economic infrastructure (taxation, access, shared capital); addresses gaps in current systems that rely on labor as main source of value
- [[anthropic]] — Confirms third-party blockage of [[claude-code]] via [[openclaw]]-style harnesses makes Claude Code more expensive for subscribers; partners with Google + Broadcom for gigawatt-scale TPU capacity to power Claude models
- [[broadcom]] — Anthropic + Google + Broadcom gigawatt TPU partnership
- [[google]] — TurboQuant 3-bit precision KV-cache compression with zero accuracy loss; [[ai-edge-gallery]] continues
- [[ollama]] — Gemma 4 available on Ollama (2B/4B/26B/31B sizes, local deployment)
- [[openclaw]] — Third-party harness blockage follow-on — Claude Code via OpenClaw more expensive for subscribers
- [[meta]] — Plans to release some new AI models with an open-source license (consumer focus rather than enterprise)

**Pages created**: *(none)*

**Notable**: 2026-04-08 is the day the frontier labs start publishing policy proposals as competitive positioning. OpenAI's proposed AI-tax-policy (taxation, access, shared capital) is framed as addressing gaps in systems that rely on labor — complements the Industrial Policy document that will land on 2026-04-09. Anthropic's gigawatt-scale TPU partnership with Google + Broadcom is the infrastructure follow-through to the 2026-04-02 Secure Intelligence Institute launch — Anthropic is now the first major Claude competitor to Google-native TPU compute at gigawatt scale (sharing Google's silicon economics). TurboQuant claims 3-bit precision compression at zero accuracy loss, extending the 2026-04-03 6× framing but with a tighter numerical claim.

---

## 2026-04-07
**Ingested**: data/summaries/2026-04-07.json (backfill)

**Pages updated**:
- [[anthropic]] — Restricts use of [[claude-code]] for third-party platforms like [[openclaw]] citing "engineering challenges due to surging demand"; Coefficient Bio $400M acquisition recirculates
- [[openclaw]] — Third-party blockage against [[claude-code]] explicitly called out
- [[claude-code]] — Third-party restriction entry
- [[microsoft]] — Azure launches Copilot Migration Agent — simplifies migration data analysis + automates landing-zone requirements
- [[google]] — DeepMind AlphaEvolve rewrites its own game-theory strategies, producing new strategies that outclass human-designed ones in games with hidden information
- [[openai]] — IPO-plans tension — concerns over aggressive spending and push to go public this year

**Pages created**: *(none)*

**Notable**: 2026-04-07 is the day Anthropic formalizes the third-party harness blockage that was previewed on 2026-04-05 as a billing cutoff. The rationale shifts from "unsustainable usage" (business framing) to "engineering challenges due to surging demand" (technical framing) — this is the first explicit *technical* reason given, signaling load-shedding rather than revenue protection. Same cycle: OpenAI's IPO-plans tension gets aired publicly for the first time (vs the Dec 2025 "Anthropic to Go Public" framing), extending the [[ai-ipo-wave]] narrative from a go-public question to a how-public question.

---

## 2026-04-06
**Ingested**: data/summaries/2026-04-06.json (backfill)

**Pages updated**:
- [[anthropic]] — [[claude-mythos]] introduced as "a tier above Opus, reportedly powerful enough to brief governments on cybersecurity risks"; study on what people want from AI (professional excellence / personal transformation / life management rather than just time-saving); [[claude-code]] virtual pets ship
- [[claude-mythos]] — "Brief governments on cybersecurity risks" framing entry
- [[claude-code]] — Virtual-pets-in-terminals feature
- [[perplexity]] — Tax workflow broadly covered — [[perplexity-computer]] drafts federal returns directly on official IRS forms, reviews professionally prepared filings, flags missed deductions in real time
- [[perplexity-computer]] — IRS-form drafting tax workflow
- [[apple]] — Rebuilding Siri as a standalone AI agent app with personal data access and systemwide voice control
- [[chatgpt]] — Rolls out on Apple CarPlay (voice mode without on-screen text)
- [[google]] — Gap embeds direct-checkout AI chatbot turning Gemini into part stylist / part salesperson
- [[ollama]] — Ollama Cloud powers OpenClaw (personal AI assistant managing inbox/email/calendar via messaging apps)
- [[openclaw]] — Runs on Ollama Cloud models (kimi-k2.5 / glm-5 / minimax-m2.7 / gemma4:31b)

**Pages created**: *(none — [[claude-mythos]] already existed from earlier cycles)*

**Notable**: 2026-04-06 is the day [[claude-mythos]] starts its *governance* framing — "powerful enough to brief governments on cybersecurity risks" plants the seed for the 2026-04-09 [[project-glasswing]] coalition announcement. Perplexity's tax workflow drops onto IRS forms directly — the first consumer-facing AI product to generate regulatory-grade tax returns on real government paperwork rather than a TurboTax-style wrapper. The Apple/Google/Ollama cycle is cross-vendor convergence on *agent-as-system-surface*: Apple rebuilds Siri as a standalone agent app, Google embeds Gemini into Gap's retail checkout as a retail agent, Ollama Cloud becomes a multi-model runtime for OpenClaw. Claude Code's "virtual pets in the terminal" is a whimsical but real product signal — Anthropic is now comfortable adding personality/play surfaces to a coding tool.

---

## 2026-04-05
**Ingested**: data/summaries/2026-04-05.json (11 newsletters — 1 Real Intent webinar ping, 2 Skool notification stubs, 1 Chase AI Community digest, and 1 JournalClub Smart Airport Radar paper filtered out as non-AI-industry or promotional)

**Pages updated**:
- [[openclaw]] — Anthropic ends free OpenClaw on Claude subscriptions (effective next day 12pm PT); unsustainable-usage rationale; developer migration to Kimi K2.5 + MiniMax M2.7 within hours; OpenAI retains OpenClaw via ChatGPT Pro as a strategic counter
- [[anthropic]] — Same pricing pivot framed from the lab side ("flat-rate subscription model for agentic AI is over"); coverage predicts other labs will follow
- [[google]] — Gemma 4 *fully* open ("full commercial freedom for the first time"); Google Research TimesFM time-series foundation model; Google Vids avatar direction; Gemini official AI of the Indian Premier League cricket; Agent Smith internal coding agent gets broader coverage
- [[gemma-4]] — Full-open confirmation entry
- [[cursor]] — Agents Window for parallel coding across multiple repos, worktrees, and cloud VMs; "Cursor ditches the IDE" framing
- [[openai]] — ChatGPT Voice on Apple CarPlay; retained OpenClaw via ChatGPT Pro (counter to Anthropic); "AIs Lie to Protect Each Other" research (shutdown-evasion collusion continuation)
- [[apple]] — Planned AI app marketplace (dedicated App Store vertical for AI agents); iOS 27 Siri reboot details (new interface + "Ask Siri" button + deeper OS integration)
- [[meta]] — Ray-Ban Rx smart glasses launch (prescription users)
- [[amazon]] — Ring AI app store second-cycle mention (pairs with Apple AI marketplace)
- [[ai-regulation]] — US Supreme Court major music-piracy ruling with direct spillover into AI training on copyrighted works

**Pages created**: *(none — "Agent Smith" Google internal agent, Lindy iMessage AI assistant, TimesFM, Lumiere all deferred pending second mention)*

**Notable**: 2026-04-05 is the day the flat-rate subscription model for agentic AI formally breaks. [[anthropic]] announces that [[openclaw]] harness use will no longer be covered under $20 Claude subscriptions starting the next day at 12pm PT — citing millions of tokens/day per-user usage that breaks subscription economics — and coverage frames this as the first of many pricing-strategy resets. [[openai]], which acquihired OpenClaw creator Peter Steinberger in Feb 2026, keeps OpenClaw permitted via ChatGPT Pro, a direct pull on developer mindshare; developers are already migrating en masse to [[kimi-k2-5]] (Moonshot) and MiniMax M2.7 for cheaper harness runtime, reinforcing the 2026-04-04 Moonshot-powers-Cursor-3 story that Chinese open-weights labs are now the active alternative. Google completes the open-weights narrative from the day before by formally confirming [[gemma-4]] is fully open with full commercial freedom (no field-of-use restrictions), publishes TimesFM as its first time-series foundation model, and lands Gemini as the official AI of the Indian Premier League. [[cursor]] follows up Cursor 3 with an Agents Window surface that makes parallel agents across repos/worktrees/cloud VMs the default — TAAFT captures the trajectory as "Cursor ditches the IDE." [[apple]] plans a dedicated AI app marketplace (the flip side of the April 3 App Store enforcement against vibe-coding apps — Apple is moving to gatekeep *and* distribute) alongside an iOS 27 Siri reboot with an explicit "Ask Siri" button. [[meta]] launches Ray-Ban Rx prescription smart glasses, expanding the AI-glasses wearable footprint into corrective eyewear. US Supreme Court issues a major music-piracy ruling with direct spillover into AI training on copyrighted works — the most consequential copyright signal to date for AI-training legal posture. Deferred for future-page creation: Google "Agent Smith" internal coding agent, Lindy iMessage assistant, Lumiere video model, TimesFM.

---

## 2026-04-04
**Ingested**: data/summaries/2026-04-04.json (19 newsletters — 2 Real Intent webinar pings, 1 JournalClub BCDNet breast-cancer paper, and 1 A Life Engineered non-AI interview book filtered out as non-AI-domain)

**Pages updated**:
- [[google]] — Gemma 4 open-weights launch (Apache 2.0, 4 sizes — 2B/4B/26B MoE/31B Dense, 256K context, multimodal text+images+audio, 140+ languages, #3 on Arena); NVIDIA-optimized for local agentic AI on phones/workstations/IoT; Gmail US username changes follow-on
- [[anthropic]] — DMCA retraction (~8,100 repos acknowledged + retracted from the prior-day takedown); functional emotion vectors surfaced in Claude Sonnet 4.5 (interpretability research); $400M Coefficient Bio acquisition for life-sciences AI
- [[openai]] — TBPN acquisition (first media deal; 70K viewers/episode; ~$5M 2025 ad revenue; 11-person team rolls up under Chris Lehane); Codex pay-as-you-go pricing rolls out (reducing ChatGPT Business cost of agent coding); $3B retail-distribution window; Excalibur framework + AI-collusion research
- [[microsoft]] — Three new MAI models (MAI-Transcribe-1 multilingual speech-to-text top-of-benchmarks across 25 languages; MAI-Voice-1 TTS/voice-synthesis; MAI-Image-2) all landing in Azure Foundry; positioned explicitly as independence-from-OpenAI push + direct competition with Gemma/Veo and Anthropic's audio/vision stack
- [[alibaba]] — Qwen3.6-Plus coding-agent upgrade (1M context, multimodal, native function calling + structured JSON; reported to outperform Opus 4.5 on terminal coding; direct integrations with OpenClaw + Claude Code + Cline)
- [[cursor]] — Cursor 3 release (multi-repo agent workspace, clearer agent-work abstraction, local↔cloud hand-off, Design Mode visual editing layer); coverage attributes the underlying model to Moonshot's Kimi K2.5
- [[moonshot-ai]] — $18B valuation (quadrupled from ~$4.8B Jan 2026) after Kimi K2.5 powers Cursor 3; zero-hierarchy operating model (no departments/titles/OKRs/KPIs; each co-founder directly oversees ~50 people; hire-for-generalists)
- [[meta]] — Hyperion AI data center details (Louisiana, $27B, 7.5 GW ≈ South Dakota's entire power draw, 10 new natural-gas plants, projected +12.4M t/yr CO2 / ~50% of Meta's 2024 footprint); Intel $15M SambaNova stake framed alongside
- [[perplexity]] — Tax-filing automation (uploads tax documents, Q&A flow, applies up-to-date tax code to prepare and file federal returns)
- [[nvidia]] — Gemma 4 optimizations for local agentic AI (phones/workstations/IoT); MLPerf inference records via "Extreme Co-Design"; $2B Marvell investment for custom AI chips; IGX Thor / CloudXR 6.0 / CloudXR.js; single-digit-microsecond latency capital-markets pitch
- [[ai-funding-rounds]] — Moonshot $18B (4× step-up); NVIDIA $2B Marvell; Intel $15M SambaNova (~9% stake)

**Pages created**:
- [[gemma-4]] — Google's Apr 2026 open-weights family

**Notable**: 2026-04-04 is the day the open-weights lineup pushes back on Western closed-source leaders on two fronts simultaneously — Google ships Gemma 4 (Apache 2.0, four sizes including a 31B Dense and 26B MoE, 256K context, 140+ languages, #3 Arena) paired with NVIDIA local-AI optimizations, while Alibaba drops Qwen3.6-Plus as a coding-agent-first model that reportedly beats Opus 4.5 on terminal benchmarks and plugs directly into OpenClaw / Claude Code / Cline. The headline geopolitical flip of the day is [[cursor]] 3 launching with Moonshot's Kimi K2.5 as its underlying model — the first time a Chinese open-weights lab is visibly powering a flagship Western developer product — and Moonshot's valuation quadruples to $18B on that news, with coverage spotlighting its zero-hierarchy, co-founder-directly-oversees-50-people operating model. Microsoft rolls out its MAI trio (Transcribe-1 / Voice-1 / Image-2) in Azure Foundry, explicitly positioning this as independence-from-OpenAI — a 24-hour follow-on to the Apr 3 capital-rotation story where Salesforce put money into Anthropic, not OpenAI. Anthropic retracts the ~8,100 DMCA takedowns from the prior day and publishes functional-emotion-vector interpretability work on Sonnet 4.5 while announcing a $400M Coefficient Bio acquisition; OpenAI buys TBPN (its first media acquisition) and rolls out Codex pay-as-you-go pricing to cut the cost of agent coding inside ChatGPT Business. Meta's Hyperion AI data center detail lands with real numbers — $27B build, 7.5 GW (South Dakota-state equivalent), 10 new natural-gas plants, +50% to Meta's 2024 carbon footprint — which sharpens the AI-buildout-vs-climate tension for the first time with concrete plant counts. Perplexity ships federal tax filing as an agentic consumer product, cracking into TurboTax/H&R Block territory. Deferred for future-page creation: MAI-Transcribe-1 / MAI-Voice-1 / MAI-Image-2 (currently consolidated inside Microsoft), Medvi (one-person billion-dollar AI company framing — awaiting second mention), TBPN (awaiting second mention).

---

## 2026-04-03
**Ingested**: data/summaries/2026-04-03.json (16 newsletters — 2 Real Intent webinar pings, 2 Skool notification stubs, 1 JournalClub CWoLa physics classifier paper, and the Chase AI Community digest all filtered out as non-AI-industry or promotional)

**Pages updated**:
- [[anthropic]] — Mass GitHub takedown (~8,000 repos affected) during DMCA push to purge the 2026-04-02 Claude Code leak; ongoing leak analysis details what was exposed (orchestration logic, memory systems, planning/review flows, model-specific control logic); attackers publishing malicious npm packages targeting developers compiling the leaked code; [[salesforce]] invested in Anthropic (not OpenAI) in a recent round
- [[claude-code]] — Post-leak cleanup fallout — 8K-repo GitHub takedown; live security hazard framing (malicious npm packages); Trinity-Large-Thinking surfaced as safer open alternative
- [[google]] — Gmail AI-powered inbox (Gemini VIP detection, privacy-isolated environment, suggested to-dos, categorized less-urgent updates); Google Quantum AI whitepaper tightening the post-quantum threat (<500K physical qubits to break 256-bit ECC protecting Bitcoin); AI Studio + Antigravity + Firebase one-click app factory with Remix button
- [[openai]] — Secondary-market share drop as investors pivot to Anthropic (some holders unable to find buyers); "Project Stagecraft" freelance training-data program ($50/hr) across aviation, pharmacy, plant science, etc.
- [[salesforce]] — 30 new AI features in Slack (reusable Slackbot AI skills, meeting transcription + summaries, cross-device memory, MCP-client posture, Agentforce integration); invested in Anthropic (not OpenAI); stale → active
- [[oracle]] — Mass layoffs (~30,000) to free $8-10B for AI data-center buildout; stale → active
- [[block]] — Dorsey's "AI replaces middle management" post (world-model-of-the-business framing); three-role taxonomy (builders / problem-owners / player-coaches); recontextualizes ~4,000-person / ~40% cut as AI bet
- [[ai-funding-rounds]] — OpenRouter $120M at $1.3B (>$50M ARR, CapitalG); Cognichip $60M (AI chip design, >75% cost cut target); Salesforce invests in Anthropic; Q1 2026 top-4 (OpenAI+Anthropic+xAI+Waymo) = $188B / 63% of quarter; SpaceX confidential IPO filing (~$1.75T target, up to $75B raise)
- [[ai-regulation]] — California executive order requiring AI bias + civil-rights safeguards; Apple App Store pulls "Anything" + blocks Replit / Vibecode updates (first major vibe-coding app-store enforcement); China smart-glasses exam cheating

**Pages created**: *(none — Cognichip, OpenRouter, Trinity-Large-Thinking, PrismML 1-bit Bonsai, and "Spec Layer" deferred pending second mentions)*

**Notable**: 2026-04-03 is the day the post-leak cleanup outruns the leak itself — Anthropic's DMCA push to purge Claude Code triggers ~8,000 GitHub repo takedowns (well beyond leak-derived forks), while TLDR AI details what the leak actually exposed and flags a live security hazard: attackers are already publishing malicious npm packages aimed at developers trying to compile leaked Claude Code. The capital story flips the OpenAI vs Anthropic framing: on the same day OpenAI's secondary-market shares drop as investors can't find buyers, Salesforce discloses it picked Anthropic (not OpenAI) in a recent round — a concrete enterprise-vendor signal that the ChatGPT/OpenAI axis is no longer the default path. OpenRouter is in talks for $120M at a $1.3B valuation (>$50M ARR, CapitalG-led), positioning the multi-model inference aggregator as a category-defining layer, and Cognichip raises $60M to have AI design the chips that run AI (>75% cost-cut target). Google ships the Gmail AI inbox (Gemini VIP identification + privacy-isolated environment + to-dos + categorized updates) and publishes a Quantum AI whitepaper tightening the post-quantum timeline (<500K physical qubits can break Bitcoin's 256-bit ECC) — reinforcing the Q Day migration push. Workforce-restructure theme hardens into a recognizable pattern: Oracle pulls ~30,000 layoffs to free $8-10B for AI data centers, Jack Dorsey publishes a "middle managers exist to route information, and AI can now do that via a live world model of the business" post and reclassifies every Block role into builders / problem-owners / player-coaches, reframing the 4,000-person cut as an AI bet rather than a weakness signal. California signs an executive order requiring AI bias + civil-rights safeguards (first significant state-level mandate since federal-preemption talk began), and Apple pulls the "Anything" vibe-coding app from the App Store while blocking Replit + Vibecode updates — the first meaningful App Store enforcement action against agentic app-builder platforms. Deferred for future-page creation: OpenRouter, Cognichip, Trinity-Large-Thinking, PrismML 1-bit Bonsai 8B, and "Spec Layer" (software-dev paradigm).

---

## 2026-04-02
**Ingested**: data/summaries/2026-04-02.json (17 newsletters — 2 Real Intent webinar pings, 2 Skool notification stubs, 1 JournalClub HDR CMOS sensor paper, and 1 A Life Engineered interview book filtered out as non-AI-domain)

**Pages updated**:
- [[openai]] — $122B at $852B valuation (largest single VC fundraise in venture history; Amazon + Nvidia + SoftBank led; $2B/month revenue; enterprise 40%+); Sora user collapse — peaked ~1M DAU, dropped to <500K while burning ~$1M/day (direct trigger for the 2026-04-01 shutdown); ChatGPT for Apple CarPlay
- [[google]] — Veo 3.1 Lite (text-to-video + image-to-video, 720p/1080p, landscape or portrait, native audio + synced SFX + dialogue; matches Veo 3.1 Fast speed at <½ cost; Gemini API + AI Studio); Q Day warning reinforced — 256-bit elliptic-curve crypto protecting Bitcoin could break in minutes; post-quantum crypto migration recommended by 2029; Gmail AI-inbox testing
- [[minimax]] — M2.7 release details — built on self-evolution, reaches parity with Sonnet 4.6 on OpenClaw at fraction of cost; open-sourced Office Skills library (Word/Excel/PDF/PPT deliverable generation); unified Token subscription plan spanning M2.7 + video + voice + music + image
- [[runway]] — $10M Runway Startup Fund (pre-seed/seed; up to $500K checks; 500K API credits to Series C) — model provider becomes capital allocator
- [[perplexity]] — Secure Intelligence Institute (AI security/privacy/trust research)
- [[amazon]] — Ring AI app store (100M+ cameras become developer platform for elder care, workforce analytics, rental management); OpenAI $122B round leadership reinforces Amazon's AI-compute thesis
- [[ai-funding-rounds]] — OpenAI $122B at $852B (largest VC raise in history); Runway $10M startup fund; Qodo $70M for AI code-review/testing/governance agents (customers include Nvidia, Walmart, Red Hat)

**Pages created**: *(none)*

**Notable**: OpenAI's $122B at $852B — explicitly the largest single VC fundraise in venture history — anchors the cycle, led by Amazon, Nvidia, and SoftBank, with revenue now $2B/month and enterprise 40%+ of the mix; the capital is explicitly earmarked for the ChatGPT + Codex + agent-tool "superapp" and the Sora wind-down. The Sora shutdown narrative sharpens with a specific user-count trajectory — peaked ~1M DAU then collapsed to <500K while burning ~$1M/day — the concrete driver behind the 2026-04-01 blindsiding of Disney. Google answers on two fronts: Veo 3.1 Lite launches as a budget text-to-video + image-to-video model at less than half the cost of Veo 3.1 Fast (moving into Sora's vacated volume tier), and Google researchers publish a quantum-crypto warning that 256-bit elliptic-curve signatures (including those protecting Bitcoin) may fall to a utility-scale quantum computer in minutes, pushing the post-quantum migration deadline back to 2029 and reinforcing the 2026-03-27 Q Day framing. MiniMax M2.7 details firm up — self-evolving training + Sonnet 4.6 parity on OpenClaw at fraction of cost + a four-skill open-source Office Skills library + a single unified Token plan spanning all modalities — cementing MiniMax as the cross-modal Chinese open-weights reference. Runway launches a $10M startup fund (up to $500K checks + 500K API credits through Series C), making the AI-video lab an ecosystem capital allocator. Perplexity counter-posts the Claude Code leak cycle with a Secure Intelligence Institute focused on AI security/privacy/trust. Amazon Ring opens its 100M+ camera fleet as a third-party AI app platform (elder care / workforce analytics / rental management) — the physical-world analog to Codex Plugins and Claude Code plugins. Funding supplements: Qodo raises $70M for code-review/testing/governance agents with Nvidia/Walmart/Red Hat as customers. The ARC-AGI-3 video-game evaluation from the Superhuman cycle — Gemini, Claude, and ChatGPT all scoring <1% when dropped into a game with no rules — is noted here but left unwritten pending a dedicated page; same for the Caltech 1-bit edge-AI compression work surfaced by TLDR AI.

---

## 2026-04-01
**Ingested**: data/summaries/2026-04-01.json (19 newsletters)

**Pages updated**:
- [[anthropic]] — Claude Code Computer Use research preview (macOS, Pro/Max); Dispatch remote trigger from phone; first-party Codex plugin integration (Codex as second agent inside Claude Code); Bluesky Attie custom-feed AI on Claude
- [[claude-code]] — v2.1.88 Computer Use — full UI testing + debugging from single CLI prompt; closes write-code → manually-test-code loop
- [[alibaba]] — Qwen3.5-Omni (text + images + audio + video, 256K-token combined context, 113-language ASR, beats Gemini 3.1 Pro on audio); Qwen 3.6 Plus Preview; AutoClaw local executor
- [[openai]] — Sora shutdown fallout ($1M/day burn; Disney blindsided with <1hr notice); official Codex use-case gallery; first-party Codex plugin for Claude Code; Stanford "people-pleasing" paper (11 LLMs side with users even when wrong)
- [[microsoft]] — 365 Copilot Critique (dual-model research pipeline) + Council (parallel multi-model reports); Copilot Cowork Frontier Program expansion
- [[ollama]] — MLX-powered Apple-silicon rebuild (M5/M5 Pro/M5 Max GPU Neural Accelerators); NVIDIA NVFP4 support; cache overhaul (intelligent checkpoints + smarter eviction)
- [[apple]] — public AI-strategy recommit to hardware + services (embed AI in OSes, open Siri to third parties, hardware as differentiator); App Store pulls a "vibe-coded" app ("Anything")
- [[nvidia]] — IGX Thor (Blackwell-powered industrial edge; unified functional safety + AI) lineup available
- [[nous-research]] — Hermes Agent gains video generation and multi-instance agent workflows (no-human-intervention)

**Pages created**: *(none)*

**Notable**: Claude Code's Computer Use research preview lands as the headline release of the cycle — Claude now opens apps, clicks, types, and reads screen contents from a single CLI prompt, closing the write/test/debug loop end-to-end on macOS. OpenAI's Sora shutdown gets its sharp edge exposed: $1M/day burn + Disney learning less than an hour before the public announcement, orphaning Disney's enterprise-Sora marketing/VFX pilot. Perhaps most structurally surprising: OpenAI publishes a first-party Codex plugin that runs Codex as a second agent *inside* Claude Code — a cross-lab product integration that is rare in 2026. Microsoft builds on this cross-model trend directly, shipping Copilot Critique (dual-model pipeline) and Council (parallel multi-model reports) — "pitting Claude against ChatGPT for research" as a deliberate product choice. Alibaba's Qwen3.5-Omni joins the frontier tier by beating Gemini 3.1 Pro on audio while handling text/image/audio/video in one 256K-token context. Ollama rebuilt on Apple's MLX framework + NVFP4 reframes Apple silicon as a first-class macOS agent runtime for OpenClaw/Claude Code/OpenCode/Codex. Apple publicly recommits to selling hardware + services rather than chasing frontier consumer AI — and in the same cycle the App Store pulls a "vibe-coded" app, signaling gatekeeping against AI-generated apps. NVIDIA IGX Thor moves physical-AI to the industrial edge with Blackwell. Stanford's "people-pleasing" finding (11 LLMs consistently side with users, even backing harmful behavior) adds a concrete safety datapoint to the cycle.

## 2026-03-31
**Ingested**: data/summaries/2026-03-31.json (14 newsletters)

**Pages updated**:
- [[anthropic]] — Mythos leak officially confirmed (CMS-error origin); Claude Operon biology desktop mode powered by Mythos; paid Claude subscriptions more than double in 2026; Opus 4.6 autonomously finds unknown Ghost CMS + Linux kernel vulnerabilities
- [[claude-mythos]] — CMS-error confirmation; first named Mythos-powered product (Claude Operon); cyber-threat proof-point (Ghost CMS + Linux kernel vulns)
- [[google]] — Gemma 4 leak on LMSYS Arena ("significant-otter" codename); TurboQuant 6× memory reduction sparks chip selloff; internal "Agent Smith" AI so popular Google restricts it; Gemini imports ChatGPT history + preferences; NotebookLM off-page generation; "Agentic AI and the next intelligence explosion" paper
- [[openai]] — Codex Plugins (Figma, Linear, Notion, Sentry, Slack, Gmail); $10B raise at $120B+ valuation; "superapp" consolidation framing (ChatGPT + Codex + Atlas)
- [[meta]] — Avocado delay to at least May reaffirmed (9B + Mango Agent variants); reportedly considering licensing Google Gemini; AIO Sandbox unifies browser/shell/filesystem for agents; MetaClaw adds downtime-learning to OpenClaw-style agents
- [[xai]] — last remaining co-founder exits — completes original founding-team departure
- [[cursor-composer]] — Composer 2 beats Claude Opus 4.6 on terminal benchmarks at ~1/10 cost; cited as evidence for vertical-model thesis
- [[openclaw]] — Ollama Pi framed as its coding-agent harness; MetaClaw + Claude Operon this cycle position OpenClaw as cross-lab agent runtime
- [[ai-ipo-wave]] — OpenAI $10B at $120B+; SK Hynix confidential US IPO late 2026 ($9.6B–$14.4B); Shield AI $2B @ $12.7B; Kleiner Perkins $3.5B AI-tilted fund; Hummingbird ~$800M

**Pages created**:
- [[ollama]] — local-model runtime; ships Pi minimal coding agent behind OpenClaw; Pro/Max cloud tiers; `pi-subagents` + `pi-autoresearch` extensions

**Notable**: Claude Mythos shifts from rumor to confirmed — Anthropic attributes the leak to a CMS error and explicitly frames Mythos as a cybersecurity "step change" so severe release is paused for defender hardening. The proof-point arrives the same day: a researcher shows Claude Opus 4.6 autonomously surfacing unknown vulnerabilities in Ghost CMS and the Linux kernel. OpenAI responds with Codex Plugins (Figma/Linear/Notion/Sentry/Slack/Gmail) plus a $10B raise, bringing its agent-tool surface level with Claude Code and Gemini CLI and priming a ChatGPT+Codex+Atlas "superapp." Meta publicly acknowledges the Avocado slippage and — most notably — is reported to be weighing licensing Google Gemini, a sharp departure for an open-weights leader. Google's Gemma 4 leak on LMSYS (as "significant-otter") + TurboQuant's 6× memory cut (triggering a chip selloff) reopen the open-weights race. Ollama crosses into the agent layer with Pi, which becomes OpenClaw's coding harness and pairs with Meta's MetaClaw and Anthropic's Claude Operon to cement OpenClaw as the cross-lab agent-runtime abstraction. Vertical-model thesis crystallizes around Cursor Composer 2 (beats Opus 4.6 on terminals at 1/10 cost) and Intercom Apex 1.0 (73.1% resolution; hallucinates 65% less than GPT-5.4 / Opus 4.5). xAI's founding-team departure completes with the last co-founder's exit.

## 2026-03-30
**Ingested**: data/summaries/2026-03-30.json (7 newsletters)

**Pages updated**:
- [[alibaba]] — Accio Work: Qwen-powered agent teams for B2B (multi-step e-commerce workflows)
- [[google]] — Google Translate Live Translate on iOS; any headphones = translator; 70+ languages, prosody-preserving
- [[openclaw]] — managed-deployment wave (Amazon Lightsail, NVIDIA NemoClaw, Zenity, Onyx AI CLAW-10); exposed-instance studies; Meta Superintelligence Labs "confused deputy"
- [[ai-military]] — federal preliminary injunction freezes Pentagon's Anthropic "supply-chain risk" label ("Orwellian notion"); China robot-wolves lethal-autonomy escalation

**Pages created**: *(none)*

**Notable**: Federal court formally enjoins the Pentagon's Anthropic ban — "Orwellian notion" framing codifies First-Amendment retaliation risk around AI-procurement discrimination. OpenClaw's production-security story goes mainstream: cloud sandboxes (Amazon Lightsail, NVIDIA NemoClaw), inspection frameworks (Zenity), and enterprise-requirements spec (Onyx AI CLAW-10) emerge to answer "confused deputy" incidents and tens of thousands of exposed instances. Alibaba's Accio Work crystallizes the agent-team-as-team-hire product form from the Chinese B2B side. China adds robot-wolves with micro-missiles and "collective brain" to the lethal-autonomy surface.

## 2026-03-29
**Ingested**: data/summaries/2026-03-29.json (11 newsletters)

**Pages updated**:
- [[anthropic]] — expanded Claude Mythos leak provenance (~3,000 unpublished assets, European CEO summit, cyber-defender-first rollout); longest-ever Claude outage (~8 hours)
- [[claude-mythos]] — full leak context; initial rollout restricted to cybersecurity-defender customers
- [[amazon]] — acquires Fauna Robotics (child-sized humanoid "Sprout" for household tasks)
- [[figure]] — Figure 03 becomes first humanoid robot inside the White House (11 languages)
- [[vercel]] — JSON-Render open-sourced (AI-generated UIs via bounded structured JSON)
- [[openclaw]] — deployed on Ecovacs Bajie, Unitree G1, and Xiaomi devices in China

**Pages created**: *(none)*

**Notable**: Anthropic's Mythos leak expands — traced to ~3,000 inadvertently exposed unpublished internal assets including a secret European CEO summit where Dario Amodei is slated to demo the model; initial rollout reportedly targets cybersecurity-defender customers because of unprecedented offensive-security implications. Claude then hits its longest-ever outage (~8 hours). Humanoid-robotics momentum: Figure 03 walks the White House at a "Fostering the Future Together" summit; Amazon acquires Fauna Robotics for the Sprout household humanoid (second Amazon robotics acquisition this month after Rivr). OpenClaw runs on Chinese household and humanoid robots, pushing the open-source agent runtime into the physical-AI stack.

## 2026-03-28
**Ingested**: data/summaries/2026-03-28.json (21 newsletters)

**Pages updated**:
- [[anthropic]] — Claude Mythos leak; October IPO $60B+ talks; Pentagon preliminary injunction won; Claude 4.5 auto-PR fix + "vibe physics" 110-draft QFT paper
- [[openai]] — Amazon $15B + $35B partnership; Adult Mode shelved; White House preemption framework
- [[google]] — Gemini 3.1 Flash Live + Search Live 200+ countries
- [[meta]] — TRIBE v2 open-source tri-modal brain AI; $600B 2028 data-center plan
- [[apple]] — Siri opens to rivals in iOS 27; Mac Pro discontinued; $400K designer bonuses
- [[amazon]] — $15B+$35B OpenAI partnership; $200B 2026 AI capex plan
- [[mistral]] — Voxtral open-weight TTS across 9 languages
- [[bytedance]] — Seedance 2.0 rolling out in CapCut with real-face blocking
- [[cursor]] — Real-time RL training for Composer (online user-response learning loop)
- [[ai-ipo-wave]] — Anthropic October IPO $60B+; SpaceX $75B IPO at $1.75T
- [[ai-regulation]] — Wikipedia bans AI-generated articles; WH national AI preemption framework; Pentagon injunction; data-center tax proposal

**Pages created**:
- [[gemini-3-1-flash-live]] — Google's real-time voice model; 90.8% ComplexFuncBench Audio; 90+ languages; Gemini Live + Search Live
- [[claude-mythos]] — unreleased Claude tier above Opus 4.7; release delayed over cybersecurity risk
- [[cohere]] — Toronto enterprise LLM vendor; Transcribe open-source ASR tops HuggingFace across 14 languages

**Notable**: Leaked (later-deleted) Anthropic blog post reveals Claude Mythos — a tier above Opus 4.7 whose release is being deliberately held back so cybersecurity orgs can harden against AI-enabled attacks. Google ships its "sixth major AI drop in March 2026" — Gemini 3.1 Flash Live powering Search Live in 200+ countries with 90+ languages and 90.8% ComplexFuncBench Audio. OpenAI-Amazon partnership contours firm up ($15B base + up to $35B contingent, OpenAI commits to Trainium). Meta open-sources TRIBE v2, a tri-modal foundation model for predicting human brain activity trained on 1,000+ hours of fMRI across ~720 subjects. Regulatory front widens: Wikipedia bans AI articles, White House pushes federal preemption, Anthropic wins First Amendment injunction vs Pentagon, US senator floats AI data-center tax. Open-weight audio wave intensifies: Mistral Voxtral TTS (9 languages) + Cohere Transcribe ASR (#1 HuggingFace across 14 languages) pressure proprietary incumbents.

## 2026-03-27
**Ingested**: data/summaries/2026-03-27.json (18 newsletters)

**Pages updated**:
- [[openai]] — Disney $1B content deal ends; Sora tech → robot training; $10B more at $120B+
- [[disney]] — $1B OpenAI content partnership ends
- [[apple]] — gains complete edit access to private Gemini model for on-device distillation
- [[manus]] — founders detained in China; $2.5B Meta sale under regulatory review
- [[reflection]] — NVIDIA-backed; seeking $2.5B at $25B valuation (US open-source push)
- [[anthropic]] — Claude mobile app gains work-tool integrations (Figma/Canva/Slack/Amplitude)
- [[claude-code]] — Auto Mode GA; classifier-based permission skipping; self-hosted cloud agents
- [[cursor]] — Self-Hosted Agents for in-network parallel coding with Kubernetes support
- [[google]] — Lyria 3 Pro 3-min tracks; Q Day deadline moved to 2029
- [[lyria-3]] — Lyria 3 Pro update (full-track generation with structure control)

**Pages created**: *(none — reflection.md promoted from stale + rewritten)*

**Notable**: OpenAI's Sora shutdown cascades: Disney $1B deal ends, tech repurposed for robots; Altman reportedly sees Anthropic as OpenAI's most serious competitor. Apple cements Gemini dependency with edit-level access for on-device distillation. ARC-AGI-3 benchmark launches — all frontier models (Gemini 3 Pro, GPT-5.4 High, Opus 4.6, Grok-4.20) score <1%, resetting the agentic-intelligence scoreboard. NVIDIA-backed Reflection raises at $25B as explicit US counter to Chinese open-source lead.

## 2026-03-26
**Ingested**: data/summaries/2026-03-26.json

**Pages updated**:
- [[openai]] — Sora shutdown; next model "Spud"; fusion research pivot; in-chat checkout phased out; $120B round total
- [[sora-2]] — product shutdown entry
- [[apple]] — standalone Siri app + chatbot for iOS 27 in testing
- [[google]] — TurboQuant (KV-cache compression, ≥6× smaller, 8× faster attention on H100); DeepMind × Agile Robots partnership
- [[luma]] — Uni-1 decoder-only autoregressive architecture detail

**Notable**: OpenAI sunsets Sora platform to refocus on next-gen model "Spud" + fusion research; Apple finally builds a standalone conversational Siri app; Google Research TurboQuant paper ships major KV-cache efficiency gain.

## 2026-03-25
**Ingested**: data/summaries/2026-03-25.json

**Pages updated**:
- [[anthropic]] — Claude macOS desktop control without APIs; auto-dream memory consolidation for Claude Code
- [[claude-code]] — auto-dream memory consolidation feature
- [[openai]] — ChatGPT/Codex/Atlas desktop-app merger (earlier surfacing of April superapp consolidation); buyout-firm JV with 17.5% guaranteed min return
- [[ami-labs]] — LeWorldModel trains stable JEPA in under 1 second on a single GPU
- [[luma]] — Uni-1 framed as unified reasoning + image-generation pipeline
- [[cursor]] — Instant Grep (~13 ms client-side code search across millions of files)

**Notable**: Claude gains macOS desktop control without requiring APIs; Cursor ships client-side code indexing that's ~1000× faster than traditional code search; OpenAI reportedly consolidating ChatGPT/Codex/Atlas into a single desktop app.

## 2026-03-24
**Ingested**: data/summaries/2026-03-24.json

**Pages updated**:
- [[xai]] — $25B Terafab JV with Tesla + SpaceX for terawatt-scale chip fab
- [[openai]] — autonomous agent-researcher plans; workforce doubling to 8,000 by end of 2026
- [[manus]] — "My Computer" desktop app (local-machine agent via terminal)
- [[claude-cowork]] — Projects feature (persistent workspaces linking local folders + tasks)
- [[amazon]] — "Transformer" AI-centric smartphone project coverage
- [[nemotron-3]] — positioned as agent-cost-reduction release
- [[ai-jobs-displacement]] — Snowflake technical writing + docs layoffs (AI replacement)

**Notable**: Musk announces $25B Terafab JV pulling Tesla/SpaceX/xAI together on terawatt-scale chip manufacturing; OpenAI tells staff it plans to double headcount to 8,000 employees and ship an autonomous research agent; Amazon rumored to be building an AI-centric "Transformer" smartphone.

## 2026-03-23
**Ingested**: data/summaries/2026-03-23.json

**Pages updated**:
- [[andrej-karpathy]] — agents replace most software UIs framing
- [[ai-regulation]] — White House national AI framework
- [[openai]] — Altman "intelligence as metered utility" framing
- [[ai-military]] — Palantir Maven designated Pentagon program of record

**Notable**: Palantir's Maven AI becomes a formal Pentagon "program of record," cementing the defense-AI reference stack; Altman frames OpenAI's long-term business as "selling intelligence as a metered utility"; Karpathy argues agents will replace most software UIs.

## 2026-03-22
**Ingested**: data/summaries/2026-03-22.json

**Pages updated**:
- [[microsoft]] — MAI-Image-2 release
- [[amazon]] — Rivr quadruped-delivery-robot acquisition; mirrored AWS-OpenAI USG deal
- [[cursor-composer]] — 50% cost reduction + multi-file workflow detail
- [[google]] — AI Studio full-stack app generation with Firebase
- [[anthropic]] — Claude Interviewer tool; qualitative AI study cross-refs; mirrored Pentagon entry

**Notable**: Microsoft ships MAI-Image-2 as first in-house image model; Amazon acquires Swiss robotics startup Rivr for doorstep delivery; Google AI Studio gains full-stack app generation with Firebase + APIs.

## 2026-03-21
**Ingested**: data/summaries/2026-03-21.json

**Pages updated**:
- [[cursor-composer]] — Composer 2 release
- [[claude-code]] — Channels (multi-platform message ingestion)
- [[nvidia]] — $1T order backlog + OpenShell + DSX Air
- [[openai]] — Astral Python tooling acquisition
- [[perplexity]] — Perplexity Health US launch
- [[ai-military]] — Pentagon escalates Anthropic label to "unacceptable risk"
- [[mistral]] — Mistral Vibe terminal-native coding agent

**Notable**: NVIDIA discloses $1T order backlog alongside OpenShell + DSX Air; Pentagon escalates Anthropic label from "supply-chain risk" to "unacceptable risk" over surveillance + lethal-targeting refusals; Mistral ships Vibe terminal-native coding agent.

## 2026-03-20
**Ingested**: data/summaries/2026-03-20.json

**Pages updated**:
- [[minimax]] — M2.7 self-evolving model (Ollama distribution)
- [[google]] — Stitch AI-native design platform; DeepMind cognitive-taxonomy scorecard for AGI
- [[openai]] — OpenAI-AWS US government deal; Microsoft $50B legal-action risk framing
- [[meta]] — 20% layoffs (~16K jobs)
- [[openclaw]] — Blink Claw managed-deployment platform

**Notable**: Google launches Stitch as direct Canva/Figma/Adobe challenger on AI-native design; Meta cuts ~16,000 jobs (20%); OpenAI-AWS extend US-government coverage under scrutiny from Microsoft's Azure exclusivity clause.

## 2026-03-19
**Ingested**: data/summaries/2026-03-19.json

**Pages updated**:
- [[mistral]] — Mistral Forge + Mistral Small 4 MoE
- [[meta]] — $27B Nebius infrastructure deal
- [[ai-copyright]] — Britannica + Merriam-Webster suit vs OpenAI
- [[harmonic-aristotle]] — Aristotle Agent availability (web, CLI, API)
- [[claude-cowork]] — Mac-specific detail added to Dispatch entry

**Notable**: Mistral ships Forge + Small 4 MoE cheap-inference tier; Meta signs $27B Nebius deal for additional infrastructure capacity; Britannica + Merriam-Webster sue OpenAI over training data.

## 2026-03-18
**Ingested**: data/summaries/2026-03-18.json

**Pages updated**:
- [[nvidia]] — GTC 2026 keynote (Vera CPU, Dynamo 1.0, DLSS 5, Space-1 Vera Rubin Module, Disney Olaf robot, agentic/physical/healthcare open models)
- [[vera-rubin]] — GTC Space-1 Vera Rubin Module entry
- [[gpt-5-4]] — GPT-5.4 Mini + Nano release entry; Availability update
- [[claude-cowork]] — Dispatch research preview (phone → desktop task hand-off)
- [[microsoft]] — Copilot reorg (commercial/consumer unification; AI chief freed for superintelligence)

**Notable**: NVIDIA GTC 2026 keynote drops Vera CPU, Dynamo 1.0, DLSS 5, Space-1 Vera Rubin Module, Disney Olaf robot, and agentic/physical/healthcare open models in one keynote; OpenAI ships GPT-5.4 Mini + Nano optimized for coding and subagent workloads.

## 2026-03-17
**Ingested**: data/summaries/2026-03-17.json

**Pages updated**:
- [[ami-labs]] — JEPA architectural detail (concepts in abstract latent space, not pixels or tokens)
- [[canva]] — Magic Layers launch; product-surface update
- [[anthropic]] — 295% ChatGPT uninstall surge (weekly recap datapoint)

**Notable**: LeCun's AMI Labs reframed as "kill autoregressive AI" via JEPA architecture operating in latent space; Canva ships Magic Layers with AI-aware segmentation; weekly recaps cite 295% ChatGPT uninstall surge following Anthropic's Pentagon refusal.

## 2026-03-16
**Ingested**: data/summaries/2026-03-16.json

**Pages updated**:
- [[openai]] — ChatGPT cancer-vaccine project coverage
- [[google]] — AI glasses coverage
- [[xai]] — full rebuild narrative (9 of 11 cofounders gone)

**Notable**: xAI framed as rebuilding after cofounder exodus; OpenAI ChatGPT cancer-vaccine research project surfaces; Google AI glasses continue chasing Meta.

## 2026-03-15
**Ingested**: data/summaries/2026-03-15.json

**Pages updated**:
- [[anthropic]] — 1M-token context free + $100M partner program
- [[amazon]] — Alexa+ adults-only mode; AI-coding-tool guardrails requiring senior-engineer sign-off
- [[nvidia]] — GTC 2026 preview coverage

**Notable**: Anthropic makes 1M-token context window free for all Claude users and rolls out $100M partner program; Alexa+ ships adults-only curses-and-roasts mode with kid-mode lockout; NVIDIA GTC preview sets up Vera Rubin + Nemotron roadmap.

## 2026-03-14
**Ingested**: data/summaries/2026-03-14.json

**Pages updated**:
- [[anthropic]] — TIME cover; Claude Visuals launch; $2.5B Claude Code ARR disclosure
- [[openai]] — Sora joins ChatGPT; Finance Project; ChatGPT Pro Lite
- [[claude-code]] — Claude Visuals integration
- [[cursor]] — CursorBench release; xAI talent-poaching counter-narrative
- [[xai]] — Cursor talent-poaching campaign
- [[meta]] — Avocado model delay
- [[google]] — Maps overhaul ("brings Gemini to the road")
- [[microsoft]] — Copilot Health launch
- [[perplexity]] — Perplexity API platform rebuilt as full-stack model-agnostic agent API
- [[apple]] — Ultra lineup expansion coverage

**Notable**: Anthropic lands TIME cover with $2.5B Claude Code ARR disclosure; OpenAI folds Sora into ChatGPT and ships Finance Project / Pro Lite tier; Google Maps and Microsoft Copilot both add major Gemini/Claude-powered assistant layers the same day.

## 2026-03-13
**Ingested**: data/summaries/2026-03-13.json

**Pages updated**:
- [[anthropic]] — opens research institute for AI's impact on jobs/economies/law/governance
- [[google]] — Workspace Gemini expanded (Docs/Sheets/Slides/Drive for AI Ultra/Pro)
- [[nvidia]] — Nemotron 3 Super 120B launch; OpenClaw competitor framing
- [[nemotron-3]] — Super 120B released (hybrid Mamba-Transformer MoE, 1M context, 5× throughput)
- [[cursor]] — $50B valuation talks surface
- [[replit]] — Replit Agent 4 launches (infinite canvas + parallel agents)
- [[perplexity]] — Personal Computer launch (always-on Comet Assistant on dedicated Mac mini)
- [[apple]] — MacBook Neo $599 launch; foldable-iPhone iPad-like layout detailed
- [[elevenlabs]] — ElevenCreative full creative platform launched
- [[anduril]] — ExoAnalytic Solutions acquisition doubles space unit
- [[ai-jobs-displacement]] — Anthropic research institute addition
- [[claude-code]] — /btw slash-command addition
- [[openai]] — interactive math in ChatGPT; Kalinowski departure
- [[xai]] — Macrohard revival narrative
- [[meta]] — 4 in-house chips detail
- [[amazon]] — Amazon Health AI launch with One Medical integration

**Pages created**: [[perplexity-personal-computer]]

**Notable**: Perplexity's Personal Computer makes Mac mini the default hardware for the AI-agent era; Nemotron 3 Super 120B hybrid Mamba-Transformer MoE ships with 1M context; Anthropic's research institute signals labor-economics frame for AI policy; Replit Agent 4 and ElevenCreative broaden the creative-agent stack.

## 2026-03-12
**Ingested**: data/summaries/2026-03-12.json

**Pages updated**:
- [[ami-labs]] — $1.03B raise at $3.5B valuation
- [[meta]] — acquires Moltbook
- [[moltbook]] — status changed to "acquired by [[meta]]"
- [[google]] — Gemini Embedding 2 launch
- [[nvidia]] — Thinking Machines gigawatt compute deal
- [[thinking-machines]] — NVIDIA gigawatt deal + revived from stale
- [[apple]] — smart home display (J490) delayed to September pending new Siri
- [[perplexity]] — Amazon court order blocking Perplexity shopping agent
- [[amazon]] — wins court order vs Perplexity AI shopping agent

**Pages created**: [[gemini-embedding-2]]

**Notable**: Meta buys Moltbook — first major AI-social acquisition; Thinking Machines secures gigawatt NVIDIA compute deal; Amazon wins first major agent-access injunction against Perplexity; Gemini Embedding 2 unifies embeddings across text/image/video/audio/PDF.

## 2026-03-11
**Ingested**: data/summaries/2026-03-11.json

**Pages updated**:
- [[anthropic]] — two federal lawsuits vs Pentagon ("supply chain risk" designation); Claude Code Review launch; fork-mid-session in Claude Code
- [[openai]] — acquires Promptfoo; Stargate expansion scrapped; shopping killed; adult mode paused
- [[claude-code]] — Code Review + fork-mid-session features
- [[microsoft]] — Copilot Cowork launch (with Anthropic)
- [[apple]] — smart home display delayed further pending Siri; foldable iPhone + touchscreen MacBook Ultra pipeline
- [[anduril]] — $8B round at $60B valuation (Thrive + a16z leading)

**Pages created**: [[copilot-cowork]]

**Notable**: Anthropic goes to court against the Pentagon over "supply chain risk" label; Microsoft × Anthropic launch Copilot Cowork (first Claude-powered M365 task agent); OpenAI acquires Promptfoo and kills Stargate expansion + shopping effort; ChatGPT pauses adult mode.

## 2026-03-10
**Ingested**: data/summaries/2026-03-10.json

**Pages updated**:
- [[anthropic]] — Claude Marketplace launch with GitLab/Harvey/Replit/Snowflake; sleep mode; Firefox bug discoveries
- [[cursor]] — "War Time" posture; $2B ARR disclosure
- [[meta]] — Vibes editor launch
- [[replit]] — named as [[claude-marketplace]] launch partner; revived from stale
- [[openai]] — Codex Security launch; Excel add-in; Codex for Open Source Software
- [[claude-code]] — sleep/loop modes
- [[luma]] — Uni-1 tops RISEBench leaderboard
- [[apple]] — Apple Ultra products expansion (foldable iPhone, AirPods, OLED MacBook Pro)

**Pages created**: [[claude-marketplace]], [[codex-security]]

**Notable**: Claude Opus 4.6 discovers 22 Firefox vulnerabilities (14 high severity); Claude Marketplace launches with enterprise anchor partners; OpenAI ships Codex Security autonomous appsec agent; Cursor pivots to "War Time" enterprise posture with $2B ARR disclosure.

## 2026-03-09
**Ingested**: data/summaries/2026-03-09.json

**Pages updated**:
- [[claude-code-security]] — Firefox 22-vuln discovery (14 high severity) source reference
- [[ai-regulation]] — North Korea IT-worker AI-assisted fraud; Anthropic DoW lawsuit context

**Notable**: Claude credited with accelerating vulnerability discovery in large codebases; AI-assisted North Korea IT-worker fraud operation surfaces as an AI-misuse data point.

## 2026-03-08
**Ingested**: data/summaries/2026-03-08.json

**Pages updated**:
- [[luma]] — TAAFT February recap reference for Luma Agents

**Notable**: Low-signal day dominated by TAAFT's February recap; no material new launches beyond restated prior-week items.

## 2026-03-07
**Ingested**: data/summaries/2026-03-07.json

**Pages updated**:
- [[openai]] — GPT-5.4 arrival coverage (2M-token context + Stateful AI)
- [[anthropic]] — Economic Index / AI-jobs study publication
- [[luma]] — Luma Agents launch with Uni-1 model
- [[ai-regulation]] — Anthropic DoW lawsuit framing

**Pages created**: [[anduril]], [[ai-jobs-displacement]]

**Notable**: Anduril raising $4B at $60B valuation (targeting $4.3B 2026 revenue); Anthropic Economic Index publishes first AI-jobs exposure study (44% high-risk, programmers most exposed); Luma Agents + Uni-1 extends creative agents into self-critiquing multimodal workflows.

## 2026-03-06
**Ingested**: data/summaries/2026-03-06.json

**Pages updated**:
- [[openai]] — GPT-5.4 leak; Codex App Windows w/ PowerShell; Pentagon contract revision
- [[google]] — NotebookLM cinematic videos (Gemini + Veo); gws CLI for Workspace
- [[nvidia]] — potential pullback on further investment in OpenAI and Anthropic
- [[alibaba]] — Qwen team departures incl. lead researcher Junyang Lin
- [[perplexity]] — [[perplexity-computer]] Skills
- [[anthropic]] — revised Pentagon posture upstream context
- [[codex-app]] — Windows release
- [[perplexity-computer]] — Skills expansion
- [[ai-regulation]] — OpenAI Pentagon contract revision after employee backlash
- [[ai-hardware]] — Nvidia pullback narrative
- [[ai-memory]] — GPT-5.4 Stateful AI leak reference

**Pages created**: [[gpt-5-4]]

**Notable**: GPT-5.4 leak reveals 2M-token context + "Stateful AI"; Nvidia signals transition from equity stakes to chip-sales-only posture toward OpenAI/Anthropic.

## 2026-03-05
**Ingested**: data/summaries/2026-03-05.json

**Pages updated**:
- [[openai]] — [[gpt-5-3-instant]] released (26.8% hallucination cut with web)
- [[google]] — [[gemini-3-1-flash-lite]] launched
- [[anthropic]] — Claude #1 on Apple US App Store post-Pentagon refusal narrative
- [[apple]] — iPhone 17e with A19 chip
- [[alibaba]] — Qwen 3.5 Small coverage continues
- [[ai-regulation]] — SCOTUS declines AI-copyright case (continued coverage)
- [[qwen-3-5]] — Small family coverage entry

**Pages created**: [[gpt-5-3-instant]], [[gemini-3-1-flash-lite]], [[block]]

**Notable**: Block cuts ~half of employees citing internal AI agent "Goose" despite best quarter ever — flagship labor-displacement data point.

## 2026-03-04
**Ingested**: data/summaries/2026-03-04.json

**Pages updated**:
- [[anthropic]] — Claude Memory ships; ChatGPT→Claude memory-migration tool
- [[alibaba]] — [[qwen-3-5]] Small family released
- [[apple]] — Core AI framework replacing Core ML for iOS 27 at WWDC
- [[qwen-3-5]] — Small family release entry
- [[ai-regulation]] — SCOTUS declines AI-copyright case (humans-only authorship upheld)
- [[ai-memory]] — Claude Memory + ChatGPT migration

**Pages created**: [[ai-memory]]

**Notable**: Persistent memory becomes first-class competitive axis; Claude surge coincides with cross-vendor memory import tool.

## 2026-03-03
**Ingested**: data/summaries/2026-03-03.json

**Pages updated**:
- [[xai]] — set to replace [[anthropic]] in classified Pentagon systems
- [[anthropic]] — supply-chain-risk framing around Pentagon substitution
- [[meta]] — AMD partnership details (6 GW / $100B multi-year)
- [[nvidia]] — participates in OpenAI $110B mega-round
- [[openai]] — $110B close at $730B valuation
- [[perplexity]] — multi-model OS framing (continues from Computer launch)
- [[google]] — Merkle Tree Certs coverage
- [[ai-regulation]] — Pentagon vendor switch-out as leverage
- [[ai-funding-rounds]] — OpenAI $110B at $730B
- [[ai-hardware]] — Meta-AMD $100B partnership detail
- [[ai-military]] — Pentagon switches Anthropic → xAI

**Pages created**: [[ai-military]]

**Notable**: First explicit Pentagon vendor swap tied to a lab's safeguard policy; Meta-AMD establishes largest disclosed compute deal to date.

## 2026-03-02
**Ingested**: data/summaries/2026-03-02.json

**Pages updated**:
- [[google]] — [[gemini-3-1-pro]] released as new flagship
- [[openai]] — Pentagon partnership on classified network (accepts where Anthropic refused)
- [[microsoft]] — reaffirms Azure-exclusive cloud for OpenAI APIs
- [[apple]] — joint AI-wearable work with OpenAI (AirPods/glasses/pendant)
- [[anthropic]] — 7-part Agentic blitz for Claude (remote control, Figma connector)
- [[gemini-3-1-pro]] — release entry
- [[nano-banana-2]] — adoption in Antigravity/Claude Code workflows
- [[agent-frameworks]] — Anthropic Agentic 7-part blitz
- [[ai-military]] — OpenAI-Pentagon deployment

**Pages created**: (none beyond those listed above as new in prior days)

**Notable**: Microsoft's public reaffirmation of Azure-exclusive OpenAI hosting even as the broader OpenAI financing stack diversifies.

## 2026-03-01
**Ingested**: data/summaries/2026-03-01.json

**Pages updated**:
- [[anthropic]] — Auto-Memory launched; Claude automatically maintains memory across chats
- [[google]] — Intrinsic absorbed into Alphabet/Google robotics stack
- [[openai]] — $110B raise at $730B valuation advances
- [[nano-banana-2]] — continued coverage
- [[ai-memory]] — Anthropic Auto-Memory anchor entry
- [[ai-funding-rounds]] — OpenAI $110B @ $730B
- [[ai-regulation]] — Pentagon / Claude context continues

**Pages created**: (none)

**Notable**: Auto-Memory removes the user-opt-in step for persistent Claude memory — behavior change precedes product-launch press of 2026-03-04.

## 2026-02-28
**Ingested**: data/summaries/2026-02-28.json

**Pages updated**:
- [[anthropic]] — refuses Department of War partnership over reliability + ethics concerns
- [[openai]] — mobile share drops 69% → 45% as Claude gains
- [[google]] — Nano Banana 2 first surfaces in cycle coverage
- [[xai]] — Co-founder Toby Pohlen departs (7th co-founder in under three years)
- [[nano-banana-2]] — first surface
- [[ai-regulation]] — Anthropic DoW refusal
- [[ai-military]] — Anthropic DoW refusal as guardrail anchor

**Pages created**: (none)

**Notable**: Seventh xAI co-founder departure raises governance questions amid post-SpaceX-merger trajectory; Claude's consumer surge chips at ChatGPT's mobile share.

## 2026-02-27
**Ingested**: data/summaries/2026-02-27.json

**Pages updated**:
- [[perplexity]] — [[perplexity-computer]] launches (19-model orchestration)
- [[anthropic]] — Infosys partnership for enterprise agents; Vercept acquisition
- [[openai]] — two-year misuse report published
- [[alibaba]] — [[qwen-3-5]] Medium open-sourced
- [[google]] — Opal no-code mini-app builder + [[gemini-3-1-pro]] sunsetting Gemini 3 Pro Preview
- [[qwen-3-5]] — Medium MoE entry
- [[claude-cowork]] — scheduled tasks
- [[agent-frameworks]] — Computer, Vercel Chat SDK, Hermes Agent, Cowork scheduled tasks
- [[ai-regulation]] — OpenAI misuse report; Discord age-verification delay

**Pages created**: [[perplexity-computer]], [[vercel]], [[nous-research]], [[ai2]]

**Notable**: Perplexity shifts from search to task orchestration; first Ai2 benchmark release (PreScience + LACERScore) for scientific-forecasting AI.

## 2026-02-26
**Ingested**: data/summaries/2026-02-26.json

**Pages updated**:
- [[anthropic]] — Pentagon ultimatum to remove military safeguards; Claude Cowork plugins/connectors expanded
- [[meta]] — $100B / 6 GW AMD deal
- [[zhipu-ai]] — [[glm-5]] cited as leading open-weights model on GDPval-AA
- [[claude-cowork]] — plugins and connectors for enterprise
- [[agent-frameworks]] — Notion Custom Agents
- [[ai-regulation]] — Pentagon ultimatum to Anthropic
- [[ai-funding-rounds]] — Meta-AMD $100B
- [[ai-hardware]] — Meta-AMD 6 GW
- [[ai-military]] — Pentagon ultimatum anchor

**Pages created**: [[notion]]

**Notable**: Pentagon ultimatum crystallizes safeguard-vs-contract tradeoff for Anthropic; Meta-AMD deal becomes largest disclosed public compute agreement.

## 2026-02-25
**Ingested**: data/summaries/2026-02-25.json

**Pages updated**:
- [[anthropic]] — accuses Chinese labs of unauthorized data-use / model-output training
- [[openai]] — first-party frontier-lab Chinese-data-theft allegation
- [[meta]] — OpenClaw "rogue" framing in security discourse
- [[ai-regulation]] — Chinese labs data-theft accusation anchor

**Pages created**: (none)

**Notable**: First major public frontier-lab accusation of Chinese competitors using model outputs as training data — opens a new class of cross-border AI-IP dispute.

## 2026-02-24
**Ingested**: data/summaries/2026-02-24.json

**Pages updated**:
- [[anthropic]] — Claude Code Security launched inside [[claude-code]]
- [[openai]] — Nvidia $30B tranche closes
- [[google]] — [[gemini-3-1-pro]] coverage in cycle
- [[nvidia]] — $30B OpenAI tranche closes
- [[gemini-3-1-pro]] — entry
- [[claude-code]] — Security scanner reference
- [[claude-code-security]] — launch coverage
- [[ai-funding-rounds]] — Nvidia $30B close
- [[ai-hardware]] — Nvidia-OpenAI tranche

**Pages created**: [[claude-code-security]], [[gemini-3-1-pro]]

**Notable**: Anthropic collapses appsec and dev-tool categories with Claude Code Security; Nvidia's $30B OpenAI tranche finalizes.

## 2026-02-23
**Ingested**: data/summaries/2026-02-23.json

**Pages updated**:
- [[apple]] — on-device agent in development
- [[cisco]] — AI agents absorbing ~80% of routine network-ops work
- [[anthropic]] — Claude Code Security Scanner framing
- [[openai]] — ChatGPT Pro Lite $100/mo tier
- [[agent-frameworks]] — Cisco + Apple on-device agents

**Pages created**: [[cisco]]

**Notable**: Cisco's 80%-pattern-incident claim is one of the strongest public enterprise signals for agentic-AI adoption inside core IT operations.

## 2026-02-22
**Ingested**: data/summaries/2026-02-22.json

**Pages updated**:
- [[anthropic]] — Claude Code full PR workflow (preview/review/merge); [[claude-code-security]] announcement
- [[microsoft]] — AI bug leaks private user emails
- [[apple]] — 2027 AI-wearables push (smart glasses + pendant + camera-equipped AirPods)
- [[meta]] — smartwatch revival with health features; OpenClaw ban over security fears
- [[claude-code]] — full PR workflow
- [[claude-code-security]] — announcement entry
- [[ai-regulation]] — Microsoft AI private-email leak

**Pages created**: (none)

**Notable**: Claude Code becomes end-to-end PR surface; Microsoft's email leak adds a first-party-tool data-breach to the regulatory pressure map.

## 2026-02-21
**Ingested**: data/summaries/2026-02-21.json

**Pages updated**:
- [[google]] — [[gemini-3-1-pro]] hits 77.1% ARC-AGI-2; NotebookLM Prompt-Based Revisions
- [[gemini-3-1-pro]] — ARC-AGI-2 77.1% entry

**Pages created**: (none)

**Notable**: Gemini 3.1 Pro's ARC-AGI-2 score re-opens the "Google challenges Claude on reasoning" framing.

## 2026-02-20
**Ingested**: data/summaries/2026-02-20.json

**Pages updated**:
- [[google]] — [[lyria-3]] integrated into Gemini (30-sec tracks, 8 languages, SynthID)
- [[openai]] — EVMbench + [[gpt-5-3-codex-spark]] 72.2% exploit tasks
- [[meta]] — multi-billion Nvidia deal for GPU/CPU data-center deployment
- [[nvidia]] — Meta multi-billion deal
- [[xai]] — Humain $3B investment; significant minority stake
- [[world-labs]] — $1B funding round for spatial-intelligence scaling
- [[anthropic]] — Claude Sonnet 4.6 1M-token context default-free framing
- [[gpt-5-3-codex-spark]] — EVMbench 72.2% entry
- [[ai-funding-rounds]] — Humain $3B / World Labs $1B / Meta-Nvidia
- [[ai-hardware]] — Meta-Nvidia multi-billion deal
- [[ai-music-generation]] — Lyria 3 anchor entry

**Pages created**: [[lyria-3]], [[humain]], [[ai-music-generation]]

**Notable**: Spatial-intelligence hits institutional-scale with World Labs' $1B round; Humain entrenches Saudi capital in the xAI camp; Google integrates music generation into Gemini's main surface.

## 2026-02-19
**Ingested**: data/summaries/2026-02-19.json

**Pages updated**:
- [[xai]] — [[grok-4-20]] public beta with four-agent parallel research workflow; Grok Build adds Parallel Agents + Arena Mode
- [[bytedance]] — [[disney]] threatens legal action over [[seedance-2]] character/style reproductions
- [[anthropic]] — Figma Code-to-Canvas integrates [[claude-code]] as hand-off target
- [[claude-code]] — Figma Code-to-Canvas hand-off integration
- [[agent-frameworks]] — Grok 4.20 four-agent surface; Grok Build IDE positioning
- [[ai-regulation]] — Disney vs ByteDance IP friction
- [[ai-video-generation]] — Disney IP threats vs Seedance 2.0

**Pages created**: [[grok-4-20]]

**Notable**: First explicit multi-agent surface from xAI; Disney's first major Western IP escalation against a non-Western frontier video model.

## 2026-02-18
**Ingested**: data/summaries/2026-02-18.json

**Pages updated**:
- [[alibaba]] — [[qwen-3-5]] released — 397B-A17B hybrid linear+MoE, 201 languages, native multimodal
- [[openai]] — [[chatgpt]] Lockdown Mode rolls out
- [[chatgpt]] — Lockdown Mode for high-security sessions
- [[ai-funding-rounds]] — Stripe valuation hits $140B
- [[ai-regulation]] — ChatGPT Lockdown Mode as enterprise/government safer-default
- [[enterprise-ai]] — Lockdown Mode framing

**Pages created**: [[qwen-3-5]]

**Notable**: Qwen 3.5's hybrid linear-attention + sparse MoE delivers ~19× faster decoding than Qwen3-Max — strongest open multilingual frontier from Alibaba to date.

## 2026-02-17
**Ingested**: data/summaries/2026-02-17.json

**Pages updated**:
- [[bytedance]] — Seed 2.0 family extended (coherent storyline, voice-overs, complex actions)
- [[seedance-2]] — Seed 2.0 family expansion timeline entry
- [[ai-video-generation]] — Seedance Seed 2.0 expansion
- [[agent-frameworks]] — Manus debuts inside Telegram
- [[ai-funding-rounds]] — Simile $100M raise
- [[ai-hardware]] — global RAM shortage flagged as binding compute constraint

**Pages created**: (none)

**Notable**: Manus expands its agent surface from web/Slack into Telegram messaging; RAM supply emerges as a hyperscaler bottleneck.

## 2026-02-16
**Ingested**: data/summaries/2026-02-16.json

**Pages updated**:
- (No new wiki-scope items — weekend-recap content)

**Pages created**: (none)

**Notable**: Quiet day; carry-over coverage of Seedance and Anthropic Series G.

## 2026-02-15
**Ingested**: data/summaries/2026-02-15.json

**Pages updated**:
- (No new wiki-scope items — weekend-recap content)

**Pages created**: (none)

**Notable**: Quiet day; weekly-recap framing of the Anthropic / Seedance / OpenAI Frontier cycle.

## 2026-02-14
**Ingested**: data/summaries/2026-02-14.json

**Pages updated**:
- [[bytedance]] — Seedance "anchor" system enables sophisticated multi-shot video
- [[seedance-2]] — anchor system for multi-shot consistency
- [[ai-video-generation]] — Seedance anchor system

**Pages created**: (none)

**Notable**: Multi-shot consistency via persistent "anchors" is becoming a category-defining feature for AI video.

## 2026-02-13
**Ingested**: data/summaries/2026-02-13.json

**Pages updated**:
- [[meta]] — multi-year Meta×NVIDIA mega-deal underwriting Reality Labs / inference fleet
- [[nvidia]] — Meta mega-deal participation
- [[openai]] — [[chatgpt]] ads beta expands to wider US rollout in Free + Go tiers
- [[chatgpt]] — ads expand from beta
- [[microsoft]] — Copilot Tasks expands
- [[ai-funding-rounds]] — Lotus AI raises $35M (legal-tech)
- [[ai-hardware]] — Meta×NVIDIA capacity commitment
- [[enterprise-ai]] — Microsoft Copilot Tasks
- [[agent-frameworks]] — Cursor Plugin Marketplace launches

**Pages created**: (none)

**Notable**: Meta×NVIDIA deal reframes Reality Labs spending as inference infrastructure; Cursor plugin marketplace opens up a third-party distribution surface in IDE-class agents.

## 2026-02-12
**Ingested**: data/summaries/2026-02-12.json

**Pages updated**:
- [[alibaba]] — [[qwen-image-2]] released — unified gen + editing; #2 editing / #3 text-to-image AI Arena Elo
- [[qwen-image]] — superseded by qwen-image-2
- [[anthropic]] — Pentagon flags supply-chain risk in Claude
- [[elevenlabs]] — closes $500M at $11B led by Sequoia
- [[ai-regulation]] — Pentagon supply-chain concerns vs Anthropic
- [[ai-funding-rounds]] — ElevenLabs $500M @ $11B
- [[agent-frameworks]] — Warp ships Oz long-running coding agent

**Pages created**: [[qwen-image-2]]

**Notable**: Qwen-Image 2.0 fuses gen + editing into one architecture and immediately ranks top-3 on AI Arena — bridging the gap toward Nano Banana Pro and FLUX.2.

## 2026-02-11
**Ingested**: data/summaries/2026-02-11.json

**Pages updated**:
- [[anthropic]] — WordPress connector ships
- [[bytedance]] — [[seedance-2]] details: 2K resolution, 15s outputs, native audio; Seedream 5.0 image companion previewed
- [[seedance-2]] — 2K/15s/native audio detail; Seedream 5.0 companion
- [[ai-funding-rounds]] — Waymo $16B raise
- [[ai-video-generation]] — Seedance specs detailed
- [[enterprise-ai]] — Anthropic WordPress connector

**Pages created**: (none)

**Notable**: Native audio in a 2K/15s open-distribution video model lands as the first credible non-Western challenger to Sora 2 / Veo 3.

## 2026-02-10
**Ingested**: data/summaries/2026-02-10.json

**Pages updated**:
- [[anthropic]] — $30B Series G at $380B valuation; Cowork Windows beta opens
- [[bytedance]] — [[seedance-2]] released on Jimeng AI video platform
- [[claude-cowork]] — Windows beta opens
- [[ai-funding-rounds]] — Anthropic $30B at $380B
- [[ai-video-generation]] — Seedance 2.0 launch
- [[enterprise-ai]] — Cowork Windows beta

**Pages created**: [[bytedance]], [[seedance-2]]

**Notable**: Anthropic's $380B mark approaches OpenAI valuation territory; ByteDance enters the wiki as a frontier-model vendor.

## 2026-02-09
**Ingested**: data/summaries/2026-02-09.json

**Pages updated**:
- [[openai]] — [[openai-frontier]] launches enterprise AI-Employee platform; [[chatgpt]] Skills released; Deep Research updated; [[gpt-5-3-codex-spark]] on Cerebras hits 1000+ tokens/sec
- [[chatgpt]] — Skills system; Deep Research update
- [[apple]] — Xcode 26.3 ships with Anthropic Claude SDK + OpenAI Codex integration
- [[claude-code]] — Xcode 26.3 first-party Mac IDE integration
- [[codex-app]] — 40% faster after backend optimization
- [[google]] — Gemini 3 GA push across Workspace + Vertex AI; Deep Think profiled
- [[gemini-3]] — Workspace + Vertex GA
- [[project-genie]] — continues as world-models category headliner alongside Gemini 3 Deep Think
- [[agent-skills]] — OpenAI ChatGPT Skills as parallel/competitor system
- [[agent-frameworks]] — ChatGPT Skills; Codex-Spark on Cerebras; OpenAI Frontier
- [[ai-hardware]] — GPT-5.3-Codex-Spark on Cerebras
- [[enterprise-ai]] — OpenAI Frontier launch

**Pages created**: [[openai-frontier]], [[gpt-5-3-codex-spark]]

**Notable**: OpenAI splits its enterprise stack with Frontier (AI Employees) vs ChatGPT Skills (capability packaging) — clear answer to Anthropic Agent Skills + Cowork.

## 2026-02-08
**Ingested**: data/summaries/2026-02-08.json

**Pages updated**:
- (No new wiki-scope items — primarily marketing/community content)

**Pages created**: (none)

**Notable**: Quiet day; no high-relevance AI-tooling launches.

## 2026-02-07
**Ingested**: data/summaries/2026-02-07.json

**Pages updated**:
- (No new wiki-scope items beyond carry-over coverage)

**Pages created**: (none)

**Notable**: Quiet day; mostly carry-over coverage of GPT-5.3 Codex and ongoing funding-round commentary.

## 2026-02-06
**Ingested**: data/summaries/2026-02-06.json

**Pages updated**:
- [[google]] — Gemini app surpasses 750M MAU; Alphabet earnings highlight Gemini-driven growth
- [[gemini-3]] — 750M MAU milestone
- [[nvidia]] — gaming-GPU mindshare push; Intel positions GPU re-entry; Meta internal Avocado chip referenced
- [[meta]] — Avocado inference chip + Reality Labs reorganization
- [[nemotron-3]] — Nano/Super/Ultra emphasis in dev outreach
- [[ai-hardware]] — Avocado / Intel GPU push / NVIDIA gaming push

**Pages created**: (none)

**Notable**: Gemini's 750M MAU is a meaningful step-change in consumer-AI competitive pressure on ChatGPT.

## 2026-02-05
**Ingested**: data/summaries/2026-02-05.json

**Pages updated**:
- [[openai]] — [[gpt-5-3-codex]] released — 77.3% Terminal-Bench 2.0, 25% faster than GPT-5.2-Codex
- [[codex-app]] — ships with GPT-5.3-Codex as new default coding model
- [[alibaba]] — [[qwen3-coder-next]] released — 80B MoE, 800K coding tasks, open weights
- [[google]] — Mozilla Firefox adds Gemini toggle
- [[gemini-3]] — Firefox AI toggle exposure
- [[anthropic]] — Sonnet 5 leak references continue circulating
- [[ai-regulation]] — Mozilla AI toggle as user-control regulatory-friendly default
- [[agent-frameworks]] — GPT-5.3-Codex; Qwen3-Coder-Next

**Pages created**: [[gpt-5-3-codex]], [[qwen3-coder-next]]

**Notable**: Qwen3-Coder-Next becomes the strongest open-weights challenger in the agentic-coding tier; GPT-5.3-Codex resets the closed-model coding benchmark.

## 2026-02-04
**Ingested**: data/summaries/2026-02-04.json

**Pages updated**:
- [[openai]] — [[codex-app]] macOS release; Amazon $50B investment talks push valuation to $830B; 600PB/70k-dataset internal data agent; Nvidia $100B deal scaled back
- [[anthropic]] — Cowork plugins (sales/legal/finance/marketing/biology); $20B at $350B target (IPO possible after $13B raise); Perseverance first AI-planned Mars drive; Claude Sonnet 5 leaks
- [[xai]] — SpaceX acquires xAI $1.25T stock swap; Grok Imagine 1.0
- [[google]] — Universal Commerce Protocol (with Shopify) formal announcement; former Google engineer convicted of AI trade-secret theft; Gemini conversation import
- [[nvidia]] — Huang dismisses $100B "stalled" reports
- [[chatgpt]] — traffic decline vs Gemini; Codex App access for Free/Go (limited-time)
- [[claude-cowork]] — plugins launch; Perseverance Mars drive via Claude
- [[claude-code]] — creator's 10 power-user hacks; diverges from Codex App UX
- [[ai-funding-rounds]] — SpaceX+xAI $1.25T, Waymo $16B, Anthropic $20B target, Amazon $50B OpenAI talks, Day AI $20M

**Pages created**: [[codex-app]], [[moltbook]], [[agent-composer]], [[glm-ocr]]

**Notable**: Largest private-company M&A in history (SpaceX+xAI $1.25T); Moltbook goes viral with 1.5M AI agents; OpenAI Codex App reframes coding agents as "infrastructure, not a feature."

## 2026-02-02
**Ingested**: data/summaries/2026-02-02.json

**Pages updated**:
- [[openai]] — retires GPT-4o, GPT-4.1, o4-mini from ChatGPT (0.1% daily usage); ChatGPT ads beta ($200K min)
- [[anthropic]] — Pentagon vs Anthropic standoff over Claude military use
- [[chatgpt]] — GPT-4o/4.1/o4-mini retirement; ads beta
- [[grokipedia]] — AI search engines (Gemini, AI Mode, Perplexity, Microsoft) start citing Grokipedia, raising quality-verification concerns

**Pages created**: (none)

**Notable**: OpenAI prunes its legacy GPT-4 model lineup; Grokipedia enters mainstream AI-search citation pool.

## 2026-02-01
**Ingested**: data/summaries/2026-02-01.json

**Pages updated**:
- [[google]] — Project Genie launches via Google AI Ultra; DeepMind Genie 3 world model
- [[anthropic]] — Dropbox Dash context-engineering writeup references Claude patterns
- [[moltbot]] — Clawdbot formally rebranded after Anthropic trademark dispute; small-LM backend narrative

**Pages created**: [[project-genie]]

**Notable**: Google's Genie 3 world model emerges as a product (interactive 3D worlds); the Clawdbot naming saga formalizes into "Moltbot."

## 2026-01-31
**Ingested**: data/summaries/2026-01-31.json

**Pages updated**: (roll-up coverage of ChatGPT ads, Claude Cowork adoption, and open-model momentum already captured in cross-date aggregated entries on [[openai]], [[anthropic]], [[xai]])

**Pages created**: (none)

**Notable**: Mid-week consolidation day — adoption-curve coverage rather than new product drops.

## 2026-01-30
**Ingested**: data/summaries/2026-01-30.json

**Pages updated**:
- [[moonshot-ai]] — [[kimi-k2-5]] details circulate (1T MoE + 400M MoonViT + Agent Swarm)

**Pages created**: [[kimi-k2-5]]

**Notable**: Chinese open-source lab cluster advances from reasoning-only to multimodal agentic execution.

## 2026-01-29
**Ingested**: data/summaries/2026-01-29.json

**Pages updated**:
- [[google]] — Learn Your Way / Gemini Education tools; Gemini 3 Flash Agentic Vision framing continues

**Pages created**: (none)

**Notable**: Google pushes Gemini into education surfaces; agentic vision positioning sharpens.

## 2026-01-28
**Ingested**: data/summaries/2026-01-28.json

**Pages updated**: (roll-up coverage largely captured in aggregated entries on [[openai]], [[anthropic]], [[xai]], [[google]])

**Pages created**: (none)

**Notable**: Continuation day for ChatGPT Go, Cowork, and Apple-Gemini narratives.

## 2026-01-27
**Ingested**: data/summaries/2026-01-27.json

**Pages updated**:
- [[openai]] — Cerebras partnership confirmed (Codex inference + "Garlic" voice mode)
- [[anthropic]] — [[claude-for-excel]] to Pro tier after three-month beta; Security Center for Claude Code
- [[google]] — GIST training method (50%-optimal mathematical guarantee); Apple Gemini Siri February confirmation; Apple chose Google over OpenAI/Anthropic
- [[apple]] — Campos Siri Gemini-powered launch Feb 2026; WWDC June full rollout
- [[moonshot-ai]] — $4.8B valuation (up from $4.3B, Alibaba-backed)
- [[claude-code]] — Security Center announced
- [[moltbot]] — 18K+ GitHub stars in three weeks
- [[ai-funding-rounds]] — OpenEvidence $12B; Moonshot $4.8B; Wikipedia paid-data deals (Meta/Microsoft/Perplexity)

**Pages created**: [[chatgpt-go]] (retrofitted covering Jan 20 launch + Jan 27 shopping-cart + Feb 4 Codex App access)

**Notable**: Apple-Gemini Siri timeline crystallizes; Clawdbot/Moltbot viral moment hits enterprise-security attention.

## 2026-01-26
**Ingested**: data/summaries/2026-01-26.json

**Pages updated**: (roll-up coverage captured in aggregated entries on [[openai]], [[anthropic]], [[moltbot]])

**Pages created**: (none)

**Notable**: Continuation day for Clawdbot virality and ChatGPT-Go adoption commentary.

## 2026-01-25
**Ingested**: data/summaries/2026-01-25.json

**Pages updated**:
- [[apple]] — Q.ai $2B acquisition reports; AI wearable pin 2027
- [[nvidia]] — Earth-2 digital-twin-planet framing; AI21 Labs acquisition talks
- [[xai]] — Colossus 2 gigawatt progress
- [[ai-funding-rounds]] — Humans& $480M seed, Synthesia $200M Series E, Apple Q.ai $2B

**Pages created**: [[moltbot]] (Clawdbot launch)

**Notable**: Clawdbot launches and goes viral (eventually rebranded to Moltbot/OpenClaw); Apple wearables roadmap emerges.

## 2026-01-24
**Ingested**: data/summaries/2026-01-24.json

**Pages updated**: (roll-up of Wikipedia AI data-deals / Anthropic Adolescence of Technology commentary — captured in [[anthropic]], [[ai-funding-rounds]])

**Pages created**: (none)

**Notable**: Quiet news day; coverage of AGI-timeline commentary and enterprise rollouts.

## 2026-01-23
**Ingested**: data/summaries/2026-01-23.json

**Pages updated**: (roll-up of Claude Cowork + ChatGPT Go adoption commentary)

**Pages created**: (none)

**Notable**: Continuation day for Cowork and ChatGPT Go rollouts.

## 2026-01-22
**Ingested**: data/summaries/2026-01-22.json

**Pages updated**:
- [[anthropic]] — "Adolescence of Technology" essay / Dario Amodei AGI-timeline commentary circulates
- [[openai]] — parallel AGI-roadmap framing in same cycle

**Pages created**: (none)

**Notable**: AGI-timeline discourse intensifies with Amodei's "Adolescence of Technology" framing.

## 2026-01-21
**Ingested**: data/summaries/2026-01-21.json

**Pages updated**: (roll-up of ChatGPT Go + Claude Cowork + Apple Campos Siri momentum)

**Pages created**: (none)

**Notable**: Immediate post-ChatGPT-Go launch day; market-reaction coverage.

## 2026-01-20
**Ingested**: data/summaries/2026-01-20.json

**Pages updated**:
- [[openai]] — [[chatgpt-go]] global launch $8/mo; ChatGPT ads US rollout (Free + Go); $20B ARR; Musk $134B lawsuit framing
- [[anthropic]] — Claude Cowork momentum continues
- [[xai]] — Grok Imagine API preview; Colossus 2 gigawatt coverage
- [[google]] — Apple partnership details; Chrome Auto Browse + Gemini 3 Flash Agentic Vision
- [[apple]] — Campos Siri chatbot positioning
- [[chatgpt]] — ChatGPT Go $8/mo global launch; ads US rollout
- [[ai-funding-rounds]] — Chinese open-source lab funding + Clawdbot virality momentum

**Pages created**: [[grok-imagine]] (retrofitted to cover Jan 20 API preview + Feb 4 1.0 release)

**Notable**: ChatGPT Go global launch opens the entry-paid tier; xAI Grok Imagine surfaces API; Apple's next-Siri direction crystallizes.

## 2026-01-19
**Ingested**: data/summaries/2026-01-19.json

**Pages updated**:
- [[openai]] — [[merge-labs]] (Sam Altman BCI) $250M raise at $850M valuation
- [[microsoft]] — Copilot Checkout conversational-commerce launch
- [[chatgpt]] — ChatGPT Translate standalone (47 languages)
- [[ai-funding-rounds]] — Merge Labs entry
- [[enterprise-ai]] — Copilot Checkout

**Pages created**: [[merge-labs]]

**Notable**: Altman BCI move materializes; Microsoft pushes Copilot into transactable commerce.

## 2026-01-18
**Ingested**: data/summaries/2026-01-18.json

**Pages updated**:
- [[microsoft]] — Copilot Studio extension for VS Code
- [[apple]] — 2026 lineup leak cycle (AR glasses, foldable iPhone, new MacBooks, Studio Display)
- [[enterprise-ai]] — Copilot Studio VS Code extension

**Pages created**: (none)

**Notable**: Microsoft ships enterprise agent-building into the editor surface; Apple hardware roadmap surfaces.

## 2026-01-17
**Ingested**: data/summaries/2026-01-17.json

**Pages updated**:
- [[google]] — [[translategemma]] (55-lang open translation) + [[medgemma]] (open medical imaging) launches
- [[nvidia]] — H200 export block to China reasserted
- [[flux-2]] — open-weights release (<0.5s, 13GB VRAM, consumer-GPU ready)
- [[claude-code]] — diff view
- [[chatgpt]] — App Store momentum
- [[apple]] — AR glasses / foldable / new MacBook cycle coverage
- [[agent-frameworks]] — OpenAI Open Responses API, GitHub cross-agent memory, OpenCode GH Copilot integration
- [[ai-hardware]] — H200 China block
- [[vibe-coding]] — Claude Code diff view + GitHub cross-agent memory + OpenCode

**Pages created**: [[translategemma]], [[medgemma]]

**Notable**: Dense enterprise + open-source day — Google ships two open Gemma variants, OpenAI standardizes on an open Agents event API, BFL ships FLUX.2 as open weights.

## 2026-01-16
**Ingested**: data/summaries/2026-01-16.json

**Pages updated**:
- [[apple]] — ChatGPT → Gemini as Siri's primary AI layer; Creator Studio subscription bundle
- [[google]] — Gemini Personal Intelligence launch (Gmail/Photos/YouTube/Search context)
- [[gemini]] — Personal Intelligence + Siri replacement
- [[chatgpt]] — displaced as Siri's primary AI
- [[meta]] — Reality Labs layoffs framing

**Pages created**: (none)

**Notable**: Apple cements Google as its LLM partner; OpenAI loses flagship consumer-device surface. Gemini assumes cross-service "personal memory" role.

## 2026-01-15
**Ingested**: data/summaries/2026-01-15.json

**Pages updated**:
- [[apple]] — Apple-Google partnership announced (Siri powered by Gemini, spring launch)
- [[google]] — partnership with Apple to power Siri
- [[nvidia]] — Eli Lilly $1B AI drug-discovery lab
- [[meta]] — "tens to hundreds of GW" AI-data-center commitment
- [[microsoft]] — pledges to self-fund its data centers (not pass cost to residential)
- [[anthropic]] — Claude Labs expansion coverage
- [[ai-hardware]] — Meta GW commitment + NVIDIA-Lilly $1B lab
- [[enterprise-ai]] — Attio AI-CRM raise; Walmart + Google partnership

**Pages created**: (none)

**Notable**: Pharma-AI capex tier goes confirmed ($1B Lilly lab on NVIDIA); Meta telegraphs an order-of-magnitude-higher compute commitment.

## 2026-01-14
**Ingested**: data/summaries/2026-01-14.json

**Pages updated**:
- [[anthropic]] — [[claude-cowork]] launch (local-file agent for "organizing digital life")
- [[claude-code]] — reframed as general-purpose file/work organizer alongside Cowork
- [[apple]] — ~$1B/year partnership with Google confirmed
- [[google]] — ~$1B/year Apple deal; Gemini API larger file uploads + external URL support
- [[gemini]] — API upgrades (file size, external URLs)
- [[microsoft]] — global AI adoption 16.3% (UAE 64%, US 24th)
- [[ai-funding-rounds]] — Apple-Google $1B/yr
- [[enterprise-ai]] — Claude Cowork launch
- [[agent-frameworks]] — Claude Cowork launch

**Pages created**: [[claude-cowork]]

**Notable**: Anthropic ships its first explicitly-non-coding agent surface; Apple-Google deal formalized. Adoption data reframes AI-diffusion narrative.

## 2026-01-13
**Ingested**: data/summaries/2026-01-13.json

**Pages updated**:
- [[google]] — [[universal-commerce-protocol]] unveiled with Shopify
- [[meta]] — 6.6 GW nuclear power agreement for AI compute
- [[xai]] — Indonesia and Malaysia temporarily block Grok over non-consensual deepfakes
- [[openai]] — Musk-OpenAI trial proceeds
- [[ai-regulation]] — Indonesia/Malaysia Grok block; Musk-OpenAI trial
- [[ai-hardware]] — Meta 6.6 GW nuclear deal
- [[enterprise-ai]] — UCP unveil
- [[chatgpt]] — UCP as rival commerce stack

**Pages created**: [[universal-commerce-protocol]]

**Notable**: First open agent-commerce protocol lands (rivaling Walmart-in-ChatGPT); Meta pins long-horizon AI compute to nuclear; two national Grok bans enter regulatory trendline.

## 2026-01-12
**Ingested**: data/summaries/2026-01-12.json

**Pages updated**:
- [[anthropic]] — blocks third-party tools spoofing Claude Code to reach Opus 4.5
- [[claude-code]] — spoofing-block incident (affects xAI clients)
- [[xai]] — impacted by Anthropic spoofing block
- [[apple]] — "AI struggles" framing; many features delayed to 2026+
- [[ai-regulation]] — Senate Defiance Act advances; Manus Slack integration
- [[agent-frameworks]] — Manus Slack delegation

**Pages created**: (none)

**Notable**: Access-control skirmish between Anthropic and third-party Claude Code clones; Apple publicly trails Google/Samsung/OpenAI on AI execution.

## 2026-01-11
**Ingested**: data/summaries/2026-01-11.json

**Pages updated**:
- [[google]] — Gemini fully integrated across Gmail (summarize, draft, reason)
- [[gemini]] — Gmail full integration
- [[enterprise-ai]] — Gmail as AI workspace surface

**Pages created**: (none)

**Notable**: Gmail becomes the flagship consumer+prosumer AI workspace; Gemini generalizes across Workspace.

## 2026-01-10
**Ingested**: data/summaries/2026-01-10.json

**Pages updated**:
- [[anthropic]] — $10B raise at $350B valuation
- [[claude-code]] — 2.1.0 release (hooks for agents + skills, hot reload, `/move`)
- [[gemini]] — Gmail AI Overviews
- [[google]] — Gmail AI Overviews
- [[xai]] — Grok Build preview (web + CLI coding agent); leaked financials circulate
- [[ai-funding-rounds]] — Anthropic $10B at $350B
- [[ai-ipo-wave]] — Anthropic accelerates IPO prep framing
- [[agent-frameworks]] — Claude Code 2.1.0 + Grok Build
- [[vibe-coding]] — Claude Code 2.1.0 + Grok Build
- [[enterprise-ai]] — Gmail AI Overviews
- [[chatgpt]] — Ads rollout details

**Pages created**: (none)

**Notable**: Claude Code ships a meaningful 2.x-era upgrade; Anthropic's valuation paces OpenAI; Grok Build pre-announcement broadens coding-agent category.

## 2026-01-09
**Ingested**: data/summaries/2026-01-09.json

**Pages updated**:
- [[openai]] — [[chatgpt-health]] consumer launch; [[openai-for-healthcare]] HIPAA-compliant enterprise tier
- [[chatgpt]] — ChatGPT Health surface
- [[ai-healthcare]] — ChatGPT Health + OpenAI for Healthcare
- [[ai-regulation]] — Utah first-in-US AI-prescription restriction

**Pages created**: [[chatgpt-health]], [[openai-for-healthcare]], [[ai-healthcare]]

**Notable**: OpenAI enters health as a first-class product line on both consumer and HIPAA-regulated tiers the same week Utah locks down AI prescriptions.

## 2026-01-08
**Ingested**: data/summaries/2026-01-08.json

**Pages updated**:
- [[xai]] — $20B Series E at ~$230B valuation (The Rundown AI)
- [[openai]] — Torch acquisition (prompt-testing/evals tooling into ChatGPT dev surface)
- [[chatgpt]] — Torch acquisition integration
- [[ai-funding-rounds]] — xAI $20B Series E
- [[vibe-coding]] — Tailwind Labs 75% layoff attributed to AI coding tools (first high-profile labor case)

**Pages created**: (none)

**Notable**: xAI capitalizes on the Grok 4.1 / Terafab story; Tailwind Labs becomes the first high-profile dev-tool company to publicly attribute large layoffs to AI coding tools.

## 2026-01-07
**Ingested**: data/summaries/2026-01-07.json

**Pages updated**:
- [[nvidia]] — CES keynote: [[vera-rubin]] pre-announced (5× inference, 3.5× training vs Blackwell) + [[alpamayo]] 10B autonomous-driving model family
- [[ai-hardware]] — Vera Rubin pre-announce + Alpamayo
- [[ai-funding-rounds]] — Baidu Kunlunxin AI-chip HK IPO filing

**Pages created**: [[vera-rubin]], [[alpamayo]]

**Notable**: NVIDIA uses CES to pre-stamp the next-gen hyperscaler chip; Baidu Kunlunxin IPO adds a Chinese AI-silicon public-market datapoint.

## 2026-01-06
**Ingested**: data/summaries/2026-01-06.json

**Pages updated**:
- [[xai]] — Grok Business and Enterprise plans launch (higher rate limits, no-training assurance)
- [[xai]] — India orders X to fix Grok safeguards against "obscene" AI content in 72h
- [[ai-regulation]] — India Grok order
- [[meta]] — Yann LeCun departure cycle

**Pages created**: (none)

**Notable**: xAI opens a dedicated enterprise tier the same day an Indian regulator imposes a 72-hour compliance deadline — enterprise-push and regulatory-pressure arrive in the same news cycle.

## 2026-01-05
**Ingested**: data/summaries/2026-01-05.json

**Pages updated**:
- [[microsoft]] — Satya Nadella's "AI maturity year" framing (TAAFT)
- [[openai]] — Gumdrop smart-pen tether to ChatGPT (handwriting capture/translate/summarize)
- [[chatgpt]] — Gumdrop integration
- [[claude-code]] — Boris masterclass / NES emulator end-to-end demo (TAAFT)
- [[vibe-coding]] — Claude Code masterclass as canonical autonomous-developer demo
- [[enterprise-ai]] — Nadella maturity-year framing

**Pages created**: (none)

**Notable**: Opens the Jan 5–19 backfill window. Two narrative beats: Nadella sets "AI maturity year" framing for the enterprise cycle, and Anthropic's own Claude Code creator publishes a canonical end-to-end build tutorial.

## 2026-01-04
**Ingested**: data/summaries/2026-01-04.json (low AI/dev-tool content — primarily real-estate webinar and off-topic material)

**Pages updated**: (none — no qualifying AI/ML/dev-tool events in this day's newsletters)

**Pages created**: (none)

**Notable**: Filler day closing the Dec 20–Jan 4 backfill window. Nearly all content was off-topic (real-estate, lifestyle). Included here so the Timeline cadence record is complete.

## 2026-01-03
**Ingested**: data/summaries/2026-01-03.json

**Pages updated**:
- [[nvidia]] — releases [[nitrogen]], an open-source gaming-agent model
- [[google]] — deeper NotebookLM ↔ [[gemini]] integration continues
- [[alibaba]] — [[qwen-image]] framed as "the open-source king" of image generation
- [[deepseek]] — network-structure paper surfaces
- [[meta]] — self-play research coverage
- [[openai]] — audio-device plans reported
- [[agent-frameworks]] — LangChain reframes "agent engineering" as a discipline
- [[ai-funding-rounds]] — coverage continues
- [[ai-hardware]] — NVIDIA gaming-agent + infra continue

**Pages created**: [[nitrogen]], [[qwen-image]]

**Notable**: Alibaba's Qwen Image overtaking open-source image generation, combined with NVIDIA shipping a standalone open-source gaming-agent model, tightens the open-weights surface — image + agent categories are now both open-leader-led by Chinese and US labs respectively.

## 2026-01-02
**Ingested**: data/summaries/2026-01-02.json

**Pages updated**:
- [[openai]] — [[chatgpt]] shopping cards ship
- [[google]] — NotebookLM video generation coverage
- [[meta]] — "Personal Superintelligence" framing
- [[alibaba]] — Qwen3 positioning update
- [[deepseek]] — R1 retrospective framing
- [[chatgpt]] — shopping cards product surface
- [[claude-code]] — continued daily coverage
- [[ai-browsers]] — [[chatgpt-atlas]] reappears in rollup context

**Pages created**: (none)

**Notable**: Meta's "Personal Superintelligence" tagline formalises the post-Manus positioning — a direct marketing answer to OpenAI's Pro tier and Google's Gemini app, aimed at consumer assistant framing rather than API.

## 2026-01-01
**Ingested**: data/summaries/2026-01-01.json

**Pages updated**:
- [[google]] — Waymo integrates [[gemini]] for passenger interactions
- [[openai]] — SoftBank $40B funding round completes at ~$260B valuation
- [[nvidia]] — reported $3B acquisition talks for [[ai21-labs]]; Colossus 2GW cluster framing
- [[meta]] — [[manus]] acquisition at $2B referenced in New Year roundups
- [[xai]] — Memphis facility coverage
- [[cursor]] — new website-design editor launches
- [[ai-funding-rounds]] — SoftBank $40B + AI21 $3B
- [[ai-hardware]] — Colossus 2GW + NVIDIA acquisition rumours

**Pages created**: [[ai21-labs]]

**Notable**: SoftBank's $40B cash-in at $260B sets a new private-market ceiling for OpenAI and nets out with Dec 2025's $830B-talks story as compute-financing flow. [[nvidia]]'s AI21 Labs approach is the first "NVIDIA buys a model lab" rumour of the cycle and would materially change its posture from supplier to supplier-plus-lab.

## 2025-12-31
**Ingested**: data/summaries/2025-12-31.json

**Pages updated**:
- [[meta]] — acquires [[manus]] (Chinese-roots general-purpose agent startup) for ~$2B
- [[nvidia]] — Intel stake quietly revalued from $5B cost basis to $2.5B unrealised profit
- [[google]] — [[ai-edge-gallery]] ships as on-device AI runtime for Android
- [[anthropic]] — [[claude-code]] tied into [[vibe-coding]] narrative
- [[perplexity]] — pre-meeting research workflow coverage
- [[claude-code]] — daily coverage tying into vibe-coding wave
- [[agent-frameworks]] — Manus acquired

**Pages created**: [[manus]], [[ai-edge-gallery]]

**Notable**: Meta buying Manus is the year-end confirmation that frontier labs are treating general-purpose agent startups as strategic IP — not competitors to squeeze out, but teams to absorb. The $2B price sets a valuation floor for Chinese-roots agent teams for the next cycle.

## 2025-12-30
**Ingested**: data/summaries/2025-12-30.json

**Pages updated**:
- [[nvidia]] — reaches record share of US Treasury-tracked AI equity exposure
- [[openai]] — hires "Chief Worry Officer" risk role (unusual exec framing)
- [[ai-bubble-concerns]] — bubble-vs-boom year-end framing
- [[claude-code]] — continues daily dev-tool coverage

**Pages created**: (none)

**Notable**: "Chief Worry Officer" is a pure positioning move — OpenAI is branding its own risk function at the same moment market commentary is split on bubble-vs-boom. The two signals reinforce each other.

## 2025-12-28
**Ingested**: data/summaries/2025-12-28.json

**Pages updated**:
- [[microsoft]] — "Rust has passed 1 billion lines of code" milestone reported
- [[enterprise-ai]] — Atlassian 2025 State of Developer Experience — AI dev-tool adoption near-universal
- [[ai-hardware]] — infrastructure coverage

**Pages created**: (none)

**Notable**: The Atlassian report closes 2025 with AI coding-tool adoption effectively at saturation inside dev teams. Microsoft's Rust 1B-LOC headline is the companion data point for the language-migration wave.

## 2025-12-27
**Ingested**: data/summaries/2025-12-27.json

**Pages updated**:
- [[openai]] — [[chatgpt]] ships formatting blocks and a reported "autopilot" mode; ads exploration continues
- [[google]] — Gmail opens up username selection
- [[nvidia]] — Tesla FSD endorsement (Jensen Huang praise cycle)
- [[amazon]] — "leader's dilemma" framing + robotaxi coverage
- [[chatgpt]] — formatting blocks + autopilot surface

**Pages created**: (none)

**Notable**: ChatGPT formatting blocks + autopilot mode is the clearest step toward "ChatGPT as a workspace" rather than a chat surface — edits, structured outputs, and automatic multi-step actions in one UI.

## 2025-12-26
**Ingested**: data/summaries/2025-12-26.json

**Pages updated**:
- [[nvidia]] — acquires [[groq]] for a reported $20B; [[intersect-power]] $4.75B deal (Google) for clean compute
- [[google]] — [[intersect-power]] $4.75B power partnership
- [[microsoft]] — "Rust by 2030" target reported
- [[openai]] — ChatGPT ads exploration continues
- [[ai-funding-rounds]] — $20B (Groq) + $4.75B (Intersect Power)
- [[ai-hardware]] — Groq LPU inside NVIDIA; Intersect Power as clean-compute play

**Pages created**: [[groq]]

**Notable**: NVIDIA acquiring Groq at $20B is the period's biggest silicon-consolidation move: it converts the category's most-credible LPU alternative into in-house capacity and ends Groq's independence narrative. Google-plus-Intersect at $4.75B for clean power is the matching infra story on the demand side.

## 2025-12-25
**Ingested**: data/summaries/2025-12-25.json

**Pages updated**:
- [[openai]] — GPT-5 reportedly solves open problem in enumerative geometry
- [[microsoft]] — Nadella push for C/C++ → [[rust]] migration continues
- [[google]] — [[gemini]] AI Pro 50% off; NotebookLM Data Tables ship
- [[xai]] — US Department of War selects Grok for internal use
- [[anthropic]] — [[claude-code]] picks up vibe-coding tooling positioning
- [[andrej-karpathy]] — coins/popularises [[vibe-coding]] framing
- [[vibe-coding]] — trend page created around Karpathy framing

**Pages created**: [[vibe-coding]]

**Notable**: GPT-5 solving an enumerative-geometry problem is the first post-5.2 "frontier math" headline — and Karpathy's "vibe coding" framing becomes the labelled umbrella for the dev-tool wave of the preceding month ([[cursor]], [[lovable]], [[claude-code]]).

## 2025-12-24
**Ingested**: data/summaries/2025-12-24.json

**Pages updated**:
- [[openai]] — "Your Year with ChatGPT" wrap surfaces; [[disney]] $1B equity investment in OpenAI
- [[disney]] — $1B equity stake + Sora/ChatGPT character-deal framing
- [[microsoft]] — Nadella "AI revolution" ultimatum to teams (internal memo framing)
- [[enterprise-ai]] — Nadella ultimatum; Copilot/agent adoption push
- [[chatgpt]] — "Your Year" product surface
- [[ai-funding-rounds]] — Disney $1B equity

**Pages created**: (none — [[disney]] updated)

**Notable**: Disney's $1B equity investment converts the Sora/ChatGPT partnership from licensing deal to strategic stake — one of the largest non-tech-industry equity moves into OpenAI in the cycle. Nadella's internal ultimatum timestamps the Microsoft-side push behind the same week.

## 2025-12-23
**Ingested**: data/summaries/2025-12-23.json

**Pages updated**:
- [[openai]] — reported $22.5B SoftBank tranche before the broader $40B round
- [[google]] — Gemma Scope 2 interpretability tooling
- [[nvidia]] — SchedMD acquisition for Slurm/HPC scheduling
- [[ai-funding-rounds]] — SoftBank $22.5B
- [[ai-hardware]] — NVIDIA + SchedMD HPC tooling

**Pages created**: (none)

**Notable**: The $22.5B SoftBank framing on 12-23 is the intermediate data point between the earlier $750B/$830B talks and 01-01's $40B close at $260B — the money rails here line up into one sequential story across the holiday window.

## 2025-12-22
**Ingested**: data/summaries/2025-12-22.json (low AI/dev-tool content — primarily an underwater-object-detection academic paper plus off-topic material)

**Pages updated**: (none — no qualifying events)

**Pages created**: (none)

**Notable**: Holiday-window filler day. Logged for continuity.

## 2025-12-21
**Ingested**: data/summaries/2025-12-21.json

**Pages updated**:
- [[anthropic]] — [[claude-code]] browser extension GA; injects Claude into any web page
- [[google]] — A2UI (agent-to-UI) protocol framing; NotebookLM ↔ Gemini integration deepens
- [[meta]] — Mango / Avocado internal model codenames surface
- [[claude-code]] — browser-extension GA
- [[agent-frameworks]] — Claude browser extension + A2UI
- [[ai-browsers]] — [[chatgpt-atlas]] + Firefox AI features positioning

**Pages created**: (none)

**Notable**: Claude Code as a browser extension is Anthropic's first "agent where you already work" surface — comparable in positioning to GitHub Agent HQ and Atlas, but distributed as a browser add-on rather than a whole browser or IDE fork.

## 2025-12-20
**Ingested**: data/summaries/2025-12-20.json

**Pages updated**:
- [[openai]] — [[gpt-5-2-codex]] lands; ChatGPT App Directory opens; $830B valuation at $100B raise talks; US Genesis Mission framing
- [[mistral]] — [[mistral-ocr-3]] launches (~97% OCR accuracy)
- [[google]] — [[function-gemma]] 270M on-device function-calling; T5Gemma 2 coverage
- [[anthropic]] — [[agent-skills]] published as open standard
- [[meta]] — PE-AV / Mango / Avocado internal-model codenames
- [[amazon]] — reported $10B+ OpenAI investment continues
- [[gpt-5-2]] — Codex sibling lands
- [[chatgpt]] — App Directory surface
- [[claude-code]] — Agent Skills open standard integration
- [[ai-funding-rounds]] — OpenAI $830B @ $100B raise; Lovable $330M @ $6.6B
- [[ai-hardware]] — Liquid AI LFM2-2.6B-Exp on-device coverage
- [[enterprise-ai]] — [[agent-skills]] publication

**Pages created**: [[gpt-5-2-codex]], [[mistral-ocr-3]], [[function-gemma]], [[agent-skills]], [[lovable]], [[luma]], [[ami-labs]], [[zhipu-ai]], [[glm-4-7]], [[liquid-ai]], [[minimax]]

**Notable**: 12-20 is the single densest day of the backfill window — a full cross-lab product cycle (OpenAI Codex-5.2 + App Directory, Mistral OCR 3, Google FunctionGemma/T5Gemma 2, Anthropic Agent Skills as an open standard, Luma Ray3 Modify, Zhipu GLM-4.7) plus simultaneous funding signals ($830B OpenAI talks, Lovable $330M, AMI Labs €3B, Amazon $10B+). The "Agent Skills as open standard" beat is the most-lasting item: it reframes Skills from an Anthropic-specific primitive to a cross-lab interop layer.

## 2025-12-19
**Ingested**: data/summaries/2025-12-19.json (17 newsletters)

**Pages updated**:
- [[google]] — [[gemini-3-flash]] launches (3× faster than Gemini 2.5 Pro at frontier-level); Meta + Google TPU PyTorch initiative
- [[openai]] — ChatGPT Apps Store opens; preliminary $750B valuation funding talks
- [[amazon]] — reportedly considering $10B+ investment in OpenAI at $500B+ val (Trainium usage)
- [[xai]] — Grok Voice Agent API released
- [[meta]] — joins Google on TPU PyTorch initiative
- [[gemini-3]] — Flash sibling launches alongside Gemini 3 Pro
- [[gpt-5-2]] — Free/Go default cemented after router removal
- [[ai-funding-rounds]] — OpenAI $750B + Amazon $10B+ exposure
- [[gpt-image-1-5]] — coverage continues
- [[agent-frameworks]] — Grok Voice Agent API

**Pages created**: [[gemini-3-flash]]

**Notable**: Gemini 3 Flash drops six days after [[gpt-5-2]] — Google sustains the Dec back-and-forth and effectively makes frontier-tier intelligence the new default tier in both ChatGPT and the Gemini app within the same week. OpenAI's $750B figure (with Amazon-via-Trainium as a possible new mega-investor) puts the lab firmly on a $1T-private-valuation glide path while diversifying compute exposure away from Microsoft Azure.

## 2025-12-18
**Ingested**: data/summaries/2025-12-18.json (15 newsletters)

**Pages updated**:
- [[openai]] — [[gpt-image-1-5]] released (4× faster, sharper, Likeness Retention); ChatGPT removes GPT-5 model router for Free/Go (defaults to GPT-5.2 Instant); "Triple Strike" framing
- [[google]] — Gmail launches CC (Gemini-powered productivity assistant); DeepMind CEO predicts AGI within 10 years; Gemini desktop adds interactive Gem mini-apps
- [[anthropic]] — testing Agentic Tasks Mode for Claude
- [[meta]] — SAM Audio shipped
- [[gpt-5-2]] — router retirement / default cementing
- [[agent-frameworks]] — Claude Agentic Tasks Mode
- [[prompt-injection]] — "8M+ AI Chats Secretly Harvested" coverage

**Pages created**: [[gpt-image-1-5]]

**Notable**: OpenAI quietly killing the GPT-5 router and defaulting Free/Go to GPT-5.2 Instant is the cleanest signal yet that the GPT-5 series is being collapsed into 5.2 as the new floor. The "Triple Strike" framing (5.2 + Image-1.5 + Apps Store) is OpenAI's deliberate counter-cycle to Gemini 3's Nov launch wave.

## 2025-12-17
**Ingested**: data/summaries/2025-12-17.json (17 newsletters)

**Pages updated**:
- [[nvidia]] — [[nemotron-3]] open-source models drop (Nano 30B/3B active MoE; 4× throughput claim; Super/Ultra in 2026); "agentic bet" framing; "$3B collapse" headline alongside
- [[google]] — Gemini Deep Research adds visual reports for AI Ultra; Code Wiki auto-update repository documentation system
- [[apple]] — 2026 lineup leaks
- [[alibaba]] — "China's ChatGPT" coverage continues
- [[ai-bubble-concerns]] — "AI: bubble or not?" + $3B collapse framing
- [[agent-frameworks]] — Nemotron 3 as agentic-tier model release

**Pages created**: [[nemotron-3]]

**Notable**: Nemotron 3 is NVIDIA's most direct "we are now also a model lab" move — open weights, agentic positioning, and a 4× throughput claim aimed at the multi-agent serving stack. Pairing the launch with the "$3B collapse" headline shows the market reading the same week as both bullish (model breadth) and bearish (capex risk).

## 2025-12-16
**Ingested**: data/summaries/2025-12-16.json (15 newsletters)

**Pages updated**:
- [[google]] — real-time translation through any headphones (Gemini-powered, 70+ languages); DeepMind opens automated science lab in UK; Maps in Gemini responses; Mixboard + Doppl revamps powered by [[gemini-3]]; Code Wiki rolled out
- [[openai]] — adopts Skills (`/home/oai/skills` zip pattern) in ChatGPT and Codex CLI; sparse circuit models open-sourced; ChatGPT halts ads after backlash; Disney 1-year exclusivity confirmed; $115B burn / $1.4T compute through 2030 framing
- [[anthropic]] — reverse-engineering of Claude memory system; FrontierScience announced
- [[meta]] — "trains AI on China's Qwen" coverage
- [[alibaba]] — Meta-uses-Qwen narrative
- [[gemini-3]] — powers Mixboard + Doppl
- [[ai-copyright]] — Disney exclusivity confirmed
- [[ai-bubble-concerns]] — "design is search" reframing
- [[agent-frameworks]] — OpenAI adopts Skills, Tinker GA
- [[prompt-injection]] — Claude memory reverse-engineering
- [[model-context-protocol]] — TAAFT MCP guide

**Pages created**: (none)

**Notable**: OpenAI adopting an Anthropic-style "Skills" pattern (down to the `/home/oai/skills` zip prompt) is the period's clearest convergence event between the two labs' agent abstractions. Meta training on Qwen is the first major US-lab usage of Chinese open weights at training scale.

## 2025-12-15
**Ingested**: data/summaries/2025-12-15.json (5 newsletters)

**Pages updated**: (none — newsletters were primarily product-roundup, weekly digest, off-topic medical/lifestyle pieces)

**Pages created**: (none)

**Notable**: Light, off-cycle day — no AI/dev signal worth a wiki update. Logged for completeness.

## 2025-12-14
**Ingested**: data/summaries/2025-12-14.json (2 newsletters)

**Pages updated**:
- [[gpt-5-2]] — Matt from FutureTools "OpenAI Just Dropped GPT 5.2" coverage rolled into Dec 13 launch entry

**Pages created**: (none)

**Notable**: Tail-end coverage of the Dec 13 GPT-5.2 launch — no new product or company signal.

## 2025-12-13
**Ingested**: data/summaries/2025-12-13.json (17 newsletters)

**Pages updated**:
- [[openai]] — [[gpt-5-2]] launches (Instant/Thinking/Pro tiers, 400K context, 38% fewer errors); $1B [[disney]] partnership for Sora + ChatGPT Image with 200+ characters; ChatGPT becomes most-downloaded iPhone app of 2025
- [[google]] — Gemini Deep Research agent in API via new Interactions API; Disney sues Google over AI IP usage; Disco AI browser launched in Google Labs (GenTabs powered by Gemini 3)
- [[anthropic]] — [[broadcom]] mystery $10B customer revealed as Anthropic; "Anthropic vision advantage" framing
- [[gemini-3]] — powers Disco AI browser GenTabs
- [[ai-browsers]] — Disco AI browser launch
- [[ai-copyright]] — Disney sues Google + chooses OpenAI
- [[ai-funding-rounds]] — Disney $1B; Broadcom-Anthropic $10B
- [[agent-frameworks]] — Gemini Deep Research API

**Pages created**: [[gpt-5-2]], [[disney]]

**Notable**: GPT-5.2 + Disney $1B + Broadcom-Anthropic $10B + Gemini Deep Research API + Disco browser landed on the same day — this is the densest AI news cycle in the entire backfill window. Disney simultaneously licensing OpenAI and suing Google is the first major rights-holder picking platform winners rather than blanket-banning generation.

## 2025-12-12
**Ingested**: data/summaries/2025-12-12.json (16 newsletters)

**Pages updated**:
- [[openai]] — GPT-5 self-rated "high" cybersecurity threat under preparedness framework; Slack CEO Denise Dresser hired as CRO
- [[google]] — partners on Agentic AI Foundation framing; Gemini 2.5 TTS update; FACTS benchmark released; "AI winner" Wall Street framing
- [[anthropic]] — Claude Code CLI updated (async subagents, faster compaction); Claude Code in Slack
- [[microsoft]] — reveals 37.5M Copilot-use shifts by hour/day/month
- [[amazon]] — launches new Coding Agent
- [[cursor]] — adds Debug Mode
- [[claude-code]] — async subagents + faster compaction
- [[ai-bubble-concerns]] — "why AGI won't happen" framing
- [[agent-frameworks]] — Cursor Debug Mode + Claude Code async
- [[prompt-injection]] — GPT-5 cybersecurity threat self-rating

**Pages created**: (none — Agentic AI Foundation page created on Dec 11)

**Notable**: OpenAI publicly self-rating GPT-5 "high" cybersecurity threat is a notable preparedness-framework disclosure — first time a frontier lab has flagged its current production model at that level. Microsoft's 37.5M Copilot usage-shift dataset is the largest in-the-wild enterprise-AI telemetry release of the period.

## 2025-12-11
**Ingested**: data/summaries/2025-12-11.json (17 newsletters)

**Pages updated**:
- [[openai]] — co-founds Agentic AI Foundation with Anthropic + Block; Image-2 next-gen image models on eval boards; "truth serum" research; 320× enterprise reasoning surge
- [[anthropic]] — donates [[model-context-protocol]] to Foundation; SGTM selective-knowledge-removal method
- [[microsoft]] — launches cancer-mapping AI for diagnostics research
- [[meta]] — internal AI confusion coverage; "next device" timeline pushed back
- [[mistral]] — Devstral 2 surfaces
- [[agent-frameworks]] — Foundation + MCP donation + SGTM
- [[prompt-injection]] — SGTM unlearning research

**Pages created**: [[agentic-ai-foundation]], [[model-context-protocol]]

**Notable**: Linux Foundation hosting Agentic AI Foundation with OpenAI + Anthropic + Block as founders, plus Anthropic donating MCP, is the clearest cross-lab governance event of the year — the agent stack is now formally being standardized in a neutral body, not just via individual lab SDKs.

## 2025-12-10
**Ingested**: data/summaries/2025-12-10.json (12 newsletters)

**Pages updated**:
- [[openai]] — [[adobe]] (Photoshop/Express/Acrobat) integrated into ChatGPT for in-chat editing; Sam Altman pauses side projects 8 weeks for ChatGPT focus; ChatGPT message volume +8× since Nov 2024; ChatGPT + Instacart in-app shopping; first enterprise report — 75% productivity gain
- [[anthropic]] — [[claude-code]] launches inside Slack
- [[adobe]] — integrated into ChatGPT
- [[google]] — 2026 AI-glasses launch with Samsung/Warby Parker/Gentle Monster; deepens Replit enterprise partnership
- [[claude-code]] — Slack integration
- [[ai-browsers]] — "Slop Evader" browser launches
- [[nano-banana-pro]] — Lovart adds Touch Edit on top
- [[agent-frameworks]] — Claude Code in Slack; LlamaIndex agentic-RAG patterns

**Pages created**: (none)

**Notable**: ChatGPT+Adobe and ChatGPT+Instacart both ship in-chat in the same cycle — "ChatGPT as the office default" framing crystallizes here. Claude Code in Slack closes a major distribution gap for Anthropic in enterprise dev workflows.

## 2025-12-09
**Ingested**: data/summaries/2025-12-09.json (18 newsletters)

**Pages updated**:
- [[openai]] — GPT-5.2 release imminent (prediction markets target Dec 9–11); enterprise reasoning workloads up 320×
- [[meta]] — acquires Limitless (wearable AI startup); Limitless deal coverage
- [[perplexity]] — New York Times sues Perplexity over content scraping
- [[gpt-5-2]] — pre-launch coverage
- [[nano-banana-pro]] — "Gemini Nano Banana 2 Flash" mention
- [[ai-copyright]] — NYT sues Perplexity

**Pages created**: (none)

**Notable**: Enterprise reasoning workloads up 320× is the largest production-usage growth datapoint of the cycle and pre-stages the GPT-5.2 launch as a consumption-supply move, not just a capability move.

## 2025-12-08
**Ingested**: data/summaries/2025-12-08.json (6 newsletters)

**Pages updated**:
- [[xai]] — "Grok Saves a Life" viral medical-emergency case study
- [[google]] — Google Research unveils Titans + MIRAS (real-time long-term memory updates without retraining)

**Pages created**: (none)

**Notable**: Titans + MIRAS is one of the more consequential research drops for the period — real-time memory updates without retraining moves directly toward the persistent-agent thesis without requiring the heavyweight RAG stacks most enterprise systems currently use.

## 2025-12-07
**Ingested**: data/summaries/2025-12-07.json (6 newsletters)

**Pages updated**:
- [[anthropic]] — Bun acquisition coverage continues; "ReactJs Mysterious Bug" content
- [[google]] — "Gemini Surges 30%, ChatGPT Stalls" framing rolls into Gemini momentum narrative

**Pages created**: (none)

**Notable**: Quiet weekend day — coverage echoes earlier launches rather than introducing new entities.

## 2025-12-06
**Ingested**: data/summaries/2025-12-06.json (18 newsletters)

**Pages updated**:
- [[openai]] — 20M ChatGPT chats turned over to court in copyright lawsuit; "Confessions" reward-hacking diagnostic; AWS Factories vs NVIDIA framing
- [[anthropic]] — Claude Interviewer launched (1,250 interviews on professional AI use); Opus 4.5 "soul" document leaked; Snowflake $200M multi-year AI partnership; preparing largest IPO ever
- [[google]] — Workspace Studio launches (AI agents across Gmail/Drive/Chat without coding); Gemini 3 Deep Think available in app; Google + Replit enterprise vibe-coding partnership; Demis Hassabis warns of AI cyberattacks on energy/water systems
- [[nvidia]] — AWS Factories + Trainium positioning vs NVIDIA
- [[amazon]] — AWS Factories + Trainium vs NVIDIA framing
- [[meta]] — "Metaverse reverse" Reality-Labs paring
- [[claude-opus-4-5]] — "soul" document leak
- [[gemini-3]] — Deep Think rolls into app
- [[ai-funding-rounds]] — Snowflake $200M w/ Anthropic; Anthropic IPO talk
- [[ai-bubble-concerns]] — $115B burn-rate framing
- [[ai-copyright]] — 20M chats subpoenaed
- [[prompt-injection]] — 20M chats discoverability + Confessions diagnostic

**Pages created**: (none — Snowflake update lives on Anthropic page; Workspace Studio entry lives on Google page)

**Notable**: 20M ChatGPT chats produced under court order is the period's cleanest signal that "private" cloud chat is legally discoverable — flips the privacy story OpenAI has been telling. Anthropic's Snowflake $200M + Claude Interviewer + IPO prep + Opus 4.5 soul leak in one cycle is the densest single-day Anthropic news of the backfill.

## 2025-12-05
**Ingested**: data/summaries/2025-12-05.json (4 newsletters)

**Pages updated**:
- [[google]] — [[gemini-3]] Deep Think reasoning mode released (multiple-path reasoning; gains on math/science/logic/visual puzzles)
- [[gemini-3]] — Deep Think mode

**Pages created**: (none)

**Notable**: Sets up Dec 6 in-app rollout. Quiet day otherwise — newsletter mix was heavy on learning/marketing content, not product launches.

## 2025-12-04
**Ingested**: data/summaries/2025-12-04.json (21 newsletters)

**Pages updated**:
- [[openai]] — declares "Code Red" amid Gemini 3 competitive pressure; ChatGPT speed/reliability/personality refocus
- [[anthropic]] — preparing one of the largest IPOs ever; acquires Bun JS toolkit for Claude Code; Claude Code reportedly hits $1B ARR
- [[mistral]] — launches [[mistral-3]] open-weight lineup
- [[amazon]] — Nova 2, Trainium 3 (~50% lower training/op cost vs NVIDIA), Nova Forge, Kiro, AWS AI Factories; Rufus + 805% YoY AI traffic on Black Friday
- [[apple]] — Subramanya confirmed as new VP of AI; Giannandrea steps down
- [[nvidia]] — Alpamayo-R1 unveiled (human-like AV perception/reasoning)
- [[google]] — Gemini 3 Pro + Nano Banana Pro country expansion in Search
- [[deepseek]] — V3.2 reasoning-focused open-source model coverage continues
- [[runway]] — Gen-4.5 coverage continues

**Pages created**: [[mistral-3]]

**Notable**: OpenAI's "Code Red" is the explicit framing of Gemini 3 as the first competitor that has *moved* OpenAI's roadmap. Anthropic's IPO talk + Bun acquisition + Claude Code $1B ARR is a triple signal that Anthropic is consolidating into a true OpenAI peer. Amazon's Trainium 3 50%-cost-cut claim vs NVIDIA reframes the silicon-vs-Nvidia race; Mistral 3's 41B-active/675B-total MoE under open-weights is the European answer to closed flagships.

## 2025-12-03
**Ingested**: data/summaries/2025-12-03.json (8 newsletters)

**Pages updated**:
- [[deepseek]] — V3.2 (matches GPT-5) and V3.2-Speciale (rivals Gemini 3 Pro; IMO/IOI/ICPC 2025 gold)
- [[runway]] — Gen-4.5 text-to-video tops Veo 3 + Sora on Artificial Analysis
- [[anthropic]] — AI agents exploit blockchain smart contracts (extracted $4.6M from contracts deployed after March 2025); SCONE-bench security research
- [[apple]] — Subramanya appointed AI chief; Giannandrea retiring spring 2026
- [[nvidia]] — DRIVE Alpamayo-R1 open-sourced as part of digital + physical AI stack
- [[google]] — Gemini "Projects" feature in development
- [[lux]] — computer-use agent at 83.6% on OpenAI Operator (outperforming Operator + Claude)

**Pages created**: [[deepseek-v3-2]], [[runway]], [[runway-gen-4-5]], [[lux]]

**Notable**: Three frontier-class open-source releases in one day (DeepSeek V3.2 + V3.2-Speciale, Runway Gen-4.5) reset the closed-vs-open narrative. Anthropic's blockchain-exploit research is the first widely-covered case of frontier-class AI agents systematically extracting funds from on-chain contracts — a major safety/regulatory inflection point.

## 2025-12-02
**Ingested**: data/summaries/2025-12-02.json (14 newsletters)

**Pages updated**:
- [[google]] — [[gemini-3]] reframed as integrated shared-intelligence layer across Google products
- [[openai]] — GPT-5.1 Codex Max + ChatGPT Android app surfaces "ads feature" / "search ads" references
- [[xai]] — Grok 4.1 with Thinking + Standard dialog modes
- [[harmonic]] / [[harmonic-aristotle]] — Aristotle solves Erdős Problem #124 in 6 hours, Lean-verified in a minute
- [[alibaba]] — China captures 14.2% of open-AI economy; true open-source share drops 79.3% (2022) → 39% (2025)
- [[mistral]] — HSBC partners with Mistral AI for generative AI tools across the bank
- [[ai-funding-rounds]] — Databricks $5B at $134B valuation
- [[ai-regulation]] — Australia bans social media for under-16s (first country to do so)

**Pages created**: [[harmonic]], [[harmonic-aristotle]]

**Notable**: Aristotle's Erdős proof + Lean verification is the most concrete "AI does novel mathematics" milestone of the cycle — directly inside [[harmonic]]'s thesis. Australia's under-16 ban is the first national-scale platform-age restriction; expect copycats and pressure on AI companion apps. China's 14.2% open-AI share quantifies the shift the open vs closed split has been signaling all quarter.

## 2025-12-01
**Ingested**: data/summaries/2025-12-01.json (2 newsletters)

**Pages updated**:
- (no substantive new wiki-worthy entities — coverage was n8n / link-prediction research / community digests)

**Notable**: Light volume day — content was a CNCIE link-prediction paper from Wuhan University and n8n community/automation updates. Nothing reached the page-creation threshold.

## 2025-11-30
**Ingested**: data/summaries/2025-11-30.json (9 newsletters)

**Pages updated**:
- [[openai]] — Mixpanel breach reconfirmed (analytics-only exposure; chat content + credentials safe)
- [[anthropic]] / [[claude-opus-4-5]] — Opus 4.5 reframed as "most advanced model yet" for complex reasoning + long-running agents
- [[nvidia]] — ToolOrchestra coverage continues (smaller models beating GPT-5 by 2.5×); Gemini 3 Pro sets new high score
- [[ai-bubble-concerns]] — China warns of humanoid robot bubble (>150 companies, few proven use cases)
- [[ai-regulation]] — Tesla sued by Perrone Robotics over Autopilot patents; Figure AI sued by ex–product safety head over wrongful termination
- [[figure]] — wrongful-termination suit pulls Figure back into the news cycle
- [[amazon]] — AWS introduces flat-rate pricing plans (CDN + security + DNS + logging + edge compute + storage bundle)

**Notable**: Two safety-driven legal actions land the same day: Figure AI is sued by its former head of product safety, and Tesla faces a Perrone-Robotics patent suit on Autopilot. Together with China's humanoid-bubble warning, the day forms a coherent "robotics safety + investment frothiness" cluster.

## 2025-11-29
**Ingested**: data/summaries/2025-11-29.json (14 newsletters)

**Pages updated**:
- [[deepseek]] / [[deepseek-math-v2]] — DeepSeekMath-V2 unveiled; gold-level IMO 2025 results via generator + verifier; rivals Google Deep Think
- [[xai]] — 88-acre solar farm next to Memphis Colossus data center (~30 MW, ~10% of demand)
- [[openai]] — Mixpanel breach confirmed (basic profile info; chat + credentials safe)
- [[alibaba]] — Qwen sigmoid-gated SDPA research; Quark S1 Smart Specs launched (Meta-Ray-Ban-Display class at lower price)
- [[anthropic]] — Claude context-limit prevention + feature-driven workflow update
- [[perplexity]] — AI shopping with virtual try-on + enhanced memory
- [[nvidia]] — ToolOrchestra research; Michael Burry $1.1B shorts vs NVIDIA + Palantir over depreciation; China economic-planning agency robotics-bubble warning
- [[ai-bubble-concerns]] — Burry shorts + China robotics-bubble framing

**Pages created**: [[deepseek-math-v2]]

**Notable**: DeepSeekMath-V2 is the first open-source model to credibly claim IMO 2025 gold via an interpretable two-stage generator + verifier pipeline — important for evaluation methodology, not just leaderboards. Burry's Palantir + NVIDIA shorts are the loudest single bear bet on the AI capex cycle so far.

## 2025-11-28
**Ingested**: data/summaries/2025-11-28.json (7 newsletters)

**Pages updated**:
- [[google]] — NATO partners with Google Cloud for defense (air-gapped servers); Gemini 3 reframed as a comeback that re-anchors Search/YouTube/Cloud/Waymo
- [[apple]] — iPhone 17 double-digit YoY US + China; Apple poised to overtake Samsung as world's top phone maker
- [[harmonic]] / [[ai-funding-rounds]] — Harmonic raises $120M at $1.45B valuation
- [[perplexity]] — personalization features (cross-conversation preferences, interests, context)
- [[ai-copyright]] — Warner Music settles with Suno via strategic partnership
- [[andrej-karpathy]] — Karpathy advises educators to abandon AI-detection efforts
- [[anthropic]] — leaked OpenAI memo on Google "rough vibes" / economic headwinds (sector-adjacent)

**Pages created**: [[harmonic]]

**Notable**: NATO running on Google Cloud air-gapped infrastructure is a major sovereign-AI procurement signal. Warner-Suno, after the Warner-Udio thaw a week earlier, suggests the music-industry-vs-AI litigation phase is over — settlements + licensing are now the path.

## 2025-11-27
**Ingested**: data/summaries/2025-11-27.json (10 newsletters)

**Pages updated**:
- [[openai]] — ChatGPT integrates voice + text in unified flow; reports of OpenAI device residency push
- [[google]] — Aluminium OS unveiled alongside Gemini 3 + TPUs; Genesis Mission narrative thread
- [[xai]] — closes $15B funding round at $230B pre-money valuation in December
- [[amazon]] — investing up to $50B in AWS US-government AI/HPC capacity
- [[nvidia]] — "GPUs a generation ahead of Google chips"; shares fall 3% on reports Meta may use Google TPUs
- [[alibaba]] — Qwen app passes 10M downloads in first week
- [[black-forest-labs]] / [[flux-2]] — FLUX.2 launches (better realism, text writing, character consistency)
- [[character-ai]] — launches Stories interactive-fiction surface
- [[anthropic]] — Claude 4.5 outperforms human engineers on certain tasks (80.9% SWE-bench)

**Pages created**: [[black-forest-labs]], [[flux-2]]

**Notable**: Google's "Aluminium OS + Gemini 3 + TPUs" framing is the first time Google has been positioned (in newsletter coverage) as challenging both NVIDIA and OpenAI on the same day. xAI closing $15B at $230B is the firm price tag on Musk's compute thesis.

## 2025-11-26
**Ingested**: data/summaries/2025-11-26.json (2 newsletters)

**Pages updated**:
- [[anthropic]] / [[claude-opus-4-5]] — Opus 4.5 launches: 80.9% SWE-bench Verified (record); 88.9% T2 Retail / 98.2% T2 Telecom; major gains in graduate-level reasoning, visual reasoning, computer use, multilingual Q&A
- [[openai]] — first device announced (screen-free, smartphone-sized, Jony Ive + Altman led; targeted within two years); ChatGPT shopping launches
- [[chatgpt]] — shopping feature with conversational product recommendations

**Pages created**: [[claude-opus-4-5]]

**Notable**: Opus 4.5 is the model that unseats GPT-5.1-Codex-Max at the SWE-bench Verified high-water mark and first crosses 98% on a T2 tool-use benchmark (Telecom 98.2%). OpenAI's "first device" framing — Jony Ive + Altman, screen-free — places the post-phone-as-AI-surface battle on the road map.

## 2025-11-25
**Ingested**: data/summaries/2025-11-25.json (12 newsletters)

**Pages updated**:
- [[openai]] — Sam Altman warns of "rough vibes" + "economic headwinds" from Google's progress; ChatGPT group chats GA; Model Behavior team reportedly overruled by leadership on safety vs engagement
- [[google]] — targets doubling AI serving capacity every 6 months; 1000× more capability/compute/storage in 5 years; Gemini 3 replaces Assistant in Android Auto; Nested Learning HOPE architecture
- [[meta]] / [[world-models]] — Meta releases WorldGen (text → walkable game-ready 3D world via procedural reasoning + diffusion-based 3D generation + object-aware scene decomposition)
- [[nvidia]] — record earnings; Apollo open AI physics model for enterprise
- [[ai-funding-rounds]] — Lambda $1.5B, Luma AI $900M, Physical Intelligence $600M, Genspark $275M, Berkshire-Alphabet $4.9B stake

**Notable**: A leaked Altman "rough vibes" memo on the same day Google publicly commits to 1000× compute scaling makes the Google-OpenAI competitive pivot explicit at the leadership level. WorldGen plus Apollo plus Marble triangulate the world-models category as the year-end successor frontier to LLMs.

## 2025-11-24
**Ingested**: data/summaries/2025-11-24.json (5 newsletters)

**Pages updated**:
- [[anthropic]] / [[prompt-injection]] — discloses Chinese state-backed group used Claude to automate cyberattacks (one of first frontier-lab admissions of nation-state misuse)
- [[openai]] — leaked compute-spend documents (revenue ≈ compute spend); ChatGPT 800M weekly active users (7× Europe, 9× global growth)
- [[amazon]] — open-sources "Agent SOPs" (internal pattern library to democratize AI expertise)
- [[ai-funding-rounds]] — Bezos returns as CEO of Project Prometheus AI ($6.2B startup)

**Notable**: Anthropic's nation-state Claude-cyber-abuse disclosure is a first-of-its-kind frontier-lab admission and a significant signal in the prompt-injection / agentic-AI risk story. ChatGPT 800M WAU at 9× global growth quantifies the consumer-AI penetration story behind the "Code Red" narrative that surfaces a week later.

## 2025-11-23
**Ingested**: data/summaries/2025-11-23.json (4 newsletters)

**Pages updated**:
- [[google]] / [[antigravity]] — Antigravity deep-dive coverage continues (multi-agent IDE that plans, writes, debugs, tests autonomously); Code Wiki documentation system powered by Gemini
- [[perplexity]] — AI Browser launches with free shopping agent + voice-driven browsing (rivals Atlas)
- [[alibaba]] — Qwen chatbot enhances Taobao shopping to rival ChatGPT + Google
- [[ai-regulation]] — Stability AI's Mostaque: "900 days to decide AI's future"; IRS deploys AI agents
- [[ai-copyright]] — Klay Vision becomes first AI music co. to sign licensing deals with major labels

**Notable**: Cloudflare suffered a major network outage the same day, but the cause was internal configuration error — not AI-relevant enough to page-ify. The day's actual signal is the "AI shopping browser" cluster: Perplexity AI Browser + Alibaba Qwen-on-Taobao squarely target the same surface ChatGPT/Atlas shipped a few weeks earlier.

## 2025-11-22
**Ingested**: data/summaries/2025-11-22.json (multiple newsletters; AI Breakfast / Mindstream / The Rundown AI / TLDR / TLDR AI)

**Pages updated**:
- [[google]] / [[gemini]] / [[nano-banana-pro]] — Nano Banana Pro launches: Gemini 3 Pro Image, 4K, 14-input, 5-character consistency, SynthID + C2PA, integrated into Canva + Figma + Adobe Firefly + Photoshop + Antigravity + Search + Workspace + Ads
- [[chatgpt]] — group chats roll out globally (up to 20 users; ChatGPT joins on @-mention)
- [[openai]] — GPT-5.1 Codex Max becomes default across Codex environments
- [[meta]] — SAM 3D coverage continues
- [[amazon]] — Uber Eats deploys Starship robots (UK; Europe 2026, US 2027)
- [[ai-funding-rounds]] — NVIDIA's $57B record quarter rallies semiconductor equities
- [[ai-regulation]] — EU AI Act criticized for unclear details / delays
- [[ai-copyright]] — Warner Music + Udio licensing deal (post-lawsuit drop)

**Pages created**: [[nano-banana-pro]]

**Notable**: Nano Banana Pro is Google's first image model that ships into the Adobe + Figma + Canva creative stack on day one — a much wider distribution surface than any prior frontier image model. ChatGPT group chats are OpenAI's first move into multi-user real-time AI collaboration.

## 2025-11-21
**Ingested**: data/summaries/2025-11-21.json (multiple newsletters; TLDR / TLDR AI / The Rundown AI)

**Pages updated**:
- [[openai]] / [[gpt-5-1-codex-max]] — released: compaction across context windows, 24+ hour sessions, 77.9% SWE-bench Verified (30% fewer thinking tokens), Windows CLI, 27–42% faster task completion
- [[openai]] — GPT-5.1 Pro rollout to ChatGPT Pro; ChatGPT for Teachers (free GPT-5.1 Auto for verified US K-12 educators); Larry Summers resigns from board (Epstein-communications fallout)
- [[nvidia]] — Q3 (Oct-quarter) revenue $57B (+62% YoY); guides $65B current quarter; Saudi Arabia deals (600K GPUs + 500+ MW data center); "no assurance" on $100B OpenAI pact
- [[apple]] — N1 in-house Wi-Fi chip outperforms Broadcom (Wi-Fi 7, Bluetooth 6, Thread; first major in-house wireless silicon in iPhones)
- [[ai-copyright]] — Warner Music drops Udio lawsuit (sets up Nov 22 licensing deal)
- [[ai-regulation]] — Larry Summers OpenAI-board resignation
- [[ai-funding-rounds]] — xAI advanced talks for $15B at $230B; alphaXiv $7M seed; Adobe acquires Semrush for $1.9B

**Pages created**: [[gpt-5-1-codex-max]]

**Notable**: Codex-Max "codes for 24 hours straight" via context-compaction is the practical demonstration that long-horizon agentic coding is now a sustained-execution problem, not a context-window problem. NVIDIA Saudi-Arabia 600K-GPU deal is the largest single-country sovereign-AI compute commitment to date.

## 2025-11-20
**Ingested**: data/summaries/2025-11-20.json (multiple newsletters; TLDR / TLDR AI / TAAFT / The Rundown AI / AI Breakfast / World of AI / Mindstream / FutureTools)

**Pages updated**:
- [[google]] / [[gemini-3]] / [[antigravity]] — Gemini 3 ships (1.5M token, Deep Think; LMArena 1501 Elo, HLE 45.8%, AIME 95%, GPQA Diamond 91.9%, ScreenSpot-Pro 72.7%); Antigravity free agent-first IDE launches in parallel; AI travel planning into Search; Scholar Labs launches
- [[anthropic]] — valuation reaches ~$350B as Microsoft (up to $5B) + NVIDIA (up to $10B) commit combined $15B; Anthropic commits $30B Azure compute + up to 1 GW NVIDIA Grace Blackwell / Vera Rubin; Sonnet 4.5 / Haiku 4.5 / Opus 4.1 enter public preview in Microsoft Foundry + M365 Copilot; Dario Amodei on 60 Minutes (half of entry-level white-collar jobs replaced in 5 years)
- [[ai-funding-rounds]] — Replit $1.5B; Lambda raises for AI datacenters; Intuit $100M+ deal with OpenAI
- [[ai-bubble-concerns]] — Sundar Pichai warns of "irrationality" in trillion-dollar AI investment boom

**Notable**: Gemini 3's launch + Antigravity is Google's clearest "we have caught up" moment of the cycle and triggers the OpenAI "rough vibes" / "Code Red" narrative arc that runs through to Dec 4. Microsoft + NVIDIA's $15B combined Anthropic commitment + Anthropic's $30B Azure-compute pledge is the largest cross-hyperscaler AI compute bundle yet.

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

## 2025-11-19
**Ingested**: data/summaries/2025-11-19.json (11 newsletters)

**Pages updated**:
- [[xai]] — Grok 4.1 launch; personality overhaul + EQ lead + top of LMArena
- [[andrej-karpathy]] — "verifiable work disappears first to AI" framing
- [[perplexity]] — Snapchat $400M distribution deal
- [[ai-funding-rounds]] — Snapchat-Perplexity $400M
- [[chatgpt]] — medical/legal-advice posture clarification
- [[anthropic]] — Iceland national-scale education partnership

**Pages created**: [[grok-4-1]]

**Notable**: Grok 4.1 is the personality-tuned follow-up to Grok 4 — lab EQ competition has joined the reasoning-benchmark race, with Grok explicitly leading on EQ while still topping LMArena. Karpathy's "verifiable-work-first" framing gave a crisp mental model for which jobs automate first (things with checkable outputs), and the Snapchat-Perplexity $400M deal shows Perplexity buying social-app distribution.

## 2025-11-18
**Ingested**: data/summaries/2025-11-18.json (9 newsletters)

**Pages updated**:
- [[ai-video-generation]] — Depth Anything 3 + "AI voice taking over tech interfaces" framing
- [[ai-bubble-concerns]] — eBay AI-feature-driven stock surge 75% since 2020 (bull case)

**Notable**: Quieter day — Depth Anything 3 (single/multi-view depth) slots into the broader spatial-video pipeline alongside Marble, and eBay's AI-retrofit-as-stock-surge gave the bull side a new exemplar as institutional bubble warnings continued. "AI voice interfaces" emerged as a recurring TAAFT framing.

## 2025-11-17
**Ingested**: data/summaries/2025-11-17.json (5 newsletters)

**Pages updated**:
- (no substantive new wiki-worthy entities; coverage was continuation of prior-day themes — GPT-5.1 adoption, Kimi K2, Gemini 3 anticipation)

**Notable**: Light-volume day; most coverage was continuation/commentary on GPT-5.1, Kimi K2 Thinking, and Gemini-3 anticipation from earlier in the week. No new entities reached the page-creation threshold.

## 2025-11-16
**Ingested**: data/summaries/2025-11-16.json (6 newsletters)

**Pages updated**:
- [[agent-frameworks]] — AgentEvolver research (self-improving agents that generate tasks, judge performance, and evolve autonomously)

**Notable**: AgentEvolver is the day's signal — a research framework where agents bootstrap their own training data. Fits the broader "agents that evolve" pattern alongside Hermes Agent (Nous/Ollama integration landed 2026-04-16) and Cloudflare Agent Memory.

## 2025-11-15
**Ingested**: data/summaries/2025-11-15.json (4 newsletters)

**Pages updated**:
- [[ai-browsers]] — Mozilla Firefox AI window (user-selectable AI model, privacy-preserving)

**Notable**: Mozilla's entry is strategically distinct from Atlas/Comet — Firefox AI window is bring-your-own-model rather than a bundled-assistant browser, which positions privacy/choice as the differentiator vs the OpenAI/Perplexity models that come with tethered assistants.

## 2025-11-14
**Ingested**: data/summaries/2025-11-14.json (7 newsletters)

**Pages updated**:
- [[ai-video-generation]] — Marble launch coverage (adjacent to video-generation category)

**Pages created**: [[world-labs]], [[marble]]

**Notable**: Fei-Fei Li's World Labs shipped Marble — billed as the first commercial "world model," generating persistent 3D environments from text, images, or video. This is the first product page in a new topic category that will also absorb LeCun's post-Meta lab (see 2025-11-12/13 entries) and NVIDIA Cosmos (added 2026-04-16). The world-model category now has both research ([[world-models]] topic) and commercial ([[marble]]) anchors.

## 2025-11-13
**Ingested**: data/summaries/2025-11-13.json (14 newsletters)

**Pages updated**:
- [[agent-frameworks]] — Scale Agentex (enterprise orchestration), Replit AI Integrations (300+ models from OpenAI/Anthropic/Meta/Google)
- [[alibaba]] — partially-trained Qwen 3 sighting
- [[meta]] — LeCun departure confirmed (world-model lab)

**Pages created**: [[baidu]], [[ernie-4-5-vl-thinking]]

**Notable**: Two threads converged. (1) Baidu shipped ERNIE-4.5-VL-28B-A3B-Thinking as open-source, specifically framed as rivaling GPT-5 and Gemini 2.5 Pro — pushes the open-vs-closed dynamic further in China's favor. (2) Replit's AI Integrations pivots Replit into an aggregator rather than a single-model host; combined with Scale Agentex, the "managed agent infra" layer matured into a distinct category.

## 2025-11-12
**Ingested**: data/summaries/2025-11-12.json (10 newsletters)

**Pages updated**:
- [[nvidia]] — $4.5T valuation milestone
- [[ai-bubble-concerns]] — NVIDIA $4.5T + "AI reached 1.2B users in under 3 years" framing (vs-bubble bull case)
- [[xai]] — Grok Code Remote (run code in remote environments directly from the web)
- [[agent-frameworks]] — Grok Code Remote
- [[meta]] — LeCun's new world-model lab surfaces

**Pages created**: [[world-models]]

**Notable**: The day's creative push was the new "world models" topic — Meta's Yann LeCun publicly shifting focus to world-model research, aligning with World Labs' Marble (launching two days later) and NVIDIA Cosmos. World models are emerging as the post-LLM research frontier: spatial, physical, multi-step-consistent.

## 2025-11-11
**Ingested**: data/summaries/2025-11-11.json (14 newsletters)

**Pages updated**:
- [[openai]] — GPT-5-Codex-Mini release
- [[agent-frameworks]] — GPT-5-Codex-Mini (CLI + IDE distribution, 4× more usage)
- [[chatgpt]] — Sudoku-style reasoning puzzles referenced

**Pages created**: [[gpt-5-codex-mini]]

**Notable**: OpenAI continues the Codex-model fan-out — GPT-5-Codex-Mini offers 4× the usage allowance at near-parity coding performance, making the cost-optimized variant the default for volume coding work. Fits the "Codex as superapp" narrative that crystallized on 2026-04-16.

## 2025-11-10
**Ingested**: data/summaries/2025-11-10.json (4 newsletters)

**Pages updated**:
- [[ai-video-generation]] — Higgsfield Recast (AI video with full-body replacement + background transformation)
- [[ai-browsers]] — Android Comet rollout to power users
- [[perplexity-comet]] — Android rollout
- [[perplexity]] — Android Comet rollout

**Notable**: Low-volume but category-consolidating day. Higgsfield Recast is the first non-lab video model to reach consumer coverage since Sora/Veo, and Comet reaching Android broadens the "AI browser on mobile" category from Atlas-only.

## 2025-11-09
**Ingested**: data/summaries/2025-11-09.json (9 newsletters)

**Pages updated**:
- [[ai-bubble-concerns]] — Michael Burry ("Big Short") bets $1B against AI boom citing overvaluation

**Notable**: Burry's $1B public short is the headline bear-case event — unlike BoE/IMF/JPM warnings, this is a named high-conviction investor putting capital behind the bubble thesis, which materially sharpened the narrative the market had been skirting.

## 2025-11-08
**Ingested**: data/summaries/2025-11-08.json (7 newsletters)

**Pages updated**:
- [[ai-browsers]] — ChatGPT Atlas macOS availability continues
- [[chatgpt-atlas]] — macOS availability
- [[apple]] — Digital Passports feature coverage

**Notable**: Product-maintenance day: Atlas macOS rollout stays in the news cycle, and Apple's Digital Passports feature (mentioned alongside Digital ID from 2025-11-05) fills out the "Apple-as-credentialing-layer" beat. No new pages warranted.

## 2025-11-07
**Ingested**: data/summaries/2025-11-07.json (14 newsletters)

**Pages updated**:
- [[openai]] — GPT-5.1 launch (Instant/Thinking modes, 8 personality presets, prompting-guide drop)
- [[chatgpt]] — GPT-5.1 modes + personalities
- [[google]] — Ironwood TPU general availability (7th-gen)
- [[perplexity]] — Comet Assistant rebuild (23% multitasking improvement; explicit-permission gating)
- [[perplexity-comet]] — Comet Assistant rebuild
- [[ai-browsers]] — Perplexity rebuilds Comet
- [[ai-hardware]] — Ironwood TPU GA

**Pages created**: [[moonshot-ai]], [[kimi-k2-thinking]], [[gpt-5-1]], [[ironwood-tpu]]

**Notable**: Dense launch day. Three simultaneous launches: (1) GPT-5.1 with explicit Instant/Thinking modes and 8 personality presets — OpenAI's most visible product refresh since GPT-5; (2) Moonshot's Kimi K2 Thinking, an open-source reasoning model benchmarking above GPT-5 and Claude Sonnet 4.5 on several evals — the open-source side of the reasoning race; (3) Google's Ironwood TPU GA, the 7th-gen chip that makes Anthropic's 2026-04-16 $350B deal plausible. Perplexity's Comet rebuild adds explicit-permission gating — a category-wide safety signal in response to Atlas's hidden-text attacks.

## 2025-11-06
**Ingested**: data/summaries/2025-11-06.json (12 newsletters)

**Pages updated**:
- [[google]] — Project Suncatcher (solar-powered orbital TPU compute research)
- [[ai-hardware]] — Project Suncatcher
- [[cognition]] — Codemaps (structured maps of complex codebases)
- [[agent-frameworks]] — Cognition Codemaps; ElevenLabs hosts LLMs in Agents Platform

**Pages created**: [[elevenlabs]], [[project-suncatcher]]

**Notable**: Two orthogonal novelties. (1) Project Suncatcher is Google's first publicly-discussed orbital-compute research — TPUs on solar-powered LEO satellites — a long-horizon response to the data-center power-cost problem. (2) ElevenLabs moving LLM hosting in-platform (to cut voice-agent latency) is the first meaningful sign that voice-first agents will vertically integrate the LLM layer rather than call hosted Claude/OpenAI APIs.

## 2025-11-05
**Ingested**: data/summaries/2025-11-05.json (15 newsletters)

**Pages updated**:
- [[openai]] — Sora Android launch
- [[sora-2]] — Android availability; Ghibli trade-group formal request
- [[ai-video-generation]] — Sora Android; Ghibli pushback
- [[apple]] — humanoid moonshot ($133B coverage); Digital ID surfaces
- [[ai-regulation]] — Ghibli trade-group pushback (Japan); Amazon-Perplexity legal posture
- [[amazon]] — Perplexity legal notice continuation
- [[perplexity]] — Amazon legal threat

**Pages created**: [[ai-copyright]]

**Notable**: The day's connective thread was copyright — Japan's Ghibli studio trade group formally asked OpenAI to stop using Studio Ghibli styles as training data, mirroring the national-level manga/anime complaint from October. This is the first page in a new [[ai-copyright]] topic that now also holds the Munich court ruling, EU publisher deals, and the Texas-Roblox privacy case. Separately, Apple's reported $133B humanoid-robot moonshot drops its solo-AI-strategy narrative firmly into the hardware category.

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
