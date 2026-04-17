import OpenAI from 'openai';
import { config } from '../utils/config.js';

export class ResearchAgent {
  constructor() {
    // Same OpenRouter setup as OpenRouterSummarizer
    this.openRouter = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: config.ai.openRouterApiKey,
      defaultHeaders: {
        'HTTP-Referer': 'https://newsletter.saurabhjalendra.com',
        'X-Title': 'AI Newsletter Summarizer'
      }
    });
    this.model = config.research?.model || config.ai.openRouterModel;
    this.searchModel = config.research?.searchModel || 'perplexity/sonar-pro';
    this.maxSearches = config.research?.maxSearches || 5;
  }

  /**
   * Main entry point — enrich parsed newsletters with research
   * @param {Array} parsedNewsletters - [{from, subject, date, textContent, links}]
   * @returns {Object} { enrichedNewsletters, researchFindings }
   */
  async enrichNewsletters(parsedNewsletters) {
    if (!parsedNewsletters || parsedNewsletters.length === 0) {
      console.log('📭 No newsletters to enrich with research.');
      return {
        enrichedNewsletters: [],
        researchFindings: { additionalContext: [], missingStories: [], entities: [] }
      };
    }

    console.log(`🔬 Starting research enrichment for ${parsedNewsletters.length} newsletters...`);

    // 1. Extract entities from all newsletters
    let entities = [];
    try {
      entities = await this.extractEntities(parsedNewsletters);
      console.log(`🏷️  Extracted ${entities.length} entities from newsletters.`);
    } catch (error) {
      console.error('⚠️  Entity extraction failed, continuing without entities:', error.message);
    }

    // 2. Search for context on top entities
    let additionalContext = [];
    try {
      additionalContext = await this.searchForContext(entities);
      console.log(`🔍 Found additional context for ${additionalContext.length} topics.`);
    } catch (error) {
      console.error('⚠️  Context search failed, continuing without additional context:', error.message);
    }

    // 3. Find missing stories
    const coveredTopics = entities.map(e => e.name);
    // Use earliest newsletter date in IST to match summarizer's logic
    const datesFromNewsletters = parsedNewsletters
      .map(nl => nl.date ? new Date(nl.date) : null)
      .filter(d => d && !isNaN(d.getTime()))
      .sort((a, b) => a - b);
    const dateString = datesFromNewsletters[0]
      ? datesFromNewsletters[0].toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' })
      : new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });

    let missingStories = [];
    try {
      missingStories = await this.findMissingStories(coveredTopics, dateString);
      console.log(`📰 Found ${missingStories.length} potentially missing stories.`);
    } catch (error) {
      console.error('⚠️  Missing stories search failed, continuing without:', error.message);
    }

    // 4. Build research context per newsletter and add "why it matters" to top stories
    const enrichedNewsletters = parsedNewsletters.map(newsletter => {
      // Find relevant context — use word-boundary match to avoid common-word false positives
      const relevantContext = additionalContext.filter(ctx => {
        if (!ctx?.topic || ctx.topic.length < 3) return false;
        const text = `${newsletter.subject || ''} ${newsletter.textContent || ''}`;
        const escaped = ctx.topic.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escaped}\\b`, 'i');
        return regex.test(text);
      });

      return {
        ...newsletter,
        researchContext: relevantContext.length > 0
          ? relevantContext.map(ctx => `**${ctx.topic}**: ${ctx.context} (Source: ${ctx.source})`).join('\n\n')
          : null
      };
    });

    console.log('✅ Research enrichment complete.');

    return {
      enrichedNewsletters,
      researchFindings: {
        additionalContext,
        missingStories,
        entities
      }
    };
  }

  /**
   * Extract key entities/topics from all newsletters
   * Single LLM call — ask for JSON array output
   * @param {Array} parsedNewsletters
   * @returns {Array<{name: string, type: string, context: string}>}
   * Types: company, product, paper, person, technology, event
   */
  async extractEntities(parsedNewsletters) {
    // Concatenate all newsletter subjects + first 500 chars of content
    const combinedContent = parsedNewsletters.map(nl => {
      const snippet = nl.textContent ? nl.textContent.substring(0, 500) : '';
      return `Subject: ${nl.subject}\nFrom: ${nl.from}\nContent: ${snippet}`;
    }).join('\n---\n');

    const prompt = `You are an AI research assistant analyzing newsletters. Extract all key entities and topics mentioned.

Newsletter Content:
${combinedContent}

Extract entities as a JSON array. Each entity should have:
- "name": the entity name (e.g., "GPT-5", "Google DeepMind", "Llama 4")
- "type": one of: company, product, paper, person, technology, event
- "context": a brief description of how it appears in the newsletters (1 sentence)

Return ONLY a valid JSON array, no other text. Example:
[{"name": "GPT-5", "type": "product", "context": "Mentioned as upcoming release from OpenAI"}, ...]

Extract at least the top 10 most significant entities. Focus on AI/ML entities.`;

    const response = await this.generateContent(prompt);
    return this._parseJsonArray(response, []);
  }

  /**
   * Search for additional context on major entities
   * Uses web-search-capable model (perplexity/sonar-pro)
   * @param {Array} entities
   * @returns {Array<{topic: string, context: string, source: string}>}
   */
  async searchForContext(entities) {
    if (!entities || entities.length === 0) {
      return [];
    }

    // Take top N entities
    const topEntities = entities.slice(0, this.maxSearches);
    const results = [];

    for (let i = 0; i < topEntities.length; i++) {
      const entity = topEntities[i];
      console.log(`  🔎 [${i + 1}/${topEntities.length}] Searching for context on "${entity.name}"...`);

      try {
        const prompt = `What is the latest news and context about "${entity.name}" in the AI/ML space?
Context from newsletter: ${entity.context}

Provide a concise summary (2-3 paragraphs) of the most recent and relevant information.
Focus on: what it is, why it matters, latest developments, and industry impact.
Include the source of your information if possible.

Return your response as a JSON object with these fields:
- "topic": the entity name
- "context": your summary (2-3 paragraphs as a single string)
- "source": primary source or "web search"

Return ONLY the JSON object, no other text.`;

        const response = await this.generateContent(prompt, { useSearchModel: true });
        const parsed = this._parseJsonObject(response, null);

        if (parsed) {
          results.push(parsed);
        } else {
          // Fallback: use the raw response as context
          results.push({
            topic: entity.name,
            context: response.substring(0, 1000),
            source: 'web search'
          });
        }
      } catch (error) {
        console.error(`  ⚠️  Search failed for "${entity.name}":`, error.message);
      }

      // Rate limiting: 2-second delay between requests
      if (i < topEntities.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    return results;
  }

  /**
   * Find major AI news NOT covered by any newsletter
   * @param {Array<string>} coveredTopics - list of topic names already covered
   * @param {string} dateString - date in YYYY-MM-DD format
   * @returns {Array<{headline: string, summary: string, whyItMatters: string, source: string}>}
   */
  async findMissingStories(coveredTopics, dateString) {
    const topicList = coveredTopics.length > 0
      ? coveredTopics.join(', ')
      : 'no specific topics identified';

    const prompt = `You are an AI news researcher. The following AI/ML topics were already covered in today's newsletters:

Covered topics: ${topicList}

Date: ${dateString}

What major AI/ML news from around ${dateString} might be MISSING from this list? Look for:
- Major model releases or updates
- Significant research papers
- Industry announcements (funding, acquisitions, partnerships)
- Regulatory developments related to AI
- Notable AI tool launches or updates

Return your response as a JSON array of missing stories. Each story should have:
- "headline": short headline (1 line)
- "summary": brief summary (2-3 sentences)
- "whyItMatters": why this is significant for AI practitioners
- "source": where this news originated

Return ONLY a valid JSON array, no other text. If no major stories are missing, return an empty array [].
Limit to the top 5 most significant missing stories.`;

    const response = await this.generateContent(prompt, { useSearchModel: true });
    return this._parseJsonArray(response, []);
  }

  /**
   * Generate content using OpenRouter
   * @param {string} prompt
   * @param {Object} options
   * @param {boolean} options.useSearchModel - use web-search-capable model
   * @returns {string}
   */
  async generateContent(prompt, options = {}) {
    const model = options.useSearchModel ? this.searchModel : this.model;

    const completion = await this.openRouter.chat.completions.create({
      model,
      messages: [
        { role: 'user', content: prompt }
      ]
    });

    const content = completion?.choices?.[0]?.message?.content;
    if (!content) throw new Error(`Empty response from OpenRouter (model: ${model})`);
    return content;
  }

  /**
   * Parse a JSON array from an LLM response, with fallback
   * @param {string} text - raw LLM response
   * @param {Array} fallback - value to return on parse failure
   * @returns {Array}
   */
  _parseJsonArray(text, fallback = []) {
    if (typeof text !== 'string' || !text.trim()) {
      console.warn('⚠️  Empty/non-string LLM response; using fallback.');
      return fallback;
    }
    try {
      // Try direct parse first
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      // Try extracting JSON from markdown code block
      try {
        const match = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?\s*```/);
        if (match) {
          const parsed = JSON.parse(match[1]);
          if (Array.isArray(parsed)) return parsed;
        }
      } catch {
        // Try finding array in the text
        try {
          const start = text.indexOf('[');
          const end = text.lastIndexOf(']');
          if (start !== -1 && end !== -1 && end > start) {
            const parsed = JSON.parse(text.substring(start, end + 1));
            if (Array.isArray(parsed)) return parsed;
          }
        } catch {
          // All parsing attempts failed
        }
      }
    }
    console.warn('⚠️  Failed to parse JSON array from LLM response, using fallback.');
    return fallback;
  }

  /**
   * Parse a JSON object from an LLM response, with fallback
   * @param {string} text - raw LLM response
   * @param {Object|null} fallback - value to return on parse failure
   * @returns {Object|null}
   */
  _parseJsonObject(text, fallback = null) {
    if (typeof text !== 'string' || !text.trim()) {
      console.warn('⚠️  Empty/non-string LLM response; using fallback.');
      return fallback;
    }
    try {
      const parsed = JSON.parse(text);
      if (typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
    } catch {
      try {
        const match = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?\s*```/);
        if (match) {
          const parsed = JSON.parse(match[1]);
          if (typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
        }
      } catch {
        try {
          const start = text.indexOf('{');
          const end = text.lastIndexOf('}');
          if (start !== -1 && end !== -1 && end > start) {
            const parsed = JSON.parse(text.substring(start, end + 1));
            if (typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
          }
        } catch {
          // All parsing attempts failed
        }
      }
    }
    console.warn('⚠️  Failed to parse JSON object from LLM response, using fallback.');
    return fallback;
  }
}
