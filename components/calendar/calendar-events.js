// Format: [monthIndex (0-11), day, year, event name, link, isUpcoming (true=upcoming, false=past), isFeatured]
export const rawEvents = [
  [5, 2, 2025, 'Pelvic Health Recovery Workshop', '/events/pelvic-health-recovery', true, true],
  [5, 15, 2025, 'Community Flu-Shot Clinic', '/events/flu-clinic', true, true],
  [4, 21, 2025, 'Healthy Living Webinar', '/events/healthy-living-webinar', false, false],
  [3, 10, 2025, 'Open House 2024', '/events/open-house-2024', false, true]
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

  return {
    upcomingEvents: rawEvents
      .filter(([month, day, year]) => 
        year > currentYear || 
        (year === currentYear && month > currentMonth) ||
        (year === currentYear && month === currentMonth && day >= now.getDate())
      )
      .map(([month, day, year, label, href]) => ({ 
        label, 
        href, 
        date: formatEventDate(month, day, year) 
      })),

    pastEvents: rawEvents
      .filter(([month, day, year]) => 
        year < currentYear || 
        (year === currentYear && month < currentMonth) ||
        (year === currentYear && month === currentMonth && day < now.getDate())
      )
      .map(([month, day, year, label, href]) => ({ 
        label, 
        href,
        // Optionally add formatted date for past events if needed
        date: formatEventDate(month, day, year)
      })),

    featuredEvents: rawEvents
      .filter(event => event[5] === true)
      .map(([month, day, year, label, href]) => ({ 
        label, 
        href, 
        date: formatEventDate(month, day, year) 
      }))
  };
};