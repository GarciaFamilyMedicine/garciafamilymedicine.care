'use client';

import styles from './nourish-thrive-journey.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import Link from 'next/link';

export default function NourishThriveJourneyPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Nourish & Thrive™ Journey
              </h1>
              <p className={styles.heroSubtitle}>
                Your Path to Wholeness - 12 Months to Transform Your Health
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Start Your Journey Today
                </a>
                <Link href="/contact" className={styles.secondaryButton}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.textContent}>
              <p className={styles.leadText}>
                At Garcia Family Medicine, we understand that your relationship with your body, food, and health runs deeper than numbers on a scale. We see you—not just as a patient, but as a whole person carrying stories, struggles, dreams, and an innate desire to feel truly well. The Nourish & Thrive™ Journey isn't another diet program or quick fix. It's a compassionate, comprehensive 12-month transformation that honors every part of who you are: your body, mind, heart, and spirit.
              </p>
              <p className={styles.text}>
                We know you've likely tried before. Maybe you've felt the crushing disappointment of regaining weight, the shame of "failing" another program, or the exhaustion of fighting your own body. We want you to know that this isn't about willpower or moral failing—it's about healing patterns that may have been years in the making. Our approach recognizes that true wellness requires addressing not just what you eat, but why you eat, how you feel, and what your soul needs to truly thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Four Pillars Section */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Four Foundational Pillars of Transformation</h2>
            
            {/* Pillar 1 */}
            <div className={styles.pillarSection}>
              <div className={styles.pillarHeader}>
                <div className={styles.pillarNumber}>1</div>
                <h3 className={styles.pillarTitle}>Comprehensive Laboratory Assessment</h3>
              </div>
              <div className={styles.pillarContent}>
                <p className={styles.text}>
                  Through detailed laboratory work, we uncover the hidden factors that may have been sabotaging your efforts for years. We examine your thyroid function, hormone balance, insulin sensitivity, inflammation markers, nutrient deficiencies, and metabolic health indicators.
                </p>
                <p className={styles.text}>
                  Dr. Tess and our team don't just run tests and hand you results. We sit with you, explaining what each marker means for your unique situation. We help you understand how stress might be affecting your cortisol levels, how past trauma could be impacting your gut health, or how sleep disruption might be throwing your hunger hormones into chaos. This isn't about judgment—it's about understanding and empowerment.
                </p>
                <div className={styles.discoveryBox}>
                  <h4>Many patients discover:</h4>
                  <ul className={styles.discoveryList}>
                    <li>Untreated insulin resistance affecting weight loss</li>
                    <li>Thyroid dysfunction slowing metabolism</li>
                    <li>Chronic inflammation causing fatigue and weight gain</li>
                    <li>Hormone imbalances disrupting appetite control</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className={styles.pillarSection}>
              <div className={styles.pillarHeader}>
                <div className={styles.pillarNumber}>2</div>
                <h3 className={styles.pillarTitle}>Personalized Meal Mapping</h3>
              </div>
              <div className={styles.pillarContent}>
                <p className={styles.text}>
                  Food should be medicine, comfort, and joy—not the enemy. Our meal mapping approach moves far beyond calorie counting or restrictive diets that leave you feeling deprived and defeated. Instead, we work together to create a sustainable, nourishing way of eating that honors your preferences, cultural background, family traditions, and health goals.
                </p>
                <p className={styles.text}>
                  We teach you to recognize your body's hunger and fullness cues, which may have been disrupted by years of dieting. We explore how different foods make you feel—not just physically, but emotionally. Together, we map these patterns and create new pathways to nourishment.
                </p>
                <div className={styles.mealFeatures}>
                  <div className={styles.mealFeature}>
                    <span className={styles.featureIcon}>🍽️</span>
                    <span>Abundant, satisfying meal plans</span>
                  </div>
                  <div className={styles.mealFeature}>
                    <span className={styles.featureIcon}>⏱️</span>
                    <span>Simple recipes for busy lifestyles</span>
                  </div>
                  <div className={styles.mealFeature}>
                    <span className={styles.featureIcon}>🎉</span>
                    <span>Strategies for social situations</span>
                  </div>
                  <div className={styles.mealFeature}>
                    <span className={styles.featureIcon}>🌍</span>
                    <span>Respect for cultural food traditions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className={styles.pillarSection}>
              <div className={styles.pillarHeader}>
                <div className={styles.pillarNumber}>3</div>
                <h3 className={styles.pillarTitle}>Emotional Support</h3>
              </div>
              <div className={styles.pillarContent}>
                <p className={styles.text}>
                  Food is never just about food. It's comfort when we're sad, celebration when we're happy, companionship when we're lonely, and sometimes a way to numb pain we don't know how to process. We understand this deeply, and we honor the emotional complexity of your relationship with eating and your body.
                </p>
                <p className={styles.text}>
                  Our certified life coaches specialize in the intricate connections between emotions, stress, and eating behaviors. In individual sessions and supportive group settings, you'll explore the roots of emotional eating, body image struggles, and the internal voices that may have been holding you back from true wellness.
                </p>
                <p className={styles.text}>
                  Through cognitive-behavioral techniques, mindfulness practices, and supportive coaching approaches, we help you develop new coping strategies that serve your highest good. You'll learn to sit with difficult emotions without immediately reaching for food, to practice self-compassion when you stumble, and to celebrate small victories along the way.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className={styles.pillarSection}>
              <div className={styles.pillarHeader}>
                <div className={styles.pillarNumber}>4</div>
                <h3 className={styles.pillarTitle}>Faith-Rooted Reset</h3>
              </div>
              <div className={styles.pillarContent}>
                <p className={styles.text}>
                  For many, sustainable transformation requires connecting to something greater than ourselves. The faith-rooted component of our program acknowledges that your health journey is also a spiritual journey—an opportunity to honor the body you've been given and align your daily choices with your deepest values.
                </p>
                <p className={styles.text}>
                  Whether you're Christian, follow another faith tradition, or simply seek a deeper sense of purpose and meaning, we help you explore how your spiritual beliefs can support your wellness goals. We might explore stewardship of the body as a sacred trust, finding strength through prayer or meditation, or discovering how serving others can shift your focus from self-criticism to love in action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Features */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your 12-Month Journey Includes</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🩺</div>
                <h3>Monthly Medical Check-ins</h3>
                <p>Regular assessments with Dr. Tess to monitor progress and adjust treatment plans</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🥗</div>
                <h3>Weekly Nutrition Coaching</h3>
                <p>Personalized guidance from registered dietitians who understand real-life challenges</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💬</div>
                <h3>Group Support Sessions</h3>
                <p>Connect with others on similar journeys in a safe, supportive environment</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📱</div>
                <h3>24/7 App Support</h3>
                <p>Track progress, access resources, and connect with your care team anytime</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🧘</div>
                <h3>Mindfulness Training</h3>
                <p>Learn stress-reduction techniques and mindful eating practices</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3>Progress Tracking</h3>
                <p>Beyond the scale - measure energy, mood, sleep, and overall wellbeing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className={`${styles.section} ${styles.bgAccent}`}>
          <div className={styles.container}>
            <div className={styles.testimonialBox}>
              <h2 className={styles.testimonialTitle}>Real Transformation, Real People</h2>
              <p className={styles.testimonialText}>
                "For the first time in my life, I'm not on a diet. I'm living a life where food is my friend, my body is worthy of respect, and my health is a priority—not a punishment. The Nourish & Thrive™ Journey gave me so much more than weight loss. It gave me myself back."
              </p>
              <p className={styles.testimonialAuthor}>- Sarah, Journey Graduate</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Begin Your Transformation Today</h2>
            <p className={styles.ctaSubtitle}>
              You deserve to feel whole, healthy, and at peace in your own body
            </p>
            <div className={styles.ctaButtons}>
              <a href="tel:816-427-5320" className={styles.ctaPrimary}>
                Schedule Your Consultation
              </a>
              <Link href="/contact" className={styles.ctaSecondary}>
                Request Information
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}