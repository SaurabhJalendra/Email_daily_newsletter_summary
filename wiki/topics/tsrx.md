---
name: TSRX
description: TypeScript language extension + JSX successor by Dominic Gannaway; statically analyzable for LLMs; compiles to React/Solid/Preact/Vue/Ripple
type: topic
---

# TSRX

> **Type**: topic
> **First mentioned**: 2026-06-20-evening
> **Last updated**: 2026-06-20-evening
> **Status**: stale
> **Related**: [[agent-frameworks]], [[ai-cybersecurity-arms-race]]

## Summary

TSRX is a TypeScript language extension and JSX successor created by Dominic Gannaway (Inferno, Lexical, Ripple). It compiles a single `.tsrx` file to multiple runtimes — React, Solid, Preact, Ripple, and more recently Vue/Vue Vapor — and lets developers write components with normal JavaScript/TypeScript control flow (`if`, `for`, early returns) directly in markup, with the compiler lifting branches into separate components so React's rules-of-hooks remain valid. Open source (MIT), currently in alpha, with a language server plus Prettier/ESLint support.

The reason TSRX matters in an AI/ML newsletter is that it is **explicitly designed to be statically analyzable for LLMs**: by giving AI tooling a predictable, framework-agnostic AST and clear component boundaries, TSRX makes UI code easier for AI agents to read, refactor, and generate than traditional JSX (which often mixes opaque JavaScript expressions and implicit control flow). The Hello, World! cycle headline framed it as "TSRX kills JSX" — positioning the change as a foundational shift in how developers and AI coding agents work with UI code, with secondary implications for plugin security (cleaner surface for capability scoping + key management) and agent-driven UI refactoring.

## Timeline

- **2026-06-20-evening**: **Hello, World! cycle headline "TSRX kills JSX and Anthropic Shuts Fable"** lands TSRX as a JSX-replacement proposal; researchFindings.additionalContext sharpens this into the canonical framing: TSRX is a TypeScript language extension + JSX successor by Dominic Gannaway, MIT-licensed open source in alpha, compiles to React/Solid/Preact/Ripple/Vue/Vue Vapor, supports normal JS control flow (`if`, `for`, early returns) inside markup, lifts branches into separate components to preserve React's rules-of-hooks; **explicitly designed to be statically analyzable for LLMs**. Industry commentary frames TSRX as a potential JSX replacement, with multi-target compilation and AI-friendly structure positioned to support emerging agent runtimes and UI-centric AI workflows — *source: data/summaries/2026-06-20-evening.json (Hello, World! — TSRX kills JSX / new syntax proposal aims to replace JSX by allowing developers to use regular JavaScript control flow directly inside UI code; researchFindings.additionalContext for TSRX — Dominic Gannaway / Inferno, Lexical, Ripple author / MIT alpha / language server + Prettier + ESLint / explicitly designed to be statically analyzable for LLMs / Vue Vapor support; researchFindings.additionalContext for JSX — TSRX framed as replacement amid shift toward typed streaming-oriented runtimes for AI-native execution)*

## Key Facts

- Author: Dominic Gannaway (Inferno, Lexical, Ripple)
- License: MIT, open source, currently in alpha
- File extension: `.tsrx`
- Compile targets: React, Solid, Preact, Ripple, Vue, Vue Vapor
- Tooling: language server, Prettier, ESLint
- Design goal: statically analyzable for LLMs — clean, predictable AST for AI tooling
- Differentiator vs JSX: allows normal JavaScript control flow (`if`, `for`, early returns) directly in markup; compiler lifts conditional hook calls into separate components

## Open Questions

- Adoption trajectory beyond alpha — which major frameworks ship official adapters first?
- Concrete benchmarks of LLM code-generation accuracy on TSRX vs JSX
- How well does TSRX integrate with AI-IDE surfaces like [[cursor]] / [[claude-code]] / [[github-spec-kit]]?
- Does TSRX become substrate for AI-native UI plugin marketplaces (capability scoping + key management)?

## Sources

- data/summaries/2026-06-20-evening.json (Hello, World! — TSRX kills JSX and Anthropic Shuts Fable; researchFindings.additionalContext — TSRX TypeScript extension + JSX successor by Dominic Gannaway / MIT alpha / multi-target compile to React/Solid/Preact/Ripple/Vue Vapor / language server + Prettier + ESLint / statically analyzable for LLMs; JSX — TSRX framed as replacement)
