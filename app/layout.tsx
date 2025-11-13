import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

/* 
  ═══════════════════════════════════════════════
  🏗️ ROOT LAYOUT - Next.js 15 App Router
  Redis-Inspired Dark Theme | WEALTH TOKEN Landing
  Professional Developer-Centric Design | Redis Red Accents
  ═══════════════════════════════════════════════
*/

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "WEALTH TOKEN ($WEALTH) - Professional Crypto Investment Platform",
  description: "Experience the future of wealth generation with WEALTH TOKEN ($WEALTH). A professional cryptocurrency platform with Redis-inspired design, bank-grade security, and transparent operations.",
  keywords: "wealth token, $WEALTH, crypto investment, professional token, blockchain technology, cryptocurrency, digital assets, developer-centric, secure investment",
  authors: [{ name: "WEALTH TOKEN Development Team" }],
  openGraph: {
    title: "WEALTH TOKEN - Professional Crypto Platform",
    description: "Professional-grade cryptocurrency token with Redis-inspired design and enterprise security.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} font-sans bg-dark-primary text-text-primary antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
