
import "./globals.css";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatbBot';



import './globals.css'
import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'CRITER Rezidans',
  description: '...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={unbounded.className}>
      <Navbar />
      <ChatBot />


        {children}
        <Footer />

      </body>
    </html>
  );
}

