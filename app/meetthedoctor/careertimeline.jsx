// app/meetthedoctor/careertimeline.jsx
import TimelineItem from './timelineitem';
import { Mountain, Award, Users, Heart } from 'lucide-react';
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

const timelineData = [
  {
    year: "1993",
    title: "The Halloween Awakening",
    description: "A mother's question changed everything. Within a week, she was enrolled in medical prerequisites.",
    icon: Mountain
  },
  {
    year: "1995-2002",
    title: "Medical School & Residency",
    description: "From Virginia to Missouri, dedicating herself to becoming a board-certified Family Physician.",
    icon: Award
  },
  {
    year: "2002-2007",
    title: "Community Service",
    description: "Five years at Samuel Rogers Community Health Center, serving underserved populations.",
    icon: Users
  },
  {
    year: "2007-Present",
    title: "Independent Practice",
    description: "Blue Springs practice offering Direct Primary Care that truly puts patients first.",
    icon: Heart
  }
];

export default function CareerTimeline({ animated }) {
  return (
    <section 
      id="journey" 
      data-section="journey"
      className={combineStyles(
        styles.journeySection,
        mobileStyles.journeySection,
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
            An <span className={combineStyles(
              styles.titleGradient,
              mobileStyles.titleGradient
            )}>Extraordinary</span> Journey
          </h2>
          <p className={combineStyles(
            styles.sectionSubtitle,
            mobileStyles.sectionSubtitle
          )}>
            From music education to medicine—every step led to this calling.
          </p>
        </div>

        <div className={combineStyles(
          styles.timeline,
          mobileStyles.timeline
        )}>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              Icon={item.icon}
              index={index}
              animated={animated}
            />
          ))}
        </div>
      </div>
    </section>
  );
}