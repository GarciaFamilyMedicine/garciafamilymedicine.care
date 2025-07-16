'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import { blogPosts, getFeaturedPosts, getRecentPosts, getAllCategories, formatDate, getReadingTime } from '../../components/blog/blog-data';
import Link from 'next/link';

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

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Garcia Family Medicine News
              </h1>
              <p className={styles.heroSubtitle}>
                Health insights, practice updates, and community news from Dr. Tess Garcia and our medical team
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className={styles.featured}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Featured Posts</h2>
              <div className={styles.featuredGrid}>
                {featuredPosts.map(post => (
                  <article key={post.id} className={styles.featuredCard}>
                    <div className={styles.featuredImage}>
                      <div className={styles.categoryBadge}>{post.category}</div>
                    </div>
                    <div className={styles.featuredContent}>
                      <h3 className={styles.featuredTitle}>
                        <Link href={`/news/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className={styles.featuredExcerpt}>{post.excerpt}</p>
                      <div className={styles.featuredMeta}>
                        <span className={styles.author}>By {post.author}</span>
                        <span className={styles.date}>{formatDate(post.publishedDate)}</span>
                        <span className={styles.readTime}>{getReadingTime(post.content)}</span>
                      </div>
                      <Link href={`/news/${post.slug}`} className={styles.readMore}>
                        Read Full Article →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className={styles.filter}>
          <div className={styles.container}>
            <div className={styles.filterBar}>
              <h3>Browse by Category:</h3>
              <div className={styles.categoryTabs}>
                {categories.map(category => (
                  <button
                    key={category}
                    className={`${styles.categoryTab} ${selectedCategory === category ? styles.active : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className={styles.posts}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {selectedCategory === 'All' ? 'All Posts' : `${selectedCategory} Posts`}
            </h2>
            <div className={styles.postsGrid}>
              {sortedPosts.map(post => (
                <article key={post.id} className={styles.postCard}>
                  <div className={styles.postImage}>
                    <div className={styles.categoryBadge}>{post.category}</div>
                  </div>
                  <div className={styles.postContent}>
                    <h3 className={styles.postTitle}>
                      <Link href={`/news/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <div className={styles.postMeta}>
                      <span className={styles.author}>By {post.author}</span>
                      <span className={styles.date}>{formatDate(post.publishedDate)}</span>
                      <span className={styles.readTime}>{getReadingTime(post.content)}</span>
                    </div>
                    <div className={styles.postTags}>
                      {post.tags.map(tag => (
                        <span key={tag} className={styles.tag}>#{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className={styles.newsletter}>
          <div className={styles.container}>
            <div className={styles.newsletterContent}>
              <h2>Stay Updated</h2>
              <p>Subscribe to receive health tips and practice updates directly to your inbox.</p>
              <div className={styles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className={styles.emailInput}
                />
                <button className={styles.subscribeButton}>
                  Subscribe
                </button>
              </div>
              <p className={styles.privacyNote}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}