'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { nav_links, top_buttons } from './navdata';
import DropdownMenu from './dropdownmenu';
import ReclaimConfidenceFlyout from '../reclaimconfidence/reclaimconfidencebutton.jsx';

import styles from './header.module.css';

export default function Header() {
  /* ─── state ─── */
  const [isMenuOpen,   setIsMenuOpen]   = useState(false);
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const [activeDrop,   setActiveDrop]   = useState(null);
  const timerRef = useRef(null);

  /* ─── helpers ─── */
  const toggleMenu = () => setIsMenuOpen(p => !p);

  const onDropEnter = (label) => { clearTimeout(timerRef.current); setActiveDrop(label); };
  const onDropLeave = () => { timerRef.current = setTimeout(() => setActiveDrop(null), 300); };

  const handlePillHover = (open) => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      clearTimeout(timerRef.current);
      setIsFlyoutOpen(open);
    }
  };

  /* collapse menus on resize */
  useEffect(() => {
    const onResize = () => {
      setIsMenuOpen(false);
      if (window.innerWidth <= 768) setIsFlyoutOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ─── render ─── */
  return (
    <>
      <div className={styles.container}>
        {/* top bar */}
        <div className={styles.topbar}>
          <div className={styles.topbuttons}>
            {top_buttons.map(btn => (
              <button key={btn.label} className={styles.topbutton}>{btn.label}</button>
            ))}
          </div>
        </div>

        {/* navbar */}
        <nav className={styles.navbar} aria-label="main navigation">
          {/* logo */}
          <Link
            href="/"
            className={styles.logo}
            onClick={() => {
              setIsMenuOpen(false);
              setActiveDrop(null);
              setIsFlyoutOpen(false);
            }}
          >
            <Image src="/images/logo.png" alt="garcia family medicine logo" width={85} height={85} priority />
          </Link>

          {/* burger */}
          <button
            className={styles.mobilenavtoggle}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'close menu' : 'open menu'}
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>

          {/* links */}
          <ul className={`${styles.navlinks} ${isMenuOpen ? styles.active : ''}`}>
            {nav_links.map(link =>
              link.dropdown ? (
                <li key={link.label}>
                  <DropdownMenu
                    link={link}
                    isActive={activeDrop === link.label}
                    onEnter={onDropEnter}
                    onLeave={onDropLeave}
                    setIsMenuOpen={setIsMenuOpen}
                    timerRef={timerRef}
                  />
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={styles.navlink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}

            {/* orange pill – identical wrapper to original */}
            <li className={styles.navextra}>
              <div className={styles.pillContainer}>
                <button
                  className={styles.pillButton}
                  onClick={() => setIsFlyoutOpen(!isFlyoutOpen)}
                  onMouseEnter={() => handlePillHover(true)}
                  onMouseLeave={() => handlePillHover(false)}
                  aria-haspopup="dialog"
                  aria-expanded={isFlyoutOpen}
                  aria-controls="confidence-flyout"
                >
                  Reclaim Your Confidence!
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* fly‑out */}
      {isFlyoutOpen && (
        <div
          className={styles.flyoutWrapper}
          onMouseEnter={() => handlePillHover(true)}
          onMouseLeave={() => {
            handlePillHover(false);
            setTimeout(() => setIsFlyoutOpen(false), 200);
          }}
        >
          <ReclaimConfidenceFlyout onClose={() => setIsFlyoutOpen(false)} />
        </div>
      )}

      {/* spacer */}
      <div className={styles.offset} aria-hidden="true" />
    </>
  );
}
