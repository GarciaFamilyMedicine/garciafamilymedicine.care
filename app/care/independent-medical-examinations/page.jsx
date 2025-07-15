'use client';

import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function IndependentMedicalExaminationsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Independent Medical Examinations
              </h1>
              <p className={styles.heroSubtitle}>
                Objective, comprehensive medical evaluations for legal, insurance, and workers' compensation cases
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Schedule IME: 816-427-5320
                </a>
                <a href="#services" className={styles.secondaryButton}>
                  Our Services
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.certificationBadge}>
                <div className={styles.badgeIcon}>⚖️</div>
                <div className={styles.badgeText}>
                  <span>Independent</span>
                  <span>Medical</span>
                  <span>Examiner</span>
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
                <div className={styles.infoIcon}>🔍</div>
                <h3>Objective</h3>
                <p>Unbiased medical evaluations</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📋</div>
                <h3>Comprehensive</h3>
                <p>Detailed medical reports</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>⏱️</div>
                <h3>Timely</h3>
                <p>Fast turnaround reports</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🏛️</div>
                <h3>Court Ready</h3>
                <p>Legal testimony available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Our IME Services</h2>
              <p>Professional medical evaluations for various legal and insurance needs</p>
            </div>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💼</div>
                <h3>Workers' Compensation</h3>
                <p>Evaluate work-related injuries and disability claims</p>
                <ul>
                  <li>Maximum medical improvement assessments</li>
                  <li>Permanent disability ratings</li>
                  <li>Return to work evaluations</li>
                  <li>Treatment necessity reviews</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🛡️</div>
                <h3>Personal Injury</h3>
                <p>Comprehensive evaluations for personal injury cases</p>
                <ul>
                  <li>Causation analysis</li>
                  <li>Injury severity assessment</li>
                  <li>Future medical needs</li>
                  <li>Impairment ratings</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏥</div>
                <h3>Disability Claims</h3>
                <p>Objective disability evaluations for insurance claims</p>
                <ul>
                  <li>Functional capacity evaluations</li>
                  <li>Disability determination</li>
                  <li>Treatment plan reviews</li>
                  <li>Prognosis assessments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2>Our IME Process</h2>
            <div className={styles.processGrid}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Initial Consultation</h3>
                <p>Discuss case details and examination requirements</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Records Review</h3>
                <p>Comprehensive review of all medical records</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Physical Examination</h3>
                <p>Thorough medical examination of the patient</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Report Generation</h3>
                <p>Detailed written report with findings and opinions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.expertiseContent}>
              <h2>Areas of Medical Expertise</h2>
              <p>Dr. Garcia provides independent medical examinations across multiple specialties:</p>
              <div className={styles.expertiseGrid}>
                <div className={styles.expertiseCategory}>
                  <h4>Orthopedic Conditions</h4>
                  <ul>
                    <li>Back and spine injuries</li>
                    <li>Joint and extremity injuries</li>
                    <li>Fractures and trauma</li>
                    <li>Repetitive strain injuries</li>
                  </ul>
                </div>
                <div className={styles.expertiseCategory}>
                  <h4>Occupational Medicine</h4>
                  <ul>
                    <li>Work-related injuries</li>
                    <li>Occupational diseases</li>
                    <li>Fitness for duty evaluations</li>
                    <li>Workplace accommodation needs</li>
                  </ul>
                </div>
                <div className={styles.expertiseCategory}>
                  <h4>General Medical</h4>
                  <ul>
                    <li>Chronic pain conditions</li>
                    <li>Neurological conditions</li>
                    <li>Cardiovascular conditions</li>
                    <li>Mental health evaluations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className={styles.qualificationsSection}>
          <div className={styles.container}>
            <div className={styles.qualificationsContent}>
              <h2>Professional Qualifications</h2>
              <div className={styles.qualificationsGrid}>
                <div className={styles.qualificationCard}>
                  <div className={styles.qualIcon}>🎓</div>
                  <h3>Medical Education</h3>
                  <p>Board-certified physician with extensive training in occupational and family medicine</p>
                </div>
                <div className={styles.qualificationCard}>
                  <div className={styles.qualIcon}>⚖️</div>
                  <h3>Legal Experience</h3>
                  <p>Years of experience providing expert testimony in legal proceedings</p>
                </div>
                <div className={styles.qualificationCard}>
                  <div className={styles.qualIcon}>📊</div>
                  <h3>IME Expertise</h3>
                  <p>Specialized training in independent medical evaluations and disability assessments</p>
                </div>
                <div className={styles.qualificationCard}>
                  <div className={styles.qualIcon}>🏛️</div>
                  <h3>Court Testimony</h3>
                  <p>Available for depositions and trial testimony when required</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Need an Independent Medical Examination?</h2>
              <p>Contact Garcia Family Medicine for objective, professional medical evaluations</p>
              <div className={styles.ctaButtons}>
                <a href="tel:816-427-5320" className={styles.ctaButton}>
                  Call Now: 816-427-5320
                </a>
              </div>
              <div className={styles.ctaInfo}>
                <div className={styles.clinicInfo}>
                  <h4>Garcia Family Medicine</h4>
                  <p>801 NW St. Mary Drive</p>
                  <p>Professional IME Services Available</p>
                  <p>Reports typically completed within 7-10 business days</p>
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