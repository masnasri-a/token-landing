import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import HowToBuySection from "@/components/HowToBuySection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/* 
  ═══════════════════════════════════════════════
  🏠 MAIN LANDING PAGE
  
  Web3 Token Sale Landing Page
  Theme: Light Steel Industrial Minimal Futuristic
  Dual Language: English (primary) & Indonesian
  
  Tech Stack:
  - Next.js 15 (App Router)
  - Tailwind CSS (Custom Steel palette)
  - Framer Motion (Full animation suite)
  - Lucide React (Icons)
  
  Sections:
  1. Hero - Parallax background, floating token orb
  2. About - Glassmorphism cards, staggered animations
  3. Tokenomics - Animated progress bars
  4. How to Buy - 3-step interactive process
  5. Roadmap - Horizontal timeline with glowing dots
  6. Footer - Social links, rotating ETH icon
  
  Color Palette:
  #F8FAFC → #E4E7EB → #CBD5E1 → #9CA3AF → 
  #6B7280 → #4B5563 → #374151 → #1F2937 → #111827
  Accent: #3B82F6
  
  ═══════════════════════════════════════════════
*/

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* 🌐 Language Switcher - Fixed top right */}
      <LanguageSwitcher />
      
      {/* 🚀 Hero Section - Full screen intro with CTA */}
      <HeroSection />
      
      {/* 💎 About Token - Feature highlights */}
      <AboutSection />
      
      {/* 📊 Tokenomics - Distribution breakdown */}
      <TokenomicsSection />
      
      {/* 🛒 How to Buy - Purchase guide */}
      <HowToBuySection />
      
      {/* 🗺️ Roadmap - Project timeline */}
      <RoadmapSection />
      
      {/* 🦶 Footer - Links & social */}
      <Footer />
    </main>
  );
}
