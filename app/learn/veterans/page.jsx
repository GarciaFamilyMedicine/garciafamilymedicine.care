'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function VeteransHealthcarePage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Veteran Healthcare
            </nav>
            <h1 className={styles.articleTitle}>Veterans Healthcare: Comprehensive Guide to VA Benefits and Services</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Reviewed by: Medical Team</span>
              <span>Reading Time: 12 minutes</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>On This Page</h2>
            <ul className={styles.tocList}>
              <li><a href="#overview">Understanding Veterans Healthcare</a></li>
              <li><a href="#eligibility">VA Healthcare Eligibility</a></li>
              <li><a href="#enrollment">How to Enroll</a></li>
              <li><a href="#benefits">Healthcare Benefits</a></li>
              <li><a href="#community-care">Community Care Program</a></li>
              <li><a href="#mental-health">Mental Health Services</a></li>
              <li><a href="#disability">Disability Compensation</a></li>
              <li><a href="#resources">Additional Resources</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>Understanding Veterans Healthcare</h2>
            <p className={styles.leadText}>
              The Department of Veterans Affairs (VA) provides comprehensive healthcare services to millions of veterans who have served our nation. With significant improvements coming in 2025, including expanded mental health benefits and streamlined community care access, veterans have more healthcare options than ever before.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Key Facts About VA Healthcare</h3>
              <ul className={styles.keyPointsList}>
                <li>Over 9 million veterans are enrolled in VA healthcare system</li>
                <li>Less than 50% of eligible veterans are currently enrolled</li>
                <li>40% of VA medical appointments are now with community providers</li>
                <li>$369 billion VA budget request for 2025</li>
                <li>1.7 million veterans received mental health services last year</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>41%</h4>
                <p>Veterans need mental health care annually</p>
              </div>
              <div className={styles.statCard}>
                <h4>90%</h4>
                <p>Increase in mental health care 2006-2019</p>
              </div>
              <div className={styles.statCard}>
                <h4>15x</h4>
                <p>Higher PTSD rate vs civilians</p>
              </div>
              <div className={styles.statCard}>
                <h4>2025</h4>
                <p>Major mental health rating improvements</p>
              </div>
            </div>
          </section>

          <section id="eligibility" className={styles.section}>
            <h2 className={styles.sectionTitle}>VA Healthcare Eligibility</h2>
            <p className={styles.sectionText}>
              Most veterans who served in the military and were honorably discharged qualify for VA healthcare. Understanding your eligibility and priority group helps determine your benefits and potential costs.
            </p>

            <h3 className={styles.subsectionTitle}>Basic Eligibility Requirements</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Service Requirements</h3>
                <ul>
                  <li>Served in active military, naval, or air service</li>
                  <li>Did not receive a dishonorable discharge</li>
                  <li>Minimum duty requirements:
                    <ul>
                      <li>• 24 continuous months of active duty (enlisted after 9/7/1980)</li>
                      <li>• Full period called to active duty (Guard/Reserve)</li>
                    </ul>
                  </li>
                  <li>Combat veterans have 5 years of enhanced eligibility</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Enhanced Eligibility Status</h3>
                <ul>
                  <li>Service-connected disability compensation recipients</li>
                  <li>Purple Heart recipients</li>
                  <li>Former POWs</li>
                  <li>Veterans exposed to toxic substances</li>
                  <li>Vietnam veterans exposed to Agent Orange</li>
                  <li>Gulf War and post-9/11 veterans</li>
                  <li>Veterans discharged due to service-related disability</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Priority Groups</h3>
            <p className={styles.sectionText}>
              VA assigns veterans to priority groups 1-8 based on service-connected disabilities, income, and other factors. Higher priority groups receive more comprehensive benefits with fewer or no copays.
            </p>

            <div className={styles.warningBox}>
              <h4>Important Note</h4>
              <p>
                Having private insurance or Medicare does NOT disqualify you from VA healthcare. Many veterans use both VA and private healthcare for comprehensive coverage. VA can bill your insurance for non-service-connected care, potentially reducing your out-of-pocket costs.
              </p>
            </div>
          </section>

          <section id="enrollment" className={styles.section}>
            <h2 className={styles.sectionTitle}>How to Enroll in VA Healthcare</h2>
            <p className={styles.sectionText}>
              Enrolling in VA healthcare has never been easier, with multiple options available including online, phone, and in-person enrollment. The process typically takes 1-2 weeks for approval.
            </p>

            <h3 className={styles.subsectionTitle}>Enrollment Methods</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Online Enrollment</h3>
                <ul>
                  <li>Visit VA.gov/health-care/apply</li>
                  <li>Complete form 10-10EZ online</li>
                  <li>Upload supporting documents</li>
                  <li>Track application status online</li>
                  <li>Fastest processing method</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Phone Enrollment</h3>
                <ul>
                  <li>Call 877-222-8387 (toll-free)</li>
                  <li>Monday-Friday, 8am-8pm ET</li>
                  <li>VA staff assist with application</li>
                  <li>Can answer eligibility questions</li>
                  <li>Help with document requirements</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>In-Person Enrollment</h3>
                <ul>
                  <li>Visit any VA medical center</li>
                  <li>Enrollment coordinators available</li>
                  <li>Bring DD-214 and insurance cards</li>
                  <li>Same-day primary care possible</li>
                  <li>Tour facilities and meet staff</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Required Documents</h3>
            <div className={styles.keyPoints}>
              <h3>What to Have Ready</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>DD-214:</strong> Military discharge papers</li>
                <li><strong>Financial information:</strong> Previous year's income for means testing</li>
                <li><strong>Insurance cards:</strong> Private insurance, Medicare, Medicaid</li>
                <li><strong>Service records:</strong> Any disability ratings or combat service</li>
                <li><strong>Dependent information:</strong> Spouse and dependent details if applicable</li>
              </ul>
            </div>
          </section>

          <section id="benefits" className={styles.section}>
            <h2 className={styles.sectionTitle}>Healthcare Benefits Overview</h2>
            <p className={styles.sectionText}>
              VA healthcare provides comprehensive medical services including preventive care, primary care, specialty care, mental health services, and prescription coverage. The scope of benefits depends on your priority group and eligibility status.
            </p>

            <h3 className={styles.subsectionTitle}>Covered Services</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Primary & Preventive Care</h3>
                <ul>
                  <li>Annual wellness exams</li>
                  <li>Health screenings and immunizations</li>
                  <li>Women's health services</li>
                  <li>Nutrition counseling</li>
                  <li>Weight management programs</li>
                  <li>Smoking cessation</li>
                  <li>Health education</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Specialty Care</h3>
                <ul>
                  <li>Cardiology and cardiac surgery</li>
                  <li>Orthopedics and joint replacement</li>
                  <li>Oncology and cancer treatment</li>
                  <li>Neurology and neurosurgery</li>
                  <li>Gastroenterology</li>
                  <li>Dermatology</li>
                  <li>Audiology and vision care</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Mental Health & Substance Use</h3>
                <ul>
                  <li>PTSD treatment programs</li>
                  <li>Depression and anxiety care</li>
                  <li>Substance use disorder treatment</li>
                  <li>Military sexual trauma counseling</li>
                  <li>Suicide prevention services</li>
                  <li>Family and marriage counseling</li>
                  <li>Residential treatment programs</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Additional Services</h3>
                <ul>
                  <li>Prescription medications</li>
                  <li>Emergency and urgent care</li>
                  <li>Home health and hospice</li>
                  <li>Rehabilitation services</li>
                  <li>Prosthetics and medical equipment</li>
                  <li>Long-term care</li>
                  <li>Telehealth services</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="community-care" className={styles.section}>
            <h2 className={styles.sectionTitle}>VA Community Care Program</h2>
            <p className={styles.sectionText}>
              The VA Community Care program allows eligible veterans to receive healthcare from community providers when VA facilities cannot provide timely or geographically accessible care. Major improvements in 2025 have streamlined access to community care.
            </p>

            <div className={styles.warningBox}>
              <h4>2025 Update: Faster Community Care Access</h4>
              <p>
                The Senator Elizabeth Dole 21st Century Veterans Healthcare and Benefits Improvement Act has eliminated the secondary review requirement. Veterans can now access community care immediately upon eligibility determination, without waiting for additional VA doctor review.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Eligibility for Community Care</h3>
            <div className={styles.keyPoints}>
              <h3>You May Qualify If:</h3>
              <ul className={styles.keyPointsList}>
                <li>VA cannot schedule an appointment within <strong>20 days</strong> for primary/mental health care</li>
                <li>VA cannot schedule specialty care within <strong>28 days</strong></li>
                <li>You live more than <strong>30-minute drive</strong> from VA primary/mental health care</li>
                <li>You live more than <strong>60-minute drive</strong> from VA specialty care</li>
                <li>The specific care you need is not available at VA</li>
                <li>It's in your best medical interest to receive community care</li>
                <li>VA service line doesn't meet quality standards</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>How Community Care Works</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Getting Authorization</h3>
                <ul>
                  <li>Discuss with your VA provider</li>
                  <li>VA determines eligibility</li>
                  <li>Receive authorization before care</li>
                  <li>VA schedules appointment or you self-schedule</li>
                  <li>Authorization valid for specific timeframe</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>After Your Appointment</h3>
                <ul>
                  <li>Provider bills VA directly</li>
                  <li>You may have copays based on priority group</li>
                  <li>Records sent to VA for continuity</li>
                  <li>Follow-up care coordinated</li>
                  <li>Prescriptions filled at VA pharmacy</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="mental-health" className={styles.section}>
            <h2 className={styles.sectionTitle}>Mental Health Services</h2>
            <p className={styles.sectionText}>
              VA provides comprehensive mental health services recognizing the unique challenges veterans face. With major improvements to disability ratings in 2025 and expanded services, mental health care is more accessible than ever.
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>23%</h4>
                <p>Veterans using VA have had PTSD</p>
              </div>
              <div className={styles.statCard}>
                <h4>15%</h4>
                <p>Iraq/Afghanistan vets with PTSD yearly</p>
              </div>
              <div className={styles.statCard}>
                <h4>$8.9B</h4>
                <p>VA mental health budget</p>
              </div>
              <div className={styles.statCard}>
                <h4>10%</h4>
                <p>Minimum rating for any MH diagnosis (2025)</p>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>2025 Mental Health Rating Changes</h3>
            <div className={styles.warningBox}>
              <h4>Major Improvements for Veterans</h4>
              <p>
                Starting in 2025, VA has implemented significant improvements to mental health disability ratings:
              </p>
              <ul style={{marginTop: '10px'}}>
                <li>• Elimination of 0% ratings - minimum 10% for any diagnosis</li>
                <li>• Less stringent requirements for 70% and 100% ratings</li>
                <li>• Veterans can qualify for 100% rating while employed</li>
                <li>• New domain-based criteria better reflect symptom severity</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Available Mental Health Services</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>PTSD Treatment</h3>
                <ul>
                  <li>Evidence-based psychotherapies (CPT, PE)</li>
                  <li>EMDR (Eye Movement Desensitization)</li>
                  <li>Group therapy programs</li>
                  <li>Medication management</li>
                  <li>Residential treatment programs</li>
                  <li>Telemental health options</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Depression & Anxiety</h3>
                <ul>
                  <li>Cognitive behavioral therapy (CBT)</li>
                  <li>Antidepressant medications</li>
                  <li>Mindfulness-based treatments</li>
                  <li>Peer support programs</li>
                  <li>Intensive outpatient programs</li>
                  <li>Crisis intervention services</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Substance Use Disorders</h3>
                <ul>
                  <li>Medically supervised detox</li>
                  <li>Medication-assisted treatment (MAT)</li>
                  <li>Individual and group counseling</li>
                  <li>12-step facilitation</li>
                  <li>Dual diagnosis treatment</li>
                  <li>Vocational rehabilitation</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Crisis Support</h3>
                <ul>
                  <li>Veterans Crisis Line: 988, Press 1</li>
                  <li>Text 838255 for crisis support</li>
                  <li>Online chat at VeteransCrisisLine.net</li>
                  <li>Same-day mental health appointments</li>
                  <li>Emergency evaluation services</li>
                  <li>Safety planning interventions</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Military Sexual Trauma (MST) Services</h3>
              <ul className={styles.keyPointsList}>
                <li>Free counseling and treatment regardless of VA enrollment status</li>
                <li>No documentation or proof required</li>
                <li>Specialized trauma-focused therapy</li>
                <li>Separate men's and women's groups available</li>
                <li>MST coordinators at every VA facility</li>
              </ul>
            </div>
          </section>

          <section id="disability" className={styles.section}>
            <h2 className={styles.sectionTitle}>Disability Compensation</h2>
            <p className={styles.sectionText}>
              VA disability compensation provides tax-free monthly payments to veterans with disabilities connected to their military service. Understanding the rating system and how to apply is crucial for receiving appropriate benefits.
            </p>

            <h3 className={styles.subsectionTitle}>2025 Compensation Rates</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Basic Monthly Rates (Veteran Only)</h3>
                <ul>
                  <li><strong>10%:</strong> $171.23</li>
                  <li><strong>20%:</strong> $338.49</li>
                  <li><strong>30%:</strong> $524.31</li>
                  <li><strong>40%:</strong> $755.28</li>
                  <li><strong>50%:</strong> $1,075.16</li>
                  <li><strong>60%:</strong> $1,361.88</li>
                  <li><strong>70%:</strong> $1,716.28</li>
                  <li><strong>80%:</strong> $1,995.01</li>
                  <li><strong>90%:</strong> $2,241.91</li>
                  <li><strong>100%:</strong> $3,737.85</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Common Service-Connected Conditions</h3>
                <ul>
                  <li>Tinnitus (ringing in ears)</li>
                  <li>Hearing loss</li>
                  <li>Post-traumatic stress disorder</li>
                  <li>Back and neck conditions</li>
                  <li>Knee injuries and conditions</li>
                  <li>Migraines</li>
                  <li>Sleep apnea</li>
                  <li>Depression and anxiety</li>
                  <li>Traumatic brain injury</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Filing a Disability Claim</h3>
            <div className={styles.keyPoints}>
              <h3>Steps to File</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Gather evidence:</strong> Medical records, service records, buddy statements</li>
                <li><strong>File online:</strong> Use VA.gov for fastest processing</li>
                <li><strong>Attend C&P exam:</strong> VA schedules compensation & pension exam</li>
                <li><strong>Receive decision:</strong> Average processing time 125 days</li>
                <li><strong>Appeal if needed:</strong> Multiple appeal options available</li>
              </ul>
            </div>
          </section>

          <section id="resources" className={styles.section}>
            <h2 className={styles.sectionTitle}>Additional Resources and Support</h2>
            <p className={styles.sectionText}>
              Beyond healthcare, VA and partner organizations offer numerous resources to support veterans' overall well-being, including education, employment, housing, and financial assistance.
            </p>

            <h3 className={styles.subsectionTitle}>Key Resources</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Emergency Resources</h3>
                <ul>
                  <li><strong>Veterans Crisis Line:</strong> 988, Press 1</li>
                  <li><strong>Text Crisis:</strong> 838255</li>
                  <li><strong>Chat:</strong> VeteransCrisisLine.net</li>
                  <li><strong>TTY:</strong> 1-800-799-4889</li>
                  <li><strong>Support for deaf/hard of hearing:</strong> 1-800-799-4889</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Benefits Assistance</h3>
                <ul>
                  <li><strong>VA Benefits Hotline:</strong> 1-800-827-1000</li>
                  <li><strong>eBenefits:</strong> ebenefits.va.gov</li>
                  <li><strong>VA.gov:</strong> Primary resource portal</li>
                  <li><strong>VSO assistance:</strong> Free help with claims</li>
                  <li><strong>State veterans affairs:</strong> State-specific benefits</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Education & Employment</h3>
                <ul>
                  <li>GI Bill benefits and education</li>
                  <li>Vocational rehabilitation (Chapter 31)</li>
                  <li>VA Work-Study program</li>
                  <li>Veterans preference in federal hiring</li>
                  <li>Skills translator tools</li>
                  <li>Entrepreneurship programs</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Housing & Financial</h3>
                <ul>
                  <li>VA home loans with no down payment</li>
                  <li>Specially adapted housing grants</li>
                  <li>Homeless prevention programs</li>
                  <li>Financial counseling</li>
                  <li>Pension for low-income veterans</li>
                  <li>Caregiver support programs</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Can I use VA healthcare if I have other insurance?</h3>
                <p>
                  Yes! Having private insurance, Medicare, or Medicaid does not affect your VA eligibility. VA can bill your other insurance for non-service-connected care, potentially reducing your costs. Many veterans use both VA and private healthcare for comprehensive coverage.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long does VA enrollment take?</h3>
                <p>
                  Online applications typically process within 1-2 weeks. You'll receive a decision letter by mail. If approved, you can schedule your first appointment immediately. Priority processing is available for those with urgent healthcare needs.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What if I need care outside a VA facility?</h3>
                <p>
                  The Community Care program allows eligible veterans to see community providers when VA cannot provide timely care (within 20-28 days) or if you live too far from a VA facility (30-60 minute drive time standards). Authorization must be obtained before receiving community care.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are mental health services really free?</h3>
                <p>
                  Mental health services related to military sexual trauma are completely free, even without VA enrollment. Other mental health services may have copays depending on your priority group, but many veterans qualify for free care based on service-connected conditions or income.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I get prescriptions through VA?</h3>
                <p>
                  Yes, VA provides prescription medications with copays ranging from $0-11 per 30-day supply depending on your priority group and the medication type. Many veterans with service-connected conditions receive free medications.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What's the difference between VA healthcare and disability compensation?</h3>
                <p>
                  VA healthcare provides medical services, while disability compensation provides monthly tax-free payments for service-connected disabilities. You can receive both benefits. Having a disability rating often provides enhanced healthcare benefits with fewer or no copays.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className={styles.relatedLinks}>
            <h3 className={styles.relatedLinksTitle}>Related Health Topics</h3>
            <div className={styles.relatedGrid}>
              <Link href="/learn/mental-health" className={styles.relatedCard}>
                <h4>Mental Health</h4>
                <p>Understanding mental wellness and treatment</p>
              </Link>
              <Link href="/services/valorlink-letter" className={styles.relatedCard}>
                <h4>ValorLink™ Letters</h4>
                <p>Veteran disability documentation support</p>
              </Link>
              <Link href="/learn/chronic-disease" className={styles.relatedCard}>
                <h4>Chronic Disease Management</h4>
                <p>Managing long-term health conditions</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}