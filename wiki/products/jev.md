---
name: Jev
description: Diogo Almeida's Sep 2026 decision-making AI model — can't generate text or hallucinate, returns typed decisions with confidence scores, ~400× cheaper than ChatGPT/Claude, built for high-volume automation
type: product
---

# Jev

> **Type**: product
> **Vendor**: independent (Diogo Almeida — ex-OpenAI, ChatGPT co-creator/co-inventor)
> **First mentioned**: 2026-09-16-evening
> **Last updated**: 2026-09-16-evening
> **Status**: active
> **Related**: [[openai]], [[chatgpt]], [[claude-opus-5]], [[recursive-self-improvement]], [[agent-frameworks]]

## Summary

Jev is a Sep 2026 decision-making AI model launched by **Diogo Almeida**, a co-creator/co-inventor of [[chatgpt]] who left [[openai]] to build it. Structurally distinct from generative LLMs, Jev is designed to **live inside software and make judgment calls** rather than produce prose. It returns **typed decisions with confidence scores** — no free-text output, no hallucination surface — targeting the background decision-making work that chatbots aren't the right tool for (routing, ranking, gating, classification, policy calls).

Cost/speed framing anchors Jev as a **~400× cheaper and significantly faster alternative** to [[chatgpt]] and [[claude-opus-5]] for high-volume automation. Positioned as *"AI that can't hallucinate"* — a canonical mid-Sep-2026 counter-frame to the generative-LLM-tier substrate, aimed at production-tier decision loops where cost, latency, and correctness bounds all bind at once.

## Timeline

- **2026-09-16-evening**: **Launch — Diogo Almeida (ChatGPT co-creator/co-inventor) launches Jev as a new kind of AI model for decision-making**. The Rundown AI MEDIUM: *"ChatGPT co-creator Diogo Almeida launches a new kind of AI model called Jev, which is designed to live inside software and make judgment calls, doing background decision-making work that chatbots aren't always the right tool for, at a significantly lower cost and faster speed than current LLMs"*. Evolving AI Insights MEDIUM: *"Jev returns typed decisions with confidence scores and is built for high-volume automation, with costs up to 400x cheaper than ChatGPT and Claude"* + *"cannot generate text or hallucinate responses"*. Daily-digest Top Story #1 elevation. See [[openai]] + [[chatgpt]] + [[claude-opus-5]] + [[recursive-self-improvement]] — *source: data/summaries/2026-09-16-evening.json (The Rundown AI MEDIUM "⚡ ChatGPT co-creator launches new kind of AI model"; Evolving AI Insights MEDIUM "🧠 ChatGPT Co-Inventor Launches AI That Can't Hallucinate")*

## Key Facts

- **Founder**: Diogo Almeida (ex-[[openai]], co-creator/co-inventor of [[chatgpt]])
- **Model class**: decision model — typed decisions with confidence scores, no free-text generation
- **Cost/speed**: framed as ~400× cheaper + significantly faster than [[chatgpt]] and [[claude-opus-5]] for equivalent workloads
- **Design goal**: background decision-making inside software (routing, ranking, gating, classification, policy calls)
- **Hallucination surface**: none — model cannot generate text at all
- **Target market**: high-volume automation where LLM cost/latency is prohibitive

## Open Questions

- Model architecture — classifier ensemble, small transformer with restricted head, or novel discriminative substrate?
- Integration surface — SDK, REST API, on-device inference?
- Funded / independent — is Almeida self-funding, or is there a stealth company + investor cohort?
- Which decision domains at launch — pure classification, ranking, structured JSON only?
- Confidence-score calibration methodology — Platt scaling, isotonic regression, conformal prediction?
- Enterprise-tier adoption — anyone shipping Jev in production at launch?

## Sources

- data/summaries/2026-09-16-evening.json (The Rundown AI MEDIUM "⚡ ChatGPT co-creator launches new kind of AI model"; Evolving AI Insights MEDIUM "🧠 ChatGPT Co-Inventor Launches AI That Can't Hallucinate"; daily-digest Top Story #1)
