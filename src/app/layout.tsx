import type { Metadata } from 'next';
import { League_Spartan, Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NewsletterModal } from '@/components/NewsletterModal';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DoVoix Foundation — Building Stronger Communities & Creating Opportunities',
  description: 'Official website of DoVoix Foundation. Social impact, community development, educational programs, and youth empowerment projects across Nigeria.',
  keywords: 'DoVoix Foundation, Social Impact, Youth Education, Digital Skills Nigeria, Community Development',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${poppins.variable}`}>
      <body className="flex flex-col min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-brand-teal selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <NewsletterModal />
      </body>
    </html>
  );
}
