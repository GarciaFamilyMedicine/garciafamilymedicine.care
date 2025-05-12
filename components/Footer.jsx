import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const partnerLogos = [
    { src: '/partners/dpc-alliance.png', alt: 'DPC Alliance Logo' },
    { src: '/partners/aafp.png', alt: 'AAFP Logo' },
    { src: '/partners/independence-chamber.png', alt: 'Independence Chamber Logo' },
    { src: '/partners/mo-academy.png', alt: 'MO Academy Logo' },
    { src: '/partners/obesity-medicine.png', alt: 'Obesity Medicine Logo' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Partner Logos */}
        <div className="partner-logos-grid">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="partner-logo-container">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <p className="partner-text">We are proud partners of the above associations.</p>

        <hr className="footer-divider" />

        {/* Contact Information */}
        <div className="info-grid">
          <div>
            <h4 className="section-title">Contact</h4>
            <p className="section-content">
              Call <a href="tel:+18164275320">(816) 427-5320</a><br />
              Text <a href="sms:8167082719">(816) 708-2719</a><br />
              Fax <a href="tel:8888072718">(888) 807-2718</a>
            </p>
          </div>

          <div>
            <h4 className="section-title">Hours</h4>
            <p className="section-content">
              Mon: CLOSED<br />
              Tue-Fri: 11-7 PM<br />
              Sat: 12-4PM<br />
              Sun: CLOSED
            </p>
          </div>

          <div>
            <h4 className="section-title">Location</h4>
            <p className="section-content">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=801+NW+St+Mary+Dr+Suite+209,+Blue+Springs,+MO+64014"
                target="_blank"
                rel="noopener noreferrer"
              >
                801 NW St. Mary Drive,<br />
                Suite 209,<br />
                Blue Springs, MO 64014
              </a>
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Combined Section */}
        <div className="content-section">
          {/* Newsletter */}
          <div className="newsletter-container">
            <h2 className="newsletter-title">Subscribe to Newsletter</h2>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>

          {/* Gigi's Logo */}
          <div className="gigi-logo-wrapper">
            <div className="gigi-logo-container">
              <Image
                src="/gigisafehouse.png"
                alt="Gigi's Safe House Logo"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Map */}
          <div className="map-wrapper">
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.3456789012345!2d-94.2654326846323!3d39.01234567954789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ee627bb05011%3A0x8a3b8f5a5e9a2d4f!2s801%20NW%20St%20Mary%20Dr%20Suite%20209%2C%20Blue%20Springs%2C%20MO%2064014!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Navigation Links */}
        <div className="nav-links-grid">
          <Link href="/blog" className="nav-link">Health Safety | Blog</Link>
          <Link href="/tess-talk-spotify" className="nav-link">Tess Talk | Podcast</Link>
          <Link href="/meet-dr-tess-garcia" className="nav-link">Meet the Doctor</Link>
          <Link href="/affordable-healthcare-memberships" className="nav-link">Memberships</Link>
          <Link href="/announcements" className="nav-link">Announcements</Link>
          <Link href="/department-of-transportation-physicals" className="nav-link">DOT Certifications</Link>
          <Link href="/independent-medical-examinations" className="nav-link">Medical Examinations</Link>
          <Link href="/medicare-services" className="nav-link">Medicare Services</Link>
          <Link href="/mental-health-services" className="nav-link">Mental Health</Link>
          <Link href="/pain-management-services" className="nav-link">Pain Management</Link>
          <Link href="/telehealth-services" className="nav-link">Telehealth</Link>
          <Link href="/veterans-services" className="nav-link">Veteran Services</Link>
          <Link href="/weight-management-services" className="nav-link">Weight Management</Link>
          <Link href="/faq" className="nav-link">Join the Family</Link>
          <Link href="/faq" className="nav-link">FAQs</Link>
          <Link href="/contact-us" className="nav-link">Contact</Link>
        </div>

        {/* Copyright */}
        <div className="copyright-section">
          <Link href="/privacy-policy" className="legal-link">Privacy Policy</Link>
          <Link href="/terms-of-use" className="legal-link">Terms of Use</Link>
          <Link href="/terms-of-service" className="legal-link">Terms of Service</Link>
          <span>Copyright © {currentYear} Garcia Family Medicine. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}