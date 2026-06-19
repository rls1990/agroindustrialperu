import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
