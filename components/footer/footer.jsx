'use client';

import Link from 'next/link';
import Image from 'next/image';
import EmailSubscription from '../emailsubscription';
import styles from './footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const partnerLogos = [
    { src: '/images/footer/partners/dpc-alliance.png', alt: 'DPC Alliance Logo' },
    { src: '/images/footer/partners/aafp.png', alt: 'AAFP Logo' },
    { src: '/images/footer/partners/independence-chamber.png', alt: 'Independence Chamber Logo' },
    { src: '/images/footer/partners/mo-academy.png', alt: 'MO Academy Logo' },
    { src: '/images/footer/partners/obesity-medicine.png', alt: 'Obesity Medicine Logo' },
    { src: '/gigisafehouse.png', alt: "Gigi's Safe House Logo", href: 'https://gigisafehouse.com' },
  ];

  return (
    <footer className={`${styles.footer} ${styles.container}`}>
      <div className={styles.footerContainer}>
        {/* Comprehensive CTA Section - MOVED TO TOP */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaHeader}>
              <h2 className={styles.ctaTitle}>Ready to Take Control of Your Health?</h2>
              <p className={styles.ctaDescription}>
                Experience personalized healthcare with Garcia Family Medicine. From routine care to specialized services, 
                we're here to support your health journey with compassionate, comprehensive medical care.
              </p>
            </div>
            
            <div className={styles.ctaActions}>
              <div className={styles.ctaButtons}>
                <a href="tel:816-427-5320" className={styles.primaryCtaButton}>
                  📞 Call Now: (816) 427-5320
                </a>
                <a href="sms:8167082719" className={styles.secondaryCtaButton}>
                  💬 Text: (816) 708-2719
                </a>
                <a href="/contact" className={styles.tertiaryCtaButton}>
                  📅 Schedule Online
                </a>
              </div>
              
              <div className={styles.ctaFeatures}>
                <Link href="/services/telehealth" className={styles.feature}>
                  <span className={styles.featureIcon}>💻</span>
                  <span>Telehealth Available</span>
                </Link>
                <Link href="/learn/veterans" className={styles.feature}>
                  <span className={styles.featureIcon}>🎖️</span>
                  <span>Veterans Welcome</span>
                </Link>
                <Link href="/services/cash-pay" className={styles.feature}>
                  <span className={styles.featureIcon}>📋</span>
                  <span>Affordable Cash Pay Rates</span>
                </Link>
                <Link href="/services/payment-plans" className={styles.feature}>
                  <span className={styles.featureIcon}>💳</span>
                  <span>Flexible Payment Plans</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.footerDivider} />

        {/* Partner Logos Section - MOVED BELOW CTA */}
        <div className={styles.partnerSection}>
          <h3 className={styles.partnerTitle}>Our Partners & Affiliations</h3>
          <div className={styles.partnerLogos}>
            {partnerLogos.map((logo, index) => (
              logo.href ? (
                <a 
                  key={index}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.partnerLogoLink}
                >
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    width={120} 
                    height={60}
                    className={styles.partnerLogo}
                  />
                </a>
              ) : (
                <Image 
                  key={index}
                  src={logo.src} 
                  alt={logo.alt} 
                  width={120} 
                  height={60}
                  className={styles.partnerLogo}
                />
              )
            ))}
          </div>
        </div>

        <hr className={styles.footerDivider} />

        {/* Contact Information */}
        <div className={styles.contactInfoSection}>
          <div className={styles.contactInfoGrid}>
            <div className={styles.contactInfoItem}>
              <h4 className={styles.contactInfoTitle}>Contact</h4>
              <p className={styles.contactInfoContent}>
                Call <a href="tel:+18164275320">(816) 427-5320</a> | Text <a href="sms:8167082719">(816) 708-2719</a> | Fax <a href="tel:8888072718">(888) 807-2718</a>
              </p>
            </div>

            <div className={styles.contactInfoItem}>
              <h4 className={styles.contactInfoTitle}>Hours</h4>
              <p className={styles.contactInfoContent}>
                Mon: CLOSED | Tue-Fri: 9-5 PM | Weekends & Evenings Available
              </p>
            </div>

            <div className={styles.contactInfoItem}>
              <h4 className={styles.contactInfoTitle}>Location</h4>
              <p className={styles.contactInfoContent}>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=801+NW+St+Mary+Dr+Suite+209,+Blue+Springs,+MO+64014"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  801 NW St. Mary Drive, Suite 209, Blue Springs, MO 64014
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr className={styles.footerDivider} />

        {/* Newsletter and Map Section */}
        <div className={styles.contentSection}>
          <div className={styles.newsletterContainer}>
            <h2 className={styles.newsletterTitle}>Subscribe</h2>
            <p className={styles.newsletterSubtitle}>Sign up for news and updates</p>
            <EmailSubscription 
              source="footer_newsletter"
              buttonText="Sign Up"
              placeholder="Email"
              showLabels={false}
              customStyles={{
                form: styles.newsletterForm,
                input: styles.newsletterInput,
                button: styles.newsletterButton,
                message: styles.submitMessage
              }}
            />
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              className={styles.mapIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.3456789012345!2d-94.2654326846323!3d39.01234567954789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ee627bb05011%3A0x8a3b8f5a5e9a2d4f!2s801%20NW%20St%20Mary%20Dr%20Suite%20209%2C%20Blue%20Springs%2C%20MO%2064014!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <hr className={styles.footerDivider} />

        {/* Navigation Links */}
        <div className={styles.navLinksGrid}>
          {/* Quick Links */}
          <Link href="/meetthedoctor" className={styles.navLink}>Meet the Doctor</Link>
          <Link href="/news" className={styles.navLink}>News & Blog</Link>
          <Link href="/events/current" className={styles.navLink}>Current Events</Link>
          <Link href="/faqs" className={styles.navLink}>FAQs</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          
          {/* Premium Healthcare Services */}
          <Link href="/care/faith-family-medicine" className={styles.navLink}>Faith & Family Medicine™</Link>
          <Link href="/services/corelift" className={styles.navLink}>CoreLift™ Program</Link>
          <Link href="/services/nourish-thrive-journey" className={styles.navLink}>Nourish & Thrive™ Journey</Link>
          <Link href="/services/truerelief-therapy" className={styles.navLink}>TrueRelief™ Therapy</Link>
          <Link href="/services/peacewithin-life-coaching" className={styles.navLink}>PeaceWithin™ Life Coaching</Link>
          
          {/* Professional Services */}
          <Link href="/services/clearroad-dot-exams" className={styles.navLink}>ClearRoad™ DOT Exams</Link>
          <Link href="/services/valorview-ime" className={styles.navLink}>ValorView™ IME</Link>
          <Link href="/services/valorlink-letter" className={styles.navLink}>ValorLink™ Letters</Link>
          <Link href="/services/myclinic365" className={styles.navLink}>MyClinic365™</Link>
          <Link href="/services/carebridge" className={styles.navLink}>CareBridge™</Link>
          
          {/* Health Education */}
          <Link href="/care/primary-care" className={styles.navLink}>Primary Care</Link>
          <Link href="/care/family-medicine" className={styles.navLink}>Family Medicine</Link>
          <Link href="/care/preventive-care" className={styles.navLink}>Preventive Care</Link>
          <Link href="/care/chronic-disease" className={styles.navLink}>Chronic Disease</Link>
          <Link href="/care/cash-pay" className={styles.navLink}>Cash Pay Options</Link>
          <Link href="/services/payment-plans" className={styles.navLink}>Payment Plans</Link>
          <Link href="/care/womens-health" className={styles.navLink}>Women's Health</Link>
          <Link href="/care/mens-health" className={styles.navLink}>Men's Health</Link>
          <Link href="/care/mental-health" className={styles.navLink}>Mental Health</Link>
          <Link href="/care/telehealth" className={styles.navLink}>Telehealth</Link>
        </div>

        {/* Copyright */}
        <div className={styles.copyrightSection}>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.legalSeparator}>|</span>
            <Link href="/terms" className={styles.legalLink}>Terms of Use</Link>
            <span className={styles.legalSeparator}>|</span>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          </div>
          <p className={styles.copyrightText}>Copyright © {currentYear} Garcia Family Medicine. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}