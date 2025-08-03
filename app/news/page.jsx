'use client';

import { useState, useMemo } from 'react';
import styles from './page.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import { blogPosts, getFeaturedPosts, getAllCategories, formatDate } from '../../components/blog/blog-data';
import Link from 'next/link';
import { rawEvents } from '../../components/calendar/calendar-events';
import Calendar from '../../components/calendar/calendar';
import { 
  FaCalendarAlt, FaNewspaper, FaTags, FaChevronRight,
  FaClock, FaMapMarkerAlt, FaUsers, FaFolder,
  FaStethoscope, FaHeartbeat, FaBrain, FaBullhorn,
  FaChartBar, FaChevronLeft, FaUser, FaCalendarDay, FaHistory
} from 'react-icons/fa';
import { 
  MdHealthAndSafety, MdMedicalServices
} from 'react-icons/md';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const categories = ['All', ...getAllCategories()];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const sortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.publishedDate) - new Date(a.publishedDate)
  );

  // Get the current post
  const currentPost = sortedPosts[currentPostIndex];

  // Get category icons
  const getCategoryIcon = (category) => {
    const icons = {
      'Mental Health': <FaBrain />,
      'Wellness': <FaHeartbeat />,
      'News': <FaNewspaper />,
      'CoreLift': <MdMedicalServices />,
      'General Health': <FaStethoscope />,
      'Preventive Care': <MdHealthAndSafety />,
      'Updates': <FaBullhorn />,
      'Community': <FaUsers />,
      'Default': <FaFolder />
    };
    return icons[category] || icons['Default'];
  };

  // Process upcoming events
  const upcomingEvents = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const allEvents = rawEvents.map(([month, day, year, name, href, isUpcoming, isFeatured]) => {
      const eventDate = new Date(year, month - 1, day);
      
      return {
        name,
        href: href || null,
        date: eventDate,
        isFeatured: isFeatured || false,
        formattedDate: eventDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      };
    });

    return allEvents
      .filter(event => event.date >= today)
      .sort((a, b) => a.date - b.date)
      .slice(0, 5); // Show next 5 events
  }, []);

  const handleNextPost = () => {
    if (currentPostIndex < sortedPosts.length - 1) {
      setCurrentPostIndex(currentPostIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousPost = () => {
    if (currentPostIndex > 0) {
      setCurrentPostIndex(currentPostIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className={styles.portalMain}>
        <div className={styles.portalContainer}>
          {/* Portal Header */}
          <div className={styles.portalHeader}>
            <h1>News & Events Portal</h1>
            <div className={styles.portalNav}>
              <Link href="/events/current">
                <FaCalendarAlt /> Upcoming
              </Link>
              <Link href="/events/past">
                <FaHistory /> Past Events
              </Link>
            </div>
          </div>

          {/* Portal Layout */}
          <div className={styles.portalLayout}>
            {/* Left Column */}
            <div className={styles.leftColumn}>
              {/* Recent Posts Box */}
              <div className={styles.portalBox}>
                <div className={styles.boxHeader}>
                  <FaNewspaper className={styles.headerIcon} />
                  Recent Posts
                </div>
                <div className={styles.boxContent}>
                  <div className={styles.recentPostsList}>
                    {sortedPosts.slice(0, 5).map((post, index) => (
                      <div key={post.id} className={styles.recentPostItem}>
                        <Link 
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPostIndex(index);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`${styles.recentPostTitle} ${index === currentPostIndex ? styles.currentPost : ''}`}
                        >
                          {post.title}
                        </Link>
                        <div className={styles.recentPostDate}>
                          {formatDate(post.publishedDate)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Categories Box */}
              <div className={styles.portalBox}>
                <div className={styles.boxHeader}>
                  <FaTags className={styles.headerIcon} />
                  Categories
                </div>
                <div className={styles.boxContent}>
                  <ul className={styles.categoryList}>
                    {categories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => {
                            setSelectedCategory(category);
                            setCurrentPostIndex(0);
                          }}
                          className={selectedCategory === category ? styles.activeCategory : ''}
                        >
                          <span className={styles.categoryName}>{category}</span>
                          <span className={styles.categoryCount}>
                            {category === 'All' 
                              ? blogPosts.length 
                              : blogPosts.filter(p => p.category === category).length}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Center Column - Main Blog Post */}
            <div className={styles.centerColumn}>
              {/* Upcoming Events Box */}
              <div className={styles.portalBox}>
                <div className={styles.boxHeader}>
                  <FaCalendarAlt className={styles.headerIcon} />
                  Upcoming Events
                </div>
                <div className={styles.boxContent}>
                  {upcomingEvents.length > 0 ? (
                    <div className={styles.upcomingEventsGrid}>
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className={styles.upcomingEventCard}>
                          <div className={styles.eventDateBadge}>
                            <div className={styles.eventMonth}>
                              {event.date.toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                            <div className={styles.eventDay}>
                              {event.date.getDate()}
                            </div>
                          </div>
                          <div className={styles.eventInfo}>
                            <Link href="/news" className={styles.eventTitle}>
                              {event.name}
                            </Link>
                            <div className={styles.eventTime}>
                              <FaClock /> {event.date.toLocaleDateString('en-US', { weekday: 'long' })}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className={styles.noEvents}>No upcoming events at this time.</p>
                  )}
                </div>
              </div>

              {/* Main Blog Post */}
              {currentPost && (
                <div className={styles.portalBox}>
                  <div className={styles.blogPostMain}>
                    {/* Post Header */}
                    <header className={styles.postHeader}>
                      <h1 className={styles.postTitle}>{currentPost.title}</h1>
                      <div className={styles.postMeta}>
                        <span className={styles.metaItem}>
                          <FaUser /> {currentPost.author || 'Dr. Tess Garcia'}
                        </span>
                        <span className={styles.metaItem}>
                          <FaCalendarDay /> {formatDate(currentPost.publishedDate)}
                        </span>
                        <span className={styles.metaItem}>
                          <FaTags /> {currentPost.category}
                        </span>
                      </div>
                    </header>

                    {/* Post Content */}
                    <div className={styles.postBody}>
                      {currentPost.content ? (
                        <div 
                          className={styles.postContentFull}
                          dangerouslySetInnerHTML={{ __html: currentPost.content }}
                        />
                      ) : (
                        <div className={styles.postContentFull}>
                          <p>{currentPost.excerpt}</p>
                        </div>
                      )}
                    </div>

                    {/* Post Navigation */}
                    <div className={styles.postNavigation}>
                      <button 
                        onClick={handlePreviousPost}
                        disabled={currentPostIndex === 0}
                        className={styles.navButton}
                      >
                        <FaChevronLeft /> Previous Post
                      </button>
                      <span className={styles.postCounter}>
                        {currentPostIndex + 1} of {sortedPosts.length}
                      </span>
                      <button 
                        onClick={handleNextPost}
                        disabled={currentPostIndex === sortedPosts.length - 1}
                        className={styles.navButton}
                      >
                        Next Post <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className={styles.rightColumn}>
              {/* Calendar */}
              <div className={styles.portalBox}>
                <div className={styles.boxHeader}>
                  <FaCalendarAlt className={styles.headerIcon} />
                  Calendar
                </div>
                <div className={styles.boxContent}>
                  <div className={styles.calendarContainer}>
                    <Calendar />
                  </div>
                </div>
              </div>

              {/* Portal Stats Box */}
              <div className={styles.portalBox}>
                <div className={styles.boxHeader}>
                  <FaChartBar className={styles.headerIcon} />
                  Portal Statistics
                </div>
                <div className={styles.boxContent}>
                  <div className={styles.statsList}>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Total Articles</span>
                      <span className={styles.statValue}>{blogPosts.length}</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Categories</span>
                      <span className={styles.statValue}>{categories.length - 1}</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Upcoming Events</span>
                      <span className={styles.statValue}>{upcomingEvents.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}