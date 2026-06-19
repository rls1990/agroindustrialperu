import { LeafIcon } from "@/components/icons/LeafIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/data/navigation";
import Link from "next/link";
import { HeroCarousel } from "./HeroCarousel";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-10rem)] w-full max-w-7xl flex-col-reverse items-center gap-10 text-center lg:grid lg:grid-cols-2 lg:gap-12 lg:text-left animate-fade-up">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-rose-700">
          <LeafIcon />
          <span>Agroexportación fresca</span>
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-emerald-950 sm:text-6xl lg:text-7xl">
          Ingredientes peruanos que inspiran.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 lg:mx-0">
          Seleccionamos productos frescos con trazabilidad, calidad de
          exportación y una cadena preparada para crecer contigo.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-white" />
            <span className="text-white">WhatsApp</span>
          </Link>

          <Link
            href="#productos"
            className="rounded-lg border border-emerald-950/15 bg-white px-6 py-3 font-semibold transition-colors hover:border-rose-300 group"
          >
            <span className="text-green-900 group-hover:text-rose-700">
              Ver Productos
            </span>
          </Link>
        </div>
      </div>

      <div className="w-full">
        <HeroCarousel />
      </div>
    </section>
  );
}
