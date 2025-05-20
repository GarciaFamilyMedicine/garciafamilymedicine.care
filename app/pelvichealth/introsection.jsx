'use client';
import { P } from './typography';
import styles from './pelvichealth.module.css';

/* ── quick facts list ───────────────────────────── */
function QuickFacts() {
  const facts = [
    'Pelvic health issues—urinary incontinence & erectile dysfunction (ED)—affect millions worldwide.',
    <>
      We combine <span className={styles.chip}>non‑invasive Emsella</span> with
      culturally sensitive, equitable care.
    </>,
    'Explore outcomes, statistics, and access options below.',
  ];

  return (
    <ul
      style={{
        display: 'grid',
        gap: '0.75rem 2rem',
        gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
        listStyle: 'none',
        padding: 0,
        margin: '1.5rem auto 2.25rem',
        maxWidth: 760,
        textAlign: 'left',
      }}
    >
      {facts.map((t) => (
        <li key={t.toString()} style={{ display: 'flex', gap: 8 }}>
          <span
            aria-hidden
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--primary)',
              marginTop: 9,
            }}
          />
          <span style={{ lineHeight: 1.55 }}>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── hero component ─────────────────────────────── */
export default function IntroSection() {
  return (
    <section
      className={styles.hero}
      role="region"
      aria-labelledby="pelvic-hero-title"
    >
      <h1
        id="pelvic-hero-title"
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '2.75rem',
          fontWeight: 700,
          color: 'var(--primary-dark)',
          lineHeight: 1.2,
          marginBottom: '.25rem',
        }}
      >
        Pelvic&nbsp;Health&nbsp;Recovery
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-secondary)',
          fontSize: '1.05rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'var(--primary)',
          marginBottom: '1.15rem',
        }}
      >
        Garcia Family Medicine • Kansas City
      </p>

      <p
        style={{
          fontFamily: 'var(--font-primary)',
          fontWeight: 600,
          color: 'var(--primary-dark)',
          fontSize: '1rem',
          marginBottom: '2.25rem',
        }}
      >
        Emsella and Pelvic Health Recovery at Garcia Family Medicine:&nbsp;
        <span style={{ letterSpacing: '0.03em' }}>MAGNETIC RESONANCE Imaging</span>
      </p>

      {/* lead sentence with styled chips */}
      <p
        className={styles.lead}
        style={{ maxWidth: 760, margin: '0 auto' }}
      >
        Pelvic health issues—most commonly{' '}
        <span className={styles.chip}>urinary incontinence</span> and{' '}
        <span className={styles.chip}>erectile dysfunction</span>—disrupt daily
        life for millions. Our team restores freedom and dignity with advanced,
        patient‑centered care.
      </p>

      <QuickFacts />

      {/* full verbatim copy */}
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <P>
          Pelvic health issues, such as urinary incontinence and erectile
          dysfunction (ED), affect millions worldwide, significantly impacting
          quality of life. At Garcia Family Medicine, we are committed to
          addressing these conditions with innovative, non‑invasive treatments
          like <strong>Emsella</strong>, while considering cultural norms,
          social determinants, and barriers to healthcare access.
        </P>
        <P>
          This blog explores the effectiveness of Emsella for pelvic health
          recovery, supported by statistics and charts, and highlights how we
          address disparities at our Kansas City practice. For questions or to
          schedule a consultation, call&nbsp;
          <strong>
            <a
              href="tel:816-426-5320"
              style={{
                color: 'var(--primary-dark)',
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              }}
            >
              816‑426‑5320
            </a>
          </strong>
          .
        </P>
      </div>
    </section>
  );
}
