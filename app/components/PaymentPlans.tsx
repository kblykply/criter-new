'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PaymentPlansSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const plans = [
    {
      id: 1,
      title: 'Peşin Ödeme',
      description: 'Tamamı peşin ödemelerde özel indirim fırsatı.',
      image: '/pesin.png',
      paymentDetails: [
        'Toplam Ödeme: ₺1.000.000',
        'İndirim: %10',
        'Net Tutar: ₺900.000',
      ],
    },
    {
      id: 2,
      title: 'Taksitli Ödeme',
      description: 'Esnek ödeme planıyla 24 aya kadar taksit imkanı.',
      image: '/taksit.png',
      paymentDetails: [
        'Depozito: %10',
        'Peşinat: %25 (3. Ay %5, 6. Ay %5, 9. Ay %7,5, 12. Ay %7,5)',
        'Teslime Kadar: %45 (Aralık 2028)',
        'Teslimden Sonra 12 Ay Faizsiz: %20',
      ],
    },
    {
      id: 3,
      title: 'Karma Plan',
      description: 'Peşinat + taksit kombinasyonuyla dengeli ödeme.',
      image: '/karma.png',
      paymentDetails: [
        'Depozito: %20',
        'Peşinat: %30 (3 Ay %10, 6 Ay %10, 9 Ay %10)',
        'Teslime Kadar: %30 (Haziran 2028)',
        'Teslimden Sonra 12 Ay Faizsiz: %20',
      ],
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-16 bg-white overflow-hidden">
      {/* Filigran background image */}
      <div className="absolute right-0 bottom-0 w-[30%] opacity-10 pointer-events-none select-none z-0">
        <Image
          src="/Fligran.png"
          alt="Filigran"
          width={400}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12">
            <Image
              src="/plan.png"
              alt="Payment Icon"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">Ödeme Planları</h2>
            <p className="text-gray-600 mt-1">
              CRITER Bağlıca projesine özel avantajlı ödeme seçeneklerini aşağıdan inceleyin.
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-gradient-to-r from-[#5DA5F1] to-[#3A78D4] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition">
            İletişime Geç
          </button>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group perspective cursor-pointer"
            onClick={() => setFlippedCard(flippedCard === plan.id ? null : plan.id)}
          >
            <div
              className={`relative w-full h-[360px] transition-transform duration-700 [transform-style:preserve-3d] ${
                flippedCard === plan.id ? '[transform:rotateY(180deg)]' : ''
              }`}
            >
              {/* Front Side */}
              <div className="absolute inset-0 bg-white rounded-xl shadow-md p-6 z-20 flex flex-col justify-between [backface-visibility:hidden]">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                </div>
                <Image
                  src={plan.image}
                  alt={plan.title}
                  width={100}
                  height={100}
                  className=" h-auto object-contain rounded-md"
                />
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-white rounded-xl shadow-md p-6 z-20 flex flex-col justify-start items-start text-left text-sm text-gray-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h4 className="text-base font-semibold mb-3">Ödeme Detayları</h4>
                <ul className="space-y-1 text-sm">
                  {plan.paymentDetails.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
