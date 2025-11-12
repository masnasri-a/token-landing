"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, TrendingUp } from "lucide-react";
import { staggerContainer, staggerItem, scaleOnHover } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

/* 
  ═══════════════════════════════════════════════
  💎 ABOUT TOKEN SECTION
  Features:
  - Glassmorphism cards with backdrop blur
  - Staggered fade-in animations
  - Hover scale effect
  - Icon-based feature highlights
  ═══════════════════════════════════════════════
*/

const featureIcons = [Shield, Zap, Users, TrendingUp];

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-32 px-6 bg-background-primary">
      {/* 🌟 Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-electric rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 📢 Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="text-gradient">{t.about.title.highlight}</span> {t.about.title.normal}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* 🎴 Feature cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Object.values(t.about.features).map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover="hover"
                initial="rest"
                className="relative group"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="glass p-8 rounded-2xl h-full transition-all duration-300 hover:bg-green-electric/5 border border-green-electric/20"
                >
                  {/* 🎯 Icon with glow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-green-electric/30 blur-xl rounded-full group-hover:bg-green-electric/50 transition-all" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-electric to-green-dark rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-background-primary" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* 📝 Content */}
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>

                  {/* ✨ Hover glow border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-electric/0 via-green-electric/20 to-green-electric/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
