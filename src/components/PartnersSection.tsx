import React from 'react';
import {
  Sun,
  Palette,
  Tv,
  Cpu,
  Globe2,
  Film,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
} from 'lucide-react';

export const PartnersSection: React.FC = () => {
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
    <section id="partners" className="py-14 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200 selection:bg-purple-600 selection:text-white">
      
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#9d4edd0a_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
        
        {/* Futuristic Command Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 sm:pb-8 mb-8 sm:mb-10 2xl:mb-12 border-b border-slate-200 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-purple-600 mb-2 sm:mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
              </span>
              <span>SECTION 04 // STRATEGIC ALLIANCE MATRIX</span>
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-tight">
              Powering the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 animate-text-gradient bg-[length:200%_auto]">
                Ecosystem.
              </span>
            </h2>
          </div>

          {/* Live Telemetry Pill */}
          <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono w-fit">
            <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl bg-purple-50 text-purple-700 font-bold border border-purple-200 text-[10px] sm:text-xs">
              <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse" />
              <span>STATUS // ACTIVE</span>
            </div>
            <span className="text-slate-500 font-medium pr-1 sm:pr-2 text-[10px] sm:text-xs">
              06 VERIFIED NODES
            </span>
          </div>
        </div>

        {/* Interactive Holographic Bento Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-6 mb-10 sm:mb-12 2xl:mb-16">
          {partners.map((p) => {
            const Icon = p.icon;

            return (
              <div
                key={p.id}
                className={`relative rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 p-4 sm:p-5 lg:p-6 flex flex-col justify-between transition-all duration-300 group overflow-hidden ${p.borderColor} hover:shadow-xl hover:-translate-y-1.5 hover:bg-white`}
              >
                {/* Background Gradient Spotlight */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Corner Crosshair Ticks */}
                <div className="absolute top-2.5 left-2.5 text-[9px] font-mono text-slate-300 group-hover:text-purple-400 transition-colors select-none">
                  +
                </div>
                <div className="absolute top-2.5 right-2.5 text-[9px] font-mono text-slate-300 group-hover:text-purple-400 transition-colors select-none">
                  +
                </div>

                <div className="relative z-10">
                  
                  {/* Top Bar: Node ID & Badge */}
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4 pb-3 border-b border-slate-200/80">
                    <span className="font-mono text-[11px] sm:text-xs font-bold text-slate-400 group-hover:text-purple-600 transition-colors tracking-widest">
                      {p.num}
                    </span>

                    <span className="px-2 py-0.5 rounded-md text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-700 group-hover:bg-purple-50 group-hover:border-purple-200 group-hover:text-purple-700 transition-all shadow-2xs">
                      {p.badge}
                    </span>
                  </div>

                  {/* Icon & Partner Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-purple-300 transition-all shrink-0">
                      <Icon className={`w-5 h-5 ${p.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug">
                        {p.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-mono font-semibold text-purple-600 mt-0.5">
                        {p.category}
                      </p>
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-xs text-slate-600 font-normal leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>

                {/* Bottom Telemetry Bar */}
                <div className="relative z-10 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] sm:text-xs font-mono">
                  <div>
                    <div className="text-[8px] sm:text-[9px] text-slate-400 uppercase tracking-widest">
                      {p.statLabel}
                    </div>
                    <div className="font-bold text-slate-800 group-hover:text-purple-700 transition-colors text-xs">
                      {p.statValue}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-purple-600 font-bold text-[10px] sm:text-xs group-hover:translate-x-1 transition-transform">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Live Velocity Marquee Ribbon */}
        <div className="relative rounded-xl sm:rounded-2xl bg-slate-900 text-white p-3 sm:p-3.5 overflow-hidden border border-slate-800 shadow-md mb-8 sm:mb-10">
          <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-6 sm:gap-8 overflow-hidden whitespace-nowrap">
            <div className="flex items-center gap-6 sm:gap-8 animate-marquee">
              {partners.concat(partners).map((p, i) => (
                <div key={i} className="inline-flex items-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs font-bold text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span className="text-white">{p.name}</span>
                  <span className="text-purple-400 font-normal hidden sm:inline">[{p.category}]</span>
                  <span className="text-slate-600">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Invitation Banner */}
        <div className="p-5 sm:p-6 2xl:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-50 via-purple-50/50 to-slate-50 border border-purple-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 2xl:w-11 2xl:h-11 rounded-xl sm:rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-purple-600/30">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-base sm:text-lg font-bold text-slate-900">
                Ready to co-create commercial & social impact?
              </h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">
                Join global brands and foundations accelerating African creative excellence.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-mono text-xs font-bold uppercase tracking-wider border border-purple-400/50 shadow-sm transition-all hover:scale-[1.01] shrink-0 text-center"
          >
            <span>Partner With Dovoix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
