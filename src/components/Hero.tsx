'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Film, HeartHandshake, Play, Sparkles } from 'lucide-react';
import { ThreeInfinityScene } from '@/components/ThreeInfinityScene';
import { Card3DTilt } from '@/components/Card3DTilt';
import { AnimatedWords, FadeUpText } from '@/components/AnimatedText';
import { motion } from 'framer-motion';

const ShowcaseReelCard: React.FC = () => (
  <Card3DTilt maxTilt={9} scale={1.02} glareOpacity={0.2} className="relative mx-auto max-w-lg lg:max-w-none">
    {/* Main Photo/Reel Frame */}
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#3a3938] bg-[#141414] aspect-[16/10] sm:aspect-[4/5] group shadow-2xl">
      <img
        src="/assets/FilmHouse_picture.JPEG"
        alt="DoVoix FilmHouse & Foundation Production Stage"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />

      {/* Top Overlay Badge */}
      <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between">
        <span className="px-3 py-1 rounded-full bg-[#000000]/90 border border-[#3a3938] text-white text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 sm:gap-2">
          <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white fill-white animate-pulse" />
          SHOWCASE REEL
        </span>
        <span className="px-2 py-0.5 rounded-md bg-white text-black text-[9px] font-mono font-bold">
          4K LIVE
        </span>
      </div>

      {/* Bottom Overlay Info Card */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#000000]/95 border border-[#3a3938] backdrop-blur-md">
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold text-[#999998] uppercase tracking-wider mb-0.5 sm:mb-1">
          <Sparkles className="w-3 h-3 text-white animate-pulse" />
          <span>COMMERCIAL & COMMUNITY SYNERGY</span>
        </div>
        <p className="text-[11px] sm:text-xs font-semibold text-white leading-relaxed">
          Bridging commercial film production excellence with tuition-free youth skills development.
        </p>
      </div>
    </div>
  </Card3DTilt>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#000000] text-white overflow-hidden selection:bg-white selection:text-black border-b border-[#3a3938]/40">
      
      {/* 3D WebGL Infinity Particle Canvas in Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-70 sm:opacity-85">
        <ThreeInfinityScene particleCount={1600} interactive={true} />
      </div>

      {/* Dynamic Breathing Ambient Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] sm:w-[700px] h-[350px] sm:h-[500px] bg-[#999998]/10 rounded-full blur-[140px] sm:blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] sm:w-[600px] h-[300px] sm:h-[400px] bg-[#3a3938]/20 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none animate-pulse-glow [animation-delay:2.5s]" />
      <div className="absolute inset-0 bg-[radial-gradient(#99999818_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Purpose, Mobile Visual Stage & Dual CTAs */}
          <div className="w-full lg:col-span-7 flex flex-col items-start text-left">

            {/* PRD Primary Headline with Animated Words & Flow */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14] mb-3.5 sm:mb-6">
              <AnimatedWords text="Connecting" delay={0.05} />{' '}
              <motion.span
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,#999998,#ffffff)] animate-text-gradient bg-[length:200%_auto] inline-block"
              >
                Creativity
              </motion.span>{' '}
              <AnimatedWords text="with Purpose." delay={0.35} />
            </h1>

            {/* PRD Subheading with FadeUp Motion */}
            <FadeUpText delay={0.45} className="space-y-3 sm:space-y-3.5 text-sm sm:text-base lg:text-lg text-[#999998] font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              <p>
                <strong className="text-white font-semibold">DoVoix Firm</strong> is Nigeria’s first socio-entertainment agency focused on bridging the opportunity gap through creativity and storytelling.
              </p>
              <p>
                DoVoix Firm operates as the parent company, with two operational arms: the commercial production arm, (<strong className="text-white font-semibold">DoVoix FilmHouse</strong>), and the social impact organisation, (<strong className="text-white font-semibold">DoVoix Foundation</strong>). Both operate under a unified identity to drive commercial innovation and youth transformation.
              </p>
            </FadeUpText>

            {/* Mobile-Only Visual Stage (Shows before the buttons on mobile) */}
            <div className="w-full block lg:hidden mb-7 sm:mb-8">
              <ShowcaseReelCard />
            </div>

            {/* CTA Buttons: Explore FilmHouse & Explore Foundation */}
            <FadeUpText delay={0.6} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-7 sm:mb-10">
              <Link
                href="/filmhouse"
                className="relative group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs font-mono uppercase tracking-wider border border-white/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center overflow-hidden shadow-lg"
              >
                <Film className="w-4 h-4 text-black relative z-10" />
                <span className="relative z-10">Explore FilmHouse</span>
                <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
              </Link>

              <a
                href="#gateway"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] text-white font-bold text-xs font-mono uppercase tracking-wider border border-[#3a3938] hover:border-white/50 transition-all hover:scale-[1.02] active:scale-95 text-center"
              >
                <HeartHandshake className="w-4 h-4 text-white" />
                <span>Explore Foundation</span>
              </a>
            </FadeUpText>

            {/* High-Level Dual-Arm Badge Strip */}
            <FadeUpText delay={0.7} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-5 sm:pt-8 border-t border-[#3a3938]/40 w-full">
              <Card3DTilt maxTilt={5} scale={1.01} className="w-full">
                <Link href="/filmhouse" className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#141414]/80 border border-[#3a3938]/60 hover:border-white/40 hover:bg-[#1a1a1a] transition-all group w-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#262626] border border-[#3a3938] flex items-center justify-center text-white font-bold shrink-0 group-hover:scale-105 transition-transform">
                    <Film className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#999998] transition-colors">FilmHouse</div>
                    <div className="text-[11px] text-[#999998] font-medium">Commercial Creative Arm</div>
                  </div>
                </Link>
              </Card3DTilt>

              <Card3DTilt maxTilt={5} scale={1.01} className="w-full">
                <a href="#gateway" className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#141414]/80 border border-[#3a3938]/60 hover:border-white/40 hover:bg-[#1a1a1a] transition-all group w-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#262626] border border-[#3a3938] flex items-center justify-center text-white font-bold shrink-0 group-hover:scale-105 transition-transform">
                    <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#999998] transition-colors">Foundation</div>
                    <div className="text-[11px] text-[#999998] font-medium">Social Impact Arm</div>
                  </div>
                </a>
              </Card3DTilt>
            </FadeUpText>

          </div>

          {/* Desktop-Only Visual Showcase Stage (Right Column) */}
          <div className="hidden lg:block lg:col-span-5 relative mt-6 lg:mt-0">
            <ShowcaseReelCard />
          </div>

        </div>
      </div>
    </section>
  );
};
