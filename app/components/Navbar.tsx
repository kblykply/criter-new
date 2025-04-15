'use client';

import { useState } from 'react';
import { Bell, LogIn, X, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [lang] = useState('TR');
  const [showNotification, setShowNotification] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const notifications = [
    {
      title: 'Kampanya Fırsatı!',
      message: 'Senin için kampanyalarımız var, sakın kaçırma!',
      time: '2 dakika önce',
    },
    {
      title: 'Yeni Güncelleme',
      message: 'Yeni ödeme planları eklendi.',
      time: '1 saat önce',
    },
  ];

  return (
    <nav className="bg-white shadow-sm text-black relative z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <Image src="/criter-logo.webp" alt="Logo" width={100} height={24} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-light text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">Anasayfa</Link>
          <Link href="/about" className="hover:text-blue-600 transition">Hakkımızda</Link>
          <Link href="/invest" className="hover:text-blue-600 transition">Yatırımcıya Özel</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">İletişim</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-x-3">
          {/* Language */}
          <button className="hidden md:flex items-center gap-1 text-sm font-light bg-gray-100 px-3 py-1.5 rounded-2xl hover:shadow-sm transition">
            <Image src="/turkish flag.png" alt="TR" width={16} height={16} />
            {lang}
          </button>

          {/* Login */}
          <button className="hidden md:flex items-center gap-2 text-sm font-light bg-gray-100 px-4 py-1.5 rounded-2xl hover:bg-gray-200 transition">
            <LogIn size={16} />
            Giriş Yap
          </button>

          {/* AI */}
          <button className="hidden md:flex relative text-sm font-light text-white px-4 py-1.5 rounded-2xl bg-gradient-to-r from-[#5DA5F1] to-[#3A78D4] hover:shadow-md transition">
            CRITER-AI
            <span className="absolute top-[6px] right-[6px] w-2 h-2 bg-green-400 rounded-full shadow shadow-green-400/50" />
          </button>

          {/* Notification */}
          <div className="relative">
            <button
              onClick={() => setShowNotification(!showNotification)}
              className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
              aria-label="Bildirimler"
            >
              <Bell className="w-5 h-5 text-gray-700" />
              {notifications.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            {/* Notification Dropdown */}
            {showNotification && (
  <div
    className={`${
      // Full width fixed for mobile, dropdown style for desktop
      'sm:absolute sm:right-0 sm:mt-3 sm:w-80 fixed top-[%25] left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:translate-x-0 sm:left-auto z-50'
    } bg-white border border-gray-200 shadow-xl rounded-none sm:rounded-xl overflow-hidden`}
  >
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
      <span className="text-sm font-semibold text-gray-800">Bildirimler</span>
      <button
        onClick={() => setShowNotification(false)}
        className="text-gray-400 hover:text-gray-600"
        title="Kapat"
      >
        <X size={16} />
      </button>
    </div>
    <ul className="max-h-60 overflow-y-auto divide-y divide-gray-100">
      {notifications.map((notif, i) => (
        <li key={i} className="px-4 py-3 hover:bg-gray-50 transition">
          <p className="text-sm font-medium text-gray-800">{notif.title}</p>
          <p className="text-sm text-gray-500">{notif.message}</p>
          <span className="text-xs text-gray-400">{notif.time}</span>
        </li>
      ))}
    </ul>
    <div className="text-center py-2 bg-gray-50">
      <Link href="#" className="text-xs text-blue-600 hover:underline">Tümünü Gör</Link>
    </div>
  </div>
)}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Mobil Menü"
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-sm"
          >
            <Link href="/" className="block text-gray-700 hover:text-blue-600">Anasayfa</Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600">Proje Hakkında</Link>
            <Link href="/invest" className="block text-gray-700 hover:text-blue-600">Yatırımcıya Özel</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600">İletişim</Link>
            <hr className="border-gray-200" />
            <button className="w-full text-left px-3 py-2 bg-gray-100 rounded-md text-gray-800">
              Giriş Yap
            </button>
            <button className="w-full text-left px-3 py-2 bg-gradient-to-r from-[#5DA5F1] to-[#3A78D4] text-white rounded-md">
              CRITER-AI
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
