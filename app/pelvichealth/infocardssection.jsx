'use client';
import styles from './pelvichealth.module.css';
import { H2, H3, P } from './typography';

const CARDS = [
  ['urinary & bowel problems',
   'Urinary issues (painful urination, leakage, urgency) and bowel issues (constipation, straining, loss of control) are frequent pelvic‑floor problems.'],
  ['pelvic pain',
   'Chronic pain in the pelvic region can include tailbone pain, lower abdominal pain, and pain in the pelvic joints or muscles.'],
  ['pain during sex',
   'Many experience pain during or after intercourse due to pelvic‑floor dysfunction, significantly impacting intimacy and quality of life.'],
  ['organ prolapse',
   'Pelvic‑organ prolapse occurs when organs like the bladder or uterus descend, causing pressure, bulging, or discomfort.'],
];

export default function InfoCardsSection() {
  return (
    <section className={styles.infoSection}>
      <H2>common pelvic‑floor issues</H2>
      <div className={styles.infoCards}>
        {CARDS.map(([title,text]) => (
          <div key={title} className={`${styles.infoCard} ${styles.card}`}>
            <H3>{title}</H3>
            <P>{text}</P>
          </div>
        ))}
      </div>
    </section>
  );
}
