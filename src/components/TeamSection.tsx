'use client';

import React from 'react';
import { TeamMember } from '@/types';
import { Linkedin, UserCheck } from 'lucide-react';

interface TeamSectionProps {
  team?: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ team = [] }) => {
  return (
    <section id="executives" className="py-20 sm:py-28 bg-[#0D071E] text-white relative overflow-hidden border-b border-purple-900/30 selection:bg-purple-600 selection:text-white">
      {/* Background Ambient Purple Spotlights */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#9d4edd15_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-purple-900/30">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] uppercase text-purple-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>SECTION 03 // LEADERSHIP CREDIBILITY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Executives.
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-4 md:mt-0 uppercase tracking-wider">
            FOUNDERS & OPERATIONAL LEADERS
          </p>
        </div>

        {/* Executive Profile Cards Grid (PRD Section 7 Requirement: 4 per row desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="p-5 rounded-2xl bg-[#080312]/90 border border-purple-500/20 flex flex-col justify-between hover:border-purple-400/50 transition-all group"
            >
              <div>
                {/* Headshot Frame */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-slate-900 border border-purple-500/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080312]/80 via-transparent to-transparent" />
                  
                  {member.isFounder && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#080312]/90 border border-purple-500/40 text-purple-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                      CO-FOUNDER
                    </span>
                  )}
                </div>

                {/* Name & Title */}
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-mono font-semibold text-purple-300/90 mb-3 uppercase tracking-wider">
                  {member.title}
                </p>

                {/* Short Bio (Max 200 chars) */}
                <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              {/* Card Footer / LinkedIn Link */}
              <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <UserCheck className="w-3 h-3 text-purple-400" />
                  VERIFIED LEAD
                </span>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn Profile`}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-purple-500/20 text-slate-300 hover:text-purple-300 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
