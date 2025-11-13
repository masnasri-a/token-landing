"use client";

import { motion } from "framer-motion";
import { Rocket, Code, Users, Globe } from "lucide-react";
import { slideUp, timelineDot, timelineLine } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

/* 
  ═══════════════════════════════════════════════
  🗺️ ROADMAP SECTION
  Features:
  - Horizontal timeline with sequential reveal
  - Glowing dots at each milestone
  - Line grows from left to right
  - Icon-based milestone markers
  - Staggered animation entrance
  ═══════════════════════════════════════════════
*/

const milestoneIcons = [Rocket, Code, Users, Globe];
const phaseKeys = ['q1', 'q2', 'q3', 'q4'] as const;

const statusColors = {
  completed: "from-red-500 to-red-bright",
  "in-progress": "from-green-500 to-red-bright",
  upcoming: "from-gray-600 to-gray-500"
};

const statusMap = {
  completed: "completed" as const,
  "in-progress": "in-progress" as const,
  upcoming: "upcoming" as const
};

export default function RoadmapSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-background-primary to-background-secondary overflow-hidden">
      {/* 🎨 Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-electric rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-electric rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 📢 Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="text-gradient">{t.roadmap.title}</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t.roadmap.subtitle}
          </p>
        </motion.div>

        {/* 🛤️ Timeline container */}
        <div className="relative">
          {/* 📏 Timeline line (horizontal) */}
          <motion.div
            className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-background-secondary origin-left"
            variants={timelineLine}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-green-electric to-green-bright glow-green"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          {/* 🎯 Milestones grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {phaseKeys.map((phaseKey, index) => {
              const Icon = milestoneIcons[index];
              const phase = t.roadmap.phases[phaseKey];
              const milestone = {
                icon: Icon,
                phase: phase.quarter,
                title: phase.title,
                items: phase.milestones,
                status: phase.status as 'completed' | 'in-progress' | 'upcoming'
              };
              return (
              <motion.div
                key={index}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* 💫 Glowing dot on timeline */}
                <motion.div
                  className="hidden md:flex absolute top-20 left-1/2 -translate-x-1/2 w-6 h-6 z-10"
                  variants={timelineDot}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${statusColors[milestone.status as keyof typeof statusColors]} shadow-lg`}>
                    <motion.div
                      className="w-full h-full rounded-full glow-green"
                      animate={milestone.status === "in-progress" ? {
                        boxShadow: [
                          "0 0 20px rgba(0, 255, 0, 0.8)",
                          "0 0 40px rgba(0, 255, 0, 1)",
                          "0 0 20px rgba(0, 255, 0, 0.8)"
                        ]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>

                {/* 🎴 Milestone card */}
                <div className="glass p-6 rounded-2xl hover:bg-green-electric/5 transition-all duration-300 border border-green-electric/20 mt-32 md:mt-28">
                  {/* 🎯 Icon */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${statusColors[milestone.status as keyof typeof statusColors]} blur-xl opacity-60 rounded-full`} />
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${statusColors[milestone.status as keyof typeof statusColors]} rounded-2xl flex items-center justify-center glow-green`}>
                      <milestone.icon className="w-8 h-8 text-background-primary" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* 📅 Phase badge */}
                  <div className="inline-block bg-green-electric/20 text-green-electric px-3 py-1 rounded-full text-xs font-bold mb-3 glow-green">
                    {milestone.phase}
                  </div>

                  {/* 📝 Title */}
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                    {milestone.title}
                  </h3>

                  {/* ✅ Checklist items */}
                  <ul className="space-y-2">
                    {milestone.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-start gap-2 text-text-secondary text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + itemIndex * 0.1 + 0.3 }}
                      >
                        <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 bg-gradient-to-r ${statusColors[milestone.status as keyof typeof statusColors]} glow-green`} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* 🏷️ Status badge */}
                  <div className="mt-4 pt-4 border-t border-green-electric/20">
                    <span className={`text-xs font-semibold uppercase tracking-wide ${
                      milestone.status === "completed" ? "text-green-bright" :
                      milestone.status === "in-progress" ? "text-green-electric" :
                      "text-text-muted"
                    }`}>
                      {milestone.status === "completed" && `✓ ${t.roadmap.statusLabels.completed}`}
                      {milestone.status === "in-progress" && `⚡ ${t.roadmap.statusLabels['in-progress']}`}
                      {milestone.status === "upcoming" && `⏳ ${t.roadmap.statusLabels.upcoming}`}
                    </span>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
