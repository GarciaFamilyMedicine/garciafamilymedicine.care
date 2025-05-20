'use client';
import { H2, P } from './typography';
import styles from './pelvichealth.module.css';

export default function PatientStoriesSection() {
  return (
    <section className={`${styles.card} ${styles.blogSection}`}>
      <article>
        <H2>patient stories</H2>

        <P><strong>Maria (48, Hispanic):</strong> After six Emsella sessions she cut stress‑incontinence episodes by 70 % and regained social confidence.</P>
        <P><strong>James (62, African‑American):</strong> Post‑prostatectomy, Emsella reduced nocturia by 40 % and improved erection quality, aided by our financial‑assistance program.</P>

        <H2>why choose garcia family medicine?</H2>
        <P>
          Located in Kansas City, we combine cutting‑edge technology with a patient‑centered,
          equitable approach. <strong>Accessibility</strong>, <strong>cultural competence</strong>,
          and <strong>community focus</strong> drive every treatment plan.
        </P>
      </article>
    </section>
  );
}
