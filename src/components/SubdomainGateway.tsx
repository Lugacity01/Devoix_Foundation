import React from 'react';
import Link from 'next/link';
import { Film, HeartHandshake, ArrowRight, ExternalLink } from 'lucide-react';

export const SubdomainGateway: React.FC = () => {
  return (
    <section id="gateway" className="py-14 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-black text-white relative overflow-hidden border-b border-zinc-900 selection:bg-white selection:text-black">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] 2xl:w-[1000px] h-[300px] sm:h-[400px] 2xl:h-[500px] bg-zinc-800/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-8 sm:mb-10 2xl:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-3 sm:mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span>SECTION 06 // SUBDOMAIN GATEWAY</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight">
            Explore Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-400 animate-text-gradient bg-[length:200%_auto]">
              Operational Arms.
            </span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-zinc-400 font-normal mt-2 sm:mt-3">
            Choose a destination below to enter the commercial creative production house (Black & White) or the social impact organization (Purple & Black).
          </p>
        </div>

        {/* Side-by-Side Gateway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 xl:gap-8">
          
          {/* Panel 1: Dovoix FilmHouse (Monochrome Black & White) */}
          <div className="rounded-2xl sm:rounded-3xl bg-zinc-950 border-2 border-zinc-800 overflow-hidden flex flex-col justify-between hover:border-white/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="p-5 sm:p-6 lg:p-7 xl:p-8">
              
              {/* Arm Header Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-bold shrink-0 group-hover:scale-110 transition-transform">
                    <Film className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg lg:text-xl font-extrabold text-white group-hover:text-zinc-200 transition-colors">Dovoix FilmHouse</h3>
                    <span className="text-[11px] font-mono text-zinc-400">filmhouse.dovoix.com</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-zinc-900 text-zinc-300 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-zinc-700">
                  COMMERCIAL ARM
                </span>
              </div>

              {/* Media Visual Stage with bounded height */}
              <div className="relative aspect-[16/9] max-h-[220px] 2xl:max-h-[260px] rounded-xl sm:rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
                  alt="Dovoix FilmHouse Commercial Production"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] sm:text-xs font-mono font-bold text-white bg-black/90 p-2 rounded-lg border border-zinc-800">
                  PORTFOLIO • RATE CARD • CLIENTS • BOOKINGS
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4">
                "We produce films, commercials, and creative content for brands that want to be remembered. Browse our work, see our pricing, and get in touch to start a project."
              </p>
            </div>

            {/* CTA Button */}
            <div className="p-5 sm:p-6 lg:p-7 xl:p-8 pt-0">
              <a
                href="https://filmhouse.dovoix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-md group-hover:scale-[1.01]"
              >
                <span className="relative z-10">Explore FilmHouse</span>
                <ExternalLink className="w-3.5 h-3.5 text-black relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Panel 2: Dovoix Foundation (Purple & Black Identity!) */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#0D071E] border-2 border-purple-500/40 overflow-hidden flex flex-col justify-between hover:border-purple-400 hover:shadow-[0_0_40px_rgba(157,78,221,0.3)] hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="p-5 sm:p-6 lg:p-7 xl:p-8">
              
              {/* Arm Header Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-900/40">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold shrink-0 group-hover:scale-110 transition-transform">
                    <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg lg:text-xl font-extrabold text-white group-hover:text-purple-300 transition-colors">Dovoix Foundation</h3>
                    <span className="text-[11px] font-mono text-purple-300">foundation.dovoix.com</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-purple-900/60 text-purple-200 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-purple-500/40">
                  PURPLE & BLACK ARM
                </span>
              </div>

              {/* Media Visual Stage with bounded height */}
              <div className="relative aspect-[16/9] max-h-[220px] 2xl:max-h-[260px] rounded-xl sm:rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-purple-500/30">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Dovoix Foundation Masterclasses & Solar Hubs"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080312] via-[#080312]/20 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] sm:text-xs font-mono font-bold text-white bg-[#080312]/90 p-2 rounded-lg border border-purple-500/30">
                  PROJECTS • STUDENT INTAKE • SOLAR HUBS
                </div>
              </div>

              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-normal mb-4">
                "We run programs and outreach initiatives that equip young people with creative skills and open opportunities. See our projects and apply to join a program."
              </p>
            </div>

            {/* CTA Button */}
            <div className="p-5 sm:p-6 lg:p-7 xl:p-8 pt-0">
              <Link
                href="/projects"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs font-mono uppercase tracking-wider border border-purple-400/50 shadow-md group-hover:scale-[1.01] transition-all"
              >
                <span>Explore Foundation</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
