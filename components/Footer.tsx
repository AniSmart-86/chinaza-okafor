"use client";

import React from "react";
import { BarChart3, Mail, FileSpreadsheet, MessageCircle, FileBadge } from "lucide-react";
import { LuGithub, LuLinkedin, LuInstagram,} from "react-icons/lu";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const { client } = PORTFOLIO_DATA;

  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-emerald-600 via-emerald-500 to-green-400 flex items-center justify-center text-black shadow-md shadow-emerald-500/20 font-bold">
              <BarChart3 className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-wide block leading-tight">
                {client.name}
              </span>
              <span className="text-[11px] text-emerald-400 font-mono">
                Data Analyst | Turning Data Into Insights
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 font-medium text-zinc-300">
            <a href="#hero" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#analytics-lab" className="hover:text-emerald-400 transition-colors">Analytics Lab</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* React Social Icons: Instagram, WhatsApp, Excel, LinkedIn, Email, GitHub */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${client.email}`}
              className="p-2.5 rounded-xl bg-zinc-950 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 border border-zinc-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={client.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-950 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 border border-zinc-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LuLinkedin className="w-4 h-4" />
            </a>
            <a
              href={client.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-950 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 border border-zinc-800 transition-colors"
              aria-label="Instagram"
            >
              <LuInstagram className="w-4 h-4" />
            </a>
            <a
              href={client.excelUrl}
              download="Chinaza_Okafor_Data_Analyst_Resume.pdf"
              className="p-2.5 rounded-xl bg-zinc-950 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 border border-zinc-800 transition-colors"
              aria-label="Excel BI"
            >
              <FileBadge className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${client.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-950 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 border border-zinc-800 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
            <a
              href={client.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-950 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 border border-zinc-800 transition-colors"
              aria-label="GitHub"
            >
              <LuGithub className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <p>© 2026 {client.name}. All rights reserved.</p>
         
        </div>

      </div>
    </footer>
  );
}
