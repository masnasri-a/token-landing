"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, MapPin, Heart } from 'lucide-react';
import { FaDiscord, FaTelegramPlane, FaTwitter, FaInstagram } from 'react-icons/fa';

/*
  ═══════════════════════════════════════════════
  🦶 WEALTH FOOTER
  Clean, minimal footer with navy ink styling
  ═══════════════════════════════════════════════
*/

export default function WealthFooter() {
  const footerSections = [
    {
      title: "Experience",
      links: [
        { name: "Sports", href: "#sports" },
        { name: "Music & Events", href: "#music" },
        { name: "Food & Beverage", href: "#dining" },
        { name: "Community Meetups", href: "#community" }
      ]
    },
    {
      title: "Learn",
      links: [
        { name: "What is WEALTH?", href: "#about" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Tokenomics", href: "#tokenomics" },
        { name: "Roadmap", href: "#roadmap" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Discord", href: "#", external: true },
        { name: "Telegram", href: "#", external: true },
        { name: "Twitter", href: "#", external: true },
        { name: "Instagram", href: "#", external: true }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "#faq" },
        { name: "Help Center", href: "#help" },
        { name: "Contact Us", href: "#contact" },
        { name: "Partner With Us", href: "#partners" }
      ]
    }
  ];

  const socialPlatforms = [
    { name: "Discord", icon: FaDiscord, href: "#" },
    { name: "Telegram", icon: FaTelegramPlane, href: "#" },
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" }
  ];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-wealth-navy text-white">
      {/* Main Footer Content */}
      <div className="max-content container-padding py-16">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-6 gap-8"
        >
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-6">
              {/* WEALTH Logo/Symbol */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-wealth-mint border-2 border-white relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-xl text-wealth-navy transform -rotate-3">W</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-white">
                    WEALTH Token
                  </h3>
                  <p className="font-accent text-sm text-wealth-mint">
                    Live the Good Life
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Connecting you to premium lifestyle experiences across sports, music, 
                dining, and community. Join thousands who are already living exceptionally.
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-wealth-mint" />
                  hello@wealthtoken.com
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-wealth-coral" />
                  Global • 25+ Cities
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div 
              key={sectionIndex} 
              variants={itemVariants}
              className="lg:col-span-1"
            >
              <h4 className="font-heading text-lg text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-wealth-mint transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.name}
                      {'external' in link && link.external && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 pt-8 mt-12"
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-heading text-xl text-white mb-3">
              Stay Connected
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Get exclusive updates, early access to experiences, and community highlights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-wealth bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-wealth-mint"
              />
              <button className="px-6 py-2 bg-wealth-mint text-wealth-navy font-semibold rounded-wealth hover: transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-content container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2025 WEALTH Token. All rights reserved. Built with{" "}
              <Heart className="inline w-4 h-4 text-wealth-coral mx-1" />
              for the community.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialPlatforms.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <a
                    key={index}
                    href={platform.href}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-wealth-mint border border-gray-600 hover:border-wealth-mint flex items-center justify-center transition-all duration-300 group"
                    title={platform.name}
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-wealth-mint transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-wealth-mint transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}