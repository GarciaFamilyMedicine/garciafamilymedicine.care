'use client';

import { useState, useEffect } from 'react';
import { trackFormInteraction } from '../analytics/GoogleAnalytics';

// A/B Testing Hook
export const useABTest = (testName, variants, options = {}) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    trafficSplit = 'equal', // 'equal' or custom percentages
    persistSession = true,
    excludeReturningUsers = false,
    targetAudience = null
  } = options;

  useEffect(() => {
    const initializeTest = async () => {
      try {
        // Check if user should be excluded
        if (excludeReturningUsers && isReturningUser()) {
          setSelectedVariant(variants[0]); // Default to control
          setIsLoading(false);
          return;
        }

        // Check for existing variant assignment
        const existingVariant = persistSession ? getStoredVariant(testName) : null;
        
        if (existingVariant && variants.includes(existingVariant)) {
          setSelectedVariant(existingVariant);
          setIsLoading(false);
          return;
        }

        // Assign new variant
        const assignedVariant = assignVariant(variants, trafficSplit);
        setSelectedVariant(assignedVariant);

        // Store variant assignment
        if (persistSession) {
          storeVariant(testName, assignedVariant);
        }

        // Track test participation
        trackABTestParticipation(testName, assignedVariant);

      } catch (error) {
        console.error('A/B Test initialization error:', error);
        setSelectedVariant(variants[0]); // Fallback to control
      } finally {
        setIsLoading(false);
      }
    };

    initializeTest();
  }, [testName, variants, trafficSplit, persistSession, excludeReturningUsers]);

  return { variant: selectedVariant, isLoading };
};

// Utility Functions
const isReturningUser = () => {
  try {
    return localStorage.getItem('garcia_returning_user') === 'true';
  } catch {
    return false;
  }
};

const getStoredVariant = (testName) => {
  try {
    return localStorage.getItem(`ab_test_${testName}`);
  } catch {
    return null;
  }
};

const storeVariant = (testName, variant) => {
  try {
    localStorage.setItem(`ab_test_${testName}`, variant);
    localStorage.setItem('garcia_returning_user', 'true');
  } catch (error) {
    console.warn('Unable to store A/B test variant:', error);
  }
};

const assignVariant = (variants, trafficSplit) => {
  if (trafficSplit === 'equal') {
    const randomIndex = Math.floor(Math.random() * variants.length);
    return variants[randomIndex];
  }

  // Custom traffic split (implement based on your needs)
  // For now, default to equal split
  const randomIndex = Math.floor(Math.random() * variants.length);
  return variants[randomIndex];
};

const trackABTestParticipation = (testName, variant) => {
  // Track with Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ab_test_participation', {
      event_category: 'A/B Testing',
      event_label: `${testName} - ${variant}`,
      test_name: testName,
      test_variant: variant
    });
  }

  // Track with Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'ABTestParticipation', {
      test_name: testName,
      variant: variant
    });
  }
};

// A/B Test Components

// Hero Section A/B Test
export const HeroABTest = ({ service }) => {
  const { variant, isLoading } = useABTest(`hero_${service}`, ['control', 'urgency', 'benefit']);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const heroVariants = {
    control: {
      headline: 'Professional Healthcare Services',
      subtext: 'Comprehensive medical care for your family',
      cta: 'Learn More'
    },
    urgency: {
      headline: 'Limited Availability - Book Your Consultation Today',
      subtext: 'Only 3 spots remaining this month',
      cta: 'Reserve Your Spot Now'
    },
    benefit: {
      headline: 'Transform Your Health in 90 Days',
      subtext: 'Join hundreds of patients who have achieved lasting results',
      cta: 'Start Your Journey'
    }
  };

  const content = heroVariants[variant] || heroVariants.control;

  return (
    <div className="hero-ab-test" data-variant={variant}>
      <style jsx>{`
        .hero-ab-test {
          padding: 4rem 2rem;
          text-align: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .hero-headline {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        .hero-subtext {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .hero-cta {
          background: #f59e0b;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .hero-cta:hover {
          background: #d97706;
          transform: translateY(-2px);
        }
        
        .urgency .hero-headline {
          color: #fef3c7;
        }
        
        .benefit .hero-headline {
          font-size: 3.5rem;
        }
        
        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2rem;
          }
          
          .benefit .hero-headline {
            font-size: 2.5rem;
          }
        }
      `}</style>
      
      <h1 className="hero-headline">{content.headline}</h1>
      <p className="hero-subtext">{content.subtext}</p>
      <button 
        className="hero-cta"
        onClick={() => trackABTestConversion(`hero_${service}`, variant, 'cta_click')}
      >
        {content.cta}
      </button>
    </div>
  );
};

