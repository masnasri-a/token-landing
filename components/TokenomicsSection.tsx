"use client";

import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight, progressBar } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

/* 
  ═══════════════════════════════════════════════
  📊 TOKENOMICS SECTION
  Features:
  - Animated progress bars expanding on scroll
  - Alternating slide-in animations (left/right)
  - Tooltip hover effects
  - Distribution breakdown with percentages
  ═══════════════════════════════════════════════
*/

const distributionConfig = [
  { key: "publicSale" as const, percentage: 40, color: "from-accent-blue to-blue-600", align: "left" },
  { key: "team" as const, percentage: 20, color: "from-steel-400 to-steel-500", align: "right" },
  { key: "liquidity" as const, percentage: 25, color: "from-accent-blue/70 to-blue-500", align: "left" },
  { key: "development" as const, percentage: 15, color: "from-steel-500 to-steel-600", align: "right" },
];

export default function TokenomicsSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-steel-800 to-steel-900">
      {/* 🎨 Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-blue rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 📢 Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="text-gradient">{t.tokenomics.title}</span>
          </h2>
          <p className="text-xl text-steel-300 max-w-2xl mx-auto">
            {t.tokenomics.subtitle}
          </p>
        </motion.div>

        {/* 📊 Distribution bars */}
        <div className="space-y-12">
          {distributionConfig.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={item.align === "left" ? slideFromLeft : slideFromRight}
              className="group"
            >
              {/* 🏷️ Label and percentage */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-heading font-bold text-steel-100 group-hover:text-accent-blue transition-colors">
                  {t.tokenomics.distribution[item.key]}
                </h3>
                <span className="text-3xl font-heading font-bold text-accent-blue">
                  {item.percentage}%
                </span>
              </div>

              {/* 📈 Progress bar container */}
              <div className="relative h-6 bg-steel-700 rounded-full overflow-hidden">
                {/* Animated progress bar */}
                <motion.div
                  className={`h-full bg-gradient-to-r ${item.color} relative overflow-hidden`}
                  variants={progressBar(`${item.percentage}%`)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* ✨ Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "200%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.2
                    }}
                  />
                </motion.div>

                {/* 💫 Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: "screen" }}
                />
              </div>

              {/* 📝 Additional info tooltip (appears on hover) */}
              <motion.div
                className="mt-3 text-steel-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ height: 0 }}
                whileHover={{ height: "auto" }}
              >
                {t.tokenomics.tooltips[item.key]}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 💰 Token info cards */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { label: t.tokenomics.info.supply, value: "100,000,000", unit: "$RICH" },
            { label: t.tokenomics.info.price, value: "Rp 1.000", unit: "IDR" },
            { label: t.tokenomics.info.marketCap, value: "100 Miliar", unit: "IDR" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl text-center group hover:bg-white/15 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-steel-400 text-sm uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <div className="text-4xl font-heading font-bold text-accent-blue mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-steel-300 font-semibold">
                {stat.unit}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
