---
name: Brain2Qwerty v2
description: Meta FAIR's non-invasive brain-to-text system that decodes typed sentences from MEG brain signals; ~61% word accuracy / 78% best-participant
type: product
---

# Brain2Qwerty v2

> **Type**: product
> **Vendor**: [[meta]]
> **First mentioned**: 2026-06-30-evening
> **Last updated**: 2026-07-01-morning (cycle-2 recoverage — Superhuman + AlphaSignal + daily-digest top-story #1 sharpen the training-data specifics: **22,000 sentences from 9 volunteers, 10 hours each** — first publicly framed *concrete training-data volume + per-participant recording duration* on v2 in this wiki; AlphaSignal frames as "🧠 Meta Brain2Qwerty v2 hits 78% word accuracy, no surgery needed" — first publicly framed *78% best-participant word accuracy* as the headline framing rather than the 61% average; training code confirmed **fully public** so external researchers can build on it directly)
> **Previously updated**: 2026-06-30-evening (created; four-newsletter convergence — AINews + Rundown AI HIGH + Evolving AI Insights HIGH + AI Supremacy/Anna's Daybreak — anchors *"reads your BRAIN 8× better without surgery"* canonical-framing on the non-invasive brain-to-text v2 system; training code published; pairs with TRIBE v2 fMRI-foundation-model as the cycle's broader Meta neuro-AI surface)
> **Status**: research release (training code published; not a consumer product — depends on MEG hardware in lab conditions)
> **Related**: [[meta]], [[merge-labs]], [[ai-healthcare]]

## Summary

Brain2Qwerty v2 is [[meta]] FAIR's second-generation non-invasive brain-to-text decoder, developed with the Basque Center for Cognition, Brain and Language. The system reads magnetoencephalography (MEG) brain signals from a wearable scanner and infers what a person is typing — without implants or surgery — using a two-stage architecture: one model reads raw neural signals, a second model adds linguistic/semantic structure. The v2 release reports ~61% overall word-level accuracy (up to ~78% for the best participant) and ~69% character-level accuracy, an ~8× improvement over the previous best non-invasive brain-to-text attempts and comparable to some invasive BCI methods that require electrode implants.

The model is positioned as assistive technology for people who have lost the ability to speak or type due to stroke, ALS, brain lesions, or paralysis, and as a non-invasive competitor to surgical BCIs like Neuralink. Meta has published the full training code for both v1 and v2. It remains a research system constrained by bulky/expensive MEG hardware rather than a consumer product. Concurrent Meta research includes TRIBE v2, a predictive foundation model trained on 500+ hours of fMRI data from 700+ people that produces a "digital twin" of neural responses to language/sights/sounds — together forming a broader neuro-AI program from FAIR's Brain & AI team.

## Timeline

- **2026-07-01-morning**: **Cycle-2 recoverage sharpens the training-data specifics + AlphaSignal reframes headline around the 78% best-participant word accuracy**. AlphaSignal MEDIUM subject-line "🧠 Meta Brain2Qwerty v2 hits 78% word accuracy, no surgery needed" + body ***"Brain2Qwerty v2 trained on 22,000 sentences, 9 volunteers, 10 hours each — full training code now public"*** + Superhuman MEDIUM ***"Meta has upgraded its brain-scanning model, Brain2Qwerty v2, which can analyze raw brain signals captured via a non-invasive scanner and decode sentences in real-time at 61% accuracy. This model is trained on roughly 22,000 sentences from 9 volunteers, each recorded for 10 hours"***. First publicly framed *concrete training-data volume (22K sentences)* + *concrete per-participant recording duration (10 hours × 9 volunteers)* in this wiki — sharpens the prior "MEG signals from 9 volunteers" framing into a specific *~660K sentence-participant-second dataset* (9 × 10 hours × 22K/10hrs). AlphaSignal's *78% word accuracy* headline framing lands as the cycle's canonical anchor — reframes the launch story around the *best-participant ceiling* rather than the 61% average, structurally significant because it positions v2 as *approaching invasive-BCI accuracy floors* at the top of the participant distribution. The "full training code now public" phrasing is fresh cycle-2 confirmation (v1 code was published earlier; the cycle-1 framing was ambiguous on whether both v1 + v2 code were released — this cycle-2 framing sharpens to *both fully public*). Daily-digest Top Story #1 anchors the story as ***"significant implications for people who cannot speak due to medical conditions, offering a potential means of communication"*** — first publicly framed *AI Newsletter Digest top-of-fold* placement of Brain2Qwerty v2, marking cross-cycle stickiness into the second daily cycle. Body-recovery items still open (from cycle-1): live-decoding latency, out-of-distribution vocabulary, portable-MEG timeline, FDA pathway — *source: data/summaries/2026-07-01-morning.json (AlphaSignal "🧠 Meta Brain2Qwerty v2 hits 78% word accuracy, no surgery needed" — Brain2Qwerty v2 trained on 22,000 sentences 9 volunteers 10 hours each full training code now public; Superhuman "🧠 Meta upgrades it brain-scanning model" — Brain2Qwerty v2 non-invasive scanner + 61% accuracy + 22,000 sentences from 9 volunteers each recorded for 10 hours; daily-digest Top Story #1 — Meta releases Brain2Qwerty v2 61% accuracy real-time)*

- **2026-06-30-evening**: **Created — Brain2Qwerty v2 anchors the cycle's "Meta reads your BRAIN 8× better without surgery" four-newsletter convergence** (Rundown AI HIGH "🧠 Meta's AI turns brain scans into typed sentences" + Evolving AI Insights HIGH "🧠 Meta reads your BRAIN 8× better without Surgery" + AINews "[AINews] not much happened today" + AI Supremacy/Anna's Daybreak supplementary surfaces). Concrete numbers in this cycle: ~61% overall word accuracy, ~78% for the best participant, ~69% character-level accuracy, ~8× improvement over prior non-invasive attempts, two-model two-stage architecture (signal-decoder + semantic-overlay), MEG-based input, training code published for both v1 and v2 for research reproducibility. Paired with **TRIBE v2** — Meta's MEG/fMRI predictive foundation model trained on 500+ hours of fMRI data from 700+ people, framed as a *"digital twin of neural activity"* that predicts brain responses to new sights/sounds/language. The two systems together stake out a Meta-FAIR *non-invasive neuro-AI* posture distinct from surgical BCI players (Neuralink) and the [[merge-labs]] Altman-BCI line, anchored on MEG/EEG-based decoding + brain-response prediction via foundation models. Industry-impact framing: assistive communication for paralysis/ALS/speech-impairment; competition with invasive BCIs; new privacy/consent/surveillance concerns about "thought decoding" if commercialized — *source: data/summaries/2026-06-30-evening.json (Rundown AI HIGH "🧠 Meta's brain-reading AI leaves letters behind"; Evolving AI Insights HIGH "🧠 Meta reads your BRAIN 8x better without Surgery" — 61% word accuracy + 8-fold improvement + training code released; AINews — Brain2Qwerty v2 ~61% word accuracy overall + 78% best participant; researchFindings.additionalContext — Brain2Qwerty v2 + TRIBE v2 / Basque Center collaboration + 69% character + 78% word + non-invasive MEG)*

## Key Facts

- Vendor: [[meta]] FAIR (Brain & AI team) with Basque Center for Cognition, Brain and Language
- Input: magnetoencephalography (MEG) — non-invasive neural recording
- Architecture: two-model two-stage decoder (signal reader + semantic overlay)
- Accuracy: ~61% word-level overall; ~78% best participant; ~69% character-level
- Training data: 22,000 sentences from 9 volunteers, 10 hours per participant (~660K total sentence-participant-seconds)
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

- data/summaries/2026-07-01-morning.json (AlphaSignal "🧠 Meta Brain2Qwerty v2 hits 78% word accuracy, no surgery needed" — 22K sentences × 9 volunteers × 10 hours + full training code public; Superhuman "🧠 Meta upgrades it brain-scanning model" — non-invasive scanner + 61% accuracy + 22K sentences × 9 volunteers × 10 hours; daily-digest Top Story #1)
- data/summaries/2026-06-30-evening.json (Rundown AI HIGH "🧠 Meta's brain-reading AI leaves letters behind"; Evolving AI Insights HIGH "🧠 Meta reads your BRAIN 8x better without Surgery"; AINews "[AINews] not much happened today"; researchFindings.additionalContext for Meta brain-reading AI — Brain2Qwerty v2 + TRIBE v2 + Basque Center collaboration)
