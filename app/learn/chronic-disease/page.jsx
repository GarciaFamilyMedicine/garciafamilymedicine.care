'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function ChronicDiseasePage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Chronic Disease Management
            </nav>
            <h1 className={styles.articleTitle}>Chronic Disease Management: Living Well with Long-Term Conditions</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Reviewed by: Dr. Tess Garcia, MD</span>
              <span>Reading Time: 13 minutes</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>On This Page</h2>
            <ul className={styles.tocList}>
              <li><a href="#overview">Understanding Chronic Disease</a></li>
              <li><a href="#statistics">Impact & Statistics</a></li>
              <li><a href="#common-conditions">Common Chronic Conditions</a></li>
              <li><a href="#management">Management Strategies</a></li>
              <li><a href="#team-care">Team-Based Care</a></li>
              <li><a href="#self-management">Self-Management Tools</a></li>
              <li><a href="#prevention">Preventing Complications</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>Understanding Chronic Disease</h2>
            <p className={styles.leadText}>
              Chronic diseases are conditions that last one year or more and require ongoing medical attention or limit activities of daily living. They are the leading causes of death and disability in the United States, affecting 6 in 10 adults, with 4 in 10 having two or more chronic conditions. Effective management can dramatically improve quality of life and prevent complications.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Defining Characteristics</h3>
              <ul className={styles.keyPointsList}>
                <li>Last 12 months or longer</li>
                <li>Require ongoing medical management</li>
                <li>May limit daily activities or self-care</li>
                <li>Often preventable through lifestyle changes</li>
                <li>Can be controlled but typically not cured</li>
                <li>May lead to complications if poorly managed</li>
                <li>Benefit from coordinated, team-based care</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>60%</h4>
                <p>US adults with at least one chronic disease</p>
              </div>
              <div className={styles.statCard}>
                <h4>$4.9T</h4>
                <p>Annual US healthcare costs</p>
              </div>
              <div className={styles.statCard}>
                <h4>90%</h4>
                <p>Healthcare spending on chronic conditions</p>
              </div>
            </div>
          </section>

          <section id="statistics" className={styles.section}>
            <h2 className={styles.sectionTitle}>The Growing Burden: 2024 Statistics</h2>
            <p className={styles.sectionText}>
              In 2023, 76.4% of US adults (194 million) reported having at least one chronic condition, while 51.4% (130 million) manage multiple chronic conditions. The prevalence increases dramatically with age, affecting 93% of adults over 65.
            </p>

            <div className={styles.warningBox}>
              <h4>Alarming Trends in Young Adults</h4>
              <p>
                From 2013 to 2023, chronic disease prevalence in young adults increased from 52.5% to 59.5% for one or more conditions, and from 21.8% to 27.1% for multiple conditions, signaling a growing health crisis in younger populations.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Leading Chronic Diseases by Impact</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Mortality Leaders</h3>
                <ul>
                  <li><strong>Heart Disease:</strong> #1 cause of death</li>
                  <li><strong>Cancer:</strong> #2 cause of death</li>
                  <li><strong>Chronic Lower Respiratory:</strong> #3 cause</li>
                  <li><strong>Stroke:</strong> #5 cause of death</li>
                  <li><strong>Alzheimer's:</strong> 141% increase since 2000</li>
                  <li><strong>Diabetes:</strong> 7th leading cause</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Prevalence & Cost</h3>
                <ul>
                  <li><strong>Arthritis:</strong> 53.2 million adults</li>
                  <li><strong>Diabetes:</strong> 38.4 million diagnosed</li>
                  <li><strong>CKD:</strong> 35.5 million adults</li>
                  <li><strong>Alzheimer's:</strong> 7 million affected</li>
                  <li><strong>COPD:</strong> 16 million diagnosed</li>
                  <li><strong>Depression:</strong> 21 million adults</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Economic Impact</h3>
              <ul className={styles.keyPointsList}>
                <li>Chronic diseases account for 90% of the $4.9 trillion annual healthcare costs</li>
                <li>Alzheimer's care costs $360 billion in 2024, projected to reach $1 trillion by 2050</li>
                <li>Arthritis costs exceed $300 billion annually in medical costs and lost earnings</li>
                <li>Diabetes costs $412.9 billion yearly in medical costs and lost productivity</li>
                <li>Heart disease and stroke cost $254 billion annually</li>
              </ul>
            </div>
          </section>

          <section id="common-conditions" className={styles.section}>
            <h2 className={styles.sectionTitle}>Common Chronic Conditions: Management Guidelines</h2>
            <p className={styles.sectionText}>
              Each chronic condition requires specific management strategies. The 2024-2025 guidelines emphasize integrated care addressing cardiovascular, kidney, and metabolic health simultaneously.
            </p>

            <h3 className={styles.subsectionTitle}>Diabetes Management</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Goals & Monitoring</h3>
                <ul>
                  <li>A1C target generally <7% for most adults</li>
                  <li>Blood pressure <130/80 mmHg</li>
                  <li>LDL cholesterol targets based on risk</li>
                  <li>Annual eye, foot, kidney screening</li>
                  <li>Continuous glucose monitoring when indicated</li>
                  <li>Quarterly A1C if not at goal</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>2024 Medication Updates</h3>
                <ul>
                  <li>SGLT2 inhibitors for heart/kidney protection</li>
                  <li>GLP-1 agonists for CV risk reduction</li>
                  <li>Metformin remains first-line therapy</li>
                  <li>Early combination therapy recommended</li>
                  <li>Consider obesity medications if BMI ≥27</li>
                  <li>Individualized insulin regimens</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Hypertension Control</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Blood Pressure Targets</h3>
                <ul>
                  <li><strong>General:</strong> <130/80 mmHg</li>
                  <li><strong>Diabetes:</strong> <130/80 mmHg</li>
                  <li><strong>CKD:</strong> <120 systolic if tolerated</li>
                  <li><strong>Older adults:</strong> Individualized</li>
                  <li>Home monitoring recommended</li>
                  <li>24-hour ambulatory monitoring for diagnosis</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Treatment Approach</h3>
                <ul>
                  <li>Lifestyle modifications first line</li>
                  <li>ACE/ARB for diabetes or CKD</li>
                  <li>Calcium channel blockers or thiazides</li>
                  <li>Combination therapy often needed</li>
                  <li>Monitor potassium and creatinine</li>
                  <li>Address medication adherence</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Heart Disease Management</h3>
            <div className={styles.infoCard}>
              <h3>Comprehensive Cardiovascular Risk Reduction</h3>
              <ul>
                <li><strong>Screening:</strong> Annual CV risk assessment for all diabetes patients</li>
                <li><strong>Biomarkers:</strong> BNP/NT-proBNP for heart failure screening</li>
                <li><strong>Lipid management:</strong> Statins for most; add ezetimibe/PCSK9i if needed</li>
                <li><strong>Antiplatelet:</strong> Aspirin for secondary prevention</li>
                <li><strong>Heart failure:</strong> SGLT2 inhibitors reduce hospitalizations</li>
                <li><strong>Multifactorial approach:</strong> Address all risk factors simultaneously</li>
              </ul>
            </div>
          </section>

          <section id="management" className={styles.section}>
            <h2 className={styles.sectionTitle}>Evidence-Based Management Strategies</h2>
            <p className={styles.sectionText}>
              Successful chronic disease management requires a comprehensive approach combining medical treatment, lifestyle modifications, and ongoing monitoring. The key is personalized care that addresses individual needs and preferences.
            </p>

            <div className={styles.keyPoints}>
              <h3>Core Management Principles</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Patient-centered care:</strong> Shared decision-making and goal setting</li>
                <li><strong>Regular monitoring:</strong> Track key metrics and adjust treatment</li>
                <li><strong>Medication optimization:</strong> Balance efficacy with side effects</li>
                <li><strong>Lifestyle medicine:</strong> Diet, exercise, stress management</li>
                <li><strong>Care coordination:</strong> Integration across providers</li>
                <li><strong>Prevention focus:</strong> Avoid complications through screening</li>
                <li><strong>Education & support:</strong> Empower self-management</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Lifestyle Interventions</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Nutrition Therapy</h3>
                <ul>
                  <li>Mediterranean or DASH diet patterns</li>
                  <li>Portion control and calorie awareness</li>
                  <li>Limit processed foods and added sugars</li>
                  <li>Increase fiber and whole grains</li>
                  <li>Reduce sodium to <2,300mg daily</li>
                  <li>Medical nutrition therapy referral</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Physical Activity</h3>
                <ul>
                  <li>150 min/week moderate aerobic exercise</li>
                  <li>2+ days/week resistance training</li>
                  <li>Break up prolonged sitting</li>
                  <li>Start slowly and progress gradually</li>
                  <li>Adapt for physical limitations</li>
                  <li>Include balance exercises if at fall risk</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="team-care" className={styles.section}>
            <h2 className={styles.sectionTitle}>Team-Based Chronic Care Model</h2>
            <p className={styles.sectionText}>
              Modern chronic disease management utilizes a collaborative team approach, with each member playing a crucial role in comprehensive care delivery.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Core Team Members</h3>
                <ul>
                  <li><strong>Primary care provider:</strong> Overall coordination</li>
                  <li><strong>Nurse care manager:</strong> Education and monitoring</li>
                  <li><strong>Pharmacist:</strong> Medication management</li>
                  <li><strong>Dietitian:</strong> Nutrition counseling</li>
                  <li><strong>Social worker:</strong> Resource navigation</li>
                  <li><strong>Mental health:</strong> Behavioral support</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Specialist Integration</h3>
                <ul>
                  <li><strong>Endocrinologist:</strong> Complex diabetes</li>
                  <li><strong>Cardiologist:</strong> Heart disease</li>
                  <li><strong>Nephrologist:</strong> Kidney disease</li>
                  <li><strong>Pulmonologist:</strong> Lung conditions</li>
                  <li><strong>Rheumatologist:</strong> Arthritis</li>
                  <li><strong>Neurologist:</strong> Neurological conditions</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="self-management" className={styles.section}>
            <h2 className={styles.sectionTitle}>Self-Management Tools & Techniques</h2>
            <p className={styles.sectionText}>
              Empowering patients with knowledge and tools for self-management is crucial for successful chronic disease control between medical visits.
            </p>

            <h3 className={styles.subsectionTitle}>Home Monitoring</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Essential Monitoring Tools</h3>
                <ul>
                  <li>Blood pressure monitor (validated device)</li>
                  <li>Glucose meter or continuous monitor</li>
                  <li>Digital scale for daily weights</li>
                  <li>Peak flow meter for asthma</li>
                  <li>Pulse oximeter for lung conditions</li>
                  <li>Symptom diary or tracking app</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>When to Contact Provider</h3>
                <ul>
                  <li>Blood pressure >180/110 or <90/60</li>
                  <li>Blood sugar >300 or <70 mg/dL</li>
                  <li>Weight gain >3 lbs in 2 days</li>
                  <li>Worsening shortness of breath</li>
                  <li>Chest pain or pressure</li>
                  <li>Signs of infection or illness</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Self-Care Strategies</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Medication adherence:</strong> Use pill organizers, reminders, and refill syncing</li>
                <li><strong>Stress management:</strong> Meditation, yoga, counseling, support groups</li>
                <li><strong>Sleep hygiene:</strong> 7-9 hours nightly, consistent schedule</li>
                <li><strong>Smoking cessation:</strong> Most important modifiable risk factor</li>
                <li><strong>Alcohol moderation:</strong> Limit to recommended amounts</li>
                <li><strong>Social connection:</strong> Combat isolation through activities</li>
              </ul>
            </div>
          </section>

          <section id="prevention" className={styles.section}>
            <h2 className={styles.sectionTitle}>Preventing Complications</h2>
            <p className={styles.sectionText}>
              Proactive screening and early intervention can prevent or delay many chronic disease complications, significantly improving outcomes and quality of life.
            </p>

            <h3 className={styles.subsectionTitle}>Regular Screening Schedule</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Diabetes Complications</h3>
                <ul>
                  <li><strong>Annual:</strong> Eye exam, foot exam</li>
                  <li><strong>Annual:</strong> Kidney function (eGFR, albumin)</li>
                  <li><strong>Annual:</strong> Lipid panel</li>
                  <li><strong>Every visit:</strong> Blood pressure</li>
                  <li><strong>Every visit:</strong> Foot inspection</li>
                  <li><strong>Quarterly:</strong> A1C if not at goal</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Cardiovascular Protection</h3>
                <ul>
                  <li><strong>Annual:</strong> CV risk assessment</li>
                  <li><strong>As indicated:</strong> Stress testing</li>
                  <li><strong>Consider:</strong> Coronary calcium scoring</li>
                  <li><strong>Screen:</strong> Peripheral artery disease</li>
                  <li><strong>Monitor:</strong> BNP for heart failure</li>
                  <li><strong>Annual:</strong> EKG if high risk</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>Red Flags Requiring Immediate Attention</h4>
              <p>
                Seek emergency care for: chest pain, difficulty breathing, sudden weakness or numbness, severe headache, vision changes, signs of stroke (FAST), severe hypoglycemia, or diabetic ketoacidosis symptoms.
              </p>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Can chronic diseases be cured?</h3>
                <p>
                  Most chronic diseases cannot be cured but can be effectively managed. With proper treatment and lifestyle changes, many people live full, active lives while managing chronic conditions.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How often should I see my doctor?</h3>
                <p>
                  Frequency depends on your condition and stability. Well-controlled conditions may need visits every 3-6 months, while newly diagnosed or unstable conditions require more frequent monitoring.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What if I have multiple chronic conditions?</h3>
                <p>
                  Managing multiple conditions requires coordinated care. Your primary care provider can help prioritize treatments, prevent drug interactions, and ensure all conditions are addressed comprehensively.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How important is lifestyle change?</h3>
                <p>
                  Lifestyle modifications are foundational. Diet, exercise, and stress management can be as effective as medications for some conditions and enhance the effectiveness of medical treatments.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What about alternative treatments?</h3>
                <p>
                  Some complementary therapies may help, but always discuss with your provider. Never stop prescribed medications without medical guidance, as this can lead to serious complications.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How can I afford my medications?</h3>
                <p>
                  Options include patient assistance programs, generic alternatives, pharmacy discount programs, Medicare Extra Help, and prescription savings cards. Your provider or pharmacist can help identify resources.
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className={styles.resourcesSection}>
            <h2 className={styles.sectionTitle}>Additional Resources</h2>
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <h4>Disease-Specific Organizations</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.diabetes.org" target="_blank" rel="noopener">American Diabetes Association</a></li>
                  <li><a href="https://www.heart.org" target="_blank" rel="noopener">American Heart Association</a></li>
                  <li><a href="https://www.arthritis.org" target="_blank" rel="noopener">Arthritis Foundation</a></li>
                  <li><a href="https://www.lung.org" target="_blank" rel="noopener">American Lung Association</a></li>
                </ul>
              </div>
              <div className={styles.resourceCard}>
                <h4>Government Resources</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.cdc.gov/chronic-disease" target="_blank" rel="noopener">CDC Chronic Disease Center</a></li>
                  <li><a href="https://www.niddk.nih.gov" target="_blank" rel="noopener">NIDDK Health Information</a></li>
                  <li><a href="https://medlineplus.gov" target="_blank" rel="noopener">MedlinePlus</a></li>
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
                <p>Screening and prevention strategies</p>
              </Link>
              <Link href="/learn/mental-health" className={styles.relatedCard}>
                <h4>Mental Health</h4>
                <p>Managing emotional wellness</p>
              </Link>
              <Link href="/learn/weight-management" className={styles.relatedCard}>
                <h4>Weight Management</h4>
                <p>Healthy weight strategies</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}