'use client'

import styles from '../service.module.css'
import { FaFemale, FaBaby, FaHeartbeat, FaRibbon, FaUserMd, FaCalendarCheck } from 'react-icons/fa'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function WomensHealth() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Women's Health</h1>
            <p className={styles.heroSubtitle}>Comprehensive Care for Every Stage of a Woman's Life</p>
          </div>
        </div>

      <div className={styles.mainContent}>
        <section className={styles.introSection}>
          <div className={styles.container}>
            <p className={styles.leadText}>
              Every woman deserves healthcare that understands and addresses her unique needs. At Garcia Family Medicine, we provide compassionate, comprehensive women's health services from adolescence through menopause and beyond.
            </p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Women's Health Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <FaCalendarCheck className={styles.serviceIcon} />
                <h3>Well-Woman Exams</h3>
                <ul className={styles.serviceList}>
                  <li>Annual gynecological exams</li>
                  <li>Pap smears and HPV testing</li>
                  <li>Breast examinations</li>
                  <li>Pelvic health assessments</li>
                  <li>Health risk screening</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaBaby className={styles.serviceIcon} />
                <h3>Reproductive Health</h3>
                <ul className={styles.serviceList}>
                  <li>Family planning counseling</li>
                  <li>Contraception options</li>
                  <li>Preconception counseling</li>
                  <li>Fertility awareness</li>
                  <li>STD screening and treatment</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaHeartbeat className={styles.serviceIcon} />
                <h3>Hormonal Health</h3>
                <ul className={styles.serviceList}>
                  <li>Menopause management</li>
                  <li>Hormone testing</li>
                  <li>PCOS treatment</li>
                  <li>Thyroid disorders</li>
                  <li>Menstrual irregularities</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaRibbon className={styles.serviceIcon} />
                <h3>Preventive Care</h3>
                <ul className={styles.serviceList}>
                  <li>Mammogram referrals</li>
                  <li>Bone density testing</li>
                  <li>Cardiovascular screening</li>
                  <li>Cancer prevention</li>
                  <li>Immunizations</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaFemale className={styles.serviceIcon} />
                <h3>Wellness Support</h3>
                <ul className={styles.serviceList}>
                  <li>Weight management</li>
                  <li>Nutrition counseling</li>
                  <li>Mental health support</li>
                  <li>Stress management</li>
                  <li>Sleep health</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <FaUserMd className={styles.serviceIcon} />
                <h3>Specialized Care</h3>
                <ul className={styles.serviceList}>
                  <li>Urinary incontinence</li>
                  <li>Pelvic floor health</li>
                  <li>Sexual health concerns</li>
                  <li>Chronic pelvic pain</li>
                  <li>Osteoporosis prevention</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.lifestagesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Care Through Every Life Stage</h2>
            <div className={styles.stagesGrid}>
              <div className={styles.stageCard}>
                <h3>Adolescence & Young Adults</h3>
                <p>First gynecological visits, menstrual health education, contraception counseling, and HPV vaccination.</p>
              </div>
              <div className={styles.stageCard}>
                <h3>Reproductive Years</h3>
                <p>Family planning, preconception care, pregnancy testing, and comprehensive reproductive health services.</p>
              </div>
              <div className={styles.stageCard}>
                <h3>Perimenopause & Menopause</h3>
                <p>Hormone management, symptom relief, bone health, and support through this natural transition.</p>
              </div>
              <div className={styles.stageCard}>
                <h3>Post-Menopausal Care</h3>
                <p>Continued preventive care, osteoporosis prevention, heart health, and healthy aging strategies.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.approachSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Approach to Women's Health</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Personalized Care</h3>
                <p>Every woman is unique. We tailor our care to your individual health needs, concerns, and goals.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Comfortable Environment</h3>
                <p>We create a safe, judgment-free space where you can discuss any health concern openly.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Evidence-Based Medicine</h3>
                <p>Our recommendations are based on the latest research and best practices in women's health.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.screeningSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Important Health Screenings</h2>
            <div className={styles.screeningGrid}>
              <div className={styles.screeningCard}>
                <h3>Cervical Cancer Screening</h3>
                <p>Pap smears starting at age 21, with frequency based on age and results</p>
              </div>
              <div className={styles.screeningCard}>
                <h3>Breast Cancer Screening</h3>
                <p>Clinical breast exams and mammogram referrals based on age and risk factors</p>
              </div>
              <div className={styles.screeningCard}>
                <h3>Bone Density Testing</h3>
                <p>DEXA scans for osteoporosis screening, typically starting at menopause</p>
              </div>
              <div className={styles.screeningCard}>
                <h3>Heart Health Screening</h3>
                <p>Blood pressure, cholesterol, and cardiovascular risk assessment</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Common Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>When should I start having well-woman exams?</h3>
                <p>We recommend starting annual exams at age 21 or when sexually active, whichever comes first.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What happens during a well-woman exam?</h3>
                <p>Includes health history, physical exam, preventive screenings, and discussion of any concerns.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you provide prenatal care?</h3>
                <p>We offer preconception counseling and early pregnancy care, with referrals for ongoing prenatal care.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I discuss menopause symptoms?</h3>
                <p>Absolutely! We specialize in menopause management and can help you navigate this transition comfortably.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Partner in Women's Health</h2>
            <p className={styles.sectionText}>
              Dr. Tess Garcia is passionate about empowering women to take charge of their health. With expertise in all aspects of women's health, she provides compassionate, comprehensive care that addresses your unique needs at every life stage.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Schedule Women's Health Visit
              </Link>
              <Link href="/care/pelvichealth" className={styles.secondaryButton}>
                Learn About Pelvic Health
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