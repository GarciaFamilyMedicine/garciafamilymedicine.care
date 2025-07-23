'use client';

import styles from './clearroad-dot-exams.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import Link from 'next/link';

export default function ClearRoadDOTExamsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                ClearRoad™ DOT Exams
              </h1>
              <p className={styles.heroSubtitle}>
                Keeping America's Drivers Safe and Road-Ready
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Schedule Your DOT Exam
                </a>
                <Link href="/contact" className={styles.secondaryButton}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.textContent}>
              <p className={styles.leadText}>
                At Garcia Family Medicine, we understand that your livelihood depends on your ability to stay on the road. Whether you're a long-haul trucker crossing state lines, a local delivery driver serving your community, or a bus operator ensuring passengers reach their destinations safely, your Department of Transportation (DOT) physical is more than just a requirement—it's your gateway to continuing the vital work that keeps America moving.
              </p>
              <p className={styles.text}>
                Our ClearRoad™ DOT Exams represent our commitment to providing certified Department of Transportation physicals with three essential pillars: speed, accuracy, and compassion. We don't just check boxes; we ensure you meet all federal requirements while genuinely respecting your time, your health, and the critically important work you do on the road.
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Drivers Section */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>We Understand Your Unique Challenges</h2>
            <div className={styles.textContent}>
              <p className={styles.text}>
                Dr. Tess Garcia and our certified medical examiners understand the unique challenges faced by commercial drivers. We know that your schedule isn't typical—you might be passing through town at unusual hours, working against tight delivery deadlines, or managing multiple routes that don't always align with traditional medical office hours. You might be dealing with the stress of maintaining your Commercial Driver's License (CDL) while managing health concerns, family responsibilities, and the demanding nature of your profession.
              </p>
              <p className={styles.text}>
                We've built our ClearRoad™ DOT Exam program specifically with these realities in mind. Dr. Tess and our certified medical examiners aren't just healthcare providers—they're advocates for the men and women who dedicate their careers to transportation, logistics, and keeping essential goods flowing across our nation.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Streamlined DOT Exam Process</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⏱️</div>
                <h3>Extended Hours</h3>
                <p>Early morning and evening appointments to accommodate your driving schedule</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📋</div>
                <h3>Same-Day Certificates</h3>
                <p>In most cases, receive your DOT medical certificate immediately after examination</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🏆</div>
                <h3>FMCSA Certified</h3>
                <p>All examiners listed on the FMCSA National Registry with direct access</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔬</div>
                <h3>Complete Testing</h3>
                <p>All federally mandated components including vision, hearing, and cardiovascular evaluation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Exam Section */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your ClearRoad™ DOT Exam Includes</h2>
            <div className={styles.twoColumn}>
              <div className={styles.column}>
                <ul className={styles.checkList}>
                  <li>Complete medical history review</li>
                  <li>Vision and hearing testing using calibrated equipment</li>
                  <li>Cardiovascular evaluation with thorough blood pressure assessment</li>
                  <li>Comprehensive physical examination of your overall condition</li>
                  <li>Laboratory testing when indicated by federal guidelines</li>
                </ul>
              </div>
              <div className={styles.column}>
                <div className={styles.infoBox}>
                  <h3>Certified Medical Examiners</h3>
                  <p>Dr. Tess and our medical team are certified DOT medical examiners listed on the FMCSA National Registry. This certification represents extensive training in the specific health standards required for commercial driving and ongoing education about regulatory updates and medical guidelines.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Conditions Support */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Managing Health Conditions</h2>
            <div className={styles.textContent}>
              <p className={styles.text}>
                We recognize that DOT physicals can be stressful, especially if you have ongoing health conditions or concerns about meeting medical standards. Many drivers worry about losing their CDL due to health issues, and we approach these concerns with sensitivity and practical problem-solving.
              </p>
              <p className={styles.text}>
                If you have diabetes, hypertension, sleep apnea, or other conditions requiring special attention during DOT certification, our medical team works with you to ensure proper documentation and develop management strategies that support both your health and your ability to continue driving safely.
              </p>
            </div>
            <div className={styles.conditionsGrid}>
              <div className={styles.conditionCard}>
                <h4>Diabetes Management</h4>
                <p>Guidance on meeting FMCSA standards for blood sugar control</p>
              </div>
              <div className={styles.conditionCard}>
                <h4>Blood Pressure Control</h4>
                <p>Strategies to maintain certification-compliant levels</p>
              </div>
              <div className={styles.conditionCard}>
                <h4>Sleep Apnea</h4>
                <p>Documentation and compliance support for CPAP users</p>
              </div>
            </div>
          </div>
        </section>

        {/* Respect for Drivers */}
        <section className={`${styles.section} ${styles.bgAccent}`}>
          <div className={styles.container}>
            <div className={styles.testimonialBox}>
              <h2 className={styles.testimonialTitle}>We Respect Your Essential Work</h2>
              <p className={styles.testimonialText}>
                At Garcia Family Medicine, we have profound respect for professional drivers and the essential role you play in our economy and daily lives. From delivering life-saving medical supplies to ensuring grocery store shelves stay stocked, from transporting students safely to school to moving freight that supports countless businesses—your work matters, and we never forget that.
              </p>
              <p className={styles.testimonialText}>
                This respect influences every aspect of our ClearRoad™ service, as we approach your DOT physical with the seriousness and care that reflects the importance of your profession.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Get Back on the Road?</h2>
            <p className={styles.ctaSubtitle}>
              Schedule your DOT physical today and experience the ClearRoad™ difference
            </p>
            <div className={styles.ctaButtons}>
              <a href="tel:816-427-5320" className={styles.ctaPrimary}>
                Call Now: 816-427-5320
              </a>
              <Link href="/contact" className={styles.ctaSecondary}>
                Schedule Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}