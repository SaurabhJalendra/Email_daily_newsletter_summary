---
name: Muse Code
description: Meta's Aug 2026 first AI coding agent — terminal-based, powered by Muse Spark 1.2, supports 24-hour sessions and 1,000+ tool calls; contributor tier 12.5-21x cheaper in exchange for training-data grant
type: product
---

# Muse Code

> **Type**: product
> **First mentioned**: 2026-08-06-evening
> **Last updated**: 2026-08-07-evening (**Evening cross-cohort sustain — AINews HIGH + World of AI MEDIUM both re-anchor the Aug 5 launch: *"Meta launched Muse Code"* framing plus companion mention of Muse Spark 1.2's five-Olympiad gold-medal result. Extends the morning-cohort AlphaSignal + TLDR AI + researchFindings.additionalContext canonical framing into a **cross-cycle-stability anchor** across morning + evening cohorts**. AINews HIGH: *"Meta's Muse Spark 1.2 model has achieved gold-medal-level performance in five STEM Olympiads, including perfect theory scores at APHO and IPHO, demonstrating its capabilities in pure reasoning tasks"* — implicit companion recoverage on the co-trained Muse Code + Muse Spark 1.2 substrate. World of AI MEDIUM: *"Meta launched Muse Code, its first AI coding agent"*. Sustains 08-06-evening + 08-07-morning framings without new detail-tier anchors — reads as *cross-cycle-stability recoverage tier* rather than net-new anchor cycle. See [[muse-spark]] (Olympiad-gold anchor) + [[meta]] — *source: data/summaries/2026-08-07-evening.json (AINews HIGH "[AINews] AMD buys Taalas"; World of AI MEDIUM "GPT-6! 🔥 DeepSeek-V4-Flash & Qwen 3.8-Max Drop")*)
> **Previously updated**: 2026-08-07-morning (**Morning-cohort tri-newsletter cross-cohort recoverage — AlphaSignal + TLDR AI + TAAFT/Superhuman convergence anchors Muse Code as canonical *terminal coding agent that runs 1,000+ tool calls autonomously* per-cycle framing**. AlphaSignal MEDIUM: *"Meta has shipped Muse Code, a terminal coding agent that runs 1,000+ tool calls autonomously, making it a significant competitor in the AI coding tools market. Muse Code is powered by Muse Spark 1.2, a coding-optimized update to Meta's Muse Spark model family"*. TLDR AI MEDIUM: *"Meta has released Muse Code, a terminal-based AI coding agent powered by Muse Spark 1.2, which is designed to take on complete software engineering workflows across large codebases and is positioned as a competitor to tools like Anthropic's Claude Code and OpenAI's Codex"*. researchFindings.additionalContext deepens the picture: *"1,000+ tool calls over 24 hours"* + *"Meta Model API"* public preview + *"standard paid tier (with prompts excluded from training) and a much cheaper contributor tier that allows Meta to use developer traffic to improve future models, undercutting rivals on price"*. First publicly framed on this cycle: (a) *AlphaSignal-tier canonical "1,000+ tool calls autonomously" framing* — sharpens the 08-06-evening World-of-AI/AINews framings into a *cross-cohort canonical per-run tool-call anchor*; (b) *"Meta's first dedicated coding assistant to compete with tools like Anthropic's Claude Code and OpenAI's Codex"* framing from researchFindings — canonicalizes the *three-way frontier-lab coding-agent race* on Meta's side; (c) *"prompts excluded from training" on standard tier + "training-data grant" on contributor tier* two-tier disambiguation — first publicly framed *explicit-training-data-usage contract* on Muse Code tiers in this wiki. See [[meta]] + [[muse-spark]] + [[claude-code]] + [[openai-codex]] + [[agent-frameworks]] — *source: data/summaries/2026-08-07-morning.json (AlphaSignal MEDIUM "Prime Intellect Agent 🧠, Meta Muse Code Terminal 💻, Skills.sh v1.2 Upd"; TLDR AI MEDIUM "Google DeepMind reshuffle 🧠, Meta Muse Code 💻, Anthropic chip team 🧩"; researchFindings.additionalContext for Meta Muse Code)*)
> **Previously updated**: 2026-08-06-evening
> **Status**: launched (public beta)
> **Related**: [[meta]], [[muse-spark]], [[claude-code]], [[openai-codex]], [[agent-frameworks]], [[software-factories]], [[prime-agent]]

## Summary

Muse Code is [[meta]]'s first AI coding agent, launched in public beta for macOS and Linux on August 5, 2026 alongside a refreshed [[muse-spark]] 1.2 coding-focused model. It is a **terminal-based tool** that installs with a single command and is designed for **long-horizon software engineering tasks over large, complex repositories** — planning changes, writing code, validating results, and coordinating parallel sub-agents that work in isolated worktrees. Meta demonstrated stress tests running **24-hour sessions with 1,000+ tool calls** iteratively optimizing GPU kernels on NVIDIA Hopper GPUs, positioning the tool for durable multi-day agentic development rather than single-turn code completion. Async background agents plus a local event log make sessions traceable and resumable.

Distribution is via a **pay-as-you-go standard tier** plus a **"contributor tier"** at $0.10 input / $0.20 output per million tokens (12.5×–21× cheaper than standard) that requires developers to **grant Meta permission to train future models on their prompts and completions**, with a hard **60-requests-per-minute** throughput ceiling. The launch places Meta directly into the AI coding-agent race with [[anthropic]]'s [[claude-code]] and [[openai]]'s [[openai-codex]], reframing the frontier-lab-tier developer surface as a three-way contest.

## Timeline

- **2026-08-06-evening**: **Launched — Meta ships Muse Code in public beta powered by co-trained Muse Spark 1.2; positions second behind [[claude-opus-5]] on Terminal-Bench 2.1, DeepSWE v1.1, and Meta's internal coding benchmark**. World of AI MEDIUM ***"Meta DROPS Muse Code! 🔮🤖"***: *"Meta has released Muse Code, its first AI coding agent, in public beta for macOS and Linux, powered by the new Muse Spark 1.2 model, which can handle large, complex codebases and execute complete software engineering tasks"* + *"Muse Code is a terminal-based tool that installs with a single command and can spawn parallel sub-agents that work safely in isolated worktrees, with a focus on long-horizon reliability and tooling integration"* + *"Meta is offering a contributor tier for Muse Code at $0.10 input and $0.20 output, which is 12.5 to 21 times cheaper than the standard tier, but requires permission to train future Meta models on the user's prompts and completions, and has a hard throughput ceiling of 60 requests per minute"*. AINews HIGH: *"Meta has released Muse Code, its first AI coding agent, in beta/preview for developers, and updated Muse Spark 1.2 for stronger code generation, debugging, and long-running developer workflows. Muse Code is designed for complex coding workstreams, offering persistent agents, built-in verification commands, and competitive API pricing"*. The Rundown AI HIGH: *"Meta has released Muse Code, a beta terminal coding agent powered by the Muse Spark 1.2 model, which can build, plan, and validate code changes across large repositories, and is available through a pay-as-you-go model and a cheaper contributor tier"*. researchFindings additional context anchors: *"24-hour sessions and 1,000+ tool calls, as demonstrated in stress tests where it iteratively optimized GPU kernels on NVIDIA Hopper GPUs"* + *"1M-token context window designed for end-to-end coding sessions on large codebases"* + *"async background agents and a local event log to keep sessions traceable and resumable"* + Zuckerberg X-post announcing the launch and framing the contributor tier as *"paying in training data"*. See [[meta]] + [[muse-spark]] + [[agent-frameworks]] + [[claude-code]] + [[openai-codex]] — *source: data/summaries/2026-08-06-evening.json (World of AI MEDIUM "Meta DROPS Muse Code! 🔮🤖"; AINews HIGH "Jeff, Sanjay, Oriol, and Quoc depart DeepMind"; The Rundown AI HIGH "🔄 Google's biggest AI shakeup yet"; researchFindings.additionalContext for Meta + Muse Code + Mark Zuckerberg)*

## Key Facts

- Vendor: [[meta]] (Meta Superintelligence Labs)
- Model substrate: [[muse-spark]] 1.2 (co-trained with Muse Code)
- Interface: terminal-based CLI (single-command install on macOS + Linux)
- Context window: 1M tokens
- Stress-test anchor: 24-hour sessions with 1,000+ tool calls (Hopper GPU kernel optimization)
- Architecture: async background agents, local event log, parallel sub-agents in isolated git worktrees
- Standard tier: pay-as-you-go (rates not published)
- Contributor tier: $0.10 input / $0.20 output per M tokens — 12.5–21× cheaper, requires training-data grant, 60 req/min ceiling
- Benchmarks: second behind [[claude-opus-5]] on Terminal-Bench 2.1, DeepSWE v1.1, and Meta's internal coding benchmark
- Distribution: also available via Meta Model API + OpenRouter
- Marketing: Mark Zuckerberg X-post announcing the launch

## Open Questions

- Concrete standard-tier per-token pricing vs [[claude-code]] Max plan and [[openai-codex]] rates
- Whether contributor-tier training-data grant applies to closed-source repos or is scoped to public work
- IDE integration path (VS Code extension? JetBrains plugin?) or terminal-only for launch window
- Whether sub-agent-in-worktree isolation supports cross-agent handoff or is fire-and-forget only
- Muse Spark 1.2 concrete benchmark deltas vs [[claude-opus-5]] on the three named benchmarks
- Enterprise / self-hosted tier availability

## Sources

- data/summaries/2026-08-06-evening.json (World of AI MEDIUM "Meta DROPS Muse Code! 🔮🤖" — public beta launch + Muse Spark 1.2 substrate + terminal-based + single-command install + parallel sub-agents in isolated worktrees + contributor tier $0.10/$0.20 + 12.5-21x cheaper + training-data grant + 60 req/min ceiling; AINews HIGH "Jeff, Sanjay, Oriol, and Quoc depart DeepMind" — persistent agents + built-in verification commands + competitive API pricing; The Rundown AI HIGH "🔄 Google's biggest AI shakeup yet" — pay-as-you-go + cheaper contributor tier + build/plan/validate across large repositories; researchFindings.additionalContext for Meta + Muse Code + Mark Zuckerberg — 24-hour session + 1000+ tool calls + Hopper GPU kernel optimization + 1M context window + async background agents + local event log + Zuckerberg X-post)
