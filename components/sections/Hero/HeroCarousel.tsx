"use client";

import { useEffect, useMemo, useState } from "react";

type Slide = {
  alt: string;
  sources: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};

const slides: Slide[] = [
  {
    alt: "Espárragos frescos",
    sources: {
      sm: "/images/asparagus-pngtree-sm.webp",
      md: "/images/asparagus-pngtree-md.webp",
      lg: "/images/asparagus-pngtree-lg.webp",
      xl: "/images/asparagus-pngtree-lg.webp",
    },
  },
  {
    alt: "Limones frescos",
    sources: {
      sm: "/images/lemon-pngtree-sm.webp",
      md: "/images/lemon-pngtree-lg.webp",
      lg: "/images/lemon-pngtree-lg.webp",
      xl: "/images/lemon-pngtree-xl.webp",
    },
  },
  {
    alt: "Tomates frescos",
    sources: {
      sm: "/images/tomatoes-pngtree-sm.webp",
      md: "/images/tomatoes-pngtree-lg.webp",
      lg: "/images/tomatoes-pngtree-lg.webp",
      xl: "/images/tomatoes-pngtree-xl.webp",
    },
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const currentSlide = useMemo(() => slides[index], [index]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[240px] w-full overflow-hidden sm:h-[420px] lg:h-[520px]">
      <picture
        key={currentSlide.alt}
        className="absolute inset-0 block h-full w-full animate-carousel-slide"
      >
        <source
          media="(min-width: 1280px)"
          srcSet={currentSlide.sources.xl}
        />
        <source media="(min-width: 1024px)" srcSet={currentSlide.sources.lg} />
        <source media="(min-width: 640px)" srcSet={currentSlide.sources.md} />
        <img
          src={currentSlide.sources.sm}
          alt={currentSlide.alt}
          className="h-full w-full object-contain object-center"
          loading={index === 0 ? "eager" : "lazy"}
        />
      </picture>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.alt}
            type="button"
            onClick={() => setIndex(slideIndex)}
            className={`h-2 rounded-full transition-all ${
              slideIndex === index ? "w-7 bg-emerald-900" : "w-2 bg-emerald-900/25"
            }`}
            aria-label={`Ver imagen ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
