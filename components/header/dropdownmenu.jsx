'use client';

import Link from 'next/link';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Calendar from '../calendar/calendar';
import { getRecentPosts, formatDate } from '../blog/blog-data';
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
  const router = useRouter();
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState({});

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDrop(null);
    onLeave();
  };

  // Adjust dropdown position to prevent viewport overflow
  useEffect(() => {
    if (isActive && dropdownRef.current && !isMobile) {
      const dropdown = dropdownRef.current;
      const rect = dropdown.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const styles = {};

      // Check if dropdown overflows right edge
      if (rect.right > viewportWidth - 20) {
        const overflow = rect.right - (viewportWidth - 20);
        styles.transform = `translateX(calc(-50% - ${overflow}px)) translateY(0)`;
      }
      
      // Check if dropdown overflows left edge
      if (rect.left < 20) {
        const overflow = 20 - rect.left;
        styles.transform = `translateX(calc(-50% + ${overflow}px)) translateY(0)`;
      }

      setDropdownStyle(styles);
    }
  }, [isActive, isMobile]);

  // Add click handler for calendar month title
  const handleCalendarClick = () => {
    // Navigate to events page using Next.js router
    router.push('/events/current');
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
      {link.href ? (
        <Link 
          href={link.href}
          className={`${styles.dropdowntoggle} ${
            (isActive && !isMobile) || (mobileDropdownOpen && isMobile) ? styles.active : ''
          }`}
          onClick={handleLinkClick}
        >
          {link.label}
          {isMobile && (
            <span className={`${styles.mobileArrow} ${mobileDropdownOpen ? styles.rotated : ''}`}>
              ▼
            </span>
          )}
        </Link>
      ) : (
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
      )}

      <div
        ref={dropdownRef}
        role="menu"
        aria-hidden={isMobile ? !mobileDropdownOpen : !isActive}
        className={`${styles.dropdownmenu} ${
          (isActive && !isMobile) || (mobileDropdownOpen && isMobile) ? styles.show : ''
        } ${link.dropdown?.twoColumns ? styles.twoColumnDropdown : ''} ${link.dropdown?.threeColumns ? styles.threeColumnDropdown : ''} ${link.dropdown?.compactMode ? styles.compactDropdown : ''}`}
        style={dropdownStyle}
        onMouseEnter={() => !isMobile && clearTimeout(timerRef.current)}
        onMouseLeave={() => !isMobile && onLeave()}
      >
        <div className={styles.dropdowncontent}>
          {link.dropdown?.twoColumns || link.dropdown?.threeColumns ? (
            /* Two column layout for Core Medical Services */
            <>
              {link.dropdown.links?.filter(column => column !== null).map((column, columnIndex) => (
                <div key={columnIndex} className={`${styles.dropdownsection} ${styles.twoColumnSection} ${styles.scrollable}`}>
                  <div className={styles.sectionHeader}>
                    <h3 className={styles.dropdownsectiontitle}>{column.title}</h3>
                    {column.subtitle && (
                      <p className={styles.sectionSubtitle}>{column.subtitle}</p>
                    )}
                  </div>
                  <ul>
                    {column.items?.map((item, itemIndex) => (
                      <li key={item.label + '-' + itemIndex}>
                        {item.external ? (
                          <a
                            href={item.href}
                            className={styles.dropdownlink}
                            onClick={handleLinkClick}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className={styles.linkContent}>
                              <span className={styles.linkLabel}>{item.label}</span>
                              {item.description && !link.dropdown?.compactMode && (
                                <span className={styles.linkDescription}>{item.description}</span>
                              )}
                            </div>
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className={styles.dropdownlink}
                            onClick={handleLinkClick}
                          >
                            <div className={styles.linkContent}>
                              <span className={styles.linkLabel}>{item.label}</span>
                              {item.description && !link.dropdown?.compactMode && (
                                <span className={styles.linkDescription}>{item.description}</span>
                              )}
                            </div>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {/* Info section for two column layout */}
              {link.dropdown.info && (
                <div className={`${styles.dropdowninfo} ${styles.scrollable}`}>
                  <div className={styles.dropdowninfocard}>
                    {link.dropdown.info.askDr && (
                      <div className={styles.askdr}>
                        <h4>{link.dropdown.info.askDr.title}</h4>
                        <p>{link.dropdown.info.askDr.description}</p>
                        <button 
                          className={styles.askbutton}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            // Add your Ask Dr. Tess action here
                            window.open('https://forms.office.com/r/R5vkttmxpe', '_blank');
                          }}
                        >
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
                        <p>
                          <strong>Location:</strong>{' '}
                          <a 
                            href={link.dropdown.info.contact.location.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.dropdown.info.contact.location.display}
                          </a>
                        </p>
                      </div>
                    )}
                    {link.dropdown.footerLinks && (
                      <div className={styles.dropdownFooterLinks}>
                        {link.dropdown.footerLinks.map((footerLink, index) => (
                          <Link
                            key={index}
                            href={footerLink.href}
                            className={styles.footerLink}
                            onClick={handleLinkClick}
                          >
                            {footerLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
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
                    Recent News
                  </Link>
                </h3>
                <ul>
                  {(() => {
                    try {
                      const recentNews = getRecentPosts(3);
                      return recentNews.map((post, index) => (
                        <li key={post.id || index}>
                          <Link
                            href={`/news/${post.slug}`}
                            className={styles.dropdownlink}
                            onClick={handleLinkClick}
                          >
                            <div className={styles.newsItem}>
                              <div className={styles.newsTitle}>{post.title}</div>
                              <div className={styles.newsDate}>{formatDate(post.publishedDate)}</div>
                            </div>
                          </Link>
                        </li>
                      ));
                    } catch (error) {
                      console.warn('Error loading recent news:', error);
                      return (
                        <li>
                          <span className={styles.dropdownlink}>No recent news available</span>
                        </li>
                      );
                    }
                  })()
                  }
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
                  <div className={styles.sectionHeader}>
                    <h3 className={styles.dropdownsectiontitle}>{link.dropdown.links[0].title}</h3>
                    {link.dropdown.links[0].subtitle && (
                      <p className={styles.sectionSubtitle}>{link.dropdown.links[0].subtitle}</p>
                    )}
                  </div>
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
                            <div className={styles.linkContent}>
                              <span className={styles.linkLabel}>{item.label}</span>
                              {item.description && (
                                <span className={styles.linkDescription}>{item.description}</span>
                              )}
                            </div>
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
                  <div className={styles.sectionHeader}>
                    <h3 className={styles.dropdownsectiontitle}>{link.dropdown.links[1].title}</h3>
                    {link.dropdown.links[1].subtitle && (
                      <p className={styles.sectionSubtitle}>{link.dropdown.links[1].subtitle}</p>
                    )}
                  </div>
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
                            <div className={styles.linkContent}>
                              <span className={styles.linkLabel}>{item.label}</span>
                              {item.description && (
                                <span className={styles.linkDescription}>{item.description}</span>
                              )}
                            </div>
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
                {/* Footer links for News & Events dropdown */}
                <div className={styles.dropdownFooterLinks}>
                  <Link
                    href="/services/telehealth"
                    className={styles.footerLink}
                    onClick={handleLinkClick}
                  >
                    Telehealth Services
                  </Link>
                  <Link
                    href="/services/cash-pay"
                    className={styles.footerLink}
                    onClick={handleLinkClick}
                  >
                    Cash Pay Options
                  </Link>
                  <Link
                    href="/services/payment-plans"
                    className={styles.footerLink}
                    onClick={handleLinkClick}
                  >
                    Payment Plans
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
                  {link.dropdown.info.quickLinks && (
                    <div className={styles.quickLinks}>
                      <h4>Quick Links</h4>
                      <div className={styles.quickLinksGrid}>
                        {link.dropdown.info.quickLinks.map((quickLink, index) => (
                          <Link
                            key={index}
                            href={quickLink.href}
                            className={styles.quickLink}
                            onClick={handleLinkClick}
                          >
                            {quickLink.label}
                          </Link>
                        ))}
                      </div>
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
                      <p>
                        <strong>Location:</strong>{' '}
                        <a 
                          href={link.dropdown.info.contact.location.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.dropdown.info.contact.location.display}
                        </a>
                      </p>
                    </div>
                  )}
                  {link.dropdown.footerLinks && (
                    <div className={styles.dropdownFooterLinks}>
                      {link.dropdown.footerLinks.map((footerLink, index) => (
                        <Link
                          key={index}
                          href={footerLink.href}
                          className={styles.footerLink}
                          onClick={handleLinkClick}
                        >
                          {footerLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}