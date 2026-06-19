export function Nosotros() {
  return (
    <section
      id="nosotros"
      aria-labelledby="nosotros-title"
      className="relative left-1/2 flex min-h-screen w-screen -translate-x-1/2 flex-col justify-center bg-white py-16 sm:py-20 lg:py-24 scroll-mt-32"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#b93838]">
            AgroIndustrial Peru
          </span>
          <h2
            id="nosotros-title"
            className="mt-3 text-4xl font-black leading-tight text-[#153c2d] sm:text-5xl"
          >
            Qui&eacute;nes somos
          </h2>
        </div>

        <div className="max-w-3xl">
          <p className="text-2xl font-bold leading-snug text-[#243f32]">
            Conectamos el campo peruano con compradores que exigen
            consistencia.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#52685b]">
            AgroIndustrial Peru integra selecci&oacute;n, empaque y despacho de
            frutas y hortalizas frescas. Trabajamos con productores
            certificados, control de calidad por lote y procesos pensados para
            una futura integraci&oacute;n con sistemas de trazabilidad,
            inventario y pedidos.
          </p>
        </div>
      </div>
    </section>
  );
}
