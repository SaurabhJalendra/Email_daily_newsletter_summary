---
name: ChatGPT Atlas
description: OpenAI's first-party AI browser; launched Oct 22 2025 with built-in ChatGPT assistant
type: product
---

# ChatGPT Atlas

> **Type**: product
> **First mentioned**: 2025-10-22
> **Last updated**: 2026-07-12-morning (**Standalone Atlas browser fully sunset + agentic features folded into ChatGPT desktop app + new Chrome extension** — Uncovering AI HIGH: ***"OpenAI is shutting down its standalone AI browser, Atlas, and folding its agentic features into ChatGPT's desktop app and a new Chrome extension, signaling a shift in the company's strategy for AI-powered browsing and search"***. Confirms the 2026-07-10-evening *"standalone Atlas browser is being sunset"* framing into completed-status; extends the 2026-07-10-evening Codex-becomes-ChatGPT-superapp merger into a *browser-becomes-Chrome-extension-plus-ChatGPT-desktop-app* fold. Structurally significant three ways: (a) **Atlas standalone product terminates ~9 months after Oct 22 2025 launch** — one of the shortest-lived frontier-lab consumer product cycles in this wiki (contrast with [[chatgpt]] Aug 2022 launch + [[claude-code]] ~18-month arc); (b) **Chrome-extension fold-in productizes browser-strategy retreat** — OpenAI abandons the standalone-Chromium-fork posture (which competed head-on with Google Chrome + [[perplexity-comet]] + [[opera-neon]]) in favor of an *extension-inside-Chrome* posture that ships agentic features without requiring users to switch primary browsers; structurally parallel to Anthropic's [[claude-code-web]] browser + CLI approach rather than standalone-browser; (c) **ChatGPT desktop app absorbs Atlas agentic features** — closes the loop on the 2026-07-10-evening ChatGPT-Codex-superapp merger; ChatGPT desktop is now the single-surface for Chat + Work + Codex + former-Atlas agentic browsing. Body-recovery items: (a) exact shutdown date + Atlas user-migration path, (b) which agentic features move to Chrome extension vs ChatGPT desktop, (c) Chrome-extension distribution timeline + Chrome Web Store approval status, (d) whether the [[prompt-injection]] hidden-text attack surface persists in the Chrome-extension form-factor — *source: data/summaries/2026-07-12-morning.json (Uncovering AI HIGH "🧪 Nobel laureate picks China over Berkeley. On July 4th."; also referenced in daily-digest Industry News — OpenAI shuts down its standalone AI browser, Atlas, and folds its features into ChatGPT's desktop app and a new Chrome extension)*)
> **Previously updated**: 2025-11-08
> **Status**: sunset (standalone browser discontinued Jul 2026; features folded into ChatGPT desktop app + Chrome extension)
> **Related**: [[openai]], [[chatgpt]], [[chatgpt-work]], [[ai-browsers]], [[opera-neon]], [[perplexity-comet]], [[prompt-injection]]

## Summary

Atlas is [[openai]]'s first-party web browser, launched 2025-10-22 with ChatGPT built into the default chrome — the assistant sits alongside browsing rather than as a separate tab. Atlas positions OpenAI directly against [[perplexity-comet]] and [[opera-neon]] in the emerging "AI browser" category and gives ChatGPT first-class access to the page-level web. Within days the launch surfaced the category's central security headache: hidden-text prompt-injection attacks that hijack AI browsers via invisible page content. By early November OpenAI had begun testing structured handling of blocked news sources — supplying context without quoting restricted material — and shipped Agent Mode so ChatGPT can act on the page while browsing.

## Timeline

- **2025-11-08**: macOS availability continues as top-line product release — *source: TAAFT cycle "ChatGPT Atlas Browser Launches"*
- **2025-11-03**: Atlas tests structured handling of blocked news sources — context without quoted material — *source: AI Breakfast "Google Demos VEO-made Ad"*
- **2025-11-03**: ChatGPT [[agent-frameworks|Agent Mode]] ships — operates while browsing — *source: AlphaSignal "Google unveils SRL"*
- **2025-10-31**: ChatGPT browser architecture deep-dive coverage — *source: TLDR AI "OpenAI security agent, ChatGPT browser architecture"*
- **2025-10-23**: "Hidden Text Hijacks AI Browsers" — prompt-injection vector demonstrated on Atlas-class browsers — *source: TAAFT "Hidden Text Hijacks AI Browsers"*
- **2025-10-22**: Atlas launches — OpenAI enters browser war with ChatGPT built into the default UI — *source: TAAFT "OpenAI's Browser Is Finally Here"; The Rundown AI "OpenAI enters browser war with Atlas"; AlphaSignal "OpenAI launches Atlas: browser with built-in ChatGPT assistant"; TLDR "OpenAI's browser"; AI Breakfast "OpenAI's New AI Browser"; TLDR AI "ChatGPT Atlas"*

## Key Facts

- Vendor: [[openai]]
- Launch date: 2025-10-22
- Form factor: full desktop browser with native ChatGPT panel
- Competitive set: [[perplexity-comet]], [[opera-neon]], rumored Microsoft AI browser
- Known security category: hidden-text [[prompt-injection]] (disclosed 2025-10-23, three days post-launch)
- Agent capability (Nov 2025): ChatGPT Agent Mode operates on the page while browsing

## Open Questions

- Default search engine economics — does Atlas displace Google search revenue for OpenAI users?
- Mobile Atlas timing?
- Atlas-vs-[[perplexity-comet]] differentiation beyond model identity?
- Patch status for hidden-text injection attacks?

## Sources

- data/summaries/2025-10-22.json (subjects across TAAFT, The Rundown AI, AlphaSignal, TLDR, AI Breakfast, TLDR AI — Atlas launch coverage)
- data/summaries/2025-10-23.json (TAAFT — Hidden Text Hijacks AI Browsers)
- data/summaries/2025-10-31.json (TLDR AI — ChatGPT browser architecture)
- data/summaries/2025-11-03.json (AI Breakfast — Google Demos VEO-made Ad [Atlas blocked-news handling]; AlphaSignal — OpenAI Agent Mode)
- data/summaries/2025-11-08.json (TAAFT cycle — ChatGPT Atlas Browser Launches)
