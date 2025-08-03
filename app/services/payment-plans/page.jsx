'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaCreditCard, FaCalculator, FaHandshake, FaPhone } from 'react-icons/fa';
import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function PaymentOptionsPage() {
  const [activeCard, setActiveCard] = useState(null);

  const paymentOptions = [
    {
      id: 'carecredit',
      name: 'CareCredit',
      logo: '/images/services/payment/carecredit-logo.svg',
      tagline: 'Healthcare Financing Made Easy',
      description: 'CareCredit is a healthcare credit card designed for health and wellness needs.',
      benefits: [
        'Special financing options available',
        'Use for medical procedures and wellness',
        'Quick and easy application process',
        'Accepted at over 260,000 providers',
        'No annual fees'
      ],
      applyUrl: 'https://www.carecredit.com/go/293VWT/',
      learnMoreUrl: 'https://www.carecredit.com/go/293VWT/',
      internalLink: false,
      phoneNumber: null,
      color: '#00A6FB'
    },
    {
      id: 'cherry',
      name: 'Cherry',
      logo: '/images/services/payment/cherry-logo.svg',
      tagline: 'Patient Financing That Cares',
      description: 'Cherry offers patient-friendly payment plans with competitive rates.',
      benefits: [
        'Split any bill into smaller payments',
        '0% APR options available',
        'Instant approval decisions',
        'No hard credit check for pre-qualification',
        'Flexible payment terms'
      ],
      applyUrl: '/services/cherry-payment-plans',
      learnMoreUrl: '/services/cherry-payment-plans',
      internalLink: true,
      color: '#FF6B6B'
    }
  ];

  return (
    <>
      <Header />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Flexible Payment Options for Your Healthcare
          </h1>
          <p className={styles.heroSubtitle}>
            We believe quality healthcare should be accessible to everyone. 
            That's why we offer multiple financing options to fit your budget.
          </p>
        </section>

        {/* Payment Options Grid */}
        <section className={styles.optionsSection}>
          <div className={styles.optionsGrid}>
            {paymentOptions.map((option) => (
              <Link
                key={option.id}
                href={option.applyUrl}
                className={`${styles.optionCard} ${activeCard === option.id ? styles.active : ''}`}
                onMouseEnter={() => setActiveCard(option.id)}
                onMouseLeave={() => setActiveCard(null)}
                style={{'--brand-color': option.color}}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.logoWrapper}>
                    {option.logo ? (
                      <img 
                        src={option.logo} 
                        alt={`${option.name} logo`}
                        className={styles.logo}
                      />
                    ) : (
                      <h2 className={styles.logoText}>{option.name}</h2>
                    )}
                  </div>
                  <p className={styles.tagline}>{option.tagline}</p>
                </div>
                
                <div className={styles.cardBody}>
                  <p className={styles.description}>{option.description}</p>
                  
                  <div className={styles.benefits}>
                    <h3 className={styles.benefitsTitle}>Key Benefits:</h3>
                    <ul className={styles.benefitsList}>
                      {option.benefits.map((benefit, index) => (
                        <li key={index} className={styles.benefitItem}>
                          <FaCheckCircle className={styles.checkIcon} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.cardActions}>
                    <div className={styles.exploreButton}>
                      <FaCalculator />
                      Explore This Option
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose Financing Section */}
        <section className={styles.whySection}>
          <h2 className={styles.sectionTitle}>Why Choose Healthcare Financing?</h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <FaHandshake className={styles.reasonIcon} />
              <h3>Budget-Friendly</h3>
              <p>Break down large medical bills into manageable monthly payments that fit your budget.</p>
            </div>
            <div className={styles.reasonCard}>
              <FaCalculator className={styles.reasonIcon} />
              <h3>Transparent Terms</h3>
              <p>Know exactly what you'll pay each month with clear terms and no hidden fees.</p>
            </div>
            <div className={styles.reasonCard}>
              <FaCreditCard className={styles.reasonIcon} />
              <h3>Quick Approval</h3>
              <p>Get instant decisions and start your treatment without financial stress.</p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}