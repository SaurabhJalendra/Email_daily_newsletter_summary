import OpenAI from 'openai';
import { config } from '../utils/config.js';
import { isPromoSubject } from '../email/parser.js';
import { collectPapers, fetchArxivTitle } from '../utils/papers.js';

export class OpenRouterSummarizer {
  constructor() {
    // Initialize OpenRouter with Llama 3.3 70B
    this.openRouter = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: config.ai.openRouterApiKey,
      defaultHeaders: {
        'HTTP-Referer': 'https://newsletter.saurabhjalendra.com',
        'X-Title': 'AI Newsletter Summarizer'
      }
    });
    this.model = config.ai.openRouterModel;
  }

  /**
   * Generate comprehensive summary of newsletters
   * IMPORTANT: Must not lose any information - user cannot miss AI updates
   */
  async summarizeNewsletters(newsletters, researchFindings = null) {
    if (!newsletters || newsletters.length === 0) {
      return {
        summary: 'No newsletters received today.',
        totalNewsletters: 0,
        newsletters: [],
        tldr: [],
        researchFindings: null
      };
    }

    console.log(`Summarizing ${newsletters.length} newsletters with OpenRouter (${this.model})...`);

    try {
      // Process each newsletter individually for detailed summaries
      // Sequential processing to avoid rate limits
      const individualSummaries = [];
      for (let i = 0; i < newsletters.length; i++) {
        console.log(`  [${i + 1}/${newsletters.length}] Summarizing newsletter from ${newsletters[i].from}...`);
        const summary = await this.summarizeIndividual(newsletters[i]);
        individualSummaries.push(summary);

        // Add delay between requests (adjust as needed)
        if (i < newsletters.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }

      // Derive date from newsletters (IST-aware), not from execution time
      const derivedDate = this.deriveDateFromNewsletters(newsletters);

      // Enforce priority distribution — LLMs tend to over-rate HIGH.
      // Cap HIGH to at most 30% of the total; demote overflow to MEDIUM.
      this.enforcePriorityCap(individualSummaries);

      // Generate overall daily summary
      const overallSummary = await this.generateOverallSummary(individualSummaries, researchFindings, derivedDate);

      // Generate TL;DR (5 bullet max)
      await new Promise(resolve => setTimeout(resolve, 2000));
      const tldr = await this.generateTldr(overallSummary);

      return {
        date: derivedDate.toISOString(),
        summary: overallSummary,
        totalNewsletters: newsletters.length,
        newsletters: individualSummaries,
        tldr,
        researchFindings: researchFindings || null
      };
    } catch (error) {
      console.error('Error during summarization:', error);
      throw error;
    }
  }

  /**
   * Cap the number of HIGH-priority newsletters to a maximum ratio.
   * LLMs tend to rate everything HIGH, which defeats the whole priority
   * sorting. Hard rule: no more than 30% of newsletters can be HIGH.
   * When over the cap, demote the excess to MEDIUM, keeping those with
   * the longest summary (crude proxy for "most substantive").
   *
   * Side effect: mutates the `priority` field on each summary in place.
   */
  enforcePriorityCap(summaries) {
    if (!Array.isArray(summaries) || summaries.length === 0) return;
    const HIGH_RATIO_CAP = 0.30;
    const maxHigh = Math.max(1, Math.floor(summaries.length * HIGH_RATIO_CAP));
    const highIndices = summaries
      .map((s, i) => ({ i, priority: s.priority, length: (s.summary || '').length }))
      .filter(x => x.priority === 'HIGH');

    if (highIndices.length <= maxHigh) return;

    // Keep the top N by summary length; demote the rest.
    highIndices.sort((a, b) => b.length - a.length);
    const toDemote = highIndices.slice(maxHigh);

    for (const item of toDemote) {
      summaries[item.i].priority = 'MEDIUM';
    }
    console.log(`  📊 Priority cap: demoted ${toDemote.length} HIGH→MEDIUM to enforce ≤${maxHigh}/${summaries.length} HIGH limit`);
  }

  /**
   * Derive the logical IST calendar date for the digest.
   * Uses the pipeline RUN date in IST — the day the digest is being produced.
   * (Earlier "earliest newsletter date" approach was wrong: newsletters often
   * have send-dates from previous UTC day which becomes "yesterday" in IST,
   * causing the same date to repeat across multiple daily runs.)
   */
  deriveDateFromNewsletters(_newsletters) {
    const now = new Date();
    const istDateString = now.toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
    return new Date(`${istDateString}T00:00:00+05:30`);
  }

  /**
   * Generate content using OpenRouter
   */
  async generateContent(prompt) {
    const completion = await this.openRouter.chat.completions.create({
      model: this.model,
      messages: [
        { role: 'user', content: prompt }
      ]
    });

    return completion.choices[0].message.content;
  }

  /**
   * Summarize individual newsletter with ALL key information preserved
   */
  async summarizeIndividual(newsletter) {
    // Defensive defaults — protect against undefined/null fields
    const textContent = newsletter.textContent || '';
    const links = Array.isArray(newsletter.links) ? newsletter.links : [];

    // Skip empty content with a low-priority marker
    if (!textContent.trim()) {
      return {
        from: newsletter.from,
        subject: newsletter.subject,
        date: newsletter.date,
        summary: `*No content extracted from this newsletter.*\n\n**Priority: LOW**`,
        links,
        priority: 'LOW',
        originalContent: ''
      };
    }

    const researchSection = newsletter.researchContext
      ? `\n\nAdditional Research Context:\n${newsletter.researchContext}`
      : '';

    const prompt = `You are summarizing an AI/tech newsletter. The reader has subscribed to stay updated on AI developments and CANNOT miss any important information.

Newsletter From: ${newsletter.from}
Subject: ${newsletter.subject}
Date: ${newsletter.date}

Content:
${textContent}

Important Links:
${links.map(l => `- ${l.text}: ${l.url}`).join('\n')}
${researchSection}

Instructions:
1. Provide a COMPREHENSIVE summary that captures ALL important points
2. DO NOT omit any significant updates, announcements, tools, or developments
3. Include specific names of products, companies, tools, and technologies mentioned
4. Preserve key statistics, dates, and facts
5. Use clear bullet points for readability
6. Organize by topic/category if multiple topics are covered
7. Focus on AI, ML, and directly related technology content
8. Exclude generic marketing, sponsor content, and non-AI filler
9. DO NOT create separate "Key Highlights" and "Detailed Points" sections that repeat the same information
10. DO NOT include raw tracking/redirect URLs in your summary (URLs containing beehiiv.com, tldrnewsletter.com, skool.com/ls/click, alphasignal.ai/c). Only reference links by descriptive name.
11. If the newsletter is primarily a webinar invitation, product ad, or promotional content with no AI news, mark it as LOW priority
12. PAPERS: If the newsletter references an academic paper (arXiv preprint, NeurIPS/ICML/ICLR proceedings, journal article, etc.), include the paper title and arXiv ID/DOI in your summary. Use markdown links of the form [Paper Title](https://arxiv.org/abs/XXXX.XXXXX). Preserve arXiv URLs and arxiv.org/openreview.net/aclanthology.org links — these are NOT tracking URLs.

Rate this newsletter's impact for AI practitioners:
- HIGH: ONLY for breaking news, major model releases (GPT-5, Claude 4, Gemini 2), significant acquisitions/funding >$100M, or paradigm shifts. Most newsletters should NOT be HIGH.
- MEDIUM: Notable updates, useful tool launches, interesting research papers, industry news
- LOW: Minor updates, niche topics, primarily promotional/marketing content, webinar invitations, course promotions, non-AI content

Format your response as:
## [Newsletter Name]

**Priority: [HIGH/MEDIUM/LOW]**

### Top Updates
- [WHAT happened + WHY it matters — one comprehensive bullet per topic]
- [Include specific product names, version numbers, benchmarks when available]
...

### Notable Links
- [Only links to primary sources, papers, product pages — not tracking URLs]

Be thorough - missing information is worse than being verbose.`;

    try {
      const rawSummary = await this.generateContent(prompt);

      // Post-process: scrub tracking URLs the LLM included despite prompt instructions.
      // These appear inline in summary text (Notable Links sections) and bloat plain-text
      // emails. Strip the URL portion of `[text](url)` markdown links pointing to known
      // tracking domains, leaving the descriptive text behind.
      const TRACKING_DOMAINS = /link\.mail\.beehiiv\.com|tracking\.tldrnewsletter\.com|app\.alphasignal\.ai\/c|substack\.com\/redirect|link\.skool\.com|journalclub\.io\/track/;
      const summary = rawSummary
        // Markdown links to tracking URLs → keep just the text
        .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, (m, text, url) =>
          TRACKING_DOMAINS.test(url) ? text : m
        )
        // Bare tracking URLs that aren't markdown-wrapped (often after "URL:" or in lists)
        .replace(/https?:\/\/(?:[a-z0-9.-]*\.)?(?:beehiiv\.com\/(?:ss\/)?c\/|tracking\.tldrnewsletter\.com|app\.alphasignal\.ai\/c|substack\.com\/redirect\/|link\.skool\.com|journalclub\.io\/track\/)[^\s)]+/g, '[link]');

      // Extract priority — permissive regex handles all common LLM variations:
      // **Priority: HIGH**, **Priority:** HIGH, **Priority**: HIGH, Priority: HIGH, etc.
      const priorityMatch = summary.match(/priority\*{0,2}\s*:?\s*\*{0,2}\s*(HIGH|MEDIUM|LOW)\b/i);
      let priority = priorityMatch ? priorityMatch[1].toUpperCase() : 'MEDIUM';
      if (!priorityMatch) {
        console.warn(`⚠️  Priority not detected for "${newsletter.subject}" — defaulting to MEDIUM`);
      }
      // Override: subject matches a known promo pattern → force LOW.
      // Catches webinars, "register now", course promos that the LLM keeps rating MEDIUM.
      if (isPromoSubject(newsletter.subject)) {
        if (priority !== 'LOW') {
          console.log(`  📉 Demoting to LOW (promo subject pattern): ${newsletter.subject}`);
        }
        priority = 'LOW';
      }

      // Collect academic paper references (arXiv IDs in text + paper-domain links)
      const papers = collectPapers({ ...newsletter, links });
      // For arXiv IDs without a known title, try to fetch from arXiv API.
      // Best-effort, capped at 3 lookups per newsletter to stay polite.
      const arxivWithoutTitle = papers.filter(p => p.source === 'arxiv-id' && !p.title).slice(0, 3);
      for (const ref of arxivWithoutTitle) {
        const title = await fetchArxivTitle(ref.arxivId);
        if (title) ref.title = title;
      }

      return {
        from: newsletter.from,
        subject: newsletter.subject,
        date: newsletter.date,
        summary: summary,
        links,
        papers,
        priority,
        originalContent: textContent.substring(0, 1000) // Keep snippet for reference
      };
    } catch (error) {
      console.error(`Error summarizing newsletter from ${newsletter.from}:`, error);
      return {
        from: newsletter.from,
        subject: newsletter.subject,
        date: newsletter.date,
        summary: `Error generating summary. Original subject: ${newsletter.subject}`,
        links: Array.isArray(newsletter.links) ? newsletter.links : [],
        priority: 'LOW',
        error: error.message
      };
    }
  }

  /**
   * Generate overall daily summary across all newsletters
   */
  async generateOverallSummary(individualSummaries, researchFindings = null, derivedDate = null) {
    if (individualSummaries.length === 0) {
      return 'No newsletters to summarize.';
    }

    const dateString = (derivedDate || new Date()).toLocaleDateString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const researchSection = researchFindings?.missingStories?.length > 0
      ? `\n\n--- RESEARCH AGENT FINDINGS ---\nThe following stories were NOT covered by any newsletter today but may be significant:\n${researchFindings.missingStories.map(s => `- ${s.headline}: ${s.summary}`).join('\n')}\n--- END RESEARCH ---`
      : '';

    const prompt = `You are creating a daily digest of AI/tech newsletters. Synthesize the following ${individualSummaries.length} newsletter summaries into ONE cohesive daily brief.

${individualSummaries.map((ns, idx) => `
Newsletter ${idx + 1}: ${ns.from}
${ns.summary}
`).join('\n---\n')}
${researchSection}

Instructions:
1. **DEDUPLICATE across newsletters.** When the same story (e.g., "Anthropic releases Claude X.Y") appears in 3+ newsletters, mention it ONCE — do not repeat it under different category headers or in multiple bullets. Newsletters cover the same news; the digest should not.
2. Create a "Top Stories" section with the 3-5 most important UNIQUE items across all newsletters
3. For each top story, include a one-sentence "Why it matters" analysis
4. Group related topics together under appropriate category headers
5. Highlight any breaking news or major announcements
6. Note emerging trends if multiple newsletters mention similar topics
7. Keep it scannable but comprehensive
8. DO NOT lose important details in the synthesis
9. Focus ONLY on AI, machine learning, and directly related technology
10. Exclude non-AI content (skincare, travel, generic productivity, real estate webinars, course promos, etc.)
11. Only include categories that have substantive content — do NOT create empty or filler sections
12. Each fact should appear in EXACTLY ONE place in the digest. If "Claude Opus 4.7 launched" is in Top Stories, do not also put it under "AI Models & Research".
13. DO NOT include any "Beyond the Newsletters" / "Research Findings" / "Missing Stories" section in your overall summary. Those stories are rendered separately by the email template — including them here causes duplicate content in the email.

Format:
# Daily AI Newsletter Digest - ${dateString}

## 🔥 Top Stories
1. **[Story]** — [Why it matters]
2. ...

## 🤖 AI Models & Research
- ...

## 🛠️ Tools & Products
- ...

## 📰 Industry News
- ...

Total Newsletters: ${individualSummaries.length}`;

    try {
      return await this.generateContent(prompt);
    } catch (error) {
      console.error('Error generating overall summary:', error);
      return `Received ${individualSummaries.length} newsletters. See individual summaries below.`;
    }
  }

  /**
   * Generate TL;DR — 5 bullet points max, scannable in 30 seconds
   */
  async generateTldr(overallSummary) {
    const prompt = `Distill this daily AI newsletter digest into exactly 5 bullet points. Each bullet must be max 20 words. Focus on the most impactful news only.

${overallSummary}

Return ONLY the 5 bullets, one per line, starting with "- ". No headers, no other text.`;

    try {
      const response = await this.generateContent(prompt);
      const bullets = response
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.startsWith('- ') || line.startsWith('* '))
        .map(line => line.replace(/^[-*]\s+/, ''))
        .slice(0, 5);

      return bullets.length > 0 ? bullets : ['Check the full digest below for today\'s AI updates.'];
    } catch (error) {
      console.error('Error generating TL;DR:', error);
      return ['Check the full digest below for today\'s AI updates.'];
    }
  }
}
