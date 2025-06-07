'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaUserMd, 
  FaNewspaper, 
  FaHospital, 
  FaDumbbell, 
  FaHandshake, 
  FaQuestionCircle, 
  FaPhone, 
  FaPhoneAlt,
  FaArrowLeft,
  FaCalendarAlt,
  FaStethoscope
} from 'react-icons/fa';

import { nav_links, top_buttons } from './navdata';
import DropdownMenu from './dropdownmenu';
import ReclaimConfidenceFlyout from './reclaimconfidenceflyout';
import PillButton from './pillbutton';
import Calendar from '../calendar/calendar';
import { getEventsData } from '../calendar/calendar-events';
import styles from './header.module.css';
import mobileStyles from './mobile.module.css';
import pillStyles from './pillbutton.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // NEW: Track active submenu
  const timerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768;
      const wasMobile = isMobile;
      setIsMobile(mobile);
      
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
      setActiveSubmenu(null); // UPDATED: Clear active submenu
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Keyboard support
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        if (activeSubmenu) {
          setActiveSubmenu(null); // Back to main menu
        } else {
          setIsMenuOpen(false);
          setActiveDrop(null);
          setIsFlyoutOpen(false);
        }
      }
    }
    
    if (isMenuOpen || isFlyoutOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isMenuOpen, isFlyoutOpen, activeSubmenu]);

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

  // Get events data for News & Events
  const eventsData = getEventsData();

  // Function to convert nav_links to mobile menu format
  const getMobileMenuItems = () => {
    const iconMap = {
      'Meet the Doctor': <FaUserMd />,
      'News & Events': <FaNewspaper />,
      'Patient Care Essentials': <FaHospital />,
      'Affiliates': <FaHandshake />,
      'FAQs': <FaQuestionCircle />,
      'Contact': <FaPhone />
    };

    return nav_links.map(link => {
      if (link.dropdown) {
        // Handle dropdown items
        let allItems = [];
        let sections = [];
        
        // Special handling for News & Events - match desktop dropdown exactly
        if (link.label === 'News & Events') {
          allItems = [];
          
          // Add upcoming events exactly like desktop dropdown does
          if (eventsData?.upcomingEvents?.length) {
            const eventItems = eventsData.upcomingEvents.slice(0, 3).map((event) => {
              // Debug: log what we're getting
              console.log('Event object:', event);
              console.log('Event properties:', Object.keys(event));
              
              // Format date the same way as desktop (remove current year)
              const currentYear = new Date().getFullYear();
              const displayDate = event.date?.endsWith(`, ${currentYear}`)
                ? event.date.replace(`, ${currentYear}`, '')
                : event.date;
              
              return {
                label: event.label || event.title || event.name || 'Untitled Event', // Try all possible name properties
                href: event.href || '#',
                isEvent: true,
                date: displayDate // Use formatted date like desktop
              };
            });
            
            allItems.push(...eventItems);
          }
          
          // Add navigation buttons at the end (will be rendered separately)
          allItems.push(
            { label: 'View All News', href: '/news', isButton: true },
            { label: 'Upcoming Events', href: '/events', isButton: true },
            { label: 'Past Events', href: '/events/past', isButton: true }
          );
        } else {
          // For Patient Care Essentials and other structured dropdowns
          if (link.dropdown.links) {
            sections = link.dropdown.links.map(section => ({
              title: section.title,
              items: section.items || []
            }));
            
            // Special reordering for Patient Care Essentials - Core Medical first
            if (link.label === 'Patient Care Essentials') {
              sections = sections.reverse(); // This puts "Core Medical Services" first
            }
            
            // Also flatten for backward compatibility
            link.dropdown.links.forEach(section => {
              if (section.items) {
                allItems.push(...section.items);
              }
            });
          }
        }

        return {
          label: link.label,
          icon: iconMap[link.label] || <FaHospital />,
          hasDropdown: true,
          items: allItems,
          sections: sections // NEW: Keep section structure
        };
      } else {
        // Handle simple links
        return {
          label: link.label,
          href: link.href,
          icon: iconMap[link.label] || <FaPhone />,
          subtitle: link.label === 'Contact' ? 'Get in Touch' : 
                   link.label === 'FAQs' ? 'Common Questions' : undefined
        };
      }
    }).concat([
      // Add call now button
      {
        label: 'Call Now',
        href: 'tel:816-427-5320',
        icon: <FaPhoneAlt />,
        subtitle: '816-427-5320'
      }
    ]);
  };

  const mobileMenuItems = getMobileMenuItems();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setActiveDrop(null);
    setActiveSubmenu(null); // UPDATED: Clear active submenu
  };

  // UPDATED: New submenu navigation logic
  const handleMobileMenuItemClick = (item, index) => {
    if (item.hasDropdown) {
      setActiveSubmenu({
        ...item,
        index
      });
    } else {
      setIsMenuOpen(false);
      setActiveSubmenu(null);
    }
  };

  // NEW: Back to main menu
  const handleBackToMainMenu = () => {
    setActiveSubmenu(null);
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
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };

  // Close all menus when logo is clicked
  const handleLogoClick = () => {
    setIsMenuOpen(false);
    setActiveDrop(null);
    setIsFlyoutOpen(false);
    setActiveSubmenu(null);
  };

  // Desktop pill button click handler
  const handleDesktopPillClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlyoutOpen((prev) => !prev);
    
    setIsMenuOpen(false);
    setActiveDrop(null);
    setActiveSubmenu(null);
  };

  return (
    <>
      <div className={`${styles.container} ${mobileStyles.container || ''}`}>
        {/* Top bar */}
        <div className={`${styles.topbar} ${mobileStyles.topbar || ''}`}>
          <div className={`${styles.topbuttons} ${mobileStyles.topbuttons || ''}`}>
            {top_buttons.map((btn) => (
              <button 
                key={btn.label} 
                className={`${styles.topbutton} ${mobileStyles.topbutton || ''}`}
                onClick={btn.href ? () => window.location.href = btn.href : undefined}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Navbar */}
        <nav className={`${styles.navbar} ${mobileStyles.navbar || ''}`} aria-label="main navigation">
          {/* Logo */}
          <Link
            href="/"
            className={`${styles.logo} ${mobileStyles.logo || ''}`}
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

          {/* Mobile pill button */}
          {isMobile && (
            <div className={`${styles.mobilePillWrapper || ''} ${mobileStyles.mobilePillWrapper || ''}`}>
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
            className={`${styles.mobilenavtoggle || ''} ${mobileStyles.mobilenavtoggle || ''} ${
              isMenuOpen ? (mobileStyles.menuOpen || '') : ''
            }`}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleMenu}
            type="button"
          >
            <span className={`${styles.hamburgerLine || ''} ${mobileStyles.hamburgerLine || ''}`}></span>
            <span className={`${styles.hamburgerLine || ''} ${mobileStyles.hamburgerLine || ''}`}></span>
            <span className={`${styles.hamburgerLine || ''} ${mobileStyles.hamburgerLine || ''}`}></span>
          </button>

          {/* Navigation links */}
          <ul className={`${styles.navlinks} ${mobileStyles.navlinks || ''} ${isMenuOpen ? (styles.active || '') : ''}`}>
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
                    className={`${styles.navlink} ${mobileStyles.navlink || ''}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveDrop(null);
                      setActiveSubmenu(null);
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}

            {/* Desktop pill button */}
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

        {/* Desktop flyout */}
        {!isMobile && isFlyoutOpen && (
          <ReclaimConfidenceFlyout onClose={() => setIsFlyoutOpen(false)} />
        )}

        {/* Mobile menu overlay */}
        {isMobile && isMenuOpen && (
          <div 
            className={`${styles.mobileMenuOverlay || ''} ${mobileStyles.mobileMenuOverlay || ''}`}
            onClick={() => {
              if (activeSubmenu) {
                setActiveSubmenu(null); // Back to main menu
              } else {
                setIsMenuOpen(false); // Close menu
              }
            }}
            aria-hidden="true"
          />
        )}

        {/* Mobile Grid Menu - UPDATED: With submenu replacement logic */}
        {isMobile && (
          <div className={`${styles.mobileGridMenu || ''} ${mobileStyles.mobileGridMenu || ''} ${
            isMenuOpen ? (mobileStyles.active || '') : ''
          }`}>
            <button
              className={`${styles.mobileMenuClose || ''} ${mobileStyles.mobileMenuClose || ''}`}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            
            {/* UPDATED: Conditional header based on submenu state */}
            <div className={`${styles.mobileMenuHeader || ''} ${mobileStyles.mobileMenuHeader || ''}`}>
              {activeSubmenu ? (
                // Submenu header with back button
                <>
                  <button
                    className={`${mobileStyles.backButton || ''}`}
                    onClick={handleBackToMainMenu}
                    aria-label="Back to main menu"
                  >
                    <FaArrowLeft /> Back
                  </button>
                  <h2 className={`${styles.mobileMenuTitle || ''} ${mobileStyles.mobileMenuTitle || ''}`}>
                    {activeSubmenu.label}
                  </h2>
                  <p className={`${styles.mobileMenuSubtitle || ''} ${mobileStyles.mobileMenuSubtitle || ''}`}>
                    Choose an option below
                  </p>
                </>
              ) : (
                // Main menu header
                <>
                  <h2 className={`${styles.mobileMenuTitle || ''} ${mobileStyles.mobileMenuTitle || ''}`}>
                    Garcia Family Medicine
                  </h2>
                  <p className={`${styles.mobileMenuSubtitle || ''} ${mobileStyles.mobileMenuSubtitle || ''}`}>
                    Compassionate Healthcare with Love
                  </p>
                </>
              )}
            </div>

            {/* UPDATED: Conditional content based on submenu state */}
            {activeSubmenu ? (
              // Show submenu items
              <div className={`${styles.mobileMenuGrid || ''} ${mobileStyles.mobileSubmenuGrid || ''}`}>
                {/* Special handling for News & Events with calendar */}
                {activeSubmenu.label === 'News & Events' ? (
                  <>
                    <div className={`${mobileStyles.calendarSection || ''}`}>
                      <Calendar />
                    </div>
                    
                    {/* Show event items (not buttons) */}
                    {activeSubmenu.items.filter(item => item.isEvent).map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={`${styles.mobileMenuItem || ''} ${mobileStyles.mobileSubmenuItem || ''} ${mobileStyles.eventItem || ''}`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveSubmenu(null);
                        }}
                      >
                        <span className={`${styles.mobileMenuIcon || ''} ${mobileStyles.mobileMenuIcon || ''}`}>
                          <FaCalendarAlt />
                        </span>
                        <div className={`${mobileStyles.eventContent || ''}`}>
                          <span className={`${styles.mobileMenuLabel || ''} ${mobileStyles.mobileMenuLabel || ''}`}>
                            {subItem.label}
                          </span>
                          {subItem.date && (
                            <span className={`${styles.mobileMenuSubLabel || ''} ${mobileStyles.mobileMenuSubLabel || ''}`}>
                              {subItem.date}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                    
                    {/* Navigation buttons in 3 columns at bottom */}
                    <div className={`${mobileStyles.newsEventButtons || ''}`}>
                      {activeSubmenu.items.filter(item => item.isButton).map((buttonItem, buttonIndex) => (
                        <Link
                          key={buttonIndex}
                          href={buttonItem.href}
                          className={`${mobileStyles.newsEventButton || ''}`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveSubmenu(null);
                          }}
                        >
                          {buttonItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  // Handle other submenus (Patient Care Essentials, Affiliates)
                  <>
                    {/* Show sections if available (for Patient Care Essentials) */}
                    {activeSubmenu.sections && activeSubmenu.sections.length > 0 ? (
                      activeSubmenu.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className={`${mobileStyles.submenuSection || ''}`}>
                          <h3 className={`${mobileStyles.sectionTitle || ''}`}>
                            {section.title}
                          </h3>
                          {section.items.map((subItem, subIndex) => (
                            <Link
                              key={`${sectionIndex}-${subIndex}`}
                              href={subItem.href}
                              className={`${styles.mobileMenuItem || ''} ${mobileStyles.mobileSubmenuItem || ''}`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveSubmenu(null);
                              }}
                            >
                              <span className={`${styles.mobileMenuIcon || ''} ${mobileStyles.mobileMenuIcon || ''}`}>
                                <FaStethoscope />
                              </span>
                              <span className={`${styles.mobileMenuLabel || ''} ${mobileStyles.mobileMenuLabel || ''}`}>
                                {subItem.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      ))
                    ) : (
                      // Fallback to flat list for other submenus
                      activeSubmenu.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className={`${styles.mobileMenuItem || ''} ${mobileStyles.mobileSubmenuItem || ''}`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveSubmenu(null);
                          }}
                        >
                          <span className={`${styles.mobileMenuIcon || ''} ${mobileStyles.mobileMenuIcon || ''}`}>
                            <FaStethoscope />
                          </span>
                          <span className={`${styles.mobileMenuLabel || ''} ${mobileStyles.mobileMenuLabel || ''}`}>
                            {subItem.label}
                          </span>
                        </Link>
                      ))
                    )}
                  </>
                )}
              </div>
            ) : (
              // Show main menu items
              <div className={`${styles.mobileMenuGrid || ''} ${mobileStyles.mobileMenuGrid || ''}`}>
                {mobileMenuItems.map((item, index) => {
                  // Use button for dropdown items, Link for direct navigation
                  if (item.hasDropdown) {
                    return (
                      <button
                        key={index}
                        className={`${styles.mobileMenuItem || ''} ${mobileStyles.mobileMenuItem || ''} ${mobileStyles.hasDropdown || ''}`}
                        onClick={() => handleMobileMenuItemClick(item, index)}
                      >
                        <span className={`${styles.mobileMenuIcon || ''} ${mobileStyles.mobileMenuIcon || ''}`}>
                          {item.icon}
                        </span>
                        <span className={`${styles.mobileMenuLabel || ''} ${mobileStyles.mobileMenuLabel || ''}`}>
                          {item.label}
                        </span>
                        {item.subtitle && (
                          <span className={`${styles.mobileMenuSubLabel || ''} ${mobileStyles.mobileMenuSubLabel || ''}`}>
                            {item.subtitle}
                          </span>
                        )}
                        <span className={`${mobileStyles.dropdownIndicator || ''}`}>
                          →
                        </span>
                      </button>
                    );
                  } else {
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className={`${styles.mobileMenuItem || ''} ${mobileStyles.mobileMenuItem || ''}`}
                        onClick={() => handleMobileMenuItemClick(item, index)}
                      >
                        <span className={`${styles.mobileMenuIcon || ''} ${mobileStyles.mobileMenuIcon || ''}`}>
                          {item.icon}
                        </span>
                        <span className={`${styles.mobileMenuLabel || ''} ${mobileStyles.mobileMenuLabel || ''}`}>
                          {item.label}
                        </span>
                        {item.subtitle && (
                          <span className={`${styles.mobileMenuSubLabel || ''} ${mobileStyles.mobileMenuSubLabel || ''}`}>
                            {item.subtitle}
                          </span>
                        )}
                      </Link>
                    );
                  }
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile flyout */}
      {isFlyoutOpen && isMobile && (
        <ReclaimConfidenceFlyout onClose={() => setIsFlyoutOpen(false)} />
      )}

      {/* Spacer for fixed header */}
      <div className={`${styles.offset} ${mobileStyles.offset || ''}`} aria-hidden="true" />
    </>
  );
}