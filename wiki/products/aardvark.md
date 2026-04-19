---
name: Aardvark
description: OpenAI's GPT-5-powered autonomous code-security agent; launched Oct 31 2025
type: product
---

# Aardvark

> **Type**: product
> **First mentioned**: 2025-10-31
> **Last updated**: 2025-10-31
> **Status**: stale
> **Related**: [[openai]], [[chatgpt]], [[agent-frameworks]], [[prompt-injection]]

## Summary

Aardvark is [[openai]]'s GPT-5-powered autonomous security agent for code repositories, launched 2025-10-31. It scans codebases, models code behavior, and proposes verified patches — i.e., a software-security analogue to a coding agent. Headline benchmark numbers at launch: 92% identification rate on known and synthetic vulnerabilities, plus ten real CVEs already disclosed in open-source projects. Aardvark sits at the intersection of two trends — agent frameworks moving into specialized vertical workflows ([[agent-frameworks]]) and security tooling shifting from static analysis to LLM-native triage.

## Timeline

- **2025-10-31**: Launches — autonomous security researcher built on GPT-5; 92% known/synthetic vulnerability identification; 10 CVEs already filed against open-source projects — *source: AlphaSignal "OpenAI launches Aardvark, a GPT-5 agent for code security"; TLDR AI "OpenAI security agent, ChatGPT browser architecture, Claude Code secrets"*

## Key Facts

- Vendor: [[openai]]
- Underlying model: GPT-5
- Job: identify vulnerabilities, model code behavior, propose verified fixes
- Benchmark: 92% identification on benchmark repositories
- Real-world impact at launch: 10 CVEs disclosed in OSS projects

## Open Questions

- Distribution model — standalone tool, GitHub Action, or a Codex / [[chatgpt]] capability?
- Pricing tier?
- Does Aardvark integrate with GitHub Agent HQ or remain a separate surface?
- False-positive rate on the 92% headline — how does it compare to existing SAST?

## Sources

- data/summaries/2025-10-31.json (AlphaSignal — OpenAI launches Aardvark; TLDR AI — OpenAI security agent, ChatGPT browser architecture)
