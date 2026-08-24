---
name: Evals Skills
description: Free open-source set of eval skills for AI product evaluations from Hamel Husain and Shreya Shankar (ai-evals-course/evals-skills); v2 rebuild launched Aug 2026 with new error-discovery + start skills
type: product
---

# Evals Skills

> **Type**: product (open-source skills bundle)
> **Authors**: [[hamel-husain]] + Shreya Shankar
> **First mentioned**: 2026-08-24-morning
> **Last updated**: 2026-08-24-morning
> **Status**: active (v2)
> **Related**: [[hamel-husain]], [[agent-skills]], [[claude-code]], [[parlance-labs]]

## Summary

**Evals Skills** is a free open-source bundle of [[agent-skills]] that Hamel Husain and Shreya Shankar publish at `ai-evals-course/evals-skills` on GitHub for use inside coding agents. The skills operationalize the *Analyze → Measure → Improve* eval lifecycle: taking a file of AI outputs or traces, building a custom review app with a diverse sample, grouping annotator notes into failure modes, and generating validated LLM-as-judge evaluators. The bundle installs via `npx skills add https://github.com/ai-evals-course/evals-skills` and is designed to be invoked by any Claude Code / Codex / Cursor-style agent.

The Aug 2026 v2 release ships two headline additions on top of the original catalogue (`eval-audit`, `generate-synthetic-data`, `write-judge-prompt`, `validate-evaluator`, `evaluate-rag`, `build-review-interface`): a new **`error-discovery`** skill that ingests a trace file, builds a review app over a diverse sample, and organizes annotator notes into failure modes with related-example clustering; and a new **`start`** skill that routes the agent to the right workflow based on the user's current situation (do you have logs already? do you have an eval set? do you need synthetic data?).

## Timeline

- **2026-08-24-morning**: **v2 rebuild ships — new `error-discovery` skill (trace file → custom review app → failure-mode clustering) + new `start` skill (situation-aware workflow router); blog write-up on hamel.dev/blog/posts/evals-skills/** — cites lessons from teaching AI Evals course to thousands of engineers/PMs, including at OpenAI and Anthropic; next cohort of paired [[parlance-labs]] Maven course opens Sep 5 2026 — *source: data/summaries/2026-08-24-morning.json (Parlance Labs MEDIUM "We rebuilt the eval skills"; researchFindings.additionalContext for Shreya Shankar + Hamel Husain)*

## Key Facts

- **Authors**: [[hamel-husain]] + Shreya Shankar
- **Repository**: github.com/ai-evals-course/evals-skills
- **License**: free / open-source
- **Install**: `npx skills add https://github.com/ai-evals-course/evals-skills`
- **Skills catalogue** (v2): `error-discovery`, `start`, `eval-audit`, `generate-synthetic-data`, `write-judge-prompt`, `validate-evaluator`, `evaluate-rag`, `build-review-interface`
- **Paired course**: *AI Evals for Engineers & PMs* on Maven (next cohort Sep 5 2026)
- **Positioning**: operationalizes data-driven trace review + failure-mode analysis + LLM-as-judge validation as reusable coding-agent skills

## Open Questions

- Which coding-agent runtimes have shipped native integrations with the bundle
- Public case studies quantifying error-discovery time saved vs manual open coding
- Whether the skills catalogue will be donated to a foundation ([[agentic-ai-foundation]]) or stay author-maintained

## Sources

- data/summaries/2026-08-24-morning.json (Parlance Labs MEDIUM "We rebuilt the eval skills"; researchFindings.additionalContext for Shreya Shankar + Hamel Husain + Parlance Labs)
