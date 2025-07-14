'use client';

import styles from './juneteenth.module.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

export default function Page() {
  return (
    <>
      <Header />
      
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>
          {/* ===== PAGE HEADER ===== */}
          <div className={styles.pageHeader}>
            <h1>Juneteenth Celebration</h1>
            <p className={styles.subtitle}>June 19th - Freedom Day</p>
          </div>
          
          {/* ===== MAIN CONTENT AREA ===== */}
          <div className={styles.contentArea}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.heroSection}>
              <div className={styles.heroContent}>
                <div className={styles.heroText}>
                  <h2>Celebrating Freedom & Community Health</h2>
                  <p className={styles.lead}>
                    Join us in honoring Juneteenth, the day that commemorates the end of slavery 
                    in the United States. We celebrate freedom, community, and our commitment to 
                    health equity for all.
                  </p>
                </div>
                <div className={styles.heroImage}>
                  <div className={styles.imagePlaceholder}>
                    <span>Juneteenth Celebration Image</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* ===== TWO COLUMN CONTENT ===== */}
            <section className={styles.twoColumnSection}>
              <div className={styles.columnLeft}>
                <h3>About Juneteenth</h3>
                <p>
                  Juneteenth marks June 19, 1865, when news of emancipation finally reached 
                  enslaved African Americans in Texas. This day represents freedom, resilience, 
                  and the ongoing journey toward equality.
                </p>
                <ul className={styles.featureList}>
                  <li>Commemorates the end of slavery in America</li>
                  <li>Celebrates African American culture and achievements</li>
                  <li>Promotes community unity and understanding</li>
                </ul>
              </div>
              
              <div className={styles.columnRight}>
                <h3>Health & Wellness Focus</h3>
                <p>
                  At Garcia Family Medicine, we recognize the importance of addressing health 
                  disparities and promoting wellness in all communities.
                </p>
                <div className={styles.card}>
                  <h4>Our Commitment</h4>
                  <p>Providing compassionate, culturally-sensitive healthcare to all patients, 
                  regardless of background or circumstances.</p>
                </div>
              </div>
            </section>
            
            {/* ===== FULL WIDTH CONTENT ===== */}
            <section className={styles.fullWidthSection}>
              <h2>Ways to Celebrate</h2>
              <p>
                Juneteenth is a time for reflection, education, and community connection. 
                Here are meaningful ways to honor this important day.
              </p>
              
              <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                  <div className={styles.gridIcon}>📚</div>
                  <h4>Learn & Reflect</h4>
                  <p>Explore African American history and the ongoing impact of Juneteenth</p>
                </div>
                <div className={styles.gridItem}>
                  <div className={styles.gridIcon}>🤝</div>
                  <h4>Community Events</h4>
                  <p>Participate in local celebrations and cultural activities</p>
                </div>
                <div className={styles.gridItem}>
                  <div className={styles.gridIcon}>🍽️</div>
                  <h4>Traditional Foods</h4>
                  <p>Enjoy traditional dishes like red velvet cake and barbecue</p>
                </div>
                <div className={styles.gridItem}>
                  <div className={styles.gridIcon}>💪</div>
                  <h4>Support Health</h4>
                  <p>Focus on wellness and health equity in your community</p>
                </div>
              </div>
            </section>
            
            {/* ===== CALL TO ACTION ===== */}
            <section className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h2>Health Equity for All</h2>
                <p>
                  This Juneteenth, let's renew our commitment to health, wellness, and equality. 
                  Schedule your appointment today for compassionate, comprehensive care.
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