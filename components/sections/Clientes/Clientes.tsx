import { ClientesCarousel } from "./ClientesCarousel";

export function Clientes() {
  return (
    <section
      id="clientes"
      aria-labelledby="clientes-title"
      className="relative left-1/2 flex min-h-screen w-screen -translate-x-1/2 flex-col justify-center overflow-hidden bg-[#f4f1e6] py-16 sm:py-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto text-center max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#b93838]">
            Aliados comerciales
          </span>
          <h2
            id="clientes-title"
            className="mt-3 text-4xl font-black leading-tight text-[#153c2d] sm:text-5xl"
          >
            Nuestros Clientes
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <ClientesCarousel />
      </div>
    </section>
  );
}
