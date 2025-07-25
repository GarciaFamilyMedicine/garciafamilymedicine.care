// app/meetthedoctor/careertimeline.jsx - Merged with TimelineItem and Light Background
import { Mountain, Award, Users, Heart } from 'lucide-react';
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

// Merged TimelineItem component
function TimelineItem({ year, title, description, Icon, index, animated }) {
  return (
    <div
      className={combineStyles(
        styles.timelineItem,
        mobileStyles.timelineItem,
        animated ? styles.timelineItemAnimated : ''
      )}
      style={{ '--delay': `${index * 0.15}s` }}
    >
      <div className={combineStyles(
        styles.timelineMarker,
        mobileStyles.timelineMarker
      )}>
        <Icon className={combineStyles(
          styles.timelineIcon,
          mobileStyles.timelineIcon
        )} />
      </div>
      
      <div className={combineStyles(
        styles.timelineContent,
        mobileStyles.timelineContent
      )}>
        <div className={combineStyles(
          styles.timelineYear,
          mobileStyles.timelineYear
        )}>{year}</div>
        <h3 className={combineStyles(
          styles.timelineTitle,
          mobileStyles.timelineTitle
        )}>{title}</h3>
        <p className={combineStyles(
          styles.timelineDescription,
          mobileStyles.timelineDescription
        )}>{description}</p>
      </div>
    </div>
  );
}

const timelineData = [
  {
    year: "1993",
    title: "The Moment Everything Changed",
    description: "On Halloween 1993, a simple question from her mother - 'Why aren't you in medical school?' - sparked a complete life transformation. Within a week, she was enrolled in medical prerequisites.",
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