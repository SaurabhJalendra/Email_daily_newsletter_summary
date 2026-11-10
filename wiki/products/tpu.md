---
name: Google Tensor Processing Unit (TPU)
description: Google-designed AI accelerator optimized for matrix/tensor operations in machine-learning training and inference; 8th-generation TPU 8t (training) and TPU 8i (inference) coming to Oracle Cloud Infrastructure in 2027
type: product
---

# Google Tensor Processing Unit (TPU)

> **Type**: product
> **Vendor**: [[google]]
> **First mentioned**: 2026-10-29-morning
> **Last updated**: 2026-11-10-evening (**TPU 8tx + 8i Max new-variant-SKU pair canonical concrete-escalation anchor — "Google escalates its rivalry with Nvidia by rolling out two new variations of its Tensor Processing Units (TPUs), the 8tx and 8i Max, aimed at handling secure and confidential work, as well as running AI applications that require long-context windows" canonical daily-digest Top Story #3**. TLDR HIGH Top Story #3 + Notable Link Bloomberg "Google Escalates Nvidia Rivalry With Specialized Versions of AI Chips". First-in-wiki: (a) **TPU 8tx + TPU 8i Max canonical two-SKU specialized-variant anchor pair** — sharpens the 10-29-morning TPU-8t (training) + TPU-8i (inference) 8th-generation canonical two-SKU anchor pair with a *concrete four-SKU 8th-generation family anchor tier (8t + 8i + 8tx + 8i Max)* — productizes early-Nov-2026 as *canonical concrete-first-moment-Google-TPU-8th-generation-family-expands-to-four-SKU substrate operator*; (b) **Secure-and-confidential-work canonical first-SKU-targeted-at-confidential-compute canonical anchor** — first-in-wiki *concrete confidential-compute TPU-SKU canonical anchor on Google-silicon substrate*; (c) **Long-context-AI-applications canonical first-SKU-targeted-at-long-context-workload canonical anchor** — pairs cycle-structurally with 11-09-morning [[context-compaction]] NVIDIA-method-tier canonical anchor as *canonical early-Nov-2026 twin-vendor long-context-AI-substrate canonical anchor pair — NVIDIA-method-tier + Google-SKU-tier*; (d) **"Escalates its rivalry with Nvidia" Bloomberg-tier concrete-named-TPU-vs-GPU-rivalry-escalation canonical anchor** — productizes early-Nov-2026 as *canonical concrete-first-moment-Bloomberg-tier-publicly-frames-Google-TPU-expansion-as-NVIDIA-rivalry-escalation substrate operator*. See [[google]] this cycle + [[nvidia]] this cycle + [[context-compaction]] + [[oracle]] + [[ai-hardware]] — *source: data/summaries/2026-11-10-evening.json (TLDR HIGH "Fable 5.2 🤖, Anthropic IPO next week 💰, Storybook 11 👨‍💻"; daily-digest Top Story #3; Notable Link Bloomberg)*)
> **Previously updated**: 2026-10-29-morning
> **Status**: active
> **Related**: [[google]], [[oracle]], [[nvidia]], [[ai-hardware]]

## Summary

The Google Tensor Processing Unit (TPU) is Google's purpose-built AI accelerator, designed for the matrix and tensor operations that dominate ML training and inference. TPUs give cloud customers an alternative to general-purpose GPUs for supported workloads, with specialized performance and efficiency characteristics. The 8th-generation generation ships as **TPU 8t** (training) and **TPU 8i** (inference); the training variant is reported at up to **12.6 PFLOPS of FP4 per chip** and up to **2× performance-per-watt** vs the prior generation.

The most consequential 2026 development is Google and [[oracle]]'s October 27 2026 announcement that Oracle Cloud Infrastructure (OCI) will deploy Google TPUs starting in 2027 — the first hyperscale cloud outside Google to offer TPUs. Capacity ramps over several years, reportedly toward gigawatt scale, with Oracle providing data-center power, cooling, and networking (OCI's liquid-cooled DCs + Acceleron SmartNIC fabric). The deal expands enterprise access to Google's AI silicon beyond Google Cloud and increases competitive pressure on [[nvidia]] GPUs by giving customers more hardware/platform choice.

