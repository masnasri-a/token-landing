"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { modalBackdrop, modalContent } from "@/lib/animations";

/* 
  ═══════════════════════════════════════════════
  🔌 WALLET CONNECT MODAL
  Modal for connecting Web3 wallet
  Features backdrop blur and scale animation
  ═══════════════════════════════════════════════
*/

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const wallets = [
  { name: "MetaMask", icon: "🦊", description: "Connect to your MetaMask Wallet" },
  { name: "WalletConnect", icon: "🔗", description: "Scan with WalletConnect to connect" },
  { name: "Coinbase Wallet", icon: "🔵", description: "Connect to your Coinbase Wallet" },
];

export default function WalletModal({ isOpen, onClose }: WalletModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      variants={modalBackdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      {/* 🌫️ Backdrop blur */}
      <div className="absolute inset-0 bg-steel-900/80 backdrop-blur-md" />

      {/* 🎴 Modal content */}
      <motion.div
        className="relative glass p-8 rounded-3xl max-w-md w-full border border-steel-600/30"
        variants={modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ❌ Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-steel-400" />
        </button>

        {/* 📢 Header */}
        <h2 className="text-3xl font-heading font-bold text-steel-100 mb-2">
          Connect Wallet
        </h2>
        <p className="text-steel-400 mb-8">
          Choose how you want to connect. There are several wallet providers.
        </p>

        {/* 💼 Wallet options */}
        <div className="space-y-4">
          {wallets.map((wallet, index) => (
            <motion.button
              key={index}
              className="w-full glass p-4 rounded-xl hover:bg-white/15 transition-all text-left flex items-center gap-4 group border border-steel-600/20"
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl">{wallet.icon}</div>
              <div className="flex-1">
                <div className="font-semibold text-steel-100 mb-1 group-hover:text-accent-blue transition-colors">
                  {wallet.name}
                </div>
                <div className="text-sm text-steel-400">
                  {wallet.description}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* ℹ️ Info text */}
        <p className="text-steel-500 text-xs mt-6 text-center">
          By connecting a wallet, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </motion.div>
  );
}
