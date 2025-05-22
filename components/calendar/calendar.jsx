'use client';

import styles from './calendar.module.css';

/**
 * Reusable mini‑calendar.
 *
 * Props:
 *  - monthLabel     String   e.g. "July 2025"
 *  - firstWeekday   Number   0 = Sun, 1 = Mon, …
 *  - daysInMonth    Number
 *  - events         Object   { 7: "Event title", 21: "Another" }
 */
export default function Calendar({ monthLabel, firstWeekday, daysInMonth, events = {} }) {
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarHeader}>{monthLabel}</div>

      <div className={styles.calendarGrid}>
        {['S','M','T','W','T','F','S'].map((d, i) => (
          <div key={`${d}-${i}`} className={styles.weekday}>{d}</div>
        ))}

        {Array.from({ length: firstWeekday }).map((_, i) => (
          <div key={`pad-${i}`} />
        ))}

        {days.map((day) => {
          const isEvent = day in events;
          return (
            <div
              key={`day-${day}`}
              className={`${styles.calendarDay} ${isEvent ? styles.eventDay : ''}`}
            >
              {day}
              {isEvent && <span className={styles.tooltip}>{events[day]}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
