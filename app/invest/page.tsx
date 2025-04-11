import React from 'react';
import InvestorHero from '../components/Invest-Hero';
import Campain from '../components/campain'; // adjust path if needed
import Chart from '../components/Chart'; // adjust path if needed
import OtherDatas from '../components/OtherDatas'; // adjust path if needed
import BaglicaMapSection from '../components/BaglicaMapSection';

 
export default function CriterHakkindaPage() {
  return (
    <main className="min-h-screen">
        <InvestorHero/>

        <Campain/>


        <BaglicaMapSection/>


          <Chart/>
          <OtherDatas/>


      
    </main>
  );
}
