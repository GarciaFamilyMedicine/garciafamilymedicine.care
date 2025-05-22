'use client';
import styles from '../pelvichealth.module.css';
import { H2, P } from './typography';

export default function CTASection() {
  return (
    <section className={`${styles.ctaSection} ${styles.card}`}>
      <H2>ready to book an appointment?</H2>
      <P>Call <strong>816‑426‑5320</strong> today and start your pelvic‑health journey.</P>
      <a href="tel:816-426-5320" className={styles.ctaButton}>call now</a>
    </section>
  );
}
