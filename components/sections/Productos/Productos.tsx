import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  BoxOpenIcon,
  CalendarDaysIcon,
  DropletIcon,
  LocationDotIcon,
  RulerCombinedIcon,
  SeedlingIcon,
} from "@/components/icons/ProductIcons";
import { products, type Product } from "@/data/products";
import type { Detail } from "@/data/products";

function DetailIcon({
  icon,
  accent,
}: {
  icon: Detail["icon"];
  accent: string;
}) {
  const props = { className: "mt-1 h-4 w-4", color: accent };

  switch (icon) {
    case "location":
      return <LocationDotIcon {...props} />;
    case "calendar":
      return <CalendarDaysIcon {...props} />;
    case "seedling":
      return <SeedlingIcon {...props} />;
    case "ruler":
      return <RulerCombinedIcon {...props} />;
    case "droplet":
      return <DropletIcon {...props} />;
    case "box":
      return <BoxOpenIcon {...props} />;
    default:
      return null;
  }
}

function ProductCard({ product }: { product: Product }) {
  const titleId = `${product.title.toLowerCase().replace(/\s+/g, "-")}-title`;
  const isEven = Number(product.index) % 2 === 0;

  return (
    <article
      className="grid overflow-hidden rounded-lg border md:grid-cols-2"
      style={{
        backgroundColor: product.background,
        borderColor: product.border,
      }}
      aria-labelledby={titleId}
    >
      <div
        className={`flex flex-col justify-center px-5 py-8 sm:px-8 lg:px-12 ${
          isEven ? "order-2 md:order-2" : "order-2 md:order-1"
        }`}
      >
        <span
          className="text-sm font-black uppercase tracking-[0.16em]"
          style={{ color: product.accent }}
        >
          {product.index} · {product.category}
        </span>

        <h3
          id={titleId}
          className="mt-4 text-4xl font-black leading-tight text-[#153c2d] sm:text-5xl"
        >
          {product.title}
        </h3>

        <p className="mt-4 max-w-xl text-base leading-7 text-[#486052]">
          {product.description}
        </p>

        <div>
          <dl className="mt-7 divide-y" style={{ borderColor: product.border }}>
            {product.details.map((detail) => (
              <div
                key={detail.label}
                className="grid grid-cols-[28px_1fr] gap-x-4 py-3 sm:grid-cols-[30px_1fr_1fr]"
              >
                <dt className="contents">
                  <DetailIcon icon={detail.icon} accent={product.accent} />
                  <span className="text-sm font-bold text-[#314a3d]">
                    {detail.label}
                  </span>
                </dt>
                <dd className="col-start-2 text-sm font-semibold text-[#1d3429] sm:col-start-3">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={product.contactHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 text-sm font-bold text-white transition hover:bg-[#1fb158] focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfaf3]"
          >
            Contactar
          </Link>

          <Link
            href={product.detailsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#153c2d]/18 bg-white/70 px-4 text-sm font-bold text-[#153c2d] transition hover:border-[#b93838]/45 hover:text-[#b93838] focus-visible:ring-2 focus-visible:ring-[#b93838] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfaf3]"
          >
            DETALLES
            <ArrowRightIcon className="h-4 w-4" color="#153c2d" />
          </Link>
        </div>
      </div>

      <div
        className={`flex min-h-80 items-center justify-center p-4 sm:min-h-105 sm:p-8 ${
          isEven ? "order-1 md:order-1" : "order-1 md:order-2"
        }`}
      >
        <div className="relative aspect-4/3 w-full max-w-140">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(max-width: 768px) 90vw, 42vw"
            className="object-contain"
          />
        </div>
      </div>
    </article>
  );
}

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
