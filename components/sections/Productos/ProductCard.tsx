import { ArrowRightIcon } from "@/components/icons/ProductIcons";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import Image from "next/image";
import Link from "next/link";
import type { Detail, Product } from "@/data/products";
import { DetailIcon } from "./DetailIcon";

export function ProductCard({ product }: { product: Product }) {
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
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfaf3]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-white" />
            <span className="text-white">Contactar</span>
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
