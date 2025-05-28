'use client';
import styles from './pillbutton.module.css';

export default function PillButton({
  children = 'Reclaim Your Confidence!',
  onClick,
  ariaExpanded,
  ariaControls,
  ...props
}) {
  return (
    <button
      type="button"
      className={styles.pillButton}
      onClick={onClick}
      aria-haspopup="dialog"
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      {...props}
    >
      {children}
    </button>
  );
}
