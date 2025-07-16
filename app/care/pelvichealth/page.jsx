'use client';

import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function PelvicHealthPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                CoreLift™ Pelvic Health Program
              </h1>
              <p className={styles.heroSubtitle}>
                Revolutionary non-invasive treatment for pelvic floor dysfunction, incontinence, and women's health at Garcia Family Medicine
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Schedule Consultation: 816-427-5320
                </a>
                <a href="#services" className={styles.secondaryButton}>
                  Learn More
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.certificationBadge}>
                <div className={styles.badgeIcon}>⚡</div>
                <div className={styles.badgeText}>
                  <span>CoreLift™</span>
                  <span>Technology</span>
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
                <div className={styles.infoIcon}>🔬</div>
                <h3>FDA-Approved Technology</h3>
                <p>Advanced electromagnetic therapy for pelvic floor strengthening</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>⚡</div>
                <h3>Non-Invasive Treatment</h3>
                <p>No surgery, no downtime, comfortable 28-minute sessions</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📈</div>
                <h3>Proven Results</h3>
                <p>95% patient satisfaction with significant improvement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.services}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Comprehensive Pelvic Health Services</h2>
              <p>Evidence-based treatments for women's pelvic floor disorders and urinary incontinence</p>
            </div>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💧</div>
                <h3>Urinary Incontinence</h3>
                <p>Stress and urge incontinence treatment with proven results</p>
                <ul>
                  <li>Stress incontinence therapy</li>
                  <li>Overactive bladder treatment</li>
                  <li>Mixed incontinence solutions</li>
                  <li>Post-pregnancy recovery</li>
                  <li>Menopause-related symptoms</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏃‍♀️</div>
                <h3>Pelvic Floor Dysfunction</h3>
                <p>Comprehensive treatment for pelvic floor muscle weakness</p>
                <ul>
                  <li>Pelvic organ prolapse support</li>
                  <li>Core muscle strengthening</li>
                  <li>Postpartum rehabilitation</li>
                  <li>Sexual health improvement</li>
                  <li>Pain reduction therapy</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>⚡</div>
                <h3>CoreLift™ Technology</h3>
                <p>Revolutionary electromagnetic muscle stimulation therapy</p>
                <ul>
                  <li>28-minute treatment sessions</li>
                  <li>11,000+ muscle contractions per session</li>
                  <li>No preparation or recovery time</li>
                  <li>Fully clothed, comfortable treatment</li>
                  <li>6-session treatment protocol</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📊</div>
                <h3>Evidence-Based Results</h3>
                <p>Clinically proven outcomes with measurable improvements</p>
                <ul>
                  <li>95% patient satisfaction rate</li>
                  <li>Significant leak reduction</li>
                  <li>Improved quality of life scores</li>
                  <li>Long-lasting treatment effects</li>
                  <li>FDA-approved safety profile</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Your CoreLift™ Treatment Journey</h2>
              <p>A simple, comfortable path to pelvic floor wellness</p>
            </div>

            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Initial Consultation</h3>
                  <p>Comprehensive evaluation of your pelvic health concerns and medical history</p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Treatment Planning</h3>
                  <p>Personalized 6-session protocol designed for your specific needs</p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>CoreLift™ Sessions</h3>
                  <p>Comfortable 28-minute treatments, twice weekly for optimal results</p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Progress Monitoring</h3>
                  <p>Regular assessments to track improvement and adjust treatment as needed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Ready to Reclaim Your Confidence?</h2>
              <p>Take the first step toward better pelvic health with our revolutionary CoreLift™ program. Call today to schedule your consultation.</p>
              <div className={styles.ctaButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Call Now: 816-427-5320
                </a>
                <a href="/contact" className={styles.secondaryButton}>
                  Request Information
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
