---
name: Vera Rubin
description: NVIDIA's next-generation AI computing platform — 5x faster inference, 3.5x faster training vs Blackwell
type: product
---

# Vera Rubin

> **Type**: product
> **First mentioned**: 2025-11-20
> **Last updated**: 2026-07-27-evening (**Vera Rubin platform GA-tier launch — 144 GPUs per rack scale-up ceiling + Dell + Supermicro "AI factory" preconfigured OEM bundles + paired same-cycle with Nvidia $250B backstop for [[openai]]'s 10-gigawatt Softbank-developed data-center project (implicitly Rubin-anchored per web-search context)**. TLDR MEDIUM: ***"Nvidia has launched its Vera Rubin platform, a combined CPU-GPU architecture designed to converge AI and high-performance computing for large-scale scientific and enterprise workloads. The platform can scale up to 144 GPUs per rack and is being bundled into preconfigured 'AI factory' solutions"***. researchFindings.additionalContext: *"Launched with partners like Dell and Supermicro, Vera Rubin-based servers can scale up to 144 GPUs per rack and are being bundled into preconfigured 'AI factory' solutions that include server, storage, networking, and software infrastructure for turnkey AI deployments"* + *"Nvidia is backing plans for a massive 10-gigawatt data center campus in southern Ohio, a project expected to cost at least $500 billion and form the core of OpenAI's next-generation AI infrastructure"* + *"large cost-per-token reductions for AI inference when pairing its latest Blackwell GPUs with open-source models from multiple providers"*. The Rundown AI MEDIUM canonical framing: *"Nvidia has introduced Vera Rubin, a combined CPU-GPU architecture designed to converge AI and high-performance computing (HPC) for large-scale scientific and enterprise workloads"*. First publicly framed on this cycle: (a) *144-GPUs-per-rack scale-up ceiling* — first concrete rack-GPU-density anchor on Vera Rubin racks; (b) *Dell + Supermicro AI-factory OEM bundle partners* — first publicly framed *named-OEM turnkey-bundle-partner cohort* on Vera Rubin (extends prior generic "AI factory" marketing); (c) *Nvidia $250B backstop for OpenAI 10GW Softbank project* — first publicly framed *concrete Nvidia-tier debt-backstop dollar-anchor* on OpenAI's next-gen Rubin-anchored campus; (d) *"turnkey deployment"* server/storage/networking/software full-stack bundling as canonical AI-factory-tier product surface. Structurally significant three ways: (i) **AI-factory OEM-bundle motion productizes turnkey rack-scale deployment** — extends Vera Rubin from generational-GPU-upgrade into *pre-integrated-OEM-tier deployment abstraction* competing with [[amd-helios]] rack-scale bundling; (ii) **144-GPU rack-density anchors Vera Rubin above prior Nvidia-generation rack-scale-outs** — GB300 NVL72 anchored at 72 GPUs/rack; Vera Rubin's 144 = 2× density anchor; positions Vera Rubin as *density-canonical Nvidia rack platform* for the Rubin-generation; (iii) **Nvidia $250B backstop pairing** — Vera-Rubin-GA-launch paired with the OpenAI-$250B-backstop reads as *twin Nvidia motion on product-tier (Vera Rubin GA) + capital-tier ($250B backstop for OpenAI Rubin-anchored campus)* simultaneity. See [[nvidia]] (updated) + [[openai]] (updated) + [[amd-helios]] — *source: data/summaries/2026-07-27-evening.json (TLDR MEDIUM "Nvidia's $250B OpenAI deal 💰, Meta Seller 🤝, Google Maps travel time API"; The Rundown AI MEDIUM "🧠 Anthropic's No. 2 stopped acting like it"; researchFindings.additionalContext — Nvidia)*)
> **Previously updated**: 2026-07-24-evening
> **Status**: active
> **Related**: [[nvidia]], [[groq]], [[jonathan-ross]], [[anthropic]], [[meta]], [[openai]], [[amd-helios]], [[ai-hardware]]

## Summary

Vera Rubin is [[nvidia]]'s next-generation AI chip/system architecture, succeeding Grace Blackwell. First discussed in late 2025 alongside Anthropic's $10B compute commitment, it entered production in January 2026 with CES 2026 unveilings. Per NVIDIA's CES 2026 marketing, Rubin delivers up to 5× inference performance over Blackwell with a 3.5× training speedup and roughly 10× cost improvement on a per-token basis. Initial deployments include [[anthropic]]'s 1 GW commitment (announced November 2025) and [[meta]]'s $21B CoreWeave deal, with early Rubin GPUs deploying inside that footprint by April 2026.

## Timeline

- **2026-07-27-evening**: **Vera Rubin platform GA-tier launch — 144 GPUs per rack + Dell + Supermicro AI-factory preconfigured bundles + paired same-cycle with Nvidia $250B backstop for [[openai]]'s 10GW Softbank-developed data-center campus (Rubin-anchored per web-search context)**. TLDR MEDIUM + The Rundown AI MEDIUM twin lead-story anchors. Extends Vera Rubin from generational-GPU-upgrade into *turnkey OEM-integrated deployment surface* competing with [[amd-helios]] rack-scale bundling. See [[nvidia]] + [[openai]] + [[amd-helios]] — *source: data/summaries/2026-07-27-evening.json (TLDR MEDIUM "Nvidia's $250B OpenAI deal 💰"; The Rundown AI MEDIUM "🧠 Anthropic's No. 2 stopped acting like it"; researchFindings.additionalContext — Nvidia)*

- **2026-07-24-evening**: **Vera Rubin reconfirmed as canonical CPU+GPU platform for large-scale AI + scientific computing in NVIDIA-direct retrospective newsletter** — NVIDIA Developer Relations MEDIUM *"Your Personalized Developer News from NVIDIA"* frames Vera Rubin as *"CPU+GPU platform for large-scale AI and scientific computing... designed to converge high-performance computing (HPC) and AI, giving enterprises and research institutions a standardized way to deploy very large models and AI clusters"* + reconfirms the Groq 3 LPX multi-chip-supercomputer integration at *"racks of heterogeneous chips as one big supercomputer"* deployment-tier framing. First publicly framed on this cycle: (a) *HPC+AI convergence-canonical* positioning for Vera Rubin (extends the 2026-01 CES *"5× inference over Blackwell"* framing with an *HPC-plus-AI convergence* enterprise-adoption narrative); (b) *"standardized way to deploy very large models and AI clusters"* enterprise-canonical framing. Recap-tier signal — no new product announcement — *source: data/summaries/2026-07-24-evening.json (NVIDIA Developer Relations MEDIUM "Your Personalized Developer News from NVIDIA"; researchFindings.additionalContext — NVIDIA)*
- **2026-07-15-morning**: **Vera Rubin generation integrates Groq inference technology via the LPX platform — ships summer 2026 with ~25% of GPU workloads target for Groq-style inference pairing**. The AI Corner HIGH ([[jonathan-ross]] narrated origin story): NVIDIA is incorporating Groq's technology into the new Vera Rubin GPU generation via the **LPX platform**, expected to ship this summer, with the stated ambition that roughly a quarter of GPU workloads will eventually be paired with Groq-style inference chips. Positions Vera Rubin as the *first NVIDIA GPU generation with a purpose-built inference-tier companion* (LPX = Groq-derived inference tech, likely rebranded LPU) — extends Vera Rubin from a *training-and-inference* generational upgrade into a *training-plus-companion-inference-chip* dual-substrate architecture — *source: data/summaries/2026-07-15-morning.json (The AI Corner HIGH — Jonathan Ross Turned a 3-Week Phone Call Into a $20 Billion NVIDIA Deal)*
- **2026-04-16**: Vera Rubin GPUs deploy early inside [[meta]]'s $21B CoreWeave deal — *source: InstaByte "Snap cuts 1,000 jobs, blames AI"*
- **2026-03-18**: GTC 2026 centers Vera Rubin as NVIDIA's production flagship; Space-1 Vera Rubin Module announced (data-center-class AI in orbit) and new Vera CPU launched alongside for agentic-AI workloads — *source: 2026-03-18 cycle (NVIDIA Newsletter; GTC keynote coverage)*
- **2026-01-12**: Rubin unveiled as "next-gen AI computing platform" — NVIDIA continues to push hardware frontier — *source: 2026-01-12 cycle*
- **2026-01-09**: Vera Rubin platform promises "up to 5x inference performance over Blackwell" — open-source VLM for physical reasoning released alongside — *source: 2026-01-09 cycle*
- **2026-01-08**: Rubin architecture launches in production — scheduled for leading cloud providers; "clear gains in performance" framing — *source: 2026-01-08 cycle*
- **2026-01-07**: Vera Rubin chip architecture launches with 5× faster inference, 3.5× faster training, ~10× cost reduction vs Blackwell (CES 2026 unveil) — *source: 2026-01-07 cycle (TLDR — Nvidia's new chip; The Tech Buzz — Physical AI Era at CES 2026)*
- **2025-11-20**: [[anthropic]] contracts up to 1 GW of compute on Grace Blackwell / Vera Rubin systems — first major commitment — *source: 2025-11-20 cycle*

## Key Facts

- Vendor: [[nvidia]]
- Successor to: Grace Blackwell
- Performance: ~5× inference, ~3.5× training vs Blackwell
- Cost claim: ~10× reduction on per-token basis
- Rack density: **up to 144 GPUs per rack** (2× GB300 NVL72 baseline)
- Major deployments: [[anthropic]] (1 GW), [[meta]] CoreWeave deal ($21B), Japan National AI Factory (27,500 Rubin + 13,750 Vera), [[openai]] Ohio 10GW campus (Softbank-developed, Nvidia $250B backstop)
- AI-factory OEM partners: Dell + Supermicro (turnkey server/storage/networking/software bundles)
- Unveil: CES 2026 (early Jan); GA-tier launch: Jul 2026

## Open Questions

- Exact SKU naming and memory / fabric details?
- Production volume vs waitlist length?
- China export status (paired with H200 restrictions in same cycle)?

## Sources

- data/summaries/2025-11-20.json (Anthropic 1 GW commitment)
- data/summaries/2026-01-07.json (TLDR; The Tech Buzz — CES 2026 unveil)
- data/summaries/2026-01-08.json (TLDR AI; Mindstream — Rubin production launch)
- data/summaries/2026-01-09.json (Vera Rubin + open-source VLM)
- data/summaries/2026-01-12.json (Rubin framing)
- data/summaries/2026-03-18.json (GTC 2026 — Vera Rubin + Space-1 Module; Vera CPU)
- data/summaries/2026-04-16.json (InstaByte — CoreWeave deployment)
- data/summaries/2026-07-15-morning.json (The AI Corner HIGH — LPX platform integration + summer 2026 ship + ~25% GPU workloads target)
- data/summaries/2026-07-24-evening.json (NVIDIA Developer Relations MEDIUM — HPC+AI convergence canonical framing + Groq 3 LPX multi-chip supercomputer reconfirmation)
- data/summaries/2026-07-27-evening.json (TLDR MEDIUM "Nvidia's $250B OpenAI deal 💰" — Vera Rubin platform launched combined CPU-GPU architecture 144 GPUs per rack "AI factory" preconfigured bundles; The Rundown AI MEDIUM "🧠 Anthropic's No. 2 stopped acting like it" — Vera Rubin CPU-GPU convergence framing; researchFindings.additionalContext — Nvidia: Dell + Supermicro OEM partners + $250B backstop for OpenAI 10GW southern-Ohio campus + Rubin-anchored core of OpenAI next-gen infrastructure)
