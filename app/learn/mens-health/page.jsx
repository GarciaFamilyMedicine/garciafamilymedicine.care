'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function MensHealthPage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Men's Health
            </nav>
            <h1 className={styles.articleTitle}>Men's Health: Addressing Unique Health Challenges</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Reviewed by: Dr. Tess Garcia, MD</span>
              <span>Reading Time: 14 minutes</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>On This Page</h2>
            <ul className={styles.tocList}>
              <li><a href="#overview">Understanding Men's Health</a></li>
              <li><a href="#statistics">Health Statistics & Disparities</a></li>
              <li><a href="#cardiovascular">Heart & Vascular Health</a></li>
              <li><a href="#prostate">Prostate & Urological Health</a></li>
              <li><a href="#sexual">Sexual & Reproductive Health</a></li>
              <li><a href="#cancer">Cancer Prevention & Screening</a></li>
              <li><a href="#mental">Mental Health & Suicide Prevention</a></li>
              <li><a href="#chronic">Chronic Conditions</a></li>
              <li><a href="#prevention">Preventive Care Guidelines</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>Understanding Men's Health</h2>
            <p className={styles.leadText}>
              Men face unique health challenges yet are significantly less likely to seek medical care than women. On average, men die nearly 5 years earlier than women, with higher rates of death from 9 of the 10 leading causes. Men are 4 times more likely to die by suicide, twice as likely to die from liver disease, and face higher rates of heart disease, cancer, and unintentional injuries. Understanding these disparities and encouraging preventive care is crucial for improving men's health outcomes and longevity.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Key Men's Health Facts</h3>
              <ul className={styles.keyPointsList}>
                <li>Men live on average 5 years less than women (76.1 vs 81.1 years)</li>
                <li>Men are 50% less likely to visit a doctor for preventive care</li>
                <li>55% of men don't receive regular health screenings</li>
                <li>Men account for 75% of suicide deaths</li>
                <li>Heart disease kills 1 in 4 men</li>
                <li>Men have higher cancer mortality rates (189.5 vs 135.7 per 100,000)</li>
                <li>13.8% of men age 18+ are in fair or poor health</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>76.1 years</h4>
                <p>Male life expectancy</p>
              </div>
              <div className={styles.statCard}>
                <h4>4x</h4>
                <p>Higher suicide rate than women</p>
              </div>
              <div className={styles.statCard}>
                <h4>50%</h4>
                <p>Less likely to see doctor</p>
              </div>
            </div>
          </section>

          <section id="statistics" className={styles.section}>
            <h2 className={styles.sectionTitle}>2025 Men's Health Statistics & Disparities</h2>
            <p className={styles.sectionText}>
              Men's health disparities reflect complex interactions between biological factors, social expectations, and healthcare-seeking behaviors. These statistics highlight areas where targeted interventions could significantly improve outcomes.
            </p>

            <div className={styles.warningBox}>
              <h4>The Silent Crisis</h4>
              <p>
                Despite being more likely to engage in risky behaviors, avoid doctors, and delay treatment, men receive less public health attention and funding. The "tough it out" mentality contributes to preventable deaths, with men 24% less likely to have visited a doctor in the past year.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Leading Causes of Death in Men</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Top 5 Killers</h3>
                <ul>
                  <li><strong>Heart disease:</strong> 24.2% of male deaths</li>
                  <li><strong>Cancer:</strong> 22.5% of male deaths</li>
                  <li><strong>Unintentional injuries:</strong> 7.1% of male deaths</li>
                  <li><strong>Chronic respiratory disease:</strong> 5.2%</li>
                  <li><strong>Stroke:</strong> 4.2% of male deaths</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Racial Disparities</h3>
                <ul>
                  <li>Black men: 227.3 cancer deaths per 100,000</li>
                  <li>White men: 185.4 cancer deaths per 100,000</li>
                  <li>Hispanic men: Lower rates but less access to care</li>
                  <li>Native American men: Highest diabetes rates</li>
                  <li>Asian men: Lowest overall mortality but barriers exist</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Healthcare Utilization</h3>
            <div className={styles.keyPoints}>
              <h3>Barriers to Care</h3>
              <ul className={styles.keyPointsList}>
                <li>33% of men don't have a regular healthcare provider</li>
                <li>40% skip doctor visits even when sick</li>
                <li>65% delay seeking care as long as possible</li>
                <li>Men make 50% fewer preventive care visits than women</li>
                <li>Traditional masculinity norms discourage help-seeking</li>
                <li>Work schedules and lack of convenience cited as barriers</li>
                <li>Fear of diagnosis prevents 37% from seeking care</li>
              </ul>
            </div>
          </section>

          <section id="cardiovascular" className={styles.section}>
            <h2 className={styles.sectionTitle}>Cardiovascular Health</h2>
            <p className={styles.sectionText}>
              Heart disease is the leading cause of death for men, claiming nearly 400,000 lives annually. Men develop heart disease 7-10 years earlier than women and are more likely to have heart attacks at younger ages. Understanding and managing cardiovascular risk is essential for men's longevity.
            </p>

            <h3 className={styles.subsectionTitle}>Cardiovascular Risk Factors</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Major Risk Factors</h3>
                <ul>
                  <li><strong>Hypertension:</strong> 50.5% of men have high blood pressure</li>
                  <li><strong>High cholesterol:</strong> 40% of men have elevated levels</li>
                  <li><strong>Diabetes:</strong> Doubles heart disease risk</li>
                  <li><strong>Smoking:</strong> 15.3% of men smoke</li>
                  <li><strong>Obesity:</strong> 34.1% of men have BMI ≥30</li>
                  <li><strong>Physical inactivity:</strong> 30% don't exercise regularly</li>
                  <li><strong>Family history:</strong> Increases risk 40-60%</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Warning Signs</h3>
                <ul>
                  <li>Chest pain, pressure, or discomfort</li>
                  <li>Shortness of breath with exertion</li>
                  <li>Pain in jaw, neck, back, or arms</li>
                  <li>Lightheadedness or fainting</li>
                  <li>Cold sweats and nausea</li>
                  <li>Unusual fatigue</li>
                  <li>Erectile dysfunction (early warning sign)</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Prevention Strategies</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Blood pressure:</strong> Check annually, maintain below 120/80</li>
                <li><strong>Cholesterol:</strong> Screen every 5 years starting at 35 (earlier if risk factors)</li>
                <li><strong>Exercise:</strong> 150 minutes moderate activity weekly</li>
                <li><strong>Diet:</strong> Mediterranean or DASH patterns reduce risk 30%</li>
                <li><strong>Weight:</strong> Maintain BMI below 25</li>
                <li><strong>Smoking cessation:</strong> Reduces risk 50% within 1 year</li>
                <li><strong>Stress management:</strong> Chronic stress increases risk 40%</li>
              </ul>
            </div>
          </section>

          <section id="prostate" className={styles.section}>
            <h2 className={styles.sectionTitle}>Prostate & Urological Health</h2>
            <p className={styles.sectionText}>
              The prostate gland plays a crucial role in men's health, with conditions ranging from benign enlargement to cancer affecting millions. Understanding prostate health is essential for maintaining quality of life and detecting serious conditions early.
            </p>

            <h3 className={styles.subsectionTitle}>Benign Prostatic Hyperplasia (BPH)</h3>
            <div className={styles.infoCard}>
              <h3>Understanding BPH</h3>
              <ul>
                <li>Affects 50% of men by age 60, 90% by age 85</li>
                <li><strong>Symptoms:</strong> Frequent urination, weak stream, urgency, nocturia</li>
                <li><strong>Risk factors:</strong> Age, family history, obesity, diabetes</li>
                <li><strong>Complications:</strong> UTIs, bladder stones, kidney damage</li>
                <li><strong>Treatment:</strong> Medications (alpha blockers, 5-alpha reductase inhibitors)</li>
                <li>Surgery options for severe cases (TURP, laser therapy)</li>
                <li>Lifestyle modifications can improve symptoms</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Prostate Cancer</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Statistics & Risk</h3>
                <ul>
                  <li>1 in 8 men will be diagnosed</li>
                  <li>Most common cancer in men after skin cancer</li>
                  <li>99% 5-year survival if caught early</li>
                  <li>Average diagnosis age: 66 years</li>
                  <li>Black men: 70% higher incidence</li>
                  <li>Family history doubles risk</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Screening Guidelines</h3>
                <ul>
                  <li><strong>Age 50:</strong> Discuss screening for average risk</li>
                  <li><strong>Age 45:</strong> High risk (Black men, family history)</li>
                  <li><strong>Age 40:</strong> Very high risk (multiple relatives)</li>
                  <li>PSA blood test and digital rectal exam</li>
                  <li>Shared decision-making recommended</li>
                  <li>33% of men never screened</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Other Urological Conditions</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Kidney Stones</h3>
                <ul>
                  <li>11% of men experience kidney stones</li>
                  <li>Peak incidence: ages 30-50</li>
                  <li>50% recurrence within 5 years</li>
                  <li>Prevention: hydration, dietary changes</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Testicular Cancer</h3>
                <ul>
                  <li>Most common cancer in men 15-35</li>
                  <li>95% curable if caught early</li>
                  <li>Monthly self-exams recommended</li>
                  <li>Risk factors: undescended testicle, family history</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="sexual" className={styles.section}>
            <h2 className={styles.sectionTitle}>Sexual & Reproductive Health</h2>
            <p className={styles.sectionText}>
              Sexual health is integral to overall well-being, yet many men suffer in silence with conditions like erectile dysfunction and low testosterone. Open discussion and proper treatment can significantly improve quality of life.
            </p>

            <h3 className={styles.subsectionTitle}>Erectile Dysfunction (ED)</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Prevalence & Causes</h3>
                <ul>
                  <li>52% of men experience ED</li>
                  <li>44% cite ED as top aging concern</li>
                  <li>70% with ED have cardiovascular disease</li>
                  <li><strong>Physical causes:</strong> Vascular disease, diabetes, medications</li>
                  <li><strong>Psychological:</strong> Stress, anxiety, depression</li>
                  <li>Often first sign of heart disease</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Treatment Options</h3>
                <ul>
                  <li>Oral medications (PDE5 inhibitors)</li>
                  <li>Lifestyle modifications</li>
                  <li>Testosterone replacement if low</li>
                  <li>Vacuum devices and penile implants</li>
                  <li>Counseling for psychological causes</li>
                  <li>Treating underlying conditions</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Testosterone & Hormonal Health</h3>
            <div className={styles.infoCard}>
              <h3>Low Testosterone (Hypogonadism)</h3>
              <ul>
                <li>Affects 2-4 million men in US</li>
                <li>36% of men concerned about low T with aging</li>
                <li><strong>Symptoms:</strong> Fatigue, low libido, depression, muscle loss, weight gain</li>
                <li><strong>Diagnosis:</strong> Blood test showing levels below 300 ng/dL</li>
                <li><strong>Risk factors:</strong> Obesity, diabetes, opioid use, testicular injury</li>
                <li><strong>Treatment:</strong> Testosterone replacement (gels, injections, patches)</li>
                <li>Regular monitoring required for prostate and cardiovascular health</li>
                <li>58% incorrectly believe low T is main cause of ED</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Male Infertility</h3>
            <div className={styles.keyPoints}>
              <h3>Fertility Facts</h3>
              <ul className={styles.keyPointsList}>
                <li>Male factor involved in 50% of infertility cases</li>
                <li>10-15% of infertile men have complete absence of sperm</li>
                <li>50% of male infertility cases have unknown cause</li>
                <li><strong>Risk factors:</strong> Age, obesity, smoking, heat exposure, varicocele</li>
                <li><strong>Evaluation:</strong> Semen analysis, hormone testing, genetic screening</li>
                <li><strong>Treatment:</strong> Lifestyle changes, medications, surgery, assisted reproduction</li>
                <li>Success rates vary widely depending on cause</li>
              </ul>
            </div>
          </section>

          <section id="cancer" className={styles.section}>
            <h2 className={styles.sectionTitle}>Cancer Prevention & Screening</h2>
            <p className={styles.sectionText}>
              Men have higher cancer incidence and mortality rates than women for most cancer types. Early detection through appropriate screening and lifestyle modifications can significantly reduce cancer deaths.
            </p>

            <h3 className={styles.subsectionTitle}>Cancer Statistics</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Most Common Cancers in Men</h3>
                <ul>
                  <li><strong>Prostate:</strong> 29% of new diagnoses</li>
                  <li><strong>Lung:</strong> 12% (leading cause of cancer death)</li>
                  <li><strong>Colorectal:</strong> 8% of diagnoses</li>
                  <li><strong>Bladder:</strong> 4x more common in men</li>
                  <li><strong>Melanoma:</strong> Higher mortality in men</li>
                  <li><strong>Testicular:</strong> Most common in young men</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Screening Guidelines</h3>
                <ul>
                  <li><strong>Colorectal:</strong> Start at 45, colonoscopy every 10 years</li>
                  <li><strong>Lung:</strong> Annual CT for smokers 50-80</li>
                  <li><strong>Skin:</strong> Annual exam, monthly self-checks</li>
                  <li><strong>Testicular:</strong> Monthly self-exam ages 15-35</li>
                  <li><strong>Oral:</strong> Dental exams for tobacco users</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>Prevention Strategies</h4>
              <p>
                Up to 50% of cancers are preventable through lifestyle changes: quit smoking (30% reduction), maintain healthy weight (20% reduction), limit alcohol, sun protection, HPV vaccination, regular exercise, and cancer screenings as recommended.
              </p>
            </div>
          </section>

          <section id="mental" className={styles.section}>
            <h2 className={styles.sectionTitle}>Mental Health & Suicide Prevention</h2>
            <p className={styles.sectionText}>
              Men's mental health remains stigmatized and undertreated, contributing to devastating outcomes. Men account for 75% of suicides, with rates highest in middle-aged white men. Breaking the silence around mental health is literally life-saving.
            </p>

            <h3 className={styles.subsectionTitle}>Mental Health Statistics</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Prevalence & Impact</h3>
                <ul>
                  <li>1 in 10 men experience depression or anxiety</li>
                  <li>Men 4x more likely to die by suicide</li>
                  <li>Suicide is 7th leading cause of death in men</li>
                  <li>Rate highest in men 75+ (39.9 per 100,000)</li>
                  <li>Rural men: 20.2 vs 13.6 per 100,000 urban</li>
                  <li>Only 60% of depressed men seek treatment</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Warning Signs</h3>
                <ul>
                  <li>Anger, irritability, aggression</li>
                  <li>Risk-taking behaviors</li>
                  <li>Substance abuse increase</li>
                  <li>Social withdrawal</li>
                  <li>Physical symptoms (headaches, digestive issues)</li>
                  <li>Work/relationship problems</li>
                  <li>Talking about death or suicide</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Getting Help</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Crisis support:</strong> 988 Suicide & Crisis Lifeline (call or text)</li>
                <li><strong>Veterans:</strong> Press 1 after calling 988</li>
                <li><strong>Therapy:</strong> Cognitive behavioral therapy highly effective</li>
                <li><strong>Medications:</strong> Antidepressants can be life-saving</li>
                <li><strong>Support groups:</strong> Men's groups reduce isolation</li>
                <li><strong>Lifestyle:</strong> Exercise as effective as medication for mild depression</li>
                <li><strong>Workplace programs:</strong> Employee assistance programs provide confidential help</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Substance Use</h3>
            <div className={styles.infoCard}>
              <h3>Addiction & Recovery</h3>
              <ul>
                <li>Men 2x more likely to binge drink</li>
                <li>Men 3x more likely to die from alcohol-related causes</li>
                <li>11.5% of men have substance use disorder</li>
                <li>Men less likely to seek addiction treatment</li>
                <li>Overdose deaths higher in men (70% of total)</li>
                <li>Recovery possible with proper treatment and support</li>
              </ul>
            </div>
          </section>

          <section id="chronic" className={styles.section}>
            <h2 className={styles.sectionTitle}>Chronic Conditions in Men</h2>
            <p className={styles.sectionText}>
              Men face unique challenges with chronic diseases, often developing them earlier and experiencing worse outcomes than women. Effective management requires addressing both medical and behavioral factors.
            </p>

            <h3 className={styles.subsectionTitle}>Diabetes</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Impact on Men</h3>
                <ul>
                  <li>15.4% of men have diabetes</li>
                  <li>Men develop type 2 diabetes at lower BMI</li>
                  <li>Higher risk of complications</li>
                  <li>Erectile dysfunction in 50-75% of diabetic men</li>
                  <li>2-4x increased heart disease risk</li>
                  <li>Low testosterone common in diabetic men</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Management</h3>
                <ul>
                  <li>A1C goal generally below 7%</li>
                  <li>Blood pressure below 130/80</li>
                  <li>Annual eye, foot, kidney exams</li>
                  <li>Weight loss improves control</li>
                  <li>Regular exercise crucial</li>
                  <li>Medication adherence essential</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Sleep Disorders</h3>
            <div className={styles.infoCard}>
              <h3>Sleep Apnea</h3>
              <ul>
                <li>Affects 25% of men (2x rate in women)</li>
                <li>Risk factors: obesity, large neck circumference, age</li>
                <li>Increases risk of hypertension, heart disease, stroke</li>
                <li>Associated with ED and low testosterone</li>
                <li>Symptoms: loud snoring, gasping, daytime fatigue</li>
                <li>Treatment: CPAP, weight loss, positional therapy, surgery</li>
                <li>Untreated apnea reduces life expectancy 10+ years</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Metabolic Syndrome</h3>
            <div className={styles.keyPoints}>
              <h3>Components & Management</h3>
              <ul className={styles.keyPointsList}>
                <li>Affects 35% of men (increases with age)</li>
                <li><strong>Criteria (3+ of):</strong> Waist greater than 40", BP ≥130/85, triglycerides ≥150, HDL below 40, fasting glucose ≥100</li>
                <li>Increases heart disease risk 2x, diabetes risk 5x</li>
                <li>Lifestyle changes can reverse syndrome</li>
                <li>Weight loss of 5-10% significantly improves markers</li>
                <li>Mediterranean diet particularly effective</li>
                <li>Regular monitoring essential</li>
              </ul>
            </div>
          </section>

          <section id="prevention" className={styles.section}>
            <h2 className={styles.sectionTitle}>Preventive Care Guidelines for Men</h2>
            <p className={styles.sectionText}>
              Regular preventive care can detect problems early when they're most treatable. These evidence-based guidelines help men and providers make informed decisions about screening and prevention.
            </p>

            <h3 className={styles.subsectionTitle}>Age-Based Screening Recommendations</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Ages 18-39</h3>
                <ul>
                  <li>Blood pressure: Every 2-3 years</li>
                  <li>Cholesterol: Once at 35 (earlier if risk factors)</li>
                  <li>HIV: At least once</li>
                  <li>STI screening if sexually active</li>
                  <li>Testicular self-exams monthly</li>
                  <li>Skin cancer checks</li>
                  <li>Dental exams twice yearly</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Ages 40-64</h3>
                <ul>
                  <li>Blood pressure: Annually</li>
                  <li>Cholesterol: Every 5 years</li>
                  <li>Diabetes: Every 3 years</li>
                  <li>Colorectal cancer: Start at 45</li>
                  <li>Prostate discussion: Age 50 (45 if high risk)</li>
                  <li>Lung cancer screening if smoker</li>
                  <li>Eye exams every 2-4 years</li>
                </ul>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3>Ages 65+</h3>
              <ul>
                <li>All previous screenings continue</li>
                <li>Abdominal aortic aneurysm: Once if ever smoked</li>
                <li>Bone density: Consider if risk factors</li>
                <li>Cognitive assessment</li>
                <li>Fall risk evaluation</li>
                <li>Hearing and vision tests</li>
                <li>Updated vaccinations (pneumonia, shingles, high-dose flu)</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Immunizations</h3>
            <div className={styles.keyPoints}>
              <h3>Vaccine Schedule for Men</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Annual:</strong> Influenza (all men), COVID-19 boosters as recommended</li>
                <li><strong>Every 10 years:</strong> Tdap/Td (tetanus, diphtheria, pertussis)</li>
                <li><strong>Age 50+:</strong> Shingles vaccine (2 doses)</li>
                <li><strong>Age 65+:</strong> Pneumococcal vaccines</li>
                <li><strong>HPV:</strong> Through age 26 (prevents multiple cancers)</li>
                <li><strong>Hepatitis A/B:</strong> If risk factors present</li>
                <li><strong>Travel:</strong> Additional vaccines as needed</li>
              </ul>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>When should men start annual check-ups?</h3>
                <p>
                  Men should have annual wellness visits starting in their 20s, even if feeling healthy. These establish baseline health metrics and catch problems early. More frequent visits may be needed with chronic conditions or risk factors.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Should I get PSA screening for prostate cancer?</h3>
                <p>
                  Discuss with your provider starting at age 50 (45 if Black or family history, 40 if multiple relatives affected). PSA screening is controversial due to false positives, but shared decision-making based on your risk is recommended.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is erectile dysfunction just part of aging?</h3>
                <p>
                  No. While ED becomes more common with age, it's not inevitable and often signals underlying health issues like cardiovascular disease or diabetes. Effective treatments exist, and addressing ED can improve both health and quality of life.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I know if I have low testosterone?</h3>
                <p>
                  Symptoms include fatigue, low libido, depression, muscle loss, and weight gain. A blood test measuring total testosterone (normal: 300-1000 ng/dL) confirms diagnosis. Many symptoms overlap with other conditions, so proper evaluation is important.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Why don't men seek mental health help?</h3>
                <p>
                  Stigma, societal expectations to "be strong," and expressing distress through anger rather than sadness all contribute. Men may not recognize depression symptoms. Finding male-friendly approaches and normalizing help-seeking saves lives.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What's the most important thing men can do for their health?</h3>
                <p>
                  Establish care with a primary provider and attend annual check-ups. Prevention and early detection are key. Also crucial: don't smoke, maintain healthy weight, exercise regularly, manage stress, and seek help for mental health concerns.
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className={styles.resourcesSection}>
            <h2 className={styles.sectionTitle}>Additional Resources</h2>
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <h4>Men's Health Organizations</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.menshealthnetwork.org" target="_blank" rel="noopener">Men's Health Network</a></li>
                  <li><a href="https://www.movember.com" target="_blank" rel="noopener">Movember Foundation</a></li>
                  <li><a href="https://www.pcf.org" target="_blank" rel="noopener">Prostate Cancer Foundation</a></li>
                  <li><a href="https://www.auanet.org" target="_blank" rel="noopener">American Urological Association</a></li>
                </ul>
              </div>
              <div className={styles.resourceCard}>
                <h4>Mental Health & Support</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://988lifeline.org" target="_blank" rel="noopener">988 Suicide & Crisis Lifeline</a></li>
                  <li><a href="https://www.mantherapy.org" target="_blank" rel="noopener">Man Therapy</a></li>
                  <li><a href="https://www.faceitfoundation.org" target="_blank" rel="noopener">Face It Foundation</a></li>
                  <li><a href="https://www.samhsa.gov" target="_blank" rel="noopener">SAMHSA (Substance Abuse)</a></li>
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
                <p>Screening guidelines and prevention</p>
              </Link>
              <Link href="/learn/mental-health" className={styles.relatedCard}>
                <h4>Mental Health</h4>
                <p>Depression and suicide prevention</p>
              </Link>
              <Link href="/learn/chronic-disease" className={styles.relatedCard}>
                <h4>Chronic Disease</h4>
                <p>Managing long-term conditions</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}