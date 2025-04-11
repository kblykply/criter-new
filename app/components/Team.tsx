'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Genel Müdür',
    image: '/thispersondoesnotexist-3.jpg',
  },
  {
    name: 'Ayşe Demir',
    role: 'Mimar',
    image: '/thispersondoesnotexist.jpg',
  },
  {
    name: 'Mehmet Kaya',
    role: 'İnşaat Mühendisi',
    image: '/thispersondoesnotexist6.jpg',
  },
  {
    name: 'Zeynep Şahin',
    role: 'Satış Direktörü',
    image: '/thispersondoesnotexist-4.jpg',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Ekibimiz</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Alanında uzman, tutkulu ve deneyimli kadromuzla hayallerinizdeki projeleri gerçeğe dönüştürüyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
