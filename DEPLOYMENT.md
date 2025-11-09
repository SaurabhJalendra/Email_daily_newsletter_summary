# 🚀 Complete Deployment Guide

## Overview

This guide will walk you through deploying your newsletter summarization system completely free using:
- **GitHub Actions**: Runs the summarization at 12 midnight IST
- **Vercel**: Hosts the web dashboard at newsletters.saurabhjalendra.com

Total time: ~15 minutes

---

## Part 1: GitHub Repository Setup (5 minutes)

### 1.1 Configure GitHub Secrets

Your repository is already pushed to: `https://github.com/SaurabhJalendra/Email_daily_newsletter_summary`

Now add the required secrets:

1. Go to: https://github.com/SaurabhJalendra/Email_daily_newsletter_summary/settings/secrets/actions
2. Click **"New repository secret"** for each of these:

#### Secret 1: EMAIL_ADDRESS
```
Name: EMAIL_ADDRESS
Value: saurabhjalendra@gmail.com
```

#### Secret 2: EMAIL_APP_PASSWORD
```
Name: EMAIL_APP_PASSWORD
Value: vepe yman hhnv xpzv
```

#### Secret 3: GEMINI_API_KEY
```
Name: GEMINI_API_KEY
Value: AIzaSyCBU0yeyvbZ8ETBdo7GcqtlXS5VIvSKKD8
```

#### Secret 4: NOTIFICATION_EMAIL
```
Name: NOTIFICATION_EMAIL
Value: saurabhjalendra@gmail.com
```

#### Secret 5: NEWSLETTER_SENDERS
```
Name: NEWSLETTER_SENDERS
Value: hi@mail.theresanaiforthat.com,noreply@medium.com,noreply@skool.com,hello@mindstream.news,noreply@newsletter.journalclub.io,thetechbuzz@mail.beehiiv.com,newsletter@hw-mail.glich.co,dan@tldrnewsletter.com,aibreakfast@mail.beehiiv.com,news@daily.therundown.ai,stayingahead@mail.beehiiv.com,newsletter@intheworldofai.com,news@alphasignal.ai,futuretools@mail.beehiiv.com,drjustinsung@icanstudy.com,aiinnovationshub@mail.beehiiv.com,alifeengineered@substack.com,skilledcoder@substack.com,news@llamaindex.ai,boringbot@substack.com
```

### 1.2 Enable GitHub Actions Permissions

1. Go to: https://github.com/SaurabhJalendra/Email_daily_newsletter_summary/settings/actions
2. Under **"Workflow permissions"**, select:
   - ✅ **"Read and write permissions"**
   - ✅ **"Allow GitHub Actions to create and approve pull requests"**
3. Click **"Save"**

### 1.3 Test the Workflow

1. Go to: https://github.com/SaurabhJalendra/Email_daily_newsletter_summary/actions
2. Click **"Daily Newsletter Summary"** workflow
3. Click **"Run workflow"** dropdown → **"Run workflow"** button
4. Watch the workflow execute (takes ~2-3 minutes)
5. Check your email (saurabhjalendra@gmail.com) for the summary!

---

## Part 2: Vercel Dashboard Deployment (5 minutes)

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**: https://vercel.com/new
2. **Sign in** with GitHub
3. **Import repository**:
   - Click "Import Git Repository"
   - Select: `SaurabhJalendra/Email_daily_newsletter_summary`
   - Click "Import"
4. **Configure project**:
   ```
   Project Name: newsletter-digest
   Framework Preset: Next.js
   Root Directory: dashboard
   Build Command: (leave default)
   Output Directory: (leave default)
   Install Command: (leave default)
   ```
