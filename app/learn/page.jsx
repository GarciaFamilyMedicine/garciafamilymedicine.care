'use client';

import styles from './service.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import { FaBook, FaHeartbeat, FaBrain, FaUserMd, FaAppleAlt, FaRunning } from 'react-icons/fa';

export default function LearnMainPage() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Health Education Library</h1>
            <p className={styles.heroSubtitle}>Comprehensive Health Information and Wellness Education</p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introSection}>
            <div className={styles.container}>
              <p className={styles.leadText}>
                Empower yourself with knowledge about your health. Our comprehensive health education library provides evidence-based information to help you make informed decisions about your wellness journey.
              </p>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>General Health Topics</h2>
              <p className={styles.sectionSubtitle}>Essential health information and wellness education</p>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaUserMd className={styles.serviceIcon} />
                  <h3><Link href="/learn/family-medicine">Family Medicine</Link></h3>
                  <p>Comprehensive family healthcare basics</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeartbeat className={styles.serviceIcon} />
                  <h3><Link href="/learn/primary-care">Primary Care</Link></h3>
                  <p>Your first line of healthcare defense</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaRunning className={styles.serviceIcon} />
                  <h3><Link href="/learn/preventive-care">Preventive Care</Link></h3>
                  <p>Staying healthy through prevention</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaBook className={styles.serviceIcon} />
                  <h3><Link href="/learn/wellness-exams">Wellness Exams</Link></h3>
                  <p>Annual health check-up importance</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeartbeat className={styles.serviceIcon} />
                  <h3><Link href="/learn/chronic-disease">Chronic Disease</Link></h3>
                  <p>Managing long-term health conditions</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaBrain className={styles.serviceIcon} />
                  <h3><Link href="/learn/mental-health">Mental Health</Link></h3>
                  <p>Understanding mental wellness</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeartbeat className={styles.serviceIcon} />
                  <h3><Link href="/learn/pain-management">Pain Management</Link></h3>
                  <p>Understanding pain and relief strategies</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaAppleAlt className={styles.serviceIcon} />
                  <h3><Link href="/learn/weight-management">Weight Management</Link></h3>
                  <p>Healthy weight and nutrition science</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Specialized Care Topics</h2>
              <p className={styles.sectionSubtitle}>Focused health education for specific needs</p>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaHeartbeat className={styles.serviceIcon} />
                  <h3><Link href="/learn/womens-health">Women's Health</Link></h3>
                  <p>Health topics specific to women</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeartbeat className={styles.serviceIcon} />
                  <h3><Link href="/learn/mens-health">Men's Health</Link></h3>
                  <p>Health topics specific to men</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaBook className={styles.serviceIcon} />
                  <h3><Link href="/learn/pediatric-care">Pediatric Care</Link></h3>
                  <p>Children's health and development</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeartbeat className={styles.serviceIcon} />
                  <h3><Link href="/learn/pelvichealth">Pelvic Health</Link></h3>
                  <p>Understanding pelvic floor health</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaUserMd className={styles.serviceIcon} />
                  <h3><Link href="/learn/veterans">Veteran Healthcare</Link></h3>
                  <p>Health resources for veterans</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaBook className={styles.serviceIcon} />
                  <h3><Link href="/learn/dot-certifications">DOT Certifications</Link></h3>
                  <p>Commercial driver health requirements</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaUserMd className={styles.serviceIcon} />
                  <h3><Link href="/learn/independent-medical-examinations">IME Information</Link></h3>
                  <p>Understanding medical examinations</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.approachSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Why Health Education Matters</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <h3>Informed Decision Making</h3>
                  <p>Understanding your health conditions and treatment options helps you make better decisions about your care with your healthcare team.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Prevention Focus</h3>
                  <p>Learning about prevention strategies can help you avoid health problems before they start, leading to better long-term outcomes.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Better Communication</h3>
                  <p>Health literacy improves your ability to communicate effectively with healthcare providers and ask the right questions.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Self-Management Skills</h3>
                  <p>Education empowers you to better manage chronic conditions and maintain healthy lifestyle choices independently.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.faqSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>About Our Health Education</h2>
              <div className={styles.faqGrid}>
                <div className={styles.faqItem}>
                  <h3>Is this information medically reviewed?</h3>
                  <p>Yes, all health education content is reviewed by Dr. Garcia and reflects current medical evidence and best practices.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Can this replace medical advice?</h3>
                  <p>No, this educational content is for informational purposes only. Always consult with healthcare providers for personalized medical advice.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>How often is content updated?</h3>
                  <p>We regularly review and update our health education materials to ensure they reflect the most current medical guidelines and research.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Do you have specific questions?</h3>
                  <p>For medical services and appointments, visit Our Services. For specific health questions, consider scheduling a consultation.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}