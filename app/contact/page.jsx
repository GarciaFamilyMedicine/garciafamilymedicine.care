'use client';

import { useState, useEffect } from 'react';
import styles from './contact.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import { FaPhone, FaSms, FaEnvelope, FaFax, FaMapMarkerAlt, FaClock, FaExclamationTriangle, FaHeartbeat, FaShieldAlt, FaUserMd, FaCalendarCheck, FaDollarSign } from 'react-icons/fa';

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

  return (
    <>
      <Header />
      
      <div className={`${styles.pageContainer} page-layout`}>
        <main className={`${styles.mainContent} main-content fade-in-content ${isVisible ? 'visible' : ''}`}>
          {/* Premium Hero Section */}
          <section className={`${styles.heroSection} hero-section`}>
            <div className={styles.heroBackground}>
              <div className={styles.heroContent}>
                <div className={styles.officeStatus}>
                  <span className={isOfficeOpen ? styles.statusOpen : styles.statusClosed}>
                    <span className={styles.statusDot}></span>
                    {isOfficeOpen ? 'Office Open' : 'Office Closed'}
                  </span>
                </div>
                <h1 className={`${styles.heroTitle} hero-title`}>Get in Touch</h1>
                <p className={`${styles.heroSubtitle} hero-subtitle`}>
                  Your health is our priority. Reach out through your preferred method of communication.
                </p>
                
                {/* Quick Contact Cards */}
                <div className={styles.quickContactGrid}>
                  <a href="tel:+18164275320" className={styles.quickContactCard}>
                    <div className={styles.cardIcon}>
                      <FaPhone />
                    </div>
                    <div className={styles.cardContent}>
                      <span className={styles.cardLabel}>Call Us</span>
                      <span className={styles.cardValue}>(816) 427-5320</span>
                    </div>
                  </a>
                  
                  <a href="sms:+18167082719" className={styles.quickContactCard}>
                    <div className={styles.cardIcon}>
                      <FaSms />
                    </div>
                    <div className={styles.cardContent}>
                      <span className={styles.cardLabel}>Text Us</span>
                      <span className={styles.cardValue}>(816) 708-2719</span>
                    </div>
                  </a>
                  
                  <a href="mailto:admin@garciafamilymedicine.care" className={styles.quickContactCard}>
                    <div className={styles.cardIcon}>
                      <FaEnvelope />
                    </div>
                    <div className={styles.cardContent}>
                      <span className={styles.cardLabel}>Email Us</span>
                      <span className={styles.cardValue}>Send Message</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Premium Info Section */}
          <section className={styles.infoSection}>
            {/* Emergency Banner */}
            <div className={styles.emergencyBanner}>
              <FaExclamationTriangle className={styles.emergencyIcon} />
              <div className={styles.emergencyContent}>
                <h3>Medical Emergency?</h3>
                <p>For life-threatening emergencies, call 911 immediately. For urgent care needs after hours, visit your nearest emergency room.</p>
              </div>
            </div>
            
            {/* Main Contact Grid */}
            <div className={styles.premiumGrid}>
              <ContactDetails isOfficeOpen={isOfficeOpen} />
              <OfficeHours currentTime={currentTime} isOfficeOpen={isOfficeOpen} />
            </div>
            
            {/* Location Section with Map */}
            <LocationSection />
            
            {/* Additional Info Cards */}
            <div className={styles.additionalInfo}>
              <div className={styles.infoCard}>
                <FaShieldAlt className={styles.infoIcon} />
                <h3>Insurance & Payment</h3>
                <p>We accept most major insurance plans and offer affordable cash-pay options for uninsured patients.</p>
                <a href="/services/cash-pay" className={styles.learnMoreLink}>Learn about our pricing →</a>
              </div>
              
              <div className={styles.infoCard}>
                <FaHeartbeat className={styles.infoIcon} />
                <h3>New Patient Welcome</h3>
                <p>We're accepting new patients! Call us to schedule your first appointment and experience personalized care.</p>
                <a href="tel:+18164275320" className={styles.learnMoreLink}>Schedule appointment →</a>
              </div>
              
              <div className={styles.infoCard}>
                <FaUserMd className={styles.infoIcon} />
                <h3>After-Hours Care</h3>
                <p>For non-emergency medical questions after hours, leave a message and we'll return your call the next business day.</p>
                <span className={styles.learnMoreLink}>Available by appointment</span>
              </div>
            </div>
            
            {/* Bottom CTA */}
            <div className={styles.bottomCTA}>
              <div className={styles.ctaContent}>
                <FaDollarSign className={styles.ctaIcon} />
                <div>
                  <h3>Affordable Healthcare for Everyone</h3>
                  <p>We believe quality healthcare should be accessible. Ask about our cash-pay rates and payment plans.</p>
                </div>
              </div>
              <a href="tel:+18164275320" className={styles.ctaButton}>
                <FaPhone /> Call Now
              </a>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
}

