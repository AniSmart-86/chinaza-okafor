"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  FileSpreadsheet,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle2,
  Download,
  MessageSquare
} from "lucide-react";
import { LuGithub, LuLinkedin, LuInstagram,} from "react-icons/lu";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const { client } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setSubmitted(true);

    const mailtoSubject = encodeURIComponent(formData.subject || "Data Analytics Project Inquiry");
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${client.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-black border-t border-zinc-900 bg-analytics-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have Data That Needs <span className="text-emerald-400">Answers?</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-base sm:text-lg">
            Let's turn your raw data into actionable insights that drive smarter decisions and higher revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-zinc-800 space-y-6 bg-[#0c120f]/90">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Available for freelance consulting, full-time BI analyst roles, data visualization projects, and custom analytical modeling.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${client.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-800 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Direct Email</span>
                    <p className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {client.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-800">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Phone / WhatsApp</span>
                    <p className="text-xs sm:text-sm font-bold text-white">{client.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-800">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Location</span>
                    <p className="text-xs sm:text-sm font-bold text-white">{client.location}</p>
                  </div>
                </div>
              </div>

              {/* React Social Icons: Instagram, WhatsApp, Excel, LinkedIn */}
              <div className="pt-4 border-t border-zinc-800 space-y-3">
                <span className="text-[11px] font-mono text-zinc-400 uppercase block tracking-wider">
                  Connect Across Platforms:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={client.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  >
                    <LuLinkedin className="w-4 h-4 text-emerald-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={`https://wa.me/${client.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={client.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  >
                    <LuInstagram className="w-4 h-4 text-emerald-400" />
                    <span>Instagram</span>
                  </a>

                
                </div>
              </div>

              {/* Download Resume Box */}
              <div className="pt-4">
                <a
                  href={client.resumeUrl}
                  download="Chinaza_Okafor_Data_Analyst_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-xs bg-linear-to-r from-emerald-500 via-green-500 to-emerald-400 text-black shadow-lg shadow-emerald-500/30 hover:scale-[1.01] transition-all"
                >
                  <Download className="w-4 h-4 text-black" />
                  <span>Download CV(PDF)</span>
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-emerald-500/30 bg-[#0c120f]/90 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                    Thank you for reaching out. Opening your email client to dispatch message to <span className="text-emerald-400 font-mono">{client.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 text-zinc-200 hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Your Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Subject / Project Type
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Power BI Dashboard Development"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Message Details <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your business problem, dataset, or analytics goals..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-linear-to-r from-emerald-500 via-green-500 to-emerald-400 text-black shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
