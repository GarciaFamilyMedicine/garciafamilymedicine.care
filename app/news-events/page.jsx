'use client';

import styles from '../learn/service.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import { FaNewspaper, FaCalendarAlt, FaClock, FaHistory, FaBookmark, FaUsers } from 'react-icons/fa';

export default function NewsEventsMainPage() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>News & Events</h1>
            <p className={styles.heroSubtitle}>Stay Connected with Garcia Family Medicine Community</p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introSection}>
            <div className={styles.container}>
              <p className={styles.leadText}>
                Stay informed about the latest health news, practice updates, and community events. We're committed to keeping you connected with important healthcare information and opportunities to engage with your community.
              </p>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Latest News & Updates</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaNewspaper className={styles.serviceIcon} />
                  <h3><Link href="/news">Recent News</Link></h3>
                  <p>Latest healthcare news, practice updates, and health tips from our medical team</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaBookmark className={styles.serviceIcon} />
                  <h3><Link href="/news">Featured Articles</Link></h3>
                  <p>In-depth articles on health topics, wellness strategies, and medical breakthroughs</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaUsers className={styles.serviceIcon} />
                  <h3><Link href="/news">Community Health</Link></h3>
                  <p>Local health initiatives, community partnerships, and public health updates</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Events & Calendar</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaCalendarAlt className={styles.serviceIcon} />
                  <h3><Link href="/events/current">Upcoming Events</Link></h3>
                  <p>Health seminars, wellness workshops, and community health events scheduled ahead</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaClock className={styles.serviceIcon} />
                  <h3><Link href="/events/current">Current Events</Link></h3>
                  <p>Ongoing health programs, support groups, and educational series currently available</p>
                </div>
                <div className={styles.serviceCard}>
                  <FaHistory className={styles.serviceIcon} />
                  <h3><Link href="/events/past">Past Events</Link></h3>
                  <p>Highlights from previous health events, workshops, and community health initiatives</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.approachSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Stay Connected</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <h3>Health Education</h3>
                  <p>Stay informed about the latest health research, preventive care strategies, and wellness tips to maintain optimal health.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Practice Updates</h3>
                  <p>Receive important updates about our services, new programs, policy changes, and practice announcements.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Community Events</h3>
                  <p>Join health seminars, wellness workshops, and community health initiatives to connect with others and learn from experts.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Seasonal Health</h3>
                  <p>Get timely information about seasonal health concerns, vaccination schedules, and seasonal wellness strategies.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Health Awareness</h3>
                  <p>Learn about health awareness months, screening recommendations, and prevention campaigns throughout the year.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Patient Resources</h3>
                  <p>Access valuable resources, health tools, and educational materials to support your health and wellness journey.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.faqSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Stay Informed</h2>
              <div className={styles.faqGrid}>
                <div className={styles.faqItem}>
                  <h3>How often do you publish new content?</h3>
                  <p>We regularly update our news section with health tips, practice updates, and community information to keep you informed.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Can I sign up for event notifications?</h3>
                  <p>Yes! Subscribe to our newsletter to receive updates about upcoming health events, workshops, and community programs.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Are events free to attend?</h3>
                  <p>Most of our community health events and educational workshops are free. Specific event details will include any costs or registration requirements.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Can I suggest topics for articles or events?</h3>
                  <p>Absolutely! We welcome suggestions for health topics, educational content, or community health events. Contact our office with your ideas.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}