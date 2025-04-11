'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Hotspot = {
  id: number;
  x: string;
  y: string;
  title: string;
  description: string;
};

type Facility = {
  icon: string;
  label: string;
};

const images = [
  {
    name: 'Odalar',
    src: '/14.png',
    hotspots: [
      {
        id: 1,
        x: '30%',
        y: '40%',
        title: 'Duvar',
        description: 'Kum beyazı ısı ve ses yalıtımlı duvarlar.',
      },
      {
        id: 2,
        x: '85%',
        y: '37%',
        title: 'Pencereler',
        description: 'Siyah Aliminyum ısı yalıtımlı pencereler.',
      },
    ],
    facilities: [
      { icon: '/heating.png', label: 'Merkezi Isıtma' },
      { icon: '/tv.png', label: 'Kablo TV' },
      { icon: '/hava.png', label: 'Havalandırma Sistemi' },
    ],
  },
  {
    name: 'Banyo',
    src: '/banyogörsel.jpg',
    hotspots: [
      {
        id: 3,
        x: '50%',
        y: '85%',
        title: 'Zemin',
        description: 'Adriana mokka seramik.',
      },
      {
        id: 4,
        x: '65%',
        y: '30%',
        title: 'Duvar',
        description: 'Adriana latte seramik duvar kaplaması.',
      },
    ],
    facilities: [
      { icon: '/heating.png', label: 'Merkezi Isıtma' },
      { icon: '/hava.png', label: 'Havalandırma Sistemi' },
    ],
  },
];

export default function InteriorHotspotsSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = images[selectedImageIndex];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveHotspot(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-16 bg-white overflow-hidden">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Daire İçi Detaylar</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          İç mekan görseli üzerinde tıklanabilir alanlara tıklayarak detayları görüntüleyin.
        </p>

        {/* Toggle Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          {images.map((img, i) => (
            <button
              key={img.name}
              onClick={() => {
                setSelectedImageIndex(i);
                setActiveHotspot(null);
              }}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                selectedImageIndex === i
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {img.name}
            </button>
          ))}
        </div>
      </div>

      {/* Image with Hotspots */}
      <div
        className="relative max-w-6xl mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-gray-200"
        ref={containerRef}
      >
        <Image
          src={current.src}
          alt={current.name}
          fill
          className="object-cover w-full h-full"
        />

        {current.hotspots.map((spot) => (
          <div
            key={spot.id}
            className="absolute z-20"
            style={{ top: spot.y, left: spot.x, transform: 'translate(-50%, -50%)' }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveHotspot(activeHotspot === spot.id ? null : spot.id);
            }}
          >
            <div className="w-5 h-5 bg-red-600 z-200 rounded-full z-100 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition" />
            <AnimatePresence>
              {activeHotspot === spot.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute z-100 top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-gray-800 text-sm rounded-xl shadow-xl p-3 z-30"
                >
                  <h4 className="font-semibold text-base mb-1">{spot.title}</h4>
                  <p className="text-xs leading-snug">{spot.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Facility Boxes Bottom Left */}
        <div className="absolute bottom-4 left-4 z-30 flex flex-wrap gap-3 bg-white/70 p-3 rounded-xl backdrop-blur-md shadow-md">
          {current.facilities.map((fac, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-800">
              <Image src={fac.icon} alt={fac.label} width={18} height={18} />
              {fac.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
