'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './calendar.module.css';
import { rawEvents } from './calendar-events';
import { getMonthTheme } from './monthly-themes';

// ## Constants
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const currentDate = new Date();
const currentMonthIndex = currentDate.getMonth(); // 0-based
const currentYear = currentDate.getFullYear();

// ## Main Calendar Component
export default function Calendar() {
  const [offset, setOffset] = useState(0); // 0 = current month, 1 = next month

  // Memoize event processing to prevent duplicate calculations
  const { eventsByMonth, linksByMonth } = useMemo(() => {

    const eventsByMonth = {};
    const linksByMonth = {};

    // Process rawEvents (1-based months) into calendar-friendly objects with 0-based months
    for (const [month, day, year, name, href] of rawEvents) {
      const adjustedMonth = month - 1; // Convert 1-based to 0-based month
      if (!eventsByMonth[year]) eventsByMonth[year] = {};
      if (!eventsByMonth[year][adjustedMonth]) eventsByMonth[year][adjustedMonth] = {};
      eventsByMonth[year][adjustedMonth][day] = name;

      if (href) {
        if (!linksByMonth[year]) linksByMonth[year] = {};
        if (!linksByMonth[year][adjustedMonth]) linksByMonth[year][adjustedMonth] = {};
        linksByMonth[year][adjustedMonth][day] = { label: name, href };
      }
    }

    return { eventsByMonth, linksByMonth };
  }, []); // Empty dependency array - only calculate once

  // Memoize calendar data to prevent recalculation on every render
  const calendar = useMemo(() => {
    const target = new Date(currentYear, currentMonthIndex + offset, 1);
    const year = target.getFullYear();
    const monthIndex = target.getMonth(); // 0-based
    const monthLabel = `${monthNames[monthIndex]} ${year}`;
    const firstWeekday = new Date(year, monthIndex, 1).getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    const events = eventsByMonth?.[year]?.[monthIndex] || {};
    const monthTheme = getMonthTheme(monthIndex);
    
    return {
      monthLabel,
      firstWeekday,
      daysInMonth,
      events,
      year,
      monthIndex,
      monthTheme,
    };
  }, [offset, eventsByMonth]); // Recalculate when offset changes

  const {
    monthLabel,
    firstWeekday,
    daysInMonth,
    events,
    year,
    monthIndex,
    monthTheme,
  } = calendar;

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Memoize event link function
  const geteventlink = useMemo(() => {
    return (day, year, monthIndex) => {
      const link = linksByMonth?.[year]?.[monthIndex]?.[day];
      return link ? link.href : null;
    };
  }, [linksByMonth]);

  // Check if a day is today
  function isToday(day) {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === monthIndex &&
      today.getDate() === day
    );
  }

  return (
    <div className={styles.calendarWrapper}>
      {/* Header with Navigation */}
      <div className={styles.calendarHeader}>
        <button
          className={styles.navButton}
          onClick={() => setOffset((o) => Math.max(0, o - 1))}
          disabled={offset === 0}
        >
          ←
        </button>
        <span>{monthLabel}</span>
        <button
          className={styles.navButton}
          onClick={() => setOffset((o) => Math.min(1, o + 1))}
          disabled={offset === 1}
        >
          →
        </button>
      </div>

      {/* Monthly Theme Header - Smaller and Below Month */}
      {monthTheme && (
        <div 
          className={styles.monthlyThemeHeader}
          style={{ 
            backgroundColor: `${monthTheme.color}15`, 
            borderColor: monthTheme.color 
          }}
        >
          <div className={styles.themeIcon}>{monthTheme.icon}</div>
          <div className={styles.themeContent}>
            <div 
              className={styles.themeTitle}
              style={{ color: monthTheme.color }}
            >
              {monthTheme.theme}
            </div>
            <div className={styles.themeSubtitle}>
              {monthTheme.subtitle}
            </div>
          </div>
        </div>
      )}

      {/* Calendar Grid */}
      <div className={styles.calendarGrid}>
        {/* Weekday Headers */}
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={`weekday-${i}`} className={styles.weekday}>{d}</div>
        ))}

        {/* Padding for Days Before the First */}
        {Array.from({ length: firstWeekday }).map((_, i) => (
          <div key={`pad-${i}`} />
        ))}

        {/* Day Cells */}
        {days.map((day) => {
          const isEvent = day in events;
          const href = geteventlink(day, year, monthIndex);
          const today = isToday(day);

          const classNames = [
            styles.calendarDay,
            isEvent ? styles.eventDay : '',
            today ? styles.today : ''
          ].join(' ').trim();

          const content = (
            <div className={classNames}>
              <span className={today ? styles.todayCircle : ''}>{day}</span>
              {isEvent && <span className={styles.tooltip}>{events[day]}</span>}
            </div>
          );

          return (
            <div key={`day-${day}`}>
              {isEvent && href ? (
                <Link href={href}>{content}</Link>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Export API for external use - these are now memoized functions
export const getCalendarData = (offset = 0) => {
  const target = new Date(currentYear, currentMonthIndex + offset, 1);
  return {
    year: target.getFullYear(),
    month: target.getMonth(),
    monthLabel: `${monthNames[target.getMonth()]} ${target.getFullYear()}`
  };
};

export const getEventForDate = (day, year, monthIndex) => {
  // This would need the processed events, but it's better to use the component's internal state
  console.warn('getEventForDate: Consider using the Calendar component directly for better performance');
  return null;
};