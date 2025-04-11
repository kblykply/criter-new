'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import type { Swiper as SwiperType } from 'swiper/types';
import type { NavigationOptions } from 'swiper/types';

export default function Hero() {
  const slides = [
    {
      bg: '/Hero Image.png',
      title: 'Yükseklerde Yepyeni Bir Hayat',
      description:
        'Bağlıca’nın en seçkin noktasında, şehrin karmaşasından uzak ama hayatın merkezinde. CRITER Rezidans ile modern yaşam, prestij ve yatırım bir arada.',
    },
    {
      bg: '/Hero Image 2.png',
      title: 'Yeni Başlangıçlar İçin Mükemmel Zaman',
      description:
        'Konfor, güvenlik ve estetikle tasarlanmış yaşam alanları sizi bekliyor. CRITER ile geleceğe yatırım yapın.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      swiperInstance.params.navigation &&
      typeof swiperInstance.params.navigation === 'object'
    ) {
      const navigation = swiperInstance.params.navigation as NavigationOptions;
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        navigation={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.bg}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div
        ref={prevRef}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-30 text-white text-4xl cursor-pointer hidden md:block select-none"
      >
        ‹
      </div>
      <div
        ref={nextRef}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-30 text-white text-4xl cursor-pointer hidden md:block select-none"
      >
        ›
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col-reverse md:flex-row justify-between items-end md:items-end px-6 md:px-16 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-[520px] mb-10 md:mb-24"
          >
            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
              {slides[activeIndex].title}
            </h1>
            <p className="mt-4 text-sm md:text-base leading-relaxed font-light">
              {slides[activeIndex].description}
            </p>
            <div className="mt-6 flex gap-3">
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                Broşür İndir
              </button>
              <button className="bg-white/20 text-white px-4 py-2 rounded-full font-medium hover:bg-white/30 transition">
                Randevu Al
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Side Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`cards-${activeIndex}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex flex-col gap-4 w-[280px] pr-2 mb-10"
          >
            {/* Card 1 */}
            <div className="relative h-[370px] w-full bg-white rounded-[8px] shadow-md overflow-visible">
              <div className="px-4 pt-4 pb-2 relative z-10">
                <h3 className="text-l font-semibold text-black leading-tight">
                  Aileler İçin En Güzel Yaşam Alanı
                </h3>
                <p className="text-xs text-gray-500 font-normal mt-1">
                  CRITER Rezidans, ailenizle birlikte huzurlu bir yaşam sunuyor.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-[115%] h-[400px] z-50 translate-x-[-12%]">
                <Image
                  src="/family.png"
                  alt="Aile"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full rounded-[10px] overflow-visible">
              <div className="relative h-[170px] w-full bg-white rounded-[10px] shadow-md overflow-visible">
                <Image
                  src="/mother.png"
                  alt="Anne"
                  fill
                  className="object-cover object-right rounded-[10px]"
                />
                <div className="absolute top-4 left-4 z-30">
                  <h3 className="text-sm font-semibold text-black">
                    Annelerimize En Güzel Hediye
                  </h3>
                  <p className="text-xs text-gray-500 font-normal mt-1">
                    Bilgi Almak İçin Ara
                  </p>
                </div>
              </div>

              {/* Ribbon */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-50">
                <Image
                  src="/mothers day.png"
                  alt="Mother's Day"
                  width={160}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-gray-600 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow transition flex items-center justify-center gap-1">
              Ayrıntılı Bilgi İçin Arayın <span className="text-lg">＋</span>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
