# 🔧 Troubleshooting Guide

This guide covers common issues and their solutions for the Newsletter Digest system.

---

## GitHub Actions Issues

### ❌ Workflow Run Fails

#### Symptom
GitHub Action shows red X or fails to complete.

#### Diagnosis
1. Go to **Actions** tab in your repository
2. Click on the failed workflow run
3. Click on the **"summarize"** job
4. Expand each step to find the error

#### Common Errors & Solutions

**Error: "IMAP connection failed"**
```
Solution:
1. Verify EMAIL_ADDRESS and EMAIL_APP_PASSWORD secrets are correct
2. Generate a new Gmail App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Create new password for "Mail"
   - Update EMAIL_APP_PASSWORD secret
3. Ensure "Less secure app access" is enabled (if using old Gmail account)
```

**Error: "Invalid API key" (Gemini)**
```
Solution:
1. Verify GEMINI_API_KEY secret is correct
2. Check API key is active at: https://makersuite.google.com/app/apikey
3. Ensure you haven't exceeded free tier limits
4. Generate new API key if needed and update secret
```

**Error: "Permission denied" when pushing to repository**
```
Solution:
1. Go to Settings → Actions → General
2. Under "Workflow permissions":
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"
3. Click "Save"
4. Re-run the workflow
```

**Error: "No newsletters found"**
```
This is not an error - it means:
- No emails from configured senders since last summary
- Newsletters might be in Spam/Promotions folder
- NEWSLETTER_SENDERS list might need updating

Solution:
1. Check Gmail Inbox for newsletters
2. Move newsletters from Promotions to Primary inbox
3. Add more sender addresses to NEWSLETTER_SENDERS secret
4. Run workflow manually to test
```

### ⏰ Workflow Not Running at Scheduled Time

#### Symptom
Workflow doesn't run at 12 midnight IST.

#### Diagnosis
```bash
# Check cron schedule in .github/workflows/daily-summary.yml
# Should be: cron: '30 18 * * *'  (6:30 PM UTC = 12:00 AM IST)
```

#### Solutions
1. **Verify cron syntax**: Use https://crontab.guru to validate
2. **GitHub Actions delay**: Scheduled workflows may run 5-15 minutes late during high load
3. **First run**: Initial scheduled run may take 24 hours to trigger
4. **Manual trigger**: Use "Run workflow" button to test immediately

---

## Vercel Dashboard Issues

### ❌ Deployment Failed

#### Symptom
Vercel shows deployment failed or error state.

#### Diagnosis
1. Go to Vercel dashboard
2. Click on your project
3. Click on failed deployment
4. Check **"Build Logs"**

#### Common Errors & Solutions

**Error: "No such file or directory"**
```
Solution:
Root directory might be wrong.

1. Go to Project Settings → General
2. Set "Root Directory" to: dashboard
3. Redeploy
```

**Error: "Module not found"**
```
Solution:
Dependencies not installed.

1. Check dashboard/package.json exists
2. Ensure all dependencies are listed
3. Try redeploying (Vercel auto-installs deps)
```

**Error: "Build exceeded maximum duration"**
```
Solution:
Upgrade to Vercel Pro (unlikely with this small app) or:
1. Optimize build by removing unused dependencies
2. Check for infinite loops in code
```

### 📊 Dashboard Shows "No summaries available"

#### Symptom
Calendar is empty, no summaries visible.

#### Diagnosis
Check if summary files exist in repository:
1. Go to: https://github.com/SaurabhJalendra/Email_daily_newsletter_summary/tree/main/data/summaries
2. Look for `YYYY-MM-DD.json` files

#### Solutions

**If no files exist:**
```
1. Run GitHub Action workflow manually
2. Wait for it to complete
3. Check if files were committed to repo
4. Redeploy Vercel dashboard
```

**If files exist but dashboard is empty:**
```
1. Check Vercel build logs for errors
2. Verify dashboard/pages/index.js can read ../data/summaries
3. Redeploy dashboard:
   - Go to Vercel dashboard
   - Click "Redeploy" on latest deployment
```

**Dashboard not updating with new summaries:**
```
Vercel needs to rebuild when new data is pushed.

Solution:
1. Enable automatic deployments:
   - Go to Project Settings → Git
   - Ensure "Production Branch" is set to "main"
2. Or manually redeploy after each summary generation
```

### 🌐 Custom Domain Not Working

#### Symptom
`newsletter.saurabhjalendra.com` doesn't load or shows error.

#### Diagnosis
```bash
# Check DNS propagation
# Visit: https://dnschecker.org
# Enter: newsletter.saurabhjalendra.com
```

#### Solutions

**DNS not propagated:**
```
Wait time: 5 minutes to 48 hours (usually 10-30 minutes)

Check:
1. CNAME record is correct: cname.vercel-dns.com
2. No conflicting A records for same subdomain
3. Use incognito/private browsing to avoid cache
```

**SSL Certificate Error:**
```
1. Go to Vercel → Settings → Domains
2. Check if SSL shows "Valid"
3. If not, click "Refresh" or remove and re-add domain
4. Wait a few minutes for certificate generation
```

**Domain shows "Not Found" in Vercel:**
```
1. Verify domain in Vercel:
   - Settings → Domains
   - Add: newsletter.saurabhjalendra.com
2. Ensure domain is verified
3. Check nameservers are correct if using Cloudflare
```

---

## Email Notification Issues

### 📧 Not Receiving Summary Emails

#### Symptom
GitHub Action succeeds but no email arrives.

#### Diagnosis
1. Check spam/junk folder
2. Check GitHub Actions logs for email sending step
3. Look for error notifications

#### Solutions

**Email in spam:**
```
1. Mark email as "Not Spam"
2. Add saurabhjalendra@gmail.com to contacts
3. Create filter to always inbox these emails
```

