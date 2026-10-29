---
name: Artificial Analysis
description: Independent AI-model benchmarking organization; publishes the Intelligence Index (v5 as of Oct 27 2026) and co-authored the Pipette on-device benchmark stack with Liquid AI
type: company
---

# Artificial Analysis

> **Type**: company
> **First mentioned**: 2026-08-25-evening
> **Last updated**: 2026-10-29-morning
> **Status**: active
> **Related**: [[benchmark-integrity]], [[cognition]], [[liquid-ai]], [[pipette]], [[frontier-code-2]]

## Summary

Artificial Analysis is an independent AI-benchmarking organization that publishes the **Intelligence Index** — a widely cited composite evaluation across coding, knowledge work, science, and general-capability tasks — alongside niche artifacts like the Pipette on-device benchmark stack (co-authored with [[liquid-ai]] Aug 2026). Its leaderboards aim to compare frontier models on fair, reproducible evals; the firm is a central reference point for practitioner model-selection and for cross-lab competitive discussion.

On October 27 2026 Artificial Analysis released **Intelligence Index v5**, a major revision structured around four equally weighted categories (Knowledge Work, Coding, Science, General) over nine evaluations. v5 incorporates [[cognition]]'s private **FrontierCode 2.0** real-world coding benchmark and **Terminal-Bench-Science** (70 agentic scientific-research tasks), and upgrades several existing evaluations. Crucially, **60% of the index now uses private test sets or held-out answers**, materially raising the cost of gaming the leaderboard. Interconnects's Nathan Lambert framed the release and the broader "benchmarker's dilemma" in a widely cited essay — the difficulty of distilling complex AI capability into a single comparable number.

## Timeline

- **2026-10-29-morning**: **Intelligence Index v5 canonical major-revision anchor + four-category 60%-private-test-set canonical benchmark-integrity anchor + FrontierCode 2.0 + Terminal-Bench-Science two-named-new-eval canonical inclusion anchor cluster**. Interconnects by Nathan Lambert MEDIUM "Artificial Analysis v5 and the benchmarker's dilemma": *"Artificial Analysis has released version 5 of their Intelligence Index, a benchmarking tool for evaluating the capabilities of AI models, with a focus on real-world usage and a new set of evaluation metrics"* + *"The updated index includes four main categories: Knowledge Work, Coding, Science, and General, each with a set of specific benchmarks and weights"*. researchFindings.additionalContext: *"evaluates models across four equally weighted areas—knowledge work, coding, science, and general capability—using nine evaluations. The update adds Cognition's private FrontierCode 2.0 benchmark for real-world coding tasks and Terminal-Bench-Science, which tests 70 agentic scientific-research tasks, while also upgrading several existing evaluations. Crucially, 60% of the index now uses private test sets or held-out answers, making it harder for model developers to train against or game the public benchmark"*. Daily-digest Top Story #3. First-in-wiki *concrete Artificial-Analysis company page canonical anchor* on the independent-benchmarking substrate — productizes Artificial Analysis as *canonical late-Oct-2026 concrete-private-test-set-60%-leaderboard-tier substrate operator* on the [[benchmark-integrity]] arc; closed-models (OpenAI + Anthropic) framed as currently outperforming open models in the v5 index with gap expected to narrow. See [[benchmark-integrity]] this cycle + [[cognition]] this cycle + [[frontier-code-2]] (NEW) + [[liquid-ai]] + [[pipette]] — *source: data/summaries/2026-10-29-morning.json (Interconnects by Nathan Lambert MEDIUM "Artificial Analysis v5 and the benchmarker's dilemma"; researchFindings.additionalContext — Artificial Analysis Intelligence Index v5; daily-digest Top Story #3)*

- **2026-08-25-evening**: **Pipette launch** — Artificial Analysis + [[liquid-ai]] jointly publish Pipette, an open-source on-device benchmark stack measuring quality + speed + latency + memory across *model × quantization × runtime × device* combinations. First-in-wiki *concrete cross-vendor + cross-runtime + cross-quantization + cross-device on-device benchmark grid* canonical anchor; pairs with [[benchmark-integrity]] as *evaluation-tier substrate as first-class artifact* — *source: data/summaries/2026-08-25-evening.json (AINews HIGH "Andrew Ng gets into AI Engineering"; Rundown AI MEDIUM "SpaceX-Nvidia partnership heads for orbit")*

## Key Facts

- **Flagship product**: Intelligence Index (public composite leaderboard)
- **v5 structure** (Oct 27 2026): four equally weighted categories (Knowledge Work + Coding + Science + General) over nine evaluations
- **Private test-set share in v5**: 60% (held-out answers / private evals) — anti-gaming
- **Named new v5 evals**: [[cognition]] FrontierCode 2.0 (private, real-world coding); Terminal-Bench-Science (70 agentic scientific-research tasks); CritPT v2; CursorBench
- **Reference listings**: Epoch AI's Capabilities Index (ECI); Vals AI; Intelligence.ai; Open Model Dashboard; Artifacts Hub
- **Current reading from v5**: closed models (OpenAI + Anthropic) leading open models across most areas; gap expected to narrow
- **Joint artifact with [[liquid-ai]]**: [[pipette]] on-device benchmark stack (Aug 2026)

## Open Questions

- Full list of v5 evaluations and per-category weightings
- Governance model + conflict-of-interest disclosures (vendor relationships, sponsorship)
- Whether labs will adopt v5 as their primary external benchmark anchor
- Reproducibility harness specification for private-test-set evals
- Head-to-head: v5 vs Epoch AI's Capabilities Index (ECI) agreement/disagreement rates on top-tier models

## Sources

- data/summaries/2026-10-29-morning.json (Interconnects by Nathan Lambert MEDIUM "Artificial Analysis v5 and the benchmarker's dilemma"; researchFindings.additionalContext — Artificial Analysis Intelligence Index v5; daily-digest Top Story #3)
- data/summaries/2026-08-25-evening.json (AINews HIGH; Rundown AI MEDIUM — Pipette launch)
