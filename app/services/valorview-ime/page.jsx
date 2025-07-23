'use client';

import styles from './valorview-ime.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import Link from 'next/link';

export default function ValorViewIMEPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                ValorView™ Independent Medical Examinations
              </h1>
              <p className={styles.heroSubtitle}>
                Fair, Respectful Exams That Honor Your Service
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Schedule Your IME
                </a>
                <Link href="/contact" className={styles.secondaryButton}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.textContent}>
              <p className={styles.leadText}>
                Your service deserves our respect. At Garcia Family Medicine, we understand that seeking an Independent Medical Examination (IME) can feel overwhelming, especially when you're already dealing with health challenges or workplace injuries. Whether you're a veteran who dedicated years to protecting our freedom, a first responder who put your life on the line for community safety, or a hardworking individual injured on the job, you deserve an examination process that treats you with the dignity and respect you've earned.
              </p>
              <p className={styles.text}>
                Our ValorView™ IME program was specifically designed with one principle in mind: those who have served others deserve to be served with excellence, compassion, and unwavering professionalism. We recognize that behind every IME request is a real person with a real story, real struggles, and real hopes for the future. That's why we've created a completely different kind of IME experience—one that honors your service while protecting your interests.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Experience That Understands Your Journey</h2>
            <div className={styles.textContent}>
              <p className={styles.text}>
                Dr. Tess Garcia and our entire medical team bring decades of experience in comprehensive healthcare, with specialized understanding of service-related injuries, occupational health challenges, and the unique medical needs of our veteran and working communities. We're not just conducting examinations; we're providing a bridge between your past service and your future wellbeing.
              </p>
              <p className={styles.text}>
                Our practice has always been built on the foundation of treating every patient as family. When you walk through our doors for a ValorView™ IME, you're not just another case number or file to process. You're a valued member of our community who deserves the highest standard of medical evaluation, delivered with genuine care and understanding.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What Makes ValorView™ Different</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🤝</div>
                <h3>Zero Judgment, Maximum Respect</h3>
                <p>We believe your service has already proven your character. Our role is to provide thorough, objective evaluations without questioning your integrity.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>👥</div>
                <h3>Trauma-Informed Care</h3>
                <p>Every team member is trained to understand the unique challenges faced by service members and workers.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📋</div>
                <h3>Comprehensive Evaluations</h3>
                <p>We consider not just immediate injuries but how they impact your overall quality of life and future medical needs.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Rapid Turnaround</h3>
                <p>Detailed reports typically delivered within 48-72 hours without compromising quality or accuracy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Examination Process */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Thorough Examination Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>In-Depth Consultation</h3>
                  <p>Dr. Tess personally reviews your military service history, deployment records, and available service medical records. We create a safe space for you to share details about your service that may be difficult to discuss.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Comprehensive Document Review</h3>
                  <p>Every piece of relevant medical documentation is personally reviewed by Dr. Tess, including service medical records, VA treatment records, and specialist reports. Nothing is overlooked in establishing patterns and connections.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Thorough Physical Examination</h3>
                  <p>A comprehensive medical assessment focused on your specific condition and its relationship to your service. This examination goes beyond typical visits to gather all necessary clinical evidence.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Detailed Report Preparation</h3>
                  <p>Every ValorView™ IME report includes detailed service history analysis, comprehensive medical opinions, supporting evidence, and clear language accessible to rating specialists and appeals boards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Recognition */}
        <section className={`${styles.section} ${styles.bgAccent}`}>
          <div className={styles.container}>
            <div className={styles.testimonialBox}>
              <h2 className={styles.testimonialTitle}>Honoring All Forms of Service</h2>
              <p className={styles.testimonialText}>
                At Garcia Family Medicine, we recognize that service takes many forms. Whether you wore a military uniform, carried a badge, fought fires, provided emergency medical care, or worked in any profession that demanded physical sacrifice, your service matters to us.
              </p>
              <p className={styles.testimonialText}>
                Many of our patients have given their best years to serving others, often at significant personal cost to their health and wellbeing. We see our ValorView™ IME program as our opportunity to serve those who have served others.
              </p>
            </div>
          </div>
        </section>

        {/* Complex Conditions */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Understanding Complex Service-Related Conditions</h2>
            <div className={styles.textContent}>
              <p className={styles.text}>
                We understand that many service-related injuries and occupational health issues are complex, involving multiple body systems and often developing over time. Our comprehensive approach ensures that nothing is overlooked and that your examination truly reflects your current medical reality.
              </p>
            </div>
            <div className={styles.conditionsGrid}>
              <div className={styles.conditionCard}>
                <h4>Physical Injuries</h4>
                <p>From training accidents to combat injuries, we understand the lasting impact of physical trauma</p>
              </div>
              <div className={styles.conditionCard}>
                <h4>Toxic Exposures</h4>
                <p>Expertise in evaluating health effects from hazardous materials and environmental exposures</p>
              </div>
              <div className={styles.conditionCard}>
                <h4>Psychological Trauma</h4>
                <p>Sensitive, professional assessment of PTSD and other service-related mental health conditions</p>
              </div>
              <div className={styles.conditionCard}>
                <h4>Chronic Conditions</h4>
                <p>Understanding how service can cause or aggravate ongoing health conditions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Your Service Deserves Recognition</h2>
            <p className={styles.ctaSubtitle}>
              Schedule your ValorView™ IME and experience healthcare that honors your contribution
            </p>
            <div className={styles.ctaButtons}>
              <a href="tel:816-427-5320" className={styles.ctaPrimary}>
                Call Now: 816-427-5320
              </a>
              <Link href="/contact" className={styles.ctaSecondary}>
                Request Information
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}