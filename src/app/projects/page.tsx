'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';
import { ProjectStatus, ProjectCategory } from '@/types';
import { MapPin, Calendar, Filter, ChevronRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';

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
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesCategory && matchesSearch;
  });

  const statuses: ('All' | ProjectStatus)[] = ['All', 'Active', 'Completed', 'Upcoming'];
  const categories: ('All' | ProjectCategory)[] = ['All', 'Outreach', 'Education', 'Community', 'Interstate'];

  return (
    <div className="pt-28 pb-16 sm:pt-32 sm:pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-purple-600 mb-2 block">
            FOUNDATION INITIATIVES ARCHIVE
          </span>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4">
            Projects & Community Outreaches
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600">
            A comprehensive record of Dovoix Foundation's social impact projects, rural learning hub installations, and regional educational masterclasses.
          </p>
        </div>

        {/* Filter Bar Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 mb-8 sm:mb-10 space-y-4 sm:space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by title, state, or location..."
                className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" />
              <span>Filter Project Archive</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-3 sm:pt-4 border-t border-slate-100">
            {/* Status Filter Tabs */}
            <div>
              <label className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 uppercase block mb-1.5 sm:mb-2">
                Status
              </label>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {statuses.map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setSelectedStatus(status)}
                    className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-semibold transition-all ${
                      selectedStatus === status
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div>
              <label className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 uppercase block mb-1.5 sm:mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#120726] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-500 mb-4 sm:mb-6">
          <span>Showing {filteredProjects.length} projects</span>
          {(selectedStatus !== 'All' || selectedCategory !== 'All' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedStatus('All');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-purple-600 font-bold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Projects Responsive Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <p className="text-sm sm:text-base font-semibold text-slate-700 mb-1 sm:mb-2">No projects found</p>
            <p className="text-xs text-slate-500">Try adjusting your category or status search filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={project.coverImage}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900/90 text-white backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md ${
                        project.status === 'Active' ? 'bg-purple-600/90 text-white' : 'bg-slate-800/90 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-slate-500 mb-2">
                      <span className="inline-flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-purple-600" />
                        {project.location}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                      {project.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-purple-600">
                    {project.livesImpacted}+ Lives Impacted
                  </span>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-slate-900 group-hover:text-purple-600 transition-colors"
                  >
                    <span>View Project</span>
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
