import Link from "next/link";

interface HeaderBrandProps {
  fontSize?: string;
}

export function HeaderBrand({ fontSize = "text-2xl" }: HeaderBrandProps) {
  return (
    <Link href="/" className={`${fontSize} font-bold tracking-tight`}>
      <span className="text-emerald-950">Agroindustrial</span>{" "}
      <span className="text-rose-700">Peru</span>
    </Link>
  );
}
