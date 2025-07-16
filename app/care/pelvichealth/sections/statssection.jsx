'use client';
import { useState, useEffect } from 'react';
import styles from '../pelvichealth.module.css';
import { H2, H3, P } from './typography';

export default function StatsSection() {
  const [chartsLoaded, setChartsLoaded] = useState(false);
  const [Bar, setBar] = useState(null);
  const [Doughnut, setDoughnut] = useState(null);

  useEffect(() => {
    // Dynamically import chart components only on client side
    import('react-chartjs-2').then((chartModule) => {
      setBar(() => chartModule.Bar);
      setDoughnut(() => chartModule.Doughnut);
      setChartsLoaded(true);
    }).catch((error) => {
      console.error('Error loading charts:', error);
      setChartsLoaded(true); // Show content even if charts fail
    });
  }, []);

  return (
    <section className={`${styles.statsSection} ${styles.card}`}>
      <H2>pelvic health by the numbers</H2>
      <P>
        The charts below illustrate prevalence and symptom types among women aged 18‑59.
      </P>

      <div className={styles.chartsContainer}>
        {/* prevalence bar */}
        <div className={styles.chart}>
          <H3>prevalence of symptoms</H3>
          {chartsLoaded && Bar ? (
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
          ) : (
            <div style={{padding: '2rem', textAlign: 'center', background: '#f5f5f5', borderRadius: '8px'}}>
              <p><strong>≥1 symptom:</strong> 83%</p>
              <p><strong>≥2 symptoms:</strong> 75%</p>
              <p><strong>≥3 symptoms:</strong> 66%</p>
            </div>
          )}
        </div>

        {/* symptom‑type doughnut */}
        <div className={styles.chart}>
          <H3>common symptom types</H3>
          {chartsLoaded && Doughnut ? (
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
          ) : (
            <div style={{padding: '2rem', textAlign: 'center', background: '#f5f5f5', borderRadius: '8px'}}>
              <p><strong>Bladder & bowel:</strong> 50%</p>
              <p><strong>Sexual:</strong> 33%</p>
              <p><strong>Other:</strong> 17%</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}