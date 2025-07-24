'use client';

import styles from './truerelief-therapy.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle, FaShieldAlt, FaHeartbeat, FaClock, FaUserMd, FaChartLine } from 'react-icons/fa';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function TrueReliefTherapyPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>TrueRelief™ Therapy</h1>
          <p className={styles.heroSubtitle}>Revolutionary Non-Opioid Pain Management</p>
          <p className={styles.heroDescription}>
            Experience breakthrough pain relief without the risks of opioid dependency. 
            Our evidence-based approach combines cutting-edge therapies for lasting results.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              Start Your Pain-Free Journey
            </Link>
            <Link href="#how-it-works" className={styles.secondaryButton}>
              Learn How It Works
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/services/truerelief-therapy/hero.jpg"
            alt="TrueRelief Therapy - Non-Opioid Pain Management"
            width={600}
            height={400}
            className={styles.image}
            unoptimized
          />
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>87%</div>
            <div className={styles.statLabel}>Pain Reduction</div>
            <div className={styles.statDescription}>Average improvement in first 30 days</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>0%</div>
            <div className={styles.statLabel}>Addiction Risk</div>
            <div className={styles.statDescription}>Completely opioid-free treatment</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>94%</div>
            <div className={styles.statLabel}>Patient Satisfaction</div>
            <div className={styles.statDescription}>Would recommend to others</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Years Experience</div>
            <div className={styles.statDescription}>In advanced pain management</div>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <h2 className={styles.sectionTitle}>Why Choose TrueRelief™?</h2>
        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <FaShieldAlt className={styles.whyIcon} />
            <h3>Safe & Non-Addictive</h3>
            <p>No risk of dependency or harmful side effects associated with opioid medications</p>
          </div>
          <div className={styles.whyCard}>
            <FaHeartbeat className={styles.whyIcon} />
            <h3>Holistic Approach</h3>
            <p>Addresses root causes, not just symptoms, for comprehensive healing</p>
          </div>
          <div className={styles.whyCard}>
            <FaChartLine className={styles.whyIcon} />
            <h3>Proven Results</h3>
            <p>Evidence-based therapies with documented success rates</p>
          </div>
          <div className={styles.whyCard}>
            <FaUserMd className={styles.whyIcon} />
            <h3>Expert Care Team</h3>
            <p>Specialized providers trained in advanced pain management techniques</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className={styles.processSection}>
        <h2 className={styles.sectionTitle}>Your Path to Pain Relief</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Comprehensive Assessment</h3>
            <p>Detailed evaluation of your pain history, triggers, and impact on daily life</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Personalized Treatment Plan</h3>
            <p>Custom protocol combining multiple evidence-based therapies</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Active Treatment Phase</h3>
            <p>Regular sessions with ongoing monitoring and adjustments</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Long-Term Management</h3>
            <p>Maintenance strategies to prevent pain recurrence</p>
          </div>
        </div>
      </section>

      <section className={styles.therapiesSection}>
        <h2 className={styles.sectionTitle}>Our Treatment Modalities</h2>
        <div className={styles.therapiesGrid}>
          <div className={styles.therapyCard}>
            <h3>Regenerative Medicine</h3>
            <p>Advanced biologics to promote natural healing and tissue repair</p>
          </div>
          <div className={styles.therapyCard}>
            <h3>Neuromodulation</h3>
            <p>Innovative techniques to reset pain signaling pathways</p>
          </div>
          <div className={styles.therapyCard}>
            <h3>Physical Rehabilitation</h3>
            <p>Targeted exercises and manual therapy for functional improvement</p>
          </div>
          <div className={styles.therapyCard}>
            <h3>Mind-Body Integration</h3>
            <p>Psychological strategies to manage pain perception and stress</p>
          </div>
          <div className={styles.therapyCard}>
            <h3>Nutritional Optimization</h3>
            <p>Anti-inflammatory protocols to support healing from within</p>
          </div>
          <div className={styles.therapyCard}>
            <h3>Alternative Therapies</h3>
            <p>Acupuncture, massage, and other complementary approaches</p>
          </div>
        </div>
      </section>

      <section className={styles.conditionsSection}>
        <h2 className={styles.sectionTitle}>Conditions We Treat</h2>
        <div className={styles.conditionsGrid}>
          <div className={styles.conditionCategory}>
            <h3>Chronic Pain Conditions</h3>
            <ul>
              <li><FaCheckCircle /> Fibromyalgia</li>
              <li><FaCheckCircle /> Chronic back pain</li>
              <li><FaCheckCircle /> Neck pain</li>
              <li><FaCheckCircle /> Arthritis</li>
            </ul>
          </div>
          <div className={styles.conditionCategory}>
            <h3>Nerve-Related Pain</h3>
            <ul>
              <li><FaCheckCircle /> Neuropathy</li>
              <li><FaCheckCircle /> Sciatica</li>
              <li><FaCheckCircle /> Complex Regional Pain Syndrome</li>
              <li><FaCheckCircle /> Post-surgical pain</li>
            </ul>
          </div>
          <div className={styles.conditionCategory}>
            <h3>Headache Disorders</h3>
            <ul>
              <li><FaCheckCircle /> Migraines</li>
              <li><FaCheckCircle /> Tension headaches</li>
              <li><FaCheckCircle /> Cluster headaches</li>
              <li><FaCheckCircle /> Cervicogenic headaches</li>
            </ul>
          </div>
          <div className={styles.conditionCategory}>
            <h3>Injury-Related Pain</h3>
            <ul>
              <li><FaCheckCircle /> Sports injuries</li>
              <li><FaCheckCircle /> Auto accident injuries</li>
              <li><FaCheckCircle /> Work-related injuries</li>
              <li><FaCheckCircle /> Repetitive strain injuries</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <h2 className={styles.sectionTitle}>Success Stories</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "After years of opioid dependency, TrueRelief gave me my life back. 
              I'm pain-free and clear-headed for the first time in a decade."
            </p>
            <div className={styles.testimonialAuthor}>- Sarah M., Age 52</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "The comprehensive approach made all the difference. They didn't just 
              treat my pain, they helped me understand and manage it."
            </p>
            <div className={styles.testimonialAuthor}>- Michael R., Age 45</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "I was skeptical at first, but the results speak for themselves. 
              I'm back to playing with my grandkids without constant pain."
            </p>
            <div className={styles.testimonialAuthor}>- Dorothy L., Age 68</div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Live Pain-Free?</h2>
          <p>Take the first step toward lasting relief without opioids</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Schedule Your Consultation
            </Link>
            <Link href="/services" className={styles.ctaSecondary}>
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}