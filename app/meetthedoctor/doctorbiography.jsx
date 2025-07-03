// app/meetthedoctor/doctorbiography.jsx (Updated to match your story layout preference)
import Image from 'next/image';
import { Phone } from 'lucide-react';
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

export default function DoctorBiography({ animated }) {
  return (
    <section 
      id="mission"
      data-section="mission"
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
          styles.storyGrid,
          mobileStyles.storyGrid
        )}>
          {/* Left Column - Story Text */}
          <div className={combineStyles(
            styles.storyContent,
            mobileStyles.storyContent,
            animated ? styles.storyContentAnimated : ''
          )}>
            <h2 className={combineStyles(
              styles.storyTitle,
              mobileStyles.storyTitle
            )}>
              <span className={combineStyles(
                styles.storyHighlight,
                mobileStyles.storyHighlight
              )}>
                100% Dedicated
              </span>
              <span className={combineStyles(
                styles.storySubtitle,
                mobileStyles.storySubtitle
              )}>
                Mexican American. Native American.
              </span>
            </h2>
            
            <div className={combineStyles(
              styles.storyText,
              mobileStyles.storyText
            )}>
              <p>
                I am Mexican American and Native American. I think my most
                important characteristic as a doctor is the fact that I
                listen, when so many others don't have the time or worse,
                don't take the time. I take tremendous pride in what I do, and
                this is my story.
              </p>

              <p>
                Believe it or not, my undergraduate degree was in music
                education and my first career was as an elementary school
                music teacher. I went to music school in New Mexico, where my
                parents are from, and later taught on the Blackfeet
                Reservation in northern Montana.
              </p>

              <p>
                The leap from music teacher to physician began on Halloween
                1993 when my mother asked why I wasn't in medical school.
                Within a week I was enrolled in prerequisite courses, sat the
                MCAT in 1994, and started medical school in 1995.
              </p>

              <p>
                Realizing the Sun Dance is a healing ceremony, becoming a doctor felt
                like the natural culmination of my path and spiritual calling.
                As a Direct Primary Care physician, I'm proud to offer
                patient‑first medicine—eliminating insurance hurdles and
                giving my patients the time, attention, and personalized care
                they deserve.
              </p>
            </div>
          </div>

          {/* Right Column - Photo with Quotes */}
          <div className={combineStyles(
            styles.storyImageSection,
            mobileStyles.storyImageSection,
            animated ? styles.storyImageAnimated : ''
          )}>
            {/* Quote Above Photo */}
            <div className={combineStyles(
              styles.photoQuote,
              mobileStyles.photoQuote
            )}>
              <p>"I listen, when so many others don't have the time or worse, don't take the time."</p>
            </div>

            <div className={combineStyles(
              styles.storyImageFrame,
              mobileStyles.storyImageFrame
            )}>
              <Image
                src="/images/doctor-tess-garcia-blue-springs.jpg"
                alt="Dr. Tess Garcia in her Blue Springs practice"
                width={400}
                height={500}
                className={combineStyles(
                  styles.storyImage,
                  mobileStyles.storyImage
                )}
              />
            </div>

            {/* Quote Below Photo */}
            <div className={combineStyles(
              styles.photoQuote,
              mobileStyles.photoQuote
            )}>
              <p>"The Sun Dance is a healing ceremony. Becoming a doctor felt like the natural culmination of my spiritual calling."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}