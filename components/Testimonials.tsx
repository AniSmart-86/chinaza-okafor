"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Testimonials() {
  const { testimonials } = PORTFOLIO_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 relative bg-black border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by <span className="text-emerald-400">Business Leaders</span>
          </h2>
        </div>

        {/* Testimonial Carousel Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-emerald-500/20 bg-[#0c120f]/90 relative shadow-2xl overflow-hidden">
          
          <Quote className="w-16 h-16 text-emerald-500/10 absolute top-6 right-6 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <p className="text-zinc-200 text-base sm:text-xl italic leading-relaxed font-light">
                "{current.quote}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-black font-extrabold text-sm shadow-md shadow-emerald-500/30">
                  {current.avatar}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{current.author}</h3>
                  <p className="text-xs text-emerald-400 font-mono">
                    {current.role} — <span className="text-zinc-400">{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-zinc-800/60">
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex ? "w-8 bg-emerald-400" : "bg-zinc-800 hover:bg-zinc-600"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-xl bg-zinc-950 text-zinc-300 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-xl bg-zinc-950 text-zinc-300 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
