'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';
import { ProjectStatus, ProjectCategory } from '@/types';
import { MapPin, Calendar, Filter, ChevronRight, Search, Sparkles, ArrowRight, ArrowUpRight, Users, CheckCircle2, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card3DTilt } from '@/components/Card3DTilt';
import { SupportBACCard } from '@/components/SupportBACCard';

export default function ProjectsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = projectsData.filter((project) => {
    const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesCategory && matchesSearch;
  });

  const statuses: ('All' | ProjectStatus)[] = ['All', 'Active', 'Completed', 'Upcoming'];
  const categories: ('All' | ProjectCategory)[] = ['All', 'Interstate', 'Community', 'Education', 'Outreach'];

  // Spotlight featured project (first completed or flagship)
  const spotlightProject = filteredProjects.length > 0 && searchQuery === '' && selectedStatus === 'All' && selectedCategory === 'All'
    ? filteredProjects[0]
    : null;

  const remainingProjects = spotlightProject
    ? filteredProjects.slice(1)
    : filteredProjects;

  return (
    <div className="pt-28 pb-16 sm:pt-32 sm:pb-24 bg-[#050914] text-white min-h-screen selection:bg-purple-600 selection:text-white relative overflow-hidden">
      
      {/* Ambient Radial Lighting */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 sm:pb-12 mb-8 sm:mb-12 border-b border-white/10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-purple-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span>DOVOIX FOUNDATION ARCHIVE</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-3">
              Projects & Field Outreaches
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed">
              Equipping underserved communities with digital design, content creation, and creative media toolkits.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md self-start lg:self-end">
            <div className="px-3.5 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 font-mono text-xs font-bold">
              {projectsData.length} Initiatives
            </div>
            <div className="text-xs font-mono text-slate-400 pr-2">
              Across 9+ States
            </div>
          </div>
        </div>

        {/* Modern Glassmorphic Filter & Search Bar */}
        <div className="bg-slate-950/70 p-5 sm:p-6 rounded-3xl border border-white/10 mb-10 sm:mb-14 backdrop-blur-md shadow-2xl space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-grow max-w-lg">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by campus chapter, state (e.g. UNILORIN, UNIPORT, Oyo, Lagos)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-purple-400" />
              <span>Filter Archive</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-white/10">
            {/* Category Filter Tabs */}
            <div>
              <label className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter Tabs */}
            <div>
              <label className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Status
              </label>
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setSelectedStatus(status)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                      selectedStatus === status
                        ? 'bg-white text-black font-bold shadow-md'
                        : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 1. HERO SPOTLIGHT PROJECT (Panoramic Bento Showcase) */}
        {spotlightProject && (
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span>FEATURED FLAGSHIP SHOWCASE</span>
            </div>

            <Card3DTilt maxTilt={3} scale={1.01} glareOpacity={0.1}>
              <div className="rounded-3xl bg-slate-950/90 border border-purple-500/30 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 group">
                
                {/* Visual Frame (Span 7) */}
                <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[340px] sm:min-h-[420px] bg-[#030611] overflow-hidden flex items-center justify-center p-4 sm:p-6">
                  <img
                    src={spotlightProject.coverImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />

                  <img
                    src={spotlightProject.coverImage}
                    alt={spotlightProject.name}
                    className="relative max-h-full max-w-full object-contain rounded-2xl shadow-2xl z-10 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <span className="px-3.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-purple-300 font-mono text-xs font-bold uppercase tracking-wider border border-white/15">
                      {spotlightProject.state} STATE
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold uppercase border border-emerald-500/30 backdrop-blur-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{spotlightProject.status}</span>
                    </span>
                  </div>
                </div>

                {/* Narrative Details (Span 5) */}
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{spotlightProject.location}</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {spotlightProject.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {spotlightProject.description}
                    </p>

                    {/* Quick Metrics */}
                    {spotlightProject.impactBreakdown && (
                      <div className="grid grid-cols-2 gap-2.5 mb-8 pt-4 border-t border-white/10">
                        {spotlightProject.impactBreakdown.slice(0, 4).map((item, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                            <div className="font-display text-base font-extrabold text-white">{item.count}</div>
                            <div className="text-[10px] font-mono text-slate-400">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/projects/${spotlightProject.id}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </Card3DTilt>
          </div>
        )}

        {/* 2. DYNAMIC BENTO ARCHIVE GRID */}
        <div>
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono text-slate-400">
            <span>SHOWING {filteredProjects.length} INITIATIVES</span>
            {(selectedStatus !== 'All' || selectedCategory !== 'All' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedStatus('All');
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-purple-400 font-bold hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          {remainingProjects.length === 0 ? (
            <div className="text-center py-16 bg-slate-950/60 rounded-3xl border border-white/10 p-8">
              <p className="text-base font-bold text-white mb-1">No matching projects found</p>
              <p className="text-xs text-slate-400">Try adjusting your filters or keyword query.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {remainingProjects.map((project, idx) => (
                <Card3DTilt key={project.id} maxTilt={6} scale={1.02} glareOpacity={0.15} className="h-full">
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="rounded-3xl bg-slate-950/80 border border-white/10 hover:border-purple-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group h-full shadow-lg"
                  >
                    <div>
                      {/* Media Image Showcase Frame */}
                      <div className="relative aspect-[16/10] bg-[#040713] overflow-hidden flex items-center justify-center p-3 border-b border-white/10">
                        {/* Ambient Glow Backdrop */}
                        <img
                          src={project.coverImage}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110 pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />

                        {/* Uncropped Artwork */}
                        <img
                          src={project.coverImage}
                          alt={project.name}
                          className="relative max-h-full max-w-full object-contain rounded-xl z-10 group-hover:scale-105 transition-transform duration-500 shadow-md"
                        />

                        {/* Floating Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                          <span className="px-2.5 py-0.5 rounded-lg bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider border border-white/15">
                            {project.state}
                          </span>
                          
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold uppercase backdrop-blur-md border ${
                            project.status === 'Completed'
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                              : project.status === 'Active'
                              ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                              : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                          }`}>
                            {project.status === 'Completed' ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Clock className="w-3 h-3 text-amber-400" />
                            )}
                            <span>{project.status}</span>
                          </span>
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-2">
                          <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span className="truncate">{project.location}</span>
                        </div>

                        <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug mb-2">
                          {project.name}
                        </h3>

                        <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Impact Highlights Pill Bar */}
                        {project.impactBreakdown && project.impactBreakdown.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                            {project.impactBreakdown.slice(0, 3).map((item, i) => (
                              <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-slate-300 border border-white/5">
                                {item.count} {item.label}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Footer CTA */}
                    <div className="p-5 sm:p-6 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-purple-300 font-semibold">
                        {project.date}
                      </span>
                      
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white group-hover:text-purple-300 transition-colors"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </Card3DTilt>
              ))}
            </div>
          )}
        </div>

        {/* 3. Interactive Bag A Child 2.0 Call For Support Banner */}
        <SupportBACCard className="mt-14 sm:mt-18" />

      </div>
    </div>
  );
}

