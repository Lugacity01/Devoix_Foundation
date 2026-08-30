import React from 'react';
import { TeamMember } from '@/types';
import { Linkedin, UserCheck } from 'lucide-react';

interface TeamSectionProps {
  team?: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ team = [] }) => {
  return (
    <section id="executives" className="py-16 sm:py-20 lg:py-24 bg-[#0D071E] text-white relative overflow-hidden border-b border-purple-900/30 selection:bg-purple-600 selection:text-white">
      {/* Background Ambient Purple Spotlights */}
      <div className="absolute top-1/3 left-1/3 w-[500px] sm:w-[600px] h-[350px] sm:h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#9d4edd15_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 sm:pb-8 mb-8 sm:mb-12 border-b border-purple-900/30">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-purple-400 mb-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500" />
              <span>SECTION 03 // LEADERSHIP CREDIBILITY</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Our Executives.
            </h2>
          </div>
          <p className="text-[11px] sm:text-xs font-mono text-slate-400 mt-2 md:mt-0 uppercase tracking-wider">
            FOUNDERS & OPERATIONAL LEADERS
          </p>
        </div>

        {/* Executive Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="p-4 sm:p-5 rounded-2xl bg-[#080312]/90 border border-purple-500/20 flex flex-col justify-between hover:border-purple-400/50 transition-all group"
            >
              <div>
                {/* Headshot Frame */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3.5 sm:mb-4 bg-slate-900 border border-purple-500/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080312]/80 via-transparent to-transparent" />
                  
                  {member.isFounder && (
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#080312]/90 border border-purple-500/40 text-purple-300 text-[9px] font-mono font-bold uppercase tracking-wider">
                      CO-FOUNDER
                    </span>
                  )}
                </div>

                {/* Name & Title */}
                <h3 className="font-display text-base sm:text-lg font-bold text-white mb-0.5">
                  {member.name}
                </h3>
                <p className="text-[11px] font-mono font-semibold text-purple-300/90 mb-2.5 uppercase tracking-wider">
                  {member.title}
                </p>

                {/* Short Bio */}
                <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              {/* Card Footer / LinkedIn Link */}
              <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
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
