import dotenv from 'dotenv';
import { readFileSync, existsSync } from 'fs';
dotenv.config();

/**
 * Senders from the NEWSLETTER_SENDERS secret plus config/extra-senders.txt.
 * The secret cannot be read back once set, so additions live in a committed file instead.
 * An empty secret keeps its old meaning (fetch ALL mail), so extras are merged only when the secret has entries.
 */
function loadSenders() {
  const fromEnv = (process.env.NEWSLETTER_SENDERS || '').split(',').map(s => s.trim()).filter(Boolean);
  const file = new URL('../../config/extra-senders.txt', import.meta.url);
  const extra = existsSync(file)
    ? readFileSync(file, 'utf8').split(/\r?\n/).map(l => l.replace(/#.*/, '').trim()).filter(Boolean)
    : [];
  if (fromEnv.length === 0) return [];
  const seen = new Set(fromEnv.map(s => s.toLowerCase()));
  return [...fromEnv, ...extra.filter(s => !seen.has(s.toLowerCase()))];
}

export const config = {
  email: {
    address: process.env.EMAIL_ADDRESS,
    password: process.env.EMAIL_APP_PASSWORD,
    imap: {
      user: process.env.EMAIL_ADDRESS,
      password: process.env.EMAIL_APP_PASSWORD,
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
      tlsOptions: { rejectUnauthorized: false },
      authTimeout: 30000,
      connTimeout: 30000
    },
    smtp: {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    }
  },
  newsletters: {
    senders: loadSenders()
  },
  ai: {
    openRouterApiKey: process.env.OPENROUTER_API_KEY,
    openRouterModel: process.env.OPENROUTER_MODEL || 'meta-llama/llama-3.3-70b-instruct'
  },
  notification: {
    recipientEmail: process.env.NOTIFICATION_EMAIL
  },
  research: {
    enabled: process.env.RESEARCH_AGENT_ENABLED === 'true',
    model: process.env.RESEARCH_MODEL || 'meta-llama/llama-3.3-70b-instruct',
    searchModel: process.env.RESEARCH_SEARCH_MODEL || 'perplexity/sonar-pro',
    maxSearches: parseInt(process.env.RESEARCH_MAX_SEARCHES || '5', 10)
  },
  timezone: process.env.TZ || 'Asia/Kolkata'
};
