'use client';

import Link from 'next/link';
import Calendar from '../calendar/calendar';
import { getEventsData } from '../calendar/calendar-events';
import styles from './dropdownmenu.module.css';

export default function DropdownMenu({
  link,
  isActive,
  onEnter,
  onLeave,
  setIsMenuOpen,
  timerRef,
}) {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    onLeave();
  };

  // Handle simple links (without dropdowns)
  if (!link.dropdown) {
    return (
      <Link
        href={link.href}
        className={styles.navLink}
        onClick={handleLinkClick}
      >
        {link.label}
      </Link>
    );
  }

  // Special case: News & Events - use dynamic layout
  const isEvents = link.label === 'News & Events';
  const eventsData = isEvents ? getEventsData() : null;
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={styles.dropdowncontainer}
      onMouseEnter={() => onEnter(link.label)}
      onMouseLeave={onLeave}
    >
      <button
        type="button"
        className={`${styles.dropdowntoggle} ${isActive ? styles.active : ''}`}
        aria-haspopup="true"
        aria-expanded={isActive}
        tabIndex={0}
      >
        {link.label}
      </button>

      <div
        role="menu"
        aria-hidden={!isActive}
        className={`${styles.dropdownmenu} ${isActive ? styles.show : ''}`}
        onMouseEnter={() => clearTimeout(timerRef.current)}
        onMouseLeave={onLeave}
      >
        {/* Three columns, each with its own scrollable section */}
        <div className={styles.dropdowncontent}>
          {/* LEFT COLUMN - NEWS */}
          <div className={`${styles.dropdownsection} ${styles.scrollable}`}>
            {isEvents ? (
              <>
                <h3 className={styles.dropdownsectiontitle}>News</h3>
                <ul>
                  <li>
                    <Link
                      href="/news"
                      className={styles.dropdownlink}
                      onClick={handleLinkClick}
                    >
                      View All News
                    </Link>
                  </li>
                  {/* Future: Add mapped news blog posts here */}
                </ul>
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
                <h3 className={styles.dropdownsectiontitle}>Upcoming Events</h3>
                <ul>
                  {eventsData?.upcomingEvents?.length ? (
                    <>
                      {eventsData.upcomingEvents.slice(0, 3).map((event) => {
                        // Format date without year for current-year events
                        const displayDate = event.date.endsWith(`, ${currentYear}`)
                          ? event.date.replace(`, ${currentYear}`, '')
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
                      {eventsData.upcomingEvents.length > 3 && (
                        <li>
                          <Link
                            href="/events"
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
                <Calendar />
                <div>
                  <Link
                    href="/events/past"
                    onClick={handleLinkClick}
                    className={styles.pasthighlightslink}
                  >
                    View past highlights
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
                      {/* Fixed phone number rendering */}
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