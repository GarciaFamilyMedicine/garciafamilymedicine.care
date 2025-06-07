'use client';
import styles from './pillbutton.module.css';

export default function PillButton({
  children = 'Reclaim Your Confidence!',
  onClick,
  ariaExpanded,
  ariaControls,
  ...props
}) {
  const handleClick = (e) => {
    console.log('PillButton clicked!', { onClick, ariaExpanded });
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type="button"
      className={styles.pillButton}
      onClick={handleClick}
      aria-haspopup="dialog"
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      {...props}
    >
      {children}
    </button>
  );
}