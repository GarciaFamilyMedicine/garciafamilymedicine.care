'use client';

import styles from './pelvic-health-recovery.module.css';
import Header from '../../../components/header/header.jsx';
import Footer from '../../../components/footer/footer.jsx';

export default function Page() {
  return (
    <>
      <Header />
      
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>
          {/* ===== PAGE HEADER ===== */}
          <div className={styles.pageHeader}>
            <h1>CoreLift™ Pelvic Health Recovery Workshop</h1>
            <p className={styles.subtitle}>Educational Workshop & $2,000 Treatment Giveaway</p>
            <div className={styles.eventBadge}>July 31st, 2025 • Blue Springs, MO</div>
          </div>
          
          {/* ===== MAIN CONTENT AREA ===== */}
          <div className={styles.contentArea}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
              <div className={styles.heroContent}>
                <div className={styles.heroText}>
                  <h2>Win a Complete CoreLift™ Pelvic Health Recovery Package</h2>
                  <div className={styles.valueHighlight}>
                    <span className={styles.valueAmount}>$2,000</span>
                    <span className={styles.valueLabel}>Treatment Value</span>
                  </div>
                  <p className={styles.lead}>
                    Join us for an exclusive educational workshop on pelvic health using revolutionary 
                    Emsella technology. Learn about breakthrough HIFEM treatments and enter to win 
                    a complete CoreLift™ recovery package that can restore your confidence and quality of life.
                  </p>
                  <div className={styles.registrationNote}>
                    <strong>Registration Required:</strong> You must be present to win. 
                    Winner announced LIVE at 6:30 PM during our closing ceremony.
                  </div>
                </div>
                <div className={styles.heroImage}>
                  <img 
                    src="/images/corelift-pelvic-health-therapy-garcia-family-medicine.jpg" 
                    alt="CoreLift Emsella treatment chair for pelvic health recovery at Garcia Family Medicine"
                    className={styles.heroImageActual}
                  />
                </div>
              </div>
            </section>
            
            {/* ===== EVENT DETAILS CARD ===== */}
            <section className={styles.eventDetailsSection}>
              <div className={styles.eventCard}>
                <div className={styles.eventHeader}>
                  <h3>Workshop Information</h3>
                  <div className={styles.eventStatus}>Free Admission</div>
                </div>
                
                <div className={styles.eventDetails}>
                  <div className={styles.detailItem}>
                    <div className={styles.detailIcon}>📅</div>
                    <div className={styles.detailContent}>
                      <div className={styles.detailLabel}>Date</div>
                      <div className={styles.detailValue}>Thursday, July 31st, 2025</div>
                    </div>
                  </div>
                  
                  <div className={styles.detailItem}>
                    <div className={styles.detailIcon}>🕒</div>
                    <div className={styles.detailContent}>
                      <div className={styles.detailLabel}>Time</div>
                      <div className={styles.detailValue}>11:00 AM - 7:00 PM</div>
                    </div>
                  </div>
                  
                  <div className={styles.detailItem}>
                    <div className={styles.detailIcon}>📍</div>
                    <div className={styles.detailContent}>
                      <div className={styles.detailLabel}>Location</div>
                      <div className={styles.detailValue}>
                        Garcia Family Medicine<br/>
                        801 NW St. Mary Drive<br/>
                        Blue Springs, MO 64015
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.detailItem}>
                    <div className={styles.detailIcon}>🎁</div>
                    <div className={styles.detailContent}>
                      <div className={styles.detailLabel}>Prize Package</div>
                      <div className={styles.detailValue}>
                        6 Complete Emsella<br/>
                        CoreLift™ Sessions<br/>
                        ($2,000 Value)
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.registrationSection}>
                  <h4>Multiple Ways to Register</h4>
                  <div className={styles.registrationButtons}>
                    <a 
                      href="https://www.eventbrite.com/e/corelifttm-pelvic-health-recovery-workshop-tickets-1440010172189?aff=oddtdtcreator"
                      className={styles.primaryButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🎫 Register on Eventbrite
                    </a>
                    <a 
                      href="https://www.facebook.com/share/18aPyjZfTr/"
                      className={styles.secondaryButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📘 View Facebook Event
                    </a>
                    <a 
                      href="tel:816-427-5320"
                      className={styles.tertiaryButton}
                    >
                      📞 Call to Register
                    </a>
                  </div>
                  <p className={styles.registrationNote}>
                    Free workshop registration • Required for giveaway eligibility • Limited seating available
                  </p>
                  
                  <div className={styles.separatorLine}></div>
                  
                  <div className={styles.prescreeningSection}>
                    <h4>Ready to Start CoreLift™ Treatment Now?</h4>
                    <p className={styles.prescreeningText}>
                      Don't wait for the event! Schedule your private consultation 
                      and comprehensive pelvic health assessment with Dr. Gigi Garcia today.
                    </p>
                    <a 
                      href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/s/JXViZb_ifkCITve3oXJP-Q2?ismsaljsauthenabled"
                      className={styles.prescreeningButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Pre-Screening with Dr. Gigi
                    </a>
                  </div>
                </div>
              </div>
            </section>
            
            {/* ===== ABOUT CORELIFT SECTION ===== */}
            <section className={styles.twoColumnSection}>
              <div className={styles.columnLeft}>
                <h3>About CoreLift™ Therapy</h3>
                <p>
                  CoreLift™ combines advanced Emsella technology with comprehensive pelvic floor rehabilitation. 
                  Using breakthrough HIFEM (High-Intensity Focused Electromagnetic) technology, our program 
                  strengthens pelvic floor muscles for improved intimate health and quality of life.
                </p>
                <ul className={styles.benefitsList}>
                  <li>Non-invasive, fully clothed treatment sessions</li>
                  <li>28-minute sessions with zero downtime</li>
                  <li>Equivalent to 11,000 Kegel exercises per session</li>
                  <li>FDA-approved HIFEM technology</li>
                  <li>95% patient satisfaction rate</li>
                  <li>Clinically proven results in 6 sessions</li>
                  <li>Personalized treatment plans</li>
                </ul>
              </div>
              
              <div className={styles.columnRight}>
                <h3>Conditions We Address</h3>
                <p>
                  Our CoreLift™ program helps both men and women experiencing various 
                  pelvic health concerns. The therapy is suitable for adults of all ages 
                  dealing with intimate health challenges and core weakness.
                </p>
                <div className={styles.conditionsCard}>
                  <h4>Treatment Applications</h4>
                  <div className={styles.conditionsList}>
                    <div className={styles.condition}>
                      <strong>Stress & Urge Urinary Incontinence</strong>
                      <span>All types of bladder control issues</span>
                    </div>
                    <div className={styles.condition}>
                      <strong>Erectile Dysfunction (ED)</strong>
                      <span>Improved blood flow and function</span>
                    </div>
                    <div className={styles.condition}>
                      <strong>Pelvic Organ Prolapse</strong>
                      <span>Strengthened support muscles</span>
                    </div>
                    <div className={styles.condition}>
                      <strong>Postpartum Recovery</strong>
                      <span>Restored core and pelvic strength</span>
                    </div>
                    <div className={styles.condition}>
                      <strong>Core Weakness & Pelvic Pain</strong>
                      <span>Comprehensive strengthening approach</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* ===== EVENT SCHEDULE ===== */}
            <section className={styles.scheduleSection}>
              <h2>Workshop Schedule</h2>
              <p className={styles.scheduleIntro}>
                Join us for a comprehensive day of education, live demonstrations, and personalized consultations 
                with our CoreLift™ pelvic health specialists.
              </p>
              
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timeSlot}>11:00 AM - 12:00 PM</div>
                  <div className={styles.activityContent}>
                    <h4>Registration & Welcome</h4>
                    <p>Check-in, meet our medical team, refreshments, and introduction to pelvic health fundamentals</p>
                  </div>
                </div>
                
                <div className={styles.timelineItem}>
                  <div className={styles.timeSlot}>12:00 PM - 2:00 PM</div>
                  <div className={styles.activityContent}>
                    <h4>CoreLift™ Technology Demonstration</h4>
                    <p>Live Emsella treatment demonstration and comprehensive Q&A session with Dr. Gigi Garcia</p>
                  </div>
                </div>
                
                <div className={styles.timelineItem}>
                  <div className={styles.timeSlot}>2:00 PM - 4:00 PM</div>
                  <div className={styles.activityContent}>
                    <h4>Educational Workshop</h4>
                    <p>Pelvic floor exercises, lifestyle modifications, nutrition, and holistic wellness strategies</p>
                  </div>
                </div>
                
                <div className={styles.timelineItem}>
                  <div className={styles.timeSlot}>4:00 PM - 6:00 PM</div>
                  <div className={styles.activityContent}>
                    <h4>Private Consultations</h4>
                    <p>Optional one-on-one assessments with our pelvic health specialists and treatment planning</p>
                  </div>
                </div>
                
                <div className={styles.timelineItem}>
                  <div className={styles.timeSlot}>6:00 PM - 7:00 PM</div>
                  <div className={styles.activityContent}>
                    <h4>Prize Drawing & Closing Ceremony</h4>
                    <p>LIVE announcement of the $2,000 CoreLift™ Recovery Package winner at 6:30 PM</p>
                  </div>
                </div>
              </div>
            </section>{/* ===== PATIENT TESTIMONIALS ===== */}
            <section className={styles.testimonialsSection}>
              <h2>CoreLift™ Success Stories</h2>
              <div className={styles.testimonialGrid}>
                <div className={styles.testimonial}>
                  <div className={styles.testimonialContent}>
                    After completing my CoreLift™ treatment series, I experienced a 70% 
                    reduction in incontinence episodes. My quality of life has dramatically improved 
                    and I feel like myself again.
                  </div>
                  <div className={styles.testimonialAuthor}>Sarah M., Age 45</div>
                </div>
                
                <div className={styles.testimonial}>
                  <div className={styles.testimonialContent}>
                    I was initially skeptical about Emsella, but CoreLift™ exceeded my expectations. 
                    No more interruptions during activities I love. The convenience was amazing.
                  </div>
                  <div className={styles.testimonialAuthor}>Jennifer L., Age 38</div>
                </div>
                
                <div className={styles.testimonial}>
                  <div className={styles.testimonialContent}>
                    The treatment was comfortable and convenient. I could read during 
                    sessions and noticed significant improvements within just a few weeks.
                  </div>
                  <div className={styles.testimonialAuthor}>Maria R., Age 52</div>
                </div>
              </div>
            </section>

            {/* ===== SOCIAL HASHTAGS SECTION ===== */}
            <section className={styles.socialSection}>
              <div className={styles.socialContent}>
                <h3>Join Our Pelvic Health Community</h3>
                <p>
                  Share your CoreLift™ journey and connect with others using these hashtags. 
                  Follow our workshop updates and success stories on social media.
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
                  <p>Follow Garcia Family Medicine for health tips and workshop updates:</p>
                  <div className={styles.profileLinks}>
                    <a 
                      href="https://instagram.com/garciafamilymedicine"
                      className={styles.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📱 Instagram
                    </a>
                    <a 
                      href="https://facebook.com/garciafamilymedicine"
                      className={styles.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      👥 Facebook
                    </a>
                  </div>
                </div>
              </div>
            </section>
            
            {/* ===== FINAL CALL TO ACTION ===== */}
            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2>Secure Your Workshop Spot Today</h2>
                <p>
                  Don't miss this exclusive opportunity to learn about breakthrough CoreLift™ pelvic health treatments 
                  and potentially win $2,000 in Emsella therapy. Limited seating available.
                </p>
                <div className={styles.ctaButtons}>
                  <a 
                    href="https://www.eventbrite.com/e/corelifttm-pelvic-health-recovery-workshop-tickets-1440010172189?aff=oddtdtcreator"
                    className={styles.primaryButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register on Eventbrite
                  </a>
                  <a 
                    href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/s/JXViZb_ifkCITve3oXJP-Q2?ismsaljsauthenabled"
                    className={styles.secondaryButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Pre-Screening Now
                  </a>
                </div>
                <div className={styles.contactInfo}>
                  <p>Questions? Call us at <strong>816-427-5320</strong></p>
                  <p>Garcia Family Medicine • 801 NW St. Mary Drive, Blue Springs, MO</p>
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