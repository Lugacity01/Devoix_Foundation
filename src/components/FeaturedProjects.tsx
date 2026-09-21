'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Project } from '@/types';
import { MapPin, Calendar, ArrowRight, ArrowUpRight, Users, CheckCircle2, Sparkles, Layers } from 'lucide-react';

interface FeaturedProjectsProps {
  projects?: Project[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = () => {
  const [activeTab, setActiveTab] = useState(0);

  const exhibitionProjects = [
    {
      id: 'bag-a-child-initiative-1',
      number: '01',
      shortTitle: 'OYO STATE (1.0)',
      name: 'Bag A Child Initiative 1.0',
      category: 'Youth Empowerment & Skills',
      status: 'Completed',
      location: 'Abadina College, UI, Oyo State',
      date: 'January 2026',
      livesImpacted: 30,
      lead: 'Donald Mojekwu',
      image: '/assets/bag_a_child/Oyo/WhatsApp%20Image%202026-09-20%20at%2021.37.14.jpeg',
      tagline: 'Flagship youth empowerment project introducing creative & digital skills.',
      description: 'The two-month initiative introduced secondary school students to practical creative and digital skills, including graphic design, photography, and videography, mentoring 30+ students at Abadina College.',
      highlights: ['30+ Students Reached', '5 Dedicated Volunteers', '3 Creative Skills Introduced', '2-Month Training Programme', '1 School Reached']
    },
    {
      id: 'bag-a-child-kwara',
      number: '02',
      shortTitle: 'TEAM UNILORIN (2.0)',
      name: 'Bag A Child 2.0: Team UNILORIN',
      category: 'Graphic Design & Digital Skills',
      status: 'Completed',
      location: 'Government Day Sec School, UNILORIN, Kwara State',
      date: 'May 2026',
      livesImpacted: 30,
      lead: 'Peter Stephen',
      image: '/assets/bag_a_child/kwara/cover_page_unilorin.jpeg',
      tagline: 'One-month graphic design outreach introducing digital & monetizable skills.',
      description: 'On 20th May 2026, Team UNILORIN carried out a one-month outreach at Government Day Sec School, training 30+ students in practical graphic design fundamentals across 4 weeks with 3 facilitators.',
      highlights: ['30+ Students Trained', '4 Weeks of Training', '3 Facilitators']
    },
    {
      id: 'bag-a-child-rivers-uniport',
      number: '03',
      shortTitle: 'TEAM UNIPORT (2.0)',
      name: 'Bag A Child 2.0: Team UNIPORT',
      category: 'Content Writing & Graphic Design',
      status: 'Completed',
      location: 'Olobo Premier school, Port Harcourt, Rivers State',
      date: 'June 2026',
      livesImpacted: 20,
      lead: 'Oluwaseun Akindilureni',
      image: '/assets/bag_a_child/uniport/cover_page_uniport.jpeg',
      tagline: 'One-month skills development programme in writing and graphic design.',
      description: 'Beginning on 3 June 2026, held sessions twice weekly for a total of 8 sessions throughout the month, training 20+ students with 3 facilitators in content writing and graphic design.',
      highlights: ['20+ Students Trained', '8 Sessions Held', '4 Weeks of Training', '3 Facilitators']
    }
  ];

  const current = exhibitionProjects[activeTab];

  return (
    <section className="py-28 bg-[#050914] text-white relative overflow-hidden border-b border-white/10 selection:bg-brand-teal selection:text-white">
      {/* Structural Ambient Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[800px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Exhibition Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-12 border-b border-white/15">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] uppercase text-teal-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-teal" />
              <span>FIELD WORK EXHIBITION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Projects driving real change.
            </h2>
          </div>

          <Link
            href="/projects"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold border border-white/15 backdrop-blur-md transition-all group"
          >
            <span>VIEW ALL INITIATIVES</span>
            <ArrowUpRight className="w-4 h-4 text-teal-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Interactive Exhibition Tab Switcher Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 border-b border-white/10 no-scrollbar">
          {exhibitionProjects.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-4 rounded-2xl font-mono text-xs font-bold transition-all whitespace-nowrap border flex items-center gap-3 ${idx === activeTab
                  ? 'bg-slate-900 text-teal-300 border-teal-400/80'
                  : 'bg-slate-950/60 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
                }`}
            >
              <span className="text-teal-400 font-extrabold">{p.number}</span>
              <span>{p.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Full-Width Exhibition Stage */}
        <div className="rounded-3xl bg-slate-950/80 border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left Column: Full-Height Immersive Widescreen Frame (Span 7) */}
          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[380px] lg:min-h-[480px] overflow-hidden bg-[#040711] flex items-center justify-center p-4 sm:p-6">
            {/* Ambient Blurred Backdrop */}
            <img
              src={current.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
            />
            <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />
            
            {/* Sharp Foreground Image (Preserves Full Poster & Photos) */}
            <img
              src={current.image}
              alt={current.name}
              className="relative max-h-full max-w-full object-contain rounded-xl shadow-2xl z-10 transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none z-10" />

            {/* Top Overlay Badges */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="px-4 py-1.5 rounded-md bg-slate-950/90 text-teal-300 text-xs font-mono font-bold uppercase tracking-wider border border-white/15 backdrop-blur-md">
                {current.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30 backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {current.status}
              </span>
            </div>

            {/* Bottom Overlay Metric Badge */}
            <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/15 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-base font-extrabold text-white">{current.livesImpacted}+</div>
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Lives Impacted</div>
              </div>
            </div>
          </div>

          {/* Right Column: Case Study Details & Metrics (Span 5) */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <span className="font-mono text-xs font-bold tracking-[0.3em] text-teal-400">
                  EXHIBIT {current.number}
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-teal-300" />
                  <span>{current.location}</span>
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
                {current.name}
              </h3>

              <p className="text-xs font-semibold text-teal-300/90 mb-6 uppercase tracking-wider">
                {current.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-8">
                {current.description}
              </p>

              {/* Highlights Breakdown */}
              <div className="space-y-3 mb-8 pt-6 border-t border-white/10">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-slate-300 font-mono">
                    <span className="w-2 h-2 rounded-full bg-brand-teal" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage Footer */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                LEAD: {current.lead}
              </span>

              <Link
                href={`/projects/${current.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-teal to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold text-xs transition-all"
              >
                <span>Explore Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
