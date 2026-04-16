import dotenv from 'dotenv';
dotenv.config();

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
    senders: process.env.NEWSLETTER_SENDERS?.split(',').map(s => s.trim()) || []
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
