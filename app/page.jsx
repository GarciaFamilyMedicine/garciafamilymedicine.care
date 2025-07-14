'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './page.module.css';
import mobileStyles from './mobile.module.css';

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
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 10000); // Doubled from 5000ms to 10000ms
    
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

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
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

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
        className={styles.carouselWrapper}
        style={{ 
          marginTop: headerHeight > 0 ? `${headerHeight}px` : '80px',
          height: headerHeight > 0 ? `calc(100vh - ${headerHeight}px)` : 'calc(100vh - 80px)',
          minHeight: '300px'
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
          <div className={styles['carousel-loading-indicator']}>
            <div className={styles['carousel-loading-spinner']}></div>
            <p>Loading images...</p>
          </div>
        )}

        <div className={styles['carousel-container']}>
          {slides.map((slide, index) => (
            <div
              key={`slide-${index}`}
              className={`${styles['carousel-slide']} ${
                index === currentIndex ? styles['carousel-active'] : ''
              }`}
              aria-hidden={index !== currentIndex}
            >
              <a
                href={slide.href}
                target={slide.target}
                rel={slide.target === '_blank' ? 'noopener noreferrer' : undefined}
                aria-label={slide.alt}
                className={styles['carousel-slide-link']}
              >
                <div className={styles['carousel-slide-image-container']}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1920}
                    height={1080}
                    className={styles['carousel-slide-image']}
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
          className={`${styles['carousel-nav-button']} ${styles['carousel-prev-button']}`}
          onClick={prevSlide}
          aria-label="Previous slide"
          disabled={isLoading}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        
        <button 
          className={`${styles['carousel-nav-button']} ${styles['carousel-next-button']}`}
          onClick={nextSlide}
          aria-label="Next slide"
          disabled={isLoading}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className={styles['carousel-dots-container']}>
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`${styles['carousel-dot']} ${
                index === currentIndex ? styles['carousel-dot-active'] : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
              disabled={isLoading}
            />
          ))}
        </div>

        {/* Slide counter for accessibility */}
        <div className={styles['carousel-slide-counter']} aria-live="polite">
          <span className="sr-only">
            Slide {currentIndex + 1} of {slides.length}
          </span>
        </div>
      </section>

      {/* MAIN BODY */}
      <main className={combineStyles(
        styles.main,
        mobileStyles.main,
        "flex flex-col items-center flex-grow"
      )}>
        {/* Welcome card */}
        <section className={combineStyles(
          styles.mainWelcomeCard,
          mobileStyles.mainWelcomeCard
        )}>
          <h1 className={combineStyles(
            styles.mainWelcomeH1,
            mobileStyles.mainWelcomeH1
          )}>
            Welcome to Garcia Family Medicine
          </h1>
          
          <h2 className={combineStyles(
            styles.mainWelcomeH2,
            mobileStyles.mainWelcomeH2
          )}>
            Compassionate Healthcare Overflowing with Love in Blue Springs, MO!
          </h2>

          <p className={combineStyles(
            styles.mainWelcomeP,
            mobileStyles.mainWelcomeP
          )}>
            Step into a healthcare experience rooted in trust, integrity, and the boundless love of God! At&nbsp;
            <strong className={styles.mainWelcomeStrong}>Garcia Family Medicine</strong>, we're passionately committed to making healthcare in Blue Springs, MO,&nbsp;
            <strong className={styles.mainWelcomeStrong}>simple, affordable, and deeply personal—</strong>because you're more than a patient, you're family.
            We've stepped away from the traditional insurance system to deliver&nbsp;
            <strong className={styles.mainWelcomeStrong}>high‑quality primary care</strong> and mental‑health support that's cost‑effective, compassionate,
            and free of long waits or hidden fees. Serving Blue Springs, Independence, Lee's Summit, and the greater
            Kansas City metro area, we're here to wrap you in care that reflects God's grace and goodness.
          </p>

          <button
            id="readMoreButton"
            className={combineStyles(
              styles.readMoreButton,
              mobileStyles.readMoreButton
            )}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="moreContent"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>

          <div
            id="moreContent"
            className={combineStyles(
              styles.careSection,
              mobileStyles.careSection,
              isExpanded ? mobileStyles.expanded : '',
              'transition-all duration-300',
              isExpanded ? 'max-h-[2000px] pt-2' : 'max-h-0 overflow-hidden'
            )}
          >
            <h3 className={combineStyles(
              styles.careSectionH3,
              mobileStyles.careSectionH3
            )}>
              Garcia Family Medicine: Where Love Meets Exceptional Care!
            </h3>
            <p className={combineStyles(
              styles.careSectionP,
              mobileStyles.careSectionP
            )}>
              At <strong>Garcia Family Medicine</strong>, we're different—and that difference shines with purpose.
              Guided by faith and a heart for healing, we prioritize your mental and physical well‑being above all else.
              By leaving behind the complexities of insurance, we offer:
            </p>
            <ul className={combineStyles(
              styles.careSectionUl,
              mobileStyles.careSectionUl
            )}>
              <li className={combineStyles(
                styles.careSectionLi,
                mobileStyles.careSectionLi
              )}>
                <strong>Loving Care:</strong> From preventive checkups to managing chronic conditions like diabetes or hypertension, plus mental health support filled with empathy.
              </li>
              <li className={combineStyles(
                styles.careSectionLi,
                mobileStyles.careSectionLi
              )}>
                <strong>Heavenly Convenience:</strong> Quick, easy appointments that honor your time and needs.
              </li>
              <li className={combineStyles(
                styles.careSectionLi,
                mobileStyles.careSectionLi
              )}>
                <strong>Affordable Blessings:</strong> Transparent pricing that brings peace to your wallet and soul.
              </li>
            </ul>
            <p className={combineStyles(
              styles.careSectionP,
              mobileStyles.careSectionP
            )}>
              Located in Blue Springs, MO, we extend our warm, trustworthy embrace to Independence, Lee's Summit, and the entire Kansas City metro area. With integrity at our core, we're here to provide family medicine that feels like a hug from above—because your health is a sacred gift, and we cherish it!
            </p>
            <h3 className={combineStyles(
              styles.careSectionH3,
              mobileStyles.careSectionH3
            )}>
              Trust in Us – Call Today!
            </h3>
            <p className={combineStyles(
              styles.careSectionP,
              mobileStyles.careSectionP
            )}>
              Ready to experience healthcare infused with compassion and the love of God? At Garcia Family Medicine, we're more than a practice—we're a ministry of wellness, serving Blue Springs, MO, and beyond with unwavering dedication. Whether you need a routine visit, ongoing care, or a kind ear for your mental health journey, our team is here to lift you up with trust and tenderness.
            </p>
            <p className={combineStyles(
              styles.careSectionP,
              mobileStyles.careSectionP
            )}>
              Pick up the phone and call&nbsp;
              <a href="tel:816-427-5320" className={styles.textLink}>816‑427‑5320</a>&nbsp;now—let us welcome you into our family! Join the countless patients in Blue Springs, Independence, Lee's Summit, and the Kansas City metro area who've found healing and hope with us. Dial&nbsp;
              <a href="tel:816-427-5320" className={styles.textLink}>816‑427‑5320</a>&nbsp;today and discover the joy of <strong>compassionate, faith‑filled healthcare</strong> that's as reliable as it is remarkable. Your well‑being is our calling—let's start this journey together!
            </p>
            <a
              href="tel:816-427-5320"
              className={combineStyles(
                styles.callButton,
                mobileStyles.callButton
              )}
            >
              Call Now: 816‑427‑5320
            </a>
          </div>
        </section>

        {/* Ask-Dr-Tess */}
        <section className={combineStyles(
          styles.commentsSection,
          mobileStyles.commentsSection
        )}>
          <h3 className={combineStyles(
            styles.commentsSectionH3,
            mobileStyles.commentsSectionH3
          )}>
            Got burning questions too tricky, awkward, or unknown to voice?
          </h3>
          <p className={combineStyles(
            styles.commentsSectionP,
            mobileStyles.commentsSectionP
          )}>
            Dr. Tess is here for you! Submit your questions through our secure form for a judgment‑free response, or call&nbsp;
            <a href="tel:816-427-5320" className={styles.textLink}>816‑427‑5320</a>&nbsp;for a personal chat.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className={combineStyles(
              styles.askButton,
              mobileStyles.askButton
            )}
            aria-haspopup="dialog"
          >
            Ask Dr. Tess
          </button>
        </section>
      </main>

      {/* Popup */}
      {isPopupOpen && (
        <div
          id="popup"
          className={combineStyles(
            styles.popup,
            mobileStyles.popup,
            'opacity-100'
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div className={combineStyles(
            styles.popupContent,
            mobileStyles.popupContent
          )}>
            <button
              className={combineStyles(
                styles.close,
                mobileStyles.close
              )}
              onClick={() => setIsPopupOpen(false)}
              aria-label="Close dialog"
            >
              ×
            </button>
            <h2 id="popup-title" className="sr-only">Ask Dr. Tess Form</h2>
            <iframe
              title="Ask Dr. Tess Form"
              src="https://forms.office.com/r/R5vkttmxpe"
              className={combineStyles(
                styles.iframe,
                mobileStyles.iframe
              )}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}