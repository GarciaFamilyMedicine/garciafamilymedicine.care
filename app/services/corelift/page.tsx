'use client';

import { useState, useEffect } from 'react';

export default function CoreLift() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images for the carousel
  const carouselImages = [
    {
      src: "/images/corelift/revolutionary-technology.jpg",
      alt: "Revolutionary CoreLift pelvic health therapy at Garcia Family Medicine Blue Springs",
      caption: "Revolutionary CoreLift Technology"
    },
    {
      src: "/images/corelift/emsella-chair.jpg",
      alt: "FDA-approved Emsella chair for pelvic floor strengthening at Garcia Family Medicine",
      caption: "FDA-Approved Emsella Chair"
    },
    {
      src: "/images/corelift/treatment-room.jpg", 
      alt: "CoreLift treatment room at Garcia Family Medicine Blue Springs Missouri",
      caption: "Comfortable Treatment Environment"
    },
    {
      src: "/images/corelift/patient-results.jpg",
      alt: "CoreLift treatment results showing improved pelvic health outcomes",
      caption: "Real Results for Real People"
    },
    {
      src: "/images/corelift/hifem-technology.jpg",
      alt: "HIFEM technology explanation for advanced pelvic floor therapy",
      caption: "Advanced HIFEM Technology"
    }
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-50 to-purple-100 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-fuchsia-300 to-pink-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-300 to-violet-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* 3D Page Header */}
      <div className="relative bg-gradient-to-r from-white/80 via-fuchsia-50/80 to-pink-50/80 backdrop-blur-lg py-16 sm:py-20 border-b-4 border-gradient-to-r from-fuchsia-300 to-purple-300 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-200/20 via-pink-200/20 to-purple-200/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center relative z-10">
          <div className="transform perspective-1000">
            <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-fuchsia-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight leading-tight drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
              <span className="text-5xl sm:text-6xl font-bold">Brunch & Bubbly</span>
              <br />
              <span className="text-5xl sm:text-6xl font-light italic">CoreLift™</span>
              <br />
              <span className="text-5xl sm:text-6xl font-black">Confidence</span>
            </h1>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/30 transform hover:scale-105 transition-all duration-300">
            <p className="text-xl sm:text-2xl text-gray-800 font-medium leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
              An exclusive wellness experience combining revolutionary<br />
              FDA-approved Emsella technology with luxurious self-care<br />
              for complete pelvic floor confidence
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-16 relative z-10">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-fuchsia-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight drop-shadow-lg transform hover:scale-105 transition-transform duration-300" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                Elevate Your Confidence
                <br />
                <span className="text-3xl sm:text-4xl font-light italic">with Brunch & Bubbly</span>
                <br />
                <span className="text-2xl sm:text-3xl font-medium">CoreLift™</span>
              </h2>
              <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 mb-8 border border-white/40 shadow-xl transform hover:scale-105 transition-all duration-300">
                <p className="text-xl text-gray-800 leading-relaxed font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  Indulge in the ultimate wellness experience! Our exclusive Brunch & Bubbly CoreLift™ Confidence 
                  program combines revolutionary Emsella technology with luxurious amenities. Enjoy mimosas, gourmet 
                  brunch, and the equivalent of 11,000 Kegel exercises per 28-minute session with 95% satisfaction rates.
                </p>
              </div>
              <div className="bg-gradient-to-r from-fuchsia-600 via-pink-600 to-purple-700 p-6 rounded-lg border-l-4 border-yellow-400 mb-6 text-white shadow-2xl border-2 border-yellow-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-yellow-300"></div>
                  <div className="px-4 text-yellow-300 font-light text-sm tracking-widest">EXCLUSIVE OFFER</div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-yellow-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-2">Last 3 Brunch & Bubbly Experiences</h3>
                <p className="text-purple-100 mb-3">
                  <strong className="text-yellow-300">SAVE $600 + Get LUXURY Brunch Package!</strong> Book by midnight <strong>August 1st</strong> and receive:
                </p>
                <ul className="text-purple-100 mb-4 space-y-1">
                  <li>• <strong>Premium mimosa & champagne service</strong> ($150 value)</li>
                  <li>• <strong>Gourmet brunch catering</strong> ($200 value)</li>
                  <li>• <strong>Luxurious spa amenities</strong> ($150 value)</li>
                  <li>• <strong>VIP concierge treatment experience</strong> (priceless!)</li>
                </ul>
                <div className="bg-yellow-400 text-purple-900 p-3 rounded-lg mb-4">
                  <p className="font-bold">FLASH SALE: Regular $2,000 → Now $1,400 (Save $600!)</p>
                  <p className="text-sm">Or just <strong>$58/month</strong> with 0% financing!</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/" 
                    className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-6 py-3 rounded-lg font-bold hover:from-fuchsia-700 hover:to-pink-700 transition-all duration-200 inline-flex items-center justify-center shadow-lg transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reserve Your Experience
                  </a>
                  <a 
                    href="tel:+18163470570" 
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors inline-flex items-center justify-center"
                  >
                    📞 Call: (816) 347-0570
                  </a>
                </div>
              </div>
            </div>
            
            {/* Image Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-2xl ring-4 ring-purple-200 hover:ring-purple-400 transition-all duration-300">
                <a 
                  href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <img 
                    src={carouselImages[currentImageIndex].src}
                    alt={carouselImages[currentImageIndex].alt}
                    className="w-full aspect-square object-cover cursor-pointer transform group-hover:scale-105 transition-transform duration-300 filter hover:brightness-110 hover:contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <p className="text-purple-900 font-semibold text-sm">{carouselImages[currentImageIndex].caption}</p>
                    </div>
                  </div>
                </a>
                
                {/* Navigation Arrows */}
                {carouselImages.length > 1 && (
                  <>
                    <button 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-3 rounded-full hover:from-fuchsia-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 border-2 border-yellow-300"
                      onClick={goToPrevious}
                      aria-label="Previous image"
                    >
                      <span className="text-xl font-bold">‹</span>
                    </button>
                    <button 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-3 rounded-full hover:from-fuchsia-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 border-2 border-yellow-300"
                      onClick={goToNext}
                      aria-label="Next image"
                    >
                      <span className="text-xl font-bold">›</span>
                    </button>
                  </>
                )}
              </div>
              
              {/* Dot Indicators */}
              {carouselImages.length > 1 && (
                <div className="flex justify-center mt-6 space-x-3">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                        index === currentImageIndex 
                          ? 'bg-gradient-to-r from-fuchsia-500 to-pink-600 shadow-lg ring-2 ring-fuchsia-300 ring-offset-2' 
                          : 'bg-gray-300 hover:bg-fuchsia-400 shadow-md'
                      }`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Two Column Content */}
        <section className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">What is Brunch & Bubbly CoreLift™ Confidence?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Brunch & Bubbly CoreLift™ Confidence is our exclusive luxury wellness experience that combines 
              FDA-approved Emsella technology with premium hospitality. Enjoy mimosas, gourmet brunch, spa amenities, 
              and personalized therapy protocols while receiving High-Intensity Focused Electromagnetic (HIFEM) treatments.
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span>28-minute sessions equivalent to 11,000 Kegel exercises</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span>FDA-approved HIFEM technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span>Non-invasive, fully clothed treatments</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span>No downtime or recovery period</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span>95% patient satisfaction rate</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">✓</span>
                <span>Suitable for men and women</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Who Can Benefit?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              CoreLift™ addresses a wide range of pelvic health concerns that affect both 
              men and women. Our program is particularly effective for individuals 
              experiencing intimate health issues that impact quality of life.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-4">Conditions We Treat</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Stress & Urge Urinary Incontinence
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Erectile Dysfunction (ED)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Pelvic Organ Prolapse
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Postpartum Pelvic Floor Dysfunction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Core Weakness & Pelvic Pain
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Age-related Pelvic Floor Changes
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Brunch & Bubbly CoreLift™ Experience</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We follow a systematic, evidence-based approach to ensure optimal results 
              for your pelvic health. Each step is designed to build upon the previous one, 
              creating a comprehensive path to improved core strength and intimate wellness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">VIP Welcome & Assessment</h4>
              <p className="text-gray-600">Champagne greeting with comprehensive pelvic floor evaluation in luxury setting</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Gourmet Brunch Experience</h4>
              <p className="text-gray-600">Chef-prepared brunch with mimosas while developing your personalized treatment plan</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Luxury Emsella Sessions</h4>
              <p className="text-gray-600">28-minute HIFEM treatments in spa-like environment with refreshments</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Confidence Celebration</h4>
              <p className="text-gray-600">Toast your transformation with champagne and personalized wellness plan</p>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="mb-16 bg-gray-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Patient Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Life Changing</span>
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;After two pregnancies, I was struggling with incontinence that 
                  affected my confidence. CoreLift completely changed my life! After 
                  just 3 sessions, I noticed significant improvement. Now I can 
                  laugh, sneeze, and exercise without worry.&rdquo;
                </p>
                <div className="text-gray-800 font-semibold">
                  <strong>Maria L.</strong>, Blue Springs, MO
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">95% Improvement</span>
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;As a 45-year-old man dealing with ED, I was hesitant about treatment. 
                  CoreLift was completely non-invasive and comfortable. My intimacy 
                  issues are 95% resolved, and my confidence is back.&rdquo;
                </p>
                <div className="text-gray-800 font-semibold">
                  <strong>David M.</strong>, Independence, MO
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Core Strength Restored</span>
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;After my third baby, my core felt completely disconnected. 
                  CoreLift not only helped with bladder control but gave me back 
                  my abdominal strength. I feel like myself again!&rdquo;
                </p>
                <div className="text-gray-800 font-semibold">
                  <strong>Jennifer K.</strong>, Kansas City, MO
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Section */}
        <section className="mb-16 bg-purple-600 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">Start Your Brunch & Bubbly CoreLift™ Experience</h2>
                <p className="text-xl mb-6">Indulge in luxury while transforming your pelvic health with our exclusive 6-session program</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-2 mt-1">✓</span>
                    <span>Comprehensive pelvic floor assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-2 mt-1">✓</span>
                    <span>6 FDA-approved Emsella treatments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-2 mt-1">✓</span>
                    <span>Personalized home exercise program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-2 mt-1">✓</span>
                    <span>Progress tracking and adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-2 mt-1">✓</span>
                    <span>90-day post-treatment support</span>
                  </li>
                </ul>
                <div className="bg-purple-700 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">🔥 FLASH SALE: $1,400 (Save $600!)</h3>
                  <p className="text-purple-100 mb-4">
                    Complete 6-session program with assessment and follow-up<br/>
                    <strong>Plus FREE bonus package worth $600 when you book today!</strong>
                  </p>
                  <div className="mt-6">
                    <h4 className="text-lg font-bold mb-2">💳 0% Financing Available - 24 Months</h4>
                    <p className="text-purple-100 mb-4">
                      Start your transformation today with zero interest! We partner with <strong>Cherry</strong> 
                      to offer 24-month 0% financing for qualified applicants.
                    </p>
                    <ul className="space-y-2 text-purple-100 text-sm mb-4">
                      <li>• 24-month 0% financing - just <strong>$58/month</strong> (was $83/month)</li>
                      <li>• Quick approval process (usually under 60 seconds)</li>
                      <li>• No prepayment penalties</li>
                      <li>• Soft credit check won&apos;t affect your credit score</li>
                    </ul>
                    <a 
                      href="https://patient.cherry.com/garcia-family-medicine" 
                      className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check Financing Options →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white/80 via-fuchsia-50/80 to-purple-50/80 backdrop-blur-xl p-12 rounded-3xl text-gray-800 border-4 border-white/50 shadow-2xl transform hover:scale-102 transition-all duration-500 perspective-1000">
                <div className="text-center mb-12">
                  <div className="relative inline-block mb-12 transform perspective-1000 hover:rotate-y-12 transition-transform duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 to-pink-500 rounded-3xl blur-3xl opacity-80 animate-pulse scale-110 shadow-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-3xl blur-2xl opacity-60 animate-pulse scale-125 shadow-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-500 rounded-3xl blur-xl opacity-50 animate-pulse scale-105 shadow-lg"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl shadow-inner"></div>
                    <img src="/images/corelift-brunch.png" alt="Brunch & Bubbly CoreLift Experience" className="relative max-w-96 max-h-96 mx-auto drop-shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-500 rounded-3xl border-8 border-white/50 shadow-2xl object-contain bg-gradient-to-br from-white via-fuchsia-50 to-pink-50 p-6" />
                  </div>
                  <div className="bg-gradient-to-r from-fuchsia-600/90 via-pink-600/90 to-purple-700/90 backdrop-blur-lg text-white p-10 rounded-3xl shadow-2xl mb-8 border-4 border-yellow-300/80 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center mb-8">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-white/70"></div>
                      <div className="px-8 text-yellow-200 font-light text-lg tracking-widest" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>PREMIUM</div>
                      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-yellow-300/50 to-white/70"></div>
                    </div>
                    <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent mb-6 leading-tight tracking-tight drop-shadow-lg" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>EXCLUSIVE LUXURY EXPERIENCE</h2>
                    <p className="text-2xl font-bold text-yellow-200 mb-8 tracking-wide drop-shadow-lg" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Last 3 luxury experiences remaining this month!</p>
                    <button 
                      type="button"
                      onClick={() => window.open('https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/', '_blank')}
                      className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-purple-900 py-8 px-16 rounded-2xl font-black text-3xl hover:from-yellow-300 hover:via-orange-300 hover:to-pink-300 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-110 border-4 border-white animate-pulse perspective-1000" style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                    >
                      RESERVE YOUR EXPERIENCE
                      <br />
                      <span className="text-2xl font-bold">$1,400</span>
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-center mb-4 text-gray-700">Or fill out the form below for more information:</h3>
                </div>
                <form className="space-y-6 mt-8">
                  <input type="hidden" name="service" value="corelift" />
                  <input type="hidden" name="source" value="service-page" />
                  
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      required 
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="age" className="block text-sm font-semibold mb-2">Age Range</label>
                    <select 
                      id="age" 
                      name="age"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select age range</option>
                      <option value="18-29">18-29</option>
                      <option value="30-39">30-39</option>
                      <option value="40-49">40-49</option>
                      <option value="50-59">50-59</option>
                      <option value="60+">60+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="primaryConcern" className="block text-sm font-semibold mb-2">Primary Concern</label>
                    <select 
                      id="primaryConcern" 
                      name="primaryConcern"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select your main concern</option>
                      <option value="urinary-incontinence">Urinary Incontinence</option>
                      <option value="erectile-dysfunction">Erectile Dysfunction</option>
                      <option value="pelvic-organ-prolapse">Pelvic Organ Prolapse</option>
                      <option value="postpartum-recovery">Postpartum Recovery</option>
                      <option value="core-weakness">Core Weakness</option>
                      <option value="pelvic-pain">Pelvic Pain</option>
                      <option value="general-strengthening">General Strengthening</option>
                      <option value="other">Other/Prefer to discuss</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeframe" className="block text-sm font-semibold mb-2">Preferred Consultation Time</label>
                    <select 
                      id="timeframe" 
                      name="timeframe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (8am-12pm)</option>
                      <option value="afternoon">Afternoon (12pm-5pm)</option>
                      <option value="evening">Evening (5pm-7pm)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      name="consent" 
                      required 
                      className="mt-1 mr-3 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label className="text-sm text-gray-600">
                      I consent to receive communications about CoreLift™ services via email and phone. 
                      Message and data rates may apply.
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                  >
                    <img src="/images/rsvp-booking.png" alt="RSVP" className="w-6 h-6 opacity-80" />
                    <span>🥂 RESERVE MY LUXURY EXPERIENCE</span>
                  </button>
                  
                  <p className="text-center text-sm text-gray-500">
                    HIPAA-compliant. Your information is secure and confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">How does CoreLift™ work?</h4>
                <p className="text-gray-600">
                  CoreLift™ uses HIFEM (High-Intensity Focused Electromagnetic) technology 
                  to induce thousands of supramaximal pelvic floor muscle contractions in 
                  a single 28-minute session. This strengthens muscles beyond what&apos;s 
                  possible with voluntary exercise.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">What does the treatment feel like?</h4>
                <p className="text-gray-600">
                  Patients describe the sensation as strong muscle contractions that 
                  feel like intense Kegel exercises. You remain fully clothed and 
                  simply sit in the Emsella chair. Most find it comfortable and relaxing.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Do you offer financing options?</h4>
                <p className="text-gray-600">
                  Yes! We partner with <strong>Cherry</strong> to offer flexible financing with 
                  monthly payments as low as $100/month. Quick approval (usually under 60 seconds), 
                  no prepayment penalties, and soft credit checks that won&apos;t affect your credit score.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">How many sessions do I need?</h4>
                <p className="text-gray-600">
                  Our standard CoreLift™ program includes 6 sessions scheduled twice 
                  per week over 3 weeks. Most patients begin seeing improvements after 
                  the 3rd session, with optimal results after completing all 6 treatments.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Is there any downtime?</h4>
                <p className="text-gray-600">
                  No downtime is required! CoreLift™ is completely non-invasive. 
                  You can return to normal activities immediately after each session. 
                  We recommend staying hydrated and maintaining regular activities.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Is CoreLift™ right for men too?</h4>
                <p className="text-gray-600">
                  Absolutely! CoreLift™ is highly effective for men experiencing erectile 
                  dysfunction, urinary incontinence, or pelvic floor weakness. Our program 
                  is designed to address both men&apos;s and women&apos;s intimate health concerns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="bg-gray-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Pelvic Health Community</h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with others on their pelvic health journey and share your CoreLift™ 
              experience. Find support, tips, and success stories from our community.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <a 
                href="https://www.instagram.com/explore/tags/corelift/" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold">#CoreLift</div>
                <div className="text-sm opacity-90">Instagram</div>
              </a>
              <a 
                href="https://www.facebook.com/hashtag/pelvichealthjourney" 
                className="bg-blue-600 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold">#PelvicHealthJourney</div>
                <div className="text-sm opacity-90">Facebook</div>
              </a>
              <a 
                href="https://www.instagram.com/explore/tags/emsella/" 
                className="bg-green-600 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold">#Emsella</div>
                <div className="text-sm opacity-90">Instagram</div>
              </a>
              <a 
                href="https://www.facebook.com/hashtag/strongercore" 
                className="bg-red-600 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold">#StrongerCore</div>
                <div className="text-sm opacity-90">Facebook</div>
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.facebook.com/garciafamilymedicine"
                className="text-blue-600 hover:text-blue-800 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                👥 Follow on Facebook
              </a>
              <a 
                href="https://instagram.com/gfmdirectprimarycare"
                className="text-purple-600 hover:text-purple-800 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 Follow on Instagram
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}