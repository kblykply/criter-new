import React from 'react';
import AboutSection from '../components/HakkindaSection'; // adjust path if needed
import Vm from '../components/Vm'; // adjust path if needed
import Why from '../components/Why'; // adjust path if needed
import Team from '../components/Team'; // adjust path if needed


import { Unbounded } from 'next/font/google';
const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
}); 
export default function CriterHakkindaPage() {
  return (
    <main className="min-h-screen">
      <AboutSection/>
      <Vm/>
      <Why/>
      <Team/>
      {/* Add more sections as needed */}
      {/* Example: */}
      {/* <AnotherSection /> */}
      {/* Add more sections as needed */}
      {/* Example: */}
      {/* <AnotherSection /> */}
      {/* Add more sections as needed */}
    </main>
  );
}
