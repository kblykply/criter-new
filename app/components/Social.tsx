'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SocialMediaSection() {
  const socials = [
    {
      name: 'Instagram',
      icon: '/instagram-icon.png',
      url: 'https://instagram.com/criterbaglica',
    },
    {
      name: 'Facebook',
      icon: '/facebook.png',
      url: 'https://facebook.com/criterbaglica',
    },
    {
      name: 'YouTube',
      icon: '/youtube.png',
      url: 'https://youtube.com/@criterbaglica',
    },
    {
      name: 'WhatsApp',
      icon: '/whatsapp-icon.png',
      url: 'https://wa.me/905300000000',
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Bizi Sosyal Medyada Takip Edin
        </h2>
        <p className="text-gray-600 mb-10 text-sm md:text-base max-w-lg mx-auto">
          Güncellemeler, projeler ve kampanyalar için sosyal medya hesaplarımızı takip edin.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition shadow flex items-center justify-center"
              title={social.name}
            >
              <Image src={social.icon} alt={social.name} width={35} height={35} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
