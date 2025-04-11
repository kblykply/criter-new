'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactMap() {
  return (
    <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Optional Filigran / Icon */}
      <div className="absolute bottom-0 left-0 opacity-10 z-0">
        {/* You can replace with your decorative element */}
        <Image
          src="/fligran-left.png"
          alt="Filigran"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 max-w-6xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-lg backdrop-blur-md bg-white/80"
      >
        {/* Header */}
        <div className="px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Bizi Nerede Bulabilirsiniz?</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base max-w-md">
              CRITER Bağlıca projemizi yerinde ziyaret etmek isterseniz, aşağıdaki harita üzerinden konumumuzu bulabilirsiniz.
            </p>
          </div>
          {/* Optional icon */}
          <div className="w-16 h-16 mt-6 md:mt-0">
            <Image
              src="/criter-logo.webp" // Replace with your own icon
              alt="Harita"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full h-[400px]">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d391926.41627986!2d32.65504!3d39.875915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cdf6942b858f5%3A0xa61575facaf8aaaf!2zQ1LEsFRFUiBSRVrEsERBTlM!5e0!3m2!1str!2str!4v1744302220439!5m2!1str!2str"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            className="rounded-t-none rounded-b-2xl"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
