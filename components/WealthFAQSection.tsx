"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

/*
  ═══════════════════════════════════════════════
  ❓ WEALTH FAQ SECTION
  Beginner-friendly accordions, no crypto jargon
  ═══════════════════════════════════════════════
*/

export default function WealthFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const faqs = [
    {
      question: "What is WEALTH Token and how does it work?",
      answer: "WEALTH Token is your digital key to premium lifestyle experiences. Think of it like a membership card that gives you access to curated sports, music, dining, and community events. The more WEALTH you hold, the more exclusive experiences become available to you.",
      category: "basics"
    },
    {
      question: "How do I get WEALTH Tokens?",
      answer: "You can purchase WEALTH Tokens through our website or on supported cryptocurrency exchanges. We also offer various ways to earn WEALTH through community participation, referrals, and attending experiences. Our team can guide you through the entire process if you're new to digital tokens.",
      category: "basics"
    },
    {
      question: "What kind of experiences can I access?",
      answer: "WEALTH gives you access to premium padel courts, football events, exclusive concerts, fine dining experiences, wine tastings, and community meetups. We partner with top-tier venues and curate experiences that celebrate the good life. New experiences are added regularly based on community feedback.",
      category: "experiences"
    },
    {
      question: "Do I need to be tech-savvy to use WEALTH?",
      answer: "Not at all! Our platform is designed to be user-friendly, even if you've never used cryptocurrency before. We provide step-by-step guides, video tutorials, and personal support to help you get started. Think of us as your lifestyle concierge, not a tech company.",
      category: "basics"
    },
    {
      question: "How much does it cost to get started?",
      answer: "You can start exploring WEALTH experiences with as little as $50 worth of tokens. Different experiences have different token requirements, and we offer flexible pricing to make premium lifestyle accessible. Many community events and meetups are free for WEALTH holders.",
      category: "pricing"
    },
    {
      question: "Is WEALTH available in my city?",
      answer: "We're currently active in 25+ major cities worldwide, with new locations added regularly. If we're not in your city yet, join our community to help us prioritize expansion. We often launch in new cities based on member demand and local partnerships.",
      category: "availability"
    },
    {
      question: "How do I redeem experiences with my tokens?",
      answer: "Simply browse available experiences in our app or website, select what interests you, and use your WEALTH tokens to reserve your spot. You'll receive confirmation details and can connect with other attendees through our community platform. It's that simple!",
      category: "experiences"
    },
    {
      question: "Can I earn more WEALTH tokens over time?",
      answer: "Yes! We offer several ways to earn additional WEALTH: attending experiences, referring friends, participating in community events, providing venue reviews, and engaging with our social platforms. Active community members are often rewarded with bonus tokens.",
      category: "earning"
    },
    {
      question: "What if I can't attend an experience I reserved?",
      answer: "We understand that plans change. Our flexible cancellation policy allows you to cancel most experiences up to 24 hours in advance for a full token refund. Some premium experiences may have different terms, which are clearly stated during booking.",
      category: "experiences"
    },
    {
      question: "Is my investment in WEALTH safe?",
      answer: "While all investments carry some risk, WEALTH is built for long-term value creation through real-world utility, not speculation. Our transparent tokenomics, growing partner network, and active community provide multiple value drivers. We recommend only investing what you're comfortable with.",
      category: "investment"
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
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
            Frequently Asked{" "}
            <span className="doodle-bg text-white px-4 py-2 transform rotate-1 inline-block">
              Questions
            </span>
          </h2>
          
          <p className="lifestyle-text max-w-3xl mx-auto">
            New to WEALTH? No problem! Here are answers to the most common questions 
            about joining our lifestyle community and making the most of your experiences.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-4"
              >
                <div className="wealth-card overflow-hidden">
                  {/* Question */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-wealth-gray-50 transition-colors"
                  >
                    <h3 className="font-heading text-lg text-wealth-navy pr-4">
                      {faq.question}
                    </h3>
                    
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-wealth-coral" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-wealth-mint" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-wealth-gray-200">
                          <p className="text-wealth-gray-700 leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-mint-wash rounded-wealth-lg p-8 border border-wealth-mint border-opacity-20">
            <h3 className="font-heading text-2xl text-wealth-navy mb-4">
              Still Have Questions?
            </h3>
            <p className="lifestyle-text mb-6 max-w-2xl mx-auto">
              Our friendly community team is here to help! Get personalized support 
              and connect with experienced WEALTH members who can guide you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary !bg-[var(--green-wealth)] !text-white">
                Contact Support
              </button>
              <button className="btn-secondary">
                Join Community Chat
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}