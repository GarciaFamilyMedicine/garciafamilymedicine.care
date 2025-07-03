// app/meetthedoctor/quotesandstats.jsx
import { useState, useEffect, useRef } from 'react';
import { Quote, Users, Clock, Heart, Award } from 'lucide-react';
import QuoteCarousel from './quotecarousel.jsx';
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

const statsData = [
  {
    icon: Users,
    number: "2000+",
    label: "Patients Served"
  },
  {
    icon: Clock,
    number: "20+",
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
        styles.storySection,
        mobileStyles.storySection,
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