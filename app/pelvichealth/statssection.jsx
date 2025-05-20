'use client';
import styles from './pelvichealth.module.css';
import { Bar, Doughnut } from 'react-chartjs-2';
import { H2, H3, P } from './typography';

export default function StatsSection() {
  return (
    <section className={`${styles.statsSection} ${styles.card}`}>
      <H2>pelvic health by the numbers</H2>
      <P>
        The charts below illustrate prevalence and symptom types among women aged 18‑59.
      </P>

      <div className={styles.chartsContainer}>
        {/* prevalence bar */}
        <div className={styles.chart}>
          <H3>prevalence of symptoms</H3>
          <Bar
            data={{
              labels: ['≥1 symptom', '≥2 symptoms', '≥3 symptoms'],
              datasets: [{
                label: 'percentage',
                data: [83, 75, 66],
                backgroundColor: 'var(--primary)',
              }],
            }}
            options={{ indexAxis:'y', scales:{x:{beginAtZero:true,max:100}}, plugins:{legend:{display:false}} }}
          />
        </div>

        {/* symptom‑type doughnut */}
        <div className={styles.chart}>
          <H3>common symptom types</H3>
          <Doughnut
            data={{
              labels: ['bladder & bowel', 'sexual', 'other'],
              datasets: [{
                data: [50, 33, 17],
                backgroundColor: ['var(--primary)','var(--accent)', '#8e5da9'],
              }],
            }}
            options={{ cutout:'60%', plugins:{ legend:{ position:'bottom' } } }}
          />
        </div>
      </div>
    </section>
  );
}
