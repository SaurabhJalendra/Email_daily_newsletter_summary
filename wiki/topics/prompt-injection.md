---
name: Prompt Injection
description: Security category where crafted inputs hijack LLM behavior — Atlas hidden-text hijack, Gemini disclosures
type: topic
---

# Prompt Injection

> **Type**: topic
> **First mentioned**: 2025-10-01
> **Last updated**: 2026-06-16-morning (subject-only: TAAFT "🦾 13 Words Poison AI Search" — first publicly framed *13-word adversarial-prompt poisoning of AI search* in this wiki; reactivates the topic page from stale after a 3-month dormant window; pipeline summaries unavailable — eleventh consecutive cycle with OpenRouter 403 key-limit-exceeded blocker)
> **Status**: active
> **Related**: [[gemini]], [[google]], [[chatgpt-atlas]], [[ai-browsers]], [[aardvark]], [[openai]], [[perplexity]]

## Summary

Prompt injection is a security category where adversarial content embedded in model inputs (retrieved documents, emails, tool outputs) manipulates the model into exfiltrating data, executing unintended actions, or overriding system instructions. In early October 2025 researchers publicly disclosed prompt-injection vulnerabilities across three [[gemini]] models, causing sensitive data leakage. The category became headline news in late October 2025 when [[chatgpt-atlas]] launched and was almost immediately shown to be vulnerable to a hidden-text browser-hijack attack — pages could include invisible instructions that the in-browser ChatGPT would obey, effectively giving attackers write access to user actions. Mitigation became a recurring topic across newsletters: OpenAI shipped guidance on mitigating prompt injection in ChatGPT, [[perplexity]] talked through a defense-in-depth approach for Comet, and [[aardvark]] (OpenAI's GPT-5 security agent) was framed as part of the broader response.

## Timeline

- **2026-06-16-morning**: **TAAFT "🦾 13 Words Poison AI Search"** — first publicly framed *13-word adversarial-prompt poisoning of AI search* in this wiki, reactivating the topic page from a 3-month stale window. The "13 words" framing is structurally novel: it specifies a *minimum-viable adversarial-prompt budget* (just 13 words is enough to "poison" an AI-search response), distinct from the prior prompt-injection event categories tracked on this page — hidden-text browser-hijack ([[chatgpt-atlas]] 2025-10-23), domain-injection in retrieved documents ([[gemini]] 2025-10-01), supply-chain prompt-injection via GitHub issue titles (2026-03-07). "Poison AI Search" framing specifically targets the *AI-search* (retrieval-augmented answer-generation) surface — likely a single short paragraph or sentence-level adversarial seed that, when scraped/indexed by AI search engines, causes the search assistant to produce attacker-controlled outputs to unrelated downstream queries. Pairs structurally with the 2025-10-01 Gemini disclosure, the 2025-10-23 ChatGPT Atlas hidden-text hijack, and OpenAI's 2025-10-27 prompt-injection mitigation guidance — extends the category from per-session injection (browse-time) and per-document injection (RAG-time) into a *per-index injection* surface where a single 13-word planted artifact corrupts the AI-search index for downstream users. Pipeline summaries unavailable — body-recovery items: (a) the specific 13 words, (b) which AI search engines (Google AI Search / [[perplexity]] / Bing Copilot / ChatGPT Search) the poisoning was demonstrated against, (c) the disclosure source and whether a fix is in place — *source: data/summaries/2026-06-16-morning.json (TAAFT — 13 Words Poison AI Search; all 9 newsletter summaries failed with OpenRouter 403 key-limit-exceeded error — eleventh consecutive cycle)*
- **2026-03-07**: GitHub issue title compromises ~4,000 developer machines — crafted title installs [[openclaw]] when pasted into AI dev tools that interpret prompts as instructions; first large-scale reported supply-chain prompt-injection on agentic dev tooling — *source: TLDR "GPT-5.4 + Anthropic's leaked memo"*
- **2025-12-18**: AI Breakfast reports "8M+ AI Chats Secretly Harvested" — large-scale chat-data exfiltration coverage — *source: AI Breakfast "8M+ AI Chats Secretly Harvested"; TAAFT*
- **2025-12-16**: Reverse-engineering of [[anthropic]]'s Claude memory system published — uses on-demand tools and selective retrieval; raises red-team-style transparency questions — *source: TLDR AI "OpenAI adopts Skills"; AlphaSignal*
- **2025-12-12**: [[openai]] self-rates GPT-5 "high" cybersecurity threat under preparedness framework — zero-day discovery, enterprise intrusion potential — *source: TAAFT "GPT-5 Gets a Danger Label"*
- **2025-12-11**: SGTM (selective unlearning) method published — surgically removes specific knowledge from models; "truth serum" research framing — *source: AlphaSignal "OpenAI 320× surge / SGTM"*
- **2025-12-06**: 20M [[chatgpt]] cloud chats turned over to court via subpoena — illustrates that "private" chats are discoverable; "Confessions" diagnostic technique introduced for catching reward hacking — *source: TAAFT "20M ChatGPT Chats Exposed"; AI Breakfast*
- **2025-11-24**: Anthropic discloses Chinese state-backed group used Claude AI to automate cyberattacks — first widely-reported nation-state automated cyberattack via a frontier model — *source: 2025-11-24 cycle*
- **2025-10-31**: [[aardvark]] launches as GPT-5 code-security agent — vulnerability discovery and patch suggestions overlap with prompt-injection-class issues — *source: AlphaSignal; TLDR AI*
- **2025-10-31**: "AI's Brain Got Hacked (It Knew)" — TAAFT cycle on prompt-injection awareness — *source: TAAFT*
- **2025-10-27**: OpenAI publishes mitigation guidance for prompt injections in ChatGPT — *source: TLDR AI "mitigating prompt injections"*
- **2025-10-23**: Hidden-text browser-hijack disclosed for [[chatgpt-atlas]] — invisible page text taken as instructions by the in-browser assistant — *source: TAAFT "Hidden Text Hijacks AI Browsers"*
- **2025-10-01**: Three [[gemini]] models disclosed vulnerable to prompt-injection, leading to sensitive data leakage — *source: TAAFT "Google's AI Security Nightmare"*

## Key Facts

- Attack surface grows as models gain tool use, browsing, and long-context retrieval
- Known Oct 2025 production vulnerabilities: 3 Gemini models (Google); hidden-text hijack of [[chatgpt-atlas]]
- First major mitigation publication: OpenAI ChatGPT guidance (Oct 27 2025)
- Defense-in-depth examples: Perplexity Comet's published security model

## Open Questions

- Has Google patched the disclosed Gemini vulnerabilities?
- Has OpenAI shipped a content-security model for Atlas (signed DOM, instruction-channel separation)?
- Do [[claude-skills]], [[agentkit]], [[jules]] have their own prompt-injection audits?

## Sources

- data/summaries/2025-10-01.json (TAAFT — Google's AI Security Nightmare)
- data/summaries/2025-10-23.json (TAAFT — Hidden Text Hijacks AI Browsers)
- data/summaries/2025-10-27.json (TLDR AI — mitigating prompt injections)
- data/summaries/2025-10-31.json (AlphaSignal — OpenAI launches Aardvark; TLDR AI — OpenAI security agent; TAAFT — AI's Brain Got Hacked)
- data/summaries/2025-11-24.json (Anthropic — Chinese state-backed Claude cyber abuse)
- data/summaries/2025-12-06.json (TAAFT — 20M ChatGPT Chats Exposed; AI Breakfast — Confessions technique)
- data/summaries/2025-12-11.json (AlphaSignal — OpenAI 320× surge / SGTM unlearning)
- data/summaries/2025-12-12.json (TAAFT — GPT-5 Gets a Danger Label)
- data/summaries/2025-12-16.json (TLDR AI — OpenAI adopts Skills [Claude memory reverse-engineering]; AlphaSignal)
- data/summaries/2025-12-18.json (AI Breakfast — 8M+ AI Chats Secretly Harvested; TAAFT)
- data/summaries/2026-03-07.json (TLDR — GitHub issue title OpenClaw prompt injection — 4K dev machines)
