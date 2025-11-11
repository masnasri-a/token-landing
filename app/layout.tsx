import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

/* 
  ═══════════════════════════════════════════════
  🏗️ ROOT LAYOUT - Next.js 15 App Router
  Light Steel Theme | Web3 Token Sale Landing
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
  title: "EthToken Sale - Own the Future of Digital Assets",
  description: "Join our Ethereum-powered token sale and shape decentralized finance. Built on ERC-20 standard.",
  keywords: "ethereum, token sale, crypto, blockchain, web3, ERC-20",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
