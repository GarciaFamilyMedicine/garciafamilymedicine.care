'use client';

import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function VeteransPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Veterans Healthcare Services
              </h1>
              <p className={styles.heroSubtitle}>
                Honoring those who served with comprehensive, veteran-centered healthcare at Garcia Family Medicine
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Schedule Appointment: 816-427-5320
                </a>
                <a href="#services" className={styles.secondaryButton}>
                  Veteran Services
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.certificationBadge}>
                <div className={styles.badgeIcon}>🇺🇸</div>
                <div className={styles.badgeText}>
                  <span>Veterans</span>
                  <span>Healthcare</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className={styles.quickInfo}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🎖️</div>
                <h3>Veteran-Focused Care</h3>
                <p>Understanding military service and culture</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🩺</div>
                <h3>Comprehensive Services</h3>
                <p>Full spectrum medical and mental health</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🧠</div>
                <h3>PTSD & Mental Health</h3>
                <p>Specialized trauma-informed care</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📋</div>
                <h3>VA Coordination</h3>
                <p>Seamless integration with VA benefits</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Comprehensive Veteran Healthcare Services</h2>
              <p>Medical care designed with deep understanding of military service, combat exposure, and veteran-specific health challenges</p>
            </div>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🧠</div>
                <h3>Combat Trauma & PTSD</h3>
                <p>Specialized care for combat-related psychological injuries</p>
                <ul>
                  <li>Post-traumatic stress disorder (PTSD) treatment</li>
                  <li>Combat stress reaction counseling</li>
                  <li>Military sexual trauma (MST) support</li>
                  <li>Moral injury therapy and processing</li>
                  <li>Trauma-informed care approaches</li>
                  <li>EMDR and evidence-based therapies</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🦴</div>
                <h3>Service-Connected Conditions</h3>
                <p>Treatment for military service-related health issues</p>
                <ul>
                  <li>Traumatic brain injury (TBI) management</li>
                  <li>Hearing loss and tinnitus treatment</li>
                  <li>Musculoskeletal injuries and chronic pain</li>
                  <li>Respiratory conditions from exposure</li>
                  <li>Gulf War syndrome and unexplained illness</li>
                  <li>Agent Orange related conditions</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💊</div>
                <h3>Medication & Substance Abuse</h3>
                <p>Comprehensive medication management and addiction support</p>
                <ul>
                  <li>VA medication coordination and monitoring</li>
                  <li>Opioid dependency treatment and recovery</li>
                  <li>Alcohol use disorder counseling</li>
                  <li>Prescription drug safety management</li>
                  <li>Medication-assisted treatment (MAT)</li>
                  <li>Dual diagnosis treatment approaches</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>😰</div>
                <h3>Mental Health Support</h3>
                <p>Comprehensive psychological and emotional wellness care</p>
                <ul>
                  <li>Depression and anxiety treatment</li>
                  <li>Suicide prevention and crisis intervention</li>
                  <li>Anger management and stress reduction</li>
                  <li>Sleep disorders and nightmares</li>
                  <li>Adjustment disorder counseling</li>
                  <li>Cognitive behavioral therapy (CBT)</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔬</div>
                <h3>Preventive & Chronic Care</h3>
                <p>Proactive health maintenance and chronic disease management</p>
                <ul>
                  <li>Annual veteran health assessments</li>
                  <li>Cancer screenings (Agent Orange related)</li>
                  <li>Cardiovascular disease prevention</li>
                  <li>Diabetes management and monitoring</li>
                  <li>Hypertension control programs</li>
                  <li>Infectious disease screening and care</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔄</div>
                <h3>Transition & Reintegration</h3>
                <p>Support during military-to-civilian healthcare transition</p>
                <ul>
                  <li>Post-deployment health screenings</li>
                  <li>VA benefits navigation assistance</li>
                  <li>Civilian healthcare system orientation</li>
                  <li>Employment and vocational counseling</li>
                  <li>Housing and financial counseling</li>
                  <li>Educational benefit guidance</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>👨‍👩‍👧‍👦</div>
                <h3>Family & Caregiver Support</h3>
                <p>Healthcare services for veteran families and caregivers</p>
                <ul>
                  <li>Military spouse healthcare and counseling</li>
                  <li>Children of veterans mental health support</li>
                  <li>Family therapy and communication skills</li>
                  <li>Caregiver stress and burnout prevention</li>
                  <li>Deployment cycle support and preparation</li>
                  <li>Gold Star family specialized care</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏥</div>
                <h3>Specialized Medical Services</h3>
                <p>Advanced medical care for complex veteran health needs</p>
                <ul>
                  <li>Prosthetics and adaptive equipment coordination</li>
                  <li>Wheelchair and mobility device support</li>
                  <li>Vision and hearing rehabilitation</li>
                  <li>Occupational and physical therapy referrals</li>
                  <li>Specialized cardiology and neurology care</li>
                  <li>Geriatric and aging veteran services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className={styles.understandingSection}>
          <div className={styles.container}>
            <h2>Military Culture-Informed Healthcare</h2>
            <div className={styles.understandingGrid}>
              <div className={styles.understandingCard}>
                <div className={styles.understandingIcon}>🎯</div>
                <h3>Military Culture Competency</h3>
                <p>Deep understanding of military values, honor, duty, and the unique challenges of service including deployment stress, chain of command dynamics, and warrior mentality</p>
              </div>
              <div className={styles.understandingCard}>
                <div className={styles.understandingIcon}>🤝</div>
                <h3>Trust & Mutual Respect</h3>
                <p>Building therapeutic relationships based on mutual respect, understanding of service sacrifice, and recognition of the strength and resilience developed through military training</p>
              </div>
              <div className={styles.understandingCard}>
                <div className={styles.understandingIcon}>🔗</div>
                <h3>VA System Integration</h3>
                <p>Seamless coordination with VA healthcare services, benefits programs, disability ratings, and ensuring continuity of care between civilian and VA medical systems</p>
              </div>
              <div className={styles.understandingCard}>
                <div className={styles.understandingIcon}>💪</div>
                <h3>Strength-Based Approach</h3>
                <p>Healthcare that builds on veteran strengths, military discipline, teamwork skills, and mission-focused mindset while addressing areas needing support and healing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.conditionsContent}>
              <h2>Common Veteran Health Conditions We Treat</h2>
              <p>Garcia Family Medicine provides specialized, evidence-based care for the full spectrum of health conditions commonly affecting our nation's veterans:</p>
              <div className={styles.conditionsGrid}>
                <div className={styles.conditionCategory}>
                  <h4>Combat-Related Mental Health</h4>
                  <ul>
                    <li>Post-traumatic stress disorder (PTSD)</li>
                    <li>Combat stress reactions and adjustment</li>
                    <li>Military sexual trauma (MST)</li>
                    <li>Moral injury and combat guilt</li>
                    <li>Survivor guilt and grief processing</li>
                    <li>Hypervigilance and sleep disturbances</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Traumatic Brain Injury</h4>
                  <ul>
                    <li>Blast-related traumatic brain injury</li>
                    <li>Concussion and post-concussion syndrome</li>
                    <li>Cognitive impairment and memory issues</li>
                    <li>Headaches and neurological symptoms</li>
                    <li>Balance and coordination problems</li>
                    <li>Executive function difficulties</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Physical War Injuries</h4>
                  <ul>
                    <li>Amputations and prosthetic care</li>
                    <li>Spinal cord injuries and paralysis</li>
                    <li>Chronic pain from combat injuries</li>
                    <li>Shrapnel and foreign body complications</li>
                    <li>Burns and skin graft management</li>
                    <li>Vision and hearing loss from combat</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Environmental Exposures</h4>
                  <ul>
                    <li>Agent Orange related cancers and diseases</li>
                    <li>Gulf War syndrome and chronic fatigue</li>
                    <li>Burn pit exposure respiratory conditions</li>
                    <li>Chemical and biological exposure effects</li>
                    <li>Radiation exposure complications</li>
                    <li>Contaminated water exposure illnesses</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Chronic Health Conditions</h4>
                  <ul>
                    <li>Diabetes mellitus and complications</li>
                    <li>Cardiovascular disease and hypertension</li>
                    <li>Chronic kidney disease</li>
                    <li>Liver disease and hepatitis</li>
                    <li>Autoimmune disorders</li>
                    <li>Gastrointestinal disorders</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Substance Use Disorders</h4>
                  <ul>
                    <li>Alcohol use disorder and dependency</li>
                    <li>Opioid addiction and pain medication abuse</li>
                    <li>Prescription drug dependency</li>
                    <li>Nicotine addiction and smoking cessation</li>
                    <li>Stimulant and depressant abuse</li>
                    <li>Polysubstance use disorders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className={styles.resourcesSection}>
          <div className={styles.container}>
            <div className={styles.resourcesContent}>
              <h2>Veteran Support Resources & Crisis Services</h2>
              <p>Comprehensive support network for veterans and their families, available 24/7</p>
              <div className={styles.resourcesGrid}>
                <div className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>📞</div>
                  <h3>Veteran Crisis Line</h3>
                  <p>24/7 confidential crisis support for veterans in emotional distress or suicidal crisis</p>
                  <div className={styles.crisisInfo}>
                    <p><strong>Call:</strong> 988, then Press 1</p>
                    <p><strong>Text:</strong> 838255</p>
                    <p><strong>Chat:</strong> VeteransCrisisLine.net</p>
                    <p><strong>TTY:</strong> 1-800-799-4889</p>
                  </div>
                </div>
                <div className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>🏛️</div>
                  <h3>VA Benefits Assistance</h3>
                  <p>Navigation and assistance with VA healthcare enrollment, disability claims, and benefit programs</p>
                  <ul>
                    <li>Disability compensation claims</li>
                    <li>Healthcare enrollment assistance</li>
                    <li>Education benefits (GI Bill)</li>
                    <li>Home loan guarantees</li>
                    <li>Vocational rehabilitation</li>
                  </ul>
                </div>
                <div className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>👥</div>
                  <h3>Peer Support Programs</h3>
                  <p>Connection to veteran peer support groups and community organizations</p>
                  <ul>
                    <li>Veterans of Foreign Wars (VFW)</li>
                    <li>American Legion support groups</li>
                    <li>Iraq and Afghanistan Veterans</li>
                    <li>Combat veterans motorcycle associations</li>
                    <li>Women veterans support groups</li>
                  </ul>
                </div>
                <div className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>🏠</div>
                  <h3>Family & Housing Support</h3>
                  <p>Resources for veteran families, housing assistance, and emergency support services</p>
                  <ul>
                    <li>Homeless veteran outreach programs</li>
                    <li>Emergency financial assistance</li>
                    <li>Food banks and pantries</li>
                    <li>Legal aid and advocacy services</li>
                    <li>Childcare and family support</li>
                  </ul>
                </div>
                <div className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>💼</div>
                  <h3>Employment & Training</h3>
                  <p>Career services, job placement assistance, and vocational training programs</p>
                  <ul>
                    <li>Resume writing and interview skills</li>
                    <li>Military skills translation</li>
                    <li>Apprenticeship programs</li>
                    <li>Small business development</li>
                    <li>Technology and trade certifications</li>
                  </ul>
                </div>
                <div className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>🎓</div>
                  <h3>Education Benefits</h3>
                  <p>Educational support services and academic counseling for veterans and dependents</p>
                  <ul>
                    <li>GI Bill benefit optimization</li>
                    <li>College and university enrollment</li>
                    <li>Vocational and technical training</li>
                    <li>Online learning support</li>
                    <li>Dependent education benefits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className={styles.commitmentSection}>
          <div className={styles.container}>
            <div className={styles.commitmentContent}>
              <h2>Our Commitment to Veterans</h2>
              <div className={styles.commitmentText}>
                <p>At Garcia Family Medicine, we recognize that serving our country requires tremendous sacrifice, courage, and dedication. Our veterans have given their best years in service to protect our freedoms and way of life. In return, we are committed to providing the highest quality healthcare that honors their service and addresses their unique needs.</p>
                
                <p>We understand that military service can leave lasting impacts on both physical and mental health. From combat injuries and PTSD to the challenges of reintegrating into civilian life, we approach veteran healthcare with the respect, understanding, and specialized care that our heroes deserve.</p>
                
                <p>Our clinic is a safe space where veterans can receive judgment-free care from providers who understand military culture, the stress of deployment, and the bonds formed through shared service. We coordinate seamlessly with VA services while providing personalized care that treats the whole person, not just the condition.</p>
                
                <div className={styles.commitment}>
                  <h3>We Promise:</h3>
                  <ul>
                    <li>✓ Respectful, dignified care that honors your service</li>
                    <li>✓ Understanding of military culture and veteran experiences</li>
                    <li>✓ Coordination with VA benefits and healthcare systems</li>
                    <li>✓ Trauma-informed care for combat-related conditions</li>
                    <li>✓ Family-centered approach including spouses and dependents</li>
                    <li>✓ Advocacy for veteran rights and healthcare access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Serving Those Who Served Our Nation</h2>
              <p>Honor your service with healthcare that understands your unique experiences, challenges, and the sacrifices you've made for our country</p>
              <div className={styles.ctaButtons}>
                <a href="tel:816-427-5320" className={styles.ctaButton}>
                  Schedule Your Appointment: 816-427-5320
                </a>
              </div>
              <div className={styles.ctaInfo}>
                <div className={styles.clinicInfo}>
                  <h4>Garcia Family Medicine</h4>
                  <p>801 NW St. Mary Drive</p>
                  <p>Veteran-Centered Healthcare Excellence</p>
                  <p><strong>Thank you for your service to our nation 🇺🇸</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}