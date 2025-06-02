'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './calendar.module.css';
import { getcalendar, geteventlink } from './calendar-events';

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
        {/* ← Left arrow (disabled if offset = 0) */}
        <button
          className={styles.navButton}
          onClick={() => setOffset((o) => Math.max(0, o - 1))}
          disabled={offset === 0}
        >
          ←
        </button>

        <span>{monthLabel}</span>

        {/* → Right arrow (only allow up to offset 1) */}
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
