import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Garcia Family Medicine | Family Doctor in Kansas City & Blue Springs, MO",
  description: "Garcia Family Medicine in Blue Springs, Missouri, provides personalized healthcare for all ages. Led by Dr. Tess Garcia, we specialize in preventive care, chronic disease management, and wellness exams. Offering affordable memberships and Independent Medical Examinations (IMEs). Compassionate, direct primary care for your family's needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
