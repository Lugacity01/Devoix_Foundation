'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Film, HeartHandshake, Sparkles } from 'lucide-react';
import { Card3DTilt } from '@/components/Card3DTilt';
import { AnimatedWords, FadeUpText } from '@/components/AnimatedText';
import { motion } from 'framer-motion';

export const LatestHighlights: React.FC = () => {
  const highlights = [
    {
      id: 'bag-a-child-initiative-1',
      source: 'Foundation',
      title: 'Bag A Child Initiative 1.0 at Abadina College, Ibadan',
      summary: 'Empowered 30+ secondary school students with 2 months of practical training in graphic design, photography, and videography.',
      image: '/assets/foundation_picture.JPEG',
      date: 'Jan 2026',
      link: '/projects/bag-a-child-initiative-1',
    },
    {
      id: 'brand-commercial-lagos',
      source: 'FilmHouse',
      title: 'Commercial Brand Campaign for West African Innovation Summit',
      summary: 'Produced a multi-city broadcast commercial and digital video series showcasing tech entrepreneurs across Nigeria and Ghana.',
      image: '/assets/FilmHouse_picture.JPEG',
      date: 'Apr 2026',
      link: '/filmhouse',
    },
    {
      id: 'female-storytellers-enugu',
      source: 'Foundation',
      title: 'Female Storytellers & Digital Journalism Residency Cohort 2',
      summary: 'Graduated 180 young female writers producing investigative anthologies highlighting Eastern Nigerian community development.',
      image: '/assets/behind_scene.JPEG',
      date: 'Mar 2026',
      link: '/projects/creative-writing-enugu',
    },
  ];

  return (
    <section id="highlights" className="py-16 sm:py-20 lg:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-[#e5e5e5] selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 sm:pb-8 mb-8 sm:mb-12 border-b border-[#e5e5e5]">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#000000] mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#000000] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#000000]" />
              </span>
              <span>LATEST HIGHLIGHTS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl font-extrabold text-[#000000] tracking-tight">
              <AnimatedWords text="Latest from" delay={0.1} />{' '}
              <motion.span
                initial={{ opacity: 0, filter: 'blur(3px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#000000,#3a3938,#000000)] animate-text-gradient bg-[length:200%_auto] inline-block"
              >
                DoVoix.
              </motion.span>
            </h2>
          </div>
          <p className="text-[11px] sm:text-xs font-mono text-[#666666] mt-2 md:mt-0 uppercase tracking-wider">
            RECENT ACTIVITY FROM FILMHOUSE & FOUNDATION
          </p>
        </div>

        {/* 3 Highlight Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, idx) => (
            <Card3DTilt key={item.id} maxTilt={6} scale={1.02} glareOpacity={0.12} className="h-full">
              <div className="rounded-2xl sm:rounded-3xl bg-[#fafafa] border border-[#e5e5e5] hover:border-black/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group h-full shadow-sm">
                <div>
                  {/* Media Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#141414] border-b border-[#e5e5e5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Source Label Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider border backdrop-blur-md flex items-center gap-1.5 ${
                          item.source === 'FilmHouse'
                            ? 'bg-black/90 text-white border-[#3a3938]'
                            : 'bg-[#141414]/90 text-white border-[#3a3938]'
                        }`}
                      >
                        {item.source === 'FilmHouse' ? (
                          <Film className="w-3 h-3 text-white" />
                        ) : (
                          <HeartHandshake className="w-3 h-3 text-white" />
                        )}
                        <span>{item.source}</span>
                      </span>
                    </div>

                    <span className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 text-[9px] sm:text-[10px] font-mono text-white bg-black/80 px-2 py-0.5 rounded border border-white/10">
                      {item.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#000000] mb-2 leading-snug group-hover:text-[#3a3938] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed font-normal">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 sm:pt-2">
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#000000] hover:text-[#666666] uppercase tracking-wider group/link"
                  >
                    <span>Read Highlight</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

      </div>
    </section>
  );
};
