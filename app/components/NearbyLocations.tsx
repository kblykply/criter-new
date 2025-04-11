'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    ymaps: any;
  }
}

type LocationCategory = 'education' | 'shopping' | 'hospital' | 'market';

type Location = {
  name: string;
  description: string;
  coords: [number, number];
  category: LocationCategory;
};

const locations: Location[] = [
  {
    name: 'CADDE YUNUS AVM',
    description: '5.7 km – 8 dk',
    coords: [39.84251, 32.54523],
    category: 'shopping',
  },
  {
    name: 'Emporia Avm',
    description: '6.1 km – 9 dk',
    coords: [39.84171, 32.53998],
    category: 'shopping',
  },
  {
    name: 'Arsia Avm',
    description: '5.1 km – 7 dk',
    coords: [39.88359, 32.65527],
    category: 'shopping',
  },
  {
    name: 'Elya Center Alışveriş Merkezi',
    description: '4.7 km – 7 dk',
    coords: [39.87547, 32.65182],
    category: 'shopping',
  },
  {
    name: 'Çankaya Üniversitesi Mühendislik Fakültesi',
    description: '6.9 km – 10 dk',
    coords: [39.81905, 32.56371],
    category: 'education',
  },
  {
    name: 'Başkent Üniversitesi',
    description: '5.1 km – 7 dk',
    coords: [39.88761, 32.65434],
    category: 'education',
  },
  {
    name: 'Hacettepe Üniversitesi Beytepe Yerleşkesi',
    description: '11.9 km – 17 dk',
    coords: [39.86781, 32.73496],
    category: 'education',
  },
  {
    name: 'Orta Doğu Teknik Üniversitesi',
    description: '15.8 km – 23 dk',
    coords: [39.88949, 32.77994],
    category: 'education',
  },
  {
    name: 'Medisun Hastanesi',
    description: '9.9 km – 14 dk',
    coords: [39.89054, 32.71027],
    category: 'hospital',
  },
  {
    name: 'Medical Park Ankara İncek Hastanesi',
    description: '12.4 km – 18 dk',
    coords: [39.82877, 32.72859],
    category: 'hospital',
  },
  {
    name: 'Özel Bilgi Hastanesi',
    description: '13.1 km – 19 dk',
    coords: [39.94999, 32.71588],
    category: 'hospital',
  },
  {
    name: 'Medical Park Ankara Hastanesi',
    description: '14.0 km – 20 dk',
    coords: [39.96636, 32.70989],
    category: 'hospital',
  },
  {
    name: 'Özgür Market',
    description: '4.5 km – 6 dk',
    coords: [39.86564, 32.64807],
    category: 'market',
  },
  {
    name: 'Marka Market',
    description: '5.1 km – 7 dk',
    coords: [39.86299, 32.65379],
    category: 'market',
  },
  {
    name: 'Şok Market',
    description: '2.3 km – 3 dk',
    coords: [39.88696, 32.61888],
    category: 'market',
  },
  {
    name: 'Tarım Kredi Kooperatif Market',
    description: '3.2 km – 4 dk',
    coords: [39.89189, 32.62718],
    category: 'market',
  },
  {
    name: 'Migros',
    description: '6.1 km – 9 dk',
    coords: [39.84132, 32.54005],
    category: 'market',
  },
];

const categoryIcons: Record<string, string> = {
  all: '/all-pin.png',
  education: '/scool.png',
  shopping: '/mall.png',
  hospital: '/hospital.png',
  market: '/gro.png',
};

export default function NearbyMap() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const mapRef = useRef<null | any>(null);

  useEffect(() => {
    const loadMap = () => {
      if (typeof window === 'undefined') return;

      const existingScript = document.querySelector('script[src*="api-maps.yandex"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=tr_TR';
        script.type = 'text/javascript';
        script.onload = () => {
          if (window.ymaps) {
            window.ymaps.ready(initMap);
          }
        };
        document.head.appendChild(script);
      } else {
        if (window.ymaps) {
          window.ymaps.ready(initMap);
        } else {
          existingScript.addEventListener('load', () => {
            if (window.ymaps) {
              window.ymaps.ready(initMap);
            }
          });
        }
      }
    };

    const initMap = () => {
      if (!mapRef.current) {
        mapRef.current = new window.ymaps.Map('map', {
          center: [39.875507, 32.596579],
          zoom: 12,
          controls: ['zoomControl'],
        });
      }

      mapRef.current.geoObjects.removeAll();

      const projectPlacemark = new window.ymaps.Placemark(
        [39.875507, 32.596579],
        {
          balloonContent: `<strong>CRITER Bağlıca</strong><br/>Proje Konumu`,
        },
        {
          preset: 'islands#blueHomeCircleIcon',
        }
      );
      mapRef.current.geoObjects.add(projectPlacemark);

      locations.forEach((place) => {
        if (selectedCategory === 'all' || selectedCategory === place.category) {
          const pin = new window.ymaps.Placemark(
            place.coords,
            {
              balloonContent: `<strong>${place.name}</strong><br/>${place.description}`,
            },
            {
              iconLayout: 'default#image',
              iconImageHref: categoryIcons[place.category],
              iconImageSize: [42, 42],
              iconImageOffset: [-21, -21],
            }
          );
          mapRef.current.geoObjects.add(pin);
        }
      });
    };

    loadMap();
  }, [selectedCategory]);

  const buttonData = [
    { key: 'all', label: 'Tümü' },
    { key: 'education', label: 'Okullar' },
    { key: 'shopping', label: 'Avm' },
    { key: 'hospital', label: 'Hastaneler' },
    { key: 'market', label: 'Marketler' },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 mb-6"
      >
        <div className="w-12 h-12">
          <Image
            src="/pin.png"
            alt="Lokasyon İkonu"
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-center md:text-left w-full">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Projeye Yakın Lokasyonlar
          </h2>
          <p className="mt-4 text-gray-600 text-base max-w-xl">
            CRITER Bağlıca’ya yakın önemli noktalar ve mesafeleri aşağıdan inceleyebilirsiniz.
          </p>
        </div>
      </motion.div>

      {/* Category Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.9 }}
        className="max-w-6xl mx-auto w-full mb-10"
      >
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {buttonData.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`flex items-center gap-2 px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.key
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-800'
              }`}
            >
              <Image src={categoryIcons[cat.key]} alt={cat.label} width={30} height={30} />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Map Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
        id="map"
      />
    </section>
  );
}
