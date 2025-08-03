'use client';

import { useState, useEffect } from 'react';
import styles from './contact.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import { FaPhone, FaSms, FaEnvelope, FaFax, FaMapMarkerAlt, FaClock, FaExclamationTriangle, FaCalendarCheck, FaParking } from 'react-icons/fa';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOfficeOpen, setIsOfficeOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    // Check if office is open
    checkOfficeStatus();
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    checkOfficeStatus();
  }, [currentTime]);
  
  const checkOfficeStatus = () => {
    const day = currentTime.getDay();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const time = hour + minute / 60;
    
    // Office hours: Tuesday-Friday 9AM-5PM
    if (day >= 2 && day <= 5 && time >= 9 && time < 17) {
      setIsOfficeOpen(true);
    } else {
      setIsOfficeOpen(false);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      <Header />
      
      <div className={`${styles.pageContainer} page-layout`}>
        <main className={`${styles.mainContent} main-content fade-in-content ${isVisible ? 'visible' : ''}`}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.pageTitle}>Contact Us</h1>
              <p className={styles.pageSubtitle}>
                We're here to help with all your healthcare needs
              </p>
            </div>
          </section>

          {/* Main Content Grid */}
          <div className={styles.contentGrid}>
            {/* Left Column - Contact Info */}
            <div className={styles.leftColumn}>
              {/* Office Status Card */}
              <div className={`${styles.statusCard} ${isOfficeOpen ? styles.open : styles.closed}`}>
                <div className={styles.statusHeader}>
                  <FaClock className={styles.statusIcon} />
                  <div>
                    <h3>{isOfficeOpen ? 'We\'re Open' : 'Currently Closed'}</h3>
                    <p>Current time: {formatTime(currentTime)}</p>
                  </div>
                </div>
                <p className={styles.statusMessage}>
                  {isOfficeOpen 
                    ? 'Call now to speak with our team' 
                    : 'Leave a message and we\'ll call you back'}
                </p>
              </div>

              {/* Primary Contact Methods */}
              <div className={styles.contactCard}>
                <h2>Get in Touch</h2>
                
                <a href="tel:+18164275320" className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <FaPhone />
                  </div>
                  <div className={styles.methodInfo}>
                    <span className={styles.methodLabel}>Phone</span>
                    <span className={styles.methodValue}>(816) 427-5320</span>
                    <span className={styles.methodNote}>Best for urgent matters</span>
                  </div>
                </a>

                <a href="sms:+18167082719" className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <FaSms />
                  </div>
                  <div className={styles.methodInfo}>
                    <span className={styles.methodLabel}>Text Message</span>
                    <span className={styles.methodValue}>(816) 708-2719</span>
                    <span className={styles.methodNote}>Quick questions & appointment requests</span>
                  </div>
                </a>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <FaEnvelope />
                  </div>
                  <div className={styles.methodInfo}>
                    <span className={styles.methodLabel}>Email</span>
                    <span className={styles.methodValue}>admin@garciafamilymedicine.care</span>
                    <span className={styles.methodNote}>Non-urgent inquiries</span>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <FaFax />
                  </div>
                  <div className={styles.methodInfo}>
                    <span className={styles.methodLabel}>Fax</span>
                    <span className={styles.methodValue}>(888) 807-2718</span>
                    <span className={styles.methodNote}>Medical records & documents</span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className={styles.hoursCard}>
                <h2>Office Hours</h2>
                <div className={styles.hoursGrid}>
                  <div className={`${styles.dayRow} ${currentTime.getDay() === 1 ? styles.currentDay : ''}`}>
                    <span>Monday</span>
                    <span>Closed</span>
                  </div>
                  <div className={`${styles.dayRow} ${currentTime.getDay() >= 2 && currentTime.getDay() <= 5 ? styles.currentDay : ''}`}>
                    <span>Tuesday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className={`${styles.dayRow} ${currentTime.getDay() === 0 || currentTime.getDay() === 6 ? styles.currentDay : ''}`}>
                    <span>Weekends</span>
                    <span>By Appointment</span>
                  </div>
                  <div className={styles.dayRow}>
                    <span>After Hours</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
                <div className={styles.appointmentNote}>
                  <FaCalendarCheck />
                  <span>Same-day appointments often available</span>
                </div>
              </div>
            </div>

            {/* Right Column - Location & Emergency */}
            <div className={styles.rightColumn}>
              {/* Location Card */}
              <div className={styles.locationCard}>
                <h2>Visit Our Office</h2>
                <div className={styles.addressBlock}>
                  <FaMapMarkerAlt className={styles.addressIcon} />
                  <address>
                    <strong>Garcia Family Medicine</strong><br />
                    801 NW St. Mary Drive, Suite 209<br />
                    Blue Springs, MO 64014
                  </address>
                </div>
                
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.094238649899!2d-94.26487602347815!3d39.12746523673208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0e0d9abcdef01%3A0x3456789012345678!2s801%20NW%20St%20Mary%20Dr%20Suite%20209%2C%20Blue%20Springs%2C%20MO%2064014!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Garcia Family Medicine Location"
                  ></iframe>
                </div>

                <a 
                  href="https://www.google.com/maps/place/801+NW+St+Mary+Dr+Suite+209,+Blue+Springs,+MO+64014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionsLink}
                >
                  Get Directions →
                </a>

                <div className={styles.parkingInfo}>
                  <FaParking />
                  <span>Free parking available</span>
                </div>
              </div>

              {/* Emergency Info */}
              <div className={styles.emergencyCard}>
                <div className={styles.emergencyHeader}>
                  <FaExclamationTriangle />
                  <h3>Medical Emergency?</h3>
                </div>
                <p className={styles.emergencyText}>
                  For life-threatening emergencies, call <strong>911</strong> immediately.
                </p>
                <p className={styles.emergencyNote}>
                  For urgent care after hours, visit your nearest emergency room or urgent care center.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2>Ready to Schedule Your Visit?</h2>
              <p>New patients welcome! We're accepting appointments and look forward to caring for you.</p>
              <a href="tel:+18164275320" className={styles.ctaButton}>
                <FaPhone /> Call (816) 427-5320
              </a>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
}