import type { Metadata } from "next";
import {  Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "StoreByAdel Teboulba — Maintenance Informatique & Réparation PC",
  description: "Atelier de maintenance informatique à Teboulba : réparation ordinateurs, diagnostic, dépannage et vente de composants. Devis gratuit.",
  openGraph: {
    title: "StoreByAdel Teboulba — Maintenance Informatique",
    description: "Réparation et maintenance d'ordinateurs à Teboulba. Diagnostic rapide, intervention experte.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn("font-sans", geist.variable)}>
      <body className={`${geist.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
