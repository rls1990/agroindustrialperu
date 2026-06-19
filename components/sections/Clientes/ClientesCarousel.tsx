import Image from "next/image";

const images = [
  { src: "/images/andes-fresh-md.webp", alt: "Andes Fresh" },
  { src: "/images/asparagus-pngtree-lg.webp", alt: "Asparagus" },
  { src: "/images/export-peru-md.webp", alt: "Export Peru" },
  { src: "/images/pacific-foods-md.webp", alt: "Pacific Foods" },
  { src: "/images/valle-norte-md.webp", alt: "Valle Norte" },
];

export function ClientesCarousel() {
  const items = [...images, ...images];

  return (
    <div className="client-marquee mt-11 overflow-hidden" aria-label="Cinco clientes destacados">
      <div className="flex w-[200%] animate-marquee-left gap-5">
        {items.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl bg-white/70 px-6 py-4 shadow-sm backdrop-blur-sm sm:h-28 sm:w-64"
          >
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 224px, 256px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
