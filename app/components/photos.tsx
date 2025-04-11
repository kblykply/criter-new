'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, PlayCircle } from 'lucide-react';

export default function ProjectGallerySection() {
  const images = Array.from({ length: 21 }, (_, i) => `/${i + 1}.png`);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (visibleStartIndex + itemsPerPage < images.length) {
      setVisibleStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (visibleStartIndex > 0) {
      setVisibleStartIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-16 bg-white overflow-hidden">
      {/* Filigran */}
      <div className="absolute left-0 bottom-0 w-[50%] opacity-10 pointer-events-none select-none z-0">
        <Image
          src="/fligran-left-2.png"
          alt="Filigran"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-12 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
          <div className="w-12 h-12">
            <Image
              src="/galeri-icon.png"
              alt="Galeri Icon"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Galeri</h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base max-w-md">
              CRITER Bağlıca projesinin tüm görsellerine erişin.
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowVideo(true)}
          className="w-full sm:w-auto px-6 py-2 text-sm font-medium bg-black text-white rounded-full shadow hover:bg-gray-800 transition flex items-center justify-center gap-2"
        >
          <PlayCircle size={18} />
          Proje Videosu
        </motion.button>
      </motion.div>

      {/* Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex items-center gap-4 overflow-x-auto"
      >
        <button
          onClick={handlePrev}
          disabled={visibleStartIndex === 0}
          className="bg-white shadow-md p-2 rounded-full text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          title="Önceki"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="relative w-full overflow-hidden">
          <motion.div
            animate={{ x: `-${visibleStartIndex * 336}px` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex gap-4"
            style={{ minWidth: '100%' }}
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="w-[280px] sm:w-[300px] md:w-[320px] flex-shrink-0 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative w-full h-[400px] sm:h-[420px]">
                  <Image
                    src={img}
                    alt={`Proje ${index + 1}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={handleNext}
          disabled={visibleStartIndex + itemsPerPage >= images.length}
          className="bg-white shadow-md p-2 rounded-full text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          title="Sonraki"
        >
          <ArrowRight size={20} />
        </button>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-5xl w-full flex items-center justify-center">
              <button
                onClick={() =>
                  setActiveIndex((activeIndex - 1 + images.length) % images.length)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black"
                title="Önceki"
              >
                <ArrowLeft size={24} />
              </button>
              <Image
                src={images[activeIndex]}
                alt={`Geniş Görsel ${activeIndex + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-xl"
              />
              <button
                onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black"
                title="Sonraki"
              >
                <ArrowRight size={24} />
              </button>
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black"
                title="Kapat"
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* YouTube Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Proje Videosu"
                className="w-full h-full rounded-xl"
                allowFullScreen
              />
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black"
                title="Kapat"
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
