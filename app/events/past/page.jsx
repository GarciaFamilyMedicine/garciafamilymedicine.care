'use client';

import { useState, useMemo } from 'react';
import styles from './past.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import { rawEvents } from '../../../components/calendar/calendar-events';
import { getMonthTheme } from '../../../components/calendar/monthly-themes';
import Link from 'next/link';
import { 
  FaCalendarAlt, FaChevronRight, FaClock, 
  FaHistory, FaChartBar, FaAward,
  FaBullhorn, FaNewspaper, FaCalendarCheck
} from 'react-icons/fa';

export default function PastEventsPage() {
  const [viewMode, setViewMode] = useState('grid'); // grid or list view
  
  // Process past events
  const eventsData = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const allEvents = rawEvents.map(([month, day, year, name, href, isUpcoming, isFeatured]) => {
      const eventDate = new Date(year, month - 1, day);
      const monthTheme = getMonthTheme(month - 1);
      
      return {
        name,
        href: href || null,
        date: eventDate,
        isFeatured: isFeatured || false,
        monthTheme,
        formattedDate: eventDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        dayOfWeek: eventDate.toLocaleDateString('en-US', { weekday: 'long' }),
        year: year
      };
    });

    const pastEvents = allEvents
      .filter(event => event.date < today)
      .sort((a, b) => b.date - a.date); // Most recent first

    // Group events by year
    const eventsByYear = pastEvents.reduce((acc, event) => {
      if (!acc[event.year]) {
        acc[event.year] = [];
      }
      acc[event.year].push(event);
      return acc;
    }, {});

    // Calculate stats
    const totalYears = Object.keys(eventsByYear).length;
    const featuredCount = pastEvents.filter(e => e.isFeatured).length;

    return {
      past: pastEvents,
      byYear: eventsByYear,
      total: pastEvents.length,
      featured: featuredCount,
      years: totalYears
    };
  }, []);

  return (
    <>
      <Header />
      <main className={styles.portalMain}>
        <div className={styles.portalContainer}>
          {/* Portal Header */}
          <div className={styles.portalHeader}>
            <h1>Past Event Highlights</h1>
            <div className={styles.portalNav}>
              <Link href="/news">
                <FaNewspaper /> News Portal
              </Link>
              <Link href="/events/current">
                <FaCalendarAlt /> Upcoming
              </Link>
            </div>
          </div>

          {/* Portal Layout */}
          <div className={styles.portalLayout}>
            {/* Left Column - Event Stats */}
            <div className={styles.leftColumn}>
              {/* Event Statistics */}
              <div className={styles.portalBox}>
                <div className={styles.boxHeader}>
                  <FaChartBar className={styles.headerIcon} />
                  Event History
                </div>
                <div className={styles.boxContent}>
                  <div className={styles.statsList}>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Total Events</span>
                      <span className={styles.statValue}>{eventsData.total}</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Years Active</span>
                      <span className={styles.statValue}>{eventsData.years}</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Featured</span>
                      <span className={styles.statValue}>{eventsData.featured}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className={styles.portalBox}>
                <div className={styles.boxHeader}>
                  <FaBullhorn className={styles.headerIcon} />
                  Quick Actions
                </div>
                <div className={styles.boxContent}>
                  <div className={styles.quickLinks}>
                    <Link href="/news" className={styles.quickLink}>
                      <FaNewspaper /> View News Portal
                    </Link>
                    <Link href="/events/current" className={styles.quickLink}>
                      <FaCalendarCheck /> Upcoming Events
                    </Link>
                    <Link href="/contact" className={styles.quickLink}>
                      <FaHistory /> Share Memories
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column - Events List */}
            <div className={styles.centerColumn}>
              {eventsData.total === 0 ? (
                <div className={styles.portalBox}>
                  <div className={styles.noEvents}>
                    <div className={styles.noEventsIcon}>📅</div>
                    <h2>No Past Events Yet</h2>
                    <p>We're just getting started! Check back here after our upcoming events to see highlights and memories.</p>
                    <div className={styles.noEventsActions}>
                      <Link href="/events/current" className={styles.primaryButton}>
                        View Upcoming Events
                      </Link>
                      <Link href="/news" className={styles.secondaryButton}>
                        Visit News Portal
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Introduction */}
                  <div className={styles.portalBox}>
                    <div className={styles.introSection}>
                      <h2>Our Health Community Milestones</h2>
                      <p>Take a look back at the meaningful health events, workshops, and celebrations that have brought our community together.</p>
                    </div>
                  </div>

                  {/* View Toggle */}
                  <div className={styles.viewToggle}>
                    <button 
                      className={viewMode === 'grid' ? styles.active : ''}
                      onClick={() => setViewMode('grid')}
                    >
                      Grid View
                    </button>
                    <button 
                      className={viewMode === 'list' ? styles.active : ''}
                      onClick={() => setViewMode('list')}
                    >
                      List View
                    </button>
                  </div>

                  {/* Events by Year */}
                  {Object.entries(eventsData.byYear)
                    .sort(([a], [b]) => b - a) // Sort years descending
                    .map(([year, events]) => (
                    <div key={year} className={styles.yearSection}>
                      <div className={styles.yearHeader}>
                        <h2>{year}</h2>
                        <span className={styles.eventCount}>{events.length} event{events.length !== 1 ? 's' : ''}</span>
                      </div>
                      
                      <div className={viewMode === 'grid' ? styles.eventsGrid : styles.eventsList}>
                        {events.map((event, index) => (
                          <div key={index} className={styles.eventCard}>
                            {/* Theme Badge */}
                            <div 
                              className={styles.themeBadge}
                              style={{ 
                                backgroundColor: `${event.monthTheme.color}20`,
                                borderColor: event.monthTheme.color 
                              }}
                            >
                              <span style={{ color: event.monthTheme.color }}>
                                {event.monthTheme.icon}
                              </span>
                              <span style={{ color: event.monthTheme.color }}>
                                {event.monthTheme.theme}
                              </span>
                            </div>
                            
                            <div className={styles.eventContent}>
                              <h3 className={styles.eventTitle}>
                                {event.href ? (
                                  <Link href={event.href}>{event.name}</Link>
                                ) : (
                                  event.name
                                )}
                              </h3>
                              
                              <div className={styles.eventMeta}>
                                <span className={styles.metaItem}>
                                  <FaCalendarAlt /> {event.formattedDate}
                                </span>
                                <span className={styles.metaItem}>
                                  <FaClock /> {event.dayOfWeek}
                                </span>
                                {event.isFeatured && (
                                  <span className={styles.featuredBadge}>
                                    <FaAward /> Featured
                                  </span>
                                )}
                              </div>
                              
                              {event.href && (
                                <Link href={event.href} className={styles.viewDetails}>
                                  View Details <FaChevronRight />
                                </Link>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Right Column - Highlights */}
            <div className={styles.rightColumn}>
              {/* Event Highlights */}
              <div className={styles.portalBox}>
                <div className={styles.boxHeader}>
                  <FaAward className={styles.headerIcon} />
                  Event Highlights
                </div>
                <div className={styles.boxContent}>
                  <div className={styles.highlightsList}>
                    <p className={styles.highlightText}>
                      Our past events showcase our commitment to community health education and wellness.
                    </p>
                    <div className={styles.highlightStats}>
                      <div className={styles.highlightItem}>
                        <span className={styles.highlightNumber}>{eventsData.total}</span>
                        <span className={styles.highlightLabel}>Total Events</span>
                      </div>
                      <div className={styles.highlightItem}>
                        <span className={styles.highlightNumber}>{eventsData.featured}</span>
                        <span className={styles.highlightLabel}>Featured Events</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Join Future Events */}
              <div className={styles.portalBox}>
                <div className={styles.boxHeader}>
                  <FaCalendarCheck className={styles.headerIcon} />
                  Join Us Next Time
                </div>
                <div className={styles.boxContent}>
                  <p className={styles.connectText}>
                    Don't miss our upcoming health events! Get notified about future workshops and community gatherings.
                  </p>
                  <Link href="/events/current" className={styles.connectButton}>
                    View Upcoming Events
                  </Link>
                  <Link href="/contact" className={styles.connectButtonSecondary}>
                    Get Event Updates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}