'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import styles from './current.module.css';
import Header from '../../../components/header/header.jsx';
import Footer from '../../../components/footer/footer.jsx';
import Calendar from '../../../components/calendar/calendar';
import { rawEvents } from '../../../components/calendar/calendar-events';
import { getMonthTheme } from '../../../components/calendar/monthly-themes';

export default function Page() {
  // Process current and upcoming events dynamically
  const currentEventsData = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const currentDay = now.getDate();

    // Filter for current and future events
    const upcomingEvents = rawEvents.filter(([month, day, year]) => {
      const eventDate = new Date(year, month - 1, day);
      const today = new Date(currentYear, currentMonth, currentDay);
      return eventDate >= today;
    });

    // Sort upcoming events chronologically
    const sortedUpcomingEvents = upcomingEvents.sort((a, b) => {
      const dateA = new Date(a[2], a[0] - 1, a[1]);
      const dateB = new Date(b[2], b[0] - 1, b[1]);
      return dateA - dateB;
    });

    // Separate by time periods
    const thisMonth = [];
    const nextMonth = [];
    const laterEvents = [];

    sortedUpcomingEvents.forEach(([month, day, year, name, href, isUpcoming, isFeatured]) => {
      const eventDate = new Date(year, month - 1, day);
      const monthTheme = getMonthTheme(month - 1);
      
      const eventObj = {
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
        }),
        timeUntil: getTimeUntilEvent(eventDate),
        isThisMonth: eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear,
        isNextMonth: (eventDate.getMonth() === currentMonth + 1 && eventDate.getFullYear() === currentYear) ||
                     (currentMonth === 11 && eventDate.getMonth() === 0 && eventDate.getFullYear() === currentYear + 1)
      };

      if (eventObj.isThisMonth) {
        thisMonth.push(eventObj);
      } else if (eventObj.isNextMonth) {
        nextMonth.push(eventObj);
      } else {
        laterEvents.push(eventObj);
      }
    });

    return {
      allUpcoming: sortedUpcomingEvents.map(([month, day, year, name, href, isUpcoming, isFeatured]) => {
        const eventDate = new Date(year, month - 1, day);
        const monthTheme = getMonthTheme(month - 1);
        return {
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
          }),
          timeUntil: getTimeUntilEvent(eventDate)
        };
      }),
      thisMonth,
      nextMonth,
      laterEvents,
      totalUpcoming: upcomingEvents.length
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

  const { allUpcoming, thisMonth, nextMonth, laterEvents, totalUpcoming } = currentEventsData;

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
                <span className={styles.eventCount}> • {totalUpcoming} Event{totalUpcoming !== 1 ? 's' : ''}</span>
              )}
            </p>
          </div>
          
          {/* ===== MAIN CONTENT AREA ===== */}
          <div className={styles.contentArea}>
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
              /* ===== CALENDAR AND EVENTS LAYOUT ===== */
              <>
                {/* Calendar Section */}
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

                {/* This Month Events */}
                {thisMonth.length > 0 && (
                  <section className={styles.eventsSection}>
                    <div className={styles.sectionHeader}>
                      <h2>This Month</h2>
                      <div className={styles.sectionCount}>{thisMonth.length} event{thisMonth.length !== 1 ? 's' : ''}</div>
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
                      <h2>Next Month</h2>
                      <div className={styles.sectionCount}>{nextMonth.length} event{nextMonth.length !== 1 ? 's' : ''}</div>
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
                      <div className={styles.sectionCount}>{laterEvents.length} event{laterEvents.length !== 1 ? 's' : ''}</div>
                    </div>
                    <div className={styles.eventsGrid}>
                      {laterEvents.map((event, index) => (
                        <EventCard key={`later-${index}`} event={event} priority="normal" />
                      ))}
                    </div>
                  </section>
                )}

                {/* Call to Action */}
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
              </>
            )}
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  );
}

// Event Card Component
function EventCard({ event, priority = 'normal' }) {
  const priorityClass = {
    high: styles.priorityHigh,
    medium: styles.priorityMedium,
    normal: styles.priorityNormal
  }[priority];

  return (
    <div className={`${styles.eventCard} ${priorityClass}`}>
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
        <div className={styles.eventHeader}>
          <div className={styles.eventDate}>
            <div className={styles.dateMain}>{event.shortDate}</div>
            <div className={styles.timeUntil}>{event.timeUntil}</div>
          </div>
          
          {event.isFeatured && (
            <div className={styles.featuredBadge}>⭐ Featured</div>
          )}
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
          
          <div className={styles.fullDate}>{event.formattedDate}</div>
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