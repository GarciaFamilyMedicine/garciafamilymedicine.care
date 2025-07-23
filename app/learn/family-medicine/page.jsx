'use client'

import styles from '../service.module.css'
import { FaUsers, FaBaby, FaChild, FaUserGraduate, FaUserTie, FaUserClock } from 'react-icons/fa'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function FamilyMedicine() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Family Medicine</h1>
            <p className={styles.heroSubtitle}>Comprehensive Healthcare for Every Generation</p>
          </div>
        </div>

      <div className={styles.mainContent}>
        <section className={styles.introSection}>
          <div className={styles.container}>
            <p className={styles.leadText}>
              At Garcia Family Medicine, we're honored to care for your entire family. From newborns to seniors, we provide continuous, comprehensive healthcare that grows with you through every stage of life.
            </p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Care for Every Life Stage</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <FaBaby className={styles.serviceIcon} />
                <h3>Newborn & Infant Care</h3>
                <ul className={styles.serviceList}>
                  <li>Newborn wellness checks</li>
                  <li>Growth monitoring</li>
                  <li>Immunization schedule</li>
                  <li>Developmental milestones</li>
                  <li>Parent education</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaChild className={styles.serviceIcon} />
                <h3>Child & Adolescent Health</h3>
                <ul className={styles.serviceList}>
                  <li>School physicals</li>
                  <li>Sports clearances</li>
                  <li>ADHD evaluation</li>
                  <li>Behavioral health</li>
                  <li>Teen health counseling</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaUserGraduate className={styles.serviceIcon} />
                <h3>Young Adult Care</h3>
                <ul className={styles.serviceList}>
                  <li>College health needs</li>
                  <li>Preventive screenings</li>
                  <li>Mental health support</li>
                  <li>Contraceptive counseling</li>
                  <li>STD prevention</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaUserTie className={styles.serviceIcon} />
                <h3>Adult Healthcare</h3>
                <ul className={styles.serviceList}>
                  <li>Annual physicals</li>
                  <li>Chronic disease management</li>
                  <li>Workplace wellness</li>
                  <li>Stress management</li>
                  <li>Preventive care</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaUserClock className={styles.serviceIcon} />
                <h3>Senior Care</h3>
                <ul className={styles.serviceList}>
                  <li>Senior wellness visits</li>
                  <li>Medication management</li>
                  <li>Fall prevention</li>
                  <li>Memory assessment</li>
                  <li>Care coordination</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaUsers className={styles.serviceIcon} />
                <h3>Multi-Generational Care</h3>
                <ul className={styles.serviceList}>
                  <li>Family health history</li>
                  <li>Genetic risk assessment</li>
                  <li>Caregiver support</li>
                  <li>Family wellness planning</li>
                  <li>Health education</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.approachSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>The Family Medicine Advantage</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Continuity of Care</h3>
                <p>Build a lasting relationship with a doctor who knows your family's complete health history.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Convenient Care</h3>
                <p>One location for your entire family's healthcare needs, from routine check-ups to sick visits.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Comprehensive Services</h3>
                <p>From preventive care to chronic disease management, we handle most health concerns in-house.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Coordinated Care</h3>
                <p>When specialists are needed, we coordinate referrals and follow-up to ensure seamless care.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.commonConditions}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Common Conditions We Treat</h2>
            <div className={styles.conditionsGrid}>
              <div className={styles.conditionCategory}>
                <h3>Acute Illnesses</h3>
                <ul className={styles.conditionList}>
                  <li>Cold and flu</li>
                  <li>Ear infections</li>
                  <li>Strep throat</li>
                  <li>Bronchitis</li>
                  <li>Urinary tract infections</li>
                </ul>
              </div>
              <div className={styles.conditionCategory}>
                <h3>Chronic Conditions</h3>
                <ul className={styles.conditionList}>
                  <li>Diabetes</li>
                  <li>Hypertension</li>
                  <li>Asthma</li>
                  <li>Arthritis</li>
                  <li>Depression and anxiety</li>
                </ul>
              </div>
              <div className={styles.conditionCategory}>
                <h3>Preventive Services</h3>
                <ul className={styles.conditionList}>
                  <li>Wellness exams</li>
                  <li>Immunizations</li>
                  <li>Health screenings</li>
                  <li>Lifestyle counseling</li>
                  <li>Cancer prevention</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Family's Healthcare Journey</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Welcome Visit</h3>
                <p>Meet Dr. Garcia and our team, share your family's health history and goals.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Comprehensive Care</h3>
                <p>Receive personalized care plans for each family member based on their unique needs.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Ongoing Support</h3>
                <p>Regular check-ups, sick visits, and 24/7 access ensure continuous care.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Growing Together</h3>
                <p>As your family grows and changes, we adapt our care to meet evolving needs.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Family Medicine FAQs</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>What ages do you treat?</h3>
                <p>We care for patients of all ages, from newborns through seniors, providing comprehensive care across the lifespan.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can you be our only doctor?</h3>
                <p>Yes! Family physicians can handle 90% of healthcare needs, referring to specialists only when necessary.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you offer same-day appointments?</h3>
                <p>We reserve time daily for urgent needs and offer telehealth options for added convenience.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do you handle emergencies?</h3>
                <p>We provide guidance on when to seek emergency care and offer after-hours support for urgent questions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Family's Medical Home</h2>
            <p className={styles.sectionText}>
              Choose Garcia Family Medicine as your family's medical home. Dr. Tess Garcia and our caring team are committed to providing personalized, comprehensive healthcare that supports your family's health and wellness goals at every stage of life.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Become a Patient Family
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