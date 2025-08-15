'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function FamilyMedicinePage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Family Medicine
            </nav>
            <h1 className={styles.articleTitle}>Family Medicine: Comprehensive Healthcare Across All Ages</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Reviewed by: Dr. Tess Garcia, MD</span>
              <span>Reading Time: 8 minutes</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>On This Page</h2>
            <ul className={styles.tocList}>
              <li><a href="#overview">What is Family Medicine?</a></li>
              <li><a href="#training">Training & Qualifications</a></li>
              <li><a href="#scope">Scope of Practice</a></li>
              <li><a href="#benefits">Benefits of Family Medicine</a></li>
              <li><a href="#conditions">Conditions Treated</a></li>
              <li><a href="#when-to-see">When to See a Family Physician</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>What is Family Medicine?</h2>
            <p className={styles.leadText}>
              Family Medicine is a medical specialty devoted to comprehensive healthcare for people of all ages. Unlike other specialties that limit care to specific organs, diseases, or age groups, family physicians are trained to care for the whole person throughout their entire life.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Key Characteristics of Family Medicine</h3>
              <ul className={styles.keyPointsList}>
                <li>Provides continuous, comprehensive care from birth through end of life</li>
                <li>Treats 90% of all healthcare concerns in one location</li>
                <li>Emphasizes disease prevention and health promotion</li>
                <li>Coordinates care across multiple specialties when needed</li>
                <li>Considers patients in the context of family and community</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>209,000+</h4>
                <p>Family physicians practicing in the US</p>
              </div>
              <div className={styles.statCard}>
                <h4>25%</h4>
                <p>Lower healthcare costs with regular primary care</p>
              </div>
              <div className={styles.statCard}>
                <h4>33%</h4>
                <p>Fewer hospitalizations with family physician care</p>
              </div>
            </div>
          </section>

          <section id="training" className={styles.section}>
            <h2 className={styles.sectionTitle}>Training & Qualifications</h2>
            <p className={styles.sectionText}>
              Family physicians undergo extensive training to provide comprehensive care across all ages and conditions. Their education prepares them to diagnose and treat a wide variety of ailments while maintaining a holistic view of patient health.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Medical Education Path</h3>
                <ul>
                  <li>4 years undergraduate education (Bachelor's degree)</li>
                  <li>4 years medical school (MD or DO degree)</li>
                  <li>3 years family medicine residency training</li>
                  <li>Board certification examination</li>
                  <li>Ongoing continuing medical education (150+ hours every 3 years)</li>
                  <li>Board recertification every 10 years</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Residency Training Areas</h3>
                <ul>
                  <li>Adult medicine and geriatrics</li>
                  <li>Pediatrics and adolescent medicine</li>
                  <li>Women's health and obstetrics</li>
                  <li>Mental and behavioral health</li>
                  <li>Emergency and urgent care</li>
                  <li>Minor surgical procedures</li>
                  <li>Sports medicine and musculoskeletal care</li>
                </ul>
              </div>
            </div>

            <p className={styles.sectionText}>
              Many family physicians pursue additional fellowship training in areas such as sports medicine, geriatrics, obstetrics, or palliative care to further specialize while maintaining their comprehensive practice approach.
            </p>
          </section>

          <section id="scope" className={styles.section}>
            <h2 className={styles.sectionTitle}>Scope of Practice</h2>
            <p className={styles.sectionText}>
              Family physicians provide a remarkably broad range of services, serving as the primary healthcare provider for individuals and families. Their scope encompasses preventive care, acute and chronic disease management, and coordination of specialty care when needed.
            </p>

            <h3 className={styles.subsectionTitle}>Services by Life Stage</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Pediatric & Adolescent Care</h3>
                <ul>
                  <li>Newborn care and well-child visits</li>
                  <li>Immunizations and developmental screening</li>
                  <li>School and sports physicals</li>
                  <li>ADHD and behavioral assessments</li>
                  <li>Adolescent health counseling</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Adult & Geriatric Care</h3>
                <ul>
                  <li>Annual wellness examinations</li>
                  <li>Chronic disease management</li>
                  <li>Mental health screening and treatment</li>
                  <li>Medicare wellness visits</li>
                  <li>Medication management and polypharmacy review</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Common Procedures</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Office Procedures</h3>
                <ul>
                  <li>Skin biopsies and lesion removal</li>
                  <li>Joint injections and aspirations</li>
                  <li>Laceration repair and wound care</li>
                  <li>Incision and drainage of abscesses</li>
                  <li>Cryotherapy for warts and skin lesions</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Diagnostic Services</h3>
                <ul>
                  <li>EKG and cardiac monitoring</li>
                  <li>Pulmonary function testing</li>
                  <li>Point-of-care ultrasound</li>
                  <li>Laboratory testing and interpretation</li>
                  <li>Cognitive and depression screening</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="benefits" className={styles.section}>
            <h2 className={styles.sectionTitle}>Benefits of Family Medicine</h2>
            <p className={styles.sectionText}>
              Research consistently demonstrates that having a family physician as your primary care provider leads to better health outcomes, lower costs, and improved patient satisfaction.
            </p>

            <div className={styles.keyPoints}>
              <h3>Evidence-Based Benefits</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>19% lower risk</strong> of premature death for adults with primary care</li>
                <li><strong>33% reduction</strong> in healthcare costs through preventive care</li>
                <li><strong>25% fewer</strong> emergency department visits</li>
                <li><strong>Better management</strong> of chronic conditions like diabetes and hypertension</li>
                <li><strong>Higher rates</strong> of cancer screening and early detection</li>
                <li><strong>Improved coordination</strong> when specialist care is needed</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>The Patient-Centered Medical Home Model</h3>
            <p className={styles.sectionText}>
              Modern family medicine practices operate as Patient-Centered Medical Homes (PCMH), providing coordinated, comprehensive care that puts patients at the center of their healthcare journey. This model has been shown to improve quality, enhance patient experience, and reduce costs.
            </p>
          </section>

          <section id="conditions" className={styles.section}>
            <h2 className={styles.sectionTitle}>Conditions Commonly Treated</h2>
            <p className={styles.sectionText}>
              Family physicians diagnose and treat a wide variety of acute and chronic conditions, providing both immediate care and long-term disease management.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Acute Conditions</h3>
                <ul>
                  <li>Upper respiratory infections (cold, flu, bronchitis)</li>
                  <li>Ear and sinus infections</li>
                  <li>Urinary tract infections</li>
                  <li>Skin infections and rashes</li>
                  <li>Minor injuries and fractures</li>
                  <li>Gastrointestinal issues</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Chronic Diseases</h3>
                <ul>
                  <li>Diabetes mellitus (Type 1 and 2)</li>
                  <li>Hypertension (high blood pressure)</li>
                  <li>Asthma and COPD</li>
                  <li>Heart disease and high cholesterol</li>
                  <li>Arthritis and chronic pain</li>
                  <li>Depression and anxiety disorders</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>Important Note</h4>
              <p>
                While family physicians treat most health conditions, they recognize when specialized care is needed and coordinate referrals to ensure you receive appropriate treatment from the right specialist at the right time.
              </p>
            </div>
          </section>

          <section id="when-to-see" className={styles.section}>
            <h2 className={styles.sectionTitle}>When to See a Family Physician</h2>
            
            <h3 className={styles.subsectionTitle}>Regular Preventive Care</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Annual Wellness Visits</h3>
                <ul>
                  <li>Adults 18-39: Every 2-3 years if healthy</li>
                  <li>Adults 40-65: Annually</li>
                  <li>Adults 65+: Annual Medicare wellness visits</li>
                  <li>Children: Per AAP schedule (frequent in first 2 years)</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Screening Schedule</h3>
                <ul>
                  <li>Blood pressure: Every 1-2 years</li>
                  <li>Cholesterol: Every 4-6 years (more often if risk factors)</li>
                  <li>Diabetes: Every 3 years after age 35</li>
                  <li>Cancer screenings: Per USPSTF guidelines</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Seek Immediate Care For</h3>
            <ul className={styles.keyPointsList}>
              <li>New or worsening symptoms lasting more than a few days</li>
              <li>Chronic condition changes or medication concerns</li>
              <li>Mental health issues including depression or anxiety</li>
              <li>Preventive care and health maintenance</li>
              <li>Second opinions or care coordination</li>
            </ul>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>How is a family physician different from an internist?</h3>
                <p>
                  Family physicians care for patients of all ages from birth through end of life, while internists typically care for adults 18 and older. Family physicians also receive training in pediatrics, obstetrics, and minor surgery.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can a family physician be my child's doctor too?</h3>
                <p>
                  Yes! Family physicians are fully trained in pediatric care and can serve as the primary care provider for your entire family, from newborns through seniors, in one convenient location.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I need a referral to see a specialist?</h3>
                <p>
                  This depends on your insurance plan. Many plans require a referral from your primary care physician. Your family physician can coordinate referrals and ensure specialists have your complete health history.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What should I bring to my first appointment?</h3>
                <p>
                  Bring your insurance cards, photo ID, list of current medications, any recent test results, family health history, and a list of questions or concerns you want to discuss.
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className={styles.resourcesSection}>
            <h2 className={styles.sectionTitle}>Additional Resources</h2>
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <h4>Professional Organizations</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.aafp.org" target="_blank" rel="noopener">American Academy of Family Physicians</a></li>
                  <li><a href="https://www.theabfm.org" target="_blank" rel="noopener">American Board of Family Medicine</a></li>
                </ul>
              </div>
              <div className={styles.resourceCard}>
                <h4>Patient Resources</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://familydoctor.org" target="_blank" rel="noopener">FamilyDoctor.org Health Information</a></li>
                  <li><a href="https://www.cdc.gov/family/index.htm" target="_blank" rel="noopener">CDC Family Health Resources</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className={styles.relatedLinks}>
            <h3 className={styles.relatedLinksTitle}>Related Health Topics</h3>
            <div className={styles.relatedGrid}>
              <Link href="/learn/primary-care" className={styles.relatedCard}>
                <h4>Primary Care</h4>
                <p>Learn about the foundation of healthcare</p>
              </Link>
              <Link href="/learn/preventive-care" className={styles.relatedCard}>
                <h4>Preventive Care</h4>
                <p>Disease prevention and health screening</p>
              </Link>
              <Link href="/learn/chronic-disease" className={styles.relatedCard}>
                <h4>Chronic Disease Management</h4>
                <p>Managing long-term health conditions</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}