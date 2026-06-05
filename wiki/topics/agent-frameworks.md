---
name: Agent Frameworks
description: First-party and third-party frameworks for building AI agents — SDKs, routines, memory services
type: topic
---

# Agent Frameworks

> **Type**: topic
> **First mentioned**: 2025-10-01
> **Last updated**: 2026-04-29
> **Status**: active
> **Related**: [[agentkit]], [[openai-codex]], [[claude-skills]], [[claude-code]], [[claude-cowork]], [[claude-design]], [[jules]], [[cursor]], [[agentforce]], [[github-spec-kit]], [[agentic-ai-foundation]], [[model-context-protocol]], [[nemotron-3]], [[openai]], [[google]], [[anthropic]], [[salesforce]], [[auth0]], [[agent-composer]], [[lux]], [[claude-managed-agents]]

## Summary

"Agent frameworks" refers to the scaffolding — SDKs, runtime features, tools, and managed services — that lets developers compose LLM-powered agents. In early October 2025 every major lab shipped first-party scaffolding: [[openai]] launched [[agentkit]] at DevDay 2025; [[anthropic]] shipped [[claude-skills]] (later extended with Agent Skills) and added plugins to [[claude-code]]; [[google]] released [[jules]] Tools and API. By April 2026 the category had matured into long-running, scheduled, and memory-backed agents: Anthropic added always-on Routines to [[claude-code]], OpenAI folded background computer use and parallel agents into [[openai-codex]] and updated its Agents SDK with a native harness and sandboxed execution, Cloudflare shipped a managed Agent Memory service that extracts facts / events / instructions from agent conversations, and Ollama 0.21 integrated Hermes Agent (Nous Research) into a local-first stack.

## Timeline

