"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Certifications() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section className="py-20 relative bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & EDUCATION</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-emerald-400">Professional Training</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border border-zinc-800 bg-[#0c120f]/80 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-full border border-zinc-800">
                    {cert.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1">{cert.issuer}</p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <Award className="w-3 h-3" /> Verified Credential
                </span>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-emerald-300 hover:bg-zinc-900 transition-colors"
                  aria-label="Verify credential"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
