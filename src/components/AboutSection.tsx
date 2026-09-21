'use client';

import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { Card3DTilt } from '@/components/Card3DTilt';
import { AnimatedWords, FadeUpText } from '@/components/AnimatedText';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-[#e5e5e5] selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#000000] mb-3 sm:mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
          </span>
          <span>WHO WE ARE</span>
        </div>

        {/* Split Layout: Text on Left, Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Human Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-[#000000] tracking-tight leading-snug sm:leading-tight mb-4 sm:mb-6">
              <AnimatedWords text="Every story deserves a voice." delay={0.1} />{' '}
              <motion.span
                initial={{ opacity: 0, filter: 'blur(3px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#000000,#3a3938,#000000)] animate-text-gradient bg-[length:200%_auto] inline-block"
              >
                Every voice has the power
              </motion.span>{' '}
              <AnimatedWords text="to create impact." delay={0.45} />
            </h2>

            <FadeUpText delay={0.2} className="space-y-3.5 sm:space-y-4 text-[#3a3938] text-xs sm:text-sm lg:text-base font-normal leading-relaxed mb-6 sm:mb-8">
              <p className="font-medium text-[#000000]">
                DoVoix was born from a simple belief: every story deserves a voice, and every voice has the power to create impact.
              </p>
              <p>
                Founded on{' '}
                <span className="bg-[#000000] text-white px-2 py-0.5 rounded-md font-mono text-[11px] sm:text-xs font-semibold inline-block shadow-sm">
                  6th December 2025 in Oyo State, Nigeria.
                </span>{' '}
                DoVoix started as an idea to combine creativity, storytelling, and social impact in one ecosystem. What began with a passion for film and media has grown into an organisation built around two things we deeply believe in: telling stories that matter and creating opportunities that matter.
              </p>
              <p>
                We created DoVoix because we saw the power of storytelling to shape how people see brands, communities, and themselves. At the same time, we wanted to use that same creative power to give underserved young people access to opportunities, particularly in digital skills and creative education.
              </p>
              <p>
                Today, we are building DoVoix into a socio-entertainment organisation where creativity meets purpose; a space for creators to grow, brands to tell meaningful stories, and communities to experience tangible impact. Through our work, we are building an ecosystem that connects media, talent, storytelling, and humanitarian service.
              </p>
              <p className="text-[#666666] text-xs sm:text-sm italic border-l-2 border-[#3a3938] pl-3 py-1">
                "We are still growing, but the vision remains clear: to build a lasting platform that uses creativity as a tool for expression, opportunity, and social change."
              </p>
            </FadeUpText>

            {/* Location & Read More */}
            <FadeUpText delay={0.35} className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-[#e5e5e5] w-full">
              <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
                <MapPin className="w-4 h-4 text-[#000000] shrink-0 animate-bounce" />
                <span>Headquartered in Ibadan, Nigeria.</span>
              </div>
              <a
                href="#mission"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-mono font-bold text-[#000000] hover:text-[#999998] uppercase tracking-wider group"
              >
                <span>ABOUT US</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </FadeUpText>

          </div>

          {/* Right Column: Visual Stage with 3D Tilt */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <Card3DTilt maxTilt={8} scale={1.02} glareOpacity={0.15} className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e5e5e5] bg-[#141414] aspect-[16/10] sm:aspect-[4/5] group transition-all duration-500 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="DoVoix Leadership & Production Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-black/90 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold text-white uppercase tracking-wider mb-0.5 sm:mb-1">
                    <Sparkles className="w-3 h-3 text-white animate-pulse" />
                    <span>BEHIND THE SCENES</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-white leading-relaxed">
                    DoVoix founders & production team conducting creative masterclasses on location.
                  </p>
                </div>
              </div>

            </Card3DTilt>
          </div>

        </div>

      </div>
    </section>
  );
};
