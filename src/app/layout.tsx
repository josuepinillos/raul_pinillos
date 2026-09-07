import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raúl Pinillos, profesor de inglés",
  description:
    "Clases de inglés virtuales y personalizadas con Raúl Pinillos. Más de 30 años llevando a adolescentes, jóvenes y adultos desde cero hasta un nivel académico avanzado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
