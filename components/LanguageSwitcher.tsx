"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/* 
  ═══════════════════════════════════════════════
  🌐 LANGUAGE SWITCHER COMPONENT
  Toggle between English (primary) and Indonesian
  Fixed position on top right
  ═══════════════════════════════════════════════
*/

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      className="fixed top-6 right-6 z-50 flex items-center gap-2 glass px-4 py-2 rounded-full border border-steel-600/30"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Globe className="w-4 h-4 text-steel-400" />
      
      <div className="flex gap-1">
        <motion.button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm font-heading font-semibold transition-all ${
            language === 'en'
              ? 'bg-accent-blue text-white'
              : 'text-steel-400 hover:text-steel-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EN
        </motion.button>
        
        <motion.button
          onClick={() => setLanguage('id')}
          className={`px-3 py-1 rounded-full text-sm font-heading font-semibold transition-all ${
            language === 'id'
              ? 'bg-accent-blue text-white'
              : 'text-steel-400 hover:text-steel-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ID
        </motion.button>
      </div>
    </motion.div>
  );
}
