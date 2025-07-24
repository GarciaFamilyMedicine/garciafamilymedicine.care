'use client';

import styles from './valorview-ime.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaBalanceScale, FaUserShield, FaClipboardCheck, FaClock, FaAward, FaMedal } from 'react-icons/fa';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function ValorViewIMEPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>ValorView™ IME</h1>
            <p className={styles.heroSubtitle}>Independent Medical Examinations That Honor Your Service</p>
            <p className={styles.heroDescription}>
              Your service deserves respect. Whether you're a veteran, first responder, 
              or injured worker, our IME program treats you with the dignity you've earned 
              while providing thorough, objective medical evaluations.
            </p>
            <div className={styles.heroButtons}>
              <a href="tel:816-427-5320" className={styles.primaryButton}>
                Schedule Your IME
              </a>
              <Link href="#process" className={styles.secondaryButton}>
                Learn Our Process
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/services/valorview-ime/hero.jpg"
              alt="ValorView IME - Independent Medical Examinations"
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
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Years Experience</div>
              <div className={styles.statDescription}>In comprehensive evaluations</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>5000+</div>
              <div className={styles.statLabel}>IMEs Completed</div>
              <div className={styles.statDescription}>For veterans and workers</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>48-72hr</div>
              <div className={styles.statLabel}>Report Turnaround</div>
              <div className={styles.statDescription}>Without compromising quality</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Trauma-Informed</div>
              <div className={styles.statDescription}>Respectful approach</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Why Choose ValorView™?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <FaUserShield className={styles.benefitIcon} />
              <h3>Zero Judgment</h3>
              <p>Your service has proven your character. We provide objective evaluations without questioning your integrity.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaBalanceScale className={styles.benefitIcon} />
              <h3>Fair & Objective</h3>
              <p>Comprehensive evaluations that consider all aspects of your condition and its impact on your life.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaClipboardCheck className={styles.benefitIcon} />
              <h3>Detailed Reports</h3>
              <p>Thorough documentation that clearly explains findings in language accessible to all parties.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaMedal className={styles.benefitIcon} />
              <h3>Service-Focused</h3>
              <p>Special expertise in service-related injuries, toxic exposures, and occupational health.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className={styles.processSection}>
          <h2 className={styles.sectionTitle}>Our Thorough Examination Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>In-Depth Consultation</h3>
              <p>Personal review of your service history and medical records in a safe, respectful environment</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Document Review</h3>
              <p>Thorough analysis of all medical documentation to establish patterns and connections</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Physical Examination</h3>
              <p>Comprehensive assessment focused on your specific condition and service relationship</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Detailed Report</h3>
              <p>Clear, comprehensive documentation with medical opinions and supporting evidence</p>
            </div>
          </div>
        </section>

        {/* Service Types Section */}
        <section className={styles.sampleSection}>
          <div className={styles.sampleContent}>
            <div className={styles.sampleText}>
              <h2>Honoring All Forms of Service</h2>
              <p>
                We recognize that service takes many forms. Whether you wore a military 
                uniform, carried a badge, or worked in any profession demanding physical 
                sacrifice, your service matters to us.
              </p>
              <ul className={styles.includedList}>
                <li>Military veterans from all branches</li>
                <li>Police officers and law enforcement</li>
                <li>Firefighters and EMS personnel</li>
                <li>Construction and industrial workers</li>
                <li>Healthcare and essential workers</li>
                <li>Transportation and logistics professionals</li>
              </ul>
              <Link href="/contact" className={styles.sampleButton}>
                Schedule Your Respectful IME
              </Link>
            </div>
            <div className={styles.sampleImage}>
              <Image
                src="/images/services/ime-consultation.jpg"
                alt="Respectful IME Consultation"
                width={500}
                height={400}
                className={styles.image}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className={styles.conditionsSection}>
          <h2 className={styles.sectionTitle}>Understanding Complex Service-Related Conditions</h2>
          <div className={styles.conditionsGrid}>
            <div className={styles.conditionCategory}>
              <h3>Physical Injuries</h3>
              <ul>
                <li><FaClipboardCheck /> Combat & training injuries</li>
                <li><FaClipboardCheck /> Musculoskeletal conditions</li>
                <li><FaClipboardCheck /> Traumatic brain injury</li>
                <li><FaClipboardCheck /> Chronic pain syndromes</li>
                <li><FaClipboardCheck /> Hearing loss/tinnitus</li>
              </ul>
            </div>
            <div className={styles.conditionCategory}>
              <h3>Toxic Exposures</h3>
              <ul>
                <li><FaAward /> Agent Orange effects</li>
                <li><FaAward /> Burn pit exposure</li>
                <li><FaAward /> Gulf War syndrome</li>
                <li><FaAward /> Asbestos & chemicals</li>
                <li><FaAward /> Contaminated water</li>
              </ul>
            </div>
            <div className={styles.conditionCategory}>
              <h3>Mental Health</h3>
              <ul>
                <li><FaUserShield /> PTSD evaluation</li>
                <li><FaUserShield /> Depression assessment</li>
                <li><FaUserShield /> Anxiety disorders</li>
                <li><FaUserShield /> MST-related conditions</li>
                <li><FaUserShield /> Adjustment disorders</li>
              </ul>
            </div>
            <div className={styles.conditionCategory}>
              <h3>Occupational</h3>
              <ul>
                <li><FaBalanceScale /> Workplace injuries</li>
                <li><FaBalanceScale /> Repetitive strain</li>
                <li><FaBalanceScale /> Industrial accidents</li>
                <li><FaBalanceScale /> Chemical exposure</li>
                <li><FaBalanceScale /> Disability claims</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className={styles.testimonialSection}>
          <h2 className={styles.sectionTitle}>Voices of Those We've Served</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "Finally, an IME that treated me like a human being, not just a case 
                number. Dr. Tess understood my service and really listened."
              </p>
              <div className={styles.testimonialAuthor}>- SGT Michael H., Army Veteran</div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "The respect shown during my examination made all the difference. They 
                understood the complexities of my workplace injury."
              </p>
              <div className={styles.testimonialAuthor}>- John D., Construction Worker</div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "Thorough, professional, and compassionate. The report was detailed and 
                helped me get the benefits I deserved after 20 years of service."
              </p>
              <div className={styles.testimonialAuthor}>- Officer Sarah R., Police</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Common Questions About IMEs</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>What should I bring to my IME?</h3>
              <p>
                Bring all relevant medical records, service documentation, current medications 
                list, and any correspondence related to your claim or case.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long does the examination take?</h3>
              <p>
                Plan for 2-3 hours to ensure thorough evaluation. We never rush our examinations 
                as completeness is crucial for accurate assessment.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>When will I receive the report?</h3>
              <p>
                Reports are typically completed within 48-72 hours and sent to the requesting 
                party. You may request a copy through proper channels.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is the examination confidential?</h3>
              <p>
                While IME reports are shared with requesting parties, all examinations are 
                conducted with strict professionalism and respect for your privacy.
              </p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}