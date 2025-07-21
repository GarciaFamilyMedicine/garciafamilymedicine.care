'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Picture from '@/components/picture';
import Header from '@/components/header';
import Footer from '@/components/footer/footer';
import styles from '../page.module.css';
import mobileStyles from '../mobile.module.css';

const DEFAULT_URL = 'https://garciafamilymedicine.care/contact';

const slides = [
  {
    src: '/images/homepage/homepage-banner-01.png',
    alt: 'CoreLift Pelvic Health Recovery - 11,000 Kegels in 28 Minutes',
    href: 'tel:816-427-5320',
    target: '_self'
  },
  {
    src: '/images/homepage/homepage-banner-02.png',
    alt: 'Mental Health Support - Compassionate Counseling',
    href: DEFAULT_URL,
    target: '_self'
  },
  {
    src: '/images/homepage/homepage-banner-03.png',
    alt: 'Pelvic Health Treatment - Emsella Chair',
    href: DEFAULT_URL,
    target: '_self'
  },
  {
    src: '/images/homepage/homepage-banner-04.png',
    alt: 'Direct Primary Care Membership - No Insurance Hassles',
    href: DEFAULT_URL,
    target: '_self'
  },
  {
    src: '/images/homepage/homepage-banner-05.png',
    alt: 'Weight Management Program - Healthy Lifestyle',
    href: DEFAULT_URL,
    target: '_self'
  },
  {
    src: '/images/homepage/homepage-banner-06.png',
    alt: 'Veteran Services - Caring for Those Who Served',
    href: 'https://garciafamilymedicine.care/veterans',
    target: '_blank'
  },
  {
    src: '/images/homepage/homepage-banner-07.png',
    alt: 'Healthcare Services - Garcia Family Medicine',
    href: DEFAULT_URL,
    target: '_self'
  },
  {
    src: '/images/homepage/homepage-banner-08.png',
    alt: 'Family Care Services - Compassionate Healthcare',
    href: DEFAULT_URL,
    target: '_self'
  },
  {
    src: '/images/homepage/homepage-banner-09.png',
    alt: 'Medical Services - Professional Healthcare',
    href: DEFAULT_URL,
    target: '_self'
  }
];

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  
  // Carousel states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Handle image loading
  const handleImageLoad = useCallback((index) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  }, []);

  // Auto-rotation with pause control
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 15000); // 15 seconds to match the pan animation duration
    
    return () => clearInterval(interval);
  }, [isPaused, slides.length, currentIndex]);

  // Check if first image is loaded
  useEffect(() => {
    // Hide loading after first image loads OR after 3 seconds timeout
    if (loadedImages.has(0) || loadedImages.size > 0) {
      setIsLoading(false);
    }
    
    // Failsafe timeout to hide loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [loadedImages]);

  const goToSlide = useCallback((index) => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(index);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(prev => (prev + 1) % slides.length);
  }, [currentIndex]);

  const prevSlide = useCallback(() => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Measure header height after component mounts and on resize
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        // Also set CSS custom property for use in other components
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    // Initial measurement with a small delay to ensure header is rendered
    const timeoutId = setTimeout(updateHeaderHeight, 100);

    // Re-measure on window resize
    const handleResize = () => {
      updateHeaderHeight();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close popup when clicking overlay
  useEffect(() => {
    const handleOverlayClick = (e) => { 
      if (e.target.id === 'popup') {
        setIsPopupOpen(false);
      }
    };
    
    if (isPopupOpen) {
      window.addEventListener('click', handleOverlayClick);
      return () => window.removeEventListener('click', handleOverlayClick);
    }
  }, [isPopupOpen]);

  // Handle escape key for accessibility
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isPopupOpen) {
        setIsPopupOpen(false);
      }
    };
    
    if (isPopupOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isPopupOpen]);

  // Combine styles function
  const combineStyles = (...classNames) => 
    classNames.filter(Boolean).join(' ');

  return (
    <div className={combineStyles(
      "min-h-screen bg-background text-foreground font-sans flex flex-col",
      styles.minHScreen,
      mobileStyles.minHScreen
    )}>
      {/* Fixed header with ref for measurement */}
      <div ref={headerRef} className={styles.headerContainer}>
        <Header />
      </div>

      {/* Hero carousel section */}
      <section 
        className="carousel-wrapper"
        style={{ 
          marginTop: headerHeight > 0 ? `${headerHeight}px` : '80px'
        }}
        aria-label="Garcia Family Medicine Services Carousel"
        role="region"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Loading indicator */}
        {isLoading && (
          <div className="carousel-loading-indicator">
            <div className="carousel-loading-spinner"></div>
            <p>Loading images...</p>
          </div>
        )}

        <div className="carousel-container">
          {slides.map((slide, index) => (
            <div
              key={`slide-${index}`}
              className={`carousel-slide ${
                index === currentIndex ? 'active' : ''
              } ${
                index === previousIndex ? 'prev' : ''
              }`}
              aria-hidden={index !== currentIndex}
            >
              <a
                href={slide.href}
                target={slide.target}
                rel={slide.target === '_blank' ? 'noopener noreferrer' : undefined}
                aria-label={slide.alt}
                className="carousel-slide-link"
              >
                <div className="carousel-slide-image-container">
                  <Picture
                    src={slide.src}
                    alt={slide.alt}
                    className="carousel-slide-image"
                    priority={index === 0}
                    onLoad={() => handleImageLoad(index)}
                    onError={() => {
                      handleImageLoad(index); // Still mark as "loaded" to prevent infinite loading
                    }}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          className="carousel-nav-button carousel-prev-button"
          onClick={prevSlide}
          aria-label="Previous slide"
          disabled={isLoading}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        
        <button 
          className="carousel-nav-button carousel-next-button"
          onClick={nextSlide}
          aria-label="Next slide"
          disabled={isLoading}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="carousel-dots-container">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`carousel-dot ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
              disabled={isLoading}
            />
          ))}
        </div>

        {/* Slide counter for accessibility */}
        <div className="carousel-slide-counter" aria-live="polite">
          <span className="sr-only">
            Slide {currentIndex + 1} of {slides.length}
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
}