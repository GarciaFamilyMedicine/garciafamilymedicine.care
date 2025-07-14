'use client';

import { useState, useEffect } from 'react';
import styles from './contact.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
      
      <div className={`${styles.pageContainer} page-layout`}>
        <main className={`${styles.mainContent} main-content fade-in-content ${isVisible ? 'visible' : ''}`}>
          {/* Hero Section */}
          <section className={`${styles.heroSection} hero-section`}>
            <h1 className={`${styles.heroTitle} hero-title`}>Contact Us</h1>
            <p className={`${styles.heroSubtitle} hero-subtitle`}>
              Connect with Garcia Family Medicine for personalized healthcare and affordable care options.
            </p>
            <div className={`${styles.ctaButtons} cta-buttons`}>
              <a href="tel:+18164275320" className={`${styles.primaryButton} btn-primary`}>
                Call (816) 427-5320
              </a>
              <a href="sms:+18167082719" className={`${styles.secondaryButton} btn-secondary`}>
                Text (816) 708-2719
              </a>
            </div>
          </section>
          
          {/* Contact Info Section */}
          <section className={styles.infoSection}>
            <div className={`${styles.infoGrid} grid-auto-fit-large`}>
              <ContactDetails />
              <OfficeHours />
              <LocationInfo />
            </div>
            <div className={styles.bottomNotice}>
              <p>We accept Medicare and offer affordable cash-pay rates for uninsured patients.</p>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
}

const ContactDetails = () => (
  <div className={`${styles.infoCard} info-card-enhanced`}>
    <h2>Contact Information</h2>
    <div className={styles.contactTable}>
      <div className={styles.contactTableRow}>
        <span className={styles.contactTableLabel}>Phone:</span>
        <a href="tel:+18164275320" className={styles.contactTableValue}>(816) 427-5320</a>
      </div>
      <div className={styles.contactTableRow}>
        <span className={styles.contactTableLabel}>Text:</span>
        <a href="sms:+18167082719" className={styles.contactTableValue}>(816) 708-2719</a>
      </div>
      <div className={styles.contactTableRow}>
        <span className={styles.contactTableLabel}>Fax:</span>
        <span className={styles.contactTableValue}>(888) 807-2718</span>
      </div>
      <div className={styles.contactTableRow}>
        <span className={styles.contactTableLabel}>Email:</span>
        <a href="mailto:hello@garciafamilymedicine.care" className={styles.contactTableValue}>
          hello@garciafamilymedicine.care
        </a>
      </div>
    </div>
  </div>
);

const OfficeHours = () => (
  <div className={`${styles.infoCard} info-card-enhanced`}>
    <h2>Office Hours</h2>
    <div className={styles.hoursTable}>
      <div className={styles.hoursTableRow}>
        <span className={styles.hoursTableDay}>Monday</span>
        <span className={`${styles.hoursTableTime} ${styles.closed}`}>Closed</span>
      </div>
      <div className={styles.hoursTableRow}>
        <span className={styles.hoursTableDay}>Tuesday - Friday</span>
        <span className={styles.hoursTableTime}>1:00 PM - 7:00 PM</span>
      </div>
      <div className={styles.hoursTableRow}>
        <span className={styles.hoursTableDay}>Saturday</span>
        <span className={styles.hoursTableTime}>1:00 PM - 3:00 PM</span>
      </div>
      <div className={styles.hoursTableRow}>
        <span className={styles.hoursTableDay}>Sunday</span>
        <span className={`${styles.hoursTableTime} ${styles.closed}`}>Closed</span>
      </div>
    </div>
  </div>
);

const LocationInfo = () => (
  <div className={`${styles.infoCard} info-card-enhanced`}>
    <h2>Location</h2>
    <div className={styles.address}>
      <p>801 NW St. Mary Drive, Suite 209</p>
      <p>Blue Springs, MO 64014</p>
    </div>
    <a
      href="https://www.google.com/maps/place/801+NW+St+Mary+Dr+Suite+209,+Blue+Springs,+MO+64014"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.directionsButton}
    >
      Get Directions
    </a>
  </div>
);