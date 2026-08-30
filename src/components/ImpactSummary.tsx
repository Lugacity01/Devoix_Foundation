'use client';

import React from 'react';
import { Quote } from 'lucide-react';

export const ImpactSummary: React.FC = () => {
  const impactStats = [
    { number: '1,200+', label: 'Lives Impacted', subtext: 'Foundation outreach reach across all projects' },
    { number: '25+', label: 'Projects Executed', subtext: 'Combined Foundation & FilmHouse project count' },
    { number: '14', label: 'Communities Reached', subtext: 'Distinct local government areas & rural towns' },
    { number: '40+', label: 'Brands Worked With', subtext: 'Commercial FilmHouse client count' },
    { number: '6', label: 'States Covered', subtext: 'Geographic footprint across Nigeria' },
  ];

  return (
    <section id="impact" className="py-20 sm:py-28 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200 selection:bg-purple-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="pb-8 mb-12 border-b border-slate-200">
          <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] uppercase text-purple-600 mb-2">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span>SECTION 05 // COMBINED IMPACT SUMMARY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Combined Scale & Momentum.
          </h2>
          <p className="text-sm text-slate-600 font-normal mt-2">
            Measuring the aggregate reach of Dovoix FilmHouse and Dovoix Foundation across Africa.
          </p>
        </div>

        {/* 5 Impact Statistics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-purple-400 transition-all group"
            >
              <div className="font-mono text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-3">
                METRIC // 0{idx + 1}
              </div>

              <div className="font-display text-3xl sm:text-4xl font-black text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                {stat.number}
              </div>

              <div className="font-display text-xs sm:text-sm font-bold text-slate-800 mb-1">
                {stat.label}
              </div>

              <div className="text-[10px] font-mono text-slate-500 leading-tight">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Visual & Founder Pull Quote (Dark Contrast Box) */}
        <div className="rounded-3xl bg-[#080312] text-white border-2 border-purple-500/30 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-xl">
          
          {/* Left Column: Co-Founder Pull Quote (Span 7) */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between relative">
            <Quote className="w-12 h-12 text-purple-500/30 mb-6" />

            <blockquote className="font-display text-xl sm:text-2xl font-semibold text-white leading-relaxed mb-8">
              "Our metric for success goes beyond box office figures or commercial reel views. True impact is measured when commercial filmmaking success builds permanent solar learning infrastructure for young Africans who previously had no access to digital tools."
            </blockquote>

            <div className="pt-6 border-t border-purple-900/40 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Ebuka Prince"
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-400"
              />
              <div>
                <div className="font-display text-sm font-bold text-white">Ebuka Prince</div>
                <div className="text-xs font-mono text-purple-300">Co-Founder & CEO, Dovoix</div>
              </div>
            </div>
          </div>

          {/* Right Column: Outreach & Production Image (Span 5) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[auto] bg-slate-900 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80"
              alt="Dovoix Outreach Moment & Solar Hub"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080312] via-[#080312]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#080312]/90 border border-purple-500/30">
              <span className="text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider block mb-0.5">
                ON THE FIELD // SOLAR HUB
              </span>
              <p className="text-xs text-white font-medium">
                24-station clean energy learning center in Ogun State.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
