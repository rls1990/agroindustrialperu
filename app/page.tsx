import { Hero } from "@/components/sections/Hero/Hero";

export default function Home() {
  return (
    <main className="px-6 py-10 lg:px-8">
      <Hero />

      <section id="nosotros" className="mx-auto w-full max-w-7xl py-20">
        <h2 className="text-3xl font-bold text-emerald-950">Nosotros</h2>
      </section>

      <section id="clientes" className="mx-auto w-full max-w-7xl py-20">
        <h2 className="text-3xl font-bold text-emerald-950">
          Nuestros Clientes
        </h2>
      </section>

      <section id="contacto" className="mx-auto w-full max-w-7xl py-20">
        <h2 className="text-3xl font-bold text-emerald-950">Contacto</h2>
      </section>
    </main>
  );
}
