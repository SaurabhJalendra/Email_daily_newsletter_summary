---
name: Claude Fable 5.1
description: Anthropic's Sep 2026 frontier successor to Claude Fable 5 — same $10/$50 base pricing, 75% cheaper cache reads ($0.25/M), ~25% typical workload savings, doubled benchmark scores, coding/research focus
type: product
---

# Claude Fable 5.1

> **Type**: product
> **Vendor**: [[anthropic]]
> **First mentioned**: 2026-09-02-morning
> **Last updated**: 2026-09-02-morning (**Launch cycle — Anthropic ships Claude Fable 5.1 as the successor to [[claude-fable-5]] alongside restricted-access [[claude-mythos-5-1]]**. AlphaSignal MEDIUM: *"Anthropic has released Claude Fable 5.1 and Claude Mythos 5.1, two new models built for coding and research tasks. Claude Fable 5.1 offers 25% lower costs, doubled benchmark scores, and a 75% reduction in cache read costs. It also features a new privacy mode for enterprise teams and reduced false alarms for safety"*. The AI Field MEDIUM sharpens pricing: *"Fable 5.1 keeps its base API price at $10 per million input tokens and $50 per million output tokens, with cache reads reduced to $0.25 per million tokens, resulting in estimated cost savings of 25% for typical workloads and up to 45% for highly agentic work"*. researchFindings.additionalContext canonicalizes: *"Fable 5.1 offers a 1M-token context window, up to 128K output tokens, multimodal (text+image) input, and 'adaptive' always-on thinking with a high default effort setting, aimed at demanding reasoning and long-horizon agents"* + *"the same underlying model exposed with different safeguard levels: Fable 5.1 as the generally available, safety-classified variant, and Mythos 5.1 as a higher-capability version restricted to trusted-access programs"*. First-in-wiki anchors: (a) **$0.25/M cache-read + 75% cache-read-cost-reduction canonical pricing anchor** — sharpens the multi-cycle Fable-5 $10/$50 API pricing arc with a *cache-tier price-drop-driven cost-savings-substrate* (cost savings materialize via cache-read discount rather than base-price cut — base rates unchanged); (b) **"Doubled benchmark scores" canonical uplift anchor** on Fable 5 → Fable 5.1 generational step (benchmarks unspecified); (c) **"Up to 45% savings on highly agentic work" canonical agentic-workload-tier savings-anchor** — first-in-wiki *savings-scale-with-agentic-intensity anchor*, structurally significant as it productizes *cache-heavy agentic loops as the primary cost-tier winners* under the new pricing; (d) **"Privacy mode for enterprise teams" canonical enterprise-privacy-tier feature-anchor**; (e) **"Reduced false alarms for safety" canonical safety-classifier-precision-improvement anchor** — sharpens the multi-cycle *safety-classifiers-differential* Fable-5-vs-Mythos-5 arc with a *false-positive-rate-reduction canonical precision-improvement anchor* on the deployed classifier substrate. Structurally significant three ways: (i) **Fable 5.1 preserves the Fable/Mythos twin-tier architecture** — same underlying model, differential safety-classifier configuration — validates the multi-cycle Mythos-tier restricted-access + Fable-tier broadly-deployed regulatory template as durable across generations; (ii) **Cache-read 75% discount + base-price unchanged pricing pattern productizes *cache-locality-as-savings-tier canonical pattern*** — pairs with [[openai]]'s outcome-based pricing experiment as the two evening-cycle canonical *frontier-pricing-innovation anchors*; (iii) **"Coding and research tasks" positioning-anchor** graduates Fable-tier from *general-purpose-frontier-flagship* into *coding-and-research-focused frontier-flagship* — sharpens the [[claude-code]] + [[claude-science]] cross-cycle substrate integration. See [[anthropic]] + [[claude-fable-5]] + [[claude-mythos-5-1]] + [[claude-mythos]] + [[project-glasswing]] + [[ai-cybersecurity-arms-race]] — *source: data/summaries/2026-09-02-morning.json (AlphaSignal MEDIUM "Google TimesFM-3 📊, Anthropic Claude 5.1 25% cheaper 💸, Runway Solaris"; The AI Field MEDIUM "Anthropic just introduced their new Claude Fable 5.1 and Claude Mythos 5.1"; researchFindings.additionalContext — Anthropic; Claude)*
> **Status**: generally available (Sep 2026); available via Claude API + partner clouds ([[amazon]] Bedrock, [[google]] Cloud, [[microsoft]] Foundry/365 integrations, Anthropic's own platform/apps)
> **Related**: [[anthropic]], [[claude-fable-5]], [[claude-mythos-5-1]], [[claude-mythos]], [[claude-opus-5]], [[claude-sonnet-5]], [[project-glasswing]]

## Summary

Claude Fable 5.1 is Anthropic's September 2026 successor to [[claude-fable-5]], released alongside restricted-access [[claude-mythos-5-1]] as the generally-available safety-classified twin. Positioned as the frontier-tier flagship for coding and research tasks, it preserves the [[claude-fable-5]] $10/M input + $50/M output base API pricing while cutting cache-read costs by 75% (to $0.25/M), producing typical workload savings of ~25% and up to ~45% on highly agentic workloads. Anthropic reports doubled benchmark scores vs Fable 5, an enterprise-team privacy mode, and reduced false-alarm rates from its safety classifier. Fable 5.1 retains the 1M-token context window, up to 128K output tokens, multimodal (text+image) input, and always-on "adaptive" thinking with a high default effort setting from the Fable 5 lineage.

## Timeline

- **2026-09-02-morning**: **Anthropic ships Claude Fable 5.1 alongside restricted Claude Mythos 5.1** — 25% lower typical costs / up to 45% on agentic workloads / 75% cache-read reduction ($0.25/M) / base $10/$50 unchanged / doubled benchmark scores / privacy mode for enterprise teams / reduced safety-classifier false alarms; "coding and research tasks" positioning; same underlying model as Mythos 5.1 with differential safety classifiers — *source: data/summaries/2026-09-02-morning.json (AlphaSignal MEDIUM; The AI Field MEDIUM; researchFindings.additionalContext)*

## Key Facts

- Base API pricing: $10/M input tokens, $50/M output tokens (unchanged from [[claude-fable-5]])
- Cache reads: $0.25/M (75% reduction vs Fable 5)
- Typical workload cost savings: ~25%; highly agentic workloads: up to ~45%
- Context window: 1M tokens; output cap: up to 128K tokens
- Modality: text + image input; always-on "adaptive" thinking with high default effort setting
- Availability: generally available via Claude API + Amazon Bedrock + Google Cloud + Microsoft Foundry/365 + Anthropic's own platform
- Twin-tier: same underlying model as [[claude-mythos-5-1]] with differential safety-classifier configuration ([[claude-mythos-5-1]] restricted to trusted-access programs, notably [[project-glasswing]])
- Positioning: coding + research + long-horizon agentic tasks
- Privacy mode for enterprise teams (details unspecified)
- Safety-classifier false-alarm rate reduced vs Fable 5

## Open Questions

- Named benchmarks that "doubled" between Fable 5 and Fable 5.1 (SWE-bench Pro? AA-Briefcase? Cobbench?)
- Exact scope of the enterprise privacy mode (zero-retention? on-prem? BYOK?)
- Whether Fable 5.1 obsoletes Fable 5 in the Claude Max/Team Premium plans (see [[claude-fable-5]] permanent-inclusion arc) or coexists
- Whether the pricing changes apply to cache writes as well as reads
- Cache-hit-rate assumptions behind the "up to 45% on highly agentic work" figure

## Sources

- data/summaries/2026-09-02-morning.json (newsletters: AlphaSignal — "Google TimesFM-3 📊, Anthropic Claude 5.1 25% cheaper 💸, Runway Solaris"; The AI Field — "Anthropic just introduced their new Claude Fable 5.1 and Claude Mythos 5.1"; researchFindings.additionalContext — Anthropic + Claude)
