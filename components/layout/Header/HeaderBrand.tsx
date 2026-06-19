import Link from "next/link";

export function HeaderBrand() {
  return (
    <Link href="/" className="text-2xl font-bold tracking-tight">
      <span className="text-emerald-950">Agroindustrial</span>{" "}
      <span className="text-rose-700">Peru</span>
    </Link>
  );
}
