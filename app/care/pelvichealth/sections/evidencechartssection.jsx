'use client';
import { useState, useEffect } from 'react';
import { H2, H3, P } from './typography';
import styles from '../pelvichealth.module.css';

export default function EvidenceChartsSection() {
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
      <H2>clinical evidence & key outcomes</H2>
      <P>
        Studies show strong, quantifiable benefits after six Emsella sessions.
        Explore symptom relief and quality‑of‑life gains below.
      </P>

      <div className={styles.chartsContainer}>
        {/* Incontinence Improvement */}
        <div className={styles.chart}>
          <H3>improvement in incontinence symptoms</H3>
          {chartsLoaded && Bar ? (
            <Bar
              data={{
                labels: ['Stress', 'Urge', 'Mixed'],
                datasets: [{
                  label: '% improvement',
                  data: [69, 50, 60],
                  backgroundColor: '#4caf93',
                }],
              }}
              options={{
                responsive: true,
                scales:{ y:{ beginAtZero:true, max:100 } },
                plugins:{ legend:{ display:false } },
              }}
            />
          ) : (
            <div style={{
              padding: '2.5rem', 
              textAlign: 'center', 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(243,244,246,0.8) 100%)', 
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}>
              <div style={{marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '600', color: '#1f2937'}}>
                Clinical Evidence Summary
              </div>
              <div style={{display: 'grid', gap: '1rem'}}>
                <div style={{padding: '1rem', background: 'rgba(34,197,94,0.1)', borderRadius: '8px', borderLeft: '4px solid #22c55e'}}>
                  <strong style={{color: '#15803d'}}>Stress Incontinence:</strong> <span style={{fontSize: '1.2rem', fontWeight: '700'}}>69%</span> improvement
                </div>
                <div style={{padding: '1rem', background: 'rgba(59,130,246,0.1)', borderRadius: '8px', borderLeft: '4px solid #3b82f6'}}>
                  <strong style={{color: '#1d4ed8'}}>Urge Incontinence:</strong> <span style={{fontSize: '1.2rem', fontWeight: '700'}}>50%</span> improvement
                </div>
                <div style={{padding: '1rem', background: 'rgba(168,85,247,0.1)', borderRadius: '8px', borderLeft: '4px solid #a855f7'}}>
                  <strong style={{color: '#7c3aed'}}>Mixed Incontinence:</strong> <span style={{fontSize: '1.2rem', fontWeight: '700'}}>60%</span> improvement
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quality‑of‑Life */}
        <div className={styles.chart}>
          <H3>quality‑of‑life after emsella</H3>
          {chartsLoaded && Doughnut ? (
            <Doughnut
              data={{
                labels: ['Significant Improvement', 'Minimal Change'],
                datasets: [{
                  data:[95,5],
                  backgroundColor:['#2c6fb0','#e4e7eb'],
                }],
              }}
              options={{
                responsive: true,
                cutout:'60%',
                plugins:{ legend:{ position:'bottom' } },
              }}
            />
          ) : (
            <div style={{
              padding: '2.5rem', 
              textAlign: 'center', 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(243,244,246,0.8) 100%)', 
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}>
              <div style={{marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '600', color: '#1f2937'}}>
                Quality of Life Outcomes
              </div>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap'}}>
                <div style={{
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  background: 'conic-gradient(#22c55e 0deg 342deg, #e5e7eb 342deg 360deg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    color: '#15803d'
                  }}>95%</div>
                </div>
                <div style={{textAlign: 'left'}}>
                  <div style={{marginBottom: '0.5rem', color: '#15803d', fontWeight: '600'}}>
                    ✓ Significant Improvement: 95%
                  </div>
                  <div style={{color: '#6b7280', fontWeight: '500'}}>
                    • Minimal Change: 5%
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
