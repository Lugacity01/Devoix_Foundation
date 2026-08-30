'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';
import { LightboxModal } from '@/components/LightboxModal';
import { MapPin, Calendar, Users, ArrowLeft, Maximize2, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const project = projectsData.find((p) => p.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="pt-36 pb-24 max-w-3xl mx-auto px-4 text-center">
        <h1 className="font-display text-3xl font-bold text-brand-dark mb-4">Project Not Found</h1>
        <p className="text-slate-600 text-sm mb-6">The requested project record could not be found in the Foundation archive.</p>
        <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white text-sm font-semibold">
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Projects</span>
        </Link>
      </div>
    );
  }

  const relatedProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 3);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-brand-teal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Hero Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-subtle mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-teal-50 text-brand-teal text-xs font-bold uppercase">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase">
              {project.status}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-4 leading-tight">
            {project.name}
          </h1>

          <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mb-8">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100 text-xs text-slate-600 font-semibold">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-teal" />
              {project.location}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              {project.date}
            </span>
          </div>
        </div>

        {/* Cover Image Frame */}
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-xl mb-12 bg-slate-100 border border-slate-200">
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Grid: Content + Lead & Metrics Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* About & Narrative Description */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">
                About This Project
              </h2>
              <p className="text-slate-700 text-base leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>

            {/* Photo Gallery Grid */}
            {project.galleryImages.length > 0 && (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle">
                <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => openLightbox(idx)}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                    >
                      <img
                        src={img}
                        alt={`Project media ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Optional Video Section */}
            {project.videoUrl && (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle">
                <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">
                  Project Documentary Video
                </h2>
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900">
                  <iframe
                    src={project.videoUrl}
                    title="Project Documentary"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column: Impact Stats & Project Lead */}
          <div className="lg:col-span-4 space-y-6">
            {/* Lives Impacted Card */}
            <div className="bg-gradient-to-br from-brand-navy to-slate-900 text-white p-8 rounded-2xl shadow-lg border border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 block mb-2">
                VERIFIED OUTCOME
              </span>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-2">
                {project.livesImpacted}+
              </div>
              <div className="text-sm font-bold text-teal-300 mb-6">
                Total Lives Impacted
              </div>

              {project.impactBreakdown && (
                <div className="space-y-3 pt-6 border-t border-slate-800">
                  {project.impactBreakdown.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">{item.label}</span>
                      <span className="font-bold text-white">{item.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Project Lead Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">
                Project Lead
              </span>
              <div className="flex items-center gap-4">
                <img
                  src={project.leadInfo.photo}
                  alt={project.leadInfo.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-teal"
                />
                <div>
                  <h4 className="font-display text-base font-bold text-brand-dark">
                    {project.leadInfo.name}
                  </h4>
                  <p className="text-xs font-medium text-brand-teal">
                    {project.leadInfo.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="pt-12 border-t border-slate-200">
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">
              Related Foundation Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rel) => (
                <div key={rel.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-subtle flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-dark mb-2">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mb-4">
                      {rel.description}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${rel.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-teal hover:underline"
                  >
                    <span>View Project</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Gallery Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={project.galleryImages}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : project.galleryImages.length - 1))}
        onNext={() => setCurrentImageIndex((prev) => (prev < project.galleryImages.length - 1 ? prev + 1 : 0))}
      />
    </div>
  );
}
