import { Hero } from "@/components/sections/Hero/Hero";

export default function Home() {
  return (
    <main className="px-6 py-10 lg:px-22 lg:py-17">
      <section id="inicio">
        <Hero />
      </section>

      <section
        id="productos"
        className="mx-auto flex min-h-[80vh] w-full max-w-7xl items-start py-16 scroll-mt-20"
      >
        <h2 className="text-3xl font-bold text-emerald-950">Productos</h2>
      </section>

      <section
        id="nosotros"
        className="mx-auto flex min-h-[80vh] w-full max-w-7xl items-start py-16 scroll-mt-20"
      >
        <h2 className="text-3xl font-bold text-emerald-950">Nosotros</h2>
      </section>

      <section
        id="clientes"
        className="mx-auto flex min-h-[80vh] w-full max-w-7xl items-start py-16 scroll-mt-20"
      >
        <h2 className="text-3xl font-bold text-emerald-950">
          Nuestros Clientes
        </h2>
      </section>

      <section
        id="contacto"
        className="mx-auto flex min-h-[80vh] w-full max-w-7xl items-start py-16 scroll-mt-20"
      >
        <h2 className="text-3xl font-bold text-emerald-950">Contacto</h2>
      </section>
    </main>
  );
}
