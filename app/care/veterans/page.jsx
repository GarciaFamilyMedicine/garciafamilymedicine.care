'use client';

import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function VeteransPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Veterans Healthcare
              </h1>
              <p className={styles.heroSubtitle}>
                Dedicated healthcare services for our nation's veterans at Garcia Family Medicine
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Schedule Appointment: 816-427-5320
                </a>
                <a href="#services" className={styles.secondaryButton}>
                  Veteran Services
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.certificationBadge}>
                <div className={styles.badgeIcon}>🇺🇸</div>
                <div className={styles.badgeText}>
                  <span>Veterans</span>
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
                <div className={styles.infoIcon}>🎖️</div>
                <h3>Veteran-Focused</h3>
                <p>Understanding military service</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🩺</div>
                <h3>Comprehensive Care</h3>
                <p>Full spectrum medical services</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🧠</div>
                <h3>PTSD Support</h3>
                <p>Mental health understanding</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📋</div>
                <h3>VA Coordination</h3>
                <p>Works with VA benefits</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Veteran Healthcare Services</h2>
              <p>Comprehensive medical care designed with understanding of military service and veteran needs</p>
            </div>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🧠</div>
                <h3>Mental Health Support</h3>
                <p>Specialized mental health care for veterans</p>
                <ul>
                  <li>PTSD counseling and treatment</li>
                  <li>Depression and anxiety care</li>
                  <li>Combat stress management</li>
                  <li>Substance abuse support</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🦴</div>
                <h3>Service-Connected Conditions</h3>
                <p>Treatment for military service-related health issues</p>
                <ul>
                  <li>Hearing loss management</li>
                  <li>Musculoskeletal injuries</li>
                  <li>Chronic pain conditions</li>
                  <li>Respiratory conditions</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💊</div>
                <h3>Medication Management</h3>
                <p>Comprehensive medication oversight and coordination</p>
                <ul>
                  <li>VA medication coordination</li>
                  <li>Drug interaction monitoring</li>
                  <li>Pain medication management</li>
                  <li>Mental health medications</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔬</div>
                <h3>Preventive Care</h3>
                <p>Proactive health maintenance for veterans</p>
                <ul>
                  <li>Annual wellness exams</li>
                  <li>Cancer screenings</li>
                  <li>Cardiovascular assessments</li>
                  <li>Immunizations</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔄</div>
                <h3>Transition Support</h3>
                <p>Healthcare during military-to-civilian transition</p>
                <ul>
                  <li>Post-deployment health screenings</li>
                  <li>VA benefits navigation</li>
                  <li>Civilian healthcare transition</li>
                  <li>Family support services</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>👨‍👩‍👧‍👦</div>
                <h3>Family Care</h3>
                <p>Healthcare services for veteran families</p>
                <ul>
                  <li>Spouse and dependent care</li>
                  <li>Family counseling</li>
                  <li>Military family stress support</li>
                  <li>Deployment support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className={styles.understandingSection}>
          <div className={styles.container}>
            <h2>Understanding Veteran Healthcare Needs</h2>
            <div className={styles.understandingGrid}>
              <div className={styles.understandingCard}>
                <div className={styles.understandingNumber}>🎯</div>
                <h3>Military Culture Awareness</h3>
                <p>Deep understanding of military culture, values, and the unique challenges veterans face</p>
              </div>
              <div className={styles.understandingCard}>
                <div className={styles.understandingNumber}>🤝</div>
                <h3>Trust & Respect</h3>
                <p>Building therapeutic relationships based on mutual respect and understanding of service</p>
              </div>
              <div className={styles.understandingCard}>
                <div className={styles.understandingNumber}>🔗</div>
                <h3>VA Coordination</h3>
                <p>Seamless coordination with VA healthcare services and benefits programs</p>
              </div>
              <div className={styles.understandingCard}>
                <div className={styles.understandingNumber}>💪</div>
                <h3>Strength-Based Care</h3>
                <p>Healthcare that builds on veteran strengths, resilience, and military training</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.conditionsContent}>
              <h2>Common Veteran Health Conditions</h2>
              <p>Garcia Family Medicine provides specialized care for health conditions commonly affecting veterans:</p>
              <div className={styles.conditionsGrid}>
                <div className={styles.conditionCategory}>
                  <h4>Mental Health Conditions</h4>
                  <ul>
                    <li>Post-traumatic stress disorder (PTSD)</li>
                    <li>Depression and anxiety</li>
                    <li>Traumatic brain injury (TBI)</li>
                    <li>Substance use disorders</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Physical Health Issues</h4>
                  <ul>
                    <li>Chronic pain conditions</li>
                    <li>Hearing loss and tinnitus</li>
                    <li>Musculoskeletal injuries</li>
                    <li>Respiratory conditions</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Service-Connected Disabilities</h4>
                  <ul>
                    <li>Combat-related injuries</li>
                    <li>Exposure-related illnesses</li>
                    <li>Gulf War syndrome</li>
                    <li>Agent Orange-related conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className={styles.supportSection}>
          <div className={styles.container}>
            <div className={styles.supportContent}>
              <h2>Veteran Support Resources</h2>
              <div className={styles.supportGrid}>
                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>📞</div>
                  <h3>Crisis Support</h3>
                  <p>24/7 veteran crisis support and emergency mental health resources</p>
                  <div className={styles.crisisInfo}>
                    <p><strong>Veterans Crisis Line:</strong></p>
                    <p>Call 988, then Press 1</p>
                    <p>Text 838255</p>
                  </div>
                </div>
                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>🏛️</div>
                  <h3>VA Benefits</h3>
                  <p>Assistance navigating VA healthcare and disability benefits programs</p>
                </div>
                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>👥</div>
                  <h3>Peer Support</h3>
                  <p>Connection to veteran peer support groups and community resources</p>
                </div>
                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>🏠</div>
                  <h3>Family Resources</h3>
                  <p>Support services for veteran families and military spouses</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Serving Those Who Served</h2>
              <p>Honor your service with healthcare that understands your unique needs and experiences</p>
              <div className={styles.ctaButtons}>
                <a href="tel:816-427-5320" className={styles.ctaButton}>
                  Call Now: 816-427-5320
                </a>
              </div>
              <div className={styles.ctaInfo}>
                <div className={styles.clinicInfo}>
                  <h4>Garcia Family Medicine</h4>
                  <p>801 NW St. Mary Drive</p>
                  <p>Veteran-Centered Healthcare</p>
                  <p>Thank you for your service to our nation</p>
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