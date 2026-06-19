import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Agroindustrial Peru",
  description: "Landing page para prueba tecnica de frutas y agroindustria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <div className="overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