const ContactDetails = ({ isOfficeOpen }) => (
  <div className={styles.contactDetailsCard}>
    <div className={styles.cardHeader}>
      <h2>Contact Methods</h2>
      <span className={isOfficeOpen ? styles.availableNow : styles.afterHours}>
        {isOfficeOpen ? 'Available Now' : 'Leave a Message'}
      </span>
    </div>
    
    <div className={styles.contactMethods}>
      <div className={styles.contactMethod}>
        <div className={styles.methodIcon}>
          <FaPhone />
        </div>
        <div className={styles.methodDetails}>
          <span className={styles.methodLabel}>Phone</span>
          <a href="tel:+18164275320" className={styles.methodValue}>
            (816) 427-5320
          </a>
          <span className={styles.methodNote}>Best for urgent matters</span>
        </div>
      </div>
      
      <div className={styles.contactMethod}>
        <div className={styles.methodIcon}>
          <FaSms />
        </div>
        <div className={styles.methodDetails}>
          <span className={styles.methodLabel}>Text Message</span>
          <a href="sms:+18167082719" className={styles.methodValue}>
            (816) 708-2719
          </a>
          <span className={styles.methodNote}>Quick questions & updates</span>
        </div>
      </div>
      
      <div className={styles.contactMethod}>
        <div className={styles.methodIcon}>
          <FaEnvelope />
        </div>
        <div className={styles.methodDetails}>
          <span className={styles.methodLabel}>Email</span>
          <a href="mailto:admin@garciafamilymedicine.care" className={styles.methodValue}>
            admin@garciafamilymedicine.care
          </a>
          <span className={styles.methodNote}>Non-urgent inquiries</span>
        </div>
      </div>
      
      <div className={styles.contactMethod}>
        <div className={styles.methodIcon}>
          <FaFax />
        </div>
        <div className={styles.methodDetails}>
          <span className={styles.methodLabel}>Fax</span>
          <span className={styles.methodValue}>(888) 807-2718</span>
          <span className={styles.methodNote}>Medical records & forms</span>
        </div>
      </div>
    </div>
  </div>
);

const OfficeHours = ({ currentTime, isOfficeOpen }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[currentTime.getDay()];
  
  return (
    <div className={styles.officeHoursCard}>
      <div className={styles.cardHeader}>
        <h2>Office Hours</h2>
        <div className={styles.currentTime}>
          <FaClock />
          <span>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
      
      <div className={styles.hoursGrid}>
        <div className={`${styles.dayRow} ${currentDay === 'Monday' ? styles.currentDay : ''}`}>
          <span className={styles.dayName}>Monday</span>
          <span className={styles.dayStatus}>Closed</span>
        </div>
        
        <div className={`${styles.dayRow} ${['Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(currentDay) ? styles.currentDay : ''}`}>
          <span className={styles.dayName}>Tuesday - Friday</span>
          <span className={styles.dayHours}>9:00 AM - 5:00 PM</span>
        </div>
        
        <div className={`${styles.dayRow} ${['Saturday', 'Sunday'].includes(currentDay) ? styles.currentDay : ''}`}>
          <span className={styles.dayName}>Weekends</span>
          <span className={styles.dayStatus}>By Appointment</span>
        </div>
        
        <div className={styles.dayRow}>
          <span className={styles.dayName}>Evenings</span>
          <span className={styles.dayStatus}>By Appointment</span>
        </div>
      </div>
      
      <div className={styles.appointmentNote}>
        <FaCalendarCheck />
        <span>Same-day appointments often available</span>
      </div>
    </div>
  );
};

const LocationSection = () => (
  <div className={styles.locationSection}>
    <div className={styles.locationHeader}>
      <h2>Visit Our Office</h2>
      <p>Conveniently located in Blue Springs with ample parking</p>
    </div>
    
    <div className={styles.locationGrid}>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.7851234567!2d-94.2812345!3d39.0523456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0e4d8b1234567%3A0x1234567890abcdef!2s801%20NW%20St%20Mary%20Dr%20Suite%20209%2C%20Blue%20Springs%2C%20MO%2064014!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Garcia Family Medicine Location"
          className={styles.mapFrame}
        ></iframe>
      </div>
      
      <div className={styles.locationDetails}>
        <div className={styles.addressCard}>
          <FaMapMarkerAlt className={styles.locationIcon} />
          <div className={styles.addressInfo}>
            <h3>Office Address</h3>
            <address>
              801 NW St. Mary Drive, Suite 209<br />
              Blue Springs, MO 64014
            </address>
          </div>
        </div>
        
        <div className={styles.directionsOptions}>
          <a
            href="https://www.google.com/maps/place/801+NW+St+Mary+Dr+Suite+209,+Blue+Springs,+MO+64014"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionButton}
          >
            <FaMapMarkerAlt /> Get Directions
          </a>
          
          <div className={styles.parkingInfo}>
            <h4>Parking Information</h4>
            <p>Free parking available in front of the building. Handicap accessible parking spots near the main entrance.</p>
          </div>
          
          <div className={styles.landmarks}>
            <h4>Nearby Landmarks</h4>
            <ul>
              <li>Near Highway 40 and Woods Chapel Road</li>
              <li>Adjacent to St. Mary's Medical Plaza</li>
              <li>5 minutes from downtown Blue Springs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);