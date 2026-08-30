import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dovoix Foundation — Building Stronger Communities & Creating Opportunities',
  description: 'Official website of Dovoix Foundation. Social impact, community development, educational programs, and youth empowerment projects across Nigeria.',
  keywords: 'Dovoix Foundation, Social Impact, Youth Education, Digital Skills Nigeria, Community Development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-brand-teal selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
