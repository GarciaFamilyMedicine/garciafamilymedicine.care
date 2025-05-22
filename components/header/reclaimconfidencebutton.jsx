'use client';
import styles from './reclaimconfidence.module.css';

export default function ReclaimConfidenceButton({ onClick, ...props }) {
  return (
    <button
      type="button"
      className={styles.pillButton}
      onClick={onClick}
      aria-haspopup="dialog"
      aria-expanded={!!props['aria-expanded']}
      {...props}
    >
      Reclaim Your Confidence!
    </button>
  );
}
