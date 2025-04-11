'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MissionVisionSection() {
  return (
    <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Filigran - Top Left */}
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-10 z-0 pointer-events-none select-none">
        <Image
          src="/criter-logo.webp"
          alt="Filigran"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/3.png"
              alt="Mission Vision"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Misyonumuz</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sektörde yenilikçi, sürdürülebilir ve güvenli projeler üretmek. Müşteri memnuniyetini öncelik alarak kaliteli yaşam alanları oluşturmak.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Vizyonumuz</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Türkiye’nin önde gelen inşaat markalarından biri olmak ve geleceği şekillendiren projelere imza atmak.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
