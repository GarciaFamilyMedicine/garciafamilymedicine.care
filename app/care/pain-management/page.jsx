'use client';

import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function PainManagementPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Pain Management Services
              </h1>
              <p className={styles.heroSubtitle}>
                Comprehensive pain management and relief strategies at Garcia Family Medicine
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Schedule Consultation: 816-427-5320
                </a>
                <a href="#services" className={styles.secondaryButton}>
                  Pain Services
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.certificationBadge}>
                <div className={styles.badgeIcon}>🎯</div>
                <div className={styles.badgeText}>
                  <span>Pain</span>
                  <span>Relief</span>
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
                <div className={styles.infoIcon}>🩺</div>
                <h3>Comprehensive Care</h3>
                <p>Multi-modal pain treatment</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>💊</div>
                <h3>Medication Management</h3>
                <p>Safe, effective pain medications</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🧘</div>
                <h3>Non-Drug Options</h3>
                <p>Alternative pain therapies</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📋</div>
                <h3>Treatment Plans</h3>
                <p>Personalized pain management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Pain Management Services</h2>
              <p>Comprehensive pain relief strategies tailored to your specific condition and needs</p>
            </div>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🦴</div>
                <h3>Chronic Pain Management</h3>
                <p>Long-term pain relief strategies and ongoing care</p>
                <ul>
                  <li>Arthritis pain management</li>
                  <li>Fibromyalgia treatment</li>
                  <li>Chronic back pain</li>
                  <li>Neuropathic pain</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>⚡</div>
                <h3>Acute Pain Treatment</h3>
                <p>Immediate relief for sudden onset pain conditions</p>
                <ul>
                  <li>Injury-related pain</li>
                  <li>Post-surgical pain</li>
                  <li>Acute flare-ups</li>
                  <li>Emergency pain relief</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💊</div>
                <h3>Medication Management</h3>
                <p>Safe and effective pharmaceutical pain management</p>
                <ul>
                  <li>Prescription pain medications</li>
                  <li>Medication monitoring</li>
                  <li>Dosage optimization</li>
                  <li>Side effect management</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🧘</div>
                <h3>Non-Pharmacological Therapy</h3>
                <p>Drug-free pain management techniques</p>
                <ul>
                  <li>Physical therapy referrals</li>
                  <li>Relaxation techniques</li>
                  <li>Lifestyle modifications</li>
                  <li>Stress management</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🎯</div>
                <h3>Interventional Procedures</h3>
                <p>Specialized pain intervention treatments</p>
                <ul>
                  <li>Joint injections</li>
                  <li>Trigger point injections</li>
                  <li>Steroid injections</li>
                  <li>Referrals to specialists</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏠</div>
                <h3>Pain Education & Support</h3>
                <p>Empowering patients with pain management knowledge</p>
                <ul>
                  <li>Pain education sessions</li>
                  <li>Self-management techniques</li>
                  <li>Family support guidance</li>
                  <li>Resource coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className={styles.approachSection}>
          <div className={styles.container}>
            <h2>Our Multi-Modal Approach</h2>
            <div className={styles.approachGrid}>
              <div className={styles.approachCard}>
                <div className={styles.approachNumber}>1</div>
                <h3>Comprehensive Assessment</h3>
                <p>Thorough evaluation of pain sources, intensity, and impact on daily life</p>
              </div>
              <div className={styles.approachCard}>
                <div className={styles.approachNumber}>2</div>
                <h3>Personalized Treatment</h3>
                <p>Customized pain management plans based on individual needs and preferences</p>
              </div>
              <div className={styles.approachCard}>
                <div className={styles.approachNumber}>3</div>
                <h3>Multi-Modal Therapy</h3>
                <p>Combination of medications, therapies, and lifestyle interventions</p>
              </div>
              <div className={styles.approachCard}>
                <div className={styles.approachNumber}>4</div>
                <h3>Ongoing Monitoring</h3>
                <p>Regular follow-up and treatment plan adjustments for optimal results</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.conditionsContent}>
              <h2>Pain Conditions We Treat</h2>
              <p>Garcia Family Medicine provides comprehensive care for various types of pain conditions:</p>
              <div className={styles.conditionsGrid}>
                <div className={styles.conditionCategory}>
                  <h4>Musculoskeletal Pain</h4>
                  <ul>
                    <li>Back and neck pain</li>
                    <li>Arthritis (osteoarthritis, rheumatoid)</li>
                    <li>Joint pain and stiffness</li>
                    <li>Muscle strains and sprains</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Chronic Pain Conditions</h4>
                  <ul>
                    <li>Fibromyalgia</li>
                    <li>Chronic fatigue syndrome</li>
                    <li>Migraine and headaches</li>
                    <li>Neuropathic pain</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Injury-Related Pain</h4>
                  <ul>
                    <li>Work-related injuries</li>
                    <li>Sports injuries</li>
                    <li>Auto accident injuries</li>
                    <li>Post-surgical pain</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <div className={styles.treatmentContent}>
              <h2>Treatment Options Available</h2>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentCard}>
                  <div className={styles.treatmentIcon}>💊</div>
                  <h3>Medications</h3>
                  <p>NSAIDs, muscle relaxants, nerve pain medications, and when appropriate, opioid therapy with careful monitoring</p>
                </div>
                <div className={styles.treatmentCard}>
                  <div className={styles.treatmentIcon}>💉</div>
                  <h3>Injections</h3>
                  <p>Corticosteroid injections, trigger point injections, and joint injections for targeted pain relief</p>
                </div>
                <div className={styles.treatmentCard}>
                  <div className={styles.treatmentIcon}>🏃</div>
                  <h3>Physical Therapy</h3>
                  <p>Exercise programs, stretching, strengthening, and movement therapy referrals</p>
                </div>
                <div className={styles.treatmentCard}>
                  <div className={styles.treatmentIcon}>🧠</div>
                  <h3>Mind-Body Techniques</h3>
                  <p>Stress reduction, relaxation techniques, and cognitive behavioral strategies</p>
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