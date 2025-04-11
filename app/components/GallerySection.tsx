'use client';

import Image from 'next/image';

type GalleryItem = {
  src: string;
  title: string;
  col: string;
  row: string;
};

const gallery: GalleryItem[] = [
  { src: '/doga.png', title: 'Doğayla İç İçe Mimari', col: 'col-span-2', row: 'row-span-1' },
  { src: '/yatirim.png', title: 'Yatırımcıya Uygun Karma Proje', col: 'col-span-2', row: 'row-span-2' },
  { src: '/aile.png', title: 'Aileler İçin Güvenli Çevre', col: 'col-span-2', row: 'row-span-3' },
  { src: '/tasarim.png', title: 'Modern & Yüksek Katlı Yaşam', col: 'col-span-4', row: 'row-span-2' },
  { src: '/harita.png', title: 'Etkileyici Konum', col: 'col-span-4', row: 'row-span-2' },
  { src: '/yollar.png', title: 'Ulaşım Avantajları', col: 'col-span-2', row: 'row-span-1' },
  { src: '/render.png', title: 'Render Galerisi', col: 'col-span-2', row: 'row-span-1' },
  { src: '/basket.png', title: 'Sosyal Donatılar', col: 'col-span-2', row: 'row-span-2' },
];

export default function GallerySection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      {/* Başlık */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Yüksek Standartlarda Yaşam,
          <br />
          <span className="font-light text-gray-800">Doğanın Kalbinde</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
          CRITER Bağlıca, modern mimariyle doğayı buluşturan, Ankara’nın gelişen
          değeri Bağlıca’da yükselen prestijli bir yaşam alanıdır.
        </p>

        {/* Açıklamanın Altına Görsel */}
        <div className="mt-6">
          <Image
            src="/leaf.png"
            alt="Açıklama Görseli"
            width={100}
            height={50}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Puzzle Grid */}
      <div className="grid grid-cols-6 auto-rows-[150px] gap-2 max-w-screen-xl mx-auto grid-flow-dense">
        {gallery.map((item, i) => (
          <GalleryCard key={i} img={item} />
        ))}
      </div>
    </section>
  );
}

function GalleryCard({ img }: { img: GalleryItem }) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 group ${img.col} ${img.row}`}
    >
      <Image
        src={img.src}
        alt={img.title}
        fill
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
      />
      <div className="absolute bottom-3 left-4 text-white text-sm md:text-base font-semibold bg-black/40 px-3 py-1 rounded-md backdrop-blur-md">
        {img.title}
      </div>
    </div>
  );
}
