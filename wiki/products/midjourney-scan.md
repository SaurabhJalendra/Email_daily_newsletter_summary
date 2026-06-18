---
name: Midjourney Medical Scanner
description: Midjourney's first hardware product — full-body ultrasonic CT scanner; framed as the first new whole-body medical imaging modality in 50 years
metadata:
  type: product
---

# Midjourney Medical Scanner

> **Type**: product
> **First mentioned**: 2026-06-18-evening
> **Last updated**: 2026-06-18-evening (launch via Midjourney Medical announcement; AINews + Evolving AI Insights cross-newsletter coverage)
> **Status**: launched (pre-commercial; FDA discussions starting; first deployment site is Midjourney Spa SF)
> **Related**: [[midjourney]], [[ai-healthcare]], [[ai-hardware]]

## Summary

The Midjourney Medical Scanner (referenced simply as "the Scanner" in AINews) is [[midjourney]]'s first hardware product — a **full-body ultrasonic CT system** that uses ultrasound waves traveling through a water-immersion tank instead of MRI or CT radiation. The Scanner is framed by CEO David Holz as **"the first new whole-body medical imaging modality in 50 years"**, designed to make full-body imaging **fast, low-cost, and accessible** (Evolving AI Insights: ~10× cheaper and ~60× faster than an MRI). The first commercial deployment will be inside **Midjourney Spa**, a planned spa-like San Francisco facility that doubles as testing ground and consumer amenity. Long-term ambition is to scale to **50,000 scanners** and **1 billion scans per month**, supporting high-frequency sub-millimeter differential tracking as a preventive-medicine baseline. Evolving AI Insights amplifies Holz's framing that, at scale, the device could potentially prevent close to **30% of all deaths** through early disease detection.

## Timeline

- **2026-06-18-evening**: **Midjourney announces the Medical Scanner** alongside the **Midjourney Spa** facility in San Francisco; AINews carries the technical specs (see Key Facts) and frames the system as Midjourney's *second product* in its *second category* (after text-to-image and video V1). FDA discussions have begun, with **body composition** as the initial regulatory path; diagnostic and therapeutic uses to follow. Same cycle Evolving AI Insights ("Midjourney Bets Its Scanner Can PREVENT 30% of Deaths") amplifies the public-health framing. The "scan your organs like you step on a scale" tagline frames target usage frequency as routine and consumer-grade rather than episodic clinical-grade. Open question: how Midjourney's AI stack (originally diffusion image-gen) contributes to the scanner's reconstruction pipeline given the 17 GB/s raw data rate and 21-server reconstruction cluster — *source: data/summaries/2026-06-18-evening.json (AINews — [AINews] Midjourney Medical: scan your organs like you step on a scale / first new whole-body medical imaging modality in 50 years per Holz / 8,960 transducers per chip-system / 40 systems arranged in a ring / 358,000 ultrasonic elements / 70cm diameter ring / water at 1,481 m/s / 17 GB/s data capture / 21 servers for reconstruction / 0.5mm internal-tissue resolution / 50K scanners + 1B scans/month roadmap / FDA discussions starting with body composition; Evolving AI Insights — Midjourney Spa / 10× cheaper 60× faster than MRI / 30% of deaths prevented framing / ~1 minute scan time; Anna's DayBreak adjacent coverage)*

## Key Facts

- Modality: full-body ultrasonic CT (water-immersion tank for sound propagation; no ionizing radiation)
- Hardware: **8,960 transducers per chip/system**, **40 systems arranged in a ring**, **358,000 ultrasonic elements** total, **70 cm diameter ring**, ultrasound waves at **1,481 m/s** through water
- Throughput: **17 GB/s** raw data capture; reconstruction requires **21 servers**
- Resolution: **0.5 mm** internal-tissue detail; capability for sub-millimeter differential tracking
- Scan time: roughly 1 minute (per Evolving AI Insights)
- Cost / speed claims (Evolving AI Insights): ~10× cheaper and ~60× faster than an MRI
- First deployment: Midjourney Spa, San Francisco
- Roadmap: 50,000 scanners; 1 billion scans/month
- Regulatory: FDA discussions begun; initial path = body composition; diagnostic + therapeutic uses later

## Open Questions

- Exact FDA clearance category and timeline for body-composition use
- Per-scan pricing at Midjourney Spa and at scale
- Sensitivity / specificity vs. MRI on specific conditions (cancer, cardiovascular plaque, neurological)
- Whether AI/ML signal-processing on raw ultrasonic data is part of the differentiator vs. classical reconstruction
- How a bootstrapped company funds the hardware manufacturing scale-up
- Whether peer-reviewed validation exists for the 30%-deaths-prevented claim
- International deployment plans and regulatory paths outside the FDA

## Sources

- data/summaries/2026-06-18-evening.json (newsletters: AINews — Midjourney Medical scan your organs like you step on a scale; Evolving AI Insights — Midjourney Bets Its Scanner Can PREVENT 30% of Deaths)
