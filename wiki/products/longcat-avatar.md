---
name: LongCat-Avatar
description: Meituan's open-source 13.6B-parameter photo+audio-to-talking-video model — turns a single photo and audio clip into a realistic lip-synced talking-video with long-form stability
type: product
---

# LongCat-Avatar

> **Type**: product
> **Vendor**: [[meituan]] (via [[longcat-2]] frontier-open-weights lab lineage)
> **First mentioned**: 2026-08-01-morning
> **Last updated**: 2026-08-22-morning (**Cycle-2 — Meituan releases **LongCat-Video-Avatar 1.5** with concrete deployment envelope + MIT license explicit anchor**. AlphaSignal MEDIUM cycle-headline *"🎬 Meituan LongCat Avatar: photo+audio to lip-sync video, MIT free"*: *"Meituan's team has released LongCat-Video-Avatar 1.5, a new open-source model that can turn a photo and audio clip into a realistic talking-head video with tight lip sync, available under the MIT license for free commercial use. The model requires a 40 GB GPU and takes about 44 seconds of compute for every 1 second of finished video"*. First publicly framed on this cycle: (a) **"1.5" versioned-release anchor** — first publicly framed *versioned-release-tier iteration cadence* on LongCat-Avatar in this wiki (sharpens the mid-2026 Meituan-multi-vertical-open-source cadence with a *versioned-iteration anchor*); (b) **"40 GB GPU + 44 s per 1 s output" concrete deployment-envelope anchor** — first publicly framed *concrete GPU-memory-floor + compute-per-output-second anchors* on LongCat-Avatar in this wiki; canonicalizes the *A100/H100-class-hardware-required + 44:1-compute-ratio* deployment envelope; (c) **"MIT license for free commercial use" explicit-license anchor** — first publicly framed *MIT-license commercial-use-explicit* on LongCat-Avatar in this wiki (structurally distinct from Apache 2.0 or CC-BY-NC); extends the *permissive-commercial-open-weight-license posture* of the Meituan LongCat lineage. See [[meituan]] + [[longcat-2]] + [[open-source-models]] + [[ai-video-generation]] — *source: data/summaries/2026-08-22-morning.json (AlphaSignal MEDIUM "🎬 Meituan LongCat Avatar: photo+audio to lip-sync video, MIT free")*)
> **Previously updated**: 2026-08-01-morning (**Created — Meituan open-sources LongCat-Avatar: 13.6B-parameter photo+audio-to-talking-video model** — AlphaSignal HIGH: *"A new open-source tool, LongCat-Avatar, can turn a single photo and audio clip into a realistic talking video, with a 13.6 billion parameter model that ensures long-form stability and lip sync"*. First publicly framed on this cycle: (a) *13.6B-parameter photo+audio → talking-video* concrete parameter-count anchor + input/output-modality substrate; (b) *"long-form stability + lip sync"* dual-capability anchor — first publicly framed *long-form-video-stability + lip-sync* dual-tier feature-claim on Meituan-side; (c) *open-source* delivery framing extends the [[open-source-models]] arc from LLM-tier ([[longcat-2]] 1.6T MoE) into *multimodal-video-generation-tier* — first publicly framed *Meituan-multimodal-vertical-open-source diversification* in this wiki. Structurally significant three ways: (i) **Meituan extends its open-source AI substrate from LLM-tier into video-generation-tier** — [[longcat-2]] 1.6T MoE + LongCat-Avatar 13.6B video-generation graduates Meituan from *single-vertical-open-weights lab* into *multi-vertical-open-weights lab* — first publicly framed *Chinese frontier-lab multi-vertical-open-source coverage* extension into video-avatar-tier; (ii) **Positions against ByteDance Seedance + Runway Gen-4.5 + Veo-3 closed-tier video-generation as open-source alternative** — sits alongside [[ltx-2]] Lightricks 4K + [[veo-3]] + [[seedance-2]] as *open-weight video-gen substrate* + productizes *photo+audio → talking-video* narrow-vertical (structurally distinct from *text-to-video* general-vertical) — canonicalizes talking-avatar-video as first-class open-weight vertical alongside general-video-gen and [[spatius]] real-time-3D-avatar; (iii) **13.6B parameter tier as consumer-hardware-runnable** — sits in the 3T→27B "runs on high-end consumer GPU" tier (structurally comparable to [[bonsai-27b]] Bonsai 27B on-phone + [[cohere-command-a-plus]] 218B Apache 2.0 mid-tier); enables individual-developer + creator-tier deployment of talking-avatar generation without cloud dependency.
> **Status**: shipped (open-source, per 2026-08-01-morning AlphaSignal HIGH)
> **Related**: [[meituan]], [[longcat-2]], [[open-source-models]], [[ai-video-generation]], [[spatius]], [[fish-audio]], [[veo-3]], [[seedance-2]]

## Summary

LongCat-Avatar is Meituan's open-source **13.6-billion-parameter photo+audio-to-talking-video model** — takes a single photo of a person and an audio clip and generates a realistic lip-synced talking video with long-form stability. Released as open-source in early August 2026, it extends Meituan's open-weights AI stack (previously anchored on [[longcat-2]] 1.6T MoE LLM) into the **multimodal video-generation vertical**, positioning Meituan as one of the first Chinese frontier labs to open-source across both LLM and video-generation tiers.

LongCat-Avatar competes with closed-tier talking-avatar and lip-sync solutions (Spatius, HeyGen, Synthesia) as well as open-tier video-gen alternatives ([[ltx-2]] Lightricks 4K, [[veo-3]] Google, [[seedance-2]] ByteDance). Its narrow-vertical focus on *photo+audio → talking-video* (rather than general text-to-video) reads as a **product-market-fit bet on creator-tier + content-generation workflows** — the same substrate that powers voiceover-driven shorts + AI-generated influencer content + educational lip-sync animation. At 13.6B parameters, it sits in the *consumer-hardware-runnable* tier, structurally similar to [[bonsai-27b]] on-device + [[cohere-command-a-plus]] mid-tier open-weight positioning.

## Timeline

- **2026-08-01-morning**: **Created** — Meituan open-sources LongCat-Avatar 13.6B photo+audio-to-talking-video model with long-form stability + lip sync. First publicly framed on this cycle: 13.6B-parameter concrete anchor + long-form-stability + lip-sync dual-capability anchor + open-source delivery framing. Extends Meituan's [[open-source-models]] arc from LLM-tier into multimodal-video-generation-tier — first publicly framed *Meituan-multimodal-vertical open-source diversification* in this wiki — *source: data/summaries/2026-08-01-morning.json (AlphaSignal HIGH "🔓 Anthropic Claude hacked real systems in 141K safety test sessions" — LongCat-Avatar turn a single photo and audio clip into realistic talking video + 13.6B parameter model + long-form stability + lip sync)*

## Key Facts

- Vendor: [[meituan]] (via [[longcat-2]] lineage)
- Parameters: **13.6 billion**
- Modalities: **photo (image) + audio → talking-video** (video output)
- Key capabilities: **long-form stability + lip sync**
- License: **open-source** (specific license undisclosed as of cycle-1 framing)
- Positioning: narrow-vertical *photo+audio → talking-video* (structurally distinct from general text-to-video)

## Open Questions

- Specific license terms (Apache 2.0? MIT? Meituan-bespoke like [[kimi-k3]]'s Kimi K3 License?)
- Hosting/distribution channels (HuggingFace? Meituan's own hub? both?)
- Benchmark comparison vs closed-tier talking-avatar leaders (Synthesia, HeyGen, Spatius)
- Maximum video length + resolution supported for *"long-form stability"*
- Hardware requirements for consumer-tier deployment (GPU memory, CPU-only fallback?)
- Whether Meituan will follow up with a general text-to-video model (extending beyond talking-avatar narrow vertical)
- Watermark / provenance-signaling (SynthID equivalent? C2PA? none?)

## Sources

- data/summaries/2026-08-01-morning.json (AlphaSignal HIGH "🔓 Anthropic Claude hacked real systems in 141K safety test sessions" — LongCat-Avatar turn a single photo and audio clip into realistic talking video + 13.6B parameter model + long-form stability + lip sync)
