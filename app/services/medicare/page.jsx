'use client';

import styles from './medicare.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaStethoscope, FaHeartbeat, FaUserMd, FaShieldAlt, FaPrescriptionBottleAlt, FaCalendarCheck } from 'react-icons/fa';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function MedicarePage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Medicare Services</h1>
          <p className={styles.heroSubtitle}>Your Trusted Medicare Provider</p>
          <p className={styles.heroDescription}>
            Comprehensive Medicare-covered services with personalized care for seniors. 
            Experience healthcare that understands your needs and respects your journey.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              Schedule Medicare Visit
            </Link>
            <Link href="#benefits" className={styles.secondaryButton}>
              View Coverage Options
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/services/medicare/hero.jpg"
            alt="Medicare Services - Senior Healthcare"
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
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Medicare Accepted</div>
            <div className={styles.statDescription}>All Medicare plans welcome</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>65+</div>
            <div className={styles.statLabel}>Specialized Care</div>
            <div className={styles.statDescription}>Expert senior healthcare</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Coverage Available</div>
            <div className={styles.statDescription}>Medicare annual wellness visits</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>Support Access</div>
            <div className={styles.statDescription}>Always here for you</div>
          </div>
        </div>
      </section>

      <section id="benefits" className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>Understanding Your Medicare Coverage</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <div className={styles.partLetter}>A</div>
            </div>
            <h3>Medicare Part A</h3>
            <p>Hospital insurance covering:</p>
            <ul>
              <li>Inpatient hospital care</li>
              <li>Skilled nursing facility care</li>
              <li>Hospice care</li>
              <li>Home health services</li>
            </ul>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <div className={styles.partLetter}>B</div>
            </div>
            <h3>Medicare Part B</h3>
            <p>Medical insurance covering:</p>
            <ul>
              <li>Doctor visits</li>
              <li>Preventive services</li>
              <li>Outpatient care</li>
              <li>Medical equipment</li>
            </ul>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <div className={styles.partLetter}>C</div>
            </div>
            <h3>Medicare Advantage</h3>
            <p>Alternative coverage including:</p>
            <ul>
              <li>Parts A & B benefits</li>
              <li>Often includes Part D</li>
              <li>Additional benefits</li>
              <li>Network-based care</li>
            </ul>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <div className={styles.partLetter}>D</div>
            </div>
            <h3>Prescription Coverage</h3>
            <p>Medication benefits including:</p>
            <ul>
              <li>Prescription drugs</li>
              <li>Formulary coverage</li>
              <li>Mail-order options</li>
              <li>Coverage protection</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Medicare-Covered Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <FaCalendarCheck className={styles.serviceIcon} />
            <h3>Annual Wellness Visits</h3>
            <p>Comprehensive yearly health assessments covered by Medicare benefits</p>
            <ul>
              <li>Personalized prevention plan</li>
              <li>Health risk assessment</li>
              <li>Cognitive screening</li>
              <li>Advanced care planning</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <FaStethoscope className={styles.serviceIcon} />
            <h3>Preventive Screenings</h3>
            <p>Essential health screenings covered by Medicare</p>
            <ul>
              <li>Cancer screenings</li>
              <li>Cardiovascular tests</li>
              <li>Diabetes screening</li>
              <li>Bone density scans</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <FaShieldAlt className={styles.serviceIcon} />
            <h3>Immunizations</h3>
            <p>Important vaccines to keep you healthy</p>
            <ul>
              <li>Annual flu shots</li>
              <li>Pneumonia vaccines</li>
              <li>COVID-19 vaccines</li>
              <li>Shingles prevention</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <FaHeartbeat className={styles.serviceIcon} />
            <h3>Chronic Care Management</h3>
            <p>Ongoing support for chronic conditions</p>
            <ul>
              <li>Diabetes management</li>
              <li>Heart disease care</li>
              <li>Hypertension control</li>
              <li>Arthritis treatment</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <FaPrescriptionBottleAlt className={styles.serviceIcon} />
            <h3>Medication Management</h3>
            <p>Comprehensive medication reviews and optimization</p>
            <ul>
              <li>Drug interaction checks</li>
              <li>Dosage optimization</li>
              <li>Generic alternatives</li>
              <li>Adherence support</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <FaUserMd className={styles.serviceIcon} />
            <h3>Care Coordination</h3>
            <p>Seamless healthcare management</p>
            <ul>
              <li>Specialist referrals</li>
              <li>Hospital follow-up</li>
              <li>Test result tracking</li>
              <li>Care transitions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.whyChooseSection}>
        <h2 className={styles.sectionTitle}>Why Choose Garcia Family Medicine for Medicare</h2>
        <div className={styles.whyChooseGrid}>
          <div className={styles.whyChooseCard}>
            <h3>Senior-Focused Care</h3>
            <p>Specialized expertise in geriatric medicine with understanding of age-related health concerns</p>
          </div>
          <div className={styles.whyChooseCard}>
            <h3>Extended Appointments</h3>
            <p>Longer visit times to address all your concerns without feeling rushed</p>
          </div>
          <div className={styles.whyChooseCard}>
            <h3>Simplified Billing</h3>
            <p>We handle Medicare paperwork and billing, making healthcare hassle-free</p>
          </div>
          <div className={styles.whyChooseCard}>
            <h3>Comprehensive Care</h3>
            <p>From prevention to chronic disease management, we're your healthcare home</p>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <h2 className={styles.sectionTitle}>Getting Started with Medicare Services</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Verify Coverage</h3>
            <p>We'll confirm your Medicare coverage and explain your benefits</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Schedule Visit</h3>
            <p>Book your appointment for a comprehensive health assessment</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Personalized Plan</h3>
            <p>Develop a customized care plan based on your needs</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Ongoing Support</h3>
            <p>Regular follow-ups and 24/7 access to care when needed</p>
          </div>
        </div>
      </section>

      </div>
      <Footer />
    </>
  );
}