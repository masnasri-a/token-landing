import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

/* 
  ═══════════════════════════════════════════════
  🏗️ ROOT LAYOUT - Next.js 15 App Router
  Premium Dark Theme | WEALTH TOKEN Landing
  Electric Green Accents | Dual Language Support
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
  title: "WEALTH TOKEN ($WEALTH) - Premium Crypto Investment",
  description: "Experience the future of wealth generation with WEALTH TOKEN ($WEALTH). A premium cryptocurrency investment opportunity with cutting-edge technology and exceptional growth potential.",
  keywords: "wealth token, $WEALTH, crypto investment, premium token, blockchain technology, cryptocurrency, digital assets, wealth generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background-primary text-text-primary antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
