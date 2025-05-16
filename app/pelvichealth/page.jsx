'use client';

import styles from './pelvichealth.module.css';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';

export default function PelvicHealthPage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        {/* ---------- Intro ---------- */}
        <section className={`${styles.card} ${styles.introSection}`}>
          <h1>Pelvic Health</h1>
          <p>
            Pelvic health is about achieving and maintaining the best possible functioning
            of the bladder, bowel, reproductive organs, muscles, nerves and other tissues
            in the pelvic region, to allow for optimal quality of life.
          </p>
          <p>
            Nearly <strong>1 in 3 women</strong> will experience some form of pelvic floor
            dysfunction in her lifetime, yet many remain undiagnosed or untreated.
            Our mission is to change that by providing information and support.
          </p>
        </section>

        {/* ---------- Info Blocks ---------- */}
        <section className={styles.infoSection}>
          <h2>Common Pelvic Floor Issues</h2>
          <div className={styles.infoCards}>
            {[
              ['Urinary & Bowel Problems',
               'Urinary issues (painful urination, leakage, urgency) and bowel issues (constipation, straining, loss of control) are frequent pelvic floor problems.'],
              ['Pelvic Pain',
               'Chronic pain in the pelvic region can include tailbone pain, lower abdominal pain, and pain in the pelvic joints or muscles.'],
              ['Pain during Sex',
               'Many experience pain during or after sexual intercourse due to pelvic floor dysfunction, which can significantly impact intimacy and quality of life.'],
              ['Organ Prolapse',
               'Pelvic organ prolapse occurs when organs like the bladder or uterus descend from their normal position, causing pressure, bulging, or discomfort.'],
            ].map(([title, text]) => (
              <div key={title} className={`${styles.infoCard} ${styles.card}`}>
                <h3>{title}</h3><p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Statistics ---------- */}
        <section className={`${styles.statsSection} ${styles.card}`}>
          <h2>Pelvic Health by the Numbers</h2>
          <p>
            Recent studies show pelvic floor symptoms are very common. The charts below
            illustrate the prevalence and types of pelvic health issues:
          </p>

          <div className={styles.chartsContainer}>
            {/* bar chart */}
            <div className={`${styles.chart} ${styles.card}`}>
              <h3>Prevalence of Symptoms (Women&nbsp;18‑59)</h3>
              <div className={styles.barChart}>
                {[
                  ['83% – Experienced ≥1 symptom last year', 83],
                  ['75% – Experienced ≥2 symptoms last year', 75],
                  ['66% – Experienced ≥3 symptoms last year', 66],
                ].map(([label, val]) => (
                  <div key={label} className={styles.bar}>
                    <div className={styles.barFill} style={{ width: `${val}%` }} />
                    <span className={styles.barLabel}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* pie chart */}
            <div className={`${styles.chart} ${styles.card}`}>
              <h3>Common Symptom Types</h3>
              <div className={styles.pieChart}>
                <div className={styles.pie} />
                <ul className={styles.pieLegend}>
                  <li><span className={`${styles.legendColor} ${styles.colorA}`} /> Bladder&nbsp;&amp;&nbsp;Bowel (50%)</li>
                  <li><span className={`${styles.legendColor} ${styles.colorB}`} /> Sexual (33%)</li>
                  <li><span className={`${styles.legendColor} ${styles.colorC}`} /> Other (17%)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className={`${styles.ctaSection} ${styles.card}`}>
          <h2>Take Control of Your Pelvic Health</h2>
          <p>
            You don’t have to live with pelvic floor issues in silence. Our team of specialists
            is here to help with personalized care and proven therapies. Early intervention can
            dramatically improve outcomes and quality of life.
          </p>
          <a href="tel:816-426-5320" className={styles.ctaButton}>Get Started</a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
