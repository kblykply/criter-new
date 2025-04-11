'use client';

export default function FullMapSection() {
  return (
    <section className="w-full h-[600px] relative overflow-hidden border-t border-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32683.481231939066!2d32.62841016655947!3d39.90518060466208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33965cfdcc449%3A0xb5d7ae1cacf849e8!2zQmHEn2zEsWNhLCBZZW5pIEJhxJ9sxLFjYSwgMDY3OTAgRXRpbWVzZ3V0L0Fua2FyYQ!5e0!3m2!1str!2str!4v1744368397093!5m2!1str!2str"
        width="100%"
        height="100%"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full border-none"
        title="Map of Bağlıca, Etimesgut, Ankara"
      ></iframe>
    </section>
  );
}
