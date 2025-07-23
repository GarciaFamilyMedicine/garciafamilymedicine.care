// navdata.js
/* purely data – no React runtime */

// Top bar quick links/buttons
export const top_buttons = [
  { 
    label: '816-427-5320',
    href: 'tel:8164275320'  // Added tel link with extension
  },
  { label: 'Patient Portal' },
  { 
    label: 'FAQs',
    href: '/faqs'
  },
  { label: 'EN' },
];

// Main navigation links structure
export const nav_links = [
  { href: '/meetthedoctor', label: 'Meet the Doctor' },

  {
    label: 'News & Events',
    dropdown: {
      // Will be dynamically populated with news and events
      isDynamic: true,
      includeNews: true
    },
  },

  {
    label: 'Our Services',
    dropdown: {
      twoColumns: true,
      links: [
        {
          title: 'Premium Healthcare Services',
          subtitle: 'Medical services we provide',
          items: [
            {
              label: 'Faith & Family Medicine™',
              href: '/care/faith-family-medicine',
              description: 'Whole-person care honoring body, soul, and spirit'
            },
            {
              label: 'CoreLift™ Program',
              href: '/services/corelift',
              description: 'Revolutionary pelvic floor strengthening'
            },
            {
              label: 'Nourish & Thrive™ Journey',
              href: '/services/nourish-thrive-journey',
              description: '12-month wellness transformation'
            },
            {
              label: 'TrueRelief™ Therapy',
              href: '/services/truerelief-therapy',
              description: 'Non-opioid pain management'
            },
            {
              label: 'PeaceWithin™ Life Coaching',
              href: '/services/peacewithin-life-coaching',
              description: 'Trauma-informed healing'
            }
          ],
        },
        {
          title: 'Professional Medical Services',
          subtitle: 'Specialized care we offer',
          items: [
            {
              label: 'ClearRoad™ DOT Exams',
              href: '/services/clearroad-dot-exams',
              description: 'Commercial driver physicals'
            },
            {
              label: 'ValorView™ IME',
              href: '/services/valorview-ime',
              description: 'Independent medical exams'
            },
            {
              label: 'ValorLink™ Letters',
              href: '/services/valorlink-letter',
              description: 'Veteran disability support'
            },
            {
              label: 'MyClinic365™',
              href: '/services/myclinic365',
              description: 'Workplace healthcare'
            },
            {
              label: 'CareBridge™',
              href: '/services/carebridge',
              description: '24/7 healthcare platform'
            }
          ],
        },
      ],
      info: {
        askDr: {
          title: 'Schedule Your Service',
          description: 'Book an appointment for any of our medical services.',
          buttonText: 'Schedule Now',
        },
        contact: {
          phone: {
            display: '816-427-5320',
            href: 'tel:8164275320'
          },
          hours: 'Mon–Fri: 8 a.m.–7 p.m.',
          location: '801 NW St. Mary Drive',
        },
      },
    },
  },

  {
    label: 'Learn',
    dropdown: {
      twoColumns: true,
      compactMode: true, // Enable compact mode for this dropdown
      links: [
        {
          title: 'Primary Care Topics',
          items: [
            { label: 'Family Medicine', href: '/care/family-medicine' },
            { label: 'Primary Care', href: '/care/primary-care' },
            { label: 'Preventive Care', href: '/care/preventive-care' },
            { label: 'Wellness Exams', href: '/care/wellness-exams' },
            { label: 'Chronic Disease', href: '/care/chronic-disease' },
            { label: 'Medicare Services', href: '/care/medicare' }
          ],
        },
        {
          title: 'Specialized Topics',
          items: [
            { label: 'Women\'s Health', href: '/care/womens-health' },
            { label: 'Men\'s Health', href: '/care/mens-health' },
            { label: 'Pediatric Care', href: '/care/pediatric-care' },
            { label: 'Mental Health', href: '/care/mental-health' },
            { label: 'Pelvic Health', href: '/care/pelvichealth' },
            { label: 'Weight Management', href: '/care/weight-management' },
            { label: 'Pain Management', href: '/care/pain-management' },
            { label: 'Veteran Healthcare', href: '/care/veterans' },
            { label: 'DOT Certifications', href: '/care/dot-certifications' },
            { label: 'IME Information', href: '/care/independent-medical-examinations' },
            { label: 'Telehealth', href: '/care/telehealth' }
          ],
        },
      ],
      info: {
        askDr: {
          title: 'Health Education Library',
          description: 'Educational content only. For medical services, see Our Services.',
          buttonText: 'Ask a Question',
        },
        contact: {
          phone: {
            display: '816-427-5320',
            href: 'tel:8164275320'
          },
          hours: 'Mon–Fri: 8 a.m.–7 p.m.',
          location: '801 NW St. Mary Drive',
        },
      },
    },
  },

  { href: '/contact', label: 'Contact' },
];