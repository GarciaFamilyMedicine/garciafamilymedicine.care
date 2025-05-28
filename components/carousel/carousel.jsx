// components/carousel/carousel.jsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

/* fixed header = 25 px topBar + 60 px navbar */
const HEADER = 85;
const ASPECT_RATIO = 9 / 16;       // 16 ∶ 9 ratio  (height = w * 9/16)
const DEFAULT_URL = 'https://forms.cloud.microsoft/r/PmYN6fxyAT';

/*--------------------------------------------------------------------------
  Each slide can now set its own `href`.  If omitted, we fall back to
  DEFAULT_URL, so you never break the link logic while you’re staging URLs.
----------------------------------------------------------------------------*/
const slides = [
  {
    src: '/images/reclaim.png',
    alt: 'Reclaim your confidence, pelvic health recovery event',
    fit: 'cover',
    href: DEFAULT_URL,             // ← change later
  },
  {
    src: '/images/affordable-family-healthcare-clinic-91.png',
    alt: 'Affordable family healthcare clinic – smiling physician with patient',
    fit: 'cover',
    href: DEFAULT_URL,             // ← change later
  },
  {
    src: '/images/dot-medical-certification-garcia-family-medicine-04.png',
    alt: 'DOT medical certification services – professional exam room',
    fit: 'cover',
    href: DEFAULT_URL,             // ← change later
  },
  {
    src: '/images/Home+Page+Banners-02.png',
    alt: 'Direct primary care membership banner – no insurance hassles',
    fit: 'cover',
    // href omitted → will use DEFAULT_URL automatically
  },
  {
    src: '/images/Home+Page+Banners-03.png',
    alt: 'Mental‑health support banner – compassionate counseling',
    fit: 'cover',
  },
  {
    src: '/images/Home+Page+Banners-04.png',
    alt: 'Weight‑management program banner – healthy lifestyle',
    fit: 'cover',
  },
  {
    src: '/images/Home+Page+Banners-05.png',
    alt: 'Pelvic‑health treatment banner – Emsella chair',
    fit: 'cover',
  },
  {
    src: '/images/Home+Page+Banners-06.png',
    alt: 'Veteran services banner – caring for those who served',
    fit: 'cover',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  /* auto‑advance every 8 s */
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  /* track viewport size for responsive height */
  useEffect(() => {
    const handle = () =>
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    handle();                                // initial
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  /* height: desktop → full viewport minus header; else 16 ∶ 9 ratio */
  const height =
    viewport.w >= 1024
      ? viewport.h - HEADER
      : Math.round(viewport.w * ASPECT_RATIO);

  return (
    <section
      aria-label="Hero image carousel"
      className="relative w-screen overflow-hidden"
      style={{ height }}
    >
      {slides.map((slide, i) => {
        const link = slide.href || DEFAULT_URL;  // fallback logic
        return (
          <a
            key={slide.src}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute inset-0 block transition-opacity duration-1000 ease-in-out ${
              i === current ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            aria-label={slide.alt}
          >
            {/* anchor is relative so Image fill works */}
            <div className="relative h-full w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                className={`${
                  slide.fit === 'contain' ? 'object-contain' : 'object-cover'
                } object-center`}
              />
            </div>
          </a>
        );
      })}

      {/* slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
