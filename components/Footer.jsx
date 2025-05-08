import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Define partner logos with assumed paths and alt text
  const partnerLogos = [
    { src: '/partners/dpc-alliance.png', alt: 'DPC Alliance Logo' },
    { src: '/partners/aafp.png', alt: 'AAFP Logo' },
    { src: '/partners/independence-chamber.png', alt: 'Independence Chamber Logo' },
    { src: '/partners/mo-academy.png', alt: 'MO Academy Logo' },
    { src: '/partners/obesity-medicine.png', alt: 'Obesity Medicine Logo' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      {/* Partner Logos */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-24 bg-gray-800 p-4 rounded"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <p className="text-center mb-12">We are proud partners of the above associations.</p>

      <hr className="border-gray-700 my-8" />

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm">
            Call <a href="tel:+18164275320" className="hover:underline">(816) 427-5320</a> | Text{' '}
            <a href="sms:8167082719" className="hover:underline">(816) 708-2719</a> | Fax{' '}
            <a href="tel:8888072718" className="hover:underline">(888) 807-2718</a>
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Hours</h4>
          <p className="text-sm">Mon: CLOSED | Tue-Fri: 11-7 PM | Sat: 12-4PM | Sun: CLOSED</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Location</h4>
          <p className="text-sm">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=801+NW+St+Mary+Dr+Suite+209,+Blue+Springs,+MO+64014"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              801 NW St. Mary Drive, Suite 209, Blue Springs, MO 64014
            </a>
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-3xl mx-auto mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.3456789012345!2d-94.2654326846323!3d39.01234567954789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ee627bb05011%3A0x8a3b8f5a5e9a2d4f!2s801%20NW%20St%20Mary%20Dr%20Suite%20209%2C%20Blue%20Springs%2C%20MO%2064014!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Gigi's Safe House Logo */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-800 p-4 rounded">
          <Image
            src="/gigisafehouse.png"
            alt="Gigi's Safe House Logo"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Navigation Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        <Link href="/blog" className="text-sm hover:underline">
          Health Safety | Blog
        </Link>
        <Link href="/tess-talk-spotify" className="text-sm hover:underline">
          Tess Talk | Podcast
        </Link>
        <Link href="/meet-dr-tess-garcia" className="text-sm hover:underline">
          Meet the Doctor
        </Link>
        <Link href="/affordable-healthcare-memberships" className="text-sm hover:underline">
          Memberships
        </Link>
        <Link href="/announcements" className="text-sm hover:underline">
          Announcements
        </Link>
        <Link href="/department-of-transportation-physicals" className="text-sm hover:underline">
          DOT Certifications
        </Link>
        <Link href="/independent-medical-examinations" className="text-sm hover:underline">
          Medical Examinations
        </Link>
        <Link href="/medicare-services" className="text-sm hover:underline">
          Medicare Services
        </Link>
        <Link href="/mental-health-services" className="text-sm hover:underline">
          Mental Health
        </Link>
        <Link href="/pain-management-services" className="text-sm hover:underline">
          Pain Management
        </Link>
        <Link href="/telehealth-services" className="text-sm hover:underline">
          Telehealth
        </Link>
        <Link href="/veterans-services" className="text-sm hover:underline">
          Veteran Services
        </Link>
        <Link href="/weight-management-services" className="text-sm hover:underline">
          Weight Management
        </Link>
        <Link href="/faq" className="text-sm hover:underline">
          Join the Family
        </Link>
        <Link href="/faq" className="text-sm hover:underline">
          FAQs
        </Link>
        <Link href="/contact-us" className="text-sm hover:underline">
          Contact
        </Link>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Newsletter */}
      <div className="max-w-md mx-auto mb-12">
        <h2 className="text-xl font-semibold mb-2">Subscribe</h2>
        <p className="text-sm mb-4">Sign up with your email address to receive news and updates.</p>
        <form className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow px-4 py-2 rounded text-gray-900"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium"
          >
            Sign Up
          </button>
        </form>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Copyright and Legal */}
      <div className="text-center text-sm">
        <div className="flex justify-center gap-4 mb-2">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms-of-use" className="hover:underline">
            Terms of Use
          </Link>
          <span>|</span>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </div>
        <p>Copyright © {currentYear} Garcia Family Medicine. All Rights Reserved.</p>
      </div>
    </footer>
  );
}