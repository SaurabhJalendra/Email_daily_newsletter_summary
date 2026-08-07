---
name: Kitesurf
description: Cloudflare's Aug 2026 stateless browser running entirely on Workers — designed for AI-agent use cases where full Chromium is overkill
type: product
---

# Kitesurf

> **Type**: product
> **Vendor**: [[cloudflare]]
> **First mentioned**: 2026-08-07-evening
> **Last updated**: 2026-08-07-evening (**Launched — Cloudflare ships Kitesurf, a stateless browser running entirely on Workers, designed for agent use cases where full Chromium is overkill**. AINews HIGH: *"Cloudflare has introduced Kitesurf, a stateless browser running entirely on Workers, designed for agent use cases where full Chromium is overkill"*. First publicly framed *Cloudflare Workers-hosted stateless browser* in this wiki. Structurally significant three ways: (a) *stateless browser* primitive — sharpens the [[computer-use]] agent-substrate market from *full-Chromium-per-session* (Anthropic Computer Use / Perplexity Comet / ChatGPT Atlas / Opera Neon) into a *stateless-per-request* execution model; (b) *"where full Chromium is overkill" positioning* — canonicalizes the two-tier agent-browser market: *full-Chromium for interactive multi-turn user sessions* + *Kitesurf for stateless per-request scraping/lookup/API-crawling*; (c) *runs entirely on Workers* — productizes Cloudflare's edge-execution surface as the *default runtime* for lightweight agent browsing rather than requiring users to provision browser infrastructure. Sits alongside 2026-08-05-evening [[cloudflare-computer]] (virtual FS in Durable Object + pluggable execution) + Wallets + Codex + [[cloudflare-os]] as the mid-2026 Cloudflare agent-infrastructure suite. See [[cloudflare]] + [[cloudflare-computer]] + [[computer-use]] + [[agent-frameworks]] — *source: data/summaries/2026-08-07-evening.json (AINews HIGH "[AINews] AMD buys Taalas")*)
> **Status**: launched
> **Related**: [[cloudflare]], [[cloudflare-computer]], [[cloudflare-os]], [[computer-use]], [[agent-frameworks]]

## Summary

Kitesurf is [[cloudflare]]'s stateless browser running entirely on Cloudflare Workers, launched August 2026 and positioned explicitly for **AI-agent use cases where a full Chromium is overkill**. Instead of provisioning a persistent, stateful browser instance per session, Kitesurf executes lightweight per-request browsing on Cloudflare's edge — targeting scraping, lookups, and API-crawling workloads that don't need multi-turn user-session state or the full DevTools/rendering pipeline of Chromium-based agent browsers.

The launch canonicalizes a two-tier agent-browser market: *full-Chromium* for interactive multi-turn user sessions (Anthropic Computer Use / Perplexity Comet / ChatGPT Atlas / Opera Neon) and *stateless per-request* for the lighter workloads Kitesurf targets. It also productizes Cloudflare Workers as the *default runtime* for lightweight agent browsing, sitting alongside the earlier Aug 2026 [[cloudflare-computer]] (virtual FS in Durable Object), Wallets, Codex, and [[cloudflare-os]] as the mid-2026 Cloudflare agent-infrastructure suite.

## Timeline

- **2026-08-07-evening**: **Launched — Cloudflare introduces Kitesurf as a stateless browser running entirely on Workers, aimed at agent use cases where full Chromium is overkill**. AINews HIGH anchor. First publicly framed *Cloudflare Workers-hosted stateless browser* in this wiki + first publicly framed *two-tier agent-browser market split* between *full-Chromium for interactive sessions* and *stateless per-request for lightweight browsing* — *source: data/summaries/2026-08-07-evening.json (AINews HIGH "[AINews] AMD buys Taalas")*

## Key Facts

- Vendor: [[cloudflare]]
- Runtime: Cloudflare Workers (edge, stateless per request)
- Target audience: AI agents doing lightweight browsing (scraping, lookups, API crawling)
- Positioning: complement to full-Chromium agent browsers, not a replacement
- Sibling products: [[cloudflare-computer]] + [[cloudflare-os]] + Wallets + Codex (Cloudflare agent-infra suite)

## Open Questions

- Rendering engine — headless Chromium subset, WebKit port, or custom lightweight renderer?
- JavaScript execution — full V8 vs limited/no JS, and how that affects modern SPA scraping
- Pricing tier — subrequest-priced like other Workers, or bundled with an agent-tier plan?
- Integration surface — does Kitesurf expose an MCP tool spec / [[ai-plugin-standard]] plugin?
- Concurrency + rate-limit posture from a scraping-defense perspective (Cloudflare being the primary vendor of the *anti-bot* Precursor product creates an interesting internal tension)

## Sources

- data/summaries/2026-08-07-evening.json (AINews HIGH "[AINews] AMD buys Taalas" — Cloudflare has introduced Kitesurf, a stateless browser running entirely on Workers, designed for agent use cases where full Chromium is overkill)
