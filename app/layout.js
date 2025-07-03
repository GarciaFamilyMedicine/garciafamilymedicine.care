'use client';
import { Geist } from "next/font/google";
import "./globals.css";
import { useEffect } from 'react';
import { setupSmoothLinks } from './utils/smoothscroll';

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: 'swap'
});

export default function RootLayout({ children }) {
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

  return (
    <html lang="en" className={geistSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3772c565" />
        <meta name="description" content="Garcia Family Medicine - Compassionate healthcare with Dr. Tess Garcia in Blue Springs, Missouri. Direct Primary Care that puts patients first." />
      </head>
      <body className={`${geistSans.className} page-container`}>
        <div id="__next">
          {children}
        </div>
      </body>
    </html>
  );
}