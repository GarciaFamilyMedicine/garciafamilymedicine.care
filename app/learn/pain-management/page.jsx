'use client';

import styles from '../service.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import { FaBrain, FaHeartbeat, FaShieldAlt, FaLightbulb, FaUserMd, FaHeart } from 'react-icons/fa';

export default function PainManagementPage() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Understanding Pain Management</h1>
            <p className={styles.heroSubtitle}>Essential Health Information About Pain Conditions and Relief Strategies</p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introSection}>
            <div className={styles.container}>
              <p className={styles.leadText}>
                Pain is a complex health experience that affects millions of people. Understanding different types of pain, their causes, and management strategies can help you make informed decisions about your health and well-being.
              </p>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Types of Pain</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaLightbulb className={styles.serviceIcon} />
                  <h3>Acute vs. Chronic Pain</h3>
                  <ul className={styles.serviceList}>
                    <li>Acute: Short-term, usually under 3 months</li>
                    <li>Chronic: Persistent pain lasting over 3 months</li>
                    <li>Acute often has clear cause and healing timeline</li>
                    <li>Chronic may require ongoing management strategies</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaBrain className={styles.serviceIcon} />
                  <h3>Neuropathic Pain</h3>
                  <ul className={styles.serviceList}>
                    <li>Caused by nerve damage or dysfunction</li>
                    <li>Often described as burning, tingling, or shooting</li>
                    <li>Common in diabetes, shingles, or injuries</li>
                    <li>May respond differently to standard pain medications</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeartbeat className={styles.serviceIcon} />
                  <h3>Musculoskeletal Pain</h3>
                  <ul className={styles.serviceList}>
                    <li>Affects muscles, bones, joints, and connective tissue</li>
                    <li>Can result from injury, overuse, or disease</li>
                    <li>Includes arthritis, back pain, and muscle strains</li>
                    <li>Often responds well to movement and therapy</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeart className={styles.serviceIcon} />
                  <h3>Inflammatory Pain</h3>
                  <ul className={styles.serviceList}>
                    <li>Body's immune response to injury or disease</li>
                    <li>Common in conditions like arthritis or injury</li>
                    <li>Often accompanied by swelling and redness</li>
                    <li>May improve with anti-inflammatory treatments</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Common Pain Conditions & Health Information</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaUserMd className={styles.serviceIcon} />
                  <h3>Arthritis</h3>
                  <ul className={styles.serviceList}>
                    <li>Joint inflammation causing pain and stiffness</li>
                    <li>Osteoarthritis: wear-and-tear on joints</li>
                    <li>Rheumatoid: autoimmune joint inflammation</li>
                    <li>Exercise and weight management can help</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaShieldAlt className={styles.serviceIcon} />
                  <h3>Fibromyalgia</h3>
                  <ul className={styles.serviceList}>
                    <li>Widespread musculoskeletal pain</li>
                    <li>Often accompanied by fatigue and sleep issues</li>
                    <li>May involve heightened pain sensitivity</li>
                    <li>Stress management and sleep hygiene important</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaBrain className={styles.serviceIcon} />
                  <h3>Chronic Back Pain</h3>
                  <ul className={styles.serviceList}>
                    <li>Can result from injury, posture, or conditions</li>
                    <li>Core strengthening may help prevent recurrence</li>
                    <li>Proper lifting techniques reduce risk</li>
                    <li>Ergonomic workplace setup is beneficial</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeartbeat className={styles.serviceIcon} />
                  <h3>Headaches & Migraines</h3>
                  <ul className={styles.serviceList}>
                    <li>Tension headaches often stress-related</li>
                    <li>Migraines may have specific triggers</li>
                    <li>Hydration and sleep patterns affect frequency</li>
                    <li>Tracking triggers can help with prevention</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.approachSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Pain Management Strategies</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <h3>Physical Activity</h3>
                  <p>Regular, appropriate exercise can reduce pain, improve function, and boost mood. Low-impact activities like walking, swimming, or gentle yoga are often beneficial.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Stress Management</h3>
                  <p>Chronic stress can worsen pain. Techniques like deep breathing, meditation, or relaxation exercises can help break the stress-pain cycle.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Sleep Hygiene</h3>
                  <p>Poor sleep worsens pain sensitivity. Maintaining regular sleep schedules, creating a restful environment, and addressing sleep disorders are important.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Heat and Cold Therapy</h3>
                  <p>Ice can reduce inflammation and numb acute pain. Heat can relax muscles and improve blood flow. Use for 15-20 minutes at a time.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Mindfulness Techniques</h3>
                  <p>Mindfulness and cognitive techniques can help change how you perceive and respond to pain, reducing its impact on daily life.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Nutrition</h3>
                  <p>Anti-inflammatory foods like fruits, vegetables, and omega-3 rich fish may help reduce pain. Maintaining healthy weight reduces joint stress.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.faqSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <div className={styles.faqGrid}>
                <div className={styles.faqItem}>
                  <h3>When should I see a doctor about pain?</h3>
                  <p>Seek medical attention for pain that persists, worsens, interferes with daily activities, or is accompanied by other concerning symptoms.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Are pain medications addictive?</h3>
                  <p>Some pain medications carry addiction risk, especially opioids. Work with healthcare providers to use medications safely and explore non-drug options when appropriate.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Can exercise make pain worse?</h3>
                  <p>Appropriate exercise usually helps reduce pain over time. Start slowly, choose low-impact activities, and consult healthcare providers about safe exercise programs.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>How does mental health affect pain?</h3>
                  <p>Mental health and pain are closely connected. Depression and anxiety can worsen pain, while chronic pain can affect mood. Addressing both is important for overall well-being.</p>
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