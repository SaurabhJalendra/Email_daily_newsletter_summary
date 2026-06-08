# 📰 AI Newsletter Digest

An automated system that fetches your newsletters daily, generates comprehensive AI-powered summaries using Google Gemini, and delivers them via email and a beautiful web dashboard.

## 🌟 Features

- **Automated Email Fetching**: Connects to Gmail via IMAP to fetch newsletters
- **AI-Powered Summarization**: Uses Google Gemini to create comprehensive summaries without losing any information
- **Twice-Daily Scheduling**: Runs automatically at 6 AM & 6 PM IST via GitHub Actions (Morning + Evening editions)
- **Email Notifications**: Get a beautifully formatted email with your daily digest
- **Web Dashboard**: Browse all your summaries by date with an interactive calendar
- **Historical Archive**: Access any previous day's summary easily
- **Free Forever**: Runs on GitHub Actions (free) + Vercel (free)

## 🏗️ Architecture

```
┌─────────────────┐
│  GitHub Actions │ ← Runs at 6 AM & 6 PM IST
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Email Fetcher  │ ← Fetches newsletters via IMAP
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Content Parser  │ ← Cleans and extracts newsletter content
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Gemini AI       │ ← Generates comprehensive summaries
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ JSON Storage    │ ← Saves summaries to data/summaries/
└────────┬────────┘
         │
         ├──────────────────────┬────────────────────┐
         ▼                      ▼                    ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│ Email Notifier  │   │ Git Commit      │   │ Vercel Dashboard│
└─────────────────┘   └─────────────────┘   └─────────────────┘
```

## 🚀 Setup Instructions

### 1. GitHub Repository Setup

1. Fork or clone this repository
2. Go to **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:

```
EMAIL_ADDRESS: your-email@gmail.com
EMAIL_APP_PASSWORD: your-16-char-gmail-app-password
NEWSLETTER_SENDERS: sender1@example.com,sender2@example.com,...
GEMINI_API_KEY: your-gemini-api-key
NOTIFICATION_EMAIL: your-email@gmail.com
```

### 2. Dashboard Deployment on Vercel

#### Option A: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to dashboard directory
cd dashboard

# Deploy
vercel --prod
```

#### Option B: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Set **Root Directory** to `dashboard`
5. Click **Deploy**

### 3. Custom Domain Setup (saurabhjalendra.com)

#### DNS Settings for Subdomain: newsletter.saurabhjalendra.com

Add the following DNS records in your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

**Option 1: CNAME Record (Recommended)**
```
Type: CNAME
Name: newsletter
Value: cname.vercel-dns.com
TTL: Auto or 3600
```

**Option 2: A Records (Alternative)**
```
Type: A
Name: newsletter
Value: 76.76.21.21
TTL: Auto or 3600
```

#### In Vercel Dashboard:

1. Go to your project → **Settings** → **Domains**
2. Add domain: `newsletter.saurabhjalendra.com`
3. Vercel will verify DNS and issue SSL certificate automatically
4. Wait 5-10 minutes for DNS propagation

Your dashboard will be live at: **https://newsletter.saurabhjalendra.com**

### 4. GitHub Actions Permissions

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
3. Click **Save**

## 📅 How It Works

### Workflow (Twice Daily — 6 AM & 6 PM IST)

The pipeline runs as two editions per day:
- **Morning** — 06:00 IST (00:30 UTC) — covers everything since the previous evening run
- **Evening** — 18:00 IST (12:30 UTC) — covers everything since the morning run

> Note: GitHub's scheduled triggers can fire 1–4 hours late under load, so actual delivery may drift later than the times above. The pipeline itself sends the email ~3–5 minutes into the run.

Each run:

1. **GitHub Actions triggers** (00:30 UTC morning / 12:30 UTC evening); the edition is auto-derived from the IST hour
2. **Email Fetcher** connects to Gmail and fetches newsletters since the last run's **timestamp watermark** (IMAP `SINCE` is date-only, so results are post-filtered on each email's received time to split the two windows)
3. **Parser** extracts clean content from HTML newsletters
4. **AI summarizer** (OpenRouter) generates:
   - Individual summaries for each newsletter (comprehensive, no info loss)
   - Overall digest categorized by topic
5. **Storage** saves the edition as a JSON file (`data/summaries/YYYY-MM-DD-<morning|evening>.json`) and advances the watermark
6. **Email Notifier** sends formatted email with summary
7. **Git** commits new summary data to repository
8. **Vercel** automatically rebuilds dashboard with new data

### Manual Trigger

You can manually run the workflow anytime:
1. Go to **Actions** tab
2. Select **"Daily Newsletter Summary"**
3. Click **"Run workflow"**

## 🧪 Local Testing

```bash
# Install dependencies
npm install

