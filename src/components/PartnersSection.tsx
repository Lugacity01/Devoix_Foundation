'use client';

import React, { useState } from 'react';
import {
  Sun,
  Palette,
  Tv,
  Cpu,
  Globe2,
  Film,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
} from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const partners = [
    {
      id: 'solartech',
      num: 'NODE // 01',
      name: 'SOLARTECH AFRICA',
      category: 'Clean Energy Partner',
      icon: Sun,
      iconColor: 'text-amber-500',
      bgGlow: 'from-amber-500/10 via-purple-500/5 to-transparent',
      borderColor: 'group-hover:border-amber-400/80',
      badge: 'TIER-1 INFRASTRUCTURE',
      metric: '24 Stations Powered',
      description: 'Co-funding and engineering off-grid solar micro-grids powering our tuition-free learning centers.',
      statLabel: 'CLEAN ENERGY YIELD',
      statValue: '100% RENEWABLE',
    },
    {
      id: 'lagos-creative',
      num: 'NODE // 02',
      name: 'LAGOS CREATIVE HUB',
      category: 'Institutional Partner',
      icon: Palette,
      iconColor: 'text-purple-600',
      bgGlow: 'from-purple-600/10 via-violet-500/5 to-transparent',
      borderColor: 'group-hover:border-purple-400/80',
      badge: 'ACCREDITED LAB',
      metric: '320+ Youth Certified',
      description: 'Providing accredited software curriculum and studio incubation space for emerging digital artists.',
      statLabel: 'COHORT GRADUATES',
      statValue: '320 STUDENTS',
    },
    {
      id: 'wa-media',
      num: 'NODE // 03',
      name: 'WEST AFRICA MEDIA',
      category: 'Broadcast Partner',
      icon: Tv,
      iconColor: 'text-sky-500',
      bgGlow: 'from-sky-500/10 via-purple-500/5 to-transparent',
      borderColor: 'group-hover:border-sky-400/80',
      badge: 'SYNDICATION NETWORK',
      metric: '4.2M Viewers Reached',
      description: 'Broadcasting student-produced investigative documentaries and brand commercial features across 5 nations.',
      statLabel: 'BROADCAST FOOTPRINT',
      statValue: '5 COUNTRIES',
    },
    {
      id: 'naija-tech',
      num: 'NODE // 04',
      name: 'NAIJA TECH INITIATIVE',
      category: 'Education Partner',
      icon: Cpu,
      iconColor: 'text-emerald-500',
      bgGlow: 'from-emerald-500/10 via-purple-500/5 to-transparent',
      borderColor: 'group-hover:border-emerald-400/80',
      badge: 'CODE INCUBATOR',
      metric: '4 Engineering Tracks',
      description: 'Delivering hands-on web engineering, cloud infrastructure, and UI/UX design mentorship bootcamps.',
      statLabel: 'CURRICULUM MODULES',
      statValue: '48 MASTERCLASSES',
    },
    {
      id: 'global-impact',
      num: 'NODE // 05',
      name: 'GLOBAL IMPACT FUND',
      category: 'Sponsorship Partner',
      icon: Globe2,
      iconColor: 'text-indigo-500',
      bgGlow: 'from-indigo-500/10 via-purple-500/5 to-transparent',
      borderColor: 'group-hover:border-indigo-400/80',
      badge: 'ENDOWMENT ALLIANCE',
      metric: 'Multi-Year Grants',
      description: 'Direct institutional grant provider underwriting student hardware, internet, and stipend programs.',
      statLabel: 'OPERATIONAL BACKING',
      statValue: 'MULTI-YEAR',
    },
    {
      id: 'apex-studios',
      num: 'NODE // 06',
      name: 'APEX CINEMA STUDIOS',
      category: 'FilmHouse Collaborator',
      icon: Film,
      iconColor: 'text-fuchsia-500',
      bgGlow: 'from-fuchsia-500/10 via-purple-500/5 to-transparent',
      borderColor: 'group-hover:border-fuchsia-400/80',
      badge: '8K CO-PRODUCTION',
      metric: '18 Commercial Reels',
      description: 'Providing cinema-grade camera packages, sound stages, and color grading suites for FilmHouse productions.',
      statLabel: 'PRODUCTION SUITE',
      statValue: '8K HDR CINEMA',
    },
  ];

  return (
    <section id="partners" className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200 selection:bg-purple-600 selection:text-white">
      
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#9d4edd0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Futuristic Command Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-12 border-b border-slate-200 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] uppercase text-purple-600 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
              </span>
              <span>SECTION 04 // STRATEGIC ALLIANCE MATRIX</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Powering the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600">
                Ecosystem.
              </span>
            </h2>
          </div>

          {/* Live Telemetry Pill */}
          <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-purple-50 text-purple-700 font-bold border border-purple-200">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>STATUS // ACTIVE</span>
            </div>
            <span className="text-slate-500 font-medium pr-2">
              06 VERIFIED STRATEGIC NODES
            </span>
          </div>
        </div>

        {/* Interactive Holographic Bento Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partners.map((p, idx) => {
            const Icon = p.icon;
            const isHovered = activeNode === idx;

            return (
              <div
                key={p.id}
                onMouseEnter={() => setActiveNode(idx)}
                onMouseLeave={() => setActiveNode(null)}
                className={`relative rounded-3xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden ${p.borderColor} ${
                  isHovered ? 'shadow-xl -translate-y-1 bg-white' : 'hover:shadow-md'
                }`}
              >
                {/* Background Gradient Spotlight */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Corner Crosshair Ticks */}
                <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-300 group-hover:text-purple-400 transition-colors select-none">
                  +
                </div>
                <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-300 group-hover:text-purple-400 transition-colors select-none">
                  +
                </div>

                <div className="relative z-10">
                  
                  {/* Top Bar: Node ID & Badge */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/80">
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-purple-600 transition-colors tracking-widest">
                      {p.num}
                    </span>

                    <span className="px-2.5 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-700 group-hover:bg-purple-50 group-hover:border-purple-200 group-hover:text-purple-700 transition-all shadow-2xs">
                      {p.badge}
                    </span>
                  </div>

                  {/* Icon & Partner Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-purple-300 transition-all">
                      <Icon className={`w-7 h-7 ${p.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors leading-tight">
                        {p.name}
                      </h3>
                      <p className="text-xs font-mono font-semibold text-purple-600 mt-0.5">
                        {p.category}
                      </p>
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                {/* Bottom Telemetry Bar */}
                <div className="relative z-10 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
                  <div>
                    <div className="text-[9px] text-slate-400 uppercase tracking-widest">
                      {p.statLabel}
                    </div>
                    <div className="font-bold text-slate-800 group-hover:text-purple-700 transition-colors">
                      {p.statValue}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-purple-600 font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Live Velocity Marquee Ribbon */}
        <div className="relative rounded-2xl bg-slate-900 text-white p-4 overflow-hidden border border-slate-800 shadow-xl mb-10">
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-8 overflow-hidden whitespace-nowrap">
            <div className="flex items-center gap-8 animate-[marquee_20s_linear_infinite]">
              {partners.concat(partners).map((p, i) => (
                <div key={i} className="inline-flex items-center gap-3 font-mono text-xs font-bold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span className="text-white">{p.name}</span>
                  <span className="text-purple-400 font-normal">[{p.category}]</span>
                  <span className="text-slate-600">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Invitation Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-50 via-purple-50/50 to-slate-50 border border-purple-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-600/30">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                Ready to co-create commercial & social impact?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">
                Join global brands and foundations accelerating African creative excellence.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-mono text-xs font-bold uppercase tracking-wider border border-purple-400/50 shadow-md transition-all hover:scale-[1.02] shrink-0"
          >
            <span>Partner With Dovoix</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
