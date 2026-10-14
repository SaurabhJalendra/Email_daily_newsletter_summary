---
name: World Action Models
description: NVIDIA's Aug 2026 model family for robot manipulation — generalizes beyond training scenes; part of NVIDIA's physical-AI stack
type: product
---

# World Action Models

> **Type**: product
> **Vendor**: [[nvidia]]
> **First mentioned**: 2026-08-07-evening
> **Last updated**: 2026-10-14-morning (**Cycle-N+X Dyna-2 canonicalizes WAM product-category as a cross-vendor substrate — Dyna Robotics's [[dyna-2]] formally classified as a "World-Action Model" (WAM) per Latent.Space podcast with Chief Scientist Jason Ma, pretrained on 1M+ hours of egocentric human video, achieving hour-long whole-body autonomy when combined with the Dyna agentic system + shipped in [[dyna-2-1]] semi-humanoid system**. Latent.Space MEDIUM via researchFindings.additionalContext: *"Dyna-2 is Dyna Robotics' World-Action Model (WAM), a general-purpose physical-agent model ... designed to predict how actions change the physical world before a robot acts, connecting visual understanding with contact physics and manipulation"*. First-in-wiki: (a) **WAM as cross-vendor model-class canonical anchor** — graduates "World Action Models" from *NVIDIA-single-vendor named-SKU tier* into *concrete cross-vendor model-class canonical anchor tier* with NVIDIA + Dyna Robotics as two vendors shipping WAMs on different substrates (NVIDIA WAMs for robot-manipulation scene-generalization + Dyna-2 WAM for hour-long general-purpose physical-agent workflows); (b) **"Predict how actions change the physical world before a robot acts, connecting visual understanding with contact physics and manipulation" canonical architectural definition** — first-in-wiki *concrete architectural-definition canonical anchor* on WAM substrate (likely durable reference-anchor for future world-action-model architectural discussion). See [[dyna-2]] + [[dyna-robotics]] + [[dyna-2-1]] + [[humanoid-robotics]] + [[industrial-robotics]] — *source: data/summaries/2026-10-14-morning.json (Latent.Space MEDIUM "Dyna-2: General Purpose Physical Agents with Hour-Long Autonomy — Jason Ma, Dyna Robotics"; researchFindings.additionalContext for Dyna-2)*)
> **Previously updated**: 2026-08-07-evening (**Released — NVIDIA ships World Action Models for robot manipulation with generalization beyond training scenes, alongside a broader August-2026 developer-newsletter release wave (Alpamayo 2 Super + Vera Storage Benchmarks + Video Codec SDK 13.1 + nvmath-python + NeMo Guardrails + Ising + Nemotron 3 Ultra RTL + ModelExpress)**. NVIDIA Developer Relations MEDIUM ***"Your Personalized Developer News from NVIDIA"***: *"World Action Models for robot manipulation, which can generalize beyond training scenes"*. Daily-digest Top Story #3: *"NVIDIA releases several new tools and technologies, including World Action Models, NVIDIA Alpamayo 2 Super, and NVIDIA Vera Storage Benchmarks, to advance AI development and deployment"* + *"These releases matter because they provide developers with more advanced and efficient tools to work with AI, potentially leading to breakthroughs in areas like robotics, autonomous vehicles, and data storage"*. First publicly framed in this wiki. Structurally significant: (a) *"generalize beyond training scenes"* framing productizes cross-scene robot-manipulation generalization as a first-class NVIDIA capability claim; (b) sits alongside [[isaac-groot]] humanoid + [[alpamayo]] autonomous-vehicle + [[gemini-robotics-2]] whole-body-control as another entrant in the *physical-AI foundation-model family* under NVIDIA's stack; (c) extends the [[nvidia-cosmos]] physical-AI arc from scene-generation into *actionable robot-control* tier. See [[nvidia]] + [[nvidia-cosmos]] + [[isaac-groot]] + [[alpamayo]] + [[world-models]] + [[humanoid-robotics]] — *source: data/summaries/2026-08-07-evening.json (NVIDIA Developer Relations MEDIUM "Your Personalized Developer News from NVIDIA"; daily-digest Top Story #3)*)
> **Status**: launched
> **Related**: [[nvidia]], [[nvidia-cosmos]], [[isaac-groot]], [[alpamayo]], [[world-models]], [[humanoid-robotics]], [[gemini-robotics-2]]

## Summary

World Action Models are [[nvidia]]'s August 2026 model family for **robot manipulation with generalization beyond training scenes** — sitting inside NVIDIA's broader physical-AI stack alongside [[isaac-groot]] (humanoid), [[alpamayo]] (autonomous vehicles), and [[nvidia-cosmos]] (physical-AI foundation models). The headline capability, per NVIDIA Developer Relations, is that the models generalize to novel manipulation scenes not seen during training, extending the physical-AI arc from scene-generation into actionable robot-control.

The release surfaces as one of a broad August 2026 NVIDIA developer newsletter announcement wave that also included Alpamayo 2 Super, Vera Storage Benchmarks, Video Codec SDK 13.1, nvmath-python, NeMo Guardrails self-hosted validated coding-assistants, Ising quantum-computer-calibration, Nemotron 3 Ultra (agentic RTL coding), and ModelExpress model-artifact distribution.

## Timeline

- **2026-08-07-evening**: **Released — NVIDIA World Action Models for robot manipulation with generalization beyond training scenes**. NVIDIA Developer Relations MEDIUM + daily-digest Top Story #3. First publicly framed in this wiki — *source: data/summaries/2026-08-07-evening.json (NVIDIA Developer Relations MEDIUM "Your Personalized Developer News from NVIDIA"; daily-digest Top Story #3)*

## Key Facts

- Vendor: [[nvidia]]
- Domain: robot manipulation
- Headline capability: generalizes beyond training scenes
- Sibling products in NVIDIA physical-AI stack: [[isaac-groot]] humanoid + [[alpamayo]] AV + [[nvidia-cosmos]] scene-generation
- Release cohort: shipped alongside Alpamayo 2 Super + Vera Storage Benchmarks + Video Codec SDK 13.1 + Nemotron 3 Ultra RTL + Ising + ModelExpress

## Open Questions

- Model size and architecture (transformer, diffusion policy, VLA?)
- Training substrate — Isaac Sim, Isaac Lab, or real-robot rollouts?
- License (open-weights, research-only, commercial gated)?
- Which humanoid + robot-arm platforms have committed to World Action Models?
- Concrete generalization benchmarks vs Google Gemini Robotics 2 or Physical Intelligence π-tier VLAs?

## Sources

- data/summaries/2026-08-07-evening.json (NVIDIA Developer Relations MEDIUM "Your Personalized Developer News from NVIDIA" — World Action Models for robot manipulation which can generalize beyond training scenes; daily-digest Top Story #3 — NVIDIA releases World Action Models + Alpamayo 2 Super + Vera Storage Benchmarks)
