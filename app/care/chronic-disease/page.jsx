'use client'

import styles from '../service.module.css'
import { FaHeartbeat, FaTint, FaLungs, FaBrain, FaUserMd } from 'react-icons/fa'
import { BiPlusMedical } from 'react-icons/bi'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function ChronicDisease() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Chronic Disease Management</h1>
          <p className={styles.heroSubtitle}>Comprehensive Care for Long-Term Health Conditions</p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <section className={styles.introSection}>
          <div className={styles.container}>
            <p className={styles.leadText}>
              Living with a chronic condition requires ongoing care and support. At Garcia Family Medicine, we provide personalized chronic disease management to help you maintain your quality of life and prevent complications.
            </p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Conditions We Manage</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <FaTint className={styles.serviceIcon} />
                <h3>Diabetes Management</h3>
                <ul className={styles.serviceList}>
                  <li>Type 1 and Type 2 diabetes care</li>
                  <li>Blood sugar monitoring</li>
                  <li>Insulin management</li>
                  <li>Diabetic education</li>
                  <li>Complication prevention</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaHeartbeat className={styles.serviceIcon} />
                <h3>Cardiovascular Disease</h3>
                <ul className={styles.serviceList}>
                  <li>Hypertension control</li>
                  <li>Heart disease management</li>
                  <li>Cholesterol monitoring</li>
                  <li>Stroke prevention</li>
                  <li>Cardiac rehabilitation support</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaLungs className={styles.serviceIcon} />
                <h3>Respiratory Conditions</h3>
                <ul className={styles.serviceList}>
                  <li>Asthma management</li>
                  <li>COPD treatment</li>
                  <li>Breathing therapy</li>
                  <li>Medication optimization</li>
                  <li>Pulmonary function monitoring</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaBrain className={styles.serviceIcon} />
                <h3>Neurological Conditions</h3>
                <ul className={styles.serviceList}>
                  <li>Migraine management</li>
                  <li>Seizure disorders</li>
                  <li>Neuropathy treatment</li>
                  <li>Cognitive assessment</li>
                  <li>Specialist coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.approachSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Comprehensive Approach</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <BiPlusMedical className={styles.benefitIcon} />
                <h3>Regular Monitoring</h3>
                <p>Frequent check-ups and lab work to track your condition and adjust treatment plans as needed.</p>
              </div>
              <div className={styles.benefitCard}>
                <FaUserMd className={styles.benefitIcon} />
                <h3>Medication Management</h3>
                <p>Careful review and optimization of medications to ensure effectiveness while minimizing side effects.</p>
              </div>
              <div className={styles.benefitCard}>
                <FaHeartbeat className={styles.benefitIcon} />
                <h3>Lifestyle Counseling</h3>
                <p>Personalized guidance on diet, exercise, and lifestyle modifications to improve your condition.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Care Journey</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Comprehensive Assessment</h3>
                <p>We start with a thorough evaluation of your condition, medical history, and current treatments.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Personalized Care Plan</h3>
                <p>Dr. Garcia develops a customized treatment plan tailored to your specific needs and goals.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Ongoing Management</h3>
                <p>Regular appointments to monitor progress, adjust medications, and address new concerns.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Care Coordination</h3>
                <p>We work with specialists and other providers to ensure comprehensive, coordinated care.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.additionalServices}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Additional Support Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>Patient Education</h3>
                <p>Learn to better understand and manage your condition with our educational resources and counseling.</p>
              </div>
              <div className={styles.serviceCard}>
                <h3>Care Coordination</h3>
                <p>We help coordinate care between specialists, labs, and other healthcare providers.</p>
              </div>
              <div className={styles.serviceCard}>
                <h3>24/7 Support</h3>
                <p>Access to after-hours care and telehealth services for urgent concerns and questions.</p>
              </div>
              <div className={styles.serviceCard}>
                <h3>Prevention Focus</h3>
                <p>Proactive screening and monitoring to prevent complications before they develop.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Common Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>How often will I need appointments?</h3>
                <p>Visit frequency depends on your condition and stability. Most patients see us every 3-6 months.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can you coordinate with my specialists?</h3>
                <p>Yes, we work closely with specialists to ensure seamless, coordinated care for all your health needs.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What if I have multiple chronic conditions?</h3>
                <p>We specialize in managing multiple conditions, ensuring treatments work together effectively.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you offer telehealth for chronic care?</h3>
                <p>Yes, we provide telehealth options for routine follow-ups and medication management.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Partner in Your Health Journey</h2>
            <p className={styles.sectionText}>
              Managing a chronic condition doesn't have to be overwhelming. Dr. Tess Garcia and our experienced team are here to provide the ongoing support, education, and medical care you need to live your best life.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Schedule a Consultation
              </Link>
              <Link href="/care/telehealth" className={styles.secondaryButton}>
                Learn About Telehealth
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />
    </>
  )
}