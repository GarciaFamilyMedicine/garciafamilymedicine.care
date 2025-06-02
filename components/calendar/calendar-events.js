// ============================================
// 🗂️ Import Easy-to-Edit Event Table
// ============================================

import { rawEvents } from './calendar-raw-events';

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

// =========================
// 📆 Calendar API (Public)
// =========================

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const currentDate = new Date();
const currentMonthIndex = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

export function getcalendar(offset = 0) {
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

export function geteventlink(day, year, monthIndex) {
  const link = linksByMonth?.[year]?.[monthIndex]?.[day];
  return link ? link.href : null;
}

export function geteventlinks(year = currentYear, monthIndex = currentMonthIndex) {
  const map = linksByMonth?.[year]?.[monthIndex] || {};
  return Object.entries(map).map(([day, { label, href }]) => ({
    label,
    href,
    date: Number(day),
  }));
}
