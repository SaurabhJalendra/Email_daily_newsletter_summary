---
name: Brain2Qwerty v2
description: Meta FAIR's non-invasive brain-to-text system that decodes typed sentences from MEG brain signals; ~61% word accuracy / 78% best-participant
type: product
---

# Brain2Qwerty v2

> **Type**: product
> **Vendor**: [[meta]]
> **First mentioned**: 2026-06-30-evening
> **Last updated**: 2026-06-30-evening (created; four-newsletter convergence — AINews + Rundown AI HIGH + Evolving AI Insights HIGH + AI Supremacy/Anna's Daybreak — anchors *"reads your BRAIN 8× better without surgery"* canonical-framing on the non-invasive brain-to-text v2 system; training code published; pairs with TRIBE v2 fMRI-foundation-model as the cycle's broader Meta neuro-AI surface)
> **Status**: research release (training code published; not a consumer product — depends on MEG hardware in lab conditions)
> **Related**: [[meta]], [[merge-labs]], [[ai-healthcare]]

## Summary

Brain2Qwerty v2 is [[meta]] FAIR's second-generation non-invasive brain-to-text decoder, developed with the Basque Center for Cognition, Brain and Language. The system reads magnetoencephalography (MEG) brain signals from a wearable scanner and infers what a person is typing — without implants or surgery — using a two-stage architecture: one model reads raw neural signals, a second model adds linguistic/semantic structure. The v2 release reports ~61% overall word-level accuracy (up to ~78% for the best participant) and ~69% character-level accuracy, an ~8× improvement over the previous best non-invasive brain-to-text attempts and comparable to some invasive BCI methods that require electrode implants.

The model is positioned as assistive technology for people who have lost the ability to speak or type due to stroke, ALS, brain lesions, or paralysis, and as a non-invasive competitor to surgical BCIs like Neuralink. Meta has published the full training code for both v1 and v2. It remains a research system constrained by bulky/expensive MEG hardware rather than a consumer product. Concurrent Meta research includes TRIBE v2, a predictive foundation model trained on 500+ hours of fMRI data from 700+ people that produces a "digital twin" of neural responses to language/sights/sounds — together forming a broader neuro-AI program from FAIR's Brain & AI team.

## Timeline

- **2026-06-30-evening**: **Created — Brain2Qwerty v2 anchors the cycle's "Meta reads your BRAIN 8× better without surgery" four-newsletter convergence** (Rundown AI HIGH "🧠 Meta's AI turns brain scans into typed sentences" + Evolving AI Insights HIGH "🧠 Meta reads your BRAIN 8× better without Surgery" + AINews "[AINews] not much happened today" + AI Supremacy/Anna's Daybreak supplementary surfaces). Concrete numbers in this cycle: ~61% overall word accuracy, ~78% for the best participant, ~69% character-level accuracy, ~8× improvement over prior non-invasive attempts, two-model two-stage architecture (signal-decoder + semantic-overlay), MEG-based input, training code published for both v1 and v2 for research reproducibility. Paired with **TRIBE v2** — Meta's MEG/fMRI predictive foundation model trained on 500+ hours of fMRI data from 700+ people, framed as a *"digital twin of neural activity"* that predicts brain responses to new sights/sounds/language. The two systems together stake out a Meta-FAIR *non-invasive neuro-AI* posture distinct from surgical BCI players (Neuralink) and the [[merge-labs]] Altman-BCI line, anchored on MEG/EEG-based decoding + brain-response prediction via foundation models. Industry-impact framing: assistive communication for paralysis/ALS/speech-impairment; competition with invasive BCIs; new privacy/consent/surveillance concerns about "thought decoding" if commercialized — *source: data/summaries/2026-06-30-evening.json (Rundown AI HIGH "🧠 Meta's brain-reading AI leaves letters behind"; Evolving AI Insights HIGH "🧠 Meta reads your BRAIN 8x better without Surgery" — 61% word accuracy + 8-fold improvement + training code released; AINews — Brain2Qwerty v2 ~61% word accuracy overall + 78% best participant; researchFindings.additionalContext — Brain2Qwerty v2 + TRIBE v2 / Basque Center collaboration + 69% character + 78% word + non-invasive MEG)*

## Key Facts

- Vendor: [[meta]] FAIR (Brain & AI team) with Basque Center for Cognition, Brain and Language
- Input: magnetoencephalography (MEG) — non-invasive neural recording
- Architecture: two-model two-stage decoder (signal reader + semantic overlay)
- Accuracy: ~61% word-level overall; ~78% best participant; ~69% character-level
- Improvement: ~8× over prior non-invasive brain-to-text attempts
- Code: training code published for v1 and v2
- Companion research: TRIBE v2 — foundation model on 500+ hours fMRI from 700+ people; predicts neural responses ("digital twin")
- Hardware constraint: requires MEG scanner — lab-only, not consumer/portable

## Open Questions

- Live-decoding latency vs offline analysis tier
- Vocabulary coverage and out-of-distribution words / non-English support
- Path to portable MEG or EEG-based equivalent for at-home use
- Regulatory posture: FDA pathway for assistive use; neuroprivacy frameworks before any commercial rollout
- How TRIBE v2 is being released — full open weights, gated API, paper-only?

## Sources

- data/summaries/2026-06-30-evening.json (Rundown AI HIGH "🧠 Meta's brain-reading AI leaves letters behind"; Evolving AI Insights HIGH "🧠 Meta reads your BRAIN 8x better without Surgery"; AINews "[AINews] not much happened today"; researchFindings.additionalContext for Meta brain-reading AI — Brain2Qwerty v2 + TRIBE v2 + Basque Center collaboration)
