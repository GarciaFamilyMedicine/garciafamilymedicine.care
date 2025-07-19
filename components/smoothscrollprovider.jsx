'use client';

import { useEffect } from 'react';
import { setupSmoothLinks } from '../app/utils/smoothscroll';

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // Setup smooth scrolling
    setupSmoothLinks();
    
    // Add any global initialization here
    const handleRouteChange = () => {
      // Re-setup smooth scrolling on route changes
      setTimeout(() => {
        setupSmoothLinks();
      }, 100);
    };

    // Listen for navigation events
    window.addEventListener('popstate', handleRouteChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return children;
}