'use client'

import styles from '../learn/learn-article.module.css'
import Link from 'next/link'
import Header from '../../components/header'
import Footer from '../../components/footer/footer'

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / Terms of Service
            </nav>
            <h1 className={styles.articleTitle}>Terms of Service</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Effective Date: January 1, 2025</span>
              <span>Version: 2.0</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>Quick Navigation</h2>
            <ul className={styles.tocList}>
              <li><a href="#acceptance">1. Acceptance of Terms</a></li>
              <li><a href="#medical-services">2. Medical Services</a></li>
              <li><a href="#responsibilities">3. Patient Responsibilities</a></li>
              <li><a href="#membership">4. Membership & Payment</a></li>
              <li><a href="#privacy">5. Privacy & Confidentiality</a></li>
              <li><a href="#cancellation">6. Appointment Cancellation</a></li>
              <li><a href="#liability">7. Limitation of Liability</a></li>
              <li><a href="#termination">8. Termination</a></li>
              <li><a href="#changes">9. Changes to Terms</a></li>
              <li><a href="#contact">10. Contact Information</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="acceptance" className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
            <p className={styles.leadText}>
              By accessing and using the services of Garcia Family Medicine, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            
            <p className={styles.sectionText}>
              These terms apply to all patients, visitors, and others who access or use our services, including our website, patient portal, and physical facilities. Your continued use of our services following any changes to these terms constitutes acceptance of those changes.
            </p>
          </section>

          <section id="medical-services" className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Medical Services</h2>
            <p className={styles.sectionText}>
              Garcia Family Medicine provides Direct Primary Care services. Our services are not a substitute for health insurance and do not cover emergency care, hospitalization, or specialist services outside our practice. Patients are encouraged to maintain health insurance for services not covered by our Direct Primary Care membership.
            </p>

            <h3 className={styles.subsectionTitle}>Services Included</h3>
            <div className={styles.keyPoints}>
              <ul className={styles.keyPointsList}>
                <li>Comprehensive primary care services</li>
                <li>Preventive care and wellness examinations</li>
                <li>Chronic disease management</li>
                <li>Acute illness treatment</li>
                <li>Basic procedures and diagnostics</li>
                <li>24/7 access to your physician</li>
                <li>Same-day or next-day appointments</li>
                <li>Extended appointment times</li>
                <li>Telehealth consultations</li>
                <li>Care coordination with specialists</li>
              </ul>
            </div>

            <div className={styles.warningBox}>
              <h4>Important Notice</h4>
              <p>
                Direct Primary Care membership does not provide coverage for emergency services, hospitalization, specialist care, surgeries, or services provided outside our practice. We strongly recommend maintaining traditional health insurance for these services.
              </p>
            </div>
          </section>

          <section id="responsibilities" className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Patient Responsibilities</h2>
            <p className={styles.sectionText}>
              As a patient of Garcia Family Medicine, you agree to fulfill certain responsibilities to ensure effective healthcare delivery and maintain a positive therapeutic relationship.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Medical Information</h3>
                <ul>
                  <li>Provide accurate and complete health information</li>
                  <li>Inform us of changes in your health status</li>
                  <li>Report unexpected changes or complications</li>
                  <li>Update medication lists regularly</li>
                  <li>Disclose all healthcare providers you see</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Treatment Compliance</h3>
                <ul>
                  <li>Follow agreed-upon treatment plans</li>
                  <li>Take medications as prescribed</li>
                  <li>Attend scheduled follow-up appointments</li>
                  <li>Complete recommended testing</li>
                  <li>Ask questions when unclear</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Communication</h3>
                <ul>
                  <li>Communicate openly about health concerns</li>
                  <li>Respond to practice communications timely</li>
                  <li>Update contact information promptly</li>
                  <li>Use appropriate communication channels</li>
                  <li>Respect staff time and boundaries</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Practice Policies</h3>
                <ul>
                  <li>Keep scheduled appointments</li>
                  <li>Provide appropriate cancellation notice</li>
                  <li>Pay fees promptly</li>
                  <li>Treat staff with respect and courtesy</li>
                  <li>Respect other patients' privacy</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="membership" className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Membership and Payment</h2>
            <p className={styles.sectionText}>
              Membership fees are due monthly and cover the services outlined in your membership agreement. Additional fees may apply for certain procedures, medications, or specialized services.
            </p>

            <h3 className={styles.subsectionTitle}>Payment Terms</h3>
            <div className={styles.keyPoints}>
              <ul className={styles.keyPointsList}>
                <li>Monthly membership fees are due on the same date each month</li>
                <li>Accepted payment methods: credit card, debit card, HSA/FSA, ACH transfer</li>
                <li>Late payments may result in service suspension after 30 days</li>
                <li>Price changes will be communicated 30 days in advance</li>
                <li>Family discounts available for multiple memberships</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Membership can be paused for extended absences with notice</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Additional Fees</h3>
            <p className={styles.sectionText}>
              Some services may incur additional fees beyond membership, including:
            </p>
            <div className={styles.keyPoints}>
              <ul className={styles.keyPointsList}>
                <li>Specialized procedures not covered by membership</li>
                <li>Certain injectable medications and vaccines</li>
                <li>Third-party laboratory tests</li>
                <li>Medical equipment and supplies</li>
                <li>After-hours home visits</li>
                <li>Extended travel medicine consultations</li>
              </ul>
            </div>
          </section>

          <section id="privacy" className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Privacy and Confidentiality</h2>
            <p className={styles.leadText}>
              We are committed to protecting your privacy and maintaining the confidentiality of your medical information in accordance with HIPAA regulations.
            </p>
            
            <p className={styles.sectionText}>
              Your protected health information will only be used or disclosed as permitted by law and with your authorization, except in emergency situations or as required by law. Please refer to our <Link href="/privacy">Privacy Policy</Link> for detailed information about how we collect, use, and protect your personal health information.
            </p>

            <div className={styles.keyPoints}>
              <h3>Our Privacy Commitments</h3>
              <ul className={styles.keyPointsList}>
                <li>Maintain physical, electronic, and procedural safeguards</li>
                <li>Limit access to your information to authorized personnel</li>
                <li>Use encryption for electronic communications</li>
                <li>Provide you with access to your medical records</li>
                <li>Notify you of any breaches as required by law</li>
                <li>Honor your preferences for communication methods</li>
              </ul>
            </div>
          </section>

          <section id="cancellation" className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Appointment Cancellation</h2>
            <p className={styles.sectionText}>
              We request 24-hour notice for appointment cancellations to allow other patients access to care. Our cancellation policy ensures fair access to appointments for all patients.
            </p>

            <h3 className={styles.subsectionTitle}>Cancellation Policy</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Cancellation Timeline</h3>
                <ul>
                  <li><strong>24+ hours notice:</strong> No charge</li>
                  <li><strong>Less than 24 hours:</strong> $25 fee may apply</li>
                  <li><strong>Same-day cancellation:</strong> $50 fee</li>
                  <li><strong>No-show:</strong> $75 fee</li>
                  <li>Emergency exceptions considered</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Repeat Violations</h3>
                <ul>
                  <li>First offense: Warning</li>
                  <li>Second offense: Fee applied</li>
                  <li>Third offense: Membership review</li>
                  <li>Chronic violations: Possible termination</li>
                  <li>Pattern of behavior addressed directly</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="liability" className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
            <p className={styles.sectionText}>
              Garcia Family Medicine and its providers will not be liable for any indirect, incidental, special, or consequential damages arising from the provision of medical services, except as required by applicable law.
            </p>

            <div className={styles.warningBox}>
              <h4>Legal Notice</h4>
              <p>
                This limitation applies to all claims, whether based on warranty, contract, tort, or any other legal theory, and whether or not Garcia Family Medicine has been informed of the possibility of such damage. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you.
              </p>
            </div>

            <p className={styles.sectionText}>
              Nothing in these terms shall limit or exclude our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be limited or excluded by law.
            </p>
          </section>

          <section id="termination" className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Termination</h2>
            <p className={styles.sectionText}>
              Either party may terminate the patient-physician relationship with 30 days written notice. We will provide emergency care and prescription refills during the notice period to ensure continuity of care.
            </p>

            <h3 className={styles.subsectionTitle}>Grounds for Immediate Termination</h3>
            <div className={styles.keyPoints}>
              <ul className={styles.keyPointsList}>
                <li>Threatening or abusive behavior toward staff or other patients</li>
                <li>Violence or threat of violence</li>
                <li>Fraudulent activity or misrepresentation</li>
                <li>Non-compliance with treatment that endangers health</li>
                <li>Violation of controlled substance agreement</li>
                <li>Repeated violation of practice policies</li>
                <li>Non-payment of fees after 60 days and reasonable notice</li>
                <li>Inappropriate use of after-hours access</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Termination Process</h3>
            <p className={styles.sectionText}>
              Upon termination, we will:
            </p>
            <div className={styles.keyPoints}>
              <ul className={styles.keyPointsList}>
                <li>Provide written notice of termination</li>
                <li>Continue emergency care for 30 days</li>
                <li>Provide prescription refills for 30 days</li>
                <li>Transfer medical records upon request</li>
                <li>Provide referrals to other providers</li>
                <li>Return any unused portion of prepaid fees</li>
              </ul>
            </div>
          </section>

          <section id="changes" className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Changes to Terms</h2>
            <p className={styles.sectionText}>
              We reserve the right to modify these terms at any time. Significant changes will be communicated to patients via email or during visits. Continued use of our services constitutes acceptance of modified terms.
            </p>

            <div className={styles.keyPoints}>
              <h3>Notification Process</h3>
              <ul className={styles.keyPointsList}>
                <li>Material changes communicated 30 days in advance</li>
                <li>Notice provided via email to registered address</li>
                <li>Updates posted on website and patient portal</li>
                <li>Opportunity to discuss concerns before implementation</li>
                <li>Right to terminate if you disagree with changes</li>
              </ul>
            </div>
          </section>

          <section id="contact" className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Contact Information</h2>
            <p className={styles.sectionText}>
              If you have any questions about these Terms of Service, please contact us:
            </p>

            <div className={styles.infoCard}>
              <h3>Garcia Family Medicine</h3>
              <ul>
                <li><strong>Address:</strong> 801 NW St. Mary Drive, Blue Springs, MO 64015</li>
                <li><strong>Phone:</strong> <a href="tel:816-427-5320">(816) 427-5320</a></li>
                <li><strong>Email:</strong> admin@garciafamilymedicine.care</li>
                <li><strong>Hours:</strong> Tuesday-Friday, 9:00 AM - 5:00 PM</li>
                <li><strong>After Hours:</strong> Available for urgent matters for members</li>
              </ul>
            </div>

            <div className={styles.warningBox}>
              <h4>Agreement Acknowledgment</h4>
              <p>
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our services.
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <section className={styles.section}>
            <div className={styles.keyPoints}>
              <p className={styles.sectionText}>
                <strong>Effective Date:</strong> January 1, 2025<br />
                <strong>Last Revised:</strong> January 2025<br />
                <strong>Version:</strong> 2.0
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}