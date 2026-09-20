---
name: Helix 2.5
description: Figure's Sep 2026 humanoid control model — pretrained on a crowdsourced human-video dataset and shown zero-shot across 30 unseen homes for household tasks like tidying rooms and folding towels
type: product
---

# Helix 2.5

> **Type**: product
> **Vendor**: [[figure]]
> **First mentioned**: 2026-09-19-morning
> **Last updated**: 2026-09-20-morning (**Superhuman MEDIUM canonicalizes concrete 56% zero-shot success rate on 30 unfamiliar Bay Area homes + explicitly names "Index" dataset as the pretraining substrate + tasks now specified as tidying living rooms + folding towels + making beds three-task-cluster + pretraining lifts success rate from 9% (from-scratch training) to 56% first-in-wiki twin-metric benchmark canonical anchor cluster**. Superhuman MEDIUM: *"Figure AI has introduced its new Helix 2.5 model, which enables its humanoid robots to perform zero-shot chores in 30 unfamiliar homes with a 56% success rate, demonstrating significant progress in embodied AI and whole-body intelligence for robots"* + *"The Helix 2.5 model was pretrained on Figure's 'Index' dataset of human behavior and shows improved performance in real-world tasks such as tidying living rooms, folding towels, and making beds"* + researchFindings.additionalContext: *"a jump in success on real-world tasks like tidying living rooms, folding towels, and making beds from 9% (training from scratch) to **56%** with Index pretraining"*. First-in-wiki: (a) **56% zero-shot success rate on 30 unfamiliar homes concrete-metric canonical anchor** (sharpens 09-19 anchor which lacked numbers); (b) **"Index" dataset canonical named-pretraining-substrate anchor** — Figure's named training dataset promoted from *unnamed crowdsourced-human-video-dataset* (09-19 framing) to *concrete-Index-named-dataset canonical anchor*; (c) **9% → 56% pretraining-uplift concrete-multiplier canonical anchor** — first-in-wiki *concrete ablation-tier pretraining-vs-from-scratch benchmark on a humanoid VLA model*; (d) **Tidying-living-rooms + folding-towels + making-beds concrete three-task-cluster canonical anchor** — sharpens 09-19 anchor which named tidying + towel-folding (adds making-beds). See [[figure]] + [[humanoid-robotics]] — *source: data/summaries/2026-09-20-morning.json (Superhuman MEDIUM "🚑 Robots now have their own 'ambulance' services")*)
> **Status**: unveiled (Sep 2026 — 56% zero-shot household-task success across 30 unseen homes)
> **Related**: [[figure]], [[humanoid-robotics]], [[world-action-models]], [[skild-s1]], [[gen-1-5]], [[odyssey-3]], [[isaac-groot]]

## Summary

Helix 2.5 is [[figure]]'s next-generation humanoid control model. It is pretrained on a crowdsourced human-video dataset (the successor to Figure's Aug-2026 16-million-video / 108-country training set) and demonstrated **zero-shot** in 30 unseen homes on household tasks such as tidying rooms and folding towels. The model advances the multi-cycle Figure Helix arc from Helix-02 (May 2026 factory-package-sorting) into a *domestic-cross-environment tier* substrate.

Positioning: Helix 2.5 pairs with other Sep-2026 cross-embodiment world-models ([[odyssey-3]] universal robot brain, [[gen-1-5]] one-shot manipulation, [[skild-s1]] in-context 10-minute tasks) as the Figure-side entrant in the *humanoid-generalization tier* substrate that Citrini's Sep-2026 "Robotics Tipping Point" essay canonicalized as the mid-2026 humanoid inflection.

## Timeline

- **2026-09-20-morning**: **56% zero-shot success on 30 unfamiliar Bay Area homes + "Index" pretraining dataset name + 9%→56% pretraining ablation + three-task-cluster (tidying living rooms + folding towels + making beds) canonical anchor cluster**. Superhuman MEDIUM: *"Figure AI has introduced its new Helix 2.5 model, which enables its humanoid robots to perform zero-shot chores in 30 unfamiliar homes with a 56% success rate"* + *"The Helix 2.5 model was pretrained on Figure's 'Index' dataset of human behavior"* + researchFindings.additionalContext: *"a jump in success on real-world tasks like tidying living rooms, folding towels, and making beds from 9% (training from scratch) to 56% with Index pretraining"* — *source: data/summaries/2026-09-20-morning.json (Superhuman MEDIUM "🚑 Robots now have their own 'ambulance' services")*

- **2026-09-19-morning**: **Helix 2.5 canonical anchor — Figure's humanoid control model, pretrained on a crowdsourced human-video dataset, tested zero-shot across 30 unseen homes**, performing tasks such as tidying rooms and folding towels. TLDR AI MEDIUM: *"Helix 2.5 is a humanoid control model that has been pretrained on a dataset and tested zero-shot across 30 homes, performing tasks such as tidying rooms and folding towels."* TLDR Hardware MEDIUM: *"Figure's Helix 2.5, a robot, was able to perform tasks in 30 unseen homes without fine-tuning, demonstrating the effectiveness of pretraining on a crowdsourced human video dataset."* — *source: data/summaries/2026-09-19-morning.json (TLDR AI MEDIUM "Claude Projects v2 💼, Google family agent 👨‍👩‍👧‍👦"; TLDR Hardware MEDIUM "SK Hynix goes to the US 🇺🇸, Figure walks into homes 🏠, Run models on SSDs 💾")*

## Key Facts

- Vendor: [[figure]] (US humanoid-robotics vendor)
- Predecessors: Helix-02 (May 2026 factory package-sorting + 200-hour endurance benchmark)
- Training substrate: **"Index" dataset** of human behavior (crowdsourced human video; extends Figure's Aug-2026 16M-video / 108-country training set)
- Zero-shot generalization: **56% success rate across 30 unfamiliar Bay Area homes** (no fine-tuning)
- Pretraining uplift: **9% (from-scratch) → 56% with Index pretraining**
- Demonstrated task classes: tidying living rooms + folding towels + making beds (domestic-household chore substrate)
- Compute context: pairs with Figure's Sep-2026 $3.5B NVIDIA compute deal for up to 100K Vera Rubin GPUs to train Helix humanoid AI models

## Open Questions

- Task-success-rate metrics on the 30-home zero-shot benchmark (no numbers disclosed)
- Whether Helix 2.5 ships in a specific Figure product tier (Figure 03? Figure 04?)
- Public release / customer availability timeline
- Comparison with [[odyssey-3]] cross-embodiment world-model on identical benchmarks
- Latency / control-loop rate for real-time in-home manipulation

## Sources

- data/summaries/2026-09-19-morning.json (TLDR AI MEDIUM "Claude Projects v2 💼, Google family agent 👨‍👩‍👧‍👦"; TLDR Hardware MEDIUM "SK Hynix goes to the US 🇺🇸, Figure walks into homes 🏠, Run models on SSDs 💾")
- data/summaries/2026-09-20-morning.json (Superhuman MEDIUM "🚑 Robots now have their own 'ambulance' services" — 56% success rate + Index dataset + 9%→56% pretraining ablation)
