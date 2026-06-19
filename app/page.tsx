import { Hero } from "@/components/sections/Hero/Hero";
import { Productos } from "@/components/sections/Productos/Productos";
import { Nosotros } from "@/components/sections/Nosotros/Nosotros";
import { Clientes } from "@/components/sections/Clientes/Clientes";
import { Contacto } from "@/components/sections/Contacto/Contacto";

export default function Home() {
  return (
    <main className="px-6 py-10 lg:px-22 lg:py-17">
      <section id="inicio">
        <Hero />
      </section>

      <Productos />
      <Nosotros />
      <Clientes />
      <Contacto />
    </main>
  );
}
