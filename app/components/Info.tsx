'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactInfo() {
  const [loaded, setLoaded] = useState(false);

  const info = [
    {
      icon: '/address-white.png',
      title: 'Adresimiz',
      text: 'Bağlıca Mahallesi, Ankara / Türkiye',
    },
    {
      icon: '/phone-white.png',
      title: 'Telefon',
      text: '0 (312) 000 00 00',
    },
    {
      icon: '/email-white.png',
      title: 'E-Posta',
      text: 'info@criterbaglica.com',
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-16 bg-white">
      {/* Optional Filigran or Deco */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-10 z-0 pointer-events-none">
        <Image src="/filigran-icon.png" alt="Deco" fill className="object-contain" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Bize Ulaşın
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {info.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="backdrop-blur-md bg-white/80 border border-gray-200 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-all duration-300 ease-in-out"
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-[#5DA5F1] to-[#3A78D4] flex items-center justify-center shadow">
                <Image src={item.icon} alt={item.title} width={32} height={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
