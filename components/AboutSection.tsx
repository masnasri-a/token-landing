"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, TrendingUp } from "lucide-react";
import { staggerContainer, staggerItem, scaleOnHover } from "@/lib/animations";

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

const features = [
  {
    icon: Shield,
    title: "Secure & Audited",
    description: "Smart contract audited by leading blockchain security firms. Your investment is protected."
  },
  {
    icon: Zap,
    title: "Fast Transactions",
    description: "Built on Ethereum for instant, low-cost transactions with proven blockchain technology."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Governance token allowing holders to vote on protocol decisions and future developments."
  },
  {
    icon: TrendingUp,
    title: "Deflationary Model",
    description: "Token burn mechanism ensures scarcity and potential value appreciation over time."
  }
];

export default function AboutSection() {
  return (
    <section className="relative py-32 px-6 bg-steel-800">
      {/* 🌟 Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-blue rounded-full blur-[150px]" />
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
            <span className="text-gradient">Why Choose</span> Our Token?
          </h2>
          <p className="text-xl text-steel-300 max-w-2xl mx-auto">
            Built on Ethereum's robust infrastructure with innovative tokenomics
            designed for long-term value creation.
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
              className="relative group"
            >
              <motion.div
                variants={scaleOnHover}
                className="glass p-8 rounded-2xl h-full transition-all duration-300 hover:bg-white/15 border border-steel-600/30"
              >
                {/* 🎯 Icon with glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-accent-blue/30 blur-xl rounded-full group-hover:bg-accent-blue/50 transition-all" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-accent-blue to-steel-500 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* 📝 Content */}
                <h3 className="text-2xl font-heading font-bold text-steel-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-steel-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* ✨ Hover glow border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-blue/0 via-accent-blue/20 to-accent-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
