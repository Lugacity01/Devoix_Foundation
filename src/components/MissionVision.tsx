import React from 'react';
import { Target, Compass, Lightbulb, Shield, Users, Sparkles } from 'lucide-react';

export const MissionVision: React.FC = () => {
  const coreValues = [
    {
      num: '01',
      icon: Lightbulb,
      title: 'Creativity',
      tag: 'EXPRESSION',
      description: 'Unlocking original, world-class expression across commercial film production, design, and storytelling.',
      principle: 'Pillar 01 • World-Class Execution',
    },
    {
      num: '02',
      icon: Target,
      title: 'Purpose',
      tag: 'OUTCOME',
      description: 'Ensuring every commercial project and educational campaign generates tangible, lasting community value.',
      principle: 'Pillar 02 • Measurable Social Impact',
    },
    {
      num: '03',
      icon: Users,
      title: 'Community',
      tag: 'EMPOWERMENT',
      description: 'Building tuition-free solar hubs and supportive collaborative networks for African youth.',
      principle: 'Pillar 03 • Youth Skill Development',
    },
    {
      num: '04',
      icon: Shield,
      title: 'Integrity',
      tag: 'STEWARDSHIP',
      description: 'Operating with radical transparency, ethical stewardship, and unyielding professional standards.',
      principle: 'Pillar 04 • Radical Accountability',
    },
  ];

  return (
    <section id="mission" className="py-16 sm:py-20 lg:py-24 bg-zinc-50 text-black relative overflow-hidden border-b border-zinc-200 selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-800 mb-3 sm:mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-600 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
          </span>
          <span>SECTION 02 // MISSION & VISION</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-black tracking-tight leading-snug sm:leading-tight">
            Guided by purpose.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-black to-zinc-600 animate-text-gradient bg-[length:200%_auto]">
              Driven by impact.
            </span>
          </h2>
        </div>

        {/* Mission & Vision Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Mission Card */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 relative overflow-hidden group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all">
              <Target className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-800 mb-2 sm:mb-3">
              <span>OUR MISSION</span>
            </div>

            <h3 className="font-display text-lg sm:text-xl font-bold text-black mb-3 leading-snug group-hover:text-zinc-700 transition-colors">
              Commercial Excellence Meets Social Impact
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              "We connect commercial production excellence with community social impact by producing commercial campaigns for global brands and delivering tuition-free educational masterclasses for African youth."
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 relative overflow-hidden group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-800 mb-2 sm:mb-3">
              <span>OUR VISION</span>
            </div>

            <h3 className="font-display text-lg sm:text-xl font-bold text-black mb-3 leading-snug group-hover:text-zinc-700 transition-colors">
              A Flourishing African Creative Ecosystem
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              "A world where African creative talent drives commercial innovation and opens sustainable community opportunity across the continent."
            </p>
          </div>

        </div>

        {/* Core Values: 2x2 Editorial Manifesto Pillars */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-zinc-200">
            <div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-zinc-800 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>OPERATING PRINCIPLES</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-black">
                The Four Pillars of Dovoix.
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs font-mono text-zinc-500 mt-1 sm:mt-0 uppercase tracking-wider">
              GUIDING COMMERCIAL & IMPACT STANDARDS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200 hover:border-black shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col justify-between"
                >
                  {/* Scaled Watermark Number */}
                  <div className="absolute top-2 right-4 sm:top-4 sm:right-6 font-display text-5xl sm:text-6xl font-black text-zinc-100 group-hover:text-zinc-200 transition-colors pointer-events-none select-none">
                    {v.num}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white group-hover:scale-110 transition-all shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-100 text-zinc-800 group-hover:bg-black group-hover:text-white transition-colors">
                        {v.tag}
                      </span>
                    </div>

                    <h4 className="font-display text-lg sm:text-xl font-extrabold text-black mb-2 group-hover:text-zinc-700 transition-colors">
                      {v.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-4 sm:mb-6 max-w-md">
                      {v.description}
                    </p>
                  </div>

                  {/* Bottom Principle Metric / Tagline */}
                  <div className="relative z-10 pt-3.5 border-t border-zinc-100 flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-500">
                    <span className="font-semibold group-hover:text-black transition-colors">
                      {v.principle}
                    </span>
                    <span className="text-zinc-400 group-hover:text-black group-hover:translate-x-1.5 transition-all text-xs">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
