// app/meetthedoctor/quotecarousel.jsx
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

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

export default function QuoteCarousel({ animated }) {
  const [currentQuote, setCurrentQuote] = useState(0);

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