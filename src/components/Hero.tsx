'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Film, HeartHandshake, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#080312] text-white overflow-hidden selection:bg-purple-600 selection:text-white border-b border-purple-900/30">
      {/* Background Ambient Purple Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] sm:w-[700px] h-[350px] sm:h-[500px] bg-purple-600/15 rounded-full blur-[140px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] sm:w-[600px] h-[300px] sm:h-[400px] bg-violet-600/15 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#9d4edd15_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Headline, Purpose & Dual CTAs (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Top Brand Tag */}
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-purple-400 mb-4 sm:mb-6 border border-purple-500/30 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-500/10">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500 animate-pulse" />
              <span>DOVOIX // PARENT BRAND LANDING</span>
            </div>

            {/* PRD Primary Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-4 sm:mb-6">
              Connecting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300">
                Creativity
              </span>{' '}
              with Purpose.
            </h1>

            {/* PRD Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Dovoix is a creative firm with two operational arms — a commercial production house (<strong className="text-white">FilmHouse</strong>) and a social impact organization (<strong className="text-white">Foundation</strong>). Both operate under a unified identity to drive commercial innovation and youth transformation.
            </p>

            {/* PRD Required CTA Buttons: Explore FilmHouse & Explore Foundation */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-12">
              <a
                href="#gateway"
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs font-mono uppercase tracking-wider border border-purple-400/50 transition-all hover:scale-[1.02] group shadow-lg shadow-purple-900/30 text-center"
              >
                <Film className="w-4 h-4 text-white" />
                <span>Explore FilmHouse</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#gateway"
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs font-mono uppercase tracking-wider border border-white/20 transition-all text-center"
              >
                <HeartHandshake className="w-4 h-4 text-purple-300" />
                <span>Explore Foundation</span>
              </a>
            </div>

            {/* High-Level Dual-Arm Badge Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 sm:pt-8 border-t border-purple-900/30 w-full">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 sm:border-transparent">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold shrink-0">
                  <Film className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">FilmHouse</div>
                  <div className="text-[11px] text-slate-400 font-medium">Commercial Creative Arm</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 sm:border-transparent">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-300 font-bold shrink-0">
                  <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">Foundation</div>
                  <div className="text-[11px] text-slate-400 font-medium">Social Impact Arm</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Reel / Photo Stage Representing Both Arms (Span 5) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main Photo/Reel Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-500/30 bg-[#0D071E] aspect-[16/10] sm:aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Dovoix FilmHouse & Foundation Production Stage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080312] via-[#080312]/20 to-transparent" />

                {/* Top Overlay Badge */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between">
                  <span className="px-2.5 sm:px-3.5 py-1 rounded-full bg-[#080312]/90 border border-purple-500/30 text-purple-300 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 sm:gap-2">
                    <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400 fill-purple-400" />
                    SHOWCASE REEL // DOVOIX BRAND
                  </span>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#080312]/90 border border-purple-500/30">
                  <p className="text-[10px] sm:text-xs font-mono font-bold text-purple-300 uppercase tracking-wider mb-0.5 sm:mb-1">
                    COMMERCIAL & COMMUNITY SYNERGY
                  </p>
                  <p className="text-[11px] sm:text-xs font-semibold text-white leading-relaxed">
                    Bridging commercial film production excellence with tuition-free youth skills development.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
