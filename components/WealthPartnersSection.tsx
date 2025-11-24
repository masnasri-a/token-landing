"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Zap } from 'lucide-react';

/*
  ═══════════════════════════════════════════════
  🤝 WEALTH PARTNERS SECTION
  Clean partner showcase with placeholder logos
  ═══════════════════════════════════════════════
*/

export default function WealthPartnersSection() {
  const partnerCategories = [
    {
      title: "Premium Sports Venues",
      icon: Award,
      description: "Exclusive access to top-tier sports facilities",
      partners: [
        "Champions Football Academy", 
        "SportLux Centers",
        "Premium Fitness",
        "Victory Courts",
        "Athletic Excellence"
      ],
      accent: "mint"
    },
    {
      title: "Music & Entertainment",
      icon: Star,
      description: "Partnerships with leading entertainment venues",
      partners: [
        "Concert Hall Premium",
        "Music Festival Network",
        "VIP Experience Co",
        "Sound & Stage",
        "Live Music Collective",
        "Artist Access"
      ],
      accent: "coral"
    },
    {
      title: "Fine Dining & Hospitality",
      icon: Zap,
      description: "Curated experiences with premier establishments",
      partners: [
        "Michelin Guide Partners",
        "Luxury Dining Group",
        "Wine & Dine Exclusive",
        "Chef's Table Network",
        "Premium Hospitality",
        "Culinary Collective"
      ],
      accent: "mint"
    }
  ];

  const trustIndicators = [
    {
      label: "Partner Venues",
      value: "500+",
      description: "Across major cities"
    },
    {
      label: "Member Satisfaction",
      value: "98%",
      description: "Positive experience rating"
    },
    {
      label: "Cities Covered",
      value: "25+",
      description: "And expanding globally"
    },
    {
      label: "Experiences Monthly",
      value: "10K+",
      description: "Curated for our community"
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

  const itemVariants = {
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
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-wealth-navy mb-6">
            Trusted by{" "}
            <span className="doodle-bg px-4 py-2 transform rotate-1 inline-block">
              Premium Partners
            </span>
          </h2>
          
          <p className="lifestyle-text max-w-3xl mx-auto">
            We partner with the world&apos;s finest venues, establishments, and experience providers 
            to bring you nothing but the best in lifestyle and entertainment.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="font-heading text-3xl md:text-4xl text-wealth-navy mb-2">
                {indicator.value}
              </div>
              <div className="font-medium text-wealth-navy mb-1">
                {indicator.label}
              </div>
              <div className="font-accent text-sm text-wealth-gray-600">
                {indicator.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Categories */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {partnerCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isMint = category.accent === "mint";
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="wealth-card-hover"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className={`mb-6 p-4 rounded-wealth ${
                    isMint ? 'bg-wealth-mint-wash' : 'bg-wealth-coral-soft'
                  } border-2 border-wealth-navy`}>
                    <IconComponent className={`w-8 h-8 mb-3 ${
                      isMint ? 'text-wealth-mint' : 'text-wealth-coral'
                    }`} />
                    <h3 className="font-heading text-xl text-wealth-navy mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-wealth-gray-600">
                      {category.description}
                    </p>
                  </div>

                  {/* Partner List */}
                  <div className="space-y-3">
                    {category.partners.map((partner, partnerIndex) => (
                      <div
                        key={partnerIndex}
                        className="flex items-center gap-3 p-3 rounded-wealth bg-wealth-gray-50 hover:bg-wealth-gray-100 transition-colors"
                      >
                        {/* Logo Placeholder */}
                        <div className="w-10 h-10 rounded-wealth bg-wealth-gray-200 flex items-center justify-center">
                          <div className={`w-6 h-6 rounded ${
                            isMint ? 'bg-wealth-mint' : 'bg-wealth-coral'
                          } opacity-60`}></div>
                        </div>
                        
                        {/* Partner Name */}
                        <div className="flex-1">
                          <div className="font-medium text-wealth-navy text-sm">
                            {partner}
                          </div>
                        </div>
                        
                        {/* Status */}
                        <div className={`w-2 h-2 rounded-full ${
                          isMint ? 'bg-wealth-mint' : 'bg-wealth-coral'
                        }`}></div>
                      </div>
                    ))}
                  </div>

                  {/* View All */}
                  <button className={`w-full mt-4 px-4 py-2 rounded-wealth font-medium text-sm border-2 transition-all ${
                    isMint
                      ? 'border-wealth-mint text-wealth-mint hover:bg-wealth-mint hover:text-wealth-navy'
                      : 'border-wealth-coral text-wealth-coral hover:bg-wealth-coral hover:text-white'
                  }`}>
                    View All Partners
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-mint-wash rounded-wealth-lg p-8 border border-wealth-mint border-opacity-20">
            <h3 className="font-heading text-3xl text-wealth-navy mb-4">
              Become a WEALTH Partner
            </h3>
            <p className="lifestyle-text mb-6 max-w-2xl mx-auto">
              Join our growing network of premium venues and experience providers. 
              Connect with our engaged community and grow your business with purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="btn-primary !bg-[var(--green-wealth)] !text-white">
                Partnership Inquiry
              </button>
              <button className="btn-secondary">
                Download Partnership Guide
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="category-pill">Premium Venues</span>
              <span className="category-pill">Engaged Community</span>
              <span className="category-pill">Quality Focus</span>
              <span className="category-pill">Mutual Growth</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}