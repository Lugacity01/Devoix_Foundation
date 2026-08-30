import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export const ImpactSummary: React.FC = () => {
  const impactStats = [
    { number: '1,200+', label: 'Lives Impacted', subtext: 'Foundation outreach reach across all projects' },
    { number: '25+', label: 'Projects Executed', subtext: 'Combined Foundation & FilmHouse project count' },
    { number: '14', label: 'Communities Reached', subtext: 'Distinct local government areas & rural towns' },
    { number: '40+', label: 'Brands Worked With', subtext: 'Commercial FilmHouse client count' },
    { number: '6', label: 'States Covered', subtext: 'Geographic footprint across Nigeria' },
  ];

  return (
    <section id="impact" className="py-16 sm:py-20 lg:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200 selection:bg-purple-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="pb-6 sm:pb-8 mb-8 sm:mb-12 border-b border-slate-200">
          <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-purple-600 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
            </span>
            <span>SECTION 05 // COMBINED IMPACT SUMMARY</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Combined{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 animate-text-gradient bg-[length:200%_auto]">
              Scale & Momentum.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1 sm:mt-2">
            Measuring the aggregate reach of Dovoix FilmHouse and Dovoix Foundation across Africa.
          </p>
        </div>

        {/* 5 Impact Statistics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-10 sm:mb-14">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="font-mono text-[9px] sm:text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-2 sm:mb-3">
                METRIC // 0{idx + 1}
              </div>

              <div className="font-display text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-black text-slate-900 group-hover:text-purple-600 group-hover:scale-105 transition-all mb-1 sm:mb-2 origin-left">
                {stat.number}
              </div>

              <div className="font-display text-xs sm:text-sm font-bold text-slate-800 mb-1 group-hover:text-purple-900 transition-colors">
                {stat.label}
              </div>

              <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 leading-tight">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Visual & Founder Pull Quote */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#080312] text-white border-2 border-purple-500/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group">
          
          {/* Left Column: Co-Founder Pull Quote (Span 7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative z-10">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500/40 mb-4 sm:mb-6 group-hover:text-purple-400/70 transition-colors" />

            <blockquote className="font-display text-base sm:text-lg lg:text-xl font-semibold text-white leading-relaxed mb-6 sm:mb-8">
              "Our metric for success goes beyond box office figures or commercial reel views. True impact is measured when commercial filmmaking success builds permanent solar learning infrastructure for young Africans who previously had no access to digital tools."
            </blockquote>

            <div className="pt-4 sm:pt-6 border-t border-purple-900/40 flex items-center gap-3.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Ebuka Prince"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-purple-400 shrink-0 group-hover:scale-110 transition-transform"
              />
              <div>
                <div className="font-display text-xs sm:text-sm font-bold text-white">Ebuka Prince</div>
                <div className="text-[11px] font-mono text-purple-300">Co-Founder & CEO, Dovoix</div>
              </div>
            </div>
          </div>

          {/* Right Column: Outreach & Production Image (Span 5) */}
          <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[280px] lg:min-h-[auto] bg-slate-900 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80"
              alt="Dovoix Outreach Moment & Solar Hub"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080312] via-[#080312]/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-[#080312]/95 border border-purple-500/40 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider mb-0.5">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>ON THE FIELD // SOLAR HUB</span>
              </div>
              <p className="text-[11px] sm:text-xs text-white font-medium">
                24-station clean energy learning center in Ogun State.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
