'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + About */}
        <div className="flex flex-col gap-4">
          <Image src="/criter-white.png" alt="CRITER Bağlıca" width={160} height={50} />
          <p className="text-sm text-gray-300 leading-relaxed">
            CRITER Bağlıca, konforlu yaşam alanları ve dijitalleşmiş satış çözümleri sunan öncü bir projedir.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Hızlı Erişim</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition">Ana Sayfa</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Hakkımızda</Link></li>
            <li><Link href="/invest" className="hover:text-white transition">Yatırımcıya  Özel</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">İletişim</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">İletişim</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <Image src="/address.png" alt="Adres" width={20} height={20} />
              <span>Ankara, Bağlıca</span>
            </li>
            <li className="flex items-start gap-3">
              <Image src="/phone.png" alt="Telefon" width={20} height={20} />
              <span>0 (312) 851 50 50 </span>
            </li>
            <li className="flex items-start gap-3">
              <Image src="/mail.png" alt="Email" width={20} height={20} />
              <span>info@criterrezidans.com</span>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Bizi Takip Edin</h4>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/criterrezidans/" aria-label="Instagram">
              <Image src="/instagram-icon.png" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://www.facebook.com/p/Criter-rezidans-61558660899690/" aria-label="Facebook">
              <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://www.youtube.com/@criterrezidans/featured" aria-label="YouTube">
              <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=+905376694607&text=Merhaba,%20projeniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." aria-label="WhatsApp">
              <Image src="/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CRITER Bağlıca. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
