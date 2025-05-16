'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReclaimConfidenceButton from '../reclaimconfidence/reclaimconfidencebutton.jsx';
import styles from './header.module.css';

export default function Header() {
  /* ------------- state ------------- */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState(null);
  const [arrowLeft,  setArrowLeft]  = useState(220);
  const timer = useRef(null);

  /* ------------- helpers ------------- */
  const toggleMenu = () => setIsMenuOpen(p => !p);

  const caretLeft = (rect) => {
    const logo = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--logo-size')
    ) || 85;
    return rect.left + rect.width / 2 - logo;      // px from dropdown left
  };

  /* ------------- nav data ------------- */
  const navLinks = [
    { href: '/#meet',        label: 'meet the doctor' },
    { href: '/#memberships', label: 'memberships'     },
    {
      label: 'services',
      dropdown: [
        {
          title: 'core medical services',
          items: [
            { label: 'chronic disease management', href: '/#chronic-disease' },
            { label: 'preventive care',            href: '/#preventive-care'  },
          ],
        },
        {
          title: 'specialized care',
          items: [
            { label: 'pelvic health',     href: '/pelvichealth'       },
            { label: 'weight management', href: '/#weight-management' },
          ],
        },
      ],
    },
    {
      label: 'affiliates',
      dropdown: [
        {
          title: 'our partners',
          items: [{ label: "gigi's safehouse", href: '/#gigi-safehouse' }],
        },
      ],
    },
    { href: '/#faqs',    label: 'faqs' },
    { href: '/#contact', label: 'contact' },
  ];

  const topButtons = [
    { label: 'emergency line' },
    { label: 'patient portal' },
    { label: 'en' },
  ];

  /* ------------- dropdown handlers ------------- */
  const open = (lbl, tgt) => {
    clearTimeout(timer.current);
    setArrowLeft(caretLeft(tgt.getBoundingClientRect()));
    setActiveDrop(lbl);
  };
  const close = () => { timer.current = setTimeout(() => setActiveDrop(null), 300); };

  /* close mobile nav on resize */
  useEffect(() => {
    const onResize = () => setIsMenuOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ------------- render ------------- */
  return (
    <>
      <div className={styles.container}>
        {/* top bar */}
        <div className={styles.topbar}>
          <div className={styles.topbuttons}>
            {topButtons.map(btn => (
              <button key={btn.label} className={styles.topbutton}>{btn.label}</button>
            ))}
          </div>
        </div>

        {/* navbar */}
        <nav className={styles.navbar} aria-label="main navigation">
          <div className={styles.logo}>
            <Image src="/images/logo.png" alt="garcia family medicine logo" width={85} height={85} priority />
          </div>

          <button
            className={styles.mobilenavtoggle}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            aria-label={isMenuOpen ? 'close menu' : 'open menu'}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>

          <ul id="main-navigation" className={`${styles.navlinks} ${isMenuOpen ? styles.active : ''}`}>
            {navLinks.map(link =>
              link.dropdown ? (
                <li key={link.label}>
                  <div className={styles.dropdowncontainer}>
                    <button
                      type="button"
                      className={`${styles.dropdowntoggle} ${activeDrop === link.label ? styles.active : ''}`}
                      aria-haspopup="true"
                      aria-expanded={activeDrop === link.label}
                      onMouseEnter={e => open(link.label, e.currentTarget)}
                      onFocus={e     => open(link.label, e.currentTarget)}
                    >
                      {link.label}
                    </button>

                    <div
                      role="menu"
                      aria-hidden={activeDrop !== link.label}
                      className={`${styles.dropdownmenu} ${activeDrop === link.label ? styles.show : ''}`}
                      style={{ '--arrow-left': `${arrowLeft}px` }}
                      onMouseEnter={() => clearTimeout(timer.current)}
                      onMouseLeave={close}
                    >
                      <div className={styles.dropdowncontent}>
                        {link.dropdown.map(section => (
                          <div key={section.title} className={styles.dropdownsection}>
                            <h3 className={styles.dropdownsectiontitle}>{section.title}</h3>
                            <ul>
                              {section.items.map(item => (
                                <li key={item.label}>
                                  <Link
                                    href={item.href}
                                    className={styles.dropdownlink}
                                    onClick={() => { setIsMenuOpen(false); setActiveDrop(null); }}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link href={link.href} className={styles.navlink} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              )
            )}

            {/* orange pill button */}
            <li className={styles.navextra}>
              <ReclaimConfidenceButton/>
            </li>
          </ul>
        </nav>
      </div>

      {/* spacer below fixed header */}
      <div className={styles.offset} aria-hidden="true" />
    </>
  );
}
