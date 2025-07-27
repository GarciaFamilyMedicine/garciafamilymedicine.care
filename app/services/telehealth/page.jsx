'use client';

import styles from './telehealth.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaVideo, FaClock, FaShieldAlt, FaUserMd, FaMobileAlt, FaHeartbeat } from 'react-icons/fa';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function TelehealthPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Telehealth Services</h1>
            <p className={styles.heroSubtitle}>Healthcare Without Boundaries</p>
            <p className={styles.heroDescription}>
              Experience the future of healthcare with our comprehensive telehealth services. 
              Get quality medical care from the comfort of your home, office, or anywhere you have an internet connection.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Schedule Virtual Visit
              </Link>
              <Link href="#how-it-works" className={styles.secondaryButton}>
                How It Works
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/services/telehealth/hero.jpg"
              alt="Telehealth Services - Virtual Healthcare"
              width={600}
              height={400}
              className={styles.image}
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>Access to Care</div>
            <div className={styles.statDescription}>Round-the-clock availability</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>15min</div>
            <div className={styles.statLabel}>Average Wait Time</div>
            <div className={styles.statDescription}>Quick virtual appointments</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>95%</div>
            <div className={styles.statLabel}>Patient Satisfaction</div>
            <div className={styles.statDescription}>Highly rated virtual care</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>HIPAA Compliant</div>
            <div className={styles.statDescription}>Secure & confidential</div>
          </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Virtual Healthcare Services</h2>
          <p className={styles.sectionSubtitle}>Comprehensive medical care delivered through secure telehealth technology</p>
          <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <FaUserMd className={styles.serviceIcon} />
            <h3>Virtual Consultations</h3>
            <p>Primary care visits and medical consultations from anywhere</p>
            <ul>
              <li>Routine check-ups</li>
              <li>Follow-up appointments</li>
              <li>Symptom evaluation</li>
              <li>Second opinions</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <FaHeartbeat className={styles.serviceIcon} />
            <h3>Chronic Care Management</h3>
            <p>Ongoing support for chronic health conditions</p>
            <ul>
              <li>Diabetes monitoring</li>
              <li>Hypertension management</li>
              <li>Asthma care</li>
              <li>Care plan adjustments</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <FaShieldAlt className={styles.serviceIcon} />
            <h3>Mental Health Support</h3>
            <p>Confidential mental health and counseling services</p>
            <ul>
              <li>Depression & anxiety care</li>
              <li>Stress management</li>
              <li>Behavioral health</li>
              <li>Therapy sessions</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <FaClock className={styles.serviceIcon} />
            <h3>Urgent Care</h3>
            <p>Quick access for non-emergency medical issues</p>
            <ul>
              <li>Cold & flu symptoms</li>
              <li>Minor infections</li>
              <li>Rashes & skin issues</li>
              <li>Medication questions</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <FaMobileAlt className={styles.serviceIcon} />
            <h3>Prescription Services</h3>
            <p>Medication management made simple</p>
            <ul>
              <li>Prescription refills</li>
              <li>New prescriptions</li>
              <li>Medication reviews</li>
              <li>E-prescribing</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <FaVideo className={styles.serviceIcon} />
            <h3>Specialty Referrals</h3>
            <p>Connect with specialists virtually</p>
            <ul>
              <li>Initial consultations</li>
              <li>Follow-up visits</li>
              <li>Care coordination</li>
              <li>Second opinions</li>
            </ul>
          </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className={styles.processSection}>
        <div className={styles.container}>
        <h2 className={styles.sectionTitle}>How Telehealth Works</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Schedule Your Visit</h3>
            <p>Book online or call us to schedule your virtual appointment at a convenient time</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Receive Secure Link</h3>
            <p>Get your private video link via email or text before your appointment</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Join Virtual Visit</h3>
            <p>Click the link at appointment time to connect with your provider</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Get Your Care Plan</h3>
            <p>Receive treatment recommendations, prescriptions, and follow-up instructions</p>
          </div>
        </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Benefits of Virtual Care</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h3>Save Time & Money</h3>
            <p>No travel time, parking fees, or time off work. Get care from anywhere.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Greater Access</h3>
            <p>Perfect for rural areas, mobility issues, or when you can't leave home.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Reduced Exposure</h3>
            <p>Avoid waiting rooms and minimize exposure to contagious illnesses.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Family Involvement</h3>
            <p>Include family members easily in your healthcare discussions.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Flexible Scheduling</h3>
            <p>More appointment slots available including evenings and weekends.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Continuity of Care</h3>
            <p>Maintain regular appointments even when traveling or relocating.</p>
          </div>
        </div>
        </div>
      </section>

      <section className={styles.requirementsSection}>
        <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What You Need for Your Virtual Visit</h2>
        <div className={styles.requirementsGrid}>
          <div className={styles.requirementCard}>
            <div className={styles.requirementIcon}>💻</div>
            <h3>Device with Camera</h3>
            <p>Computer, tablet, or smartphone with working camera and microphone</p>
          </div>
          <div className={styles.requirementCard}>
            <div className={styles.requirementIcon}>🌐</div>
            <h3>Internet Connection</h3>
            <p>Stable broadband internet for clear video and audio quality</p>
          </div>
          <div className={styles.requirementCard}>
            <div className={styles.requirementIcon}>🔒</div>
            <h3>Private Space</h3>
            <p>Quiet, private location for confidential medical discussions</p>
          </div>
          <div className={styles.requirementCard}>
            <div className={styles.requirementIcon}>📋</div>
            <h3>Medical Information</h3>
            <p>Have your medications, symptoms, and questions ready</p>
          </div>
        </div>
        </div>
      </section>

      <section className={styles.insuranceSection}>
        <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Insurance & Payment</h2>
        <div className={styles.insuranceContent}>
          <div className={styles.insuranceInfo}>
            <h3>Most Insurance Plans Accepted</h3>
            <p>We accept most major insurance plans for telehealth visits, including:</p>
            <ul>
              <li>Medicare & Medicare Advantage</li>
              <li>Blue Cross Blue Shield</li>
              <li>United Healthcare</li>
              <li>Aetna</li>
              <li>Cigna</li>
              <li>And many more...</li>
            </ul>
          </div>
          <div className={styles.paymentInfo}>
            <h3>Affordable Cash Pay Options</h3>
            <p>No insurance? No problem! We offer competitive cash pay rates for all virtual visits.</p>
            <Link href="/services/cash-pay" className={styles.learnMoreLink}>
              Learn About Cash Pay Options →
            </Link>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}