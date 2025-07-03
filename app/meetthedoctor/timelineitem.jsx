// app/meetthedoctor/timelineitem.jsx
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

export default function TimelineItem({ year, title, description, Icon, index, animated }) {
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