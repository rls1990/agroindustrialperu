"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

interface HeaderBrandProps {
  fontSize?: string;
}

export function HeaderBrand({ fontSize = "text-[27px]" }: HeaderBrandProps) {
  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const startY = window.scrollY;
    const targetY = 0;
    const distance = targetY - startY;
    const duration = 700;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <Link
      href="#inicio"
      onClick={scrollToTop}
      className={`${fontSize} font-bold tracking-tight -translate-x-3`}
    >
      <span className="text-emerald-950">Agroindustrial</span>{" "}
      <span className="text-rose-700">Peru</span>
    </Link>
  );
}
