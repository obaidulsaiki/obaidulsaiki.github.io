import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/animations/PageTransition';

export const metadata: Metadata = {
  metadataBase: new URL('https://obaidulhaque.me'),
  title: {
    default: 'Obaidul Haque | AI Engineer & Researcher',
    template: '%s | Obaidul Haque',
  },
  description:
    'Personal portfolio and research website of Obaidul Haque — AI Engineer & Researcher specializing in Computer Vision, Natural Language Processing, and Signal Processing.',
  keywords: [
    'Obaidul Haque',
    'AI Engineer',
    'Researcher',
    'Computer Vision',
    'Natural Language Processing',
    'Signal Processing',
    'EEG Analysis',
    'Java Spring Boot',
    'Next.js',
    'IUBAT',
  ],
  authors: [{ name: 'Obaidul Haque', url: 'https://obaidulhaque.me' }],
  icons: {
    icon: '/images/MyPicture.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-canvas text-ink-primary antialiased min-h-screen flex flex-col selection:bg-accent-soft selection:text-ink-primary">
        <Navbar />
        <main className="flex-1 w-full mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
