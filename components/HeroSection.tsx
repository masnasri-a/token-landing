"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Shield, Code, Copy, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/* 
  ═══════════════════════════════════════════════
  🚀 HERO SECTION - REDIS.IO INSPIRED DESIGN
  Features:
  - Redis-style massive headings with clear hierarchy
  - Dark mode with Redis Red (#FF443A) accent colors  
  - Technical data displays with monospace fonts
  - Professional card layouts with generous whitespace
  - Developer-centric design elements
  ═══════════════════════════════════════════════
*/

export default function HeroSection() {
  const { t } = useLanguage();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="bg-dark-primary redis-section-padding">
      <div className="redis-container">
        
        {/* 🏷️ Status Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="status-active inline-flex items-center gap-2">
            <Shield className="w-3 h-3" />
            Live on Indodax • Enterprise Security
          </div>
        </motion.div>

        {/* 📢 Massive Redis-Style Headline */}
        <motion.div
          className="text-center max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-hero font-bold text-text-primary mb-6 leading-none">
            Professional{' '}
            <span className="text-redis">$WEALTH</span>{' '}
            Token Platform
          </h1>
          
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            {t.hero.subtitle || "Enterprise-grade cryptocurrency infrastructure built for serious investors. Secure, transparent, and professionally managed with Redis-level reliability."}
          </p>

          {/* 🎯 Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="btn-redis-primary text-lg">
              <ArrowRight className="w-5 h-5" />
              {t.hero.cta.primary || "Start Trading Now"}
            </button>

            <button className="btn-redis-secondary text-lg">
              <FileText className="w-5 h-5" />
              {t.hero.cta.secondary || "Technical Documentation"}
            </button>
          </div>
        </motion.div>

        {/* 📊 Technical Metrics Grid - Redis Style */}
        <motion.div
          className="redis-grid redis-grid-3 max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Current Price Metric */}
          <div className="redis-metric-card redis-hover-lift">
            <div className="redis-metric-value">
              Rp 1,000
            </div>
            <div className="redis-metric-label">
              Current Price
            </div>
            <div className="redis-metric-sublabel">
              $WEALTH/IDR
            </div>
          </div>

          {/* Total Supply Metric */}
          <div className="redis-metric-card redis-hover-lift">
            <div className="redis-metric-value">
              100M
            </div>
            <div className="redis-metric-label">
              Total Supply
            </div>
            <div className="redis-metric-sublabel">
              Fixed Cap
            </div>
          </div>

          {/* Market Cap Metric */}
          <div className="redis-metric-card redis-hover-lift">
            <div className="redis-metric-value">
              Active
            </div>
            <div className="redis-metric-label">
              Market Status
            </div>
            <div className="redis-metric-sublabel">
              CEX Listed
            </div>
          </div>
        </motion.div>

        {/* 🔧 Technical Information Cards */}
        <motion.div
          className="redis-grid redis-grid-3 max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Security Card */}
          <div className="redis-card redis-hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-redis-500 bg-opacity-10 rounded-redis-md flex items-center justify-center">
                <Shield className="w-5 h-5 text-redis" />
              </div>
              <h3 className="text-lg font-semibold text-text-secondary">
                Enterprise Security
              </h3>
            </div>
            <p className="text-text-muted mb-4 leading-relaxed">
              Multi-signature wallets, smart contract audits, and enterprise-grade security protocols protect your investment.
            </p>
            <div className="redis-address-display">
              <code className="font-mono text-sm">0x742d...4b2f</code>
              <button 
                onClick={() => copyToClipboard("0x742d35Cc6136C4b2f08C4b2f")}
                className="text-text-muted hover:text-redis transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Technical Infrastructure Card */}
          <div className="redis-card redis-hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-redis-500 bg-opacity-10 rounded-redis-md flex items-center justify-center">
                <Code className="w-5 h-5 text-redis" />
              </div>
              <h3 className="text-lg font-semibold text-text-secondary">
                Developer-First
              </h3>
            </div>
            <p className="text-text-muted mb-4 leading-relaxed">
              Open-source smart contracts, comprehensive APIs, and detailed technical documentation for transparency.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-dark-surface text-xs rounded text-text-muted font-mono">Solidity</span>
              <span className="px-2 py-1 bg-dark-surface text-xs rounded text-text-muted font-mono">ERC-20</span>
              <span className="px-2 py-1 bg-dark-surface text-xs rounded text-text-muted font-mono">Audited</span>
            </div>
          </div>

          {/* Exchange Integration Card */}
          <div className="redis-card redis-hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-redis-500 bg-opacity-10 rounded-redis-md flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-redis" />
              </div>
              <h3 className="text-lg font-semibold text-text-secondary">
                Exchange Listed
              </h3>
            </div>
            <p className="text-text-muted mb-4 leading-relaxed">
              Available on major cryptocurrency exchanges with high liquidity and professional market making.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-muted font-mono">Indodax CEX</span>
              <div className="w-2 h-2 bg-redis rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
