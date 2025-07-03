// app/meetthedoctor/connectsection.jsx
import { Calendar } from 'lucide-react';
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

export default function ConnectSection({ animated }) {
  return (
    <section 
      id="connect" 
      data-section="connect"
      className={combineStyles(
        styles.connectSection,
        mobileStyles.connectSection,
        animated ? styles.sectionAnimated : ''
      )}
    >
      <div className={combineStyles(
        styles.container,
        mobileStyles.container
      )}>
        <div className={combineStyles(
          styles.connectContent,
          mobileStyles.connectContent,
          animated ? styles.connectContentAnimated : ''
        )}>
          <h2 className={combineStyles(
            styles.connectTitle,
            mobileStyles.connectTitle
          )}>
            Ready to <span className={combineStyles(
              styles.titleGradient,
              mobileStyles.titleGradient
            )}>Experience</span> the Difference?
          </h2>
          
          <p className={combineStyles(
            styles.connectSubtitle,
            mobileStyles.connectSubtitle
          )}>
            Discover healthcare that puts you first—where your doctor truly listens.
          </p>
          
          <div className={combineStyles(
            styles.connectActions,
            mobileStyles.connectActions
          )}>
            <button className={combineStyles(
              styles.primaryButton,
              mobileStyles.primaryButton
            )}>
              <Calendar className={combineStyles(
                styles.buttonIcon,
                mobileStyles.buttonIcon
              )} />
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}