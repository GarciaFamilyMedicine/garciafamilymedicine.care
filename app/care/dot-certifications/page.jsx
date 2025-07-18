'use client';

import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function DOTCertificationsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                DOT Medical Certifications
              </h1>
              <p className={styles.heroSubtitle}>
                Professional DOT medical examinations by FMCSA certified medical examiner Dr. Tess Garcia
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Schedule Exam: 816-427-5320
                </a>
                <a href="#requirements" className={styles.secondaryButton}>
                  Learn More
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.certificationBadge}>
                <div className={styles.badgeIcon}>🚛</div>
                <div className={styles.badgeText}>
                  <span>FMCSA</span>
                  <span>Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className={styles.quickInfo}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>⏱️</div>
                <h3>30-45 Minutes</h3>
                <p>Quick, efficient examinations</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📋</div>
                <h3>Same Day</h3>
                <p>Appointments available</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>✅</div>
                <h3>2-Year Certs</h3>
                <p>Most drivers qualify</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🌐</div>
                <h3>Nationwide</h3>
                <p>Valid in all states</p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section id="requirements" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Who Needs DOT Medical Certification?</h2>
              <p>Federal law requires medical certification for commercial drivers</p>
            </div>
            <div className={styles.contentGrid}>
              <div className={styles.requirementsList}>
                <h3>Required For:</h3>
                <ul>
                  <li>Commercial vehicles over 10,000 pounds</li>
                  <li>Vehicles transporting hazardous materials</li>
                  <li>Vehicles designed for 16+ passengers</li>
                  <li>Interstate commercial driving</li>
                  <li>School bus and transit operators</li>
                </ul>
              </div>
              <div className={styles.bringList}>
                <h3>What to Bring:</h3>
                <ul>
                  <li>Valid driver's license</li>
                  <li>Current medication list</li>
                  <li>Glasses/contacts if worn</li>
                  <li>Hearing aids if used</li>
                  <li>Relevant medical records</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2>Simple 4-Step Process</h2>
            <div className={styles.processGrid}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Schedule</h3>
                <p>Call 816-427-5320 to book your appointment</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Complete Forms</h3>
                <p>Fill out medical history questionnaire</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Physical Exam</h3>
                <p>Comprehensive health assessment</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Get Certified</h3>
                <p>Receive your medical certificate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Details Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.examDetails}>
              <div className={styles.examContent}>
                <h2>Comprehensive Medical Examination</h2>
                <p>Our DOT medical examination covers all federally required health assessments:</p>
                <div className={styles.examGrid}>
                  <div className={styles.examCategory}>
                    <h4>Vision & Hearing</h4>
                    <ul>
                      <li>Visual acuity testing</li>
                      <li>Peripheral vision</li>
                      <li>Color recognition</li>
                      <li>Hearing assessment</li>
                    </ul>
                  </div>
                  <div className={styles.examCategory}>
                    <h4>Cardiovascular</h4>
                    <ul>
                      <li>Blood pressure check</li>
                      <li>Heart rate monitoring</li>
                      <li>Cardiac assessment</li>
                      <li>Circulation evaluation</li>
                    </ul>
                  </div>
                  <div className={styles.examCategory}>
                    <h4>General Health</h4>
                    <ul>
                      <li>Diabetes screening</li>
                      <li>Neurological exam</li>
                      <li>Respiratory function</li>
                      <li>Mental health review</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}