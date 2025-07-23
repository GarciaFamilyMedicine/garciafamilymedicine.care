'use client'

import styles from '../service.module.css'
import { FaPray, FaHeart, FaUsers, FaCross, FaHandsHelping, FaBookOpen } from 'react-icons/fa'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function FaithFamilyMedicine() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Faith & Family Medicine™</h1>
          <p className={styles.heroSubtitle}>Whole-Person Care That Honors Your Body, Soul, and Spirit</p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <section className={styles.introSection}>
          <div className={styles.container}>
            <p className={styles.leadText}>
              At Garcia Family Medicine, we believe that true healing encompasses far more than treating symptoms or diagnosing conditions. Our practice is founded on the understanding that you are a complete person—body, soul, and spirit—and that authentic wellness requires attention to every aspect of your being.
            </p>
            <p className={styles.sectionText}>
              Faith & Family Medicine™ represents our commitment to providing whole-person care that honors not only your physical health but also acknowledges the profound connection between your spiritual well-being and your overall health journey.
            </p>
          </div>
        </section>

        <section className={styles.philosophySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Medicine as Art and Calling</h2>
            <p className={styles.sectionText}>
              Medicine, at its most profound level, is both an art and a calling. At Garcia Family Medicine, we recognize that every patient who walks through our doors carries not just physical ailments, but also hopes, fears, dreams, and faith. Our approach to healthcare integrates the highest standards of medical excellence with the timeless principles of compassion, prayer, and spiritual support that have guided healers for millennia.
            </p>
            <p className={styles.sectionText}>
              Dr. Tess Garcia and our dedicated medical team understand that when you're facing illness, injury, or health concerns, you're not just seeking medical treatment—you're seeking hope, understanding, and a sense of peace during uncertain times. Our Faith & Family Medicine™ model acknowledges that healing is a collaborative process between patient, physician, and the divine source of all healing. We treat each patient with the reverence and dignity that reflects our belief that every person is fearfully and wonderfully made.
            </p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Comprehensive Family Medicine Services</h2>
            <p className={styles.sectionText}>
              Our comprehensive family medicine services cover patients of all ages, from newborns to seniors. We provide preventive care, acute illness treatment, chronic disease management, wellness screenings, immunizations, and health education—all delivered with the personalized attention and compassionate care that defines our practice.
            </p>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <FaHeart className={styles.serviceIcon} />
                <h3>Comprehensive Medical Services</h3>
                <ul className={styles.serviceList}>
                  <li>Routine physical examinations</li>
                  <li>Management of chronic conditions (diabetes, hypertension, heart disease)</li>
                  <li>Acute care for illnesses and injuries</li>
                  <li>Women's health services</li>
                  <li>Pediatric care</li>
                  <li>Geriatric medicine</li>
                  <li>Mental health support</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <FaUsers className={styles.serviceIcon} />
                <h3>Family-Centered Care</h3>
                <ul className={styles.serviceList}>
                  <li>Care for all ages from newborns to seniors</li>
                  <li>Preventive care and wellness screenings</li>
                  <li>Immunizations and health education</li>
                  <li>Chronic disease management</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <FaPray className={styles.serviceIcon} />
                <h3>Spiritual Support</h3>
                <ul className={styles.serviceList}>
                  <li>Prayer with patients (when welcomed)</li>
                  <li>Spiritual and emotional support</li>
                  <li>Faith community collaboration</li>
                  <li>Holistic wellness guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.approachSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Unique Approach</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <FaHandsHelping className={styles.benefitIcon} />
                <h3>Quality Time</h3>
                <p>What sets Garcia Family Medicine apart is our commitment to spending quality time with each patient. In an era of rushed medical appointments and impersonal healthcare experiences, we prioritize building genuine relationships with our patients and their families.</p>
              </div>
              <div className={styles.benefitCard}>
                <FaCross className={styles.benefitIcon} />
                <h3>Partnership in Healing</h3>
                <p>We're not just your healthcare providers—we're your partners in health and healing. Our team is trained not only in medical excellence but also in providing spiritual and emotional support during difficult times.</p>
              </div>
              <div className={styles.benefitCard}>
                <FaBookOpen className={styles.benefitIcon} />
                <h3>Understanding Your Journey</h3>
                <p>We believe that understanding your unique circumstances, challenges, and faith journey enables us to provide more effective, personalized care that addresses your complete well-being.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.prayerSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>The Power of Prayer in Healing</h2>
            <p className={styles.sectionText}>
              Prayer is an integral part of our practice, offered respectfully to those who welcome it. We believe in the power of prayer to bring comfort, peace, and healing, and we're honored when patients invite us to pray with them during appointments or procedures. Our approach is always respectful of individual beliefs and preferences, ensuring that every patient feels comfortable and valued regardless of their faith background.
            </p>
            <p className={styles.sectionText}>
              We recognize that many patients find strength, hope, and healing through their faith communities. We work collaboratively with patients' spiritual advisors, chaplains, and faith leaders when appropriate, understanding that spiritual support often enhances medical treatment and promotes faster, more complete healing.
            </p>
          </div>
        </section>

        <section className={styles.holisticSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Holistic Health Assessment</h2>
            <p className={styles.sectionText}>
              This holistic approach includes assessing your nutritional status, exercise habits, sleep patterns, stress levels, and spiritual well-being, providing guidance on healthy lifestyle choices that honor your body as a temple.
            </p>
            <div className={styles.assessmentGrid}>
              <div className={styles.assessmentItem}>
                <h3>Nutritional Guidance</h3>
                <p>Personalized dietary recommendations that nourish your body</p>
              </div>
              <div className={styles.assessmentItem}>
                <h3>Exercise & Movement</h3>
                <p>Physical activity plans that honor your body's capabilities</p>
              </div>
              <div className={styles.assessmentItem}>
                <h3>Stress Management</h3>
                <p>Techniques to find peace amidst life's challenges</p>
              </div>
              <div className={styles.assessmentItem}>
                <h3>Sleep Wellness</h3>
                <p>Strategies for restorative rest and healing</p>
              </div>
              <div className={styles.assessmentItem}>
                <h3>Spiritual Well-being</h3>
                <p>Support for your faith journey and spiritual growth</p>
              </div>
              <div className={styles.assessmentItem}>
                <h3>Community Connection</h3>
                <p>Fostering relationships that support healing</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Experience Compassionate, Faith-Centered Care</h2>
            <p className={styles.sectionText}>
              Join a healthcare practice that honors your complete well-being—body, soul, and spirit. Dr. Tess Garcia and our dedicated team are here to walk alongside you on your health journey, providing medical excellence integrated with spiritual compassion.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Schedule Your Visit
              </Link>
              <Link href="/meetthedoctor" className={styles.secondaryButton}>
                Meet Dr. Garcia
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