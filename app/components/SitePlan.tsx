'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const blocks = [
  {
    id: 'block-a',
    name: 'A Blok',
    position: 'bottom-[30%] left-[48%]',
    hoverImage: '/A-block.png',
    info: '14 kattan ve 104 daireden oluşur. Altında 7 adet mağaza vardır. 14 adet 1+1, 90 adet 2 + 1 Amerikan Mutfak daire bulunmaktadır. Otoparka direkt ulaşımı vardır.',
  },
  {
    id: 'block-b',
    name: 'B Blok',
    position: 'top-[50%] left-[75%]',
    hoverImage: '/B-block.png',
    info: 'B Blok 14 kattan ve 104 daireden oluşur. Altında 7 adet mağaza vardır. 14 adet 1+1, 90 adet 2+1 Amerikan Mutfak bulunmaktadır. Otoparka direkt ulaşımı vardır.',
  },
  {
    id: 'block-c',
    name: 'C Blok',
    position: 'top-[20%] left-[58%]',
    hoverImage: '/C-block.png',
    info: 'C Blok 14 Kattan oluşur 105 Daire vardır. 15 Adet 1+1, 30 Adet 2+1 Amerikan Mutfak, 60 Adet 2+1 daire bulunmaktadır.  Otoparka direkt Ulaşımı vardır.',
  },
  {
    id: 'block-d',
    name: 'D Blok',
    position: 'top-[10%] left-[45%]',
    hoverImage: '/D-block.png',
    info: 'D Blok 14 Kattan oluşur 105 Daire vardır. 15 Adet 1+1, 30 Adet 2+1 Amerikan Mutfak, 60 Adet 2+1 daire bulunmaktadır.  Otoparka direkt Ulaşımı vardır.',
  },
  {
    id: 'block-ef',
    name: 'E-F Blok',
    position: 'top-[20%] left-[22%]',
    hoverImage: '/E-F-block.png',
    info: 'E ve F Blok 308 1+1 daireden oluşur.',
  },
];

export default function SitePlanBlocks() {
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);
  const [activeBlock, setActiveBlock] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const activeHoverImage = blocks.find((b) => b.id === hoveredBlock)?.hoverImage || null;
  const activeBlockData = blocks.find((b) => b.id === activeBlock);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const clickedElement = e.target as HTMLElement;
      if (!clickedElement.closest('[data-block]')) {
        setActiveBlock(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-16 bg-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-12 flex flex-row-reverse items-center gap-4"
      >
        <div className="w-12 h-12 flex-shrink-0">
          <Image src="/side-plan-icon.png" alt="Plan İkonu" width={48} height={48} />
        </div>
        <div className="text-right">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-1">Proje Vaziyet Planı</h2>
          <p className="mt-1 text-gray-600">
            CRITER Bağlıca projesinin blok bilgilerini buradan inceleyebilirsin.
          </p>
        </div>
      </motion.div>

      {/* Site Plan */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative max-w-6xl mx-auto z-20"
        ref={wrapperRef}
      >
        {/* Main image */}
        <Image
          src="/side_plans.jpg"
          alt="Vaziyet Planı"
          width={1200}
          height={800}
          className="w-full h-auto rounded-xl"
        />

        {/* Hover image overlay */}
        {activeHoverImage && (
          <Image
            src={activeHoverImage}
            alt="Hover Overlay"
            width={1200}
            height={800}
            className="absolute top-0 left-0 w-full h-auto rounded-xl z-10 pointer-events-none"
          />
        )}

        {/* Blok buttons */}
        {blocks.map((block) => {
          const isActive = activeBlock === block.id;
          return (
            <motion.div
              key={block.id}
              data-block
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className={`absolute ${block.position} transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-40`}
              onMouseEnter={() => setHoveredBlock(block.id)}
              onMouseLeave={() => setHoveredBlock(null)}
              onClick={() => setActiveBlock(block.id)}
            >
              <div
                className={`relative z-30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm backdrop-blur-sm transition ${
                  isActive ? 'bg-black text-white' : 'bg-white/80 text-gray-800'
                }`}
              >
                {block.name}
              </div>

              {/* Desktop Info Box */}
              {isActive && (
                <div className="hidden md:block absolute z-50 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white border border-gray-300 text-sm rounded-xl px-4 py-3 w-[260px] text-left shadow-2xl">
                  <h4 className="text-gray-900 font-semibold text-base mb-1">{block.name}</h4>
                  <p className="text-gray-600 text-xs leading-snug whitespace-pre-line">{block.info}</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Mobile Info Box */}
      {activeBlockData && (
        <div className="md:hidden mt-6 max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl shadow-md px-4 py-3 text-left">
          <h4 className="text-gray-900 font-semibold text-base mb-1">{activeBlockData.name}</h4>
          <p className="text-gray-600 text-xs leading-snug whitespace-pre-line">{activeBlockData.info}</p>
        </div>
      )}
    </section>
  );
}
