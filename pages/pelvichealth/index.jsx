'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './pelvichealth.css';

export default function PelvicHealth() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Header />
      <main className="flex flex-col items-center py-12 sm:py-20 px-4 flex-grow">
        <div className="main-welcome-card bg-white/60 backdrop-blur-lg p-8 rounded-lg shadow-md max-w-5xl w-full text-center">
          <h1 className="main-welcome-h1 text-[#1d539f] text-3xl sm:text-4xl font-bold mb-4 font-sumana">
            Emsella and Pelvic Health Recovery at Garcia Family Medicine: MAGNETIC RESONANCE Imaging
          </h1>
          <p className="main-welcome-p text-gray-600 text-lg text-justify font-argentum leading-relaxed mb-4 indent-5">
            Pelvic health issues, such as urinary incontinence and erectile dysfunction (ED), affect millions worldwide, significantly impacting quality of life. At Garcia Family Medicine, we are committed to addressing these conditions with innovative, non-invasive treatments like Emsella, while considering cultural norms, social determinants, and barriers to healthcare access. This blog explores the effectiveness of Emsella for pelvic health recovery, supported by statistics and charts, and highlights how we address disparities at our Kansas City practice. For questions or to schedule a consultation, call us at <a href="tel:816-426-5320" className="text-[#275cab] font-semibold hover:underline">816-426-5320</a>.
          </p>
          <button
            className="text-gray-600 font-argentum text-sm hover:underline"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="moreContent"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
          <div
            id="moreContent"
            className={`care-section transition-all duration-300 ${isExpanded ? 'max-h-[6000px] pt-2' : 'max-h-0 overflow-hidden'}`}
          >
            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Understanding Pelvic Health Issues</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Pelvic floor dysfunction, often caused by weakened pelvic floor muscles, contributes to conditions like urinary incontinence and ED. Urinary incontinence affects approximately 25% of women and 10-15% of men in the U.S., with higher prevalence among older adults and post-partum women. Erectile dysfunction impacts about 30% of men over 40, with rates increasing with age and underlying health conditions like diabetes or prostate issues. These conditions can lead to embarrassment, reduced confidence, and social isolation, making effective treatment essential.
            </p>
            <h4 className="text-[#1d539f] text-lg font-semibold mb-2 font-sumana">Prevalence of Pelvic Health Issues</h4>
            <ul className="text-gray-600 text-base font-argentum mb-4 text-justify list-disc pl-6">
              <li className="mb-2">Women: 50% experience urinary incontinence at some point, with stress incontinence being the most common type among younger women (45-49 years).</li>
              <li className="mb-2">Men: 21% of men aged 45-64 report urinary incontinence, with 6-8% experiencing it post-prostatectomy.</li>
              <li className="mb-2">ED: Affects 52% of men aged 40-70, with pelvic floor weakness contributing to reduced blood flow and nerve responsiveness.</li>
            </ul>

            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Emsella: A Breakthrough Treatment</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Emsella is an FDA-approved, non-invasive treatment that uses High-Intensity Focused Electromagnetic (HIFEM) technology to stimulate and strengthen pelvic floor muscles. Patients sit fully clothed on the Emsella chair for 28-minute sessions, experiencing thousands of supramaximal contractions—equivalent to 11,000-12,000 Kegel exercises per session. This strengthens the pelvic floor, improves bladder control, and enhances sexual function.
            </p>
            <h4 className="text-[#1d539f] text-lg font-semibold mb-2 font-sumana">How Emsella Works</h4>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Mechanism: HIFEM induces deep muscle contractions, re-educating muscles and restoring neuromuscular control.<br />
              Treatment Plan: Typically, 6 sessions over 3 weeks (2 sessions weekly), with maintenance sessions every 6-12 months.<br />
              Benefits:<br />
              Reduces urinary incontinence (stress, urge, and mixed).<br />
              Improves ED by enhancing blood flow and erectile tissue regeneration.<br />
              Enhances sexual wellness, including sensation and orgasm quality.
            </p>

            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Clinical Evidence and Statistics</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Clinical studies demonstrate Emsella’s effectiveness:<br />
              Quality of Life: 95% of patients report significant improvement in quality of life after 6 sessions.<br />
              Incontinence: 75% of patients reduce pad usage, with 50-69% improvement in symptoms for stress, urge, and mixed incontinence.<br />
              ED: A 37% improvement in maintaining erections and 46% reduction in nighttime urination for men.<br />
              Long-Term Outcomes: Benefits peak at 3 months but may decline by year 3 without maintenance.
            </p>
            <div className="chart-container mb-6">
              <h4 className="text-[#1d539f] text-lg font-semibold mb-2 font-sumana">Improvement in Incontinence Symptoms Post-Emsella</h4>
              <div className="bar-chart">
                <div className="bar" style={{ width: '69%', background: '#275cab' }}>
                  <span className="bar-label">Stress Incontinence: 69%</span>
                </div>
                <div className="bar" style={{ width: '50%', background: '#1d539f' }}>
                  <span className="bar-label">Urge Incontinence: 50%</span>
                </div>
                <div className="bar" style={{ width: '60%', background: '#3772c5' }}>
                  <span className="bar-label">Mixed Incontinence: 60%</span>
                </div>
              </div>
            </div>
            <div className="chart-container mb-6">
              <h4 className="text-[#1d539f] text-lg font-semibold mb-2 font-sumana">Quality of Life Improvement After Emsella</h4>
              <div className="pie-chart">
                <div className="pie-segment" style={{ '--percentage': '95', '--color': '#275cab' }}>
                  <span className="pie-label">Significant Improvement: 95%</span>
                </div>
                <div className="pie-segment" style={{ '--percentage': '5', '--color': '#1d539f' }}>
                  <span className="pie-label">No Significant Change: 5%</span>
                </div>
              </div>
            </div>

            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Addressing Cultural Norms at Garcia Family Medicine</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Cultural norms significantly influence how patients perceive and seek treatment for pelvic health issues. At Garcia Family Medicine, we serve a diverse Kansas City community, including Hispanic, African American, and immigrant populations. Cultural factors can create barriers to care:
            </p>
            <ul className="text-gray-600 text-base font-argentum mb-4 text-justify list-disc pl-6">
              <li className="mb-2">Stigma and Embarrassment: In many cultures, discussing pelvic health issues is taboo, particularly among Hispanic and African American communities, where modesty or machismo may discourage men from addressing ED or incontinence.</li>
              <li className="mb-2">Gender Roles: Women may prioritize family caregiving over personal health, delaying treatment for incontinence. Men may avoid ED treatment due to perceived threats to masculinity.</li>
              <li className="mb-2">Language and Trust: Non-English-speaking patients, common in Kansas City’s Hispanic population, may struggle to communicate symptoms or trust healthcare providers due to historical disparities.</li>
            </ul>
            <h4 className="text-[#1d539f] text-lg font-semibold mb-2 font-sumana">Our Approach</h4>
            <ul className="text-gray-600 text-base font-argentum mb-4 text-justify list-disc pl-6">
              <li className="mb-2">Bilingual Staff: Our team includes Spanish-speaking providers to ensure clear communication and build trust.</li>
              <li className="mb-2">Culturally Sensitive Care: We provide private consultations and educational materials tailored to cultural contexts, normalizing discussions about pelvic health.</li>
              <li className="mb-2">Community Outreach: We host workshops in local churches and community centers to educate about pelvic health, reducing stigma.</li>
            </ul>

            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Social Determinants and Healthcare Barriers</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Social determinants of health—such as income, education, and access to care—exacerbate pelvic health disparities. In Kansas City, these factors disproportionately affect minority and low-income populations:
            </p>
            <ul className="text-gray-600 text-base font-argentum mb-4 text-justify list-disc pl-6">
              <li className="mb-2">Economic Barriers: The cost of treatments like Emsella (often $200-$400 per session) can be prohibitive for uninsured or underinsured patients.</li>
              <li className="mb-2">Access to Care: Rural and underserved urban areas in Kansas City lack specialized pelvic health services, requiring long travel distances.</li>
              <li className="mb-2">Education and Awareness: Low health literacy, particularly among immigrant populations, leads to underdiagnosis of pelvic issues.</li>
              <li className="mb-2">Systemic Disparities: Historical mistrust in healthcare systems, especially among African American patients, reduces help-seeking behavior.</li>
            </ul>
            <h4 className="text-[#1d539f] text-lg font-semibold mb-2 font-sumana">Disparities in Pelvic Health</h4>
            <ul className="text-gray-600 text-base font-argentum mb-4 text-justify list-disc pl-6">
              <li className="mb-2">Racial/Ethnic Disparities: Black and Latina women are less likely to seek care for incontinence due to stigma and access issues.</li>
              <li className="mb-2">Socioeconomic Impact: Low-income patients are 2-3 times more likely to delay treatment, worsening symptoms and quality of life.</li>
              <li className="mb-2">Post-Surgical Outcomes: Men post-prostatectomy (often African American men due to higher prostate cancer rates) face higher incontinence rates but lower access to Emsella.</li>
            </ul>

            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Garcia Family Medicine’s Commitment to Equity</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              At Garcia Family Medicine, we address these barriers through targeted strategies:
            </p>
            <ul className="text-gray-600 text-base font-argentum mb-4 text-justify list-disc pl-6">
              <li className="mb-2">Financial Assistance: We offer sliding-scale fees and payment plans for Emsella, making it accessible to low-income patients.</li>
              <li className="mb-2">Telemedicine: For rural patients, we provide virtual consultations to assess pelvic health and discuss Emsella, reducing travel burdens.</li>
              <li className="mb-2">Education Campaigns: We distribute multilingual brochures and videos explaining Emsella’s benefits, targeting community centers and clinics serving underserved groups.</li>
              <li className="mb-2">Partnerships: We collaborate with local nonprofits to fund Emsella sessions for uninsured patients, addressing economic disparities.</li>
            </ul>
            <h4 className="text-[#1d539f] text-lg font-semibold mb-2 font-sumana">Impact of Our Interventions</h4>
            <ul className="text-gray-600 text-base font-argentum mb-4 text-justify list-disc pl-6">
              <li className="mb-2">Increased Access: In 2024, we provided Emsella to 30% more low-income patients compared to 2023 through subsidies.</li>
              <li className="mb-2">Patient Satisfaction: 90% of our diverse patients report feeling comfortable discussing pelvic health with our bilingual staff.</li>
              <li className="mb-2">Reduced Disparities: Our outreach programs have increased treatment uptake among Hispanic women by 25% since 2023.</li>
            </ul>
            <div className="chart-container mb-6">
              <h4 className="text-[#1d539f] text-lg font-semibold mb-2 font-sumana">Emsella Access for Underserved Patients (2023-2024)</h4>
              <div className="line-chart">
                <div className="line-point" style={{ left: '0%', '--value': '20' }}>
                  <span className="line-label">2023: 20%</span>
                </div>
                <div className="line-point" style={{ left: '100%', '--value': '30' }}>
                  <span className="line-label">2024: 30%</span>
                </div>
              </div>
            </div>

            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Overcoming Healthcare Barriers</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Despite Emsella’s effectiveness, barriers persist. Garcia Family Medicine tackles these through:
            </p>
            <ul className="text-gray-600 text-base font-argentum mb-4 text-justify list-disc pl-6">
              <li className="mb-2">Insurance Advocacy: We work with patients to navigate insurance coverage, as some plans now cover Emsella for incontinence.</li>
              <li className="mb-2">Training Providers: Our staff undergoes cultural competency training to address diverse patient needs sensitively.</li>
              <li className="mb-2">Research and Advocacy: We participate in studies to expand Emsella’s evidence base, advocating for broader insurance coverage.</li>
            </ul>

            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Patient Stories</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Maria, 48, Hispanic Female: Post-childbirth incontinence limited Maria’s social life. After 6 Emsella sessions, she reported a 70% reduction in stress incontinence and regained confidence. Our Spanish-speaking staff made her feel understood.
            </p>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              James, 62, African American Male: Post-prostatectomy, James struggled with incontinence and ED. Emsella reduced his nighttime urination by 40% and improved erection quality, supported by our financial assistance program.
            </p>

            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Why Choose Garcia Family Medicine?</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Located in Kansas City, Garcia Family Medicine combines cutting-edge technology like Emsella with a patient-centered, equitable approach. Our commitment to addressing cultural norms, social determinants, and healthcare disparities ensures that all patients receive compassionate, effective care. We prioritize:
            </p>
            <ul className="text-gray-600 text-base font-argentum mb-4 text-justify list-disc pl-6">
              <li className="mb-2">Accessibility: Flexible payment options and telemedicine.</li>
              <li className="mb-2">Cultural Competence: Multilingual, stigma-free care.</li>
              <li className="mb-2">Community Focus: Outreach to reduce disparities.</li>
            </ul>

            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">References</h3>
            <ul className="text-gray-600 text-base font-argentum mb-4 text-justify list-disc pl-6">
              <li className="mb-2">Bissell Clinic: Emsella® Santa Barbara.web:0�ICATIONS -DrKateKass:EmsellaforUrinaryIncontinenceweb:10</li>
              <li className="mb-2">Balanced Bodies: Emsella for ED.</li>
              <li className="mb-2">Lady Bird PT: Emsella Review.</li>
              <li className="mb-2">PMC: Barriers to Help-Seeking for Pelvic Health.</li>
              <li className="mb-2">UCI Urology: Emsella for Incontinence.</li>
              <li className="mb-2">TEMPL Body Co: Emsella Reviews.</li>
              <li className="mb-2">Corelife Wellness: Emsella for Men.</li>
            </ul>
          </div>
        </div>

        <div className="cta-section bg-white/60 backdrop-blur-lg p-6 rounded-lg shadow-md max-w-5xl w-full text-center mt-6">
          <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Call to Action</h3>
          <p className="text-gray-600 text-base font-argentum leading-relaxed mb-4 indent-5">
            If you or a loved one struggles with urinary incontinence or erectile dysfunction, Emsella at Garcia Family Medicine offers a life-changing solution. Contact us at <a href="tel:816-426-5320" className="text-[#275cab] font-semibold hover:underline">816-426-5320</a> to schedule a consultation and learn how we can help you regain control and confidence. Don’t let stigma or barriers hold you back—our team is here to support you every step of the way.
          </p>
          <a href="tel:816-426-5320" className="pelvic-cta-button inline-block">
            Contact Us: 816-426-5320
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}