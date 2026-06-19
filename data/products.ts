export type Detail = {
  label: string;
  value: string;
  icon: "location" | "calendar" | "seedling" | "ruler" | "droplet" | "box";
};

export type Product = {
  index: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  accent: string;
  background: string;
  border: string;
  details: Detail[];
  contactHref: string;
  detailsHref: string;
};

export const products: Product[] = [
  {
    index: "01",
    category: "Cítrico",
    title: "Limón Tahití",
    description:
      "Cítrico de calibre uniforme para bebidas, cocina y procesos industriales.",
    image: "/images/lemon-pngtree-xl.webp",
    alt: "Limón Tahití",
    accent: "#8cb236",
    background: "rgba(145, 182, 63, 0.08)",
    border: "rgba(145, 182, 63, 0.16)",
    details: [
      { label: "Origen", value: "Perú", icon: "location" },
      { label: "Temporada", value: "Todo el año", icon: "calendar" },
      { label: "Variedad", value: "Tahití", icon: "seedling" },
      { label: "Calibre", value: "48 - 58 mm", icon: "ruler" },
      { label: "Sabor", value: "Ácido y refrescante", icon: "droplet" },
      { label: "Presentación", value: "Caja 10 kg", icon: "box" },
    ],
    contactHref: "https://wa.me/65464564654",
    detailsHref: "https://example.com/productos/limon-tahiti",
  },
  {
    index: "02",
    category: "Fruta",
    title: "Tomate Fresco",
    description:
      "Tomate de firmeza balanceada, ideal para retail, cocina y distribución mayorista.",
    image: "/images/tomatoes-pngtree-xl.webp",
    alt: "Tomate Fresco",
    accent: "#b36a36",
    background: "rgba(179, 106, 54, 0.08)",
    border: "rgba(179, 106, 54, 0.16)",
    details: [
      { label: "Origen", value: "Perú", icon: "location" },
      { label: "Temporada", value: "Todo el año", icon: "calendar" },
      { label: "Variedad", value: "Cherry / mesa", icon: "seedling" },
      { label: "Calibre", value: "Uniforme por lote", icon: "ruler" },
      { label: "Sabor", value: "Dulce y balanceado", icon: "droplet" },
      { label: "Presentación", value: "Caja 10 kg", icon: "box" },
    ],
    contactHref: "https://wa.me/65464564654",
    detailsHref: "https://example.com/productos/tomate-fresco",
  },
  {
    index: "03",
    category: "Fruta",
    title: "Fresa Premium",
    description:
      "Fruta roja de apariencia brillante para retail, repostería y food service.",
    image: "/images/strawberry-pngtree-xl.webp",
    alt: "Fresa Premium",
    accent: "#ae3c28",
    background: "rgba(175, 61, 42, 0.08)",
    border: "rgba(175, 61, 42, 0.16)",
    details: [
      { label: "Origen", value: "Perú", icon: "location" },
      { label: "Temporada", value: "Ago. - Dic.", icon: "calendar" },
      { label: "Variedad", value: "Camino Real", icon: "seedling" },
      { label: "Calibre", value: "22 - 32 mm", icon: "ruler" },
      { label: "Sabor", value: "Dulce y aromática", icon: "droplet" },
      { label: "Presentación", value: "Clamshell 500 g", icon: "box" },
    ],
    contactHref: "https://wa.me/65464564654",
    detailsHref: "https://example.com/productos/fresa-premium",
  },
  {
    index: "04",
    category: "Hortaliza",
    title: "Espárrago Verde",
    description:
      "Variedad fresca para exportación, con corte uniforme y excelente presentación.",
    image: "/images/asparagus-pngtree-lg.webp",
    alt: "Espárrago Verde",
    accent: "#8c8c48",
    background: "rgba(142, 140, 72, 0.08)",
    border: "rgba(142, 140, 72, 0.16)",
    details: [
      { label: "Origen", value: "Perú", icon: "location" },
      { label: "Temporada", value: "May. - Ene.", icon: "calendar" },
      { label: "Variedad", value: "UC 157", icon: "seedling" },
      { label: "Calibre", value: "12 - 16 mm", icon: "ruler" },
      { label: "Sabor", value: "Vegetal y delicado", icon: "droplet" },
      { label: "Presentación", value: "Atado 5 kg", icon: "box" },
    ],
    contactHref: "https://wa.me/65464564654",
    detailsHref: "https://example.com/productos/esparrago-verde",
  },
];
