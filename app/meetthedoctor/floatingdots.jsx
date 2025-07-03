// app/meetthedoctor/floatingdots.jsx
'use client';

import { useEffect, useState } from 'react';
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

export default function FloatingDots() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Generate dots only on client side
    setDots(Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${20 + Math.random() * 60}%`,
      top: `${20 + Math.random() * 60}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 4}s`
    })));
  }, []);

  return (
    <div className={combineStyles(
      styles.floatingElements,
      mobileStyles.floatingElements
    )}>
      {dots.map((dot) => (
        <div
          key={dot.id}
          className={combineStyles(
            styles.floatingDot,
            mobileStyles.floatingDot
          )}
          style={{
            left: dot.left,
            top: dot.top,
            animationDelay: dot.delay,
            animationDuration: dot.duration
          }}
        />
      ))}
    </div>
  );
}