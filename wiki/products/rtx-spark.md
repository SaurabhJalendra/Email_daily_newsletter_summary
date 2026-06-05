---
name: RTX Spark
description: NVIDIA's 1-petaflop consumer-PC superchip for running frontier-scale AI models locally on laptops and desktops
type: product
---

# RTX Spark

> **Type**: product
> **Vendor**: [[nvidia]]
> **First mentioned**: 2026-06-02
> **Last updated**: 2026-06-05
> **Status**: announced (ships fall 2026)
> **Related**: [[nvidia]], [[microsoft]], [[ai-hardware]], [[openclaw]], [[vera-rubin]], [[gemma-4]]

## Summary

RTX Spark is NVIDIA's 1-petaflop consumer "superchip" announced at GTC Taipei (June 2026) and pitched as the silicon that "reinvents Windows PCs for the age of personal AI." It targets frontier-scale models running locally on laptops and desktops rather than the cloud — enabling on-device agents and AI assistants without round-tripping user data to a hyperscaler. The chip ships in fall 2026 from ASUS, Dell, HP, Lenovo, Microsoft Surface, and MSI; secure sandboxes co-developed with Microsoft are designed to run agents like [[openclaw]] and Hermes directly on the device. Positioning extends NVIDIA's reach from data centers into the prosumer PC tier — directly into the same surface where [[google]]'s [[gemma-4]] 12B is being marketed as the "on-device frontier" model.

## Timeline

- **2026-06-02**: **Pre-launch coverage** for RTX Spark begins ahead of the GTC Taipei keynote on June 5 — 20-core Arm CPU + 6,144-core Blackwell GPU + 1 petaflop on a single chip; framed as NVIDIA "returning to PCs after a decade away"; partner laptops from Dell + Lenovo + Microsoft Surface ship fall 2026; designed to keep AI agents running quietly in the background sorting email or chasing bugs while user works (TLDR pairs this with details on **N1 / N1X** Windows-Arm chips: N1 has up to 16GB RAM, N1X up to 128GB RAM — same Computex/Taipei window) — *source: 2026-06-02 cycle (Evolving AI Insights — NVIDIA Brings RTX Spark Chip to Windows / 1 petaflop / Dell, Lenovo, Microsoft Surface fall 2026; TLDR Newsletter — Nvidia N1 + N1X Windows-Arm chips up to 128GB RAM; TLDR AI — Nvidia N1X laptop chip at Computex 2026)*
- **2026-06-05**: Launch announcement at GTC Taipei keynote (Jensen Huang) — 1-petaflop chip, on-device agentic workflows, secure Microsoft-built sandboxes for OpenClaw / Hermes, partner OEMs ASUS / Dell / HP / Lenovo / Microsoft Surface / MSI, ships fall 2026; positioned alongside [[vera-rubin]] (CPU now in full production) and DGX Station for Windows as NVIDIA's three-tier personal-to-enterprise AI hardware stack; Microsoft Surface ships a "Surface RTX Spark Dev Box" mini-PC the same day; coverage frames the announcement as the trigger for "local AI as mainstream deployment target" — *source: World of AI "NVIDIA runs AI on your PC"; NVIDIA GTC "GTC Taipei keynote recap: Useful AI has arrived"; InstaByte "Anthropic files for IPO"; The Rundown AI "Reve, Ideogram trade prompts for layouts"; AINews "Reve 2 and Ideogram 4: Layouts in Imagegen"; TLDR "SpaceX prices IPO"; The Code "Google drops Gemma 4"; Forward Future "OpenAI's real plan for ChatGPT"*

## Key Facts

- Vendor: [[nvidia]]
- Performance class: 1 petaflop on a consumer PC chip
- Ship date: fall 2026
- OEM partners: ASUS, Dell, HP, Lenovo, Microsoft Surface, MSI
- Sandboxing: co-developed with [[microsoft]] for OpenClaw and Hermes agent runtimes
- Strategic context: extends NVIDIA's stack from data center to laptop/desktop, positions against on-device Gemma 4 / MAI-Image-2.5 / Qwen workloads
- Companion products announced same day: NVIDIA DGX Station for Windows (trillion-parameter AI supercomputer for enterprise desks); NVIDIA Humanoid Robot Reference Design (Isaac GR00T); Vera Rubin CPU full production

## Open Questions

- Memory bandwidth / VRAM configuration vs Apple Silicon and AMD Strix Halo class chips?
- Pricing tier — does the chip target a Premium-only SKU or filter into mass-market laptops?
- Power envelope — laptop TDP vs desktop?
- Does the Surface RTX Spark Dev Box mean Microsoft is becoming a first-party OEM here, or is this a developer-only seed?

## Sources

- data/summaries/2026-06-02.json (Evolving AI Insights — NVIDIA Brings RTX Spark Chip to Windows; TLDR Newsletter — N1 / N1X chips; TLDR AI — N1X laptop at Computex 2026)
- data/summaries/2026-06-05.json (World of AI — NVIDIA runs AI on your PC; NVIDIA GTC — Useful AI has arrived; InstaByte — Anthropic files for IPO; The Rundown AI — Reve, Ideogram trade prompts; AINews — Reve 2 and Ideogram 4; TLDR — SpaceX prices IPO; The Code — Google drops Gemma 4; Forward Future — OpenAI's real plan for ChatGPT)
