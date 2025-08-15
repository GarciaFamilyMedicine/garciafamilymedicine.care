'use client'

import styles from '../learn/learn-article.module.css'
import Link from 'next/link'
import Header from '../../components/header'
import Footer from '../../components/footer/footer'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / Privacy Policy
            </nav>
            <h1 className={styles.articleTitle}>Privacy Policy</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>HIPAA Compliant</span>
              <span>Effective Date: January 1, 2025</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>Quick Navigation</h2>
            <ul className={styles.tocList}>
              <li><a href="#commitment">Our Commitment to Privacy</a></li>
              <li><a href="#collection">Information We Collect</a></li>
              <li><a href="#usage">How We Use Your Information</a></li>
              <li><a href="#sharing">Information Sharing and Disclosure</a></li>
              <li><a href="#rights">Your Rights Under HIPAA</a></li>
              <li><a href="#security">Data Security Measures</a></li>
              <li><a href="#website">Website Privacy</a></li>
              <li><a href="#changes">Changes to This Policy</a></li>
              <li><a href="#contact">Contact Information</a></li>
              <li><a href="#complaints">How to File a Complaint</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="commitment" className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Commitment to Privacy</h2>
            <p className={styles.leadText}>
              Garcia Family Medicine is committed to protecting the privacy and security of your personal health information. This Privacy Policy explains how we collect, use, and safeguard your information in compliance with HIPAA (Health Insurance Portability and Accountability Act) and other applicable laws.
            </p>
            
            <p className={styles.sectionText}>
              We understand that your health information is personal and sensitive. We maintain physical, electronic, and procedural safeguards that comply with federal regulations to protect your personal health information. Your privacy is our priority, and we are committed to maintaining the highest standards of confidentiality.
            </p>

            <div className={styles.warningBox}>
              <h4>HIPAA Compliance Statement</h4>
              <p>
                This Notice of Privacy Practices describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
              </p>
            </div>
          </section>

          <section id="collection" className={styles.section}>
            <h2 className={styles.sectionTitle}>Information We Collect</h2>
            <p className={styles.sectionText}>
              We collect the following types of information to provide you with quality healthcare services:
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Personal Information</h3>
                <ul>
                  <li>Name, address, and contact information</li>
                  <li>Date of birth and Social Security number</li>
                  <li>Emergency contact information</li>
                  <li>Photo identification</li>
                  <li>Employment information</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Medical Information</h3>
                <ul>
                  <li>Medical history and current conditions</li>
                  <li>Diagnoses and treatment records</li>
                  <li>Laboratory and test results</li>
                  <li>Prescription and medication history</li>
                  <li>Immunization records</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Financial Information</h3>
                <ul>
                  <li>Insurance policy information</li>
                  <li>Billing and payment records</li>
                  <li>Credit card information for payments</li>
                  <li>Financial assistance documentation</li>
                  <li>Workers' compensation claims</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Communications</h3>
                <ul>
                  <li>Email and phone communications</li>
                  <li>Patient portal messages</li>
                  <li>Appointment scheduling information</li>
                  <li>Feedback and survey responses</li>
                  <li>Consent and authorization forms</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="usage" className={styles.section}>
            <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
            <p className={styles.sectionText}>
              We use your personal health information for the following purposes:
            </p>

            <h3 className={styles.subsectionTitle}>Treatment Purposes</h3>
            <div className={styles.keyPoints}>
              <ul className={styles.keyPointsList}>
                <li>Provide comprehensive medical treatment and healthcare services</li>
                <li>Coordinate care with other healthcare providers</li>
                <li>Prescribe medications and order laboratory tests</li>
                <li>Maintain accurate medical records</li>
                <li>Contact you about appointments and health matters</li>
                <li>Provide health education and preventive care information</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Payment Purposes</h3>
            <div className={styles.keyPoints}>
              <ul className={styles.keyPointsList}>
                <li>Process membership payments and manage your account</li>
                <li>Bill insurance companies when applicable</li>
                <li>Verify insurance coverage and benefits</li>
                <li>Collect copayments and deductibles</li>
                <li>Process refunds when appropriate</li>
                <li>Manage financial assistance programs</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Healthcare Operations</h3>
            <div className={styles.keyPoints}>
              <ul className={styles.keyPointsList}>
                <li>Improve our services and patient care quality</li>
                <li>Conduct quality assessment and improvement activities</li>
                <li>Train staff and healthcare professionals</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Perform business planning and development</li>
                <li>Conduct audits and compliance reviews</li>
              </ul>
            </div>
          </section>

          <section id="sharing" className={styles.section}>
            <h2 className={styles.sectionTitle}>Information Sharing and Disclosure</h2>
            <p className={styles.sectionText}>
              We do not sell, rent, or share your personal health information with third parties except as required or permitted by law. Information may be disclosed in the following circumstances:
            </p>

            <h3 className={styles.subsectionTitle}>Authorized Disclosures</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>With Your Consent</h3>
                <ul>
                  <li>Written authorization from you</li>
                  <li>Family members you designate</li>
                  <li>Personal representatives</li>
                  <li>Other healthcare providers for treatment</li>
                  <li>Health information exchanges</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Required by Law</h3>
                <ul>
                  <li>Court orders and subpoenas</li>
                  <li>Law enforcement investigations</li>
                  <li>Public health reporting</li>
                  <li>Abuse or neglect reporting</li>
                  <li>FDA adverse event reporting</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Permitted Uses</h3>
                <ul>
                  <li>Healthcare oversight activities</li>
                  <li>Research with proper safeguards</li>
                  <li>Organ donation coordination</li>
                  <li>Workers' compensation claims</li>
                  <li>Coroners and medical examiners</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Emergency Situations</h3>
                <ul>
                  <li>Medical emergencies</li>
                  <li>Disaster relief efforts</li>
                  <li>Serious threats to health/safety</li>
                  <li>National security activities</li>
                  <li>Protective services</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="rights" className={styles.section}>
            <h2 className={styles.sectionTitle}>Your Rights Under HIPAA</h2>
            <p className={styles.sectionText}>
              Under HIPAA, you have important rights regarding your personal health information:
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Right to Access</h3>
                <ul>
                  <li>Request copies of your medical records</li>
                  <li>Review your health information</li>
                  <li>Receive electronic copies when available</li>
                  <li>Designate third parties to receive copies</li>
                  <li>Response within 30 days of request</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Right to Amend</h3>
                <ul>
                  <li>Request corrections to your records</li>
                  <li>Add statements to your file</li>
                  <li>Dispute inaccurate information</li>
                  <li>Receive written response to requests</li>
                  <li>Appeal denied amendment requests</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Right to Restrict</h3>
                <ul>
                  <li>Limit uses and disclosures</li>
                  <li>Restrict information shared with family</li>
                  <li>Opt out of facility directories</li>
                  <li>Request confidential communications</li>
                  <li>Choose communication methods</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Right to Account</h3>
                <ul>
                  <li>List of disclosures made</li>
                  <li>Six-year disclosure history</li>
                  <li>Purpose of each disclosure</li>
                  <li>Recipients of information</li>
                  <li>First request free annually</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>Exercising Your Rights</h4>
              <p>
                To exercise any of these rights, please contact our Privacy Officer. We will respond to your request within 30 days as required by law. Some requests may require written documentation.
              </p>
            </div>
          </section>

          <section id="security" className={styles.section}>
            <h2 className={styles.sectionTitle}>Data Security Measures</h2>
            <p className={styles.sectionText}>
              We implement comprehensive safeguards to protect your health information:
            </p>

            <h3 className={styles.subsectionTitle}>Physical Safeguards</h3>
            <div className={styles.keyPoints}>
              <ul className={styles.keyPointsList}>
                <li>Locked file cabinets and storage areas</li>
                <li>Restricted access to patient records</li>
                <li>Visitor management and identification</li>
                <li>Secure disposal and shredding services</li>
                <li>Facility security and monitoring</li>
                <li>Workstation security protocols</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Technical Safeguards</h3>
            <div className={styles.keyPoints}>
              <ul className={styles.keyPointsList}>
                <li>Encryption of electronic health records</li>
                <li>Secure servers and firewalls</li>
                <li>Access controls and user authentication</li>
                <li>Automatic logoff and screen locks</li>
                <li>Regular security updates and patches</li>
                <li>Audit logs and monitoring systems</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Administrative Safeguards</h3>
            <div className={styles.keyPoints}>
              <ul className={styles.keyPointsList}>
                <li>Staff training on privacy and security</li>
                <li>Business associate agreements</li>
                <li>Minimum necessary access policies</li>
                <li>Incident response procedures</li>
                <li>Regular risk assessments</li>
                <li>Workforce confidentiality agreements</li>
              </ul>
            </div>
          </section>

          <section id="website" className={styles.section}>
            <h2 className={styles.sectionTitle}>Website Privacy</h2>
            <p className={styles.sectionText}>
              Our website collects certain information to improve your experience and our services:
            </p>

            <h3 className={styles.subsectionTitle}>Information Collection</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Automatically Collected</h3>
                <ul>
                  <li>IP addresses and browser information</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring websites</li>
                  <li>Device and operating system</li>
                  <li>Geographic location (general)</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Voluntarily Provided</h3>
                <ul>
                  <li>Contact form submissions</li>
                  <li>Newsletter subscriptions</li>
                  <li>Appointment requests</li>
                  <li>Survey responses</li>
                  <li>Email communications</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Cookies and Tracking</h3>
            <p className={styles.sectionText}>
              We use cookies and similar technologies to enhance your website experience. You can control cookie settings through your browser preferences. Essential cookies are required for website functionality, while optional cookies help us improve our services.
            </p>

            <div className={styles.warningBox}>
              <h4>Third-Party Services</h4>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing personal information.
              </p>
            </div>
          </section>

          <section id="changes" className={styles.section}>
            <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
            <p className={styles.sectionText}>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated revision date.
            </p>

            <div className={styles.keyPoints}>
              <h3>Notification of Changes</h3>
              <ul className={styles.keyPointsList}>
                <li>Material changes posted on website</li>
                <li>Notice provided at next appointment</li>
                <li>Email notification for significant changes</li>
                <li>60-day notice for material changes affecting PHI use</li>
                <li>Right to receive paper copy of revised notice</li>
              </ul>
            </div>
          </section>

          <section id="contact" className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <p className={styles.sectionText}>
              If you have questions about this Privacy Policy or how we handle your information, please contact our Privacy Officer:
            </p>

            <div className={styles.infoCard}>
              <h3>Privacy Officer</h3>
              <ul>
                <li><strong>Organization:</strong> Garcia Family Medicine</li>
                <li><strong>Address:</strong> 801 NW St. Mary Drive, Blue Springs, MO 64015</li>
                <li><strong>Phone:</strong> <a href="tel:816-427-5320">(816) 427-5320</a></li>
                <li><strong>Email:</strong> privacy@garciafamilymedicine.care</li>
                <li><strong>Hours:</strong> Tuesday-Friday, 9:00 AM - 5:00 PM</li>
              </ul>
            </div>
          </section>

          <section id="complaints" className={styles.section}>
            <h2 className={styles.sectionTitle}>How to File a Complaint</h2>
            <p className={styles.sectionText}>
              If you believe your privacy rights have been violated, you may file a complaint with our practice or with the Secretary of the Department of Health and Human Services. We will not retaliate against you for filing a complaint.
            </p>

            <h3 className={styles.subsectionTitle}>Filing Options</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>With Our Practice</h3>
                <ul>
                  <li>Contact our Privacy Officer</li>
                  <li>Submit written complaint</li>
                  <li>Include date and details of concern</li>
                  <li>Response within 30 days</li>
                  <li>No retaliation for complaints</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>With HHS Office for Civil Rights</h3>
                <ul>
                  <li><strong>Address:</strong> 200 Independence Ave SW, Washington, DC 20201</li>
                  <li><strong>Phone:</strong> 1-877-696-6775</li>
                  <li><strong>Website:</strong> www.hhs.gov/ocr</li>
                  <li><strong>Portal:</strong> ocrportal.hhs.gov</li>
                  <li>File within 180 days of violation</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>Your Rights Are Protected</h4>
              <p>
                Federal law prohibits retaliation against individuals who file complaints about privacy violations. We are committed to addressing your concerns promptly and professionally.
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