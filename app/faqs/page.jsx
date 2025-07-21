'use client';

import { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import styles from '../page.module.css';

const faqs = [
  {
    question: "What is Direct Primary Care?",
    answer: "Direct Primary Care is a healthcare model where patients pay a monthly membership fee directly to their physician for comprehensive primary care services. This eliminates insurance middlemen, allowing for longer appointments, same-day access, and a more personal relationship with your doctor."
  },
  {
    question: "Do you accept insurance?",
    answer: "We operate on a Direct Primary Care model, which means we don't bill insurance for primary care services. However, we can provide documentation for you to submit to your insurance for potential reimbursement. We recommend keeping insurance for emergencies, hospitalizations, and specialist care."
  },
  {
    question: "What services are included in membership?",
    answer: "Your membership includes unlimited office visits, same-day appointments, extended appointments, basic procedures, chronic disease management, preventive care, and direct access to Dr. Garcia via phone or text. Some specialized services like CoreLift™ therapy have additional fees."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by calling us at 816-427-5320, texting us, or using our online scheduling system. Members typically get same-day or next-day appointments."
  },
  {
    question: "What are your office hours?",
    answer: "Our office hours are Monday through Friday, 8:00 AM to 7:00 PM. We also offer after-hours access for urgent concerns for our members."
  },
  {
    question: "Where are you located?",
    answer: "We are located at 801 NW St. Mary Drive in Blue Springs, MO. We serve patients from Blue Springs, Independence, Lee's Summit, and the greater Kansas City metro area."
  },
  {
    question: "What makes Garcia Family Medicine different?",
    answer: "We combine faith-based compassionate care with modern medicine. Dr. Garcia takes time to listen, offers personalized treatment plans, and treats each patient like family. Our Direct Primary Care model ensures you get the time and attention you deserve."
  },
  {
    question: "Do you offer telehealth services?",
    answer: "Yes! We offer telehealth appointments for established patients when appropriate. This is especially convenient for follow-ups, medication management, and minor concerns."
  }
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Header />
      
      <main className="flex-grow" style={{ paddingTop: '85px' }}>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-lg mb-12 opacity-90">
            Find answers to common questions about our practice
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-200 hover:bg-opacity-15"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  <span className="text-2xl transition-transform duration-200" 
                        style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)' }}>
                    +
                  </span>
                </button>
                
                <div 
                  className="overflow-hidden transition-all duration-300"
                  style={{ 
                    maxHeight: openIndex === index ? '500px' : '0',
                    opacity: openIndex === index ? 1 : 0
                  }}
                >
                  <p className="px-6 pb-4 text-base leading-relaxed opacity-90">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="mb-6 opacity-90">
              We're here to help! Contact us and we'll be happy to answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:816-427-5320"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors"
              >
                Call: 816-427-5320
              </a>
              <a 
                href="/contact"
                className="inline-block px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full font-semibold transition-colors"
              >
                Contact Us Online
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}