# Test the summarization pipeline
npm run dev

# Or test mode
npm start -- --test
```

## 📁 Project Structure

```
Email_daily_newsletter_summary/
├── src/
│   ├── email/
│   │   ├── fetcher.js          # Gmail IMAP integration
│   │   └── parser.js           # Newsletter content extraction
│   ├── summarizer/
│   │   └── gemini.js           # AI summarization
│   ├── database/
│   │   └── storage.js          # JSON file storage
│   ├── notifier/
│   │   └── email.js            # Email notifications
│   ├── utils/
│   │   └── config.js           # Configuration
│   └── index.js                # Main pipeline
├── dashboard/                   # Next.js dashboard
│   ├── pages/
│   │   └── index.js            # Main dashboard page
│   ├── styles/
│   │   └── globals.css         # Tailwind styles
│   └── package.json
├── data/
│   └── summaries/              # Generated summaries (YYYY-MM-DD-<edition>.json)
├── .github/
│   └── workflows/
│       └── daily-summary.yml   # GitHub Actions workflow
├── .env                        # Local environment variables
└── package.json
```

## 🔧 Configuration

### Adding More Newsletter Senders

Edit the `NEWSLETTER_SENDERS` secret in GitHub Actions:
```
sender1@example.com,sender2@example.com,@substack.com
```

### Changing Schedule Time

Edit the two cron entries in `.github/workflows/daily-summary.yml` (times are UTC; IST = UTC + 5:30). The edition is derived from the IST hour (before 14:00 → morning, else evening), so keep one cron in each half of the IST day:
```yaml
schedule:
  - cron: '30 0 * * *'    # Morning edition — 06:00 IST
  - cron: '30 12 * * *'   # Evening edition — 18:00 IST
```
You can also trigger a specific edition manually from the **Actions** tab via the `edition` input.

### Customizing Summary Style

Edit `src/summarizer/gemini.js` to modify the AI prompts for different summarization styles.

## 🎨 Dashboard Features

- **📅 Interactive Calendar**: Click any date to view that day's summary
- **🔥 Daily Overview**: High-level digest of all newsletters
- **📧 Individual Summaries**: Detailed breakdown of each newsletter
- **🔗 Important Links**: Extracted links with context
- **📊 Statistics**: Total newsletters summarized per day
- **🎯 Responsive Design**: Works perfectly on mobile and desktop

## 🛠️ Technologies Used

- **Backend**: Node.js, ES Modules
- **Email**: IMAP (`node-imap`), Nodemailer
- **AI**: Google Gemini 1.5 Flash
- **Parsing**: Cheerio, Turndown, html-to-text
- **Frontend**: Next.js 14, React, Tailwind CSS
- **Deployment**: GitHub Actions, Vercel
- **Storage**: JSON files (future: can migrate to MongoDB/PostgreSQL)

## 📊 Cost Breakdown

| Service | Cost |
|---------|------|
| GitHub Actions | **$0/month** (2000 free minutes) |
| Vercel Hosting | **$0/month** (Free tier: 100GB bandwidth) |
| Google Gemini | **$0/month** (Free tier: 15 RPM) |
| Gmail SMTP | **$0/month** (Free) |
| **Total** | **$0/month** ✅ |

## 🔐 Security Notes

- `.env` file is git-ignored and contains sensitive credentials
- Use GitHub Secrets for CI/CD environment variables
- Gmail App Password recommended over regular password
- All API keys should be kept secret

## 📈 Future Enhancements

- [ ] PostgreSQL/MongoDB for better scaling
- [ ] Search functionality in dashboard
- [ ] Newsletter categorization and tagging
- [ ] Export summaries as PDF
- [ ] Mobile app notifications
- [ ] Telegram bot integration
- [ ] Analytics and trends over time

## 🐛 Troubleshooting

### GitHub Action Fails
- Check if secrets are properly set
- Verify Gmail app password is correct
- Check GitHub Actions logs for errors

### No Emails Fetched
- Verify newsletter senders list
- Check if emails are in INBOX (not spam/promotions)
- Ensure date range is correct

### Dashboard Not Updating
- Check if Vercel auto-deployment is enabled
- Verify summaries are being committed to repo
- Rebuild dashboard manually in Vercel

## 📞 Support

For issues or questions:
1. Check GitHub Actions logs
2. Review error emails sent to your inbox
3. Check Vercel deployment logs

## 📄 License

MIT License - Feel free to use and modify!

---

Built with ❤️ using Claude Code
