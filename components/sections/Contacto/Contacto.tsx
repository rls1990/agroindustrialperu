import Link from "next/link";
import { whatsappLink, instagramLink, facebookLink, linkedinLink } from "@/data/navigation";

const contactCards = [
  {
    label: "WhatsApp",
    value: "+51 654 645 654",
    href: whatsappLink,
    note: "Respuestas rápidas para cotizaciones y coordinación.",
  },
  {
    label: "Email",
    value: "comercial@agroindustrialperu.com",
    href: "mailto:comercial@agroindustrialperu.com",
    note: "Envíanos especificaciones y volúmenes.",
  },
  {
    label: "LinkedIn",
    value: "AgroIndustrial Peru",
    href: linkedinLink,
    note: "Actualizaciones corporativas y comerciales.",
  },
];

export function Contacto() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="bg-[#fbfaf3] py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#b93838]">
            Contacto
          </span>
          <h2
            id="contacto-title"
            className="mt-3 text-4xl font-black leading-tight text-[#153c2d] sm:text-5xl"
          >
            Hablemos de tu próximo envío.
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <p className="max-w-xl text-lg leading-8 text-[#52685b]">
              Si estás buscando una operación confiable para frutas y
              hortalizas frescas, aquí estamos. Cuéntanos qué necesitas y
              armamos una propuesta a medida.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((card) => (
                <Link
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-2xl border border-[#153c2d]/10 bg-white/80 p-5 shadow-sm transition hover:border-[#b93838]/30 hover:bg-white"
                >
                  <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#b93838]">
                    {card.label}
                  </div>
                  <div className="mt-2 text-xl font-black text-[#153c2d] transition-colors group-hover:text-[#b93838]">
                    {card.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#52685b]">
                    {card.note}
                  </p>
                </Link>
              ))}
            </div>

            <div className="rounded-2xl bg-[#153c2d] p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/70">
                Disponibilidad
              </p>
              <p className="mt-3 text-2xl font-black leading-tight">
                Cotizaciones y coordinación en tiempo real.
              </p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Trabajamos con productores, compradores y operadores
                logísticos para acelerar cada envío sin perder trazabilidad.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md border border-white/16 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Instagram
                </Link>
                <Link
                  href={facebookLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md border border-white/16 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Facebook
                </Link>
              </div>
            </div>
          </div>

          <form className="self-start rounded-[2rem] border border-[#153c2d]/10 bg-white p-6 shadow-sm sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-[#314a3d]">Nombre</span>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="mt-2 w-full rounded-lg border border-[#153c2d]/12 bg-[#fbfaf3] px-4 py-3 text-sm text-[#153c2d] outline-none transition placeholder:text-[#8a9b92] focus:border-[#b93838]/50"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-[#314a3d]">Empresa</span>
                <input
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="mt-2 w-full rounded-lg border border-[#153c2d]/12 bg-[#fbfaf3] px-4 py-3 text-sm text-[#153c2d] outline-none transition placeholder:text-[#8a9b92] focus:border-[#b93838]/50"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-[#314a3d]">Correo</span>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="mt-2 w-full rounded-lg border border-[#153c2d]/12 bg-[#fbfaf3] px-4 py-3 text-sm text-[#153c2d] outline-none transition placeholder:text-[#8a9b92] focus:border-[#b93838]/50"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-[#314a3d]">Teléfono</span>
                <input
                  type="tel"
                  placeholder="+51..."
                  className="mt-2 w-full rounded-lg border border-[#153c2d]/12 bg-[#fbfaf3] px-4 py-3 text-sm text-[#153c2d] outline-none transition placeholder:text-[#8a9b92] focus:border-[#b93838]/50"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-[#314a3d]">Mensaje</span>
                <textarea
                rows={4}
                placeholder="Cuéntanos qué producto necesitas, volúmenes aproximados y destino."
                className="mt-2 w-full resize-none rounded-lg border border-[#153c2d]/12 bg-[#fbfaf3] px-4 py-3 text-sm text-[#153c2d] outline-none transition placeholder:text-[#8a9b92] focus:border-[#b93838]/50"
              />
            </label>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#153c2d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0f2d21]"
              >
                Enviar mensaje
              </button>

              <Link
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#153c2d]/12 bg-white px-5 py-3 text-sm font-bold text-[#153c2d] transition hover:border-[#b93838]/40 hover:text-[#b93838]"
              >
                WhatsApp directo
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
