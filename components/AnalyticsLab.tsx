"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart as PieIcon,
  Percent,
  Table as TableIcon,
  BarChart3,
  Search,
  ArrowUpDown,
  Zap,
  CheckCircle
} from "lucide-react";
import { PORTFOLIO_DATA, SampleDatasetRow } from "@/data/portfolio";

export default function AnalyticsLab() {
  const [activeTab, setActiveTab] = useState<"revenue" | "profit" | "change" | "explorer">("revenue");

  // Tool 1: Revenue Calculator State
  const [revCustomers, setRevCustomers] = useState<number>(1500);
  const [revAOV, setRevAOV] = useState<number>(120);
  const [revGrowth, setRevGrowth] = useState<number>(15);

  const calcBaselineRevenue = revCustomers * revAOV;
  const calcProjectedRevenue = calcBaselineRevenue * (1 + revGrowth / 100);

  // Tool 2: Profit Margin Calculator State
  const [pmRevenue, setPmRevenue] = useState<number>(500000);
  const [pmCost, setPmCost] = useState<number>(320000);

  const calcProfit = pmRevenue - pmCost;
  const calcMargin = pmRevenue > 0 ? (calcProfit / pmRevenue) * 100 : 0;

  // Tool 3: Percentage Change Calculator State
  const [pctPrev, setPctPrev] = useState<number>(250000);
  const [pctCurr, setPctCurr] = useState<number>(325000);

  const calcPctChange = pctPrev !== 0 ? ((pctCurr - pctPrev) / Math.abs(pctPrev)) * 100 : 0;
  const isPositiveGrowth = calcPctChange >= 0;

  // Tool 4: Dataset Explorer State
  const [dataSearch, setDataSearch] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [sortColumn, setSortColumn] = useState<keyof SampleDatasetRow>("month");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [explorerViewMode, setExplorerViewMode] = useState<"table" | "summary">("table");

  const rawData = PORTFOLIO_DATA.sampleDataset;

  const filteredData = useMemo(() => {
    return rawData
      .filter((item) => {
        const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
        const matchesSearch =
          item.month.toLowerCase().includes(dataSearch.toLowerCase()) ||
          item.category.toLowerCase().includes(dataSearch.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        let valA = a[sortColumn];
        let valB = b[sortColumn];
        if (typeof valA === "string") {
          return sortDirection === "asc"
            ? (valA as string).localeCompare(valB as string)
            : (valB as string).localeCompare(valA as string);
        }
        return sortDirection === "asc"
          ? (valA as number) - (valB as number)
          : (valB as number) - (valA as number);
      });
  }, [rawData, dataSearch, categoryFilter, sortColumn, sortDirection]);

  // Dataset Explorer Aggregates
  const totalRevenue = useMemo(() => filteredData.reduce((acc, row) => acc + row.revenue, 0), [filteredData]);
  const avgRevenue = useMemo(() => (filteredData.length > 0 ? totalRevenue / filteredData.length : 0), [filteredData, totalRevenue]);
  const totalExpenses = useMemo(() => filteredData.reduce((acc, row) => acc + row.expenses, 0), [filteredData]);
  const totalProfit = useMemo(() => filteredData.reduce((acc, row) => acc + row.profit, 0), [filteredData]);
  const avgCustomers = useMemo(() => (filteredData.length > 0 ? filteredData.reduce((acc, row) => acc + row.customers, 0) / filteredData.length : 0), [filteredData]);
  
  const bestMonth = useMemo(() => {
    if (filteredData.length === 0) return "N/A";
    return [...filteredData].sort((a, b) => b.revenue - a.revenue)[0].month;
  }, [filteredData]);

  const handleSort = (column: keyof SampleDatasetRow) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const formatNaira = (val: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="analytics-lab" className="py-24 relative bg-black border-t border-zinc-900 bg-analytics-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE ANALYTICS LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Analytics <span className="text-emerald-400">Playground</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            Test live business analytics calculators and explore sample corporate datasets directly on this interactive dashboard.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 p-1.5 bg-zinc-950/90 backdrop-blur-md rounded-2xl border border-zinc-800 max-w-3xl mx-auto">
          {[
            { id: "revenue", label: "Revenue Calculator", icon: DollarSign },
            { id: "profit", label: "Profit Margin", icon: PieIcon },
            { id: "change", label: "% Change Calc", icon: Percent },
            { id: "explorer", label: "Dataset Explorer", icon: TableIcon }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-32.5 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? "bg-linear-to-r from-emerald-500 via-green-500 to-emerald-400 text-black shadow-lg shadow-emerald-500/30"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/20 bg-[#0c120f]/90 min-h-120">
          <AnimatePresence mode="wait">
            
            {/* TOOL 1: REVENUE CALCULATOR */}
            {activeTab === "revenue" && (
              <motion.div
                key="revenue"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-emerald-400" />
                      Revenue Projection Calculator
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Compute baseline revenue and projected growth based on order metrics.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-mono text-zinc-300 mb-1.5 flex justify-between">
                        <span>Active Customers:</span>
                        <span className="text-emerald-400 font-bold">{revCustomers.toLocaleString()}</span>
                      </label>
                      <input
                        type="range"
                        min="100"
                        max="10000"
                        step="100"
                        value={revCustomers}
                        onChange={(e) => setRevCustomers(Number(e.target.value))}
                        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-300 mb-1.5 flex justify-between">
                        <span>Average Order Value ($):</span>
                        <span className="text-emerald-400 font-bold">${revAOV}</span>
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="1000"
                        step="10"
                        value={revAOV}
                        onChange={(e) => setRevAOV(Number(e.target.value))}
                        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-300 mb-1.5 flex justify-between">
                        <span>Projected Growth Rate (%):</span>
                        <span className="text-emerald-400 font-bold">+{revGrowth}%</span>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={revGrowth}
                        onChange={(e) => setRevGrowth(Number(e.target.value))}
                        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Result Card */}
                <div className="lg:col-span-6">
                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col gap-6">
                    <div className="p-4 rounded-xl bg-black border border-emerald-500/20">
                      <span className="text-xs font-mono text-zinc-400 uppercase">Baseline Revenue (Customers × AOV)</span>
                      <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        ${calcBaselineRevenue.toLocaleString()}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-linear-to-tr from-emerald-950/80 to-zinc-950 border border-emerald-500/40">
                      <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider">
                        Projected Total Revenue (+{revGrowth}%)
                      </span>
                      <p className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1">
                        ${Math.round(calcProjectedRevenue).toLocaleString()}
                      </p>
                      <p className="text-xs text-emerald-400 font-mono mt-2 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> +${Math.round(calcProjectedRevenue - calcBaselineRevenue).toLocaleString()} estimated revenue gain
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TOOL 2: PROFIT MARGIN CALCULATOR */}
            {activeTab === "profit" && (
              <motion.div
                key="profit"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <PieIcon className="w-5 h-5 text-emerald-400" />
                      Profit Margin Calculator
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Enter gross revenue and operational cost to evaluate net profit margin percentage.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Gross Revenue (₦):
                      </label>
                      <input
                        type="number"
                        value={pmRevenue}
                        onChange={(e) => setPmRevenue(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-mono text-sm focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Total Operating Cost (₦):
                      </label>
                      <input
                        type="number"
                        value={pmCost}
                        onChange={(e) => setPmCost(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-mono text-sm focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase">Gross Revenue</span>
                      <p className="text-lg font-bold text-white mt-1">{formatNaira(pmRevenue)}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase">Total Cost</span>
                      <p className="text-lg font-bold text-rose-400 mt-1">{formatNaira(pmCost)}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 col-span-2">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase">Net Profit</span>
                      <p className={`text-2xl font-extrabold mt-1 ${calcProfit >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                        {formatNaira(calcProfit)}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-linear-to-tr from-emerald-950/80 to-zinc-950 border border-emerald-500/40 col-span-2">
                      <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider">
                        Profit Margin Percentage
                      </span>
                      <p className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1">
                        {calcMargin.toFixed(2)}%
                      </p>
                      <div className="mt-2 text-xs font-mono">
                        {calcMargin >= 25 ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5" /> High Profitability (&gt;= 25%)
                          </span>
                        ) : calcMargin >= 10 ? (
                          <span className="text-amber-400 flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5" /> Moderate Profitability (10% - 24%)
                          </span>
                        ) : (
                          <span className="text-rose-400 flex items-center gap-1">
                            <TrendingDown className="w-3.5 h-3.5" /> Low / Negative Margin
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TOOL 3: PERCENTAGE CHANGE CALCULATOR */}
            {activeTab === "change" && (
              <motion.div
                key="change"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Percent className="w-5 h-5 text-emerald-400" />
                      Percentage Change Calculator
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Compare historical period vs current period metrics to evaluate growth velocity.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Previous Period Value:
                      </label>
                      <input
                        type="number"
                        value={pctPrev}
                        onChange={(e) => setPctPrev(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-mono text-sm focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Current Period Value:
                      </label>
                      <input
                        type="number"
                        value={pctCurr}
                        onChange={(e) => setPctCurr(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-mono text-sm focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col items-center text-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-xl ${
                        isPositiveGrowth
                          ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                          : "bg-rose-500/20 border-rose-500/40 text-rose-400"
                      }`}
                    >
                      {isPositiveGrowth ? (
                        <TrendingUp className="w-8 h-8" />
                      ) : (
                        <TrendingDown className="w-8 h-8" />
                      )}
                    </div>

                    <div>
                      <span className="text-xs font-mono text-zinc-400 uppercase">Calculated Growth Delta</span>
                      <p
                        className={`text-4xl sm:text-5xl font-black mt-1 ${
                          isPositiveGrowth ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        {isPositiveGrowth ? "+" : ""}
                        {calcPctChange.toFixed(2)}%
                      </p>
                    </div>

                    <div
                      className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5 ${
                        isPositiveGrowth
                          ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                          : "bg-rose-500/10 text-rose-300 border border-rose-500/30"
                      }`}
                    >
                      {isPositiveGrowth ? "Growth ↑" : "Decline ↓"}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TOOL 4: DATASET EXPLORER */}
            {activeTab === "explorer" && (
              <motion.div
                key="explorer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Control Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800">
                  <div className="flex items-center gap-3 flex-1 min-w-60">
                    <div className="relative w-full">
                      <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Search month or category..."
                        value={dataSearch}
                        onChange={(e) => setDataSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 rounded-xl bg-black border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="px-3 py-2 rounded-xl bg-black border border-zinc-800 text-xs text-zinc-300 focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="All">All Categories</option>
                      <option value="Retail">Retail</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="SaaS">SaaS</option>
                    </select>

                    <button
                      onClick={() => setExplorerViewMode(explorerViewMode === "table" ? "summary" : "table")}
                      className="px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 hover:bg-emerald-500/20 transition-colors flex items-center gap-1.5"
                    >
                      {explorerViewMode === "table" ? <BarChart3 className="w-3.5 h-3.5" /> : <TableIcon className="w-3.5 h-3.5" />}
                      <span>{explorerViewMode === "table" ? "Summary Metrics" : "Table View"}</span>
                    </button>
                  </div>
                </div>

                {/* Computed Summary KPI Ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Total Revenue</span>
                    <p className="text-sm font-bold text-emerald-400 mt-0.5">{formatNaira(totalRevenue)}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Avg Revenue</span>
                    <p className="text-sm font-bold text-white mt-0.5">{formatNaira(avgRevenue)}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Total Expenses</span>
                    <p className="text-sm font-bold text-rose-400 mt-0.5">{formatNaira(totalExpenses)}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Total Profit</span>
                    <p className="text-sm font-bold text-emerald-400 mt-0.5">{formatNaira(totalProfit)}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Avg Customers</span>
                    <p className="text-sm font-bold text-green-300 mt-0.5">{Math.round(avgCustomers)}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Best Month</span>
                    <p className="text-sm font-bold text-emerald-300 mt-0.5">{bestMonth}</p>
                  </div>
                </div>

                {/* Table View */}
                {explorerViewMode === "table" ? (
                  <div className="overflow-x-auto rounded-2xl border border-zinc-800">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-zinc-950 text-zinc-400 uppercase border-b border-zinc-800">
                        <tr>
                          {[
                            { key: "month", label: "Month" },
                            { key: "category", label: "Category" },
                            { key: "revenue", label: "Revenue (₦)" },
                            { key: "expenses", label: "Expenses (₦)" },
                            { key: "profit", label: "Profit (₦)" },
                            { key: "customers", label: "Customers" }
                          ].map((col) => (
                            <th
                              key={col.key}
                              onClick={() => handleSort(col.key as keyof SampleDatasetRow)}
                              className="px-4 py-3 cursor-pointer hover:text-white transition-colors"
                            >
                              <div className="flex items-center gap-1">
                                <span>{col.label}</span>
                                <ArrowUpDown className="w-3 h-3" />
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800/60 bg-black/60">
                        {filteredData.map((row, i) => (
                          <tr key={i} className="hover:bg-zinc-950/80 transition-colors">
                            <td className="px-4 py-3 text-emerald-400 font-bold">{row.month}</td>
                            <td className="px-4 py-3 text-zinc-300">{row.category}</td>
                            <td className="px-4 py-3 text-white font-bold">{formatNaira(row.revenue)}</td>
                            <td className="px-4 py-3 text-rose-400">{formatNaira(row.expenses)}</td>
                            <td className="px-4 py-3 text-emerald-400 font-bold">{formatNaira(row.profit)}</td>
                            <td className="px-4 py-3 text-green-300">{row.customers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center text-zinc-300 space-y-4">
                    <p className="text-xs font-mono">
                      Data Summary Breakdown: Showing {filteredData.length} records filtered.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-black border border-zinc-800">
                        <span className="text-xs text-zinc-400">Profit Margin %</span>
                        <p className="text-2xl font-bold text-emerald-400 mt-1">
                          {totalRevenue > 0 ? ((totalProfit / totalRevenue) * 100).toFixed(1) : 0}%
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-black border border-zinc-800">
                        <span className="text-xs text-zinc-400">Expense Ratio %</span>
                        <p className="text-2xl font-bold text-rose-400 mt-1">
                          {totalRevenue > 0 ? ((totalExpenses / totalRevenue) * 100).toFixed(1) : 0}%
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-black border border-zinc-800">
                        <span className="text-xs text-zinc-400">Revenue per Customer</span>
                        <p className="text-2xl font-bold text-emerald-400 mt-1">
                          {avgCustomers > 0 ? formatNaira(Math.round(totalRevenue / (avgCustomers * filteredData.length))) : 0}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
