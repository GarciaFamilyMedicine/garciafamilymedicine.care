// app/meetthedoctor/herosection.jsx
import Image from 'next/image';
import { ChevronDown, Heart, Stethoscope, Music, Phone } from 'lucide-react';
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

export default function HeroSection() {
  const badges = [
    { icon: Heart, text: 'Sun Dancer' },
    { icon: Stethoscope, text: 'Family Physician' },
    { icon: Music, text: 'Former Educator' }
  ];

  return (
    <section className={combineStyles(
      styles.hero,
      mobileStyles.hero
    )}>
      <div className={combineStyles(
        styles.heroBackground,
        mobileStyles.heroBackground
      )}>
        <div className={combineStyles(
          styles.gradientOverlay,
          mobileStyles.gradientOverlay
        )}></div>
        <div className={combineStyles(
          styles.meshPattern,
          mobileStyles.meshPattern
        )}></div>
      </div>

      <div className={combineStyles(
        styles.floatingElements,
        mobileStyles.floatingElements
      )}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={combineStyles(
              styles.floatingDot,
              mobileStyles.floatingDot
            )}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className={combineStyles(
        styles.heroContent,
        mobileStyles.heroContent
      )}>
        <div className={combineStyles(
          styles.heroImageSection,
          mobileStyles.heroImageSection
        )}>
          <div className={combineStyles(
            styles.imageContainer,
            mobileStyles.imageContainer
          )}>
            <div className={combineStyles(
              styles.imageGlow,
              mobileStyles.imageGlow
            )}></div>
            <Image
              src="/images/meetthedoctor/doctor-tess-garcia-blue-springs.jpg"
              alt="Dr. Tess Garcia"
              width={400}
              height={400}
              priority
              className={combineStyles(
                styles.heroImage,
                mobileStyles.heroImage
              )}
            />
          </div>
        </div>

        <div className={combineStyles(
          styles.heroTextSection,
          mobileStyles.heroTextSection
        )}>
          <div className={combineStyles(
            styles.heroTitle,
            mobileStyles.heroTitle
          )}>
            <span className={combineStyles(
              styles.heroTitleMeet,
              mobileStyles.heroTitleMeet
            )}>
              Meet
            </span>
            <span className={combineStyles(
              styles.heroTitleName,
              mobileStyles.heroTitleName
            )}>
              <span className={combineStyles(
                styles.titleAccent,
                mobileStyles.titleAccent
              )}>Dr. Tess Garcia</span>
            </span>
          </div>
          
          <p className={combineStyles(
            styles.heroSubtitle,
            mobileStyles.heroSubtitle
          )}>
            Theresa "Tess" Garcia, MD, FAAFP, Dipl. ABOM<br />
            Physician | Medical Director | Garcia Family Medicine
          </p>

          <div className={combineStyles(
            styles.heroBadges,
            mobileStyles.heroBadges
          )}>
            {badges.map((badge, i) => (
              <div key={i} className={combineStyles(
                styles.badge,
                mobileStyles.badge
              )}>
                <badge.icon className={combineStyles(
                  styles.badgeIcon,
                  mobileStyles.badgeIcon
                )} />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          <div className={combineStyles(
            styles.heroActions,
            mobileStyles.heroActions
          )}>
            <a 
              href="tel:+18164275320"
              className={combineStyles(
                styles.consultationButton,
                mobileStyles.consultationButton
              )}
            >
              <Phone className={combineStyles(
                styles.buttonIcon,
                mobileStyles.buttonIcon
              )} />
              Schedule Consultation
            </a>
          </div>
        </div>

        <div className={combineStyles(
          styles.scrollIndicator,
          mobileStyles.scrollIndicator
        )}>
          <ChevronDown 
            className={combineStyles(
              styles.scrollIcon,
              mobileStyles.scrollIcon
            )}
            onClick={() => {
              const nextSection = document.querySelector('#story');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </section>
  );
}