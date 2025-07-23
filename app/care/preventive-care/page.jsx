'use client'

import styles from '../service.module.css'
import { FaShieldAlt, FaSyringe, FaUserCheck, FaHeartbeat, FaMicroscope } from 'react-icons/fa'
import { MdScreenSearchDesktop } from 'react-icons/md'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function PreventiveCare() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Preventive Care</h1>
          <p className={styles.heroSubtitle}>Stay Healthy with Proactive Medical Care</p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <section className={styles.introSection}>
          <div className={styles.container}>
            <p className={styles.leadText}>
              Prevention is the best medicine. Our comprehensive preventive care services help you stay healthy, detect problems early, and maintain your best quality of life through every stage.
            </p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Preventive Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <FaSyringe className={styles.serviceIcon} />
                <h3>Immunizations</h3>
                <ul className={styles.serviceList}>
                  <li>Childhood vaccinations</li>
                  <li>Annual flu shots</li>
                  <li>COVID-19 vaccines</li>
                  <li>Travel immunizations</li>
                  <li>Adult boosters</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <MdScreenSearchDesktop className={styles.serviceIcon} />
                <h3>Health Screenings</h3>
                <ul className={styles.serviceList}>
                  <li>Cancer screenings</li>
                  <li>Blood pressure checks</li>
                  <li>Cholesterol testing</li>
                  <li>Diabetes screening</li>
                  <li>Bone density scans</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaUserCheck className={styles.serviceIcon} />
                <h3>Risk Assessments</h3>
                <ul className={styles.serviceList}>
                  <li>Family history evaluation</li>
                  <li>Lifestyle risk factors</li>
                  <li>Genetic screening</li>
                  <li>Mental health assessment</li>
                  <li>Substance use screening</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaMicroscope className={styles.serviceIcon} />
                <h3>Laboratory Services</h3>
                <ul className={styles.serviceList}>
                  <li>Annual blood work</li>
                  <li>STD testing</li>
                  <li>Hormone panels</li>
                  <li>Nutritional analysis</li>
                  <li>Allergy testing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.screeningSchedule}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Recommended Screening Schedule</h2>
            <div className={styles.scheduleGrid}>
              <div className={styles.scheduleCard}>
                <h3>Ages 18-39</h3>
                <ul className={styles.scheduleList}>
                  <li>Blood pressure: Every 2 years</li>
                  <li>Cholesterol: Every 5 years</li>
                  <li>Dental exam: Twice yearly</li>
                  <li>Eye exam: Every 2 years</li>
                  <li>Skin cancer check: Annually</li>
                </ul>
              </div>
              <div className={styles.scheduleCard}>
                <h3>Ages 40-64</h3>
                <ul className={styles.scheduleList}>
                  <li>Mammogram: Annually (women)</li>
                  <li>Colonoscopy: Every 10 years</li>
                  <li>Diabetes screening: Every 3 years</li>
                  <li>Prostate exam: Discuss with doctor</li>
                  <li>Bone density: At menopause</li>
                </ul>
              </div>
              <div className={styles.scheduleCard}>
                <h3>Ages 65+</h3>
                <ul className={styles.scheduleList}>
                  <li>Senior wellness visit: Annually</li>
                  <li>Shingles vaccine: Once</li>
                  <li>Pneumonia vaccine: As recommended</li>
                  <li>Cognitive assessment: Annually</li>
                  <li>Fall risk evaluation: Annually</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.lifestyleSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Lifestyle Medicine</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <FaHeartbeat className={styles.benefitIcon} />
                <h3>Nutrition Counseling</h3>
                <p>Personalized dietary guidance to prevent chronic diseases and maintain optimal health.</p>
              </div>
              <div className={styles.benefitCard}>
                <FaShieldAlt className={styles.benefitIcon} />
                <h3>Exercise Planning</h3>
                <p>Custom fitness recommendations based on your health status and personal goals.</p>
              </div>
              <div className={styles.benefitCard}>
                <FaUserCheck className={styles.benefitIcon} />
                <h3>Stress Management</h3>
                <p>Techniques and resources to manage stress and improve mental well-being.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Preventive Care Plan</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Health Assessment</h3>
                <p>We evaluate your current health status, family history, and risk factors.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Screening Schedule</h3>
                <p>Create a personalized screening schedule based on your age and risk profile.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Preventive Measures</h3>
                <p>Implement vaccinations, lifestyle changes, and early interventions as needed.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Regular Follow-up</h3>
                <p>Schedule routine check-ups to maintain your health and update your care plan.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.insuranceSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Affordable Cash Pay Options</h2>
            <p className={styles.sectionText}>
              We offer affordable cash pay rates for all preventive services, making essential healthcare accessible to everyone. Our services include:
            </p>
            <ul className={styles.coverageList}>
              <li>Annual wellness visits</li>
              <li>Recommended vaccinations</li>
              <li>Cancer screenings</li>
              <li>Preventive lab work</li>
              <li>Counseling services</li>
            </ul>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Why is preventive care important?</h3>
                <p>Preventive care helps detect health issues early when they're most treatable and can prevent serious conditions from developing.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What's included in a preventive visit?</h3>
                <p>Includes health screenings, immunizations, counseling, and developing a personalized prevention plan.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How often should I get preventive care?</h3>
                <p>Most adults should have an annual preventive care visit, with specific screenings based on age and risk factors.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is preventive care really free?</h3>
                <p>Most preventive services are covered at 100% by insurance when performed by in-network providers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Invest in Your Health Today</h2>
            <p className={styles.sectionText}>
              Don't wait for symptoms to appear. Take charge of your health with comprehensive preventive care from Dr. Tess Garcia and our dedicated team. We're here to help you stay healthy and thrive.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Schedule Preventive Visit
              </Link>
              <Link href="/care/wellness-exams" className={styles.secondaryButton}>
                Learn About Wellness Exams
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