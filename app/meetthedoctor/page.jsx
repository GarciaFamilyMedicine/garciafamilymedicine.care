// app/meetthedoctor/page.jsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './meetthedoctor.module.css';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import { 
  ChevronDown, 
  Heart, 
  Stethoscope, 
  Users, 
  Award, 
  Music, 
  Mountain, 
  Sunrise,
  Phone,
  Calendar,
  MapPin,
  Quote
} from 'lucide-react';

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [currentQuote, setCurrentQuote] = useState(0);
  const [navVisible, setNavVisible] = useState(false);
  const observerRef = useRef();

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setScrollY(scroll);
      // Show nav after scrolling past hero
      setNavVisible(scroll > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id || entry.target.dataset.animate]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );

    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(el => {
      if (observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  // Quote rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const FloatingNav = () => (
    <nav className={`${styles.floatingNav} ${navVisible ? styles.navVisible : styles.navHidden}`}>
      <div className={styles.navContent}>
        <a href="#story" className={styles.navLink}>Story</a>
        <a href="#journey" className={styles.navLink}>Journey</a>
        <a href="#mission" className={styles.navLink}>Mission</a>
        <a href="#connect" className={styles.navLink}>Connect</a>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <section className={styles.hero}>
      {/* Simplified background */}
      <div className={styles.heroBackground}>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.meshPattern}></div>
      </div>

      {/* Subtle floating elements */}
      <div className={styles.floatingElements}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={styles.floatingDot}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className={styles.heroContent}>
        <div className={styles.heroImageSection}>
          <div className={styles.imageContainer}>
            <div className={styles.imageGlow}></div>
            <Image
              src="/images/doctor-tess-garcia-blue-springs.jpg"
              alt="Dr. Tess Garcia"
              width={320}
              height={320}
              priority
              className={styles.heroImage}
            />
          </div>
        </div>

        <div className={styles.heroTextSection}>
          <h1 className={styles.heroTitle}>
            Meet <span className={styles.titleAccent}>Dr. Tess Garcia</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            Where ancient healing wisdom meets modern medicine
          </p>

          <div className={styles.heroBadges}>
            <div className={styles.badge}>
              <Heart className={styles.badgeIcon} />
              <span>Sun Dancer</span>
            </div>
            <div className={styles.badge}>
              <Stethoscope className={styles.badgeIcon} />
              <span>Family Physician</span>
            </div>
            <div className={styles.badge}>
              <Music className={styles.badgeIcon} />
              <span>Former Educator</span>
            </div>
          </div>

          <div className={styles.heroActions}>
            <button className={styles.primaryButton}>
              <Calendar className={styles.buttonIcon} />
              Schedule Consultation
            </button>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <ChevronDown className={styles.scrollIcon} />
        </div>
      </div>
    </section>
  );

  const QuoteSection = () => {
    const quotes = [
      {
        text: "I think my most important characteristic as a doctor is the fact that I listen, when so many others don't have the time or worse, don't take the time.",
        highlight: "I listen"
      },
      {
        text: "I am a Sun Dancer, and I had never understood why I was called to be a dancer when I was doing my secular life. Then it dawned on me—the Native American Sun Dance is a healing ceremony.",
        highlight: "healing ceremony"
      },
      {
        text: "My mission is simple: to listen, to heal, and to serve.",
        highlight: "listen, heal, serve"
      }
    ];

    return (
      <div 
        className={`${styles.quoteSection} ${
          isVisible.quotes ? styles.quoteSectionVisible : ''
        }`} 
        data-animate="quotes" 
        id="quotes"
      >
        <div className={styles.quoteContainer}>
          <Quote className={styles.quoteIconLarge} />
          <div className={styles.quoteContent}>
            <blockquote className={styles.quoteText}>
              "{quotes[currentQuote].text}"
            </blockquote>
            <cite className={styles.quoteCite}>— Dr. Tess Garcia</cite>
          </div>
        </div>
        
        <div className={styles.quoteIndicators}>
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentQuote ? styles.indicatorActive : ''
              }`}
              onClick={() => setCurrentQuote(index)}
              aria-label={`Quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  const StatsCard = ({ number, label, icon: Icon, delay = 0 }) => (
    <div 
      className={`${styles.statsCard} ${
        isVisible[`stats-${delay}`] ? styles.statsVisible : ''
      }`}
      data-animate={`stats-${delay}`}
      style={{ '--delay': `${delay}ms` }}
    >
      <Icon className={styles.statsIcon} />
      <div className={styles.statsNumber}>{number}</div>
      <div className={styles.statsLabel}>{label}</div>
    </div>
  );

  const TimelineItem = ({ year, title, description, icon: Icon, index }) => (
    <div
      className={`${styles.timelineItem} ${
        isVisible[`timeline-${index}`] ? styles.timelineVisible : ''
      }`}
      data-animate={`timeline-${index}`}
      style={{ '--delay': `${index * 0.2}s` }}
    >
      <div className={styles.timelineMarker}>
        <Icon className={styles.timelineIcon} />
      </div>
      
      <div className={styles.timelineContent}>
        <div className={styles.timelineYear}>{year}</div>
        <h3 className={styles.timelineTitle}>{title}</h3>
        <p className={styles.timelineDescription}>{description}</p>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      
      <div className={`${styles.vars} ${styles.page}`}>
        <FloatingNav />
        
        <HeroSection />

        {/* Story Section */}
        <section id="story" className={styles.storySection}>
          <div className={styles.container}>
            <div 
              className={`${styles.sectionHeader} ${
                isVisible.storyHeader ? styles.sectionHeaderVisible : ''
              }`} 
              data-animate="storyHeader"
            >
              <h2 className={styles.sectionTitle}>
                The <span className={styles.titleGradient}>Listening</span> Doctor
              </h2>
              <p className={styles.sectionSubtitle}>
                Discover the remarkable journey of a physician who believes healing begins with truly listening.
              </p>
            </div>

            <QuoteSection />

            <div 
              className={`${styles.statsGrid} ${
                isVisible.statsGrid ? styles.statsGridVisible : ''
              }`} 
              data-animate="statsGrid"
            >
              <StatsCard
                number="22+"
                label="Years of Practice"
                icon={Award}
                delay={0}
              />
              <StatsCard
                number="5000+"
                label="Patients Served"
                icon={Users}
                delay={200}
              />
              <StatsCard
                number="100%"
                label="Dedicated Care"
                icon={Heart}
                delay={400}
              />
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section id="journey" className={styles.journeySection}>
          <div className={styles.container}>
            <div 
              className={`${styles.sectionHeader} ${
                isVisible.journeyHeader ? styles.sectionHeaderVisible : ''
              }`} 
              data-animate="journeyHeader"
            >
              <h2 className={styles.sectionTitle}>
                An <span className={styles.titleGradient}>Extraordinary</span> Journey
              </h2>
              <p className={styles.sectionSubtitle}>
                From music education to medicine—every step led to this calling.
              </p>
            </div>

            <div className={styles.timeline}>
              <TimelineItem
                year="1993"
                title="The Halloween Awakening"
                description="A mother's question changed everything. Within a week, she was enrolled in medical prerequisites."
                icon={Mountain}
                index={0}
              />
              <TimelineItem
                year="1995-2002"
                title="Medical School & Residency"
                description="From Virginia to Missouri, dedicating herself to becoming a board-certified Family Physician."
                icon={Award}
                index={1}
              />
              <TimelineItem
                year="2002-2007"
                title="Community Service"
                description="Five years at Samuel Rogers Community Health Center, serving underserved populations."
                icon={Users}
                index={2}
              />
              <TimelineItem
                year="2007-Present"
                title="Independent Practice"
                description="Blue Springs practice offering Direct Primary Care that truly puts patients first."
                icon={Heart}
                index={3}
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className={styles.missionSection}>
          <div className={styles.missionBackground}>
            <div className={styles.missionOrb1}></div>
            <div className={styles.missionOrb2}></div>
          </div>
          
          <div className={styles.container}>
            <div className={styles.missionGrid}>
              <div 
                className={`${styles.missionContent} ${
                  isVisible.missionContent ? styles.missionContentVisible : ''
                }`} 
                data-animate="missionContent"
              >
                <h2 className={styles.missionTitle}>
                  Mexican American.<br />
                  Native American.<br />
                  <span className={styles.titleGradient}>100% Dedicated.</span>
                </h2>
                
                <div className={styles.missionText}>
                  <p>
                    I am Mexican American and Native American. My most important characteristic as a doctor is that I listen, when so many others don't have the time or worse, don't take the time.
                  </p>
                  
                  <p>
                    My path began with music education, teaching on the Blackfeet Reservation in Montana. The leap to medicine started with a simple Halloween question from my mother in 1993.
                  </p>
                  
                  <p>
                    Realizing the Sun Dance is a healing ceremony, becoming a doctor felt like the natural culmination of my spiritual calling. As a Direct Primary Care physician, I eliminate insurance hurdles to give patients the time and personalized care they deserve.
                  </p>
                </div>
              </div>

              <div 
                className={`${styles.missionImage} ${
                  isVisible.missionImage ? styles.missionImageVisible : ''
                }`} 
                data-animate="missionImage"
              >
                <div className={styles.imageFrame}>
                  <Image
                    src="/images/doctor-tess-garcia-blue-springs.jpg"
                    alt="Dr. Garcia in her practice"
                    width={400}
                    height={500}
                    className={styles.frameImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className={styles.connectSection}>
          <div className={styles.container}>
            <div 
              className={`${styles.connectContent} ${
                isVisible.connectContent ? styles.connectContentVisible : ''
              }`} 
              data-animate="connectContent"
            >
              <h2 className={styles.connectTitle}>
                Ready to <span className={styles.titleGradient}>Experience</span> the Difference?
              </h2>
              
              <p className={styles.connectSubtitle}>
                Discover healthcare that puts you first—where your doctor truly listens.
              </p>
              
              <div className={styles.connectActions}>
                <button className={styles.primaryButton}>
                  <Calendar className={styles.buttonIcon} />
                  Schedule Your Consultation
                </button>
                
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <Phone className={styles.contactIcon} />
                    <span>(816) 555-CARE</span>
                  </div>
                  <div className={styles.contactItem}>
                    <MapPin className={styles.contactIcon} />
                    <span>Blue Springs, MO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}