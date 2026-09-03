"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Award,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  Download,
  FolderKanban,
  Zap,
  Database,
  BarChart2
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Hero() {
  const { client, heroMetrics } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black bg-analytics-grid bg-radial-glow"
    >
      {/* Background Ambient Glow & Particles */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span>Available for BI & Analytics Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Hi, I'm <span className="bg-linear-to-r from-white via-zinc-100 to-emerald-400 bg-clip-text text-transparent">{client.name}</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <span>Data Analyst</span>
              <span className="text-zinc-600 font-normal">|</span>
              <span className="text-zinc-300 text-lg sm:text-xl font-normal">
                Turning Data Into Actionable Insights
              </span>
            </h2>

            {/* Professional Bio */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              {client.bio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-linear-to-r from-emerald-500 via-green-500 to-emerald-400 text-black shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all group"
              >
                <FolderKanban className="w-4 h-4 text-black" />
                <span>View My Work</span>
              </a>

              <a
                href={client.resumeUrl}
                download="Chinaza_Okafor_Data_Analyst_Resume.pdf"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-zinc-950 hover:bg-zinc-900 text-zinc-200 hover:text-white border border-zinc-800 hover:border-emerald-500/40 shadow-lg hover:scale-105 transition-all group"
              >
                <Download className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Secondary Text Link */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>

            {/* Quick Tool Icons Banner */}
            <div className="mt-12 pt-8 border-t border-zinc-800/80 w-full flex items-center gap-6 text-zinc-400 text-xs font-mono">
              <span className="uppercase tracking-wider text-zinc-500">Core Stack:</span>
              <div className="flex items-center gap-4 text-zinc-300 font-semibold">
                <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <Database className="w-4 h-4 text-emerald-400" /> SQL
                </span>
                <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <BarChart2 className="w-4 h-4 text-green-400" /> Power BI
                </span>
                <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <Zap className="w-4 h-4 text-emerald-300" /> Excel BI
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Portrait & Floating Analytics Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Glowing Backdrop Circle */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-linear-to-tr from-emerald-500/25 to-green-600/20 rounded-full blur-2xl -z-10 animate-pulse" />

            {/* Portrait Frame Container */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl p-3 bg-linear-to-b from-emerald-500/30 via-zinc-900/60 to-black border border-emerald-500/40 shadow-2xl shadow-emerald-950/60">
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image
                  src="/images/chinaza.jpg"
                  alt="Chinaza Okafor — Data Analyst"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Subtle Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-transparent to-transparent opacity-85" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/90 backdrop-blur-md border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Chinaza Okafor</p>
                    <p className="text-[10px] text-emerald-400 font-mono">BI & Analytics Specialist</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </div>
                </div>
              </div>

              {/* Floating Metric Card 1: Revenue (Top Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 p-3.5 rounded-2xl glass-panel shadow-xl flex items-center gap-3 border border-emerald-500/30 bg-[#0c120f]/95 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Revenue Growth</p>
                  <p className="text-base font-extrabold text-emerald-400 leading-tight">
                    {heroMetrics[0].value}
                  </p>
                </div>
              </motion.div>

              {/* Floating Metric Card 2: Data Accuracy (Top Left) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 p-3.5 rounded-2xl glass-panel shadow-xl flex items-center gap-3 border border-emerald-500/30 bg-[#0c120f]/95 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Data Accuracy</p>
                  <p className="text-base font-extrabold text-white leading-tight">
                    {heroMetrics[1].value}
                  </p>
                </div>
              </motion.div>

              {/* Floating Metric Card 3: Projects (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-4 sm:-bottom-6 sm:-right-6 p-3.5 rounded-2xl glass-panel shadow-xl flex items-center gap-3 border border-emerald-500/30 bg-[#0c120f]/95 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <FolderKanban className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Projects</p>
                  <p className="text-base font-extrabold text-emerald-300 leading-tight">
                    {heroMetrics[2].value}
                  </p>
                </div>
              </motion.div>

              {/* Floating Metric Card 4: Insights (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-6 -left-4 sm:-bottom-6 sm:-left-6 p-3.5 rounded-2xl glass-panel shadow-xl flex items-center gap-3 border border-emerald-500/30 bg-[#0c120f]/95 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Insights Gen.</p>
                  <p className="text-base font-extrabold text-emerald-400 leading-tight">
                    {heroMetrics[3].value}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
