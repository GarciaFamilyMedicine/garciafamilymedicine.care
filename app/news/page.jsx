'use client';

import { useState, useMemo } from 'react';
import styles from './page.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import { blogPosts, getFeaturedPosts, getRecentPosts, getAllCategories, formatDate, getReadingTime } from '../../components/blog/blog-data';
import Link from 'next/link';
import EmailSubscription from '../../components/emailsubscription/emailsubscription';
import { rawEvents } from '../../components/calendar/calendar-events';
import { getMonthTheme } from '../../components/calendar/monthly-themes';
import Calendar from '../../components/calendar/calendar';
import { FaCalendarAlt, FaNewspaper, FaClock, FaArrowRight, FaChevronRight, FaTh, FaBars, FaCalendarCheck, FaBookMedical, FaUserMd } from 'react-icons/fa';
import { MdArticle, MdEvent, MdAccessTime } from 'react-icons/md';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const featuredPosts = getFeaturedPosts();
  const categories = ['All', ...getAllCategories()];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const sortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.publishedDate) - new Date(a.publishedDate)
  );

  // Get the most recent featured post for hero
  const heroPost = featuredPosts[0];
  const secondaryFeatured = featuredPosts.slice(1, 3);

  // Process upcoming events
  const upcomingEvents = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Process all events from calendar-events.js
    const allEvents = rawEvents.map(([month, day, year, name, href, isUpcoming, isFeatured]) => {
      const eventDate = new Date(year, month - 1, day); // month-1 because calendar uses 1-12, Date uses 0-11
      
      return {
        name,
        href: href || null,
        date: eventDate,
        isFeatured: isFeatured || false,
        formattedDate: eventDate.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }),
        shortDate: eventDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        timeUntil: getTimeUntilEvent(eventDate),
        isUpcoming: eventDate >= today
      };
    });

    // Filter for upcoming events only and sort chronologically
    return allEvents
      .filter(event => event.isUpcoming)
      .sort((a, b) => a.date - b.date)
      .slice(0, 3); // Show only the next 3 events
  }, []);

  // Helper function to calculate time until event
  function getTimeUntilEvent(eventDate) {
    const now = new Date();
    const diffTime = eventDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays < 7) return `In ${diffDays} days`;
    if (diffDays < 30) return `In ${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) !== 1 ? 's' : ''}`;
    return `In ${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) !== 1 ? 's' : ''}`;
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Professional Medical Header */}
        <section className={styles.pageHeader}>
          <div className={styles.headerContainer}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <FaChevronRight className={styles.breadcrumbIcon} />
              <span>Health Resources</span>
            </nav>
            <h1 className={styles.pageTitle}>Health Resources Center</h1>
            <p className={styles.pageSubtitle}>
              Stay informed with the latest medical news, health tips, and upcoming community health events
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <section className={styles.contentSection}>
          <div className={styles.contentContainer}>
            {/* Tab Navigation */}
            <div className={styles.tabNavigation}>
              <button className={`${styles.tabButton} ${styles.active}`}>
                <MdArticle className={styles.tabIcon} />
                Health Articles
              </button>
              <button className={styles.tabButton}>
                <MdEvent className={styles.tabIcon} />
                Upcoming Events
              </button>
            </div>

            {/* Featured Content Banner */}
            {upcomingEvents.length > 0 && (
              <div className={styles.alertBanner}>
                <div className={styles.alertIcon}>
                  <FaCalendarCheck />
                </div>
                <div className={styles.alertContent}>
                  <strong>Upcoming Event:</strong> {upcomingEvents[0].name} - {upcomingEvents[0].shortDate}
                  {upcomingEvents[0].href && (
                    <Link href={upcomingEvents[0].href} className={styles.alertLink}>
                      Learn More <FaChevronRight />
                    </Link>
                  )}
                </div>
              </div>
            )}

            <div className={styles.contentLayout}>
              {/* Sidebar */}
              <aside className={styles.sidebar}>
                {/* Calendar Widget */}
                <div className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitle}>
                    <FaCalendarAlt /> Event Calendar
                  </h3>
                  <div className={styles.calendarContainer}>
                    <Calendar />
                  </div>
                  <Link href="/events/current" className={styles.widgetLink}>
                    View All Events <FaChevronRight />
                  </Link>
                </div>

                {/* Quick Links */}
                <div className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitle}>
                    <FaBookMedical /> Quick Links
                  </h3>
                  <ul className={styles.quickLinks}>
                    <li>
                      <Link href="/services/telehealth">
                        <FaUserMd /> Telehealth Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <FaCalendarCheck /> Schedule Appointment
                      </Link>
                    </li>
                    <li>
                      <Link href="/meetthedoctor">
                        <FaUserMd /> Meet Dr. Garcia
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Categories */}
                <div className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitle}>Categories</h3>
                  <div className={styles.categoryList}>
                    {categories.map(category => (
                      <button
                        key={category}
                        className={`${styles.categoryItem} ${selectedCategory === category ? styles.active : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        <span>{category}</span>
                        <span className={styles.count}>
                          {category === 'All' 
                            ? blogPosts.length 
                            : blogPosts.filter(p => p.category === category).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className={styles.mainContent}>
                {/* Featured Article */}
                {heroPost && (
                  <article className={styles.featuredArticle}>
                    <div className={styles.featuredImage}>
                      <span className={styles.categoryBadge}>{heroPost.category}</span>
                    </div>
                    <div className={styles.featuredContent}>
                      <h2 className={styles.featuredTitle}>
                        <Link href={`/news/${heroPost.slug}`}>
                          {heroPost.title}
                        </Link>
                      </h2>
                      <p className={styles.featuredExcerpt}>{heroPost.excerpt}</p>
                      <div className={styles.articleMeta}>
                        <span className={styles.author}>{heroPost.author}</span>
                        <span className={styles.date}>{formatDate(heroPost.publishedDate)}</span>
                        <span className={styles.readTime}>{getReadingTime(heroPost.content)}</span>
                      </div>
                    </div>
                  </article>
                )}

                {/* Recent Articles */}
                <div className={styles.recentArticles}>
                  <h2 className={styles.sectionTitle}>
                    {selectedCategory === 'All' ? 'Recent Articles' : selectedCategory}
                  </h2>
                  
                  <div className={styles.articleGrid}>
                    {sortedPosts.slice(1).map((post) => (
                      <article key={post.id} className={styles.articleCard}>
                        <div className={styles.cardImage}>
                          <span className={styles.categoryLabel}>{post.category}</span>
                        </div>
                        <div className={styles.cardContent}>
                          <h3 className={styles.cardTitle}>
                            <Link href={`/news/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>
                          <p className={styles.cardExcerpt}>{post.excerpt}</p>
                          <div className={styles.cardMeta}>
                            <span>{formatDate(post.publishedDate)}</span>
                            <span>{getReadingTime(post.content)}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* Load More */}
                  {sortedPosts.length > 6 && (
                    <div className={styles.loadMore}>
                      <button className={styles.loadMoreButton}>
                        Load More Articles
                      </button>
                    </div>
                  )}
                </div>

                {/* Upcoming Events Section */}
                {upcomingEvents.length > 0 && (
                  <div className={styles.eventsSection}>
                    <h2 className={styles.sectionTitle}>
                      <FaCalendarAlt /> Upcoming Events
                    </h2>
                    <div className={styles.eventsList}>
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className={styles.eventItem}>
                          <div className={styles.eventDate}>
                            <span className={styles.day}>{new Date(event.date).getDate()}</span>
                            <span className={styles.month}>
                              {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                            </span>
                          </div>
                          <div className={styles.eventInfo}>
                            <h4 className={styles.eventTitle}>
                              {event.href ? (
                                <Link href={event.href}>{event.name}</Link>
                              ) : (
                                event.name
                              )}
                            </h4>
                            <div className={styles.eventMeta}>
                              <span><MdAccessTime /> {event.timeUntil}</span>
                              {event.isFeatured && (
                                <span className={styles.featured}>Featured Event</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup - Enhanced */}
        <section className={styles.newsletterSection}>
          <div className={styles.newsletterBackground}>
            <div className={styles.newsletterPattern}></div>
          </div>
          <div className={styles.container}>
            <div className={styles.newsletterCard}>
              <div className={styles.newsletterIcon}>📬</div>
              <h2 className={styles.newsletterTitle}>Stay Informed, Stay Healthy</h2>
              <p className={styles.newsletterText}>
                Get the latest health tips, practice updates, and wellness insights delivered to your inbox every week.
              </p>
              <EmailSubscription 
                source="blog_newsletter"
                buttonText="Subscribe Now"
                placeholder="Enter your email"
                showLabels={false}
                customStyles={{
                  form: styles.newsletterForm,
                  input: styles.newsletterInput,
                  button: styles.newsletterButton,
                  message: styles.newsletterMessage
                }}
              />
              <p className={styles.newsletterNote}>
                <span className={styles.lockIcon}>🔒</span>
                Your privacy is our priority. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}