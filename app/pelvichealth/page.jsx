'use client';

import dynamic from 'next/dynamic';
import styles  from './pelvichealth.module.css';
import Header  from '../../components/header/header.jsx';
import Footer  from '../../components/footer/footer.jsx';

/* hero */
const IntroSection = dynamic(() => import('./introsection'), { ssr: false });

/* content blocks */
const UnderstandingSection  = dynamic(() => import('./understandingsection'),   { ssr: false });
const PrevalenceCards       = dynamic(() => import('./prevalencecardssection'), { ssr: false });
const EmsellaAtAGlance      = dynamic(() => import('./emsellaataglance'),       { ssr: false });
const ProtocolSection       = dynamic(() => import('./protocolsection'),        { ssr: false });
const EvidenceChartsSection = dynamic(() => import('./evidencechartssection'),  { ssr: false });
const BarriersSection       = dynamic(() => import('./barrierssection'),        { ssr: false });
const EquityImpactSection   = dynamic(() => import('./equityimpactsection'),    { ssr: false });
const PatientStoriesSection = dynamic(() => import('./patientstoriessection'),  { ssr: false });
const CTASection            = dynamic(() => import('./ctasection'),             { ssr: false });

/* one‑time Chart.js registration */
import {
  Chart as ChartJS,
  CategoryScale, LinearScale,
  BarElement, ArcElement,
  PointElement, LineElement,
  Title, Tooltip, Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale, LinearScale,
  BarElement, ArcElement,
  PointElement, LineElement,
  Title, Tooltip, Legend
);

export default function Page() {
  return (
    <>
      <Header />
      <div className={`${styles.vars} ${styles.page}`}>
        <main className={styles.main}>
          <IntroSection />
          <UnderstandingSection />
          <PrevalenceCards />
          <EmsellaAtAGlance />
          <ProtocolSection />
          <EvidenceChartsSection />
          <BarriersSection />
          <EquityImpactSection />
          <PatientStoriesSection />
          <CTASection />
        </main>
      </div>
      <Footer />
    </>
  );
}
