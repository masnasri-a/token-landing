"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Clock } from 'lucide-react';

/*
  ═══════════════════════════════════════════════
  🗺️ WEALTH ROADMAP SECTION
  Clean timeline with mint/coral status indicators
  ═══════════════════════════════════════════════
*/

export default function WealthRoadmapSection() {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "Foundation & Community",
      status: "completed",
      description: "Token launch, community building, and initial partnerships established.",
      achievements: [
        "WEALTH Token Launch",
        "Community of 10,000+ members",
        "Initial partner venues secured",
        "Beta testing platform"
      ]
    },
    {
      quarter: "Q2 2025", 
      title: "Platform Launch",
      status: "completed",
      description: "Full platform rollout with core lifestyle experiences across major cities.",
      achievements: [
        "Web & mobile platform launch",
        "50+ venue partnerships",
        "First community events hosted",
        "Membership tiers introduced"
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Experience Expansion", 
      status: "current",
      description: "Scaling experiences across sports, music, and premium dining categories.",
      achievements: [
        "Sports facility partnerships",
        "Music venue collaborations", 
        "Premium dining experiences",
        "Member rewards program"
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Global Presence",
      status: "upcoming",
      description: "International expansion and exclusive high-end experience partnerships.",
      achievements: [
        "International city launches",
        "Luxury brand partnerships",
        "VIP experience tier",
        "Member governance launch"
      ]
    },
    {
      quarter: "Q1 2026",
      title: "Innovation Hub",
      status: "upcoming", 
      description: "Advanced features, AI-powered recommendations, and lifestyle analytics.",
      achievements: [
        "AI experience matching",
        "Lifestyle analytics dashboard",
        "Advanced community features",
        "Partnership marketplace"
      ]
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
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-[--var(--wealth-mint)]" />;
      case 'current':
        return <Clock className="w-6 h-6 text-[--var(--wealth-coral)] animate-pulse" />;
      default:
        return <Circle className="w-6 h-6 text-[--var(--wealth-gray-400)]" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-wealth-mint border-wealth-mint';
      case 'current':
        return 'bg-wealth-coral border-wealth-coral';
      default:
        return 'bg-wealth-gray-200 border-wealth-gray-300';
    }
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
            The Journey{" "}
            <span className="doodle-bg px-4 py-2 transform -rotate-1 inline-block text-white">
              Ahead
            </span>
          </h2>
          
          <p className="lifestyle-text max-w-3xl mx-auto">
            Our roadmap isn&apos;t just about features—it&apos;s about building a lifestyle ecosystem 
            that grows with our community&apos;s dreams and aspirations.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-wealth-gray-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row md:items-start gap-6"
              >
                {/* Timeline Dot */}
                <div className="flex items-center md:block">
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center bg-[var(--green-wealth)] shadow-wealth ${getStatusColor(item.status)} relative z-10`}>
                    {getStatusIcon(item.status)}
                  </div>
                  
                  {/* Quarter Label */}
                  <div className="ml-4 md:ml-0 md:mt-3 md:text-center">
                    <div className="font-accent text-sm text-wealth-gray-600">
                      {item.quarter}
                    </div>
                    <div className={`font-medium text-xs px-2 py-1 rounded-full mt-1 ${
                      item.status === 'completed' 
                        ? 'bg-wealth-mint-wash text-wealth-navy'
                        : item.status === 'current'
                        ? 'bg-wealth-coral-soft text-wealth-navy'
                        : 'bg-wealth-gray-100 text-wealth-gray-600'
                    }`}>
                      {item.status === 'completed' ? 'Done' : item.status === 'current' ? 'Active' : 'Planned'}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className="wealth-card-hover">
                    <div className="p-6">
                      <h3 className="font-heading text-xl text-wealth-navy mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-wealth-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-wealth-navy mb-2">Key Milestones:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className={`flex items-center gap-2 text-sm ${
                                item.status === 'completed' 
                                  ? 'text-wealth-gray-700' 
                                  : item.status === 'current'
                                  ? 'text-wealth-navy'
                                  : 'text-wealth-gray-500'
                              }`}
                            >
                              <div className={`w-2 h-2 rounded-full ${
                                item.status === 'completed' 
                                  ? 'bg-wealth-mint' 
                                  : item.status === 'current'
                                  ? 'bg-wealth-coral'
                                  : 'bg-wealth-gray-300'
                              }`}></div>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-mint-wash rounded-wealth-lg p-8 border border-wealth-mint border-opacity-20">
            <h3 className="font-heading text-2xl text-wealth-navy mb-4">
              Shape the Future with Us
            </h3>
            <p className="lifestyle-text mb-6 max-w-2xl mx-auto">
              Our roadmap evolves with our community. Your feedback, ideas, and participation 
              help shape the experiences we build together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary !bg-[var(--green-wealth)] !text-white">
                Join Community
              </button>
              <button className="btn-secondary">
                Share Feedback
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}