'use client';

import styles from './peacewithin-life-coaching.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import Link from 'next/link';

export default function PeaceWithinLifeCoachingPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                PeaceWithin™ Life Coaching
              </h1>
              <p className={styles.heroSubtitle}>
                Your Journey to Healing Begins Here
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Begin Your Journey
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
                Life has a way of presenting us with challenges that can feel overwhelming, isolating, and impossible to navigate alone. Whether you're struggling with deep-seated trauma, persistent anxiety, the weight of depression, or finding yourself at a crossroads during major life transitions, PeaceWithin™ Life Coaching offers you something precious: a safe harbor in the storm, a confidential sanctuary where your story matters, and a compassionate partnership on your journey toward healing and hope.
              </p>
              <p className={styles.text}>
                At PeaceWithin™ Life Coaching, we understand that healing is not a one-size-fits-all journey. Every person who walks through our doors carries a unique story, shaped by individual experiences, cultural backgrounds, personal beliefs, and life circumstances. Our approach is fundamentally rooted in the understanding that true personal growth happens when you feel genuinely seen, heard, and accepted exactly as you are—without judgment, without pressure to be anyone other than yourself.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Healing Philosophy</h2>
            <div className={styles.textContent}>
              <p className={styles.text}>
                Our life coaching philosophy centers on the belief that within each person lies an innate capacity for healing and growth. Sometimes, this inner strength becomes obscured by life's challenges, trauma, or overwhelming circumstances. Our role is not to fix you—because you are not broken—but rather to walk alongside you as you rediscover your own resilience, wisdom, and capacity for transformation.
              </p>
            </div>
            <div className={styles.philosophyGrid}>
              <div className={styles.philosophyCard}>
                <div className={styles.philosophyIcon}>🌱</div>
                <h3>Growth-Centered</h3>
                <p>Focusing on your innate capacity for healing and positive change</p>
              </div>
              <div className={styles.philosophyCard}>
                <div className={styles.philosophyIcon}>🤲</div>
                <h3>Non-Judgmental</h3>
                <p>Creating a safe space where you're accepted exactly as you are</p>
              </div>
              <div className={styles.philosophyCard}>
                <div className={styles.philosophyIcon}>🎯</div>
                <h3>Personalized</h3>
                <p>Tailoring our approach to your unique needs and preferences</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spiritual Integration */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Honoring Your Spiritual Journey</h2>
            <div className={styles.twoColumn}>
              <div className={styles.column}>
                <h3>For Those Who Find Strength in Faith</h3>
                <p>We offer coaching that thoughtfully integrates spiritual elements:</p>
                <ul className={styles.list}>
                  <li>Exploring how beliefs can serve as sources of strength</li>
                  <li>Examining spiritual questions that arise during difficult times</li>
                  <li>Incorporating prayer, meditation, or other spiritual practices</li>
                </ul>
              </div>
              <div className={styles.column}>
                <h3>For Those Preferring Secular Approaches</h3>
                <p>We provide evidence-based coaching without religious components:</p>
                <ul className={styles.list}>
                  <li>Cognitive-behavioral techniques</li>
                  <li>Mindfulness and meditation practices</li>
                  <li>Evidence-based therapeutic interventions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Areas of Specialization</h2>
            
            {/* Trauma Recovery */}
            <div className={styles.specializationBlock}>
              <h3 className={styles.specializationTitle}>Trauma Recovery</h3>
              <p className={styles.specializationText}>
                Trauma can leave invisible wounds affecting every aspect of life—relationships, work, self-esteem, and daily functioning. Our trauma-informed approach acknowledges that healing from trauma requires patience, safety, and specialized understanding. We utilize evidence-based coaching techniques and supportive approaches that help you process and integrate difficult experiences.
              </p>
              <p className={styles.specializationText}>
                We understand that trauma manifests differently for everyone. Some people experience flashbacks, nightmares, or panic attacks, while others may feel emotionally numb, disconnected, or hypervigilant. Whatever your experience, we create a coaching environment where you can explore these responses at your own pace, developing coping strategies and gradually reclaiming your sense of safety and empowerment.
              </p>
            </div>

            {/* Anxiety Management */}
            <div className={styles.specializationBlock}>
              <h3 className={styles.specializationTitle}>Anxiety Management</h3>
              <p className={styles.specializationText}>
                Anxiety can feel like a constant companion, creating a persistent undercurrent of worry, fear, or dread that colors every experience. Whether you're dealing with generalized anxiety, social anxiety, panic symptoms, or stress-related challenges, our approach combines cognitive-behavioral techniques with mindfulness practices and relaxation strategies.
              </p>
              <div className={styles.techniquesList}>
                <div className={styles.technique}>
                  <span className={styles.techniqueIcon}>🌬️</span>
                  <span>Breathing techniques for immediate relief</span>
                </div>
                <div className={styles.technique}>
                  <span className={styles.techniqueIcon}>💭</span>
                  <span>Challenging anxious thought patterns</span>
                </div>
                <div className={styles.technique}>
                  <span className={styles.techniqueIcon}>🔄</span>
                  <span>Gradual exposure to feared situations</span>
                </div>
                <div className={styles.technique}>
                  <span className={styles.techniqueIcon}>📝</span>
                  <span>Personalized coping strategies for daily life</span>
                </div>
              </div>
            </div>

            {/* Depression Support */}
            <div className={styles.specializationBlock}>
              <h3 className={styles.specializationTitle}>Depression Support</h3>
              <p className={styles.specializationText}>
                Depression can make even the simplest tasks feel insurmountable, robbing life of color, joy, and meaning. Our comprehensive approach to supporting those with depression addresses not just symptoms but the underlying factors that contribute to low mood. We explore patterns of thinking, lifestyle factors, relationship dynamics, and life circumstances that may be impacting your mental health.
              </p>
              <p className={styles.specializationText}>
                Through evidence-based coaching interventions and mindfulness-based approaches, we work together to develop strategies for managing depressive symptoms, improving mood, and rediscovering sources of meaning and fulfillment in your life.
              </p>
            </div>

            {/* Life Transitions */}
            <div className={styles.specializationBlock}>
              <h3 className={styles.specializationTitle}>Life Transitions</h3>
              <p className={styles.specializationText}>
                Life transitions—whether chosen or unexpected—can be profoundly disorienting. Career changes, relationship transitions, loss of loved ones, health challenges, retirement, becoming a parent, or any other significant life change can leave you feeling unmoored and uncertain about the future.
              </p>
              <p className={styles.specializationText}>
                Our transition-focused coaching helps you navigate these challenging periods by processing the emotions that accompany change, exploring your values and priorities, and developing strategies for adapting to new circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Your Healing Journey Starts Today</h2>
            <p className={styles.ctaSubtitle}>
              Take the first step toward peace, healing, and personal growth
            </p>
            <div className={styles.ctaButtons}>
              <a href="tel:816-427-5320" className={styles.ctaPrimary}>
                Schedule Your Session
              </a>
              <Link href="/contact" className={styles.ctaSecondary}>
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}