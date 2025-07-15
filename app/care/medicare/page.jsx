'use client';

import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function MedicarePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Medicare Services
              </h1>
              <p className={styles.heroSubtitle}>
                Comprehensive Medicare-covered services with personalized care for seniors at Garcia Family Medicine
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Schedule Visit: 816-427-5320
                </a>
                <a href="#services" className={styles.secondaryButton}>
                  Medicare Services
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.certificationBadge}>
                <div className={styles.badgeIcon}>🏥</div>
                <div className={styles.badgeText}>
                  <span>Medicare</span>
                  <span>Provider</span>
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
                <div className={styles.infoIcon}>✅</div>
                <h3>Medicare Accepted</h3>
                <p>All Medicare plans welcome</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>👨‍⚕️</div>
                <h3>Senior Care</h3>
                <p>Specialized elderly medicine</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📋</div>
                <h3>Annual Wellness</h3>
                <p>Free yearly visits covered</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>💊</div>
                <h3>Medication Reviews</h3>
                <p>Comprehensive drug management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Medicare-Covered Services</h2>
              <p>Comprehensive healthcare services covered by Medicare at Garcia Family Medicine</p>
            </div>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🩺</div>
                <h3>Annual Wellness Visits</h3>
                <p>Comprehensive yearly health assessments</p>
                <ul>
                  <li>Personalized prevention plan</li>
                  <li>Health risk assessments</li>
                  <li>Cognitive assessment</li>
                  <li>Advanced care planning</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔬</div>
                <h3>Preventive Screenings</h3>
                <p>Medicare-covered preventive health screenings</p>
                <ul>
                  <li>Cancer screenings (mammogram, colonoscopy)</li>
                  <li>Cardiovascular screenings</li>
                  <li>Diabetes testing</li>
                  <li>Bone density scans</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💉</div>
                <h3>Immunizations</h3>
                <p>Essential vaccines covered by Medicare</p>
                <ul>
                  <li>Annual flu shots</li>
                  <li>Pneumonia vaccines</li>
                  <li>COVID-19 vaccinations</li>
                  <li>Shingles prevention</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🧠</div>
                <h3>Chronic Disease Management</h3>
                <p>Ongoing care for chronic conditions</p>
                <ul>
                  <li>Diabetes management</li>
                  <li>Hypertension monitoring</li>
                  <li>Heart disease care</li>
                  <li>Arthritis treatment</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏠</div>
                <h3>Care Coordination</h3>
                <p>Comprehensive care management services</p>
                <ul>
                  <li>Specialist referrals</li>
                  <li>Hospital follow-up</li>
                  <li>Medication reconciliation</li>
                  <li>Care transitions</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📱</div>
                <h3>Telehealth Services</h3>
                <p>Medicare-covered virtual care options</p>
                <ul>
                  <li>Virtual consultations</li>
                  <li>Medication management</li>
                  <li>Follow-up appointments</li>
                  <li>Mental health support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Medicare Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <h2>Understanding Your Medicare Benefits</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitNumber}>A</div>
                <h3>Medicare Part A</h3>
                <p>Hospital insurance covering inpatient care, skilled nursing, hospice, and some home health services</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitNumber}>B</div>
                <h3>Medicare Part B</h3>
                <p>Medical insurance covering doctor visits, outpatient care, preventive services, and medical equipment</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitNumber}>C</div>
                <h3>Medicare Part C</h3>
                <p>Medicare Advantage plans that combine Parts A and B, often including prescription drug coverage</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitNumber}>D</div>
                <h3>Medicare Part D</h3>
                <p>Prescription drug coverage to help lower medication costs and protect against higher costs in the future</p>
              </div>
            </div>
          </div>
        </section>

        {/* Senior Care Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.seniorCareContent}>
              <h2>Specialized Senior Care</h2>
              <p>At Garcia Family Medicine, we understand the unique healthcare needs of seniors and provide specialized care tailored to Medicare patients:</p>
              <div className={styles.careGrid}>
                <div className={styles.careCategory}>
                  <h4>Comprehensive Geriatric Care</h4>
                  <ul>
                    <li>Age-specific health assessments</li>
                    <li>Fall prevention programs</li>
                    <li>Cognitive health monitoring</li>
                    <li>Medication safety reviews</li>
                  </ul>
                </div>
                <div className={styles.careCategory}>
                  <h4>Chronic Condition Management</h4>
                  <ul>
                    <li>Diabetes care and education</li>
                    <li>Blood pressure management</li>
                    <li>Heart disease monitoring</li>
                    <li>Arthritis pain management</li>
                  </ul>
                </div>
                <div className={styles.careCategory}>
                  <h4>Preventive Care Focus</h4>
                  <ul>
                    <li>Cancer screening coordination</li>
                    <li>Bone health assessments</li>
                    <li>Vision and hearing checks</li>
                    <li>Nutrition counseling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Ready to Use Your Medicare Benefits?</h2>
              <p>Schedule your appointment today and experience comprehensive Medicare-covered care at Garcia Family Medicine</p>
              <div className={styles.ctaButtons}>
                <a href="tel:816-427-5320" className={styles.ctaButton}>
                  Call Now: 816-427-5320
                </a>
              </div>
              <div className={styles.ctaInfo}>
                <div className={styles.clinicInfo}>
                  <h4>Garcia Family Medicine</h4>
                  <p>801 NW St. Mary Drive</p>
                  <p>Medicare Provider • All Plans Accepted</p>
                  <p>Bring your Medicare card and photo ID to your appointment</p>
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