- **2026-03-02**: [[anthropic]] ships 7-part Agentic blitz for Claude — remote control, Figma connector, and other agent-workflow features — *source: 2026-03-02 cycle*
- **2026-02-27**: [[perplexity-computer]] launches with 19-model orchestration; [[vercel]] open-sources Chat SDK for cross-platform bots; [[nous-research]] Hermes Agent goes open-source; [[claude-cowork]] adds scheduled tasks — *source: 2026-02-27 cycle*
- **2026-02-26**: [[notion]] launches Custom Agents — autonomous AI teammates that automate tasks and answer questions proactively — *source: 2026-02-26 cycle*
- **2026-02-23**: [[cisco]] deploys AI agents to absorb routine network-ops work; [[apple]] working on on-device agent that uses apps on behalf of users — *source: 2026-02-23 cycle*
- **2026-02-19**: [[grok-4-20]] public beta lands with four-agent parallel research workflow — xAI's first explicit multi-agent surface; Grok Build adds Parallel Agents + Arena Mode (IDE-class) — *source: 2026-02-19 cycle*
- **2026-02-17**: Manus debuts inside Telegram — agent surface extends into messaging — *source: 2026-02-17 cycle*
- **2026-02-13**: Cursor Plugin Marketplace launches — third-party plugin distribution surface inside the Cursor IDE — *source: 2026-02-13 cycle*
- **2026-02-12**: Warp ships Oz — long-running coding agent with autonomous task delegation in the terminal — *source: 2026-02-12 cycle*
- **2026-02-09**: [[openai]] adds ChatGPT Skills — packaged reusable agent capabilities (sibling to [[agent-skills]]); GPT-5.3-Codex-Spark on [[cerebras]] hits 1000+ tokens/sec; [[openai-frontier]] launches as enterprise AI-Employee platform — *source: 2026-02-09 cycle*
- **2026-02-05**: [[gpt-5-3-codex]] released — 77.3% Terminal-Bench 2.0, 25% faster than GPT-5.2-Codex; [[qwen3-coder-next]] open-weights 80B MoE coding model — *source: 2026-02-05 cycle*
- **2026-01-17**: OpenAI Open Responses API — open, event-based agent API standardizing reasoning + tool-call + result events; OpenCode adds GitHub Copilot subscription support; GitHub launches cross-agent memory for Copilot — *source: AlphaSignal 2026-01-17*
- **2026-01-17**: [[claude-code]] diff view — inline review in-session without external tools — *source: AlphaSignal 2026-01-17*
- **2026-01-14**: [[claude-cowork]] launches — Anthropic's local-file agent that "organizes digital life" across files and connectors — *source: 2026-01-14 cycle*
- **2026-01-12**: Manus Slack integration — agent workflows delegable from Slack threads — *source: 2026-01-12 cycle*
- **2026-01-10**: Grok Build previewed — [[xai]] upcoming coding agent (web + CLI); [[claude-code]] 2.1.0 ships with hooks for agents + skills, skills hot reload, `/move` — *source: 2026-01-10 cycle*
- **2026-01-03**: LangChain reframes "agent engineering" as a discipline; workflow patterns and eval tooling converge — *source: 2026-01-03 cycle*
- **2025-12-31**: [[meta]] acquires [[manus]] — Chinese-roots general-purpose agent startup brought into Superintelligence unit — *source: 2025-12-31 cycle*
- **2025-12-21**: [[anthropic]] ships [[claude-code]] browser extension GA — injects Claude into any web page; plus ChatGPT Atlas-style agentic browsing direction — *source: 2025-12-21 cycle*
- **2025-12-20**: [[agent-skills]] published as open standard — reusable capability packages shared across [[anthropic]] and [[openai]] agent stacks — *source: 2025-12-20 cycle*
- **2026-04-16**: Always-on Routines land in [[claude-code]] — managed-cloud execution triggered by APIs, schedules, GitHub events — *source: AlphaSignal "Anthropic presents always-on Routines in Claude Code"*
- **2026-04-19**: **Many-Tier Instruction Hierarchy (ManyIH)** proposed by researchers — addresses instruction conflicts in LLM agents, surpassing traditional models with fixed privilege levels (academic-research framing — sets up the conceptual frame for next-gen multi-agent permission models); **Subagents arrive in Gemini CLI** — main agent delegates to specialized expert subagents operating in separate context windows; **Cursor multi-agent system** optimizes CUDA kernels (38% speedup) — *source: 2026-04-19 cycle (ManyIH paper; Gemini CLI subagents; Cursor multi-agent CUDA)*
- **2026-04-20**: Ollama supports **GitHub Copilot CLI** — terminal agent that works directly with repos on GitHub (allows users to bring GitHub context into sessions); **Chrome Skills** lets users save favorite Gemini prompts and reuse across web pages (Gemini-prompt-reuse surface) — *source: 2026-04-20 cycle (Ollama + GitHub Copilot CLI; Chrome Skills for Gemini prompts)*
- **2026-04-21**: **xAI Grok Build + Grok CLI ship** — tools for autonomous coding and development (productizes Grok-as-coding-agent thesis) — *source: 2026-04-21 cycle*
- **2026-04-24**: **OpenAI introduces Workspace Agents** preview — shared AI agents for team workflows; **Gemini Enterprise Agent Platform** ships as Google's new platform for building/scaling/governing/optimizing agents across multi-day workflows; **Claude Context** semantic code search for AI coding assistants — *source: 2026-04-24 cycle*
- **2026-04-25**: **OpenAI Workspace Agents launches** in ChatGPT (formal launch); **Kimi K2.6 Agent Swarm release** continues to be referenced as multi-agent surface — *source: 2026-04-25 cycle*
- **2026-04-26**: **Anthropic Claude Managed Agents gains built-in memory** — continuous learning across sessions; **ChatGPT Workspace Agents** + **Codex Chronicle screen memory** improves Codex's information retention over longer sequences; **Sakana launches Fugu** — multi-agent beta — *source: 2026-04-26 cycle*
- **2026-04-29**: **OpenAI Symphony** released — open-source spec for Codex orchestration (Linear integration for automated coding tasks); **Cognition introduces Devin** — local coding agent that runs entirely on user's machine with full access to codebase + tools (pre-coverage; full devin release context); **Microsoft Outlook Agent Mode** — Copilot-driven inbox + calendar workflow; **"Context Rot" workaround proposed** using parallel subagents to improve LLM performance — *source: 2026-04-29 cycle (Symphony open-source spec; Devin local coding agent; Outlook Agent Mode; Context Rot parallel-subagents)*
- **2026-04-16**: [[openai-codex]] repositioned as superapp — background computer use, parallel agents, in-app browser — *source: The Rundown AI "OpenAI's superapp hiding inside Codex"*
- **2026-04-16**: OpenAI Agents SDK adds native harness for cross-file / tool workflows and sandboxed execution — *source: TLDR AI "Gemini 3.1 Flash TTS, Agent-to-Person marketplace, OpenAI Agents SDK"*
- **2026-04-16**: Cloudflare launches Agent Memory — managed service that extracts facts / events / instructions from agent conversations and retrieves on demand (part of Cloudflare Agents Week) — *source: TAAFT "Claude Just Became a Designer"; TLDR "Opus 4.7, Cloudflare Agents Week"*
- **2026-04-16**: Ollama 0.21 ships with Hermes Agent (Nous Research) integration for local self-improving agents — *source: Ollama Newsletter*
- **2026-04-16**: [[claude-design]] ships as design-stage agent with hand-off to [[claude-code]] — *source: TAAFT; World of AI*
- **2025-12-19**: Grok Voice Agent API released by [[xai]] — voice-first agent endpoint — *source: AlphaSignal "Gemini 3 Flash / TPU PyTorch / Grok Voice Agent API"*
- **2025-12-18**: [[anthropic]] testing Agentic Tasks Mode for Claude — reframes assistant as a system for getting work done — *source: AI Breakfast "OpenAI's Triple Strike"; TLDR AI*
- **2025-12-17**: [[nemotron-3]] launched — NVIDIA's open-source agentic models (30B/3B active MoE) with 4× throughput for multi-agent AI — *source: AlphaSignal "Nemotron 3"; TLDR AI*
- **2025-12-16**: [[openai]] adopts Skills — accessible by prompting "Create a zip file of /home/oai/skills" in ChatGPT and Codex CLI; Tinker GA from [[thinking-machines]] — *source: TLDR AI "OpenAI adopts Skills / Tinker GA / reverse engineering Claude"*
- **2025-12-13**: Gemini Deep Research agent now in Gemini API via new Interactions API — *source: Google AI Studio*
- **2025-12-12**: [[cursor]] Debug Mode added; [[claude-code]] async subagents and faster compaction — *source: TLDR AI "DeepMind's automated lab / Cursor Debug Mode"; AlphaSignal*
- **2025-12-11**: Linux Foundation co-founds [[agentic-ai-foundation]] with [[openai]] + [[anthropic]] + Block; [[anthropic]] donates [[model-context-protocol]] (MCP); SGTM published for selective knowledge removal — *source: TAAFT "First AGI Achieved"; TLDR AI "OpenAI Image-2"; AlphaSignal*
- **2025-12-10**: [[claude-code]] launches inside Slack; LlamaIndex Newsletter ships agentic-RAG patterns — *source: The Rundown AI "Inside OpenAI's massive AI enterprise report"; LlamaIndex Newsletter 2025-12-09*
- **2025-11-22**: xAI Grok 4.1 Fast API + Agent Tools API — autonomous web/X search, document retrieval, Python execution, MCP-server integration, parallel tool execution — *source: AI Breakfast*
- **2025-11-21**: [[gpt-5-1-codex-max]] released — compaction across context windows enables 24+ hour development sessions; 77.9% SWE-bench Verified, 30% fewer thinking tokens; default in Codex CLI / IDE — *source: TLDR AI; The Rundown AI; AI Breakfast*
- **2025-11-21**: Sentry's Seer AI code reviewer — uses production-error data and commit history to predict regressions; auto-generates unit tests for PRs — *source: TLDR AI*
- **2025-11-20**: [[antigravity]] launches — Google's free, agent-first VS Code-forked IDE for [[gemini-3]] with multi-agent execution and Artifacts (task lists, screenshots, browser recordings) — *source: TLDR AI "Anthropic $350B / Antigravity"; The Rundown AI; TAAFT*
- **2025-11-20**: Manus releases a browser extension that automates workflows across CRMs and logged-in platforms — *source: FutureTools "Bezos is BACK"*
- **2025-11-16**: AgentEvolver research — self-improving loop where AI agents generate tasks, judge performance, and evolve autonomously — *source: TAAFT cycle "AgentEvolver"*
- **2025-11-13**: Scale's Agentex — enterprise-grade hosting/orchestration framework for deploying, managing, scaling AI agents — *source: AlphaSignal cycle*
- **2025-11-13**: Replit launches AI Integrations — instant access to 300+ AI models from OpenAI, Anthropic, Meta, Google — *source: AlphaSignal "Replit AI Integrations"*
- **2025-11-12**: Grok Code Remote — xAI feature to run code in remote environments directly from the web — *source: TAAFT cycle*
- **2025-11-11**: GPT-5-Codex-Mini — cost-efficient variant with 4× more usage, CLI + IDE distribution — *source: AlphaSignal*
- **2025-11-06**: Cognition launches Codemaps — structured maps of complex codebases — *source: AlphaSignal*
- **2025-11-06**: [[elevenlabs]] hosts LLMs inside Agents Platform to cut latency and reasoning cost for voice agents — *source: AlphaSignal*
- **2025-10-31**: [[cursor-composer]] launches as Cursor's first in-house coding model (~4× faster, sub-30-second tasks) alongside multi-agent UI — *source: AlphaSignal "Cursor unveils Composer"*
- **2025-10-30**: [[cursor-composer]] / Cursor 2.0 multi-agent IDE; Cognition's SWE-1.5 ships on Windsurf — *source: TLDR AI "Cursor 2.0, Cognition's SWE-1.5"*
- **2025-10-29**: [[github-agent-hq]] launches — multi-agent control plane in GitHub with Claude / Copilot / others as featured agents — *source: TLDR AI "GitHub Agent HQ"*
- **2025-10-21**: [[claude-code-web]] launches — browser/cloud-based Claude Code execution — *source: AlphaSignal; TLDR AI*
- **2025-10-17**: [[anthropic]] unveils Claude Agent Skills for modular task automation — *source: AlphaSignal; The Rundown AI; TLDR AI*
- **2025-10-15**: [[github-spec-kit]] coverage — spec-driven coding for agents — *source: TLDR*
- **2025-10-14**: [[salesforce]] launches [[agentforce]] 360 — *source: TLDR AI*
- **2025-10-13**: Plugins ship for [[claude-code]] — *source: TLDR AI*
- **2025-10-08**: [[cursor]] Plan Mode surfaces — *source: TLDR AI*
- **2025-10-07**: [[openai]] launches [[agentkit]] at DevDay 2025 — *source: The Rundown AI; TLDR AI; AlphaSignal*
- **2025-10-06**: OpenAI Agent Builder surfaces; [[jules]] Tools and API ship — *source: Mindstream; The Rundown AI; TLDR AI*
- **2025-10-02**: [[claude-skills]] ships — *source: TLDR AI*
- **2025-10-01**: [[auth0]] launches Auth0 for AI Agents — *source: TAAFT*

