'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => classNames.filter(Boolean).join(' ');

export default function FloatingDots() {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef(null);

  // Dynamic dot count based on screen size
  const dotCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 6 : 10;

  // Memoize dots configuration with pixel-based positions
  const dotsConfig = useMemo(() => {
    if (typeof window === 'undefined') return []; // Avoid server-side issues
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return Array.from({ length: dotCount }, (_, i) => {
      const angle = (i / dotCount) * Math.PI * 2;
      const radius = 0.1 + Math.random() * 0.15;
      const isMobile = window.innerWidth < 768;
      const centerX = 50;
      const centerY = 50;
      const left = (centerX + Math.cos(angle) * radius * (isMobile ? 15 : 20)) / 100 * vw;
      const top = (centerY + Math.sin(angle) * radius * (isMobile ? 15 : 20)) / 100 * vh;

      return {
        id: i,
        left: left, // Pixel-based
        top: top,   // Pixel-based
        scale: 0.4 + Math.random() * 0.3,
        opacity: 0.7 + Math.random() * 0.2,
        floatDelay: `${i * 0.1}s`,
        floatDuration: `${2.5 + Math.random() * 2.5}s`, // 2.5-5s
        swayDuration: `${4 + Math.random() * 4}s`,      // 4-8s
        pulseDelay: `${Math.random() * 1}s`,
        pulseDuration: `${0.8 + Math.random() * 0.8}s`, // 0.8-1.6s
        pulseIntensity: 0.7 + Math.random() * 0.2
      };
    });
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Smooth animation start
  useEffect(() => {
    if (!isClient || !containerRef.current) return;
    containerRef.current.style.opacity = '1';
  }, [isClient]);

  if (!isClient) {
    return <div className={combineStyles(styles.floatingElements, mobileStyles.floatingElements)} />;
  }

  return (
    <div
      ref={containerRef}
      className={combineStyles(styles.floatingElements, mobileStyles.floatingElements)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        opacity: 0,
        transition: 'opacity 0.5s ease-out',
        zIndex: 0
      }}
    >
      {dotsConfig.map((dot) => (
        <div
          key={dot.id}
          style={{
            position: 'absolute',
            left: `${dot.left}px`,
            top: `${dot.top}px`,
            width: '10px',
            height: '10px'
          }}
        >
          <div
            className={mobileStyles.floatingDot} // Use mobileStyles exclusively for dots
            style={{
              transform: `scale(${dot.scale})`,
              opacity: dot.opacity,
              '--float-delay': dot.floatDelay,
              '--float-duration': dot.floatDuration,
              '--sway-duration': dot.swayDuration,
              '--pulse-delay': dot.pulseDelay,
              '--pulse-duration': dot.pulseDuration,
              '--pulse-intensity': dot.pulseIntensity,
              willChange: 'transform, opacity'
            }}
          />
        </div>
      ))}
    </div>
  );
}