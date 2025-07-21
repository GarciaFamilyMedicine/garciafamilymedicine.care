'use client';

import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Header />
      
      <main className="flex-grow" style={{ paddingTop: '85px' }}>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Commitment to Privacy</h2>
              <p className="opacity-90 leading-relaxed">
                Garcia Family Medicine is committed to protecting the privacy and security of your personal health information. This Privacy Policy explains how we collect, use, and safeguard your information in compliance with HIPAA (Health Insurance Portability and Accountability Act) and other applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2 opacity-90">
                <li>Personal identification information (name, address, phone number, email)</li>
                <li>Medical history and health records</li>
                <li>Insurance information (if applicable)</li>
                <li>Payment information</li>
                <li>Communications between you and our practice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
              <p className="opacity-90 leading-relaxed mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 opacity-90">
                <li>Provide medical treatment and healthcare services</li>
                <li>Process payments and manage your account</li>
                <li>Communicate with you about appointments and health matters</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and patient care</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Information Sharing and Disclosure</h2>
              <p className="opacity-90 leading-relaxed mb-3">
                We do not sell, rent, or share your personal health information with third parties except as required or permitted by law, including:
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-90">
                <li>With your explicit consent</li>
                <li>For treatment purposes with other healthcare providers</li>
                <li>For payment processing</li>
                <li>When required by law or court order</li>
                <li>To protect public health and safety</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
              <p className="opacity-90 leading-relaxed mb-3">Under HIPAA, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 opacity-90">
                <li>Access and receive copies of your medical records</li>
                <li>Request corrections to your health information</li>
                <li>Request restrictions on uses and disclosures</li>
                <li>Choose how we communicate with you</li>
                <li>Receive a list of disclosures of your health information</li>
                <li>File a complaint if you believe your privacy rights have been violated</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
              <p className="opacity-90 leading-relaxed">
                We implement appropriate physical, technical, and administrative safeguards to protect your health information from unauthorized access, use, or disclosure. This includes secure storage systems, encrypted communications, and staff training on privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Website Privacy</h2>
              <p className="opacity-90 leading-relaxed">
                Our website may collect general usage data through cookies and analytics tools. This information is used to improve our website and services. We do not collect personal health information through our website unless you explicitly provide it through secure forms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
              <p className="opacity-90 leading-relaxed">
                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy regularly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
              <p className="opacity-90 leading-relaxed mb-3">
                If you have questions about this Privacy Policy or how we handle your information, please contact our Privacy Officer:
              </p>
              <div className="opacity-90">
                <p>Garcia Family Medicine</p>
                <p>Attn: Privacy Officer</p>
                <p>801 NW St. Mary Drive</p>
                <p>Blue Springs, MO</p>
                <p>Phone: <a href="tel:816-427-5320" className="text-blue-400 hover:text-blue-300">816-427-5320</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Complaints</h2>
              <p className="opacity-90 leading-relaxed">
                If you believe your privacy rights have been violated, you may file a complaint with our practice or with the Secretary of the Department of Health and Human Services. We will not retaliate against you for filing a complaint.
              </p>
            </section>

            <div className="mt-8 pt-8 border-t border-white border-opacity-20">
              <p className="text-sm opacity-70 text-center">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm opacity-70 text-center mt-2">
                <Link href="/terms" className="text-blue-400 hover:text-blue-300 underline">Terms of Service</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}