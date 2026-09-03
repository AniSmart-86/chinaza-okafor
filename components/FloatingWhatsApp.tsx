"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { FaWhatsapp } from "react-icons/fa";
export default function FloatingWhatsApp() {
  const { whatsappNumber, whatsappMessage } = PORTFOLIO_DATA.client;
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on Hover */}
      {showTooltip && (
        <div className="hidden sm:block px-3 py-1.5 rounded-xl bg-black border border-emerald-500/40 text-emerald-400 text-xs font-mono font-medium shadow-2xl animate-fade-in">
          Chat with me on WhatsApp
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group p-4 rounded-full bg-emerald-500 text-black shadow-xl shadow-emerald-500/40 hover:bg-emerald-400 hover:scale-110 transition-all flex items-center justify-center font-bold"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75 pointer-events-none" />
        
        <FaWhatsapp className="w-6 h-6 relative z-10 text-black fill-emerald-950" />
      </a>
    </div>
  );
}
