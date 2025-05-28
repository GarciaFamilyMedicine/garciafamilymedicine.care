'use client';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './reclaimconfidence.module.css';

export default function ReclaimConfidenceFlyout({ onClose }) {
  const closeButtonRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  const flyout = (
    <>
      <div
        id="confidence-flyout"
        role="dialog"
        aria-modal="true"
        aria-labelledby="flyout-heading"
        className={styles.flyoutPanel}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          className={styles.flyoutCloseButton}
          aria-label="Close dialog"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={styles.flyoutHeader}>
          <h2 id="flyout-heading" className={styles.flyoutHeading}>
            Reclaim Your Confidence
          </h2>
        </div>

        <div className={styles.flyoutContent}>
          <div className={styles.highlightText}>
            <p className={styles.flyoutText} style={{ marginBottom: 0 }}>
              <strong>Win a Pelvic Health Recovery Package</strong>
              <span className={styles.valueTag}>$3,000 Value</span>
            </p>
          </div>

          <p className={styles.flyoutText}>
            Suffering from incontinence or erectile dysfunction? Enter our giveaway for a chance
            to win 6 complete Emsella treatments to help restore your pelvic health and confidence.
          </p>

          <div className={styles.eventInfo}>
            <div className={styles.eventIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className={styles.eventDetails}>
              <div className={styles.eventTitle}>Pelvic Health Recovery Event</div>
              <div className={styles.eventDate}>July 7th, 11 AM–7 PM</div>
              <div className={styles.eventLocation}>Blue Springs, MO</div>
            </div>
          </div>

          <p className={styles.flyoutText}>
            <strong>Winner will be announced live at the event!</strong> You must register to be
            eligible for the giveaway.
          </p>

          <a
            href="https://forms.cloud.microsoft/r/PmYN6fxyAT"
            className={styles.ctaButton}
            target="_self"
            rel="noopener"
          >
            Register Now
          </a>

          <p className={styles.flyoutText}>
            Can't register online? Call us at{' '}
            <a href="tel:816-427-5320" className={styles.flyoutLink}>
              816‑427‑5320
            </a>
          </p>

          <div className={styles.hashtagList}>
            <span className={styles.tag} onClick={() => window.open('#PelvicHealth', '_blank')}>
              #PelvicHealth
            </span>
            <span className={styles.tag} onClick={() => window.open('#Emsella', '_blank')}>
              #Emsella
            </span>
            <span className={styles.tag} onClick={() => window.open('#GarciaFamilyMedicine', '_blank')}>
              #GarciaFamilyMedicine
            </span>
            <span className={styles.tag} onClick={() => window.open('#IncontinenceRelief', '_blank')}>
              #IncontinenceRelief
            </span>
            <span className={styles.tag} onClick={() => window.open('#EDHelp', '_blank')}>
              #EDHelp
            </span>
          </div>

          <p className={styles.bottomInfo}>
            Follow us on social media for more health tips &amp; updates:
            <br />
            <a
              href="https://instagram.com/garciafamilymedicine"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://facebook.com/garciafamilymedicine"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span>Facebook</span>
            </a>
          </p>
        </div>
      </div>
      <div
        className={styles.overlayBackdrop}
        onClick={onClose}
        role="presentation"
        aria-hidden="true"
      />
    </>
  );

  if (mounted) {
    return createPortal(flyout, document.body);
  }
  return null;
}
