'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function WellnessExamsPage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Wellness Exams
            </nav>
            <h1 className={styles.articleTitle}>Wellness Exams: Your Comprehensive Guide to Annual Check-ups</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Reviewed by: Dr. Tess Garcia, MD</span>
              <span>Reading Time: 11 minutes</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>On This Page</h2>
            <ul className={styles.tocList}>
              <li><a href="#overview">What is a Wellness Exam?</a></li>
              <li><a href="#medicare">Medicare Wellness Visits</a></li>
              <li><a href="#components">Exam Components</a></li>
              <li><a href="#age-specific">Age-Specific Guidelines</a></li>
              <li><a href="#preparation">How to Prepare</a></li>
              <li><a href="#what-to-expect">What to Expect</a></li>
              <li><a href="#after-visit">After Your Visit</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>What is a Wellness Exam?</h2>
            <p className={styles.leadText}>
              A wellness exam, also known as an annual physical or preventive care visit, is a comprehensive health assessment designed to maintain your well-being, detect potential health issues early, and establish a personalized prevention plan. Unlike sick visits that address specific symptoms, wellness exams focus on prevention and early detection when you're feeling healthy.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Key Purposes of Wellness Exams</h3>
              <ul className={styles.keyPointsList}>
                <li>Establish baseline health measurements and vital signs</li>
                <li>Screen for diseases before symptoms appear</li>
                <li>Update vaccinations and preventive care</li>
                <li>Assess risk factors and lifestyle habits</li>
                <li>Build relationship with your healthcare provider</li>
                <li>Create personalized prevention strategies</li>
                <li>Address health concerns and questions</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>Annual</h4>
                <p>Recommended frequency for most adults</p>
              </div>
              <div className={styles.statCard}>
                <h4>45-60 min</h4>
                <p>Typical wellness exam duration</p>
              </div>
              <div className={styles.statCard}>
                <h4>100%</h4>
                <p>Coverage for preventive services under most plans</p>
              </div>
            </div>
          </section>

          <section id="medicare" className={styles.section}>
            <h2 className={styles.sectionTitle}>Medicare Wellness Visits: Understanding Your Benefits</h2>
            <p className={styles.sectionText}>
              Medicare offers specific wellness benefits that differ from traditional physical exams. Understanding these differences helps you maximize your Medicare benefits and avoid unexpected costs.
            </p>

            <div className={styles.warningBox}>
              <h4>Important Distinction</h4>
              <p>
                Medicare does NOT cover routine physical exams. The Medicare Annual Wellness Visit (AWV) is a prevention-focused assessment, not a head-to-toe physical examination. Mixing wellness and physical exam services may result in additional charges.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Welcome to Medicare Visit</h3>
            <div className={styles.infoCard}>
              <h3>One-Time Benefit (First 12 Months)</h3>
              <ul>
                <li>Available within first 12 months of Medicare Part B</li>
                <li>Records medical and family history</li>
                <li>Evaluates current health conditions and medications</li>
                <li>Checks blood pressure, vision, weight, and height</li>
                <li>Reviews preventive screening schedule</li>
                <li>Provides education and counseling for preventive services</li>
                <li>No copay or deductible when provider accepts assignment</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Annual Wellness Visit (AWV)</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>What's Included</h3>
                <ul>
                  <li>Health Risk Assessment questionnaire</li>
                  <li>Review of medical and family history</li>
                  <li>List of current providers and medications</li>
                  <li>Routine measurements (height, weight, BMI, blood pressure)</li>
                  <li>Cognitive impairment assessment</li>
                  <li>Depression screening</li>
                  <li>Review of functional ability and safety</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>2024 Addition: SDOH Assessment</h3>
                <ul>
                  <li>Social Determinants of Health risk evaluation</li>
                  <li>Psychosocial risks (stress, loneliness, pain)</li>
                  <li>Behavioral risks (tobacco, alcohol, nutrition)</li>
                  <li>Activities of daily living assessment</li>
                  <li>Optional component at patient/provider discretion</li>
                  <li>No additional copay when done with AWV</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Your Personalized Prevention Plan Includes</h3>
              <ul className={styles.keyPointsList}>
                <li>Screening schedule for next 5-10 years</li>
                <li>List of risk factors and treatment options</li>
                <li>Checklist of preventive services needed</li>
                <li>Advance care planning discussion (optional)</li>
                <li>Referrals to specialists or programs as needed</li>
              </ul>
            </div>
          </section>

          <section id="components" className={styles.section}>
            <h2 className={styles.sectionTitle}>Components of a Comprehensive Wellness Exam</h2>
            <p className={styles.sectionText}>
              While Medicare wellness visits focus on prevention planning, traditional wellness exams (often covered by private insurance or paid out-of-pocket) include more comprehensive physical assessments.
            </p>

            <h3 className={styles.subsectionTitle}>Medical History Review</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Personal History</h3>
                <ul>
                  <li>Past medical conditions and surgeries</li>
                  <li>Current medications and supplements</li>
                  <li>Allergies and reactions</li>
                  <li>Immunization records</li>
                  <li>Previous hospitalizations</li>
                  <li>Mental health history</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Family History</h3>
                <ul>
                  <li>Hereditary conditions</li>
                  <li>Cancer history in family</li>
                  <li>Heart disease and stroke</li>
                  <li>Diabetes and metabolic conditions</li>
                  <li>Mental health conditions</li>
                  <li>Genetic disorders</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Physical Examination</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Vital Signs & Measurements</h3>
                <ul>
                  <li>Blood pressure and pulse</li>
                  <li>Temperature and respiratory rate</li>
                  <li>Height, weight, and BMI</li>
                  <li>Waist circumference</li>
                  <li>Oxygen saturation</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Systems Review</h3>
                <ul>
                  <li>Heart and lung examination</li>
                  <li>Abdominal assessment</li>
                  <li>Neurological screening</li>
                  <li>Skin examination</li>
                  <li>Musculoskeletal evaluation</li>
                  <li>Lymph node check</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Laboratory Tests</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Standard Blood Work</h3>
                <ul>
                  <li>Complete Blood Count (CBC)</li>
                  <li>Comprehensive Metabolic Panel (CMP)</li>
                  <li>Lipid panel (cholesterol)</li>
                  <li>Hemoglobin A1C (diabetes)</li>
                  <li>Thyroid function (TSH)</li>
                  <li>Vitamin D levels</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Additional Screenings</h3>
                <ul>
                  <li>Urinalysis</li>
                  <li>STI screening if indicated</li>
                  <li>Hepatitis C (one-time)</li>
                  <li>HIV testing</li>
                  <li>PSA for prostate (men)</li>
                  <li>Hormone levels if needed</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="age-specific" className={styles.section}>
            <h2 className={styles.sectionTitle}>Age-Specific Wellness Exam Guidelines</h2>
            <p className={styles.sectionText}>
              Wellness exam components and frequency vary based on age, with different focus areas for each life stage.
            </p>

            <h3 className={styles.subsectionTitle}>Pediatric Wellness (Birth-18 years)</h3>
            <div className={styles.infoCard}>
              <h3>Visit Schedule & Focus Areas</h3>
              <ul>
                <li><strong>First year:</strong> 7 visits for growth, development, feeding</li>
                <li><strong>1-3 years:</strong> Every 6 months for milestones, behavior</li>
                <li><strong>3-18 years:</strong> Annual visits for growth, school readiness</li>
                <li>Developmental screenings and autism assessment</li>
                <li>Vision, hearing, and dental checks</li>
                <li>School and sports physicals</li>
                <li>Adolescent risk assessment and counseling</li>
                <li>Complete vaccination series per CDC schedule</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Adult Wellness (19-64 years)</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Young Adults (19-39)</h3>
                <ul>
                  <li>Every 2-3 years if healthy</li>
                  <li>Annual if risk factors present</li>
                  <li>Focus on lifestyle habits</li>
                  <li>Reproductive health counseling</li>
                  <li>Mental health screening</li>
                  <li>STI and HIV testing</li>
                  <li>Baseline cholesterol check</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Middle Age (40-64)</h3>
                <ul>
                  <li>Annual wellness visits recommended</li>
                  <li>Cancer screening initiation</li>
                  <li>Cardiovascular risk assessment</li>
                  <li>Diabetes screening every 3 years</li>
                  <li>Bone density baseline (women)</li>
                  <li>Colonoscopy at 45</li>
                  <li>Mammography at 40</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Senior Wellness (65+ years)</h3>
            <div className={styles.infoCard}>
              <h3>Enhanced Focus Areas</h3>
              <ul>
                <li>Annual Medicare wellness visits</li>
                <li>Cognitive and memory assessment</li>
                <li>Fall risk evaluation and prevention</li>
                <li>Medication review and reconciliation</li>
                <li>Functional status assessment</li>
                <li>Advance care planning discussions</li>
                <li>Social isolation screening</li>
                <li>Nutritional assessment</li>
                <li>Hearing and vision testing</li>
                <li>Updated vaccination schedule (shingles, pneumonia, high-dose flu)</li>
              </ul>
            </div>
          </section>

          <section id="preparation" className={styles.section}>
            <h2 className={styles.sectionTitle}>How to Prepare for Your Wellness Exam</h2>
            <p className={styles.sectionText}>
              Proper preparation helps you get the most value from your wellness visit and ensures your provider has all necessary information.
            </p>

            <div className={styles.keyPoints}>
              <h3>Before Your Appointment</h3>
              <ul className={styles.keyPointsList}>
                <li>Fast for 8-12 hours if blood work is planned</li>
                <li>Continue regular medications unless instructed otherwise</li>
                <li>Gather medical records from other providers</li>
                <li>Update your medication and supplement list</li>
                <li>Write down questions and health concerns</li>
                <li>Complete any pre-visit questionnaires</li>
                <li>Arrange for someone to accompany you if needed</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>What to Bring</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Essential Documents</h3>
                <ul>
                  <li>Insurance cards (primary and secondary)</li>
                  <li>Photo identification</li>
                  <li>List of current medications with dosages</li>
                  <li>Immunization records</li>
                  <li>Recent test results or imaging</li>
                  <li>Specialist reports</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Health Information</h3>
                <ul>
                  <li>Family medical history updates</li>
                  <li>Symptom diary if applicable</li>
                  <li>Blood pressure or glucose logs</li>
                  <li>List of allergies and reactions</li>
                  <li>Healthcare proxy or advance directives</li>
                  <li>Questions for your provider</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="what-to-expect" className={styles.section}>
            <h2 className={styles.sectionTitle}>What to Expect During Your Visit</h2>
            <p className={styles.sectionText}>
              Understanding the flow of a wellness exam helps reduce anxiety and ensures you're prepared for each component.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Check-in Process (10 minutes)</h3>
                <ul>
                  <li>Verify insurance and demographic information</li>
                  <li>Update emergency contacts</li>
                  <li>Complete or review health questionnaires</li>
                  <li>Copay collection if applicable</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>With Medical Assistant (15 minutes)</h3>
                <ul>
                  <li>Vital signs measurement</li>
                  <li>Weight and height check</li>
                  <li>Medication reconciliation</li>
                  <li>Chief complaint or concerns</li>
                  <li>Prepare for provider examination</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Provider Examination (20-30 minutes)</h3>
                <ul>
                  <li>Review of medical history</li>
                  <li>Discussion of health concerns</li>
                  <li>Physical examination as appropriate</li>
                  <li>Review of preventive care needs</li>
                  <li>Treatment plan discussion</li>
                  <li>Questions and answers</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Wrap-up (5-10 minutes)</h3>
                <ul>
                  <li>Order laboratory tests or imaging</li>
                  <li>Schedule follow-up appointments</li>
                  <li>Provide educational materials</li>
                  <li>Referrals if needed</li>
                  <li>After-visit summary</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="after-visit" className={styles.section}>
            <h2 className={styles.sectionTitle}>After Your Wellness Visit</h2>
            <p className={styles.sectionText}>
              The work doesn't end when you leave the office. Follow-through on recommendations is crucial for maintaining optimal health.
            </p>

            <div className={styles.keyPoints}>
              <h3>Next Steps</h3>
              <ul className={styles.keyPointsList}>
                <li>Review your after-visit summary and prevention plan</li>
                <li>Schedule recommended screenings and specialist appointments</li>
                <li>Complete laboratory tests if ordered</li>
                <li>Fill new prescriptions or update medications</li>
                <li>Implement lifestyle recommendations</li>
                <li>Access test results through patient portal</li>
                <li>Follow up on any abnormal findings</li>
              </ul>
            </div>

            <div className={styles.warningBox}>
              <h4>When to Contact Your Provider</h4>
              <p>
                Call if you have questions about test results, experience side effects from new medications, need clarification on recommendations, or if new symptoms develop before your next scheduled visit.
              </p>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>What's the difference between a wellness exam and a sick visit?</h3>
                <p>
                  Wellness exams focus on prevention and health maintenance when you're feeling well. Sick visits address specific symptoms or acute health problems. Mixing both in one appointment may affect insurance coverage.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Will Medicare cover my annual physical?</h3>
                <p>
                  No, Medicare doesn't cover routine physical exams. It covers Annual Wellness Visits (AWV) which focus on prevention planning, not physical examination. Additional services during an AWV may incur charges.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How often should I have a wellness exam?</h3>
                <p>
                  Most adults benefit from annual wellness visits. Those under 30 without health issues might go every 2-3 years. Children need more frequent visits based on age. Your provider will recommend appropriate timing.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I need to fast before my wellness exam?</h3>
                <p>
                  Fasting for 8-12 hours is typically required if blood work includes glucose or lipid panels. Your provider's office will inform you when scheduling. You can usually take medications with water.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What if I need to discuss multiple health issues?</h3>
                <p>
                  Prioritize your top 3-4 concerns for the visit. Complex issues may require separate appointments. Let staff know when scheduling if you need extended time.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I decline certain parts of the exam?</h3>
                <p>
                  Yes, you can decline any examination or test. However, discuss with your provider as these recommendations are based on evidence-based guidelines for your health benefit.
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className={styles.resourcesSection}>
            <h2 className={styles.sectionTitle}>Additional Resources</h2>
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <h4>Medicare Resources</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.medicare.gov/coverage/yearly-wellness-visits" target="_blank" rel="noopener">Medicare Wellness Visits</a></li>
                  <li><a href="https://www.cms.gov/Outreach-and-Education/Medicare-Learning-Network-MLN/MLNProducts/preventive-services/medicare-wellness-visits.html" target="_blank" rel="noopener">CMS Wellness Visit Guide</a></li>
                </ul>
              </div>
              <div className={styles.resourceCard}>
                <h4>Prevention Guidelines</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.uspreventiveservicestaskforce.org" target="_blank" rel="noopener">USPSTF Recommendations</a></li>
                  <li><a href="https://www.aafp.org/family-physician/patient-care/clinical-recommendations.html" target="_blank" rel="noopener">AAFP Clinical Guidelines</a></li>
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
                <p>Complete guide to prevention services</p>
              </Link>
              <Link href="/learn/primary-care" className={styles.relatedCard}>
                <h4>Primary Care</h4>
                <p>Your healthcare foundation</p>
              </Link>
              <Link href="/learn/chronic-disease" className={styles.relatedCard}>
                <h4>Chronic Disease Management</h4>
                <p>Ongoing care for chronic conditions</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}