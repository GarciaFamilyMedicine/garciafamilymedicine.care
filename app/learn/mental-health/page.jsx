'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function MentalHealthPage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Mental Health
            </nav>
            <h1 className={styles.articleTitle}>Mental Health: Understanding and Improving Emotional Well-being</h1>
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
              <li><a href="#overview">Understanding Mental Health</a></li>
              <li><a href="#statistics">Current Statistics & Trends</a></li>
              <li><a href="#common-conditions">Common Mental Health Conditions</a></li>
              <li><a href="#signs-symptoms">Recognizing Signs & Symptoms</a></li>
              <li><a href="#treatment">Treatment Options</a></li>
              <li><a href="#self-care">Self-Care Strategies</a></li>
              <li><a href="#crisis">Crisis Resources</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>Understanding Mental Health</h2>
            <p className={styles.leadText}>
              Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel, and act, influencing how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood through adulthood, and can change over time depending on various factors.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Key Components of Mental Health</h3>
              <ul className={styles.keyPointsList}>
                <li>Emotional well-being: Managing feelings and expressing emotions appropriately</li>
                <li>Psychological well-being: Cognitive functioning and thought patterns</li>
                <li>Social well-being: Relationships and community connections</li>
                <li>Resilience: Ability to cope with life challenges</li>
                <li>Self-esteem: Positive sense of self-worth</li>
                <li>Purpose: Finding meaning and direction in life</li>
                <li>Balance: Managing various life demands effectively</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>1 in 4</h4>
                <p>Adults experience mental illness yearly</p>
              </div>
              <div className={styles.statCard}>
                <h4>50%</h4>
                <p>Mental illness begins by age 14</p>
              </div>
              <div className={styles.statCard}>
                <h4>75%</h4>
                <p>Mental illness begins by age 24</p>
              </div>
            </div>
          </section>

          <section id="statistics" className={styles.section}>
            <h2 className={styles.sectionTitle}>2024 Mental Health Statistics & Trends</h2>
            <p className={styles.sectionText}>
              Mental health conditions affect millions of Americans, with significant impacts on individuals, families, and communities. The latest data from SAMHSA and NIMH reveals both concerning trends and signs of progress.
            </p>

            <div className={styles.warningBox}>
              <h4>Youth Mental Health Crisis</h4>
              <p>
                In 2024, 15.4% of adolescents (3.8 million) experienced a major depressive episode, with 10.1% reporting serious thoughts of suicide. The percentage citing stigma as a barrier to treatment rose to 90.5%, highlighting the urgent need for accessible, stigma-free mental health services.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Prevalence by Condition</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Depression</h3>
                <ul>
                  <li>21.4 million adults with major depression</li>
                  <li>8.2% of adults experienced MDE in past year</li>
                  <li>14.7 million with severe impairment</li>
                  <li>Women twice as likely as men</li>
                  <li>Highest rates in ages 18-25 (18.6%)</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Anxiety Disorders</h3>
                <ul>
                  <li>19.1% of adults affected annually</li>
                  <li>31.1% lifetime prevalence</li>
                  <li>11% of children have diagnosed anxiety</li>
                  <li>Women 60% more likely than men</li>
                  <li>Often co-occurs with depression</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Treatment Access & Barriers</h3>
            <div className={styles.keyPoints}>
              <h3>Current Treatment Landscape</h3>
              <ul className={styles.keyPointsList}>
                <li>Only 60.6% of adolescents with depression receive treatment</li>
                <li>19.3% of those needing substance use treatment receive it</li>
                <li>61.5 million adults have any mental illness (AMI)</li>
                <li>14.6 million adults have serious mental illness (SMI)</li>
                <li>Cost and stigma remain primary barriers to care</li>
                <li>Rural areas face significant provider shortages</li>
              </ul>
            </div>
          </section>

          <section id="common-conditions" className={styles.section}>
            <h2 className={styles.sectionTitle}>Common Mental Health Conditions</h2>
            <p className={styles.sectionText}>
              Mental health conditions vary widely in symptoms, severity, and impact. Understanding these conditions helps reduce stigma and encourages appropriate treatment seeking.
            </p>

            <h3 className={styles.subsectionTitle}>Mood Disorders</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Major Depression</h3>
                <ul>
                  <li><strong>Symptoms:</strong> Persistent sadness, hopelessness</li>
                  <li>Loss of interest in activities</li>
                  <li>Changes in appetite and sleep</li>
                  <li>Difficulty concentrating</li>
                  <li>Thoughts of death or suicide</li>
                  <li><strong>Duration:</strong> At least 2 weeks</li>
                  <li><strong>Treatment:</strong> Therapy, medication, lifestyle</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Bipolar Disorder</h3>
                <ul>
                  <li><strong>Types:</strong> Bipolar I, II, Cyclothymic</li>
                  <li>Manic episodes: Elevated mood, decreased sleep</li>
                  <li>Depressive episodes: Similar to major depression</li>
                  <li>Impacts 2.8% of US adults</li>
                  <li>Usually appears in late teens/early 20s</li>
                  <li><strong>Treatment:</strong> Mood stabilizers, therapy</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Anxiety Disorders</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Generalized Anxiety Disorder</h3>
                <ul>
                  <li>Excessive worry about various topics</li>
                  <li>Difficulty controlling worry</li>
                  <li>Physical symptoms: tension, fatigue</li>
                  <li>Affects 3.1% of US adults yearly</li>
                  <li>Women twice as likely affected</li>
                  <li><strong>Treatment:</strong> CBT, medications, relaxation</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Panic Disorder</h3>
                <ul>
                  <li>Recurrent unexpected panic attacks</li>
                  <li>Intense fear with physical symptoms</li>
                  <li>Fear of future attacks</li>
                  <li>Affects 2-3% of adults yearly</li>
                  <li>Often develops in early adulthood</li>
                  <li><strong>Treatment:</strong> CBT, exposure therapy, medication</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Trauma & Stress-Related</h3>
            <div className={styles.infoCard}>
              <h3>Post-Traumatic Stress Disorder (PTSD)</h3>
              <ul>
                <li><strong>Triggers:</strong> Trauma exposure (direct or witnessed)</li>
                <li><strong>Symptoms:</strong> Intrusive memories, avoidance, negative mood changes</li>
                <li>Hypervigilance and exaggerated startle response</li>
                <li>Affects 3.5% of US adults yearly</li>
                <li>Higher rates in veterans and first responders</li>
                <li><strong>Treatment:</strong> Trauma-focused therapy, EMDR, medications</li>
              </ul>
            </div>
          </section>

          <section id="signs-symptoms" className={styles.section}>
            <h2 className={styles.sectionTitle}>Recognizing Signs & Symptoms</h2>
            <p className={styles.sectionText}>
              Early recognition of mental health symptoms enables timely intervention and better outcomes. Symptoms can vary by person and condition but often include changes in thinking, mood, and behavior.
            </p>

            <div className={styles.warningBox}>
              <h4>Warning Signs Requiring Immediate Help</h4>
              <p>
                Seek immediate help for: thoughts of suicide or self-harm, hearing voices, seeing things others don't, inability to perform daily activities, substance use to cope, or extreme mood swings affecting relationships.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Common Warning Signs</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Emotional Changes</h3>
                <ul>
                  <li>Prolonged sadness or irritability</li>
                  <li>Extreme mood changes</li>
                  <li>Excessive fears or worries</li>
                  <li>Feeling overwhelmed constantly</li>
                  <li>Loss of interest in activities</li>
                  <li>Feelings of guilt or worthlessness</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Physical & Behavioral Changes</h3>
                <ul>
                  <li>Changes in sleeping or eating patterns</li>
                  <li>Fatigue and low energy</li>
                  <li>Difficulty concentrating</li>
                  <li>Withdrawal from friends and activities</li>
                  <li>Substance use increase</li>
                  <li>Unexplained physical ailments</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="treatment" className={styles.section}>
            <h2 className={styles.sectionTitle}>Evidence-Based Treatment Options</h2>
            <p className={styles.sectionText}>
              Mental health treatment has evolved significantly, with numerous effective options available. Most people benefit from a combination of approaches tailored to their specific needs and preferences.
            </p>

            <h3 className={styles.subsectionTitle}>Psychotherapy Approaches</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Cognitive Behavioral Therapy (CBT)</h3>
                <ul>
                  <li>Identifies negative thought patterns</li>
                  <li>Develops coping strategies</li>
                  <li>Effective for depression, anxiety, PTSD</li>
                  <li>Typically 12-20 sessions</li>
                  <li>Can be individual or group format</li>
                  <li>Skills-based and practical</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Other Therapies</h3>
                <ul>
                  <li><strong>DBT:</strong> Emotion regulation skills</li>
                  <li><strong>EMDR:</strong> Trauma processing</li>
                  <li><strong>IPT:</strong> Interpersonal focus</li>
                  <li><strong>ACT:</strong> Acceptance and mindfulness</li>
                  <li><strong>Family therapy:</strong> System approach</li>
                  <li><strong>Group therapy:</strong> Peer support</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Medication Management</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Common Medications</h3>
                <ul>
                  <li><strong>Antidepressants:</strong> SSRIs, SNRIs, others</li>
                  <li><strong>Anti-anxiety:</strong> Benzodiazepines, buspirone</li>
                  <li><strong>Mood stabilizers:</strong> Lithium, anticonvulsants</li>
                  <li><strong>Antipsychotics:</strong> For severe symptoms</li>
                  <li><strong>Stimulants:</strong> ADHD treatment</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Important Considerations</h3>
                <ul>
                  <li>May take 4-8 weeks for full effect</li>
                  <li>Side effects often improve over time</li>
                  <li>Never stop suddenly without medical guidance</li>
                  <li>Regular monitoring essential</li>
                  <li>Genetic testing can guide selection</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Integrated Treatment Approach</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Combination therapy:</strong> Medication plus psychotherapy most effective</li>
                <li><strong>Lifestyle medicine:</strong> Exercise, nutrition, sleep hygiene</li>
                <li><strong>Complementary approaches:</strong> Mindfulness, yoga, acupuncture</li>
                <li><strong>Peer support:</strong> Support groups and peer specialists</li>
                <li><strong>Technology:</strong> Apps, teletherapy, online programs</li>
                <li><strong>Care coordination:</strong> Integration with primary care</li>
              </ul>
            </div>
          </section>

          <section id="self-care" className={styles.section}>
            <h2 className={styles.sectionTitle}>Self-Care & Prevention Strategies</h2>
            <p className={styles.sectionText}>
              While professional treatment is often necessary, self-care practices play a crucial role in maintaining mental health and preventing relapse. These strategies complement professional treatment and support overall well-being.
            </p>

            <h3 className={styles.subsectionTitle}>Daily Mental Health Practices</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Physical Wellness</h3>
                <ul>
                  <li>Regular exercise: 30 minutes daily</li>
                  <li>Adequate sleep: 7-9 hours nightly</li>
                  <li>Balanced nutrition: Mediterranean diet helpful</li>
                  <li>Limit alcohol and avoid drugs</li>
                  <li>Regular medical check-ups</li>
                  <li>Medication adherence</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Emotional Wellness</h3>
                <ul>
                  <li>Mindfulness and meditation</li>
                  <li>Journaling and self-reflection</li>
                  <li>Gratitude practices</li>
                  <li>Creative expression</li>
                  <li>Stress management techniques</li>
                  <li>Setting boundaries</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Building Resilience</h3>
            <div className={styles.keyPoints}>
              <h3>Protective Factors</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Social connections:</strong> Maintain supportive relationships</li>
                <li><strong>Purpose:</strong> Engage in meaningful activities</li>
                <li><strong>Coping skills:</strong> Develop healthy stress management</li>
                <li><strong>Self-compassion:</strong> Practice self-kindness</li>
                <li><strong>Routine:</strong> Maintain structure and consistency</li>
                <li><strong>Help-seeking:</strong> Know when to reach out</li>
              </ul>
            </div>
          </section>

          <section id="crisis" className={styles.section}>
            <h2 className={styles.sectionTitle}>Crisis Resources & Emergency Help</h2>
            <p className={styles.sectionText}>
              Mental health crises require immediate attention. Know the warning signs and have resources readily available for yourself or loved ones.
            </p>

            <div className={styles.warningBox}>
              <h4>National Crisis Resources</h4>
              <p>
                <strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988 (24/7)<br/>
                <strong>Crisis Text Line:</strong> Text HOME to 741741<br/>
                <strong>Veterans Crisis Line:</strong> 1-800-273-8255, Press 1<br/>
                <strong>SAMHSA Helpline:</strong> 1-800-662-4357 (treatment referrals)
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>When to Seek Emergency Help</h3>
            <div className={styles.infoCard}>
              <h3>Go to Emergency Room or Call 911 for:</h3>
              <ul>
                <li>Immediate danger to self or others</li>
                <li>Suicide attempt or clear plan</li>
                <li>Psychosis (losing touch with reality)</li>
                <li>Severe disorientation or confusion</li>
                <li>Inability to care for oneself</li>
                <li>Overdose or severe medication reaction</li>
              </ul>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>How do I know if I need professional help?</h3>
                <p>
                  Seek help if symptoms interfere with daily life, last more than two weeks, or include thoughts of self-harm. When in doubt, consult a mental health professional for assessment.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What's the difference between a psychiatrist and psychologist?</h3>
                <p>
                  Psychiatrists are medical doctors who can prescribe medication and provide therapy. Psychologists have doctoral degrees in psychology and provide therapy but cannot prescribe medication in most states.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Will therapy really help?</h3>
                <p>
                  Research shows therapy is effective for most mental health conditions, with 75% of people who enter therapy showing benefit. Finding the right therapist and approach is key to success.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are mental health medications addictive?</h3>
                <p>
                  Most mental health medications (antidepressants, mood stabilizers) are not addictive. Some anti-anxiety medications can be habit-forming and require careful monitoring. Always follow prescriber guidance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How can I support someone with mental illness?</h3>
                <p>
                  Listen without judgment, encourage professional help, learn about their condition, help with daily tasks when needed, maintain your own self-care, and know crisis resources.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Does insurance cover mental health treatment?</h3>
                <p>
                  The Mental Health Parity Act requires most insurance plans to cover mental health services similarly to medical services. Check your specific plan for copays, deductibles, and provider networks.
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className={styles.resourcesSection}>
            <h2 className={styles.sectionTitle}>Additional Resources</h2>
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <h4>National Organizations</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.nimh.nih.gov" target="_blank" rel="noopener">National Institute of Mental Health</a></li>
                  <li><a href="https://www.samhsa.gov" target="_blank" rel="noopener">SAMHSA</a></li>
                  <li><a href="https://www.nami.org" target="_blank" rel="noopener">National Alliance on Mental Illness</a></li>
                  <li><a href="https://www.mhanational.org" target="_blank" rel="noopener">Mental Health America</a></li>
                </ul>
              </div>
              <div className={styles.resourceCard}>
                <h4>Support & Education</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.psychologytoday.com" target="_blank" rel="noopener">Find a Therapist</a></li>
                  <li><a href="https://www.dbsalliance.org" target="_blank" rel="noopener">Depression and Bipolar Support</a></li>
                  <li><a href="https://adaa.org" target="_blank" rel="noopener">Anxiety & Depression Association</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className={styles.relatedLinks}>
            <h3 className={styles.relatedLinksTitle}>Related Health Topics</h3>
            <div className={styles.relatedGrid}>
              <Link href="/learn/chronic-disease" className={styles.relatedCard}>
                <h4>Chronic Disease</h4>
                <p>Managing long-term health conditions</p>
              </Link>
              <Link href="/learn/preventive-care" className={styles.relatedCard}>
                <h4>Preventive Care</h4>
                <p>Mental health screening and prevention</p>
              </Link>
              <Link href="/learn/primary-care" className={styles.relatedCard}>
                <h4>Primary Care</h4>
                <p>Integrated mental and physical health</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}