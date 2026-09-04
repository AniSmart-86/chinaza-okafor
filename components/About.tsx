"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  UserCheck,
  Target,
  Zap,
  Building2,
  ShoppingCart,
  CreditCard,
  Truck,
  Brain
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(16, Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-extrabold text-3xl sm:text-4xl text-emerald-400">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { aboutMetrics } = PORTFOLIO_DATA;

  const industries = [
    { name: "E-Commerce & Retail", icon: ShoppingCart, desc: "Basket analysis, sales funnel optimization, discount modeling" },
    { name: "Fintech & Banking", icon: CreditCard, desc: "Churn prediction, revenue assurance, transactional profiling" },
    { name: "Logistics & Supply Chain", icon: Truck, desc: "Lead time tracking, inventory turnover, reorder forecasting" },
    { name: "Enterprise Business", icon: Building2, desc: "Executive KPI scorecards, overhead cost control, P&L reporting" }
  ];

  return (
    <section id="about" className="py-24 relative bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Raw Data & Smart <span className="text-emerald-400">Business Decisions</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            I specialize in transforming disjointed spreadsheets and massive relational databases into structured, strategic intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl space-y-5 border border-emerald-500/20 bg-[#0c120f]/80">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <Brain className="w-6 h-6 text-emerald-400" />
                Analytical Approach & Methodology
              </h3>

              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                Data is only as valuable as the decisions it empowers. My focus goes beyond generating colorful charts; I uncover the underlying operational leverage points, revenue drivers, and cost inefficiencies hiding inside raw data structures.
              </p>

              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                Whether auditing PostgreSQL databases for churn risk, building DAX-powered Power BI dashboards for C-suite executives, or automating financial forecasts in Excel, I follow a systematic 5-stage analytical process ensuring precision and strategic value.
              </p>

              {/* Key Value Propositions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-1">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Problem Solver</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">Diagnosing root causes behind revenue leaks and performance drops.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-1">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Automation Focused</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">Eliminating manual spreadsheet updates via SQL CTEs & Power Query.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Worked With */}
            <div>
              <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-4">
                Industries & Domain Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industries.map((ind, i) => {
                  const Icon = ind.icon;
                  return (
                    <div key={i} className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{ind.name}</p>
                        <p className="text-[11px] text-zinc-400">{ind.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual "Analyst Profile" Card with Counters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel p-8 rounded-3xl border border-emerald-500/30 shadow-2xl relative overflow-hidden bg-linear-to-b from-[#0c120f] to-black">
              
              {/* Card Accent Watermark */}
              <div className="absolute top-0 right-0 p-8 text-emerald-500/5 font-mono text-9xl font-black select-none pointer-events-none">
                DATA
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-black font-extrabold text-lg shadow-lg shadow-emerald-500/30">
                  CO
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Analyst Profile</h3>
                  <p className="text-xs text-emerald-400 font-mono">Chinaza Okafor — Track Record</p>
                </div>
              </div>

              {/* Animated Counters Grid */}
              <div className="grid grid-cols-2 gap-6">
                {aboutMetrics.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
                  >
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                    <p className="text-xs font-medium text-zinc-300 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Summary Quote Box */}
              <div className="mt-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 leading-relaxed font-mono">
                "I bridge the gap between technical SQL databases and executive business strategy, turning raw metrics into ROI."
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
