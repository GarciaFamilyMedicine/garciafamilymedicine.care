// app/meetthedoctor/doctorbiography.jsx - Cool Text Animation Inspired by Blast.js
'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

export default function DoctorBiography({ animated }) {
  const [currentParagraph, setCurrentParagraph] = useState(-1);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [sectionInView, setSectionInView] = useState(false);
  const [completedParagraphs, setCompletedParagraphs] = useState([]);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  // Biography content split into words for cool animations
  const biographyContent = [
    {
      text: "I am Mexican American and Native American. I think my most important characteristic as a doctor is the fact that I listen, when so many others don't have the time or worse, don't take the time. I take tremendous pride in what I do, and this is my story.",
      words: "I am Mexican American and Native American. I think my most important characteristic as a doctor is the fact that I listen, when so many others don't have the time or worse, don't take the time. I take tremendous pride in what I do, and this is my story.".split(' '),
      keyPhrases: ["I listen", "tremendous pride"]
    },
    {
      text: "Believe it or not, my undergraduate degree was in music education and my first career was as an elementary school music teacher. I went to music school in New Mexico, where my parents are from, and later taught on the Blackfeet Reservation in northern Montana.",
      words: "Believe it or not, my undergraduate degree was in music education and my first career was as an elementary school music teacher. I went to music school in New Mexico, where my parents are from, and later taught on the Blackfeet Reservation in northern Montana.".split(' '),
      keyPhrases: ["music education", "Blackfeet Reservation"]
    },
    {
      text: "The leap from music teacher to physician began on Halloween 1993 when my mother asked why I wasn't in medical school. Within a week I was enrolled in prerequisite courses, sat the MCAT in 1994, and started medical school in 1995.",
      words: "The leap from music teacher to physician began on Halloween 1993 when my mother asked why I wasn't in medical school. Within a week I was enrolled in prerequisite courses, sat the MCAT in 1994, and started medical school in 1995.".split(' '),
      keyPhrases: ["Halloween 1993", "within a week"]
    },
    {
      text: "Realizing the Sun Dance is a healing ceremony, becoming a doctor felt like the natural culmination of my path and spiritual calling. As a Direct Primary Care physician, I'm proud to offer patient‑first medicine—eliminating insurance hurdles and giving my patients the time, attention, and personalized care they deserve.",
      words: "Realizing the Sun Dance is a healing ceremony, becoming a doctor felt like the natural culmination of my path and spiritual calling. As a Direct Primary Care physician, I'm proud to offer patient‑first medicine—eliminating insurance hurdles and giving my patients the time, attention, and personalized care they deserve.".split(' '),
      keyPhrases: ["Sun Dance", "healing ceremony", "spiritual calling", "Direct Primary Care", "patient‑first medicine"]
    }
  ];

  // Watch for section coming into view
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !sectionInView) {
          setSectionInView(true);
          setTimeout(() => {
            setCurrentParagraph(0);
            setCurrentWordIndex(0);
            startWordAnimation(0);
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [sectionInView]);

  // Cool word-by-word animation with staggering
  const startWordAnimation = (paragraphIndex) => {
    const words = biographyContent[paragraphIndex].words;
    let wordIndex = 0;

    const animateNextWord = () => {
      if (wordIndex < words.length) {
        setCurrentWordIndex(wordIndex);
        wordIndex++;
        
        // Variable timing - slower for important words, faster for common words
        let delay = 100; // Base speed
        const word = words[wordIndex - 1]?.toLowerCase();
        
        if (['i', 'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to'].includes(word)) {
          delay = 60; // Faster for common words
        } else if (word?.length > 8) {
          delay = 180; // Slower for long words
        } else if (['.', '!', '?'].some(punct => words[wordIndex - 1]?.includes(punct))) {
          delay = 400; // Pause at sentence endings
        }
        
        animationRef.current = setTimeout(animateNextWord, delay);
      } else {
        // Paragraph complete
        setCompletedParagraphs(prev => [...prev, paragraphIndex]);
        
        // Start next paragraph after delay
        setTimeout(() => {
          const nextIndex = paragraphIndex + 1;
          if (nextIndex < biographyContent.length) {
            setCurrentParagraph(nextIndex);
            setCurrentWordIndex(0);
            startWordAnimation(nextIndex);
          }
        }, 800);
      }
    };

    animateNextWord();
  };

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  // Render words with cool effects
  const renderParagraphWords = (paragraph, paragraphIndex) => {
    if (paragraphIndex < currentParagraph) {
      // Completed paragraphs - show all words with highlights
      return paragraph.words.map((word, wordIndex) => {
        const isKeyPhrase = paragraph.keyPhrases.some(phrase => 
          phrase.toLowerCase().includes(word.toLowerCase().replace(/[.,!?]/g, ''))
        );
        
        return (
          <span
            key={wordIndex}
            className={`word-span completed ${isKeyPhrase ? 'key-phrase' : ''}`}
          >
            {word}{' '}
          </span>
        );
      });
    } else if (paragraphIndex === currentParagraph) {
      // Current paragraph - animate words in
      return paragraph.words.map((word, wordIndex) => {
        const isVisible = wordIndex <= currentWordIndex;
        const isKeyPhrase = paragraph.keyPhrases.some(phrase => 
          phrase.toLowerCase().includes(word.toLowerCase().replace(/[.,!?]/g, ''))
        );
        const isCurrent = wordIndex === currentWordIndex;
        
        return (
          <span
            key={wordIndex}
            className={`word-span ${isVisible ? 'visible' : 'hidden'} ${isKeyPhrase ? 'key-phrase' : ''} ${isCurrent ? 'current' : ''}`}
            style={{
              animationDelay: `${wordIndex * 0.05}s`
            }}
          >
            {word}{' '}
          </span>
        );
      });
    } else {
      // Future paragraphs - hidden
      return '';
    }
  };

  // Generate floating dots
  const generateFloatingDots = () => {
    const dots = [];
    for (let i = 0; i < 12; i++) {
      dots.push(
        <div
          key={i}
          className={styles.floatingDot}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      );
    }
    return dots;
  };

  const isStoryComplete = completedParagraphs.length === biographyContent.length;

  return (
    <>
      <style jsx>{`
        .word-span {
          display: inline-block;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-right: 0.3rem;
        }
        
        .word-span.hidden {
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          filter: blur(2px);
        }
        
        .word-span.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }
        
        .word-span.current {
          color: var(--accent);
          text-shadow: 0 0 8px rgba(255, 107, 107, 0.6);
          transform: translateY(-2px) scale(1.05);
        }
        
        .word-span.completed {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .word-span.key-phrase {
          background: linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
          position: relative;
        }
        
        .word-span.key-phrase::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), var(--primary));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s ease;
        }
        
        .word-span.key-phrase.visible::after,
        .word-span.key-phrase.completed::after {
          transform: scaleX(1);
        }
        
        .paragraph-container {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border-left: 3px solid transparent;
          position: relative;
          overflow: hidden;
        }
        
        .paragraph-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .paragraph-0 { border-left-color: rgba(255, 107, 107, 0.6); }
        .paragraph-1 { border-left-color: rgba(55, 114, 197, 0.6); }
        .paragraph-2 { border-left-color: rgba(255, 107, 107, 0.6); }
        .paragraph-3 { border-left-color: rgba(55, 114, 197, 0.6); }
        
        .paragraph-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255, 107, 107, 0.05), rgba(55, 114, 197, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .paragraph-container:hover::before {
          opacity: 1;
        }
        
        .typing-cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background: var(--accent);
          margin-left: 2px;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section 
        id="mission"
        data-section="mission"
        ref={sectionRef}
        className={combineStyles(
          styles.storySection,
          mobileStyles.storySection,
          animated ? styles.sectionAnimated : ''
        )}
      >
        {/* Hero-style background elements */}
        <div className={styles.heroBackground}>
          <div className={styles.gradientOverlay} />
          <div className={styles.meshPattern} />
          <div className={styles.floatingElements}>
            {generateFloatingDots()}
          </div>
        </div>

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
                {biographyContent.map((paragraph, index) => (
                  <div
                    key={index}
                    className={`paragraph-container paragraph-${index} ${index <= currentParagraph ? 'paragraph-visible' : ''}`}
                  >
                    <div style={{ 
                      fontSize: '1.125rem',
                      lineHeight: '1.8',
                      color: 'rgba(255, 255, 255, 0.95)'
                    }}>
                      {renderParagraphWords(paragraph, index)}
                      {index === currentParagraph && currentWordIndex < paragraph.words.length && (
                        <span className="typing-cursor"></span>
                      )}
                    </div>
                  </div>
                ))}

                {/* Reading Progress */}
                {currentParagraph >= 0 && (
                  <div style={{
                    marginTop: '2rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    textAlign: 'center',
                    animation: 'fadeInUp 0.6s ease-out'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '4px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{
                        width: `${((completedParagraphs.length + (currentParagraph >= 0 ? 0.5 : 0)) / biographyContent.length) * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--accent), var(--primary))',
                        transition: 'width 0.5s ease',
                        borderRadius: '2px'
                      }} />
                    </div>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '0.875rem', 
                      color: 'rgba(255, 255, 255, 0.8)' 
                    }}>
                      Story Progress: {Math.round(((completedParagraphs.length + (currentParagraph >= 0 ? 0.5 : 0)) / biographyContent.length) * 100)}%
                      {currentParagraph >= 0 && !isStoryComplete && (
                        <span style={{ color: 'var(--accent)', marginLeft: '0.5rem' }}>
                          ✍️ Writing...
                        </span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Photo with Quotes */}
            <div className={combineStyles(
              styles.storyImageSection,
              mobileStyles.storyImageSection,
              animated ? styles.storyImageAnimated : ''
            )}>
              {/* Quote Above Photo */}
              <div 
                className={combineStyles(
                  styles.photoQuote,
                  mobileStyles.photoQuote
                )}
                style={{
                  opacity: currentParagraph >= 0 ? 1 : 0,
                  transform: currentParagraph >= 0 ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: '1s'
                }}
              >
                <p>"I listen, when so many others don't have the time or worse, don't take the time."</p>
              </div>

              <div 
                className={combineStyles(
                  styles.storyImageFrame,
                  mobileStyles.storyImageFrame
                )}
                style={{
                  opacity: completedParagraphs.includes(0) ? 1 : 0,
                  transform: completedParagraphs.includes(0) ? 'scale(1) rotate(0deg)' : 'scale(0.9) rotate(-2deg)',
                  transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: '2s'
                }}
              >
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
              <div 
                className={combineStyles(
                  styles.photoQuote,
                  mobileStyles.photoQuote
                )}
                style={{
                  opacity: completedParagraphs.includes(3) ? 1 : 0,
                  transform: completedParagraphs.includes(3) ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: '3s'
                }}
              >
                <p>"The Sun Dance is a healing ceremony. Becoming a doctor felt like the natural culmination of my spiritual calling."</p>
              </div>

              {/* Story completion celebration */}
              {isStoryComplete && (
                <div style={{
                  marginTop: '2rem',
                  padding: '1.5rem',
                  background: 'rgba(255, 107, 107, 0.15)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '2px solid rgba(255, 107, 107, 0.3)',
                  animation: 'fadeInUp 1s ease-out'
                }}>
                  <p style={{ 
                    margin: '0 0 1rem 0', 
                    fontSize: '1.125rem', 
                    color: 'white',
                    fontWeight: '600'
                  }}>
                    ✨ Dr. Garcia's story is complete!
                  </p>
                  <a 
                    href="tel:+18164275320" 
                    className={combineStyles(styles.phoneLink, mobileStyles.phoneLink)}
                    style={{ 
                      display: 'inline-flex',
                      fontSize: '1rem',
                      padding: '0.75rem 1.5rem',
                      background: 'linear-gradient(135deg, var(--accent), var(--primary))',
                      color: 'white',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Phone className={combineStyles(styles.phoneIcon, mobileStyles.phoneIcon)} />
                    Call (816) 427-5320
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}