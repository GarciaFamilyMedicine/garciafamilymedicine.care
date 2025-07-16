'use client';
import { useState, useEffect } from 'react';
import { H2 } from './typography';
import styles from '../pelvichealth.module.css';

/* ---------- colours ---------- */
const COLORS = {
  women: '#4caf93',
  menUI: '#2c6fb0',
  menED: '#f28c28',
  gray:  '#e4e7eb',
};

/* ---------- chart helpers ---------- */
const makeData = (val, accent) => ({
  labels: [''],
  datasets: [
    {
      data: [val, 100 - val],
      backgroundColor: [accent, COLORS.gray],
      borderWidth: 0,
      borderRadius: 6,
      hoverOffset: 4,
    },
  ],
});

const centerText = (accent) => ({
  id: 'centerText',
  beforeDraw: ({ ctx, chartArea, data }) => {
    const percent = data.datasets[0].data[0];
    const { width, height } = chartArea;
    ctx.save();
    ctx.font = `600 ${width < 350 ? 18 : 28}px var(--font-primary)`;
    ctx.fillStyle = accent;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,.06)';
    ctx.shadowBlur  = 3;
    ctx.fillText(`${percent}%`, width / 2, height / 2);
    ctx.restore();
  },
});

const options = {
  cutout: '55%',
  responsive: true,
  maintainAspectRatio: false,
  plugins: { tooltip: { enabled: false }, legend: { display: false } },
};

/* ---------- prevalence card ---------- */
function StatCard({ title, subtitle, val, accent, desc, Doughnut, chartsLoaded }) {
  return (
    <div className={`statCard ${styles.card} ${styles.infoCard}`} style={{ transition:'transform .3s,box-shadow .3s' }}>
      <div className="statCardHeader" style={{ background:`${accent}25`, color:accent }}>
        {title.toUpperCase()}
      </div>

      {subtitle && (
        <p style={{ marginTop:'.5rem', fontSize:'.85rem', fontVariant:'small-caps', color:'var(--text-light)' }}>
          {subtitle}
        </p>
      )}

      <div className="doughnutShadow" style={{ height:240, marginTop:'.75rem' }}>
        {chartsLoaded && Doughnut ? (
          <Doughnut
            data={makeData(val, accent)}
            options={options}
            plugins={[centerText(accent)]}
          />
        ) : (
          <div style={{
            height: '240px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: '#f5f5f5',
            borderRadius: '50%',
            margin: '0 auto',
            width: '240px',
            position: 'relative'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: accent,
              textAlign: 'center'
            }}>
              {val}%
            </div>
          </div>
        )}
      </div>

      <p className={`${styles.statDesc}`}>
        {desc}
      </p>
    </div>
  );
}

/* ---------- section ---------- */
export default function PrevalenceCardsSection() {
  const [chartsLoaded, setChartsLoaded] = useState(false);
  const [Doughnut, setDoughnut] = useState(null);

  useEffect(() => {
    // Dynamically import chart components only on client side
    import('react-chartjs-2').then((chartModule) => {
      setDoughnut(() => chartModule.Doughnut);
      setChartsLoaded(true);
    }).catch((error) => {
      console.error('Error loading charts:', error);
      setChartsLoaded(true); // Show content even if charts fail
    });
  }, []);

  return (
    <section className={`${styles.softSection} ${styles.infoSection}`} aria-labelledby="prevalence-title">
      <H2 id="prevalence-title">Prevalence of Pelvic Health Issues</H2>

      <div className={styles.infoCards}>
        <StatCard
          title="Women (UI)"
          subtitle="Urinary Incontinence"
          val={50}
          accent={COLORS.women}
          desc={<><strong>50 %</strong> of women experience leakage; stress‑type peaks age 45‑49.</>}
          Doughnut={Doughnut}
          chartsLoaded={chartsLoaded}
        />
        <StatCard
          title="Men (UI)"
          subtitle="Urinary Incontinence"
          val={21}
          accent={COLORS.menUI}
          desc={<><strong>21 %</strong> of men 45‑64 report leakage; <strong>6‑8 %</strong> after prostatectomy.</>}
          Doughnut={Doughnut}
          chartsLoaded={chartsLoaded}
        />
        <StatCard
          title="Men (ED)"
          subtitle="Erectile Dysfunction"
          val={52}
          accent={COLORS.menED}
          desc={<><strong>52 %</strong> of men 40‑70 live with ED—often linked to pelvic‑floor weakness.</>}
          Doughnut={Doughnut}
          chartsLoaded={chartsLoaded}
        />
      </div>
    </section>
  );
}