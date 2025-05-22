'use client';
import { H2, P } from './typography';
import styles from '../pelvichealth.module.css';

/* –– badge component –– */
const StatBadge = ({ value, label }) => (
  <div style={{ textAlign: 'center' }}>
    <div className={styles.statBadge} aria-hidden>
      {value}
    </div>
    <p style={{ marginTop: '0.75rem', lineHeight: 1.5 }}>{label}</p>
  </div>
);

export default function UnderstandingSection() {
  return (
    <section
      className={styles.softSection}
      role="region"
      aria-labelledby="understanding-title"
    >
      <H2 id="understanding-title">Understanding Pelvic Health Issues</H2>

      {/* lead sentence */}
      <p className={styles.lead} style={{ maxWidth: 820, margin: '0 auto 2rem' }}>
        Pelvic‑floor dysfunction is&nbsp;
        <span style={{ fontVariant: 'small-caps' }}>shockingly common</span>
        &nbsp;yet widely misunderstood.
      </p>

      {/* stat badges */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          gap: '2rem',
          maxWidth: 860,
          margin: '0 auto 2.25rem',
        }}
      >
        <StatBadge value="25 %" label="of women live with urinary incontinence" />
        <StatBadge value="10‑15 %" label="of men report incontinence episodes" />
        <StatBadge value="30 %" label="of men 40+ experience erectile dysfunction" />
      </div>

      {/* explanatory paragraph */}
      <P style={{ maxWidth: 760, margin: '0 auto', fontSize: '1.05rem' }}>
        Weak or poorly co‑ordinated muscles in the pelvic floor diminish bladder
        control and reduce blood flow to erectile tissue. Consequences include
        leakage, sleep disruption, and social withdrawal. By restoring muscle
        function early,&nbsp;
        <span className={styles.chip}>incontinence</span>&nbsp;and&nbsp;
        <span className={styles.chip}>erectile dysfunction</span>&nbsp;can often
        be reversed—returning confidence and control.
      </P>
    </section>
  );
}
