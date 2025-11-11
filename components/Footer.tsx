"use client";

import { motion } from "framer-motion";
import { Twitter, Send, Github, MessageCircle } from "lucide-react";
import { slideUp, rotateContinuous } from "@/lib/animations";

/* 
  ═══════════════════════════════════════════════
  🦶 FOOTER COMPONENT
  Features:
  - Fade-in from bottom with delay
  - Rotating Ethereum icon (continuous loop)
  - Social media links with hover effects
  - Newsletter subscription form
  - Copyright and legal links
  ═══════════════════════════════════════════════
*/

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Send, label: "Telegram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: MessageCircle, label: "Discord", href: "#" },
];

const footerLinks = {
  Product: ["Features", "Tokenomics", "Whitepaper", "Roadmap"],
  Resources: ["Documentation", "API", "Support", "FAQ"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="relative bg-steel-800 border-t border-steel-700">
      {/* 🎨 Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-blue rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* 🏢 Brand column */}
          <motion.div
            className="lg:col-span-2"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* 💫 Logo with rotating ETH icon */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-accent-blue to-steel-500 rounded-xl flex items-center justify-center shadow-lg"
                {...rotateContinuous}
              >
                <span className="text-2xl font-heading font-bold text-white">Ξ</span>
              </motion.div>
              <span className="text-2xl font-heading font-bold text-steel-100">EthToken</span>
            </div>

            <p className="text-steel-400 leading-relaxed mb-6">
              Building the future of decentralized finance on Ethereum.
              Secure, transparent, and community-driven token ecosystem.
            </p>

            {/* 🔗 Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 glass hover:bg-white/20 rounded-lg flex items-center justify-center transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-steel-400 group-hover:text-accent-blue transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 📚 Footer links columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-steel-100 font-heading font-bold mb-4 text-lg">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      className="text-steel-400 hover:text-accent-blue transition-colors text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 📧 Newsletter section */}
        <motion.div
          className="border-t border-steel-700 pt-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold text-steel-100 mb-4">
              Stay Updated
            </h3>
            <p className="text-steel-400 mb-6">
              Subscribe to our newsletter for the latest updates, announcements, and exclusive offers.
            </p>

            {/* 📝 Subscription form */}
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-steel-700 border border-steel-600 rounded-xl text-steel-100 placeholder:text-steel-500 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/50 transition-all"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className="px-8 py-3 bg-accent-blue hover:bg-blue-600 text-white font-heading font-semibold rounded-xl transition-all shadow-lg shadow-accent-blue/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* ⚖️ Bottom bar */}
        <motion.div
          className="border-t border-steel-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-steel-500 text-sm">
            © 2025 EthToken. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <motion.a
              href="#"
              className="text-steel-500 hover:text-accent-blue transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy
            </motion.a>
            <motion.a
              href="#"
              className="text-steel-500 hover:text-accent-blue transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms
            </motion.a>
            <motion.a
              href="#"
              className="text-steel-500 hover:text-accent-blue transition-colors"
              whileHover={{ y: -2 }}
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
