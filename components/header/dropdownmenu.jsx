'use client';

import Link from 'next/link';
import Calendar from '../calendar/calendar';
import { getcalendar } from '../calendar/calendar';
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
        {/* columns 1–2: links (or 1–3 if Events) */}
        <div className={styles.dropdowncontent}>
          {link.label === 'Events' && (
            <div className={styles.dropdownsection}>
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
              </ul>
            </div>
          )}

          {link.dropdown.links.map((section) =>
            section.title === 'past highlights' && link.label === 'Events'
              ? null
              : (
                <div key={section.title} className={styles.dropdownsection}>
                  <h3 className={styles.dropdownsectiontitle}>{section.title}</h3>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className={styles.dropdownlink}
                          onClick={handleLinkClick}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>

        {/* column 3: calendar or info card */}
        {link.label === 'Events' ? (
          <div className={styles.dropdowninfo}>
            <Calendar {...getcalendar(0)} />
            <div>
              <Link
                href="/events/past"
                onClick={handleLinkClick}
                className={styles.pasthighlightslink}
              >
                View past highlights
              </Link>
            </div>
          </div>
        ) : (
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
                <p>
                  <strong>Phone:</strong> {link.dropdown.info.contact.phone}
                </p>
                <p>
                  <strong>Hours:</strong> {link.dropdown.info.contact.hours}
                </p>
                <p>
                  <strong>Location:</strong> {link.dropdown.info.contact.location}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
