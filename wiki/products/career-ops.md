---
name: Career-Ops
description: Open-source AI system by Santiago Fernández de Valderrama that automates the end-to-end job search — scans job boards, scores listings, tailors resumes, drafts cover letters, tracks application status; 50K+ GitHub stars at launch
type: product
---

# Career-Ops

> **Type**: product
> **Vendor**: Santiago Fernández de Valderrama (independent / open-source)
> **First mentioned**: 2026-06-30-morning
> **Last updated**: 2026-06-30-morning
> **Status**: stale
> **Related**: [[claude-code]], [[ollama]], [[agent-frameworks]], [[ai-jobs-displacement]], [[vibe-coding]]

## Summary

Career-Ops is an open-source AI system built by Santiago Fernández de Valderrama that automates end-to-end job search: it scans job boards + company career pages, scores listings against the user's profile (salary, skills match, growth opportunities), tailors resumes to specific openings, drafts cover letters, helps prepare interview answers, and tracks application status. The author publicly reports the system led to **12 interviews out of 66 applications** and ultimately landed him a Head of Applied AI role at Zinkee before he open-sourced it. Stack-wise, Career-Ops runs as a local coding-agent setup — requiring [[claude-code]] (or equivalent), Node.js, and Playwright (for browser automation against job sites). The release lands inside the broader pattern of *open-source personal-AI-agents-for-knowledge-work* (cf [[plandex]] for engineering, [[wispr-flow]] for dictation, Hermes Agent for inbox automation) and is structurally significant as the first publicly framed *AI-employee-for-job-search* personal-AI-agent surface in this wiki — productizes the long-running [[ai-jobs-displacement]] narrative into a *worker-side counter-tool* (workers using AI agents to compete in a market where employers increasingly use AI to screen candidates).

## Timeline

- **2026-06-30-morning**: **First publicly framed Career-Ops launch in this wiki — Abhijay's AI Action Letter HIGH "A Guy Built an AI Employee Whose Only Job Was Finding Him a Job (Then Gave It Away Free)" lands the open-source release framing + builder-led 12-of-66 interview-conversion + ~50K GitHub stars at-launch traction signal**. Body: ***"A guy named Santiago Fernández de Valderrama built an open-source AI system called Career-Ops to automate his job search, which led to 12 interviews out of 66 applications and eventually a job offer as Head of Applied AI at a company called Zinkee. The system is now available for free on GitHub, allowing users to set up their own AI employee to find and apply to job openings"*** + ***"Career-Ops works by scanning job boards and company career pages, scoring job listings based on factors like salary, skills match, and growth opportunities, and tailoring resumes to specific job openings. It also helps with drafting cover letters, preparing interview answers, and tracking application status"*** + ***"The system requires a coding tool like Claude Code, Node.js, and Playwright to run, and users need to install these tools and set up their resume and target companies to get started"*** + ***"Career-Ops has gained popularity, with over 50,000 stars on GitHub and a community of users helping each other set it up"***. Structurally novel four ways: (a) **AI-employee-for-job-search canonical-framing** — first publicly framed *AI-employee whose only job was finding the user a job* in this wiki, sharpens the broader personal-AI-agent narrative into a *specific labor-market-counter-tool* category; (b) **18%-interview-conversion concrete number** (12 interviews / 66 applications) — first publicly framed *measurable conversion-rate outcome* for a builder-led AI-job-search agent in this wiki, anchors the productivity claim in a concrete success-rate metric; (c) **~50K GitHub stars at-launch traction tier** — places Career-Ops at the same star-tier as established frontier-lab open-source releases (gpt-5 weights, qwen models, kimi K2) within a single newsletter-cycle window, structurally novel as a *single-builder personal-tool* reaching frontier-lab-tier popularity; (d) **builder-uses-his-own-tool-to-get-hired narrative arc** — Santiago used Career-Ops to land his Head of Applied AI role at Zinkee before open-sourcing, which gives the tool a *founder-eats-own-dogfood* validation signal that pure tool-launch announcements lack. Pairs structurally with the broader [[ai-jobs-displacement]] arc (worker-side counter-tools against AI-driven hiring + AI-attributed layoffs) and the [[vibe-coding]] / [[claude-code]] arc (Claude Code as the runtime layer for open-source personal-AI-agents). Body-recovery items: (a) the GitHub repository URL (the source mentions github.com/santifer/career-ops but the link was AI-summarized — actual canonical URL may differ), (b) Zinkee company specifics + Santiago's role start date, (c) the LLM-provider abstraction (Claude Code only or also Cursor / Codex / Ollama-local?), (d) job-board scope (LinkedIn? Indeed? Greenhouse / Lever / Workable career pages? company-specific scraping?), (e) the application-tracking schema (does it integrate with applicant-tracking systems or only client-side state?), (f) the resume-tailoring quality benchmarks vs human-written resumes, (g) whether the 50K-stars-at-launch number is independently verifiable or author-claimed — *source: data/summaries/2026-06-30-morning.json (Abhijay's AI Action Letter — "A Guy Built an AI Employee Whose Only Job Was Finding Him a Job (Then Gave It Away Free)" — Santiago Fernández de Valderrama built an open-source AI system called Career-Ops + 12 interviews out of 66 applications + Head of Applied AI at Zinkee + over 50,000 stars on GitHub + requires Claude Code + Node.js + Playwright + scans job boards + scores listings + tailors resumes + drafts cover letters + prepares interview answers + tracks application status)*

## Key Facts

- Author: Santiago Fernández de Valderrama (independent builder / Head of Applied AI at Zinkee)
- License: open-source (free on GitHub)
- Runtime stack: [[claude-code]] (or equivalent coding tool) + Node.js + Playwright
- Capabilities: job-board scanning + listing scoring (salary / skills match / growth) + resume tailoring + cover-letter drafting + interview-answer preparation + application-status tracking
- Author-reported outcome: **12 interviews out of 66 applications** (~18% interview conversion) → job offer at Zinkee
- Traction signal (author-claimed): **~50,000+ GitHub stars** at launch with active community for setup help

## Open Questions

- Canonical GitHub repository URL + license type (MIT / Apache 2.0 / GPL?)
- LLM-provider abstraction — Claude Code only, or also Cursor / Codex / Ollama-local / OpenRouter?
- Job-board scope — LinkedIn / Indeed scraping? Greenhouse / Lever / Workable career-page support? Country/region coverage?
- Application-tracking schema — integrates with ATS or client-side state only?
- Resume-tailoring quality vs human-written baselines
- Independent verification of the ~50K-stars-at-launch number
- Whether the per-account hiring-side detection / anti-bot triggers limit operational use over time
- Ethics + employer-side terms-of-service considerations (LinkedIn ToS prohibits automated scraping)

## Sources

- data/summaries/2026-06-30-morning.json (Abhijay's AI Action Letter — A Guy Built an AI Employee Whose Only Job Was Finding Him a Job (Then Gave It Away Free) — Career-Ops by Santiago Fernández de Valderrama / 12 interviews of 66 applications / Head of Applied AI at Zinkee / 50,000+ GitHub stars / Claude Code + Node.js + Playwright stack)
