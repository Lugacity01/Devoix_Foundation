import React from 'react';
import { TeamMember } from '@/types';
import { Linkedin, UserCheck, Sparkles } from 'lucide-react';

interface TeamSectionProps {
  team?: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ team = [] }) => {
  return (
    <section id="executives" className="py-14 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-[#0A0A0A] text-white relative overflow-hidden border-b border-zinc-900 selection:bg-white selection:text-black">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/3 left-1/3 w-[500px] sm:w-[600px] 2xl:w-[800px] h-[350px] sm:h-[400px] 2xl:h-[500px] bg-white/5 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[400px] 2xl:w-[600px] h-[300px] 2xl:h-[400px] bg-zinc-800/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow [animation-delay:3s]" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 sm:pb-8 mb-8 sm:mb-10 2xl:mb-12 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-400 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span>SECTION 03 // LEADERSHIP CREDIBILITY</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-400 animate-text-gradient bg-[length:200%_auto]">
                Executives.
              </span>
            </h2>
          </div>
          <p className="text-[11px] sm:text-xs font-mono text-zinc-400 mt-2 md:mt-0 uppercase tracking-wider">
            FOUNDERS & OPERATIONAL LEADERS
          </p>
        </div>

        {/* Executive Profile Cards Grid with calibrated headshot aspect and height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="relative p-4 sm:p-4.5 2xl:p-5 rounded-2xl sm:rounded-3xl bg-black border border-zinc-800 flex flex-col justify-between hover:border-white/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
            >
              {/* Card Ambient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Headshot Frame with Max-Height Cap */}
                <div className="relative aspect-[4/3] sm:aspect-square max-h-[260px] 2xl:max-h-[300px] rounded-xl sm:rounded-2xl overflow-hidden mb-3.5 bg-zinc-900 border border-zinc-800 shadow-inner">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  {member.isFounder && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/95 border border-white/20 text-white text-[9px] font-mono font-bold uppercase tracking-wider shadow-md backdrop-blur-md flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-white" />
                      CO-FOUNDER
                    </span>
                  )}
                </div>

                {/* Name & Title */}
                <h3 className="font-display text-base sm:text-lg font-bold text-white mb-0.5 group-hover:text-zinc-200 transition-colors">
                  {member.name}
                </h3>
                <p className="text-[11px] font-mono font-semibold text-zinc-400 mb-2 uppercase tracking-wider">
                  {member.title}
                </p>

                {/* Short Bio */}
                <p className="text-xs text-zinc-400 font-normal leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Card Footer / LinkedIn Link */}
              <div className="relative z-10 pt-3 border-t border-zinc-900 flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                  <UserCheck className="w-3 h-3 text-white" />
                  VERIFIED LEAD
                </span>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn Profile`}
                    className="p-1.5 rounded-lg bg-zinc-900 hover:bg-white hover:text-black text-zinc-400 border border-zinc-800 group-hover:scale-110 transition-all"
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
