---
name: GPT-Live
description: OpenAI's full-duplex voice model — listens and speaks simultaneously with mid-sentence handoff to larger models for complex questions
type: product
---

# GPT-Live

> **Type**: product
> **Vendor**: [[openai]]
> **First mentioned**: 2026-07-09-morning
> **Last updated**: 2026-07-11-evening (**Cycle-2 recoverage — first publicly framed *"turn-taking issue" canonical UX-problem-statement* on GPT-Live in this wiki**. Technology News HIGH: ***"OpenAI is rolling out new voice models called GPT-Live, which are designed to fix the awkward turn-taking issue in voice conversations with AI models"***. Cycle-2 confirmation of the 2026-07-09-morning launch sharpens the *full-duplex + super-natural + mid-sentence-larger-model-handoff* architectural framings into the canonical *UX-problem-statement*: turn-taking friction is the specific consumer-facing problem GPT-Live solves. Positions GPT-Live's differentiator as the *"conversations feel awkward with PTT-tier voice modes"* consumer-experience-tier framing rather than the developer-facing latency-tier framing. Body-recovery items: (a) rollout timeline vs Plus/Pro tier gating — *source: data/summaries/2026-07-11-evening.json (Technology News HIGH "GPT-5.6 is here. The government saw it first. 👀")*)
> **Previously updated**: 2026-07-09-morning
> **Status**: shipped (Jul 2026 — successor rebuild of ChatGPT's voice mode)
> **Related**: [[openai]], [[chatgpt]], [[gpt-bidi]], [[gemini-3-1-flash-live]], [[tml-interaction-small]], [[grok-4-5]], [[elevenlabs]]

## Summary

GPT-Live is OpenAI's rebuild of ChatGPT's voice mode as a *full-duplex* conversational model that listens and speaks simultaneously in real time — targeting low-latency voice use cases where turn-taking and interruption handling matter. The distinguishing behavior is *mid-sentence handoff*: GPT-Live can hand off complex questions to a larger model while continuing to speak, and it *reads the room* through simultaneous listen-and-respond dynamics rather than the older PTT-style turn-taking of prior voice modes.

The launch productizes the [[gpt-bidi]] bidirectional voice architecture that had been previewed in June 2026 into a shipping consumer product. GPT-Live sits in the same synchronous voice-agent competitive surface as [[gemini-3-1-flash-live]] (Google's real-time voice model), Anthropic's voice roadmap (unpublicized), and [[xai]] Grok Voice (with same-week [[grok-4-5]] adding 21 multilingual voices + 1-minute cloning) — sharpening the frontier-lab voice arms race into concrete shipping products.

## Timeline

- **2026-07-09-morning**: **GPT-Live shipped by OpenAI as a full-duplex voice rebuild of ChatGPT voice mode**. TAAFT MEDIUM ***"OpenAI has released GPT-Live, a conversational AI tool that can listen and respond simultaneously, offering features such as speaking while listening and handing off complex questions to a larger model mid-sentence"***. tokens& MEDIUM ***"OpenAI shipped GPT-Live, a rebuild of ChatGPT's voice mode that is full duplex and super-natural, changing how voice AI should feel"***. First publicly framed *"full duplex + super-natural"* framing on OpenAI's voice mode in this wiki + first publicly framed *mid-sentence larger-model handoff* runtime behavior; extends [[gpt-bidi]] preview into shipping product. Uncovering AI notes context: OpenAI expanding access to [[gpt-5-6]] the same day — *source: data/summaries/2026-07-09-morning.json (TAAFT "🦾 Greeks Predicted AI 2,500 Years Ago" — OpenAI Drops GPT-Live; tokens& Weekly 7/8 — GPT-Live: OpenAI's new voice AI reads the room; Uncovering AI HIGH)*

## Key Facts

- Vendor: [[openai]]
- Architecture: full-duplex — listens + speaks simultaneously (distinct from PTT / turn-taking voice modes)
- Runtime behavior: mid-sentence handoff to a larger model for complex questions
- Substrate: rebuild of ChatGPT voice mode (successor product, not a feature update)
- Positioning: real-time voice AI substrate for low-latency use cases (customer support, live copilots, call-center automation)

## Open Questions

- Underlying model (GPT-Realtime successor? [[gpt-5-6]] Sol/Terra/Luna voice-tier variant?)
- Pricing tier + availability channel (ChatGPT Plus? Pro? API-only?)
- Latency numbers vs [[gemini-3-1-flash-live]] (90.8% ComplexFuncBench Audio) and [[tml-interaction-small]] 200ms micro-turns
- Which "larger model" GPT-Live hands off to mid-sentence — GPT-5.6 Sol? Ultra?
- Multilingual coverage vs [[xai]] Grok Voice's 21 new voices
- Enterprise / voice-agent-builder tier (competing with [[elevenlabs]] Voice Agent API)

## Sources

- data/summaries/2026-07-09-morning.json (TAAFT MEDIUM "🦾 Greeks Predicted AI 2,500 Years Ago"; tokens& Weekly 7/8 "GPT-Live: OpenAI's new voice AI reads the room"; Uncovering AI HIGH "Grok 4.5 isn't the smartest.")
