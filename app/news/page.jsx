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
  FaChartBar, FaChevronLeft, FaUser, FaCalendarDay, FaHistory,
  FaChevronUp, FaChevronDown
} from 'react-icons/fa';
import { 
  MdHealthAndSafety, MdMedicalServices
} from 'react-icons/md';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [upcomingEventIndex, setUpcomingEventIndex] = useState(0);
  const [pastEventIndex, setPastEventIndex] = useState(0);
  const [recentPostsIndex, setRecentPostsIndex] = useState(0);
  const [eventsCollapsed, setEventsCollapsed] = useState(false);
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

  // Process all events
  const eventsData = useMemo(() => {
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

    const upcoming = allEvents
      .filter(event => event.date >= today)
      .sort((a, b) => a.date - b.date);
    
    const past = allEvents
      .filter(event => event.date < today)
      .sort((a, b) => b.date - a.date);

    // Combine all events with a separator
    const allEventsWithType = [
      ...upcoming.map(e => ({ ...e, type: 'upcoming' })),
      ...past.map(e => ({ ...e, type: 'past' }))
    ];

    return {
      all: allEventsWithType,
      upcoming: upcoming,
      past: past,
      hasEvents: allEventsWithType.length > 0,
      totalCount: allEventsWithType.length
    };
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
                  <div className={styles.recentPostsInnerNav}>
                    <button 
                      onClick={() => setRecentPostsIndex(Math.max(0, recentPostsIndex - 5))}
                      disabled={recentPostsIndex === 0}
                      className={styles.recentInnerNavBtn}
                    >
                      <FaChevronLeft />
                    </button>
                    <span className={styles.recentPostsCounter}>
                      {recentPostsIndex + 1}-{Math.min(recentPostsIndex + 5, sortedPosts.length)} of {sortedPosts.length}
                    </span>
                    <button 
                      onClick={() => setRecentPostsIndex(Math.min(sortedPosts.length - 5, recentPostsIndex + 5))}
                      disabled={recentPostsIndex + 5 >= sortedPosts.length}
                      className={styles.recentInnerNavBtn}
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                  <div className={styles.recentPostsList}>
                    {sortedPosts.slice(recentPostsIndex, recentPostsIndex + 5).map((post, index) => (
                      <div key={post.id} className={styles.recentPostItem}>
                        <Link 
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPostIndex(recentPostsIndex + index);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`${styles.recentPostTitle} ${(recentPostsIndex + index) === currentPostIndex ? styles.currentPost : ''}`}
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
              {/* Events Box - Two Columns with Independent Navigation */}
              <div className={`${styles.portalBox} ${eventsCollapsed ? styles.collapsedBox : ''}`}>
                <div className={styles.boxHeader}>
                  <FaCalendarAlt className={styles.headerIcon} />
                  Events
                  <button 
                    onClick={() => setEventsCollapsed(!eventsCollapsed)}
                    className={styles.collapseBtn}
                  >
                    {eventsCollapsed ? <FaChevronDown /> : <FaChevronUp />}
                  </button>
                </div>
                {!eventsCollapsed && (
                <div className={styles.boxContent}>
                  {eventsData.hasEvents ? (
                    <div className={styles.eventsTwoColumns}>
                      {/* Upcoming Events Column */}
                      <div className={styles.eventColumn}>
                        <div className={styles.eventColumnHeader}>
                          <h4 className={styles.eventColumnTitle}>
                            <FaCalendarDay /> Upcoming
                          </h4>
                          <div className={styles.eventColumnNav}>
                            <button 
                              onClick={() => setUpcomingEventIndex(Math.max(0, upcomingEventIndex - 2))}
                              disabled={upcomingEventIndex === 0}
                              className={styles.eventNavBtn}
                            >
                              <FaChevronLeft />
                            </button>
                            <button 
                              onClick={() => setUpcomingEventIndex(Math.min(eventsData.upcoming.length - 2, upcomingEventIndex + 2))}
                              disabled={upcomingEventIndex + 2 >= eventsData.upcoming.length}
                              className={styles.eventNavBtn}
                            >
                              <FaChevronRight />
                            </button>
                          </div>
                        </div>
                        <div className={styles.eventColumnContent}>
                          {eventsData.upcoming.length > 0 ? (
                            eventsData.upcoming.slice(upcomingEventIndex, upcomingEventIndex + 2).map((event, index) => (
                              <div key={index} className={styles.eventItem}>
                                <div className={styles.eventItemDate}>
                                  <div className={styles.eventItemMonth}>
                                    {event.date.toLocaleDateString('en-US', { month: 'short' })}
                                  </div>
                                  <div className={styles.eventItemDay}>
                                    {event.date.getDate()}
                                  </div>
                                </div>
                                <div className={styles.eventItemInfo}>
                                  {event.href ? (
                                    <Link href={event.href} className={styles.eventItemTitle}>
                                      {event.name}
                                    </Link>
                                  ) : (
                                    <span className={styles.eventItemTitle}>{event.name}</span>
                                  )}
                                  <div className={styles.eventItemMeta}>
                                    <FaClock /> {event.date.toLocaleDateString('en-US', { weekday: 'short' })}
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className={styles.noColumnEvents}>No upcoming events</p>
                          )}
                        </div>
                      </div>

                      {/* Past Events Column */}
                      <div className={styles.eventColumn}>
                        <div className={styles.eventColumnHeader}>
                          <h4 className={styles.eventColumnTitle}>
                            <FaHistory /> Past Highlights
                          </h4>
                          <div className={styles.eventColumnNav}>
                            <button 
                              onClick={() => setPastEventIndex(Math.max(0, pastEventIndex - 2))}
                              disabled={pastEventIndex === 0}
                              className={styles.eventNavBtn}
                            >
                              <FaChevronLeft />
                            </button>
                            <button 
                              onClick={() => setPastEventIndex(Math.min(eventsData.past.length - 2, pastEventIndex + 2))}
                              disabled={pastEventIndex + 2 >= eventsData.past.length}
                              className={styles.eventNavBtn}
                            >
                              <FaChevronRight />
                            </button>
                          </div>
                        </div>
                        <div className={styles.eventColumnContent}>
                          {eventsData.past.length > 0 ? (
                            eventsData.past.slice(pastEventIndex, pastEventIndex + 2).map((event, index) => (
                              <div key={index} className={`${styles.eventItem} ${styles.pastEventItem}`}>
                                <div className={styles.eventItemDate}>
                                  <div className={styles.eventItemMonth}>
                                    {event.date.toLocaleDateString('en-US', { month: 'short' })}
                                  </div>
                                  <div className={styles.eventItemDay}>
                                    {event.date.getDate()}
                                  </div>
                                </div>
                                <div className={styles.eventItemInfo}>
                                  {event.href ? (
                                    <Link href={event.href} className={styles.eventItemTitle}>
                                      {event.name}
                                    </Link>
                                  ) : (
                                    <span className={styles.eventItemTitle}>{event.name}</span>
                                  )}
                                  <div className={styles.eventItemMeta}>
                                    {event.formattedDate}
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className={styles.noColumnEvents}>No past events</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className={styles.noEvents}>No events to display at this time.</p>
                  )}
                </div>
                )}
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

                    {/* Featured Image Placeholder */}
                    <div 
                      className={styles.featuredImagePlaceholder}
                      data-image="News & Events Portal Launch Announcement"
                    >
                      <span>Featured Image: {currentPost.title}</span>
                    </div>

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
                      <span className={styles.statValue}>{eventsData.upcoming.length}</span>
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