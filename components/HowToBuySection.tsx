"use client";

import { motion } from "framer-motion";
import { Wallet, DollarSign, ShoppingCart } from "lucide-react";
import { slideUp, staggerContainer, staggerItem, glowPulse } from "@/lib/animations";

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

const steps = [
  {
    icon: Wallet,
    step: "Step 1",
    title: "Connect Your Wallet",
    description: "Install MetaMask and connect to Ethereum network. Make sure you have ETH for gas fees.",
    action: "Connect Wallet"
  },
  {
    icon: DollarSign,
    step: "Step 2",
    title: "Enter Amount",
    description: "Input the amount of ETH you want to spend. Minimum purchase is 0.01 ETH.",
    action: "Enter Amount"
  },
  {
    icon: ShoppingCart,
    step: "Step 3",
    title: "Confirm Purchase",
    description: "Review transaction details and confirm. Tokens will be sent to your wallet immediately.",
    action: "Buy Now"
  }
];

export default function HowToBuySection() {
  return (
    <section className="relative py-32 px-6 bg-steel-800">
      {/* 🎨 Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent-blue/20 to-transparent blur-3xl" />
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
            <span className="text-gradient">How to Buy</span>
          </h2>
          <p className="text-xl text-steel-300 max-w-2xl mx-auto">
            Get started in three simple steps. No KYC required,
            fully decentralized token purchase.
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
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="relative"
            >
              {/* 🔗 Connecting line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent-blue to-transparent" />
              )}

              {/* 🎴 Step card */}
              <div className="glass p-8 rounded-3xl hover:bg-white/15 transition-all duration-300 border border-steel-600/30 h-full flex flex-col">
                {/* 🔢 Step number badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-accent-blue/20 text-accent-blue px-4 py-2 rounded-full text-sm font-bold mb-6 w-fit"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center text-white text-xs">
                    {index + 1}
                  </span>
                  {step.step}
                </motion.div>

                {/* 🎯 Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-accent-blue/30 blur-2xl rounded-full" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-accent-blue to-steel-500 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* 📝 Content */}
                <h3 className="text-2xl font-heading font-bold text-steel-100 mb-4">
                  {step.title}
                </h3>
                <p className="text-steel-400 leading-relaxed mb-6 flex-grow">
                  {step.description}
                </p>

                {/* 🔘 Action button */}
                <motion.button
                  className={`w-full py-4 rounded-xl font-heading font-semibold text-lg transition-all ${
                    index === 2
                      ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/50'
                      : 'bg-steel-700 text-steel-300 hover:bg-steel-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  {...(index === 2 ? glowPulse : {})}
                >
                  {step.action}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 💡 Additional info */}
        <motion.div
          className="mt-16 glass p-8 rounded-2xl text-center max-w-3xl mx-auto border border-accent-blue/30"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-steel-300 text-lg">
            <span className="text-accent-blue font-bold">Pro Tip:</span> Gas fees on Ethereum vary by network congestion.
            We recommend checking gas prices before purchasing. Tokens are distributed instantly after transaction confirmation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
