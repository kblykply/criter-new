'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    icon: '/exper-icon.png',
    title: '20+ Yıllık Tecrübe',
    description: 'Sektörde edindiğimiz uzun yıllara dayalı deneyimle güven inşa ediyoruz.',
    background: '/exper.png',
  },
  {
    icon: '/quality-icon.png',
    title: 'Yüksek Kalite Standartları',
    description: 'Malzeme ve işçilikte en üst düzey kalite anlayışıyla projelerimizi hayata geçiriyoruz.',
    background: '/quailty.png',
  },
  {
    icon: '/customer-icon.png',
    title: 'Müşteri Memnuniyeti',
    description: 'Yüzlerce mutlu müşteri ve başarıyla tamamlanan projelerle güveninizi kazanıyoruz.',
    background: '/customer.png',
  },
  {
    icon: '/inova-icon.png',
    title: 'Yenilikçi Yaklaşım',
    description: 'Modern mimari ve akıllı çözümlerle geleceğin yaşam alanlarını tasarlıyoruz.',
    background: '/inova.png',
  },
];

export default function WhyChooseUsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">Neden Bizi Seçmelisiniz?</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          CRITER olarak sizi değerli kılan çözümlerimizle sektörde fark yaratıyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => toggleOpen(index)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative h-[250px] rounded-xl shadow-lg cursor-pointer overflow-hidden group"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.background})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10 transition duration-300 group-hover:bg-black/60" />

            {/* Content */}
            <div className="relative z-20 h-full p-6 flex flex-col items-center justify-start text-white">
              <div className="relative w-12 h-12 mb-3">
                <Image src={item.icon} alt={item.title} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-center">{item.title}</h3>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm mt-3 text-center"
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
