// calendar-events.js

// Format: [month (1-12), day, year, event name, link, isUpcoming (true=upcoming, false=past), isFeatured]
export const rawEvents = [
  [6, 19, 2025, 'Juneteenth', '/events/juneteenth', true, true], // June 19, 2025
  [7, 4, 2025, 'Independence Day Celebration', '/events/independence-day', true, false],
  [7, 7, 2025, 'Pelvic Health Recovery Workshop', '/events/pelvic-health-recovery', true, true],
];

// Helper function to format dates correctly by adjusting the month index
const formatEventDate = (month, day, year) => {
  const eventDate = new Date(year, month - 1, day); // Convert 1-based month to 0-based
  return eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export const getEventsData = () => {
  const now = new Date();
  const currentMonth = now.getMonth(); // 0-based (e.g., May = 4)
  const currentYear = now.getFullYear();
  const currentDay = now.getDate();

  // Calculate next month and year (handles December rollover)
  let nextMonth = currentMonth + 1;
  let nextYear = currentYear;
  if (nextMonth > 11) {
    nextMonth = 0;
    nextYear = currentYear + 1;
  }

  // Filter for current and next month's events only
  const currentAndNextMonthEvents = rawEvents.filter(([month, day, year]) => {
    const adjustedMonth = month - 1; // Convert 1-based to 0-based
    if (year === currentYear && adjustedMonth === currentMonth) {
      return day >= currentDay; // Only future dates in current month
    }
    if (year === nextYear && adjustedMonth === nextMonth) {
      return true; // All events in next month
    }
    return false;
  });

  // Sort events chronologically
  const sortedEvents = currentAndNextMonthEvents.sort((a, b) => {
    const dateA = new Date(a[2], a[0] - 1, a[1]); // Use month - 1
    const dateB = new Date(b[2], b[0] - 1, b[1]); // Use month - 1
    return dateA - dateB;
  });

  // Cap at 4 events
  const cappedEvents = sortedEvents.slice(0, 4);

  return {
    upcomingEvents: cappedEvents.map(([month, day, year, label, href]) => ({
      label,
      href,
      date: formatEventDate(month, day, year) // Use the correctly formatted date
    })),

    pastEvents: [],

    featuredEvents: cappedEvents
      .filter(event => event[6] === true) // Check isFeatured flag (index 6)
      .map(([month, day, year, label, href]) => ({
        label,
        href,
        date: formatEventDate(month, day, year) // Use the correctly formatted date
      }))
  };
};