## Timeline

- **2026-10-29-morning**: **Oracle Cloud Infrastructure to deploy Google 8th-gen TPUs starting 2027 — concrete-first-non-Google-hyperscaler-with-TPUs canonical anchor + concrete TPU 8t (training) + TPU 8i (inference) 8th-generation two-SKU canonical anchor pair + concrete 12.6 PFLOPS FP4 per chip + 2× perf/watt + Acceleron SmartNIC fabric + liquid-cooled DC concrete deployment anchor cluster**. TLDR Hardware MEDIUM: *"Google's eighth-generation TPU systems will be used in the initial rollout, offering up to 12.6 PFLOPS of FP4 per chip at up to 2x performance per watt. The TPU systems will be integrated with Oracle's Acceleron SmartNIC fabric and deployed in OCI's liquid-cooled data centers."* researchFindings.additionalContext canonicalizes: *"the latest development is Google and Oracle's announcement that Google's eighth-generation TPUs—TPU 8t for training and TPU 8i for inference—will become available through Oracle Cloud Infrastructure in 2027"* + Oracle supplies power/cooling/networking + capacity ramps over several years, reportedly toward gigawatt scale. Daily-digest Top Story #1. First-in-wiki *concrete-named-TPU-8t + TPU-8i two-SKU 8th-generation canonical anchor pair + concrete 12.6 PFLOPS FP4 + 2× perf/watt canonical specification anchor cluster + concrete-first-non-Google-hyperscaler-TPU-access canonical anchor* on TPU substrate. Pairs cycle-structurally with 10-21-evening Google TorchTPU PyTorch-on-TPU canonical productization anchor as *canonical late-Oct-2026 Google-TPU twin-anchor cluster — concrete-dev-ergonomics-tier (TorchTPU) + concrete-distribution-tier-via-rival-hyperscaler (Oracle)*. See [[oracle]] this cycle + [[google]] this cycle + [[nvidia]] — *source: data/summaries/2026-10-29-morning.json (TLDR Hardware MEDIUM "Oracle adopts TPUs ☁️, megawatt orbital datacenters 🛰️, Intel acquires Classiq ⚛️"; TLDR AI MEDIUM; researchFindings.additionalContext — Oracle + Google + TPU; daily-digest Top Story #1)*

## Key Facts

- **Vendor**: [[google]] (Google DeepMind-adjacent silicon team)
- **Workload**: ML training + inference (matrix/tensor-op specialized)
- **8th-generation lineup**: TPU 8t (training) + TPU 8i (inference)
- **Peak compute**: up to 12.6 PFLOPS FP4 per chip (training variant)
- **Perf/watt**: up to 2× the prior generation
- **Cooling**: direct liquid cooling for high-density AI racks
- **New distribution surface (Oct 2026)**: Oracle Cloud Infrastructure (OCI) starting 2027 — first hyperscale cloud outside Google to offer TPUs
- **Integration path at OCI**: Oracle Acceleron SmartNIC fabric + OCI liquid-cooled data centers
- **PyTorch support**: TorchTPU (Google-authored, open-source — Oct 2026) lowers migration cost from GPU/CUDA/PyTorch workloads

## Open Questions

- Exact FP4/FP8/BF16 performance breakdown for TPU 8t vs TPU 8i
- Pricing on OCI vs Google Cloud TPU pricing
- Whether additional hyperscalers (AWS, Azure) negotiate similar deals
- Chip-count and MW/GW capacity committed in the OCI deal
- Impact on NVIDIA GPU demand in hyperscaler data centers

## Sources

- data/summaries/2026-10-29-morning.json (TLDR Hardware MEDIUM "Oracle adopts TPUs ☁️, megawatt orbital datacenters 🛰️, Intel acquires Classiq ⚛️"; TLDR AI MEDIUM "Genie 4 worlds 🌍, Frontier Code 2 👨‍💻, AI drug discovery 🧬"; researchFindings.additionalContext — Oracle, Google TPU, Google; daily-digest Top Story #1)
