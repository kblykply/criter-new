'use client';

import { motion } from 'framer-motion';

const offers = [
  {
    title: 'Peşin Ödemeye %20 İndirim',
    description: 'Tüm daire tiplerinde geçerli. Kampanya sınırlı süre için geçerlidir.',
  },
  {
    title: '32 Aya Varan Taksit İmkanı',
    description: '32 Aya Varan Bütçe Dostu Ödeme İmkanı.',
  },
  {
    title: 'Kolaylık Sağlayan Ödeme İmkanları',
    description: 'Kampanya süresince geçerli olan özel ödeme planları.',
  },
];

export default function InvestorOffersSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Yatırımcılara Özel Kampanyalar
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          CRITER Bağlıca’ya yatırım yapanlara özel avantajları kaçırmayın.
        </p>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#f2f4f8] to-white border border-gray-200 rounded-2xl shadow hover:shadow-lg p-6 text-left group cursor-pointer"
            >
              <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {offer.title}
              </h4>
              <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-800 transition">
                {offer.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
