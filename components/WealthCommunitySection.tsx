"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Heart, ExternalLink } from 'lucide-react';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';

/*
  ═══════════════════════════════════════════════
  👥 WEALTH COMMUNITY SECTION
  CTA for Discord/Telegram with doodle social icons
  ═══════════════════════════════════════════════
*/

export default function WealthCommunitySection() {
  const communityPlatforms = [
    {
      platform: "Discord",
      members: "8,500+",
      description: "Join daily discussions, get exclusive updates, and connect with fellow WEALTH members",
      icon: FaDiscord,
      color: "mint",
      features: [
        "Daily community chats",
        "Exclusive announcements", 
        "Member-only channels",
        "Direct team access"
      ]
    },
    {
      platform: "Telegram",
      members: "12,000+",
      description: "Get instant updates, participate in community polls, and stay connected on the go",
      icon: FaTelegramPlane,
      color: "coral",
      features: [
        "Instant notifications",
        "Community polls",
        "Quick updates",
        "Mobile-first experience"
      ]
    }
  ];

  const communityHighlights = [
    {
      title: "Weekly Meetups",
      description: "Local gatherings across cities",
      icon: Users,
      stats: "50+ cities"
    },
    {
      title: "Member Events",
      description: "Exclusive experiences for the community", 
      icon: Heart,
      stats: "200+ monthly"
    },
    {
      title: "Community Support",
      description: "24/7 help from fellow members",
      icon: MessageCircle,
      stats: "< 1hr response"
    }
  ];

  const testimonials = [
    {
      quote: "WEALTH has transformed how I discover and enjoy experiences. The community is incredibly welcoming!",
      author: "Sarah M.",
      role: "Padel Enthusiast",
      location: "Barcelona"
    },
    {
      quote: "From food tours to concerts, every WEALTH experience exceeds expectations. Love this community!",
      author: "Alex K.", 
      role: "Music Lover",
      location: "London"
    },
    {
      quote: "Finally found my people! The WEALTH community shares my passion for premium lifestyle experiences.",
      author: "Maria L.",
      role: "Wine Connoisseur", 
      location: "Milan"
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
            Join Our{" "}
            <span className="text-gradient-coral">Community</span>
          </h2>
          
          <p className="lifestyle-text max-w-3xl mx-auto">
            Connect with like-minded individuals who share your passion for extraordinary experiences. 
            Our community is the heart of everything we do.
          </p>
        </motion.div>

        {/* Community Highlights */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {communityHighlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="wealth-card-hover text-center"
              >
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-wealth-mint-wash rounded-wealth border-2 border-wealth-navy flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-[var(--green-wealth)]" />
                  </div>
                  
                  <h3 className="font-heading text-xl text-wealth-navy mb-3">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-wealth-gray-600 mb-3">
                    {highlight.description}
                  </p>
                  
                  <div className="font-accent text-[var(--green-wealth)] font-semibold">
                    {highlight.stats}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Platform Cards */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {communityPlatforms.map((platform, index) => {
            const isMint = platform.color === "mint";
            const IconComponent = platform.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="wealth-card-hover"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-wealth ${
                      isMint ? 'bg-[var(--green-wealth)]' : 'bg-wealth-coral'
                    } border-3 border-wealth-navy flex items-center justify-center text-2xl transform rotate-3`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="font-heading text-2xl text-wealth-navy mb-1">
                        {platform.platform}
                      </h3>
                      <div className={`font-accent text-lg ${
                        isMint ? 'text-[var(--green-wealth)]' : 'text-wealth-coral'
                      } font-semibold`}>
                        {platform.members} members
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-wealth-gray-600 mb-6 leading-relaxed">
                    {platform.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-wealth-gray-700"
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          isMint ? 'bg-wealth-mint' : 'bg-wealth-coral'
                        }`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className={`w-full px-6 py-4 rounded-wealth font-semibold border-2 transition-all duration-300 group ${
                    isMint
                      ? 'bg-[var(--green-wealth)] text-white border-[var(--green-wealth)] hover:bg-wealth-navy hover:text-[var(--green-wealth)]'
                      : 'bg-wealth-coral text-white border-wealth-coral hover:bg-wealth-navy hover:text-wealth-coral'
                  }`}>
                    <span className="flex items-center justify-center gap-2">
                      Join {platform.platform}
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="font-heading text-3xl text-wealth-navy text-center mb-12">
            What Our Community Says
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="wealth-card"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-wealth-coral text-2xl">&ldquo;</span>
                    <p className="text-wealth-gray-700 leading-relaxed italic">
                      {testimonial.quote}
                    </p>
                    <span className="text-wealth-coral text-2xl">&rdquo;</span>
                  </div>
                  
                  <div className="border-t border-wealth-gray-200 pt-4">
                    <div className="font-medium text-wealth-navy">
                      {testimonial.author}
                    </div>
                    <div className="font-accent text-sm text-wealth-coral">
                      {testimonial.role}
                    </div>
                    <div className="font-accent text-sm text-wealth-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className=" rounded-wealth-lg shadow-wealth-lg p-8 border-4 border-wealth-navy transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            <h3 className="font-heading text-3xl text-wealth-navy mb-4">
              Your Community Awaits
            </h3>
            <p className="lifestyle-text mb-6 max-w-2xl mx-auto">
              Don&apos;t just hold WEALTH—live it! Join thousands of members who are already 
              discovering extraordinary experiences and building lasting friendships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary !bg-[var(--green-wealth)] !text-white">
                Join Discord Community
              </button>
              <button className="btn-secondary">
                Follow on Telegram
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}