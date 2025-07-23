'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './corelift.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images for the carousel
  const carouselImages = [
    {
      src: "/images/corelift/corelift-01.png",
      alt: "CoreLift pelvic health therapy at Garcia Family Medicine in Blue Springs Missouri",
      caption: "Revolutionary CoreLift Technology"
    },
    {
      src: "/images/corelift/corelift-02.png",
      alt: "Emsella chair for pelvic floor strengthening at Garcia Family Medicine",
      caption: "FDA-Approved Emsella Chair"
    },
    {
      src: "/images/corelift/corelift-03.png", 
      alt: "CoreLift treatment room at Garcia Family Medicine Blue Springs",
      caption: "Comfortable Treatment Environment"
    },
    {
      src: "/images/corelift/corelift-04.png",
      alt: "CoreLift treatment results and patient testimonials",
      caption: "Real Results for Real People"
    },
    {
      src: "/images/corelift/corelift-05.png",
      alt: "HIFEM technology explanation for pelvic floor therapy",
      caption: "Advanced HIFEM Technology"
    }
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % carouselImages.length
    );
  };

  return (
    <>
      <Header />
      
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>
          {/* ===== PAGE HEADER ===== */}
          <div className={styles.pageHeader}>
            <h1>CoreLift Services</h1>
            <p className={styles.subtitle}>Professional pelvic health and core strengthening services at Garcia Family Medicine</p>
          </div>
          
          {/* ===== MAIN CONTENT AREA ===== */}
          <div className={styles.contentArea}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
              <div className={styles.heroContent}>
                <div className={styles.heroText}>
                  <h2>Restore Your Core Strength with CoreLift</h2>
                  <p className={styles.lead}>
                    Our CoreLift program combines advanced pelvic floor therapy with core strengthening 
                    exercises to help you regain confidence and improve your quality of life. Experience 
                    personalized care from certified specialists using revolutionary Emsella technology.
                  </p>
                  <div className={styles.eventAlert}>
                    <h3>🩵 Join Our Pelvic Health Recovery Event! 🩵</h3>
                    <p>Learn about CoreLift and pelvic health at our workshop on <strong>July 31st, 11AM-7PM</strong> in Blue Springs, MO. 
                    Treatment giveaway and expert presentations!</p>
                    <div className={styles.eventLinks}>
                      <a 
                        href="/events/pelvic-health-recovery" 
                        className={styles.eventLink}
                      >
                        🎫 Event Details & RSVP
                      </a>
                      <a 
                        href="https://www.facebook.com/events/2727449114115945" 
                        className={styles.eventLinkSecondary}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📘 View on Facebook
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* ===== IMAGE CAROUSEL ===== */}
                <div className={styles.heroImage}>
                  <div className={styles.carousel}>
                    <div className={styles.carouselContainer}>
                      <a 
                        href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/s/JXViZb_ifkCITve3oXJP-Q2?ismsaljsauthenabled"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.carouselImageLink}
                      >
                        <Image 
                          src={carouselImages[currentImageIndex].src}
                          alt={carouselImages[currentImageIndex].alt}
                          width={800}
                          height={600}
                          className={styles.heroImageActual}
                          priority
                        />
                      </a>
                      
                      {/* Navigation Arrows */}
                      {carouselImages.length > 1 && (
                        <>
                          <button 
                            className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
                            onClick={goToPrevious}
                            aria-label="Previous image"
                          >
                            &#8249;
                          </button>
                          <button 
                            className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
                            onClick={goToNext}
                            aria-label="Next image"
                          >
                            &#8250;
                          </button>
                        </>
                      )}
                    </div>
                    
                    {/* Dot Indicators */}
                    {carouselImages.length > 1 && (
                      <div className={styles.carouselDots}>
                        {carouselImages.map((_, index) => (
                          <button
                            key={index}
                            className={`${styles.carouselDot} ${
                              index === currentImageIndex ? styles.carouselDotActive : ''
                            }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
            
            {/* ===== TWO COLUMN CONTENT ===== */}
            <section className={styles.twoColumnSection}>
              <div className={styles.columnLeft}>
                <h3>What is CoreLift?</h3>
                <p>
                  CoreLift is a comprehensive program designed to address pelvic floor dysfunction 
                  and core weakness using revolutionary Emsella technology. Our evidence-based approach 
                  combines non-invasive HIFEM therapy with lifestyle education.
                </p>
                <ul className={styles.featureList}>
                  <li>Non-invasive Emsella treatments (28-minute sessions)</li>
                  <li>Equivalent to 11,000 Kegel exercises per session</li>
                  <li>95% patient satisfaction rate</li>
                  <li>FDA-approved HIFEM technology</li>
                  <li>No downtime, fully clothed treatments</li>
                </ul>
                <a href="/learn/pelvichealth" className={styles.infoLink}>Learn More About Pelvic Health →</a>
              </div>
              
              <div className={styles.columnRight}>
                <h3>Who Can Benefit?</h3>
                <p>
                  CoreLift is beneficial for individuals experiencing various pelvic health concerns, 
                  from postpartum recovery to age-related changes. Our program addresses both men's 
                  and women's intimate health needs.
                </p>
                <div className={styles.card}>
                  <h4>Conditions We Treat</h4>
                  <ul className={styles.conditionsList}>
                    <li>Stress & Urge Urinary Incontinence</li>
                    <li>Erectile Dysfunction (ED)</li>
                    <li>Pelvic Organ Prolapse</li>
                    <li>Postpartum Recovery</li>
                    <li>Core Weakness & Pelvic Pain</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* ===== FULL WIDTH CONTENT ===== */}
            <section className={styles.fullWidthSection}>
              <h2>Our CoreLift Process</h2>
              <p>
                We follow a systematic approach to ensure you receive the most effective treatment 
                for your individual needs. Each step is designed to build upon the previous one, 
                creating a comprehensive path to recovery.
              </p>
              
              <div className={styles.gridContainer}>
                <a 
                  href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/s/JXViZb_ifkCITve3oXJP-Q2?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.gridItem}
                >
                  <div className={styles.gridIcon}></div>
                  <h4>Initial Assessment</h4>
                  <p>Comprehensive evaluation of your pelvic floor function and core strength</p>
                </a>
                <a 
                  href="/learn/pelvichealth"
                  className={styles.gridItem}
                >
                  <div className={styles.gridIcon}></div>
                  <h4>Treatment Plan</h4>
                  <p>Customized therapy program based on your specific needs and goals</p>
                </a>
                <a 
                  href="/learn/pelvichealth"
                  className={styles.gridItem}
                >
                  <div className={styles.gridIcon}></div>
                  <h4>Active Treatment</h4>
                  <p>Regular sessions combining manual therapy and targeted exercises</p>
                </a>
                <a 
                  href="/resources"
                  className={styles.gridItem}
                >
                  <div className={styles.gridIcon}></div>
                  <h4>Home Program</h4>
                  <p>Ongoing exercises and lifestyle modifications for lasting results</p>
                </a>
              </div>
            </section>
            
            {/* ===== CALL TO ACTION ===== */}
            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2>Ready to Start Your CoreLift Journey?</h2>
                <p>
                  Take the first step towards better pelvic health. Schedule your consultation 
                  today and discover how CoreLift can help you regain strength and confidence.
                </p>
                <div className={styles.ctaButtons}>
                  <a 
                    href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/s/JXViZb_ifkCITve3oXJP-Q2?ismsaljsauthenabled"
                    className={styles.primaryButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule Pre-Screening with Dr. Gigi
                  </a>
                  <a 
                    href="/events/pelvic-health-recovery"
                    className={styles.secondaryButton}
                  >
                    Join Recovery Workshop
                  </a>
                </div>
                <div className={styles.contactOptions}>
                  <p className={styles.phoneNumber}>Call us at: <a href="tel:816-427-5320"><strong>816-427-5320</strong></a></p>
                  <p className={styles.altOption}>Can't book online? Call for assistance or questions</p>
                </div>
              </div>
            </section>

            {/* ===== COMMUNITY & SOCIAL ===== */}
            <section className={styles.communitySection}>
              <div className={styles.communityContent}>
                <h2>Join Our Pelvic Health Community</h2>
                <p>
                  Connect with others on their pelvic health journey and share your CoreLift experience 
                  using these hashtags. Find support, tips, and success stories from our community.
                </p>
                
                <div className={styles.hashtagGrid}>
                  <div className={styles.hashtagRow}>
                    <span className={styles.hashtagText}>#CoreLift</span>
                    <div className={styles.hashtagLinks}>
                      <div className={styles.splitButton}>
                        <a 
                          href="https://www.instagram.com/explore/tags/corelift/" 
                          className={styles.socialHashtag}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on Instagram"
                        >
                          <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                          </svg>
                        </a>
                        <a 
                          href="https://www.facebook.com/hashtag/corelift" 
                          className={styles.socialHashtag}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on Facebook"
                        >
                          <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles.hashtagRow}>
                    <span className={styles.hashtagText}>#PelvicHealthJourney</span>
                    <div className={styles.hashtagLinks}>
                      <div className={styles.splitButton}>
                        <a 
                          href="https://www.instagram.com/explore/tags/pelvichealthjourney/" 
                          className={styles.socialHashtag}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on Instagram"
                        >
                          <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                          </svg>
                        </a>
                        <a 
                          href="https://www.facebook.com/hashtag/pelvichealthjourney" 
                          className={styles.socialHashtag}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on Facebook"
                        >
                          <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles.hashtagRow}>
                    <span className={styles.hashtagText}>#Emsella</span>
                    <div className={styles.hashtagLinks}>
                      <div className={styles.splitButton}>
                        <a 
                          href="https://www.instagram.com/explore/tags/emsella/" 
                          className={styles.socialHashtag}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on Instagram"
                        >
                          <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                          </svg>
                        </a>
                        <a 
                          href="https://www.facebook.com/hashtag/emsella" 
                          className={styles.socialHashtag}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on Facebook"
                        >
                          <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles.hashtagRow}>
                    <span className={styles.hashtagText}>#StrongerCore</span>
                    <div className={styles.hashtagLinks}>
                      <div className={styles.splitButton}>
                        <a 
                          href="https://www.instagram.com/explore/tags/strongercore/" 
                          className={styles.socialHashtag}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on Instagram"
                        >
                          <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                          </svg>
                        </a>
                        <a 
                          href="https://www.facebook.com/hashtag/strongercore" 
                          className={styles.socialHashtag}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on Facebook"
                        >
                          <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.socialProfiles}>
                  <p>Follow Garcia Family Medicine for health tips and updates:</p>
                  <div className={styles.profileLinks}>
                    <a 
                      href="https://www.facebook.com/garciafamilymedicine"
                      className={styles.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      👥 Facebook
                    </a>
                    <a 
                      href="https://instagram.com/gfmdirectprimarycare"
                      className={styles.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📱 Instagram
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  );
}