import React from 'react';
import ContactHero from '../components/Contact-Hero';
import Info from '../components/Info'; // adjust path if needed
import FormSection from '../components/form-section'; // adjust path if needed
import Map from '../components/map'; // adjust path if needed
import LiveSupport from '../components/LiveSupport'; // adjust path if needed
import Social from '../components/Social'; // adjust path if needed
import Ai from '../components/ai'; // adjust path if needed





import { Unbounded } from 'next/font/google';
const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
}); 

export default function CriterHakkindaPage() {
  return (
    <main className="min-h-screen">
     <ContactHero/>
     <Info/>
     <FormSection/>
     <Map/>
    <LiveSupport/>
    <Ai/>
    <Social/>




    </main>
  );
}
