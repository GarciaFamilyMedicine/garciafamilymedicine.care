'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

// Register Chart.js components dynamically
const registerChartJS = async () => {
  try {
    const ChartJS = await import('chart.js');
    ChartJS.Chart.register(
      ChartJS.CategoryScale, 
      ChartJS.LinearScale,
      ChartJS.BarElement, 
      ChartJS.ArcElement,
      ChartJS.PointElement, 
      ChartJS.LineElement,
      ChartJS.Title, 
      ChartJS.Tooltip, 
      ChartJS.Legend
    );
  } catch (error) {
    console.warn('Chart.js registration failed:', error);
  }
};

export default function PelvicHealthPage() {
  const [chartsLoaded, setChartsLoaded] = useState(false);
  const [Bar, setBar] = useState(null);
  const [Doughnut, setDoughnut] = useState(null);

  useEffect(() => {
    registerChartJS();
    import('react-chartjs-2').then((chartModule) => {
      setBar(() => chartModule.Bar);
      setDoughnut(() => chartModule.Doughnut);
      setChartsLoaded(true);
    }).catch((error) => {
      console.error('Error loading charts:', error);
      setChartsLoaded(true);
    });
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Pelvic Health Recovery
              </h1>
              <p className={styles.heroSubtitle}>
                Emsella and Pelvic Health Recovery at Garcia Family Medicine: Advanced HIFEM™ Technology for Incontinence and Pelvic Floor Strengthening
              </p>
              <div className={styles.heroDescription}>
                <p>Pelvic health issues—most commonly <strong>urinary incontinence</strong> and <strong>erectile dysfunction</strong>—disrupt daily life for millions. Our team restores freedom and dignity with advanced, patient‑centered care.</p>
              </div>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Schedule Consultation: 816-427-5320
                </a>
                <a href="#understanding" className={styles.secondaryButton}>
                  Learn More
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.certificationBadge}>
                <div className={styles.badgeIcon}>⚡</div>
                <div className={styles.badgeText}>
                  <span>Emsella</span>
                  <span>HIFEM™</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className={styles.quickInfo}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🔬</div>
                <h3>Evidence-Based Treatment</h3>
                <p>Pelvic health issues—urinary incontinence & erectile dysfunction (ED)—affect millions worldwide.</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>⚡</div>
                <h3>Non-Invasive Emsella</h3>
                <p>We combine non‑invasive Emsella with culturally sensitive, equitable care.</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📈</div>
                <h3>Proven Outcomes</h3>
                <p>Explore outcomes, statistics, and access options with comprehensive care.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Pelvic Health Issues */}
        <section id="understanding" className={styles.understanding}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Understanding Pelvic Health Issues</h2>
              <p className={styles.leadText}>Pelvic‑floor dysfunction is <em>shockingly common</em> yet widely misunderstood.</p>
            </div>
            
            <div className={styles.statsGrid}>
              <div className={styles.statBadge}>
                <div className={styles.statNumber}>25%</div>
                <p>of women live with urinary incontinence</p>
              </div>
              <div className={styles.statBadge}>
                <div className={styles.statNumber}>10‑15%</div>
                <p>of men report incontinence episodes</p>
              </div>
              <div className={styles.statBadge}>
                <div className={styles.statNumber}>30%</div>
                <p>of men 40+ experience erectile dysfunction</p>
              </div>
            </div>

            <div className={styles.explanationText}>
              <p>Weak or poorly co‑ordinated muscles in the pelvic floor diminish bladder control and reduce blood flow to erectile tissue. Consequences include leakage, sleep disruption, and social withdrawal. By restoring muscle function early, <strong>incontinence</strong> and <strong>erectile dysfunction</strong> can often be reversed—returning confidence and control.</p>
            </div>
          </div>
        </section>

        {/* Prevalence Statistics */}
        <section className={styles.prevalence}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Prevalence of Pelvic Health Issues</h2>
            </div>
            
            <div className={styles.prevalenceGrid}>
              <div className={styles.prevalenceCard}>
                <div className={styles.prevalenceHeader} style={{background: '#4caf9325', color: '#4caf93'}}>
                  WOMEN (UI)
                </div>
                <p className={styles.prevalenceSubtitle}>Urinary Incontinence</p>
                <div className={styles.chartContainer}>
                  <div className={styles.percentageDisplay}>
                    <span className={styles.percentageNumber}>50%</span>
                  </div>
                </div>
                <p className={styles.prevalenceDesc}><strong>50%</strong> of women experience leakage; stress‑type peaks age 45‑49.</p>
              </div>

              <div className={styles.prevalenceCard}>
                <div className={styles.prevalenceHeader} style={{background: '#2c6fb025', color: '#2c6fb0'}}>
                  MEN (UI)
                </div>
                <p className={styles.prevalenceSubtitle}>Urinary Incontinence</p>
                <div className={styles.chartContainer}>
                  <div className={styles.percentageDisplay}>
                    <span className={styles.percentageNumber}>21%</span>
                  </div>
                </div>
                <p className={styles.prevalenceDesc}><strong>21%</strong> of men 45‑64 report leakage; <strong>6‑8%</strong> after prostatectomy.</p>
              </div>

              <div className={styles.prevalenceCard}>
                <div className={styles.prevalenceHeader} style={{background: '#f28c2825', color: '#f28c28'}}>
                  MEN (ED)
                </div>
                <p className={styles.prevalenceSubtitle}>Erectile Dysfunction</p>
                <div className={styles.chartContainer}>
                  <div className={styles.percentageDisplay}>
                    <span className={styles.percentageNumber}>52%</span>
                  </div>
                </div>
                <p className={styles.prevalenceDesc}><strong>52%</strong> of men 40‑70 live with ED—often linked to pelvic‑floor weakness.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emsella At A Glance */}
        <section className={styles.emsellaGlance}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Emsella Therapy — At a Glance</h2>
            </div>
            
            <div className={styles.glanceGrid}>
              <div className={styles.glanceCard}>
                <div className={styles.glanceIcon} style={{background: 'var(--accent)'}}>
                  ⚡
                </div>
                <h3><strong>Supramaximal Power</strong></h3>
                <div className={styles.bigNumber}>11,000</div>
                <p>HIFEM™ pulses fire Kegel‑level contractions in a single 28‑min visit.</p>
              </div>

              <div className={styles.glanceCard}>
                <div className={styles.glanceIcon} style={{background: '#2c6fb0'}}>
                  💧
                </div>
                <h3><strong>Leakage Control</strong></h3>
                <ul className={styles.benefitsList}>
                  <li>✓ Pad usage ↓ <strong>75%</strong></li>
                  <li>✓ Stress, urge & mixed UI improved</li>
                </ul>
              </div>

              <div className={styles.glanceCard}>
                <div className={styles.glanceIcon} style={{background: '#f28c28'}}>
                  ❤️
                </div>
                <h3><strong>Sexual Wellness</strong></h3>
                <ul className={styles.benefitsList}>
                  <li>✓ Better erectile rigidity</li>
                  <li>✓ Stronger orgasms & confidence ↑</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Evidence */}
        <section className={styles.evidence}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Clinical Evidence & Key Outcomes</h2>
              <p>Studies show strong, quantifiable benefits after six Emsella sessions. Explore symptom relief and quality‑of‑life gains below.</p>
            </div>
            
            <div className={styles.evidenceGrid}>
              <div className={styles.evidenceCard}>
                <h3>Improvement in Incontinence Symptoms</h3>
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
                      scales: { y: { beginAtZero: true, max: 100 } },
                      plugins: { legend: { display: false } },
                    }}
                  />
                ) : (
                  <div className={styles.chartFallback}>
                    <div className={styles.chartFallbackTitle}>Clinical Evidence Summary</div>
                    <div className={styles.chartFallbackContent}>
                      <div className={styles.evidenceItem} style={{borderLeft: '4px solid #22c55e'}}>
                        <strong>Stress Incontinence:</strong> <span className={styles.evidencePercent}>69%</span> improvement
                      </div>
                      <div className={styles.evidenceItem} style={{borderLeft: '4px solid #3b82f6'}}>
                        <strong>Urge Incontinence:</strong> <span className={styles.evidencePercent}>50%</span> improvement
                      </div>
                      <div className={styles.evidenceItem} style={{borderLeft: '4px solid #a855f7'}}>
                        <strong>Mixed Incontinence:</strong> <span className={styles.evidencePercent}>60%</span> improvement
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.evidenceCard}>
                <h3>Quality‑of‑Life After Emsella</h3>
                <div className={styles.qualityChart}>
                  <div className={styles.qualityCircle}>
                    <div className={styles.qualityPercent}>95%</div>
                  </div>
                  <div className={styles.qualityLabels}>
                    <div className={styles.qualityLabel}>
                      ✓ Significant Improvement: 95%
                    </div>
                    <div className={styles.qualityLabelMinor}>
                      • Minimal Change: 5%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Your Emsella Treatment Journey</h2>
              <p>A simple, comfortable path to pelvic floor wellness and restored confidence</p>
            </div>

            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Comprehensive Evaluation</h3>
                  <p>Detailed assessment of your pelvic health concerns, medical history, and personal goals for treatment</p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Personalized Protocol</h3>
                  <p>Custom 6-session Emsella treatment plan designed for your specific condition and lifestyle</p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>HIFEM™ Sessions</h3>
                  <p>Comfortable 28-minute treatments delivering 11,000+ supramaximal contractions, twice weekly</p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Progress & Outcomes</h3>
                  <p>Regular monitoring with measurable improvements in symptoms and quality of life assessments</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
