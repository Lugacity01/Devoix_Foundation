'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Handshake, Sparkles } from 'lucide-react';
import { ThreeVortexCanvas } from '@/components/ThreeVortexCanvas';
import { Card3DTilt } from '@/components/Card3DTilt';
import { AnimatedWords, FadeUpText } from '@/components/AnimatedText';
import { motion } from 'framer-motion';

export const CoCreateSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#000000] text-white relative overflow-hidden border-b border-[#3a3938]/40 selection:bg-white selection:text-black">
      
      {/* Interactive 3D Three.js Particle Vortex Field */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-70 sm:opacity-85">
        <ThreeVortexCanvas particleCount={1400} />
      </div>

      {/* Ambient Radial Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[450px] bg-[#999998]/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#3a3938]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#99999815_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Top Floating Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414]/90 border border-[#3a3938] text-white text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-5 sm:mb-6 backdrop-blur-md animate-float-slow">
            <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
            <span>COMMERCIAL & IMPACT PARTNERSHIPS</span>
          </div>

          {/* Headline with Animated Words */}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-5 sm:mb-6">
            <AnimatedWords text="Let’s Create" delay={0.1} />{' '}
            <motion.span
              initial={{ opacity: 0, filter: 'blur(3px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,#999998,#ffffff)] animate-text-gradient bg-[length:200%_auto] inline-block"
            >
              What Matters.
            </motion.span>
          </h2>

          {/* Subtitle Description with FadeUp */}
          <FadeUpText delay={0.3} className="text-sm sm:text-base lg:text-lg text-[#999998] font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            <p>
              Join brands, organisations, and changemakers shaping Africa’s creative future through storytelling, innovation, and impact.
            </p>
          </FadeUpText>

          {/* Partner with DoVoix Button with 3D Tilt */}
          <Card3DTilt maxTilt={10} scale={1.04} glareOpacity={0.25}>
            <Link
              href="/contact"
              className="relative group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-white hover:bg-slate-200 text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl text-center overflow-hidden border border-white/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-black relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Partner with DoVoix</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform relative z-10" />
            </Link>
          </Card3DTilt>

        </div>

      </div>
    </section>
  );
};
