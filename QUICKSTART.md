# ⚡ Quick Start Guide

## For Saurabh: Get Your Newsletter Digest Running in 5 Minutes

### Step 1: GitHub Secrets (2 minutes)

1. Go to your repository: `https://github.com/YOUR_USERNAME/Email_daily_newsletter_summary`
2. Click **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
3. Add these 5 secrets (copy-paste exactly):

```
Secret Name: EMAIL_ADDRESS
Value: saurabhjalendra@gmail.com

Secret Name: EMAIL_APP_PASSWORD
Value: vepe yman hhnv xpzv

Secret Name: GEMINI_API_KEY
Value: AIzaSyCBU0yeyvbZ8ETBdo7GcqtlXS5VIvSKKD8

Secret Name: NOTIFICATION_EMAIL
Value: saurabhjalendra@gmail.com

Secret Name: NEWSLETTER_SENDERS
Value: hi@mail.theresanaiforthat.com,noreply@medium.com,noreply@skool.com,hello@mindstream.news,noreply@newsletter.journalclub.io,thetechbuzz@mail.beehiiv.com,newsletter@hw-mail.glich.co,dan@tldrnewsletter.com,aibreakfast@mail.beehiiv.com,news@daily.therundown.ai,stayingahead@mail.beehiiv.com,newsletter@intheworldofai.com,news@alphasignal.ai,futuretools@mail.beehiiv.com,drjustinsung@icanstudy.com,aiinnovationshub@mail.beehiiv.com,alifeengineered@substack.com,skilledcoder@substack.com,news@llamaindex.ai,boringbot@substack.com
```

### Step 2: Enable GitHub Actions Write Permissions (1 minute)

1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **"Read and write permissions"**
4. Check **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**

### Step 3: Test the Workflow (30 seconds)

1. Go to **Actions** tab
2. Click **"Daily Newsletter Summary"**
3. Click **"Run workflow"** → **"Run workflow"**
4. Watch it run! (~2-3 minutes)
5. Check your email for the summary

### Step 4: Deploy Dashboard to Vercel (2 minutes)

#### Option A: Vercel Dashboard (Easiest)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repo
3. Set **Root Directory**: `dashboard`
4. Click **Deploy**
5. Done! You'll get a URL like `your-project.vercel.app`

#### Option B: Vercel CLI

```bash
npm install -g vercel
cd dashboard
vercel --prod
```

### Step 5: Connect Custom Domain (2 minutes)

#### In Your DNS Provider (GoDaddy/Namecheap/Cloudflare):

Add this DNS record:
```
Type: CNAME
Name: newsletter
Value: cname.vercel-dns.com
TTL: Auto
```

#### In Vercel:

1. Go to your project → **Settings** → **Domains**
2. Add: `newsletter.saurabhjalendra.com`
3. Wait 5-10 minutes
4. Visit: https://newsletter.saurabhjalendra.com

---

## 🎉 You're Done!

- ✅ Newsletters will be summarized **every day at 12 midnight IST**
- ✅ You'll receive an email with the summary
- ✅ View archive at **newsletter.saurabhjalendra.com**

## 🧪 Test Manually Anytime

Go to **Actions** → **Daily Newsletter Summary** → **Run workflow**

## 📧 What to Expect

**Daily Email Format:**
```
Subject: 📰 Your AI Newsletter Digest - [Date]

📊 Daily Overview
- Top stories across all newsletters

📝 Individual Newsletter Summaries
- Detailed breakdown of each newsletter
- Important links
```

**Dashboard:**
- Calendar view with clickable dates
- Detailed summaries for each day
- Searchable archive
- Live at: https://newsletter.saurabhjalendra.com

---

**Need Help?** Check GitHub Actions logs or Vercel deployment logs.
