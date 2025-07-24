'use client';

import styles from '../service.module.css';
import Link from 'next/link';
import { FaDollarSign, FaHandHoldingUsd, FaFileInvoiceDollar, FaCalendarCheck, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function CashPayPage() {
  return (
    <div className={styles.servicePageContainer}>
      <Header />
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Cash Pay Options</h1>
            <p className={styles.heroSubtitle}>
              Transparent & affordable healthcare without insurance barriers. Quality medical care 
              with transparent fees and flexible payment plans designed to fit your budget.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Why Choose Cash Pay Healthcare?</h2>
            <p className={styles.paragraph}>
              Our cash pay options provide transparent, affordable healthcare without the complexity of insurance. 
              You'll know exactly what you're paying upfront, receive personalized care without time constraints, 
              and enjoy the privacy of direct patient-physician relationships.
            </p>

            <div className={styles.servicesList}>
              <h3>Benefits of Cash Pay</h3>
              <ul>
                <li><strong>100% Transparent Fees</strong> - No hidden costs or surprise bills</li>
                <li><strong>Immediate Care</strong> - No insurance authorization delays</li>
                <li><strong>Extended Appointments</strong> - Quality time focused on your health</li>
                <li><strong>Privacy Protection</strong> - Your medical information stays confidential</li>
                <li><strong>Streamlined Care</strong> - Often more efficient than high-deductible plans</li>
                <li><strong>Personalized Treatment</strong> - Decisions based on your needs, not insurance limitations</li>
              </ul>
            </div>

            <h2 className={styles.sectionTitle}>Available Services</h2>
            
            <div className={styles.servicesList}>
              <h3><FaCalendarCheck /> Office Visits</h3>
              <ul>
                <li>New Patient Comprehensive Examination</li>
                <li>Established Patient Follow-up Visits</li>
                <li>Sick Visits & Urgent Care</li>
                <li>Annual Physical Examinations</li>
                <li>Medicare Wellness Visits</li>
              </ul>
            </div>

            <div className={styles.servicesList}>
              <h3><FaFileInvoiceDollar /> Preventive Care</h3>
              <ul>
                <li>Well-Woman Examinations</li>
                <li>Well-Child Check-ups</li>
                <li>Sports & School Physicals</li>
                <li>Pre-Employment Physicals</li>
                <li>Immunizations & Vaccines</li>
              </ul>
            </div>

            <div className={styles.servicesList}>
              <h3><FaHandHoldingUsd /> Procedures & Testing</h3>
              <ul>
                <li>EKG & Heart Health Screening</li>
                <li>Rapid Strep & Flu Testing</li>
                <li>Urinalysis & UTI Testing</li>
                <li>Comprehensive Lab Panels</li>
                <li>Basic In-Office Procedures</li>
              </ul>
            </div>

            <div className={styles.servicesList}>
              <h3><FaShieldAlt /> Chronic Care Management</h3>
              <ul>
                <li>Diabetes Management & Monitoring</li>
                <li>Hypertension Control</li>
                <li>Asthma & Respiratory Care</li>
                <li>Thyroid Management</li>
                <li>Medication Review & Optimization</li>
              </ul>
            </div>

            <h2 className={styles.sectionTitle}>Direct Primary Care Membership</h2>
            <p className={styles.paragraph}>
              Our innovative membership model provides unlimited access to primary care services for one low monthly fee. 
              This approach eliminates the barriers of traditional insurance while ensuring comprehensive, personalized healthcare.
            </p>

            <div className={styles.servicesList}>
              <h3><FaChartLine /> Membership Benefits</h3>
              <ul>
                <li>Unlimited office visits with no copays</li>
                <li>Same-day or next-day appointments</li>
                <li>Extended appointment times (30-60 minutes)</li>
                <li>24/7 access to your doctor via phone/text</li>
                <li>Basic procedures included in care</li>
                <li>Chronic disease management included</li>
                <li>Preventive care and wellness planning</li>
                <li>Care coordination with specialists</li>
                <li>Significant discounts on labs and medications</li>
              </ul>
            </div>

            <h2 className={styles.sectionTitle}>Payment Options & Financial Assistance</h2>
            <p className={styles.paragraph}>
              We believe everyone deserves access to quality healthcare. We offer multiple payment options 
              and financial assistance programs to make healthcare affordable for all patients.
            </p>

            <div className={styles.servicesList}>
              <h3><FaDollarSign /> Accepted Payment Methods</h3>
              <ul>
                <li>Cash and Check</li>
                <li>All Major Credit and Debit Cards</li>
                <li>HSA/FSA Cards</li>
                <li>Flexible Payment Plans (No Interest)</li>
                <li>Online Payment Portal</li>
              </ul>
            </div>

            <div className={styles.servicesList}>
              <h3>Financial Assistance Programs</h3>
              <ul>
                <li>Sliding scale fees based on income</li>
                <li>Payment plans with no interest charges</li>
                <li>Discounts for upfront payment</li>
                <li>Special rates for seniors and veterans</li>
                <li>Family plan discounts</li>
              </ul>
            </div>

            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            
            <p className={styles.paragraph}>
              <strong>Can I use insurance and cash pay together?</strong><br />
              Yes! You can choose cash pay for certain services even if you have insurance, 
              especially for services not covered by your plan or when cash pay offers better value.
            </p>

            <p className={styles.paragraph}>
              <strong>Can I use my HSA/FSA for cash pay services?</strong><br />
              Absolutely! Our services qualify for HSA and FSA payment. We'll provide proper 
              documentation for your records and reimbursement.
            </p>

            <p className={styles.paragraph}>
              <strong>How does the membership model work?</strong><br />
              Pay a flat monthly fee for unlimited access to primary care services. No copays, 
              no deductibles, no surprises. It's healthcare simplified.
            </p>

            <p className={styles.paragraph}>
              <strong>Is cash pay right for me?</strong><br />
              Cash pay is ideal for uninsured patients, those with high-deductible plans, 
              or anyone seeking transparent healthcare and personalized care without insurance limitations.
            </p>

            <p className={styles.paragraph}>
              Ready to experience transparent, affordable healthcare? Contact us today to learn more 
              about our cash pay options and membership plans. We're here to provide quality medical 
              care that fits your budget and your life.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}