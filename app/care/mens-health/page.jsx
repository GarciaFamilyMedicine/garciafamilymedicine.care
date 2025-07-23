'use client'

import styles from '../service.module.css'
import { FaMale, FaHeartbeat, FaDumbbell, FaStethoscope, FaShieldAlt, FaUserMd } from 'react-icons/fa'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function MensHealth() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Men's Health</h1>
          <p className={styles.heroSubtitle}>Dedicated Healthcare for Men at Every Stage</p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <section className={styles.introSection}>
          <div className={styles.container}>
            <p className={styles.leadText}>
              Men often put their health last. At Garcia Family Medicine, we make it easy for men to prioritize their well-being with comprehensive health services designed specifically for male health concerns.
            </p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Men's Health Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <FaStethoscope className={styles.serviceIcon} />
                <h3>Annual Health Exams</h3>
                <ul className={styles.serviceList}>
                  <li>Comprehensive physical exams</li>
                  <li>Prostate health screening</li>
                  <li>Testicular examinations</li>
                  <li>Blood pressure monitoring</li>
                  <li>Cholesterol management</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaHeartbeat className={styles.serviceIcon} />
                <h3>Heart Health</h3>
                <ul className={styles.serviceList}>
                  <li>Cardiovascular risk assessment</li>
                  <li>Heart disease prevention</li>
                  <li>Blood pressure control</li>
                  <li>Cholesterol management</li>
                  <li>Lifestyle counseling</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaMale className={styles.serviceIcon} />
                <h3>Hormonal Health</h3>
                <ul className={styles.serviceList}>
                  <li>Testosterone evaluation</li>
                  <li>Low testosterone treatment</li>
                  <li>Energy optimization</li>
                  <li>Sexual health concerns</li>
                  <li>Erectile dysfunction</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaShieldAlt className={styles.serviceIcon} />
                <h3>Preventive Screening</h3>
                <ul className={styles.serviceList}>
                  <li>Prostate cancer screening</li>
                  <li>Colorectal cancer screening</li>
                  <li>Skin cancer checks</li>
                  <li>Diabetes screening</li>
                  <li>STD testing</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaDumbbell className={styles.serviceIcon} />
                <h3>Fitness & Wellness</h3>
                <ul className={styles.serviceList}>
                  <li>Sports physicals</li>
                  <li>Exercise planning</li>
                  <li>Weight management</li>
                  <li>Nutrition counseling</li>
                  <li>Injury prevention</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaUserMd className={styles.serviceIcon} />
                <h3>Mental Health</h3>
                <ul className={styles.serviceList}>
                  <li>Depression screening</li>
                  <li>Anxiety management</li>
                  <li>Stress reduction</li>
                  <li>Sleep disorders</li>
                  <li>Substance use counseling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ageSpecificSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Age-Specific Men's Health</h2>
            <div className={styles.ageGrid}>
              <div className={styles.ageCard}>
                <h3>20s-30s</h3>
                <ul className={styles.ageList}>
                  <li>Baseline health assessments</li>
                  <li>STD prevention and testing</li>
                  <li>Sports injury prevention</li>
                  <li>Mental health support</li>
                  <li>Healthy lifestyle establishment</li>
                </ul>
              </div>
              <div className={styles.ageCard}>
                <h3>40s-50s</h3>
                <ul className={styles.ageList}>
                  <li>Prostate health monitoring</li>
                  <li>Heart disease screening</li>
                  <li>Diabetes prevention</li>
                  <li>Colonoscopy screening</li>
                  <li>Testosterone evaluation</li>
                </ul>
              </div>
              <div className={styles.ageCard}>
                <h3>60s and Beyond</h3>
                <ul className={styles.ageList}>
                  <li>Comprehensive senior care</li>
                  <li>Cancer screenings</li>
                  <li>Bone health assessment</li>
                  <li>Cognitive health monitoring</li>
                  <li>Senior wellness visits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.commonConcernsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Common Men's Health Concerns</h2>
            <div className={styles.concernsGrid}>
              <div className={styles.concernCard}>
                <h3>Heart Disease</h3>
                <p>The leading cause of death in men. We focus on prevention through screening, lifestyle changes, and medication when needed.</p>
              </div>
              <div className={styles.concernCard}>
                <h3>Prostate Health</h3>
                <p>Regular screening and early detection are key to maintaining prostate health and preventing serious complications.</p>
              </div>
              <div className={styles.concernCard}>
                <h3>Low Testosterone</h3>
                <p>Fatigue, low libido, and mood changes may indicate low testosterone. We offer testing and treatment options.</p>
              </div>
              <div className={styles.concernCard}>
                <h3>Mental Health</h3>
                <p>Men often struggle with depression and anxiety in silence. We provide confidential support and treatment.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What to Expect</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Comprehensive Assessment</h3>
                <p>We start with a thorough health history and physical examination tailored to men's health needs.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Targeted Screening</h3>
                <p>Age-appropriate screenings and tests to detect potential health issues early.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Personalized Plan</h3>
                <p>Develop a health plan focused on your specific concerns, goals, and risk factors.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Ongoing Support</h3>
                <p>Regular follow-ups to monitor progress and adjust your health plan as needed.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>When should men start regular check-ups?</h3>
                <p>Men should have annual check-ups starting in their 20s, with more frequent visits as health concerns arise.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What age should prostate screening begin?</h3>
                <p>Most men should discuss prostate screening at age 50, or earlier if there's a family history.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is erectile dysfunction treatable?</h3>
                <p>Yes, ED is treatable. We offer confidential consultations and various treatment options.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you offer testosterone replacement?</h3>
                <p>We provide testosterone testing and treatment when medically appropriate, with careful monitoring.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Take Charge of Your Health</h2>
            <p className={styles.sectionText}>
              Don't wait for symptoms to appear. Dr. Tess Garcia and our team understand the unique health challenges men face and provide judgment-free, comprehensive care to help you live your healthiest life.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Schedule Men's Health Exam
              </Link>
              <Link href="/care/preventive-care" className={styles.secondaryButton}>
                Learn About Prevention
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