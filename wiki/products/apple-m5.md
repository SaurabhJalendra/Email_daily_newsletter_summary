---
name: Apple M-series (M5, M5 Ultra, M6)
description: Apple's M-series silicon — M5 (Oct 2025), M5 Ultra + M6 (Aug 2026); on-device AI acceleration for MacBook Pro/iPad Pro/Vision Pro (M5) and Mac mini/Mac Studio (M6, M5 Ultra)
type: product
---

# Apple M5 / M5 Ultra / M6

> **Type**: product
> **First mentioned**: 2025-10-16
> **Last updated**: 2026-10-28-evening (**M6 chip ships in the 14-inch MacBook Pro (from $1,999) and iMac (from $1,499 base / $1,699 higher-tier) at Apple's "Pro and Tell" event — concrete silicon specs: 12-core CPU + 12-core GPU + **dual 16-core Neural Engine** (2× previous-gen peak AI performance) + 170 GB/s memory bandwidth + per-GPU-core neural accelerators + Wi-Fi 7 + Bluetooth 6 + up to 32GB unified memory + 4TB storage + 24h battery life; preorders Oct 28, ship Nov 6 2026; Apple-claimed ~25% faster on-device AI workloads (incl. LLM prompt processing) vs M5 + 30% faster graphics; iMac tier claims up to 5× on-device AI vs M4 iMac + 12× vs M1 iMac on prompt-processing; base iMac uses reduced 10-core CPU/GPU design. First-in-wiki *concrete-dual-16-core-Neural-Engine twin-NPU canonical anchor* on Apple-Silicon substrate (sharpens the 08-26-evening framing of "twin Neural Engines with 16 cores each" into *concrete-dual-NPU-in-mainstream-laptop canonical anchor tier*); + *concrete Nov-6-2026-ship + concrete-$1,999-start pricing canonical anchor pair* resolves the 10-20-evening M5-Pro/Max-vs-M6-Pro/Max chip-configuration-conflict open question into *concrete base-M6-shipping-first canonical answer tier*. Positions M6 MacBook Pro + iMac as *canonical late-Oct-2026 concrete-mainstream-dual-NPU + concrete-170GB/s-unified-memory + concrete-privacy-sensitive-on-device-AI substrate operator*; "advertised gains are vendor benchmarks rather than independent testing" + "largely unchanged externally — chip and AI acceleration are the main upgrade" captured as cycle-marker caveats. See [[apple]] this cycle + [[afm-3-core-advanced]] + [[siri-ai]] + [[nvidia]] — *source: data/summaries/2026-10-28-evening.json (TLDR MEDIUM; researchFindings.additionalContext — M6 MacBook Pro + Apple M6 chip + iMac)*)
> **Previously updated**: 2026-08-26-evening (**Apple ships **M6** (first 2nm chip in M-series, 12 CPU + 12 GPU cores, twin Neural Engines with 16 cores each = 2× peak compute vs prior gen, workloads up to 4× faster) and **M5 Ultra** (Apple's most powerful chip) in refreshed Mac mini + Mac Studio positioned as "leading desktop for always-on agentic computing"** — TLDR MEDIUM + Evolving AI Insights MEDIUM + The Rundown AI HIGH cross-newsletter saturation. Unified memory architecture + fast SoC CPUs/GPUs continue positioning Apple silicon as *canonical local-AI-inference substrate* alongside [[nvidia]] DGX Spark consumer-tier. See [[apple]] + [[ai-hardware]] — *source: data/summaries/2026-08-26-evening.json (TLDR MEDIUM "OpenAI unveils chip ⚡"; Evolving AI Insights MEDIUM "🍎 Apple's Cheapest AI Mac Just DROPPED"; The Rundown AI HIGH)*)
> **Previously updated**: 2025-10-17
> **Status**: active
> **Related**: [[apple]], [[ai-hardware]], [[nvidia]], [[amd]]

## Summary

The Apple M5 is Apple's next-generation system-on-chip, launched in October 2025 for MacBook Pro, iPad Pro, and Vision Pro. Its headline pitch is on-device AI: dedicated Neural Accelerators in each GPU core, a refreshed 16-core Neural Engine, and 153 GB/s memory bandwidth sized for running larger models entirely offline. Apple positions M5 as its entry into the AI-compute race against [[nvidia]], [[amd]], and Intel — on a per-device, on-device basis rather than datacenter.

## Timeline

- **2026-10-28-evening**: **M6 ships in refreshed 14-inch MacBook Pro ($1,999 start) + iMac ($1,499/$1,699 two-tier)** at Apple's "Pro and Tell" event (Oct 27 2026 announcement). Concrete silicon anchors: 12-core CPU + 12-core GPU + **dual 16-core Neural Engine** (2× previous-gen peak AI performance) + 170 GB/s memory bandwidth + per-GPU-core neural accelerators + Wi-Fi 7 + Bluetooth 6 + up to 32GB unified memory + 4TB storage + 24-hour battery life + preorders Oct 28 + ship Nov 6 + Apple-claimed ~25% faster on-device AI vs M5 (incl. LLM prompt processing) + 30% faster graphics; iMac claims up to 5× M4-iMac on-device AI performance + 12× M1-iMac on prompt-processing; base iMac uses 10-core CPU/GPU design. "Local inference" positioning as more capable Apple-Intelligence + local-LLM + privacy-sensitive AI platform. See [[apple]] — *source: data/summaries/2026-10-28-evening.json (TLDR MEDIUM "M6 MacBook Pro 💻, Amazon anti-tokenmaxxing 📉, advice for junior SWEs 👨‍💻"; researchFindings.additionalContext — M6 MacBook Pro + Apple M6 chip + iMac)*

- **2026-08-26-evening**: **M6 (first 2nm chip in Apple's M-series; 12 CPU cores + 12 GPU cores; twin Neural Engines with 16 cores each = 2× peak Neural Engine compute vs prior gen; workloads up to 4× faster) + M5 Ultra ("Apple's most powerful chip") ship in refreshed Mac mini + Mac Studio positioned as "leading desktop for always-on agentic computing"** — extends unified-memory + local-AI-inference thesis into agentic-compute-tier positioning. See [[apple]] — *source: data/summaries/2026-08-26-evening.json (TLDR MEDIUM "OpenAI unveils chip ⚡"; Evolving AI Insights MEDIUM "🍎 Apple's Cheapest AI Mac Just DROPPED"; The Rundown AI HIGH)*

- **2025-10-17**: M5 unveiled — 4× GPU compute for AI vs M4; per-core Neural Accelerators; 16-core Neural Engine; 153 GB/s memory bandwidth — *source: Matt from FutureTools "Apple Unveils M5 Chip"*
- **2025-10-16**: M5 MacBook Pro coverage — *source: TLDR "M5 MacBook Pro"*

## Key Facts

- Vendor: [[apple]]
- Devices at launch: MacBook Pro, iPad Pro, Vision Pro
- AI features: per-GPU-core Neural Accelerators; 16-core Neural Engine
- Memory bandwidth: 153 GB/s (enables larger on-device models)
- Claimed delta: 4× GPU compute over M4 for AI tasks

## Open Questions

- Real-world benchmarks for on-device LLM inference vs competing silicon?
- Which foundation-model sizes fit comfortably in M5 memory on a MacBook Pro?

## Sources

- data/summaries/2025-10-16.json (TLDR — M5 MacBook Pro)
- data/summaries/2025-10-17.json (Matt from FutureTools — Apple Unveils M5 Chip)
