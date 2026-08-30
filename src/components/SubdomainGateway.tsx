import React from 'react';
import Link from 'next/link';
import { Film, HeartHandshake, ArrowRight, ExternalLink } from 'lucide-react';

export const SubdomainGateway: React.FC = () => {
  return (
    <section id="gateway" className="py-14 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-[#080312] text-white relative overflow-hidden border-b border-purple-900/30 selection:bg-purple-600 selection:text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#9d4edd15_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-8 sm:mb-10 2xl:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-3 sm:mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            <span>SECTION 06 // SUBDOMAIN GATEWAY</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight">
            Explore Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300 animate-text-gradient bg-[length:200%_auto]">
              Operational Arms.
            </span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal mt-2 sm:mt-3">
            Choose a destination below to enter the commercial creative production house or the social impact organization.
          </p>
        </div>

        {/* Side-by-Side Gateway Cards Grid (Clean crisp borders, no blurry shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 xl:gap-8">
          
          {/* Panel 1: Dovoix FilmHouse */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#0D071E]/90 border-2 border-purple-500/30 overflow-hidden flex flex-col justify-between hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 group">
            <div className="p-5 sm:p-6 lg:p-7 xl:p-8">
              
              {/* Arm Header Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-900/30">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold shrink-0 group-hover:scale-110 transition-transform">
                    <Film className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg lg:text-xl font-extrabold text-white group-hover:text-purple-300 transition-colors">Dovoix FilmHouse</h3>
                    <span className="text-[11px] font-mono text-purple-300">filmhouse.dovoix.com</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-purple-500/30">
                  COMMERCIAL ARM
                </span>
              </div>

              {/* Media Visual Stage with bounded height */}
              <div className="relative aspect-[16/9] max-h-[220px] 2xl:max-h-[260px] rounded-xl sm:rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-purple-500/20">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
                  alt="Dovoix FilmHouse Commercial Production"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080312] via-[#080312]/20 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] sm:text-xs font-mono font-bold text-white bg-[#080312]/90 p-2 rounded-lg border border-purple-500/30">
                  PORTFOLIO • RATE CARD • CLIENTS • BOOKINGS
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                "We produce films, commercials, and creative content for brands that want to be remembered. Browse our work, see our pricing, and get in touch to start a project."
              </p>
            </div>

            {/* CTA Button */}
            <div className="p-5 sm:p-6 lg:p-7 xl:p-8 pt-0">
              <a
                href="https://filmhouse.dovoix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs font-mono uppercase tracking-wider border border-purple-400/50 transition-all group-hover:scale-[1.01]"
              >
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">Explore FilmHouse</span>
                <ExternalLink className="w-3.5 h-3.5 text-white relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Panel 2: Dovoix Foundation */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#0D071E]/90 border-2 border-violet-500/30 overflow-hidden flex flex-col justify-between hover:border-violet-400 hover:-translate-y-1 transition-all duration-300 group">
            <div className="p-5 sm:p-6 lg:p-7 xl:p-8">
              
              {/* Arm Header Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-900/30">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-300 font-bold shrink-0 group-hover:scale-110 transition-transform">
                    <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg lg:text-xl font-extrabold text-white group-hover:text-violet-300 transition-colors">Dovoix Foundation</h3>
                    <span className="text-[11px] font-mono text-violet-300">foundation.dovoix.com</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-violet-500/10 text-violet-300 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-violet-500/30">
                  SOCIAL IMPACT ARM
                </span>
              </div>

              {/* Media Visual Stage with bounded height */}
              <div className="relative aspect-[16/9] max-h-[220px] 2xl:max-h-[260px] rounded-xl sm:rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-purple-500/20">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Dovoix Foundation Masterclasses & Solar Hubs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080312] via-[#080312]/20 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] sm:text-xs font-mono font-bold text-white bg-[#080312]/90 p-2 rounded-lg border border-purple-500/30">
                  PROJECTS • STUDENT INTAKE • SOLAR HUBS
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                "We run programs and outreach initiatives that equip young people with creative skills and open opportunities. See our projects and apply to join a program."
              </p>
            </div>

            {/* CTA Button */}
            <div className="p-5 sm:p-6 lg:p-7 xl:p-8 pt-0">
              <Link
                href="/projects"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs font-mono uppercase tracking-wider border border-white/20 hover:border-violet-400/50 transition-all group-hover:scale-[1.01]"
              >
                <span>Explore Foundation</span>
                <ArrowRight className="w-3.5 h-3.5 text-violet-300 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
