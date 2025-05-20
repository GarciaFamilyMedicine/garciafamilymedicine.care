'use client';

import { Activity, Droplet, HeartPulse, Check } from 'lucide-react';
import { H2, H3, P } from './typography';
import styles        from './pelvichealth.module.css';

export default function EmsellaAtAGlance() {
  return (
    <section
      className={styles.softSection}
      role="region"
      aria-labelledby="emsella-ataglance"
    >
      <H2 id="emsella-ataglance">Emsella Therapy — At a Glance</H2>

      <div className={styles.timeline} />

      <div className={styles.squareGrid}>
        {/* CARD 1 */}
        <div className={`${styles.squareCard} ${styles.card}`}>
          <div className={styles.squareIcon}>
            <Activity size={24} strokeWidth={2} />
          </div>
          <H3 className={styles.squareTitle}>
            <strong>Supramaximal Power</strong>
            <br></br>
            <br></br>
          </H3>
          <p className={styles.bigNumber}>11 000</p>
          <P className={styles.squareText}>
            HIFEM™ pulses fire Kegel‑level contractions in a single 28‑min visit.
          </P>
        </div>

        {/* CARD 2 */}
        <div className={`${styles.squareCard} ${styles.card}`}>
          <div
            className={styles.squareIcon}
            style={{ background: 'var(--primary)' }}
          >
            <Droplet size={24} strokeWidth={2} />
          </div>
          <H3 className={styles.squareTitle}>
            <strong>Leakage Control</strong>
            <br></br>
            <br></br>
          </H3>
          <ul className={styles.iconList}>
            <li><Check size={18} /> Pad usage ↓ <strong>75 %</strong></li>
            <li><Check size={18} /> Stress, urge &amp; mixed UI improved</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className={`${styles.squareCard} ${styles.card}`}>
          <div
            className={styles.squareIcon}
            style={{ background: '#f28c28' }}
          >
            <HeartPulse size={24} strokeWidth={2} />
          </div>
          <H3 className={styles.squareTitle}>
            <strong>Sexual Wellness</strong>
            <br></br>
            <br></br>
          </H3>
          <ul className={styles.iconList}>
            <li><Check size={18} /> Better erectile rigidity</li>
            <li><Check size={18} /> Stronger orgasms &amp; confidence ↑</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
