'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { nav_links, top_buttons } from './navdata';
import DropdownMenu from './dropdownmenu';
import ReclaimConfidenceFlyout from './reclaimconfidenceflyout';
import PillButton from './pillbutton';
import styles from './header.module.css';
import mobileStyles from './mobile.module.css';
import pillStyles from './pillbutton.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState(null);
  const timerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check - FIXED VERSION
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768;
      const wasMobile = isMobile;
      setIsMobile(mobile);
      
      // Only close flyout when actually switching FROM mobile TO desktop
      if (wasMobile && !mobile) {
        setIsFlyoutOpen(false);
      }
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Collapse menus on resize
  useEffect(() => {
    const onResize = () => {
      setIsMenuOpen(false);
      setActiveDrop(null);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Keyboard support
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setActiveDrop(null);
        setIsFlyoutOpen(false);
      }
    }
    
    if (isMenuOpen || isFlyoutOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isMenuOpen, isFlyoutOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, isMenuOpen]);

  // Mobile menu items with icons and structure
  const mobileMenuItems = [
    {
      label: 'Meet the Doctor',
      href: '/meetthedoctor',
      icon: '👩‍⚕️',
      subtitle: 'About Dr. Tess'
    },
    {
      label: 'News & Events',
      icon: '📰',
      hasDropdown: true,
      items: [
        { label: 'Latest News', href: '/news' },
        { label: 'Upcoming Events', href: '/events' },
        { label: 'Past Highlights', href: '/events/past' }
      ]
    },
    {
      label: 'Specialized Care',
      icon: '🏥',
      hasDropdown: true,
      items: [
        { label: 'Pelvic Health', href: '/services/pelvichealth' },
        { label: 'DOT Certifications', href: '/services/dot-certifications' },
        { label: 'Mental Health', href: '/services/mental-health' },
        { label: 'Pain Management', href: '/services/pain-management' },
        { label: 'Weight Management', href: '/services/weight-management' },
        { label: 'Telehealth', href: '/services/telehealth' },
        { label: 'Veteran Services', href: '/services/veteran-services' },
        { label: 'Medicare Services', href: '/services/medicare' }
      ]
    },
    {
      label: 'Core Medical',
      icon: '💪',
      hasDropdown: true,
      items: [
        { label: 'CoreLift™ Program', href: '/services/pelvichealth/corelift' }
      ]
    },
    {
      label: 'Partners',
      icon: '🤝',
      hasDropdown: true,
      items: [
        { label: 'gigiSafeHOUSE', href: '/#gigisafehouse' },
        { label: 'Partner Inquiry', href: '/contact' }
      ]
    },
    {
      label: 'FAQs',
      href: '/#faqs',
      icon: '❓',
      subtitle: 'Common Questions'
    },
    {
      label: 'Contact Us',
      href: '/contact',
      icon: '📞',
      subtitle: 'Get in Touch'
    },
    {
      label: 'Call Now',
      href: 'tel:816-427-5320',
      icon: '☎️',
      subtitle: '816-427-5320'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setActiveDrop(null); // Close any open dropdowns
  };

  const handleMobileMenuItemClick = (item) => {
    if (!item.hasDropdown) {
      setIsMenuOpen(false);
    }
  };

  // Dropdown menu hover logic (desktop only)
  const onDropEnter = (label) => {
    if (!isMobile) {
      clearTimeout(timerRef.current);
      setActiveDrop(label);
    }
  };
  
  const onDropLeave = () => {
    if (!isMobile) {
      timerRef.current = setTimeout(() => setActiveDrop(null), 300);
    }
  };

  // Mobile pill click
  const handleMobilePillClick = () => {
    setIsFlyoutOpen((prev) => !prev);
    setIsMenuOpen(false); // Close hamburger menu
  };

  // Close all menus when logo is clicked
  const handleLogoClick = () => {
    setIsMenuOpen(false);
    setActiveDrop(null);
    setIsFlyoutOpen(false);
  };

  // Desktop pill button click handler
  const handleDesktopPillClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlyoutOpen((prev) => !prev);
    
    // Close other menus to avoid conflicts
    setIsMenuOpen(false);
    setActiveDrop(null);
  };

  // Debug: Log ALL state changes with stack trace
  useEffect(() => {
    console.log('=== FLYOUT STATE CHANGE ===');
    console.log('isFlyoutOpen:', isFlyoutOpen);
    console.log('isMobile:', isMobile);
    console.log('Stack trace:', new Error().stack);
    console.log('============================');
  }, [isFlyoutOpen]);

  return (
    <>
      <div className={styles.container}>
        {/* Top bar */}
        <div className={styles.topbar}>
          <div className={styles.topbuttons}>
            {top_buttons.map((btn) => (
              <button key={btn.label} className={styles.topbutton}>
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Navbar */}
        <nav className={styles.navbar} aria-label="main navigation">
          {/* Logo */}
          <Link
            href="/"
            className={styles.logo}
            onClick={handleLogoClick}
          >
            <Image
              src="/images/logo.png"
              alt="Garcia Family Medicine logo"
              width={85}
              height={85}
              priority
            />
          </Link>

          {/* Mobile pill button - centered in navbar */}
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

          {/* Hamburger menu button */}
          <button
            className={`${styles.mobilenavtoggle} ${isMenuOpen ? styles.menuOpen : ''}`}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleMenu}
            type="button"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>

          {/* Navigation links */}
          <ul className={`${styles.navlinks} ${isMenuOpen ? styles.active : ''}`}>
            {nav_links.map((link, index) =>
              link.dropdown ? (
                <li key={link.label || `dropdown-${index}`}>
                  <DropdownMenu
                    link={link}
                    isActive={activeDrop === link.label}
                    onEnter={onDropEnter}
                    onLeave={onDropLeave}
                    setIsMenuOpen={setIsMenuOpen}
                    setActiveDrop={setActiveDrop}
                    timerRef={timerRef}
                    isMobile={isMobile}
                  />
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={styles.navlink}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveDrop(null);
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}

            {/* Desktop pill button - always right aligned */}
            {!isMobile && (
              <li className={pillStyles.navextra}>
                <div className={pillStyles.pillFlyoutWrapper}>
                  <PillButton
                    onClick={handleDesktopPillClick}
                    ariaExpanded={isFlyoutOpen}
                    ariaControls="confidence-flyout"
                  >
                    Reclaim Your Confidence!
                  </PillButton>
                </div>
              </li>
            )}
          </ul>
        </nav>

        {/* Desktop flyout - working properly now */}
        {!isMobile && isFlyoutOpen && (
          <ReclaimConfidenceFlyout onClose={() => setIsFlyoutOpen(false)} />
        )}

        {/* Mobile menu overlay */}
        {isMobile && isMenuOpen && (
          <div 
            className={styles.mobileMenuOverlay}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Grid Menu */}
        {isMobile && (
          <div className={`${styles.mobileGridMenu} ${isMenuOpen ? styles.active : ''}`}>
            <button
              className={styles.mobileMenuClose}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            
            <div className={styles.mobileMenuHeader}>
              <h2 className={styles.mobileMenuTitle}>Garcia Family Medicine</h2>
              <p className={styles.mobileMenuSubtitle}>Compassionate Healthcare with Love</p>
            </div>

            <div className={styles.mobileMenuGrid}>
              {mobileMenuItems.map((item, index) => {
                if (item.hasDropdown) {
                  return (
                    <div key={index}>
                      <button
                        className={`${styles.mobileMenuItem} ${styles.hasDropdown}`}
                        onClick={() => handleMobileMenuItemClick(item)}
                      >
                        <span className={styles.mobileMenuIcon}>{item.icon}</span>
                        <span className={styles.mobileMenuLabel}>{item.label}</span>
                      </button>
                      {/* TODO: Add submenu handling for mobile dropdowns */}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={styles.mobileMenuItem}
                    onClick={() => handleMobileMenuItemClick(item)}
                  >
                    <span className={styles.mobileMenuIcon}>{item.icon}</span>
                    <span className={styles.mobileMenuLabel}>{item.label}</span>
                    {item.subtitle && (
                      <span className={styles.mobileMenuSubLabel}>{item.subtitle}</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Mobile flyout - separate from desktop */}
      {isFlyoutOpen && isMobile && (
        <ReclaimConfidenceFlyout onClose={() => setIsFlyoutOpen(false)} />
      )}

      {/* Spacer for fixed header */}
      <div className={styles.offset} aria-hidden="true" />
    </>
  );
}