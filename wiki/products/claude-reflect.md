---
name: Claude Reflect
description: Anthropic's mindful-use feature — Reflections dashboard giving users insights into their habits and usage of Claude to encourage mindful use and set boundaries
type: product
---

# Claude Reflect

> **Type**: product
> **Vendor**: [[anthropic]]
> **First mentioned**: 2026-07-10-evening
> **Last updated**: 2026-07-11-morning (**Cycle-2 morning-cohort cross-newsletter recoverage — first publicly framed *Quiet Hours* + *Break Nudges* named-feature enumeration + first publicly framed *year-long retrospective analytics time-scope* + first publicly framed *monthly usage dashboard metrics enumeration (most active day, peak hour, total conversations, topic breakdown)* + first publicly framed *workflow tips control-tier*.** Vaibhav Sisinty HIGH: ***"Anthropic's Claude model has seen updates, with the introduction of Claude Reflect, a beta dashboard showing how users have utilized Claude over the past year, and Quiet Hours and Break Nudges features"*** — first publicly framed *Quiet Hours + Break Nudges* named-features + *"past year"* retrospective-analytics time-scope. AlphaSignal HIGH: ***"Anthropic has added a monthly usage dashboard called Reflect to Claude, which shows users how they've been spending time with the AI, including most active day, peak hour, total conversations, and breakdown of topics discussed. Reflect also provides workflow tips and controls to set quiet hours and schedule break nudges"*** — first publicly framed *concrete dashboard metric enumeration* (most active day + peak hour + total conversations + topic breakdown) + first publicly framed *workflow tips control-tier* + confirms Quiet Hours + Break Nudges as user-controllable-settings. Structurally significant three ways: (a) **Quiet Hours + Break Nudges resolve the cycle-1 open question on dashboard-only vs in-chat-nudges** — the two named-features confirm Reflect is *both dashboard + active-nudging* rather than dashboard-only; Quiet Hours implies time-of-day gating (structurally novel — first frontier-lab consumer-tier *self-imposed access-restriction* feature), Break Nudges implies frequency-based interruption prompts; (b) **Concrete metric enumeration establishes canonical Reflect analytics-tier** — most-active-day + peak-hour + total-conversations + topic-breakdown constitute the initial four-metric canonical anchor for Reflect; structurally parallel to Apple Screen Time / Google Digital Wellbeing analytics-tier feature-scope; (c) **Year-long retrospective analytics** — Vaibhav Sisinty's *"past year"* time-scope framing extends the cycle-1 *"monthly usage dashboard"* framing into *retrospective-year-scale analytics* — implies Reflect ships with historical-data ingestion covering the user's full Claude-usage history (up to a year back). Body-recovery items: (a) whether Reflect surfaces year-long retrospective by default or requires manual time-window selection, (b) Quiet Hours enforcement mechanism — does it block API/mobile/web access during gated hours or issue nudges only?, (c) Break Nudges default cadence + user customization scope, (d) topic-breakdown taxonomy source (fixed categories vs LLM-derived from conversation content) — *source: data/summaries/2026-07-11-morning.json (Vaibhav Sisinty HIGH "gpt 5.6 / grok 4.5 / glm 5.2"; AlphaSignal HIGH "ChatGPT Work Agent 🏗️, Claude Reflect Dashboard 🧘, SWE-1.7 at $1.97/ta"; Superhuman MEDIUM "🧑‍💻 ChatGPT gets a work-focused agent" — cross-cohort reference)*)
> **Previously updated**: 2026-07-10-evening
> **Status**: beta
> **Related**: [[anthropic]], [[claude-code]], [[claude-cowork]], [[ai-memory]]

## Summary

Reflect (branded as *Reflections* in some coverage) is Anthropic's new consumer-tier feature that gives Claude users insights into their own habits and usage of the assistant — surfacing how they use Claude, suggested skills to try, and usage patterns based on personal data. It is explicitly framed as a *mindful-use* / *encourage-boundaries* product motion, aimed at helping users set healthy limits rather than maximize engagement. Currently available in beta for Free, Pro, and Max accounts with memory turned on.

The launch is structurally novel in the mid-2026 frontier-lab landscape as the first publicly framed *mindful-use / anti-over-reliance* consumer product from a major AI lab — an intentional inversion of the dominant *maximize-engagement* consumer-product optimization target that has defined the AI-chatbot competitive surface. Reads as Anthropic's product-motion counterpart to its safety-forward brand positioning (coordinated-pause ask, [[recursive-self-improvement]] essay, [[project-glasswing]] cybersecurity coalition).

## Timeline

- **2026-07-11-morning**: **Cycle-2 morning-cohort recoverage — Quiet Hours + Break Nudges named-features + canonical dashboard metric enumeration (most active day, peak hour, total conversations, topic breakdown) + past-year retrospective time-scope + workflow tips control-tier**. AlphaSignal HIGH: *"monthly usage dashboard called Reflect... shows most active day, peak hour, total conversations, and breakdown of topics discussed. Reflect also provides workflow tips and controls to set quiet hours and schedule break nudges"*. Vaibhav Sisinty HIGH lands *"past year"* retrospective analytics time-scope + confirms Quiet Hours + Break Nudges as named user-controllable features. First publicly framed in this wiki: Quiet Hours (self-imposed access-restriction feature) + Break Nudges (frequency-based interruption prompts) + concrete four-metric canonical dashboard scope + year-long retrospective ingest — *source: data/summaries/2026-07-11-morning.json (Vaibhav Sisinty HIGH; AlphaSignal HIGH; Superhuman MEDIUM)*

- **2026-07-10-evening**: Reflect (Reflections) beta launches for Free, Pro, and Max accounts with memory on; The Rundown AI: *"Reflections dashboard to help users analyze how they use Claude, with suggested skill creation and usage habits based on personal data"*; Evolving AI Insights: *"Reflect, a new feature that provides users with insights into their habits and usage of Claude, aiming to encourage mindful use and help users set boundaries"* — *source: data/summaries/2026-07-10-evening.json (Evolving AI Insights HIGH "💼 OpenAI wants ChatGPT to Work on Your Job — Claude's New Feature Wants You Using It LESS"; The Rundown AI HIGH)*

## Key Facts

- Vendor: [[anthropic]]
- Feature type: usage-analytics + habit-insights dashboard
- Availability: beta on Free, Pro, and Max accounts with memory enabled
- Framing: *mindful use* / help users set boundaries (anti-over-reliance framing)
- Surfacing: personal usage habits, suggested skills to try
- Dependency: requires Claude Memory to be turned on

## Open Questions

- Product-tier scope — dashboard-only or does Reflect inject nudges into chat sessions?
- Which usage-metrics does the dashboard surface (sessions/day, token spend, task categories, off-hours use)?
- Does Reflect suggest *reducing* usage or just *reallocating* usage across skills?
- Enterprise / Team-tier availability roadmap
- Interaction with [[claude-cowork]] mobile app usage patterns

## Sources

- data/summaries/2026-07-10-evening.json (Evolving AI Insights HIGH "💼 OpenAI wants ChatGPT to Work on Your Job — Claude's New Feature Wants You Using It LESS"; The Rundown AI HIGH — Reflections dashboard)
