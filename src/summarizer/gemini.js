import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from '../utils/config.js';

export class GeminiSummarizer {
  constructor() {
    this.genAI = new GoogleGenerativeAI(config.ai.geminiApiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  }

  /**
   * Generate comprehensive summary of newsletters
   * IMPORTANT: Must not lose any information - user cannot miss AI updates
   */
  async summarizeNewsletters(newsletters) {
    if (!newsletters || newsletters.length === 0) {
      return {
        summary: 'No newsletters received today.',
        totalNewsletters: 0,
        newsletters: []
      };
    }

    console.log(`Summarizing ${newsletters.length} newsletters with Gemini AI...`);

    try {
      // Process each newsletter individually for detailed summaries
      // Sequential processing to avoid rate limits (free tier: 10 req/min)
      const individualSummaries = [];
      for (let i = 0; i < newsletters.length; i++) {
        console.log(`  [${i + 1}/${newsletters.length}] Summarizing newsletter from ${newsletters[i].from}...`);
        const summary = await this.summarizeIndividual(newsletters[i]);
        individualSummaries.push(summary);

        // Add delay between requests to avoid rate limits (6 seconds = max 10/min)
        if (i < newsletters.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 6000));
        }
      }

      // Generate overall daily summary
      const overallSummary = await this.generateOverallSummary(individualSummaries);

      return {
        date: new Date().toISOString(),
        summary: overallSummary,
        totalNewsletters: newsletters.length,
        newsletters: individualSummaries
      };
    } catch (error) {
      console.error('Error during summarization:', error);
      throw error;
    }
  }

  /**
   * Summarize individual newsletter with ALL key information preserved
   */
  async summarizeIndividual(newsletter) {
    const prompt = `You are summarizing an AI/tech newsletter. The reader has subscribed to stay updated on AI developments and CANNOT miss any important information.

Newsletter From: ${newsletter.from}
Subject: ${newsletter.subject}
Date: ${newsletter.date}

Content:
${newsletter.textContent}

Important Links:
${newsletter.links.map(l => `- ${l.text}: ${l.url}`).join('\n')}

Instructions:
1. Provide a COMPREHENSIVE summary that captures ALL important points
2. DO NOT omit any significant updates, announcements, tools, or developments
3. Include specific names of products, companies, tools, and technologies mentioned
4. Preserve key statistics, dates, and facts
5. List important links with context
6. Use clear bullet points for readability
7. Organize by topic/category if multiple topics are covered

Format your response as:
## [Newsletter Name]

### Key Highlights
- [Most important update]
- [Second most important]
...

### Detailed Points
- [Comprehensive coverage of all topics]
...

### Important Links
- [Link title and why it matters]: [URL]

Be thorough - missing information is worse than being verbose.`;

    try {
      const result = await this.model.generateContent(prompt);
      const response = result.response;
      const summary = response.text();

      return {
        from: newsletter.from,
        subject: newsletter.subject,
        date: newsletter.date,
        summary: summary,
        links: newsletter.links,
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
        error: error.message
      };
    }
  }

  /**
   * Generate overall daily summary across all newsletters
   */
  async generateOverallSummary(individualSummaries) {
    if (individualSummaries.length === 0) {
      return 'No newsletters to summarize.';
    }

    const prompt = `You are creating a daily digest of AI/tech newsletters. Synthesize the following ${individualSummaries.length} newsletter summaries into ONE cohesive daily brief.

${individualSummaries.map((ns, idx) => `
Newsletter ${idx + 1}: ${ns.from}
${ns.summary}
`).join('\n---\n')}

Instructions:
1. Create a brief "Top Stories" section (3-5 most important items across all newsletters)
2. Group related topics together (e.g., all AI model updates, all tool launches, etc.)
3. Highlight any breaking news or major announcements
4. Note emerging trends if multiple newsletters mention similar topics
5. Keep it scannable but comprehensive
6. DO NOT lose important details in the synthesis

Format:
# Daily AI Newsletter Digest - ${new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}

## 🔥 Top Stories
- ...

## 🤖 AI Models & Research
- ...

## 🛠️ Tools & Products
- ...

## 📰 Industry News
- ...

## 📚 Resources & Learning
- ...

Total Newsletters: ${individualSummaries.length}`;

    try {
      const result = await this.model.generateContent(prompt);
      const response = result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating overall summary:', error);
      return `Received ${individualSummaries.length} newsletters. See individual summaries below.`;
    }
  }
}
