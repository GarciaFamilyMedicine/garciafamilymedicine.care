'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Picture from '@/components/picture';
import Header from '@/components/header';
import Footer from '@/components/footer/footer';
import styles from '../page.module.css';
import mobileStyles from '../mobile.module.css';
import homeStyles from './home.module.css';

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
      {/* Header */}
      <Header />

      {/* Hero carousel section */}
      <section 
        id="carousel-section"
        className={homeStyles.carouselSection}
        aria-label="Garcia Family Medicine Services Carousel"
        role="region"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Loading indicator */}
        {isLoading && (
          <div className={homeStyles.carouselLoading}>
            <div className="carousel-loading-spinner"></div>
            <p>Loading images...</p>
          </div>
        )}

        <div className={homeStyles.carouselContainer}>
          {slides.map((slide, index) => (
            <div
              key={`slide-${index}`}
              className={`${homeStyles.carouselSlide} ${
                index === currentIndex ? homeStyles.active : ''
              } ${
                index === previousIndex ? homeStyles.prev : ''
              } ${
                index === (currentIndex + 1) % slides.length ? homeStyles.next : ''
              }`}
              aria-hidden={index !== currentIndex}
            >
              <a
                href={slide.href}
                target={slide.target}
                rel={slide.target === '_blank' ? 'noopener noreferrer' : undefined}
                aria-label={slide.alt}
              >
                <div className={homeStyles.carouselImageWrapper}>
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet={`/images/homepage/optimized/${slide.src.replace('/images/homepage/', '').replace('.png', '')}-mobile.webp`}
                      type="image/webp"
                    />
                    <source
                      media="(max-width: 768px)"
                      srcSet={`/images/homepage/optimized/${slide.src.replace('/images/homepage/', '').replace('.png', '')}-mobile.jpg`}
                      type="image/jpeg"
                    />
                    <source
                      srcSet={`/images/homepage/optimized/${slide.src.replace('/images/homepage/', '').replace('.png', '')}-desktop.webp`}
                      type="image/webp"
                    />
                    <img
                      src={`/images/homepage/optimized/${slide.src.replace('/images/homepage/', '').replace('.png', '')}-desktop.jpg`}
                      alt={slide.alt}
                      className={homeStyles.carouselImage}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      onLoad={() => handleImageLoad(index)}
                      onError={() => {
                        handleImageLoad(index);
                      }}
                    />
                  </picture>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          className={`${homeStyles.carouselNavButton} ${homeStyles.carouselPrevButton}`}
          onClick={prevSlide}
          aria-label="Previous slide"
          disabled={isLoading}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        
        <button 
          className={`${homeStyles.carouselNavButton} ${homeStyles.carouselNextButton}`}
          onClick={nextSlide}
          aria-label="Next slide"
          disabled={isLoading}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Dots Navigation at Top */}
        <div className={homeStyles.carouselDots}>
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`${homeStyles.carouselDot} ${
                index === currentIndex ? homeStyles.active : ''
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

      <div className={homeStyles.mainContent}>
        <Footer />
      </div>
    </div>
  );
}