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
    href: '/news',
    dropdown: {
      // Will be dynamically populated with news and events
      isDynamic: true,
      includeNews: true
    },
  },

  {
    label: 'Our Services',
    href: '/services',
    dropdown: {
      links: [
        {
          title: 'Premium Healthcare Services',
          subtitle: 'Medical services we provide',
          items: [
            {
              label: 'Faith & Family Medicine™',
              href: '/services/faith-family-medicine',
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
          hours: 'Tue-Fri: 9-5 PM | Mon: CLOSED',
          location: {
            display: '801 NW St. Mary Drive, Suite 209, Blue Springs, MO',
            href: 'https://www.google.com/maps/dir/?api=1&destination=801+NW+St+Mary+Dr+Suite+209,+Blue+Springs,+MO+64014'
          },
        },
      },
      footerLinks: [
        {
          label: 'Telehealth Services',
          href: '/services/telehealth'
        },
        {
          label: 'Cash Pay Options',
          href: '/services/cash-pay'
        },
        {
          label: 'Payment Plans',
          href: '/services/payment-plans'
        }
      ],
    },
  },

  {
    label: 'Learn',
    href: '/learn',
    dropdown: {
      compactMode: true,
      links: [
        {
          title: 'General Health Topics',
          subtitle: 'Essential health information and wellness education',
          items: [
            { label: 'Family Medicine', href: '/learn/family-medicine', description: 'Comprehensive family healthcare basics' },
            { label: 'Primary Care', href: '/learn/primary-care', description: 'Your first line of healthcare defense' },
            { label: 'Preventive Care', href: '/learn/preventive-care', description: 'Staying healthy through prevention' },
            { label: 'Wellness Exams', href: '/learn/wellness-exams', description: 'Annual health check-up importance' },
            { label: 'Chronic Disease', href: '/learn/chronic-disease', description: 'Managing long-term health conditions' },
            { label: 'Mental Health', href: '/learn/mental-health', description: 'Understanding mental wellness' },
            { label: 'Pain Management', href: '/learn/pain-management', description: 'Understanding pain and relief strategies' },
            { label: 'Weight Management', href: '/learn/weight-management', description: 'Healthy weight and nutrition science' }
          ],
        },
        {
          title: 'Specialized Care',
          subtitle: 'Focused health education for specific needs',
          items: [
            { label: 'Women\'s Health', href: '/learn/womens-health', description: 'Health topics specific to women' },
            { label: 'Men\'s Health', href: '/learn/mens-health', description: 'Health topics specific to men' },
            { label: 'LGBTQ+ Healthcare', href: '/learn/lgbtq-health', description: 'Inclusive & affirming medical care' },
            { label: 'Pediatric Care', href: '/learn/pediatric-care', description: 'Children\'s health and development' },
            { label: 'Pelvic Health', href: '/learn/pelvichealth', description: 'Understanding pelvic floor health' },
            { label: 'Veteran Healthcare', href: '/learn/veterans', description: 'Health resources for veterans' },
            { label: 'DOT Certifications', href: '/learn/dot-certifications', description: 'Commercial driver health requirements' },
            { label: 'IME Information', href: '/learn/independent-medical-examinations', description: 'Understanding medical examinations' }
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
          hours: 'Tue-Fri: 9-5 PM | Mon: CLOSED',
          location: {
            display: '801 NW St. Mary Drive, Suite 209, Blue Springs, MO',
            href: 'https://www.google.com/maps/dir/?api=1&destination=801+NW+St+Mary+Dr+Suite+209,+Blue+Springs,+MO+64014'
          },
        },
      },
      footerLinks: [
        {
          label: 'Telehealth Services',
          href: '/services/telehealth'
        },
        {
          label: 'Cash Pay Options',
          href: '/services/cash-pay'
        },
        {
          label: 'Payment Plans',
          href: '/services/payment-plans'
        }
      ],
    },
  },

  {
    label: 'Affiliates',
    href: '/affiliates',
    dropdown: {
      threeColumns: true,
      links: [
        {
          title: 'Our Partners & Affiliates',
          subtitle: 'Organizations we support and collaborate with',
          items: [
            {
              label: "gigiSafeHOUSE",
              href: 'https://gigisafehouse.com',
              description: 'Supporting survivors of domestic violence and human trafficking',
              external: true
            }
          ],
        },
        null, // Empty second column to push info to third column
      ],
      info: {
        askDr: {
          title: 'Community Partners',
          description: 'Learn about our partnerships and how we support our community together.',
          buttonText: 'Get Involved',
        },
        contact: {
          phone: {
            display: '816-427-5320',
            href: 'tel:8164275320'
          },
          hours: 'Tue-Fri: 9-5 PM | Mon: CLOSED',
          location: {
            display: '801 NW St. Mary Drive, Suite 209, Blue Springs, MO',
            href: 'https://www.google.com/maps/dir/?api=1&destination=801+NW+St+Mary+Dr+Suite+209,+Blue+Springs,+MO+64014'
          },
        },
      },
      footerLinks: [
        {
          label: 'Telehealth Services',
          href: '/services/telehealth'
        },
        {
          label: 'Cash Pay Options',
          href: '/services/cash-pay'
        },
        {
          label: 'Payment Plans',
          href: '/services/payment-plans'
        }
      ],
    },
  },

  { href: '/contact', label: 'Contact' },
];