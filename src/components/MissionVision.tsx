'use client';

import React from 'react';
import { Target, Compass, Lightbulb, Shield, Users, Sparkles } from 'lucide-react';
import { Card3DTilt } from '@/components/Card3DTilt';
import { AnimatedWords, FadeUpText } from '@/components/AnimatedText';
import { motion } from 'framer-motion';

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
    <section id="mission" className="py-16 sm:py-20 lg:py-24 bg-[#fafafa] text-slate-900 relative overflow-hidden border-b border-[#e5e5e5] selection:bg-[#000000] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#000000] mb-8 sm:mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#000000] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#000000]" />
          </span>
          <span>MISSION & VISION</span>
        </div>

        {/* Mission & Vision Side-by-Side Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Mission Card */}
          <Card3DTilt maxTilt={6} scale={1.02} glareOpacity={0.12} className="h-full">
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#e5e5e5] hover:border-[#000000]/40 transition-all duration-300 relative overflow-hidden group h-full shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#fafafa] border border-[#e5e5e5] flex items-center justify-center text-[#000000] mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-[#000000] group-hover:text-white transition-all">
                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#000000] mb-2 sm:mb-3">
                <span>OUR MISSION</span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-[#000000] mb-3 leading-snug group-hover:text-[#3a3938] transition-colors">
                <AnimatedWords text="Building Ecosystems That Empower" delay={0.1} />
              </h3>

              <FadeUpText delay={0.2} className="text-xs sm:text-sm text-[#666666] leading-relaxed font-normal">
                <p>
                  "To build a creative ecosystem that tells compelling stories, equips young people with practical skills and opportunities, and helps brands and communities create meaningful impact through creativity, media, and purpose."
                </p>
              </FadeUpText>
            </div>
          </Card3DTilt>

          {/* Vision Card */}
          <Card3DTilt maxTilt={6} scale={1.02} glareOpacity={0.12} className="h-full">
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#e5e5e5] hover:border-[#000000]/40 transition-all duration-300 relative overflow-hidden group h-full shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#fafafa] border border-[#e5e5e5] flex items-center justify-center text-[#000000] mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-[#000000] group-hover:text-white transition-all">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#000000] mb-2 sm:mb-3">
                <span>OUR VISION</span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-[#000000] mb-3 leading-snug group-hover:text-[#3a3938] transition-colors">
                <AnimatedWords text="Leading African Creative & Social Impact" delay={0.15} />
              </h3>

              <FadeUpText delay={0.25} className="text-xs sm:text-sm text-[#666666] leading-relaxed font-normal">
                <p>
                  "To become a leading African creative and social impact organisation where stories shape perspectives, creativity opens doors, young people are equipped to build sustainable futures, and purposeful ideas grow into lasting change."
                </p>
              </FadeUpText>
            </div>
          </Card3DTilt>

        </div>

        {/* Core Values: 2x2 Editorial Manifesto Pillars */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-[#e5e5e5]">
            <div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#000000] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OPERATING PRINCIPLES</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#000000]">
                <AnimatedWords text="The Four Pillars of DoVoix." delay={0.1} />
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs font-mono text-[#666666] mt-1 sm:mt-0 uppercase tracking-wider">
              GUIDING COMMERCIAL & IMPACT STANDARDS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <Card3DTilt key={i} maxTilt={5} scale={1.015} glareOpacity={0.1} className="h-full">
                  <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#e5e5e5] hover:border-[#000000]/40 transition-all duration-300 group overflow-hidden flex flex-col justify-between h-full shadow-sm">
                    {/* Scaled Watermark Number with Hover Transform */}
                    <div className="absolute top-2 right-4 sm:top-4 sm:right-6 font-display text-5xl sm:text-6xl font-black text-slate-100 group-hover:text-slate-300 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
                      {v.num}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4 sm:mb-5">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#fafafa] border border-[#e5e5e5] flex items-center justify-center text-[#000000] group-hover:bg-[#000000] group-hover:text-white group-hover:scale-110 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-[#fafafa] text-[#3a3938] border border-[#e5e5e5] group-hover:border-[#000000]/40 group-hover:text-[#000000] transition-colors">
                          {v.tag}
                        </span>
                      </div>

                      <h4 className="font-display text-lg sm:text-xl font-extrabold text-[#000000] mb-2 group-hover:text-[#3a3938] transition-colors">
                        {v.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#666666] font-normal leading-relaxed mb-4 sm:mb-6 max-w-md">
                        {v.description}
                      </p>
                    </div>

                    {/* Bottom Principle Metric / Tagline */}
                    <div className="relative z-10 pt-3.5 border-t border-[#e5e5e5] flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#666666]">
                      <span className="font-semibold group-hover:text-[#000000] transition-colors">
                        {v.principle}
                      </span>
                      <span className="text-[#999998] group-hover:text-[#000000] group-hover:translate-x-1.5 transition-all text-xs">
                        →
                      </span>
                    </div>
                  </div>
                </Card3DTilt>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
