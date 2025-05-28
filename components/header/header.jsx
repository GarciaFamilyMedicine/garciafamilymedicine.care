'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { nav_links, top_buttons } from './navdata';
import DropdownMenu from './dropdownmenu';
import ReclaimConfidenceFlyout from './reclaimconfidenceflyout';
import PillButton from './pillbutton';
import styles from './header.module.css';
import pillStyles from './pillbutton.module.css'; // <-- Use pill styles for alignment

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState(null);
  const timerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Collapse menus on resize
  useEffect(() => {
    const onResize = () => {
      setIsMenuOpen(false);
      if (window.innerWidth <= 768) setIsFlyoutOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Hamburger menu keyboard/escape support
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setActiveDrop(null);
        setIsFlyoutOpen(false);
      }
    }
    if (isMenuOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((p) => !p);

  // Dropdown menu hover logic (desktop only)
  const onDropEnter = (label) => { clearTimeout(timerRef.current); setActiveDrop(label); };
  const onDropLeave = () => { timerRef.current = setTimeout(() => setActiveDrop(null), 300); };

  // Hamburger pill (mobile) click
  const handleMobilePillClick = () => setIsFlyoutOpen((v) => !v);

  return (
    <>
      <div className={styles.container}>
        {/* top bar */}
        <div className={styles.topbar}>
          <div className={styles.topbuttons}>
            {top_buttons.map((btn) => (
              <button key={btn.label} className={styles.topbutton}>
                {btn.label}
              </button>
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

          {/* pill (mobile) - centered */}
          {isMobile && (
            <div className={styles.mobilePillWrapper}>
              <PillButton
                onClick={handleMobilePillClick}
                ariaExpanded={isFlyoutOpen}
                ariaControls="confidence-flyout"
              >
                Reclaim Your Confidence!
              </PillButton>
            </div>
          )}

          {/* hamburger */}
          <button
            className={styles.mobilenavtoggle}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'close menu' : 'open menu'}
            onClick={toggleMenu}
            type="button"
          >
            {isMenuOpen ? (
              <>
                <span style={{ display: 'none' }}>Close menu</span>
                ✖
              </>
            ) : (
              <>
                <span style={{ display: 'none' }}>Open menu</span>
                ☰
              </>
            )}
          </button>

          {/* links */}
          <ul className={`${styles.navlinks} ${isMenuOpen ? styles.active : ''}`}>
            {nav_links.map((link) =>
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

            {/* orange pill (desktop, always right aligned) */}
            {!isMobile && (
              <li className={pillStyles.navextra}>
                <div className={pillStyles.pillFlyoutWrapper}>
                  <PillButton
                    onClick={() => setIsFlyoutOpen((v) => !v)}
                    ariaExpanded={isFlyoutOpen}
                    ariaControls="confidence-flyout"
                  >
                    Reclaim Your Confidence!
                  </PillButton>
                  {isFlyoutOpen && (
                    <ReclaimConfidenceFlyout onClose={() => setIsFlyoutOpen(false)} />
                  )}
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* SINGLE FLYOUT: Mobile only, no wrapper */}
      {isFlyoutOpen && isMobile && (
        <ReclaimConfidenceFlyout onClose={() => setIsFlyoutOpen(false)} />
      )}

      <div className={styles.offset} aria-hidden="true" />
    </>
  );
}
