'use client';

import { useState, useEffect } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function NourishThrive() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images for the carousel
  const carouselImages = [
    {
      src: "/images/services/nourish-thrive-journey/medical-supervision.jpg",
      alt: "Medically supervised weight management consultation at Garcia Family Medicine Blue Springs",
      caption: "Medically Supervised Weight Management"
    },
    {
      src: "/images/services/nourish-thrive-journey/healthy-transformation-NEEDED.jpg",
      alt: "IMAGE NEEDED - Transform your relationship with food through healthy lifestyle changes",
      caption: "Transform Your Relationship with Food - IMAGE NEEDED"
    },
    {
      src: "/images/services/nourish-thrive-journey/progress-tracking-NEEDED.jpg", 
      alt: "IMAGE NEEDED - Track your journey to better health with professional medical support",
      caption: "Track Your Journey to Better Health - IMAGE NEEDED"
    },
    {
      src: "/images/services/nourish-thrive-journey/care-team-NEEDED.jpg",
      alt: "IMAGE NEEDED - Complete care team supporting your weight management journey at Garcia Family Medicine",
      caption: "Your Complete Care Team - IMAGE NEEDED"
    },
    {
      src: "/images/services/nourish-thrive-journey/lifelong-wellness-NEEDED.jpg",
      alt: "IMAGE NEEDED - 12-month program leading to lifelong wellness and sustainable weight management",
      caption: "12 Months to Lifelong Wellness - IMAGE NEEDED"
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
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
      {/* Page Header */}
      <div className="bg-green-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Nourish & Thrive™ Weight Management
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Comprehensive medical weight management program combining nutrition, lifestyle coaching, and prescription therapies
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Transform Your Health with Nourish & Thrive™
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our medical weight management program combines the latest FDA-approved treatments 
                with personalized nutrition coaching and lifestyle support. Experience sustainable 
                weight loss under medical supervision with our comprehensive approach.
              </p>
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 rounded-lg border-l-4 border-yellow-400 mb-6 text-white shadow-lg">
                <h3 className="text-2xl font-bold text-yellow-300 mb-2">🚨 FLASH SALE: Only 5 Spots Left This Month! 🚨</h3>
                <p className="text-green-100 mb-3">
                  <strong className="text-yellow-300">SAVE $1,800 + Get FREE Bonus Package!</strong> Book by midnight <strong>August 1st</strong> and receive:
                </p>
                <ul className="text-green-100 mb-4 space-y-1">
                  <li>✅ <strong>FREE 3-month meal delivery service</strong> ($600 value)</li>
                  <li>✅ <strong>FREE body composition tracking device</strong> ($300 value)</li>
                  <li>✅ <strong>FREE nutrition coaching sessions</strong> ($900 value)</li>
                  <li>✅ <strong>FREE first month of medications</strong> ($300 savings)</li>
                </ul>
                <div className="bg-yellow-400 text-green-900 p-3 rounded-lg mb-4">
                  <p className="font-bold">🔥 MEGA SALE: Regular $300/month → Now $225/month (Save $75 monthly!)</p>
                  <p className="text-sm">Or just <strong>$112/month</strong> with 0% financing!</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/" 
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎯 Book Now - Save $1,800!
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
              <div className="relative overflow-hidden rounded-xl shadow-2xl ring-4 ring-green-200 hover:ring-green-400 transition-all duration-300">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <p className="text-green-900 font-semibold text-sm">{carouselImages[currentImageIndex].caption}</p>
                    </div>
                  </div>
                </a>
                
                {/* Navigation Arrows */}
                {carouselImages.length > 1 && (
                  <>
                    <button 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 border-2 border-white/20"
                      onClick={goToPrevious}
                      aria-label="Previous image"
                    >
                      <span className="text-xl font-bold">‹</span>
                    </button>
                    <button 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 border-2 border-white/20"
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
                          ? 'bg-gradient-to-r from-green-500 to-green-700 shadow-lg ring-2 ring-green-300 ring-offset-2' 
                          : 'bg-gray-300 hover:bg-green-400 shadow-md'
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
            <h3 className="text-2xl font-bold text-gray-800 mb-4">What is Nourish & Thrive™?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nourish & Thrive™ is our comprehensive medical weight management program that 
              addresses the root causes of weight gain through a multi-faceted approach. 
              We combine FDA-approved medications, nutritional counseling, and lifestyle coaching.
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Medical evaluation and metabolic testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>FDA-approved weight loss medications (Semaglutide, Tirzepatide)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Personalized nutrition and meal planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Weekly progress monitoring and support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Lifestyle coaching and behavioral modification</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Body composition analysis and tracking</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Who Can Benefit?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our program is designed for individuals struggling with weight management who 
              need medical supervision and comprehensive support. We help patients achieve 
              sustainable weight loss through evidence-based treatments.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-4">Ideal Candidates</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  BMI ≥ 30 or BMI ≥ 27 with comorbidities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Pre-diabetes or Type 2 Diabetes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  High Blood Pressure or Cholesterol
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Sleep Apnea or PCOS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Previous unsuccessful diet attempts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Emotional or stress eating patterns
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Nourish & Thrive™ Process</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We follow a systematic, medically-supervised approach to ensure safe and 
              sustainable weight loss. Each step is personalized to your unique needs, 
              medical history, and weight loss goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📋</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Comprehensive Assessment</h4>
              <p className="text-gray-600">Medical history, metabolic testing, and body composition analysis</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">💊</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Treatment Plan</h4>
              <p className="text-gray-600">Customized medication and nutrition protocol based on your needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📈</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Active Monitoring</h4>
              <p className="text-gray-600">Weekly check-ins, progress tracking, and plan adjustments</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Maintenance Support</h4>
              <p className="text-gray-600">Long-term lifestyle coaching and weight maintenance strategies</p>
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
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">65 lbs Lost</span>
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;After years of failed diets, Dr. Garcia&apos;s Nourish & Thrive program 
                  finally worked! The medication made it possible to control my appetite, 
                  and the nutrition coaching taught me how to eat for life. Down 65 pounds!&quot;
                </p>
                <div className="text-gray-800 font-semibold">
                  <strong>Sarah M.</strong>, Blue Springs, MO
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">A1C Normalized</span>
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;Not only did I lose 45 pounds, but my diabetes is now in remission! 
                  My A1C went from 8.2 to 5.6. Dr. Garcia&apos;s approach addresses the whole 
                  person, not just the number on the scale.&quot;
                </p>
                <div className="text-gray-800 font-semibold">
                  <strong>Michael T.</strong>, Independence, MO
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Life Changed</span>
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;The support and medical supervision made all the difference. I&apos;ve 
                  maintained my 50-pound weight loss for over a year now. This isn&apos;t 
                  a diet - it&apos;s a lifestyle transformation program that actually works.&quot;
                </p>
                <div className="text-gray-800 font-semibold">
                  <strong>Jennifer L.</strong>, Kansas City, MO
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Section */}
        <section className="mb-16 bg-green-600 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">Start Your Nourish & Thrive™ Journey</h2>
                <p className="text-xl mb-6">Take the first step toward sustainable weight loss and improved health</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-200 mr-2 mt-1">✓</span>
                    <span>Comprehensive medical and metabolic assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-200 mr-2 mt-1">✓</span>
                    <span>Personalized treatment plan with FDA-approved medications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-200 mr-2 mt-1">✓</span>
                    <span>Weekly nutrition coaching and progress monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-200 mr-2 mt-1">✓</span>
                    <span>Body composition tracking and goal adjustment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-200 mr-2 mt-1">✓</span>
                    <span>Long-term maintenance and lifestyle support</span>
                  </li>
                </ul>
                <div className="bg-green-700 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">🔥 FLASH SALE: $225/month (Save $900/year!)</h3>
                  <p className="text-green-100 mb-4">
                    12-month comprehensive program includes medications, consultations, and coaching<br/>
                    <strong>Plus FREE bonus package worth $1,800 when you book today!</strong>
                  </p>
                  <div className="mt-6">
                    <h4 className="text-lg font-bold mb-2">💳 0% Financing Available - 24 Months</h4>
                    <p className="text-green-100 mb-4">
                      Start your transformation with no interest! We partner with <strong>Cherry</strong> 
                      to offer 24-month 0% financing for qualified applicants.
                    </p>
                    <ul className="space-y-2 text-green-100 text-sm mb-4">
                      <li>• 24-month 0% financing - just <strong>$112/month</strong> (was $150/month)</li>
                      <li>• Quick approval process (usually under 60 seconds)</li>
                      <li>• No prepayment penalties</li>
                      <li>• Soft credit check won&apos;t affect your credit score</li>
                    </ul>
                    <a 
                      href="https://patient.cherry.com/garcia-family-medicine" 
                      className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check Financing Options →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg text-gray-800">
                <div className="text-center mb-8">
                  <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <img src="/images/rsvp-booking.png" alt="Book Your Nourish & Thrive Journey" className="relative max-w-48 max-h-48 mx-auto drop-shadow-2xl transform hover:scale-110 transition-transform duration-300 rounded-2xl border-4 border-white shadow-2xl object-contain" />
                  </div>
                  <button 
                    type="button"
                    onClick={() => window.open('https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/', '_blank')}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-lg font-bold text-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    🌟 RESERVE YOUR SPOT NOW
                  </button>
                  <p className="text-gray-600 mt-4 text-lg font-semibold">Only 5 transformation spots remaining this month!</p>
                </div>
                <form className="space-y-6">
                  <input type="hidden" name="service" value="nourish-thrive" />
                  <input type="hidden" name="source" value="service-page" />
                  
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      required 
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="currentWeight" className="block text-sm font-semibold mb-2">Current Weight (optional)</label>
                    <input 
                      type="text" 
                      id="currentWeight" 
                      name="currentWeight" 
                      placeholder="e.g., 180 lbs"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="goalWeight" className="block text-sm font-semibold mb-2">Goal Weight (optional)</label>
                    <input 
                      type="text" 
                      id="goalWeight" 
                      name="goalWeight" 
                      placeholder="e.g., 150 lbs"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="primaryConcern" className="block text-sm font-semibold mb-2">Primary Weight Loss Challenge</label>
                    <select 
                      id="primaryConcern" 
                      name="primaryConcern"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select your main challenge</option>
                      <option value="appetite-control">Appetite Control</option>
                      <option value="emotional-eating">Emotional Eating</option>
                      <option value="slow-metabolism">Slow Metabolism</option>
                      <option value="medical-conditions">Medical Conditions (Diabetes, PCOS, etc.)</option>
                      <option value="failed-diets">Previous Diet Failures</option>
                      <option value="lifestyle-barriers">Lifestyle/Time Barriers</option>
                      <option value="other">Other/Prefer to discuss</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeframe" className="block text-sm font-semibold mb-2">Preferred Consultation Time</label>
                    <select 
                      id="timeframe" 
                      name="timeframe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      className="mt-1 mr-3 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label className="text-sm text-gray-600">
                      I consent to receive communications about Nourish & Thrive services via email and phone. 
                      Message and data rates may apply.
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                  >
                    <img src="/images/rsvp-booking.png" alt="RSVP" className="w-6 h-6 opacity-80" />
                    <span>🌟 RESERVE MY TRANSFORMATION SPOT</span>
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
                <h4 className="text-xl font-bold text-gray-800 mb-3">How much weight can I expect to lose?</h4>
                <p className="text-gray-600">
                  Most patients lose 15-20% of their body weight within the first year. 
                  Individual results vary based on starting weight, adherence to the program, 
                  and metabolic factors. We focus on sustainable, healthy weight loss.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">What medications do you prescribe?</h4>
                <p className="text-gray-600">
                  We prescribe FDA-approved medications including Semaglutide (Ozempic/Wegovy) 
                  and Tirzepatide (Mounjaro/Zepbound), along with other proven weight management 
                  medications based on your individual needs and medical history.
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
                <h4 className="text-xl font-bold text-gray-800 mb-3">Is the program covered by insurance?</h4>
                <p className="text-gray-600">
                  Some aspects may be covered depending on your insurance plan and medical 
                  conditions. We&apos;ll help verify your benefits and work with you to make 
                  the program as affordable as possible.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">How often will I need appointments?</h4>
                <p className="text-gray-600">
                  Initially, we schedule weekly check-ins for the first month, then bi-weekly 
                  or monthly depending on your progress. This ensures optimal results and 
                  allows for timely adjustments to your treatment plan.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">What if I have other medical conditions?</h4>
                <p className="text-gray-600">
                  Our medical approach allows us to safely treat patients with diabetes, 
                  high blood pressure, PCOS, and other conditions. Weight loss often 
                  improves these conditions significantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="bg-gray-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Weight Loss Community</h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with others on their transformation journey and share your Nourish & Thrive 
              experience. Find motivation, tips, and support from our community.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <a 
                href="https://www.instagram.com/explore/tags/nourishandthrive/" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold">#NourishAndThrive</div>
                <div className="text-sm opacity-90">Instagram</div>
              </a>
              <a 
                href="https://www.facebook.com/hashtag/weightlossjourney" 
                className="bg-blue-600 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold">#WeightLossJourney</div>
                <div className="text-sm opacity-90">Facebook</div>
              </a>
              <a 
                href="https://www.instagram.com/explore/tags/healthylifestyle/" 
                className="bg-green-600 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold">#HealthyLifestyle</div>
                <div className="text-sm opacity-90">Instagram</div>
              </a>
              <a 
                href="https://www.facebook.com/hashtag/transformationtuesday" 
                className="bg-red-600 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold">#TransformationTuesday</div>
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
    <Footer />
    </>
  );
}