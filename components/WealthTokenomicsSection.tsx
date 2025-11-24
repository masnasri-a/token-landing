"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, Shield, Users } from 'lucide-react';

/*
  ═══════════════════════════════════════════════
  📊 WEALTH TOKENOMICS SECTION
  Clean design avoiding meme charts, beginner-friendly
  ═══════════════════════════════════════════════
*/

export default function WealthTokenomicsSection() {
  const tokenDistribution = [
    {
      category: "Community & Experiences",
      percentage: 40,
      amount: "400M",
      description: "Dedicated to community rewards, experience access, and member benefits",
      color: "wealth-mint",
      icon: Users
    },
    {
      category: "Partnership Development", 
      percentage: 25,
      amount: "250M",
      description: "Building partnerships with venues, brands, and experience providers",
      color: "wealth-coral",
      icon: TrendingUp
    },
    {
      category: "Platform Development",
      percentage: 20, 
      amount: "200M",
      description: "Continuous platform improvement, new features, and technology advancement",
      color: "wealth-mint",
      icon: Shield
    },
    {
      category: "Team & Advisors",
      percentage: 15,
      amount: "150M", 
      description: "Team development, advisors, and long-term project sustainability",
      color: "wealth-coral",
      icon: PieChart
    }
  ];

  const keyFeatures = [
    {
      title: "Total Supply",
      value: "1 Billion",
      detail: "WEALTH Tokens",
      description: "Fixed supply ensures scarcity and value preservation"
    },
    {
      title: "Token Type",
      value: "Utility",
      detail: "Lifestyle Access",
      description: "Designed for experiences, not speculation"
    },
    {
      title: "Burn Mechanism",
      value: "2.5%",
      detail: "Quarterly",
      description: "Regular token burns to maintain healthy economics"
    },
    {
      title: "Staking Rewards",
      value: "Up to 12%",
      detail: "APY",
      description: "Earn rewards for holding and participating"
    }
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
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
            Token{" "}
            <span className="text-[#137357]">Economics</span>
          </h2>
          
          <p className="lifestyle-text max-w-3xl mx-auto">
            WEALTH Token economics are designed for sustainability and community growth. 
            Every token has a purpose in building the lifestyle ecosystem we&apos;re creating together.
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="wealth-card-hover text-center"
            >
              <div className="p-6">
                <div className="font-heading text-3xl text-wealth-navy mb-2">
                  {feature.value}
                </div>
                <div className="font-accent text-sm text-wealth-coral mb-2">
                  {feature.detail}
                </div>
                <div className="font-medium text-wealth-navy mb-3">
                  {feature.title}
                </div>
                <p className="text-sm text-wealth-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Token Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl text-wealth-navy mb-4">
              Token Distribution
            </h3>
            <p className="lifestyle-text max-w-2xl mx-auto">
              Transparent allocation focused on community value and long-term sustainability.
            </p>
          </div>

          {/* Distribution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tokenDistribution.map((item, index) => {
              const IconComponent = item.icon;
              const isMint = item.color === "";
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="wealth-card-hover"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-wealth ${
                        isMint ? 'bg-[var(--green-wealth)]' : 'bg-wealth-coral-soft'
                      } border-2 border-wealth-navy`}>
                        <IconComponent className={`w-6 h-6 ${
                          isMint ? 'text-[var(--green-wealth)]' : 'text-wealth-coral'
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-heading text-lg text-wealth-navy">
                            {item.category}
                          </h4>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            isMint 
                              ? 'bg-wealth-mint text-wealth-navy' 
                              : 'bg-wealth-coral text-white'
                          }`}>
                            {item.percentage}%
                          </span>
                        </div>
                        
                        <div className="font-accent text-wealth-gray-600 mb-3">
                          {item.amount} WEALTH
                        </div>
                        
                        <p className="text-sm text-wealth-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-wealth-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 rounded-full ${
                          isMint ? 'bg-wealth-mint' : 'bg-wealth-coral'
                        }`}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className=" rounded-wealth-lg shadow-wealth-lg p-8 border-4 border-wealth-navy transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <h3 className="font-heading text-2xl text-wealth-navy mb-4">
              Built for the Long Term
            </h3>
            <p className="lifestyle-text mb-6 max-w-3xl mx-auto">
              WEALTH Token isn&apos;t designed for quick flips or speculation. It&apos;s built to grow 
              in value as our community and ecosystem expand, creating sustainable value for 
              everyone involved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="category-pill">Utility Focused</span>
              <span className="category-pill">Community First</span>
              <span className="category-pill">Sustainable Growth</span>
              <span className="category-pill">Transparent</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}