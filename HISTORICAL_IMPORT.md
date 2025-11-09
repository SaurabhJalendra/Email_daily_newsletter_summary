# 📚 Historical Newsletter Import Guide

## Overview

This guide explains how to import and summarize **existing newsletters** from your Gmail inbox dating back to October 1st (or any custom date).

The historical import script will:
- ✅ Fetch newsletters from a specific start date to today
- ✅ Generate AI summaries for each day
- ✅ Save summaries as JSON files (one per day)
- ✅ Make them visible on your dashboard calendar
- ✅ Skip dates that already have summaries

---

## 🎯 Use Case

**You have newsletters in Gmail from October 1st onwards, and you want all of them summarized and displayed on your dashboard.**

Without this script, you'd only get summaries from today forward. With this script, you can backfill **all historical data**.

---

## 📋 Prerequisites

1. ✅ Repository cloned locally
2. ✅ Dependencies installed (`npm install`)
3. ✅ `.env` file configured with credentials
4. ✅ Gmail contains newsletters from the target date range

---

## 🚀 Running the Historical Import

### **Option 1: Import from October 1st (Default)**

```bash
npm run import
```

This fetches newsletters from **October 1, 2025** to **today**.

### **Option 2: Import from Custom Date**

```bash
npm run import:from 2025-09-15
```

Replace `2025-09-15` with your desired start date.

### **Option 3: Direct Node Command**

```bash
node src/historical-import.js 2025-10-01
```

---

## ⏱️ What Happens

### **Processing Flow:**

```
1. Script connects to Gmail IMAP
   ↓
2. For EACH day from start date to today:
   a. Fetch newsletters received that day
   b. Parse and clean content
   c. Generate AI summary with Gemini
   d. Save to data/summaries/YYYY-MM-DD.json
   e. Wait 5 seconds (avoid API rate limits)
   ↓
3. Display statistics
   ↓
4. All summaries saved locally
```

### **Example Output:**

```
🔄 Historical Newsletter Import
================================

📅 Processing newsletters from: 10/1/2025
📅 Processing until: 11/9/2025

📊 Total days to process: 40

⏳ Starting import (this may take several minutes)...

[1/40] Processing 2025-10-01...
📧 Fetching newsletters for 10/1/2025...
   Found 3 newsletters
   📝 Parsing 3 newsletters...
   🤖 Generating AI summaries...
   💾 Saving summary...
   ✅ Completed: 3 newsletters summarized
   ⏸️  Waiting 5 seconds to avoid rate limits...

[2/40] Processing 2025-10-02...
📧 Fetching newsletters for 10/2/2025...
   Found 0 newsletters
   ⊘ No newsletters for this date, skipping...

[3/40] Processing 2025-10-03...
...

✅ Historical Import Complete!

================================
📊 Statistics:
   - Days processed: 32
   - Total newsletters: 156
   - Average per day: 4.9
   - Date range: 10/1/2025 to 11/9/2025

💡 Next Steps:
   1. Commit the new summaries to GitHub
   2. Vercel will auto-deploy the updated dashboard
   3. Visit newsletter.saurabhjalendra.com to see all summaries!
```

---

## ⏳ Time Estimates

| Newsletters | Estimated Time |
|-------------|---------------|
| 40 days (Oct 1 - Nov 9) | 10-20 minutes |
| 100 newsletters total | ~15 minutes |
| 200 newsletters total | ~30 minutes |

**Why does it take time?**
- Gmail IMAP fetching: ~1-2 seconds per day
- AI summarization: ~3-5 seconds per newsletter
- Rate limit delays: 5 seconds between days with newsletters
- Gemini free tier: 15 requests/minute limit

---

## 📁 What Gets Created

After running, you'll have files like:

```
data/summaries/
├── 2025-10-01.json  ✅ Created
├── 2025-10-02.json  ✅ Created
├── 2025-10-03.json  ✅ Created
├── 2025-10-04.json  ✅ Created
...
├── 2025-11-08.json  ✅ Created
└── 2025-11-09.json  ✅ Created
```

Each file contains:
```json
{
  "date": "2025-10-01T00:00:00.000Z",
  "summary": "# Daily AI Newsletter Digest - October 1, 2025...",
  "totalNewsletters": 3,
  "savedAt": "2025-11-09T11:30:00.000Z",
  "dateString": "2025-10-01",
  "newsletters": [
    {
      "from": "news@daily.therundown.ai",
      "subject": "AI News - Oct 1",
      "summary": "...",
      "links": [...]
    }
  ]
}
```

