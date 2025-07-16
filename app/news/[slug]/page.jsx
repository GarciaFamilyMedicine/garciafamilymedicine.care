import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import { blogPosts, getPostBySlug, getRecentPosts, formatDate, getReadingTime, getAdjacentPosts } from '../../../components/blog/blog-data';
import Link from 'next/link';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);
  const { previous, next } = getAdjacentPosts(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/news">← Back to News</Link>
            </div>
            <div className={styles.heroContent}>
              <div className={styles.categoryBadge}>{post.category}</div>
              <h1 className={styles.heroTitle}>{post.title}</h1>
              <div className={styles.postMeta}>
                <span className={styles.author}>By {post.author}</span>
                <span className={styles.date}>{formatDate(post.publishedDate)}</span>
                <span className={styles.readTime}>{getReadingTime(post.content)}</span>
              </div>
              <p className={styles.excerpt}>{post.excerpt}</p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className={styles.article}>
          <div className={styles.container}>
            <div className={styles.articleLayout}>
              <article className={styles.articleContent}>
                <div 
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className={styles.tags}>
                  <h4>Tags:</h4>
                  <div className={styles.tagList}>
                    {post.tags.map(tag => (
                      <span key={tag} className={styles.tag}>#{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Share Section */}
                <div className={styles.share}>
                  <h4>Share this article:</h4>
                  <div className={styles.shareButtons}>
                    <button className={styles.shareButton}>
                      📧 Email
                    </button>
                    <button className={styles.shareButton}>
                      🔗 Copy Link
                    </button>
                    <button className={styles.shareButton}>
                      📱 Share
                    </button>
                  </div>
                </div>

                {/* Previous/Next Navigation */}
                {(previous || next) && (
                  <div className={styles.articleNavigation}>
                    <div className={styles.navigationGrid}>
                      {previous ? (
                        <Link href={`/news/${previous.slug}`} className={styles.navCard}>
                          <div className={styles.navDirection}>← Previous Article</div>
                          <div className={styles.navTitle}>{previous.title}</div>
                          <div className={styles.navMeta}>
                            {formatDate(previous.publishedDate)} • {previous.category}
                          </div>
                        </Link>
                      ) : (
                        <div></div>
                      )}
                      
                      {next ? (
                        <Link href={`/news/${next.slug}`} className={`${styles.navCard} ${styles.navCardNext}`}>
                          <div className={styles.navDirection}>Next Article →</div>
                          <div className={styles.navTitle}>{next.title}</div>
                          <div className={styles.navMeta}>
                            {formatDate(next.publishedDate)} • {next.category}
                          </div>
                        </Link>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                )}

                {/* Contact CTA */}
                <div className={styles.cta}>
                  <h3>Have Questions About This Topic?</h3>
                  <p>Our medical team is here to help. Schedule an appointment to discuss your health concerns.</p>
                  <div className={styles.ctaButtons}>
                    <a href="tel:816-427-5320" className={styles.primaryButton}>
                      Call: 816-427-5320
                    </a>
                    <Link href="/contact" className={styles.secondaryButton}>
                      Schedule Online
                    </Link>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className={styles.sidebar}>
                {/* Recent Posts */}
                <div className={styles.sidebarSection}>
                  <h3>Recent Articles</h3>
                  <div className={styles.recentPosts}>
                    {recentPosts.map(recentPost => (
                      <article key={recentPost.id} className={styles.recentPost}>
                        <div className={styles.recentPostImage}>
                          <div className={styles.recentCategoryBadge}>
                            {recentPost.category}
                          </div>
                        </div>
                        <div className={styles.recentPostContent}>
                          <h4>
                            <Link href={`/news/${recentPost.slug}`}>
                              {recentPost.title}
                            </Link>
                          </h4>
                          <p className={styles.recentPostDate}>
                            {formatDate(recentPost.publishedDate)}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className={styles.sidebarSection}>
                  <h3>Contact Us</h3>
                  <div className={styles.quickContact}>
                    <div className={styles.contactItem}>
                      <strong>📞 Phone</strong>
                      <a href="tel:816-427-5320">816-427-5320</a>
                    </div>
                    <div className={styles.contactItem}>
                      <strong>🕒 Hours</strong>
                      <span>Mon–Fri: 8 a.m.–7 p.m.</span>
                    </div>
                    <div className={styles.contactItem}>
                      <strong>📍 Location</strong>
                      <span>801 NW St. Mary Drive<br />Blue Springs, MO</span>
                    </div>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className={styles.sidebarSection}>
                  <h3>Stay Updated</h3>
                  <p>Get health tips and practice updates.</p>
                  <div className={styles.newsletterForm}>
                    <input 
                      type="email" 
                      placeholder="Your email"
                      className={styles.emailInput}
                    />
                    <button className={styles.subscribeButton}>
                      Subscribe
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}