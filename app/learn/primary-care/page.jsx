'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function PrimaryCareePage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Primary Care
            </nav>
            <h1 className={styles.articleTitle}>Primary Care: Your Foundation for Lifelong Health</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Reviewed by: Dr. Tess Garcia, MD</span>
              <span>Reading Time: 10 minutes</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>On This Page</h2>
            <ul className={styles.tocList}>
              <li><a href="#overview">What is Primary Care?</a></li>
              <li><a href="#medical-home">The Medical Home Model</a></li>
              <li><a href="#services">Core Services</a></li>
              <li><a href="#benefits">Health & Economic Benefits</a></li>
              <li><a href="#coordination">Care Coordination</a></li>
              <li><a href="#choosing">Choosing a Primary Care Provider</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>What is Primary Care?</h2>
            <p className={styles.leadText}>
              Primary care is your first point of contact with the healthcare system and serves as the foundation for your overall health and well-being. It encompasses comprehensive, continuous, and coordinated medical care that addresses the majority of your personal health needs while developing a sustained partnership with you and your family.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Essential Elements of Primary Care</h3>
              <ul className={styles.keyPointsList}>
                <li>First-contact access for all health concerns</li>
                <li>Comprehensive care for physical and mental health needs</li>
                <li>Continuity through long-term patient-provider relationships</li>
                <li>Coordination across all healthcare settings and specialties</li>
                <li>Focus on prevention and early disease detection</li>
                <li>Whole-person care considering social and environmental factors</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>40%</h4>
                <p>Reduction in premature deaths with regular primary care</p>
              </div>
              <div className={styles.statCard}>
                <h4>33%</h4>
                <p>Lower healthcare costs through preventive care</p>
              </div>
              <div className={styles.statCard}>
                <h4>25%</h4>
                <p>Fewer emergency department visits</p>
              </div>
            </div>
          </section>

          <section id="medical-home" className={styles.section}>
            <h2 className={styles.sectionTitle}>The Patient-Centered Medical Home Model</h2>
            <p className={styles.sectionText}>
              Modern primary care practices operate as Patient-Centered Medical Homes (PCMH), a care delivery model that transforms how primary care is organized and delivered. This approach puts you at the center of your healthcare journey, ensuring comprehensive, coordinated care that meets your unique needs.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>PCMH Core Features</h3>
                <ul>
                  <li>Team-based care with multiple healthcare professionals</li>
                  <li>Enhanced access through extended hours and online portals</li>
                  <li>Comprehensive care management for all conditions</li>
                  <li>Care coordination across all healthcare settings</li>
                  <li>Quality and safety focus with evidence-based practices</li>
                  <li>Patient and family engagement in care decisions</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Your Healthcare Team</h3>
                <ul>
                  <li>Primary care physician or nurse practitioner</li>
                  <li>Registered nurses and medical assistants</li>
                  <li>Care coordinators and case managers</li>
                  <li>Clinical pharmacists</li>
                  <li>Behavioral health specialists</li>
                  <li>Nutritionists and health educators</li>
                  <li>Social workers and community health workers</li>
                </ul>
              </div>
            </div>

            <p className={styles.sectionText}>
              Studies show that PCMH practices achieve 20% better management of chronic conditions, increase patient satisfaction by 35%, and reduce staff burnout by more than 20% while improving quality of care.
            </p>
          </section>

          <section id="services" className={styles.section}>
            <h2 className={styles.sectionTitle}>Core Primary Care Services</h2>
            <p className={styles.sectionText}>
              Primary care addresses approximately 90% of all healthcare needs throughout your life. Your primary care provider offers a comprehensive range of services designed to keep you healthy, detect problems early, and manage ongoing conditions.
            </p>

            <h3 className={styles.subsectionTitle}>Preventive Services</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Health Screenings</h3>
                <ul>
                  <li>Annual wellness examinations</li>
                  <li>Blood pressure and cholesterol checks</li>
                  <li>Cancer screenings (breast, cervical, colorectal, skin)</li>
                  <li>Diabetes and prediabetes screening</li>
                  <li>Depression and mental health assessments</li>
                  <li>Osteoporosis screening</li>
                  <li>Vision and hearing tests</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Immunizations & Prevention</h3>
                <ul>
                  <li>Routine childhood vaccinations</li>
                  <li>Annual flu shots</li>
                  <li>COVID-19 vaccinations and boosters</li>
                  <li>Travel immunizations</li>
                  <li>Lifestyle counseling (diet, exercise, smoking cessation)</li>
                  <li>Risk factor modification</li>
                  <li>Injury prevention education</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Acute Care Services</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Common Conditions Treated</h3>
                <ul>
                  <li>Respiratory infections (cold, flu, bronchitis)</li>
                  <li>Ear, nose, and throat infections</li>
                  <li>Urinary tract infections</li>
                  <li>Skin conditions and minor wounds</li>
                  <li>Digestive issues</li>
                  <li>Minor injuries and sprains</li>
                  <li>Allergic reactions</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Same-Day Services</h3>
                <ul>
                  <li>Urgent sick visits</li>
                  <li>Minor surgical procedures</li>
                  <li>Wound care and suturing</li>
                  <li>Joint injections</li>
                  <li>Rapid diagnostic testing</li>
                  <li>Emergency contraception</li>
                  <li>Acute pain management</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="benefits" className={styles.section}>
            <h2 className={styles.sectionTitle}>Health & Economic Benefits</h2>
            <p className={styles.sectionText}>
              Research consistently demonstrates that regular primary care leads to better health outcomes, lower costs, and improved quality of life. The benefits extend beyond individual health to positively impact families and communities.
            </p>

            <div className={styles.keyPoints}>
              <h3>Evidence-Based Outcomes</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>19% lower risk</strong> of premature death with regular primary care</li>
                <li><strong>60,000 fewer</strong> excess deaths annually with adequate preventive services</li>
                <li><strong>7 in 10 deaths</strong> from chronic diseases are preventable with proper care</li>
                <li><strong>40% of deaths</strong> due to behavioral causes can be prevented</li>
                <li><strong>75% of healthcare spending</strong> on chronic diseases can be reduced through prevention</li>
                <li><strong>Better outcomes</strong> for diabetes, hypertension, and heart disease management</li>
              </ul>
            </div>

            <div className={styles.warningBox}>
              <h4>Current Challenge</h4>
              <p>
                Despite proven benefits, only 5.3% of adults received all recommended preventive services in 2020, and primary care receives just 0.3% of federal research funding. Increasing primary care access and utilization remains a critical public health priority.
              </p>
            </div>
          </section>

          <section id="coordination" className={styles.section}>
            <h2 className={styles.sectionTitle}>Care Coordination Excellence</h2>
            <p className={styles.sectionText}>
              Your primary care provider serves as the quarterback of your healthcare team, coordinating care across all settings and ensuring nothing falls through the cracks. This coordination is especially critical during transitions, such as hospital discharges or when multiple specialists are involved.
            </p>

            <h3 className={styles.subsectionTitle}>Coordination Services</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Medical Coordination</h3>
                <ul>
                  <li>Specialist referrals and follow-up</li>
                  <li>Hospital admission and discharge planning</li>
                  <li>Laboratory and imaging result management</li>
                  <li>Medication reconciliation and management</li>
                  <li>Electronic health record integration</li>
                  <li>Care plan development and monitoring</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Comprehensive Support</h3>
                <ul>
                  <li>Home health care arrangements</li>
                  <li>Physical therapy and rehabilitation</li>
                  <li>Mental health services integration</li>
                  <li>Social services coordination</li>
                  <li>Community resource connections</li>
                  <li>Insurance navigation assistance</li>
                </ul>
              </div>
            </div>

            <p className={styles.sectionText}>
              Effective care coordination reduces emergency visits by 25%, prevents medication errors, improves chronic disease outcomes, and enhances patient satisfaction while reducing overall healthcare costs.
            </p>
          </section>

          <section id="choosing" className={styles.section}>
            <h2 className={styles.sectionTitle}>Choosing a Primary Care Provider</h2>
            <p className={styles.sectionText}>
              Selecting the right primary care provider is one of the most important healthcare decisions you'll make. Consider these factors when choosing a provider who will be your long-term health partner.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Provider Types</h3>
                <ul>
                  <li><strong>Family Medicine:</strong> All ages, comprehensive care</li>
                  <li><strong>Internal Medicine:</strong> Adults 18+, complex conditions</li>
                  <li><strong>Pediatrics:</strong> Infants through adolescents</li>
                  <li><strong>OB/GYN:</strong> Women's reproductive health</li>
                  <li><strong>Nurse Practitioners:</strong> All ages, holistic approach</li>
                  <li><strong>Physician Assistants:</strong> Collaborative care model</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Selection Criteria</h3>
                <ul>
                  <li>Board certification and credentials</li>
                  <li>Insurance acceptance and network status</li>
                  <li>Location and office hours convenience</li>
                  <li>Communication style and bedside manner</li>
                  <li>Electronic health record and portal access</li>
                  <li>Same-day appointment availability</li>
                  <li>Hospital affiliations</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>How often should I see my primary care provider?</h3>
                <p>
                  Healthy adults should have annual wellness visits. Those with chronic conditions may need visits every 3-6 months. Children need more frequent visits in early years according to pediatric schedules.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What's the difference between primary care and urgent care?</h3>
                <p>
                  Primary care provides ongoing, comprehensive healthcare including prevention and chronic disease management. Urgent care handles immediate, non-emergency medical issues when your primary care provider isn't available.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I see a specialist without a primary care referral?</h3>
                <p>
                  This depends on your insurance plan. Many HMO plans require referrals, while PPO plans often allow direct specialist access. However, coordination through primary care typically leads to better outcomes.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What preventive services are covered at no cost?</h3>
                <p>
                  Under the Affordable Care Act, most insurance plans cover preventive services like annual check-ups, vaccinations, and screenings without copays or deductibles when using in-network providers.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I prepare for my first primary care visit?</h3>
                <p>
                  Bring your insurance cards, photo ID, complete medical history, list of current medications and supplements, family health history, and a list of questions or health concerns to discuss.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What if I need care after hours?</h3>
                <p>
                  Many primary care practices offer extended hours, weekend appointments, or 24/7 nurse hotlines. For urgent issues, same-day appointments or urgent care may be appropriate. For emergencies, always call 911.
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className={styles.resourcesSection}>
            <h2 className={styles.sectionTitle}>Additional Resources</h2>
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <h4>Government Resources</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.healthcare.gov/coverage/preventive-care-benefits/" target="_blank" rel="noopener">HealthCare.gov Preventive Services</a></li>
                  <li><a href="https://www.ahrq.gov/ncepcr/research/care-coordination/pcmh/index.html" target="_blank" rel="noopener">AHRQ Medical Home Resources</a></li>
                  <li><a href="https://odphp.health.gov/healthypeople" target="_blank" rel="noopener">Healthy People 2030</a></li>
                </ul>
              </div>
              <div className={styles.resourceCard}>
                <h4>Professional Organizations</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.ncqa.org/programs/health-care-providers-practices/patient-centered-medical-home-pcmh/" target="_blank" rel="noopener">NCQA Patient-Centered Medical Home</a></li>
                  <li><a href="https://www.milbank.org" target="_blank" rel="noopener">Milbank Memorial Fund</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className={styles.relatedLinks}>
            <h3 className={styles.relatedLinksTitle}>Related Health Topics</h3>
            <div className={styles.relatedGrid}>
              <Link href="/learn/preventive-care" className={styles.relatedCard}>
                <h4>Preventive Care</h4>
                <p>Essential screenings and prevention strategies</p>
              </Link>
              <Link href="/learn/family-medicine" className={styles.relatedCard}>
                <h4>Family Medicine</h4>
                <p>Comprehensive care for all ages</p>
              </Link>
              <Link href="/learn/wellness-exams" className={styles.relatedCard}>
                <h4>Wellness Exams</h4>
                <p>What to expect at your annual check-up</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}