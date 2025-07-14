'use client';

import { useState, useEffect } from 'react';
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
      
      <div className="page-layout">
        <main className={`main-content fade-in-content ${isVisible ? 'visible' : ''}`}>
          {/* Hero Section */}
          <section className="hero-section">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">
              Connect with Garcia Family Medicine for personalized healthcare and affordable care options.
            </p>
            <div className="cta-buttons">
              <a href="tel:+18164275320" className="btn-primary">
                Call (816) 427-5320
              </a>
              <a href="sms:+18167082719" className="btn-secondary">
                Text (816) 708-2719
              </a>
            </div>
          </section>
          
          {/* Contact Info Section */}
          <section className="info-section">
            <div className="grid-auto-fit-large">
              <ContactDetails />
              <OfficeHours />
              <LocationInfo />
            </div>
            <div className="card">
              <p className="lead">We accept Medicare and offer affordable cash-pay rates for uninsured patients.</p>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
}

const ContactDetails = () => (
  <div className="card info-card">
    <h2 className="h2-underline">Contact Information</h2>
    <ul className="icon-list">
      <li>
        <span>Phone:</span>
        <a href="tel:+18164275320">(816) 427-5320</a>
      </li>
      <li>
        <span>Text:</span>
        <a href="sms:+18167082719">(816) 708-2719</a>
      </li>
      <li>
        <span>Fax:</span>
        <span>(888) 807-2718</span>
      </li>
      <li>
        <span>Email:</span>
        <a href="mailto:hello@garciafamilymedicine.care">
          hello@garciafamilymedicine.care
        </a>
      </li>
    </ul>
  </div>
);

const OfficeHours = () => (
  <div className="card info-card">
    <h2 className="h2-underline">Office Hours</h2>
    <ul className="icon-list">
      <li>
        <span>Monday:</span>
        <span style={{fontStyle: 'italic', color: '#64748b'}}>Closed</span>
      </li>
      <li>
        <span>Tuesday - Friday:</span>
        <span>1:00 PM - 7:00 PM</span>
      </li>
      <li>
        <span>Saturday:</span>
        <span>1:00 PM - 3:00 PM</span>
      </li>
      <li>
        <span>Sunday:</span>
        <span style={{fontStyle: 'italic', color: '#64748b'}}>Closed</span>
      </li>
    </ul>
  </div>
);

const LocationInfo = () => (
  <div className="card info-card">
    <h2 className="h2-underline">Location</h2>
    <p className="lead">
      801 NW St. Mary Drive, Suite 209<br />
      Blue Springs, MO 64014
    </p>
    <a
      href="https://www.google.com/maps/place/801+NW+St+Mary+Dr+Suite+209,+Blue+Springs,+MO+64014"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
    >
      Get Directions
    </a>
  </div>
);