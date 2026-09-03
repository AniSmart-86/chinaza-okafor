"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  AlertCircle,
  Database,
  Layers,
  Zap,
  TrendingUp
} from "lucide-react";
import { LuGithub} from "react-icons/lu";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl bg-[#0a0f0c] border border-emerald-500/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header Bar */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/90 sticky top-0 z-20 backdrop-blur-md">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                {project.category} CASE STUDY
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2 leading-tight">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Scrollable Content */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1">
            
            {/* Dashboard Screenshot Preview */}
            <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 group shadow-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1200px) 100vw, 800px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0f0c] via-transparent to-transparent" />
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
                  <span className="text-xs font-mono text-zinc-400 uppercase">{metric.label}</span>
                  <p className="text-2xl font-extrabold text-emerald-400 mt-1">{metric.value}</p>
                  {metric.trend && (
                    <p className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> {metric.trend}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Business Problem & Dataset */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-950/90 border border-zinc-800 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  Business Problem
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-950/90 border border-zinc-800 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  Dataset Overview
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.datasetInfo}
                </p>
              </div>
            </div>

            {/* 6-Step Analytical Process Timeline */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                6-Step Analytical Process
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "1. Collect", text: project.process.collect, color: "text-emerald-400" },
                  { title: "2. Clean", text: project.process.clean, color: "text-green-400" },
                  { title: "3. Analyze", text: project.process.analyze, color: "text-emerald-300" },
                  { title: "4. Visualize", text: project.process.visualize, color: "text-lime-400" },
                  { title: "5. Insights", text: project.process.insights, color: "text-amber-400" },
                  { title: "6. Recommendations", text: project.process.recommendations, color: "text-emerald-400" }
                ].map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
                    <h4 className={`text-xs font-mono font-bold ${step.color}`}>{step.title}</h4>
                    <p className="text-xs text-zinc-300 mt-1">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Impact Summary */}
            <div className="p-6 rounded-2xl bg-linear-to-r from-emerald-950/80 to-zinc-950 border border-emerald-500/40 space-y-2">
              <h3 className="text-sm font-bold text-emerald-300 flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                Measured Business Impact & Results
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                {project.businessImpact}
              </p>
            </div>

            {/* Tools Used Badges */}
            <div className="flex items-center gap-2 flex-wrap pt-2">
              <span className="text-xs font-mono text-zinc-400">Tools Applied:</span>
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-lg bg-zinc-900 text-xs font-mono text-emerald-300 border border-zinc-800"
                >
                  {tool}
                </span>
              ))}
            </div>

          </div>

          {/* Modal Footer Buttons */}
          <div className="p-6 border-t border-zinc-800 bg-zinc-950/90 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-linear-to-r from-emerald-500 via-green-500 to-emerald-400 text-black shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-all"
                >
                  <LuGithub className="w-3.5 h-3.5" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Close Preview
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
