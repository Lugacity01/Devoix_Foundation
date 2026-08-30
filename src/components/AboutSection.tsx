'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Film, HeartHandshake, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200 selection:bg-purple-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header Tag */}
        <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] uppercase text-purple-600 mb-4">
          <span className="w-2 h-2 rounded-full bg-purple-600" />
          <span>SECTION 01 // WHO WE ARE</span>
        </div>

        {/* Split Layout: Text on Left, Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Human Narrative & Dual Arm Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Empowering creators.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Elevating brands.
              </span>{' '}
              Transforming communities.
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-8">
              <p>
                Dovoix was founded with a singular conviction: creative excellence should not exist in isolation from social responsibility. Based in Nigeria, we set out to build an institution where commercial media production directly fuels community empowerment.
              </p>
              <p>
                What inspired our creation was observing a huge gap across Africa — immense young creative talent lacking access to professional tools, paired with brands seeking authentic, world-class storytelling.
              </p>
            </div>

            {/* Dual Operational Arms Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 pt-6 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                  <Film className="w-4 h-4 text-purple-600" />
                  <span>Dovoix FilmHouse</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Our commercial production arm that delivers high-impact films, commercials, and brand campaigns for global clients.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-indigo-700 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                  <HeartHandshake className="w-4 h-4 text-indigo-600" />
                  <span>Dovoix Foundation</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Our social impact arm that runs tuition-free educational masterclasses and solar-powered learning hubs for African youth.
                </p>
              </div>
            </div>

            {/* Location & Read More */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <MapPin className="w-4 h-4 text-purple-600" />
                <span>Headquartered in Lagos, Nigeria</span>
              </div>
              <a
                href="#mission"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-600 hover:text-purple-800 uppercase tracking-wider group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Stage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Dovoix Leadership & Production Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 border border-white/10 backdrop-blur-md">
                  <p className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider mb-1">
                    BEHIND THE SCENES
                  </p>
                  <p className="text-xs text-white leading-relaxed">
                    Dovoix founders & production team conducting creative masterclasses on location.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
