'use client';

import styles from '../service.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import { FaClipboardCheck, FaBalanceScale, FaUserShield, FaQuestionCircle, FaFileAlt, FaHandshake } from 'react-icons/fa';

export default function IndependentMedicalExaminationsPage() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Understanding Independent Medical Examinations</h1>
            <p className={styles.heroSubtitle}>Patient Education About IMEs and Your Rights During the Process</p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introSection}>
            <div className={styles.container}>
              <p className={styles.leadText}>
                An Independent Medical Examination (IME) is a medical evaluation performed by a neutral physician to provide objective medical opinions. Understanding what to expect can help you feel more prepared and confident during the process.
              </p>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>What is an Independent Medical Examination?</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaBalanceScale className={styles.serviceIcon} />
                  <h3>Purpose of IMEs</h3>
                  <ul className={styles.serviceList}>
                    <li>Provide objective medical opinions</li>
                    <li>Evaluate extent of injuries or disabilities</li>
                    <li>Determine causation relationships</li>
                    <li>Assess treatment necessity and future needs</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaUserShield className={styles.serviceIcon} />
                  <h3>Who Requests IMEs</h3>
                  <ul className={styles.serviceList}>
                    <li>Insurance companies</li>
                    <li>Workers' compensation carriers</li>
                    <li>Legal attorneys</li>
                    <li>Government agencies</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaClipboardCheck className={styles.serviceIcon} />
                  <h3>Types of IME Evaluations</h3>
                  <ul className={styles.serviceList}>
                    <li>Workers' compensation injuries</li>
                    <li>Personal injury claims</li>
                    <li>Disability benefit determinations</li>
                    <li>Fitness for duty assessments</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaHandshake className={styles.serviceIcon} />
                  <h3>Independence & Objectivity</h3>
                  <ul className={styles.serviceList}>
                    <li>Examiner has no treatment relationship with patient</li>
                    <li>No financial interest in case outcome</li>
                    <li>Provides unbiased medical opinions</li>
                    <li>Based solely on medical evidence and examination</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>What to Expect During Your IME</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaFileAlt className={styles.serviceIcon} />
                  <h3>Before the Examination</h3>
                  <ul className={styles.serviceList}>
                    <li>You'll receive appointment details and location</li>
                    <li>Bring photo ID and list of current medications</li>
                    <li>Arrive on time and dress comfortably</li>
                    <li>Bring any assistive devices you normally use</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaClipboardCheck className={styles.serviceIcon} />
                  <h3>During the Examination</h3>
                  <ul className={styles.serviceList}>
                    <li>Review of your medical history</li>
                    <li>Discussion of symptoms and limitations</li>
                    <li>Physical examination related to your condition</li>
                    <li>Questions about daily activities and work capacity</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaQuestionCircle className={styles.serviceIcon} />
                  <h3>Length & Process</h3>
                  <ul className={styles.serviceList}>
                    <li>Typically lasts 30-90 minutes</li>
                    <li>No treatment is provided during IME</li>
                    <li>Answer questions honestly and completely</li>
                    <li>Ask for clarification if you don't understand</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaUserShield className={styles.serviceIcon} />
                  <h3>After the Examination</h3>
                  <ul className={styles.serviceList}>
                    <li>Doctor will prepare a written report</li>
                    <li>Report sent to requesting party, not you directly</li>
                    <li>You may request a copy through your attorney</li>
                    <li>Follow up with your treating physician as needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.approachSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Your Rights During an IME</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <h3>Right to Respectful Treatment</h3>
                  <p>You have the right to be treated with dignity and respect throughout the examination process. The examiner should explain procedures and answer your questions professionally.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Right to Privacy</h3>
                  <p>The examination should be conducted privately. You may request a same-gender examiner and can have a support person present in some situations.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Right to Understand</h3>
                  <p>You have the right to understand what's happening during the exam. Ask questions if instructions aren't clear or if you need clarification.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Right to Refuse</h3>
                  <p>You can refuse inappropriate requests or examinations that seem unreasonable or unrelated to your condition, though this may have legal consequences.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Right to Accurate Information</h3>
                  <p>The examination should be documented accurately. You can request corrections if you believe something was misunderstood or recorded incorrectly.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Right to Legal Representation</h3>
                  <p>You have the right to consult with your attorney before, during, or after the IME process if you have legal representation.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.faqSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <div className={styles.faqGrid}>
                <div className={styles.faqItem}>
                  <h3>Do I have to attend an IME if requested?</h3>
                  <p>Generally yes, especially for workers' compensation or insurance claims. Failure to attend may result in loss of benefits, but consult your attorney if you have concerns.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Will the IME doctor become my treating physician?</h3>
                  <p>No. IME doctors provide evaluations only and do not establish treatment relationships. Continue following up with your regular treating physicians.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Can I bring someone with me to the IME?</h3>
                  <p>This depends on the specific circumstances and jurisdictional rules. Check with the requesting party or your attorney about whether a support person is allowed.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>What should I do if I disagree with the IME report?</h3>
                  <p>Discuss the report with your attorney or treating physician. You may be able to request clarifications or seek a second opinion, depending on your case circumstances.</p>
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