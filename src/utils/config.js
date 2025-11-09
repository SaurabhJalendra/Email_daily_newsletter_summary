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
      tlsOptions: { rejectUnauthorized: false }
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
    geminiApiKey: process.env.GEMINI_API_KEY
  },
  notification: {
    recipientEmail: process.env.NOTIFICATION_EMAIL
  },
  timezone: process.env.TZ || 'Asia/Kolkata'
};
