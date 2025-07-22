'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import styles from './faqs.module.css';

const faqs = [
  {
    question: "What is Direct Primary Care?",
    answer: "Direct Primary Care is a healthcare model where patients pay a monthly membership fee directly to their physician for comprehensive primary care services. This eliminates insurance middlemen, allowing for longer appointments, same-day access, and a more personal relationship with your doctor.",
    category: "general"
  },
  {
    question: "Do you accept insurance?",
    answer: "We operate on a Direct Primary Care model, which means we don't bill insurance for primary care services. However, we can provide documentation for you to submit to your insurance for potential reimbursement. We recommend keeping insurance for emergencies, hospitalizations, and specialist care.",
    category: "billing"
  },
  {
    question: "What services are included in membership?",
    answer: "Your membership includes unlimited office visits, same-day appointments, extended appointments, basic procedures, chronic disease management, preventive care, and direct access to Dr. Garcia via phone or text. Some specialized services like CoreLift™ therapy have additional fees.",
    category: "services"
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by calling us at 816-427-5320, texting us, or using our online scheduling system. Members typically get same-day or next-day appointments.",
    category: "appointments"
  },
  {
    question: "What are your office hours?",
    answer: "Our office hours are Monday through Friday, 8:00 AM to 7:00 PM. We also offer after-hours access for urgent concerns for our members.",
    category: "general"
  },
  {
    question: "Where are you located?",
    answer: "We are located at 801 NW St. Mary Drive in Blue Springs, MO. We serve patients from Blue Springs, Independence, Lee's Summit, and the greater Kansas City metro area.",
    category: "general"
  },
  {
    question: "What makes Garcia Family Medicine different?",
    answer: "We combine faith-based compassionate care with modern medicine. Dr. Garcia takes time to listen, offers personalized treatment plans, and treats each patient like family. Our Direct Primary Care model ensures you get the time and attention you deserve.",
    category: "general"
  },
  {
    question: "Do you offer telehealth services?",
    answer: "Yes! We offer telehealth appointments for established patients when appropriate. This is especially convenient for follow-ups, medication management, and minor concerns.",
    category: "services"
  },
  {
    question: "What is CoreLift™ Therapy?",
    answer: "CoreLift™ is our innovative therapy that combines pelvic floor strengthening with overall core fitness. It's particularly effective for issues like urinary incontinence, pelvic floor dysfunction, and core weakness. Each session is personalized to your specific needs.",
    category: "services"
  },
  {
    question: "How much does membership cost?",
    answer: "Our membership fees vary based on age and family size. Individual adult memberships start at an affordable monthly rate. We offer discounts for families and children. Contact us for specific pricing tailored to your needs.",
    category: "billing"
  },
  {
    question: "Can I use my HSA/FSA for membership fees?",
    answer: "Yes! Direct Primary Care membership fees are typically eligible expenses for Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA). We can provide the necessary documentation for reimbursement.",
    category: "billing"
  },
  {
    question: "What if I need to see a specialist?",
    answer: "We maintain relationships with trusted specialists in the area and can provide referrals when needed. While specialist visits aren't covered by your DPC membership, we'll help coordinate your care and ensure smooth transitions.",
    category: "services"
  },
  {
    question: "Do you offer same-day appointments?",
    answer: "Yes! One of the benefits of our Direct Primary Care model is the ability to offer same-day appointments for urgent concerns. We reserve time each day for acute visits, ensuring you get care when you need it.",
    category: "appointments"
  },
  {
    question: "What happens in case of an emergency?",
    answer: "For life-threatening emergencies, always call 911 or go to the nearest emergency room. For urgent but non-emergency concerns, contact us first - we can often handle issues that might otherwise send you to urgent care.",
    category: "general"
  },
  {
    question: "Can I cancel my membership anytime?",
    answer: "Yes, you can cancel your membership with 30 days notice. We believe in earning your trust and business every month. There are no long-term contracts or cancellation fees.",
    category: "billing"
  }
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'services', label: 'Services' },
    { id: 'billing', label: 'Billing & Insurance' },
    { id: 'appointments', label: 'Appointments' }
  ];

  useEffect(() => {
    let filtered = faqs;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredFaqs(filtered);
    setOpenIndex(null); // Reset open items when filtering
  }, [searchTerm, activeCategory]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate floating dots
  const floatingDots = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 20}s`,
    animationDuration: `${20 + Math.random() * 10}s`
  }));

  return (
    <div className={`${styles.pageWrapper} min-h-screen flex flex-col`}>
      {/* Animated Background */}
      <div className={styles.animatedBackground} />
      
      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        {floatingDots.map(dot => (
          <div
            key={dot.id}
            className={styles.floatingDot}
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.animationDelay,
              animationDuration: dot.animationDuration
            }}
          />
        ))}
      </div>

      <Header />
      
      <main className={`${styles.mainContent} flex-grow`}>
        <div className={styles.container}>
          {/* Hero Section */}
          <div className={styles.heroSection}>
            <h1 className={styles.heroTitle}>
              Frequently Asked Questions
            </h1>
            <p className={styles.heroSubtitle}>
              Find answers to common questions about our practice, services, and Direct Primary Care model
            </p>
            
            {/* Search Bar */}
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search questions..."
                className={styles.searchBar}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className={styles.categoryFilters}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className={styles.faqGrid}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={styles.faqQuestion}
                  >
                    <span className={styles.faqQuestionText}>{faq.question}</span>
                    <div className={styles.faqIcon}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 7.5L10 12.5L15 7.5" />
                      </svg>
                    </div>
                  </button>
                  
                  <div className={styles.faqAnswer}>
                    <div className={styles.faqAnswerContent}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-white opacity-70">
                  No questions found matching your search.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="mt-4 text-blue-400 hover:text-blue-300 underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Premium CTA Section */}
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to Experience Better Healthcare?</h2>
            <p className={styles.ctaDescription}>
              Join our Direct Primary Care practice and discover what healthcare should be - personal, accessible, and focused on you.
            </p>
            <div className={styles.ctaButtons}>
              <a 
                href="tel:816-427-5320"
                className={styles.primaryButton}
              >
                Call Now: 816-427-5320
              </a>
              <a 
                href="/contact"
                className={styles.secondaryButton}
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}