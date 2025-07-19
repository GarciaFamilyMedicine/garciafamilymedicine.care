'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import styles from '../service.module.css';

export default function FaithFamilyMedicine() {
  return (
    <div className={`${styles.servicePageContainer} ${styles.container}`}>
      <Header />
      
      <main className={styles.mainContent}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Faith & Family Medicine™</h1>
            <p className={styles.heroSubtitle}>
              Whole-Person Care That Honors Your Body, Soul, and Spirit
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Comprehensive Healthcare with Spiritual Compassion</h2>
            
            <p className={styles.paragraph}>
              At Garcia Family Medicine, we believe that true healing encompasses far more than treating symptoms 
              or diagnosing conditions. Our practice is founded on the understanding that you are a complete 
              person—body, soul, and spirit—and that authentic wellness requires attention to every aspect of 
              your being. Faith & Family Medicine™ represents our commitment to providing whole-person care that 
              honors not only your physical health but also acknowledges the profound connection between your 
              spiritual well-being and your overall health journey.
            </p>

            <p className={styles.paragraph}>
              Medicine, at its most profound level, is both an art and a calling. At Garcia Family Medicine, 
              we recognize that every patient who walks through our doors carries not just physical ailments, 
              but also hopes, fears, dreams, and faith. Our approach to healthcare integrates the highest 
              standards of medical excellence with the timeless principles of compassion, prayer, and spiritual 
              support that have guided healers for millennia.
            </p>

            <h2 className={styles.sectionTitle}>Hope and Healing in Partnership</h2>
            
            <p className={styles.paragraph}>
              Dr. Tess Garcia and our dedicated medical team understand that when you're facing illness, injury, 
              or health concerns, you're not just seeking medical treatment—you're seeking hope, understanding, 
              and a sense of peace during uncertain times. Our Faith & Family Medicine™ model acknowledges that 
              healing is a collaborative process between patient, physician, and the divine source of all healing. 
              We treat each patient with the reverence and dignity that reflects our belief that every person is 
              fearfully and wonderfully made.
            </p>

            <h2 className={styles.sectionTitle}>Comprehensive Family Medicine Services</h2>
            
            <p className={styles.paragraph}>
              Our comprehensive family medicine services cover patients of all ages, from newborns to seniors. 
              We provide preventive care, acute illness treatment, chronic disease management, wellness screenings, 
              immunizations, and health education—all delivered with the personalized attention and compassionate 
              care that defines our practice.
            </p>

            <div className={styles.servicesList}>
              <h3 className={styles.listTitle}>Our Medical Services Include:</h3>
              <ul className={styles.bulletList}>
                <li>Routine physical examinations</li>
                <li>Management of chronic conditions (diabetes, hypertension, heart disease)</li>
                <li>Acute care for illnesses and injuries</li>
                <li>Women's health services</li>
                <li>Pediatric care</li>
                <li>Geriatric medicine</li>
                <li>Mental health support</li>
              </ul>
            </div>

            <h2 className={styles.sectionTitle}>Quality Time and Genuine Relationships</h2>
            
            <p className={styles.paragraph}>
              What sets Garcia Family Medicine apart is our commitment to spending quality time with each patient. 
              In an era of rushed medical appointments and impersonal healthcare experiences, we prioritize building 
              genuine relationships with our patients and their families. We believe that understanding your unique 
              circumstances, challenges, and faith journey enables us to provide more effective, personalized care.
            </p>

            <p className={styles.paragraph}>
              Our Faith & Family Medicine™ approach means we're not just your healthcare providers—we're your 
              partners in health and healing. We understand that facing medical challenges can test your faith, 
              create anxiety, and leave you feeling overwhelmed. Our team is trained not only in medical excellence 
              but also in providing spiritual and emotional support during difficult times.
            </p>

            <h2 className={styles.sectionTitle}>The Power of Prayer in Healing</h2>
            
            <p className={styles.paragraph}>
              Prayer is an integral part of our practice, offered respectfully to those who welcome it. We believe 
              in the power of prayer to bring comfort, peace, and healing, and we're honored when patients invite 
              us to pray with them during appointments or procedures. Our approach is always respectful of individual 
              beliefs and preferences, ensuring that every patient feels comfortable and valued regardless of their 
              faith background.
            </p>

            <h2 className={styles.sectionTitle}>Collaborative Spiritual Care</h2>
            
            <p className={styles.paragraph}>
              We recognize that many patients find strength, hope, and healing through their faith communities. 
              We work collaboratively with patients' spiritual advisors, chaplains, and faith leaders when 
              appropriate, understanding that spiritual support often enhances medical treatment and promotes 
              faster, more complete healing. This holistic approach includes assessing your nutritional status, 
              exercise habits, sleep patterns, stress levels, and spiritual well-being, providing guidance on 
              healthy lifestyle choices that honor your body as a temple.
            </p>

            <div className={styles.ctaSection}>
              <h2 className={styles.ctaTitle}>Experience Whole-Person Care</h2>
              <p className={styles.ctaDescription}>
                Join a healthcare practice that honors your complete well-being—body, soul, and spirit.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.primaryButton}>
                  Schedule Your Visit
                </Link>
                <Link href="tel:816-427-5320" className={styles.secondaryButton}>
                  Call (816) 427-5320
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}