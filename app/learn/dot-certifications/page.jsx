'use client';

import styles from '../service.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import { FaTruck, FaHeartbeat, FaEye, FaStethoscope, FaClipboardList, FaShieldAlt } from 'react-icons/fa';

export default function DOTCertificationsPage() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Understanding DOT Medical Requirements</h1>
            <p className={styles.heroSubtitle}>Essential Health Information for Commercial Drivers</p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introSection}>
            <div className={styles.container}>
              <p className={styles.leadText}>
                DOT medical certification ensures commercial drivers meet federal health and safety standards. Understanding these requirements helps drivers maintain their health and stay compliant with regulations.
              </p>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Who Needs DOT Medical Certification?</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaTruck className={styles.serviceIcon} />
                  <h3>Commercial Vehicle Drivers</h3>
                  <ul className={styles.serviceList}>
                    <li>Vehicles over 10,000 pounds GVWR</li>
                    <li>Vehicles designed for 16+ passengers</li>
                    <li>Vehicles transporting hazardous materials</li>
                    <li>Interstate commercial operations</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaShieldAlt className={styles.serviceIcon} />
                  <h3>Certification Duration</h3>
                  <ul className={styles.serviceList}>
                    <li>Standard: 2-year certificates</li>
                    <li>Conditional: 1-year or less</li>
                    <li>Annual: Required for certain conditions</li>
                    <li>Must renew before expiration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Health Standards & Medical Exam Components</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaEye className={styles.serviceIcon} />
                  <h3>Vision Requirements</h3>
                  <ul className={styles.serviceList}>
                    <li>20/40 vision or better in each eye</li>
                    <li>70° peripheral vision in both eyes</li>
                    <li>Ability to distinguish traffic colors</li>
                    <li>Monocular vision may qualify</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaStethoscope className={styles.serviceIcon} />
                  <h3>Hearing Standards</h3>
                  <ul className={styles.serviceList}>
                    <li>Hear forced whisper at 5 feet</li>
                    <li>Hearing aids are acceptable</li>
                    <li>No sudden hearing loss history</li>
                    <li>Balanced hearing in both ears</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeartbeat className={styles.serviceIcon} />
                  <h3>Cardiovascular Health</h3>
                  <ul className={styles.serviceList}>
                    <li>Blood pressure under 180/110</li>
                    <li>No unstable heart conditions</li>
                    <li>Controlled hypertension acceptable</li>
                    <li>Heart disease requires clearance</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaClipboardList className={styles.serviceIcon} />
                  <h3>General Health</h3>
                  <ul className={styles.serviceList}>
                    <li>Diabetes must be controlled</li>
                    <li>No disqualifying mental conditions</li>
                    <li>Adequate physical coordination</li>
                    <li>No substance abuse history</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.approachSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Common Health Concerns for Drivers</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <h3>Sleep Apnea</h3>
                  <p>Drivers with sleep apnea may qualify with proper treatment. CPAP therapy must be documented and effective.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Diabetes Management</h3>
                  <p>Controlled diabetes is acceptable. Insulin-dependent drivers need additional monitoring and documentation.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Blood Pressure</h3>
                  <p>High blood pressure must be controlled. Medication compliance and regular monitoring are essential.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Vision Correction</h3>
                  <p>Glasses and contacts are acceptable. Corrected vision must meet DOT standards during examination.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.faqSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <div className={styles.faqGrid}>
                <div className={styles.faqItem}>
                  <h3>How often do I need a DOT physical?</h3>
                  <p>Most drivers need certification every 2 years. Some conditions require annual or more frequent exams.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>What if I fail the DOT physical?</h3>
                  <p>You may receive a temporary disqualification. Many conditions can be treated or managed to meet standards.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Can I drive while my certificate is expired?</h3>
                  <p>No. Commercial driving requires a valid, current DOT medical certificate at all times.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>What medications disqualify drivers?</h3>
                  <p>Narcotic pain medications, certain anxiety medications, and some sleep aids may be disqualifying.</p>
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