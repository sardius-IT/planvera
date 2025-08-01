// app/layout.js

import './globals.css';
import TopInfoBar from './components/TopInfoBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Planvera Consultancy | Study Abroad, Career & Skill Development',
  description:
    'Planvera is a trusted consultancy providing guidance for study abroad, career advancement, personality development, and professional skill building.',
  icons: {
    icon: '/favicon.png', // This is used by Next.js for metadata
  },
  openGraph: {
    title: 'Planvera Consultancy | Unlock Global Opportunities',
    description:
      'Empowering students and professionals with study abroad support, career counseling, and skill development training. Trusted by thousands worldwide.',
    url: 'https://planvera.com',
    siteName: 'Planvera',
    images: [
      {
        url: '/planvera-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Planvera Consultancy – Study & Career Experts',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planvera Consultancy | Global Education & Career Experts',
    description:
      'Explore global education, career paths, and life skills with Planvera. Your trusted consultancy for success abroad and at home.',
    images: ['/planvera-og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Explicitly add favicon for better reliability */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans bg-white text-gray-900">
        <TopInfoBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

