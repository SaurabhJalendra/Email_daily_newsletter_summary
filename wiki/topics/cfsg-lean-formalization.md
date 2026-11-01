---
name: CFSG Lean Formalization
description: Axiom Math's Oct 2026 machine-checkable Lean formalization of the Classification of Finite Simple Groups ("Enormous Theorem") — 15,000-page proof translated into ~43.1M lines of Lean via AI-assisted agent swarms over ~24 days
type: topic
---

# CFSG Lean Formalization

> **Type**: topic (concrete AI-for-formal-mathematics artifact)
> **First mentioned**: 2026-11-01-morning
> **Last updated**: 2026-11-01-morning
> **Status**: active
> **Related**: [[axiom-math]], [[formal-software-verification]], [[leanstral]], [[anthropic]], [[openai]]

## Summary

The CFSG Lean Formalization is Axiom Math's **Oct 2026 machine-checkable Lean translation of the Classification of Finite Simple Groups (CFSG)** — the roughly 15,000-page, decades-long collaborative proof informally called the "Enormous Theorem." The project renders the proof as approximately **43.1 million lines of Lean code**, delivered during a ~24-day effort in which human mathematicians directed swarms of AI agents through Axiom's AxiomProver platform. The released repository is described as *"sorry-free"* and is checked by Lean's kernel using standard axioms. The result is a formalization of an existing proof rather than a new mathematical result, but it makes CFSG independently verifiable at the level of a proof assistant.

Structurally, the project is the canonical late-2026 reference for *AI-assisted formalization of large existing mathematical proofs at million-line scale*, sitting alongside [[openai]]'s 722-math-manuscripts corpus (which also included Lean formalizations for some results) and Mistral's [[leanstral]] theorem-proving model on the [[formal-software-verification]] arc. Its most structurally notable byproduct is that the formalization effort surfaced **34 discrepancies in published source material**, including a counterexample to a claim associated with John Walter's work — Axiom reports developing replacement arguments where needed.

## Timeline

- **2026-11-01-morning**: **Project announced + repository released — ~15,000 pages of CFSG translated into ~43.1M lines of Lean + ~24-day effort via AxiomProver agent swarms + "sorry-free" + kernel-checked under standard axioms + 34 published-source-material discrepancies surfaced + counterexample to a John-Walter-associated claim + replacement arguments developed by Axiom**. NLP Newsletter HIGH top-update + daily-digest Top Story #4 + researchFindings.additionalContext: *"The project translates the roughly 15,000-page, decades-long mathematical proof into approximately 43.1 million lines of machine-checkable Lean code. Axiom says mathematicians directed swarms of AI agents through AxiomProver during a 24-day effort; the released repository is described as 'sorry-free' and checked by Lean's kernel using standard axioms"*. First-in-wiki standalone-topic anchor on CFSG Lean formalization. See [[axiom-math]] (NEW) + [[formal-software-verification]] + [[leanstral]] + [[openai]] 722-math-manuscripts (10-07-evening) — *source: data/summaries/2026-11-01-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly"; daily-digest Top Story #4; researchFindings.additionalContext — Axiom CFSG Proof)*

## Key Facts

- **Proof formalized**: Classification of Finite Simple Groups (CFSG), aka the "Enormous Theorem"
- **Original scope**: ~15,000 pages across decades of collaborative work
- **Formalized output**: ~43.1 million lines of Lean code
- **Effort window**: ~24 days with AI-assisted agent swarms
- **Platform**: AxiomProver (see [[axiom-math]])
- **Direction**: human mathematicians direct; agents execute
- **Validation**: "sorry-free" repository, Lean kernel-checked under standard axioms; open for independent scrutiny
- **Byproduct findings**: 34 discrepancies in published source material surfaced during formalization; includes a counterexample to a claim associated with John Walter's work; Axiom reports developing replacement arguments where needed
- **Not a new theorem**: formalization of existing proof, not a new mathematical result

## Open Questions

- Repository location + license + hosting
- Reproducibility: how many independent researchers have replayed Lean's kernel check end-to-end on a 43M-line codebase
- Peer-review of the 34 reported discrepancies and the Walter counterexample
- Which named AI models (frontier-lab or in-house) underpin the AxiomProver agent swarm
- Scaling: can the AxiomProver approach generalize to other large formalization targets (e.g. Mochizuki's abc proof, modularity theorem components)
- Long-term maintenance posture for a 43M-line formalization

## Sources

- data/summaries/2026-11-01-morning.json (NLP Newsletter HIGH "🤖 AI Agents Weekly: Gemini 4 Carbon, GPT-6.1 Terra, OpenAI's Three Discoveries, Mistral Large 4, Axiom CFSG Proof, Qwen Investigation, Genie 4, and More"; daily-digest Top Story #4; researchFindings.additionalContext — Axiom CFSG Proof)
