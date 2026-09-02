---
name: TimesFM-3
description: Google's Sep 2026 zero-shot multivariate time-series foundation model — 330M parameters, pretrained on 1T time points, ranks first on GIFT-Eval + FEV-Bench + TIME forecasting benchmarks; non-commercial license
type: product
---

# TimesFM-3

> **Type**: product
> **Vendor**: [[google]] (Research / DeepMind)
> **First mentioned**: 2026-09-02-morning
> **Last updated**: 2026-09-02-morning (**Launch cycle — Google releases TimesFM-3, a zero-shot foundation model for multivariate time-series forecasting**. AlphaSignal MEDIUM: *"Google has released TimesFM-3, a forecasting model that can handle multiple data streams at once, fixing the biggest limitation of its previous versions. TimesFM-3 requires zero fine-tuning, can forecast multiple related series simultaneously, and ranks first on all three major forecasting benchmarks: GIFT-Eval, FEV-Bench, and TIME. It was trained on 1 trillion time points and is available on Hugging Face and GitHub, although it has a non-commercial license"*. TLDR AI MEDIUM sharpens spec: *"Google has introduced TimesFM-3, a 330M-parameter time-series foundation model pretrained on over 1 trillion time points, which can perform zero-shot forecasting across multiple targets"*. Daily-digest Top Story #4: *"Google releases TimesFM-3, a forecasting model that can handle multiple data streams at once ... zero fine-tuning, forecast multiple related series simultaneously"*. First-in-wiki anchors: (a) **330M-parameter compact-foundation-model canonical spec anchor** — first-in-wiki *time-series-foundation-model-parameter-count canonical anchor*; positions TimesFM-3 in the *sub-billion-parameter specialist-foundation-model tier* alongside [[gemma-3-270m]] on-device tier rather than frontier-LLM tier; (b) **"1 trillion time points" pretraining-corpus canonical scale-anchor** — first-in-wiki *time-series-pretraining-corpus scale anchor*; graduates time-series-foundation-model pretraining into the *1T-scale substrate tier* (compare with LLM pretraining scales); (c) **Triple-benchmark-first canonical leadership anchor** — GIFT-Eval + FEV-Bench + TIME — first-in-wiki *concrete forecasting-benchmark-cohort-#1 canonical anchor* on a foundation model; canonicalizes GIFT-Eval + FEV-Bench + TIME as the *canonical mid-2026 forecasting-benchmark triad*; (d) **Multivariate + zero-fine-tuning + multi-target-simultaneous canonical capability-anchor cluster** — sharpens the multi-cycle TimesFM lineage (TimesFM-2 was univariate) by *fixing the biggest limitation of its previous versions* — canonical *univariate-to-multivariate generational-step* anchor; (e) **Non-commercial license + [[hugging-face]] + GitHub distribution canonical anchor** — first-in-wiki *non-commercial-license restriction on a Google time-series-foundation-model*; establishes structurally distinct posture from [[weathernext-2]] (Google open-sourced weather-forecasting foundation model). Structurally significant three ways: (i) **TimesFM-3 productizes *specialist-foundation-model-tier* alongside LLM-tier flagship-models** — reads as [[google]] extending the foundation-model paradigm from *natural-language + vision + audio* into *time-series-forecasting-tier* as a canonical substrate; (ii) **Multivariate + zero-fine-tuning canonical capability-cluster productizes *drop-in-forecasting-substrate* pattern** — sharpens time-series-forecasting from *task-specific model-per-series* into *foundation-model-with-zero-shot-multi-target* deployment posture; (iii) **Non-commercial license limits enterprise-tier adoption** — establishes the Google-time-series-foundation-model-tier as *research-first-distribution-tier* rather than open-enterprise-tier, structurally distinct from Google's [[weathernext-2]] open-weight release. See [[google]] + [[weathernext-2]] + [[weathernext-cyclones]] + [[hugging-face]] + [[tabular-foundation-models]] — *source: data/summaries/2026-09-02-morning.json (AlphaSignal MEDIUM "Google TimesFM-3 📊, Anthropic Claude 5.1 25% cheaper 💸, Runway Solaris"; TLDR AI MEDIUM "Muse Code 👨‍💻, Runway Solaris ☀️, OpenClaw 2.0 🤖"; daily-digest Top Story #4)*
> **Status**: released Sep 2026; available on [[hugging-face]] + GitHub under non-commercial license
> **Related**: [[google]], [[weathernext-2]], [[weathernext-cyclones]], [[tabular-foundation-models]]

## Summary

TimesFM-3 is Google's September 2026 zero-shot foundation model for multivariate time-series forecasting, released as the successor to TimesFM-2. At 330M parameters and pretrained on over 1 trillion time points, it fixes the univariate-only limitation of previous TimesFM versions by supporting simultaneous forecasting across multiple related series with no task-specific fine-tuning. Google reports first-place rankings on the three canonical forecasting-benchmark leaderboards — GIFT-Eval, FEV-Bench, and TIME. The model is distributed via Hugging Face and GitHub under a non-commercial license, positioning it as a research-first release distinct from Google's open [[weathernext-2]] weather-forecasting foundation model.

## Timeline

- **2026-09-02-morning**: **Google releases TimesFM-3** — 330M-parameter multivariate time-series foundation model; pretrained on 1T time points; zero-shot forecasting across multiple targets simultaneously; ranks #1 on GIFT-Eval + FEV-Bench + TIME; non-commercial license; available on Hugging Face + GitHub; fixes univariate-only limitation of prior TimesFM versions — *source: data/summaries/2026-09-02-morning.json (AlphaSignal MEDIUM; TLDR AI MEDIUM; daily-digest Top Story #4)*

## Key Facts

- Parameter count: 330M (compact specialist-foundation-model tier)
- Pretraining corpus: over 1 trillion time points
- Modality: multivariate time-series (multiple related series simultaneously)
- Deployment: zero-shot / zero-fine-tuning
- Benchmark leadership: #1 on GIFT-Eval + FEV-Bench + TIME
- Distribution: Hugging Face + GitHub
- License: non-commercial (restricts enterprise adoption)
- Successor to TimesFM-2 (univariate-only)

## Open Questions

- Concrete benchmark deltas vs prior TimesFM versions + competing time-series foundation models (Chronos? Moirai? MOMENT?)
- Whether the "multi-target simultaneous" capability supports cross-series covariance modeling (true multivariate) or is per-target parallel inference
- Non-commercial license terms — whether limited to research or a formal license class (CC-BY-NC?)
- Overlap and complementarity with [[weathernext-2]] (open) + [[weathernext-cyclones]] (Nature-validated) — do these share substrate?
- Whether Google offers a commercial-tier variant via Vertex AI

## Sources

- data/summaries/2026-09-02-morning.json (newsletters: AlphaSignal — "Google TimesFM-3 📊, Anthropic Claude 5.1 25% cheaper 💸, Runway Solaris"; TLDR AI — "Muse Code 👨‍💻, Runway Solaris ☀️, OpenClaw 2.0 🤖"; daily-digest Top Story #4)
