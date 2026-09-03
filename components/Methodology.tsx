"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Zap,
  Search,
  BarChart3,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const stepIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Zap,
  Search,
  BarChart3,
  Lightbulb
};

export default function Methodology() {
  const { methodology } = PORTFOLIO_DATA;

  return (
    <section className="py-24 relative bg-black border-t border-zinc-900 bg-analytics-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>ANALYTICAL WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Turn <span className="text-emerald-400">Data Into Decisions</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            A structured 5-step analytical methodology engineered to convert raw business data into actionable ROI.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {methodology.map((step, index) => {
            const Icon = stepIcons[step.icon] || Lightbulb;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-zinc-800 bg-[#0c120f]/90 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-emerald-500/30 group-hover:text-emerald-400 transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 mt-0.5">{step.subtitle}</p>

                  <p className="text-xs text-zinc-300 leading-relaxed mt-3">
                    {step.description}
                  </p>
                </div>

                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-700">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
