'use client';

import styles from './carebridge.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaGlobe, FaMobileAlt, FaUserMd, FaClock, FaShieldAlt, FaChartBar } from 'react-icons/fa';

export default function CareBridgePage() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>CareBridge™</h1>
          <p className={styles.heroSubtitle}>Your 24/7 Healthcare Platform</p>
          <p className={styles.heroDescription}>
            Experience healthcare without boundaries. CareBridge™ connects you to 
            comprehensive medical care anytime, anywhere, through our innovative digital platform.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              Get Started Today
            </Link>
            <Link href="#features" className={styles.secondaryButton}>
              See Platform Demo
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/services/carebridge-hero.jpg"
            alt="CareBridge - 24/7 Healthcare Platform"
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
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>Always Available</div>
            <div className={styles.statDescription}>Round-the-clock access to care</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>&lt;5min</div>
            <div className={styles.statLabel}>Average Wait Time</div>
            <div className={styles.statDescription}>Connect with providers instantly</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Specialties</div>
            <div className={styles.statDescription}>Comprehensive medical expertise</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>4.9/5</div>
            <div className={styles.statLabel}>Patient Rating</div>
            <div className={styles.statDescription}>Exceptional care satisfaction</div>
          </div>
        </div>
      </section>

      <section id="features" className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Everything You Need in One Platform</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <FaMobileAlt className={styles.featureIcon} />
            <h3>Mobile-First Design</h3>
            <p>Access your health information and providers from any device, anywhere</p>
          </div>
          <div className={styles.featureCard}>
            <FaUserMd className={styles.featureIcon} />
            <h3>Expert Providers</h3>
            <p>Board-certified doctors and specialists available on-demand</p>
          </div>
          <div className={styles.featureCard}>
            <FaClock className={styles.featureIcon} />
            <h3>Instant Access</h3>
            <p>No appointments needed - connect with care providers immediately</p>
          </div>
          <div className={styles.featureCard}>
            <FaShieldAlt className={styles.featureIcon} />
            <h3>Secure & Private</h3>
            <p>HIPAA-compliant platform with bank-level encryption</p>
          </div>
          <div className={styles.featureCard}>
            <FaGlobe className={styles.featureIcon} />
            <h3>Global Coverage</h3>
            <p>Access care whether you're at home or traveling worldwide</p>
          </div>
          <div className={styles.featureCard}>
            <FaChartBar className={styles.featureIcon} />
            <h3>Health Tracking</h3>
            <p>Monitor your health metrics and progress over time</p>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Comprehensive Care Services</h2>
        <div className={styles.servicesContainer}>
          <div className={styles.serviceColumn}>
            <h3>Primary Care</h3>
            <ul>
              <li>General consultations</li>
              <li>Prescription management</li>
              <li>Lab result reviews</li>
              <li>Health screenings</li>
              <li>Preventive care guidance</li>
            </ul>
          </div>
          <div className={styles.serviceColumn}>
            <h3>Urgent Care</h3>
            <ul>
              <li>Cold & flu treatment</li>
              <li>Minor injuries</li>
              <li>Infections</li>
              <li>Allergic reactions</li>
              <li>Emergency triage</li>
            </ul>
          </div>
          <div className={styles.serviceColumn}>
            <h3>Mental Health</h3>
            <ul>
              <li>Therapy sessions</li>
              <li>Anxiety management</li>
              <li>Depression support</li>
              <li>Stress counseling</li>
              <li>Crisis intervention</li>
            </ul>
          </div>
          <div className={styles.serviceColumn}>
            <h3>Specialty Care</h3>
            <ul>
              <li>Dermatology</li>
              <li>Cardiology</li>
              <li>Endocrinology</li>
              <li>Pediatrics</li>
              <li>Women's health</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.howItWorksSection}>
        <h2 className={styles.sectionTitle}>How CareBridge™ Works</h2>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Sign Up</h3>
              <p>Create your secure account in minutes with basic health information</p>
            </div>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Choose Care</h3>
              <p>Select the type of care you need from our comprehensive menu</p>
            </div>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Connect</h3>
              <p>Instantly connect with the right provider via video, phone, or chat</p>
            </div>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Get Better</h3>
              <p>Receive treatment, prescriptions, and follow-up care as needed</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.technologySection}>
        <div className={styles.techContent}>
          <div className={styles.techText}>
            <h2>Powered by Advanced Technology</h2>
            <p>
              CareBridge™ leverages cutting-edge healthcare technology to deliver 
              seamless, efficient, and personalized care experiences.
            </p>
            <ul className={styles.techList}>
              <li>AI-powered symptom checker for faster diagnosis</li>
              <li>Smart routing to match you with the right specialist</li>
              <li>Electronic prescriptions sent directly to your pharmacy</li>
              <li>Integrated health records from all your providers</li>
              <li>Real-time language translation for global access</li>
              <li>Wearable device integration for continuous monitoring</li>
            </ul>
          </div>
          <div className={styles.techImage}>
            <Image
              src="/images/services/carebridge-tech.jpg"
              alt="CareBridge Technology"
              width={500}
              height={400}
              className={styles.image}
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <h2 className={styles.sectionTitle}>Simple, Transparent Pricing</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3>Individual</h3>
            <div className={styles.price}>$29<span>/month</span></div>
            <ul>
              <li>Unlimited virtual visits</li>
              <li>24/7 urgent care access</li>
              <li>Prescription management</li>
              <li>Health record storage</li>
              <li>Mobile app access</li>
            </ul>
            <Link href="/contact" className={styles.pricingButton}>
              Get Started
            </Link>
          </div>
          <div className={styles.pricingCard} data-featured="true">
            <div className={styles.popularBadge}>Most Popular</div>
            <h3>Family</h3>
            <div className={styles.price}>$49<span>/month</span></div>
            <ul>
              <li>Everything in Individual</li>
              <li>Up to 6 family members</li>
              <li>Pediatric specialists</li>
              <li>Family health dashboard</li>
              <li>Priority support</li>
            </ul>
            <Link href="/contact" className={styles.pricingButton}>
              Get Started
            </Link>
          </div>
          <div className={styles.pricingCard}>
            <h3>Enterprise</h3>
            <div className={styles.price}>Custom</div>
            <ul>
              <li>Unlimited employees</li>
              <li>Dedicated account manager</li>
              <li>Custom integrations</li>
              <li>Analytics dashboard</li>
              <li>On-site health events</li>
            </ul>
            <Link href="/contact" className={styles.pricingButton}>
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <h2 className={styles.sectionTitle}>What Our Users Say</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "CareBridge has revolutionized how our family accesses healthcare. 
              The convenience is unmatched and the quality of care is exceptional."
            </p>
            <div className={styles.testimonialAuthor}>- Amanda K., Mother of 3</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "As a frequent traveler, having 24/7 access to healthcare gives me 
              peace of mind. I've used it in 5 different countries!"
            </p>
            <div className={styles.testimonialAuthor}>- Robert T., Business Executive</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "The mental health support has been life-changing. Being able to 
              connect with my therapist instantly during difficult moments is invaluable."
            </p>
            <div className={styles.testimonialAuthor}>- Sarah L., Graduate Student</div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Experience Healthcare Without Limits?</h2>
          <p>Join thousands who've made the switch to smarter healthcare</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Start Your Free Trial
            </Link>
            <Link href="#features" className={styles.ctaSecondary}>
              Schedule a Demo
            </Link>
          </div>
          <p className={styles.ctaNote}>
            <small>No credit card required. 14-day free trial for all new users.</small>
          </p>
        </div>
      </section>
    </div>
  );
}