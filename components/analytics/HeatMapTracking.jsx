'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Heat mapping and user behavior tracking configuration
const TRACKING_CONFIG = {
  // Hotjar configuration
  hotjar: {
    enabled: process.env.NEXT_PUBLIC_ENABLE_HOTJAR === 'true',
    id: process.env.NEXT_PUBLIC_HOTJAR_ID || '1234567',
    version: 6
  },
  
  // Microsoft Clarity configuration
  clarity: {
    enabled: process.env.NEXT_PUBLIC_ENABLE_CLARITY === 'true',
    id: process.env.NEXT_PUBLIC_CLARITY_ID || 'abcdefgh'
  },
  
  // Custom behavior tracking
  custom: {
    enabled: true,
    trackClicks: true,
    trackScrollDepth: true,
    trackFormInteractions: true,
    trackTimeOnPage: true,
    trackMouseMovement: false // Can be resource intensive
  }
};

// Initialize Hotjar
const initHotjar = () => {
  if (!TRACKING_CONFIG.hotjar.enabled || typeof window === 'undefined') return;

  window.hj = window.hj || function(...args) { 
    (window.hj.q = window.hj.q || []).push(args); 
  };
  window._hjSettings = { 
    hjid: TRACKING_CONFIG.hotjar.id, 
    hjsv: TRACKING_CONFIG.hotjar.version 
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://static.hotjar.com/c/hotjar-${TRACKING_CONFIG.hotjar.id}.js?sv=${TRACKING_CONFIG.hotjar.version}`;
  document.head.appendChild(script);
};

// Initialize Microsoft Clarity
const initClarity = () => {
  if (!TRACKING_CONFIG.clarity.enabled || typeof window === 'undefined') return;

  window.clarity = window.clarity || function(...args) {
    (window.clarity.q = window.clarity.q || []).push(args);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.clarity.ms/tag/' + TRACKING_CONFIG.clarity.id;
  document.head.appendChild(script);
};

// Custom behavior tracking utilities
export const BehaviorTracker = {
  // Track click events with context
  trackClick: (element, context = {}) => {
    const clickData = {
      element: element.tagName,
      text: element.textContent?.substring(0, 100),
      href: element.href,
      className: element.className,
      id: element.id,
      timestamp: Date.now(),
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      position: {
        x: element.getBoundingClientRect().left,
        y: element.getBoundingClientRect().top
      },
      ...context
    };

    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_tracking', {
        event_category: 'User Behavior',
        event_label: clickData.text || clickData.element,
        element_type: clickData.element,
        element_text: clickData.text,
        page_path: window.location.pathname
      });
    }

    // Store locally for batch sending
    storeUserAction('click', clickData);
  },

  // Track scroll depth milestones
  trackScrollDepth: (depth, pathname) => {
    const scrollData = {
      depth: depth,
      pathname: pathname,
      timestamp: Date.now(),
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      documentHeight: document.documentElement.scrollHeight
    };

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'scroll_depth', {
        event_category: 'User Behavior',
        event_label: `${depth}% scroll`,
        scroll_depth: depth,
        page_path: pathname
      });
    }

    storeUserAction('scroll', scrollData);
  },

  // Track form interactions
  trackFormInteraction: (form, action, field = null) => {
    const formData = {
      formId: form.id,
      formAction: form.action,
      action: action, // 'focus', 'blur', 'submit', 'error'
      field: field?.name || field?.id,
      fieldType: field?.type,
      timestamp: Date.now(),
      formLength: form.elements.length
    };

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_interaction', {
        event_category: 'Form Behavior',
        event_label: `${formData.formId || 'unknown'} - ${action}`,
        form_id: formData.formId,
        form_action: action,
        field_name: formData.field
      });
    }

    storeUserAction('form', formData);
  },

  // Track time spent on page sections
  trackTimeOnSection: (sectionId, timeSpent) => {
    const timeData = {
      sectionId: sectionId,
      timeSpent: timeSpent,
      timestamp: Date.now(),
      pathname: window.location.pathname
    };

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'section_engagement', {
        event_category: 'User Behavior',
        event_label: sectionId,
        engagement_time: timeSpent,
        section_id: sectionId
      });
    }

    storeUserAction('section_time', timeData);
  },

  // Track page exit intent
  trackExitIntent: (cursorPosition) => {
    const exitData = {
      cursorPosition: cursorPosition,
      timeOnPage: Date.now() - (window.pageStartTime || Date.now()),
      scrollDepth: Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100),
      pathname: window.location.pathname,
      timestamp: Date.now()
    };

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exit_intent', {
        event_category: 'User Behavior',
        event_label: 'Exit Intent Detected',
        time_on_page: exitData.timeOnPage,
        scroll_depth: exitData.scrollDepth
      });
    }

    storeUserAction('exit_intent', exitData);
  }
};

