'use client';

import Link from 'next/link';
import React, { useState, useMemo, useEffect } from 'react';
import Calendar from '../calendar/calendar';
import styles from './dropdownmenu.module.css';
import mobileStyles from './dropdownmenu.mobile.module.css';

export default function DropdownMenu({
  link,
  isActive,
  onEnter,
  onLeave,
  setIsMenuOpen,
  setActiveDrop,
  timerRef,
  isMobile = false,
  eventsData = null, // Accept events data as prop to prevent duplicate processing
}) {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDrop(null);
    onLeave();
  };

  // Add click handler for calendar month title
  const handleCalendarClick = () => {
    // Navigate to events page
    window.location.href = '/events/current';
    handleLinkClick(); // Close dropdown
  };

  // Mobile dropdown toggle
  const handleMobileToggle = (e) => {
    e.preventDefault();
    if (isMobile) {
      setMobileDropdownOpen(!mobileDropdownOpen);
    }
  };

  // Add click event listener to calendar title when component mounts
  useEffect(() => {
    if (isActive && link.label === 'News & Events') {
      // Wait a bit for the calendar to render
      const timer = setTimeout(() => {
        // Try multiple possible selectors for the calendar title
        const possibleSelectors = [
          '.dropdowninfo h2',
          '.dropdowninfo .calendar h2', 
          '.dropdowninfo .calendar-header h2',
          '.dropdowninfo .month-header',
          '.dropdowninfo [class*="header"] h2',
          '.dropdowninfo [class*="title"]',
          '.dropdowninfo h2:first-child'
        ];

        let titleElement = null;
        
        for (const selector of possibleSelectors) {
          titleElement = document.querySelector(selector);
          if (titleElement) {
            console.log('Found calendar title with selector:', selector);
            break;
          }
        }

        if (titleElement) {
          titleElement.addEventListener('click', handleCalendarClick);
          titleElement.style.cursor = 'pointer';
          titleElement.style.transition = 'all 0.2s ease';
          
          // Add a visual indicator
          titleElement.onmouseenter = () => {
            titleElement.style.color = 'var(--primary-blue)';
            titleElement.style.transform = 'translateX(2px)';
          };
          titleElement.onmouseleave = () => {
            titleElement.style.color = '';
            titleElement.style.transform = '';
          };
        } else {
          console.log('Could not find calendar title element');
        }
      }, 100);

      return () => {
        clearTimeout(timer);
        // Clean up all possible elements
        const allElements = document.querySelectorAll('.dropdowninfo h2, .dropdowninfo .calendar h2');
        allElements.forEach(el => {
          el.removeEventListener('click', handleCalendarClick);
        });
      };
    }
  }, [isActive, link.label]);

  // Handle simple links (without dropdowns)
  if (!link.dropdown) {
    return (
      <Link
        href={link.href}
        className={styles.navlink}
        onClick={handleLinkClick}
      >
        {link.label}
      </Link>
    );
  }

  // Memoize event data processing for News & Events
  const processedEventsData = useMemo(() => {
    const isEvents = link.label === 'News & Events';
    if (!isEvents || !eventsData) return null;

    const currentYear = new Date().getFullYear();
    return {
      ...eventsData,
      currentYear
    };
  }, [link.label, eventsData]);

  const isEvents = link.label === 'News & Events';

  return (
    <div
      className={styles.dropdowncontainer}
      onMouseEnter={() => !isMobile && onEnter(link.label)}
      onMouseLeave={() => !isMobile && onLeave()}
    >
      <button
        type="button"
        className={`${styles.dropdowntoggle} ${
          (isActive && !isMobile) || (mobileDropdownOpen && isMobile) ? styles.active : ''
        }`}
        aria-haspopup="true"
        aria-expanded={isMobile ? mobileDropdownOpen : isActive}
        onClick={isMobile ? handleMobileToggle : undefined}
        tabIndex={0}
      >
        {link.label}
        {isMobile && (
          <span className={`${styles.mobileArrow} ${mobileDropdownOpen ? styles.rotated : ''}`}>
            ▼
          </span>
        )}
      </button>

      <div
        role="menu"
        aria-hidden={isMobile ? !mobileDropdownOpen : !isActive}
        className={`${styles.dropdownmenu} ${
          (isActive && !isMobile) || (mobileDropdownOpen && isMobile) ? styles.show : ''
        }`}
        onMouseEnter={() => !isMobile && clearTimeout(timerRef.current)}
        onMouseLeave={() => !isMobile && onLeave()}
      >
        <div className={styles.dropdowncontent}>
          {/* LEFT COLUMN - NEWS */}
          <div className={`${styles.dropdownsection} ${styles.scrollable}`}>
            {isEvents ? (
              <>
                <h3 className={styles.dropdownsectiontitle}>
                  <Link 
                    href="/news" 
                    className={styles.sectionTitleLink}
                    onClick={handleLinkClick}
                  >
                    News
                  </Link>
                </h3>
                <ul>
                  {/* Future: Add mapped news blog posts here */}
                </ul>
                
                {/* News footer link aligned with other columns */}
                <div className={styles.columnFooterLinks}>
                  <Link
                    href="/news"
                    className={styles.columnFooterLink}
                    onClick={handleLinkClick}
                  >
                    View All News
                  </Link>
                </div>
              </>
            ) : (
              link.dropdown.links?.[0] && (
                <>
                  <h3 className={styles.dropdownsectiontitle}>{link.dropdown.links[0].title}</h3>
                  <ul>
                    {link.dropdown.links[0].items?.map((item, itemIndex) => (
                      <li key={item.label + '-' + itemIndex}>
                        {item.submenu ? (
                          <>
                            <span className={styles.dropdownlink}>{item.label}</span>
                            <ul className={styles.submenu}>
                              {item.submenu.map((subItem, subIndex) => (
                                <li key={subItem.label + '-' + subIndex}>
                                  <Link
                                    href={subItem.href}
                                    className={styles.submenulink}
                                    onClick={handleLinkClick}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className={styles.dropdownlink}
                            onClick={handleLinkClick}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )
            )}
          </div>

          {/* MIDDLE COLUMN - UPCOMING EVENTS */}
          <div className={`${styles.dropdownsection} ${styles.scrollable}`}>
            {isEvents ? (
              <>
                <h3 className={styles.dropdownsectiontitle}>
                  <Link 
                    href="/events/current" 
                    className={styles.sectionTitleLink}
                    onClick={handleLinkClick}
                  >
                    Upcoming Events
                  </Link>
                </h3>
                <ul>
                  {processedEventsData?.upcomingEvents?.length ? (
                    <>
                      {processedEventsData.upcomingEvents.slice(0, 3).map((event) => {
                        // Format date without year for current-year events
                        const displayDate = event.date.endsWith(`, ${processedEventsData.currentYear}`)
                          ? event.date.replace(`, ${processedEventsData.currentYear}`, '')
                          : event.date;
                        
                        return (
                          <li key={event.href}>
                            <Link
                              href={event.href}
                              className={styles.dropdownlink}
                              onClick={handleLinkClick}
                            >
                              <span className={styles.eventLabel}>{event.label}</span>
                              <span className={styles.eventDate}>{displayDate}</span>
                            </Link>
                          </li>
                        );
                      })}
                      
                      {/* Show "View All" if more than 3 events */}
                      {processedEventsData.upcomingEvents.length > 3 && (
                        <li>
                          <Link
                            href="/events/current"
                            className={styles.dropdownlink}
                            onClick={handleLinkClick}
                          >
                            View All Events
                          </Link>
                        </li>
                      )}
                    </>
                  ) : (
                    <li>
                      <span className={styles.dropdownlink}>No upcoming events</span>
                    </li>
                  )}
                </ul>
                
                {/* Always show View All Events link at bottom of column */}
                <div className={styles.columnFooterLinks}>
                  <Link
                    href="/events/current"
                    onClick={handleLinkClick}
                    className={styles.columnFooterLink}
                  >
                    View All Upcoming Events
                  </Link>
                </div>
              </>
            ) : (
              link.dropdown.links?.[1] && (
                <>
                  <h3 className={styles.dropdownsectiontitle}>{link.dropdown.links[1].title}</h3>
                  <ul>
                    {link.dropdown.links[1].items?.map((item, itemIndex) => (
                      <li key={item.label + '-' + itemIndex}>
                        {item.submenu ? (
                          <>
                            <span className={styles.dropdownlink}>{item.label}</span>
                            <ul className={styles.submenu}>
                              {item.submenu.map((subItem, subIndex) => (
                                <li key={subItem.label + '-' + subIndex}>
                                  <Link
                                    href={subItem.href}
                                    className={styles.submenulink}
                                    onClick={handleLinkClick}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className={styles.dropdownlink}
                            onClick={handleLinkClick}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )
            )}
          </div>

          {/* RIGHT COLUMN - CALENDAR & FEATURED */}
          <div className={`${styles.dropdowninfo} ${styles.scrollable}`}>
            {isEvents ? (
              <>
                <div className="calendar-wrapper">
                  <Calendar />
                </div>
                <div className={styles.calendarLinks}>
                  <Link
                    href="/events/past"
                    onClick={handleLinkClick}
                    className={styles.pasthighlightslink}
                  >
                    View Past Highlights
                  </Link>
                </div>
              </>
            ) : (
              link.dropdown.info && (
                <div className={styles.dropdowninfocard}>
                  {link.dropdown.info.askDr && (
                    <div className={styles.askdr}>
                      <h4>{link.dropdown.info.askDr.title}</h4>
                      <p>{link.dropdown.info.askDr.description}</p>
                      <button className={styles.askbutton}>
                        {link.dropdown.info.askDr.buttonText}
                      </button>
                    </div>
                  )}
                  {link.dropdown.info.contact && (
                    <div className={styles.contactinfo}>
                      <p>
                        <strong>Phone:</strong>{' '}
                        <a href={link.dropdown.info.contact.phone.href}>
                          {link.dropdown.info.contact.phone.display}
                        </a>
                      </p>
                      <p><strong>Hours:</strong> {link.dropdown.info.contact.hours}</p>
                      <p><strong>Location:</strong> {link.dropdown.info.contact.location}</p>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}