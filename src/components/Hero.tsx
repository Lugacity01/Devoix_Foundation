'use client';

import React from 'react';
import { ArrowRight, Film, HeartHandshake, Play, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#080312] text-white overflow-hidden selection:bg-purple-600 selection:text-white border-b border-purple-900/30">
      
      {/* Dynamic Breathing Ambient Purple Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] sm:w-[700px] h-[350px] sm:h-[500px] bg-purple-600/20 rounded-full blur-[140px] sm:blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] sm:w-[600px] h-[300px] sm:h-[400px] bg-violet-600/20 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none animate-pulse-glow [animation-delay:2.5s]" />
      <div className="absolute inset-0 bg-[radial-gradient(#9d4edd18_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Purpose & Dual CTAs (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Brand Tag with Glowing Pulse */}
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-purple-300 mb-4 sm:mb-6 border border-purple-500/40 px-3.5 py-1.5 rounded-full bg-purple-950/60 backdrop-blur-md shadow-[0_0_20px_rgba(157,78,221,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              <span>DOVOIX // PARENT BRAND LANDING</span>
            </div>

            {/* PRD Primary Headline with Animated Gradient Flow */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-4 sm:mb-6">
              Connecting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300 animate-text-gradient bg-[length:200%_auto]">
                Creativity
              </span>{' '}
              with Purpose.
            </h1>

            {/* PRD Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Dovoix is a creative firm with two operational arms — a commercial production house (<strong className="text-white">FilmHouse</strong>) and a social impact organization (<strong className="text-white">Foundation</strong>). Both operate under a unified identity to drive commercial innovation and youth transformation.
            </p>

            {/* PRD Required CTA Buttons: Explore FilmHouse & Explore Foundation with Hover Flare */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-12">
              <a
                href="#gateway"
                className="relative group inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs font-mono uppercase tracking-wider border border-purple-400/60 transition-all duration-300 hover:scale-[1.03] shadow-[0_0_25px_rgba(157,78,221,0.35)] text-center overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                <Film className="w-4 h-4 text-white relative z-10" />
                <span className="relative z-10">Explore FilmHouse</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
              </a>

              <a
                href="#gateway"
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs font-mono uppercase tracking-wider border border-white/20 hover:border-purple-400/50 transition-all hover:scale-[1.02] text-center"
              >
                <HeartHandshake className="w-4 h-4 text-purple-300" />
                <span>Explore Foundation</span>
              </a>
            </div>

            {/* High-Level Dual-Arm Badge Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 sm:pt-8 border-t border-purple-900/40 w-full">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-purple-500/20 hover:border-purple-400/60 hover:bg-purple-950/30 transition-all group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold shrink-0 group-hover:scale-110 transition-transform">
                  <Film className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-white uppercase tracking-wider group-hover:text-purple-300 transition-colors">FilmHouse</div>
                  <div className="text-[11px] text-slate-400 font-medium">Commercial Creative Arm</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-violet-500/20 hover:border-violet-400/60 hover:bg-violet-950/30 transition-all group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-300 font-bold shrink-0 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-white uppercase tracking-wider group-hover:text-violet-300 transition-colors">Foundation</div>
                  <div className="text-[11px] text-slate-400 font-medium">Social Impact Arm</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Stage with Non-Stop Floating Animation (Span 5) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none animate-float">
              
              {/* Decorative Corner Glow Frames */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 rounded-3xl blur-md opacity-40 group-hover:opacity-80 transition duration-1000 animate-pulse-glow" />

              {/* Main Photo/Reel Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-500/40 bg-[#0D071E] aspect-[16/10] sm:aspect-[4/5] group shadow-[0_0_40px_rgba(157,78,221,0.25)]">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Dovoix FilmHouse & Foundation Production Stage"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080312] via-[#080312]/25 to-transparent" />

                {/* Top Overlay Badge */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#080312]/90 border border-purple-500/40 text-purple-300 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 shadow-md">
                    <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400 fill-purple-400 animate-pulse" />
                    SHOWCASE REEL // DOVOIX BRAND
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-purple-600/90 text-white text-[9px] font-mono font-bold">
                    4K LIVE
                  </span>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#080312]/95 border border-purple-500/40 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold text-purple-300 uppercase tracking-wider mb-0.5 sm:mb-1">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    <span>COMMERCIAL & COMMUNITY SYNERGY</span>
                  </div>
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
