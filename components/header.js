import Image from 'next/image';
import Link from 'next/link';

export default function header() {
  return (
    <header className="flex items-center justify-between p-4 sm:p-6 bg-white shadow">
      <Image
        src="/placeholder-logo.svg"
        alt="Garcia Family Medicine Logo"
        width={120}
        height={40}
        priority
      />
      <nav className="flex gap-4 sm:gap-6">
        <Link href="/services" className="hover:text-blue-600">Services</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        <Link href="/appointment" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Book Appointment
        </Link>
      </nav>
    </header>
  );
}