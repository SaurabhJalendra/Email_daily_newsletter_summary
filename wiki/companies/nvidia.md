---
name: NVIDIA
description: NVIDIA — AI chip supplier; RTX Spark on-device AI, Vera Rubin in production, DGX Station for Windows, Cosmos 3, Ising quantum
type: company
---

# NVIDIA

> **Type**: company
> **First mentioned**: 2025-10-08
> **Last updated**: 2026-06-05
> **Status**: active
> **Related**: [[nvidia-cosmos]], [[nemotron-3]], [[vera-rubin]], [[alpamayo]], [[nitrogen]], [[rtx-spark]], [[xai]], [[openai]], [[anthropic]], [[microsoft]], [[amd]], [[broadcom]], [[meta]], [[baidu]], [[ai-hardware]], [[ai-healthcare]], [[ai-bubble-concerns]]

## Summary

NVIDIA is the dominant supplier of AI training/inference GPUs and, through late 2025 and into 2026, visibly expanded beyond raw silicon: it shipped foundation models for physical AI ([[nvidia-cosmos]]), launched the Ising quantum-chip family, and became the reference GPU vendor behind multi-billion-dollar buildouts — including $21B worth of Vera Rubin deployments inside [[meta]]'s CoreWeave deal. Commentary has shifted from "is NVIDIA's dominance sustainable?" to pricing power: by April 2026 TSMC was publicly calling capacity "very tight" with Q1 revenue up 40.6% YoY, most of it AI-driven.

## Timeline

