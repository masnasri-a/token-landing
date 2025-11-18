"use client";

import { motion } from "framer-motion";
import { Wallet, DollarSign, ShoppingCart } from "lucide-react";
import { slideUp, staggerContainer, staggerItem, glowPulse } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

/* 
  ═══════════════════════════════════════════════
  🛒 HOW TO BUY SECTION
  Features:
  - 3-step interactive process
  - Pulsing glow on CTA button
  - Focus glow on input
  - Ripple effect on click
  - Vertical reveal animation
  ═══════════════════════════════════════════════
*/

const stepIcons = [Wallet, DollarSign, ShoppingCart];
const stepKeys = ['step1', 'step2', 'step3'] as const;

export default function HowToBuySection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-32 px-6 bg-background-primary">
      {/* 🎨 Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-electric rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-electric rounded-full blur-[150px]" />
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
            <span className="text-gradient">{t.howToBuy.title}</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t.howToBuy.subtitle}
          </p>
        </motion.div>

        {/* 🎯 Steps grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stepKeys.map((stepKey, index) => {
            const Icon = stepIcons[index];
            const step = t.howToBuy.steps[stepKey];
            return (
              <motion.div
                key={index}
                variants={slideUp}
                className="relative"
              >
                {/* 🔗 Connecting line (not on last item) */}
                {index < stepKeys.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-green-electric to-transparent" />
                )}

                {/* 🎴 Step card */}
                <div className="glass p-8 rounded-3xl hover:bg-green-electric/5 transition-all duration-300 border border-green-electric/20 h-full flex flex-col">
                  {/* 🔢 Step number badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 bg-green-electric/20 text-green-electric px-4 py-2 rounded-full text-sm font-bold mb-6 w-fit glow-green"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="w-6 h-6 bg-green-electric rounded-full flex items-center justify-center text-background-primary text-xs">
                      {index + 1}
                    </span>
                    {step.label}
                  </motion.div>

                  {/* 🎯 Icon */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-red-500/30 blur-2xl rounded-full" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center glow-red">
                      <Icon className="w-10 h-10 text- " strokeWidth={2} />
                    </div>
                  </div>

                  {/* 📝 Step content */}
                  <h3 className="text-2xl font-heading font-bold mb-4 text-text-primary hover:text-green-electric transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed flex-grow">
                    {step.description}
                  </p>                  {/* 🔘 Action button */}
                  <motion.button
                    className={`w-full py-4 rounded-xl font-heading font-semibold text-lg transition-all mt-6 bg-background-secondary text-text-secondary hover:bg-red-500/10 border border-red-500/30'
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    {...(index === 2 ? glowPulse : {})}
                  >
                    {step.action}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 💡 Additional info */}
        <motion.div
          className="mt-16 glass p-8 rounded-2xl text-center max-w-3xl mx-auto border border-green-electric/30"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg">
            <span className="text-red-700 font-bold">{t.howToBuy.tip.label}</span> {t.howToBuy.tip.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
