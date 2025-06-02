'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './calendar.module.css';
import { rawEvents } from './calendar-events';

// ===============================
// 🧠 Convert Table into Calendars
// ===============================

const eventsByMonth = {};
const linksByMonth = {};

for (const [month, day, year, name, href] of rawEvents) {
  if (!eventsByMonth[year]) eventsByMonth[year] = {};
  if (!eventsByMonth[year][month]) eventsByMonth[year][month] = {};
  eventsByMonth[year][month][day] = name;

  if (href) {
    if (!linksByMonth[year]) linksByMonth[year] = {};
    if (!linksByMonth[year][month]) linksByMonth[year][month] = {};
    linksByMonth[year][month][day] = { label: name, href };
  }
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const currentDate = new Date();
const currentMonthIndex = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

// =========================
// 📆 Calendar API (Exports)
// =========================

function getcalendar(offset = 0) {
  const target = new Date(currentYear, currentMonthIndex + offset, 1);
  const year = target.getFullYear();
  const monthIndex = target.getMonth();
  const monthLabel = `${monthNames[monthIndex]} ${year}`;
  const firstWeekday = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const events = eventsByMonth?.[year]?.[monthIndex] || {};
  return {
    monthLabel,
    firstWeekday,
    daysInMonth,
    events,
    year,
    monthIndex,
  };
}

function geteventlink(day, year, monthIndex) {
  const link = linksByMonth?.[year]?.[monthIndex]?.[day];
  return link ? link.href : null;
}

// ==============================
// 📅 Main Calendar Component
// ==============================

export default function Calendar() {
  const [offset, setOffset] = useState(0); // 0 = current month, 1 = next month only

  const calendar = getcalendar(offset);
  const {
    monthLabel,
    firstWeekday,
    daysInMonth,
    events,
    year,
    monthIndex,
  } = calendar;

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

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

      <div className={styles.calendarGrid}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={`weekday-${i}`} className={styles.weekday}>{d}</div>
        ))}

        {Array.from({ length: firstWeekday }).map((_, i) => (
          <div key={`pad-${i}`} />
        ))}

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

// 🔁 Export API for external components
export { getcalendar, geteventlink };
