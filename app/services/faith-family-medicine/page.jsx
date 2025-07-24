'use client'

import styles from './page.module.css'
import { FaPray, FaHeart, FaUsers, FaCross, FaHandsHelping, FaBookOpen, FaAppleAlt, FaRunning, FaBrain, FaBed, FaPeopleArrows } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function FaithFamilyMedicine() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Faith & Family Medicine™</h1>
            <p className={styles.heroSubtitle}>Whole-Person Care That Honors Your Body, Soul, and Spirit</p>
            <p className={styles.heroDescription}>
              Experience healthcare that treats you as a complete person—body, soul, and spirit. 
              Our practice integrates medical excellence with spiritual compassion, providing 
              comprehensive family medicine services in a faith-centered environment.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Schedule Your Visit
              </Link>
              <Link href="/meetthedoctor" className={styles.secondaryButton}>
                Meet Dr. Garcia
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/services/faith-family-medicine/hero.jpg"
              alt="Faith & Family Medicine - Whole Person Healthcare"
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
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>Years Experience</div>
              <div className={styles.statDescription}>Serving families with excellence</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Patient Satisfaction</div>
              <div className={styles.statDescription}>Rated by our community</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>All Ages</div>
              <div className={styles.statLabel}>Family Care</div>
              <div className={styles.statDescription}>Newborns to seniors</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Prayer Support</div>
              <div className={styles.statDescription}>Spiritual care available</div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Comprehensive Family Medicine Services</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <FaHeart className={styles.featureIcon} />
              <h3>Primary Care</h3>
              <p>Comprehensive medical care for all ages with a personal touch</p>
            </div>
            <div className={styles.featureCard}>
              <FaUsers className={styles.featureIcon} />
              <h3>Family-Centered</h3>
              <p>Care that considers your whole family's health journey</p>
            </div>
            <div className={styles.featureCard}>
              <FaPray className={styles.featureIcon} />
              <h3>Faith Integration</h3>
              <p>Spiritual support and prayer when welcomed</p>
            </div>
            <div className={styles.featureCard}>
              <FaHandsHelping className={styles.featureIcon} />
              <h3>Compassionate Care</h3>
              <p>Quality time and genuine relationships with patients</p>
            </div>
            <div className={styles.featureCard}>
              <FaCross className={styles.featureIcon} />
              <h3>Holistic Wellness</h3>
              <p>Addressing body, mind, and spirit for complete health</p>
            </div>
            <div className={styles.featureCard}>
              <FaBookOpen className={styles.featureIcon} />
              <h3>Health Education</h3>
              <p>Empowering you with knowledge for better health</p>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCategory}>
              <h3>Primary Care</h3>
              <ul>
                <li>Annual physicals</li>
                <li>Acute illness treatment</li>
                <li>Chronic disease management</li>
                <li>Preventive screenings</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3>Women's Health</h3>
              <ul>
                <li>Well-woman exams</li>
                <li>Family planning</li>
                <li>Prenatal care</li>
                <li>Menopause management</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3>Pediatric Care</h3>
              <ul>
                <li>Well-child visits</li>
                <li>Immunizations</li>
                <li>School physicals</li>
                <li>Developmental screening</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3>Senior Care</h3>
              <ul>
                <li>Medicare wellness visits</li>
                <li>Memory screening</li>
                <li>Fall risk assessment</li>
                <li>Medication management</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.philosophySection}>
          <div className={styles.philosophyContent}>
            <h2 className={styles.sectionTitle}>Our Philosophy of Care</h2>
            <p className={styles.philosophyText}>
              At Garcia Family Medicine, we believe that true healing encompasses far more than treating 
              symptoms or diagnosing conditions. Our practice is founded on the understanding that you are 
              a complete person—body, soul, and spirit—and that authentic wellness requires attention to 
              every aspect of your being.
            </p>
            <p className={styles.philosophyText}>
              We integrate the highest standards of medical excellence with the timeless principles of 
              compassion, prayer, and spiritual support. Our approach acknowledges that healing is a 
              collaborative process between patient, physician, and the divine source of all healing.
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}