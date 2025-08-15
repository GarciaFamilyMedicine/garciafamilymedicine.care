'use client';

import styles from './wiki.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import { FaBook, FaHeart, FaBrain, FaUserMd, FaChild, FaBriefcaseMedical, FaStethoscope } from 'react-icons/fa';

export default function LearnWikiPage() {
  const quickLinks = [
    { href: '/learn/family-medicine', label: 'Family Medicine', icon: <FaUserMd /> },
    { href: '/learn/preventive-care', label: 'Preventive Care', icon: <FaHeart /> },
    { href: '/learn/mental-health', label: 'Mental Health', icon: <FaBrain /> },
    { href: '/learn/pediatric-care', label: 'Pediatric Care', icon: <FaChild /> },
    { href: '/learn/chronic-disease', label: 'Chronic Disease', icon: <FaStethoscope /> },
    { href: '/learn/womens-health', label: "Women's Health", icon: <FaBriefcaseMedical /> },
  ];

  return (
    <>
      <Header />
      <div className={styles.wikiPage}>
        <div className={styles.wikiContainer}>
          {/* Streamlined header */}
          <header className={styles.pageHeader}>
            <div className={styles.headerContent}>
              <h1 className={styles.pageTitle}>
                <FaBook className={styles.titleIcon} />
                Health Education Center
              </h1>
              <p className={styles.pageMeta}>
                Evidence-based medical information reviewed by our healthcare team
              </p>
            </div>
          </header>

          {/* Main content */}
          <main className={styles.content}>
            
            {/* Quick Access */}
            <section className={styles.quickAccess}>
              <div className={styles.quickGrid}>
                {quickLinks.map((link, index) => (
                  <Link key={index} href={link.href} className={styles.quickCard}>
                    <span className={styles.quickIcon}>{link.icon}</span>
                    <span className={styles.quickLabel}>{link.label}</span>
                  </Link>
                ))}
              </div>
            </section>


            {/* Featured Resources */}
            <section className={styles.featuredSection}>
              <h2 className={styles.sectionTitle}>Featured Resources</h2>
              <div className={styles.resourcesGrid}>
                <div className={styles.resourceCard}>
                  <h3>New Patient Guide</h3>
                  <p>Everything you need to know for your first visit</p>
                  <Link href="/learn/primary-care" className={styles.resourceLink}>Read Guide →</Link>
                </div>
                <div className={styles.resourceCard}>
                  <h3>Preventive Care Schedule</h3>
                  <p>Age-appropriate screenings and vaccinations</p>
                  <Link href="/learn/preventive-care" className={styles.resourceLink}>View Schedule →</Link>
                </div>
                <div className={styles.resourceCard}>
                  <h3>Chronic Care Management</h3>
                  <p>Tools and resources for managing chronic conditions</p>
                  <Link href="/learn/chronic-disease" className={styles.resourceLink}>Learn More →</Link>
                </div>
              </div>
            </section>

            {/* All Topics Grid */}
            <section className={styles.topicsSection}>
              <h2 className={styles.sectionTitle}>All Health Topics</h2>
              
              <div className={styles.topicsGrid}>
                {/* Primary Care */}
                <div className={styles.topicGroup}>
                  <h3 className={styles.groupTitle}>Primary & Preventive Care</h3>
                  <div className={styles.linkList}>
                    <Link href="/learn/family-medicine">Family Medicine</Link>
                    <Link href="/learn/primary-care">Primary Care Services</Link>
                    <Link href="/learn/preventive-care">Preventive Care</Link>
                    <Link href="/learn/wellness-exams">Wellness Exams</Link>
                  </div>
                </div>

                {/* Chronic Conditions */}
                <div className={styles.topicGroup}>
                  <h3 className={styles.groupTitle}>Chronic Conditions</h3>
                  <div className={styles.linkList}>
                    <Link href="/learn/chronic-disease">Disease Management</Link>
                    <Link href="/learn/pain-management">Pain Management</Link>
                    <Link href="/learn/mental-health">Mental Health</Link>
                    <Link href="/learn/weight-management">Weight Management</Link>
                  </div>
                </div>

                {/* Specialized Care */}
                <div className={styles.topicGroup}>
                  <h3 className={styles.groupTitle}>Specialized Care</h3>
                  <div className={styles.linkList}>
                    <Link href="/learn/womens-health">Women's Health</Link>
                    <Link href="/learn/mens-health">Men's Health</Link>
                    <Link href="/learn/pediatric-care">Pediatric Care</Link>
                    <Link href="/learn/pelvichealth">Pelvic Health</Link>
                  </div>
                </div>

                {/* Occupational */}
                <div className={styles.topicGroup}>
                  <h3 className={styles.groupTitle}>Occupational Health</h3>
                  <div className={styles.linkList}>
                    <Link href="/learn/veterans">Veteran Healthcare</Link>
                    <Link href="/learn/dot-certifications">DOT Certifications</Link>
                    <Link href="/learn/independent-medical-examinations">IME Services</Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Popular Articles */}
            <section className={styles.popularSection}>
              <h2 className={styles.sectionTitle}>Most Viewed Articles</h2>
              <div className={styles.articlesList}>
                <Link href="/learn/preventive-care" className={styles.articleItem}>
                  <span className={styles.articleNumber}>1</span>
                  <div className={styles.articleContent}>
                    <h4>Understanding Preventive Care</h4>
                    <p>Essential screenings and check-ups for every age</p>
                  </div>
                </Link>
                <Link href="/learn/mental-health" className={styles.articleItem}>
                  <span className={styles.articleNumber}>2</span>
                  <div className={styles.articleContent}>
                    <h4>Mental Health Basics</h4>
                    <p>Recognizing signs and seeking help</p>
                  </div>
                </Link>
                <Link href="/learn/chronic-disease" className={styles.articleItem}>
                  <span className={styles.articleNumber}>3</span>
                  <div className={styles.articleContent}>
                    <h4>Managing Chronic Conditions</h4>
                    <p>Living well with diabetes, hypertension, and more</p>
                  </div>
                </Link>
                <Link href="/learn/womens-health" className={styles.articleItem}>
                  <span className={styles.articleNumber}>4</span>
                  <div className={styles.articleContent}>
                    <h4>Women's Health Guide</h4>
                    <p>Comprehensive care through all life stages</p>
                  </div>
                </Link>
                <Link href="/learn/weight-management" className={styles.articleItem}>
                  <span className={styles.articleNumber}>5</span>
                  <div className={styles.articleContent}>
                    <h4>Healthy Weight Management</h4>
                    <p>Evidence-based strategies for lasting results</p>
                  </div>
                </Link>
              </div>
            </section>

            {/* Additional Resources */}
            <section className={styles.additionalSection}>
              <h2 className={styles.sectionTitle}>Additional Resources</h2>
              <div className={styles.linksGrid}>
                <div className={styles.linkGroup}>
                  <h3>Patient Forms</h3>
                  <Link href="/contact">New Patient Registration</Link>
                  <Link href="/contact">Medical History Form</Link>
                  <Link href="/contact">Insurance Information</Link>
                </div>
                <div className={styles.linkGroup}>
                  <h3>Health Tools</h3>
                  <Link href="/services">BMI Calculator</Link>
                  <Link href="/services">Symptom Checker</Link>
                  <Link href="/services">Medication Reminders</Link>
                </div>
                <div className={styles.linkGroup}>
                  <h3>Contact Us</h3>
                  <Link href="/contact">Schedule Appointment</Link>
                  <Link href="/contact">Patient Portal</Link>
                  <Link href="/meetthedoctor">Meet Dr. Garcia</Link>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}