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
            Pelvic Health with Pelvitron
          </h1>
          <h2 className="main-welcome-h2 text-[#1d539f] text-xl sm:text-2xl font-semibold mb-4 font-sumana">
            Transformative Care in Blue Springs, MO
          </h2>
          <p className="main-welcome-p text-gray-600 text-lg text-justify font-argentum leading-relaxed mb-4 indent-5">
            At Garcia Family Medicine, we believe pelvic health is key to your confidence and well-being. Join us for our <span className="pelvic-launch-highlight">July 7th Pelvitron Launch Event</span> to discover Pelvitron, a revolutionary, non-invasive treatment for pelvic floor concerns like incontinence, discomfort, or weakness. Serving Blue Springs, Independence, Lee's Summit, and the Kansas City metro area, our faith-filled care restores strength and dignity without surgery or downtime.
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
            className={`care-section transition-all duration-300 ${isExpanded ? 'max-h-[2000px] pt-2' : 'max-h-0 overflow-hidden'}`}
          >
            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Why Pelvitron?</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Unveiled at our <span className="pelvic-launch-highlight">July 7th Launch Event</span>, Pelvitron uses high-intensity focused electromagnetic (HIFEM) technology to deliver 11,000 supramaximal contractions in a single 28-minute session—equivalent to 11,000 Kegel exercises. This strengthens pelvic floor muscles, addressing issues like urinary incontinence, post-pregnancy changes, or age-related weakness. Benefits include:
            </p>
            <ul className="text-gray-600 text-base font-argentum mb-4 text-justify list-disc pl-6">
              <li className="mb-2"><strong>Non-Invasive Comfort:</strong> Fully clothed, comfortable sessions with no recovery time.</li>
              <li className="mb-2"><strong>Proven Results:</strong> Most patients see improvements in bladder control and pelvic strength after 4-6 sessions.</li>
              <li className="mb-2"><strong>Holistic Care:</strong> Delivered with empathy, honoring your body’s God-given design.</li>
              <li className="mb-2"><strong>Enhanced Wellness:</strong> Boosts confidence, intimacy, and overall quality of life.</li>
            </ul>
            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Who Can Benefit?</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Pelvitron is ideal for women and men experiencing pelvic floor challenges, including stress incontinence, pelvic pain, or weakened muscles due to childbirth, aging, or other factors. Our Blue Springs team tailors treatments to your needs, ensuring a safe, welcoming experience. At the <span className="pelvic-launch-highlight">July 7th Event</span>, explore how Pelvitron can empower you to live with vitality and peace.
            </p>
            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Our Commitment</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Garcia Family Medicine is more than a practice—it’s a ministry of wellness. We combine cutting-edge technology like Pelvitron with compassionate, faith-based care. Serving Blue Springs, Independence, Lee's Summit, and Kansas City, we’re dedicated to helping you reclaim your strength in a nurturing environment that reflects God’s grace.
            </p>
            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Join Us</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Ready to transform your pelvic health? Call <a href="tel:816-427-5320" className="text-[#275cab] font-semibold hover:underline">816-427-5320</a> to schedule your consultation or RSVP for our <span className="pelvic-launch-highlight">July 7th Pelvitron Launch Event</span>. Discover how Pelvitron can restore your confidence and well-being.
            </p>
            <a
              href="tel:816-427-5320"
              className="pelvic-cta-button inline-block"
            >
              Call Now: 816-427-5320
            </a>
          </div>
        </div>

        <div className="cta-section bg-white/60 backdrop-blur-lg p-6 rounded-lg shadow-md max-w-5xl w-full text-center mt-6">
          <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">
            Experience Pelvitron at Our July 7th Launch
          </h3>
          <p className="text-gray-600 text-base font-argentum leading-relaxed mb-4 indent-5">
            Don’t miss our <span className="pelvic-launch-highlight">July 7th Pelvitron Launch Event</span> in Blue Springs, MO. Learn about this life-changing treatment, meet our caring team, and take the first step toward pelvic wellness. Call <a href="tel:816-427-5320" className="text-[#275cab] font-semibold hover:underline">816-427-5320</a> to RSVP or book a consultation today.
          </p>
          <a
            href="tel:816-427-5320"
            className="pelvic-cta-button inline-block"
          >
            RSVP Now: 816-427-5320
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}