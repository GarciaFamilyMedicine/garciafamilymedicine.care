'use client';

import styles from './cash-pay.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaDollarSign, FaHandHoldingUsd, FaFileInvoiceDollar, FaCalendarCheck, FaShieldAlt, FaChartLine, FaCheckCircle, FaClock, FaUserMd } from 'react-icons/fa';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function CashPayPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Cash Pay Options</h1>
            <p className={styles.heroSubtitle}>Transparent, Affordable Healthcare Without Insurance Barriers</p>
            <p className={styles.heroDescription}>
              Experience healthcare the way it should be—simple, transparent, and affordable. 
              Our cash pay options eliminate insurance complexities while providing you with 
              quality medical care at fair, upfront prices.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Get Pricing Information
              </Link>
              <Link href="#membership" className={styles.secondaryButton}>
                View Membership Plans
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/services/cash-pay/hero.jpg"
              alt="Cash Pay Healthcare Options"
              width={600}
              height={400}
              className={styles.image}
              unoptimized
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>30-50%</div>
              <div className={styles.statLabel}>Cost Savings</div>
              <div className={styles.statDescription}>Compared to insurance rates</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Price Transparency</div>
              <div className={styles.statDescription}>Know costs upfront</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>Same Day</div>
              <div className={styles.statLabel}>Appointments</div>
              <div className={styles.statDescription}>No insurance delays</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>60 Min</div>
              <div className={styles.statLabel}>Appointment Time</div>
              <div className={styles.statDescription}>Quality care, not rushed</div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Why Choose Cash Pay Healthcare?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <FaDollarSign className={styles.benefitIcon} />
              <h3>Transparent Pricing</h3>
              <p>No hidden fees, surprise bills, or confusing insurance statements. You know exactly what you pay upfront.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaClock className={styles.benefitIcon} />
              <h3>Extended Appointments</h3>
              <p>60-minute appointments allow thorough care without rushing. Your doctor has time to listen and treat you properly.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaShieldAlt className={styles.benefitIcon} />
              <h3>Complete Privacy</h3>
              <p>Your medical information stays between you and your doctor. No insurance company involvement means enhanced privacy.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaUserMd className={styles.benefitIcon} />
              <h3>Direct Relationship</h3>
              <p>Build a real relationship with your doctor. Treatment decisions based on your needs, not insurance requirements.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaCalendarCheck className={styles.benefitIcon} />
              <h3>Immediate Access</h3>
              <p>No pre-authorizations or insurance delays. Get the care you need when you need it.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaHandHoldingUsd className={styles.benefitIcon} />
              <h3>Flexible Payment</h3>
              <p>Multiple payment options including payment plans, HSA/FSA cards, and membership programs.</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Cash Pay Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCategory}>
              <h3>Primary Care Visits</h3>
              <ul>
                <li><FaCheckCircle /> New Patient Comprehensive Exam</li>
                <li><FaCheckCircle /> Established Patient Visit</li>
                <li><FaCheckCircle /> Annual Physical Exam</li>
                <li><FaCheckCircle /> Sick Visit / Urgent Care</li>
                <li><FaCheckCircle /> Telemedicine Consultation</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3>Preventive Services</h3>
              <ul>
                <li><FaCheckCircle /> Well-Woman Exam</li>
                <li><FaCheckCircle /> Well-Child Check-up</li>
                <li><FaCheckCircle /> Sports Physical</li>
                <li><FaCheckCircle /> Pre-Employment Physical</li>
                <li><FaCheckCircle /> Medicare Wellness Visit</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3>Diagnostic Services</h3>
              <ul>
                <li><FaCheckCircle /> EKG/Heart Screening</li>
                <li><FaCheckCircle /> Rapid Strep Test</li>
                <li><FaCheckCircle /> Rapid Flu Test</li>
                <li><FaCheckCircle /> Urinalysis</li>
                <li><FaCheckCircle /> Basic Lab Panels</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3>Procedures</h3>
              <ul>
                <li><FaCheckCircle /> Joint Injections</li>
                <li><FaCheckCircle /> Skin Lesion Removal</li>
                <li><FaCheckCircle /> Wound Care</li>
                <li><FaCheckCircle /> Immunizations</li>
                <li><FaCheckCircle /> Chronic Care Management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section id="membership" className={styles.membershipSection}>
          <h2 className={styles.sectionTitle}>Direct Primary Care Membership</h2>
          <p className={styles.sectionDescription}>
            Our revolutionary membership model provides unlimited access to primary care for one low monthly fee. 
            No copays, no deductibles, just healthcare simplified.
          </p>
          
          <div className={styles.membershipPlans}>
            <div className={styles.planCard}>
              <h3>Individual Plan</h3>
              <div className={styles.planPrice}>$89<span>/month</span></div>
              <ul className={styles.planFeatures}>
                <li><FaCheckCircle /> Unlimited office visits</li>
                <li><FaCheckCircle /> Same/next-day appointments</li>
                <li><FaCheckCircle /> 24/7 doctor access</li>
                <li><FaCheckCircle /> Basic procedures included</li>
                <li><FaCheckCircle /> Wholesale medication pricing</li>
              </ul>
              <Link href="/contact" className={styles.planButton}>Get Started</Link>
            </div>
            
            <div className={styles.planCard + ' ' + styles.featured}>
              <div className={styles.planBadge}>Most Popular</div>
              <h3>Family Plan</h3>
              <div className={styles.planPrice}>$199<span>/month</span></div>
              <ul className={styles.planFeatures}>
                <li><FaCheckCircle /> Coverage for 2 adults + children</li>
                <li><FaCheckCircle /> All individual plan benefits</li>
                <li><FaCheckCircle /> Family wellness planning</li>
                <li><FaCheckCircle /> Pediatric care included</li>
                <li><FaCheckCircle /> Significant savings per person</li>
              </ul>
              <Link href="/contact" className={styles.planButton}>Get Started</Link>
            </div>
            
            <div className={styles.planCard}>
              <h3>Senior Plan</h3>
              <div className={styles.planPrice}>$69<span>/month</span></div>
              <ul className={styles.planFeatures}>
                <li><FaCheckCircle /> Medicare coordination</li>
                <li><FaCheckCircle /> Chronic care management</li>
                <li><FaCheckCircle /> Medication reviews</li>
                <li><FaCheckCircle /> Home visit options</li>
                <li><FaCheckCircle /> Caregiver support</li>
              </ul>
              <Link href="/contact" className={styles.planButton}>Get Started</Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Can I use insurance and cash pay together?</h3>
              <p>Yes! You can choose cash pay for services even if you have insurance, especially when it offers better value or for non-covered services.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you accept HSA/FSA cards?</h3>
              <p>Absolutely! Our services qualify for HSA and FSA payment. We provide all necessary documentation for your records.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How do payment plans work?</h3>
              <p>We offer interest-free payment plans for larger medical expenses. <Link href="/services/payment-plans" className={styles.learnMoreLink}>Learn more about our flexible payment options</Link> or discuss with our billing team to set up a plan that fits your budget.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is membership worth it?</h3>
              <p>If you visit the doctor 2+ times per year, membership saves money while providing unlimited access and enhanced care.</p>
            </div>
          </div>
        </section>

        {/* Payment Plans CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Need More Flexible Payment Options?</h2>
            <p>In addition to our cash pay rates, we offer flexible payment plans to make healthcare affordable for everyone. Choose from 3 to 12-month terms with zero interest.</p>
            <div className={styles.ctaButtons}>
              <Link href="/services/payment-plans" className={styles.ctaPrimary}>
                Explore Payment Plans
              </Link>
              <Link href="tel:8164275320" className={styles.ctaSecondary}>
                Call (816) 427-5320
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}