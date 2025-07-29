'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// Service-specific tracking configuration
const SERVICE_TRACKING = {
  '/services/nourish-thrive-journey': {
    service_name: 'Nourish & Thrive Journey',
    service_category: 'Weight Management',
    service_type: 'Premium Program'
  },
  '/services/corelift': {
    service_name: 'CoreLift Program',
    service_category: 'Pelvic Health',
    service_type: 'Therapy Program'
  },
  '/services/valorview-ime': {
    service_name: 'ValorView IME',
    service_category: 'Medical Examinations',
    service_type: 'Professional Service'
  }
};

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID && !window.gtag) {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        custom_parameter_1: 'service_name',
        custom_parameter_2: 'service_category'
      }
    });

    // Enhanced ecommerce and conversion tracking setup
    gtag('config', GA_MEASUREMENT_ID, {
      enhanced_ecommerce: true,
      send_page_view: false // We'll send manually with custom parameters
    });
  }
};

// Track page views with service-specific data
export const trackPageView = (pathname) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    const serviceData = SERVICE_TRACKING[pathname] || {};
    
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pathname,
      page_title: document.title,
      page_location: window.location.href,
      ...serviceData
    });

    // Send custom event for service page views
    if (serviceData.service_name) {
      window.gtag('event', 'service_page_view', {
        event_category: 'Service Engagement',
        event_label: serviceData.service_name,
        service_name: serviceData.service_name,
        service_category: serviceData.service_category,
        service_type: serviceData.service_type
      });
    }
  }
};

// Track lead capture form submissions
export const trackLeadCapture = (serviceType, formData) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'lead_capture', {
      event_category: 'Lead Generation',
      event_label: serviceType,
      service_type: serviceType,
      user_goal: formData.goals || formData.condition,
      timeframe: formData.timeframe,
      value: getLeadValue(serviceType)
    });

    // Track as conversion
    window.gtag('event', 'conversion', {
      send_to: `${GA_MEASUREMENT_ID}/lead_form_submission`,
      event_category: 'Conversion',
      event_label: serviceType,
      value: getLeadValue(serviceType),
      currency: 'USD'
    });
  }
};

// Track phone calls (when click-to-call is used)
export const trackPhoneCall = (source) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'Contact',
      event_label: 'Phone Call',
      contact_method: 'phone',
      source: source
    });

    // Track as conversion
    window.gtag('event', 'conversion', {
      send_to: `${GA_MEASUREMENT_ID}/phone_call`,
      event_category: 'Conversion',
      event_label: 'Phone Call',
      value: 25, // Average lead value for phone calls
      currency: 'USD'
    });
  }
};

// Track email subscriptions
export const trackEmailSubscription = (source) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_subscription', {
      event_category: 'Lead Generation',
      event_label: 'Email Subscription',
      source: source
    });
  }
};

// Track social media interactions
export const trackSocialInteraction = (platform, action, target) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'social_interaction', {
      event_category: 'Social Media',
      event_label: `${platform} - ${action}`,
      social_platform: platform,
      social_action: action,
      social_target: target
    });
  }
};

// Track appointment bookings
export const trackAppointmentBooking = (serviceType, appointmentType) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'appointment_booking', {
      event_category: 'Conversion',
      event_label: serviceType,
      appointment_type: appointmentType,
      service_type: serviceType,
      value: getAppointmentValue(serviceType),
      currency: 'USD'
    });

    // Track as high-value conversion
    window.gtag('event', 'conversion', {
      send_to: `${GA_MEASUREMENT_ID}/appointment_booking`,
      event_category: 'Conversion',
      event_label: serviceType,
      value: getAppointmentValue(serviceType),
      currency: 'USD'
    });
  }
};

// Track form interactions (field focus, errors, etc.)
export const trackFormInteraction = (formType, eventType, fieldName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_interaction', {
      event_category: 'Form Engagement',
      event_label: `${formType} - ${eventType}`,
      form_type: formType,
      interaction_type: eventType,
      field_name: fieldName
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (depth, page) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'Page Engagement',
      event_label: `${depth}% scroll`,
      scroll_depth: depth,
      page_path: page
    });
  }
};

// Track video interactions
export const trackVideoInteraction = (action, videoTitle, progress) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'video_interaction', {
      event_category: 'Video Engagement',
      event_label: videoTitle,
      video_action: action,
      video_title: videoTitle,
      video_progress: progress
    });
  }
};

// Helper function to get lead value based on service type
const getLeadValue = (serviceType) => {
  const leadValues = {
    'nourish-thrive-journey': 150,
    'corelift': 100,
    'valorview-ime': 75,
    'general': 50
  };
  return leadValues[serviceType] || leadValues.general;
};

// Helper function to get appointment value based on service type
const getAppointmentValue = (serviceType) => {
  const appointmentValues = {
    'nourish-thrive-journey': 300,
    'corelift': 200,
    'valorview-ime': 150,
    'general': 100
  };
  return appointmentValues[serviceType] || appointmentValues.general;
};

// React component for Google Analytics
export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize GA on component mount
    initGA();
  }, []);

  useEffect(() => {
    // Track page views when pathname changes
    trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    // Set up scroll depth tracking
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track at 25%, 50%, 75%, 90% scroll depths
      if ([25, 50, 75, 90].includes(scrollPercent)) {
        trackScrollDepth(scrollPercent, pathname);
      }
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [pathname]);

  return null; // This component doesn't render anything
}