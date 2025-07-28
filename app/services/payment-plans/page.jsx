'use client';

import styles from './payment-plans.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { FaHandshake, FaCalendarAlt, FaShieldAlt, FaCheckCircle, FaChartLine, FaCreditCard, FaUsers, FaHeart } from 'react-icons/fa';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function PaymentPlansPage() {
  return (
    <>
      <Header />
      {/* Cherry Widget Scripts and Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Slabo+27px&family=Lato&family=Raleway&family=Montserrat&family=Oswald&family=Poppins&family=Source+Sans+Pro&family=PT+Sans&family=Open+Sans&display=swap" 
        rel="stylesheet"
      />
      <Script
        id="cherry-widget"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function (w, d, s, o, f, js, fjs) {
              w[o] = w[o] || function () {
                (w[o].q = w[o].q || []).push(arguments);
              };
              (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
              js.id = o;
              js.src = f;
              js.async = 1;
              fjs.parentNode.insertBefore(js, fjs);
            })(window, document, "script", "_hw", 'https://files.withcherry.com/widgets/widget.js');
            _hw(
              "init",
              {
                debug: false,
                variables: {
                  slug: 'garcia-family-medicine-llc',
                  name: "Garcia Family Medicine LLC",
                },
                styles: {
                  primaryColor: '#00c37d',
                  secondaryColor: '#00c37d10',
                  fontFamily: 'Open Sans',
                },
              },
              ["all", "hero", "howitworks", "testimony", "faq", "calculator"]
            );
          `
        }}
      />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Flexible Payment Plans</h1>
            <p className={styles.heroSubtitle}>Quality Healthcare Made Affordable for Everyone</p>
            <p className={styles.heroDescription}>
              We believe financial concerns should never prevent you from receiving the medical care you need. 
              Our flexible payment plans allow you to spread healthcare costs over time with zero interest, 
              making quality medical care accessible and affordable for your family.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Apply for Payment Plan
              </Link>
              <Link href="#how-it-works" className={styles.secondaryButton}>
                Learn How It Works
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/services/payment-plans/hero.jpg"
              alt="Flexible Payment Plans for Healthcare"
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
              <div className={styles.statNumber}>0%</div>
              <div className={styles.statLabel}>Interest Rate</div>
              <div className={styles.statDescription}>No hidden fees or charges</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>12</div>
              <div className={styles.statLabel}>Months</div>
              <div className={styles.statDescription}>Maximum payment terms</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>24hr</div>
              <div className={styles.statLabel}>Quick Approval</div>
              <div className={styles.statDescription}>Fast processing time</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>$100</div>
              <div className={styles.statLabel}>Minimum</div>
              <div className={styles.statDescription}>Low qualification threshold</div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Why Choose Our Payment Plans?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <FaHandshake className={styles.benefitIcon} />
              <h3>No Credit Check</h3>
              <p>We believe everyone deserves healthcare. Our payment plans don't require credit checks or impact your credit score.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaCreditCard className={styles.benefitIcon} />
              <h3>Zero Interest</h3>
              <p>Pay only for your medical services—nothing more. No interest charges, no hidden fees, no surprises.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaCalendarAlt className={styles.benefitIcon} />
              <h3>Flexible Terms</h3>
              <p>Choose from 3, 6, 9, or 12-month payment plans. Select the timeline that works best for your budget.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaShieldAlt className={styles.benefitIcon} />
              <h3>Immediate Care</h3>
              <p>Start treatment right away. Don't delay necessary medical care while waiting to save up funds.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaChartLine className={styles.benefitIcon} />
              <h3>Budget-Friendly</h3>
              <p>Break large medical bills into manageable monthly payments that fit comfortably within your budget.</p>
            </div>
            <div className={styles.benefitCard}>
              <FaUsers className={styles.benefitIcon} />
              <h3>Family Coverage</h3>
              <p>One payment plan can cover multiple family members' medical expenses, simplifying your healthcare finances.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className={styles.howItWorksSection}>
          <h2 className={styles.sectionTitle}>How Payment Plans Work</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Receive Treatment</h3>
              <p>Get the medical care you need right away. No delays, no waiting for approval before treatment.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Apply for Plan</h3>
              <p>Complete a simple application with our billing team. Takes just 5 minutes, no complex paperwork.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Choose Terms</h3>
              <p>Select payment terms that fit your budget: 3, 6, 9, or 12 months. Adjust as needed.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3>Start Payments</h3>
              <p>Make easy monthly payments automatically. Track progress online and adjust if circumstances change.</p>
            </div>
          </div>
        </section>

        {/* Payment Options Section */}
        <section className={styles.optionsSection}>
          <h2 className={styles.sectionTitle}>Available Payment Plan Options</h2>
          <div className={styles.optionsGrid}>
            <div className={styles.optionCard}>
              <h3>Short-Term Plan</h3>
              <div className={styles.optionDuration}>3 Months</div>
              <ul className={styles.optionFeatures}>
                <li><FaCheckCircle /> Best for smaller balances</li>
                <li><FaCheckCircle /> Lower monthly payments</li>
                <li><FaCheckCircle /> Quick payoff</li>
                <li><FaCheckCircle /> No setup fees</li>
              </ul>
              <p className={styles.optionExample}>Example: $300 bill = $100/month</p>
            </div>
            
            <div className={styles.optionCard + ' ' + styles.featured}>
              <div className={styles.optionBadge}>Most Popular</div>
              <h3>Standard Plan</h3>
              <div className={styles.optionDuration}>6 Months</div>
              <ul className={styles.optionFeatures}>
                <li><FaCheckCircle /> Perfect balance of time & payment</li>
                <li><FaCheckCircle /> Moderate monthly amounts</li>
                <li><FaCheckCircle /> Most flexible option</li>
                <li><FaCheckCircle /> Can adjust if needed</li>
              </ul>
              <p className={styles.optionExample}>Example: $600 bill = $100/month</p>
            </div>
            
            <div className={styles.optionCard}>
              <h3>Extended Plan</h3>
              <div className={styles.optionDuration}>12 Months</div>
              <ul className={styles.optionFeatures}>
                <li><FaCheckCircle /> Lowest monthly payments</li>
                <li><FaCheckCircle /> Best for larger procedures</li>
                <li><FaCheckCircle /> Maximum flexibility</li>
                <li><FaCheckCircle /> Family-friendly option</li>
              </ul>
              <p className={styles.optionExample}>Example: $1200 bill = $100/month</p>
            </div>
          </div>
        </section>

        {/* Eligible Services Section */}
        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Services Eligible for Payment Plans</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCategory}>
              <h3>Medical Procedures</h3>
              <ul>
                <li><FaCheckCircle /> Minor surgeries</li>
                <li><FaCheckCircle /> Diagnostic procedures</li>
                <li><FaCheckCircle /> Specialized treatments</li>
                <li><FaCheckCircle /> Chronic care management</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3>Preventive Care</h3>
              <ul>
                <li><FaCheckCircle /> Comprehensive physicals</li>
                <li><FaCheckCircle /> Well-woman exams</li>
                <li><FaCheckCircle /> Pediatric check-ups</li>
                <li><FaCheckCircle /> Health screenings</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3>Diagnostic Services</h3>
              <ul>
                <li><FaCheckCircle /> Laboratory testing</li>
                <li><FaCheckCircle /> Advanced diagnostics</li>
                <li><FaCheckCircle /> Imaging services</li>
                <li><FaCheckCircle /> Specialized testing</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3>Wellness Programs</h3>
              <ul>
                <li><FaCheckCircle /> Weight management</li>
                <li><FaCheckCircle /> Mental health services</li>
                <li><FaCheckCircle /> Chronic disease programs</li>
                <li><FaCheckCircle /> Preventive care packages</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Is there a minimum amount required?</h3>
              <p>Yes, payment plans are available for medical bills of $100 or more. Smaller amounts can be paid at time of service or within 30 days.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I pay off my plan early?</h3>
              <p>Absolutely! There are no prepayment penalties. Pay off your balance anytime without any additional fees.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What if I miss a payment?</h3>
              <p>Contact us immediately. We understand circumstances change and will work with you to adjust your payment schedule.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I use insurance with payment plans?</h3>
              <p>Yes! Payment plans can cover deductibles, co-pays, or any portion not covered by insurance.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How do automatic payments work?</h3>
              <p>We securely store your payment method and charge monthly on your selected date. You can change or cancel anytime.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Are there application fees?</h3>
              <p>No! There are zero fees to apply or set up a payment plan. You only pay for your medical services.</p>
            </div>
          </div>
        </section>

        {/* Cherry Financing Section */}
        <section className={styles.cherrySection}>
          <h2 className={styles.sectionTitle}>Finance Your Healthcare with Cherry</h2>
          <p className={styles.sectionDescription}>
            In addition to our in-house payment plans, we've partnered with Cherry to offer even more flexible financing options 
            with longer terms and instant approval decisions.
          </p>
          {/* Cherry Widget */}
          <div id="all"></div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <FaHeart className={styles.ctaIcon} />
            <h2>Don't Let Cost Prevent Care</h2>
            <p>Your health is too important to delay. Let us help make quality healthcare affordable for you and your family.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Apply for Payment Plan
              </Link>
              <Link href="tel:5596258700" className={styles.ctaSecondary}>
                Call (559) 625-8700
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}