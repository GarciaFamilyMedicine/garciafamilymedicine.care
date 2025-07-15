'use client';

import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function TelehealthPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Telehealth Services
              </h1>
              <p className={styles.heroSubtitle}>
                Convenient virtual healthcare from the comfort of your home with Garcia Family Medicine
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Schedule Virtual Visit: 816-427-5320
                </a>
                <a href="#services" className={styles.secondaryButton}>
                  Virtual Services
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.certificationBadge}>
                <div className={styles.badgeIcon}>📱</div>
                <div className={styles.badgeText}>
                  <span>Virtual</span>
                  <span>Care</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className={styles.quickInfo}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🏠</div>
                <h3>From Home</h3>
                <p>Healthcare from your location</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>⏰</div>
                <h3>Flexible Hours</h3>
                <p>Convenient appointment times</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>💻</div>
                <h3>Easy Access</h3>
                <p>Simple video platform</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>✅</div>
                <h3>Insurance Covered</h3>
                <p>Most plans accepted</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Virtual Healthcare Services</h2>
              <p>Comprehensive medical care delivered through secure telehealth technology</p>
            </div>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🩺</div>
                <h3>Virtual Consultations</h3>
                <p>Primary care visits and medical consultations</p>
                <ul>
                  <li>Routine check-ups</li>
                  <li>Follow-up appointments</li>
                  <li>Symptom evaluation</li>
                  <li>Medical advice</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🧠</div>
                <h3>Mental Health Support</h3>
                <p>Telehealth mental health and counseling services</p>
                <ul>
                  <li>Depression and anxiety care</li>
                  <li>Stress management</li>
                  <li>Medication management</li>
                  <li>Therapy sessions</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💊</div>
                <h3>Medication Management</h3>
                <p>Prescription management and medication reviews</p>
                <ul>
                  <li>Prescription refills</li>
                  <li>Medication adjustments</li>
                  <li>Side effect monitoring</li>
                  <li>Drug interaction reviews</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔬</div>
                <h3>Chronic Disease Management</h3>
                <p>Ongoing care for chronic health conditions</p>
                <ul>
                  <li>Diabetes monitoring</li>
                  <li>Hypertension management</li>
                  <li>Chronic pain support</li>
                  <li>Care plan adjustments</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📋</div>
                <h3>Health Education</h3>
                <p>Patient education and wellness guidance</p>
                <ul>
                  <li>Lifestyle counseling</li>
                  <li>Nutrition guidance</li>
                  <li>Exercise planning</li>
                  <li>Preventive care education</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>👨‍👩‍👧‍👦</div>
                <h3>Family Care</h3>
                <p>Virtual healthcare for the entire family</p>
                <ul>
                  <li>Pediatric consultations</li>
                  <li>Adult preventive care</li>
                  <li>Senior health management</li>
                  <li>Family health planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2>How Telehealth Works</h2>
            <div className={styles.processGrid}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Schedule Appointment</h3>
                <p>Call 816-427-5320 to book your virtual visit</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Receive Instructions</h3>
                <p>Get secure video link and appointment details</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Join Virtual Visit</h3>
                <p>Connect from your computer, tablet, or smartphone</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Receive Care</h3>
                <p>Complete consultation and receive treatment plan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.benefitsContent}>
              <h2>Benefits of Telehealth Care</h2>
              <p>Virtual healthcare offers numerous advantages while maintaining the same quality of care:</p>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🏠</div>
                  <h3>Convenience</h3>
                  <p>Receive medical care from the comfort of your home, eliminating travel time and transportation barriers</p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>⏰</div>
                  <h3>Flexible Scheduling</h3>
                  <p>Access to more appointment times, including early morning and evening slots that fit your schedule</p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🦠</div>
                  <h3>Reduced Exposure</h3>
                  <p>Minimize exposure to illnesses in waiting rooms while still receiving comprehensive medical care</p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>💰</div>
                  <h3>Cost Effective</h3>
                  <p>Save on transportation costs and time off work while accessing the same quality healthcare</p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🌍</div>
                  <h3>Accessibility</h3>
                  <p>Perfect for patients with mobility issues, those in rural areas, or during inclement weather</p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>👨‍👩‍👧‍👦</div>
                  <h3>Family Friendly</h3>
                  <p>Include family members in consultations easily, improving communication and care coordination</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className={styles.requirementsSection}>
          <div className={styles.container}>
            <h2>What You Need for Your Virtual Visit</h2>
            <div className={styles.requirementsGrid}>
              <div className={styles.requirementCard}>
                <div className={styles.requirementIcon}>💻</div>
                <h3>Device</h3>
                <p>Computer, tablet, or smartphone with internet connection</p>
              </div>
              <div className={styles.requirementCard}>
                <div className={styles.requirementIcon}>📹</div>
                <h3>Camera & Microphone</h3>
                <p>Built-in or external camera and microphone for video chat</p>
              </div>
              <div className={styles.requirementCard}>
                <div className={styles.requirementIcon}>🌐</div>
                <h3>Stable Internet</h3>
                <p>Reliable high-speed internet connection for clear video quality</p>
              </div>
              <div className={styles.requirementCard}>
                <div className={styles.requirementIcon}>🔒</div>
                <h3>Private Space</h3>
                <p>Quiet, private location for your confidential medical consultation</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Ready to Try Virtual Healthcare?</h2>
              <p>Experience convenient, high-quality medical care from the comfort of your home</p>
              <div className={styles.ctaButtons}>
                <a href="tel:816-427-5320" className={styles.ctaButton}>
                  Schedule Virtual Visit: 816-427-5320
                </a>
              </div>
              <div className={styles.ctaInfo}>
                <div className={styles.clinicInfo}>
                  <h4>Garcia Family Medicine</h4>
                  <p>801 NW St. Mary Drive</p>
                  <p>Secure HIPAA-Compliant Telehealth Platform</p>
                  <p>Virtual appointments available Monday-Friday</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}