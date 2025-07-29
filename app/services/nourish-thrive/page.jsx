'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './nourish-thrive.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images for the carousel
  const carouselImages = [
    {
      src: "/images/nourish-thrive/medical-supervision.jpg",
      alt: "Medically supervised weight management consultation at Garcia Family Medicine Blue Springs",
      caption: "Medically Supervised Weight Management"
    },
    {
      src: "/images/nourish-thrive/healthy-transformation.jpg",
      alt: "Transform your relationship with food through healthy lifestyle changes",
      caption: "Transform Your Relationship with Food"
    },
    {
      src: "/images/nourish-thrive/progress-tracking.jpg", 
      alt: "Track your journey to better health with professional medical support",
      caption: "Track Your Journey to Better Health"
    },
    {
      src: "/images/nourish-thrive/care-team.jpg",
      alt: "Complete care team supporting your weight management journey at Garcia Family Medicine",
      caption: "Your Complete Care Team"
    },
    {
      src: "/images/nourish-thrive/lifelong-wellness.jpg",
      alt: "12-month program leading to lifelong wellness and sustainable weight management",
      caption: "12 Months to Lifelong Wellness"
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
            <h1>Nourish & Thrive™ Weight Management</h1>
            <p className={styles.subtitle}>Comprehensive medical weight management program combining nutrition, lifestyle coaching, and prescription therapies</p>
          </div>
          
          {/* ===== MAIN CONTENT AREA ===== */}
          <div className={styles.contentArea}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
              <div className={styles.heroContent}>
                <div className={styles.heroText}>
                  <h2>Transform Your Health with Nourish & Thrive™</h2>
                  <p className={styles.lead}>
                    Our medical weight management program combines the latest FDA-approved treatments 
                    with personalized nutrition coaching and lifestyle support. Experience sustainable 
                    weight loss under medical supervision with our comprehensive approach.
                  </p>
                  <div className={styles.eventAlert}>
                    <h3>🌟 New Patient Special: 50% Off Initial Consultation! 🌟</h3>
                    <p>Start your transformation journey with our comprehensive weight assessment and 
                    personalized plan development. Limited time offer through <strong>August 15th, 2025</strong>.</p>
                    <div className={styles.eventLinks}>
                      <a 
                        href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/" 
                        className={styles.eventLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🎯 Book Consultation
                      </a>
                      <a 
                        href="tel:+18163470570" 
                        className={styles.eventLinkSecondary}
                      >
                        📞 Call (816) 347-0570
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* ===== IMAGE CAROUSEL ===== */}
                <div className={styles.heroImage}>
                  <div className={styles.carousel}>
                    <div className={styles.carouselContainer}>
                      <a 
                        href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/"
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
                <h3>What is Nourish & Thrive™?</h3>
                <p>
                  Nourish & Thrive™ is our comprehensive medical weight management program that 
                  addresses the root causes of weight gain through a multi-faceted approach. 
                  We combine FDA-approved medications, nutritional counseling, and lifestyle coaching.
                </p>
                <ul className={styles.featureList}>
                  <li>Medical evaluation and metabolic testing</li>
                  <li>FDA-approved weight loss medications (Semaglutide, Tirzepatide)</li>
                  <li>Personalized nutrition and meal planning</li>
                  <li>Weekly progress monitoring and support</li>
                  <li>Lifestyle coaching and behavioral modification</li>
                  <li>Body composition analysis and tracking</li>
                </ul>
                <a href="/learn/weight-management" className={styles.infoLink}>Learn More About Medical Weight Management →</a>
              </div>
              
              <div className={styles.columnRight}>
                <h3>Who Can Benefit?</h3>
                <p>
                  Our program is designed for individuals struggling with weight management who 
                  need medical supervision and comprehensive support. We help patients achieve 
                  sustainable weight loss through evidence-based treatments.
                </p>
                <div className={styles.card}>
                  <h4>Ideal Candidates</h4>
                  <ul className={styles.conditionsList}>
                    <li>BMI ≥ 30 or BMI ≥ 27 with comorbidities</li>
                    <li>Pre-diabetes or Type 2 Diabetes</li>
                    <li>High Blood Pressure or Cholesterol</li>
                    <li>Sleep Apnea or PCOS</li>
                    <li>Previous unsuccessful diet attempts</li>
                    <li>Emotional or stress eating patterns</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* ===== FULL WIDTH CONTENT ===== */}
            <section className={styles.fullWidthSection}>
              <h2>Our Nourish & Thrive™ Process</h2>
              <p>
                We follow a systematic, medically-supervised approach to ensure safe and 
                sustainable weight loss. Each step is personalized to your unique needs, 
                medical history, and weight loss goals.
              </p>
              
              <div className={styles.gridContainer}>
                <a 
                  href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.gridItem}
                >
                  <div className={styles.gridIcon}>📋</div>
                  <h4>Comprehensive Assessment</h4>
                  <p>Medical history, metabolic testing, and body composition analysis</p>
                </a>
                <a 
                  href="/learn/weight-management"
                  className={styles.gridItem}
                >
                  <div className={styles.gridIcon}>💊</div>
                  <h4>Treatment Plan</h4>
                  <p>Customized medication and nutrition protocol based on your needs</p>
                </a>
                <a 
                  href="/learn/weight-management"
                  className={styles.gridItem}
                >
                  <div className={styles.gridIcon}>📈</div>
                  <h4>Active Monitoring</h4>
                  <p>Weekly check-ins, progress tracking, and plan adjustments</p>
                </a>
                <a 
                  href="/resources"
                  className={styles.gridItem}
                >
                  <div className={styles.gridIcon}>🎯</div>
                  <h4>Maintenance Support</h4>
                  <p>Long-term lifestyle coaching and weight maintenance strategies</p>
                </a>
              </div>
            </section>
            
            {/* ===== TESTIMONIALS SECTION ===== */}
            <section className={styles.testimonialsSection}>
              <h2>Patient Success Stories</h2>
              <div className={styles.testimonialGrid}>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <span className={styles.testimonialStars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.testimonialRating}>65 lbs Lost</span>
                  </div>
                  <p className={styles.testimonialText}>
                    "After years of failed diets, Dr. Garcia's Nourish & Thrive program 
                    finally worked! The medication made it possible to control my appetite, 
                    and the nutrition coaching taught me how to eat for life. Down 65 pounds!"
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <strong>Sarah M.</strong>, Blue Springs, MO
                  </div>
                </div>
                
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <span className={styles.testimonialStars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.testimonialRating}>A1C Normalized</span>
                  </div>
                  <p className={styles.testimonialText}>
                    "Not only did I lose 45 pounds, but my diabetes is now in remission! 
                    My A1C went from 8.2 to 5.6. Dr. Garcia's approach addresses the whole 
                    person, not just the number on the scale."
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <strong>Michael T.</strong>, Independence, MO
                  </div>
                </div>
                
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <span className={styles.testimonialStars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.testimonialRating}>Life Changed</span>
                  </div>
                  <p className={styles.testimonialText}>
                    "The support and medical supervision made all the difference. I've 
                    maintained my 50-pound weight loss for over a year now. This isn't 
                    a diet - it's a lifestyle transformation program that actually works."
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <strong>Jennifer L.</strong>, Kansas City, MO
                  </div>
                </div>
              </div>
            </section>

            {/* ===== LEAD CAPTURE SECTION ===== */}
            <section className={styles.leadCaptureSection}>
              <div className={styles.leadCaptureContainer}>
                <div className={styles.leadCaptureContent}>
                  <h2>Start Your Nourish & Thrive™ Journey</h2>
                  <p>Take the first step toward sustainable weight loss and improved health</p>
                  <ul className={styles.benefitsList}>
                    <li>Comprehensive medical and metabolic assessment</li>
                    <li>Personalized treatment plan with FDA-approved medications</li>
                    <li>Weekly nutrition coaching and progress monitoring</li>
                    <li>Body composition tracking and goal adjustment</li>
                    <li>Long-term maintenance and lifestyle support</li>
                  </ul>
                  <div className={styles.pricingInfo}>
                    <h3>Investment: $300/month</h3>
                    <p className={styles.roiText}>
                      12-month comprehensive program includes medications, consultations, and coaching<br/>
                      <strong>Most patients see significant results within the first month!</strong>
                    </p>
                  </div>
                  <div className={styles.financingInfo}>
                    <h4>💳 0% Financing Available</h4>
                    <p>
                      Start your transformation with no interest! We partner with <strong>Cherry</strong> 
                      to offer 24-month 0% financing for qualified applicants.
                    </p>
                    <ul className={styles.financingOptions}>
                      <li>24-month 0% financing - just $150/month</li>
                      <li>Quick approval process (usually under 60 seconds)</li>
                      <li>No prepayment penalties</li>
                      <li>Soft credit check won't affect your credit score</li>
                    </ul>
                    <a 
                      href="#cherry-financing" 
                      className={styles.financingButton}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open('https://patient.cherry.com/garcia-family-medicine', '_blank');
                      }}
                    >
                      Check Financing Options →
                    </a>
                  </div>
                </div>
                <div className={styles.leadCaptureForm}>
                  <form className={styles.consultationForm} action="/api/lead-capture" method="POST">
                    <input type="hidden" name="service" value="nourish-thrive" />
                    <input type="hidden" name="source" value="service-page" />
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="fullName">Full Name *</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        required 
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="currentWeight">Current Weight (optional)</label>
                      <input 
                        type="text" 
                        id="currentWeight" 
                        name="currentWeight" 
                        placeholder="e.g., 180 lbs"
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="goalWeight">Goal Weight (optional)</label>
                      <input 
                        type="text" 
                        id="goalWeight" 
                        name="goalWeight" 
                        placeholder="e.g., 150 lbs"
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="primaryConcern">Primary Weight Loss Challenge</label>
                      <select id="primaryConcern" name="primaryConcern">
                        <option value="">Select your main challenge</option>
                        <option value="appetite-control">Appetite Control</option>
                        <option value="emotional-eating">Emotional Eating</option>
                        <option value="slow-metabolism">Slow Metabolism</option>
                        <option value="medical-conditions">Medical Conditions (Diabetes, PCOS, etc.)</option>
                        <option value="failed-diets">Previous Diet Failures</option>
                        <option value="lifestyle-barriers">Lifestyle/Time Barriers</option>
                        <option value="other">Other/Prefer to discuss</option>
                      </select>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="timeframe">Preferred Consultation Time</label>
                      <select id="timeframe" name="timeframe">
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (8am-12pm)</option>
                        <option value="afternoon">Afternoon (12pm-5pm)</option>
                        <option value="evening">Evening (5pm-7pm)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>
                        <input type="checkbox" name="consent" required />
                        I consent to receive communications about Nourish & Thrive services via email and phone. 
                        Message and data rates may apply.
                      </label>
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                      Schedule My Consultation
                    </button>
                    
                    <p className={styles.disclaimer}>
                      HIPAA-compliant. Your information is secure and confidential.
                    </p>
                  </form>
                </div>
              </div>
            </section>

            {/* ===== FAQ SECTION ===== */}
            <section className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqGrid}>
                <div className={styles.faqItem}>
                  <h4>How much weight can I expect to lose?</h4>
                  <p>
                    Most patients lose 15-20% of their body weight within the first year. 
                    Individual results vary based on starting weight, adherence to the program, 
                    and metabolic factors. We focus on sustainable, healthy weight loss.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <h4>What medications do you prescribe?</h4>
                  <p>
                    We prescribe FDA-approved medications including Semaglutide (Ozempic/Wegovy) 
                    and Tirzepatide (Mounjaro/Zepbound), along with other proven weight management 
                    medications based on your individual needs and medical history.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <h4>Do you offer financing options?</h4>
                  <p>
                    Yes! We partner with <strong>Cherry</strong> to offer flexible financing with 
                    monthly payments as low as $100/month. Quick approval (usually under 60 seconds), 
                    no prepayment penalties, and soft credit checks that won't affect your credit score.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <h4>Is the program covered by insurance?</h4>
                  <p>
                    Some aspects may be covered depending on your insurance plan and medical 
                    conditions. We'll help verify your benefits and work with you to make 
                    the program as affordable as possible.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <h4>How often will I need appointments?</h4>
                  <p>
                    Initially, we schedule weekly check-ins for the first month, then bi-weekly 
                    or monthly depending on your progress. This ensures optimal results and 
                    allows for timely adjustments to your treatment plan.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <h4>What if I have other medical conditions?</h4>
                  <p>
                    Our medical approach allows us to safely treat patients with diabetes, 
                    high blood pressure, PCOS, and other conditions. Weight loss often 
                    improves these conditions significantly.
                  </p>
                </div>
              </div>
            </section>

            {/* ===== COMMUNITY & SOCIAL ===== */}
            <section className={styles.communitySection}>
              <div className={styles.communityContent}>
                <h2>Join Our Weight Loss Community</h2>
                <p>
                  Connect with others on their transformation journey and share your Nourish & Thrive 
                  experience. Find motivation, tips, and support from our community.
                </p>
                
                <div className={styles.hashtagGrid}>
                  <div className={styles.hashtagRow}>
                    <span className={styles.hashtagText}>#NourishAndThrive</span>
                    <div className={styles.hashtagLinks}>
                      <div className={styles.splitButton}>
                        <a 
                          href="https://www.instagram.com/explore/tags/nourishandthrive/" 
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
                          href="https://www.facebook.com/hashtag/nourishandthrive" 
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
                    <span className={styles.hashtagText}>#WeightLossJourney</span>
                    <div className={styles.hashtagLinks}>
                      <div className={styles.splitButton}>
                        <a 
                          href="https://www.instagram.com/explore/tags/weightlossjourney/" 
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
                          href="https://www.facebook.com/hashtag/weightlossjourney" 
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
                    <span className={styles.hashtagText}>#HealthyLifestyle</span>
                    <div className={styles.hashtagLinks}>
                      <div className={styles.splitButton}>
                        <a 
                          href="https://www.instagram.com/explore/tags/healthylifestyle/" 
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
                          href="https://www.facebook.com/hashtag/healthylifestyle" 
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
                    <span className={styles.hashtagText}>#TransformationTuesday</span>
                    <div className={styles.hashtagLinks}>
                      <div className={styles.splitButton}>
                        <a 
                          href="https://www.instagram.com/explore/tags/transformationtuesday/" 
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
                          href="https://www.facebook.com/hashtag/transformationtuesday" 
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
                  <p>Follow Garcia Family Medicine for health tips and transformation stories:</p>
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
                    <a 
                      href="/contact"
                      className={styles.profileLink}
                    >
                      📧 Contact Us
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