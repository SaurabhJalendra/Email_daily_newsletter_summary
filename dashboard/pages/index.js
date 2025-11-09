import { useState, useEffect } from 'react';
import Head from 'next/head';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format, parseISO } from 'date-fns';
import { marked } from 'marked';

export default function Home({ summaries }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSummary, setSelectedSummary] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    if (summaries && summaries.length > 0) {
      const dates = summaries.map(s => s.dateString);
      setAvailableDates(dates);

      // Select most recent by default
      const latest = summaries[0];
      setSelectedDate(latest.dateString);
      setSelectedSummary(latest);
    }
  }, [summaries]);

  const handleDateChange = (date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const summary = summaries.find(s => s.dateString === dateStr);

    if (summary) {
      setSelectedDate(dateStr);
      setSelectedSummary(summary);
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = format(date, 'yyyy-MM-dd');
      if (availableDates.includes(dateStr)) {
        return 'has-summary';
      }
    }
    return null;
  };

  return (
    <>
      <Head>
        <title>Newsletter Dashboard - AI Newsletter Summaries</title>
        <meta name="description" content="Daily AI-powered newsletter summaries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  📰 AI Newsletter Digest
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  Your daily AI & tech updates, summarized
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {summaries?.length || 0} Days Archived
                </p>
                <p className="text-xs text-gray-500">
                  Updated daily at midnight IST
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Select Date
                </h2>
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate ? parseISO(selectedDate) : new Date()}
                  tileClassName={tileClassName}
                  className="border-0 w-full"
                />
                <div className="mt-4 p-3 bg-blue-50 rounded-md">
                  <p className="text-xs text-gray-600 flex items-center">
                    <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Dates with summaries
                  </p>
                </div>
              </div>
            </div>

            {/* Summary Display */}
            <div className="lg:col-span-2">
              {selectedSummary ? (
                <SummaryView summary={selectedSummary} />
              ) : (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <div className="text-6xl mb-4">📭</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No Summary Available
                  </h3>
                  <p className="text-gray-600">
                    Select a highlighted date to view the newsletter summary.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .react-calendar {
          border: none !important;
          font-family: inherit;
        }
        .react-calendar__tile--active {
          background: #667eea !important;
          color: white !important;
        }
        .react-calendar__tile--now {
          background: #e0e7ff !important;
        }
        .has-summary {
          background: #dbeafe !important;
          font-weight: 600;
        }
        .has-summary:hover {
          background: #bfdbfe !important;
        }
      `}</style>
    </>
  );
}

function SummaryView({ summary }) {
  const date = new Date(summary.date);
  const formattedDate = format(date, 'EEEE, MMMM d, yyyy');

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{formattedDate}</h2>
            <p className="text-blue-100 text-lg">
              {summary.totalNewsletters} Newsletter{summary.totalNewsletters !== 1 ? 's' : ''} Summarized
            </p>
          </div>
          <div className="text-6xl">📊</div>
        </div>
      </div>

      {/* Overall Summary */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">🔥</span>
          Daily Overview
        </h3>
        <div
          className="prose prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(summary.summary) }}
        />
      </div>

      {/* Individual Newsletters */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-2xl mr-2">📧</span>
          Individual Summaries
        </h3>
        <div className="space-y-6">
          {summary.newsletters.map((newsletter, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-lg">
              <div className="mb-3">
                <h4 className="font-semibold text-lg text-gray-900">
                  {newsletter.subject}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  From: {newsletter.from}
                </p>
              </div>
              <div
                className="prose prose-sm prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: marked(newsletter.summary) }}
              />
              {newsletter.links && newsletter.links.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Important Links:</p>
                  <ul className="space-y-1">
                    {newsletter.links.slice(0, 5).map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                        >
                          <span className="mr-1">🔗</span>
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const fs = require('fs').promises;
  const path = require('path');

  try {
    const summariesDir = path.join(process.cwd(), '../data/summaries');
    const files = await fs.readdir(summariesDir);
    const jsonFiles = files.filter(f => f.endsWith('.json') && f !== 'index.json');

    const summaries = await Promise.all(
      jsonFiles.map(async (file) => {
        const filePath = path.join(summariesDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(content);
      })
    );

    // Sort by date descending
    summaries.sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
      props: {
        summaries,
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error loading summaries:', error);
    return {
      props: {
        summaries: [],
      },
      revalidate: 60,
    };
  }
}
