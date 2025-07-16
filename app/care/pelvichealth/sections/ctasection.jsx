'use client';
import styles from '../pelvichealth.module.css';
import { H2, P } from './typography';

export default function CTASection() {
  return (
    <section className={`${styles.ctaSection} ${styles.card} ${styles.enhancedCTA}`}>
      <div className={styles.ctaContent}>
        <div className={styles.ctaHeader}>
          <H2>Ready to Start Your Journey?</H2>
          <P style={{fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.95'}}>
            Take the first step toward better pelvic health today
          </P>
        </div>

        <div className={styles.ctaActions}>
          <a href="tel:816-426-5320" className={`${styles.ctaButton} ${styles.primaryButton}`}>
            <span className={styles.buttonIcon}>📞</span>
            <span className={styles.buttonText}>
              <span className={styles.buttonLabel}>Call Now</span>
              <span className={styles.buttonSubtext}>816-426-5320</span>
            </span>
          </a>
          
          <div className={styles.ctaSubtext}>
            <span>Garcia Family Medicine • Professional Pelvic Health Care</span>
          </div>
        </div>
      </div>
    </section>
  );
}