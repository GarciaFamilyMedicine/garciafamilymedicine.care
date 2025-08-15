'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function PainManagementPage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Pain Management
            </nav>
            <h1 className={styles.articleTitle}>Pain Management: Evidence-Based Approaches to Relief</h1>
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
              <li><a href="#overview">Understanding Pain</a></li>
              <li><a href="#types">Types of Pain</a></li>
              <li><a href="#assessment">Pain Assessment</a></li>
              <li><a href="#non-drug">Non-Drug Treatments</a></li>
              <li><a href="#medications">Medication Options</a></li>
              <li><a href="#chronic">Chronic Pain Management</a></li>
              <li><a href="#guidelines">2022 CDC Guidelines</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>Understanding Pain</h2>
            <p className={styles.leadText}>
              Pain is a complex experience involving physical sensations and emotional responses that serves as the body's warning system. While acute pain protects us from harm, chronic pain can persist long after healing, affecting 50 million US adults and significantly impacting quality of life. Modern pain management emphasizes multimodal approaches that address both physical and psychological aspects of pain.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Key Pain Concepts</h3>
              <ul className={styles.keyPointsList}>
                <li>Pain is subjective - your experience is valid and real</li>
                <li>Chronic pain affects 20% of adults, with 8% experiencing high-impact chronic pain</li>
                <li>Pain involves complex interactions between body, brain, and environment</li>
                <li>Effective management often requires multiple approaches</li>
                <li>Non-drug therapies are first-line treatments for most chronic pain</li>
                <li>Psychological factors significantly influence pain perception</li>
                <li>Patient-centered care improves outcomes</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>50M</h4>
                <p>US adults with chronic pain</p>
              </div>
              <div className={styles.statCard}>
                <h4>$560B</h4>
                <p>Annual cost of chronic pain</p>
              </div>
              <div className={styles.statCard}>
                <h4>#1</h4>
                <p>Leading cause of disability</p>
              </div>
            </div>
          </section>

          <section id="types" className={styles.section}>
            <h2 className={styles.sectionTitle}>Types of Pain</h2>
            <p className={styles.sectionText}>
              Understanding different pain types helps guide appropriate treatment. Pain can be classified by duration, mechanism, and location, with many conditions involving multiple pain types.
            </p>

            <h3 className={styles.subsectionTitle}>Classification by Duration</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Acute Pain (< 3 months)</h3>
                <ul>
                  <li>Usually has identifiable cause</li>
                  <li>Serves protective function</li>
                  <li>Resolves with healing</li>
                  <li>Examples: surgery, injury, infection</li>
                  <li>Treatment focuses on cause and comfort</li>
                  <li>Generally responds well to medications</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Chronic Pain (> 3 months)</h3>
                <ul>
                  <li>Persists beyond normal healing time</li>
                  <li>May lack clear ongoing cause</li>
                  <li>Often involves central sensitization</li>
                  <li>Examples: arthritis, fibromyalgia, neuropathy</li>
                  <li>Requires multimodal management</li>
                  <li>Focus on function and quality of life</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Classification by Mechanism</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Nociceptive Pain</h3>
                <ul>
                  <li><strong>Somatic:</strong> From skin, muscles, bones</li>
                  <li><strong>Visceral:</strong> From internal organs</li>
                  <li>Results from tissue damage or inflammation</li>
                  <li>Often described as aching, throbbing</li>
                  <li>Responds to NSAIDs, acetaminophen</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Neuropathic Pain</h3>
                <ul>
                  <li>From nerve damage or dysfunction</li>
                  <li>Burning, tingling, shooting sensations</li>
                  <li>Examples: diabetic neuropathy, shingles</li>
                  <li>May include allodynia (pain from light touch)</li>
                  <li>Responds to anticonvulsants, antidepressants</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>Nociplastic Pain</h4>
              <p>
                Pain arising from altered pain processing without clear tissue damage or nerve lesions. Common in fibromyalgia, IBS, and chronic headaches. Requires comprehensive approach addressing central sensitization.
              </p>
            </div>
          </section>

          <section id="assessment" className={styles.section}>
            <h2 className={styles.sectionTitle}>Pain Assessment</h2>
            <p className={styles.sectionText}>
              Comprehensive pain assessment guides effective treatment. Healthcare providers use various tools to understand pain intensity, quality, impact, and contributing factors.
            </p>

            <div className={styles.keyPoints}>
              <h3>Assessment Components</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Location:</strong> Where pain occurs, radiation patterns</li>
                <li><strong>Intensity:</strong> 0-10 scale, mild/moderate/severe</li>
                <li><strong>Quality:</strong> Sharp, dull, burning, throbbing</li>
                <li><strong>Timing:</strong> Constant, intermittent, triggers</li>
                <li><strong>Impact:</strong> Function, sleep, mood, relationships</li>
                <li><strong>Previous treatments:</strong> What helped or didn't</li>
                <li><strong>Goals:</strong> Realistic expectations for improvement</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Red Flags Requiring Immediate Attention</h3>
            <div className={styles.warningBox}>
              <h4>Seek Emergency Care For:</h4>
              <p>
                Sudden severe headache, chest pain, abdominal pain with fever, new neurological symptoms, trauma with severe pain, signs of infection at pain site, or pain with unexplained weight loss.
              </p>
            </div>
          </section>

          <section id="non-drug" className={styles.section}>
            <h2 className={styles.sectionTitle}>Non-Drug Pain Management</h2>
            <p className={styles.sectionText}>
              The CDC recommends maximizing non-pharmacologic therapies as first-line treatment for chronic pain. These approaches are effective, safe, and can improve function without medication risks.
            </p>

            <h3 className={styles.subsectionTitle}>Physical Therapies</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Exercise & Movement</h3>
                <ul>
                  <li>Aerobic exercise reduces pain sensitivity</li>
                  <li>Strength training improves support</li>
                  <li>Stretching maintains flexibility</li>
                  <li>Aquatic therapy for joint conditions</li>
                  <li>Tai chi and yoga combine multiple benefits</li>
                  <li>Start low, go slow principle</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Manual Therapies</h3>
                <ul>
                  <li>Physical therapy for specific conditions</li>
                  <li>Massage for muscle tension</li>
                  <li>Chiropractic for back pain</li>
                  <li>Acupuncture shows benefit for many conditions</li>
                  <li>Heat/cold therapy for acute pain</li>
                  <li>TENS units for localized pain</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Psychological Approaches</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Cognitive Behavioral Therapy</h3>
                <ul>
                  <li>Changes pain-related thoughts and behaviors</li>
                  <li>Develops coping strategies</li>
                  <li>Addresses catastrophizing</li>
                  <li>Improves self-efficacy</li>
                  <li>12-16 sessions typical</li>
                  <li>Can be individual or group</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Mind-Body Techniques</h3>
                <ul>
                  <li>Mindfulness meditation reduces pain intensity</li>
                  <li>Progressive muscle relaxation</li>
                  <li>Biofeedback for muscle tension</li>
                  <li>Guided imagery and visualization</li>
                  <li>Deep breathing exercises</li>
                  <li>Stress reduction programs</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Lifestyle Modifications</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Sleep hygiene:</strong> 7-9 hours, consistent schedule</li>
                <li><strong>Weight management:</strong> Reduces joint stress</li>
                <li><strong>Nutrition:</strong> Anti-inflammatory diet, adequate hydration</li>
                <li><strong>Smoking cessation:</strong> Improves healing and pain</li>
                <li><strong>Alcohol moderation:</strong> Avoid self-medication</li>
                <li><strong>Pacing activities:</strong> Balance rest and activity</li>
                <li><strong>Ergonomics:</strong> Proper posture and workspace</li>
              </ul>
            </div>
          </section>

          <section id="medications" className={styles.section}>
            <h2 className={styles.sectionTitle}>Medication Options</h2>
            <p className={styles.sectionText}>
              When medications are necessary, selection depends on pain type, severity, and individual factors. The goal is effective relief with minimal risks and side effects.
            </p>

            <h3 className={styles.subsectionTitle}>Non-Opioid Medications</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Over-the-Counter Options</h3>
                <ul>
                  <li><strong>Acetaminophen:</strong> First-line for mild pain</li>
                  <li><strong>NSAIDs:</strong> Ibuprofen, naproxen for inflammation</li>
                  <li>Topical preparations for localized pain</li>
                  <li>Combination products (use cautiously)</li>
                  <li>Follow dosing guidelines carefully</li>
                  <li>Consider kidney, liver, stomach risks</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Prescription Non-Opioids</h3>
                <ul>
                  <li><strong>Antidepressants:</strong> SNRIs, TCAs for neuropathic pain</li>
                  <li><strong>Anticonvulsants:</strong> Gabapentin, pregabalin</li>
                  <li><strong>Muscle relaxants:</strong> For acute muscle spasms</li>
                  <li><strong>Corticosteroids:</strong> For inflammatory conditions</li>
                  <li><strong>Topical agents:</strong> Lidocaine, capsaicin</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Opioid Considerations</h3>
            <div className={styles.warningBox}>
              <h4>CDC Opioid Guidelines (2022)</h4>
              <p>
                Opioids should be used only when benefits outweigh risks. Non-opioid therapies are preferred for chronic pain. When opioids are used: start with lowest effective dose, use immediate-release formulations, reassess within 1-4 weeks, and avoid concurrent benzodiazepines.
              </p>
            </div>

            <div className={styles.keyPoints}>
              <h3>Safe Medication Use</h3>
              <ul className={styles.keyPointsList}>
                <li>Take medications exactly as prescribed</li>
                <li>Don't share pain medications with others</li>
                <li>Store medications securely, dispose properly</li>
                <li>Report side effects to healthcare provider</li>
                <li>Avoid alcohol with pain medications</li>
                <li>Discuss all medications including OTC and supplements</li>
                <li>Never stop medications suddenly without guidance</li>
              </ul>
            </div>
          </section>

          <section id="chronic" className={styles.section}>
            <h2 className={styles.sectionTitle}>Living with Chronic Pain</h2>
            <p className={styles.sectionText}>
              Chronic pain management focuses on improving function and quality of life rather than eliminating pain completely. A comprehensive approach addresses physical, emotional, and social aspects.
            </p>

            <h3 className={styles.subsectionTitle}>Self-Management Strategies</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Daily Management</h3>
                <ul>
                  <li>Keep a pain diary to identify patterns</li>
                  <li>Practice pacing - balance activity and rest</li>
                  <li>Use assistive devices when helpful</li>
                  <li>Maintain social connections</li>
                  <li>Engage in enjoyable activities</li>
                  <li>Set realistic, achievable goals</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Building Resilience</h3>
                <ul>
                  <li>Develop multiple coping strategies</li>
                  <li>Practice acceptance and adaptation</li>
                  <li>Focus on what you can control</li>
                  <li>Celebrate small victories</li>
                  <li>Build support network</li>
                  <li>Consider support groups</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Common Chronic Pain Conditions</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Low back pain:</strong> Affects 80% of adults, often improves with movement</li>
                <li><strong>Arthritis:</strong> 54 million adults, exercise crucial for management</li>
                <li><strong>Fibromyalgia:</strong> 4 million adults, requires multimodal approach</li>
                <li><strong>Neuropathy:</strong> Often from diabetes, benefits from early treatment</li>
                <li><strong>Migraine:</strong> 39 million Americans, identify and avoid triggers</li>
                <li><strong>Chronic pelvic pain:</strong> Multidisciplinary care often needed</li>
              </ul>
            </div>
          </section>

          <section id="guidelines" className={styles.section}>
            <h2 className={styles.sectionTitle}>2022 CDC Clinical Practice Guidelines</h2>
            <p className={styles.sectionText}>
              The CDC's updated guidelines emphasize patient-centered care, non-opioid therapies, and careful risk-benefit assessment when opioids are considered necessary.
            </p>

            <div className={styles.keyPoints}>
              <h3>Key Recommendations</h3>
              <ul className={styles.keyPointsList}>
                <li>Maximize non-pharmacologic and non-opioid therapies</li>
                <li>Establish realistic treatment goals focused on function</li>
                <li>Use multimodal and multidisciplinary approaches</li>
                <li>When opioids needed, use lowest effective dose</li>
                <li>Avoid rigid dose or duration limits</li>
                <li>Individualize treatment based on patient needs</li>
                <li>Regular reassessment and dose tapering when appropriate</li>
              </ul>
            </div>

            <div className={styles.warningBox}>
              <h4>Important Note on Guidelines</h4>
              <p>
                Guidelines are voluntary and support individualized care. They should not be used to set rigid standards or deny necessary treatment. Flexibility to meet specific patient needs is paramount.
              </p>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>When should I see a doctor about pain?</h3>
                <p>
                  Seek care for pain lasting over a few days, worsening pain, pain affecting daily activities, or pain with concerning symptoms like fever, numbness, or weakness.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are non-drug treatments really effective?</h3>
                <p>
                  Yes, research shows non-drug therapies are as effective as opioids for many conditions, with fewer risks. Exercise, CBT, and physical therapy have strong evidence for chronic pain.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is chronic pain "all in my head"?</h3>
                <p>
                  No. Chronic pain involves real physical changes in the nervous system. While psychological factors influence pain, your pain is real and valid regardless of the cause.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I become addicted to pain medications?</h3>
                <p>
                  Risk varies by medication type. Opioids carry addiction risk, while most other pain medications don't. Discuss concerns with your provider and use medications as directed.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Should I push through pain with exercise?</h3>
                <p>
                  Some discomfort is normal when starting exercise, but sharp or worsening pain means stop. Start slowly, progress gradually, and work with professionals for safe exercise plans.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What if nothing seems to help my pain?</h3>
                <p>
                  Don't give up. Pain management often requires trying multiple approaches. Consider pain specialists, comprehensive pain programs, or clinical trials for difficult cases.
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
                  <li><a href="https://www.cdc.gov/overdose-prevention/hcp/clinical-guidance" target="_blank" rel="noopener">CDC Pain Management Guidelines</a></li>
                  <li><a href="https://www.iasp-pain.org" target="_blank" rel="noopener">International Association for the Study of Pain</a></li>
                  <li><a href="https://americanpainsociety.org" target="_blank" rel="noopener">American Chronic Pain Association</a></li>
                </ul>
              </div>
              <div className={styles.resourceCard}>
                <h4>Patient Resources</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.theacpa.org" target="_blank" rel="noopener">ACPA Resource Library</a></li>
                  <li><a href="https://www.painconnection.org" target="_blank" rel="noopener">Pain Connection Support</a></li>
                  <li><a href="https://www.arthritis.org" target="_blank" rel="noopener">Arthritis Foundation</a></li>
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
                <p>Pain and mental health connection</p>
              </Link>
              <Link href="/learn/chronic-disease" className={styles.relatedCard}>
                <h4>Chronic Disease</h4>
                <p>Managing long-term conditions</p>
              </Link>
              <Link href="/learn/weight-management" className={styles.relatedCard}>
                <h4>Weight Management</h4>
                <p>Reducing joint stress through weight</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}