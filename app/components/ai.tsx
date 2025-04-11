'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const aiFeatures = [
  {
    icon: '/project.png',
    title: 'Proje Detayları',
    description: 'Kat planlarından mimari özelliklere kadar detaylı bilgi sunar.',
  },
  {
    icon: '/pay-white.png',
    title: 'Ödeme Seçenekleri',
    description: 'Taksit planları ve kampanyalar hakkında bilgi verir.',
  },
  {
    icon: '/pin-white.png',
    title: 'Lokasyon Bilgileri',
    description: 'Çevredeki önemli noktaları size gösterir.',
  },
  {
    icon: '/key.png',
    title: 'Teslim Süreçleri',
    description: 'Teslim tarihleri ve inşaat ilerlemesi hakkında bilgi sağlar.',
  },
  {
    icon: '/doc.png',
    title: 'Belgeler ve Broşürler',
    description: 'Gerekli evrakları ve tanıtım dosyalarını sunar.',
  },
  {
    icon: '/live.png',
    title: '7/24 Destek',
    description: 'Her an sorularınıza yanıt verir.',
  },
];

export default function AiSupportSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Illustration / Image / Lottie */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="w-full max-w-md mx-auto">
            {/* Replace this with Lottie or SVG */}
            <Image
              src="/ai-bot.png"
              alt="Yapay Zeka Botu"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Right - Features */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Yapay Zeka Asistanınız Hazır
          </h2>
          <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-xl">
            CRITER Yapay Zeka Asistanı; proje detaylarından ödeme planlarına, teslim süreçlerinden çevresel bilgilere kadar tüm sorularınızı anında yanıtlar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aiFeatures.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-[#5DA5F1] to-[#3A78D4] flex items-center justify-center">
                    <Image src={item.icon} alt={item.title} width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
