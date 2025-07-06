import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const partnerLogos = [
    { src: '/images/footer/partners/dpc-alliance.png', alt: 'DPC Alliance Logo' },
    { src: '/images/footer/partners/aafp.png', alt: 'AAFP Logo' },
    { src: '/images/footer/partners/independence-chamber.png', alt: 'Independence Chamber Logo' },
    { src: '/images/footer/partners/mo-academy.png', alt: 'MO Academy Logo' },
    { src: '/images/footer/partners/obesity-medicine.png', alt: 'Obesity Medicine Logo' },
  ];

  return (
    <footer className={`${styles.footer} ${styles.container}`}>
      <div className={styles.footerContainer}>
        {/* Partner Logos */}
        <div className={styles.partnerLogosGrid}>
          {partnerLogos.map((logo, index) => (
            <div key={index} className={styles.partnerLogoContainer}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className={styles.partnerLogo}
              />
            </div>
          ))}
        </div>

        <p className={styles.partnerText}>We are proud partners of the above associations.</p>

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
                Mon: CLOSED | Tue-Fri: 11-7 PM | Sat: 12-4PM | Sun: CLOSED
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

        {/* Combined Section */}
        <div className={styles.contentSection}>
          <div className={styles.newsletterContainer}>
            <h2 className={styles.newsletterTitle}>Subscribe</h2>
            <p className={styles.newsletterSubtitle}>Sign up for news and updates</p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Email"
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                Sign Up
              </button>
            </form>
          </div>

          <div className={styles.gigiLogoWrapper}>
            <div className={styles.gigiLogoContainer}>
              <Image
                src="/gigisafehouse.png"
                alt="Gigi's Safe House Logo"
                width={100}
                height={50}
                className={styles.gigiLogo}
              />
            </div>
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
          <Link href="/blog" className={styles.navLink}>Health Safety | Blog</Link>
          <Link href="/tess-talk-spotify" className={styles.navLink}>Tess Talk | Podcast</Link>
          <Link href="/meet-dr-tess-garcia" className={styles.navLink}>Meet the Doctor</Link>
          <Link href="/affordable-healthcare-memberships" className={styles.navLink}>Memberships</Link>
          <Link href="/announcements" className={styles.navLink}>Announcements</Link>
          <Link href="/department-of-transportation-physicals" className={styles.navLink}>DOT Certifications</Link>
          <Link href="/independent-medical-examinations" className={styles.navLink}>Medical Examinations</Link>
          <Link href="/medicare-services" className={styles.navLink}>Medicare Services</Link>
          <Link href="/mental-health-services" className={styles.navLink}>Mental Health</Link>
          <Link href="/pain-management-services" className={styles.navLink}>Pain Management</Link>
          <Link href="/telehealth-services" className={styles.navLink}>Telehealth</Link>
          <Link href="/veterans-services" className={styles.navLink}>Veteran Services</Link>
          <Link href="/weight-management-services" className={styles.navLink}>Weight Management</Link>
          <Link href="/faq" className={styles.navLink}>Join the Family</Link>
          <Link href="/faq" className={styles.navLink}>FAQs</Link>
          <Link href="/contact-us" className={styles.navLink}>Contact</Link>
        </div>

        {/* Copyright */}
        <div className={styles.copyrightSection}>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.legalSeparator}>|</span>
            <Link href="/terms-of-use" className={styles.legalLink}>Terms of Use</Link>
            <span className={styles.legalSeparator}>|</span>
            <Link href="/terms-of-service" className={styles.legalLink}>Terms of Service</Link>
          </div>
          <p className={styles.copyrightText}>Copyright © {currentYear} Garcia Family Medicine. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}