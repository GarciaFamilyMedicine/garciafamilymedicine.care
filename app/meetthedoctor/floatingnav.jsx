// app/meetthedoctor/floatingnav.jsx
import Link from 'next/link';
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';
import { smoothScrollTo } from '../utils/smoothscroll';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

export default function FloatingNav({ visible }) {
  const sections = [
    { id: 'story', label: 'Story' },
    { id: 'journey', label: 'Journey' },
    { id: 'mission', label: 'Mission' },
    { id: 'connect', label: 'Connect' }
  ];

  return (
    <nav className={combineStyles(
      styles.floatingNav,
      mobileStyles.floatingNav,
      visible ? styles.navVisible : styles.navHidden,
      visible ? mobileStyles.navVisible : mobileStyles.navHidden
    )}>
      <div className={combineStyles(
        styles.navContent,
        mobileStyles.navContent
      )}>
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={combineStyles(
              styles.navLink,
              mobileStyles.navLink
            )}
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo(`#${section.id}`);
            }}
          >
            {section.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}