'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'CRITER Bağlıca projesi nedir?', a: 'CRITER Bağlıca, Ankara’nın Bağlıca bölgesinde konumlanan modern bir konut projesidir.' },
  { q: 'Proje teslim tarihi nedir?', a: 'Projenin teslim tarihi Aralık 2025 olarak planlanmıştır.' },
  { q: 'Satış ofisine gelmeden bilgi alabilir miyim?', a: 'Evet, online sunumlarımız ve dijital tur sistemimiz sayesinde tüm bilgileri uzaktan edinebilirsiniz.' },
  { q: 'Daire tipleri ve m² aralıkları nelerdir?', a: 'Projede 2+1, 3+1 ve 4+1 daire seçenekleri mevcuttur. Alanlar 100 m² ile 190 m² arasında değişmektedir.' },
  { q: 'Ödeme planları nasıl?', a: 'Peşin, taksitli ve karma ödeme planları sunulmaktadır. Size uygun planı seçebilirsiniz.' },
  { q: 'Projede hangi sosyal olanaklar var?', a: 'Açık havuz, spor salonu, yürüyüş yolları, çocuk oyun alanları ve kapalı otopark gibi birçok olanak bulunmaktadır.' },
  { q: 'Acentalar ve danışmanlar için özel bir sistem var mı?', a: 'Evet, CRITER Bağlıca projesine özel acenta panelimizle satış süreçlerini kolaylaştırıyoruz.' },
  { q: 'Online olarak daire rezerve edebilir miyim?', a: 'Evet, interaktif satış haritası üzerinden uygun daireleri seçip rezerve edebilirsiniz.' },
  { q: 'Daire içi görseller ve videolar nasıl sunuluyor?', a: 'Render, 360° tur ve tanıtım videoları ile projeyi detaylıca görebilirsiniz.' },
  { q: 'Proje hakkında detaylı bilgiye nasıl ulaşabilirim?', a: 'İletişim formunu doldurarak veya QR ile WhatsApp üzerinden detaylı bilgi alabilirsiniz.' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(i === openIndex ? null : i);
  };

  return (
    <section className="relative py-24 px-6 md:px-16 bg-white overflow-hidden">
      {/* 🔷 Filigran Image - Top Right */}
      <div className="absolute top-0 left-0 w-[250px] opacity-10 pointer-events-none select-none z-0">
        <Image
          src="/faq.png"
          alt="Filigran"
          width={250}
          height={250}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-3xl font-bold text-gray-900">CRITER Bağlıca ile İlgili Sıkça Sorulan Sorular</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto relative z-10">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl p-4 flex justify-between items-start cursor-pointer hover:bg-gray-200 transition"
            onClick={() => toggle(i)}
          >
            <div className="flex-1 pr-4">
              <p className="text-gray-900 font-medium">{item.q}</p>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    className="text-sm text-gray-600 mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="ml-auto text-gray-800">
              {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
