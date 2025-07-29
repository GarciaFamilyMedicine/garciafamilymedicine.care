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
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-purple-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            CoreLift™ Pelvic Health Program
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Revolutionary FDA-approved Emsella technology for comprehensive pelvic floor strengthening and core restoration
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Restore Your Core Strength with CoreLift™
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our comprehensive CoreLift™ program combines revolutionary Emsella technology 
                with personalized pelvic health therapy. Experience the equivalent of 11,000 
                Kegel exercises per 28-minute session with 95% patient satisfaction rates.
              </p>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
                <h3 className="text-xl font-bold text-purple-800 mb-2">💜 Limited Summer Special: 6-Session Package 💜</h3>
                <p className="text-purple-700 mb-4">
                  Complete your pelvic floor transformation with our <strong>6-session CoreLift™ program</strong>. 
                  Book by <strong>August 15th, 2025</strong> and save $500 on your package.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/" 
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎯 Book Consultation - $2,000 Program
                  </a>
                  <a 
                    href="tel:+18163470570" 
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors inline-flex items-center justify-center"
                  >
                    📞 Call (816) 347-0570
                  </a>
                </div>
              </div>
            </div>
            
            {/* Image Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <a 
                  href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={carouselImages[currentImageIndex].src}
                    alt={carouselImages[currentImageIndex].alt}
                    className="w-full h-80 object-cover cursor-pointer"
                  />
                </a>
                
                {/* Navigation Arrows */}
                {carouselImages.length > 1 && (
                  <>
                    <button 
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                      onClick={goToPrevious}
                      aria-label="Previous image"
                    >
                      &#8249;
                    </button>
                    <button 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                      onClick={goToNext}
                      aria-label="Next image"
                    >
                      &#8250;
                    </button>
                  </>
                )}
              </div>
              
              {/* Dot Indicators */}
              {carouselImages.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-purple-600' : 'bg-gray-300'
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
            <h3 className="text-2xl font-bold text-gray-800 mb-4">What is CoreLift™?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              CoreLift™ is our comprehensive pelvic health program that combines FDA-approved 
              Emsella technology with personalized therapy protocols. Using High-Intensity 
              Focused Electromagnetic (HIFEM) energy, each session delivers thousands of 
              supramaximal pelvic floor muscle contractions.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our CoreLift™ Process</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We follow a systematic, evidence-based approach to ensure optimal results 
              for your pelvic health. Each step is designed to build upon the previous one, 
              creating a comprehensive path to improved core strength and intimate wellness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📋</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Initial Assessment</h4>
              <p className="text-gray-600">Comprehensive evaluation of pelvic floor function and core strength</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">💜</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Treatment Plan</h4>
              <p className="text-gray-600">Customized 6-session program based on your specific needs and goals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Emsella Therapy</h4>
              <p className="text-gray-600">28-minute sessions using HIFEM technology for deep muscle strengthening</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Results & Maintenance</h4>
              <p className="text-gray-600">Ongoing support and maintenance recommendations for lasting results</p>
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
                  "After two pregnancies, I was struggling with incontinence that 
                  affected my confidence. CoreLift completely changed my life! After 
                  just 3 sessions, I noticed significant improvement. Now I can 
                  laugh, sneeze, and exercise without worry."
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
                  "As a 45-year-old man dealing with ED, I was hesitant about treatment. 
                  CoreLift was completely non-invasive and comfortable. My intimacy 
                  issues are 95% resolved, and my confidence is back."
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
                  "After my third baby, my core felt completely disconnected. 
                  CoreLift not only helped with bladder control but gave me back 
                  my abdominal strength. I feel like myself again!"
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
                <h2 className="text-3xl font-bold mb-6">Start Your CoreLift™ Journey</h2>
                <p className="text-xl mb-6">Transform your pelvic health with our revolutionary 6-session program</p>
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
                  <h3 className="text-2xl font-bold mb-2">Investment: $2,000</h3>
                  <p className="text-purple-100 mb-4">
                    Complete 6-session program with assessment and follow-up<br/>
                    <strong>Most patients see significant improvement after just 3 sessions!</strong>
                  </p>
                  <div className="mt-6">
                    <h4 className="text-lg font-bold mb-2">💳 Flexible Financing Available</h4>
                    <p className="text-purple-100 mb-4">
                      Start your transformation today! We partner with <strong>Cherry</strong> 
                      to offer monthly payment plans with competitive rates.
                    </p>
                    <ul className="space-y-2 text-purple-100 text-sm mb-4">
                      <li>• Monthly payment plans as low as $100/month</li>
                      <li>• Quick approval process (usually under 60 seconds)</li>
                      <li>• No prepayment penalties</li>
                      <li>• Soft credit check won't affect your credit score</li>
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
              
              <div className="bg-white p-8 rounded-lg text-gray-800">
                <form className="space-y-6">
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
                    className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
                  >
                    Schedule My Consultation
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
                  a single 28-minute session. This strengthens muscles beyond what's 
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
                  no prepayment penalties, and soft credit checks that won't affect your credit score.
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
                  is designed to address both men's and women's intimate health concerns.
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