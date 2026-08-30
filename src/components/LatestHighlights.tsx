import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Film, HeartHandshake, Sparkles } from 'lucide-react';

export const LatestHighlights: React.FC = () => {
  const highlights = [
    {
      id: 'solar-learning-hub-ogun',
      source: 'Foundation',
      title: 'Solar-Powered Community Learning Hub Opened in Abeokuta',
      summary: 'Established a 24-station clean energy learning center providing rural youth with daily access to web dev, graphic design, and video editing tools.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      date: 'May 2026',
      link: '/projects/solar-learning-hub-ogun',
    },
    {
      id: 'brand-commercial-lagos',
      source: 'FilmHouse',
      title: 'Commercial Brand Campaign for West African Innovation Summit',
      summary: 'Produced a multi-city broadcast commercial and digital video series showcasing tech entrepreneurs across Nigeria and Ghana.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      date: 'Apr 2026',
      link: 'https://filmhouse.dovoix.com',
    },
    {
      id: 'female-storytellers-enugu',
      source: 'Foundation',
      title: 'Female Storytellers & Digital Journalism Residency Cohort 2',
      summary: 'Graduated 180 young female writers producing investigative anthologies highlighting Eastern Nigerian community development.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
      date: 'Mar 2026',
      link: '/projects/creative-writing-enugu',
    },
  ];

  return (
    <section id="highlights" className="py-14 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200 selection:bg-purple-600 selection:text-white">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 sm:pb-8 mb-8 sm:mb-10 2xl:mb-12 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-purple-600 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
              </span>
              <span>SECTION 07 // LATEST HIGHLIGHTS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight">
              Latest from{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 animate-text-gradient bg-[length:200%_auto]">
                Dovoix.
              </span>
            </h2>
          </div>
          <p className="text-[11px] sm:text-xs font-mono text-slate-500 mt-2 md:mt-0 uppercase tracking-wider">
            RECENT ACTIVITY FROM FILMHOUSE & FOUNDATION
          </p>
        </div>

        {/* 3 Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 xl:gap-8">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-300 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Media Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Source Label Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider border backdrop-blur-md flex items-center gap-1.5 shadow-sm ${
                        item.source === 'FilmHouse'
                          ? 'bg-purple-900/90 text-purple-200 border-purple-400/40'
                          : 'bg-indigo-900/90 text-indigo-200 border-indigo-400/40'
                      }`}
                    >
                      {item.source === 'FilmHouse' ? (
                        <Film className="w-3 h-3 text-purple-300" />
                      ) : (
                        <HeartHandshake className="w-3 h-3 text-indigo-300" />
                      )}
                      <span>{item.source}</span>
                    </span>
                  </div>

                  <span className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 text-[9px] sm:text-[10px] font-mono text-white bg-slate-950/80 px-2 py-0.5 rounded">
                    {item.date}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Card Action Link */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 sm:pt-2">
                <a
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-600 hover:text-purple-800 uppercase tracking-wider group/link"
                >
                  <span>Read Highlight</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
