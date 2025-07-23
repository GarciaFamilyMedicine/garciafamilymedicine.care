'use client'

import styles from '../service.module.css'
import { FaStethoscope, FaUserMd, FaHeartbeat, FaNotesMedical, FaShieldAlt, FaHandHoldingMedical } from 'react-icons/fa'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function PrimaryCare() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Primary Care Services</h1>
            <p className={styles.heroSubtitle}>Your First Step to Better Health - Comprehensive Medical Care for All Ages</p>
          </div>
        </div>

      <div className={styles.mainContent}>
        <section className={styles.introSection}>
          <div className={styles.container}>
            <p className={styles.leadText}>
              At Garcia Family Medicine, we serve as your primary healthcare partner, providing continuous, comprehensive medical care that addresses your immediate health needs while focusing on long-term wellness. Our primary care services form the foundation of your healthcare journey.
            </p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What is Primary Care?</h2>
            <p className={styles.sectionText}>
              Primary care is your first point of contact for all non-emergency health concerns. Dr. Tess Garcia and our team provide coordinated care that considers your complete health picture, including physical, mental, and emotional well-being. We build lasting relationships with our patients, allowing us to understand your unique health history, lifestyle, and goals.
            </p>
              
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaStethoscope className={styles.serviceIcon} />
                  <h3>Comprehensive Care</h3>
                  <ul className={styles.serviceList}>
                    <li>Annual physical examinations</li>
                    <li>Health assessments</li>
                    <li>Preventive care screenings</li>
                    <li>Immunizations and vaccinations</li>
                    <li>Health education</li>
                  </ul>
                </div>

                <div className={styles.serviceCard}>
                  <FaNotesMedical className={styles.serviceIcon} />
                  <h3>Acute Care</h3>
                  <ul className={styles.serviceList}>
                    <li>Cold, flu, and infections</li>
                    <li>Minor injuries and wounds</li>
                    <li>Allergies and asthma</li>
                    <li>Digestive issues</li>
                    <li>Skin conditions</li>
                  </ul>
                </div>

                <div className={styles.serviceCard}>
                  <FaHeartbeat className={styles.serviceIcon} />
                  <h3>Chronic Disease Management</h3>
                  <ul className={styles.serviceList}>
                    <li>Diabetes management</li>
                    <li>High blood pressure</li>
                    <li>Heart disease</li>
                    <li>Thyroid disorders</li>
                    <li>Mental health concerns</li>
                  </ul>
                </div>

                <div className={styles.serviceCard}>
                  <FaUserMd className={styles.serviceIcon} />
                  <h3>Preventive Services</h3>
                  <ul className={styles.serviceList}>
                    <li>Cancer screenings</li>
                    <li>Cardiovascular risk assessment</li>
                    <li>Bone density testing</li>
                    <li>Laboratory services</li>
                    <li>Lifestyle counseling</li>
                  </ul>
                </div>

                <div className={styles.serviceCard}>
                  <FaShieldAlt className={styles.serviceIcon} />
                  <h3>Health Maintenance</h3>
                  <ul className={styles.serviceList}>
                    <li>Medication management</li>
                    <li>Health monitoring</li>
                    <li>Care coordination</li>
                    <li>Specialist referrals</li>
                    <li>Follow-up care</li>
                  </ul>
                </div>

                <div className={styles.serviceCard}>
                  <FaHandHoldingMedical className={styles.serviceIcon} />
                  <h3>Patient-Centered Care</h3>
                  <ul className={styles.serviceList}>
                    <li>Extended appointment times</li>
                    <li>Same-day sick visits</li>
                    <li>Personalized care plans</li>
                    <li>Family health management</li>
                    <li>24/7 on-call support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.approachSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Our Primary Care Approach</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <h3>Personalized Care Plans</h3>
                  <p>We take time to listen to your concerns, understand your health goals, and develop customized treatment plans that fit your lifestyle.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Continuity of Care</h3>
                  <p>Build a lasting relationship with a healthcare team that knows your history and can guide you through all of life's health challenges.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Evidence-Based Medicine</h3>
                  <p>Our approach combines the latest medical research with compassionate care to ensure you receive the most effective treatments.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Whole-Person Wellness</h3>
                  <p>We address not just your physical health, but also consider mental, emotional, and social factors that impact your well-being.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.processSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Your Primary Care Journey</h2>
              <div className={styles.processSteps}>
                <div className={styles.processStep}>
                  <div className={styles.stepNumber}>1</div>
                  <h3>Initial Consultation</h3>
                  <p>Comprehensive health history review and initial examination to understand your unique needs.</p>
                </div>
                <div className={styles.processStep}>
                  <div className={styles.stepNumber}>2</div>
                  <h3>Health Assessment</h3>
                  <p>Thorough evaluation including physical exam, screenings, and necessary laboratory tests.</p>
                </div>
                <div className={styles.processStep}>
                  <div className={styles.stepNumber}>3</div>
                  <h3>Personalized Plan</h3>
                  <p>Development of a customized care plan addressing your immediate needs and long-term health goals.</p>
                </div>
                <div className={styles.processStep}>
                  <div className={styles.stepNumber}>4</div>
                  <h3>Ongoing Support</h3>
                  <p>Regular check-ups, health monitoring, and adjustments to ensure optimal health outcomes.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.faqSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Primary Care FAQs</h2>
              <div className={styles.faqGrid}>
                <div className={styles.faqItem}>
                  <h3>What age groups do you treat?</h3>
                  <p>We provide primary care for all ages, from newborns through seniors, offering comprehensive family medicine services.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Do I need a referral?</h3>
                  <p>No referral is needed for primary care services. We welcome new patients and can help coordinate specialist care when needed.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>What should I bring to my first visit?</h3>
                  <p>Please bring your ID, insurance cards, list of current medications, and any relevant medical records or test results.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>How often should I have check-ups?</h3>
                  <p>Annual wellness exams are recommended for most adults. Those with chronic conditions may need more frequent visits.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.teamSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Start Your Healthcare Journey Today</h2>
              <p className={styles.sectionText}>
                Experience the difference of personalized primary care with a team that truly cares about your health. Dr. Tess Garcia and our dedicated staff are ready to become your trusted healthcare partners.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.primaryButton}>
                  Become a Patient
                </Link>
                <Link href="/meetthedoctor" className={styles.secondaryButton}>
                  Meet Dr. Garcia
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