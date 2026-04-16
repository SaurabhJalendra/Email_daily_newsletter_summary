import OpenAI from 'openai';
import { config } from '../utils/config.js';

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
   * Derive the logical date from newsletter dates, using IST timezone
   */
  deriveDateFromNewsletters(newsletters) {
    const dates = newsletters
      .map(nl => nl.date ? new Date(nl.date) : null)
      .filter(d => d && !isNaN(d.getTime()));

    if (dates.length > 0) {
      dates.sort((a, b) => b - a);
      return dates[0]; // Most recent newsletter date
    }
    return new Date();
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
    const researchSection = newsletter.researchContext
      ? `\n\nAdditional Research Context:\n${newsletter.researchContext}`
      : '';

    const prompt = `You are summarizing an AI/tech newsletter. The reader has subscribed to stay updated on AI developments and CANNOT miss any important information.

Newsletter From: ${newsletter.from}
Subject: ${newsletter.subject}
Date: ${newsletter.date}

Content:
${newsletter.textContent}

Important Links:
${newsletter.links.map(l => `- ${l.text}: ${l.url}`).join('\n')}
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

Rate this newsletter's impact for AI practitioners:
- HIGH: Breaking news, major model release, significant industry shift
- MEDIUM: Notable update, useful tool, interesting research
- LOW: Minor update, niche topic, primarily promotional

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
      const summary = await this.generateContent(prompt);

      // Extract priority from the summary
      const priorityMatch = summary.match(/\*\*Priority:\s*(HIGH|MEDIUM|LOW)\*\*/i);
      const priority = priorityMatch ? priorityMatch[1].toUpperCase() : 'MEDIUM';

      return {
        from: newsletter.from,
        subject: newsletter.subject,
        date: newsletter.date,
        summary: summary,
        links: newsletter.links,
        priority,
        originalContent: newsletter.textContent.substring(0, 1000) // Keep snippet for reference
      };
    } catch (error) {
      console.error(`Error summarizing newsletter from ${newsletter.from}:`, error);
      return {
        from: newsletter.from,
        subject: newsletter.subject,
        date: newsletter.date,
        summary: `Error generating summary. Original subject: ${newsletter.subject}`,
        links: newsletter.links,
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
1. Create a "Top Stories" section with the 3-5 most important items across all newsletters
2. For each top story, include a one-sentence "Why it matters" analysis
3. Group related topics together under appropriate category headers
4. Highlight any breaking news or major announcements
5. Note emerging trends if multiple newsletters mention similar topics
6. Keep it scannable but comprehensive
7. DO NOT lose important details in the synthesis
8. Focus ONLY on AI, machine learning, and directly related technology
9. Exclude non-AI content (skincare, travel, generic productivity, etc.)
10. Only include categories that have substantive content — do NOT create empty or filler sections
${researchFindings?.missingStories?.length > 0 ? '11. Include a "Beyond the Newsletters" section for stories found by the research agent that were not in any newsletter' : ''}

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
${researchFindings?.missingStories?.length > 0 ? `
## 🔍 Beyond the Newsletters
- [Stories discovered by research agent]
` : ''}

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
