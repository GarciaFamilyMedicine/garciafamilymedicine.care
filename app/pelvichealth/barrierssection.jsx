'use client';
import { H2, H3, P, UL } from './typography';
import styles from './pelvichealth.module.css';

export default function BarriersSection() {
  return (
    <section className={`${styles.card} ${styles.blogSection}`}>
      <article>
        <H2>cultural norms & access barriers</H2>

        <H3>stigma and cultural sensitivity</H3>
        <UL>
          <li><strong>Stigma:</strong> Discussing pelvic health is taboo in many Hispanic & African‑American communities.</li>
          <li><strong>Gender roles:</strong> Women often defer self‑care; men may view ED treatment as a threat to masculinity.</li>
          <li><strong>Language & trust:</strong> Non‑English speakers may struggle to communicate symptoms or trust providers.</li>
        </UL>

        <H3>our approach</H3>
        <UL>
          <li>Bilingual staff for clear, trustful communication.</li>
          <li>Culturally tailored education & private consultations.</li>
          <li>Community workshops in churches and local centers.</li>
        </UL>

        <H3>social determinants of health</H3>
        <UL>
          <li><strong>Economic:</strong> $200‑$400 per session can deter uninsured patients.</li>
          <li><strong>Access:</strong> Rural & underserved urban zones lack pelvic‑health specialists.</li>
          <li><strong>Education:</strong> Low health literacy leads to under‑diagnosis.</li>
          <li><strong>Systemic mistrust:</strong> Historic bias reduces help‑seeking.</li>
        </UL>
      </article>
    </section>
  );
}
