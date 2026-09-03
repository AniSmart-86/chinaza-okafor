"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LuGithub} from "react-icons/lu";
import {
  FolderKanban,
  ArrowRight,
  Eye
} from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

const categories = ["All", "Power BI", "Excel", "SQL", "Python", "Tableau"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = PORTFOLIO_DATA.projects;

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-black border-t border-zinc-900 bg-analytics-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Data & <span className="text-emerald-400">BI Case Studies</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            End-to-end analytical solutions designed to optimize revenue, reduce churn, and streamline operations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  isActive
                    ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/30 border border-emerald-400"
                    : "bg-zinc-950/80 text-zinc-400 border border-zinc-800 hover:text-white hover:bg-zinc-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-zinc-800/90 bg-[#0c120f]/90 flex flex-col group"
              >
                {/* Image Container with Zoom & Overlay */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative w-full h-60 sm:h-72 cursor-pointer overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0c120f] via-[#0c120f]/30 to-transparent opacity-80" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/90 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay CTA */}
                  <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-5 py-2.5 rounded-xl bg-black/90 border border-emerald-400 text-white font-semibold text-xs flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-emerald-400" />
                      <span>View Full Case Study</span>
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors cursor-pointer leading-snug"
                    >
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Key Insight Highlight */}
                  <div className="p-3.5 rounded-xl bg-black border border-zinc-800 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                      Key Business Insight
                    </span>
                    <p className="text-xs text-zinc-200 font-medium">
                      {project.keyInsights[0]}
                    </p>
                  </div>

                  {/* Tools Badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors group/btn"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-zinc-950 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                          aria-label="View Github Repository"
                        >
                          <LuGithub className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Component */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
