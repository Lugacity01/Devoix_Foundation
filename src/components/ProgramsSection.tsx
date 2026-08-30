'use client';

import React from 'react';
import Link from 'next/link';
import { Program } from '@/types';
import { Palette, Video, PenTool, Code, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgramsSectionProps {
  programs: Program[];
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ programs }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Palette':
        return Palette;
      case 'Video':
        return Video;
      case 'PenTool':
        return PenTool;
      case 'Code':
      default:
        return Code;
    }
  };

  return (
    <section id="programs" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal mb-2 block">
            WHAT WE TEACH
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark tracking-tight mb-4">
            Educational Programs & Masterclasses
          </h2>
          <p className="text-slate-600 text-base">
            Tuition-free educational tracks designed for youth seeking practical mastery in design, video, writing, and software engineering.
          </p>
        </div>

        {/* 4-Column Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {programs.map((program, index) => {
            const IconComp = getIcon(program.iconName);
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-brand-teal border border-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-navy group-hover:text-white transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-brand-dark mb-3">
                    {program.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>

                <div>
                  <div className="mb-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {program.activeCohorts.map((cohort) => (
                      <span
                        key={cohort}
                        className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium"
                      >
                        {cohort}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/register"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-brand-navy text-slate-800 hover:text-white text-xs font-semibold transition-all group-hover:bg-brand-navy group-hover:text-white"
                  >
                    <span>Register as a Student</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Program Enrollment Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand-navy to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">Ready to master a new skill?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Student intake registration takes less than 2 minutes. Select your program of interest and project cohort.
            </p>
          </div>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-teal hover:bg-teal-600 text-white font-semibold text-sm shadow-md transition-all whitespace-nowrap"
          >
            <span>Register as a Student</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
