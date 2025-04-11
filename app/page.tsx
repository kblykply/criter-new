import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";
import Units from "./components/Units";
import NearbyLocations from "./components/NearbyLocations";
import SitePlan from "./components/SitePlan";
import PaymentPlans from "./components/PaymentPlans";
import Photos from "./components/photos";
import AmenitiesSection from "./components/Amenities";
import Interior from "./components/Interior-Staff";
import Contact from "./components/Contact";
import Faq from "./components/Faq";




import "./globals.css";






export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <GallerySection />
      <Units />
      <NearbyLocations />
      <SitePlan />
      <PaymentPlans />
      <AmenitiesSection />

      <Photos />
      <Interior />
      <Contact />
      <Faq />

      






    </main>
  );
}
