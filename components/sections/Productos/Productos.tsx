import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function Productos() {
  return (
    <section
      id="productos"
      aria-labelledby="productos-title"
      className="bg-[#fbfaf3] py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#b93838]">
            Productos
          </span>
          <h2
            id="productos-title"
            className="mt-3 text-4xl font-black leading-tight text-[#153c2d] sm:text-5xl"
          >
            Selección lista para crecer.
          </h2>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
