export default function Home() {
  return (
    <main className="px-6 py-10 lg:px-8">
      <section
        id="productos"
        className="mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-7xl items-center"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-600">
            Agroexportación fresca
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-emerald-950 sm:text-7xl">
            Ingredientes peruanos que inspiran.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            Seleccionamos productos frescos con trazabilidad, calidad de
            exportación y una cadena preparada para crecer contigo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-lg bg-emerald-950 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-900"
            >
              Contactar
            </a>
            <a
              href="#productos"
              className="rounded-lg border border-emerald-950/15 bg-white px-6 py-3 font-semibold text-emerald-950 transition-colors hover:bg-emerald-50"
            >
              Ver Productos
            </a>
          </div>
        </div>
      </section>

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
