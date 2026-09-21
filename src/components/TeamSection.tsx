'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TeamMember } from '@/types';
import { Linkedin, UserCheck, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Card3DTilt } from '@/components/Card3DTilt';
import { AnimatedWords } from '@/components/AnimatedText';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamSectionProps {
  team?: TeamMember[];
}

const renderBioWithLinks = (text: string) => {
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const [_, label, url] = match;
    parts.push(
      <a
        key={match.index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white underline underline-offset-4 hover:text-[#999998] font-medium transition-colors inline"
      >
        {label}
      </a>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

export const TeamSection: React.FC<TeamSectionProps> = ({ team = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const mobileTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mobileScrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  if (!team || team.length === 0) return null;

  const activeMember = team[selectedIndex] || team[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === team.length - 1 ? 0 : prev + 1));
  };

  // Safely scroll ONLY the horizontal container internally without shifting the window/viewport
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const container = mobileScrollContainerRef.current;
    const activeEl = mobileTabRefs.current[selectedIndex];
    if (container && activeEl) {
      const scrollLeft =
        activeEl.offsetLeft -
        container.offsetLeft -
        (container.clientWidth - activeEl.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth',
      });
    }
  }, [selectedIndex]);

  return (
    <section id="board" className="py-16 sm:py-20 lg:py-24 bg-[#000000] text-white relative overflow-hidden border-b border-[#3a3938]/40 selection:bg-white selection:text-black">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] sm:w-[700px] h-[350px] sm:h-[450px] bg-[#999998]/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#3a3938]/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow [animation-delay:3s]" />
      <div className="absolute inset-0 bg-[radial-gradient(#99999812_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 sm:pb-8 mb-6 sm:mb-10 border-b border-[#3a3938]/40 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#3a3938] text-[#999998] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-2 sm:mb-3">
              <Sparkles className="w-3 h-3 text-white animate-pulse" />
              <span>EXECUTIVE GOVERNANCE</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight">
              <AnimatedWords text="Meet the" delay={0.1} />{' '}
              <motion.span
                initial={{ opacity: 0, filter: 'blur(3px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,#999998,#ffffff)] animate-text-gradient bg-[length:200%_auto] inline-block"
              >
                Board Members.
              </motion.span>
            </h2>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#999998] tracking-widest hidden sm:inline">
              0{selectedIndex + 1} / 0{team.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Board Member"
                className="p-2.5 rounded-xl bg-[#141414] hover:bg-[#222222] text-white border border-[#3a3938] transition-all hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Board Member"
                className="p-2.5 rounded-xl bg-[#141414] hover:bg-[#222222] text-white border border-[#3a3938] transition-all hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile-Only Horizontal Overflow Selector */}
        <div className="block lg:hidden mb-5 w-full overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#999998] mb-2.5 px-0.5">
            <span className="flex items-center gap-1.5 font-semibold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Board Roster
            </span>
            <span className="text-[10px] text-[#999998]">Swipe & Select ↔</span>
          </div>

          <div
            ref={mobileScrollContainerRef}
            className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar snap-x snap-mandatory scroll-smooth w-full"
          >
            {team.map((member, idx) => {
              const isActive = selectedIndex === idx;
              return (
                <button
                  key={member.id}
                  ref={(el) => {
                    mobileTabRefs.current[idx] = el;
                  }}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`flex-shrink-0 flex items-center gap-2.5 p-2 pr-3.5 rounded-2xl border transition-all duration-300 snap-center ${
                    isActive
                      ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-[1.02] font-semibold'
                      : 'bg-[#121212] text-[#999998] border-[#3a3938] hover:border-[#999998] hover:text-white'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl overflow-hidden border shrink-0 transition-transform ${
                    isActive ? 'border-black/30 ring-2 ring-black/10' : 'border-[#3a3938]'
                  }`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className={`font-mono text-[9px] ${isActive ? 'text-black/60' : 'text-[#999998]'}`}>
                        0{idx + 1}
                      </span>
                      <div className="text-[12px] font-bold font-display leading-tight truncate max-w-[125px]">
                        {member.name.split(' ')[0]} {member.name.split(' ')[1] || ''}
                      </div>
                    </div>
                    <div className={`text-[9.5px] font-mono uppercase tracking-wider truncate max-w-[125px] mt-0.5 ${
                      isActive ? 'text-black/80 font-bold' : 'text-[#999998]'
                    }`}>
                      {member.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Executive Spotlight Studio (Split Layout on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Main Cinematic Spotlight Stage */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-[#111111] border border-[#3a3938] p-5 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all duration-500">
            
            {/* Top Row: Tag, Badge & LinkedIn */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-[#3a3938]/60 mb-5 sm:mb-8">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/20">
                  {activeMember.title}
                </span>
                <span className="text-xs font-mono text-[#999998] flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-white" />
                  DoVoix BOARD
                </span>
              </div>

              {activeMember.linkedin && (
                <a
                  href={activeMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${activeMember.name} LinkedIn Profile`}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-200 text-black text-xs font-mono font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
                >
                  <Linkedin className="w-3.5 h-3.5 text-black" />
                  <span>LinkedIn Profile</span>
                </a>
              )}
            </div>

            {/* Middle Row: Photo + Full Narrative Bio with Smooth AnimatePresence */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-6">
              
              {/* Member Portrait Frame with 3D Tilt */}
              <div className="md:col-span-5 relative w-full max-w-[280px] sm:max-w-none mx-auto">
                <Card3DTilt maxTilt={8} scale={1.03} glareOpacity={0.25} className="aspect-[4/5] rounded-2xl overflow-hidden border border-[#3a3938] bg-black group shadow-lg">
                  <img
                    key={activeMember.id}
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 font-mono text-[9px] text-white/90 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-center flex items-center justify-between">
                    <span>0{selectedIndex + 1} / 0{team.length}</span>
                    <span className="truncate ml-2 text-[#cccccc]">{activeMember.title}</span>
                  </div>
                </Card3DTilt>
              </div>

              {/* Member Full Bio & Details with Transition */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMember.id}
                    initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-1.5 leading-tight">
                      {activeMember.name}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-[#999998] uppercase tracking-wider mb-4">
                      {activeMember.title}
                    </p>

                    {/* Full Multi-Paragraph Narrative with Custom Scroll */}
                    <div className="space-y-3.5 text-xs sm:text-sm text-[#cccccc] font-normal leading-relaxed max-h-[280px] sm:max-h-[340px] overflow-y-auto pr-2">
                      {activeMember.fullBio && activeMember.fullBio.length > 0 ? (
                        activeMember.fullBio.map((para, idx) => (
                          <p key={idx}>{renderBioWithLinks(para)}</p>
                        ))
                      ) : (
                        <p>{renderBioWithLinks(activeMember.bio || '')}</p>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Bottom Stepper Indicator */}
            <div className="relative z-10 pt-4 border-t border-[#3a3938]/60 flex items-center justify-between text-xs font-mono text-[#999998]">
              <span className="text-[11px] sm:text-xs">Executive Leadership Roster</span>
              <div className="flex items-center gap-1.5">
                {team.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    aria-label={`Go to board member ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      selectedIndex === idx ? 'w-6 bg-white' : 'w-2 bg-[#3a3938] hover:bg-[#999998]'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Roster Selector Grid (Desktop Only: 5 Cols) */}
          <div className="lg:col-span-5 hidden lg:flex lg:flex-col gap-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#999998] mb-1 px-1 flex items-center justify-between">
              <span>SELECT A BOARD MEMBER</span>
              <span>{team.length} LEADERS</span>
            </div>

            <div className="space-y-2.5">
              {team.map((member, idx) => {
                const isActive = selectedIndex === idx;

                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    className={`w-full text-left p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3.5 group ${
                      isActive
                        ? 'bg-[#1a1a1a] border-white text-white shadow-lg translate-x-1'
                        : 'bg-[#111111]/80 border-[#3a3938]/60 text-[#999998] hover:border-white/40 hover:bg-[#161616] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Avatar Thumbnail */}
                      <div className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border shrink-0 transition-transform ${
                        isActive ? 'border-white scale-105' : 'border-[#3a3938] group-hover:border-white/50'
                      }`}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-[#999998]">0{idx + 1}</span>
                          <h4 className={`font-display text-sm font-bold truncate ${
                            isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                          }`}>
                            {member.name}
                          </h4>
                        </div>
                        <p className="text-[11px] font-mono text-[#999998] truncate mt-0.5">
                          {member.title}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <span className={`w-2 h-2 rounded-full inline-block transition-all ${
                        isActive ? 'bg-white ring-4 ring-white/20' : 'bg-transparent'
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
