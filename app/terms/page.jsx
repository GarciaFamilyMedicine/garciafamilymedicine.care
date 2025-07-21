'use client';

import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Header />
      
      <main className="flex-grow" style={{ paddingTop: '85px' }}>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="opacity-90 leading-relaxed">
                By accessing and using the services of Garcia Family Medicine, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Medical Services</h2>
              <p className="opacity-90 leading-relaxed mb-3">
                Garcia Family Medicine provides Direct Primary Care services. Our services are not a substitute for health insurance and do not cover emergency care, hospitalization, or specialist services outside our practice.
              </p>
              <p className="opacity-90 leading-relaxed">
                Patients are encouraged to maintain health insurance for services not covered by our Direct Primary Care membership.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Patient Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 opacity-90">
                <li>Provide accurate and complete health information</li>
                <li>Follow agreed-upon treatment plans</li>
                <li>Keep scheduled appointments or cancel with appropriate notice</li>
                <li>Pay membership fees and any additional service charges promptly</li>
                <li>Treat our staff with respect and courtesy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Membership and Payment</h2>
              <p className="opacity-90 leading-relaxed">
                Membership fees are due monthly and cover the services outlined in your membership agreement. Additional fees may apply for certain procedures, medications, or specialized services. All fees are non-refundable unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Privacy and Confidentiality</h2>
              <p className="opacity-90 leading-relaxed">
                We are committed to protecting your privacy and maintaining the confidentiality of your medical information in accordance with HIPAA regulations. Please refer to our <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</Link> for detailed information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Appointment Cancellation</h2>
              <p className="opacity-90 leading-relaxed">
                We request 24-hour notice for appointment cancellations. Repeated no-shows or late cancellations may result in additional fees or membership termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Limitation of Liability</h2>
              <p className="opacity-90 leading-relaxed">
                Garcia Family Medicine and its providers will not be liable for any indirect, incidental, special, or consequential damages arising from the provision of medical services, except as required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Termination</h2>
              <p className="opacity-90 leading-relaxed">
                Either party may terminate the patient-physician relationship with 30 days written notice. Immediate termination may occur in cases of non-payment, threatening behavior, or other circumstances that compromise the therapeutic relationship.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Changes to Terms</h2>
              <p className="opacity-90 leading-relaxed">
                We reserve the right to modify these terms at any time. Significant changes will be communicated to patients via email or during visits. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Contact Information</h2>
              <p className="opacity-90 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-3 opacity-90">
                <p>Garcia Family Medicine</p>
                <p>801 NW St. Mary Drive</p>
                <p>Blue Springs, MO</p>
                <p>Phone: <a href="tel:816-427-5320" className="text-blue-400 hover:text-blue-300">816-427-5320</a></p>
              </div>
            </section>

            <div className="mt-8 pt-8 border-t border-white border-opacity-20">
              <p className="text-sm opacity-70 text-center">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}