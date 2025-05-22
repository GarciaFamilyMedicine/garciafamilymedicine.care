'use client';

import React from 'react';
import { H2, P } from './typography';
import styles from '../pelvichealth.module.css';

/* small week bar with two 28‑min blocks */
const WeekBar = ({ label }) => {
  const bar = { position: 'relative', height: 10, background: 'var(--gray-200)', borderRadius: 6 };
  const block = { position: 'absolute', top: 0, height: '100%', width: '2.8%', background: 'var(--accent)', borderRadius: 6 };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ minWidth: 60, fontSize: '.9rem', color: 'var(--text-light)' }}>{label}</span>
      <div style={{ flexGrow: 1 }}>
        <div style={bar}>
          <span style={{ ...block, left: '10%' }} />
          <span style={{ ...block, left: '55%' }} />
        </div>
      </div>
    </div>
  );
};

export default function ProtocolSection() {
  return (
    <section
      className={styles.softSection}
      role="region"
      aria-labelledby="protocol-title"
    >
      <H2 id="protocol-title">Standard Protocol</H2>

      <div style={{ maxWidth: 840, margin: '1.5rem auto 2rem' }}>
        <WeekBar label="Week 1" />
        <WeekBar label="Week 2" />
        <WeekBar label="Week 3" />
      </div>

      <P
        className={styles.lead}
        style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}
      >
        <strong>6 × 28‑min sessions in 3 weeks</strong>, fully clothed.
        A booster every 6‑12 months keeps results locked in.
      </P>
    </section>
  );
}
