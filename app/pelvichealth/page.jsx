'use client';

import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './pelvichealth.css';

export default function PelvicHealth() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="pelvic-page-container">
      <Header />
      <main className="pelvic-main-content">
        <div className="pelvic-welcome-card">
          <h1 className="pelvic-heading pelvic-heading-xl">
            Emsella and Pelvic Health Recovery at Garcia Family Medicine: MAGNETIC RESONANCE Imaging
          </h1>
          <p className="pelvic-text pelvic-text-justify">
            Pelvic health issues, such as urinary incontinence and erectile dysfunction (ED), affect millions worldwide, significantly impacting quality of life. At Garcia Family Medicine, we are committed to addressing these conditions with innovative, non-invasive treatments like Emsella, while considering cultural norms, social determinants, and barriers to healthcare access. This blog explores the effectiveness of Emsella for pelvic health recovery, supported by statistics and charts, and highlights how we address disparities at our Kansas City practice. For questions or to schedule a consultation, call us at <a href="tel:816-426-5320" className="text-[#275cab] font-semibold hover:underline">816-426-5320</a>.
          </p>
          <button
            className="pelvic-read-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="moreContent"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
          <div
            id="moreContent"
            className={`pelvic-expanded-content ${isExpanded ? 'expanded' : 'collapsed'}`}
          >
            <h3 className="pelvic-heading pelvic-heading-lg">Understanding Pelvic Health Issues</h3>
            <p className="pelvic-text pelvic-text-justify">
              Pelvic floor dysfunction, often caused by weakened pelvic floor muscles, contributes to conditions like urinary incontinence and ED. Urinary incontinence affects approximately 25% of women and 10-15% of men in the U.S., with higher prevalence among older adults and post-partum women. Erectile dysfunction impacts about 30% of men over 40, with rates increasing with age and underlying health conditions like diabetes or prostate issues. These conditions can lead to embarrassment, reduced confidence, and social isolation, making effective treatment essential.
            </p>
            <h4 className="pelvic-heading pelvic-heading-lg">Prevalence of Pelvic Health Issues</h4>
            <ul className="pelvic-text list-disc pl-6">
              <li className="mb-2">Women: 50% experience urinary incontinence at some point, with stress incontinence being the most common type among younger women (45-49 years).</li>
              <li className="mb-2">Men: 21% of men aged 45-64 report urinary incontinence, with 6-8% experiencing it post-prostatectomy.</li>
              <li className="mb-2">ED: Affects 52% of men aged 40-70, with pelvic floor weakness contributing to reduced blood flow and nerve responsiveness.</li>
            </ul>

            <h3 className="pelvic-heading pelvic-heading-lg">Emsella: A Breakthrough Treatment</h3>
            <p className="pelvic-text pelvic-text-justify">
              Emsella is an FDA-approved, non-invasive treatment that uses High-Intensity Focused Electromagnetic (HIFEM) technology to stimulate and strengthen pelvic floor muscles. Patients sit fully clothed on the Emsella chair for 28-minute sessions, experiencing thousands of supramaximal contractions—equivalent to 11,000-12,000 Kegel exercises per session. This strengthens the pelvic floor, improves bladder control, and enhances sexual function.
            </p>
            <h4 className="pelvic-heading pelvic-heading-lg">How Emsella Works</h4>
            <p className="pelvic-text pelvic-text-justify">
              Mechanism: HIFEM induces deep muscle contractions, re-educating muscles and restoring neuromuscular control.<br />
              Treatment Plan: Typically, 6 sessions over 3 weeks (2 sessions weekly), with maintenance sessions every 6-12 months.<br />
              Benefits:<br />
              Reduces urinary incontinence (stress, urge, and mixed).<br />
              Improves ED by enhancing blood flow and erectile tissue regeneration.<br />
              Enhances sexual wellness, including sensation and orgasm quality.
            </p>

            <h3 className="pelvic-heading pelvic-heading-lg">Clinical Evidence and Statistics</h3>
            <p className="pelvic-text pelvic-text-justify">
              Clinical studies demonstrate Emsella's effectiveness:<br />
              Quality of Life: 95% of patients report significant improvement in quality of life after 6 sessions.<br />
              Incontinence: 75% of patients reduce pad usage, with 50-69% improvement in symptoms for stress, urge, and mixed incontinence.<br />
              ED: A 37% improvement in maintaining erections and 46% reduction in nighttime urination for men.<br />
              Long-Term Outcomes: Benefits peak at 3 months but may decline by year 3 without maintenance.
            </p>
            <div className="pelvic-chart-container">
              <h4 className="pelvic-heading pelvic-heading-lg">Improvement in Incontinence Symptoms Post-Emsella</h4>
              <div className="pelvic-bar-chart">
                <div className="pelvic-bar" style={{ width: '69%', background: '#275cab' }}>
                  <span className="pelvic-bar-label">Stress Incontinence: 69%</span>
                </div>
                <div className="pelvic-bar" style={{ width: '50%', background: '#1d539f' }}>
                  <span className="pelvic-bar-label">Urge Incontinence: 50%</span>
                </div>
                <div className="pelvic-bar" style={{ width: '60%', background: '#3772c5' }}>
                  <span className="pelvic-bar-label">Mixed Incontinence: 60%</span>
                </div>
              </div>
            </div>
            <div className="pelvic-chart-container">
              <h4 className="pelvic-heading pelvic-heading-lg">Quality of Life Improvement After Emsella</h4>
              <div className="pelvic-pie-chart">
                <div className="pelvic-pie-segment" style={{ width: '95%', background: '#275cab' }}>
                  <span className="pelvic-pie-label">Significant Improvement: 95%</span>
                </div>
                <div className="pelvic-pie-segment" style={{ width: '5%', background: '#1d539f' }}>
                  <span className="pelvic-pie-label">No Significant Change: 5%</span>
                </div>
              </div>
            </div>

            {/* Rest of your content with updated class names */}
            {/* Make sure to replace all class names with pelvic- prefixed versions */}
            
          </div>
        </div>

        <div className="pelvic-cta-section">
          <h3 className="pelvic-heading pelvic-heading-lg">Call to Action</h3>
          <p className="pelvic-text">
            If you or a loved one struggles with urinary incontinence or erectile dysfunction, Emsella at Garcia Family Medicine offers a life-changing solution. Contact us at <a href="tel:816-426-5320" className="text-[#275cab] font-semibold hover:underline">816-426-5320</a> to schedule a consultation and learn how we can help you regain control and confidence. Don't let stigma or barriers hold you back—our team is here to support you every step of the way.
          </p>
          <a href="tel:816-426-5320" className="pelvic-cta-button">
            Contact Us: 816-426-5320
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}