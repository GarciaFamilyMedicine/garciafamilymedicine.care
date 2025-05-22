'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { nav_links, top_buttons } from './navdata';
import DropdownMenu from './dropdownmenu';
import ReclaimConfidenceFlyout from './reclaimconfidenceflyout';
import styles from './header.module.css';

// The pill button, extracted for reusability (can be in its own file if needed)
function ReclaimConfidenceButton({ onClick, ariaExpanded }) {
  return (
    <button
      className={styles.pillButton}
      onClick={onClick}
      aria-haspopup="dialog"
      aria-expanded={ariaExpanded}
      aria-controls="confidence-flyout"
      type="button"
    >
      Reclaim Your Confidence!
    </button>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState(null);
  const timerRef = useRef(null);
  const hoverTimeout = useRef();
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

  // Flyout hover/focus logic (desktop only)
  const handlePillHover = (open) => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      clearTimeout(hoverTimeout.current);
      if (open) {
        setIsFlyoutOpen(true);
      } else {
        hoverTimeout.current = setTimeout(() => setIsFlyoutOpen(false), 180);
      }
    }
  };

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
              <ReclaimConfidenceButton
                onClick={handleMobilePillClick}
                ariaExpanded={isFlyoutOpen}
              />
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

            {/* orange pill (desktop) */}
            {!isMobile && (
              <li className={styles.navextra}>
                <div
                  className={styles.pillFlyoutWrapper}
                  onMouseEnter={() => handlePillHover(true)}
                  onMouseLeave={() => handlePillHover(false)}
                >
                  <ReclaimConfidenceButton
                    onClick={() => setIsFlyoutOpen(!isFlyoutOpen)}
                    ariaExpanded={isFlyoutOpen}
                  />
                  {isFlyoutOpen && (
                    <div className={styles.flyoutWrapper}>
                      <ReclaimConfidenceFlyout onClose={() => setIsFlyoutOpen(false)} />
                    </div>
                  )}
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* Fly-out (mobile) */}
      {isFlyoutOpen && isMobile && (
        <div className={styles.flyoutWrapperMobile}>
          <ReclaimConfidenceFlyout onClose={() => setIsFlyoutOpen(false)} />
        </div>
      )}

      <div className={styles.offset} aria-hidden="true" />
    </>
  );
}
