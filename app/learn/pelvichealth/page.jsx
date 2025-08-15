'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function PelvicHealthPage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Pelvic Health
            </nav>
            <h1 className={styles.articleTitle}>Pelvic Floor Health: Understanding and Treating Pelvic Floor Disorders</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Reviewed by: Medical Team</span>
              <span>Reading Time: 10 minutes</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>On This Page</h2>
            <ul className={styles.tocList}>
              <li><a href="#overview">Understanding Pelvic Floor Health</a></li>
              <li><a href="#anatomy">Pelvic Floor Anatomy</a></li>
              <li><a href="#disorders">Common Pelvic Floor Disorders</a></li>
              <li><a href="#symptoms">Signs and Symptoms</a></li>
              <li><a href="#diagnosis">Diagnosis and Evaluation</a></li>
              <li><a href="#treatment">Treatment Options</a></li>
              <li><a href="#physical-therapy">Pelvic Floor Physical Therapy</a></li>
              <li><a href="#prevention">Prevention Strategies</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>Understanding Pelvic Floor Health</h2>
            <p className={styles.leadText}>
              The pelvic floor is a group of muscles, ligaments, and tissues that support the pelvic organs including the bladder, uterus (in women), prostate (in men), and rectum. When these muscles function properly, they maintain continence, support organs, and contribute to sexual function. However, when dysfunction occurs, it can significantly impact quality of life.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Key Facts About Pelvic Floor Disorders</h3>
              <ul className={styles.keyPointsList}>
                <li>1 in 4 adult women in the US report having at least one pelvic floor disorder</li>
                <li>50% of women experience pelvic floor dysfunction within 10 years of childbirth</li>
                <li>20% of women undergo surgery for stress incontinence or pelvic organ prolapse</li>
                <li>Pelvic floor disorders affect men too, particularly after prostate surgery</li>
                <li>Most conditions can be improved with conservative treatment approaches</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>25%</h4>
                <p>Of adult women have pelvic floor disorders</p>
              </div>
              <div className={styles.statCard}>
                <h4>15-17%</h4>
                <p>Prevalence of urinary incontinence</p>
              </div>
              <div className={styles.statCard}>
                <h4>9%</h4>
                <p>Of women experience fecal incontinence</p>
              </div>
              <div className={styles.statCard}>
                <h4>3-8%</h4>
                <p>Have pelvic organ prolapse</p>
              </div>
            </div>
          </section>

          <section id="anatomy" className={styles.section}>
            <h2 className={styles.sectionTitle}>Pelvic Floor Anatomy</h2>
            <p className={styles.sectionText}>
              Understanding the pelvic floor anatomy helps explain how dysfunction can occur and why treatment approaches work. The pelvic floor consists of multiple layers of muscles that work together to provide support and function.
            </p>

            <h3 className={styles.subsectionTitle}>Components of the Pelvic Floor</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Muscle Groups</h3>
                <ul>
                  <li><strong>Levator ani:</strong> The main support muscle group</li>
                  <li><strong>Coccygeus:</strong> Supports the pelvic organs posteriorly</li>
                  <li><strong>External anal sphincter:</strong> Controls bowel continence</li>
                  <li><strong>Urethral sphincter:</strong> Controls urinary continence</li>
                  <li><strong>Deep transverse perineal:</strong> Provides additional support</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Functions</h3>
                <ul>
                  <li><strong>Support:</strong> Holds pelvic organs in place</li>
                  <li><strong>Sphincteric:</strong> Controls release of urine and stool</li>
                  <li><strong>Sexual:</strong> Contributes to arousal and orgasm</li>
                  <li><strong>Stability:</strong> Works with core muscles for trunk stability</li>
                  <li><strong>Circulation:</strong> Assists with blood and lymph flow</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="disorders" className={styles.section}>
            <h2 className={styles.sectionTitle}>Common Pelvic Floor Disorders</h2>
            <p className={styles.sectionText}>
              Pelvic floor disorders occur when the muscles become too weak, too tight, or uncoordinated. These conditions can develop gradually and often affect multiple aspects of pelvic function.
            </p>

            <h3 className={styles.subsectionTitle}>Types of Disorders</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Urinary Conditions</h3>
                <ul>
                  <li><strong>Stress incontinence:</strong> Leaking with cough, sneeze, or exercise</li>
                  <li><strong>Urge incontinence:</strong> Sudden, intense urge to urinate</li>
                  <li><strong>Mixed incontinence:</strong> Combination of stress and urge</li>
                  <li><strong>Overactive bladder:</strong> Frequent urination and urgency</li>
                  <li><strong>Incomplete emptying:</strong> Difficulty fully emptying bladder</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Bowel Conditions</h3>
                <ul>
                  <li><strong>Fecal incontinence:</strong> Loss of bowel control</li>
                  <li><strong>Constipation:</strong> Difficulty passing stool</li>
                  <li><strong>Dyssynergic defecation:</strong> Inability to coordinate muscles</li>
                  <li><strong>Rectal prolapse:</strong> Rectum protrudes through anus</li>
                  <li><strong>Incomplete evacuation:</strong> Feeling of incomplete emptying</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Pelvic Organ Prolapse</h3>
                <ul>
                  <li><strong>Cystocele:</strong> Bladder drops into vagina</li>
                  <li><strong>Rectocele:</strong> Rectum bulges into vagina</li>
                  <li><strong>Uterine prolapse:</strong> Uterus descends into vagina</li>
                  <li><strong>Enterocele:</strong> Small intestine pushes into vagina</li>
                  <li><strong>Vaginal vault prolapse:</strong> Top of vagina falls after hysterectomy</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Pain Conditions</h3>
                <ul>
                  <li><strong>Pelvic pain syndrome:</strong> Chronic pelvic pain</li>
                  <li><strong>Vulvodynia:</strong> Chronic vulvar pain</li>
                  <li><strong>Dyspareunia:</strong> Painful intercourse</li>
                  <li><strong>Vaginismus:</strong> Involuntary vaginal muscle spasms</li>
                  <li><strong>Coccydynia:</strong> Tailbone pain</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="symptoms" className={styles.section}>
            <h2 className={styles.sectionTitle}>Signs and Symptoms</h2>
            <p className={styles.sectionText}>
              Recognizing the symptoms of pelvic floor dysfunction is the first step toward getting appropriate treatment. Many people don't realize their symptoms are related to pelvic floor problems.
            </p>

            <div className={styles.warningBox}>
              <h4>When to Seek Medical Attention</h4>
              <p>
                Don't wait to seek help if you experience any pelvic floor symptoms. Early intervention often leads to better outcomes and can prevent progression. Many people suffer in silence due to embarrassment, but these are common medical conditions that healthcare providers treat regularly.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Common Symptoms by Category</h3>
            <div className={styles.keyPoints}>
              <h3>Urinary Symptoms</h3>
              <ul className={styles.keyPointsList}>
                <li>Leaking urine with coughing, sneezing, laughing, or exercise</li>
                <li>Sudden, strong urges to urinate that are difficult to control</li>
                <li>Frequent urination (more than 8 times per day)</li>
                <li>Getting up multiple times at night to urinate</li>
                <li>Difficulty starting urination or weak urine stream</li>
                <li>Feeling of incomplete bladder emptying</li>
              </ul>
            </div>

            <div className={styles.keyPoints}>
              <h3>Bowel Symptoms</h3>
              <ul className={styles.keyPointsList}>
                <li>Loss of bowel control or fecal incontinence</li>
                <li>Difficulty controlling gas</li>
                <li>Straining to have bowel movements</li>
                <li>Feeling of incomplete evacuation</li>
                <li>Need to use manual pressure to complete bowel movements</li>
                <li>Chronic constipation or difficulty passing stool</li>
              </ul>
            </div>

            <div className={styles.keyPoints}>
              <h3>Prolapse Symptoms</h3>
              <ul className={styles.keyPointsList}>
                <li>Feeling of heaviness or pressure in the pelvis</li>
                <li>Visible or palpable bulge in the vagina</li>
                <li>Sensation of sitting on a ball</li>
                <li>Lower back pain that worsens throughout the day</li>
                <li>Difficulty with tampon insertion or retention</li>
                <li>Need to push organs back to urinate or have bowel movement</li>
              </ul>
            </div>
          </section>

          <section id="diagnosis" className={styles.section}>
            <h2 className={styles.sectionTitle}>Diagnosis and Evaluation</h2>
            <p className={styles.sectionText}>
              Proper diagnosis of pelvic floor disorders involves a comprehensive evaluation by healthcare providers trained in pelvic floor assessment. The evaluation process is thorough but typically non-invasive.
            </p>

            <h3 className={styles.subsectionTitle}>Diagnostic Process</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Medical History</h3>
                <ul>
                  <li>Detailed symptom questionnaire</li>
                  <li>Obstetric and gynecologic history</li>
                  <li>Surgical history</li>
                  <li>Medication review</li>
                  <li>Bladder and bowel diary</li>
                  <li>Quality of life assessment</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Physical Examination</h3>
                <ul>
                  <li>External pelvic examination</li>
                  <li>Internal muscle assessment</li>
                  <li>Pelvic organ prolapse evaluation</li>
                  <li>Neurological testing</li>
                  <li>Core stability assessment</li>
                  <li>Posture and alignment evaluation</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Specialized Testing</h3>
                <ul>
                  <li><strong>Urodynamics:</strong> Bladder function testing</li>
                  <li><strong>Anorectal manometry:</strong> Rectal muscle testing</li>
                  <li><strong>EMG biofeedback:</strong> Muscle activity measurement</li>
                  <li><strong>Ultrasound:</strong> Imaging of pelvic structures</li>
                  <li><strong>MRI defecography:</strong> Dynamic imaging of defecation</li>
                  <li><strong>Cystoscopy:</strong> Visual bladder examination</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="treatment" className={styles.section}>
            <h2 className={styles.sectionTitle}>Treatment Options</h2>
            <p className={styles.sectionText}>
              Treatment for pelvic floor disorders is highly individualized and often involves a combination of approaches. Most patients see significant improvement with conservative treatments before considering surgery.
            </p>

            <h3 className={styles.subsectionTitle}>Conservative Treatments</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Behavioral Modifications</h3>
                <ul>
                  <li>Bladder and bowel retraining</li>
                  <li>Fluid and dietary management</li>
                  <li>Weight loss if overweight</li>
                  <li>Smoking cessation</li>
                  <li>Proper lifting techniques</li>
                  <li>Constipation management</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Medications</h3>
                <ul>
                  <li>Anticholinergics for overactive bladder</li>
                  <li>Beta-3 agonists for urgency</li>
                  <li>Topical estrogen for postmenopausal women</li>
                  <li>Stool softeners and laxatives</li>
                  <li>Muscle relaxants for pelvic pain</li>
                  <li>Nerve pain medications</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Devices and Supports</h3>
                <ul>
                  <li>Pessaries for prolapse support</li>
                  <li>Vaginal weights for strengthening</li>
                  <li>Biofeedback devices</li>
                  <li>Electrical stimulation units</li>
                  <li>Incontinence pads and products</li>
                  <li>Rectal inserts for fecal incontinence</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Advanced Treatments</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Minimally Invasive Procedures</h3>
                <ul>
                  <li>Botox injections for overactive bladder</li>
                  <li>Nerve stimulation (sacral neuromodulation)</li>
                  <li>Percutaneous tibial nerve stimulation</li>
                  <li>Urethral bulking injections</li>
                  <li>Trigger point injections</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Surgical Options</h3>
                <ul>
                  <li>Sling procedures for stress incontinence</li>
                  <li>Prolapse repair surgeries</li>
                  <li>Hysterectomy for severe uterine prolapse</li>
                  <li>Colpocleisis for elderly patients</li>
                  <li>Artificial urinary sphincter</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="physical-therapy" className={styles.section}>
            <h2 className={styles.sectionTitle}>Pelvic Floor Physical Therapy</h2>
            <p className={styles.sectionText}>
              Pelvic floor physical therapy is often the first-line treatment for many pelvic floor disorders. Specialized physical therapists use various techniques to help patients improve muscle function and reduce symptoms.
            </p>

            <div className={styles.keyPoints}>
              <h3>Components of Pelvic Floor PT</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Manual therapy:</strong> Hands-on techniques to release tight muscles and improve mobility</li>
                <li><strong>Biofeedback:</strong> Visual or auditory feedback to improve muscle awareness and control</li>
                <li><strong>Therapeutic exercises:</strong> Targeted exercises for strengthening or relaxation</li>
                <li><strong>Core strengthening:</strong> Pilates and exercises to support the pelvic floor</li>
                <li><strong>Electrical stimulation:</strong> Mild current to strengthen weak muscles</li>
                <li><strong>Education:</strong> Proper body mechanics and lifestyle modifications</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Biofeedback Therapy</h3>
            <p className={styles.sectionText}>
              Biofeedback is a powerful tool that helps patients learn to control their pelvic floor muscles. Using sensors that measure muscle activity, patients receive real-time feedback about their muscle function.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>How Biofeedback Works</h3>
                <ul>
                  <li>External or internal sensors measure muscle activity</li>
                  <li>Information displays on a computer screen</li>
                  <li>Visual or audio cues guide proper muscle use</li>
                  <li>Patients learn correct muscle coordination</li>
                  <li>Progress is tracked over time</li>
                  <li>Home exercises reinforce learning</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>2025 Innovations</h3>
                <ul>
                  <li>External-only biofeedback options available</li>
                  <li>Home biofeedback devices and apps</li>
                  <li>Telehealth pelvic floor therapy sessions</li>
                  <li>Wearable sensors for continuous monitoring</li>
                  <li>AI-guided exercise programs</li>
                  <li>Virtual reality training systems</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>Important Note About Kegel Exercises</h4>
              <p>
                While Kegel exercises are often recommended, doing them incorrectly or when inappropriate can worsen symptoms. Some conditions require muscle relaxation rather than strengthening. Always work with a qualified provider to ensure you're doing the right exercises correctly.
              </p>
            </div>
          </section>

          <section id="prevention" className={styles.section}>
            <h2 className={styles.sectionTitle}>Prevention Strategies</h2>
            <p className={styles.sectionText}>
              While not all pelvic floor disorders can be prevented, certain lifestyle modifications and preventive measures can reduce risk and maintain pelvic floor health throughout life.
            </p>

            <h3 className={styles.subsectionTitle}>Risk Factor Modification</h3>
            <div className={styles.keyPoints}>
              <h3>Modifiable Risk Factors</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Weight management:</strong> Maintain healthy BMI to reduce pressure on pelvic floor</li>
                <li><strong>Proper lifting:</strong> Use legs, not back, and avoid holding breath</li>
                <li><strong>Constipation prevention:</strong> Adequate fiber and water intake</li>
                <li><strong>Smoking cessation:</strong> Reduces chronic cough and tissue damage</li>
                <li><strong>Exercise wisely:</strong> Low-impact activities when at risk</li>
                <li><strong>Posture awareness:</strong> Maintain good alignment throughout the day</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Life Stage Considerations</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Pregnancy & Postpartum</h3>
                <ul>
                  <li>Prenatal pelvic floor exercises</li>
                  <li>Perineal massage in third trimester</li>
                  <li>Proper pushing techniques during delivery</li>
                  <li>Postpartum recovery exercises</li>
                  <li>Gradual return to exercise</li>
                  <li>Early treatment of symptoms</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Menopause & Beyond</h3>
                <ul>
                  <li>Hormone therapy consideration</li>
                  <li>Regular pelvic floor exercises</li>
                  <li>Calcium and vitamin D supplementation</li>
                  <li>Fall prevention strategies</li>
                  <li>Regular medical check-ups</li>
                  <li>Prompt treatment of UTIs</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Are pelvic floor disorders normal after childbirth?</h3>
                <p>
                  While common, pelvic floor disorders are not "normal" and shouldn't be accepted as inevitable. Up to 50% of women experience some dysfunction after childbirth, but effective treatments are available. Early intervention can prevent progression.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can men have pelvic floor disorders?</h3>
                <p>
                  Yes, men can experience pelvic floor dysfunction, particularly after prostate surgery, with chronic pelvic pain syndrome, or with bowel disorders. Men benefit from the same conservative treatments including pelvic floor physical therapy.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long does pelvic floor physical therapy take?</h3>
                <p>
                  Most patients see improvement within 4-6 weekly sessions, though full recovery can take 3-6 months of consistent therapy and home exercises. Complex cases may require longer treatment. Consistency with home exercises is crucial for success.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is pelvic floor therapy covered by insurance?</h3>
                <p>
                  Most insurance plans, including Medicare, cover pelvic floor physical therapy when medically necessary. Coverage varies by plan, so check with your insurance provider. Many therapists offer self-pay options if needed.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I do pelvic floor exercises during pregnancy?</h3>
                <p>
                  Yes, pelvic floor exercises during pregnancy can help prepare for delivery and reduce risk of postpartum dysfunction. However, work with a qualified provider to ensure you're doing appropriate exercises for your stage of pregnancy.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>When should I consider surgery?</h3>
                <p>
                  Surgery is typically considered after conservative treatments have been tried for at least 3-6 months without adequate improvement. The decision depends on symptom severity, impact on quality of life, and individual factors. Many patients achieve satisfactory results without surgery.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className={styles.relatedLinks}>
            <h3 className={styles.relatedLinksTitle}>Related Health Topics</h3>
            <div className={styles.relatedGrid}>
              <Link href="/learn/womens-health" className={styles.relatedCard}>
                <h4>Women's Health</h4>
                <p>Comprehensive women's healthcare information</p>
              </Link>
              <Link href="/learn/mens-health" className={styles.relatedCard}>
                <h4>Men's Health</h4>
                <p>Men's health concerns and prevention</p>
              </Link>
              <Link href="/services/corelift" className={styles.relatedCard}>
                <h4>CoreLift™ Program</h4>
                <p>Our specialized pelvic floor treatment program</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
