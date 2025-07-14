'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import styles from './current.module.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Calendar from '../../../components/calendar/calendar';
import { rawEvents } from '../../../components/calendar/calendar-events';
import { getMonthTheme } from '../../../components/calendar/monthly-themes';

export default function Page() {
  // Process current and upcoming events dynamically from calendar-events.js
  const currentEventsData = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const currentDay = now.getDate();
    const today = new Date(currentYear, currentMonth, currentDay);

    // Get month names and themes for headers
    const currentMonthName = new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long' });
    const nextMonthName = new Date(currentYear, currentMonth + 1 > 11 ? 0 : currentMonth + 1, 1).toLocaleDateString('en-US', { month: 'long' });
    const currentMonthTheme = getMonthTheme(currentMonth);
    const nextMonthTheme = getMonthTheme(currentMonth + 1 > 11 ? 0 : currentMonth + 1);

    // Process all events from calendar-events.js
    const allEvents = rawEvents.map(([month, day, year, name, href, isUpcoming, isFeatured]) => {
      const eventDate = new Date(year, month - 1, day); // month-1 because calendar uses 1-12, Date uses 0-11
      const monthTheme = getMonthTheme(month - 1);
      
      return {
        name,
        href: href || null,
        date: eventDate,
        month: month - 1,
        day,
        year,
        isFeatured: isFeatured || false,
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
        }),
        timeUntil: getTimeUntilEvent(eventDate),
        isUpcoming: eventDate >= today,
        isThisMonth: eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear,
        isNextMonth: (eventDate.getMonth() === currentMonth + 1 && eventDate.getFullYear() === currentYear) ||
                     (currentMonth === 11 && eventDate.getMonth() === 0 && eventDate.getFullYear() === currentYear + 1)
      };
    });

    // Filter for upcoming events only
    const upcomingEvents = allEvents.filter(event => event.isUpcoming);

    // Sort upcoming events chronologically
    const sortedUpcomingEvents = upcomingEvents.sort((a, b) => a.date - b.date);

    // Separate by time periods
    const thisMonth = sortedUpcomingEvents.filter(event => event.isThisMonth);
    const nextMonth = sortedUpcomingEvents.filter(event => event.isNextMonth);
    const laterEvents = sortedUpcomingEvents.filter(event => !event.isThisMonth && !event.isNextMonth);

    return {
      allUpcoming: sortedUpcomingEvents,
      thisMonth,
      nextMonth,
      laterEvents,
      totalUpcoming: upcomingEvents.length,
      currentMonthTheme,
      nextMonthTheme,
      currentMonthName,
      nextMonthName
    };
  }, []);

  // Helper function to calculate time until event
  function getTimeUntilEvent(eventDate) {
    const now = new Date();
    const diffTime = eventDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays < 7) return `${diffDays} days`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) !== 1 ? 's' : ''}`;
    return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) !== 1 ? 's' : ''}`;
  }

  const { allUpcoming, thisMonth, nextMonth, laterEvents, totalUpcoming, currentMonthTheme, nextMonthTheme, currentMonthName, nextMonthName } = currentEventsData;

  return (
    <>
      <Header />
      
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>
          {/* ===== PAGE HEADER ===== */}
          <div className={styles.pageHeader}>
            <h1>Upcoming Events</h1>
            <p className={styles.subtitle}>
              Your Health & Wellness Calendar
              {totalUpcoming > 0 && (
                <span className={styles.eventCount}>
                  {totalUpcoming} Event{totalUpcoming !== 1 ? 's' : ''}
                </span>
              )}
            </p>
          </div>
          
          {/* ===== MAIN CONTENT AREA ===== */}
          {totalUpcoming === 0 ? (
            /* ===== NO UPCOMING EVENTS STATE ===== */
            <section className={styles.noEventsSection}>
              <div className={styles.noEventsContent}>
                <div className={styles.noEventsIcon}>📅</div>
                <h2>No Upcoming Events</h2>
                <p>
                  We're planning new health events and workshops. Check back soon or 
                  contact us to stay updated on future community health initiatives.
                </p>
                <div className={styles.noEventsActions}>
                  <Link href="/events/past" className={styles.primaryButton}>
                    View Past Events
                  </Link>
                  <Link href="/contact" className={styles.secondaryButton}>
                    Get Event Updates
                  </Link>
                </div>
              </div>
            </section>
          ) : (
            /* ===== TWO COLUMN LAYOUT (2/3 + 1/3) ===== */
            <div className={styles.contentArea}>
              {/* LEFT COLUMN - EVENTS (2/3 width) */}
              <div className={styles.eventsContent}>
                {/* This Month Events */}
                {thisMonth.length > 0 && (
                  <section className={styles.eventsSection}>
                    <div className={styles.sectionHeader}>
                      <h2>This Month - {currentMonthName}</h2>
                      <div 
                        className={styles.headerBadge} 
                        style={{ 
                          borderColor: currentMonthTheme.color, 
                          backgroundColor: `${currentMonthTheme.color}20`
                        }}
                      >
                        <span 
                          className={styles.badgeIcon} 
                          style={{ color: currentMonthTheme.color }}
                        >
                          {currentMonthTheme.icon}
                        </span>
                        <span 
                          className={styles.badgeText} 
                          style={{ color: currentMonthTheme.color }}
                        >
                          {currentMonthTheme.theme}
                        </span>
                      </div>
                      <div className={styles.sectionCount}>
                        {thisMonth.length} event{thisMonth.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                    <div className={styles.eventsGrid}>
                      {thisMonth.map((event, index) => (
                        <EventCard key={`this-${index}`} event={event} priority="high" />
                      ))}
                    </div>
                  </section>
                )}

                {/* Next Month Events */}
                {nextMonth.length > 0 && (
                  <section className={styles.eventsSection}>
                    <div className={styles.sectionHeader}>
                      <h2>Next Month - {nextMonthName}</h2>
                      <div 
                        className={styles.headerBadge} 
                        style={{ 
                          borderColor: nextMonthTheme.color, 
                          backgroundColor: `${nextMonthTheme.color}20`
                        }}
                      >
                        <span 
                          className={styles.badgeIcon} 
                          style={{ color: nextMonthTheme.color }}
                        >
                          {nextMonthTheme.icon}
                        </span>
                        <span 
                          className={styles.badgeText} 
                          style={{ color: nextMonthTheme.color }}
                        >
                          {nextMonthTheme.theme}
                        </span>
                      </div>
                      <div className={styles.sectionCount}>
                        {nextMonth.length} event{nextMonth.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                    <div className={styles.eventsGrid}>
                      {nextMonth.map((event, index) => (
                        <EventCard key={`next-${index}`} event={event} priority="medium" />
                      ))}
                    </div>
                  </section>
                )}

                {/* Later Events */}
                {laterEvents.length > 0 && (
                  <section className={styles.eventsSection}>
                    <div className={styles.sectionHeader}>
                      <h2>Coming Soon</h2>
                      <div className={styles.sectionCount}>
                        {laterEvents.length} event{laterEvents.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                    <div className={styles.eventsGrid}>
                      {laterEvents.map((event, index) => (
                        <EventCard key={`later-${index}`} event={event} priority="normal" />
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* RIGHT COLUMN - CALENDAR SIDEBAR (1/3 width) */}
              <div className={styles.sidebarContent}>
                <section className={styles.calendarSection}>
                  <div className={styles.calendarContainer}>
                    <h2>Event Calendar</h2>
                    <div className={styles.calendarWrapper}>
                      <Calendar />
                    </div>
                    <p className={styles.calendarNote}>
                      Click on highlighted dates to view event details
                    </p>
                  </div>
                </section>
              </div>
            </div>
          )}

          {/* ===== CALL TO ACTION (FULL WIDTH) ===== */}
          {totalUpcoming > 0 && (
            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2>Stay Connected</h2>
                <p>
                  Don't miss out on our health events and community workshops. 
                  Sign up for updates or contact us to learn more about upcoming opportunities.
                </p>
                <div className={styles.ctaButtons}>
                  <Link href="/contact" className={styles.primaryButton}>
                    Get Event Notifications
                  </Link>
                  <Link href="/events/past" className={styles.secondaryButton}>
                    View Past Highlights
                  </Link>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
      
      <Footer />
    </>
  );
}

// Event Card Component - EVENT NAME AT TOP, NO DUPLICATE DATES
function EventCard({ event, priority = 'normal' }) {
  const priorityClass = {
    high: styles.priorityHigh,
    medium: styles.priorityMedium,
    normal: styles.priorityNormal
  }[priority];

  return (
    <div className={`${styles.eventCard} ${priorityClass}`}>
      {/* Event Name at Top */}
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
      </div>

      {/* Event Content */}
      <div className={styles.eventContent}>
        <div className={styles.eventHeader}>
          <div className={styles.eventDate}>
            <div className={styles.dateMain}>{event.shortDate}</div>
            <div className={styles.timeUntil}>{event.timeUntil}</div>
          </div>
          
          {event.isFeatured && (
            <div className={styles.featuredBadge}>⭐ Featured</div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.eventActions}>
        {event.href ? (
          <>
            <Link href={event.href} className={styles.viewButton}>
              Learn More
            </Link>
            <button className={styles.shareButton}>
              Share
            </button>
          </>
        ) : (
          <div className={styles.comingSoonText}>
            Details coming soon
          </div>
        )}
      </div>
    </div>
  );
}