'use client';

import { useState, useEffect } from 'react';

export default function ValorViewIME() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images for the carousel
  const carouselImages = [
    {
      src: "/images/valorview-ime/expert-evaluation.jpg",
      alt: "Expert medical evaluations for veterans at Garcia Family Medicine Blue Springs Missouri",
      caption: "Expert Medical Evaluations for Veterans"
    },
    {
      src: "/images/valorview-ime/thorough-documentation.jpg", 
      alt: "Thorough documentation and medical records review for VA disability claims",
      caption: "Thorough Documentation for Your Claim"
    },
    {
      src: "/images/valorview-ime/service-connected-care.jpg",
      alt: "Understanding service-connected health needs for veterans at Garcia Family Medicine",
      caption: "Understanding Your Service-Connected Health Needs"
    },
    {
      src: "/images/valorview-ime/advanced-assessment.jpg",
      alt: "Advanced medical assessments and diagnostic equipment for veteran evaluations",
      caption: "Advanced Medical Assessments"
    },
    {
      src: "/images/valorview-ime/va-benefits-partnership.jpg",
      alt: "Partnership in securing VA benefits through professional medical evaluation",
      caption: "Your Partner in Securing VA Benefits"
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
      <div className="bg-blue-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            ValorView™ IME Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Professional Nexus Letters and Independent Medical Examinations for Veterans
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Get the VA Disability Benefits You&apos;ve Earned
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dr. Garcia specializes in comprehensive medical evaluations and Nexus Letters 
                that connect your military service to your current medical conditions. With a 
                95% success rate, our ValorView™ IME service helps veterans secure the disability 
                ratings they deserve.
              </p>
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg border-l-4 border-yellow-400 mb-6 text-white shadow-lg">
                <h3 className="text-2xl font-bold text-yellow-300 mb-2">🚨 URGENT: Only 2 Evaluation Spots Left This Month! 🚨</h3>
                <p className="text-blue-100 mb-3">
                  <strong className="text-yellow-300">SAVE $1,500 + Get PRIORITY Processing!</strong> Book by midnight <strong>August 1st</strong> and receive:
                </p>
                <ul className="text-blue-100 mb-4 space-y-1">
                  <li>✅ <strong>48-hour report turnaround</strong> (normally 7-10 days)</li>
                  <li>✅ <strong>FREE comprehensive records analysis</strong> ($500 value)</li>
                  <li>✅ <strong>FREE attorney coordination</strong> ($1,000 value)</li>
                  <li>✅ <strong>Guaranteed approval or full refund</strong></li>
                </ul>
                <div className="bg-yellow-400 text-blue-900 p-3 rounded-lg mb-4">
                  <p className="font-bold">🔥 FLASH SALE: Regular $8,500 → Now $7,000 (Save $1,500!)</p>
                  <p className="text-sm">Or just <strong>$292/month</strong> with 0% financing!</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📅 Book Your Evaluation - $8,500
                  </a>
                  <a 
                    href="tel:816-427-5320" 
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors inline-flex items-center justify-center"
                  >
                    📞 Call: (816) 427-5320
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
                        index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
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
            <h3 className="text-2xl font-bold text-gray-800 mb-4">What is a Nexus Letter?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A Nexus Letter is a critical medical document that establishes the connection 
              between your military service and your current medical condition. Written by 
              an independent physician, it provides the medical evidence needed to support 
              your VA disability claim.
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">✓</span>
                <span>Medical opinion linking service to condition</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">✓</span>
                <span>Comprehensive medical records review</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">✓</span>
                <span>Legal language that meets VA requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">✓</span>
                <span>Supporting evidence and rationale</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">✓</span>
                <span>Timely report delivery based on case complexity</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Who Needs ValorView™ IME?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Veterans who have been denied disability benefits or received lower ratings 
              than expected often need independent medical evaluations to strengthen their 
              claims. Our service is essential for establishing service connection.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-4">Common Conditions We Evaluate</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  PTSD & Mental Health Conditions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Musculoskeletal Injuries
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Traumatic Brain Injury (TBI)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Hearing Loss & Tinnitus
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Agent Orange Exposure
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Gulf War Syndrome
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our ValorView™ IME Process</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We follow a thorough, systematic approach to ensure your evaluation provides 
              the strongest possible support for your VA disability claim. Each step is 
              designed to build a compelling medical case for your service connection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📋</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Records Review</h4>
              <p className="text-gray-600">Thorough analysis of your military service records and medical history</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🩺</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Medical Examination</h4>
              <p className="text-gray-600">Comprehensive evaluation focused on service-connected conditions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📝</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Nexus Letter</h4>
              <p className="text-gray-600">Detailed medical opinion with supporting evidence and rationale</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Claim Support</h4>
              <p className="text-gray-600">30-day revision support and attorney coordination if needed</p>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="mb-16 bg-gray-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Veterans We&apos;ve Helped</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">100% Rating Achieved</span>
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;After two denials, Dr. Garcia&apos;s Nexus Letter made all the difference. 
                  His thorough evaluation connected my PTSD to my service in Iraq. I&apos;m 
                  now receiving the benefits I earned after 10 years of fighting.&quot;
                </p>
                <div className="text-gray-800 font-semibold">
                  <strong>Robert M.</strong>, Army Veteran
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">70% to 100% Increase</span>
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;Dr. Garcia understood military service like no other doctor I&apos;ve seen. 
                  His evaluation helped increase my rating from 70% to 100%. The monthly 
                  benefit increase is life-changing for my family.&quot;
                </p>
                <div className="text-gray-800 font-semibold">
                  <strong>James T.</strong>, Marine Corps
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">New Claim Approved</span>
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;I waited 10 years thinking I couldn&apos;t prove my condition was service-connected. 
                  Dr. Garcia&apos;s evaluation and letter got my claim approved in just 3 months. 
                  Worth every penny of the investment.&quot;
                </p>
                <div className="text-gray-800 font-semibold">
                  <strong>Sarah K.</strong>, Air Force Veteran
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Section */}
        <section className="mb-16 bg-blue-600 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">Schedule Your ValorView™ IME Evaluation</h2>
                <p className="text-xl mb-6">Take the first step toward securing your VA disability benefits</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2 mt-1">✓</span>
                    <span>Comprehensive medical records review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2 mt-1">✓</span>
                    <span>In-person evaluation with Dr. Garcia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2 mt-1">✓</span>
                    <span>Professional Nexus Letter (10-15 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2 mt-1">✓</span>
                    <span>Timely report delivery based on case complexity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2 mt-1">✓</span>
                    <span>30-day revision support included</span>
                  </li>
                </ul>
                <div className="bg-blue-700 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">Investment: $8,500</h3>
                  <p className="text-blue-100 mb-4">
                    Average approved claim: $2,500/month = $30,000/year<br/>
                    <strong>Your evaluation pays for itself in just 3 months!</strong>
                  </p>
                  <div className="mt-6">
                    <h4 className="text-lg font-bold mb-2">💳 0% Financing Available - 24 Months</h4>
                    <p className="text-blue-100 mb-4">
                      Don&apos;t let cost delay your benefits. We partner with <strong>Cherry</strong> 
                      to offer 24-month 0% financing for qualified applicants.
                    </p>
                    <ul className="space-y-2 text-blue-100 text-sm mb-4">
                      <li>• 24-month 0% financing - just $354/month</li>
                      <li>• Quick approval process (usually under 60 seconds)</li>
                      <li>• No prepayment penalties</li>
                      <li>• Soft credit check won&apos;t affect your credit score</li>
                    </ul>
                    <a 
                      href="https://patient.cherry.com/garcia-family-medicine" 
                      className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-block"
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
                  <input type="hidden" name="service" value="valorview-ime" />
                  <input type="hidden" name="source" value="service-page" />
                  
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      required 
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="branchOfService" className="block text-sm font-semibold mb-2">Branch of Service *</label>
                    <select 
                      id="branchOfService" 
                      name="branchOfService" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your branch</option>
                      <option value="army">Army</option>
                      <option value="navy">Navy</option>
                      <option value="air-force">Air Force</option>
                      <option value="marines">Marines</option>
                      <option value="coast-guard">Coast Guard</option>
                      <option value="space-force">Space Force</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="currentRating" className="block text-sm font-semibold mb-2">Current VA Rating</label>
                    <select 
                      id="currentRating" 
                      name="currentRating"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select current rating</option>
                      <option value="none">No current rating</option>
                      <option value="0">0%</option>
                      <option value="10">10%</option>
                      <option value="20">20%</option>
                      <option value="30">30%</option>
                      <option value="40">40%</option>
                      <option value="50">50%</option>
                      <option value="60">60%</option>
                      <option value="70">70%</option>
                      <option value="80">80%</option>
                      <option value="90">90%</option>
                      <option value="100">100%</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="conditions" className="block text-sm font-semibold mb-2">Conditions Needing Evaluation</label>
                    <textarea 
                      id="conditions" 
                      name="conditions" 
                      rows={3}
                      placeholder="List the conditions you need evaluated for service connection"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      name="consent" 
                      required 
                      className="mt-1 mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="text-sm text-gray-600">
                      I consent to receive communications about ValorView™ IME services via email and phone. 
                      Message and data rates may apply.
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                  >
                    Book My Evaluation
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
                <h4 className="text-xl font-bold text-gray-800 mb-3">Why can&apos;t VA doctors write Nexus Letters?</h4>
                <p className="text-gray-600">
                  VA doctors cannot write Nexus Letters due to conflict of interest policies. 
                  An independent medical evaluation from a private physician provides the 
                  unbiased medical opinion required for your claim.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">What&apos;s included in the $8,500 evaluation?</h4>
                <p className="text-gray-600">
                  Your comprehensive evaluation includes: medical records review, in-person 
                  examination, detailed Nexus Letter (10-15 pages), DBQ completion if needed, 
                  timely report delivery, and 30-day revision support.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Do you offer financing options?</h4>
                <p className="text-gray-600">
                  Yes! We partner with <strong>Cherry</strong> to offer flexible financing with 
                  monthly payments as low as $150/month. Quick approval (usually under 60 seconds), 
                  no prepayment penalties, and soft credit checks that won&apos;t affect your credit score.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">How long does the process take?</h4>
                <p className="text-gray-600">
                  Report delivery time depends on case complexity and response requirements. 
                  Rush services are available for urgent deadlines. Most veterans receive 
                  their completed Nexus Letter based on individual case needs and urgency.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">What&apos;s your success rate?</h4>
                <p className="text-gray-600">
                  Our Nexus Letters have a 95% success rate in supporting veterans&apos; 
                  disability claims. Dr. Garcia&apos;s expertise in veteran evaluations ensures 
                  thorough, legally sound medical opinions.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Do you work with attorneys?</h4>
                <p className="text-gray-600">
                  Yes, we regularly collaborate with disability attorneys. We can coordinate 
                  directly with your legal team and provide expert testimony if needed for 
                  your case.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Can you help with denied claims?</h4>
                <p className="text-gray-600">
                  Absolutely. Many of our evaluations are for veterans whose claims were 
                  previously denied. A strong Nexus Letter often provides the missing 
                  evidence needed for successful appeals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="bg-gray-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Connect with Fellow Veterans</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our community of veterans supporting each other through the VA disability 
              claims process. Share your experience and find resources using these hashtags.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <a 
                href="https://www.instagram.com/explore/tags/valorviewime/" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold">#ValorViewIME</div>
                <div className="text-sm opacity-90">Instagram</div>
              </a>
              <a 
                href="https://www.facebook.com/hashtag/nexusletter" 
                className="bg-blue-600 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold">#NexusLetter</div>
                <div className="text-sm opacity-90">Facebook</div>
              </a>
              <a 
                href="https://www.instagram.com/explore/tags/vadisability/" 
                className="bg-green-600 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold">#VADisability</div>
                <div className="text-sm opacity-90">Instagram</div>
              </a>
              <a 
                href="https://www.facebook.com/hashtag/veteranssupport" 
                className="bg-red-600 text-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold">#VeteransSupport</div>
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