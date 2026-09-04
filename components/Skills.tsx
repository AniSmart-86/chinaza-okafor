"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Database,
  FileSpreadsheet,
  BarChart3,
  LayoutGrid,
  PieChart,
  Zap,
  Search,
  TrendingUp,
  Target,
  BrainCircuit,
  LineChart,
  Wrench,
  Code
} from "lucide-react";
import { PORTFOLIO_DATA, SkillCategory } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  FileSpreadsheet,
  BarChart3,
  LayoutGrid,
  PieChart,
  Zap,
  Search,
  TrendingUp,
  Target,
  BrainCircuit,
  LineChart,
  Code
};

function SkillProgressBar({ name, level, description, iconName }: { name: string; level: number; description: string; iconName: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const IconComponent = iconMap[iconName] || Wrench;

  return (
    <div ref={ref} className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 hover:border-emerald-500/40 transition-all group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">{name}</h4>
            <p className="text-[11px] text-zinc-400">{description}</p>
          </div>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
          {level}%
        </span>
      </div>

      {/* Emerald Green Progress Bar Container */}
      <div className="w-full h-2.5 bg-zinc-900 rounded-full overflow-hidden mt-3 p-0.5 border border-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full bg-linear-to-r from-emerald-500 via-green-500 to-emerald-400 shadow-sm shadow-emerald-500/50"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { skillsCategories } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 relative bg-black border-t border-zinc-900 bg-analytics-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>SKILLS & TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Competencies & <span className="text-emerald-400">Analytics Stack</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base">
            Mastery of modern data intelligence tools, database querying, data wrangling, and interactive visual storytelling.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-12">
          {skillsCategories.map((category: SkillCategory, idx: number) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
                <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-zinc-800" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.skills.map((skill) => (
                  <SkillProgressBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    description={skill.description}
                    iconName={skill.iconName}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

    

      </div>
    </section>
  );
}
