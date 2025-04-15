'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link'; 

export default function AboutHeroSection() {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center px-6 md:px-16 bg-gradient-to-r from-[#eef1f5] to-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/2.png" // Replace this with your own image
          alt="About Us Construction"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center md:text-left max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Yatırım İçin Mükemmel Konum
        </h1>
        <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-6">
          CRITER Bağlıcadaki ofisimizde sizi bekliyor. Projelerimiz hakkında bilgi almak ve işbirlikleri için bizimle iletişime geçin.
        </p>
        <div className="flex justify-center md:justify-start gap-3">

        <Link href="https://api.whatsapp.com/send?phone=+905376694607&text=Merhaba,%20projeniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." passHref>
          <button className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
            Danışmanlık Al
          </button>
          </Link>
          <a href="tel:+903128515050">
  <button className="px-5 text-gray-700 py-2.5 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100 transition">
    Hemen Ara
  </button>
</a>
        </div>
      </motion.div>
    </section>
  );
}
