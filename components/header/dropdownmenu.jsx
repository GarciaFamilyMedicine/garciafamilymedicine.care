'use client';

import Link from 'next/link';
import Calendar from '../calendar/calendar';
import styles from './header.module.css';

export default function DropdownMenu({
  link,
  isActive,
  onEnter,
  onLeave,
  setIsMenuOpen,
  timerRef,
}) {
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
        {/* columns 1–2: links */}
        <div className={styles.dropdowncontent}>
          {link.dropdown.links.map((section) => (
            <div key={section.title} className={styles.dropdownsection}>
              <h3 className={styles.dropdownsectiontitle}>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={styles.dropdownlink}
                      onClick={() => {
                        setIsMenuOpen(false);
                        onLeave();
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* column 3: calendar or info card */}
        {link.dropdown.calendar ? (
          <Calendar {...link.dropdown.calendar} />
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
