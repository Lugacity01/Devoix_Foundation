'use client';

import React from 'react';
import { ArrowRight, Film, HeartHandshake, Play, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 xl:pt-36 xl:pb-24 2xl:pt-40 2xl:pb-28 bg-[#120726] text-white overflow-hidden selection:bg-purple-600 selection:text-white border-b border-purple-900/40">

      {/* Background Clean Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#9d4edd20_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 items-center">

          {/* Left Column: Headline, Purpose & Dual CTAs (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Top Brand Tag */}
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-purple-200 mb-4 sm:mb-5 2xl:mb-6 border border-purple-500/40 px-3.5 py-1.5 rounded-full bg-purple-950/70">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400" />
              </span>
              <span>DOVOIX // PARENT BRAND LANDING</span>
            </div>

            {/* PRD Primary Headline without heavy shadow */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-4 sm:mb-5 2xl:mb-6 max-w-2xl 2xl:max-w-3xl">
              Connecting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300 animate-text-gradient bg-[length:200%_auto]">
                Creativity
              </span>{' '}
              with Purpose.
            </h1>

            {/* PRD Subheading */}
            <p className="text-xs sm:text-sm lg:text-base 2xl:text-lg text-purple-100/90 font-normal leading-relaxed mb-6 sm:mb-8 2xl:mb-10 max-w-xl 2xl:max-w-2xl">
              Dovoix is a creative firm with two operational arms — a commercial production house (<strong className="text-white">FilmHouse</strong>) and a social impact organization (<strong className="text-white">Foundation</strong>). Both operate under a unified identity to drive commercial innovation and youth transformation.
            </p>

            {/* PRD Required CTA Buttons: No shadow, clean crisp borders */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8 2xl:mb-10">
              <a
                href="#gateway"
                className="relative group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 2xl:px-8 py-3 sm:py-3.5 2xl:py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs font-mono uppercase tracking-wider border border-purple-400/50 transition-all duration-300 hover:scale-[1.02] text-center overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                <Film className="w-4 h-4 text-white relative z-10" />
                <span className="relative z-10">Explore FilmHouse</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
              </a>

              <a
                href="#gateway"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 2xl:px-8 py-3 sm:py-3.5 2xl:py-4 rounded-xl bg-purple-950/70 hover:bg-purple-900/80 text-purple-100 font-bold text-xs font-mono uppercase tracking-wider border border-purple-500/40 hover:border-purple-400/80 transition-all hover:scale-[1.02] text-center"
              >
                <HeartHandshake className="w-4 h-4 text-purple-300" />
                <span>Explore Foundation</span>
              </a>
            </div>

            {/* High-Level Dual-Arm Badge Strip (Clean crisp borders, no shadow) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-5 sm:pt-6 2xl:pt-8 border-t border-purple-900/40 w-full max-w-xl 2xl:max-w-2xl">
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-purple-950/50 border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-900/40 transition-all group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 2xl:w-10 2xl:h-10 rounded-xl bg-purple-600/30 border border-purple-400/50 flex items-center justify-center text-purple-200 font-bold shrink-0 group-hover:scale-110 transition-transform">
                  <Film className="w-4 h-4 2xl:w-5 2xl:h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-white uppercase tracking-wider group-hover:text-purple-300 transition-colors">FilmHouse</div>
                  <div className="text-[11px] text-purple-200/70 font-medium">Commercial Creative Arm</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-purple-950/50 border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-900/40 transition-all group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 2xl:w-10 2xl:h-10 rounded-xl bg-violet-600/30 border border-violet-400/50 flex items-center justify-center text-violet-200 font-bold shrink-0 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-4 h-4 2xl:w-5 2xl:h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-white uppercase tracking-wider group-hover:text-violet-300 transition-colors">Foundation</div>
                  <div className="text-[11px] text-purple-200/70 font-medium">Social Impact Arm</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Stage (Clean, crisp, no blurry shadow) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-sm xl:max-w-md 2xl:max-w-lg animate-float">

              {/* Main Photo Frame with crisp border and clean background */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-400/50 bg-[#080312] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] max-h-[380px] sm:max-h-[440px] lg:max-h-[460px] 2xl:max-h-[500px] group">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Dovoix FilmHouse & Foundation Production Stage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080312] via-[#080312]/20 to-transparent" />

                {/* Top Overlay Badge */}
                <div className="absolute top-3 left-3 right-3 sm:top-3.5 sm:left-3.5 sm:right-3.5 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-[#080312]/90 border border-purple-400/40 text-purple-200 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Play className="w-2.5 h-2.5 text-purple-400 fill-purple-400 animate-pulse" />
                    SHOWCASE REEL // DOVOIX
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-purple-600 text-white text-[9px] font-mono font-bold">
                    4K LIVE
                  </span>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#080312]/95 border border-purple-500/40">
                  <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider mb-0.5">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    <span>COMMERCIAL & COMMUNITY SYNERGY</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-medium text-white leading-snug">
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
