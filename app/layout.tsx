import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VentasPro | Compra, vende y crece",
  description: "Encuentra los mejores productos y repuestos en un solo lugar. Busca, compara y compra al mejor precio.",
};

export const viewport: Viewport = {
  themeColor: "#D61F26",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
