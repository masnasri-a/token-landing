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
    <section className="relative py-32 px-6 bg-gradient-to-b from-background-primary to-background-secondary">
      {/* 🎨 Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-green-electric rounded-full blur-[200px]" />
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
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t.tokenomics.subtitle}
          </p>
        </motion.div>

        {/* 📊 Enhanced Distribution with Donut Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Donut Chart */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-80 h-80 mx-auto relative">
              {/* Donut Chart SVG */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                {/* Background circle */}
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="rgba(26, 26, 26, 0.5)"
                  strokeWidth="20"
                />
                
                {/* Public Sale - 40% (Green) */}
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#00FF00"
                  strokeWidth="20"
                  strokeDasharray={`${2 * Math.PI * 70 * 0.4} ${2 * Math.PI * 70}`}
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  className="glow-green"
                  initial={{ strokeDasharray: `0 ${2 * Math.PI * 70}` }}
                  whileInView={{ strokeDasharray: `${2 * Math.PI * 70 * 0.4} ${2 * Math.PI * 70}` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                
                {/* Team - 20% */}
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#666666"
                  strokeWidth="20"
                  strokeDasharray={`${2 * Math.PI * 70 * 0.2} ${2 * Math.PI * 70}`}
                  strokeDashoffset={`-${2 * Math.PI * 70 * 0.4}`}
                  strokeLinecap="round"
                  initial={{ strokeDasharray: `0 ${2 * Math.PI * 70}` }}
                  whileInView={{ strokeDasharray: `${2 * Math.PI * 70 * 0.2} ${2 * Math.PI * 70}` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
                
                {/* Liquidity - 25% */}
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#00CC00"
                  strokeWidth="20"
                  strokeDasharray={`${2 * Math.PI * 70 * 0.25} ${2 * Math.PI * 70}`}
                  strokeDashoffset={`-${2 * Math.PI * 70 * 0.6}`}
                  strokeLinecap="round"
                  initial={{ strokeDasharray: `0 ${2 * Math.PI * 70}` }}
                  whileInView={{ strokeDasharray: `${2 * Math.PI * 70 * 0.25} ${2 * Math.PI * 70}` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 1.1 }}
                />
                
                {/* Development - 15% */}
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#999999"
                  strokeWidth="20"
                  strokeDasharray={`${2 * Math.PI * 70 * 0.15} ${2 * Math.PI * 70}`}
                  strokeDashoffset={`-${2 * Math.PI * 70 * 0.85}`}
                  strokeLinecap="round"
                  initial={{ strokeDasharray: `0 ${2 * Math.PI * 70}` }}
                  whileInView={{ strokeDasharray: `${2 * Math.PI * 70 * 0.15} ${2 * Math.PI * 70}` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
              </svg>
              
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-money text-3xl font-bold">$WEALTH</div>
                  <div className="text-text-muted text-sm">Distribution</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Distribution Legend */}
          <div className="space-y-6">
            {distributionConfig.map((item, index) => {
              const colors = {
                0: 'bg-redis', // Public Sale - Bright Green
                1: 'bg-gray-600',       // Team - Gray
                2: 'bg-green-dark',     // Liquidity - Dark Green
                3: 'bg-gray-500'        // Development - Light Gray
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-green-electric/5 transition-all group"
                >
                  {/* Color indicator */}
                  <div className={`w-4 h-4 rounded-full ${colors[index as keyof typeof colors]}`} />
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-heading font-bold text-text-primary">
                        {t.tokenomics.distribution[item.key]}
                      </h4>
                      <span className="text-money text-xl font-bold">
                        {item.percentage}%
                      </span>
                    </div>
                    <p className="text-text-muted text-sm">
                      {t.tokenomics.tooltips[item.key]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
            { label: t.tokenomics.info.supply, value: "100,000,000", unit: "$WEALTH" },
            { label: t.tokenomics.info.price, value: "Rp 1.000", unit: "IDR" },
            { label: t.tokenomics.info.marketCap, value: "100 Miliar", unit: "IDR" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl text-center group hover:bg-green-electric/5 transition-all border border-green-electric"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-text-muted text-sm uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <div className="text-money text-4xl font-heading font-bold mb-1 group-hover:scale-110 transition-transform ">
                {stat.value}
              </div>
              <div className="text-text-secondary font-semibold">
                {stat.unit}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
