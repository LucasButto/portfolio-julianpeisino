import type { Metadata } from "next";

import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.scss";

import { Oxygen, Urbanist } from "next/font/google";
import WhatsAppFloatingIcon from "@/components/WhatsAppFloatingIcon/WhatsAppFloatingIcon";
import { StatesProvider } from "@/contexts/StatesContext";

export const metadata: Metadata = {
  title: "Arquitecto - Julian Peisino",
  description:
    "Arquitecto. Facultad de Arquitectura, Planeamiento y Diseño. UNR. Rosario año 1995 / CAPSF 02996",
};

const urbanist_font = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

const oxygen_font = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
});

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
      <body className={urbanist_font.variable + " " + oxygen_font.variable}>
        <StatesProvider>
          <NavBar />
          {children}
          <WhatsAppFloatingIcon />
        </StatesProvider>
      </body>
    </html>
  );
}
