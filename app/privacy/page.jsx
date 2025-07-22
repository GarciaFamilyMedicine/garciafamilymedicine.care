'use client';

import { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import styles from './privacy.module.css';

export default function PrivacyPage() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Security icons for floating animation
  const securityIcons = [
    { icon: '🔐', left: '10%', top: '20%', delay: '0s' },
    { icon: '🛡️', left: '80%', top: '15%', delay: '5s' },
    { icon: '🔒', left: '20%', top: '70%', delay: '10s' },
    { icon: '📋', left: '70%', top: '60%', delay: '15s' },
    { icon: '✓', left: '50%', top: '40%', delay: '20s' }
  ];

  return (
    <div className={`${styles.pageWrapper} min-h-screen flex flex-col`}>
      {/* Animated Background */}
      <div className={styles.animatedBackground} />
      <div className={styles.shieldPattern} />
      
      {/* Floating Security Icons */}
      <div className={styles.securityIcons}>
        {securityIcons.map((item, index) => (
          <div
            key={index}
            className={styles.securityIcon}
            style={{
              left: item.left,
              top: item.top,
              animationDelay: item.delay
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <Header />
      
      <main className={`${styles.mainContent} flex-grow`}>
        <div className={styles.container}>
          {/* Hero Section */}
          <div className={styles.heroSection}>
            <h1 className={styles.heroTitle}>Privacy Policy</h1>
            <p className={styles.heroSubtitle}>
              Your privacy is our priority. We are committed to protecting your personal health information and maintaining the highest standards of confidentiality.
            </p>
            <div className={styles.hipaaBadge}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              HIPAA Compliant
            </div>
          </div>
          
          {/* Privacy Container */}
          <div className={styles.privacyContainer}>
            {/* Quick Navigation */}
            <div className={styles.quickNav}>
              <h2 className={styles.quickNavTitle}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Quick Navigation
              </h2>
              <div className={styles.quickNavGrid}>
                <a href="#commitment" className={styles.quickNavItem}>
                  <div className={styles.quickNavIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Our Commitment</span>
                </a>
                <a href="#collection" className={styles.quickNavItem}>
                  <div className={styles.quickNavIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H4v10h12V5h-2a1 1 0 100-2 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 011-1h.01a1 1 0 110 2H8a1 1 0 01-1-1zm3 0a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zm-3 4a1 1 0 011-1h.01a1 1 0 110 2H8a1 1 0 01-1-1zm3 0a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Information We Collect</span>
                </a>
                <a href="#usage" className={styles.quickNavItem}>
                  <div className={styles.quickNavIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>How We Use Information</span>
                </a>
                <a href="#sharing" className={styles.quickNavItem}>
                  <div className={styles.quickNavIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </div>
                  <span>Information Sharing</span>
                </a>
                <a href="#rights" className={styles.quickNavItem}>
                  <div className={styles.quickNavIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Your Rights</span>
                </a>
                <a href="#security" className={styles.quickNavItem}>
                  <div className={styles.quickNavIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Data Security</span>
                </a>
              </div>
            </div>

            {/* Privacy Content */}
            <div className={styles.privacyContent}>
              <section id="commitment" className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7v9c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7L12 2z" />
                    </svg>
                  </div>
                  <h2 className={styles.sectionTitle}>Our Commitment to Privacy</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>
                    Garcia Family Medicine is committed to protecting the privacy and security of your personal health information. This Privacy Policy explains how we collect, use, and safeguard your information in compliance with HIPAA (Health Insurance Portability and Accountability Act) and other applicable laws.
                  </p>
                  <p>
                    We understand that your health information is personal and sensitive. We maintain physical, electronic, and procedural safeguards that comply with federal regulations to protect your personal health information.
                  </p>
                </div>
              </section>

              <section id="collection" className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                  </div>
                  <h2 className={styles.sectionTitle}>Information We Collect</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>We collect the following types of information to provide you with quality healthcare services:</p>
                  <div className={styles.rightsList}>
                    <ul>
                      <li>
                        <div className={styles.rightIcon}>👤</div>
                        <span>Personal identification information (name, address, phone number, email, date of birth)</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>🏥</div>
                        <span>Medical history, diagnoses, treatment records, and test results</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>💳</div>
                        <span>Insurance information when applicable for documentation purposes</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>💵</div>
                        <span>Payment information for membership and service fees</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>📧</div>
                        <span>Communications between you and our practice team</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="usage" className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                    </svg>
                  </div>
                  <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>We use your personal health information for the following purposes:</p>
                  <div className={styles.rightsList}>
                    <ul>
                      <li>
                        <div className={styles.rightIcon}>✅</div>
                        <span>Provide comprehensive medical treatment and healthcare services</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>✅</div>
                        <span>Process membership payments and manage your account</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>✅</div>
                        <span>Communicate with you about appointments, test results, and health matters</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>✅</div>
                        <span>Comply with legal and regulatory requirements</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>✅</div>
                        <span>Improve our services, patient care quality, and clinical outcomes</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>✅</div>
                        <span>Coordinate care with other healthcare providers when authorized</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="sharing" className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8h1a4 4 0 010 8h-1M2 8h1a4 4 0 110 8H2M6 8h12" />
                    </svg>
                  </div>
                  <h2 className={styles.sectionTitle}>Information Sharing and Disclosure</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>
                    We do not sell, rent, or share your personal health information with third parties except as required or permitted by law. Information may be disclosed in the following circumstances:
                  </p>
                  <div className={styles.rightsList}>
                    <ul>
                      <li>
                        <div className={styles.rightIcon}>🔐</div>
                        <span>With your explicit written consent or authorization</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>🏥</div>
                        <span>For treatment purposes with other healthcare providers involved in your care</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>💳</div>
                        <span>For payment processing and healthcare operations</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>⚖️</div>
                        <span>When required by law, court order, or legal proceedings</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>🛡️</div>
                        <span>To protect public health and safety in emergency situations</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>📋</div>
                        <span>For healthcare oversight activities authorized by law</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="rights" className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h2 className={styles.sectionTitle}>Your Rights</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>Under HIPAA, you have important rights regarding your personal health information:</p>
                  <div className={styles.rightsList}>
                    <ul>
                      <li>
                        <div className={styles.rightIcon}>✅</div>
                        <span><strong>Access:</strong> Request and receive copies of your medical records</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>✅</div>
                        <span><strong>Amendment:</strong> Request corrections to your health information</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>✅</div>
                        <span><strong>Restriction:</strong> Request limitations on uses and disclosures</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>✅</div>
                        <span><strong>Communication:</strong> Choose how we contact you (phone, email, mail)</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>✅</div>
                        <span><strong>Accounting:</strong> Receive a list of disclosures of your health information</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>✅</div>
                        <span><strong>Complaint:</strong> File a complaint if you believe your privacy rights have been violated</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => toggleSection('rights-details')}
                    className={`${styles.expandButton} ${expandedSections['rights-details'] ? styles.expanded : ''}`}
                  >
                    Learn more about exercising your rights
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {expandedSections['rights-details'] && (
                    <div className="mt-4 p-4 bg-black bg-opacity-20 rounded-lg">
                      <p>To exercise any of these rights, please contact our Privacy Officer. We will respond to your request within 30 days as required by law.</p>
                    </div>
                  )}
                </div>
              </section>

              <section id="security" className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </div>
                  <h2 className={styles.sectionTitle}>Data Security</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>
                    We implement comprehensive safeguards to protect your health information:
                  </p>
                  <div className={styles.rightsList}>
                    <ul>
                      <li>
                        <div className={styles.rightIcon}>🔒</div>
                        <span><strong>Physical Security:</strong> Locked file cabinets, restricted access areas, and visitor management</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>💻</div>
                        <span><strong>Technical Security:</strong> Encryption, firewalls, secure servers, and regular security updates</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>👥</div>
                        <span><strong>Administrative Security:</strong> Staff training, access controls, and privacy agreements</span>
                      </li>
                      <li>
                        <div className={styles.rightIcon}>🔍</div>
                        <span><strong>Monitoring:</strong> Regular audits and risk assessments to ensure compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="website" className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </div>
                  <h2 className={styles.sectionTitle}>Website Privacy</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>
                    Our website may collect general usage data through cookies and analytics tools. This information is used to improve our website and services. We do not collect personal health information through our website unless you explicitly provide it through secure forms.
                  </p>
                  <p>
                    Any information submitted through our website contact forms is transmitted securely and treated with the same confidentiality as all patient information.
                  </p>
                </div>
              </section>

              <section id="changes" className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v6m0 4v6m0 4v-2M8 8h8M6 12h12M10 16h4" />
                    </svg>
                  </div>
                  <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>
                    We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy regularly.
                  </p>
                  <p>
                    For material changes that affect how we handle your personal health information, we will provide notice via mail or during your next visit.
                  </p>
                </div>
              </section>

              <section id="contact" className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <h2 className={styles.sectionTitle}>Contact Us</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>
                    If you have questions about this Privacy Policy or how we handle your information, please contact our Privacy Officer:
                  </p>
                  <div className={styles.contactCard}>
                    <h3 className={styles.contactTitle}>Privacy Officer</h3>
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
                        Email: privacy@garciafamilymedicine.care
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="complaints" className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className={styles.sectionTitle}>Complaints</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>
                    If you believe your privacy rights have been violated, you may file a complaint with our practice or with the Secretary of the Department of Health and Human Services. We will not retaliate against you for filing a complaint.
                  </p>
                  <div className={styles.contactCard}>
                    <p><strong>File a complaint with HHS:</strong></p>
                    <p>Office for Civil Rights</p>
                    <p>U.S. Department of Health and Human Services</p>
                    <p>200 Independence Avenue, S.W.</p>
                    <p>Washington, D.C. 20201</p>
                    <p>Toll-free: 1-877-696-6775</p>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <div className={styles.footerSection}>
                <p className={styles.footerText}>
                  This privacy policy was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <div className={styles.footerLinks}>
                  <Link href="/terms" className={styles.footerLink}>
                    Terms of Service
                  </Link>
                  <Link href="/faqs" className={styles.footerLink}>
                    FAQs
                  </Link>
                  <Link href="/contact" className={styles.footerLink}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}