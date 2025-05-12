import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeout = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#meet", label: "Meet the Doctor" },
    { href: "#memberships", label: "Memberships" },
    { 
      label: "Services", 
      dropdown: [
        { 
          title: "Programs by Age",
          items: [
            "Infant Daycare (8 weeks to 1 year)",
            "Toddler Daycare (1 to 2)",
            "Discovery Preschool (2 to 3)",
            "Preschool Program (3 to 4)",
            "Prekindergarten Program (4 to 5)"
          ]
        },
        {
          title: "Additional Programs",
          items: [
            "Learning Adventures® Enrichment Programs",
            "School Break Solutions",
            "Summer Break Program",
            "Before- and After-School Care"
          ]
        }
      ]
    },
    { 
      label: "Affiliates", 
      dropdown: [
        { 
          title: "Our Partners",
          items: [
            "Gigi's Safehouse",
            "DPC Alliance",
            "AAFP",
            "Obesity Medicine Association"
          ]
        }
      ]
    },
    { href: "#faqs", label: "FAQs" },
    { href: "#contact", label: "Contact" },
    { href: "#spin", label: "Win $100", highlight: true }
  ];

  const topButtons = [
    { label: "Emergency Line" },
    { label: "Patient Portal" },
    { label: "EN" }
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
                          <h4 className="dropdown-section-title">{section.title}</h4>
                          <ul>
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <a href="#">{item}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a 
                  href={link.href} 
                  className={link.highlight ? 'highlighted-link' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}