'use client';

import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function MentalHealthPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Mental Health Services
              </h1>
              <p className={styles.heroSubtitle}>
                Compassionate mental health care with integrated medical services at Garcia Family Medicine
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Schedule Consultation: 816-427-5320
                </a>
                <a href="#services" className={styles.secondaryButton}>
                  Our Services
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.certificationBadge}>
                <div className={styles.badgeIcon}>🧠</div>
                <div className={styles.badgeText}>
                  <span>Mental</span>
                  <span>Wellness</span>
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
                <div className={styles.infoIcon}>🤝</div>
                <h3>Confidential Care</h3>
                <p>Safe, private environment</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>👨‍⚕️</div>
                <h3>Integrated Care</h3>
                <p>Medical and mental health together</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>💊</div>
                <h3>Medication Management</h3>
                <p>Comprehensive psychiatric care</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📱</div>
                <h3>Telehealth Available</h3>
                <p>Virtual mental health sessions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Mental Health Services</h2>
              <p>Comprehensive mental health care integrated with your primary medical care</p>
            </div>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>😟</div>
                <h3>Anxiety & Depression</h3>
                <p>Evidence-based treatment for mood disorders</p>
                <ul>
                  <li>Generalized anxiety disorder</li>
                  <li>Major depressive disorder</li>
                  <li>Panic disorder treatment</li>
                  <li>Social anxiety management</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>😴</div>
                <h3>Sleep Disorders</h3>
                <p>Comprehensive sleep and mental health care</p>
                <ul>
                  <li>Insomnia treatment</li>
                  <li>Sleep hygiene counseling</li>
                  <li>Anxiety-related sleep issues</li>
                  <li>Depression and sleep patterns</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💼</div>
                <h3>Stress Management</h3>
                <p>Professional stress and workplace mental health</p>
                <ul>
                  <li>Work-related stress</li>
                  <li>Burnout prevention</li>
                  <li>Coping strategies</li>
                  <li>Life transition support</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💔</div>
                <h3>Grief & Loss</h3>
                <p>Compassionate support during difficult times</p>
                <ul>
                  <li>Bereavement counseling</li>
                  <li>Loss and adjustment</li>
                  <li>Complicated grief</li>
                  <li>Family support</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏠</div>
                <h3>Family Counseling</h3>
                <p>Mental health support for the whole family</p>
                <ul>
                  <li>Family therapy sessions</li>
                  <li>Adolescent mental health</li>
                  <li>Parenting support</li>
                  <li>Communication skills</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💊</div>
                <h3>Medication Management</h3>
                <p>Psychiatric medication monitoring and adjustment</p>
                <ul>
                  <li>Antidepressant management</li>
                  <li>Anti-anxiety medications</li>
                  <li>Mood stabilizers</li>
                  <li>Side effect monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className={styles.approachSection}>
          <div className={styles.container}>
            <h2>Our Integrated Approach</h2>
            <div className={styles.approachGrid}>
              <div className={styles.approachCard}>
                <div className={styles.approachNumber}>1</div>
                <h3>Holistic Assessment</h3>
                <p>Comprehensive evaluation of both physical and mental health factors</p>
              </div>
              <div className={styles.approachCard}>
                <div className={styles.approachNumber}>2</div>
                <h3>Personalized Treatment</h3>
                <p>Tailored mental health plans that consider your overall medical care</p>
              </div>
              <div className={styles.approachCard}>
                <div className={styles.approachNumber}>3</div>
                <h3>Coordinated Care</h3>
                <p>Seamless integration between mental health and primary care services</p>
              </div>
              <div className={styles.approachCard}>
                <div className={styles.approachNumber}>4</div>
                <h3>Ongoing Support</h3>
                <p>Continuous monitoring and adjustment of treatment plans</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.conditionsContent}>
              <h2>Mental Health Conditions We Treat</h2>
              <p>Garcia Family Medicine provides comprehensive care for a wide range of mental health conditions:</p>
              <div className={styles.conditionsGrid}>
                <div className={styles.conditionCategory}>
                  <h4>Mood Disorders</h4>
                  <ul>
                    <li>Major depressive disorder</li>
                    <li>Persistent depressive disorder</li>
                    <li>Bipolar disorder</li>
                    <li>Seasonal affective disorder</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Anxiety Disorders</h4>
                  <ul>
                    <li>Generalized anxiety disorder</li>
                    <li>Panic disorder</li>
                    <li>Social anxiety disorder</li>
                    <li>Specific phobias</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Other Conditions</h4>
                  <ul>
                    <li>Post-traumatic stress disorder</li>
                    <li>Obsessive-compulsive disorder</li>
                    <li>Attention deficit disorders</li>
                    <li>Adjustment disorders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <div className={styles.benefitsContent}>
              <h2>Benefits of Integrated Mental Health Care</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🏥</div>
                  <h3>One Provider</h3>
                  <p>Mental health and medical care from the same trusted team</p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>📋</div>
                  <h3>Complete Picture</h3>
                  <p>Comprehensive understanding of your physical and mental health</p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>⏰</div>
                  <h3>Convenient Care</h3>
                  <p>Address mental health concerns during regular medical visits</p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>💡</div>
                  <h3>Better Outcomes</h3>
                  <p>Improved health outcomes through coordinated care approaches</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Ready to Prioritize Your Mental Health?</h2>
              <p>Take the first step toward better mental wellness with compassionate, integrated care</p>
              <div className={styles.ctaButtons}>
                <a href="tel:816-427-5320" className={styles.ctaButton}>
                  Call Now: 816-427-5320
                </a>
              </div>
              <div className={styles.ctaInfo}>
                <div className={styles.clinicInfo}>
                  <h4>Garcia Family Medicine</h4>
                  <p>801 NW St. Mary Drive</p>
                  <p>Confidential Mental Health Services</p>
                  <p>Telehealth appointments available for mental health consultations</p>
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