// Form A/B Test
export const FormABTest = ({ service, onSubmit }) => {
  const { variant, isLoading } = useABTest(`form_${service}`, ['short', 'detailed', 'progressive']);

  if (isLoading) {
    return <div>Loading form...</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    trackABTestConversion(`form_${service}`, variant, 'form_submit');
    onSubmit(e);
  };

  const formVariants = {
    short: {
      fields: ['name', 'email', 'phone'],
      title: 'Get Started Today'
    },
    detailed: {
      fields: ['name', 'email', 'phone', 'goals', 'timeframe', 'experience'],
      title: 'Tell Us About Your Goals'
    },
    progressive: {
      fields: ['name', 'email'], // Start with minimal, add more after initial engagement
      title: 'Quick Start'
    }
  };

  const config = formVariants[variant] || formVariants.short;

  return (
    <form className="form-ab-test" onSubmit={handleSubmit} data-variant={variant}>
      <style jsx>{`
        .form-ab-test {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          margin: 2rem auto;
        }
        
        .form-title {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #1f2937;
          font-size: 1.5rem;
          font-weight: 600;
        }
        
        .form-group {
          margin-bottom: 1rem;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #374151;
        }
        
        .form-input,
        .form-select {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #d1d5db;
          border-radius: 6px;
          font-size: 1rem;
        }
        
        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .form-submit {
          width: 100%;
          background: #3b82f6;
          color: white;
          padding: 1rem;
          border: none;
          border-radius: 8px;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .form-submit:hover {
          background: #2563eb;
        }
        
        .progressive {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .progressive .form-input,
        .progressive .form-select {
          background: rgba(255, 255, 255, 0.9);
        }
      `}</style>
      
      <h3 className="form-title">{config.title}</h3>
      
      {config.fields.includes('name') && (
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input 
            type="text" 
            className="form-input" 
            required 
            placeholder="Enter your full name"
          />
        </div>
      )}
      
      {config.fields.includes('email') && (
        <div className="form-group">
          <label className="form-label">Email Address *</label>
          <input 
            type="email" 
            className="form-input" 
            required 
            placeholder="Enter your email"
          />
        </div>
      )}
      
      {config.fields.includes('phone') && (
        <div className="form-group">
          <label className="form-label">Phone Number *</label>
          <input 
            type="tel" 
            className="form-input" 
            required 
            placeholder="(555) 123-4567"
          />
        </div>
      )}
      
      {config.fields.includes('goals') && (
        <div className="form-group">
          <label className="form-label">Primary Goal</label>
          <select className="form-select">
            <option value="">Select your goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="pelvic-health">Pelvic Health</option>
            <option value="general-wellness">General Wellness</option>
          </select>
        </div>
      )}
      
      <button type="submit" className="form-submit">
        {variant === 'progressive' ? 'Get Started' : 'Schedule Consultation'}
      </button>
    </form>
  );
};

// CTA Button A/B Test
export const CTAABTest = ({ service, href, className = '' }) => {
  const { variant, isLoading } = useABTest(`cta_${service}`, ['primary', 'urgent', 'benefit']);

  if (isLoading) {
    return <button className={className}>Loading...</button>;
  }

  const ctaVariants = {
    primary: {
      text: 'Schedule Consultation',
      style: 'primary'
    },
    urgent: {
      text: 'Book Now - Limited Spots',
      style: 'urgent'
    },
    benefit: {
      text: 'Start Your Transformation',
      style: 'benefit'
    }
  };

  const config = ctaVariants[variant] || ctaVariants.primary;

  const handleClick = () => {
    trackABTestConversion(`cta_${service}`, variant, 'cta_click');
  };

  return (
    <a 
      href={href}
      className={`cta-ab-test ${config.style} ${className}`}
      onClick={handleClick}
      data-variant={variant}
    >
      <style jsx>{`
        .cta-ab-test {
          display: inline-block;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
        }
        
        .primary {
          background: #3b82f6;
          color: white;
        }
        
        .primary:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }
        
        .urgent {
          background: #dc2626;
          color: white;
          animation: pulse 2s infinite;
        }
        
        .urgent:hover {
          background: #b91c1c;
        }
        
        .benefit {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .benefit:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(220, 38, 38, 0); }
          100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
        }
      `}</style>
      
      {config.text}
    </a>
  );
};

// A/B Test Analytics Tracker
export const trackABTestConversion = (testName, variant, conversionType) => {
  // Track with Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ab_test_conversion', {
      event_category: 'A/B Testing',
      event_label: `${testName} - ${variant} - ${conversionType}`,
      test_name: testName,
      test_variant: variant,
      conversion_type: conversionType
    });
  }

  // Track with Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'ABTestConversion', {
      test_name: testName,
      variant: variant,
      conversion_type: conversionType
    });
  }

  // Track form interactions
  trackFormInteraction('ab_test', conversionType, `${testName}_${variant}`);
};

// Export all components and utilities
export default {
  useABTest,
  HeroABTest,
  FormABTest,
  CTAABTest,
  trackABTestConversion
};