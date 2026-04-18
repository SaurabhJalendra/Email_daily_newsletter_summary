---
name: Prompt Injection
description: Security category where crafted inputs hijack LLM behavior — Atlas hidden-text hijack, Gemini disclosures
type: topic
---

# Prompt Injection

> **Type**: topic
> **First mentioned**: 2025-10-01
> **Last updated**: 2025-11-24
> **Status**: active
> **Related**: [[gemini]], [[google]], [[chatgpt-atlas]], [[ai-browsers]], [[aardvark]], [[openai]], [[perplexity]]

## Summary

Prompt injection is a security category where adversarial content embedded in model inputs (retrieved documents, emails, tool outputs) manipulates the model into exfiltrating data, executing unintended actions, or overriding system instructions. In early October 2025 researchers publicly disclosed prompt-injection vulnerabilities across three [[gemini]] models, causing sensitive data leakage. The category became headline news in late October 2025 when [[chatgpt-atlas]] launched and was almost immediately shown to be vulnerable to a hidden-text browser-hijack attack — pages could include invisible instructions that the in-browser ChatGPT would obey, effectively giving attackers write access to user actions. Mitigation became a recurring topic across newsletters: OpenAI shipped guidance on mitigating prompt injection in ChatGPT, [[perplexity]] talked through a defense-in-depth approach for Comet, and [[aardvark]] (OpenAI's GPT-5 security agent) was framed as part of the broader response.

## Timeline

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
