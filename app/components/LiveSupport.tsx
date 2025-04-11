'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LiveSupportInstruction() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Optional Fligran */}
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-5 z-0 pointer-events-none">
        {/* <Image src="/fligran-support.png" alt="Filigran" fill className="object-contain" /> */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Yardıma mı ihtiyacınız var?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base mb-12">
          Sorularınızı hızlıca yanıtlayabilmemiz için sağ alt köşedeki sohbet simgesine tıklayın.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: '/chat.png',
              title: '1. Adım',
              text: 'Sağ alttaki sohbet simgesine tıklayın.',
            },
            {
              icon: '/question.png',
              title: '2. Adım',
              text: 'Sormak istediğiniz soruyu yazın.',
            },
            {
              icon: '/check.png',
              title: '3. Adım',
              text: 'Hızlıca size yardımcı olalım!',
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#5DA5F1] to-[#3A78D4] flex items-center justify-center">
                <Image src={step.icon} alt={step.title} width={32} height={32} />
              </div>
              <h4 className="font-semibold text-lg text-gray-800">{step.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
