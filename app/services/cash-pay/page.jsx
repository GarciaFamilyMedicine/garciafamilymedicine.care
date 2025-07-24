'use client';

import styles from './cash-pay.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaDollarSign, FaHandHoldingUsd, FaFileInvoiceDollar, FaCalendarCheck, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function CashPayPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Cash Pay Options</h1>
          <p className={styles.heroSubtitle}>Transparent & Affordable Healthcare</p>
          <p className={styles.heroDescription}>
            Quality healthcare without insurance barriers. Our transparent cash pay options 
            make it possible to receive excellent medical care with affordable rates and flexible payment plans.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              Schedule Cash Pay Visit
            </Link>
            <Link href="#services" className={styles.secondaryButton}>
              View Available Services
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/services/cash-pay/hero.jpg"
            alt="Cash Pay Options - Affordable Healthcare"
            width={600}
            height={400}
            className={styles.image}
            unoptimized
          />
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Transparent Pricing</div>
            <div className={styles.statDescription}>No hidden fees ever</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>50%</div>
            <div className={styles.statLabel}>Cost Savings</div>
            <div className={styles.statDescription}>Compared to insurance rates</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>0%</div>
            <div className={styles.statLabel}>Interest</div>
            <div className={styles.statDescription}>On payment plans</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>24hr</div>
            <div className={styles.statLabel}>Quick Booking</div>
            <div className={styles.statDescription}>Same or next day visits</div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Cash Pay Services Available</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <FaCalendarCheck className={styles.serviceIcon} />
            <h3>Office Visits</h3>
            <ul className={styles.serviceList}>
              <li>New Patient Comprehensive Visit</li>
              <li>Established Patient Visit</li>
              <li>Sick Visit & Urgent Care</li>
              <li>Follow-up Appointments</li>
              <li>Annual Physical Examinations</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <FaFileInvoiceDollar className={styles.serviceIcon} />
            <h3>Preventive Care</h3>
            <ul className={styles.serviceList}>
              <li>Well-Woman Examinations</li>
              <li>Well-Child Check-ups</li>
              <li>Sports & School Physicals</li>
              <li>Pre-Employment Physicals</li>
              <li>Medicare Wellness Visits</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <FaHandHoldingUsd className={styles.serviceIcon} />
            <h3>Procedures & Tests</h3>
            <ul className={styles.serviceList}>
              <li>EKG & Heart Health Screening</li>
              <li>Rapid Strep Testing</li>
              <li>Flu Testing & Treatment</li>
              <li>Urinalysis & UTI Testing</li>
              <li>Comprehensive Lab Panels</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <FaDollarSign className={styles.serviceIcon} />
            <h3>Chronic Care Management</h3>
            <ul className={styles.serviceList}>
              <li>Diabetes Management</li>
              <li>Hypertension Control</li>
              <li>Asthma & Respiratory Care</li>
              <li>Thyroid Management</li>
              <li>Medication Review & Optimization</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <FaShieldAlt className={styles.serviceIcon} />
            <h3>Immunizations</h3>
            <ul className={styles.serviceList}>
              <li>Annual Flu Vaccines</li>
              <li>Tetanus & Tdap</li>
              <li>Hepatitis A & B</li>
              <li>MMR & Childhood Vaccines</li>
              <li>COVID-19 Vaccines & Boosters</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <FaChartLine className={styles.serviceIcon} />
            <h3>Membership Options</h3>
            <ul className={styles.serviceList}>
              <li>Individual Membership Plans</li>
              <li>Couple & Partner Plans</li>
              <li>Family Coverage Options</li>
              <li>Senior Discount Programs</li>
              <li>Unlimited Visit Benefits</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>Benefits of Cash Pay Healthcare</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h3>Transparent Pricing</h3>
            <p>Know exactly what you'll pay before your visit. No surprise bills or hidden fees.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Immediate Care</h3>
            <p>No insurance authorization delays. Get the care you need when you need it.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Privacy Protection</h3>
            <p>Your medical information stays between you and your doctor, not shared with insurers.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Quality Time</h3>
            <p>Longer appointment times focused on your health, not insurance paperwork.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Personalized Care</h3>
            <p>Treatment decisions based on your needs, not insurance limitations.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Cost Effective</h3>
            <p>Often more affordable than high-deductible insurance plans.</p>
          </div>
        </div>
      </section>

      <section className={styles.membershipSection}>
        <h2 className={styles.sectionTitle}>Direct Primary Care Membership</h2>
        <p className={styles.sectionDescription}>
          Our membership plans provide unlimited access to primary care services for one low monthly fee. 
          This innovative healthcare model ensures you receive comprehensive care without the barriers of traditional insurance.
        </p>
        <div className={styles.membershipBenefits}>
          <h3>Membership Includes:</h3>
          <div className={styles.benefitsGrid}>
            <div className={styles.membershipBenefit}>
              <div className={styles.checkIcon}>✓</div>
              <span>Unlimited office visits</span>
            </div>
            <div className={styles.membershipBenefit}>
              <div className={styles.checkIcon}>✓</div>
              <span>Same-day or next-day appointments</span>
            </div>
            <div className={styles.membershipBenefit}>
              <div className={styles.checkIcon}>✓</div>
              <span>Extended appointment times (30-60 minutes)</span>
            </div>
            <div className={styles.membershipBenefit}>
              <div className={styles.checkIcon}>✓</div>
              <span>24/7 access to your doctor via phone/text</span>
            </div>
            <div className={styles.membershipBenefit}>
              <div className={styles.checkIcon}>✓</div>
              <span>Basic procedures at no additional cost</span>
            </div>
            <div className={styles.membershipBenefit}>
              <div className={styles.checkIcon}>✓</div>
              <span>Chronic disease management</span>
            </div>
            <div className={styles.membershipBenefit}>
              <div className={styles.checkIcon}>✓</div>
              <span>Preventive care and wellness planning</span>
            </div>
            <div className={styles.membershipBenefit}>
              <div className={styles.checkIcon}>✓</div>
              <span>Care coordination with specialists</span>
            </div>
            <div className={styles.membershipBenefit}>
              <div className={styles.checkIcon}>✓</div>
              <span>Significant discounts on labs and medications</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.paymentSection}>
        <h2 className={styles.sectionTitle}>Payment Options & Financial Assistance</h2>
        <div className={styles.paymentGrid}>
          <div className={styles.paymentCard}>
            <h3>Accepted Payment Methods</h3>
            <ul>
              <li>Cash</li>
              <li>Check</li>
              <li>All Major Credit/Debit Cards</li>
              <li>HSA/FSA Cards</li>
              <li>Flexible Payment Plans</li>
            </ul>
          </div>
          <div className={styles.paymentCard}>
            <h3>Financial Assistance</h3>
            <p>We believe everyone deserves access to quality healthcare. We offer:</p>
            <ul>
              <li>Sliding scale fees based on income</li>
              <li>Payment plans with no interest</li>
              <li>Discounts for upfront payment</li>
              <li>Special rates for seniors and veterans</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Can I use insurance and cash pay?</h3>
            <p>Yes! You can choose cash pay for certain services even if you have insurance, especially for services not covered by your plan.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Do you offer payment plans?</h3>
            <p>Yes, we offer flexible payment plans for larger expenses. Talk to our billing team about options.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Can I use my HSA/FSA?</h3>
            <p>Absolutely! Our services qualify for HSA and FSA payment. We'll provide proper documentation.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>What about prescriptions?</h3>
            <p>We work with local pharmacies to find the most affordable medication options, including generic alternatives.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>How does membership work?</h3>
            <p>Pay a flat monthly fee for unlimited access to primary care services. No copays, no deductibles, no surprises.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Is cash pay right for me?</h3>
            <p>Cash pay is ideal for uninsured patients, those with high deductibles, or anyone seeking transparent healthcare costs.</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Start Your Healthcare Journey Today</h2>
          <p>Don't let insurance barriers prevent you from getting the healthcare you deserve. 
             Our cash pay options make quality medical care accessible and affordable for everyone.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              Schedule Cash Pay Visit
            </Link>
            <Link href="/faqs" className={styles.secondaryButton}>
              View FAQs
            </Link>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}