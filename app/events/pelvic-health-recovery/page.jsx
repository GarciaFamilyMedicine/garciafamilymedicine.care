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
            <h1>🩵 Reclaim Your Confidence! 🩵</h1>
            <p className={styles.subtitle}>Pelvic Health Recovery Workshop & Giveaway Event</p>
          </div>
          
          {/* ===== MAIN CONTENT AREA ===== */}
          <div className={styles.contentArea}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
              <div className={styles.heroContent}>
                <div className={styles.heroText}>
                  <h2>Win a Pelvic Health Recovery Package</h2>
                  <div className={styles.valueTag}>$3,000 Value</div>
                  <p className={styles.lead}>
                    Suffering from incontinence or erectile dysfunction? Enter our giveaway for a 
                    chance to win 6 complete Emsella treatments to help restore your pelvic health 
                    and confidence.
                  </p>
                  <div className={styles.winnerAnnouncement}>
                    <strong>Winner will be announced live at the event!</strong> 
                    You must register to be eligible for the giveaway.
                  </div>
                </div>
                <div className={styles.heroImage}>
                  <div className={styles.imagePlaceholder}>
                    <span>Emsella Treatment Chair</span>
                    <p>Revolutionary Non-Invasive Therapy</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* ===== EVENT DETAILS SECTION ===== */}
            <section className={styles.eventDetailsSection}>
              <div className={styles.eventCard}>
                <div className={styles.eventIcon}>📅</div>
                <div className={styles.eventInfo}>
                  <h3>Pelvic Health Recovery Event</h3>
                  <div className={styles.eventDate}>July 7th, 2025</div>
                  <div className={styles.eventTime}>11:00 AM – 7:00 PM</div>
                  <div className={styles.eventLocation}>
                    <strong>Location:</strong> Garcia Family Medicine<br/>
                    801 NW St. Mary Drive, Blue Springs, MO
                  </div>
                </div>
              </div>
              
              <div className={styles.ctaButtons}>
                <a 
                  href="https://forms.cloud.microsoft/r/PmYN6fxyAT"
                  className={styles.primaryButton}
                  target="_self"
                  rel="noopener"
                >
                  Register Now - Free Entry
                </a>
                <a 
                  href="tel:816-427-5320"
                  className={styles.secondaryButton}
                >
                  Call to Register: 816-427-5320
                </a>
              </div>
            </section>
            
            {/* ===== TWO COLUMN CONTENT ===== */}
            <section className={styles.twoColumnSection}>
              <div className={styles.columnLeft}>
                <h3>About Emsella Treatment</h3>
                <p>
                  Emsella is a revolutionary, non-invasive treatment that uses high-intensity 
                  focused electromagnetic (HIFEM) technology to strengthen pelvic floor muscles. 
                  This FDA-approved treatment helps restore confidence and improve quality of life.
                </p>
                <ul className={styles.featureList}>
                  <li>Non-invasive, fully clothed treatment</li>
                  <li>28-minute sessions with no downtime</li>
                  <li>Equivalent to 11,000 Kegel exercises per session</li>
                  <li>95% patient satisfaction rate</li>
                  <li>Clinically proven results</li>
                </ul>
              </div>
              
              <div className={styles.columnRight}>
                <h3>Who Can Benefit?</h3>
                <p>
                  Our Pelvic Health Recovery Package is designed for adults experiencing 
                  pelvic floor dysfunction, including both men and women dealing with 
                  various intimate health concerns.
                </p>
                <div className={styles.benefitsCard}>
                  <h4>Conditions Treated:</h4>
                  <ul className={styles.conditionsList}>
                    <li><strong>Stress Urinary Incontinence</strong> - Leakage during physical activity</li>
                    <li><strong>Urge Incontinence</strong> - Sudden, strong urges to urinate</li>
                    <li><strong>Erectile Dysfunction</strong> - Difficulty achieving/maintaining erection</li>
                    <li><strong>Pelvic Organ Prolapse</strong> - Weakened pelvic support</li>
                    <li><strong>Postpartum Recovery</strong> - Restoring strength after childbirth</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* ===== FULL WIDTH EVENT SCHEDULE ===== */}
            <section className={styles.fullWidthSection}>
              <h2>Event Schedule & Activities</h2>
              <p>
                Join us for a full day of education, demonstrations, and the chance to win 
                life-changing pelvic health treatments.
              </p>
              
              <div className={styles.scheduleGrid}>
                <div className={styles.timeSlot}>
                  <div className={styles.timeLabel}>11:00 AM - 12:00 PM</div>
                  <h4>Welcome & Registration</h4>
                  <p>Check-in, meet our team, and learn about pelvic health basics</p>
                </div>
                <div className={styles.timeSlot}>
                  <div className={styles.timeLabel}>12:00 PM - 2:00 PM</div>
                  <h4>Emsella Demonstrations</h4>
                  <p>Live treatment demonstrations and Q&A with Dr. Gigi Garcia</p>
                </div>
                <div className={styles.timeSlot}>
                  <div className={styles.timeLabel}>2:00 PM - 4:00 PM</div>
                  <h4>Educational Workshops</h4>
                  <p>Pelvic floor exercises, lifestyle tips, and wellness strategies</p>
                </div>
                <div className={styles.timeSlot}>
                  <div className={styles.timeLabel}>4:00 PM - 6:00 PM</div>
                  <h4>Individual Consultations</h4>
                  <p>Private consultations with our pelvic health specialists</p>
                </div>
                <div className={styles.timeSlot}>
                  <div className={styles.timeLabel}>6:00 PM - 7:00 PM</div>
                  <h4>Winner Announcement!</h4>
                  <p>Live drawing for the $3,000 Pelvic Health Recovery Package</p>
                </div>
              </div>
            </section>
            
            {/* ===== TESTIMONIALS SECTION ===== */}
            <section className={styles.testimonialsSection}>
              <h2>Real Results from Real Patients</h2>
              <div className={styles.testimonialGrid}>
                <div className={styles.testimonial}>
                  <div className={styles.quote}>"After just 3 sessions, I noticed a significant improvement. By the end of my 6-session package, my confidence was completely restored!"</div>
                  <div className={styles.author}>— Sarah M., Age 45</div>
                </div>
                <div className={styles.testimonial}>
                  <div className={styles.quote}>"I was skeptical at first, but Emsella changed my life. No more embarrassing leaks during exercise or laughing with friends."</div>
                  <div className={styles.author}>— Jennifer L., Age 38</div>
                </div>
                <div className={styles.testimonial}>
                  <div className={styles.quote}>"The treatment was comfortable and convenient. I could read a book during sessions and saw results within weeks."</div>
                  <div className={styles.author}>— Maria R., Age 52</div>
                </div>
              </div>
            </section>
            
            {/* ===== FINAL CALL TO ACTION ===== */}
            <section className={styles.finalCtaSection}>
              <div className={styles.ctaContent}>
                <h2>Don't Miss Your Chance to Win!</h2>
                <p>
                  Registration is free and takes less than 2 minutes. You must be present 
                  at the event to win, and registration closes at 6:00 PM on July 7th.
                </p>
                <div className={styles.urgencyMessage}>
                  <strong>Limited spots available!</strong> Reserve your place today.
                </div>
                <div className={styles.finalButtons}>
                  <a 
                    href="https://forms.cloud.microsoft/r/PmYN6fxyAT"
                    className={styles.primaryButton}
                    target="_self"
                    rel="noopener"
                  >
                    Register for Free Entry
                  </a>
                  <a 
                    href="tel:816-427-5320"
                    className={styles.phoneButton}
                  >
                    📞 Call Now: 816-427-5320
                  </a>
                </div>
                
                <div className={styles.socialSection}>
                  <p>Follow us for more health tips & updates:</p>
                  <div className={styles.socialLinks}>
                    <a href="https://instagram.com/garciafamilymedicine" target="_blank" rel="noopener noreferrer">
                      📱 Instagram
                    </a>
                    <a href="https://facebook.com/garciafamilymedicine" target="_blank" rel="noopener noreferrer">
                      👥 Facebook
                    </a>
                  </div>
                  
                  <div className={styles.hashtags}>
                    <span>#PelvicHealthRecovery</span>
                    <span>#Emsella</span>
                    <span>#GarciaFamilyMedicine</span>
                    <span>#IncontinenceRelief</span>
                    <span>#EDHelp</span>
                    <span>#ConfidenceRestored</span>
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