- **2026-06-05**: GTC Taipei keynote (Jensen Huang) — five major announcements: (1) [[rtx-spark]] — 1-petaflop consumer "superchip" co-developed with [[microsoft]] to "reinvent the Windows PC for personal AI," runs frontier-scale models locally on laptops/desktops, ships fall 2026 from ASUS/Dell/HP/Lenovo/Microsoft Surface/MSI, includes secure sandboxes for [[openclaw]] and Hermes agents; (2) **Vera Rubin** CPU now in **full production** — purpose-built for agentic-AI factories, framed as delivering faster task completion vs x86; (3) **NVIDIA DGX Station for Windows** — trillion-parameter AI supercomputer for the enterprise desk, lets businesses run + connect always-on frontier agents to Windows apps and workflows; (4) **NVIDIA Humanoid Robot Reference Design** for research, built on NVIDIA Isaac GR00T; (5) **[[nvidia-cosmos]] 3** shipped with an open-weights text-to-image model; separately AlphaSignal covers a new NVIDIA robot planner running **19× faster** with **38% smoother** movement (IMLE — generates path in single step instead of many, tested on a real mobile robot navigating moving people). Coverage frames the keynote as the moment "useful AI" becomes the headline frame and as NVIDIA extending its AI platform from data center down to consumer and prosumer PCs — *source: NVIDIA GTC "GTC Taipei keynote recap: Useful AI has arrived"; World of AI "NVIDIA runs AI on your PC"; InstaByte "Anthropic files for IPO"; The Rundown AI "Reve, Ideogram trade prompts for layouts"; AINews "Reve 2 and Ideogram 4: Layouts in Imagegen"; TLDR "SpaceX prices IPO"; AlphaSignal "NVIDIA Robot Planner: 19x Speed Jump + 38% Smoother Movement"*
- **2026-04-16**: [[nvidia-cosmos]] 2.5 generally available with faster inference, simplified fine-tuning, Hugging Face Diffusers integration; [[nvidia-cosmos]] 3 pre-announced for summer 2026 — *source: NVIDIA Newsletter "From SDG to physical AI"*
- **2026-04-16**: Launches the Ising family of quantum chips, treating AI as the control surface for quantum engineering workflows — *source: The Tech Buzz "TSMC Earnings, Nvidia Quantum Chips Pump Tech Market"*
- **2026-04-16**: Vera Rubin GPUs deploy early inside [[meta]]'s $21B CoreWeave deal — *source: InstaByte "Snap cuts 1,000 jobs, blames AI"*
- **2026-04-16**: GTC Taipei at COMPUTEX 2026 registration opens; DeepStream Coding Agents tutorial published — *source: NVIDIA Developer News*
- **2026-04-09**: NVIDIA disclosed as partner in [[project-glasswing]] cybersecurity coalition led by [[anthropic]] (alongside AWS, Apple, Google, Microsoft) — detection + remediation of vulnerabilities at scale via Claude Mythos Preview — *source: 2026-04-09 cycle*
- **2026-04-04**: NVIDIA optimizes Google's new [[gemma-4]] family for local agentic AI — optimization path spans phones, workstations, and IoT devices; framed as NVIDIA continuing to be the de-facto local-AI stack vendor even for non-NVIDIA foundation models; same cycle: new MLPerf inference records via "Extreme Co-Design" (hardware + compiler + model co-tuning), $2B investment in Marvell to co-develop custom AI chips, IGX Thor / CloudXR 6.0 / CloudXR.js availability updates, and single-digit-microsecond-latency capital-markets pitch (HFT/market-making vertical) — *source: 2026-04-04 cycle (NVIDIA Newsletter — Gemma 4 on NVIDIA; The Tech Buzz — MLPerf Extreme Co-Design + $2B Marvell; Forward Future — CloudXR 6.0 / IGX Thor / capital-markets latency)*
- **2026-04-01**: NVIDIA IGX Thor lineup available — Blackwell-powered industrial-edge platform targeting autonomous robots, surgical systems, and high-performance industrial automation; unifies functional safety and AI on a single integrated system; IGX software stack pitched as time-to-market accelerator for factory/medical/robotics workloads; NVFP4 (NVIDIA's low-precision format) gains adoption via [[ollama]]'s new Apple-silicon MLX build with NVFP4 support + production-parity framing — *source: 2026-04-01 cycle (NVIDIA Newsletter — Unlock real-time physical AI for the industrial edge with NVIDIA IGX; Ollama Newsletter — NVFP4 support)*
- **2026-03-21**: $1T order backlog disclosed; launches OpenShell (safer autonomous-agent execution environment) and DSX Air (design/simulate/scale AI factory infrastructure) — *source: 2026-03-21 cycle*
- **2026-03-18**: GTC 2026 keynote (Jensen Huang) — physical AI, AI factories, agentic AI themes; announcements: NVIDIA Vera CPU (purpose-built for agentic AI), [[vera-rubin]] GPU deployments, NVIDIA Dynamo 1.0 inference serving stack, DLSS 5, new open models for agentic/physical/healthcare AI, Space Computing (Space-1 Vera Rubin Module — data-center-class AI in orbit), partnerships with global robotics leaders + industrial software giants; Disney Olaf robot trained using NVIDIA simulation stack + DeepMind Newton physics debuts at GTC — *source: 2026-03-18 cycle (NVIDIA Newsletter; TAAFT; Forward Future; The Rundown AI)*
- **2026-03-15**: GTC 2026 set for the following week (expectations high for AI hardware announcements) — *source: 2026-03-15 cycle (World of AI)*
- **2026-03-13**: [[nemotron-3]] Super released — 120B open-source reasoning model, hybrid Mamba-Transformer MoE, 1M-token native context, 4× memory efficiency over prior gen, dev-controlled reasoning budget; 5× throughput vs prior gen — *source: 2026-03-13 cycle (TAAFT — NVIDIA releases Nemotron 3 Super; World of AI — NVIDIA's NEW Open-Source Model; The Code; TLDR AI)*
- **2026-03-13**: NVIDIA plans open-source [[openclaw]] competitor (per coverage) — *source: 2026-03-13 cycle (TLDR)*
- **2026-03-12**: NVIDIA invests in Mira Murati's [[thinking-machines]] Labs — multi-year deal for "at least a gigawatt of compute"; cutting-edge chips to train + serve Thinking Machines frontier models — *source: 2026-03-12 cycle (TLDR AI — Nvidia + Thinky; The Rundown AI — Thinking Machines + NVIDIA)*
- **2026-03-06**: NVIDIA reportedly may stop investing further in [[openai]] and [[anthropic]] ahead of their IPOs — pivots focus to selling chips that power their systems — *source: 2026-03-06 cycle*
- **2026-03-03**: Participates in [[openai]] $110B mega-round alongside Amazon + SoftBank; [[broadcom]] separately targets 1M 3D-stacked chips by 2027, AI revenue $8.2B Q1 — *source: 2026-03-03 cycle*
- **2026-02-24**: Close to finalizing $30B investment in [[openai]] — replaces the stalled $100B pact — *source: 2026-02-24 cycle*
- **2026-02-20**: Multi-billion-dollar [[meta]] deal for GPU + CPU deployment across data centers — *source: 2026-02-20 cycle*
- **2026-02-19**: Multi-year [[meta]]-NVIDIA AI chip deal — millions of GPUs and CPUs to power Meta's AI infrastructure buildout — *source: 2026-02-19 cycle*
- **2026-02-14**: NVIDIA participates in [[anthropic]] $30B Series G; Cerebras competes for inference (powers OpenAI's [[gpt-5-3-codex-spark]]) — competitive context for inference silicon — *source: 2026-02-14 cycle*
- **2026-02-09**: NVIDIA reportedly skipping new gaming GPUs due to memory shortages — prioritizing AI chips; AI now ~92% of revenue — *source: 2026-02-09 cycle*
- **2026-02-07**: VibeTensor — AI-generated deep-learning runtime built by NVIDIA's coding agents; framed as evidence of agentic infra creation — *source: 2026-02-07 cycle*
- **2026-02-06**: Open-model push continues — [[nemotron-3]] Nano coverage emphasized as part of Nvidia's open-models strategy — *source: 2026-02-06 cycle*
- **2026-02-05**: Intel hires new GPU chief architect (CEO Lip-Bu Tan) to enter discrete GPU market — context for AI-driven GPU demand; potential future competitor to NVIDIA — *source: 2026-02-05 cycle*
- **2026-02-04**: Jensen Huang dismisses reports of "stalled" $100B OpenAI investment as "nonsense"; confirms Nvidia remains committed to participating in OpenAI's funding round though final figure reportedly lower than $100B; Nvidia Earth-2 and DeepMind AlphaGenome framing continues — *source: TAAFT "AI Agents Built Their Own Society"; The Tech Buzz SignalPulse; AI Breakfast; Mindstream "Nvidia lowers investment in OpenAI"*
- **2026-01-25**: Earth-2 digital twin planet model referenced; AI21 Labs acquisition talks circulate — *source: 2026-01-25 cycle*
- **2026-01-17**: China blocks [[nvidia]]'s H200 AI chips — potentially hinders Chinese model development; TSMC posts record quarter (profit +35% on surging AI demand) — *source: 2026-01-17 cycle*
- **2026-01-15**: Lilly + NVIDIA announce $1B AI drug-discovery lab partnership — see [[ai-healthcare]] — *source: 2026-01-15 cycle*
- **2026-01-10**: H200 upfront-payment policy imposed on Chinese customers — no refunds or order changes; parallel to broader export-control pressure — *source: 2026-01-10 cycle*
- **2026-01-09**: [[vera-rubin]] platform promises 5× inference performance over Blackwell; open-source VLM released to improve physical reasoning for robots — *source: 2026-01-09 cycle*
- **2026-01-08**: [[vera-rubin]] Rubin architecture enters production at leading cloud providers; Nemotron Speech ASR released (open-source low-latency voice recognition, 24ms median TTFT, 560 concurrent streams) — *source: 2026-01-08 cycle*
- **2026-01-07**: [[vera-rubin]] chip launches at CES 2026 — 5× faster inference, 3.5× faster training, ~10× cost reduction vs Blackwell; [[alpamayo]] open AV model family introduced; Boston Dynamics partners with NVIDIA + [[google]] DeepMind; production-ready Atlas robot unveiled — *source: 2026-01-07 cycle (TLDR — Nvidia's new chip; The Tech Buzz — Physical AI Era at CES 2026; AI Breakfast — DeepMind AI runs Boston Dynamics robots)*
- **2026-01-06**: NVIDIA has backed dozens of AI startups with $100M+ rounds since 2023 (portfolio framing) — *source: 2026-01-06 cycle*
- **2026-01-03**: [[nitrogen]] released — open-source foundation model for generalist gaming agents, trained on 40,000 hours of gameplay footage across 1,000+ games — *source: The Rundown AI; 2026-01-03 cycle*
- **2026-01-01**: NVIDIA reportedly in advanced talks to acquire [[ai21-labs]] for up to $3B; Colossus supercomputer expansion targeting ~2 GW of training capacity — *source: TAAFT; AI Breakfast 2026-01-01 cycle*
- **2025-12-31**: $5B Intel investment yields ~$2.5B profit after Intel share price surge — *source: 2025-12-31 cycle*
- **2025-12-30**: NVIDIA holds >50% market share in tokenized US Treasury products (reframing); [[groq]] $20B acquisition reinforced as largest NVIDIA deal — *source: 2025-12-30 cycle*
- **2025-12-27**: NVIDIA robotics director praises Tesla FSD as an AI-maturation milestone (empty-seat robotaxi test rides framing) — *source: 2025-12-27 cycle*
- **2025-12-26**: NVIDIA acquires [[groq]] for $20B cash — largest acquisition to date; integrates Groq's inference chips into NVIDIA's "AI factory" training→inference stack — *source: The Rundown AI; TAAFT 2025-12-26 cycle*
- **2025-12-23**: NVIDIA acquires SchedMD (Slurm workload scheduler) — strengthens HPC/AI cluster software stack — *source: 2025-12-23 cycle*
- **2025-12-17**: [[nemotron-3]] open-source models drop — Nano (30B total / 3B active MoE), 4× faster throughput for multi-agent AI, Super and Ultra promised in 2026; framed as NVIDIA's "agentic" play; "$3B collapse" headlines surface alongside the launch — *source: TLDR AI "Nvidia Nemotron 3 / Claude agentic tasks"; AlphaSignal "NVIDIA Nemotron 3: 4x faster"; The Rundown AI "Nvidia's powerful open AI model play"; Forward Future "NVIDIA's Agentic Bet & A $3B Collapse"; AI Breakfast "NVIDIA Drops NEMOTRON 3"; TLDR "Nvidia drops open-source AI models"*
- **2025-12-06**: AWS factories + Trainium narrative reframed as direct NVIDIA challenge; "AWS Factories + Trainium vs NVIDIA" coverage — *source: TAAFT "AWS Factories + Trainium vs NVIDIA"*
- **2025-12-04**: NVIDIA unveils Alpamayo-R1 — human-like perception/reasoning for autonomous vehicles; part of open-source "digital and physical AI" stack — *source: 2025-12-04 cycle*
- **2025-12-03**: Open-source DRIVE Alpamayo-R1 released as part of digital/physical AI stack — *source: 2025-12-03 cycle*
- **2025-11-29**: NVIDIA ToolOrchestra research; Michael Burry $1.1B short positions vs NVIDIA + Palantir over alleged AI bubble and depreciation practices; China economic-planning-agency robotics-bubble warning — *source: 2025-11-29 cycle*
- **2025-11-27**: NVIDIA says GPUs are "a generation ahead" of Google's AI chips; shares fall 3% on reports Meta may use Google TPUs — *source: 2025-11-27 cycle*
- **2025-11-25**: NVIDIA reports record earnings; launches Apollo open-source AI physics model for enterprise — *source: 2025-11-25 cycle*
- **2025-11-22**: NVIDIA Q3 record $57B revenue continues to anchor sector framing; semiconductor equities rally (BESI, ASMI, ASML) — *source: AI Breakfast "Nano Banana Pro Sets New Standard"; Mindstream cycle*
- **2025-11-21**: Q3 (Oct-quarter) revenue hits $57B (+62% YoY); guides $65B for current quarter — soothes AI-bubble fears; Saudi Arabia inks deals with NVIDIA, [[xai]], and others including 600K GPUs and a 500+ MW data center; "no assurance" of final $100B [[openai]] pact — *source: TLDR "Nvidia crushes earnings"; The Rundown AI "Codex-Max codes for 24 hours" [Saudi]*
- **2025-11-20**: NVIDIA commits up to $10B in [[anthropic]] alongside [[microsoft]]'s $5B; Anthropic contracts up to 1 GW of compute on Grace Blackwell / Vera Rubin systems and forms a deep engineering partnership with NVIDIA — *source: TLDR AI "Anthropic $350B val"; TAAFT "Tech Titans Partnership"; The Rundown AI "$15B deal"*
- **2025-11-19**: Path to $6T valuation by 2026 projected; partnership with Japan's RIKEN (2,140 Blackwell GPUs across supercomputers); NVLink for Arm announced; Apollo AI physics models launched — *source: TAAFT "NVIDIA to $6T"; AlphaSignal*
- **2025-11-12**: $4.5T valuation called out; dominant AI-chip supplier framing — *source: TAAFT cycle*
- **2025-11-11**: CEO Jensen Huang warns China will win the AI race due to regulatory flexibility and energy subsidies — *source: TAAFT cycle*
- **2025-11-10**: Huang reiterates China-AI-race warning — *source: TAAFT cycle*
- **2025-11-09**: China bans American-made AI chips — directly hits NVIDIA and AMD — *source: TAAFT cycle "China bans American AI chips"*
- **2025-11-07**: Tesla/Musk says needs "gigantic chip fab" for AI and robotics — framed against NVIDIA supply constraints — *source: TAAFT cycle*
- **2025-11-06**: [[baidu]] ERNIE ecosystem tensions surface as Chinese foundation-labs pressure — *source: AlphaSignal cycle*
- **2025-10-30**: NVIDIA market cap reportedly tops $5T — *source: TLDR "Nvidia hits $5T"; Matt from FutureTools "AI's $5T milestone"*
- **2025-10-29**: Uber to deploy 100k NVIDIA-powered robotaxis — *source: TLDR "Uber's 100k robotaxis"*
- **2025-10-27**: NVIDIA robotaxi coverage; AWS-vs-NVIDIA framing — *source: TLDR "Nvidia robotaxi"*
- **2025-10-16**: "Nvidia isn't done yet" — defense of NVIDIA dominance amid AMD/Broadcom deal flow — *source: Mindstream*
- **2025-10-08**: NVIDIA–[[xai]] compute deal announced — *source: TLDR*

## Key Facts

- Role: primary AI GPU supplier for most frontier labs; expanding from data center to PC/laptop tier via [[rtx-spark]] (Jun 2026)
- On-device AI silicon: [[rtx-spark]] 1-petaflop consumer chip (announced Jun 2026, ships fall 2026)
- Physical-AI stack: [[nvidia-cosmos]] 2.5 GA, [[nvidia-cosmos]] 3 shipped Jun 2026 with open-weights text-to-image
- Robotics: NVIDIA Humanoid Robot Reference Design (Isaac GR00T) for research (Jun 2026); robot planner IMLE 19× faster (Jun 2026)
- Quantum: Ising chip family (Apr 2026)
- Current-gen GPU: Vera Rubin (in full production Jun 2026; deploying into Meta/CoreWeave capacity Apr 2026)
- Desktop AI: NVIDIA DGX Station for Windows — trillion-parameter AI supercomputer for the enterprise desk (Jun 2026)
- Known customers / deals: [[xai]], [[meta]] (via CoreWeave), [[microsoft]] (RTX Spark co-design)
- Competitive pressure: [[amd]]↔OpenAI/Oracle, [[broadcom]]↔OpenAI custom silicon

## Open Questions

- How significant is Ising commercially vs experimentally?
- Vera Rubin total volume and lead-time behind TSMC "very tight" capacity?
- Will NVIDIA's model layer (Cosmos) strain existing customer relationships (Figure, etc.)?

## Sources

- data/summaries/2025-10-08.json (TLDR — Nvidia xAI deal)
- data/summaries/2025-10-16.json (Mindstream — Nvidia isn't done yet)
- data/summaries/2025-10-27.json (TLDR — Nvidia robotaxi)
- data/summaries/2025-10-29.json (TLDR — Uber's 100k robotaxis)
- data/summaries/2025-10-30.json (TLDR — Nvidia hits $5T; Matt from FutureTools — $5T milestone)
- data/summaries/2025-11-07.json (TAAFT — Tesla gigantic chip fab needed)
- data/summaries/2025-11-09.json (TAAFT — China bans American AI chips)
- data/summaries/2025-11-10.json (TAAFT — Huang China-AI-race warning)
- data/summaries/2025-11-11.json (TAAFT cycle — NVIDIA Jensen China warning)
- data/summaries/2025-11-12.json (TAAFT cycle — $4.5T valuation)
- data/summaries/2025-11-19.json (TAAFT — NVIDIA to $6T; AlphaSignal — RIKEN deployment, NVLink for Arm, Apollo AI)
- data/summaries/2025-11-20.json (TLDR AI — Anthropic $350B val; TAAFT — Tech Titans Partnership; The Rundown AI — $15B deal)
- data/summaries/2025-11-21.json (TLDR — Nvidia crushes earnings $57B; The Rundown AI — Codex-Max codes for 24 hours [Saudi 600K GPUs])
- data/summaries/2025-11-22.json (AI Breakfast — Nano Banana Pro Sets New Standard [$57B quarter])
- data/summaries/2025-11-25.json (NVIDIA earnings; Apollo physics model)
- data/summaries/2025-11-27.json (NVIDIA "generation ahead" of Google chips)
- data/summaries/2025-11-29.json (NVIDIA ToolOrchestra; Burry shorts; China robotics-bubble warning)
- data/summaries/2025-12-03.json (NVIDIA DRIVE Alpamayo-R1)
- data/summaries/2025-12-04.json (Alpamayo-R1 autonomous-vehicle perception/reasoning)
- data/summaries/2025-12-06.json (TAAFT — AWS Factories + Trainium vs NVIDIA)
- data/summaries/2025-12-17.json (TLDR AI — Nvidia Nemotron 3; AlphaSignal — Nemotron 3: 4x faster; The Rundown AI — Nvidia's powerful open AI model; Forward Future — NVIDIA's Agentic Bet; AI Breakfast — NVIDIA Drops NEMOTRON 3; TLDR — Nvidia drops open-source AI models)
- data/summaries/2026-04-16.json (NVIDIA Newsletter — From SDG to physical AI; NVIDIA Developer News — GTC Taipei / DeepStream; The Tech Buzz — TSMC Earnings, Nvidia Quantum Chips; InstaByte — Snap cuts 1,000 jobs [Meta CoreWeave / Vera Rubin])
- data/summaries/2026-02-20.json (Meta multi-billion dollar GPU deal)
- data/summaries/2026-02-24.json ($30B OpenAI investment close)
- data/summaries/2026-03-03.json ($110B OpenAI mega-round participation; Broadcom 3D stacked)
- data/summaries/2026-03-06.json (Potential pullback from OpenAI/Anthropic pre-IPO)
- data/summaries/2026-03-12.json (NVIDIA invests in Thinking Machines — gigawatt compute deal)
- data/summaries/2026-03-13.json (Nemotron 3 Super 120B; open-source OpenClaw competitor report)
- data/summaries/2026-03-15.json (GTC 2026 preview)
- data/summaries/2026-03-18.json (GTC 2026 keynote — Vera CPU, Dynamo 1.0, DLSS 5, Space Computing / Space-1, Disney Olaf robot)
- data/summaries/2026-03-21.json ($1T order backlog; OpenShell + DSX Air launch)
- data/summaries/2026-04-04.json (NVIDIA Newsletter — Gemma 4 on NVIDIA; The Tech Buzz — MLPerf Extreme Co-Design + $2B Marvell; Forward Future — CloudXR 6.0 / IGX Thor / capital-markets latency)
- data/summaries/2026-06-05.json (NVIDIA GTC — Useful AI has arrived [Vera Rubin full production, RTX Spark, DGX Station for Windows, Humanoid Robot Reference, Cosmos 3]; World of AI — NVIDIA runs AI on your PC; InstaByte — Anthropic files for IPO; The Rundown AI — Reve, Ideogram trade prompts; AINews — Reve 2 and Ideogram 4; TLDR — SpaceX prices IPO; AlphaSignal — NVIDIA Robot Planner 19x faster 38% smoother)
