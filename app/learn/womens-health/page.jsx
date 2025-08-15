'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function WomensHealthPage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Women's Health
            </nav>
            <h1 className={styles.articleTitle}>Women's Health: Comprehensive Care Through Every Life Stage</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Reviewed by: Dr. Tess Garcia, MD</span>
              <span>Reading Time: 16 minutes</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>On This Page</h2>
            <ul className={styles.tocList}>
              <li><a href="#overview">Understanding Women's Health</a></li>
              <li><a href="#statistics">Current Health Statistics</a></li>
              <li><a href="#reproductive">Reproductive Health</a></li>
              <li><a href="#pregnancy">Pregnancy & Maternal Care</a></li>
              <li><a href="#menopause">Menopause & Hormones</a></li>
              <li><a href="#conditions">Common Health Conditions</a></li>
              <li><a href="#screening">Preventive Screening Guidelines</a></li>
              <li><a href="#mental-health">Mental & Emotional Health</a></li>
              <li><a href="#bone-heart">Bone & Heart Health</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>Understanding Women's Health</h2>
            <p className={styles.leadText}>
              Women's health encompasses unique biological, social, and cultural factors that influence health outcomes throughout life. While women live longer than men on average, they experience greater morbidity and unique health challenges. The women's health gap costs the global economy $1 trillion annually, with conditions like endometriosis, PCOS, and menopause receiving less than 1% of research funding despite affecting millions. Understanding these disparities and addressing women's specific health needs is crucial for improving outcomes and quality of life.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Key Women's Health Facts</h3>
              <ul className={styles.keyPointsList}>
                <li>Women make up 78% of people with autoimmune diseases</li>
                <li>Heart disease is the #1 killer of women, causing 1 in 5 female deaths</li>
                <li>80% of the 10.2 million Americans with osteoporosis are women</li>
                <li>Women are twice as likely as men to experience depression and anxiety</li>
                <li>Maternal mortality in the US is rising, with significant racial disparities</li>
                <li>1 in 8 women will develop breast cancer in their lifetime</li>
                <li>Conditions affecting only women receive 1% of healthcare research funding</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>73.5 years</h4>
                <p>Women's life expectancy (lowest since 2006)</p>
              </div>
              <div className={styles.statCard}>
                <h4>14%</h4>
                <p>Women's health gap in disability-adjusted life years</p>
              </div>
              <div className={styles.statCard}>
                <h4>$1 trillion</h4>
                <p>Annual global economic impact</p>
              </div>
            </div>
          </section>

          <section id="statistics" className={styles.section}>
            <h2 className={styles.sectionTitle}>2025 Women's Health Statistics & Disparities</h2>
            <p className={styles.sectionText}>
              Despite advances in medicine, significant health disparities persist for women, particularly women of color and those in underserved communities. Understanding these statistics helps identify areas needing urgent attention and resources.
            </p>

            <div className={styles.warningBox}>
              <h4>Maternal Mortality Crisis</h4>
              <p>
                The US has the highest maternal mortality rate among developed nations at 32.9 deaths per 100,000 live births in 2021. Black women are 2.6 times more likely to die from pregnancy-related causes than white women. Over 80% of pregnancy-related deaths are preventable with proper care and intervention.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Leading Health Concerns by Age</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Reproductive Years (15-44)</h3>
                <ul>
                  <li>Unintended pregnancy affects 45% of pregnancies</li>
                  <li>PCOS affects 6-12% of reproductive-age women</li>
                  <li>Endometriosis impacts 10% (190 million globally)</li>
                  <li>Cervical cancer is 4th most common cancer</li>
                  <li>Mental health conditions peak during these years</li>
                  <li>Autoimmune diseases often onset</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Midlife & Beyond (45+)</h3>
                <ul>
                  <li>Menopause affects all women, average age 51</li>
                  <li>Breast cancer risk: 1 in 8 lifetime</li>
                  <li>Osteoporosis affects 1 in 2 women over 50</li>
                  <li>Heart disease becomes leading cause of death</li>
                  <li>Alzheimer's affects women 2:1 vs men</li>
                  <li>Depression affects 1 in 5 older women</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Healthcare Access & Utilization</h3>
              <ul className={styles.keyPointsList}>
                <li>26% of women delayed or skipped care due to cost in 2023</li>
                <li>Rural women face 50% fewer OB-GYN providers per capita</li>
                <li>Only 5.3% of adults receive all recommended preventive services</li>
                <li>Women use healthcare services 33% more than men but report lower satisfaction</li>
                <li>Insurance coverage gaps affect contraception access for 19 million women</li>
                <li>Telehealth adoption increased 38x during pandemic, improving access</li>
              </ul>
            </div>
          </section>

          <section id="reproductive" className={styles.section}>
            <h2 className={styles.sectionTitle}>Reproductive Health & Family Planning</h2>
            <p className={styles.sectionText}>
              Reproductive health is fundamental to women's overall well-being, encompassing menstruation, contraception, fertility, and sexual health. Access to comprehensive reproductive healthcare enables women to make informed decisions about their bodies and futures.
            </p>

            <h3 className={styles.subsectionTitle}>Menstrual Health</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Normal Menstruation</h3>
                <ul>
                  <li>Cycle length: 21-35 days (average 28)</li>
                  <li>Bleeding duration: 2-7 days</li>
                  <li>Blood loss: 30-40ml (up to 80ml normal)</li>
                  <li>Menarche: Average age 12.5 years</li>
                  <li>Menopause: Average age 51 years</li>
                  <li>Reproductive span: ~40 years</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Menstrual Disorders</h3>
                <ul>
                  <li><strong>Dysmenorrhea:</strong> Affects 50-90% of women</li>
                  <li><strong>Heavy bleeding:</strong> Impacts 1 in 3 women</li>
                  <li><strong>PMS/PMDD:</strong> 75% experience PMS symptoms</li>
                  <li><strong>Amenorrhea:</strong> Missing 3+ periods</li>
                  <li><strong>Irregular cycles:</strong> Common in PCOS</li>
                  <li><strong>Endometriosis pain:</strong> Beyond normal cramping</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Contraception Options (2025 Guidelines)</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Long-Acting Reversible (LARC)</h3>
                <ul>
                  <li><strong>IUDs:</strong> 99%+ effective, 3-12 years</li>
                  <li><strong>Implant:</strong> 99%+ effective, 3 years</li>
                  <li>Most effective reversible methods</li>
                  <li>No daily maintenance required</li>
                  <li>Immediate return to fertility upon removal</li>
                  <li>Safe for most women including teens</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Short-Acting Methods</h3>
                <ul>
                  <li><strong>Pills:</strong> 91% typical use effectiveness</li>
                  <li><strong>Patch:</strong> Weekly application</li>
                  <li><strong>Ring:</strong> Monthly insertion</li>
                  <li><strong>Shot:</strong> Every 3 months</li>
                  <li><strong>Barrier methods:</strong> Condoms, diaphragms</li>
                  <li><strong>Natural methods:</strong> Fertility awareness</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Common Reproductive Conditions</h3>
            <div className={styles.infoCard}>
              <h3>Polycystic Ovary Syndrome (PCOS)</h3>
              <ul>
                <li>Affects 6-12% of reproductive-age women (5 million US)</li>
                <li><strong>Symptoms:</strong> Irregular periods, excess androgens, polycystic ovaries</li>
                <li><strong>Complications:</strong> Infertility, diabetes, heart disease, endometrial cancer</li>
                <li><strong>Diagnosis:</strong> Rotterdam criteria (2 of 3 features)</li>
                <li><strong>Treatment:</strong> Lifestyle changes, metformin, hormonal contraceptives</li>
                <li>Leading cause of female infertility</li>
                <li>70% of cases remain undiagnosed</li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3>Endometriosis</h3>
              <ul>
                <li>Affects 10% of reproductive-age women (190 million globally)</li>
                <li><strong>Symptoms:</strong> Severe pelvic pain, heavy bleeding, infertility</li>
                <li><strong>Diagnosis delay:</strong> Average 7-12 years from symptom onset</li>
                <li><strong>Impact:</strong> Leading cause of hysterectomy in women under 30</li>
                <li><strong>Treatment:</strong> Pain management, hormonal therapy, surgery</li>
                <li>Receives less than 0.1% of research funding despite impact</li>
                <li>Associated with 30-50% of infertility cases</li>
              </ul>
            </div>
          </section>

          <section id="pregnancy" className={styles.section}>
            <h2 className={styles.sectionTitle}>Pregnancy & Maternal Health</h2>
            <p className={styles.sectionText}>
              Pregnancy and childbirth are transformative experiences requiring comprehensive care before, during, and after delivery. Despite medical advances, maternal health outcomes in the US lag behind other developed nations, with significant preventable morbidity and mortality.
            </p>

            <h3 className={styles.subsectionTitle}>Prenatal Care Guidelines</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Visit Schedule</h3>
                <ul>
                  <li><strong>First trimester:</strong> Initial visit by 8 weeks</li>
                  <li><strong>Weeks 4-28:</strong> Every 4 weeks</li>
                  <li><strong>Weeks 28-36:</strong> Every 2 weeks</li>
                  <li><strong>Weeks 36-delivery:</strong> Weekly</li>
                  <li>High-risk pregnancies: More frequent</li>
                  <li>Total visits: 10-15 for uncomplicated pregnancy</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Essential Screenings</h3>
                <ul>
                  <li>Blood type and Rh factor</li>
                  <li>Anemia and iron levels</li>
                  <li>Gestational diabetes (24-28 weeks)</li>
                  <li>Group B strep (35-37 weeks)</li>
                  <li>Genetic screening options</li>
                  <li>Ultrasounds at 8-10 and 18-20 weeks</li>
                  <li>STI and HIV testing</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Pregnancy Complications</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Common Complications</h3>
                <ul>
                  <li><strong>Gestational diabetes:</strong> 2-10% of pregnancies</li>
                  <li><strong>Preeclampsia:</strong> 5-8% of pregnancies</li>
                  <li><strong>Preterm birth:</strong> 10.5% of US births</li>
                  <li><strong>Miscarriage:</strong> 10-20% of known pregnancies</li>
                  <li><strong>Anemia:</strong> Affects 30% of pregnant women</li>
                  <li><strong>Depression:</strong> 10-15% during/after pregnancy</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Warning Signs</h3>
                <ul>
                  <li>Severe headaches or vision changes</li>
                  <li>Persistent abdominal pain</li>
                  <li>Vaginal bleeding or fluid leaking</li>
                  <li>Decreased fetal movement</li>
                  <li>Signs of preterm labor before 37 weeks</li>
                  <li>Fever over 100.4°F</li>
                  <li>Severe swelling of face/hands</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>Postpartum Depression (PPD)</h4>
              <p>
                Affects 10-15% of new mothers, with higher rates in teens and women with prior depression. Symptoms include persistent sadness, anxiety, difficulty bonding with baby, and thoughts of self-harm. Screening is recommended at postpartum visits. Treatment includes therapy, support groups, and medication if needed. Early intervention improves outcomes for both mother and child.
              </p>
            </div>
          </section>

          <section id="menopause" className={styles.section}>
            <h2 className={styles.sectionTitle}>Menopause & Hormonal Health</h2>
            <p className={styles.sectionText}>
              Menopause is a natural transition marking the end of reproductive years, yet it remains one of the most underfunded and understudied areas of women's health. Understanding hormonal changes and management options helps women navigate this phase with confidence and comfort.
            </p>

            <h3 className={styles.subsectionTitle}>Stages of Menopause</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Perimenopause</h3>
                <ul>
                  <li>Begins 4-10 years before menopause</li>
                  <li>Usually starts in 40s, can begin in 30s</li>
                  <li>Irregular periods and hormone fluctuations</li>
                  <li>Hot flashes begin for many women</li>
                  <li>Fertility declines but pregnancy possible</li>
                  <li>Symptoms vary widely between women</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Menopause & Beyond</h3>
                <ul>
                  <li>Defined as 12 months without periods</li>
                  <li>Average age 51 (range 40-58)</li>
                  <li>Early menopause: Before age 45 (5%)</li>
                  <li>Premature: Before age 40 (1%)</li>
                  <li>Postmenopause: Rest of life after menopause</li>
                  <li>Symptoms may persist 7-14 years</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Common Symptoms & Management</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Physical Symptoms</h3>
                <ul>
                  <li><strong>Hot flashes:</strong> 75% of women, last 7+ years</li>
                  <li><strong>Night sweats:</strong> Disrupt sleep quality</li>
                  <li><strong>Vaginal dryness:</strong> Affects 50% postmenopausal</li>
                  <li><strong>Weight gain:</strong> Average 5-10 pounds</li>
                  <li><strong>Joint pain:</strong> 60% experience aches</li>
                  <li><strong>Hair/skin changes:</strong> Thinning and dryness</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Emotional & Cognitive</h3>
                <ul>
                  <li>Mood swings and irritability</li>
                  <li>Anxiety and depression risk increases</li>
                  <li>Brain fog and memory issues</li>
                  <li>Sleep disturbances in 40-60%</li>
                  <li>Decreased libido</li>
                  <li>Fatigue and energy changes</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Hormone Therapy (2025 Guidelines)</h3>
            <div className={styles.keyPoints}>
              <h3>Current Recommendations</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Benefits:</strong> Most effective for hot flashes, prevents bone loss, improves quality of life</li>
                <li><strong>Timing:</strong> Most beneficial if started before age 60 or within 10 years of menopause</li>
                <li><strong>Risks:</strong> Small increased risk of breast cancer and blood clots with combined therapy</li>
                <li><strong>Duration:</strong> Use lowest dose for shortest time needed</li>
                <li><strong>Types:</strong> Systemic (pills, patches) or local (vaginal cream, ring)</li>
                <li><strong>Alternatives:</strong> SSRIs, gabapentin, lifestyle modifications, cognitive behavioral therapy</li>
                <li><strong>Contraindications:</strong> History of breast cancer, blood clots, liver disease, unexplained bleeding</li>
              </ul>
            </div>
          </section>

          <section id="conditions" className={styles.section}>
            <h2 className={styles.sectionTitle}>Common Women's Health Conditions</h2>
            <p className={styles.sectionText}>
              Women face unique health challenges and are disproportionately affected by certain conditions. Understanding these conditions, their symptoms, and treatment options is essential for early detection and effective management.
            </p>

            <h3 className={styles.subsectionTitle}>Autoimmune Diseases</h3>
            <div className={styles.infoCard}>
              <h3>Women & Autoimmune Conditions</h3>
              <ul>
                <li>Women represent 78% of autoimmune disease cases</li>
                <li><strong>Lupus:</strong> 9:1 female to male ratio, affects 1.5 million Americans</li>
                <li><strong>Rheumatoid arthritis:</strong> 3:1 ratio, 1.3 million affected</li>
                <li><strong>Multiple sclerosis:</strong> 3:1 ratio, often diagnosed ages 20-40</li>
                <li><strong>Hashimoto's thyroiditis:</strong> 10:1 ratio, most common thyroid disorder</li>
                <li><strong>Risk factors:</strong> Genetics, hormones, environmental triggers, infections</li>
                <li><strong>Diagnosis challenges:</strong> Average 4.6 years and 5 doctors to diagnose</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Urinary & Pelvic Health</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Urinary Tract Infections</h3>
                <ul>
                  <li>50-60% of women experience UTIs</li>
                  <li>30% have recurrent infections</li>
                  <li>Risk increases after menopause</li>
                  <li>Prevention: Hydration, proper hygiene</li>
                  <li>Treatment: Antibiotics, preventive strategies</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Pelvic Floor Disorders</h3>
                <ul>
                  <li>Affects 1 in 4 women</li>
                  <li>Urinary incontinence: 25% of women</li>
                  <li>Pelvic organ prolapse: 3% symptomatic</li>
                  <li>Risk factors: Childbirth, aging, obesity</li>
                  <li>Treatment: Pelvic floor therapy, pessaries, surgery</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Reproductive Cancers</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Breast Cancer</h3>
                <ul>
                  <li>1 in 8 women lifetime risk</li>
                  <li>Most common cancer in women</li>
                  <li>99% 5-year survival if localized</li>
                  <li>Risk factors: Age, genetics, hormones</li>
                  <li>BRCA mutations: 45-65% lifetime risk</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Gynecologic Cancers</h3>
                <ul>
                  <li><strong>Cervical:</strong> 14,000 new cases/year, preventable with screening</li>
                  <li><strong>Ovarian:</strong> 20,000 cases/year, often diagnosed late</li>
                  <li><strong>Uterine:</strong> 66,000 cases/year, most common gynecologic</li>
                  <li>HPV causes 90% of cervical cancers</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="screening" className={styles.section}>
            <h2 className={styles.sectionTitle}>Preventive Screening Guidelines (2025)</h2>
            <p className={styles.sectionText}>
              Regular screening enables early detection when treatment is most effective. These evidence-based guidelines from USPSTF, ACOG, and other organizations help women and providers make informed decisions about preventive care.
            </p>

            <h3 className={styles.subsectionTitle}>Cancer Screening</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Breast Cancer Screening</h3>
                <ul>
                  <li><strong>Mammography:</strong> Start at age 40, every 2 years (USPSTF 2024)</li>
                  <li><strong>High risk:</strong> Earlier/annual screening, add MRI</li>
                  <li><strong>Clinical exams:</strong> Part of well-woman visits</li>
                  <li><strong>Self-exams:</strong> Awareness of normal breast tissue</li>
                  <li><strong>Genetic testing:</strong> If strong family history</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Cervical Cancer Screening</h3>
                <ul>
                  <li><strong>Age 21-29:</strong> Pap test every 3 years</li>
                  <li><strong>Age 30-65:</strong> HPV test every 5 years (preferred)</li>
                  <li>Or Pap + HPV co-testing every 5 years</li>
                  <li>Or Pap alone every 3 years</li>
                  <li><strong>After 65:</strong> May stop if adequate prior screening</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Other Essential Screenings</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Bone Density (DEXA)</h3>
                <ul>
                  <li>All women 65 and older</li>
                  <li>Postmenopausal women under 65 at increased risk</li>
                  <li>Repeat every 2 years or as indicated</li>
                  <li>Earlier if risk factors present</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>STI Screening</h3>
                <ul>
                  <li>Chlamydia/gonorrhea: Sexually active women under 25</li>
                  <li>HIV: At least once, more if risk factors</li>
                  <li>Syphilis, hepatitis: Based on risk</li>
                  <li>Annual screening if new/multiple partners</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Cardiovascular Screening</h3>
            <div className={styles.keyPoints}>
              <h3>Heart Disease Prevention</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Blood pressure:</strong> Every 2 years if normal, annually if elevated</li>
                <li><strong>Cholesterol:</strong> Every 5 years starting at 20, more often if abnormal</li>
                <li><strong>Diabetes:</strong> Every 3 years starting at 35 (earlier if overweight)</li>
                <li><strong>BMI:</strong> Calculate at every visit</li>
                <li><strong>Smoking cessation:</strong> Screen and counsel at every visit</li>
                <li><strong>Depression:</strong> Screen regularly, especially during pregnancy/postpartum</li>
              </ul>
            </div>

            <div className={styles.warningBox}>
              <h4>HPV Vaccination Update (2025)</h4>
              <p>
                HPV vaccination prevents 90% of HPV-related cancers. Recommended for all children at age 11-12, can start at 9. Catch-up vaccination through age 26. New therapeutic vaccine Vvax001 showing 50% complete response in treating HPV16-related precancerous lesions, offering non-surgical alternative.
              </p>
            </div>
          </section>

          <section id="mental-health" className={styles.section}>
            <h2 className={styles.sectionTitle}>Mental & Emotional Health</h2>
            <p className={styles.sectionText}>
              Women are twice as likely as men to experience depression and anxiety, with hormonal changes, social pressures, and life transitions contributing to mental health challenges throughout life. Addressing mental health is integral to overall well-being.
            </p>

            <h3 className={styles.subsectionTitle}>Mental Health Across Life Stages</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Reproductive Years</h3>
                <ul>
                  <li>PMS affects 75% of menstruating women</li>
                  <li>PMDD affects 3-8% with severe symptoms</li>
                  <li>Perinatal depression: 10-15% of pregnancies</li>
                  <li>Postpartum anxiety: 10% of new mothers</li>
                  <li>Infertility stress affects 40% of couples</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Midlife & Beyond</h3>
                <ul>
                  <li>Perimenopausal depression risk doubles</li>
                  <li>Empty nest syndrome and role transitions</li>
                  <li>Caregiver stress (women provide 60% of care)</li>
                  <li>Grief and loss more common</li>
                  <li>Social isolation increases with age</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Supporting Mental Health</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Regular screening:</strong> Depression and anxiety assessments at well visits</li>
                <li><strong>Therapy options:</strong> CBT, interpersonal therapy, support groups</li>
                <li><strong>Medication:</strong> Antidepressants safe during pregnancy/breastfeeding with guidance</li>
                <li><strong>Lifestyle factors:</strong> Exercise, sleep, nutrition impact mental health</li>
                <li><strong>Social support:</strong> Strong relationships protective against depression</li>
                <li><strong>Stress management:</strong> Mindfulness, yoga, meditation beneficial</li>
              </ul>
            </div>
          </section>

          <section id="bone-heart" className={styles.section}>
            <h2 className={styles.sectionTitle}>Bone & Heart Health</h2>
            <p className={styles.sectionText}>
              Osteoporosis and heart disease significantly impact women's health, especially after menopause when protective estrogen levels decline. Prevention and early intervention are key to maintaining strong bones and a healthy heart throughout life.
            </p>

            <h3 className={styles.subsectionTitle}>Osteoporosis Prevention & Management</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Risk & Prevention</h3>
                <ul>
                  <li>1 in 2 women over 50 will break a bone due to osteoporosis</li>
                  <li>Women lose up to 20% bone density in 5-7 years after menopause</li>
                  <li><strong>Prevention:</strong> 1200mg calcium, 800-1000 IU vitamin D daily</li>
                  <li>Weight-bearing exercise 30 minutes most days</li>
                  <li>Avoid smoking and excessive alcohol</li>
                  <li>DEXA screening at 65 or earlier if risk factors</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Treatment Options</h3>
                <ul>
                  <li><strong>Bisphosphonates:</strong> First-line therapy</li>
                  <li><strong>Hormone therapy:</strong> If started early menopause</li>
                  <li><strong>RANK ligand inhibitors:</strong> For high fracture risk</li>
                  <li><strong>Parathyroid hormone:</strong> Severe osteoporosis</li>
                  <li>Fall prevention crucial - causes 95% of hip fractures</li>
                  <li>Regular monitoring with DEXA scans</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Cardiovascular Health</h3>
            <div className={styles.infoCard}>
              <h3>Heart Disease in Women</h3>
              <ul>
                <li>Leading cause of death: 1 in 5 female deaths</li>
                <li>Symptoms often differ from men: fatigue, nausea, jaw pain</li>
                <li>Risk increases significantly after menopause</li>
                <li><strong>Risk factors:</strong> Diabetes (triples risk), pregnancy complications, autoimmune diseases</li>
                <li><strong>Prevention:</strong> 150 minutes exercise weekly, Mediterranean diet, stress management</li>
                <li><strong>Know your numbers:</strong> Blood pressure under 120/80, LDL under 100, BMI under 25</li>
                <li>Women less likely to receive aggressive treatment or cardiac rehab</li>
              </ul>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>When should I start seeing a gynecologist?</h3>
                <p>
                  The first visit should occur between ages 13-15, or when sexually active. Initial visits often focus on education and establishing care. Pelvic exams typically aren't needed until age 21 or if problems arise.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How often do I need a Pap smear?</h3>
                <p>
                  Starting at 21: every 3 years until age 29. Ages 30-65: HPV test every 5 years (preferred), or Pap + HPV every 5 years, or Pap alone every 3 years. After 65, may stop with adequate prior screening.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What are normal menopause symptoms?</h3>
                <p>
                  Hot flashes, night sweats, irregular periods, mood changes, vaginal dryness, and sleep problems are common. Symptoms vary widely. Severe symptoms affecting quality of life warrant treatment discussion with your provider.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is hormone therapy safe?</h3>
                <p>
                  For most healthy women under 60 or within 10 years of menopause, benefits often outweigh risks. Individual assessment considering personal and family history is essential. Use lowest effective dose for shortest duration needed.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>When should I get a mammogram?</h3>
                <p>
                  USPSTF 2024 guidelines recommend starting at age 40, every 2 years. Women at high risk may need earlier or more frequent screening. Discuss your risk factors and preferences with your provider.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What's the best birth control method?</h3>
                <p>
                  The best method is one you'll use consistently and correctly. LARCs (IUDs, implants) are most effective. Consider effectiveness, side effects, convenience, STI protection, and future pregnancy plans when choosing.
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
                  <li><a href="https://www.acog.org" target="_blank" rel="noopener">American College of Obstetricians and Gynecologists</a></li>
                  <li><a href="https://www.womenshealth.gov" target="_blank" rel="noopener">Office on Women's Health</a></li>
                  <li><a href="https://www.menopause.org" target="_blank" rel="noopener">The Menopause Society</a></li>
                  <li><a href="https://swhr.org" target="_blank" rel="noopener">Society for Women's Health Research</a></li>
                </ul>
              </div>
              <div className={styles.resourceCard}>
                <h4>Support & Education</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.plannedparenthood.org" target="_blank" rel="noopener">Planned Parenthood</a></li>
                  <li><a href="https://www.breastcancer.org" target="_blank" rel="noopener">Breastcancer.org</a></li>
                  <li><a href="https://www.endometriosis.org" target="_blank" rel="noopener">Endometriosis Foundation</a></li>
                  <li><a href="https://www.pcosaa.org" target="_blank" rel="noopener">PCOS Awareness Association</a></li>
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
                <p>Emotional wellness and support</p>
              </Link>
              <Link href="/learn/pelvichealth" className={styles.relatedCard}>
                <h4>Pelvic Health</h4>
                <p>Pelvic floor and continence</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}