#!/usr/bin/env node

import { EmailFetcher } from './email/fetcher.js';
import { NewsletterParser } from './email/parser.js';
import { OpenRouterSummarizer } from './summarizer/openrouter.js';
import { SummaryStorage } from './database/storage.js';
import { EmailNotifier } from './notifier/email.js';

/**
 * Historical Newsletter Import Script
 * Fetches and summarizes newsletters from a specific date range
 *
 * Usage: node src/historical-import.js [start-date]
 * Example: node src/historical-import.js 2025-10-01
 */

// Parse command line arguments
const startDateArg = process.argv[2] || '2025-10-01';
const startDate = new Date(startDateArg);

console.log('\n🔄 Historical Newsletter Import');
console.log('================================\n');
console.log(`📅 Processing newsletters from: ${startDate.toLocaleDateString('en-IN')}`);
console.log(`📅 Processing until: ${new Date().toLocaleDateString('en-IN')}\n`);

/**
 * Fetch newsletters for a specific date range
 */
async function fetchNewslettersForDate(fetcher, date) {
  // Set start and end of the day in IST
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  console.log(`\n📧 Fetching newsletters for ${date.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}...`);

  try {
    await fetcher.connect();

    // Fetch emails from this specific date
    const emails = await fetcher.fetchNewsletters(startOfDay);

    // Filter emails to only this day (between startOfDay and endOfDay)
    const dayEmails = emails.filter(email => {
      const emailDate = new Date(email.date);
      return emailDate >= startOfDay && emailDate <= endOfDay;
    });

    fetcher.disconnect();

    console.log(`   Found ${dayEmails.length} newsletters`);
    return dayEmails;
  } catch (error) {
    console.error(`   Error fetching for ${date.toLocaleDateString()}: ${error.message}`);
    fetcher.disconnect();
    return [];
  }
}

/**
 * Process newsletters for a single day
 */
async function processDayNewsletters(date, emails, summarizer, storage) {
  if (emails.length === 0) {
    console.log(`   ⊘ No newsletters for this date, skipping...`);
    return false;
  }

  console.log(`   📝 Parsing ${emails.length} newsletters...`);
  const parsedNewsletters = NewsletterParser.parseNewsletters(emails);

  console.log(`   🤖 Generating AI summaries...`);
  const summaryData = await summarizer.summarizeNewsletters(parsedNewsletters);

  // Override the date to match the processing date (not current date)
  summaryData.date = date.toISOString();

  console.log(`   💾 Saving summary...`);
  await storage.saveSummary(summaryData);

  console.log(`   ✅ Completed: ${emails.length} newsletters summarized`);
  return true;
}

/**
 * Main historical import function
 */
async function runHistoricalImport() {
  const fetcher = new EmailFetcher();
  const summarizer = new OpenRouterSummarizer();
  const storage = new SummaryStorage();

  let totalDaysProcessed = 0;
  let totalNewsletters = 0;

  try {
    // Generate list of dates to process
    const currentDate = new Date();
    const dates = [];

    for (let d = new Date(startDate); d <= currentDate; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d));
    }

    console.log(`📊 Total days to process: ${dates.length}\n`);
    console.log('⏳ Starting import (this may take several minutes)...\n');

    // Process each date
    for (let i = 0; i < dates.length; i++) {
      const date = dates[i];
      const dateString = storage.formatDate(date);

      console.log(`\n[${i + 1}/${dates.length}] Processing ${dateString}...`);

      // Check if summary already exists
      const existingSummary = await storage.getSummary(dateString);
      if (existingSummary) {
        console.log(`   ⊗ Summary already exists, skipping...`);
        continue;
      }

      // Fetch newsletters for this date
      const emails = await fetchNewslettersForDate(fetcher, date);
      totalNewsletters += emails.length;

      // Process and save
      const processed = await processDayNewsletters(date, emails, summarizer, storage);
      if (processed) {
        totalDaysProcessed++;
      }

      // Add delay to avoid API rate limits (Gemini free tier: 15 req/min)
      if (emails.length > 0 && i < dates.length - 1) {
        console.log(`   ⏸️  Waiting 5 seconds to avoid rate limits...`);
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }

    console.log('\n\n✅ Historical Import Complete!\n');
    console.log('================================');
    console.log(`📊 Statistics:`);
    console.log(`   - Days processed: ${totalDaysProcessed}`);
    console.log(`   - Total newsletters: ${totalNewsletters}`);
    console.log(`   - Average per day: ${totalDaysProcessed > 0 ? (totalNewsletters / totalDaysProcessed).toFixed(1) : 0}`);
    console.log(`   - Date range: ${startDate.toLocaleDateString()} to ${currentDate.toLocaleDateString()}`);
    console.log('\n💡 Next Steps:');
    console.log('   1. Commit the new summaries to GitHub:');
    console.log('      git add data/summaries/');
    console.log('      git commit -m "Add historical newsletter summaries"');
    console.log('      git push');
    console.log('   2. Vercel will auto-deploy the updated dashboard');
    console.log('   3. Visit newsletter.saurabhjalendra.com to see all summaries!\n');

  } catch (error) {
    console.error('\n❌ Error during historical import:', error);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
}

// Run the import
runHistoricalImport();
