---
name: OpenAI Jalapeño
description: OpenAI's first custom AI inference chip — co-designed with Broadcom — targeting LLM inference workloads with better performance-per-watt and lower operating costs than current GPU-based systems; built from scratch in nine months (Jun 2026)
type: product
---

# OpenAI Jalapeño

> **Type**: product
> **Vendor**: [[openai]] (co-designed with [[broadcom]])
> **First mentioned**: 2026-06-25-morning
> **Last updated**: 2026-06-25-morning
> **Status**: unveiled
> **Related**: [[openai]], [[broadcom]], [[nvidia]], [[ai-hardware]], [[chatgpt]], [[google-tpu-v8]]

## Summary

OpenAI Jalapeño is OpenAI's first custom AI inference silicon, co-designed with [[broadcom]] and unveiled on 2026-06-25. Built from scratch in nine months, the chip targets large-language-model inference workloads (serving ChatGPT-class traffic) and is positioned to offer better performance-per-watt and lower operating costs than current GPU-based systems. The unveiling marks OpenAI's formal entry into custom silicon and a strategic step to reduce reliance on external GPU providers (chiefly [[nvidia]]), competing directly with NVIDIA's inference stack and [[google]]'s TPU line as well as paralleling Anthropic's hardware partnership posture.

The chip lands inside a broader full-stack platform play: OpenAI is now stacking its own inference silicon underneath ChatGPT/Codex while concurrently signing enterprise compute reservations ([[openai-guaranteed-capacity]]) and a custom-deployment subsidiary ([[openai-deployco]]) — a shift from buying GPU capacity to owning the inference path end-to-end. Multi-newsletter cycle-headline framing across AlphaSignal, AI Breakfast, tokens&, TAAFT, Mindstream, Uncovering AI, and Henry Farrell's Programmable Mutter confirms Jalapeño as the cycle's load-bearing top-of-fold story.

## Timeline

- **2026-06-25-morning**: **OpenAI unveils Jalapeño, its first custom AI inference chip, co-designed with [[broadcom]]** — built from scratch in nine months, optimized for LLM inference workloads (serving ChatGPT and similar), promising better performance-per-watt and lower operating costs than current state-of-the-art GPU-based systems. Cross-newsletter convergence (AlphaSignal HIGH + AI Breakfast HIGH + tokens& HIGH + TAAFT HIGH + Mindstream + Uncovering AI HIGH + Henry Farrell). TAAFT cycle-headline framing: "🦾 OpenAI Cooks Up Jalapeño". tokens& adds: "built from scratch in nine months ... competing directly with Nvidia and Google in the semiconductor space." First publicly framed *OpenAI-owned inference silicon* in this wiki — completes the silicon-diversification posture of every frontier lab (Anthropic+Micron Series H, Google TPU v8, Amazon Trainium 3, Anthropic+AWS Trainium, now OpenAI+Broadcom Jalapeño) — *source: data/summaries/2026-06-25-morning.json (AlphaSignal HIGH; AI Breakfast HIGH; tokens& HIGH; TAAFT HIGH "🦾 OpenAI Cooks Up Jalapeño"; Mindstream; Uncovering AI HIGH; Henry Farrell)*

## Key Facts

- Vendor: [[openai]]
- Co-designer / silicon partner: [[broadcom]]
- Target workload: LLM inference (serving ChatGPT and similar workloads)
- Build time: from scratch in nine months
- Positioning claim: better performance-per-watt + lower operating costs than current GPU-based systems
- Strategic intent: reduce reliance on external GPU providers ([[nvidia]] in particular)
- Part of broader "full-stack platform" thesis for OpenAI (silicon → infrastructure → models → ChatGPT/Codex layer)

## Open Questions

- Per-chip performance numbers (FLOPS, tokens/sec, memory bandwidth) — none disclosed at unveil
- Whether Jalapeño targets training as well as inference, or inference-only at launch
- Production timeline and which OpenAI workloads it serves first (ChatGPT? Codex? both?)
- Whether Jalapeño will be made available to OpenAI's [[openai-deployco]] enterprise customers
- How Jalapeño's per-watt economics compare to Google's [[google-tpu-v8]] and Amazon's Trainium 3

## Sources

- data/summaries/2026-06-25-morning.json (AlphaSignal HIGH — OpenAI unveils Jalapeño, its first custom AI inference chip, co-designed with Broadcom / better performance-per-watt and lower operating costs / major step in OpenAI's strategy to build a full-stack platform; AI Breakfast HIGH; tokens& HIGH — built from scratch in nine months / competing directly with Nvidia and Google; TAAFT HIGH "🦾 OpenAI Cooks Up Jalapeño"; Mindstream; Uncovering AI HIGH; Henry Farrell)
