// app/page.jsx
'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === 'popup') {
        setIsPopupOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Header />
      <main className="flex flex-col items-center py-12 sm:py-20 px-4 flex-grow">
        <div className="main-welcome-card bg-white/60 backdrop-blur-lg p-8 rounded-lg shadow-md max-w-5xl w-full text-center">
          <h1 className="main-welcome-h1 text-[#1d539f] text-3xl sm:text-4xl font-bold mb-4 font-sumana">
            Welcome to Garcia Family Medicine
          </h1>
          <h2 className="main-welcome-h2 text-[#1d539f] text-xl sm:text-2xl font-semibold mb-4 font-sumana">
            Compassionate Healthcare Overflowing with Love in Blue Springs, MO!
          </h2>
          <p className="main-welcome-p text-gray-600 text-lg text-justify font-argentum leading-relaxed mb-4 indent-5">
            Step into a healthcare experience rooted in trust, integrity, and the boundless love of God! At{' '}
            <strong>Garcia Family Medicine</strong>, we&apos;re passionately committed to making healthcare in Blue Springs, MO,{' '}
            <strong>simple, affordable, and deeply personal—</strong>because you&apos;re more than a patient, you&apos;re family. We&apos;ve
            stepped away from the traditional insurance system to deliver <strong>high-quality primary care</strong> and mental
            health support that&apos;s cost-effective, compassionate, and free of long waits or hidden fees. Serving Blue Springs,
            Independence, Lee&apos;s Summit, and the greater Kansas City metro area, we&apos;re here to wrap you in care that reflects
            God&apos;s grace and goodness.
          </p>
          <button
            id="readMoreButton"
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
            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">
              Garcia Family Medicine: Where Love Meets Exceptional Care!
            </h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              At <strong>Garcia Family Medicine</strong>, we&apos;re different—and that difference shines with purpose. Guided by
              faith and a heart for healing, we prioritize your mental and physical well-being above all else. By leaving behind
              the complexities of insurance, we offer:
            </p>
            <ul className="text-gray-600 text-base font-argentum mb-4 text-justify list-disc pl-6">
              <li className="mb-2">
                <strong>Loving Care:</strong> From preventive checkups to managing chronic conditions like diabetes or
                hypertension, plus mental health support filled with empathy.
              </li>
              <li className="mb-2">
                <strong>Heavenly Convenience:</strong> Quick, easy appointments that honor your time and needs.
              </li>
              <li className="mb-2">
                <strong>Affordable Blessings:</strong> Transparent pricing that brings peace to your wallet and soul.
              </li>
            </ul>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Located in Blue Springs, MO, we extend our warm, trustworthy embrace to Independence, Lee&apos;s Summit, and the entire
              Kansas City metro area. With integrity at our core, we&apos;re here to provide family medicine that feels like a hug
              from above—because your health is a sacred gift, and we cherish it!
            </p>
            <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">Trust in Us – Call Today!</h3>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Ready to experience healthcare infused with compassion and the love of God? At Garcia Family Medicine, we&apos;re more
              than a practice—we&apos;re a ministry of wellness, serving Blue Springs, MO, and beyond with unwavering dedication.
              Whether you need a routine visit, ongoing care, or a kind ear for your mental health journey, our team is here to
              lift you up with trust and tenderness.
            </p>
            <p className="text-gray-600 text-base text-justify font-argentum leading-relaxed mb-4 indent-5">
              Pick up the phone and call <a href="tel:816-427-5320" className="text-[#275cab] font-semibold hover:underline">
                816-427-5320
              </a> now—let us welcome you into our family! Join the countless patients in Blue Springs, Independence, Lee&apos;s
              Summit, and the Kansas City metro area who&apos;ve found healing and hope with us. Dial{' '}
              <a href="tel:816-427-5320" className="text-[#275cab] font-semibold hover:underline">816-427-5320</a> today and
              discover the joy of <strong>compassionate, faith-filled healthcare</strong> that&apos;s as reliable as it is
              remarkable. Your well-being is our calling—let&apos;s start this journey together!
            </p>
            <a
              href="tel:816-427-5320"
              className="inline-block px-5 py-2 bg-gradient-to-r from-[#275cab] to-[#1d539f] text-white rounded-md font-argentum font-semibold hover:from-[#1d539f] hover:to-[#275cab]"
            >
              Call Now: 816-427-5320
            </a>
          </div>
        </div>

        <div className="comments-section bg-white/60 backdrop-blur-lg p-6 rounded-lg shadow-md max-w-5xl w-full text-center mt-6">
          <h3 className="text-[#1d539f] text-xl font-bold mb-4 font-sumana">
            Got burning questions too tricky, awkward, or unknown to voice?
          </h3>
          <p className="text-gray-600 text-base font-argentum leading-relaxed mb-4 indent-5">
            Dr. Tess is here for you! Submit your questions through our secure form for a judgment-free response, or call{' '}
            <a href="tel:816-427-5320" className="text-[#275cab] font-semibold hover:underline">816-427-5320</a> for a personal
            chat. Click below to break the silence on any topic!
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="inline-block px-5 py-2 bg-gradient-to-r from-[#275cab] to-[#1d539f] text-white rounded-md font-argentum font-semibold hover:from-[#1d539f] hover:to-[#275cab]"
          >
            Ask Dr. Tess
          </button>
        </div>

        <div
          id="popup"
          className={`fixed inset-0 bg-black/70 flex justify-center items-center z-[2147483647] transition-opacity duration-300 ${isPopupOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="popup-content bg-white/90 backdrop-blur-lg p-4 rounded-lg shadow-lg w-[90%] max-w-3xl max-h-[90vh] overflow-hidden">
            <span
              className="close absolute top-2 right-4 text-[#1d539f] text-2xl font-argentum font-semibold cursor-pointer hover:text-[#275cab]"
              onClick={() => setIsPopupOpen(false)}
            >
              ×
            </span>
            <iframe
              id="drTessForm"
              src="https://forms.office.com/r/R5vkttmxpe"
              className="w-full h-[500px] sm:h-[600px] border-0 rounded-md"
              title="Ask Dr. Tess Form"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}