import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

/* 
  ═══════════════════════════════════════════════
  🏗️ ROOT LAYOUT - Next.js 15 App Router
  Light Steel Theme | Web3 Token Sale Landing
  Dual Language: English (primary) & Indonesian
  ═══════════════════════════════════════════════
*/

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "EthToken - Token Crypto Terpercaya di Indodax",
  description: "Investasi token crypto yang listing di Indodax dan exchange terpercaya Indonesia. Beli token dengan mudah, aman, dan menguntungkan.",
  keywords: "crypto, token, indodax, investasi crypto, blockchain, cryptocurrency indonesia, jual beli crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
