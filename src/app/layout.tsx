import type { Metadata } from "next";
import { Fredoka, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emme Erre Animazione - Intrattenimento ed Eventi",
  description: "Agenzia di animazione leader per eventi aziendali, feste private, matrimoni e intrattenimento per bambini. Diamo vita ai tuoi eventi speciali.",
  keywords: ["animazione", "eventi", "feste bambini", "mascotte", "intrattenimento aziendale", "spettacoli"],
  authors: [{ name: "EMME ERRE ANIMAZIONE" }],
  openGraph: {
    title: "EMME ERRE ANIMAZIONE - Intrattenimento ed Eventi",
    description: "Agenzia di animazione leader per eventi aziendali, feste private e matrimoni.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className="${fredoka.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
