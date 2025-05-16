'use client';

import { useState, useEffect } from 'react';
import styles from './reclaimconfidence.module.css';

export default function ReclaimConfidenceButton() {
  const [open, setOpen] = useState(false);

  /* close fly‑out on Esc key */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      {/* pill button */}
      <button
        type="button"
        className={styles.wrapper}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="confidence-flyout"
      >
        <span className={styles.innerpill}>reclaim&nbsp;your&nbsp;confidence!</span>
      </button>

      {/* fly‑out panel */}
      {open && (
        <>
          <div id="confidence-flyout" role="dialog" aria-modal="true" className={styles.flyout}>
            <button className={styles.closebtn} aria-label="close" onClick={() => setOpen(false)}>✖</button>

            <h2>🩵 reclaim your confidence! 🩵</h2>
            <p>
              Suffering from incontinence or ED? You could <strong>win a pelvic&nbsp;health
              recovery package—6&nbsp;Emsella treatments</strong> (💰 $2,000 value)!
            </p>
            <p>
              💥 <strong>Winner announced live July 7th</strong> at our Pelvic Health Recovery Event
              in Blue Springs, MO 11 AM–7 PM
            </p>
            <p>
              🎯 <strong>Must register + RSVP online</strong> or call&nbsp;
              <a href="tel:816-427-5320">816‑427‑5320</a> for your chance to win!
            </p>
            <p>👉 Feel the change. Restore your core.</p>
            <p>
              Visit:&nbsp;
              <a href="https://garciafamilymedicine.care" target="_blank" rel="noopener noreferrer">
                garciafamilymedicine.care
              </a>
            </p>
            <p className={styles.hashes}>
              #pelvichealthrecovery #emsella #garciafamilymedicine #incontinencerelief
              #edhelp #confidencerestored #giveaway
            </p>
          </div>

          {/* backdrop */}
          <div className={styles.backdrop} onClick={() => setOpen(false)} />
        </>
      )}
    </>
  );
}
