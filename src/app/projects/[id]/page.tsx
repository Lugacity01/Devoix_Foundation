'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projectsData';
import { MapPin, Calendar, Users, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ProjectDetailProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 2);

  return (
    <div className="pt-28 pb-16 sm:pt-32 sm:pb-24 bg-slate-50 min-h-screen selection:bg-purple-600 selection:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-slate-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects Archive</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 text-white">
              {project.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
              project.status === 'Active' ? 'bg-purple-600 text-white' : 'bg-slate-700 text-white'
            }`}>
              {project.status}
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {project.name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-slate-600">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-purple-600" />
              {project.location}, Nigeria
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-slate-400" />
              Year: {project.year}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-purple-600">
              <Users className="w-4 h-4" />
              {project.livesImpacted}+ Lives Impacted
            </span>
          </div>
        </div>

        {/* Cover Image Frame */}
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-8 sm:mb-12 bg-slate-100 border border-slate-200">
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 sm:mb-16">
          
          {/* Main Article Body (Span 8) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
              <h2 className="font-display text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                Project Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {project.fullDescription || project.description}
              </p>
            </div>

            {project.impactBreakdown && project.impactBreakdown.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                  Verified Impact Highlights
                </h2>
                <ul className="space-y-3">
                  {project.impactBreakdown.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900">{item.count}</span> — <span>{item.label}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                  On-The-Field Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.map((img, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img src={img} alt={`Field photo ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Metrics Sidebar (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#080312] text-white p-6 sm:p-8 rounded-2xl border border-purple-900/40">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300 block mb-2">
                VERIFIED METRICS
              </span>
              <div className="font-display text-4xl font-extrabold text-white mb-1">
                {project.livesImpacted}+
              </div>
              <div className="text-xs font-mono text-slate-400 mb-6">
                Direct Beneficiaries Reached
              </div>

              <div className="pt-4 border-t border-purple-900/40 space-y-3 text-xs font-mono">
                <div className="flex justify-between text-slate-300">
                  <span>Target State:</span>
                  <span className="font-bold text-white">{project.location}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Cycle Year:</span>
                  <span className="font-bold text-white">{project.year}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Operational Model:</span>
                  <span className="font-bold text-purple-300">Tuition-Free</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-display text-sm font-bold text-slate-900 mb-2">Want to sponsor or replicate this?</h3>
              <p className="text-xs text-slate-600 mb-4">Partner with Dovoix Foundation to expand solar hubs and learning cohorts.</p>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="pt-8 sm:pt-12 border-t border-slate-200">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-6">
              More {project.category} Initiatives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProjects.map((rel) => (
                <div key={rel.id} className="bg-white rounded-2xl p-5 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-purple-600 uppercase mb-1 block">
                      {rel.location} • {rel.year}
                    </span>
                    <h4 className="font-display text-base font-bold text-slate-900 mb-2">{rel.name}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2 mb-4">{rel.description}</p>
                  </div>
                  <Link
                    href={`/projects/${rel.id}`}
                    className="text-xs font-mono font-bold text-purple-600 hover:underline"
                  >
                    View Project Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
