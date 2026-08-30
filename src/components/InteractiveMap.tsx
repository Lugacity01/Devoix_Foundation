'use client';

import React, { useState } from 'react';
import { ReachLocation } from '@/types';
import { MapPin, Users, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveMapProps {
  locations: ReachLocation[];
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState<ReachLocation | null>(locations[0]);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal mb-2 block">
            GEOGRAPHIC FOOTPRINT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark tracking-tight mb-3">
            Where We've Been
          </h2>
          <p className="text-slate-600 text-base">
            Explore active learning hubs, completed outreaches, and educational projects across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 ">
          {/* SVG Map Display Column */}
          <div className="lg:col-span-7 relative w-full aspect-[4/3] bg-slate-900 rounded-2xl overflow-hidden p-6 flex items-center justify-center border border-slate-800 ">
            {/* Nigeria Outline SVG Graphic */}
            <svg
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-slate-800 opacity-60 pointer-events-none"
            >
              {/* Stylized Nigeria Map Path */}
              <path
                d="M 120,420 Q 180,380 240,400 T 360,420 T 480,450 T 600,480 T 680,420 Q 720,320 660,240 T 580,180 T 480,120 T 360,100 T 240,160 T 160,280 Z"
                fill="currentColor"
                stroke="#334155"
                strokeWidth="2"
              />
              <path
                d="M 150,390 C 220,370 300,400 380,380 C 460,360 540,420 620,380"
                stroke="#0D9488"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Interactive Location Pins */}
            {locations.map((loc) => {
              const isSelected = selectedLocation?.id === loc.id;
              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedLocation(loc)}
                  aria-label={`Select location ${loc.name}`}
                  style={{
                    left: `${loc.coordinates.x}%`,
                    top: `${loc.coordinates.y}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal group ${
                    isSelected ? 'z-30 scale-125' : 'z-20 hover:scale-110'
                  }`}
                >
                  <span className={`relative flex h-5 w-5 items-center justify-center rounded-full ${isSelected ? 'bg-brand-teal text-white  /50' : 'bg-slate-700 text-teal-300'}`}>
                    <MapPin className="w-3.5 h-3.5" />
                    {isSelected && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
                    )}
                  </span>
                </button>
              );
            })}

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-[11px] text-slate-300 flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
                <span>Active Location</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <span>Regional Pin</span>
              </div>
            </div>
          </div>

          {/* Location Detail Panel Column */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedLocation && (
                <motion.div
                  key={selectedLocation.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 "
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-teal-50 text-brand-teal text-xs font-semibold uppercase">
                      {selectedLocation.state} State
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Location Hub
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">
                    {selectedLocation.name}
                  </h3>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    <span className="text-xs font-bold text-slate-500 uppercase block mb-1">
                      Featured Initiative
                    </span>
                    <p className="text-sm font-semibold text-brand-dark">
                      {selectedLocation.featuredProjectName}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-100">
                      <div className="flex items-center gap-1.5 text-xs text-brand-teal font-medium mb-1">
                        <Users className="w-3.5 h-3.5" />
                        <span>Lives Impacted</span>
                      </div>
                      <div className="font-display text-2xl font-extrabold text-brand-dark">
                        {selectedLocation.livesImpacted}+
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-sky-50/50 border border-sky-100">
                      <div className="flex items-center gap-1.5 text-xs text-brand-accent font-medium mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Active Projects</span>
                      </div>
                      <div className="font-display text-2xl font-extrabold text-brand-dark">
                        {selectedLocation.activeProjects}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    Click pins on the map to switch regional hubs and inspect active foundation projects.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
