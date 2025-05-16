'use client';
import { useEffect, useRef } from 'react';
import styles from './reclaimconfidence.module.css';

export default function ReclaimConfidenceFlyout({ onClose }) {
  const closeButtonRef = useRef(null);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Focus management
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  return (
    <>
      <div 
        id="confidence-flyout"
        role="dialog"
        aria-modal="true"
        aria-labelledby="flyout-heading"
        className={styles.flyoutPanel}
      >
        <button
          ref={closeButtonRef}
          className={styles.flyoutCloseButton}
          aria-label="Close dialog"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 id="flyout-heading" className={styles.flyoutHeading}>
          🩵 Reclaim Your Confidence! 🩵
        </h2>
        
        <div className={styles.flyoutContent}>
          <p className={styles.flyoutText}>
            Suffering from incontinence or ED? You could <strong>win a pelvic health recovery 
            package—6 Emsella treatments</strong> (💰 $2,000 value)!
          </p>
          
          <p className={styles.flyoutText}>
            💥 <strong>Winner announced live July 7th</strong> at our Pelvic Health Recovery Event
            in Blue Springs, MO 11 AM–7 PM
          </p>

          <p className={styles.flyoutText}>
            🎯 <strong>Must register + RSVP online</strong> or call{' '}
            <a href="tel:816-427-5320" className={styles.flyoutLink}>
              816-427-5320
            </a> for your chance to win!
          </p>

          <p className={styles.flyoutText}>👉 Feel the change. Restore your core.</p>

          <p className={styles.flyoutText}>
            Visit:{' '}
            <a 
              href="https://garciafamilymedicine.care" 
              className={styles.flyoutLink}
              target="_blank" 
              rel="noopener noreferrer"
            >
              garciafamilymedicine.care
            </a>
          </p>

          <p className={styles.hashtagList}>
            #PelvicHealthRecovery #Emsella #GarciaFamilyMedicine<br />
            #IncontinenceRelief #EDHelp #ConfidenceRestored #Giveaway
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
}