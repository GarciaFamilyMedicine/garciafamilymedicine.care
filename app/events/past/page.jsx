'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import styles from './past.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import { rawEvents } from '../../../components/calendar/calendar-events';
import { getMonthTheme } from '../../../components/calendar/monthly-themes';

export default function Page() {
  // Process past events dynamically
  const pastEventsData = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const currentDay = now.getDate();

    // Filter for past events
    const pastEvents = rawEvents.filter(([month, day, year]) => {
      const eventDate = new Date(year, month - 1, day);
      const today = new Date(currentYear, currentMonth, currentDay);
      return eventDate < today;
    });

    // Sort past events in reverse chronological order (most recent first)
    const sortedPastEvents = pastEvents.sort((a, b) => {
      const dateA = new Date(a[2], a[0] - 1, a[1]);
      const dateB = new Date(b[2], b[0] - 1, b[1]);
      return dateB - dateA; // Reverse order
    });

    // Group events by year
    const eventsByYear = {};
    sortedPastEvents.forEach(([month, day, year, name, href, isUpcoming, isFeatured]) => {
      if (!eventsByYear[year]) {
        eventsByYear[year] = [];
      }
      
      const eventDate = new Date(year, month - 1, day);
      const monthTheme = getMonthTheme(month - 1);
      
      eventsByYear[year].push({
        name,
        href,
        date: eventDate,
        month: month - 1,
        day,
        year,
        isFeatured,
        monthTheme,
        formattedDate: eventDate.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        shortDate: eventDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      });
    });

    return {
      pastEvents: sortedPastEvents,
      eventsByYear,
      totalPastEvents: pastEvents.length
    };
  }, []);

  const { eventsByYear, totalPastEvents } = pastEventsData;
  const yearKeys = Object.keys(eventsByYear).sort((a, b) => b - a); // Most recent year first

  return (
    <>
      <Header />
      
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>
          {/* ===== PAGE HEADER ===== */}
          <div className={styles.pageHeader}>
            <h1>Past Event Highlights</h1>
            <p className={styles.subtitle}>
              Celebrating Our Community Health Journey
              {totalPastEvents > 0 && (
                <span className={styles.eventCount}> • {totalPastEvents} Events</span>
              )}
            </p>
          </div>
          
          {/* ===== MAIN CONTENT AREA ===== */}
          <div className={styles.contentArea}>
            {totalPastEvents === 0 ? (
              /* ===== NO PAST EVENTS STATE ===== */
              <section className={styles.noEventsSection}>
                <div className={styles.noEventsContent}>
                  <div className={styles.noEventsIcon}>📅</div>
                  <h2>No Past Events Yet</h2>
                  <p>
                    We're just getting started! Check back here after our upcoming events 
                    to see highlights and memories from our community health initiatives.
                  </p>
                  <div className={styles.noEventsActions}>
                    <Link href="/events" className={styles.primaryButton}>
                      View Upcoming Events
                    </Link>
                    <Link href="/" className={styles.secondaryButton}>
                      Back to Home
                    </Link>
                  </div>
                </div>
              </section>
            ) : (
              /* ===== PAST EVENTS BY YEAR ===== */
              <>
                {/* Introduction */}
                <section className={styles.introSection}>
                  <div className={styles.introContent}>
                    <h2>Our Health Community Milestones</h2>
                    <p className={styles.introText}>
                      Take a look back at the meaningful health events, workshops, and celebrations 
                      that have brought our community together. Each event represents our commitment 
                      to wellness, education, and compassionate care.
                    </p>
                  </div>
                </section>

                {/* Events Timeline by Year */}
                {yearKeys.map(year => (
                  <section key={year} className={styles.yearSection}>
                    <div className={styles.yearHeader}>
                      <h2 className={styles.yearTitle}>{year}</h2>
                      <div className={styles.yearStats}>
                        {eventsByYear[year].length} event{eventsByYear[year].length !== 1 ? 's' : ''}
                      </div>
                    </div>
                    
                    <div className={styles.eventsGrid}>
                      {eventsByYear[year].map((event, index) => (
                        <div key={`${event.year}-${event.month}-${event.day}-${index}`} className={styles.eventCard}>
                          {/* Event Theme Badge */}
                          <div 
                            className={styles.eventBadge}
                            style={{ 
                              backgroundColor: `${event.monthTheme.color}15`,
                              borderColor: event.monthTheme.color 
                            }}
                          >
                            <span className={styles.badgeIcon}>{event.monthTheme.icon}</span>
                            <span 
                              className={styles.badgeText}
                              style={{ color: event.monthTheme.color }}
                            >
                              {event.monthTheme.theme}
                            </span>
                          </div>

                          {/* Event Content */}
                          <div className={styles.eventContent}>
                            <div className={styles.eventDate}>
                              <div className={styles.dateMain}>{event.shortDate}</div>
                              <div className={styles.dateFull}>{event.formattedDate}</div>
                            </div>
                            
                            <div className={styles.eventInfo}>
                              <h3 className={styles.eventTitle}>
                                {event.href ? (
                                  <Link href={event.href} className={styles.eventLink}>
                                    {event.name}
                                  </Link>
                                ) : (
                                  event.name
                                )}
                              </h3>
                              
                              {event.isFeatured && (
                                <div className={styles.featuredBadge}>⭐ Featured Event</div>
                              )}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className={styles.eventActions}>
                            {event.href ? (
                              <>
                                <Link href={event.href} className={styles.viewButton}>
                                  View Details
                                </Link>
                                <button className={styles.shareButton}>
                                  Share
                                </button>
                              </>
                            ) : (
                              <div className={styles.noLinkText}>
                                Event details coming soon
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}

                {/* Call to Action */}
                <section className={styles.ctaSection}>
                  <div className={styles.ctaContent}>
                    <h2>Join Our Next Event</h2>
                    <p>
                      Don't miss out on upcoming health workshops, celebrations, and community gatherings. 
                      Stay connected with Garcia Family Medicine for the latest events and health initiatives.
                    </p>
                    <div className={styles.ctaButtons}>
                      <Link href="/events" className={styles.primaryButton}>
                        View Upcoming Events
                      </Link>
                      <Link href="/contact" className={styles.secondaryButton}>
                        Get Event Updates
                      </Link>
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  );
}