// components/Header.jsx
import { useState } from 'react';
import Image from 'next/image';
import './header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="top-bar">
        <div className="top-buttons">
          <button className="top-button">Emergency Line</button>
          <button className="top-button">Patient Portal</button>
          <button className="top-button">EN</button>
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
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#meet">Meet the Doctor</a></li>
          <li><a href="#memberships">Memberships</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#affiliates">Affiliates</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#spin" className="highlighted-link">Enter to Win $100</a></li>
        </ul>
      </nav>
    </header>
  );
}