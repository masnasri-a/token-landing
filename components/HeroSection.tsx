"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { slideUp, staggerContainer, staggerItem, floatAnimation } from "@/lib/animations";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/* 
  ═══════════════════════════════════════════════
  🚀 HERO SECTION COMPONENT
  Features:
  - Parallax scrolling background
  - Fade-in-up text animations
  - Floating 3D token orb with glow
  - Gradient steel background (#1F2937 → #3B82F6)
  - CTA buttons with hover effects
  ═══════════════════════════════════════════════
*/

export default function HeroSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  
  // 🎢 Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🎨 Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-green-electric/20"
        style={{ y }}
      />

      {/* ✨ Particle effect overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-electric rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-bright rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* 🎯 Main content container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
      >
        {/* 💫 Floating Token Orb - 3D effect */}
        <motion.div
          className="mx-auto mb-12 w-32 h-32 relative"
          {...floatAnimation}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-electric to-green-bright rounded-full blur-xl opacity-60 animate-pulse-glow" />
          <motion.div 
            className="relative w-full h-full bg-gradient-to-br from-green-electric via-background-secondary to-green-electric rounded-full flex items-center justify-center shadow-2xl border-4 border-green-electric/50 overflow-hidden glow-green-strong"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Token logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo-trans.png" 
              alt="WEALTH TOKEN Logo" 
              className="w-24 h-24 object-contain"
              onError={(e) => {
                // Fallback jika logo belum ada
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="text-5xl font-bold text-background-primary">W</span>';
              }}
            />
          </motion.div>
        </motion.div>

        {/* 📢 Main headline */}
        <motion.h1
          variants={staggerItem}
          className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
        >
          <span className="text-gradient">
            {t.hero.title.line1}
          </span>
          <br />
          <span className="text-steel-100">
            {t.hero.title.line2}
          </span>
        </motion.h1>

        {/* 📝 Subheading */}
        <motion.p
          variants={staggerItem}
          className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* 🎯 CTA Buttons */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary CTA - Buy Token */}
          <motion.button
            className="btn-primary group relative px-8 py-4 rounded-xl font-heading font-semibold text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <span className="relative flex items-center gap-2">
              {t.hero.cta.primary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          {/* Secondary CTA - Whitepaper */}
          <motion.button
            className="btn-secondary group px-8 py-4 rounded-xl font-heading font-semibold text-lg flex items-center gap-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText className="w-5 h-5" />
            {t.hero.cta.secondary}
          </motion.button>
        </motion.div>

        {/* 📊 Stats bar */}
        <motion.div
          variants={staggerItem}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: t.hero.stats.price, value: "Rp 1.000", unit: "$WEALTH" },
            { label: t.hero.stats.supply, value: "100M", unit: "$WEALTH" },
            { label: t.hero.stats.listed, value: "Indodax", unit: "CEX" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-2xl glow-green/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 0, 0.05)" }}
            >
              <div className="text-money text-4xl font-heading font-bold mb-2 ">{stat.value}</div>
              <div className="text-text-primary text-sm uppercase tracking-wider">{stat.label}</div>
              {stat.unit && <div className="text-text-muted text-xs">{stat.unit}</div>}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* 🌊 Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-green-electric rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-green-electric rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
