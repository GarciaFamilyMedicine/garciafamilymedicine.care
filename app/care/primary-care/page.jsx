'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import styles from '../service.module.css';

export default function PrimaryCare() {
  return (
    <div className={`${styles.servicePageContainer} ${styles.container}`}>
      <Header />
      
      <main className={styles.mainContent}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Primary Care Services</h1>
            <p className={styles.heroSubtitle}>
              Your First Step to Better Health - Comprehensive Medical Care for All Ages
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Your Medical Home in Blue Springs</h2>
            
            <p className={styles.paragraph}>
              At Garcia Family Medicine, we serve as your primary healthcare partner, providing continuous, 
              comprehensive medical care that addresses your immediate health needs while focusing on long-term 
              wellness. Our primary care services form the foundation of your healthcare journey, offering 
              preventive care, health maintenance, and treatment for acute and chronic conditions.
            </p>

            <h2 className={styles.sectionTitle}>What is Primary Care?</h2>
            
            <p className={styles.paragraph}>
              Primary care is your first point of contact for all non-emergency health concerns. Dr. Tess Garcia 
              and our team provide coordinated care that considers your complete health picture, including physical, 
              mental, and emotional well-being. We build lasting relationships with our patients, allowing us to 
              understand your unique health history, lifestyle, and goals.
            </p>

            <div className={styles.servicesList}>
              <h3 className={styles.listTitle}>Our Primary Care Services Include:</h3>
              <ul className={styles.bulletList}>
                <li>Annual physical examinations and health assessments</li>
                <li>Diagnosis and treatment of acute illnesses</li>
                <li>Management of chronic conditions</li>
                <li>Preventive care and health screenings</li>
                <li>Immunizations and vaccinations</li>
                <li>Health education and lifestyle counseling</li>
                <li>Referrals to specialists when needed</li>
                <li>Coordination of care across healthcare providers</li>
              </ul>
            </div>

            <h2 className={styles.sectionTitle}>Common Conditions We Treat</h2>
            
            <div className={styles.servicesList}>
              <ul className={styles.bulletList}>
                <li>Cold, flu, and respiratory infections</li>
                <li>Allergies and asthma</li>
                <li>Diabetes and metabolic disorders</li>
                <li>High blood pressure and heart disease</li>
                <li>Thyroid disorders</li>
                <li>Digestive issues</li>
                <li>Skin conditions</li>
                <li>Mental health concerns</li>
                <li>Minor injuries and wounds</li>
              </ul>
            </div>

            <h2 className={styles.sectionTitle}>Personalized Care Plans</h2>
            
            <p className={styles.paragraph}>
              We believe that effective primary care is personalized care. During your visits, we take time to 
              listen to your concerns, understand your health goals, and develop customized treatment plans that 
              fit your lifestyle. Our approach combines evidence-based medicine with compassionate care, ensuring 
              you receive the most appropriate and effective treatments.
            </p>

            <h2 className={styles.sectionTitle}>Building Long-Term Health</h2>
            
            <p className={styles.paragraph}>
              Primary care is about more than treating illness—it's about building and maintaining optimal health 
              throughout your life. We focus on preventive measures, early detection of potential health issues, 
              and ongoing management of chronic conditions. By establishing a strong primary care relationship, 
              you'll have a trusted healthcare partner who knows your history and can guide you through all of 
              life's health challenges.
            </p>

            <div className={styles.ctaSection}>
              <h2 className={styles.ctaTitle}>Start Your Healthcare Journey Today</h2>
              <p className={styles.ctaDescription}>
                Experience the difference of personalized primary care with a team that truly cares about your health.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.primaryButton}>
                  Become a Patient
                </Link>
                <Link href="tel:816-427-5320" className={styles.secondaryButton}>
                  Call (816) 427-5320
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}