"use client";

import Link from "next/link";

interface HeaderBrandProps {
  fontSize?: string;
}

export function HeaderBrand({ fontSize = "text-[27px]" }: HeaderBrandProps) {
  return (
    <Link
      href="#inicio"
      className={`${fontSize} font-bold tracking-tight -translate-x-3`}
    >
      <span className="text-emerald-950">Agroindustrial</span>{" "}
      <span className="text-rose-700">Peru</span>
    </Link>
  );
}
