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
    { href: "/#meet", label: "Meet the Doctor" }, // Absolute URL
    { href: "/#memberships", label: "Memberships" }, // Absolute URL
    {
      label: "Services",
      dropdown: [
        {
          title: "Core Medical Services",
          items: [
            { label: "Direct Primary Care", href: "/#direct-primary-care" }, // Absolute URL
            { label: "Chronic Disease Management", href: "/#chronic-disease" }, // Absolute URL
            { label: "Preventive Care", href: "/#preventive-care" }, // Absolute URL
          ],
        },
        {
          title: "Specialized Care",
          items: [
            { label: "Pelvic Health", href: "/pelvichealth/" }, // Already correct
            { label: "Weight Management", href: "/#weight-management" }, // Absolute URL
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
            { label: "Gigi's Safehouse", href: "/#gigi-safehouse" }, // Absolute URL
            { label: "DPC Alliance", href: "/#dpc-alliance" }, // Absolute URL
            { label: "AAFP", href: "/#aafp" }, // Absolute URL
            { label: "Obesity Medicine Association", href: "/#obesity-med" }, // Absolute URL
          ],
        },
      ],
    },
    { href: "/#faqs", label: "FAQs" }, // Absolute URL
    { href: "/#contact", label: "Contact" }, // Absolute URL
    { href: "/#spin", label: "Win $100", highlight: true }, // Absolute URL
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
            <button key={index} className="top-button">
              {button.label}
            </button>
          ))}
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <Image
            src="/logo.png"
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
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              {link.dropdown ? (
                <div className="dropdown-container">
                  <a
                    href="#"
                    className={`dropdown-toggle ${activeDropdown === link.label ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                  <div
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
                                  onClick={() => setIsMenuOpen(false)}
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