'use client';

import styles from '../learn/service.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import { FaHandsHelping, FaHeart, FaUsers, FaShieldAlt, FaHandshake, FaUserFriends } from 'react-icons/fa';

export default function AffiliatesMainPage() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Partners & Affiliates</h1>
            <p className={styles.heroSubtitle}>Working Together to Strengthen Our Community</p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introSection}>
            <div className={styles.container}>
              <p className={styles.leadText}>
                Garcia Family Medicine is proud to partner with organizations that share our commitment to community health, wellness, and supporting those in need. Together, we work to create a stronger, healthier community for everyone.
              </p>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Our Community Partners</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaShieldAlt className={styles.serviceIcon} />
                  <h3><a href="https://gigisafehouse.com" target="_blank" rel="noopener noreferrer">Gigi's Safe House</a></h3>
                  <p>Supporting survivors of domestic violence and human trafficking with comprehensive services and safe housing</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.approachSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Why We Partner</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <h3>Community Health</h3>
                  <p>We believe healthcare extends beyond the clinic. By partnering with community organizations, we address broader social determinants of health.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Comprehensive Support</h3>
                  <p>Our partnerships allow us to refer patients to trusted organizations that provide services we don't offer directly, ensuring comprehensive care.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Vulnerable Populations</h3>
                  <p>We're committed to supporting organizations that serve vulnerable populations, including survivors of violence and those experiencing homelessness.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Shared Values</h3>
                  <p>We partner with organizations that share our values of compassion, dignity, respect, and commitment to improving lives in our community.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Resource Network</h3>
                  <p>Through our partnerships, we can connect patients with additional resources like housing assistance, counseling, and support services.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Community Impact</h3>
                  <p>Together with our partners, we can make a greater impact on community health and well-being than we could achieve alone.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Partnership Areas</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaUsers className={styles.serviceIcon} />
                  <h3>Social Services</h3>
                  <p>Organizations providing housing, food security, and social support services for vulnerable populations</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeart className={styles.serviceIcon} />
                  <h3>Mental Health</h3>
                  <p>Mental health organizations and counseling services that complement our medical care</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaHandsHelping className={styles.serviceIcon} />
                  <h3>Crisis Support</h3>
                  <p>Organizations providing crisis intervention, safety planning, and emergency assistance</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaUserFriends className={styles.serviceIcon} />
                  <h3>Community Health</h3>
                  <p>Public health organizations working to improve population health and prevent disease</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaHandshake className={styles.serviceIcon} />
                  <h3>Healthcare Networks</h3>
                  <p>Medical organizations and healthcare systems that expand access to specialized care</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaShieldAlt className={styles.serviceIcon} />
                  <h3>Advocacy Groups</h3>
                  <p>Organizations advocating for policy changes and systemic improvements in healthcare and social services</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.faqSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Partnership Information</h2>
              <div className={styles.faqGrid}>
                <div className={styles.faqItem}>
                  <h3>How do you choose partners?</h3>
                  <p>We partner with organizations that demonstrate integrity, effectiveness, and alignment with our values of compassionate, comprehensive healthcare.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Can you refer me to partner services?</h3>
                  <p>Yes, during your appointment, we can discuss whether any of our partner organizations might be helpful for your particular situation or needs.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Do you accept partnership requests?</h3>
                  <p>We're always open to learning about organizations that serve our community. Contact our office to discuss potential partnership opportunities.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>How can I support these organizations?</h3>
                  <p>Each partner organization has their own ways to receive support, whether through donations, volunteering, or advocacy. Visit their websites for more information.</p>
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