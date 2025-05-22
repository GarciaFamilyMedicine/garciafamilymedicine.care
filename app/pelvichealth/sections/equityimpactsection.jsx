'use client';
import { Line } from 'react-chartjs-2';
import { H2, H3, P, UL } from './typography';
import styles from '../pelvichealth.module.css';

export default function EquityImpactSection() {
  return (
    <section className={`${styles.card} ${styles.blogSection}`}>
      <article>
        <H2>commitment to equity & measured impact</H2>

        <H3>targeted strategies</H3>
        <UL>
          <li>Sliding‑scale fees & flexible payment plans.</li>
          <li>Telemedicine for rural patients.</li>
          <li>Multilingual brochures & videos.</li>
          <li>Non‑profit partnerships funding uninsured care.</li>
        </UL>

        <H3>impact metrics</H3>
        <UL>
          <li>30 % more low‑income patients treated in 2024 vs 2023.</li>
          <li>90 % comfort discussing pelvic health with bilingual staff.</li>
          <li>25 % higher treatment uptake among Hispanic women since 2023.</li>
        </UL>

        <div className={styles.chart}>
          <H3>emsella access growth (2023‑2024)</H3>
          <Line
            data={{
              labels:['2023','2024'],
              datasets:[{
                label:'% of underserved patients',
                data:[20,30],
                borderColor:'var(--primary)',
                backgroundColor:'var(--primary)',
                fill:false,
              }],
            }}
            options={{
              scales:{ y:{ beginAtZero:true,max:40 } },
              plugins:{ legend:{ position:'bottom' } },
            }}
          />
        </div>
      </article>
    </section>
  );
}
