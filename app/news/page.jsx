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
import { FaCalendarAlt, FaNewspaper, FaClock, FaArrowRight, FaFilter, FaThLarge, FaList } from 'react-icons/fa';

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
        {/* Premium HUD Header */}
        <section className={styles.hudHeader}>
          <div className={styles.hudOverlay}></div>
          <div className={styles.hudContainer}>
            <div className={styles.hudTitle}>
              <FaNewspaper className={styles.hudIcon} />
              <h1>News & Events Portal</h1>
              <p>Your Health Information Hub</p>
            </div>
            <div className={styles.hudStats}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>{blogPosts.length}</span>
                <span className={styles.statLabel}>Articles</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>{upcomingEvents.length}</span>
                <span className={styles.statLabel}>Upcoming Events</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>{categories.length - 1}</span>
                <span className={styles.statLabel}>Categories</span>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Portal Dashboard */}
        <section className={styles.portalDashboard}>
          <div className={styles.portalContainer}>
            {/* Left Sidebar - Calendar & Quick Links */}
            <aside className={styles.portalSidebar}>
              {/* Calendar Widget */}
              <div className={styles.calendarWidget}>
                <div className={styles.widgetHeader}>
                  <FaCalendarAlt className={styles.widgetIcon} />
                  <h3>Event Calendar</h3>
                </div>
                <div className={styles.calendarWrapper}>
                  <Calendar />
                </div>
                <Link href="/events/current" className={styles.viewAllLink}>
                  View All Events <FaArrowRight />
                </Link>
              </div>

              {/* Quick Stats */}
              <div className={styles.quickStats}>
                <h3>Quick Stats</h3>
                <div className={styles.statsList}>
                  <div className={styles.statItem}>
                    <span className={styles.statIcon}>📅</span>
                    <div>
                      <span className={styles.statValue}>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
                      <span className={styles.statDesc}>Today's Date</span>
                    </div>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statIcon}>🔥</span>
                    <div>
                      <span className={styles.statValue}>{featuredPosts.length}</span>
                      <span className={styles.statDesc}>Featured Articles</span>
                    </div>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statIcon}>⏰</span>
                    <div>
                      <span className={styles.statValue}>{upcomingEvents[0]?.timeUntil || 'No events'}</span>
                      <span className={styles.statDesc}>Next Event</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className={styles.portalMain}>
              {/* Events Strip */}
              {upcomingEvents.length > 0 && (
                <div className={styles.eventsStrip}>
                  <div className={styles.stripHeader}>
                    <h2><FaCalendarAlt /> Upcoming Events</h2>
                    <span className={styles.liveIndicator}>
                      <span className={styles.liveDot}></span>
                      LIVE
                    </span>
                  </div>
                  <div className={styles.eventsScroll}>
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className={styles.eventChip}>
                        <div className={styles.eventChipDate}>
                          <span className={styles.dateDay}>{new Date(event.date).getDate()}</span>
                          <span className={styles.dateMonth}>{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                        </div>
                        <div className={styles.eventChipInfo}>
                          <h4>
                            {event.href ? (
                              <Link href={event.href}>{event.name}</Link>
                            ) : (
                              event.name
                            )}
                          </h4>
                          <span className={styles.eventChipTime}>
                            <FaClock /> {event.timeUntil}
                          </span>
                        </div>
                        {event.isFeatured && (
                          <span className={styles.featuredBadge}>Featured</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Featured News Grid */}
              <div className={styles.featuredSection}>
                <h2 className={styles.sectionTitle}>
                  <FaNewspaper /> Featured Stories
                </h2>
                <div className={styles.featuredGrid}>
                  {heroPost && (
                    <article className={styles.mainFeature}>
                      <div className={styles.featureImage}>
                        <div className={styles.imagePlaceholder}>
                          <FaNewspaper />
                        </div>
                        <span className={styles.categoryTag}>{heroPost.category}</span>
                      </div>
                      <div className={styles.featureContent}>
                        <h3>
                          <Link href={`/news/${heroPost.slug}`}>
                            {heroPost.title}
                          </Link>
                        </h3>
                        <p>{heroPost.excerpt}</p>
                        <div className={styles.featureMeta}>
                          <span>{heroPost.author}</span>
                          <span>{formatDate(heroPost.publishedDate)}</span>
                        </div>
                      </div>
                    </article>
                  )}
                  
                  <div className={styles.secondaryGrid}>
                    {secondaryFeatured.map(post => (
                      <article key={post.id} className={styles.secondaryFeature}>
                        <div className={styles.secondaryImage}>
                          <FaNewspaper />
                        </div>
                        <div className={styles.secondaryInfo}>
                          <span className={styles.miniCategory}>{post.category}</span>
                          <h4>
                            <Link href={`/news/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h4>
                          <span className={styles.readTime}>{getReadingTime(post.content)}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category Filter Bar */}
              <div className={styles.filterBar}>
                <div className={styles.filterHeader}>
                  <FaFilter className={styles.filterIcon} />
                  <h3>Filter by Category</h3>
                </div>
                <div className={styles.categoryTabs}>
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`${styles.categoryTab} ${selectedCategory === category ? styles.activeTab : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span className={styles.tabName}>{category}</span>
                      <span className={styles.tabCount}>
                        {category === 'All' 
                          ? blogPosts.length 
                          : blogPosts.filter(p => p.category === category).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Articles Grid */}
              <div className={styles.articlesSection}>
                <div className={styles.articlesHeader}>
                  <h2>
                    {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory}`}
                  </h2>
                  <div className={styles.viewToggle}>
                    <button className={`${styles.viewBtn} ${styles.active}`}>
                      <FaThLarge />
                    </button>
                    <button className={styles.viewBtn}>
                      <FaList />
                    </button>
                  </div>
                </div>
                
                <div className={styles.articlesGrid}>
                  {sortedPosts.map((post, index) => (
                    <article key={post.id} className={styles.articleCard}>
                      <div className={styles.articleImage}>
                        <div className={styles.imagePlaceholder}>
                          {index % 2 === 0 ? '🏥' : '💊'}
                        </div>
                        <span className={styles.articleCategory}>{post.category}</span>
                      </div>
                      <div className={styles.articleContent}>
                        <h3>
                          <Link href={`/news/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <p>{post.excerpt}</p>
                        <div className={styles.articleMeta}>
                          <div className={styles.authorInfo}>
                            <span className={styles.authorAvatar}>
                              {post.author.charAt(0)}
                            </span>
                            <span>{post.author}</span>
                          </div>
                          <span className={styles.articleDate}>
                            {formatDate(post.publishedDate)}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More */}
                {sortedPosts.length > 6 && (
                  <div className={styles.loadMoreSection}>
                    <button className={styles.loadMoreBtn}>
                      Load More Articles
                    </button>
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