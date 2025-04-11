'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function AmenitiesSection() {
  const amenities = [
    {
      name: '7/24 Güvenlik',
      icon: '/safe-icon.png',
      bg: '/safe-photo.png',
      description: 'Giriş çıkışlar kontrol altında.',
    },
    {
      name: 'Spor Alanı',
      icon: '/gym-icon.png',
      bg: '/basketball.jpg',
      description: 'Modern ekipmanlarla donatılmış spor alanı.',
    },
    {
      name: 'Yürüyüş Parkuru',
      icon: '/walk-icon.png',
      bg: '/walk-photo.png',
      description: 'Doğayla iç içe keyifli yürüyüş alanı.',
    },
    {
      name: 'Mağazalar',
      icon: '/coffee-icon.png',
      bg: '/shop.jpg',
      description: 'Komşularla buluşma ve sosyalleşme alanı.',
    },
    {
      name: 'Kapalı Otopark',
      icon: '/park-icon.png',
      bg: '/parking-photo.png',
      description: 'Geniş, güvenli ve kapalı otopark.',
    },
    {
      name: 'Çocuk Parkı',
      icon: '/pool-icon.png',
      bg: '/playground.jpg',
      description: 'Sıcak yaz günlerinde serinlemek için ideal.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 md:px-16 bg-white overflow-hidden">
      {/* Filigran background image */}
      <div className="absolute right-0 bottom-0 w-[40%] opacity-5 pointer-events-none z-0">
        <Image
          src="/filigran.png"
          alt="Filigran"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Header with right alignment */}
      <div className="max-w-6xl mx-auto mb-14 flex flex-col items-center md:items-end text-center md:text-right">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-center gap-3 mb-2"
        >
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">Sunduğumuz Olanaklar</h2>
            <p className="text-gray-600 max-w-xl mt-2">
              CRITER Bağlıca projesinin sunduğu sosyal olanakları aşağıdan keşfedebilirsin.
            </p>
          </div>
          <Image
            src="/amenities-icon.png"
            alt="Olanaklar"
            width={40}
            height={40}
          />
        </motion.div>
      </div>

      {/* Amenities Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {amenities.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
            }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-200 h-56 cursor-pointer"
          >
            <Image
              src={item.bg}
              alt={item.name}
              fill
              className="absolute inset-0 object-cover w-full h-full z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 text-white text-center px-4 flex flex-col justify-center h-full">
              <div className="flex justify-center mb-2">
                <Image src={item.icon} alt={item.name} width={36} height={36} className="object-contain" />
              </div>
              <h3 className="text-base font-semibold mb-1">{item.name}</h3>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs mt-1"
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
