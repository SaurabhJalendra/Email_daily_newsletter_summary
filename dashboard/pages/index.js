import { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format, parseISO } from 'date-fns';
import { marked } from 'marked';

// Chronological order within a day: morning, then evening, then legacy.
const EDITION_ORDER = { morning: 0, evening: 1 };
const editionRank = (s) => EDITION_ORDER[s.edition] ?? 2;

export default function Home({ summaries }) {
  const [selectedDate, setSelectedDate] = useState(null);

  // Group summaries by calendar day; a day may hold morning + evening editions.
  const byDate = useMemo(() => {
    const map = {};
    for (const s of summaries || []) {
      (map[s.dateString] ||= []).push(s);
    }
    for (const day of Object.values(map)) {
      day.sort((a, b) => editionRank(a) - editionRank(b));
    }
    return map;
  }, [summaries]);

  const availableDates = useMemo(() => Object.keys(byDate), [byDate]);
  const selectedEditions = selectedDate ? (byDate[selectedDate] || []) : [];

  useEffect(() => {
    if (summaries && summaries.length > 0) {
      // summaries arrive newest-first → first item's date is the latest day.
      setSelectedDate(summaries[0].dateString);
    }
  }, [summaries]);

  const handleDateChange = (date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    if (byDate[dateStr]) {
      setSelectedDate(dateStr);
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

  // Panel letters run A, B, C... down the page (calendar first, then each edition's panels).
  const letter = (n) => String.fromCharCode(65 + n);
  const ruler = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => <span key={n}>{n}</span>);

  return (
    <>
      <Head>
        <title>Newsletter Dashboard - AI Newsletter Summaries</title>
        <meta name="description" content="Daily AI-powered newsletter summaries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="sheet">
        <div className="ruler" aria-hidden="true">{ruler}</div>
        <div className="ruler bottom" aria-hidden="true">{ruler}</div>

        {/* Header */}
        <header className="top">
          <div>
            <div className="crumbs">newsletter digest / dashboard</div>
            <h1>AI Newsletter Digest</h1>
            <p className="lede">Your daily AI &amp; tech updates, summarized</p>
          </div>
          <div className="titleblock">
            <div>
              <span className="k">days archived</span>
              <span className="v">{availableDates.length}</span>
            </div>
            <div>
              <span className="k">latest day</span>
              <span className="v">{availableDates[0] || 'none'}</span>
            </div>
            <div className="wide">
              <span className="k">schedule</span>
              <span className="v">Updated twice daily — 6 AM &amp; 6 PM IST</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="layout">
          {/* Calendar Sidebar */}
          <div className="rail">
            <section className="panel">
              <div className="ph">
                <span className="pl">{letter(0)}</span>
                <h2>Select date</h2>
                <span className="pc">{selectedDate || 'no date'}</span>
              </div>
              <div className="pb cal">
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate ? parseISO(selectedDate) : new Date()}
                  tileClassName={tileClassName}
                  className="border-0 w-full"
                />
                <p className="legend">
                  <i aria-hidden="true"></i>
                  Dates with summaries
                </p>
              </div>
            </section>
          </div>

          {/* Summary Display */}
          <div className="flow">
            {selectedEditions.length > 0 ? (
              <div className="editions">
                {selectedEditions.map((summary, idx) => (
                  <SummaryView key={summary.edition || idx} summary={summary} first={1 + idx * 3} letter={letter} />
                ))}
              </div>
            ) : (
              <section className="panel">
                <div className="ph">
                  <span className="pl">{letter(1)}</span>
                  <h2>No summary available</h2>
                  <span className="pc">nothing selected</span>
                </div>
                <div className="pb empty">
                  <p>Select a highlighted date to view the newsletter summary.</p>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

const EDITION_BADGE = {
  morning: { label: 'Morning' },
  evening: { label: 'Evening' }
};

// One edition = three lettered panels: details table, daily overview, individual summaries.
function SummaryView({ summary, first, letter }) {
  const date = new Date(summary.date);
  const formattedDate = format(date, 'EEEE, MMMM d, yyyy');
  const badge = EDITION_BADGE[summary.edition];
  const count = summary.totalNewsletters;

  return (
    <section>
      {/* Header: edition details */}
      <div className="panel">
        <div className="ph">
          <span className="pl">{letter(first)}</span>
          <h2>{formattedDate}</h2>
          <span className="pc">{badge ? `${badge.label} edition` : 'edition'}</span>
        </div>
        <div className="pb">
          <table className="kv">
            <tbody>
              <tr>
                <th scope="row">date</th>
                <td>{formattedDate}</td>
              </tr>
              <tr>
                <th scope="row">edition</th>
                <td>{badge ? <span className="chip">{badge.label}</span> : <span className="muted">Daily</span>}</td>
              </tr>
              <tr>
                <th scope="row">newsletters</th>
                <td>
                  {count} Newsletter{count !== 1 ? 's' : ''} Summarized
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overall Summary */}
      <div className="panel">
        <div className="ph">
          <span className="pl">{letter(first + 1)}</span>
          <h2>Daily overview</h2>
          <span className="pc">{badge ? badge.label : 'summary'}</span>
        </div>
        <div className="pb">
          <div
            className="md"
            dangerouslySetInnerHTML={{ __html: marked(summary.summary) }}
          />
        </div>
      </div>

      {/* Individual Newsletters */}
      <div className="panel">
        <div className="ph">
          <span className="pl">{letter(first + 2)}</span>
          <h2>Individual summaries</h2>
          <span className="pc">{summary.newsletters.length} newsletters</span>
        </div>
        <div className="pb flush">
          {summary.newsletters.map((newsletter, idx) => (
            <article key={idx} className="nl">
              <div className="nl-head">
                <span className="nl-no">{String(idx + 1).padStart(2, '0')}</span>
                <h3>{newsletter.subject}</h3>
              </div>
              <p className="nl-from">From: {newsletter.from}</p>
              <div
                className="md nl-body"
                dangerouslySetInnerHTML={{ __html: marked(newsletter.summary) }}
              />
              {newsletter.links && newsletter.links.length > 0 && (
                <div className="nl-links">
                  <p className="lbl">Important Links:</p>
                  <ul>
                    {newsletter.links.slice(0, 5).map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const fs = require('fs').promises;
  const path = require('path');

  try {
    // Look for data in dashboard's data directory (copied by prebuild script)
    const summariesDir = path.join(process.cwd(), 'data/summaries');
    const files = await fs.readdir(summariesDir);
    const jsonFiles = files.filter(f => f.endsWith('.json') && f !== 'index.json');

    const summaries = await Promise.all(
      jsonFiles.map(async (file) => {
        const filePath = path.join(summariesDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(content);

        // Strip originalContent to reduce page data size
        // (not displayed in dashboard, was causing Vercel ISR oversized page errors)
        if (data.newsletters) {
          data.newsletters = data.newsletters.map(({ originalContent, ...rest }) => rest);
        }

        return data;
      })
    );

    // Sort newest-first. Use savedAt (actual run time) so two same-day editions
    // order correctly (evening after morning); fall back to date for legacy files.
    summaries.sort((a, b) =>
      new Date(b.savedAt || b.date) - new Date(a.savedAt || a.date)
    );

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
