'use client';

import styles from '../learn/service.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import { FaHeart, FaUserMd, FaShieldAlt, FaStethoscope, FaCalendarCheck, FaHandsHelping } from 'react-icons/fa';

export default function ServicesMainPage() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Medical Services</h1>
            <p className={styles.heroSubtitle}>Comprehensive Healthcare Services Tailored to Your Needs</p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introSection}>
            <div className={styles.container}>
              <p className={styles.leadText}>
                At Garcia Family Medicine, we provide comprehensive medical services with a focus on personalized, compassionate care. From routine preventive care to specialized treatments, we're here to support your health journey.
              </p>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Premium Healthcare Services</h2>
              <p className={styles.sectionSubtitle}>Medical services we provide</p>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaHeart className={styles.serviceIcon} />
                  <h3><Link href="/services/faith-family-medicine">Faith & Family Medicine™</Link></h3>
                  <p>Whole-person care honoring body, soul, and spirit</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaStethoscope className={styles.serviceIcon} />
                  <h3><Link href="/services/corelift">CoreLift™ Program</Link></h3>
                  <p>Revolutionary pelvic floor strengthening</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaHandsHelping className={styles.serviceIcon} />
                  <h3><Link href="/services/nourish-thrive-journey">Nourish & Thrive™ Journey</Link></h3>
                  <p>12-month wellness transformation</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaShieldAlt className={styles.serviceIcon} />
                  <h3><Link href="/services/truerelief-therapy">TrueRelief™ Therapy</Link></h3>
                  <p>Non-opioid pain management</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeart className={styles.serviceIcon} />
                  <h3><Link href="/services/peacewithin-life-coaching">PeaceWithin™ Life Coaching</Link></h3>
                  <p>Trauma-informed healing</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Professional Medical Services</h2>
              <p className={styles.sectionSubtitle}>Specialized care we offer</p>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaUserMd className={styles.serviceIcon} />
                  <h3><Link href="/services/clearroad-dot-exams">ClearRoad™ DOT Exams</Link></h3>
                  <p>Commercial driver physicals</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaStethoscope className={styles.serviceIcon} />
                  <h3><Link href="/services/valorview-ime">ValorView™ IME</Link></h3>
                  <p>Independent medical exams</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaShieldAlt className={styles.serviceIcon} />
                  <h3><Link href="/services/valorlink-letter">ValorLink™ Letters</Link></h3>
                  <p>Veteran disability support</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaCalendarCheck className={styles.serviceIcon} />
                  <h3><Link href="/services/myclinic365">MyClinic365™</Link></h3>
                  <p>Workplace healthcare</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaHandsHelping className={styles.serviceIcon} />
                  <h3><Link href="/services/carebridge">CareBridge™</Link></h3>
                  <p>24/7 healthcare platform</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.approachSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Our Approach to Care</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <h3>Personalized Medicine</h3>
                  <p>Every treatment plan is tailored to your unique health needs, lifestyle, and personal preferences for optimal outcomes.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Comprehensive Care</h3>
                  <p>We address not just symptoms but the whole person, considering physical, mental, and spiritual aspects of health.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Evidence-Based Treatment</h3>
                  <p>Our medical services are grounded in the latest research and best practices in healthcare and medicine.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Patient Partnership</h3>
                  <p>We believe in working together with you to achieve your health goals through shared decision-making and open communication.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Accessible Healthcare</h3>
                  <p>We offer flexible scheduling, telehealth options, and various payment methods to make healthcare accessible to all.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Continuous Support</h3>
                  <p>Our care extends beyond appointments with ongoing support, follow-up care, and resources for your health journey.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.faqSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Getting Started</h2>
              <div className={styles.faqGrid}>
                <div className={styles.faqItem}>
                  <h3>How do I schedule an appointment?</h3>
                  <p>Call us at 816-427-5320 to schedule your appointment. We offer flexible scheduling to accommodate your needs.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Do you accept insurance?</h3>
                  <p>We work with most major insurance plans. Please call our office to verify your specific coverage and benefits.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>What should I bring to my first visit?</h3>
                  <p>Bring your insurance card, ID, current medications list, and any relevant medical records from previous providers.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Do you offer same-day appointments?</h3>
                  <p>We strive to accommodate urgent care needs and may have same-day availability. Call our office to check current availability.</p>
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