// app/meetthedoctor/doctorbiography.jsx
import Image from 'next/image';
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
        styles.missionSection,
        mobileStyles.missionSection,
        animated ? styles.sectionAnimated : ''
      )}
    >
      <div className={combineStyles(
        styles.missionBackground,
        mobileStyles.missionBackground
      )}>
        <div className={combineStyles(
          styles.missionOrb1,
          mobileStyles.missionOrb1
        )}></div>
        <div className={combineStyles(
          styles.missionOrb2,
          mobileStyles.missionOrb2
        )}></div>
      </div>
      
      <div className={combineStyles(
        styles.container,
        mobileStyles.container
      )}>
        <div className={combineStyles(
          styles.missionGrid,
          mobileStyles.missionGrid
        )}>
          {/* Left Column - Image */}
          <div className={combineStyles(
            styles.missionImageCol,
            mobileStyles.missionImageCol,
            animated ? styles.missionImageAnimated : ''
          )}>
            <div className={combineStyles(
              styles.imageFrame,
              mobileStyles.imageFrame
            )}>
              <Image
                src="/images/doctor-tess-garcia-blue-springs.jpg"
                alt="Dr. Tess Garcia"
                width={400}
                height={400}
                priority
                className={combineStyles(
                  styles.frameImage,
                  mobileStyles.frameImage
                )}
              />
            </div>
          </div>

          {/* Right Column - Bio Text */}
          <div className={combineStyles(
            styles.missionContent,
            mobileStyles.missionContent,
            animated ? styles.missionContentAnimated : ''
          )}>
            <h2 className={combineStyles(
              styles.missionTitle,
              mobileStyles.missionTitle
            )}>
              Hi, I'm Dr.&nbsp;Tess.
            </h2>
            
            <div className={combineStyles(
              styles.missionText,
              mobileStyles.missionText
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
                Reservation in northern Montana, then ended up in the DC
                metropolitan area until I moved to Richmond, Virginia, to
                attend the Medical College of Virginia. I ended up in Missouri
                by matching for residency training at Truman Lakewood. I
                graduated in 2002 and became a board‑certified Family
                Physician. I worked five years at Samuel Rogers Community
                Health Center before opening my own practice—first in
                Grain Valley in 2007 and now in Blue Springs.
              </p>

              <p>
                The leap from music teacher to physician began on Halloween
                1993 when my mother asked why I wasn't in medical school.
                Within a week I was enrolled in prerequisite courses, sat the
                MCAT in 1994, and started medical school in 1995. Realizing
                the Sun Dance is a healing ceremony, becoming a doctor felt
                like the natural culmination of my path and spiritual calling.
              </p>

              <p>
                My parents' dedication to underserved communities ignited the
                same passion in me. Today in Blue Springs, you'll find a
                family physician, an obesity‑medicine specialist, a
                compassionate primary‑care provider, and a proud Mexican
                American / Native American doctor—all in one convenient
                location.
              </p>

              <p>
                As a Direct Primary Care physician, I'm proud to offer
                patient‑first medicine—eliminating insurance hurdles and
                giving my patients the time, attention, and personalized care
                they deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}