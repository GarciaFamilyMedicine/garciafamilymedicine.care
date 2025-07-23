'use client'

import styles from '../service.module.css'
import { FaHeartbeat, FaStethoscope, FaMicroscope, FaClipboardCheck } from 'react-icons/fa'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function WellnessExams() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Wellness Exams</h1>
            <p className={styles.heroSubtitle}>Comprehensive Health Assessments for Every Stage of Life</p>
          </div>
        </div>

      <div className={styles.mainContent}>
        <section className={styles.introSection}>
          <div className={styles.container}>
            <p className={styles.leadText}>
              At Garcia Family Medicine, we believe prevention is the foundation of good health. Our comprehensive wellness exams are designed to detect health issues early, maintain your well-being, and help you achieve your health goals.
            </p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Annual Wellness Visit Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <FaHeartbeat className={styles.serviceIcon} />
                <h3>Complete Physical Examination</h3>
                <ul className={styles.serviceList}>
                  <li>Vital signs monitoring</li>
                  <li>Cardiovascular assessment</li>
                  <li>Respiratory evaluation</li>
                  <li>Neurological screening</li>
                  <li>Musculoskeletal examination</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaMicroscope className={styles.serviceIcon} />
                <h3>Laboratory Testing</h3>
                <ul className={styles.serviceList}>
                  <li>Complete blood count (CBC)</li>
                  <li>Comprehensive metabolic panel</li>
                  <li>Lipid profile</li>
                  <li>Thyroid function tests</li>
                  <li>Diabetes screening</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaStethoscope className={styles.serviceIcon} />
                <h3>Health Risk Assessment</h3>
                <ul className={styles.serviceList}>
                  <li>Family history review</li>
                  <li>Lifestyle evaluation</li>
                  <li>Mental health screening</li>
                  <li>Substance use assessment</li>
                  <li>Fall risk evaluation</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaClipboardCheck className={styles.serviceIcon} />
                <h3>Preventive Care Planning</h3>
                <ul className={styles.serviceList}>
                  <li>Immunization updates</li>
                  <li>Cancer screening recommendations</li>
                  <li>Personalized health goals</li>
                  <li>Nutrition counseling</li>
                  <li>Exercise planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Age-Specific Wellness Exams</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Pediatric Wellness (0-18 years)</h3>
                <p>Growth monitoring, developmental assessments, school physicals, sports clearances, and age-appropriate vaccinations.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Adult Wellness (19-64 years)</h3>
                <p>Comprehensive health screenings, chronic disease prevention, lifestyle counseling, and workplace health requirements.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Senior Wellness (65+ years)</h3>
                <p>Annual senior wellness visits, cognitive assessments, fall prevention, medication reviews, and preventive care planning - all at affordable cash pay rates.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What to Expect During Your Wellness Exam</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Health History Review</h3>
                <p>We'll discuss your medical history, current medications, and any health concerns you may have.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Physical Examination</h3>
                <p>Dr. Garcia will perform a thorough head-to-toe examination tailored to your age and health needs.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Diagnostic Testing</h3>
                <p>We'll order appropriate lab work and screenings based on your age, gender, and risk factors.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Personalized Health Plan</h3>
                <p>Together, we'll create a customized wellness plan focused on prevention and your health goals.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>How often should I have a wellness exam?</h3>
                <p>Most adults should have an annual wellness exam. Children may need more frequent visits based on age and development.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What should I bring to my appointment?</h3>
                <p>Bring your insurance card, ID, current medication list, and any recent test results from other providers.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is my wellness exam covered by insurance?</h3>
                <p>We offer affordable cash pay rates for all wellness exams, making preventive care accessible to everyone.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long does a wellness exam take?</h3>
                <p>Plan for 45-60 minutes for a comprehensive wellness exam, including time for questions and discussion.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Health is Our Priority</h2>
            <p className={styles.sectionText}>
              Dr. Tess Garcia and our dedicated team are committed to providing personalized, comprehensive wellness care. We take the time to understand your unique health needs and work with you to achieve optimal health at every stage of life.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Schedule Your Wellness Exam
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