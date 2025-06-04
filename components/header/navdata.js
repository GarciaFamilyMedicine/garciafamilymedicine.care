// navdata.js
/* purely data – no React runtime */

// Top bar quick links/buttons
export const top_buttons = [
  { label: 'emergency line' },
  { label: 'patient portal' },
  { label: 'en' },
];

// Main navigation links structure
export const nav_links = [
  { href: '/meetthedoctor', label: 'Meet the Doctor' },

  {
    label: 'News & Events',
    dropdown: {
      // Will be dynamically populated
      isDynamic: true
    },
  },

  {
    label: 'Patient Care Essentials',
    dropdown: {
      links: [
        {
          title: 'Specialized Care',
          items: [
            { label: 'Pelvic Health', href: '/services/pelvichealth' },
            { label: 'Department of Transportation Certifications', href: '/services/dot-certifications' },
            { label: 'Independent Medical Examinations', href: '/services/independent-medical-examinations' },
            { label: 'Medicare Services', href: '/services/medicare' },
            { label: 'Mental Health Services', href: '/services/mental-health' },
            { label: 'Pain Management Services', href: '/services/pain-management' },
            { label: 'Telehealth Service', href: '/services/telehealth' },
            { label: 'Veteran Services', href: '/services/veteran-services' },
            { label: 'Weight Management Services', href: '/services/weight-management' }
          ],
        },
        {
          title: 'Core Medical Services',
          items: [
            {
              label: 'CoreLift™ Pelvic Health Program',
              href: '/services/pelvichealth/corelift'
            }
          ],
        },
      ],
      info: {
        askDr: {
          title: 'Have questions for Dr. Garcia?',
          description: 'Submit your confidential questions through our secure portal. Get expert advice directly from Dr. Garcia.',
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
          items: [
            { label: "gigiSafeHOUSE", href: '/#gigisafehouse' },
          ],
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
