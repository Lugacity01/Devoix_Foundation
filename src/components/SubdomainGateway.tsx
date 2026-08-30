'use client';

import React from 'react';
import Link from 'next/link';
import { Film, HeartHandshake, ArrowRight, ExternalLink } from 'lucide-react';

export const SubdomainGateway: React.FC = () => {
  return (
    <section id="gateway" className="py-20 sm:py-28 bg-[#080312] text-white relative overflow-hidden border-b border-purple-900/30 selection:bg-purple-600 selection:text-white">
      {/* Background Ambient Purple Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#9d4edd15_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span>SECTION 06 // SUBDOMAIN GATEWAY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Explore Our Operational Arms.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal mt-3">
            Choose a destination below to enter the commercial creative production house or the social impact organization.
          </p>
        </div>

        {/* Side-by-Side Gateway Cards Grid (PRD Section 10 Requirement) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Panel 1: Dovoix FilmHouse */}
          <div className="rounded-3xl bg-[#0D071E]/90 border-2 border-purple-500/30 overflow-hidden flex flex-col justify-between hover:border-purple-400/80 transition-all group">
            <div className="p-8 sm:p-10">

              {/* Arm Header Badge */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold">
                    <Film className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-white">Dovoix FilmHouse</h3>
                    <span className="text-xs font-mono text-purple-300">filmhouse.dovoix.com</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 font-mono text-[10px] font-bold uppercase tracking-wider border border-purple-500/30">
                  COMMERCIAL ARM
                </span>
              </div>

              {/* Media Visual Stage */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-purple-500/20">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
                  alt="Dovoix FilmHouse Commercial Production"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080312] via-[#080312]/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono font-bold text-white bg-[#080312]/90 p-2.5 rounded-lg border border-purple-500/30">
                  PORTFOLIO • RATE CARD • CLIENTS • BOOKINGS
                </div>
              </div>

              {/* Exact Suggested Description Text from PRD Section 10 */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                "We produce films, commercials, and creative content for brands that want to be remembered. Browse our work, see our pricing, and get in touch to start a project."
              </p>
            </div>

            {/* CTA Button */}
            <div className="p-8 sm:p-10 pt-0">
              <a
                href="https://filmhouse.dovoix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs font-mono uppercase tracking-wider border border-purple-400/50 transition-all shadow-md group-hover:scale-[1.01]"
              >
                <span>Explore FilmHouse</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Panel 2: Dovoix Foundation */}
          <div className="rounded-3xl bg-[#0D071E]/90 border-2 border-violet-500/30 overflow-hidden flex flex-col justify-between hover:border-violet-400/80 transition-all group">
            <div className="p-8 sm:p-10">

              {/* Arm Header Badge */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-300 font-bold">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-white">Dovoix Foundation</h3>
                    <span className="text-xs font-mono text-violet-300">foundation.dovoix.com</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-md bg-violet-500/10 text-violet-300 font-mono text-[10px] font-bold uppercase tracking-wider border border-violet-500/30">
                  SOCIAL IMPACT ARM
                </span>
              </div>

              {/* Media Visual Stage */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-purple-500/20">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Dovoix Foundation Masterclasses & Solar Hubs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080312] via-[#080312]/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono font-bold text-white bg-[#080312]/90 p-2.5 rounded-lg border border-purple-500/30">
                  PROJECTS • STUDENT INTAKE • SOLAR HUBS
                </div>
              </div>

              {/* Exact Suggested Description Text from PRD Section 10 */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                "We run programs and outreach initiatives that equip young people with creative skills and open opportunities. See our projects and apply to join a program."
              </p>
            </div>

            {/* CTA Button */}
            <div className="p-8 sm:p-10 pt-0">
              <Link
                href="/projects"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs font-mono uppercase tracking-wider border border-white/20 transition-all shadow-md group-hover:scale-[1.01]"
              >
                <span>Explore Foundation</span>
                <ArrowRight className="w-4 h-4 text-violet-300" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
