---
name: Prompt Injection
description: Security category where crafted inputs hijack LLM behavior
type: topic
---

# Prompt Injection

> **Type**: topic
> **First mentioned**: 2025-10-01
> **Last updated**: 2025-10-01
> **Status**: stale
> **Related**: [[gemini]], [[google]]

## Summary

Prompt injection is a security category where adversarial content embedded in model inputs (retrieved documents, emails, tool outputs) manipulates the model into exfiltrating data, executing unintended actions, or overriding system instructions. In early October 2025 researchers publicly disclosed prompt-injection vulnerabilities across three [[gemini]] models, causing sensitive data leakage and renewed industry focus on input-boundary defenses.

## Timeline

- **2025-10-01**: Three [[gemini]] models disclosed vulnerable to prompt-injection, leading to sensitive data leakage — *source: TAAFT "Google's AI Security Nightmare"*

## Key Facts

- Attack surface grows as models gain tool use, browsing, and long-context retrieval
- Known Oct 2025 production vulnerability: 3 Gemini models (Google)

## Open Questions

- Has Google patched the disclosed Gemini vulnerabilities?
- Do [[claude-skills]], [[agentkit]], [[jules]] have their own prompt-injection audits?

## Sources

- data/summaries/2025-10-01.json (TAAFT — Google's AI Security Nightmare)
