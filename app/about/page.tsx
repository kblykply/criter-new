import React from 'react';
import AboutSection from '../components/HakkindaSection'; // adjust path if needed
import Vm from '../components/Vm'; // adjust path if needed
import Why from '../components/Why'; // adjust path if needed


export default function CriterHakkindaPage() {
  return (
    <main className="min-h-screen">
      <AboutSection/>
      <Vm/>
      <Why/>
    </main>
  );
}
