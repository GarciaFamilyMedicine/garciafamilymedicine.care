'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReclaimConfidenceFlyout from '../reclaimconfidence/reclaimconfidencebutton.jsx';
import styles from './header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState(null);
  const timer = useRef(null);
  const dropdownRefs = useRef({});

  const toggleMenu = () => setIsMenuOpen(p => !p);

  const handlePillHover = (open) => {
    if (window.innerWidth > 768) {
      clearTimeout(timer.current);
      setIsFlyoutOpen(open);
    }
  };

  const navLinks = [
    { href: '/#meet', label: 'meet the doctor' },
    { href: '/#memberships', label: 'memberships' },
    {
      label: 'services',
      dropdown: {
        links: [
          {
            title: 'core medical services',
            items: [
              { label: 'chronic disease management', href: '/#chronic-disease' },
              { label: 'preventive care', href: '/#preventive-care' },
            ],
          },
          {
            title: 'specialized care',
            items: [
              { label: 'pelvic health', href: '/pelvichealth' },
              { label: 'weight management', href: '/#weight-management' },
            ],
          },
        ],
        info: {
          askDr: {
            title: "Have questions for Dr. Garcia?",
            description: "Submit your confidential questions through our secure portal and get expert advice.",
            buttonText: "Ask Dr. Garcia"
          },
          contact: {
            phone: "816-427-5320",
            hours: "Mon-Fri: 8am-7pm",
            location: "801 NW St. Mary Drive"
          }
        }
      }
    },
    {
      label: 'affiliates',
      dropdown: {
        links: [
          {
            title: 'our partners',
            items: [{ label: "gigi's safehouse", href: '/#gigi-safehouse' }],
          },
        ],
        info: {
          askDr: {
            title: "Partner with us",
            description: "Learn how your organization can collaborate with our practice.",
            buttonText: "Partner Inquiry"
          },
          contact: {
            phone: "816-427-5320",
            hours: "Mon-Fri: 9am-5pm",
            location: "801 NW St. Mary Drive"
          }
        }
      }
    },
    { href: '/#faqs', label: 'faqs' },
    { href: '/#contact', label: 'contact' },
  ];

  const topButtons = [
    { label: 'emergency line' },
    { label: 'patient portal' },
    { label: 'en' },
  ];

  const handleDropdownEnter = (label) => {
    clearTimeout(timer.current);
    setActiveDrop(label);
  };

  const handleDropdownLeave = () => {
    timer.current = setTimeout(() => {
      setActiveDrop(null);
    }, 300);
  };

  useEffect(() => {
    const onResize = () => {
      setIsMenuOpen(false);
      if (window.innerWidth <= 768) setIsFlyoutOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.topbar}>
          <div className={styles.topbuttons}>
            {topButtons.map(btn => (
              <button key={btn.label} className={styles.topbutton}>{btn.label}</button>
            ))}
          </div>
        </div>

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
                  <div 
                    className={styles.dropdowncontainer}
                    onMouseEnter={() => handleDropdownEnter(link.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      className={`${styles.dropdowntoggle} ${activeDrop === link.label ? styles.active : ''}`}
                      aria-haspopup="true"
                      aria-expanded={activeDrop === link.label}
                    >
                      {link.label}
                    </button>

                    <div
                      role="menu"
                      aria-hidden={activeDrop !== link.label}
                      className={`${styles.dropdownmenu} ${activeDrop === link.label ? styles.show : ''}`}
                      onMouseEnter={() => clearTimeout(timer.current)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className={styles.dropdowncontent}>
                        {link.dropdown.links.map(section => (
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
                      
                      <div className={styles.dropdowninfo}>
                        <div className={styles.dropdowninfocard}>
                          <div className={styles.askdr}>
                            <h4>{link.dropdown.info.askDr.title}</h4>
                            <p>{link.dropdown.info.askDr.description}</p>
                            <button className={styles.askbutton}>
                              {link.dropdown.info.askDr.buttonText}
                            </button>
                          </div>
                          <div className={styles.contactinfo}>
                            <p><strong>Phone:</strong> {link.dropdown.info.contact.phone}</p>
                            <p><strong>Hours:</strong> {link.dropdown.info.contact.hours}</p>
                            <p><strong>Location:</strong> {link.dropdown.info.contact.location}</p>
                          </div>
                        </div>
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

      <div className={styles.offset} aria-hidden="true" />
    </>
  );
}