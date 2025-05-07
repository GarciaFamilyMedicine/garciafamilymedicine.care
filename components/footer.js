import Link from 'next/link';

export default function footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6 text-center">
      <p>© {currentYear} Garcia Family Medicine. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link href="/terms" className="hover:underline">Terms of Service</Link>
      </div>
    </footer>
  );
}