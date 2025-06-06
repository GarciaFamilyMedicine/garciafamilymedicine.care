'use client';

import { useState, useEffect } from 'react';
import styles from './contact.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
      
      <div className={styles.pageContainer}>
        <main className={`${styles.mainContent} ${isVisible ? styles.visible : ''}`}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroSubtitle}>
              Connect with Garcia Family Medicine for personalized healthcare and affordable care options.
            </p>
            <div className={styles.ctaButtons}>
              <a href="tel:+18164275320" className={styles.primaryButton}>
                Call (816) 427-5320
              </a>
              <a href="sms:+18167082719" className={styles.secondaryButton}>
                Text (816) 708-2719
              </a>
            </div>
          </section>
          
          {/* Contact Info Section */}
          <section className={styles.infoSection}>
            <div className={styles.infoGrid}>
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
  <div className={styles.infoCard}>
    <h2>Contact Information</h2>
    <div className={styles.contactList}>
      <div className={styles.contactItem}>
        <span className={styles.label}>Phone</span>
        <a href="tel:+18164275320" className={styles.value}>(816) 427-5320</a>
      </div>
      <div className={styles.contactItem}>
        <span className={styles.label}>Text</span>
        <a href="sms:+18167082719" className={styles.value}>(816) 708-2719</a>
      </div>
      <div className={styles.contactItem}>
        <span className={styles.label}>Fax</span>
        <span className={styles.value}>(888) 807-2718</span>
      </div>
      <div className={styles.contactItem}>
        <span className={styles.label}>Email</span>
        <a href="mailto:hello@garciafamilymedicine.care" className={styles.value}>
          hello@garciafamilymedicine.care
        </a>
      </div>
    </div>
  </div>
);

const OfficeHours = () => (
  <div className={styles.infoCard}>
    <h2>Office Hours</h2>
    <div className={styles.hoursList}>
      <div className={styles.hoursItem}>
        <span>Monday</span>
        <span className={styles.closed}>Closed</span>
      </div>
      <div className={styles.hoursItem}>
        <span>Tuesday - Friday</span>
        <span>1:00 PM - 7:00 PM</span>
      </div>
      <div className={styles.hoursItem}>
        <span>Saturday</span>
        <span>1:00 PM - 3:00 PM</span>
      </div>
      <div className={styles.hoursItem}>
        <span>Sunday</span>
        <span className={styles.closed}>Closed</span>
      </div>
    </div>
  </div>
);

const LocationInfo = () => (
  <div className={styles.infoCard}>
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