5. Click **"Deploy"**
6. Wait 2-3 minutes for deployment
7. You'll get a URL like: `newsletter-digest.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to dashboard directory
cd dashboard

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? newsletter-digest
# - In which directory? ./
# - Modify settings? No
```

---

## Part 3: Custom Domain Setup (5 minutes)

### 3.1 Configure DNS at Your Domain Provider

**Your domain**: saurabhjalendra.com

Go to your domain registrar's DNS management page (GoDaddy, Namecheap, Cloudflare, etc.) and add:

#### For subdomain: newsletters.saurabhjalendra.com

**Option 1: CNAME Record (Recommended)**
```
Type:  CNAME
Name:  newsletters
Value: cname.vercel-dns.com
TTL:   Automatic (or 3600)
```

**Option 2: A Record (Alternative)**
```
Type:  A
Name:  newsletters
Value: 76.76.21.21
TTL:   Automatic (or 3600)
```

### 3.2 Add Domain in Vercel

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. In the domain input field, enter: `newsletters.saurabhjalendra.com`
4. Click **"Add"**
5. Vercel will verify your DNS configuration
6. SSL certificate will be auto-generated (takes ~1 minute)
7. Status will show "Valid Configuration" when ready

### 3.3 Verify Deployment

Wait 5-10 minutes for DNS propagation, then visit:
```
https://newsletters.saurabhjalendra.com
```

You should see your dashboard!

---

## Part 4: Verification Checklist

### ✅ GitHub Actions
- [ ] All 5 secrets added
- [ ] Workflow permissions set to "Read and write"
- [ ] Manual workflow run successful
- [ ] Email notification received

### ✅ Vercel Dashboard
- [ ] Project deployed successfully
- [ ] Dashboard loads at Vercel URL
- [ ] Custom domain added
- [ ] SSL certificate active
- [ ] Dashboard loads at newsletters.saurabhjalendra.com

### ✅ Daily Automation
- [ ] GitHub Action scheduled for 12 midnight IST (6:30 PM UTC)
- [ ] Summaries saved to `data/summaries/` directory
- [ ] Dashboard auto-rebuilds when new summaries are pushed

---

## Part 5: DNS Provider Specific Instructions

### GoDaddy
1. Go to: https://dcc.godaddy.com/manage/saurabhjalendra.com/dns
2. Click "Add" under DNS Records
3. Select "CNAME"
4. Enter:
   - Name: `newsletters`
   - Value: `cname.vercel-dns.com`
   - TTL: `1 Hour`
5. Click "Save"

### Namecheap
1. Go to Dashboard → Domain List → Manage → Advanced DNS
2. Click "Add New Record"
3. Select "CNAME Record"
4. Enter:
   - Host: `newsletters`
   - Value: `cname.vercel-dns.com`
   - TTL: `Automatic`
5. Click the checkmark to save

### Cloudflare
1. Go to DNS → Records
2. Click "Add record"
3. Select "CNAME"
4. Enter:
   - Name: `newsletters`
   - Target: `cname.vercel-dns.com`
   - Proxy status: `DNS only` (orange cloud OFF)
   - TTL: `Auto`
5. Click "Save"

---

## Troubleshooting

### GitHub Actions Fails

**Check logs:**
1. Go to Actions tab
2. Click on failed workflow run
3. Click on "summarize" job
4. Expand steps to see errors

**Common issues:**
- Missing or incorrect secrets → Re-add secrets
- Gmail app password expired → Generate new one
- API rate limits → Wait and retry

### Dashboard Not Loading

**Vercel deployment failed:**
1. Check Vercel deployment logs
2. Ensure `dashboard` directory is set as root
3. Try redeploying

**Domain not working:**
1. Check DNS records are correct
2. Wait 10-30 minutes for DNS propagation
3. Use https://dnschecker.org to verify propagation
4. Ensure SSL certificate is active in Vercel

### No Summaries Generated

**Check if newsletters were received:**
1. Look at GitHub Actions logs
2. Check if any emails matched sender filters
3. Verify IMAP connection succeeded

**Newsletters not being detected:**
1. Add more sender addresses to NEWSLETTER_SENDERS secret
2. Check Gmail spam/promotions folders
3. Verify newsletters are in INBOX

---

## Next Steps

Once deployed:

1. **Test immediately**: Run the workflow manually to generate your first summary
2. **Add more senders**: Edit NEWSLETTER_SENDERS secret as you discover new newsletters
3. **Monitor**: Check GitHub Actions runs daily to ensure it's working
4. **Customize**: Edit prompts in `src/summarizer/gemini.js` for different summary styles

---

## Support

- **GitHub Actions logs**: Check workflow runs for errors
- **Vercel logs**: Check deployment and function logs
- **Email logs**: Error notifications sent to your email

**All systems are free tier:**
- GitHub Actions: 2000 minutes/month (you'll use ~150)
- Vercel: 100GB bandwidth/month
- Gemini API: Free tier with rate limits

Your newsletter digest system is now fully automated and costs $0/month! 🎉
