'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const plans = [
  {
    type: '1+1 Daire',
    image: '/11dagire.png',
    totalArea: '50.00 m²',
    netArea: '44 m²',
    rooms: [
      { name: 'Salon', area: '24 m²' },
      { name: 'Yatak Odası', area: '11 m²' },
      { name: 'Banyo/wc', area: '4 m²' },
      { name: 'Çamaşır Odası', area: '1 m²' },
      { name: 'Balkon', area: '4 m²' },
    ],
    gallery: ['/15.png', '/12.png', '/16.png'],
  },
  {
    type: '2+1 Amerikan Mutfak',
    image: '/21bagimli.png',
    totalArea: '79.10 m²',
    netArea: '71 m²',
    rooms: [
      { name: 'Salon', area: '22.50 m²' },
      { name: 'Yatak Odası', area: '10.50 m²' },
      { name: 'Ebeveyn Yatak Odası', area: '15 m²' },
      { name: 'Ebeveyn Banyosu', area: '4 m²' },
      { name: 'Banyo/wc', area: '4 m²' },
      { name: 'Antre', area: '8 m²' },
      { name: 'Balkon', area: '7 m²' },
    ],
    gallery: ['/14.png', '/13.png', '/21.png', '/16.png'],
  },
  {
    type: '2+1 Daire',
    image: '/21bagimsiz.png',
    totalArea: '92.00 m²',
    netArea: '81 m²',
    rooms: [
      { name: 'Salon', area: '23 m²' },
      { name: 'Mutfak', area: '10 m²' },
      { name: 'Ebeveyn Yatak Odası', area: '13 m²' },
      { name: 'Ebeveyn Banyosu', area: '3 m²' },
      { name: 'Yatak Odası', area: '11 m²' },
      { name: 'Banyo/wc', area: '4 m²' },
      { name: 'Antre', area: '10 m²' },
      { name: 'Balkon', area: '7 m²' },
    ],
    gallery: ['/21bagimsiz1.jpg', '/21galeri1.jpeg', '/21bagimsiz2.jpeg'],
  },
];


export default function FloorPlans() {
  const [selected, setSelected] = useState(0);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);
  const active = plans[selected];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 bg-white">
      {/* Butonlar */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {plans.map((plan, i) => (
          <button
            key={plan.type}
            onClick={() => setSelected(i)}
            className={`px-5 py-2 rounded-full text-sm md:text-base font-medium shadow transition-all duration-300 ${
              i === selected
                ? 'bg-black text-white scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {plan.type}
          </button>
        ))}
      </div>

      {/* İçerik */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start"
      >
        {/* Sol Bilgi */}
        <div className="w-full lg:w-1/2">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
    {active.type}
  </h3>

  {/* Room list */}
  <ul className="mb-6 space-y-2 text-gray-800">
    {active.rooms.map((room, idx) => (
      <li
        key={idx}
        className="flex justify-between items-center max-w-sm text-sm sm:text-base border-b border-gray-200 pb-1"
      >
        <span>{room.name}:</span>
        <span className="font-semibold">{room.area}</span>
      </li>
    ))}
  </ul>

  {/* Area details */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
    <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
      Brüt Alan: {active.totalArea}
    </div>
    {active.netArea && (
      <div className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
        Net Alan: {active.netArea}
      </div>
    )}
  </div>
          {/* Galeri */}
          <div className="mt-6">
            <Swiper spaceBetween={16} slidesPerView={'auto'} className="w-full">
              {active.gallery.map((src, idx) => (
                <SwiperSlide key={idx} style={{ width: 'auto' }}>
                  <Image
                    src={src}
                    alt={`Galeri ${idx}`}
                    width={180}
                    height={120}
                    className="rounded-lg object-cover cursor-pointer hover:scale-105 transition"
                    onClick={() => setLightboxImageIndex(idx)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Sağ Plan Görseli */}
        <div className="w-full lg:w-1/2">
          <Image
            src={active.image}
            alt={`${active.type} Plan`}
            width={600}
            height={600}
            className="mx-auto object-contain rounded-xl"
          />
        </div>
      </motion.div>

      {/* Lightbox */}
      <Dialog open={lightboxImageIndex !== null} onClose={() => setLightboxImageIndex(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-3xl w-full relative">
            {lightboxImageIndex !== null && (
              <>
                {/* Kapat */}
                <button
                  onClick={() => setLightboxImageIndex(null)}
                  className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
                >
                  ✕
                </button>

                {/* Geri */}
                <button
                  onClick={() =>
                    setLightboxImageIndex((prevIndex) =>
                      prevIndex === 0 ? active.gallery.length - 1 : prevIndex! - 1
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"
                >
                  ‹
                </button>

                {/* Görsel */}
                <Image
                  src={active.gallery[lightboxImageIndex!]}
                  alt={`Galeri ${lightboxImageIndex}`}
                  width={1000}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />

                {/* İleri */}
                <button
                  onClick={() =>
                    setLightboxImageIndex((prevIndex) =>
                      prevIndex === active.gallery.length - 1 ? 0 : prevIndex! + 1
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"
                >
                  ›
                </button>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
