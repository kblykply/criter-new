'use client';

import Image from 'next/image';

export default function PriceAndAreaSection() {
  const stats = [
    {
      group: 'Fiyat ve Alan Verileri',
      icon: '/tl.png', // <--- Replace with your icon path
      data: [
        { label: 'Ortalama Birim Fiyat', value: '49.803 ₺/m²' },
        { label: 'Ortalama Brüt Alan', value: '197 m²' },
        { label: 'Ortalama Fiyat', value: '9.811.191 ₺' },
      ],
    },
    {
      group: 'Yatırım Verileri',
      icon: '/graph.png',
      data: [
        { label: 'Geri Dönüş Süresi', value: '18 yıl' },
        { label: 'Getiri', value: '%5,59' },
        { label: 'Min. Maks. Birim Fiyat', value: '36.310 - 69.121 ₺/m²' },
      ],
    },
    {
      group: 'Stok Verileri',
      icon: '/stock.png',
      data: [
        { label: 'Ortalama Pazarlama Süresi', value: '64 gün' },
        { label: 'Stok Adedi', value: '699 ünite' },
        { label: 'Stok Oranı', value: '%8' },
        { label: 'Stok Değişimi', value: '%-6 🔻' },
      ],
    },
    {
      group: 'Fiyat Değişim Oranları',
      icon: '/up.png',
      data: [
        { label: 'Değişim (₺)', value: '%1656,72' },
        { label: '1 Yıllık', value: '%38,30' },
        { label: '2 Yıllık', value: '%135,50' },
        { label: '1 Yıl Sonra Tahmini', value: '%28,82' },
        { label: 'Toplam Değişim', value: '%1837,35' },
        { label: '1 Yıllık', value: '%45,54' },
        { label: '2 Yıllık', value: '%154,53' },
        { label: '1 Yıl Sonra Tahmini', value: '%36,12' },
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {stats.map((section, idx) => (
          <div key={idx} className="mb-12">
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5DA5F1] to-[#3A78D4] flex items-center justify-center">
                <Image src={section.icon} alt={section.group} width={24} height={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{section.group}</h3>
            </div>

            {/* Data Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.data.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300"
                >
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="text-lg font-semibold text-gray-900 mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

       
      </div>
    </section>
  );
}
