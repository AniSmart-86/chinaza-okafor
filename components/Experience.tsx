"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 relative bg-black border-t border-zinc-900">
      <div ref={containerRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-emerald-400">Experience Timeline</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            Proven history of delivering high-impact business intelligence and data solutions for growing organizations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-zinc-800">
          
          {/* Animated Line Progress Fill */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-0 top-0 w-0.5 h-full bg-linear-to-b from-emerald-400 via-green-500 to-emerald-600"
          />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Node Icon Circle */}
                <div className="absolute -left-7.75 sm:-left-11.75 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/30">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                {/* Experience Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-[#0c120f]/90 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      <p className="text-sm font-semibold text-emerald-400 mt-0.5">{item.company}</p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        {item.period}
                      </span>
                      <span className="hidden sm:flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-1.5">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                    <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      Notable Impact & Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="text-xs text-zinc-200 font-medium">
                          • {ach}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
