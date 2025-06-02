// navdata.js
/* purely data – no React runtime */

export const top_buttons = [
  { label: 'emergency line' },
  { label: 'patient portal' },
  { label: 'en' },
];

export const nav_links = [
  { href: '/meetthedoctor', label: 'Meet the Doctor' },

  {
    label: 'Events',
    dropdown: {
      links: [
        {
          title: 'upcoming events',
          items: [
            { label: 'Pelvic Health Recovery', href: '/events/pelvic-health-recovery', date: 7 },
            { label: 'Community Flu-Shot Clinic', href: '/events/flu-clinic', date: 21 },
          ],
        },
        {
          title: 'past highlights',
          items: [
            { label: 'Healthy Living Webinar', href: '/events/healthy-living-webinar' },
            { label: 'Open House 2024', href: '/events/open-house-2024' },
          ],
        },
      ],
      // ⛔ Remove hardcoded calendar reference here
    },
  },

  {
    label: 'Services',
    dropdown: {
      links: [
        {
          title: 'core medical services',
          items: [
            { label: 'chronic disease management', href: '/#chronic-disease' },
            { label: 'preventive care', href: '/#preventive-care' },
          ],
        },
        {
          title: 'specialized care',
          items: [
            { label: 'pelvic health', href: '/pelvichealth' },
            { label: 'weight management', href: '/#weight-management' },
          ],
        },
      ],
      info: {
        askDr: {
          title: 'Have questions for Dr. Garcia?',
          description: 'Submit your confidential questions through our secure portal and get expert advice.',
          buttonText: 'Ask Dr. Garcia',
        },
        contact: {
          phone: '816-427-5320',
          hours: 'Mon–Fri: 8 a.m.–7 p.m.',
          location: '801 NW St. Mary Drive',
        },
      },
    },
  },

  {
    label: 'Affiliates',
    dropdown: {
      links: [
        {
          title: 'our partners',
          items: [{ label: "gigi's safehouse", href: '/#gigi-safehouse' }],
        },
      ],
      info: {
        askDr: {
          title: 'Partner with us',
          description: 'Learn how your organization can collaborate with our practice.',
          buttonText: 'Partner Inquiry',
        },
        contact: {
          phone: '816-427-5320',
          hours: 'Mon–Fri: 9 a.m.–5 p.m.',
          location: '801 NW St. Mary Drive',
        },
      },
    },
  },

  { href: '/#faqs', label: 'FAQs' },
  { href: '/#contact', label: 'Contact' },
];
