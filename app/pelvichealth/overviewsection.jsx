'use client';
import { P } from './typography';
import styles from './pelvichealth.module.css';

export default function OverviewSection() {
  return (
    <section className={`${styles.card} ${styles.introSection}`}>
      {/* exact title, word‑for‑word */}
      <h1>
        Emsella and Pelvic Health Recovery at Garcia Family Medicine: MAGNETIC
        RESONANCE Imaging
      </h1>

      {/* verbatim introductory copy */}
      <P>
        Pelvic health issues, such as urinary incontinence and erectile
        dysfunction (ED), affect millions worldwide, significantly impacting
        quality of life. At Garcia Family Medicine, we are committed to
        addressing these conditions with innovative, non‑invasive treatments
        like Emsella, while considering cultural norms, social determinants, and
        barriers to healthcare access. This page explores the effectiveness of
        Emsella for pelvic health recovery, supported by statistics and charts,
        and highlights how we address disparities at our Kansas City practice.
        For questions or to schedule a consultation, call us at{' '}
        <strong>816‑426‑5320</strong>.
      </P>
    </section>
  );
}
