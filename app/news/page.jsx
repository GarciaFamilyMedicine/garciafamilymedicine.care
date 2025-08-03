'use client';

import { useState, useMemo } from 'react';
import styles from './page.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import { blogPosts, getFeaturedPosts, getRecentPosts, getAllCategories, formatDate, getReadingTime } from '../../components/blog/blog-data';
import Link from 'next/link';
import EmailSubscription from '../../components/emailsubscription/emailsubscription';
import { rawEvents } from '../../components/calendar/calendar-events';
import Calendar from '../../components/calendar/calendar';
import { 
  FaCalendarAlt, FaNewspaper, FaClock, FaArrowRight, FaTags, 
  FaUser, FaUsers, FaComments, FaEye, FaBookmark, FaRss, FaBullhorn,
  FaStethoscope, FaHeartbeat, FaChartLine, FaMedkit, FaUserMd,
  FaPills, FaBrain, FaHospital, FaNotesMedical, FaVirus,
  FaThumbsUp, FaFolder, FaEnvelope, FaSearch, FaHome, FaCalendarCheck
} from 'react-icons/fa';
import { 
  MdArticle, MdEvent, MdAccessTime, MdLocalHospital, 
  MdHealthAndSafety, MdMedicalServices, MdFormatQuote,
  MdTrendingUp, MdNotifications, MdAnnouncement
} from 'react-icons/md';

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
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: eventDate.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
        })
      };
    });

    return allEvents
      .filter(event => event.date >= today)
      .sort((a, b) => a.date - b.date)
      .slice(0, 8);
  }, []);

  // Mock stats for the portal
  const portalStats = {
    totalPosts: blogPosts.length,
    totalComments: Math.floor(blogPosts.length * 2.7),
    totalViews: Math.floor(blogPosts.length * 347),
    activeUsers: 1247,
    todayVisitors: 89
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Portal Header */}
        <div className={styles.portalHeader}>
          <div className={styles.portalContainer}>
            <div className={styles.portalLogo}>
              <FaHospital className={styles.logoIcon} />
              <div>
                <h1 className={styles.portalTitle}>Garcia Family Medicine Portal</h1>
                <p className={styles.portalTagline}>Your Health Information Hub</p>
              </div>
            </div>
            
            {/* Quick Links Bar */}
            <div className={styles.quickLinks}>
              <Link href="/" className={styles.quickLink}>
                <FaHome /> Home
              </Link>
              <Link href="/news" className={styles.quickLink}>
                <FaNewspaper /> News
              </Link>
              <Link href="/events" className={styles.quickLink}>
                <FaCalendarAlt /> Events
              </Link>
              <Link href="/contact" className={styles.quickLink}>
                <FaEnvelope /> Contact
              </Link>
              <button className={styles.quickLink}>
                <FaSearch /> Search
              </button>
            </div>
          </div>
        </div>

        {/* Forum Stats Bar */}
        <div className={styles.statsBar}>
          <div className={styles.portalContainer}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <MdArticle className={styles.statIcon} />
                <div>
                  <span className={styles.statNumber}>{portalStats.totalPosts}</span>
                  <span className={styles.statLabel}>Articles</span>
                </div>
              </div>
              <div className={styles.statItem}>
                <FaComments className={styles.statIcon} />
                <div>
                  <span className={styles.statNumber}>{portalStats.totalComments}</span>
                  <span className={styles.statLabel}>Comments</span>
                </div>
              </div>
              <div className={styles.statItem}>
                <FaEye className={styles.statIcon} />
                <div>
                  <span className={styles.statNumber}>{portalStats.totalViews.toLocaleString()}</span>
                  <span className={styles.statLabel}>Total Views</span>
                </div>
              </div>
              <div className={styles.statItem}>
                <FaUser className={styles.statIcon} />
                <div>
                  <span className={styles.statNumber}>{portalStats.todayVisitors}</span>
                  <span className={styles.statLabel}>Today's Visitors</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Announcements Section */}
        <div className={styles.announcementsSection}>
          <div className={styles.portalContainer}>
            <div className={styles.announcementBox}>
              <div className={styles.announcementHeader}>
                <MdAnnouncement className={styles.announcementIcon} />
                <h2>Important Announcements</h2>
              </div>
              <div className={styles.announcementContent}>
                <p>🎉 <strong>New CoreLift™ Treatment Available!</strong> - Experience revolutionary pelvic health recovery with our latest technology. <Link href="/services/corelift">Learn more →</Link></p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className={styles.mainContent}>
          <div className={styles.portalContainer}>
            <div className={styles.contentGrid}>
              {/* Left Sidebar */}
              <aside className={styles.leftSidebar}>
                {/* Categories Box */}
                <div className={styles.sidebarBox}>
                  <div className={styles.boxHeader}>
                    <FaTags className={styles.boxIcon} />
                    <h3>Categories</h3>
                  </div>
                  <div className={styles.boxContent}>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`${styles.categoryButton} ${
                          selectedCategory === category ? styles.active : ''
                        }`}
                      >
                        {getCategoryIcon(category)}
                        <span>{category}</span>
                        <span className={styles.categoryCount}>
                          {category === 'All' 
                            ? blogPosts.length 
                            : blogPosts.filter(p => p.category === category).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className={styles.sidebarBox}>
                  <div className={styles.boxHeader}>
                    <FaChartLine className={styles.boxIcon} />
                    <h3>Portal Statistics</h3>
                  </div>
                  <div className={styles.boxContent}>
                    <div className={styles.miniStats}>
                      <div className={styles.miniStat}>
                        <span>Active Members:</span>
                        <strong>{portalStats.activeUsers.toLocaleString()}</strong>
                      </div>
                      <div className={styles.miniStat}>
                        <span>Latest Member:</span>
                        <strong>JohnD123</strong>
                      </div>
                      <div className={styles.miniStat}>
                        <span>Most Online:</span>
                        <strong>2,847</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Column */}
              <div className={styles.mainColumn}>
                {/* Latest News Forum Style */}
                <div className={styles.forumSection}>
                  <div className={styles.forumHeader}>
                    <div className={styles.forumTitle}>
                      <FaNewspaper className={styles.forumIcon} />
                      <h2>Latest Health Articles & News</h2>
                    </div>
                    <div className={styles.forumActions}>
                      <button className={styles.rssButton}>
                        <FaRss /> RSS
                      </button>
                      <button className={styles.subscribeButton}>
                        <FaEnvelope /> Subscribe
                      </button>
                    </div>
                  </div>

                  {/* Forum Table */}
                  <div className={styles.forumTable}>
                    <div className={styles.tableHeader}>
                      <div className={styles.thTopic}>Topic</div>
                      <div className={styles.thAuthor}>Author</div>
                      <div className={styles.thStats}>Replies</div>
                      <div className={styles.thStats}>Views</div>
                      <div className={styles.thLastPost}>Last Post</div>
                    </div>

                    {sortedPosts.map((post) => (
                      <div key={post.id} className={styles.forumRow}>
                        <div className={styles.topicCell}>
                          <div className={styles.topicIcon}>
                            {post.featured ? <FaBookmark /> : <MdArticle />}
                          </div>
                          <div className={styles.topicContent}>
                            <Link href={`/news/${post.slug}`} className={styles.topicTitle}>
                              {post.featured && <span className={styles.stickyLabel}>[STICKY]</span>}
                              {post.title}
                            </Link>
                            <div className={styles.topicMeta}>
                              <span className={styles.categoryTag}>
                                {getCategoryIcon(post.category)}
                                {post.category}
                              </span>
                              <span className={styles.excerpt}>{post.excerpt.substring(0, 100)}...</span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.authorCell}>
                          <FaUserMd />
                          <span>{post.author || 'Dr. Garcia'}</span>
                        </div>
                        <div className={styles.statsCell}>
                          {Math.floor(Math.random() * 15)}
                        </div>
                        <div className={styles.statsCell}>
                          {Math.floor(Math.random() * 500) + 100}
                        </div>
                        <div className={styles.lastPostCell}>
                          <div className={styles.lastPostInfo}>
                            <span className={styles.lastPostDate}>{formatDate(post.publishedDate)}</span>
                            <span className={styles.lastPostBy}>by Admin</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Forum Footer */}
                  <div className={styles.forumFooter}>
                    <div className={styles.pagination}>
                      <button className={styles.pageButton}>« Previous</button>
                      <span className={styles.pageNumbers}>
                        <button className={styles.pageNumber}>1</button>
                        <button className={`${styles.pageNumber} ${styles.active}`}>2</button>
                        <button className={styles.pageNumber}>3</button>
                      </span>
                      <button className={styles.pageButton}>Next »</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <aside className={styles.rightSidebar}>
                {/* Upcoming Events */}
                <div className={styles.sidebarBox}>
                  <div className={styles.boxHeader}>
                    <FaCalendarAlt className={styles.boxIcon} />
                    <h3>Upcoming Events</h3>
                  </div>
                  <div className={styles.boxContent}>
                    <div className={styles.eventsList}>
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className={styles.eventItem}>
                          <div className={styles.eventDate}>
                            <FaCalendarCheck />
                            <span>{event.formattedDate}</span>
                          </div>
                          <Link href={event.href || '/events'} className={styles.eventName}>
                            {event.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                    <Link href="/events" className={styles.viewAllLink}>
                      View All Events →
                    </Link>
                  </div>
                </div>

                {/* Who's Online */}
                <div className={styles.sidebarBox}>
                  <div className={styles.boxHeader}>
                    <FaUser className={styles.boxIcon} />
                    <h3>Who's Online</h3>
                  </div>
                  <div className={styles.boxContent}>
                    <div className={styles.onlineUsers}>
                      <p className={styles.onlineCount}>
                        <strong>12</strong> users online
                      </p>
                      <div className={styles.userTypes}>
                        <span className={styles.userType}>
                          <span className={styles.adminDot}></span> 2 Staff
                        </span>
                        <span className={styles.userType}>
                          <span className={styles.memberDot}></span> 8 Members
                        </span>
                        <span className={styles.userType}>
                          <span className={styles.guestDot}></span> 2 Guests
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className={styles.sidebarBox}>
                  <div className={styles.boxHeader}>
                    <FaEnvelope className={styles.boxIcon} />
                    <h3>Newsletter</h3>
                  </div>
                  <div className={styles.boxContent}>
                    <EmailSubscription />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Forum Legend */}
        <div className={styles.forumLegend}>
          <div className={styles.portalContainer}>
            <div className={styles.legendContent}>
              <h4>Legend:</h4>
              <div className={styles.legendItems}>
                <span className={styles.legendItem}>
                  <FaBookmark /> Sticky/Featured
                </span>
                <span className={styles.legendItem}>
                  <MdArticle /> Regular Article
                </span>
                <span className={styles.legendItem}>
                  <FaThumbsUp /> Popular (100+ views)
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}