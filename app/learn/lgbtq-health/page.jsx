'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function LGBTQHealthPage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / LGBTQ+ Healthcare
            </nav>
            <h1 className={styles.articleTitle}>LGBTQ+ Healthcare: Inclusive & Affirming Medical Care</h1>
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
              <li><a href="#overview">Understanding LGBTQ+ Healthcare</a></li>
              <li><a href="#disparities">Health Disparities & Statistics</a></li>
              <li><a href="#transgender">Transgender Healthcare</a></li>
              <li><a href="#hormone-therapy">Hormone Therapy (HRT)</a></li>
              <li><a href="#sexual-health">Sexual & Reproductive Health</a></li>
              <li><a href="#mental-health">Mental Health Support</a></li>
              <li><a href="#preventive">Preventive Care Guidelines</a></li>
              <li><a href="#youth">LGBTQ+ Youth Health</a></li>
              <li><a href="#seniors">LGBTQ+ Aging & Elder Care</a></li>
              <li><a href="#finding-care">Finding Affirming Healthcare</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>Understanding LGBTQ+ Healthcare</h2>
            <p className={styles.leadText}>
              LGBTQ+ individuals face unique healthcare challenges, including discrimination, lack of provider knowledge, and specific health disparities. Quality healthcare for LGBTQ+ people requires culturally competent providers who understand diverse identities and health needs. Despite comprising approximately 7.2% of the US population (24 million adults), LGBTQ+ individuals experience significant healthcare barriers, with 15% avoiding medical care due to fear of discrimination and 3 in 10 transgender individuals postponing care due to past discrimination experiences.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Key Healthcare Principles for LGBTQ+ Patients</h3>
              <ul className={styles.keyPointsList}>
                <li>Gender-affirming care is medically necessary, evidence-based healthcare</li>
                <li>Sexual orientation and gender identity are distinct from each other</li>
                <li>Using correct names and pronouns is essential for quality care</li>
                <li>LGBTQ+ people have diverse families and support systems</li>
                <li>Healthcare decisions should center patient autonomy and informed consent</li>
                <li>Confidentiality about LGBTQ+ status is critical for safety</li>
                <li>Inclusive language and forms improve healthcare experiences</li>
                <li>Cultural competency reduces health disparities</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>7.2%</h4>
                <p>US adults identify as LGBTQ+</p>
              </div>
              <div className={styles.statCard}>
                <h4>1 in 3</h4>
                <p>Trans people delay care due to discrimination</p>
              </div>
              <div className={styles.statCard}>
                <h4>41%</h4>
                <p>Trans adults attempted suicide</p>
              </div>
            </div>
          </section>

          <section id="disparities" className={styles.section}>
            <h2 className={styles.sectionTitle}>Health Disparities & 2025 Statistics</h2>
            <p className={styles.sectionText}>
              LGBTQ+ individuals experience significant health disparities compared to the general population, driven by minority stress, discrimination, and systemic barriers to care. Understanding these disparities is essential for providing appropriate, targeted healthcare interventions.
            </p>

            <div className={styles.warningBox}>
              <h4>Crisis in Trans Healthcare Access</h4>
              <p>
                In 2025, transgender healthcare faces unprecedented challenges with restrictive policies in multiple states, provider shortages, and insurance barriers. Over 20 states have enacted laws restricting gender-affirming care, particularly for youth, creating healthcare deserts and forcing families to travel for essential medical care.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Mental Health Disparities</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Depression & Anxiety</h3>
                <ul>
                  <li>44% of transgender adults report clinical depression</li>
                  <li>33% experience anxiety disorders</li>
                  <li>LGBTQ+ youth 4x more likely to attempt suicide</li>
                  <li>60% of LGBTQ+ youth wanted mental health care but couldn't access it</li>
                  <li>Bisexual adults have highest rates of depression (40%)</li>
                  <li>Minority stress contributes to mental health challenges</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Suicide Risk</h3>
                <ul>
                  <li>41% of trans adults have attempted suicide (26x general population)</li>
                  <li>LGBTQ+ youth suicide attempts: 45% considered, 14% attempted</li>
                  <li>Risk factors: family rejection, discrimination, violence</li>
                  <li>Protective factors: family acceptance, affirming care</li>
                  <li>Gender-affirming care reduces suicidality by 73%</li>
                  <li>Trevor Project Lifeline: 1-866-488-7386</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Physical Health Disparities</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Chronic Conditions</h3>
                <ul>
                  <li>Higher rates of cardiovascular disease</li>
                  <li>Increased obesity prevalence in lesbian/bisexual women</li>
                  <li>59% of trans adults smoke (vs 39% cisgender)</li>
                  <li>22% of trans adults have asthma (vs 14% cisgender)</li>
                  <li>Higher rates of certain cancers</li>
                  <li>Increased substance use disorders</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>HIV & STI Risk</h3>
                <ul>
                  <li>Gay/bi men: 69% of new HIV diagnoses</li>
                  <li>Trans women: 20% HIV prevalence globally</li>
                  <li>Black/Latino MSM disproportionately affected</li>
                  <li>PrEP uptake remains low in at-risk populations</li>
                  <li>STI rates increasing, especially syphilis</li>
                  <li>Barriers to testing and treatment persist</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Healthcare Access Barriers</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Provider knowledge:</strong> Lack of LGBTQ+-competent providers is top barrier</li>
                <li><strong>Insurance:</strong> 84% trans people insured vs 90% cisgender</li>
                <li><strong>Discrimination:</strong> 15% LGBTQ+ avoid care due to discrimination fears</li>
                <li><strong>Documentation:</strong> Name/gender marker mismatches create barriers</li>
                <li><strong>Geography:</strong> Rural areas lack LGBTQ+-affirming providers</li>
                <li><strong>Cost:</strong> Gender-affirming care often not covered</li>
                <li><strong>Youth access:</strong> Parental consent requirements limit care</li>
              </ul>
            </div>
          </section>

          <section id="transgender" className={styles.section}>
            <h2 className={styles.sectionTitle}>Transgender Healthcare</h2>
            <p className={styles.sectionText}>
              Transgender healthcare encompasses comprehensive medical, surgical, and mental health services that affirm gender identity. Gender-affirming care is recognized by every major medical organization as medically necessary, evidence-based treatment that significantly improves health outcomes and saves lives.
            </p>

            <h3 className={styles.subsectionTitle}>Components of Gender-Affirming Care</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Medical Interventions</h3>
                <ul>
                  <li><strong>Puberty blockers:</strong> Reversible, pause puberty for youth</li>
                  <li><strong>Hormone therapy:</strong> Estrogen or testosterone treatment</li>
                  <li><strong>Monitoring:</strong> Regular labs for hormone levels, health markers</li>
                  <li><strong>Fertility preservation:</strong> Options before starting hormones</li>
                  <li><strong>Voice therapy:</strong> Speech modification techniques</li>
                  <li><strong>Hair removal:</strong> Laser or electrolysis</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Surgical Options</h3>
                <ul>
                  <li><strong>Top surgery:</strong> Chest masculinization or breast augmentation</li>
                  <li><strong>Bottom surgery:</strong> Genital reconstruction procedures</li>
                  <li><strong>Facial surgery:</strong> Feminization or masculinization</li>
                  <li><strong>Other procedures:</strong> Tracheal shave, body contouring</li>
                  <li>Not all trans people want or need surgery</li>
                  <li>Insurance coverage varies significantly</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Informed Consent Model</h3>
            <div className={styles.infoCard}>
              <h3>Adult Hormone Therapy Access</h3>
              <ul>
                <li>Informed consent eliminates mental health letter requirements</li>
                <li>Provider educates on risks, benefits, alternatives</li>
                <li>Patient makes autonomous decision about care</li>
                <li>Any GP can prescribe for adults 18+ in this model</li>
                <li>Reduces gatekeeping and improves satisfaction</li>
                <li>Not yet standard across all US providers</li>
                <li>WPATH and Endocrine Society support this approach</li>
                <li>2025 guidelines revision pending from Endocrine Society</li>
              </ul>
            </div>

            <div className={styles.warningBox}>
              <h4>Benefits of Gender-Affirming Care</h4>
              <p>
                Research consistently shows gender-affirming care improves mental health (73% reduction in suicidality), quality of life, and overall wellbeing. Regret rates are extremely low (less than 1%), contrary to misinformation. Denying care leads to worse outcomes including increased depression, anxiety, and suicide risk.
              </p>
            </div>
          </section>

          <section id="hormone-therapy" className={styles.section}>
            <h2 className={styles.sectionTitle}>Hormone Replacement Therapy (HRT)</h2>
            <p className={styles.sectionText}>
              Hormone therapy is a cornerstone of medical transition for many transgender individuals. It involves taking hormones to develop physical characteristics that align with gender identity. Effects develop gradually over months to years.
            </p>

            <h3 className={styles.subsectionTitle}>Feminizing Hormone Therapy</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Medications & Dosing</h3>
                <ul>
                  <li><strong>Estrogen:</strong> Pills, patches, injections, gels</li>
                  <li><strong>Anti-androgens:</strong> Spironolactone, bicalutamide, GnRH agonists</li>
                  <li><strong>Progesterone:</strong> Optional, disputed benefits</li>
                  <li>Dosing individualized based on levels and response</li>
                  <li>Goal: achieve female-range hormone levels</li>
                  <li>Regular monitoring every 3-6 months</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Expected Changes</h3>
                <ul>
                  <li>Breast development (2-3 years)</li>
                  <li>Skin softening (3-6 months)</li>
                  <li>Fat redistribution (2-5 years)</li>
                  <li>Decreased muscle mass (3-6 months)</li>
                  <li>Decreased libido and erections</li>
                  <li>Testicular atrophy</li>
                  <li>Possible fertility loss</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Masculinizing Hormone Therapy</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Medications & Dosing</h3>
                <ul>
                  <li><strong>Testosterone:</strong> Injections, gels, patches</li>
                  <li>Weekly, biweekly, or daily depending on formulation</li>
                  <li>Goal: achieve male-range testosterone levels</li>
                  <li>May need to manage menstruation separately</li>
                  <li>Regular monitoring of levels and blood counts</li>
                  <li>Adjust dose based on response and side effects</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Expected Changes</h3>
                <ul>
                  <li>Voice deepening (3-12 months, permanent)</li>
                  <li>Facial/body hair growth (3-6 months)</li>
                  <li>Increased muscle mass (6-12 months)</li>
                  <li>Fat redistribution (2-5 years)</li>
                  <li>Clitoral enlargement (3-6 months)</li>
                  <li>Menstruation cessation (2-6 months)</li>
                  <li>Male pattern baldness possible</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>HRT Safety & Monitoring</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Blood tests:</strong> Hormone levels, CBC, metabolic panel, lipids</li>
                <li><strong>Cardiovascular:</strong> Monitor blood pressure, assess risk factors</li>
                <li><strong>Bone health:</strong> DEXA scan if risk factors present</li>
                <li><strong>Cancer screening:</strong> Based on organs present, not gender identity</li>
                <li><strong>Mental health:</strong> Ongoing support during transition</li>
                <li><strong>Fertility:</strong> Discuss preservation options before starting</li>
                <li><strong>Drug interactions:</strong> Review all medications and supplements</li>
              </ul>
            </div>
          </section>

          <section id="sexual-health" className={styles.section}>
            <h2 className={styles.sectionTitle}>Sexual & Reproductive Health</h2>
            <p className={styles.sectionText}>
              LGBTQ+ individuals have diverse sexual health needs requiring inclusive, non-judgmental care. Providers must avoid assumptions about sexual behavior based on identity and take comprehensive sexual histories using inclusive language.
            </p>

            <h3 className={styles.subsectionTitle}>HIV Prevention & Treatment</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>PrEP (Pre-Exposure Prophylaxis)</h3>
                <ul>
                  <li>99% effective at preventing HIV when taken daily</li>
                  <li>Recommended for MSM, trans women, PWID at risk</li>
                  <li>Options: Daily pills, injectable (every 2 months)</li>
                  <li>Requires regular HIV/STI testing and monitoring</li>
                  <li>Most insurance covers, assistance programs available</li>
                  <li>No significant long-term side effects for most</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>HIV Treatment Updates</h3>
                <ul>
                  <li>U=U: Undetectable = Untransmittable</li>
                  <li>Modern ART allows normal lifespan</li>
                  <li>Injectable long-acting options available</li>
                  <li>Rapid start protocols improve outcomes</li>
                  <li>Regular monitoring ensures viral suppression</li>
                  <li>Address stigma and mental health needs</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>STI Prevention & Screening</h3>
            <div className={styles.keyPoints}>
              <h3>Screening Recommendations</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>MSM/trans women:</strong> HIV/STI testing every 3-6 months if sexually active</li>
                <li><strong>All sites:</strong> Test pharyngeal, rectal, urethral/vaginal based on practices</li>
                <li><strong>Syphilis:</strong> Rising rates, screen regularly in at-risk populations</li>
                <li><strong>HPV:</strong> Vaccination through age 45 for at-risk individuals</li>
                <li><strong>Hepatitis:</strong> Screen for A/B/C, vaccinate when appropriate</li>
                <li><strong>Partner notification:</strong> Essential for STI control</li>
                <li><strong>Expedited partner therapy:</strong> Consider when appropriate</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Reproductive Health</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Fertility & Family Planning</h3>
                <ul>
                  <li>HRT affects but doesn't eliminate fertility</li>
                  <li>Testosterone is not birth control</li>
                  <li>Discuss fertility preservation before HRT</li>
                  <li>Options: sperm/egg/embryo freezing</li>
                  <li>Adoption and surrogacy considerations</li>
                  <li>Insurance coverage highly variable</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Pregnancy & Chest/Breastfeeding</h3>
                <ul>
                  <li>Trans men and nonbinary people can become pregnant</li>
                  <li>Usually need to pause testosterone during pregnancy</li>
                  <li>Chest/breastfeeding possible after top surgery varies</li>
                  <li>Need culturally competent prenatal care</li>
                  <li>Higher rates of depression and anxiety</li>
                  <li>Legal documentation challenges common</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="mental-health" className={styles.section}>
            <h2 className={styles.sectionTitle}>Mental Health Support</h2>
            <p className={styles.sectionText}>
              LGBTQ+ individuals face unique mental health challenges due to minority stress, discrimination, and rejection. Affirming mental healthcare that validates identity and addresses these specific stressors is essential for wellbeing.
            </p>

            <h3 className={styles.subsectionTitle}>Minority Stress Model</h3>
            <div className={styles.infoCard}>
              <h3>Understanding Minority Stress</h3>
              <ul>
                <li><strong>Distal stressors:</strong> External discrimination, violence, rejection</li>
                <li><strong>Proximal stressors:</strong> Internalized homophobia/transphobia, concealment</li>
                <li><strong>Chronic stress:</strong> Constant vigilance and identity management</li>
                <li><strong>Intersectionality:</strong> Multiple marginalized identities compound stress</li>
                <li><strong>Resilience factors:</strong> Community connection, pride, chosen family</li>
                <li>Minority stress directly linked to health disparities</li>
                <li>Affirming environments reduce stress impact</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Mental Health Interventions</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Therapeutic Approaches</h3>
                <ul>
                  <li>Affirmative therapy validates LGBTQ+ identities</li>
                  <li>CBT adapted for minority stress</li>
                  <li>Trauma-informed care for discrimination/violence</li>
                  <li>Family therapy for acceptance issues</li>
                  <li>Group therapy with LGBTQ+ peers</li>
                  <li>Avoid conversion therapy (harmful, banned in 20+ states)</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Crisis Resources</h3>
                <ul>
                  <li><strong>988:</strong> Suicide & Crisis Lifeline (ask for LGBTQ+ support)</li>
                  <li><strong>Trevor Project:</strong> 1-866-488-7386 (24/7 youth support)</li>
                  <li><strong>Trans Lifeline:</strong> 877-565-8860</li>
                  <li><strong>LGBT National Hotline:</strong> 1-888-843-4564</li>
                  <li><strong>Crisis Text Line:</strong> Text START to 678-678</li>
                  <li>Local LGBTQ+ centers often provide support</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>Supporting LGBTQ+ Mental Health</h4>
              <p>
                Family acceptance is the strongest protective factor against suicide. LGBTQ+ youth with accepting families have 50% lower suicide attempt rates. Simple actions like using correct names/pronouns, supporting identity expression, and connecting youth with LGBTQ+ community resources save lives.
              </p>
            </div>
          </section>

          <section id="preventive" className={styles.section}>
            <h2 className={styles.sectionTitle}>Preventive Care Guidelines</h2>
            <p className={styles.sectionText}>
              Preventive care for LGBTQ+ individuals follows general guidelines with important modifications based on anatomy, hormone use, and specific risk factors. Organ-based rather than gender-based screening ensures appropriate care.
            </p>

            <h3 className={styles.subsectionTitle}>Cancer Screening</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Cervical & Breast Cancer</h3>
                <ul>
                  <li>Screen anyone with a cervix regardless of gender identity</li>
                  <li>Pap smears may be traumatic; discuss comfort measures</li>
                  <li>Testosterone doesn't eliminate cervical cancer risk</li>
                  <li>Breast/chest screening based on tissue present</li>
                  <li>Top surgery doesn't eliminate all breast cancer risk</li>
                  <li>Consider family history and hormone exposure</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Prostate & Other Cancers</h3>
                <ul>
                  <li>Trans women on HRT still need prostate screening</li>
                  <li>PSA levels lower on estrogen therapy</li>
                  <li>Anal cancer screening for those with receptive anal sex</li>
                  <li>Higher smoking rates increase lung cancer risk</li>
                  <li>Skin cancer screening for all</li>
                  <li>Colorectal screening per standard guidelines</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Cardiovascular Health</h3>
            <div className={styles.keyPoints}>
              <h3>CV Risk Assessment & Management</h3>
              <ul className={styles.keyPointsList}>
                <li>Testosterone may increase cardiovascular risk slightly</li>
                <li>Estrogen's CV effects depend on route and patient factors</li>
                <li>Monitor blood pressure, lipids regularly on HRT</li>
                <li>Higher smoking rates in LGBTQ+ population increase risk</li>
                <li>Minority stress contributes to hypertension</li>
                <li>Standard prevention guidelines apply</li>
                <li>Address modifiable risk factors aggressively</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Bone Health</h3>
            <div className={styles.infoCard}>
              <h3>Osteoporosis Prevention</h3>
              <ul>
                <li>Puberty blockers may affect peak bone mass</li>
                <li>Long-term hormone therapy generally protective</li>
                <li>Screen trans women not on HRT earlier</li>
                <li>Calcium, vitamin D supplementation often needed</li>
                <li>Weight-bearing exercise important</li>
                <li>DEXA scan if risk factors present</li>
                <li>Smoking cessation crucial for bone health</li>
              </ul>
            </div>
          </section>

          <section id="youth" className={styles.section}>
            <h2 className={styles.sectionTitle}>LGBTQ+ Youth Health</h2>
            <p className={styles.sectionText}>
              LGBTQ+ youth face substantial health disparities including higher rates of depression, suicide, homelessness, and violence. Supportive healthcare and family acceptance are critical protective factors during this vulnerable developmental period.
            </p>

            <div className={styles.warningBox}>
              <h4>Youth Mental Health Crisis</h4>
              <p>
                CDC 2023 data shows LGBTQ+ students experience alarming rates of poor mental health, with 45% seriously considering suicide in the past year. Trans youth particularly affected, with higher rates of violence victimization, unstable housing, and feeling disconnected from school.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Supporting LGBTQ+ Youth</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Healthcare Considerations</h3>
                <ul>
                  <li>Confidential care for sexual health and identity</li>
                  <li>Screen for depression, anxiety, suicidality regularly</li>
                  <li>Assess safety at home and school</li>
                  <li>Puberty blockers for transgender youth when appropriate</li>
                  <li>Connect with LGBTQ+ youth resources</li>
                  <li>Address bullying and discrimination</li>
                  <li>Support social transition when desired</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Family & School Support</h3>
                <ul>
                  <li>Family acceptance reduces suicide risk by 50%</li>
                  <li>Gender-affirming schools improve mental health</li>
                  <li>GSAs (Gender-Sexuality Alliances) provide peer support</li>
                  <li>Anti-bullying policies must include LGBTQ+ protections</li>
                  <li>Inclusive sex education improves health outcomes</li>
                  <li>Chosen family important when biological family rejects</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Specific Youth Health Needs</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Homelessness:</strong> 40% of homeless youth are LGBTQ+</li>
                <li><strong>Foster care:</strong> LGBTQ+ youth overrepresented in system</li>
                <li><strong>Substance use:</strong> Higher rates of alcohol, drug use as coping</li>
                <li><strong>Dating violence:</strong> LGBTQ+ youth experience higher rates</li>
                <li><strong>Conversion therapy:</strong> Harmful practice still legal in many states</li>
                <li><strong>School safety:</strong> 70% LGBTQ+ students experience harassment</li>
                <li><strong>Internet safety:</strong> Online spaces provide support but have risks</li>
              </ul>
            </div>
          </section>

          <section id="seniors" className={styles.section}>
            <h2 className={styles.sectionTitle}>LGBTQ+ Aging & Elder Care</h2>
            <p className={styles.sectionText}>
              LGBTQ+ older adults face unique challenges including higher rates of social isolation, fear of discrimination in care settings, and lack of family support. Many go back into the closet when entering long-term care facilities.
            </p>

            <h3 className={styles.subsectionTitle}>Health Challenges in LGBTQ+ Aging</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Social & Support Issues</h3>
                <ul>
                  <li>2x more likely to live alone</li>
                  <li>4x less likely to have children</li>
                  <li>Higher rates of chosen family caregiving</li>
                  <li>Fear of discrimination in care facilities</li>
                  <li>Legal challenges with unmarried partners</li>
                  <li>Historical trauma from discrimination</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Health Disparities</h3>
                <ul>
                  <li>Higher rates of disability and chronic disease</li>
                  <li>Increased mental health challenges</li>
                  <li>HIV long-term survivors need specialized care</li>
                  <li>Effects of lifetime minority stress</li>
                  <li>Higher rates of smoking and substance use</li>
                  <li>Barriers to culturally competent care</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Creating Affirming Elder Care</h3>
              <ul className={styles.keyPointsList}>
                <li>Train staff in LGBTQ+ cultural competency</li>
                <li>Implement non-discrimination policies explicitly including LGBTQ+</li>
                <li>Use inclusive intake forms and language</li>
                <li>Display LGBTQ+-affirming symbols and materials</li>
                <li>Respect chosen family in care decisions</li>
                <li>Address isolation through LGBTQ+-specific programming</li>
                <li>Consider LGBTQ+-specific facilities where available</li>
              </ul>
            </div>
          </section>

          <section id="finding-care" className={styles.section}>
            <h2 className={styles.sectionTitle}>Finding Affirming Healthcare</h2>
            <p className={styles.sectionText}>
              Finding LGBTQ+-competent healthcare providers can be challenging. Look for providers who demonstrate cultural competency, use inclusive language, and have experience with LGBTQ+ health needs.
            </p>

            <h3 className={styles.subsectionTitle}>What to Look For</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Provider Green Flags</h3>
                <ul>
                  <li>Inclusive intake forms with chosen name/pronoun fields</li>
                  <li>LGBTQ+-affirming signage or symbols displayed</li>
                  <li>Staff trained in cultural competency</li>
                  <li>Experience with LGBTQ+ health issues</li>
                  <li>Respects confidentiality about LGBTQ+ status</li>
                  <li>Uses correct names and pronouns consistently</li>
                  <li>Non-judgmental about sexual practices</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Red Flags to Avoid</h3>
                <ul>
                  <li>Refusal to use correct names/pronouns</li>
                  <li>Excessive curiosity about LGBTQ+ identity</li>
                  <li>Assumptions about sexual behavior</li>
                  <li>Promoting conversion therapy</li>
                  <li>Lack of privacy or confidentiality</li>
                  <li>Discriminatory comments or behavior</li>
                  <li>Refusal to provide appropriate care</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Resources for Finding Care</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>GLMA Provider Directory:</strong> Healthcare professionals experienced in LGBTQ+ care</li>
                <li><strong>Planned Parenthood:</strong> Affirming sexual health and HRT services</li>
                <li><strong>Local LGBTQ+ Centers:</strong> Often maintain provider referral lists</li>
                <li><strong>WPATH Directory:</strong> Trans-experienced providers</li>
                <li><strong>Psychology Today:</strong> Filter for LGBTQ+-affirming therapists</li>
                <li><strong>Erin's Informed Consent Map:</strong> HRT providers by location</li>
                <li><strong>Word of mouth:</strong> Ask LGBTQ+ community for recommendations</li>
              </ul>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Is being LGBTQ+ a mental illness?</h3>
                <p>
                  No. Sexual orientation and gender identity are normal variations of human diversity. Being LGBTQ+ was removed from mental health diagnoses decades ago. However, LGBTQ+ people may experience mental health challenges due to discrimination and minority stress.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>At what age can someone know they're transgender?</h3>
                <p>
                  Gender identity typically develops by age 3-5. Many trans people report knowing from early childhood, though some don't realize until later. Youth who consistently, persistently, and insistently express a different gender identity should be supported and evaluated by qualified providers.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are puberty blockers safe for transgender youth?</h3>
                <p>
                  Yes. Puberty blockers are reversible medications that pause puberty, giving youth time to explore gender identity without developing permanent secondary sex characteristics. They're well-studied, FDA-approved for precocious puberty, and recommended by pediatric medical organizations when appropriate.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I need to disclose my LGBTQ+ identity to healthcare providers?</h3>
                <p>
                  Disclosure can improve care quality but isn't always necessary or safe. Consider the relevance to your care, provider's LGBTQ+ competency, and your comfort level. You have the right to confidentiality and should never be forced to disclose.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What's the difference between sexual orientation and gender identity?</h3>
                <p>
                  Sexual orientation refers to who you're attracted to (gay, lesbian, bisexual, etc.). Gender identity is your internal sense of being male, female, both, or neither. They're independent - a trans person can be any sexual orientation.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How can I be a better ally to LGBTQ+ people?</h3>
                <p>
                  Use correct names and pronouns, educate yourself, speak up against discrimination, support LGBTQ+ organizations, vote for equality, display affirming symbols, listen without judgment, and recognize that being an ally is an ongoing process of learning and growth.
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className={styles.resourcesSection}>
            <h2 className={styles.sectionTitle}>Additional Resources</h2>
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <h4>Crisis & Support Lines</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.thetrevorproject.org" target="_blank" rel="noopener">Trevor Project (Youth Crisis)</a></li>
                  <li><a href="https://translifeline.org" target="_blank" rel="noopener">Trans Lifeline</a></li>
                  <li><a href="https://www.lgbthotline.org" target="_blank" rel="noopener">LGBT National Hotline</a></li>
                  <li><a href="https://pflag.org" target="_blank" rel="noopener">PFLAG (Family Support)</a></li>
                </ul>
              </div>
              <div className={styles.resourceCard}>
                <h4>Healthcare Resources</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.glma.org" target="_blank" rel="noopener">GLMA: Health Professionals Advancing LGBTQ Equality</a></li>
                  <li><a href="https://www.wpath.org" target="_blank" rel="noopener">World Professional Association for Transgender Health</a></li>
                  <li><a href="https://transcare.ucsf.edu" target="_blank" rel="noopener">UCSF Trans Care Guidelines</a></li>
                  <li><a href="https://www.cdc.gov/lgbthealth" target="_blank" rel="noopener">CDC LGBTQ+ Health</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className={styles.relatedLinks}>
            <h3 className={styles.relatedLinksTitle}>Related Health Topics</h3>
            <div className={styles.relatedGrid}>
              <Link href="/learn/mental-health" className={styles.relatedCard}>
                <h4>Mental Health</h4>
                <p>Comprehensive mental health support</p>
              </Link>
              <Link href="/learn/preventive-care" className={styles.relatedCard}>
                <h4>Preventive Care</h4>
                <p>Screening and prevention guidelines</p>
              </Link>
              <Link href="/learn/womens-health" className={styles.relatedCard}>
                <h4>Women's Health</h4>
                <p>Inclusive reproductive care</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}