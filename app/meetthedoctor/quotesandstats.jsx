// app/meetthedoctor/quotesandstats.jsx - Merged with QuoteCarousel
'use client';

import { useState, useEffect, useRef } from 'react';
import { Quote, Users, Clock, Heart, Award } from 'lucide-react';
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

// Merged QuoteCarousel component
function QuoteCarousel({ animated }) {
  const [currentQuote, setCurrentQuote] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={combineStyles(
      styles.quoteSection,
      mobileStyles.quoteSection,
      animated ? styles.quoteSectionVisible : ''
    )}>
      <div className={combineStyles(
        styles.quoteContainer,
        mobileStyles.quoteContainer
      )}>
        <Quote className={combineStyles(
          styles.quoteIconLarge,
          mobileStyles.quoteIconLarge
        )} />
        <div className={combineStyles(
          styles.quoteContent,
          mobileStyles.quoteContent
        )}>
          <blockquote className={combineStyles(
            styles.quoteText,
            mobileStyles.quoteText
          )}>
            "{quotes[currentQuote].text}"
          </blockquote>
          <cite className={combineStyles(
            styles.quoteCite,
            mobileStyles.quoteCite
          )}>— Dr. Tess Garcia</cite>
        </div>
      </div>
      
      <div className={combineStyles(
        styles.quoteIndicators,
        mobileStyles.quoteIndicators
      )}>
        {quotes.map((_, i) => (
          <button
            key={i}
            className={combineStyles(
              styles.indicator,
              mobileStyles.indicator,
              i === currentQuote ? styles.indicatorActive : '',
              i === currentQuote ? mobileStyles.indicatorActive : ''
            )}
            onClick={() => setCurrentQuote(i)}
            aria-label={`View quote ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const statsData = [
  {
    icon: Users,
    number: "10000+",
    label: "Patients Served"
  },
  {
    icon: Clock,
    number: "26+",
    label: "Years Experience"
  },
  {
    icon: Heart,
    number: "100%",
    label: "Dedicated Care"
  },
  {
    icon: Award,
    number: "Board",
    label: "Certified"
  }
];

export default function QuotesAndStats({ animated }) {
  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsRef = useRef();

  useEffect(() => {
    if (!animated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  return (
    <section 
      id="story" 
      data-section="story"
      className={combineStyles(
        styles.quotesSection,
        mobileStyles.quotesSection,
        animated ? styles.sectionAnimated : ''
      )}
    >
      <div className={combineStyles(
        styles.container,
        mobileStyles.container
      )}>
        <div className={combineStyles(
          styles.sectionHeader,
          mobileStyles.sectionHeader,
          animated ? styles.sectionHeaderAnimated : ''
        )}>
          <h2 className={combineStyles(
            styles.sectionTitle,
            mobileStyles.sectionTitle
          )}>
            The <span className={combineStyles(
              styles.titleGradient,
              mobileStyles.titleGradient
            )}>Listening</span> Doctor
          </h2>
          <p className={combineStyles(
            styles.sectionSubtitle,
            mobileStyles.sectionSubtitle
          )}>
            Where healthcare meets humanity—one conversation at a time.
          </p>
        </div>

        <QuoteCarousel animated={animated} />

        <div 
          ref={statsRef}
          className={combineStyles(
            styles.statsGrid,
            mobileStyles.statsGrid
          )}
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={combineStyles(
                styles.statsCard,
                mobileStyles.statsCard,
                statsAnimated ? styles.statsVisible : ''
              )}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <stat.icon className={combineStyles(
                styles.statsIcon,
                mobileStyles.statsIcon
              )} />
              <div className={combineStyles(
                styles.statsNumber,
                mobileStyles.statsNumber
              )}>{stat.number}</div>
              <div className={combineStyles(
                styles.statsLabel,
                mobileStyles.statsLabel
              )}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}