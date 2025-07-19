'use client'

import styles from '../service.module.css'
import { FaBaby, FaChild, FaStethoscope, FaSyringe, FaGraduationCap, FaHeartbeat } from 'react-icons/fa'
import Link from 'next/link'

export default function PediatricCare() {
  return (
    <div className={styles.servicePage}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Pediatric Care</h1>
          <p className={styles.heroSubtitle}>Compassionate Healthcare for Your Growing Child</p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <section className={styles.introSection}>
          <div className={styles.container}>
            <p className={styles.leadText}>
              Every child deserves healthcare that nurtures their growth, development, and well-being. At Garcia Family Medicine, we provide comprehensive pediatric care from birth through adolescence, partnering with parents to raise healthy, happy children.
            </p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Comprehensive Pediatric Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <FaBaby className={styles.serviceIcon} />
                <h3>Newborn & Infant Care</h3>
                <ul className={styles.serviceList}>
                  <li>Newborn examinations</li>
                  <li>Well-baby checkups</li>
                  <li>Growth monitoring</li>
                  <li>Feeding support</li>
                  <li>Sleep guidance</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaSyringe className={styles.serviceIcon} />
                <h3>Immunizations</h3>
                <ul className={styles.serviceList}>
                  <li>CDC-recommended vaccines</li>
                  <li>Catch-up immunizations</li>
                  <li>School requirements</li>
                  <li>Travel vaccines</li>
                  <li>Vaccine education</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaStethoscope className={styles.serviceIcon} />
                <h3>Sick Child Visits</h3>
                <ul className={styles.serviceList}>
                  <li>Same-day appointments</li>
                  <li>Acute illness care</li>
                  <li>Injury evaluation</li>
                  <li>Infection treatment</li>
                  <li>Emergency guidance</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaChild className={styles.serviceIcon} />
                <h3>Developmental Screening</h3>
                <ul className={styles.serviceList}>
                  <li>Milestone monitoring</li>
                  <li>Autism screening</li>
                  <li>ADHD evaluation</li>
                  <li>Learning assessments</li>
                  <li>Behavioral support</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaGraduationCap className={styles.serviceIcon} />
                <h3>School & Sports</h3>
                <ul className={styles.serviceList}>
                  <li>School physicals</li>
                  <li>Sports clearances</li>
                  <li>Camp forms</li>
                  <li>Concussion care</li>
                  <li>Injury prevention</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaHeartbeat className={styles.serviceIcon} />
                <h3>Adolescent Health</h3>
                <ul className={styles.serviceList}>
                  <li>Teen wellness visits</li>
                  <li>Mental health screening</li>
                  <li>Confidential counseling</li>
                  <li>Substance use prevention</li>
                  <li>Reproductive health</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ageSpecificSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Age-Specific Care Guidelines</h2>
            <div className={styles.ageGrid}>
              <div className={styles.ageCard}>
                <h3>Birth - 2 Years</h3>
                <p>Frequent well-child visits for growth monitoring, developmental milestones, immunizations, and parent education on feeding, sleep, and safety.</p>
              </div>
              <div className={styles.ageCard}>
                <h3>2 - 5 Years</h3>
                <p>Annual checkups focusing on developmental progress, preschool readiness, behavioral guidance, and continued immunizations.</p>
              </div>
              <div className={styles.ageCard}>
                <h3>6 - 11 Years</h3>
                <p>School-age wellness visits addressing academic performance, social development, physical activity, and healthy habits.</p>
              </div>
              <div className={styles.ageCard}>
                <h3>12 - 18 Years</h3>
                <p>Adolescent care emphasizing physical changes, mental health, risk prevention, and transition to adult healthcare.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.approachSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Pediatric Care Philosophy</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Family-Centered Care</h3>
                <p>We partner with parents as the experts on their children, working together to make the best healthcare decisions.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Preventive Focus</h3>
                <p>Emphasizing wellness visits and preventive care to catch potential issues early and promote healthy development.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Comfortable Environment</h3>
                <p>Creating a child-friendly atmosphere where kids feel safe and parents feel supported in their parenting journey.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.commonConditionsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Common Pediatric Conditions We Treat</h2>
            <div className={styles.conditionsGrid}>
              <div className={styles.conditionCategory}>
                <h3>Acute Illnesses</h3>
                <ul className={styles.conditionList}>
                  <li>Ear infections</li>
                  <li>Strep throat</li>
                  <li>Cold and flu</li>
                  <li>Stomach bugs</li>
                  <li>Pink eye</li>
                </ul>
              </div>
              <div className={styles.conditionCategory}>
                <h3>Chronic Conditions</h3>
                <ul className={styles.conditionList}>
                  <li>Asthma</li>
                  <li>Allergies</li>
                  <li>Eczema</li>
                  <li>ADHD</li>
                  <li>Anxiety</li>
                </ul>
              </div>
              <div className={styles.conditionCategory}>
                <h3>Developmental Concerns</h3>
                <ul className={styles.conditionList}>
                  <li>Speech delays</li>
                  <li>Motor delays</li>
                  <li>Learning difficulties</li>
                  <li>Behavioral issues</li>
                  <li>Social challenges</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.parentResourcesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Parent Resources & Support</h2>
            <p className={styles.sectionText}>
              We believe informed parents make the best decisions for their children. That's why we provide comprehensive education and support on:
            </p>
            <ul className={styles.resourceList}>
              <li>Age-appropriate nutrition guidelines</li>
              <li>Safe sleep practices</li>
              <li>Developmental milestones</li>
              <li>Positive parenting techniques</li>
              <li>When to seek emergency care</li>
              <li>Managing common childhood illnesses at home</li>
            </ul>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>When should my child have checkups?</h3>
                <p>Well-child visits follow a schedule: frequently in the first 2 years, then annually. We'll remind you when visits are due.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you offer same-day sick visits?</h3>
                <p>Yes, we reserve appointments daily for sick children and offer telehealth options for non-emergency concerns.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What if my child needs a specialist?</h3>
                <p>We coordinate with pediatric specialists and provide referrals when specialized care is needed.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do you handle vaccine concerns?</h3>
                <p>We respect parental concerns and provide evidence-based information to help you make informed decisions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Child's Health Partner</h2>
            <p className={styles.sectionText}>
              Dr. Tess Garcia and our pediatric team are dedicated to providing compassionate, comprehensive care for your children. We're here to support your family through every stage of growth and development, celebrating milestones and addressing challenges together.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Schedule Pediatric Visit
              </Link>
              <Link href="/care/family-medicine" className={styles.secondaryButton}>
                Learn About Family Care
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}