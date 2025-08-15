'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function PreventiveCarePage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Preventive Care
            </nav>
            <h1 className={styles.articleTitle}>Preventive Care: Your First Line of Defense Against Disease</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Reviewed by: Dr. Tess Garcia, MD</span>
              <span>Reading Time: 12 minutes</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>On This Page</h2>
            <ul className={styles.tocList}>
              <li><a href="#overview">Understanding Preventive Care</a></li>
              <li><a href="#types">Types of Prevention</a></li>
              <li><a href="#screenings">Essential Health Screenings</a></li>
              <li><a href="#immunizations">Vaccination Schedule</a></li>
              <li><a href="#lifestyle">Lifestyle Prevention</a></li>
              <li><a href="#guidelines">Age-Based Guidelines</a></li>
              <li><a href="#barriers">Overcoming Barriers</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>Understanding Preventive Care</h2>
            <p className={styles.leadText}>
              Preventive care encompasses medical services that prevent diseases before they occur, detect health problems early when treatment is most effective, and manage conditions to prevent complications. Despite proven benefits, only 5.3% of adults receive all recommended preventive services, highlighting a critical gap in healthcare utilization.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Why Preventive Care Matters</h3>
              <ul className={styles.keyPointsList}>
                <li>Prevents 7 out of 10 deaths from chronic diseases</li>
                <li>Reduces healthcare costs by 33% through early intervention</li>
                <li>Improves quality of life and longevity</li>
                <li>Detects cancers when 90% more treatable</li>
                <li>Prevents 40% of deaths due to behavioral causes</li>
                <li>Saves $3.70 for every $1 spent on prevention</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>100%</h4>
                <p>Coverage for most preventive services under ACA</p>
              </div>
              <div className={styles.statCard}>
                <h4>75%</h4>
                <p>Of healthcare costs from preventable chronic diseases</p>
              </div>
              <div className={styles.statCard}>
                <h4>60,000</h4>
                <p>Excess deaths prevented annually with proper screening</p>
              </div>
            </div>
          </section>

          <section id="types" className={styles.section}>
            <h2 className={styles.sectionTitle}>Three Levels of Prevention</h2>
            <p className={styles.sectionText}>
              Preventive care operates at three distinct levels, each playing a crucial role in maintaining health and managing disease throughout your life.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Primary Prevention</h3>
                <ul>
                  <li>Immunizations and vaccinations</li>
                  <li>Healthy lifestyle counseling</li>
                  <li>Risk factor modification (smoking cessation, weight management)</li>
                  <li>Injury prevention education</li>
                  <li>Environmental health measures</li>
                  <li>Prenatal and newborn care</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Secondary Prevention</h3>
                <ul>
                  <li>Cancer screenings (mammograms, colonoscopy)</li>
                  <li>Blood pressure and cholesterol monitoring</li>
                  <li>Diabetes screening</li>
                  <li>Depression and mental health screening</li>
                  <li>Osteoporosis screening</li>
                  <li>Vision and hearing tests</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>Tertiary Prevention</h4>
              <p>
                Manages existing diseases to slow or stop progression, including chronic disease management programs, cardiac rehabilitation, diabetes management, and physical therapy to prevent disability.
              </p>
            </div>
          </section>

          <section id="screenings" className={styles.section}>
            <h2 className={styles.sectionTitle}>Essential Health Screenings (USPSTF 2024 Guidelines)</h2>
            <p className={styles.sectionText}>
              The U.S. Preventive Services Task Force (USPSTF) provides evidence-based recommendations for clinical preventive services. These A and B grade recommendations are covered without cost-sharing under the Affordable Care Act.
            </p>

            <h3 className={styles.subsectionTitle}>Cancer Screenings</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Breast Cancer (Updated 2024)</h3>
                <ul>
                  <li><strong>Ages 40-74:</strong> Mammography every 2 years</li>
                  <li>Earlier/more frequent for high-risk individuals</li>
                  <li>Clinical breast exams as recommended</li>
                  <li>Genetic counseling for BRCA mutations if indicated</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Cervical Cancer</h3>
                <ul>
                  <li><strong>Ages 21-29:</strong> Pap test every 3 years</li>
                  <li><strong>Ages 30-65:</strong> HPV test every 5 years (preferred)</li>
                  <li>Or Pap + HPV co-testing every 5 years</li>
                  <li>Or Pap test alone every 3 years</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Colorectal Cancer</h3>
                <ul>
                  <li><strong>Ages 45-75:</strong> Regular screening</li>
                  <li>Colonoscopy every 10 years</li>
                  <li>Or annual FIT/FOBT testing</li>
                  <li>Or flexible sigmoidoscopy every 5 years</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Lung Cancer</h3>
                <ul>
                  <li><strong>Ages 50-80:</strong> Annual low-dose CT scan</li>
                  <li>For 20+ pack-year smoking history</li>
                  <li>Current smokers or quit within 15 years</li>
                  <li>Shared decision-making recommended</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Cardiovascular Screenings</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Blood Pressure</h3>
                <ul>
                  <li><strong>Ages 18-39:</strong> Every 3-5 years if normal</li>
                  <li><strong>Ages 40+:</strong> Annually</li>
                  <li>More frequent if elevated or risk factors</li>
                  <li>Home monitoring for diagnosed hypertension</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Cholesterol & Lipids</h3>
                <ul>
                  <li><strong>Men 35+:</strong> Regular screening</li>
                  <li><strong>Women 45+:</strong> Regular screening</li>
                  <li>Earlier if risk factors present</li>
                  <li>Every 5 years if normal, more often if abnormal</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="immunizations" className={styles.section}>
            <h2 className={styles.sectionTitle}>CDC Immunization Schedule 2024-2025</h2>
            <p className={styles.sectionText}>
              Vaccines are one of the most effective preventive care tools, preventing millions of deaths annually. The CDC's Advisory Committee on Immunization Practices (ACIP) updates recommendations yearly.
            </p>

            <h3 className={styles.subsectionTitle}>Adult Immunizations</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Annual Vaccines</h3>
                <ul>
                  <li><strong>Influenza:</strong> Every year for all adults</li>
                  <li><strong>COVID-19:</strong> Updated boosters as recommended</li>
                  <li>Especially important for 65+, pregnant, chronic conditions</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Age-Based Vaccines</h3>
                <ul>
                  <li><strong>Shingles (Shingrix):</strong> Ages 50+ (2 doses)</li>
                  <li><strong>Pneumococcal:</strong> Ages 65+ or high risk</li>
                  <li><strong>RSV:</strong> Ages 60+ (shared decision-making)</li>
                  <li><strong>Tdap/Td:</strong> Every 10 years</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Childhood & Adolescent Vaccines</h3>
            <div className={styles.keyPoints}>
              <h3>Birth to 18 Years Schedule</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Birth-2 months:</strong> Hepatitis B, RSV prevention</li>
                <li><strong>2-6 months:</strong> DTaP, IPV, Hib, PCV, Rotavirus</li>
                <li><strong>12-15 months:</strong> MMR, Varicella, Hepatitis A</li>
                <li><strong>4-6 years:</strong> Booster doses for school entry</li>
                <li><strong>11-12 years:</strong> HPV, Tdap, Meningococcal</li>
                <li><strong>16-18 years:</strong> Meningococcal booster, catch-up vaccines</li>
              </ul>
            </div>

            <div className={styles.warningBox}>
              <h4>HPV Vaccination Impact</h4>
              <p>
                HPV vaccination substantially reduces cervical cancer risk by up to 90%. Recommended for all adolescents at ages 11-12, can start at age 9, and catch-up vaccination through age 26.
              </p>
            </div>
          </section>

          <section id="lifestyle" className={styles.section}>
            <h2 className={styles.sectionTitle}>Lifestyle Prevention Strategies</h2>
            <p className={styles.sectionText}>
              Nearly 40% of all deaths in the United States are due to behavioral causes. Lifestyle modifications remain the most powerful preventive interventions, often more effective than medications.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Nutrition & Diet</h3>
                <ul>
                  <li>Mediterranean or DASH diet patterns</li>
                  <li>5-9 servings of fruits and vegetables daily</li>
                  <li>Whole grains over refined carbohydrates</li>
                  <li>Limit processed foods and added sugars</li>
                  <li>Moderate alcohol consumption or abstinence</li>
                  <li>Adequate hydration (8+ glasses water daily)</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Physical Activity</h3>
                <ul>
                  <li>150 minutes moderate aerobic activity weekly</li>
                  <li>Or 75 minutes vigorous activity weekly</li>
                  <li>Strength training 2+ days per week</li>
                  <li>Balance exercises for older adults</li>
                  <li>Reduce sedentary time, stand hourly</li>
                  <li>10,000 steps daily goal</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Behavioral Risk Factors to Address</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Tobacco use:</strong> Leading preventable cause of death</li>
                <li><strong>Obesity:</strong> Affects 42% of adults, increases chronic disease risk</li>
                <li><strong>Physical inactivity:</strong> 4th leading risk factor for mortality</li>
                <li><strong>Poor diet:</strong> Contributes to 678,000 deaths annually</li>
                <li><strong>Excessive alcohol:</strong> 95,000 deaths per year</li>
                <li><strong>Inadequate sleep:</strong> Less than 7 hours increases disease risk</li>
              </ul>
            </div>
          </section>

          <section id="guidelines" className={styles.section}>
            <h2 className={styles.sectionTitle}>Age-Based Preventive Care Guidelines</h2>
            <p className={styles.sectionText}>
              Preventive care needs change throughout life. These evidence-based recommendations help ensure you receive appropriate care at every stage.
            </p>

            <h3 className={styles.subsectionTitle}>Young Adults (18-39 years)</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Routine Screenings</h3>
                <ul>
                  <li>Blood pressure every 2-3 years</li>
                  <li>Cholesterol check at least once</li>
                  <li>HIV screening at least once</li>
                  <li>Depression screening</li>
                  <li>Skin cancer examination</li>
                  <li>Dental cleaning twice yearly</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Gender-Specific</h3>
                <ul>
                  <li><strong>Women:</strong> Pap smear starting age 21</li>
                  <li>Pregnancy planning counseling</li>
                  <li>STI screening if sexually active</li>
                  <li><strong>Men:</strong> Testicular self-exams</li>
                  <li>Mental health assessment</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Middle Age (40-64 years)</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Enhanced Screening</h3>
                <ul>
                  <li>Annual blood pressure checks</li>
                  <li>Diabetes screening every 3 years</li>
                  <li>Mammography every 2 years (women 40+)</li>
                  <li>Colonoscopy starting at 45</li>
                  <li>Lung cancer screening if eligible</li>
                  <li>Hepatitis C screening once</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Risk Assessment</h3>
                <ul>
                  <li>Cardiovascular risk calculation</li>
                  <li>Osteoporosis risk evaluation</li>
                  <li>Prostate cancer discussion (men 50+)</li>
                  <li>Family history review</li>
                  <li>Medication review</li>
                  <li>Vision and hearing tests</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Older Adults (65+ years)</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Comprehensive Care</h3>
                <ul>
                  <li>Annual Medicare wellness visit</li>
                  <li>Cognitive assessment</li>
                  <li>Fall risk evaluation</li>
                  <li>Bone density testing</li>
                  <li>Abdominal aortic aneurysm screening</li>
                  <li>Polypharmacy review</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Additional Vaccines</h3>
                <ul>
                  <li>Pneumococcal vaccines</li>
                  <li>Shingles vaccine</li>
                  <li>High-dose flu vaccine</li>
                  <li>RSV vaccine consideration</li>
                  <li>COVID-19 boosters</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="barriers" className={styles.section}>
            <h2 className={styles.sectionTitle}>Overcoming Barriers to Preventive Care</h2>
            <p className={styles.sectionText}>
              Despite proven benefits, many people don't receive recommended preventive services. Understanding and addressing these barriers is crucial for improving health outcomes.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Common Barriers</h3>
                <ul>
                  <li>Cost concerns (even with insurance coverage)</li>
                  <li>Lack of primary care provider</li>
                  <li>Geographic distance from providers</li>
                  <li>Limited awareness of recommendations</li>
                  <li>Time constraints and work schedules</li>
                  <li>Fear or anxiety about medical procedures</li>
                  <li>Cultural or language barriers</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Solutions & Resources</h3>
                <ul>
                  <li>Most preventive services covered 100% by insurance</li>
                  <li>Community health centers for uninsured</li>
                  <li>Telemedicine for remote consultations</li>
                  <li>Mobile health screening units</li>
                  <li>Workplace wellness programs</li>
                  <li>Patient navigators for guidance</li>
                  <li>Multilingual health resources</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>Know Your Rights</h4>
              <p>
                Under the Affordable Care Act, insurance plans must cover USPSTF A and B rated preventive services without charging copayments, coinsurance, or deductibles when delivered by in-network providers.
              </p>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>What's the difference between a preventive visit and a sick visit?</h3>
                <p>
                  Preventive visits focus on screenings, vaccinations, and health maintenance when you're well. Sick visits address specific symptoms or health concerns. Mixing both in one visit may result in additional charges.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Which preventive services are covered at no cost?</h3>
                <p>
                  All USPSTF A and B recommended services, ACIP-recommended vaccines, and women's preventive services are covered without cost-sharing by most insurance plans when using in-network providers.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I get all my screenings done at once?</h3>
                <p>
                  Many screenings can be combined during your annual wellness visit. However, some tests like colonoscopy require separate appointments and special preparation.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What if I'm uninsured?</h3>
                <p>
                  Community health centers offer sliding-scale fees. Many hospitals have financial assistance programs. The CDC provides free or low-cost screenings through various programs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I know which screenings I need?</h3>
                <p>
                  Your primary care provider will recommend screenings based on your age, gender, family history, and risk factors. The USPSTF Prevention TaskForce app also provides personalized recommendations.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Should I get genetic testing?</h3>
                <p>
                  Genetic testing is recommended for specific conditions based on family history and risk factors. Discuss with your provider whether genetic counseling would benefit you.
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className={styles.resourcesSection}>
            <h2 className={styles.sectionTitle}>Additional Resources</h2>
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <h4>Official Guidelines</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.uspreventiveservicestaskforce.org" target="_blank" rel="noopener">USPSTF Recommendations</a></li>
                  <li><a href="https://www.cdc.gov/vaccines/schedules/" target="_blank" rel="noopener">CDC Vaccine Schedules</a></li>
                  <li><a href="https://www.healthcare.gov/preventive-care-benefits/" target="_blank" rel="noopener">HealthCare.gov Prevention</a></li>
                </ul>
              </div>
              <div className={styles.resourceCard}>
                <h4>Tools & Apps</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.uspreventiveservicestaskforce.org/webview/" target="_blank" rel="noopener">Prevention TaskForce App</a></li>
                  <li><a href="https://www.cdc.gov/vaccines/schedules/easy-to-read/index.html" target="_blank" rel="noopener">Easy Vaccine Schedules</a></li>
                  <li><a href="https://www.immunize.org" target="_blank" rel="noopener">Immunize.org Resources</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className={styles.relatedLinks}>
            <h3 className={styles.relatedLinksTitle}>Related Health Topics</h3>
            <div className={styles.relatedGrid}>
              <Link href="/learn/wellness-exams" className={styles.relatedCard}>
                <h4>Wellness Exams</h4>
                <p>What to expect at your annual check-up</p>
              </Link>
              <Link href="/learn/primary-care" className={styles.relatedCard}>
                <h4>Primary Care</h4>
                <p>Your healthcare foundation</p>
              </Link>
              <Link href="/learn/chronic-disease" className={styles.relatedCard}>
                <h4>Chronic Disease</h4>
                <p>Prevention and management strategies</p>
              </Link>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  )
}