'use client';

import { useState, useMemo } from 'react';
import styles from './current.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import { rawEvents } from '../../../components/calendar/calendar-events';
import Calendar from '../../../components/calendar/calendar';
import Link from 'next/link';
import { 
  FaCalendarAlt, FaChevronRight, FaClock, 
  FaMapMarkerAlt, FaUsers, FaChartBar,
  FaBullhorn, FaNewspaper, FaCalendarDay, FaHistory
} from 'react-icons/fa';

export default function CurrentEventsPage() {
  const [viewMode, setViewMode] = useState('grid'); // grid or list view
  
  // Process upcoming events
  const eventsData = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const allEvents = rawEvents.map(([month, day, year, name, href, isUpcoming, isFeatured]) => {
      const eventDate = new Date(year, month - 1, day);
      
      return {
        name,
        href: href || null,
        date: eventDate,
        isFeatured: isFeatured || false,
        formattedDate: eventDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        dayOfWeek: eventDate.toLocaleDateString('en-US', { weekday: 'long' }),
        timeUntil: getTimeUntilEvent(eventDate, today)
      };
    });

    const upcomingEvents = allEvents
      .filter(event => event.date >= today)
      .sort((a, b) => a.date - b.date);

    // Group events by month
    const eventsByMonth = upcomingEvents.reduce((acc, event) => {
      const monthYear = event.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(event);
      return acc;
    }, {});

    return {
      upcoming: upcomingEvents,
      byMonth: eventsByMonth,
      total: upcomingEvents.length,
      featured: upcomingEvents.filter(e => e.isFeatured).length,
      thisMonth: upcomingEvents.filter(e => {
        const eventMonth = e.date.getMonth();
        const eventYear = e.date.getFullYear();
        return eventMonth === now.getMonth() && eventYear === now.getFullYear();
      }).length
    };
  }, []);

  function getTimeUntilEvent(eventDate, today) {
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays < 7) return `In ${diffDays} days`;
    if (diffDays < 30) return `In ${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) !== 1 ? 's' : ''}`;
    return `In ${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) !== 1 ? 's' : ''}`;
  }

  return (
    <>
      <Header />
      <main className={styles.portalMain}>
        <div className={styles.portalContainer}>
          {/* Portal Header */}
          <div className={styles.portalHeader}>
            <h1>Upcoming Events</h1>
            <div className={styles.portalNav}>
              <Link href="/news">
                <FaNewspaper /> News Portal
              </Link>
              <Link href="/events/past">
                <FaHistory /> Past Events
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
                  Event Statistics
                </div>
                <div className={styles.boxContent}>
                  <div className={styles.statsList}>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Total Events</span>
                      <span className={styles.statValue}>{eventsData.total}</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>This Month</span>
                      <span className={styles.statValue}>{eventsData.thisMonth}</span>
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
                    <Link href="/contact" className={styles.quickLink}>
                      <FaUsers /> Get Event Updates
                    </Link>
                    <Link href="/news" className={styles.quickLink}>
                      <FaCalendarDay /> Past Highlights
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
                    <h2>No Upcoming Events</h2>
                    <p>We're planning new health events and workshops. Check back soon or contact us to stay updated.</p>
                    <div className={styles.noEventsActions}>
                      <Link href="/news" className={styles.primaryButton}>
                        View News & Past Events
                      </Link>
                      <Link href="/contact" className={styles.secondaryButton}>
                        Get Notified
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <>
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

                  {/* Events by Month */}
                  {Object.entries(eventsData.byMonth).map(([monthYear, events]) => (
                    <div key={monthYear} className={styles.monthSection}>
                      <div className={styles.monthHeader}>
                        <h2>{monthYear}</h2>
                        <span className={styles.eventCount}>{events.length} event{events.length !== 1 ? 's' : ''}</span>
                      </div>
                      
                      <div className={viewMode === 'grid' ? styles.eventsGrid : styles.eventsList}>
                        {events.map((event, index) => (
                          <div key={index} className={styles.eventCard}>
                            <div className={styles.eventDateBadge}>
                              <div className={styles.eventMonth}>
                                {event.date.toLocaleDateString('en-US', { month: 'short' })}
                              </div>
                              <div className={styles.eventDay}>
                                {event.date.getDate()}
                              </div>
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
                                  <FaCalendarDay /> {event.dayOfWeek}
                                </span>
                                <span className={styles.metaItem}>
                                  <FaClock /> {event.timeUntil}
                                </span>
                                {event.isFeatured && (
                                  <span className={styles.featuredBadge}>
                                    ⭐ Featured
                                  </span>
                                )}
                              </div>
                              
                              {event.href && (
                                <Link href={event.href} className={styles.learnMore}>
                                  Learn More <FaChevronRight />
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

            {/* Right Column - Calendar */}
            <div className={styles.rightColumn}>
              {/* Calendar */}
              <div className={styles.portalBox}>
                <div className={styles.boxHeader}>
                  <FaCalendarAlt className={styles.headerIcon} />
                  Event Calendar
                </div>
                <div className={styles.boxContent}>
                  <div className={styles.calendarContainer}>
                    <Calendar />
                  </div>
                  <p className={styles.calendarNote}>
                    Click on highlighted dates for event details
                  </p>
                </div>
              </div>

              {/* Stay Connected */}
              <div className={styles.portalBox}>
                <div className={styles.boxHeader}>
                  <FaUsers className={styles.headerIcon} />
                  Stay Connected
                </div>
                <div className={styles.boxContent}>
                  <p className={styles.connectText}>
                    Don't miss our health events! Sign up for updates and reminders.
                  </p>
                  <Link href="/contact" className={styles.connectButton}>
                    Get Event Notifications
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