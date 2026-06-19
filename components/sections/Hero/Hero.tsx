import { LeafIcon } from "@/components/icons/LeafIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/data/navigation";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="productos"
      className="flex min-h-[calc(100vh-10rem)] w-full max-w-7xl items-center"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-700 inline-flex items-center gap-2">
          <LeafIcon />
          <span>Agroexportación fresca</span>
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-emerald-950 sm:text-7xl">
          Ingredientes peruanos que inspiran.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
          Seleccionamos productos frescos con trazabilidad, calidad de
          exportación y una cadena preparada para crecer contigo.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          {/* <a
            href="#contacto"
            className="rounded-lg bg-emerald-950 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-900"
          >
            Contactar
          </a> */}

          <Link
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-white" />
            <span className="text-white">WhatsApp</span>
          </Link>

          <a
            href="#productos"
            className="rounded-lg border border-emerald-950/15 bg-white px-6 py-3 font-semibold transition-colors hover:border-rose-300 group"
          >
            <span className="text-green-900 group-hover:text-rose-700">
              Ver Productos
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
