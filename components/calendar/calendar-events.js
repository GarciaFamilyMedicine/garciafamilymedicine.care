// Format: [monthIndex (0-11), day, year, event name, link, isUpcoming (true=upcoming, false=past), isFeatured]
export const rawEvents = [
  [6, 7, 2025, 'Pelvic Health Recovery Workshop', '/events/pelvic-health-recovery', true, true]
  
];

// Helper function to format dates
const formatEventDate = (month, day, year) => {
  const eventDate = new Date(year, month, day);
  return eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export const getEventsData = () => {
  const now = new Date();
  const currentMonth = now.getMonth();
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
    // Check if event is in current month and not past
    if (year === currentYear && month === currentMonth) {
      return day >= currentDay; // Only include future dates in current month
    }
    
    // Check if event is in next month
    if (year === nextYear && month === nextMonth) {
      return true; // Include all events in next month
    }
    
    return false; // Exclude all other events
  });

  // Sort events chronologically
  const sortedEvents = currentAndNextMonthEvents.sort((a, b) => {
    const dateA = new Date(a[2], a[0], a[1]);
    const dateB = new Date(b[2], b[0], b[1]);
    return dateA - dateB;
  });

  // Cap at 4 events
  const cappedEvents = sortedEvents.slice(0, 4);

  return {
    upcomingEvents: cappedEvents.map(([month, day, year, label, href]) => ({ 
      label, 
      href, 
      date: formatEventDate(month, day, year) 
    })),

    // Past events are explicitly empty
    pastEvents: [],

    // Featured events only from current/next month
    featuredEvents: cappedEvents
      .filter(event => event[5] === true) // Check isFeatured flag
      .map(([month, day, year, label, href]) => ({ 
        label, 
        href, 
        date: formatEventDate(month, day, year) 
      }))
  };
};