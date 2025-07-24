'use client';

import styles from './clearroad-dot-exams.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaTruck, FaClock, FaClipboardCheck, FaUserMd, FaHeartbeat, FaCheckCircle } from 'react-icons/fa';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function ClearRoadDOTExamsPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>ClearRoad™ DOT Exams</h1>
            <p className={styles.heroSubtitle}>Keeping America's Drivers Safe and Road-Ready</p>
            <p className={styles.heroDescription}>
              Your livelihood depends on your ability to stay on the road. Our ClearRoad™ 
              DOT Exams provide certified Department of Transportation physicals with speed, 
              accuracy, and compassion for the vital work you do.
            </p>
            <div className={styles.heroButtons}>
              <a href="tel:816-427-5320" className={styles.primaryButton}>
                Schedule Your DOT Exam
              </a>
              <Link href="#process" className={styles.secondaryButton}>
                Learn More
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/services/clearroad-dot-exams/hero.jpg"
              alt="ClearRoad DOT Exams - Commercial Driver Certification"
              width={600}
              height={400}
              className={styles.image}
              unoptimized
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>30min</div>
              <div className={styles.statLabel}>Average Exam Time</div>
              <div className={styles.statDescription}>Quick and thorough</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>5000+</div>
              <div className={styles.statLabel}>DOT Exams Completed</div>
              <div className={styles.statDescription}>Experienced examiners</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>FMCSA Certified</div>
              <div className={styles.statDescription}>Registry listed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>Same Day</div>
              <div className={styles.statLabel}>Certificate Delivery</div>
              <div className={styles.statDescription}>In most cases</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Why Choose ClearRoad™?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <FaClock className={styles.benefitIcon} />
              <h3>Extended Hours</h3>
              <p>Early morning and evening appointments to fit your driving schedule.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaClipboardCheck className={styles.benefitIcon} />
              <h3>Same-Day Certificates</h3>
              <p>Get your DOT medical certificate immediately after examination in most cases.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaTruck className={styles.benefitIcon} />
              <h3>Driver-Focused</h3>
              <p>We understand the unique challenges and needs of professional drivers.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaUserMd className={styles.benefitIcon} />
              <h3>FMCSA Certified</h3>
              <p>All examiners listed on the National Registry with direct access.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className={styles.processSection}>
          <h2 className={styles.sectionTitle}>Streamlined DOT Exam Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Quick Scheduling</h3>
              <p>Call or book online for same-week appointments, including early/late hours</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Thorough Examination</h3>
              <p>Complete DOT physical including vision, hearing, and cardiovascular assessment</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Health Guidance</h3>
              <p>Personalized advice for managing conditions that affect certification</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Certificate Issued</h3>
              <p>Receive your DOT medical certificate immediately in most cases</p>
            </div>
          </div>
        </section>

        {/* Comprehensive Exam Section */}
        <section className={styles.sampleSection}>
          <div className={styles.sampleContent}>
            <div className={styles.sampleText}>
              <h2>Your ClearRoad™ DOT Exam Includes</h2>
              <p>
                Our thorough examination meets all FMCSA requirements while respecting 
                your time and the importance of your work on America's roads.
              </p>
              <ul className={styles.includedList}>
                <li>Complete medical history review</li>
                <li>Vision testing (must meet 20/40 requirement)</li>
                <li>Hearing assessment using calibrated equipment</li>
                <li>Blood pressure and cardiovascular evaluation</li>
                <li>Physical examination of all body systems</li>
                <li>Urinalysis when required by guidelines</li>
                <li>Review of medications and health conditions</li>
              </ul>
              <Link href="/contact" className={styles.sampleButton}>
                Schedule Your Exam Today
              </Link>
            </div>
            <div className={styles.sampleImage}>
              <Image
                src="/images/services/dot-exam-process.jpg"
                alt="DOT Physical Examination Process"
                width={500}
                height={400}
                className={styles.image}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Health Conditions Support */}
        <section className={styles.conditionsSection}>
          <h2 className={styles.sectionTitle}>Supporting Drivers with Health Conditions</h2>
          <div className={styles.conditionsGrid}>
            <div className={styles.conditionCategory}>
              <h3>Cardiovascular</h3>
              <ul>
                <li><FaHeartbeat /> High blood pressure management</li>
                <li><FaHeartbeat /> Heart disease monitoring</li>
                <li><FaHeartbeat /> Medication compliance</li>
                <li><FaHeartbeat /> Cardiac clearance support</li>
              </ul>
            </div>
            <div className={styles.conditionCategory}>
              <h3>Diabetes</h3>
              <ul>
                <li><FaCheckCircle /> A1C optimization strategies</li>
                <li><FaCheckCircle /> Insulin management guidance</li>
                <li><FaCheckCircle /> Blood sugar monitoring</li>
                <li><FaCheckCircle /> FMCSA compliance help</li>
              </ul>
            </div>
            <div className={styles.conditionCategory}>
              <h3>Sleep Disorders</h3>
              <ul>
                <li><FaUserMd /> Sleep apnea screening</li>
                <li><FaUserMd /> CPAP compliance tracking</li>
                <li><FaUserMd /> Documentation assistance</li>
                <li><FaUserMd /> Treatment coordination</li>
              </ul>
            </div>
            <div className={styles.conditionCategory}>
              <h3>Other Conditions</h3>
              <ul>
                <li><FaClipboardCheck /> Vision correction</li>
                <li><FaClipboardCheck /> Hearing aid support</li>
                <li><FaClipboardCheck /> Seizure disorders</li>
                <li><FaClipboardCheck /> Mental health care</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className={styles.testimonialSection}>
          <h2 className={styles.sectionTitle}>What Drivers Say About ClearRoad™</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "Finally found a clinic that understands truckers. They got me in early 
                morning before my run, and I had my certificate in hand within an hour."
              </p>
              <div className={styles.testimonialAuthor}>- Robert K., OTR Driver</div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "Dr. Tess helped me manage my blood pressure so I could keep my CDL. 
                She really cares about keeping us healthy and on the road."
              </p>
              <div className={styles.testimonialAuthor}>- Maria S., Bus Operator</div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "They understand the stress of DOT physicals. Made the whole process 
                smooth and helped with my sleep apnea documentation."
              </p>
              <div className={styles.testimonialAuthor}>- James T., Local Delivery</div>
            </div>
          </div>
        </section>


      </div>
      <Footer />
    </>
  );
}