// components/carousel/carousel.jsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

/* fixed header = 25 px topBar + 60 px navbar */
const HEADER = 85;

const slides = [
  { src: '/images/affordable-family-healthcare-clinic-91.png',             alt: 'Affordable family healthcare clinic – smiling physician with patient' },
  { src: '/images/dot-medical-certification-garcia-family-medicine-04.png', alt: 'DOT medical certification services – professional exam room'         },
  { src: '/images/Home+Page+Banners-02.png',                                alt: 'Direct primary care membership banner – no insurance hassles'         },
  { src: '/images/Home+Page+Banners-03.png',                                alt: 'Mental‑health support banner – compassionate counseling'              },
  { src: '/images/Home+Page+Banners-04.png',                                alt: 'Weight‑management program banner – healthy lifestyle'                 },
  { src: '/images/Home+Page+Banners-05.png',                                alt: 'Pelvic‑health treatment banner – Emsella chair'                       },
  { src: '/images/Home+Page+Banners-06.png',                                alt: 'Veteran services banner – caring for those who served'                },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* switch slides every 8 s */
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 8000);
    return () => clearInterval(id);
  }, []);

  /* detect mobile width < 640 px for responsive height */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();                        // initial
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* dynamic height calculation */
  const height = isMobile ? 240 : `calc(100vh - ${HEADER}px)`;

  return (
    <section
      aria-label="Hero image carousel"
      className="relative w-screen overflow-hidden"
      style={{ height }}
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full ${i === current ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}