---

## 🔄 Pushing to GitHub & Dashboard

After the import completes:

```bash
# Add all new summaries
git add data/summaries/

# Commit
git commit -m "Add historical newsletter summaries (Oct 1 - Nov 9)"

# Push to GitHub
git push
```

**Vercel will automatically:**
1. Detect the new commit
2. Rebuild your dashboard
3. Deploy the update (~2 minutes)
4. Dashboard shows all dates with summaries!

---

## 🎨 Dashboard After Import

### **Before Import:**
```
November 2025
S  M  T  W  T  F  S
               1  2
3  4  5  6  7  8  9  ← No highlights
```

### **After Import:**
```
October 2025
S  M  T  W  T  F  S
      1• 2  3• 4• 5•
6• 7• 8• 9• 10 11 12
...

November 2025
S  M  T  W  T  F  S
               1• 2•
3• 4• 5• 6• 7• 8• 9•  ← Blue dots on dates with summaries!
```

Click any blue dot to see that day's summary!

---

## ⚠️ Important Notes

### **API Rate Limits**
- **Gemini Free Tier**: 15 requests/minute
- Script adds 5-second delays to stay under limit
- If you hit the limit, wait 1 minute and re-run
- Already-processed dates are skipped on re-run

### **Gmail IMAP Limits**
- Gmail allows ~240 IMAP calls per 15 minutes
- Script is well within this limit
- If you hit it, wait 15 minutes

### **Re-running the Script**
Safe to re-run! The script:
- ✅ Checks if summary already exists
- ✅ Skips existing dates
- ✅ Only processes new/missing dates

### **No Newsletters Found**
If a date has no newsletters:
- Script logs: `⊘ No newsletters for this date, skipping...`
- No JSON file created for that date
- Dashboard won't highlight that date
- **This is normal!** Not every day has newsletters

---

## 🐛 Troubleshooting

### **Error: IMAP connection failed**
```bash
# Check .env credentials
cat .env | grep EMAIL

# Ensure app password is correct
# Regenerate at: https://myaccount.google.com/apppasswords
```

### **Error: Gemini API rate limit**
```
Wait 1 minute, then re-run:
npm run import
```

The script will skip already-processed dates.

### **Some dates missing newsletters**
Normal! Possible reasons:
- No newsletters sent that day
- Newsletters in Spam/Promotions folder (move to Primary)
- Sender not in NEWSLETTER_SENDERS list (add to .env)

### **Script interrupted/crashed**
Simply re-run it:
```bash
npm run import
```

Already-processed dates are automatically skipped.

---

## 📊 After Import: Your Dashboard

Visit: **https://newsletter.saurabhjalendra.com**

You'll see:
- ✅ Calendar with **all dates highlighted** (blue dots)
- ✅ Click any date to see that day's summary
- ✅ Full archive from October 1st to today
- ✅ Search/browse any past day
- ✅ Comprehensive AI summaries with links

---

## 🔮 Future Daily Summaries

After historical import, the regular workflow continues:
- ✅ GitHub Action runs at 12 midnight IST daily
- ✅ Fetches yesterday's newsletters
- ✅ Generates summary
- ✅ Adds new date to dashboard
- ✅ Emails you the summary

---

## 💡 Pro Tips

1. **Start date**: Choose when you first started receiving newsletters
2. **Test first**: Run with a small date range to test
   ```bash
   npm run import:from 2025-11-08
   ```
3. **Check Gmail**: Ensure newsletters are in Primary inbox (not Promotions/Spam)
4. **Monitor progress**: Watch the console output for errors
5. **Commit regularly**: If processing many days, commit in batches
   ```bash
   # After processing 10 days
   git add data/summaries/ && git commit -m "Add Oct 1-10 summaries"
   ```

---

## 🎯 Summary

| Feature | Status |
|---------|--------|
| **Fetch historical newsletters** | ✅ Yes |
| **Generate summaries for past dates** | ✅ Yes |
| **Show on dashboard calendar** | ✅ Yes |
| **Preserve data permanently** | ✅ Yes (Git) |
| **Skip existing summaries** | ✅ Yes |
| **Handle rate limits** | ✅ Yes (auto-delay) |
| **Works with daily automation** | ✅ Yes |

---

**Ready to import? Run:**
```bash
npm run import
```

**Then push to GitHub and your entire newsletter history will be on the dashboard!** 🎉
