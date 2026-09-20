import React from 'react';
import Link from 'next/link';
import { Film, HeartHandshake, ArrowRight, ExternalLink } from 'lucide-react';

export const SubdomainGateway: React.FC = () => {
  return (
    <section id="gateway" className="py-16 sm:py-20 lg:py-24 bg-[#000000] text-white relative overflow-hidden border-b border-[#3a3938]/40 selection:bg-white selection:text-black">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[300px] sm:h-[400px] bg-[#999998]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(#99999812_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-reveal">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#141414] border border-[#3a3938] text-white text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-3 sm:mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span>SECTION 06 // SUBDOMAIN GATEWAY</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight">
            Explore Our{' '}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,#999998,#ffffff)] animate-text-gradient bg-[length:200%_auto]">
              Operational Arms.
            </span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#999998] font-normal mt-2 sm:mt-3">
            Choose a destination below to enter the commercial creative production house or the social impact organization.
          </p>
        </div>

        {/* Side-by-Side Gateway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Panel 1: Dovoix FilmHouse */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#141414] border-2 border-[#3a3938] overflow-hidden flex flex-col justify-between hover:border-white/50 hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="p-6 sm:p-8 lg:p-9">
              
              {/* Arm Header Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3.5 sm:pb-4 border-b border-[#3a3938]/40">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#262626] border border-[#3a3938] flex items-center justify-center text-white font-bold shrink-0 group-hover:scale-110 transition-transform">
                    <Film className="w-5 h-5 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-extrabold text-white group-hover:text-[#999998] transition-colors">Dovoix FilmHouse</h3>
                    <span className="text-[11px] sm:text-xs font-mono text-[#999998]">filmhouse.dovoix.com</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-[#262626] text-white font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-[#3a3938]">
                  COMMERCIAL ARM
                </span>
              </div>

              {/* Media Visual Stage */}
              <div className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 bg-[#000000] border border-[#3a3938]">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
                  alt="Dovoix FilmHouse Commercial Production"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-[10px] sm:text-xs font-mono font-bold text-white bg-black/90 p-2 sm:p-2.5 rounded-lg border border-[#3a3938]">
                  PORTFOLIO • RATE CARD • CLIENTS • BOOKINGS
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#999998] leading-relaxed font-normal mb-4 sm:mb-6">
                "We produce films, commercials, and creative content for brands that want to be remembered. Browse our work, see our pricing, and get in touch to start a project."
              </p>
            </div>

            {/* CTA Button */}
            <div className="p-6 sm:p-8 lg:p-9 pt-0">
              <a
                href="https://filmhouse.dovoix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-100 text-black font-bold text-xs font-mono uppercase tracking-wider border border-white/20 transition-all group-hover:scale-[1.02]"
              >
                <span className="relative z-10">Explore FilmHouse</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Panel 2: Dovoix Foundation */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#141414] border-2 border-[#3a3938] overflow-hidden flex flex-col justify-between hover:border-white/50 hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="p-6 sm:p-8 lg:p-9">
              
              {/* Arm Header Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3.5 sm:pb-4 border-b border-[#3a3938]/40">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#262626] border border-[#3a3938] flex items-center justify-center text-white font-bold shrink-0 group-hover:scale-110 transition-transform">
                    <HeartHandshake className="w-5 h-5 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-extrabold text-white group-hover:text-[#999998] transition-colors">Dovoix Foundation</h3>
                    <span className="text-[11px] sm:text-xs font-mono text-[#999998]">foundation.dovoix.com</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-[#262626] text-white font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-[#3a3938]">
                  SOCIAL IMPACT ARM
                </span>
              </div>

              {/* Media Visual Stage */}
              <div className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 bg-[#000000] border border-[#3a3938]">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Dovoix Foundation Masterclasses & Solar Hubs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-[10px] sm:text-xs font-mono font-bold text-white bg-black/90 p-2 sm:p-2.5 rounded-lg border border-[#3a3938]">
                  PROJECTS • STUDENT INTAKE • SOLAR HUBS
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#999998] leading-relaxed font-normal mb-4 sm:mb-6">
                "We run programs and outreach initiatives that equip young people with creative skills and open opportunities. See our projects and apply to join a program."
              </p>
            </div>

            {/* CTA Button */}
            <div className="p-6 sm:p-8 lg:p-9 pt-0">
              <Link
                href="/projects"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#1f1f1f] hover:bg-[#262626] text-white font-bold text-xs font-mono uppercase tracking-wider border border-[#3a3938] hover:border-white/50 transition-all group-hover:scale-[1.02]"
              >
                <span>Explore Foundation</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
