'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Header.css';

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
            { label: "Direct Primary Care", href: "/#direct-primary-care" },
            { label: "Chronic Disease Management", href: "/#chronic-disease" },
            { label: "Preventive Care", href: "/#preventive-care" },
          ],
        },
        {
          title: "Specialized Care",
          items: [
            { label: "Pelvic Health", href: "/pelvichealth" }, // Fixed link
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
            { label: "DPC Alliance", href: "/#dpc-alliance" },
            { label: "AAFP", href: "/#aafp" },
            { label: "Obesity Medicine Association", href: "/#obesity-med" },
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
    <header className="header">
      <div className="top-bar">
        <div className="top-buttons">
          {topButtons.map((button, index) => (
            <button 
              key={index} 
              className="top-button"
              aria-label={button.label}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>

      <nav className="navbar" aria-label="Main navigation">
        <div className="logo">
          <Image
            src="/images/logo.png"
            alt="Garcia Family Medicine Logo"
            width={85}
            height={85}
            priority
          />
        </div>

        <button
          className="mobile-nav-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="main-navigation"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        <ul 
          id="main-navigation"
          className={`nav-links ${isMenuOpen ? 'active' : ''}`}
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              {link.dropdown ? (
                <div className="dropdown-container">
                  <button
                    type="button"
                    className={`dropdown-toggle ${activeDropdown === link.label ? 'active' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === link.label}
                  >
                    {link.label}
                  </button>
                  <div
                    role="menu"
                    aria-hidden={activeDropdown !== link.label}
                    className={`dropdown-menu ${activeDropdown === link.label ? 'show' : ''}`}
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="dropdown-content">
                      {link.dropdown.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="dropdown-section">
                          <h3 className="dropdown-section-title">{section.title}</h3>
                          <ul>
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  href={item.href}
                                  className="dropdown-link"
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
                  className={link.highlight ? 'highlighted-link' : ''}
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
    </header>
  );
}