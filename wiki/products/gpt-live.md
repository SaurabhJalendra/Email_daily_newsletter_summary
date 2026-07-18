---
name: GPT-Live
description: OpenAI's full-duplex voice model — listens and speaks simultaneously with mid-sentence handoff to larger models for complex questions
type: product
---

# GPT-Live

> **Type**: product
> **Vendor**: [[openai]]
> **First mentioned**: 2026-07-09-morning
> **Last updated**: 2026-07-18-evening (**GPT-Live confirmed as runtime for [[openai-companion]] leaked hardware unveil-before-end-of-year**. Technology News HIGH ***"Open AI's brand new gadget just leaked 👀"***: ***"The device is designed to create the sense that it's alive, with a camera and sensors to understand its surroundings, and is powered by GPT-Live, a new voice mode that can listen and talk at the same time"***. Sharpens *full-duplex* into concrete *"listen and talk at the same time"* consumer-tier canonical framing + productizes GPT-Live from ChatGPT voice mode into *hardware-runtime substrate* for the OpenAI first-device. Same-cycle: [[openai-companion]] second-cycle detailed leak — *source: data/summaries/2026-07-18-evening.json (Technology News HIGH "Open AI's brand new gadget just leaked 👀")*)
> **Previously updated**: 2026-07-17-evening (**Cycle-3 saturation — three-newsletter HIGH/MEDIUM cohort with **GPT-Live-1 + GPT-Live-1 mini tier-split, global rollout, GPT-5.5 as the background heavy-reasoning handoff model, and formal replacement of "Advanced Voice Mode"**. The Batch @ DeepLearning.AI MEDIUM canonical framing: ***"OpenAI released GPT-Live, a new family of real-time voice models that power ChatGPT Voice, designed to make speaking with an AI feel like a natural human conversation. GPT-Live features a full-duplex architecture, enabling simultaneous listening and speaking, interruptions, and live translation"***. Runtime detail: GPT-Live models *"process audio continuously, deciding actions (talk, listen, wait, break in, or backchannel) multiple times per second, and can hand deeper tasks to a separate model (GPT-5.5) for processing while maintaining a fluid conversation"*. Tier-split: **GPT-Live-1 as the standard for paid ChatGPT plans; GPT-Live-1 mini for free users**. Global rollout **replaces the older "Advanced Voice Mode"** across ChatGPT (web, iOS, Android). researchFindings adds design-motivation framing: *"delegating heavier tasks — such as web search, complex reasoning, planning, and more 'agentic' workflows — to OpenAI's latest text frontier model (currently GPT-5.5) in the background"* + *"a major step toward real-time, multimodal AI assistants that feel more like interactive agents than chatbots"* + *"live translation while someone is still talking"* + *"filler acknowledgements like 'mm-hmm'"*. The Rundown AI HIGH lands trip-planning-tutorial use case + *"put reasoning in the background"* headline. Structurally significant three ways: (a) **GPT-Live-1 + GPT-Live-1 mini tier-split** — first publicly framed *free-vs-paid tier bifurcation* on OpenAI's voice-mode substrate in this wiki; positions Live as OpenAI's *only* consumer voice interface going forward; (b) **GPT-5.5 as the background heavy-reasoning model** — resolves the wiki's open question *"which 'larger model' GPT-Live hands off to mid-sentence"* — canonical answer is **GPT-5.5** (not GPT-5.6 Sol/Ultra); establishes template for *voice-fast-model + text-heavy-reasoning-substrate* dual-substrate architecture; (c) **Live translation + backchannel + interruption handling multiple times per second** — sharpens the *full-duplex + super-natural* prior framing into a concrete list of runtime behaviors (talk / listen / wait / break in / backchannel) + explicit **live-translation** capability. Same-cycle context: OpenAI GPT-5.6 mentioned as continuing to solve novel problems ([[gpt-5-6]] cycle-N — 20-year statistics-problem in 90 minutes); [[kimi-k3]] formal release + [[gemini]] 3.5 Pro delay + NVIDIA SIGGRAPH 2026. See [[openai]] (updated) + [[chatgpt]] — *source: data/summaries/2026-07-17-evening.json (The Batch @ DeepLearning.AI MEDIUM "AI Overviews Land Google In Hot Water, GPT-Live Puts Reasoning in the Background, How to Tell If Your Model is Manipulative"; The Rundown AI HIGH "🌝 Kimi K3 joins AI's frontier conversation" — Use OpenAI's GPT-Live to plan any trip fast; researchFindings.additionalContext for GPT-Live)*)
> **Previously updated**: 2026-07-11-evening (**Cycle-2 recoverage — first publicly framed *"turn-taking issue" canonical UX-problem-statement* on GPT-Live in this wiki**. Technology News HIGH: ***"OpenAI is rolling out new voice models called GPT-Live, which are designed to fix the awkward turn-taking issue in voice conversations with AI models"***)
> **Previously updated**: 2026-07-09-morning
> **Status**: shipped (Jul 2026 — successor rebuild of ChatGPT's voice mode)
> **Related**: [[openai]], [[chatgpt]], [[gpt-bidi]], [[gemini-3-1-flash-live]], [[tml-interaction-small]], [[grok-4-5]], [[elevenlabs]]

## Summary

GPT-Live is OpenAI's rebuild of ChatGPT's voice mode as a *full-duplex* conversational model that listens and speaks simultaneously in real time — targeting low-latency voice use cases where turn-taking and interruption handling matter. The distinguishing behavior is *mid-sentence handoff*: GPT-Live can hand off complex questions to a larger model while continuing to speak, and it *reads the room* through simultaneous listen-and-respond dynamics rather than the older PTT-style turn-taking of prior voice modes.

The launch productizes the [[gpt-bidi]] bidirectional voice architecture that had been previewed in June 2026 into a shipping consumer product. GPT-Live sits in the same synchronous voice-agent competitive surface as [[gemini-3-1-flash-live]] (Google's real-time voice model), Anthropic's voice roadmap (unpublicized), and [[xai]] Grok Voice (with same-week [[grok-4-5]] adding 21 multilingual voices + 1-minute cloning) — sharpening the frontier-lab voice arms race into concrete shipping products.

## Timeline

- **2026-07-17-evening**: **Cycle-3 saturation — GPT-Live-1 + GPT-Live-1 mini tier-split rolls out globally; formally replaces "Advanced Voice Mode"; GPT-5.5 is the background heavy-reasoning handoff model**. The Batch @ DeepLearning.AI + The Rundown AI + researchFindings cohort. Runtime: processes audio continuously, deciding actions (**talk / listen / wait / break in / backchannel**) multiple times per second; **live translation while someone is still talking**; hands deeper tasks to **GPT-5.5** in the background. Positioning: *"real-time, multimodal AI assistants that feel more like interactive agents than chatbots"* + *"put reasoning in the background"*. Tier-split resolves prior open-question on Plus/Pro tier gating: **GPT-Live-1 = paid ChatGPT plans; GPT-Live-1 mini = free users**. Resolves prior open-question on background-model identity: **GPT-5.5** (not Sol/Ultra) — *source: data/summaries/2026-07-17-evening.json (The Batch @ DeepLearning.AI MEDIUM "AI Overviews Land Google In Hot Water, GPT-Live Puts Reasoning in the Background"; The Rundown AI HIGH "🌝 Kimi K3 joins AI's frontier conversation"; researchFindings)*

- **2026-07-11-evening**: **Cycle-2 — Technology News HIGH canonicalizes *"turn-taking issue" UX-problem-statement***: *"OpenAI is rolling out new voice models called GPT-Live, which are designed to fix the awkward turn-taking issue in voice conversations with AI models"* — *source: data/summaries/2026-07-11-evening.json (Technology News HIGH)*

- **2026-07-09-morning**: **GPT-Live shipped by OpenAI as a full-duplex voice rebuild of ChatGPT voice mode**. TAAFT MEDIUM ***"OpenAI has released GPT-Live, a conversational AI tool that can listen and respond simultaneously, offering features such as speaking while listening and handing off complex questions to a larger model mid-sentence"***. tokens& MEDIUM ***"OpenAI shipped GPT-Live, a rebuild of ChatGPT's voice mode that is full duplex and super-natural, changing how voice AI should feel"***. First publicly framed *"full duplex + super-natural"* framing on OpenAI's voice mode in this wiki + first publicly framed *mid-sentence larger-model handoff* runtime behavior; extends [[gpt-bidi]] preview into shipping product. Uncovering AI notes context: OpenAI expanding access to [[gpt-5-6]] the same day — *source: data/summaries/2026-07-09-morning.json (TAAFT "🦾 Greeks Predicted AI 2,500 Years Ago" — OpenAI Drops GPT-Live; tokens& Weekly 7/8 — GPT-Live: OpenAI's new voice AI reads the room; Uncovering AI HIGH)*

## Key Facts

- Vendor: [[openai]]
- Model family: **GPT-Live-1** (paid ChatGPT plans) + **GPT-Live-1 mini** (free users)
- Architecture: full-duplex — listens + speaks simultaneously (distinct from PTT / turn-taking voice modes)
- Runtime actions (multiple times per second): talk / listen / wait / break in / backchannel
- Handoff: mid-sentence delegation to **GPT-5.5** for heavy reasoning, search, planning, agentic workflows
- Substrate: rebuild of ChatGPT voice mode; **replaces "Advanced Voice Mode"** globally on web + iOS + Android
- Distinctive capabilities: **live translation while someone is still talking**; filler-token acknowledgements ("mm-hmm")
- Positioning: real-time voice AI substrate — natural conversation, low-latency multimodal assistant

## Open Questions

- Latency numbers vs [[gemini-3-1-flash-live]] (90.8% ComplexFuncBench Audio) and [[tml-interaction-small]] 200ms micro-turns
- Multilingual voice coverage vs [[xai]] Grok Voice's 21 new voices
- General availability of the promised API (still not GA per researchFindings)
- Enterprise / voice-agent-builder tier (competing with [[elevenlabs]] Voice Agent API)
- Whether the GPT-5.5 background handoff will migrate to [[gpt-5-6]] Sol/Terra/Luna over time

## Sources

- data/summaries/2026-07-17-evening.json (The Batch @ DeepLearning.AI MEDIUM "AI Overviews Land Google In Hot Water, GPT-Live Puts Reasoning in the Background"; The Rundown AI HIGH "🌝 Kimi K3 joins AI's frontier conversation"; researchFindings.additionalContext for GPT-Live)
- data/summaries/2026-07-11-evening.json (Technology News HIGH "GPT-5.6 is here. The government saw it first. 👀")
- data/summaries/2026-07-09-morning.json (TAAFT MEDIUM "🦾 Greeks Predicted AI 2,500 Years Ago"; tokens& Weekly 7/8 "GPT-Live: OpenAI's new voice AI reads the room"; Uncovering AI HIGH "Grok 4.5 isn't the smartest.")
