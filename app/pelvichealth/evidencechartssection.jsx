'use client';
import { Bar, Doughnut } from 'react-chartjs-2';
import { H2, H3, P } from './typography';
import styles from './pelvichealth.module.css';

export default function EvidenceChartsSection() {
  return (
    <section className={`${styles.statsSection} ${styles.card}`}>
      <H2>clinical evidence & key outcomes</H2>
      <P>
        Studies show strong, quantifiable benefits after six Emsella sessions.
        Explore symptom relief and quality‑of‑life gains below.
      </P>

      <div className={styles.chartsContainer}>
        {/* Incontinence Improvement */}
        <div className={styles.chart}>
          <H3>improvement in incontinence symptoms</H3>
          <Bar
            data={{
              labels: ['Stress', 'Urge', 'Mixed'],
              datasets: [{
                label: '% improvement',
                data: [69, 50, 60],
                backgroundColor: 'var(--accent)',
              }],
            }}
            options={{
              scales:{ y:{ beginAtZero:true, max:100 } },
              plugins:{ legend:{ display:false } },
            }}
          />
        </div>

        {/* Quality‑of‑Life */}
        <div className={styles.chart}>
          <H3>quality‑of‑life after emsella</H3>
          <Doughnut
            data={{
              labels: ['Significant Improvement', 'Minimal Change'],
              datasets: [{
                data:[95,5],
                backgroundColor:['var(--primary)','var(--gray-200)'],
              }],
            }}
            options={{
              cutout:'60%',
              plugins:{ legend:{ position:'bottom' } },
            }}
          />
        </div>
      </div>
    </section>
  );
}