## Key Facts

- First-party frameworks active in all three labs as of 2026: OpenAI ([[agentkit]] + [[openai-codex]] + Agents SDK), Anthropic ([[claude-skills]] + [[claude-code]] Routines + [[claude-design]]), Google ([[jules]])
- Memory is now a first-class agent primitive (Cloudflare Agent Memory; [[claude-opus-4-7]] file-based memory)
- Scheduling / event-triggered execution is a first-class primitive (Claude Code Routines)
- Local-first agent stack: Ollama 0.21 + Hermes Agent
- Dedicated agent authentication: Auth0

## Open Questions

- Will frameworks converge on a common tool / skill packaging format, or fragment?
- How does Model Context Protocol (MCP) relate to Routines / Skills / Agents SDK? (no dedicated wiki page yet — create when MCP coverage accumulates)
- Pricing model for managed-cloud agent execution (Routines, Codex background compute)?

## Sources

- data/summaries/2025-10-01.json (TAAFT — Auth0 for AI Agents)
- data/summaries/2025-10-02.json (TLDR AI — Claude Skills)
- data/summaries/2025-10-06.json (Mindstream — Agent Builder; The Rundown AI — Jules Tools; TLDR AI — Jules API)
- data/summaries/2025-10-07.json (The Rundown AI — AgentKit; TLDR AI — AgentKit; Matt from FutureTools — Altman building agents)
- data/summaries/2025-10-08.json (TLDR AI — Cursor Plan Mode; AlphaSignal — Inside OpenAI's AgentKit)
- data/summaries/2025-10-13.json (TLDR AI — Claude Code plugins)
- data/summaries/2025-10-14.json (TLDR AI — Salesforce Agentforce 360)
- data/summaries/2025-10-15.json (TLDR — GitHub Spec Kit)
- data/summaries/2025-10-17.json (AlphaSignal — Anthropic unveils Claude Agent Skills; The Rundown AI — Claude gains new Skills; TLDR AI — Claude Skills)
- data/summaries/2025-10-21.json (AlphaSignal — Claude Code Web; TLDR AI — Claude Code Web)
- data/summaries/2025-10-29.json (TLDR AI — GitHub Agent HQ)
- data/summaries/2025-10-30.json (TLDR AI — Cursor 2.0, Cognition's SWE-1.5)
- data/summaries/2025-10-31.json (AlphaSignal — Cursor unveils Composer)
- data/summaries/2025-11-06.json (AlphaSignal — Cognition Codemaps; ElevenLabs hosts LLMs)
- data/summaries/2025-11-11.json (AlphaSignal — GPT-5-Codex-Mini)
- data/summaries/2025-11-12.json (TAAFT cycle — Grok Code Remote)
- data/summaries/2025-11-13.json (AlphaSignal — Replit AI Integrations; Scale Agentex)
- data/summaries/2025-11-16.json (TAAFT cycle — AgentEvolver)
- data/summaries/2025-11-20.json (TLDR AI — Antigravity; The Rundown AI; TAAFT — Gemini 3 Is Officially Here; FutureTools — Manus extension)
- data/summaries/2025-11-21.json (TLDR AI — GPT-5.1-Codex-Max / Sentry Seer / Grok 4.1 Agent Tools API; The Rundown AI — Codex-Max codes for 24 hours)
- data/summaries/2025-11-22.json (AI Breakfast — Nano Banana Pro Sets New Standard [Grok 4.1 Fast API / Agent Tools API])
- data/summaries/2025-12-10.json (The Rundown AI — Inside OpenAI's massive AI enterprise report [Claude Code in Slack]; LlamaIndex Newsletter 2025-12-09)
- data/summaries/2025-12-11.json (TAAFT — First AGI Achieved [Agentic AI Foundation]; TLDR AI — OpenAI Image-2 / Devstral2; AlphaSignal — SGTM)
- data/summaries/2025-12-12.json (TLDR AI — DeepMind's automated lab / Cursor Debug Mode; AlphaSignal — Microsoft 37.5M Copilot [Claude Code async])
- data/summaries/2025-12-13.json (Google AI Studio — Gemini Deep Research agent in API)
- data/summaries/2025-12-16.json (TLDR AI — OpenAI adopts Skills / Tinker GA / reverse engineering Claude)
- data/summaries/2025-12-17.json (AlphaSignal — Nemotron 3; TLDR AI — Nvidia Nemotron 3 / Claude agentic tasks)
- data/summaries/2025-12-18.json (AI Breakfast — OpenAI's Triple Strike [Claude Agentic Tasks Mode]; TLDR AI)
- data/summaries/2025-12-19.json (AlphaSignal — Grok Voice Agent API)
- data/summaries/2026-01-10.json (Claude Code 2.1.0; Grok Build preview)
- data/summaries/2026-01-12.json (Manus Slack)
- data/summaries/2026-01-14.json (Claude Cowork launch)
- data/summaries/2026-01-17.json (AlphaSignal — OpenAI Open Responses API; Claude Code diff view; GitHub cross-agent memory)
- data/summaries/2026-04-16.json (AlphaSignal — Anthropic presents always-on Routines in Claude Code; The Rundown AI — OpenAI's superapp hiding inside Codex; TLDR AI — OpenAI Agents SDK; TAAFT — Claude Just Became a Designer [Cloudflare Agent Memory]; TLDR — Opus 4.7, Cloudflare Agents Week; World of AI — ANTHROPIC DROPS Claude Design!; Ollama Newsletter — 0.21 with Hermes Agent)
- data/summaries/2026-02-23.json (Cisco AI agents; Apple on-device agent)
- data/summaries/2026-02-26.json (Notion Custom Agents)
- data/summaries/2026-02-27.json (Perplexity Computer; Vercel Chat SDK; Nous Hermes Agent; Claude Cowork scheduled tasks)
- data/summaries/2026-03-02.json (Anthropic Agentic 7-part blitz)
