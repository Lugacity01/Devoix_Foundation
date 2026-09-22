'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Film, HeartHandshake, Sparkles } from 'lucide-react';
import { ThreeInfinityScene } from '@/components/ThreeInfinityScene';
import { Card3DTilt } from '@/components/Card3DTilt';
import { AnimatedWords, FadeUpText } from '@/components/AnimatedText';
import { motion } from 'framer-motion';

const ShowcaseReelCard: React.FC = () => (
  <div className="relative mx-auto max-w-lg lg:max-w-none">
    {/* Background Aura Glow Mesh (Layer 1 - Behind) */}
    <motion.div
      animate={{
        scale: [1, 1.18, 1],
        opacity: [0.35, 0.6, 0.35],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: 'linear',
      }}
      className="absolute -inset-8 sm:-inset-12 bg-gradient-to-tr from-[#8b5cf6]/25 via-white/10 to-[#3a3938]/40 rounded-[3rem] blur-3xl pointer-events-none -z-30"
    />

    {/* Offset Angled Glass Backplate Frame (Layer 2 - Before Background) */}
    <motion.div
      animate={{
        rotate: [-3, -1.5, -3],
        y: [5, -5, 5],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-br from-white/15 via-[#1a1a1a]/70 to-[#0a0a0a]/90 border border-white/15 backdrop-blur-md -z-20 shadow-2xl"
    />

    {/* Secondary Offset Frame (Layer 3 - Mid-Background Frame) */}
    <motion.div
      animate={{
        rotate: [2.5, 1, 2.5],
        y: [-4, 6, -4],
      }}
      transition={{
        duration: 7.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute -inset-1.5 sm:-inset-2 rounded-3xl border border-white/10 bg-[#141414]/50 -z-10"
    />

    {/* Main Card with Floating Levitation Loop & 3D Tilt */}
    <motion.div
      animate={{
        y: [-8, 8, -8],
        rotate: [-0.5, 0.5, -0.5],
      }}
      transition={{
        duration: 6.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Card3DTilt maxTilt={8} scale={1.01} glareOpacity={0.25} className="relative">
        {/* Main Photo/Reel Frame */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#3a3938] bg-[#141414] aspect-[16/10] sm:aspect-[4/5] group shadow-2xl">
          
          {/* Continuous Ken Burns Zoom & Gentle Pan Image */}
          <motion.img
            src="/assets/FilmHouse_picture.JPEG"
            alt="DoVoix FilmHouse & Foundation Production Stage"
            animate={{
              scale: [1.02, 1.10, 1.05, 1.02],
              x: [0, -6, 5, 0],
              y: [0, -5, 4, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full object-cover select-none"
          />

          {/* Continuous Repeating Light Sheen / Glass Sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none -skew-x-12 z-10"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatDelay: 3.2,
            }}
          />

          {/* Top Cinema Viewfinder HUD Overlay */}
          <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between z-20 pointer-events-none">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono text-white tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>PRODUCTION SET</span>
            </div>
            <div className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-mono text-[#999998] tracking-wider">
              24 FPS • 4K
            </div>
          </div>

          {/* Subtle Viewfinder Corner Reticles */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/40 pointer-events-none z-10" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/40 pointer-events-none z-10" />
          <div className="absolute bottom-16 sm:bottom-20 left-2 w-3 h-3 border-b-2 border-l-2 border-white/40 pointer-events-none z-10" />
          <div className="absolute bottom-16 sm:bottom-20 right-2 w-3 h-3 border-b-2 border-r-2 border-white/40 pointer-events-none z-10" />

          {/* Bottom Overlay Info Card */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#000000]/95 border border-[#3a3938] backdrop-blur-md z-20 shadow-xl">
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
    </motion.div>
  </div>
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

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] text-white font-bold text-xs font-mono uppercase tracking-wider border border-[#3a3938] hover:border-white/50 transition-all hover:scale-[1.02] active:scale-95 text-center"
              >
                <HeartHandshake className="w-4 h-4 text-white" />
                <span>Explore Foundation</span>
              </Link>
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
