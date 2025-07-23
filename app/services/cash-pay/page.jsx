'use client'

import styles from '../service.module.css'
import { FaDollarSign, FaHandHoldingUsd, FaFileInvoiceDollar, FaCalendarCheck, FaShieldAlt, FaChartLine } from 'react-icons/fa'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function CashPay() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Affordable Cash Pay Options</h1>
            <p className={styles.heroSubtitle}>Quality Healthcare Without Insurance Barriers</p>
          </div>
        </div>

      <div className={styles.mainContent}>
        <section className={styles.introSection}>
          <div className={styles.container}>
            <p className={styles.leadText}>
              At Garcia Family Medicine, we believe everyone deserves access to quality healthcare. Our transparent cash pay options make it possible to receive excellent medical care without the complexity of insurance, offering affordable rates and flexible payment plans.
            </p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Cash Pay Services & Pricing</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <FaCalendarCheck className={styles.serviceIcon} />
                <h3>Office Visits</h3>
                <ul className={styles.serviceList}>
                  <li>New Patient Visit: $150</li>
                  <li>Established Patient: $100</li>
                  <li>Sick Visit: $80</li>
                  <li>Follow-up Visit: $75</li>
                  <li>Annual Physical: $200</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaFileInvoiceDollar className={styles.serviceIcon} />
                <h3>Preventive Care</h3>
                <ul className={styles.serviceList}>
                  <li>Well-Woman Exam: $150</li>
                  <li>Well-Child Check: $100</li>
                  <li>Sports Physical: $50</li>
                  <li>Pre-Employment Physical: $75</li>
                  <li>Medicare Wellness Visit: $175</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaHandHoldingUsd className={styles.serviceIcon} />
                <h3>Procedures & Tests</h3>
                <ul className={styles.serviceList}>
                  <li>EKG: $50</li>
                  <li>Strep Test: $25</li>
                  <li>Flu Test: $30</li>
                  <li>Urinalysis: $20</li>
                  <li>Basic Lab Panel: $75</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaDollarSign className={styles.serviceIcon} />
                <h3>Chronic Care Management</h3>
                <ul className={styles.serviceList}>
                  <li>Diabetes Management: $125/visit</li>
                  <li>Hypertension Control: $100/visit</li>
                  <li>Asthma Management: $100/visit</li>
                  <li>Thyroid Management: $125/visit</li>
                  <li>Medication Review: $50</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaShieldAlt className={styles.serviceIcon} />
                <h3>Immunizations</h3>
                <ul className={styles.serviceList}>
                  <li>Flu Shot: $25</li>
                  <li>Tetanus (Tdap): $45</li>
                  <li>Hepatitis B: $55</li>
                  <li>MMR: $70</li>
                  <li>COVID-19: Per current guidelines</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaChartLine className={styles.serviceIcon} />
                <h3>Membership Plans</h3>
                <ul className={styles.serviceList}>
                  <li>Individual: $50/month</li>
                  <li>Couple: $85/month</li>
                  <li>Family (up to 4): $125/month</li>
                  <li>Senior (65+): $40/month</li>
                  <li>Includes unlimited visits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Benefits of Cash Pay</h2>
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
            </div>
          </div>
        </section>

        <section className={styles.membershipSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Direct Primary Care Membership</h2>
            <p className={styles.sectionText}>
              Our membership plans provide unlimited access to primary care services for one low monthly fee. This innovative healthcare model ensures you receive comprehensive care without the barriers of traditional insurance.
            </p>
            <div className={styles.membershipBenefits}>
              <h3>Membership Includes:</h3>
              <ul className={styles.benefitsList}>
                <li>Unlimited office visits</li>
                <li>Same-day or next-day appointments</li>
                <li>Extended appointment times (30-60 minutes)</li>
                <li>24/7 access to your doctor via phone/text</li>
                <li>Basic procedures at no additional cost</li>
                <li>Chronic disease management</li>
                <li>Preventive care and wellness planning</li>
                <li>Care coordination with specialists</li>
                <li>Significant discounts on labs and medications</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.paymentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Payment Options</h2>
            <div className={styles.paymentGrid}>
              <div className={styles.paymentOption}>
                <h3>Accepted Payment Methods</h3>
                <ul className={styles.paymentList}>
                  <li>Cash</li>
                  <li>Check</li>
                  <li>Credit/Debit Cards</li>
                  <li>HSA/FSA Cards</li>
                  <li>Payment Plans Available</li>
                </ul>
              </div>
              <div className={styles.paymentOption}>
                <h3>Financial Assistance</h3>
                <p>We offer sliding scale fees based on income for qualifying patients. Ask our staff about financial assistance options.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
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
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Start Your Healthcare Journey Today</h2>
            <p className={styles.sectionText}>
              Don't let insurance barriers prevent you from getting the healthcare you deserve. Our cash pay options make quality medical care accessible and affordable for everyone.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Schedule Cash Pay Visit
              </Link>
              <Link href="/faqs" className={styles.secondaryButton}>
                Learn More About Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />
    </>
  )
}