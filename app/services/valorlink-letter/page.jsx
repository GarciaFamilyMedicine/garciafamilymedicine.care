'use client';

import styles from './valorlink-letter.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaMedal, FaFileAlt, FaShieldAlt, FaClock, FaUserMd, FaCheckCircle } from 'react-icons/fa';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function ValorLinkLetterPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>ValorLink™ Letter</h1>
          <p className={styles.heroSubtitle}>Professional Nexus Letters for Veterans</p>
          <p className={styles.heroDescription}>
            Get the medical documentation you need for your VA disability claim. 
            Our expert physicians create comprehensive nexus letters that clearly 
            establish the connection between your military service and current conditions.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              Start Your Letter Request
            </Link>
            <Link href="#process" className={styles.secondaryButton}>
              Learn the Process
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/services/valorview-ime/hero.jpg"
            alt="ValorLink Letter - Nexus Letters for Veterans"
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
            <div className={styles.statNumber}>92%</div>
            <div className={styles.statLabel}>Success Rate</div>
            <div className={styles.statDescription}>Claims approved with our letters</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>5-7</div>
            <div className={styles.statLabel}>Days Turnaround</div>
            <div className={styles.statDescription}>Fast, efficient service</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>10K+</div>
            <div className={styles.statLabel}>Veterans Served</div>
            <div className={styles.statDescription}>Trusted by the veteran community</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Conditions Covered</div>
            <div className={styles.statDescription}>Comprehensive expertise</div>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>Why Choose ValorLink™?</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <FaMedal className={styles.benefitIcon} />
            <h3>Veteran-Focused</h3>
            <p>Created by veterans, for veterans. We understand your unique needs and challenges.</p>
          </div>
          <div className={styles.benefitCard}>
            <FaUserMd className={styles.benefitIcon} />
            <h3>Expert Physicians</h3>
            <p>Board-certified doctors with extensive experience in veteran healthcare and VA claims.</p>
          </div>
          <div className={styles.benefitCard}>
            <FaFileAlt className={styles.benefitIcon} />
            <h3>Comprehensive Letters</h3>
            <p>Detailed, medically-sound documentation that meets all VA requirements.</p>
          </div>
          <div className={styles.benefitCard}>
            <FaShieldAlt className={styles.benefitIcon} />
            <h3>Guaranteed Quality</h3>
            <p>If your letter doesn't meet VA standards, we'll work with you to ensure it meets all requirements.</p>
          </div>
        </div>
      </section>

      <section id="process" className={styles.processSection}>
        <h2 className={styles.sectionTitle}>Simple 4-Step Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Submit Request</h3>
            <p>Complete our secure online form with your service and medical information</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Medical Review</h3>
            <p>Our physicians review your records and research current medical literature</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Letter Creation</h3>
            <p>Expert drafting of your personalized nexus letter with medical rationale</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Delivery</h3>
            <p>Receive your completed letter via secure email within 5-7 business days</p>
          </div>
        </div>
      </section>

      <section className={styles.conditionsSection}>
        <h2 className={styles.sectionTitle}>Conditions We Cover</h2>
        <div className={styles.conditionsGrid}>
          <div className={styles.conditionCategory}>
            <h3>Mental Health</h3>
            <ul>
              <li><FaCheckCircle /> PTSD</li>
              <li><FaCheckCircle /> Depression</li>
              <li><FaCheckCircle /> Anxiety</li>
              <li><FaCheckCircle /> MST-related conditions</li>
              <li><FaCheckCircle /> Adjustment disorders</li>
            </ul>
          </div>
          <div className={styles.conditionCategory}>
            <h3>Physical Conditions</h3>
            <ul>
              <li><FaCheckCircle /> Back & neck injuries</li>
              <li><FaCheckCircle /> Joint problems</li>
              <li><FaCheckCircle /> Hearing loss/tinnitus</li>
              <li><FaCheckCircle /> Traumatic brain injury</li>
              <li><FaCheckCircle /> Chronic pain</li>
            </ul>
          </div>
          <div className={styles.conditionCategory}>
            <h3>Toxic Exposures</h3>
            <ul>
              <li><FaCheckCircle /> Agent Orange</li>
              <li><FaCheckCircle /> Burn pit exposure</li>
              <li><FaCheckCircle /> Gulf War syndrome</li>
              <li><FaCheckCircle /> Asbestos exposure</li>
              <li><FaCheckCircle /> Contaminated water</li>
            </ul>
          </div>
          <div className={styles.conditionCategory}>
            <h3>Secondary Conditions</h3>
            <ul>
              <li><FaCheckCircle /> Sleep apnea</li>
              <li><FaCheckCircle /> Hypertension</li>
              <li><FaCheckCircle /> Diabetes</li>
              <li><FaCheckCircle /> IBS/GERD</li>
              <li><FaCheckCircle /> Migraines</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sampleSection}>
        <div className={styles.sampleContent}>
          <div className={styles.sampleText}>
            <h2>What's Included in Your Letter</h2>
            <p>
              Each ValorLink™ nexus letter is carefully crafted to provide the 
              comprehensive medical evidence needed for your VA claim.
            </p>
            <ul className={styles.includedList}>
              <li>Physician's credentials and qualifications</li>
              <li>Review of your service records and medical history</li>
              <li>Current medical literature citations</li>
              <li>Clear medical rationale linking service to condition</li>
              <li>"At least as likely as not" opinion statement</li>
              <li>Professional formatting meeting VA standards</li>
              <li>Digital signature and physician contact information</li>
            </ul>
            <Link href="/contact" className={styles.sampleButton}>
              Request Sample Letter
            </Link>
          </div>
          <div className={styles.sampleImage}>
            <Image
              src="/images/services/valorlink-sample.jpg"
              alt="Sample Nexus Letter"
              width={500}
              height={400}
              className={styles.image}
              unoptimized
            />
          </div>
        </div>
      </section>


      <section className={styles.testimonialSection}>
        <h2 className={styles.sectionTitle}>Veteran Success Stories</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "After years of denials, ValorLink's nexus letter finally got my 
              PTSD claim approved. I can't thank them enough for their expertise."
            </p>
            <div className={styles.testimonialAuthor}>- SGT James R., Army</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "The doctor really understood my burn pit exposure. The letter was 
              thorough and helped me get the rating I deserved."
            </p>
            <div className={styles.testimonialAuthor}>- CPO Maria S., Navy</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "Professional, fast, and effective. My back injury claim was approved 
              on the first submission with their nexus letter."
            </p>
            <div className={styles.testimonialAuthor}>- SSG Robert K., Marines</div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Do I need a nexus letter for my VA claim?</h3>
            <p>
              While not always required, a nexus letter significantly strengthens your claim 
              by providing medical evidence linking your condition to military service.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Will the VA accept your letters?</h3>
            <p>
              Yes. Our letters are written by licensed physicians and meet all VA requirements 
              for medical evidence and opinion letters.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>What if I need revisions?</h3>
            <p>
              We include one free revision with every letter. If the VA requests specific 
              changes, we'll update your letter at no additional charge.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Can you guarantee claim approval?</h3>
            <p>
              While we can't guarantee VA decisions, our 92% success rate speaks to the 
              quality and effectiveness of our nexus letters.
            </p>
          </div>
        </div>
      </section>

    </div>
    <Footer />
    </>
  );
}