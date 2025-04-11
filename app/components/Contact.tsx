'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ContactQRSection() {
  const [selectedQR, setSelectedQR] = useState('whatsapp');
  const [selectedTime, setSelectedTime] = useState('10:00');

  const qrMap: Record<string, string> = {
    whatsapp: '/whatsapp.png',
    telegram: '/telegram.png',
    instagram: '/instagram.png',
  };

  const timeOptions = [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
  ];

  return (
    <section className="relative py-24 px-6 md:px-16 bg-white overflow-hidden">
      {/* Filigran Right Side */}
      <div className="absolute top-0 right-0 h-full w-1/2 opacity-3 pointer-events-none z-0">
        <Image
          src="/fligran-contact.png"
          alt="Filigran"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Form Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-10 shadow-md border border-gray-200"
        >
          {/* Title with Icon */}
          <div className="mb-6 flex items-start gap-3">
            <div className="w-10 h-10">
              <Image
                src="/call-center.png"
                alt="Sizi Arayalım"
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">Sizi Arayalım</h3>
              <p className="text-sm text-gray-500 max-w-md">
                Bilgilerinizi bırakın, en kısa sürede size ulaşalım.
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-700 mb-1">İsim</label>
              <input
                type="text"
                placeholder="Adınızı girin"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Telefon</label>
              <input
                type="tel"
                placeholder="05xx xxx xx xx"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="time-select" className="block text-sm text-gray-700 mb-1">Uygun Saat</label>
              <select
                id="time-select"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-black"
              >
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition text-sm"
            >
              Gönder
            </button>
          </form>
        </motion.div>

        {/* Right QR Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative w-48 h-48 border rounded-xl shadow-md bg-white overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedQR}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={qrMap[selectedQR]}
                  alt="QR Code"
                  width={192}
                  height={192}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* QR Switcher */}
          <div className="flex items-center gap-4">
            {['whatsapp', 'telegram', 'instagram'].map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedQR(platform)}
                className={`w-12 h-12 rounded-full border transition flex items-center justify-center ${
                  selectedQR === platform ? 'bg-black' : 'bg-white hover:bg-gray-100'
                }`}
                title={platform}
              >
                <div className="relative w-10 h-10">
                  <Image
                    src={`/${platform}-icon.png`}
                    alt={`${platform} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
