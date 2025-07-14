'use client';

import styles from './independence-day.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function Page() {
  return (
    <>
      <Header />
      
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>
          {/* ===== PAGE HEADER ===== */}
          <div className={styles.pageHeader}>
            <h1>Independence Day Celebration</h1>
            <p className={styles.subtitle}>July 4th - Freedom & Liberty</p>
          </div>
          
          {/* ===== MAIN CONTENT AREA ===== */}
          <div className={styles.contentArea}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
              <div className={styles.heroContent}>
                <div className={styles.heroText}>
                  <h2>Celebrating American Independence</h2>
                  <p className={styles.lead}>
                    Join us in commemorating the birth of our nation and the principles of 
                    life, liberty, and the pursuit of happiness. We honor our founding fathers 
                    and celebrate the freedoms we cherish today.
                  </p>
                </div>
                <div className={styles.heroImage}>
                  <div className={styles.imagePlaceholder}>
                    <span>🇺🇸 Independence Day Celebration 🇺🇸</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* ===== TWO COLUMN CONTENT ===== */}
            <section className={styles.twoColumnSection}>
              <div className={styles.columnLeft}>
                <h3>Historical Significance</h3>
                <p>
                  Independence Day commemorates July 4, 1776, when the Continental Congress 
                  approved the Declaration of Independence, marking our nation's bold step 
                  toward freedom and self-governance.
                </p>
                <ul className={styles.featureList}>
                  <li>Celebrates the founding of our nation</li>
                  <li>Honors the principles of liberty and justice</li>
                  <li>Brings communities together in patriotic unity</li>
                </ul>
              </div>
              
              <div className={styles.columnRight}>
                <h3>Health & Wellness Focus</h3>
                <p>
                  At Garcia Family Medicine, we believe in the fundamental right to health 
                  and wellness for all Americans. Freedom includes the freedom to live 
                  healthy, fulfilling lives.
                </p>
                <div className={styles.card}>
                  <h4>Our Independence Day Promise</h4>
                  <p>Providing accessible, quality healthcare that supports every American's 
                  pursuit of life, liberty, and happiness through optimal health.</p>
                </div>
              </div>
            </section>
            
            {/* ===== FULL WIDTH CONTENT ===== */}
            <section className={styles.fullWidthSection}>
              <h2>Celebrate Safely & Patriotically</h2>
              <p>
                Independence Day is a time for celebration, reflection, and community. 
                Here are meaningful ways to honor this important holiday safely.
              </p>
              
              <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                  <div className={styles.gridIcon}>🎆</div>
                  <h4>Fireworks Safety</h4>
                  <p>Enjoy professional displays and follow safety guidelines for personal fireworks</p>
                </div>
                <div className={styles.gridItem}>
                  <div className={styles.gridIcon}>🏛️</div>
                  <h4>Learn History</h4>
                  <p>Explore the founding documents and stories of American independence</p>
                </div>
                <div className={styles.gridItem}>
                  <div className={styles.gridIcon}>🍉</div>
                  <h4>Healthy BBQ</h4>
                  <p>Enjoy traditional summer foods with healthy twists and hydration</p>
                </div>
                <div className={styles.gridItem}>
                  <div className={styles.gridIcon}>🤝</div>
                  <h4>Community Unity</h4>
                  <p>Participate in parades and events that bring neighbors together</p>
                </div>
              </div>
            </section>
            
            {/* ===== CALL TO ACTION ===== */}
            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2>Freedom to Live Your Healthiest Life</h2>
                <p>
                  This Independence Day, celebrate your freedom to prioritize your health. 
                  Schedule your appointment for comprehensive, compassionate care.
                </p>
                <div className={styles.ctaButtons}>
                  <button className={styles.primaryButton}>Schedule Appointment</button>
                  <button className={styles.secondaryButton}>Learn More</button>
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