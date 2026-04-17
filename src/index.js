#!/usr/bin/env node

import { EmailFetcher } from './email/fetcher.js';
import { NewsletterParser } from './email/parser.js';
import { OpenRouterSummarizer } from './summarizer/openrouter.js';
import { SummaryStorage } from './database/storage.js';
import { EmailNotifier } from './notifier/email.js';
import { ResearchAgent } from './research/agent.js';
import { config } from './utils/config.js';

/**
 * Main newsletter summarization pipeline
 */
async function runSummarization() {
  console.log('\n🚀 Starting Newsletter Summarization Pipeline...');
  console.log(`⏰ Run Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\n`);

  const storage = new SummaryStorage();
  const fetcher = new EmailFetcher();
  const summarizer = new OpenRouterSummarizer();
  const notifier = new EmailNotifier();

  try {
    // Step 1: Get last summary date
    console.log('📅 Step 1: Checking last summary date...');
    const lastSummaryDate = await storage.getLastSummaryDate();
    if (lastSummaryDate) {
      console.log(`   Last summary: ${lastSummaryDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
    } else {
      console.log('   No previous summary found, fetching last 24 hours');
    }

    // Step 2: Fetch newsletters
    console.log('\n📧 Step 2: Fetching newsletters from Gmail...');
    const emails = await fetcher.getNewslettersSinceLastSummary(lastSummaryDate);
    console.log(`   Found ${emails.length} newsletters`);

    if (emails.length === 0) {
      console.log('\n✓ No new newsletters to summarize. Exiting.');
      return;
    }

    // Step 3: Parse newsletter content
    console.log('\n📝 Step 3: Parsing newsletter content...');
    const parsedNewsletters = NewsletterParser.parseNewsletters(emails);
    console.log(`   Parsed ${parsedNewsletters.length} newsletters`);

    // Step 3.5: Research enrichment (if enabled) — failure should not crash pipeline
    let enrichedNewsletters = parsedNewsletters;
    let researchFindings = null;
    if (config.research?.enabled) {
      try {
        console.log('\n🔍 Step 3.5: Running Research Agent...');
        const researcher = new ResearchAgent();
        const enrichedData = await researcher.enrichNewsletters(parsedNewsletters);
        enrichedNewsletters = enrichedData.enrichedNewsletters;
        researchFindings = enrichedData.researchFindings;
        console.log(`   ✓ Research complete: ${researchFindings?.missingStories?.length || 0} additional stories found`);
      } catch (error) {
        console.error('   ⚠️  Research agent failed, continuing without research:', error.message);
        enrichedNewsletters = parsedNewsletters;
        researchFindings = null;
      }
    }

    // Step 4: Generate AI summaries
    console.log('\n🤖 Step 4: Generating AI summaries with OpenRouter...');
    const summaryData = await summarizer.summarizeNewsletters(enrichedNewsletters, researchFindings);
    console.log('   ✓ Summaries generated');

    // Step 5: Save summary to storage
    console.log('\n💾 Step 5: Saving summary to storage...');
    const filepath = await storage.saveSummary(summaryData);
    console.log(`   ✓ Saved to: ${filepath}`);

    // Step 6: Send email notification
    console.log('\n📬 Step 6: Sending email notification...');
    await notifier.sendSummaryNotification(summaryData);
    console.log('   ✓ Notification sent');

    console.log('\n✅ Newsletter summarization completed successfully!\n');
    console.log(`📊 Summary Statistics:`);
    console.log(`   - Total newsletters: ${summaryData.totalNewsletters}`);
    console.log(`   - Date: ${new Date(summaryData.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
    console.log(`   - Saved to: ${filepath}\n`);

  } catch (error) {
    console.error('\n❌ Error during summarization pipeline:', error);
    console.error('Stack trace:', error.stack);

    // Send error notification
    try {
      await notifier.transporter.sendMail({
        from: `Newsletter Digest <${process.env.EMAIL_ADDRESS}>`,
        to: process.env.NOTIFICATION_EMAIL,
        subject: '⚠️ Newsletter Summarization Failed',
        text: `Error occurred during newsletter summarization:\n\n${error.message}\n\nStack trace:\n${error.stack}`
      });
    } catch (notifError) {
      console.error('Failed to send error notification:', notifError);
    }

    process.exit(1);
  }
}

// Handle test mode
if (process.argv.includes('--test')) {
  console.log('🧪 Running in test mode...\n');
  runSummarization();
} else {
  // Normal execution
  runSummarization();
}
