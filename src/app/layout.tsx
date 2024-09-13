import type { Metadata } from "next";

import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Arquitecto - Julian Peisino",
  description:
    "Arquitecto. Facultad de Arquitectura, Planeamiento y Diseño. UNR. Rosario año 1995 / CAPSF 02996",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon/favicon.ico" />
      </head>
      <body>
        <NavBar />
        {children}
        {/* WhatsAppFloatingIcon */}
      </body>
    </html>
  );
}
