// navdata.js
/* purely data – no React runtime */

// Top bar quick links/buttons
export const top_buttons = [
  { 
    label: '816-427-5320',
    href: 'tel:8164275320'  // Added tel link with extension
  },
  { label: 'Patient Portal' },
  { label: 'EN' },
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
          title: 'Core Medical Services',
          items: [
            {
              label: 'CoreLift™ Pelvic Health Program',
              href: '/services/corelift'
            }
          ],
        },
        {
          title: 'Specialized Care',
          items: [
            { label: 'Department of Transportation Certifications', href: '/care/dot-certifications' },
            { label: 'Independent Medical Examinations', href: '/care/independent-medical-examinations' },
            { label: 'Medicare Services', href: '/care/medicare' },
            { label: 'Mental Health Services', href: '/care/mental-health' },
            { label: 'Pain Management Services', href: '/care/pain-management' },
            { label: 'Pelvic Health', href: '/care/pelvichealth' },
            { label: 'Telehealth Service', href: '/care/telehealth' },
            { label: 'Veterans Healthcare', href: '/care/veterans' },
            { label: 'Weight Management Services', href: '/care/weight-management' }
          ],
        },
      ],
      info: {
        askDr: {
          title: 'Have questions for Dr. Tess?',
          description: 'Submit your confidential questions through our secure portal. Get expert advice directly from Dr. Tess.',
          buttonText: 'Ask Dr. Tess',
        },
        contact: {
          phone: {
            display: '816-427-5320',
            href: 'tel:8164275320'
          },
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
            { label: "gigiSafeHOUSE", href: 'https://gigisafehouse.com' },
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
          phone: {
            display: '816-427-5320',
            href: 'tel:8164275320'
          },
          hours: 'Mon–Fri: 9 a.m.–5 p.m.',
          location: '801 NW St. Mary Drive',
        },
      },
    },
  },

  { href: '/#faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
];