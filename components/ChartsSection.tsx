"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { BarChart2, TrendingUp, Users, PieChart as PieIcon } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const chartColors = {
  emerald: "#10b981",
  green: "#22c55e",
  mint: "#34d399",
  darkGreen: "#059669",
  lime: "#84cc16",
  rose: "#f43f5e"
};

const categoryPieData = [
  { name: "Retail", value: 3410000, color: chartColors.emerald },
  { name: "E-Commerce", value: 3200000, color: chartColors.green },
  { name: "SaaS Enterprise", value: 3970000, color: chartColors.mint }
];

export default function ChartsSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeChartTab, setActiveChartTab] = useState<"trend" | "bar" | "pie" | "area">("trend");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = PORTFOLIO_DATA.sampleDataset;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 rounded-xl bg-black/95 border border-emerald-500/40 backdrop-blur-md shadow-2xl text-xs font-mono">
          <p className="font-bold text-white mb-1.5">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-4 my-1">
              <span style={{ color: entry.color }}>{entry.name}:</span>
              <span className="font-bold text-white">
                {typeof entry.value === "number" && entry.value > 1000
                  ? `₦${entry.value.toLocaleString()}`
                  : entry.value}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 relative bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>VISUAL DATA INSIGHTS</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Interactive <span className="text-emerald-400">Analytics Visualizations</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Explore dynamic metric distributions, revenue growth trajectories, and cost comparative charts.
            </p>
          </div>

          {/* Chart Controls */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-zinc-950/90 rounded-2xl border border-zinc-800">
            {[
              { id: "trend", label: "Revenue Trend", icon: TrendingUp },
              { id: "bar", label: "Rev vs Exp", icon: BarChart2 },
              { id: "pie", label: "Profit Split", icon: PieIcon },
              { id: "area", label: "Customer Growth", icon: Users }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeChartTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveChartTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chart View Container */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-[#0c120f]/90 h-110">
          {isMounted ? (
            <ResponsiveContainer width="100%" height="100%">
              {activeChartTab === "trend" ? (
                <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={chartColors.emerald} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={chartColors.emerald} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2923" />
                  <XAxis dataKey="month" stroke="#71717a" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#71717a" tick={{ fontSize: 12 }} tickFormatter={(val) => `₦${val / 1000}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    name="Monthly Revenue (₦)"
                    stroke={chartColors.emerald}
                    strokeWidth={3}
                    dot={{ fill: chartColors.emerald, r: 4 }}
                    activeDot={{ r: 7, stroke: "#fff", strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="profit"
                    name="Net Profit (₦)"
                    stroke={chartColors.green}
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    dot={{ fill: chartColors.green, r: 3 }}
                  />
                </LineChart>
              ) : activeChartTab === "bar" ? (
                <BarChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2923" />
                  <XAxis dataKey="month" stroke="#71717a" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#71717a" tick={{ fontSize: 12 }} tickFormatter={(val) => `₦${val / 1000}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="revenue" name="Revenue (₦)" fill={chartColors.emerald} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" name="Expenses (₦)" fill={chartColors.rose} radius={[4, 4, 0, 0]} />
                </BarChart>
              ) : activeChartTab === "pie" ? (
                <PieChart>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Pie
                    data={categoryPieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                    nameKey="name"
                  >
                    {categoryPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              ) : (
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCust" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={chartColors.green} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={chartColors.green} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2923" />
                  <XAxis dataKey="month" stroke="#71717a" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#71717a" tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="customers"
                    name="Active Customers"
                    stroke={chartColors.green}
                    fillOpacity={1}
                    fill="url(#colorCust)"
                  />
                </AreaChart>
              )}
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-zinc-500 font-mono text-xs">
              Loading Chart Visualizer...
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