**SMTP error in logs:**
```
Error: "Invalid login credentials"

Solution:
1. Verify EMAIL_APP_PASSWORD is correct
2. Generate new Gmail App Password
3. Update secret
4. Re-run workflow
```

**No email step in logs:**
```
Check if:
1. NOTIFICATION_EMAIL secret is set
2. Email step completed successfully
3. Check for JavaScript errors in logs
```

### ✉️ Email Formatting Broken

#### Symptom
Email looks plain text or HTML is broken.

#### Solutions
```
1. Ensure email client supports HTML emails
2. Try viewing in different email client (Gmail web, Outlook, etc.)
3. Check src/notifier/email.js for template errors
4. View plain text version as fallback
```

---

## Content & Summarization Issues

### 🤖 Summaries Are Too Brief or Missing Information

#### Symptom
AI summaries don't capture all important points.

#### Solutions
```
1. Edit prompt in src/summarizer/gemini.js
2. Adjust temperature/parameters
3. Use more detailed prompts
4. Consider upgrading to Gemini Pro for better results
```

Example modification:
```javascript
// In src/summarizer/gemini.js, line ~30
const prompt = `You are summarizing an AI/tech newsletter.
CRITICAL: The reader CANNOT miss ANY information.
Be extremely thorough and comprehensive.
Include ALL updates, tools, and developments mentioned.
...`;
```

### 📰 Newsletters Not Being Detected

#### Symptom
Expected newsletters don't appear in summaries.

#### Diagnosis
```bash
# Check if sender is in NEWSLETTER_SENDERS list
# Check Gmail folder (Primary vs Promotions vs Spam)
```

#### Solutions

**Add more sender patterns:**
```
Update NEWSLETTER_SENDERS secret to include:
- Exact email addresses: hello@mindstream.news
- Domain patterns: @substack.com (matches all from substack)
- Wildcards: Use domain patterns for newsletter platforms
```

**Check Gmail filters:**
```
1. Go to Gmail Settings → Filters
2. Ensure no filters are auto-archiving newsletters
3. Move newsletters from Promotions to Primary
```

**Modify IMAP search criteria:**
```javascript
// In src/email/fetcher.js
// Add additional search criteria beyond sender
// Example: Add subject keyword matching
```

---

## Performance & Rate Limits

### ⚠️ Gemini API Rate Limit Exceeded

#### Symptom
Error: "Resource exhausted" or "Quota exceeded"

#### Solutions
```
Free tier limits:
- 15 requests per minute
- 1 million tokens per month
- 1500 requests per day

Solutions:
1. Wait and retry (GitHub Action will auto-retry)
2. Reduce number of newsletters processed
3. Add delays between API calls
4. Upgrade to Gemini paid tier
```

### ⚡ GitHub Actions Running Out of Time

#### Symptom
Workflow times out after 6 hours (unlikely with this project).

#### Solutions
```
1. Process newsletters in batches
2. Optimize summarization prompts
3. Add timeout handling and retry logic
```

---

## Data & Storage Issues

### 💾 Summary Files Not Being Created

#### Symptom
No JSON files in `data/summaries/` directory.

#### Diagnosis
Check GitHub Actions logs for storage errors.

#### Solutions
```
1. Verify data/summaries directory exists
2. Check write permissions in GitHub Actions
3. Look for filesystem errors in logs
4. Ensure JSON.stringify doesn't fail
```

### 📁 Can't Access Previous Summaries

#### Symptom
Old summaries disappeared or can't be found.

#### Solutions
```
1. Check git history:
   git log --all -- data/summaries/
2. Restore from git history if accidentally deleted
3. Check if files were committed properly
4. Verify Vercel is reading from correct branch
```

---

## Local Development Issues

### 💻 npm install Fails

#### Error: "EACCES: permission denied"
```bash
# Solution: Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
npm install
```

#### Error: "Cannot find module"
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### 🧪 Testing Locally

```bash
# Test the pipeline locally

# 1. Create .env file (don't commit!)
cp .env.example .env
# Edit .env with your actual credentials

# 2. Install dependencies
npm install

# 3. Run in test mode
npm start -- --test

# 4. Check data/summaries/ for generated files
ls data/summaries/

# 5. Test dashboard locally
cd dashboard
npm install
npm run dev
# Visit: http://localhost:3000
```

---

## Getting Help

### Debug Checklist

When reporting issues, provide:

1. **GitHub Actions logs** (copy full error)
2. **Vercel deployment logs** (if dashboard issue)
3. **What you've tried** so far
4. **Expected vs actual** behavior
5. **Environment details** (OS, browser, etc.)

### Useful Commands

```bash
# Check GitHub Actions status
gh run list --workflow=daily-summary.yml

# View latest workflow run
gh run view --log

# Check Vercel deployment status
vercel ls

# View Vercel logs
vercel logs

# Test email connection locally
npm start -- --test
```

### Log Locations

- **GitHub Actions**: Actions tab → Workflow run → Job → Step
- **Vercel Build**: Project → Deployment → Build Logs
- **Vercel Runtime**: Project → Deployment → Function Logs
- **Email errors**: Sent to NOTIFICATION_EMAIL address

---

## Common Fixes Summary

| Issue | Quick Fix |
|-------|-----------|
| No emails received | Check spam, verify app password |
| Workflow fails | Check secrets, verify permissions |
| Dashboard empty | Run workflow, wait for git commit, redeploy |
| Domain not working | Check DNS, wait for propagation |
| API rate limit | Wait and retry, reduce frequency |
| Missing newsletters | Add senders to NEWSLETTER_SENDERS |
| Broken summaries | Adjust prompts in gemini.js |

---

**Still stuck?** Check GitHub Actions logs first - they contain most error details!
