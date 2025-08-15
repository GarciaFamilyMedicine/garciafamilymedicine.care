import { notFound } from 'next/navigation';
import Image from 'next/image';
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

        {/* Featured Image */}
        {post.image && (
          <section className={styles.featuredImage}>
            <div className={styles.container}>
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className={styles.postImage}
                priority
              />
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className={styles.article}>
          <div className={styles.container}>
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

            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}