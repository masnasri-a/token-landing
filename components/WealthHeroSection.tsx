"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/public/logo.png';
/*
  ═══════════════════════════════════════════════
  🎪 WEALTH TOKEN HERO SECTION
  Style: Premium Light + Festival Vibes
  Features: Split layout, doodle illustrations, category strip
  ═══════════════════════════════════════════════
*/

export default function WealthHeroSection() {
  const categories = [
    "Sports", "Music", "F&B", "Community"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-coral-wash overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-wealth-mint animate-bounce-gentle"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-wealth-coral opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 rounded-full border-2 border-wealth-navy opacity-10"></div>
      </div>

      <div className="max-content container-padding section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Category Strip */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <span key={index} className="category-pill">
                  {category}
                  {index < categories.length - 1 && (
                    <span className="mx-2 text-wealth-coral">•</span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={fadeInUp}
              className="festival-text text-wealth-navy"
            >
              Live the Good Life,{" "}
              <span className="text-[#137357]">Powered by</span>{" "}
              <span className="inline-flex items-center gap-2">
                <span className="transform -rotate-1">
                  $WEALTH
                </span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={fadeInUp}
              className="lifestyle-text max-w-xl"
            >
              Join a community that celebrates life&apos;s best moments. From padel courts to music festivals, 
              from premium dining to unforgettable experiences — your lifestyle token is here.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="btn-primary !bg-[var(--green-wealth)] !text-white !bg-[var(--green-wealth)] !text-white group inline-flex items-center cursor-pointer">
                Explore $WEALTH
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="btn-secondary group inline-flex items-center cursor-pointer">
                <Play className="mr-2 h-5 w-5" />
                Watch Story
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              variants={fadeInUp}
              className="pt-8 border-t border-wealth-gray-200"
            >
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-heading text-2xl text-wealth-navy">10K+</div>
                  <div className="font-accent text-sm text-wealth-gray-600">Community</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl text-wealth-navy">500+</div>
                  <div className="font-accent text-sm text-wealth-gray-600">Experiences</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl text-wealth-navy">50+</div>
                  <div className="font-accent text-sm text-wealth-gray-600">Partners</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Illustration Container */}
              <div className="relative bg-white rounded-wealth-lg shadow-wealth-lg p-8 border-4 border-wealth-navy transform rotate-1 hover:rotate-0 transition-transform duration-500">
                
                {/* Festival Scene Doodle */}
                <div className="space-y-6">
                  {/* Top Row - Music & Sports */}
                  <div className="flex justify-between items-center">
                    {/* Music Notes */}
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-full bg-wealth-mint border-2 border-wealth-navy relative">
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-wealth-coral rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-wealth-coral border-2 border-wealth-navy"></div>
                    </div>

                    {/* Sports Ball */}
                    <div className="w-12 h-12 rounded-full bg-wealth-mint border-3 border-wealth-navy relative float-gentle">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 bg-wealth-navy rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Center - WEALTH Symbol */}
                  <div className="flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-wealth-mint border-4 border-wealth-navy relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-heading text-2xl text-wealth-navy transform -rotate-3"><Image src={Logo} alt="WEALTH Logo" className='w-24 h-24 ' /></span>
                      </div>
                      {/* Sparkles */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-wealth-coral rounded-full animate-bounce-gentle"></div>
                      <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </div>

                  {/* Bottom Row - F&B & Community */}
                  <div className="flex justify-between items-center">
                    {/* F&B Items */}
                    <div className="space-x-2 flex">
                      <div className="w-6 h-8 bg-wealth-coral border-2 border-wealth-navy rounded-t-full"></div>
                      <div className="w-8 h-6 bg-wealth-mint border-2 border-wealth-navy rounded-full"></div>
                    </div>

                    {/* Community Figures */}
                    <div className="flex space-x-1">
                      <div className="w-4 h-8 bg-wealth-mint border-2 border-wealth-navy rounded-full"></div>
                      <div className="w-4 h-8 bg-wealth-coral border-2 border-wealth-navy rounded-full"></div>
                      <div className="w-4 h-8 bg-wealth-mint border-2 border-wealth-navy rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-300 border-2 border-wealth-navy rounded-full animate-bounce-gentle"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-wealth-coral border-2 border-wealth-navy rounded-full animate-float"></div>
              </div>

              {/* Background Doodle Elements */}
              <div className="absolute -z-10 top-4 right-4 w-16 h-16 border-3 border-wealth-mint rounded-full opacity-30"></div>
              <div className="absolute -z-10 bottom-8 left-2 w-12 h-12 border-2 border-wealth-coral rounded-full opacity-20"></div>
            </div>

            {/* Floating Action Hint */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-4 right-8 bg-white shadow-wealth rounded-wealth px-4 py-2 border-2 border-wealth-navy"
            >
              <div className="flex items-center gap-2 text-sm font-accent text-wealth-navy">
                <Zap className="w-4 h-4 text-wealth-coral" />
                Join the movement
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}