import React from 'react';
import { TeamMember } from '@/types';
import { Linkedin, UserCheck, Sparkles } from 'lucide-react';

interface TeamSectionProps {
  team?: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ team = [] }) => {
  return (
    <section id="executives" className="py-14 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-[#0D071E] text-white relative overflow-hidden border-b border-purple-900/30 selection:bg-purple-600 selection:text-white">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/3 left-1/3 w-[500px] sm:w-[600px] 2xl:w-[800px] h-[350px] sm:h-[400px] 2xl:h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[400px] 2xl:w-[600px] h-[300px] 2xl:h-[400px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow [animation-delay:3s]" />
      <div className="absolute inset-0 bg-[radial-gradient(#9d4edd15_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 sm:pb-8 mb-8 sm:mb-10 2xl:mb-12 border-b border-purple-900/40">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-purple-300 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              <span>SECTION 03 // LEADERSHIP CREDIBILITY</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300 animate-text-gradient bg-[length:200%_auto]">
                Executives.
              </span>
            </h2>
          </div>
          <p className="text-[11px] sm:text-xs font-mono text-slate-400 mt-2 md:mt-0 uppercase tracking-wider">
            FOUNDERS & OPERATIONAL LEADERS
          </p>
        </div>

        {/* Executive Profile Cards Grid with calibrated headshot aspect and height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="relative p-4 sm:p-4.5 2xl:p-5 rounded-2xl sm:rounded-3xl bg-[#080312]/90 border border-purple-500/30 flex flex-col justify-between hover:border-purple-400/80 hover:shadow-[0_0_30px_rgba(157,78,221,0.25)] hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
            >
              {/* Card Ambient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Headshot Frame with Max-Height Cap */}
                <div className="relative aspect-[4/3] sm:aspect-square max-h-[260px] 2xl:max-h-[300px] rounded-xl sm:rounded-2xl overflow-hidden mb-3.5 bg-slate-900 border border-purple-500/30 shadow-inner">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080312]/90 via-[#080312]/20 to-transparent" />
                  
                  {member.isFounder && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#080312]/95 border border-purple-500/50 text-purple-300 text-[9px] font-mono font-bold uppercase tracking-wider shadow-md backdrop-blur-md flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-purple-400" />
                      CO-FOUNDER
                    </span>
                  )}
                </div>

                {/* Name & Title */}
                <h3 className="font-display text-base sm:text-lg font-bold text-white mb-0.5 group-hover:text-purple-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-[11px] font-mono font-semibold text-purple-300/90 mb-2 uppercase tracking-wider">
                  {member.title}
                </p>

                {/* Short Bio */}
                <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Card Footer / LinkedIn Link */}
              <div className="relative z-10 pt-3 border-t border-purple-900/40 flex items-center justify-between">
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
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-purple-500/20 text-slate-300 hover:text-purple-300 border border-purple-500/20 group-hover:border-purple-400/40 group-hover:scale-110 transition-all"
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
