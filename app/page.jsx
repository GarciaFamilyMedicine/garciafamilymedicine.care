'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmailSubscription from '@/components/emailsubscription';
import styles from './landing.module.css';

export default function LandingPage() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className={styles.landingWrapper}>
      {/* Simple Header */}
      <header className={styles.landingHeader}>
        <Image 
          src="/images/logo.png" 
          alt="Garcia Family Medicine Logo" 
          width={150} 
          height={60}
          className={styles.logo}
        />
      </header>

      <main className={styles.landingMain}>
        <div className={styles.landingContainer}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <h1 className={styles.heroTitle}>Welcome to Garcia Family Medicine</h1>
            <p className={styles.heroSubtitle}>
              Compassionate Healthcare Overflowing with Love in Blue Springs, MO!
            </p>
            
            <div className={styles.ctaButtons}>
              <a href="tel:816-427-5320" className={styles.primaryButton}>
                📞 Call Now: 816-427-5320
              </a>
              <Link href="/home" className={styles.secondaryButton}>
                🏠 Enter Main Site
              </Link>
            </div>
          </section>

          {/* Welcome Section */}
          <section className={styles.contentSection}>
            <div className={styles.sectionContent}>
              <p className={styles.leadText}>
                Step into a healthcare experience rooted in trust, integrity, and the boundless love of God! 
                At Garcia Family Medicine, we're passionately committed to making healthcare in Blue Springs, MO, 
                simple, affordable, and deeply personal—because you're more than a patient, you're family.
              </p>
              <p>
                We've stepped away from the traditional insurance system to deliver high‑quality primary care 
                and mental‑health support that's cost‑effective, compassionate, and free of long waits or hidden fees. 
                Serving Blue Springs, Independence, Lee's Summit, and the greater Kansas City metro area, 
                we're here to wrap you in care that reflects God's grace and goodness.
              </p>
              
              <button 
                className={styles.readMoreButton}
                onClick={() => toggleSection('more')}
                aria-expanded={expandedSection === 'more'}
              >
                {expandedSection === 'more' ? 'Read Less' : 'Read More'}
              </button>
            </div>

            {/* Expandable Content */}
            <div className={`${styles.expandableContent} ${expandedSection === 'more' ? styles.expanded : ''}`}>
              <h2 className={styles.sectionTitle}>
                Garcia Family Medicine: Where Love Meets Exceptional Care!
              </h2>
              <p>
                At Garcia Family Medicine, we're different—and that difference shines with purpose. 
                Guided by faith and a heart for healing, we prioritize your mental and physical well‑being above all else. 
                By leaving behind the complexities of insurance, we offer:
              </p>
              <ul className={styles.benefitsList}>
                <li>
                  <strong>Loving Care:</strong> From preventive checkups to managing chronic conditions like diabetes 
                  or hypertension, plus mental health support filled with empathy.
                </li>
                <li>
                  <strong>Heavenly Convenience:</strong> Quick, easy appointments that honor your time and needs.
                </li>
                <li>
                  <strong>Affordable Blessings:</strong> Transparent pricing that brings peace to your wallet and soul.
                </li>
              </ul>
              <p>
                Located in Blue Springs, MO, we extend our warm, trustworthy embrace to Independence, Lee's Summit, 
                and the entire Kansas City metro area. With integrity at our core, we're here to provide family medicine 
                that feels like a hug from above—because your health is a sacred gift, and we cherish it!
              </p>

              <h2 className={styles.sectionTitle}>Trust in Us – Call Today!</h2>
              <p>
                Ready to experience healthcare infused with compassion and the love of God? 
                At Garcia Family Medicine, we're more than a practice—we're a ministry of wellness, 
                serving Blue Springs, MO, and beyond with unwavering dedication.
              </p>
              <p>
                Whether you need a routine visit, ongoing care, or a kind ear for your mental health journey, 
                our team is here to lift you up with trust and tenderness.
              </p>
              <p className={styles.callToAction}>
                Pick up the phone and call <a href="tel:816-427-5320">816‑427‑5320</a> now—let us welcome you into our family! 
                Join the countless patients in Blue Springs, Independence, Lee's Summit, and the Kansas City metro area 
                who've found healing and hope with us.
              </p>
              <p className={styles.callToAction}>
                Dial <a href="tel:816-427-5320">816‑427‑5320</a> today and discover the joy of compassionate, 
                faith‑filled healthcare that's as reliable as it is remarkable. 
                Your well‑being is our calling—let's start this journey together!
              </p>

              <div className={styles.ctaButtonsExpanded}>
                <a href="tel:816-427-5320" className={styles.callButton}>
                  Call Now: 816‑427‑5320
                </a>
              </div>
            </div>
          </section>

          {/* Ask Dr. Tess Section */}
          <section className={styles.askDrTessSection}>
            <h2 className={styles.askDrTessTitle}>
              Got burning questions too tricky, awkward, or unknown to voice?
            </h2>
            <p className={styles.askDrTessSubtitle}>
              Dr. Tess is here for you! Submit your questions through our secure form for a judgment‑free response, 
              or call <a href="tel:816-427-5320">816‑427‑5320</a> for a personal chat.
            </p>
            <button 
              className={styles.askDrTessButton}
              onClick={() => setIsPopupOpen(true)}
            >
              Ask Dr. Tess
            </button>
          </section>

          {/* Newsletter Section */}
          <section className={styles.newsletterLandingSection}>
            <h2>Stay Connected with Our Family</h2>
            <p>Get health tips and updates delivered with love</p>
            <EmailSubscription 
              source="landing_page"
              showLabels={false}
              customStyles={{
                container: styles.newsletterContainer,
                form: styles.newsletterForm,
                input: styles.newsletterInput,
                button: styles.newsletterButton
              }}
            />
          </section>

          {/* Final CTA */}
          <section className={styles.finalCta}>
            <h2>Ready to Experience Compassionate Care?</h2>
            <div className={styles.finalCtaButtons}>
              <a href="tel:816-427-5320" className={styles.callButton}>
                📞 Call: 816-427-5320
              </a>
              <a href="sms:8167082719" className={styles.textButton}>
                💬 Text: 816-708-2719
              </a>
              <Link href="/home" className={styles.enterSiteButton}>
                🏠 Enter Main Site
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Popup */}
      {isPopupOpen && (
        <div
          className={styles.popup}
          onClick={(e) => e.target.className === styles.popup && setIsPopupOpen(false)}
        >
          <div className={styles.popupContent}>
            <button
              className={styles.closeButton}
              onClick={() => setIsPopupOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              title="Ask Dr. Tess Form"
              src="https://forms.office.com/r/R5vkttmxpe"
              className={styles.iframe}
            />
          </div>
        </div>
      )}

      {/* Simple Footer */}
      <footer className={styles.landingFooter}>
        <p>© {new Date().getFullYear()} Garcia Family Medicine. All Rights Reserved.</p>
        <p>
          <Link href="/privacy-policy">Privacy Policy</Link> | 
          <Link href="/terms-of-service"> Terms of Service</Link>
        </p>
      </footer>
    </div>
  );
}