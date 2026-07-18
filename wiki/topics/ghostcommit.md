---
name: GhostCommit
description: Prompt-injection attack that hides instructions inside a PNG image embedded in a pull request, tricking coding agents into leaking sensitive files like .env credentials
type: topic
---

# GhostCommit

> **Type**: topic
> **First mentioned**: 2026-07-18-evening
> **Last updated**: 2026-07-18-evening
> **Status**: active
> **Related**: [[prompt-injection]], [[claude-code]], [[cursor]], [[openai-codex]], [[ai-cybersecurity-arms-race]]

## Summary

GhostCommit is a novel prompt-injection attack against AI coding agents disclosed by security researchers in July 2026. The attack **hides prompt injection instructions inside a PNG image attached to a pull request**, exploiting the fact that modern coding agents scan PR contents (including image attachments) as part of code review. When the agent processes the PR, the hidden instructions coerce it into **leaking sensitive information such as `.env` credentials** or other secrets from the target repository. GhostCommit extends the *indirect-prompt-injection-via-repo-metadata* pattern (previously demonstrated against README / CONTRIBUTING / devcontainer files against [[claude-code]] — see [[prompt-injection]]) into an **image-tier attack surface** — much harder to detect because image-hidden text bypasses text-based content-scanning defenses. It lands the same cycle as the disclosed [[claude-code]] Auto Mode RCE vulnerability, sharpening the *coding-agent-supply-chain* threat model into a multi-vector concern (repo-text + image-embedded prompts + malicious library dependencies).

## Timeline

- **2026-07-18-evening**: **GhostCommit disclosed** — researchers demonstrate that a PNG image embedded in a pull request can carry hidden prompt-injection instructions that coerce the reviewing coding agent to leak sensitive files like `.env` credentials — *source: data/summaries/2026-07-18-evening.json (Hello, World! MEDIUM "KFC Hacked and a Ghostcommit!")*

## Key Facts

- Attack vector: PNG image attached to a pull request
- Payload: hidden prompt-injection instructions
- Exfiltration target: sensitive files (`.env` credentials, secrets)
- Trigger: coding agent reviewing / processing the PR
- Class: indirect prompt injection (agent obediently reads and follows attacker-controlled content that reaches it via a trusted channel)
- Structural parallel: same-cycle [[claude-code]] Auto Mode RCE via malicious open-source library

## Open Questions

- Named research group / disclosure venue / PoC repository
- Which coding agents were demonstrated vulnerable ([[claude-code]] / [[cursor]] / [[openai-codex]] / [[jules]] / [[cognition]] Devin)
- Whether GhostCommit uses steganographic embedding, alpha-channel encoding, EXIF metadata, or in-band text-in-image
- Vendor mitigation timelines
- Whether PR-scanning agents can pre-filter images for hidden instructions before ingestion

## Sources

- data/summaries/2026-07-18-evening.json (Hello, World! MEDIUM "KFC Hacked and a Ghostcommit!")
