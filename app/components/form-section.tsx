'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactFormModern() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    setLoading(true);

    try {
      const res = await fetch('https://www.salihkaankoc.net/monismon-core/contact/form2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, message }),
      });

      const data = await res.json();

      if (res.ok && data.success !== false) {
        setFeedback('Mesajınız başarıyla gönderildi!');
        setFullName('');
        setEmail('');
        setMessage('');
      } else {
        setFeedback('Gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      setFeedback('Sunucu hatası. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Optional Background Filigran Top Left */}
      <div className="absolute top-0 left-0 w-1/2 opacity-5 pointer-events-none z-0">
        <Image
          src="/contact-bg-decor.png"
          alt="Decor"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Heading + Description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Hadi Konuşalım
          </h2>
          <p className="text-gray-600 mb-6">
            Bize mesaj gönderin. İster yeni bir proje hakkında konuşalım, ister sorularınızı yanıtlayalım.
          </p>

          <div className="w-20 h-20">
            <Image
              src="/call-center.png"
              alt="Contact Icon"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-xl text-black border border-gray-200 rounded-3xl shadow-xl p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Adınızı girin"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mesaj</label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mesajınızı yazın"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {feedback && (
            <p className="text-sm text-center text-blue-600">{feedback}</p>
          )}

          <div className="text-right">
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              {loading ? 'Gönderiliyor...' : 'Gönder'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