// Store user actions locally for batch processing
const storeUserAction = (actionType, data) => {
  try {
    const sessionId = getSessionId();
    const actionData = {
      sessionId: sessionId,
      actionType: actionType,
      data: data,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    // Store in sessionStorage for current session
    const sessionActions = JSON.parse(sessionStorage.getItem('user_actions') || '[]');
    sessionActions.push(actionData);
    
    // Keep only last 100 actions to prevent storage overflow
    if (sessionActions.length > 100) {
      sessionActions.splice(0, sessionActions.length - 100);
    }
    
    sessionStorage.setItem('user_actions', JSON.stringify(sessionActions));

    // Batch send to server every 10 actions
    if (sessionActions.length % 10 === 0) {
      sendBatchAnalytics(sessionActions.slice(-10));
    }
  } catch (error) {
    console.warn('Unable to store user action:', error);
  }
};

// Generate or retrieve session ID
const getSessionId = () => {
  try {
    let sessionId = sessionStorage.getItem('garcia_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('garcia_session_id', sessionId);
    }
    return sessionId;
  } catch {
    return 'session_' + Date.now();
  }
};

// Send batch analytics to server
const sendBatchAnalytics = async (actions) => {
  try {
    await fetch('/api/analytics/batch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        actions: actions,
        timestamp: Date.now()
      })
    });
  } catch (error) {
    console.warn('Failed to send batch analytics:', error);
  }
};

// Hook for section time tracking
export const useSectionTimeTracking = (sectionId) => {
  const startTimeRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTimeRef.current = Date.now();
          } else if (startTimeRef.current) {
            const timeSpent = Date.now() - startTimeRef.current;
            if (timeSpent > 1000) { // Only track if viewed for more than 1 second
              BehaviorTracker.trackTimeOnSection(sectionId, timeSpent);
            }
            startTimeRef.current = null;
          }
        });
      },
      { threshold: 0.5 } // Section is considered "viewed" when 50% visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      if (startTimeRef.current) {
        const timeSpent = Date.now() - startTimeRef.current;
        if (timeSpent > 1000) {
          BehaviorTracker.trackTimeOnSection(sectionId, timeSpent);
        }
      }
    };
  }, [sectionId]);

  return elementRef;
};

// Main Heat Map Tracking Component
export default function HeatMapTracking() {
  const pathname = usePathname();
  const exitIntentTracked = useRef(false);

  useEffect(() => {
    // Initialize tracking services
    initHotjar();
    initClarity();

    // Set page start time
    window.pageStartTime = Date.now();

    // Custom click tracking
    if (TRACKING_CONFIG.custom.trackClicks) {
      const handleClick = (e) => {
        BehaviorTracker.trackClick(e.target, { 
          page: pathname,
          isServicePage: pathname.includes('/services/')
        });
      };

      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, []);

  useEffect(() => {
    // Form interaction tracking
    if (TRACKING_CONFIG.custom.trackFormInteractions) {
      const handleFormFocus = (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
          BehaviorTracker.trackFormInteraction(e.target.form, 'focus', e.target);
        }
      };

      const handleFormBlur = (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
          BehaviorTracker.trackFormInteraction(e.target.form, 'blur', e.target);
        }
      };

      const handleFormSubmit = (e) => {
        BehaviorTracker.trackFormInteraction(e.target, 'submit');
      };

      document.addEventListener('focusin', handleFormFocus);
      document.addEventListener('focusout', handleFormBlur);
      document.addEventListener('submit', handleFormSubmit);

      return () => {
        document.removeEventListener('focusin', handleFormFocus);
        document.removeEventListener('focusout', handleFormBlur);
        document.removeEventListener('submit', handleFormSubmit);
      };
    }
  }, []);

  useEffect(() => {
    // Exit intent tracking
    const handleMouseLeave = (e) => {
      if (!exitIntentTracked.current && e.clientY <= 0) {
        exitIntentTracked.current = true;
        BehaviorTracker.trackExitIntent({ x: e.clientX, y: e.clientY });
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  useEffect(() => {
    // Scroll depth tracking
    if (TRACKING_CONFIG.custom.trackScrollDepth) {
      const scrollDepths = [25, 50, 75, 90];
      const trackedDepths = new Set();

      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        scrollDepths.forEach(depth => {
          if (scrollPercent >= depth && !trackedDepths.has(depth)) {
            trackedDepths.add(depth);
            BehaviorTracker.trackScrollDepth(depth, pathname);
          }
        });
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
    }
  }, [pathname]);

  useEffect(() => {
    // Reset exit intent tracking for new pages
    exitIntentTracked.current = false;
  }, [pathname]);

  useEffect(() => {
    // Send any remaining actions when page unloads
    const handleBeforeUnload = () => {
      try {
        const sessionActions = JSON.parse(sessionStorage.getItem('user_actions') || '[]');
        if (sessionActions.length > 0) {
          // Use sendBeacon for reliable delivery during page unload
          if (navigator.sendBeacon) {
            navigator.sendBeacon('/api/analytics/batch', JSON.stringify({
              actions: sessionActions,
              timestamp: Date.now(),
              event: 'page_unload'
            }));
          }
        }
      } catch (error) {
        console.warn('Error sending final analytics:', error);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return null; // This component doesn't render anything
}

// Section wrapper component for time tracking
export const TrackedSection = ({ sectionId, children, className = '' }) => {
  const sectionRef = useSectionTimeTracking(sectionId);

  return (
    <div ref={sectionRef} className={className} data-section-id={sectionId}>
      {children}
    </div>
  );
};