'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import FloatingNav from './floatingnav.jsx';
import HeroSection from './herosection.jsx';              // Hero section with Dr. Tess photo
import QuotesAndStats from './quotesandstats.jsx';        // Quotes carousel and statistics
import CareerTimeline from './careertimeline.jsx';        // Timeline of career journey
import DoctorBiography from './doctorbiography.jsx';      // Detailed biography text
import ConnectSection from './connectsection.jsx';        // Call-to-action section
import styles from './meetthedoctor.module.css';
import mobileStyles from './mobile.module.css';
import { setupSmoothLinks } from '../utils/smoothscroll';

// Helper function to combine CSS modules
const combineStyles = (...classNames) => 
  classNames.filter(Boolean).join(' ');

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState({});
  const observerRef = useRef();
  const scrollTimeout = useRef(null);

  // Initialize smooth scrolling
  useEffect(() => {
    setupSmoothLinks();
  }, []);

  // Optimized scroll handler with debouncing
  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      const scroll = window.scrollY;
      setScrollY(scroll);
      setNavVisible(scroll > window.innerHeight * 0.5);
    }, 50);
  }, []);

  // Enhanced Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -25% 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id || entry.target.dataset.section;
          setAnimatedElements(prev => ({ ...prev, [id]: true }));
          observerRef.current.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => {
      observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Event listeners with cleanup
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [handleScroll]);

  return (
    <>
      <Header />
      <div className={combineStyles(
        styles.page,
        mobileStyles.page
      )}>
        <FloatingNav visible={navVisible} />
        <HeroSection />
        <QuotesAndStats animated={animatedElements.story} />
        <CareerTimeline animated={animatedElements.journey} />
        <DoctorBiography animated={animatedElements.mission} />
        <ConnectSection animated={animatedElements.connect} />
      </div>
      <Footer />
    </>
  );
}