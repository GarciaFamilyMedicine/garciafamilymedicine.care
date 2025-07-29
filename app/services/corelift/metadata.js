export const metadata = {
  title: 'CoreLift™ Program - Pelvic Floor Therapy & Emsella Treatment | Garcia Family Medicine',
  description: 'Restore pelvic health with CoreLift™ program featuring FDA-approved Emsella technology. Treat incontinence, core weakness & pelvic pain in Blue Springs, MO.',
  keywords: [
    'pelvic floor therapy Blue Springs MO',
    'Emsella treatment Missouri',
    'CoreLift program',
    'urinary incontinence treatment',
    'pelvic pain therapy',
    'core strengthening Blue Springs',
    'postpartum recovery therapy',
    'HIFEM technology Missouri',
    'Garcia Family Medicine pelvic health',
    'non-invasive pelvic therapy'
  ].join(', '),
  
  // Open Graph metadata for social sharing
  openGraph: {
    title: 'CoreLift™ Program - Advanced Pelvic Floor Therapy',
    description: 'Revolutionary FDA-approved Emsella technology for pelvic health. Non-invasive treatment for incontinence and core weakness.',
    url: 'https://garciafamilymedicine.care/services/corelift',
    siteName: 'Garcia Family Medicine',
    images: [
      {
        url: '/images/services/corelift/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'CoreLift Program - Emsella Pelvic Floor Therapy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'CoreLift™ Program - Pelvic Floor Therapy',
    description: 'FDA-approved Emsella technology for non-invasive pelvic health treatment. 95% patient satisfaction.',
    images: ['/images/services/corelift/hero.jpg'],
    creator: '@GarciaFamilyMed',
  },
  
  // Additional SEO metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://garciafamilymedicine.care/services/corelift',
  },
  
  // Additional meta tags
  other: {
    'geo.region': 'US-MO',
    'geo.placename': 'Blue Springs',
    'geo.position': '39.0169;-94.2816',
    'ICBM': '39.0169, -94.2816',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  }
};

// Structured data for SEO
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': 'https://garciafamilymedicine.care/services/corelift',
  'name': 'CoreLift™ Program - Garcia Family Medicine',
  'description': 'Advanced pelvic floor therapy program using FDA-approved Emsella technology for treating incontinence, pelvic pain, and core weakness.',
  'url': 'https://garciafamilymedicine.care/services/corelift',
  'logo': 'https://garciafamilymedicine.care/images/logo.png',
  'image': 'https://garciafamilymedicine.care/images/services/corelift/hero.jpg',
  'telephone': '+1-816-427-5320',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Blue Springs',
    'addressLocality': 'Blue Springs',
    'addressRegion': 'MO',
    'postalCode': '64015',
    'addressCountry': 'US'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 39.0169,
    'longitude': -94.2816
  },
  'openingHours': [
    'Mo-Fr 08:00-17:00'
  ],
  'medicalSpecialty': [
    'Pelvic Floor Therapy',
    'Physical Medicine',
    'Urogynecology',
    'Core Strengthening'
  ],
  'serviceType': 'Pelvic Floor Rehabilitation',
  'areaServed': {
    '@type': 'GeoCircle',
    'geoMidpoint': {
      '@type': 'GeoCoordinates',
      'latitude': 39.0169,
      'longitude': -94.2816
    },
    'geoRadius': '75000'
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'CoreLift™ Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Emsella Treatment',
          'description': '28-minute FDA-approved HIFEM therapy sessions'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Pelvic Floor Assessment',
          'description': 'Comprehensive evaluation of pelvic floor function'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Core Strengthening Program',
          'description': 'Personalized exercise and lifestyle program'
        }
      }
    ]
  },
  'physician': {
    '@type': 'Physician',
    'name': 'Dr. Tess Garcia',
    'medicalSpecialty': 'Family Medicine'
  }
};