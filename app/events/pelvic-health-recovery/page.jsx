'use client';

import { useState, useEffect } from 'react';
import styles from './pelvic-health-recovery.module.css';
import Header from '../../../components/header/header.jsx';
import Footer from '../../../components/footer/footer.jsx';

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    {
      src: "/images/events/pelvic-health-recovery/event-01.png",
      alt: "CoreLift Pelvic Health Recovery Workshop at Garcia Family Medicine"
    },
    {
      src: "/images/events/pelvic-health-recovery/event-02.png",
      alt: "$2000 Treatment Giveaway for CoreLift Emsella Sessions"
    },
    {
      src: "/images/events/pelvic-health-recovery/event-03.png",
      alt: "Dr. Gigi Garcia presenting CoreLift technology demonstration"
    },
    {
      src: "/images/events/pelvic-health-recovery/event-04.png",
      alt: "Educational workshop on pelvic health and Emsella treatments"
    },
    {
      src: "/images/events/pelvic-health-recovery/event-05.png",
      alt: "CoreLift therapy consultation and treatment planning session"
    }
  ];

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
          <div className={styles.pageHeader}>
            <h1>
              <a 
                href="https://www.eventbrite.com/e/corelifttm-pelvic-health-recovery-workshop-tickets-1440010172189?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                CoreLift™ Pelvic Health Recovery Workshop
              </a>
            </h1>
            <p className={styles.subtitle}>Educational Workshop & $2,000 Treatment Giveaway</p>
            <div className={styles.eventBadge}>
              July 31st, 2025 •{' '}
              <a 
                href="https://maps.app.goo.gl/J5KWPCvSxd2X51Au5"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                Blue Springs, MO
              </a>
            </div>
          </div>
          
          <div className={styles.contentArea}>
            <section className={styles.heroSection}>
              <div className={styles.heroContent}>
                <div className={styles.heroText}>
                  <h2>Win a Complete CoreLift™ Pelvic Health Recovery Package</h2>
                  <a 
                    href="https://www.eventbrite.com/e/corelifttm-pelvic-health-recovery-workshop-tickets-1440010172189?aff=oddtdtcreator"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className={styles.valueHighlight}>
                      <span className={styles.valueAmount}>$2,000</span>
                      <span className={styles.valueLabel}>Giveaway Entry</span>
                    </div>
                  </a>
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
                  <div className={styles.carousel}>
                    <div className={styles.carouselContainer}>
                      <a 
                        href="https://www.eventbrite.com/e/corelifttm-pelvic-health-recovery-workshop-tickets-1440010172189?aff=oddtdtcreator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.carouselImageLink}
                      >
                        <img 
                          src={carouselImages[currentImageIndex].src}
                          alt={carouselImages[currentImageIndex].alt}
                          className={styles.heroImageActual}
                        />
                      </a>
                      
                      {carouselImages.length > 1 && (
                        <>
                          <button 
                            className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
                            onClick={goToPrevious}
                            aria-label="Previous image"
                          >
                            ‹
                          </button>
                          <button 
                            className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
                            onClick={goToNext}
                            aria-label="Next image"
                          >
                            ›
                          </button>
                        </>
                      )}
                    </div>
                    
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
                    <a 
                      href="https://maps.app.goo.gl/J5KWPCvSxd2X51Au5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.detailItemLink}
                    >
                      <div className={styles.detailIcon}>📍</div>
                      <div className={styles.detailContent}>
                        <div className={styles.detailLabel}>Location</div>
                        <div className={styles.detailValue}>
                          Garcia Family Medicine<br/>
                          801 NW St. Mary Drive<br/>
                          Blue Springs, MO 64015
                        </div>
                      </div>
                    </a>
                  </div>
                  
                  <div className={styles.detailItem}>
                    <a 
                      href="https://www.eventbrite.com/e/corelifttm-pelvic-health-recovery-workshop-tickets-1440010172189?aff=oddtdtcreator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.detailItemLink} ${styles.prizeCardLink}`}
                    >
                      <div className={`${styles.detailIcon} ${styles.prizeIcon}`}>🎁</div>
                      <div className={styles.detailContent}>
                        <div className={styles.detailLabel}>Enter Giveaway</div>
                        <div className={`${styles.detailValue} ${styles.prizeValue}`}>
                          Win $2,000 in<br/>
                          CoreLift™ Treatments
                        </div>
                      </div>
                    </a>
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
                      href="https://www.facebook.com/events/2727449114115945"
                      className={styles.secondaryButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📘 View Facebook Event
                    </a>
                    <a 
                      href="tel:816-427-5320"
                      className={styles.secondaryButton}
                    >
                      📞 Call to Register
                    </a>
                  </div>
                  <p className={styles.registrationNote}>
                    Free workshop registration •{' '}
                    <a 
                      href="https://www.eventbrite.com/e/corelifttm-pelvic-health-recovery-workshop-tickets-1440010172189?aff=oddtdtcreator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.inlineLink}
                    >
                      Click here to enter $2,000 giveaway
                    </a>{' '}
                    • Limited seating available
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
            
            <section className={styles.twoColumnSection}>
              <a 
                href="https://garciafamilymedicine.care/corelift"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.columnLeft}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div>
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
              </a>
              
              <a 
                href="https://garciafamilymedicine.care/care/pelvichealth/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.columnRight}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div>
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
              </a>
            </section>
            
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
            </section>

            <section className={styles.testimonialsSection}>
              <h2>CoreLift™ Success Stories</h2>
              <div className={styles.testimonialGrid}>
                <a 
                  href="https://www.google.com/search?sca_esv=9ae922c597ea1563&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8a3F72hoPrNHfHDelrDCL-iNDi2WbKi0GVxsVTc9GiWFPNwNQS3aXYQ6yo7e1zHAEuh-e0g4nUCssyPBMnwuj_zY_OOZICDO_UweNjft1Vog7bNhg%3D%3D&q=Garcia+Family+Medicine+Reviews&sa=X&ved=2ahUKEwiu0MDB8qaOAxXFnCYFHVSyGhwQ0bkNegQIKBAE&biw=1912&bih=970&dpr=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.testimonial}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className={styles.testimonialContent}>
                    After completing my CoreLift™ treatment series, I experienced a 70% 
                    reduction in incontinence episodes. My quality of life has dramatically improved 
                    and I feel like myself again.
                  </div>
                  <div className={styles.testimonialAuthor}>Sarah M., Age 45</div>
                </a>
                
                <a 
                  href="https://www.google.com/search?sca_esv=9ae922c597ea1563&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8a3F72hoPrNHfHDelrDCL-iNDi2WbKi0GVxsVTc9GiWFPNwNQS3aXYQ6yo7e1zHAEuh-e0g4nUCssyPBMnwuj_zY_OOZICDO_UweNjft1Vog7bNhg%3D%3D&q=Garcia+Family+Medicine+Reviews&sa=X&ved=2ahUKEwiu0MDB8qaOAxXFnCYFHVSyGhwQ0bkNegQIKBAE&biw=1912&bih=970&dpr=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.testimonial}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className={styles.testimonialContent}>
                    I was initially skeptical about Emsella, but CoreLift™ exceeded my expectations. 
                    No more interruptions during activities I love. The convenience was amazing.
                  </div>
                  <div className={styles.testimonialAuthor}>Jennifer L., Age 38</div>
                </a>
                
                <a 
                  href="https://www.google.com/search?sca_esv=9ae922c597ea1563&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8a3F72hoPrNHfHDelrDCL-iNDi2WbKi0GVxsVTc9GiWFPNwNQS3aXYQ6yo7e1zHAEuh-e0g4nUCssyPBMnwuj_zY_OOZICDO_UweNjft1Vog7bNhg%3D%3D&q=Garcia+Family+Medicine+Reviews&sa=X&ved=2ahUKEwiu0MDB8qaOAxXFnCYFHVSyGhwQ0bkNegQIKBAE&biw=1912&bih=970&dpr=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.testimonial}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className={styles.testimonialContent}>
                    The treatment was comfortable and convenient. I could read during 
                    sessions and noticed significant improvements within just a few weeks.
                  </div>
                  <div className={styles.testimonialAuthor}>Maria R., Age 52</div>
                </a>
              </div>
            </section>

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
                    🎁 RSVP & Enter Giveaway
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
                  <p>Questions? Call us at <a href="tel:816-427-5320"><strong>816-427-5320</strong></a></p>
                  <p>
                    <a 
                      href="https://maps.app.goo.gl/J5KWPCvSxd2X51Au5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.inlineLink}
                    >
                      Garcia Family Medicine • 801 NW St. Mary Drive, Blue Springs, MO
                    </a>
                  </p>
                </div>
              </div>
            </section>

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
                          IG
                        </a>
                        <a 
                          href="https://www.facebook.com/hashtag/corelift" 
                          className={styles.socialHashtag}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on Facebook"
                        >
                          FB
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
                          IG
                        </a>
                        <a 
                          href="https://www.facebook.com/hashtag/pelvichealthjourney" 
                          className={styles.socialHashtag}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on Facebook"
                        >
                          FB
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
                          IG
                        </a>
                        <a 
                          href="https://www.facebook.com/hashtag/emsella" 
                          className={styles.socialHashtag}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on Facebook"
                        >
                          FB
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
                          IG
                        </a>
                        <a 
                          href="https://www.facebook.com/hashtag/strongercore" 
                          className={styles.socialHashtag}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on Facebook"
                        >
                          FB
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.socialProfiles}>
                  <p>Follow Garcia Family Medicine for health tips and workshop updates:</p>
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