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
        {/* Magazine-Style Hero */}
        <section className={styles.magazineHero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContainer}>
            <div className={styles.pageTitle}>
              <h1>News & Events</h1>
              <p>Stay informed with the latest health updates and upcoming community events</p>
            </div>
            <div className={styles.heroGrid}>
              {/* Main Featured Article */}
              {heroPost && (
                <article className={styles.heroFeature}>
                  <div className={styles.heroImageWrapper}>
                    <div className={styles.heroImage}>
                      <div className={styles.placeholderImage}>
                        <span className={styles.imageIcon}>📰</span>
                      </div>
                    </div>
                    <div className={styles.heroCategoryBadge}>{heroPost.category}</div>
                  </div>
                  <div className={styles.heroContent}>
                    <h1 className={styles.heroArticleTitle}>
                      <Link href={`/news/${heroPost.slug}`}>
                        {heroPost.title}
                      </Link>
                    </h1>
                    <p className={styles.heroExcerpt}>{heroPost.excerpt}</p>
                    <div className={styles.heroMeta}>
                      <div className={styles.authorInfo}>
                        <div className={styles.authorAvatar}>
                          <span>{heroPost.author.charAt(0)}</span>
                        </div>
                        <div>
                          <span className={styles.authorName}>{heroPost.author}</span>
                          <span className={styles.publishDate}>{formatDate(heroPost.publishedDate)}</span>
                        </div>
                      </div>
                      <Link href={`/news/${heroPost.slug}`} className={styles.heroReadMore}>
                        Read Article
                        <span className={styles.arrow}>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              )}

              {/* Secondary Featured Articles */}
              <div className={styles.secondaryFeatures}>
                {secondaryFeatured.map(post => (
                  <article key={post.id} className={styles.secondaryCard}>
                    <div className={styles.secondaryImage}>
                      <div className={styles.placeholderImageSmall}>
                        <span>📄</span>
                      </div>
                      <div className={styles.secondaryCategoryBadge}>{post.category}</div>
                    </div>
                    <div className={styles.secondaryContent}>
                      <h3 className={styles.secondaryTitle}>
                        <Link href={`/news/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <div className={styles.secondaryMeta}>
                        <span>{post.author}</span>
                        <span className={styles.dot}>•</span>
                        <span>{getReadingTime(post.content)}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trending Topics Bar */}
        <section className={styles.trendingBar}>
          <div className={styles.container}>
            <div className={styles.trendingContent}>
              <span className={styles.trendingLabel}>🔥 Trending Topics:</span>
              <div className={styles.trendingTags}>
                <span className={styles.trendingTag}>#HealthyLiving</span>
                <span className={styles.trendingTag}>#PreventiveCare</span>
                <span className={styles.trendingTag}>#WomensHealth</span>
                <span className={styles.trendingTag}>#MentalWellness</span>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        {upcomingEvents.length > 0 && (
          <section className={styles.eventsSection}>
            <div className={styles.container}>
              <div className={styles.eventsHeader}>
                <h2 className={styles.eventsTitle}>
                  <span className={styles.eventIcon}>📅</span>
                  Upcoming Events
                </h2>
                <Link href="/events/current" className={styles.viewAllEvents}>
                  View All Events
                  <span className={styles.arrow}>→</span>
                </Link>
              </div>
              
              <div className={styles.eventsGrid}>
                {upcomingEvents.map((event, index) => (
                  <div key={index} className={styles.eventCard}>
                    <div className={styles.eventDate}>
                      <div className={styles.eventDateNumber}>
                        {new Date(event.date).getDate()}
                      </div>
                      <div className={styles.eventDateMonth}>
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                    
                    <div className={styles.eventDetails}>
                      <h3 className={styles.eventName}>
                        {event.href ? (
                          <Link href={event.href}>{event.name}</Link>
                        ) : (
                          event.name
                        )}
                      </h3>
                      
                      <div className={styles.eventMeta}>
                        <span className={styles.eventTime}>{event.timeUntil}</span>
                        {event.isFeatured && (
                          <span className={styles.eventFeatured}>Featured</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter - Enhanced */}
        <section className={styles.filterSection}>
          <div className={styles.container}>
            <div className={styles.filterHeader}>
              <h2 className={styles.filterTitle}>Explore Topics</h2>
              <p className={styles.filterSubtitle}>Filter articles by category</p>
            </div>
            <div className={styles.categoryGrid}>
              {categories.map(category => (
                <button
                  key={category}
                  className={`${styles.categoryCard} ${selectedCategory === category ? styles.activeCategory : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span className={styles.categoryIcon}>
                    {category === 'All' && '📚'}
                    {category === 'Health Tips' && '💡'}
                    {category === 'Practice News' && '🏥'}
                    {category === 'Community' && '👥'}
                    {category === 'Medical Updates' && '🔬'}
                  </span>
                  <span className={styles.categoryName}>{category}</span>
                  <span className={styles.categoryCount}>
                    {category === 'All' 
                      ? blogPosts.length 
                      : blogPosts.filter(p => p.category === category).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts - Card Mosaic Layout */}
        <section className={styles.allPosts}>
          <div className={styles.container}>
            <div className={styles.postsHeader}>
              <h2 className={styles.postsTitle}>
                {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory}`}
              </h2>
              <div className={styles.viewOptions}>
                <button className={styles.viewOption}>
                  <span>📊</span> Grid View
                </button>
                <button className={styles.viewOption}>
                  <span>📝</span> List View
                </button>
              </div>
            </div>

            <div className={styles.postsMosaic}>
              {sortedPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className={`${styles.mosaicCard} ${index % 5 === 0 ? styles.largeCard : ''}`}
                >
                  <Link href={`/news/${post.slug}`} className={styles.cardLink}>
                    <div className={styles.cardImageWrapper}>
                      <div className={styles.cardImage}>
                        <div className={styles.placeholderCardImage}>
                          <span>{index % 2 === 0 ? '🏥' : '💊'}</span>
                        </div>
                      </div>
                      <div className={styles.cardOverlay}>
                        <span className={styles.readMoreIcon}>→</span>
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardCategory}>{post.category}</div>
                      <h3 className={styles.cardTitle}>{post.title}</h3>
                      <p className={styles.cardExcerpt}>{post.excerpt}</p>
                      <div className={styles.cardFooter}>
                        <div className={styles.cardAuthor}>
                          <div className={styles.miniAvatar}>
                            {post.author.charAt(0)}
                          </div>
                          <span>{post.author}</span>
                        </div>
                        <span className={styles.cardDate}>{formatDate(post.publishedDate)}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {sortedPosts.length > 6 && (
              <div className={styles.loadMoreWrapper}>
                <button className={styles.loadMoreButton}>
                  Load More Articles
                  <span className={styles.loadMoreIcon}>↓</span>
                </button>
              </div>
            )}
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