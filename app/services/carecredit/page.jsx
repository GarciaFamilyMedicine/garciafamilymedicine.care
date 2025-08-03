'use client';

import Link from 'next/link';
import { FaCheckCircle, FaExternalLinkAlt, FaPhone, FaCreditCard, FaCalculator } from 'react-icons/fa';
import styles from './carecredit.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function CareCreditPage() {
  const benefits = [
    {
      title: 'Flexible Payment Options',
      description: 'Choose from 6, 12, 18, or 24-month financing options',
      icon: '💳'
    },
    {
      title: 'No Annual Fees',
      description: 'Use your CareCredit card with no yearly charges',
      icon: '🎯'
    },
    {
      title: 'Instant Decisions',
      description: 'Get approved in minutes with our quick application',
      icon: '⚡'
    },
    {
      title: 'Wide Acceptance',
      description: 'Accepted at over 260,000 healthcare providers nationwide',
      icon: '🏥'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Apply Online or By Phone',
      description: 'Quick application process with instant decisions'
    },
    {
      step: '2',
      title: 'Get Approved',
      description: 'Receive your credit limit immediately upon approval'
    },
    {
      step: '3',
      title: 'Use at Garcia Family Medicine',
      description: 'Pay for treatments, procedures, and services'
    },
    {
      step: '4',
      title: 'Make Monthly Payments',
      description: 'Convenient monthly payments that fit your budget'
    }
  ];

  return (
    <>
      <Header />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              CareCredit Healthcare Financing
            </h1>
            <p className={styles.heroSubtitle}>
              Make your healthcare more affordable with flexible payment options
            </p>
            <div className={styles.heroActions}>
              <a 
                href="https://www.carecredit.com/go/293VWT/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.applyButton}
              >
                <FaCreditCard />
                Apply for CareCredit
                <FaExternalLinkAlt className={styles.externalIcon} />
              </a>
              <a 
                href="tel:1-800-677-0718"
                className={styles.phoneButton}
              >
                <FaPhone />
                1-800-677-0718
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="/images/services/payment/carecredit-card.png"
              alt="CareCredit Healthcare Credit Card"
              className={styles.creditCard}
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Why Choose CareCredit?</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorksSection}>
          <h2 className={styles.sectionTitle}>How CareCredit Works</h2>
          <div className={styles.stepsGrid}>
            {howItWorks.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Back to Payment Options */}
        <div className={styles.backLink}>
          <Link href="/services/payment-plans">
            ← Back to Payment Options
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}