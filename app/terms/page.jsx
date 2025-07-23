'use client';

import { useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import styles from './terms.module.css';

export default function TermsPage() {
  // Generate floating circles
  const floatingCircles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    size: `${100 + i * 50}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${i * 5}s`
  }));

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className={`${styles.pageWrapper} min-h-screen flex flex-col`}>
      {/* Animated Background */}
      <div className={styles.animatedBackground} />
      <div className={styles.gridPattern} />
      
      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        {floatingCircles.map(circle => (
          <div
            key={circle.id}
            className={styles.floatingCircle}
            style={{
              width: circle.size,
              height: circle.size,
              left: circle.left,
              top: circle.top,
              animationDelay: circle.animationDelay
            }}
          />
        ))}
      </div>

      <Header />
      
      <main className={`${styles.mainContent} flex-grow`}>
        <div className={styles.container}>
          {/* Hero Section */}
          <div className={styles.heroSection}>
            <h1 className={styles.heroTitle}>Terms of Service</h1>
            <p className={styles.heroSubtitle}>
              Please read these terms carefully before using our services. By accessing Garcia Family Medicine, you agree to be bound by these terms.
            </p>
            <p className={styles.lastUpdated}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          {/* Terms Container */}
          <div className={styles.termsContainer}>
            {/* Table of Contents */}
            <div className={styles.tableOfContents}>
              <h2 className={styles.tocTitle}>Quick Navigation</h2>
              <div className={styles.tocList}>
                <a href="#acceptance" className={styles.tocItem}>
                  <span className={styles.tocNumber}>1.</span>
                  Acceptance of Terms
                </a>
                <a href="#medical-services" className={styles.tocItem}>
                  <span className={styles.tocNumber}>2.</span>
                  Medical Services
                </a>
                <a href="#responsibilities" className={styles.tocItem}>
                  <span className={styles.tocNumber}>3.</span>
                  Patient Responsibilities
                </a>
                <a href="#membership" className={styles.tocItem}>
                  <span className={styles.tocNumber}>4.</span>
                  Membership & Payment
                </a>
                <a href="#privacy" className={styles.tocItem}>
                  <span className={styles.tocNumber}>5.</span>
                  Privacy & Confidentiality
                </a>
                <a href="#cancellation" className={styles.tocItem}>
                  <span className={styles.tocNumber}>6.</span>
                  Appointment Cancellation
                </a>
                <a href="#liability" className={styles.tocItem}>
                  <span className={styles.tocNumber}>7.</span>
                  Limitation of Liability
                </a>
                <a href="#termination" className={styles.tocItem}>
                  <span className={styles.tocNumber}>8.</span>
                  Termination
                </a>
                <a href="#changes" className={styles.tocItem}>
                  <span className={styles.tocNumber}>9.</span>
                  Changes to Terms
                </a>
                <a href="#contact" className={styles.tocItem}>
                  <span className={styles.tocNumber}>10.</span>
                  Contact Information
                </a>
              </div>
            </div>

            {/* Terms Content */}
            <div className={styles.termsContent}>
              <section id="acceptance" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>1</span>
                  Acceptance of Terms
                </h2>
                <div className={styles.sectionContent}>
                  <p>
                    By accessing and using the services of Garcia Family Medicine, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p>
                    These terms apply to all patients, visitors, and others who access or use our services, including our website, patient portal, and physical facilities.
                  </p>
                </div>
              </section>

              <section id="medical-services" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>2</span>
                  Medical Services
                </h2>
                <div className={styles.sectionContent}>
                  <p>
                    Garcia Family Medicine provides Direct Primary Care services. Our services are not a substitute for health insurance and do not cover emergency care, hospitalization, or specialist services outside our practice.
                  </p>
                  <p>
                    Patients are encouraged to maintain health insurance for services not covered by our Direct Primary Care membership.
                  </p>
                  <p>
                    Our services include but are not limited to:
                  </p>
                  <ul>
                    <li>Comprehensive primary care</li>
                    <li>Preventive care and wellness exams</li>
                    <li>Chronic disease management</li>
                    <li>Acute illness treatment</li>
                    <li>Basic procedures and diagnostics</li>
                    <li>24/7 access to your physician</li>
                  </ul>
                </div>
              </section>

              <section id="responsibilities" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>3</span>
                  Patient Responsibilities
                </h2>
                <div className={styles.sectionContent}>
                  <p>As a patient of Garcia Family Medicine, you agree to:</p>
                  <ul>
                    <li>Provide accurate and complete health information</li>
                    <li>Follow agreed-upon treatment plans</li>
                    <li>Keep scheduled appointments or cancel with appropriate notice</li>
                    <li>Pay membership fees and any additional service charges promptly</li>
                    <li>Treat our staff with respect and courtesy</li>
                    <li>Inform us of changes to your contact information</li>
                    <li>Communicate openly about your health concerns</li>
                    <li>Respect the privacy and rights of other patients</li>
                  </ul>
                </div>
              </section>

              <section id="membership" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>4</span>
                  Membership and Payment
                </h2>
                <div className={styles.sectionContent}>
                  <p>
                    Membership fees are due monthly and cover the services outlined in your membership agreement. Additional fees may apply for certain procedures, medications, or specialized services. All fees are non-refundable unless otherwise stated.
                  </p>
                  <p>Payment terms include:</p>
                  <ul>
                    <li>Monthly membership fees are due on the same date each month</li>
                    <li>Accepted payment methods include credit card, debit card, HSA/FSA, and ACH transfer</li>
                    <li>Late payments may result in service suspension</li>
                    <li>Price changes will be communicated 30 days in advance</li>
                    <li>Family discounts may be available</li>
                  </ul>
                </div>
              </section>

              <section id="privacy" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>5</span>
                  Privacy and Confidentiality
                </h2>
                <div className={styles.sectionContent}>
                  <p>
                    We are committed to protecting your privacy and maintaining the confidentiality of your medical information in accordance with HIPAA regulations. Please refer to our <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</Link> for detailed information.
                  </p>
                  <p>
                    Your protected health information will only be used or disclosed as permitted by law and with your authorization, except in emergency situations or as required by law.
                  </p>
                </div>
              </section>

              <section id="cancellation" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>6</span>
                  Appointment Cancellation
                </h2>
                <div className={styles.sectionContent}>
                  <p>
                    We request 24-hour notice for appointment cancellations. Repeated no-shows or late cancellations may result in additional fees or membership termination.
                  </p>
                  <p>Our cancellation policy:</p>
                  <ul>
                    <li>Cancellations with 24+ hours notice: No charge</li>
                    <li>Same-day cancellations: May incur a fee</li>
                    <li>No-shows: Subject to fee and potential membership review</li>
                    <li>Emergency situations will be considered on a case-by-case basis</li>
                  </ul>
                </div>
              </section>

              <section id="liability" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>7</span>
                  Limitation of Liability
                </h2>
                <div className={styles.sectionContent}>
                  <p>
                    Garcia Family Medicine and its providers will not be liable for any indirect, incidental, special, or consequential damages arising from the provision of medical services, except as required by applicable law.
                  </p>
                  <p>
                    This limitation applies to all claims, whether based on warranty, contract, tort, or any other legal theory, and whether or not Garcia Family Medicine has been informed of the possibility of such damage.
                  </p>
                </div>
              </section>

              <section id="termination" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>8</span>
                  Termination
                </h2>
                <div className={styles.sectionContent}>
                  <p>
                    Either party may terminate the patient-physician relationship with 30 days written notice. Immediate termination may occur in cases of non-payment, threatening behavior, or other circumstances that compromise the therapeutic relationship.
                  </p>
                  <p>Grounds for immediate termination include:</p>
                  <ul>
                    <li>Threatening or abusive behavior toward staff or other patients</li>
                    <li>Fraudulent activity or misrepresentation</li>
                    <li>Non-compliance with treatment that endangers health</li>
                    <li>Violation of practice policies</li>
                    <li>Non-payment of fees after reasonable notice</li>
                  </ul>
                </div>
              </section>

              <section id="changes" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>9</span>
                  Changes to Terms
                </h2>
                <div className={styles.sectionContent}>
                  <p>
                    We reserve the right to modify these terms at any time. Significant changes will be communicated to patients via email or during visits. Continued use of our services constitutes acceptance of modified terms.
                  </p>
                  <p>
                    We will provide at least 30 days notice for any material changes that may affect your rights or obligations under these terms.
                  </p>
                </div>
              </section>

              <section id="contact" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>10</span>
                  Contact Information
                </h2>
                <div className={styles.sectionContent}>
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className={styles.contactSection}>
                    <div className={styles.contactInfo}>
                      <p>Garcia Family Medicine</p>
                      <p>801 NW St. Mary Drive</p>
                      <p>Blue Springs, MO 64015</p>
                      <p>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="inline mr-2">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Phone: <a href="tel:816-427-5320">816-427-5320</a>
                      </p>
                      <p>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="inline mr-2">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Email: admin@garciafamilymedicine.care
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Accept Terms Section */}
              <div className={styles.acceptSection}>
                <p className={styles.acceptText}>
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
                <Link href="/contact" className={styles.acceptButton}>
                  I Accept - Schedule My Visit
                </Link>
              </div>

              {/* Footer */}
              <div className={styles.footerSection}>
                <div className={styles.footerLinks}>
                  <Link href="/privacy" className={styles.footerLink}>
                    Privacy Policy
                  </Link>
                  <Link href="/faqs" className={styles.footerLink}>
                    FAQs
                  </Link>
                  <Link href="/contact" className={styles.footerLink}>
                    Contact Us
                  </Link>
                </div>
                <p className={styles.copyright}>
                  © {new Date().getFullYear()} Garcia Family Medicine. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}