"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { IoTennisball, IoFootball, IoMusicalNotes, IoWine } from 'react-icons/io5';

/*
  ═══════════════════════════════════════════════
  🏓 LIFESTYLE & SPORTS SECTION  
  Features: Padel, Football, Music, F&B with doodle icons
  ═══════════════════════════════════════════════
*/

export default function LifestyleSportsSection() {
  const lifestyleCategories = [
    {
      title: "Padel",
      description: "Join premium padel courts and tournaments. Connect with players who share your passion for this exciting sport.",
      doodleIcon: IoTennisball,
      bgColor: "mint",
      stats: "50+ Courts",
      features: ["Premium Courts", "Tournaments", "Social Events", "Coaching"]
    },
    {
      title: "Football", 
      description: "From local matches to exclusive stadium experiences. Feel the thrill of the beautiful game with fellow fans.",
      doodleIcon: IoFootball,
      bgColor: "coral",
      stats: "100+ Events",
      features: ["Match Tickets", "Fan Meetups", "Training", "Championships"]
    },
    {
      title: "Music",
      description: "Access exclusive concerts, festivals, and intimate sessions. Live music experiences that create lasting memories.",
      doodleIcon: IoMusicalNotes,
      bgColor: "mint", 
      stats: "200+ Shows",
      features: ["Festivals", "VIP Access", "Meet Artists", "Private Sessions"]
    },
    {
      title: "Food & Beverage",
      description: "Discover curated dining experiences, wine tastings, and culinary adventures with fellow food enthusiasts.",
      doodleIcon: IoWine,
      bgColor: "coral",
      stats: "300+ Venues",
      features: ["Fine Dining", "Wine Tastings", "Chef Experiences", "Food Tours"]
    }
  ];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="section-padding bg-coral-wash">
      <div className="max-content container-padding">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-wealth-navy mb-6">
            Your Lifestyle,{" "}
            <span className="text-gradient-coral">Amplified</span>
          </h2>
          
          <p className="lifestyle-text max-w-3xl mx-auto">
            WEALTH Token opens doors to premium experiences across the activities you love most. 
            Every moment is an opportunity to live exceptionally.
          </p>
        </motion.div>

        {/* Lifestyle Cards */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {lifestyleCategories.map((category, index) => {
            const isMint = category.bgColor === "mint";
            const IconComponent = category.doodleIcon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group cursor-pointer"
              >
                <div className="wealth-card-hover overflow-hidden">
                  {/* Card Header */}
                  <div className={`p-6 ${isMint ? 'bg-wealth-mint-wash' : 'bg-wealth-coral-soft'} border-b border-wealth-gray-200`}>
                    <div className="flex items-center justify-between mb-4">
                      {/* Doodle Icon */}
                      <div className="relative">
                        <div className="w-16 h-16 bg-white rounded-wealth border-3 border-wealth-navy flex items-center justify-center text-2xl transform group-hover:rotate-6 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-wealth-navy" />
                        </div>
                        {/* Sparkle */}
                        <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${
                          isMint ? 'bg-wealth-coral' : 'bg-wealth-mint'
                        } border-2 border-wealth-navy animate-bounce-gentle`}></div>
                      </div>

                      {/* Stats */}
                      <div className="text-right">
                        <div className="font-heading text-xl text-wealth-navy">
                          {category.stats}
                        </div>
                        <div className="font-accent text-sm text-wealth-gray-600">
                          Available
                        </div>
                      </div>
                    </div>

                    <h3 className="font-heading text-2xl text-wealth-navy mb-2">
                      {category.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-wealth-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`px-3 py-2 rounded-wealth text-sm font-medium ${
                            isMint 
                              ? 'bg-wealth-mint text-wealth-navy' 
                              : 'bg-wealth-coral text-white'
                          }`}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className={`w-full px-6 py-3 rounded-wealth font-medium border-2 transition-all duration-300 group ${
                      isMint
                        ? 'border-wealth-mint text-wealth-mint hover:bg-wealth-mint hover:text-wealth-navy'
                        : 'border-wealth-coral text-wealth-coral hover:bg-wealth-coral hover:text-white'
                    }`}>
                      <span className="flex items-center justify-center gap-2">
                        Explore {category.title}
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-wealth-lg shadow-wealth-lg p-8 border-4 border-wealth-navy transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-heading text-3xl text-wealth-navy mb-4">
                More Than Just Access
              </h3>
              <p className="lifestyle-text mb-6">
                WEALTH Token doesn&apos;t just give you access—it gives you <em>community</em>. 
                Every experience connects you with others who share your passions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="category-pill">Premium Access</span>
                <span className="category-pill">Community Events</span>
                <span className="category-pill">Member Benefits</span>
                <span className="category-pill">Exclusive Perks</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}