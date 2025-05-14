'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeout = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/#meet", label: "Meet the Doctor" },
    { href: "/#memberships", label: "Memberships" },
    {
      label: "Services",
      dropdown: [
        {
          title: "Core Medical Services",
          items: [
            { label: "Chronic Disease Management", href: "/#chronic-disease" },
            { label: "Preventive Care", href: "/#preventive-care" },
          ],
        },
        {
          title: "Specialized Care",
          items: [
            { label: "Pelvic Health", href: "/pelvichealth" },
            { label: "Weight Management", href: "/#weight-management" },
          ],
        },
      ],
    },
    {
      label: "Affiliates",
      dropdown: [
        {
          title: "Our Partners",
          items: [
            { label: "Gigi's Safehouse", href: "/#gigi-safehouse" },
          ],
        },
      ],
    },
    { href: "/#faqs", label: "FAQs" },
    { href: "/#contact", label: "Contact" },
    { href: "/#spin", label: "Win $100", highlight: true },
  ];

  const topButtons = [
    { label: "Emergency Line" },
    { label: "Patient Portal" },
    { label: "EN" },
  ];

  const handleMouseEnter = (label) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.topButtons}>
          {topButtons.map((button, index) => (
            <button 
              key={index} 
              className={styles.topButton}
              aria-label={button.label}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>

      <nav className={styles.navbar} aria-label="Main navigation">
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Garcia Family Medicine Logo"
            width={85}
            height={85}
            priority
          />
        </div>

        <button
          className={styles.mobileNavToggle}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="main-navigation"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        <ul 
          id="main-navigation"
          className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              {link.dropdown ? (
                <div className={styles.dropdownContainer}>
                  <button
                    type="button"
                    className={`${styles.dropdownToggle} ${activeDropdown === link.label ? styles.active : ''}`}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === link.label}
                  >
                    {link.label}
                  </button>
                  <div
                    role="menu"
                    aria-hidden={activeDropdown !== link.label}
                    className={`${styles.dropdownMenu} ${activeDropdown === link.label ? styles.show : ''}`}
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className={styles.dropdownContent}>
                      {link.dropdown.map((section, sectionIdx) => (
                        <div key={sectionIdx} className={styles.dropdownSection}>
                          <h3 className={styles.dropdownSectionTitle}>{section.title}</h3>
                          <ul>
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  href={item.href}
                                  className={styles.dropdownLink}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  aria-label={item.label}
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
              ) : (
                <Link
                  href={link.href}
                  className={link.highlight ? styles.highlightedLink : ''}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}