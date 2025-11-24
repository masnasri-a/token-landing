"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Compass } from 'lucide-react';

/*
  ═══════════════════════════════════════════════
  🎯 WHAT IS WEALTH TOKEN SECTION
  Explains the lifestyle token concept with premium cards
  ═══════════════════════════════════════════════
*/

export default function WhatIsWealthSection() {
  const features = [
    {
      icon: Heart,
      title: "Lifestyle First",
      description: "WEALTH isn't just a token—it's your passport to a premium lifestyle. Connect with experiences that matter to you.",
      accent: "mint"
    },
    {
      icon: Sparkles,
      title: "Curated Experiences", 
      description: "Unlock access to handpicked experiences across sports, music, dining, and community events that celebrate the good life.",
      accent: "coral"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of like-minded individuals who believe life's best moments are meant to be shared and celebrated together.",
      accent: "mint"
    },
    {
      icon: Compass,
      title: "Your Journey",
      description: "Whether you're discovering new passions or deepening existing ones, WEALTH guides you to experiences that enrich your life.",
      accent: "coral"
    }
  ];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-content container-padding">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-wealth-navy mb-6">
            What is{" "}
            <span className="doodle-bg px-4 py-2 transform rotate-1 inline-block text-[#d18f03]">
              WEALTH Token?
            </span>
          </h2>
          
          <p className="lifestyle-text text-center">
            More than a cryptocurrency, WEALTH Token is your key to a curated lifestyle. 
            We believe that wealth isn&apos;t just about money—it&apos;s about rich experiences, 
            meaningful connections, and living life to the fullest.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isCoraMint = feature.accent === "mint";
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="wealth-card-hover group"
              >
                <div className="p-8">
                  {/* Icon with doodle style */}
                  <div className={`mb-6 relative inline-block ${
                    isCoraMint ? 'bg-wealth-mint-wash' : 'bg-wealth-coral-soft'
                  } p-4 rounded-wealth border-2 border-wealth-navy transform group-hover:rotate-3 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${
                      isCoraMint ? 'text-[var(--green-wealth)]' : 'text-wealth-coral'
                    }`} />
                    
                    {/* Doodle sparkle */}
                    <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${
                      isCoraMint ? 'bg-wealth-coral' : 'bg-[var(--green-wealth)]'
                    } animate-bounce-gentle`}></div>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl text-wealth-navy mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-wealth-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative line */}
                  <div className={`mt-6 h-1 w-12 rounded-full ${
                    isCoraMint ? 'bg-[var(--green-wealth)]' : 'bg-wealth-coral'
                  } group-hover:w-20 transition-all duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-mint-wash rounded-wealth-lg p-8 border-2 border-wealth-mint border-opacity-20">
            <h3 className="font-heading text-2xl text-wealth-navy mb-4">
              Ready to Elevate Your Lifestyle?
            </h3>
            <p className="lifestyle-text mb-6 max-w-2xl mx-auto">
              Join our community and start unlocking experiences that transform ordinary moments into extraordinary memories.
            </p>
            <button className="btn-primary !bg-[var(--green-wealth)] !text-white">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}