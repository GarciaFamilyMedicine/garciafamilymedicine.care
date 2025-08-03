'use client';

import styles from './telehealth.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import Link from 'next/link';
import { FaVideo, FaCalendarCheck, FaLaptop, FaHeadset, FaCheckCircle, FaPhoneAlt, FaClock, FaShieldAlt } from 'react-icons/fa';

export default function TelehealthPage() {
  return (
    <>
      <Header />
      <main className={styles.telehealthMain}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>Telehealth Services</h1>
            <p>Quality healthcare from the comfort of your home</p>
            <div className={styles.heroButtons}>
              <a href="tel:816-427-5320" className={styles.primaryButton}>
                <FaPhoneAlt /> Schedule Virtual Visit
              </a>
              <Link href="/contact" className={styles.secondaryButton}>
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <section className={styles.section}>
            <h2>Virtual Healthcare Made Simple</h2>
            <p>Garcia Family Medicine offers secure, convenient telehealth appointments that bring quality healthcare directly to you. Whether you're at home, work, or traveling, our virtual visits provide the same personalized care you expect from our practice.</p>
            
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <FaVideo className={styles.benefitIcon} />
                <h3>Face-to-Face Care</h3>
                <p>Connect with Dr. Garcia through secure video consultations</p>
              </div>
              <div className={styles.benefitCard}>
                <FaClock className={styles.benefitIcon} />
                <h3>Save Time</h3>
                <p>No commute, no waiting room, appointments from anywhere</p>
              </div>
              <div className={styles.benefitCard}>
                <FaShieldAlt className={styles.benefitIcon} />
                <h3>Secure & Private</h3>
                <p>HIPAA-compliant platform ensures your privacy</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Telehealth Services Available</h2>
            <div className={styles.servicesList}>
              <div className={styles.serviceCategory}>
                <h3>Primary Care</h3>
                <ul>
                  <li>Routine check-ups and follow-ups</li>
                  <li>Chronic disease management</li>
                  <li>Medication management</li>
                  <li>Lab result reviews</li>
                </ul>
              </div>
              <div className={styles.serviceCategory}>
                <h3>Urgent Care</h3>
                <ul>
                  <li>Cold and flu symptoms</li>
                  <li>Allergies and rashes</li>
                  <li>Minor infections</li>
                  <li>Digestive issues</li>
                </ul>
              </div>
              <div className={styles.serviceCategory}>
                <h3>Mental Health</h3>
                <ul>
                  <li>Anxiety and depression screening</li>
                  <li>Stress management</li>
                  <li>Medication consultations</li>
                  <li>Behavioral health referrals</li>
                </ul>
              </div>
              <div className={styles.serviceCategory}>
                <h3>Preventive Care</h3>
                <ul>
                  <li>Health screenings</li>
                  <li>Lifestyle counseling</li>
                  <li>Nutrition guidance</li>
                  <li>Wellness planning</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>How Telehealth Works</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Schedule Your Visit</h3>
                <p>Call 816-427-5320 to schedule your telehealth appointment</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>Receive Confirmation</h3>
                <p>Get email confirmation with your secure video link</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Prepare for Visit</h3>
                <p>Test your device and find a quiet, private space</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h3>Join Your Visit</h3>
                <p>Click the link at appointment time to connect with Dr. Garcia</p>
              </div>
            </div>
            
            <div className={styles.preparationTips}>
              <h3>Prepare for Your Virtual Visit</h3>
              <ul>
                <li><FaCheckCircle /> List your symptoms and questions</li>
                <li><FaCheckCircle /> Have your medications ready</li>
                <li><FaCheckCircle /> Note any allergies or recent changes</li>
                <li><FaCheckCircle /> Prepare vital signs if you have home equipment</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Technology Requirements</h2>
            <div className={styles.techRequirements}>
              <div className={styles.deviceSection}>
                <FaLaptop className={styles.techIcon} />
                <h3>Compatible Devices</h3>
                <ul>
                  <li>Desktop or laptop computer</li>
                  <li>Tablet (iPad, Android)</li>
                  <li>Smartphone (iPhone, Android)</li>
                </ul>
              </div>
              <div className={styles.deviceSection}>
                <FaHeadset className={styles.techIcon} />
                <h3>System Requirements</h3>
                <ul>
                  <li>High-speed internet connection</li>
                  <li>Webcam and microphone</li>
                  <li>Updated web browser</li>
                  <li>Quiet, private location</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.supportInfo}>
              <h3>Technical Support</h3>
              <p>Having trouble connecting? Our team is here to help!</p>
              <p>Call <strong>816-427-5320</strong> for assistance</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}