'use client';

import styles from './nourish-thrive-journey.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import Link from 'next/link';
import Image from 'next/image';
import { FaAppleAlt, FaHeartbeat, FaUsers, FaChartLine, FaBrain, FaHandsHelping } from 'react-icons/fa';

export default function NourishThriveJourneyPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Nourish & Thrive™ Journey</h1>
            <p className={styles.heroSubtitle}>Your Path to Wholeness - 12 Months to Transform</p>
            <p className={styles.heroDescription}>
              Experience a compassionate, comprehensive 12-month transformation that honors 
              every part of who you are: body, mind, heart, and spirit. This isn't another 
              diet program—it's your journey to lasting wellness.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Start Your Journey
              </Link>
              <Link href="#pillars" className={styles.secondaryButton}>
                Learn Our Approach
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/services/nourish-thrive-journey/hero.jpg"
              alt="Nourish & Thrive Journey - Whole Person Wellness"
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
              <div className={styles.statNumber}>87%</div>
              <div className={styles.statLabel}>Success Rate</div>
              <div className={styles.statDescription}>Participants maintain results after 2 years</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>12</div>
              <div className={styles.statLabel}>Months Support</div>
              <div className={styles.statDescription}>Full year of transformation</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statLabel}>Pillars</div>
              <div className={styles.statDescription}>Comprehensive approach</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>App Access</div>
              <div className={styles.statDescription}>Support when you need it</div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Why Nourish & Thrive Works</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <FaBrain className={styles.featureIcon} />
              <h3>Mind-Body Connection</h3>
              <p>Address emotional eating patterns and develop healthy coping strategies</p>
            </div>
            <div className={styles.featureCard}>
              <FaAppleAlt className={styles.featureIcon} />
              <h3>Personalized Nutrition</h3>
              <p>Custom meal plans that honor your preferences and cultural traditions</p>
            </div>
            <div className={styles.featureCard}>
              <FaHeartbeat className={styles.featureIcon} />
              <h3>Medical Support</h3>
              <p>Comprehensive lab work and monthly check-ins with Dr. Garcia</p>
            </div>
            <div className={styles.featureCard}>
              <FaUsers className={styles.featureIcon} />
              <h3>Community Support</h3>
              <p>Group sessions and peer connections for lasting accountability</p>
            </div>
            <div className={styles.featureCard}>
              <FaChartLine className={styles.featureIcon} />
              <h3>Progress Tracking</h3>
              <p>Beyond the scale - measure energy, mood, and overall wellbeing</p>
            </div>
            <div className={styles.featureCard}>
              <FaHandsHelping className={styles.featureIcon} />
              <h3>Life Coaching</h3>
              <p>Certified coaches help you navigate challenges with compassion</p>
            </div>
          </div>
        </section>

        <section id="pillars" className={styles.pillarsSection}>
          <h2 className={styles.sectionTitle}>Four Foundational Pillars</h2>
          <div className={styles.pillarsContainer}>
            
            <div className={styles.pillarCard}>
              <div className={styles.pillarNumber}>1</div>
              <h3>Laboratory Assessment</h3>
              <p>Comprehensive testing to uncover hidden metabolic factors, hormone imbalances, and nutritional deficiencies affecting your health.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarNumber}>2</div>
              <h3>Personalized Meal Mapping</h3>
              <p>Sustainable nutrition plans that honor your preferences, cultural background, and lifestyle without restrictive dieting.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarNumber}>3</div>
              <h3>Emotional Support</h3>
              <p>Certified life coaches help you address emotional eating patterns and develop healthy coping strategies with compassion.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarNumber}>4</div>
              <h3>Faith-Rooted Reset</h3>
              <p>Connect your health journey to your spiritual values for deeper purpose and lasting transformation.</p>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>What's Included in Your Journey</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCategory}>
              <h3>Medical Support</h3>
              <ul>
                <li>Comprehensive lab work</li>
                <li>Monthly check-ins with Dr. Garcia</li>
                <li>Medication management if needed</li>
                <li>Metabolic health monitoring</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3>Nutrition Guidance</h3>
              <ul>
                <li>Personalized meal planning</li>
                <li>Weekly dietitian sessions</li>
                <li>Recipe resources</li>
                <li>Restaurant navigation help</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3>Emotional Support</h3>
              <ul>
                <li>Individual life coaching</li>
                <li>Group therapy sessions</li>
                <li>Stress management tools</li>
                <li>Mindfulness training</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3>Technology & Tools</h3>
              <ul>
                <li>24/7 mobile app access</li>
                <li>Progress tracking dashboard</li>
                <li>Video consultations</li>
                <li>Educational resources</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.successSection}>
          <h2 className={styles.sectionTitle}>Success Stories</h2>
          <div className={styles.successGrid}>
            <div className={styles.successCard}>
              <div className={styles.successQuote}>
                "For the first time in my life, I'm not on a diet. I'm living a life where 
                food is my friend and my health is a priority—not a punishment."
              </div>
              <div className={styles.successAuthor}>
                <strong>Sarah M.</strong>
                <span>Lost 67 lbs, gained confidence</span>
              </div>
            </div>
            <div className={styles.successCard}>
              <div className={styles.successQuote}>
                "The lab work revealed issues I never knew I had. Addressing them changed 
                everything. I have energy again!"
              </div>
              <div className={styles.successAuthor}>
                <strong>Michael R.</strong>
                <span>Reversed pre-diabetes</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Begin Your Transformation Today</h2>
            <p>
              You deserve to feel whole, healthy, and at peace in your own body.
              Take the first step on your journey to lasting wellness.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Schedule Your Consultation
              </Link>
              <Link href="/services" className={styles.ctaSecondary}>
                Learn More About Our Services
              </Link>
            </div>
            <p className={styles.ctaNote}>
              <small>Flexible payment plans available. Most insurance accepted.</small>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}