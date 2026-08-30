import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Mail, MapPin, ExternalLink, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05020B] text-white border-t border-purple-900/30 selection:bg-purple-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-purple-900/30">
          
          {/* Brand Info (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal mb-6 max-w-sm">
              Dovoix is a creative firm with two operational arms — FilmHouse (commercial production) and Foundation (social impact). Connecting commercial excellence with community transformation across Africa.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dovoix Instagram"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-purple-500/20 text-slate-400 hover:text-purple-300 border border-purple-500/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dovoix LinkedIn"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-purple-500/20 text-slate-400 hover:text-purple-300 border border-purple-500/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dovoix Twitter"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-purple-500/20 text-slate-400 hover:text-purple-300 border border-purple-500/20 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3 text-xs font-mono">
              <li>
                <Link href="/#about" className="text-slate-400 hover:text-white transition-colors">
                  WHO WE ARE
                </Link>
              </li>
              <li>
                <Link href="/#mission" className="text-slate-400 hover:text-white transition-colors">
                  MISSION & VISION
                </Link>
              </li>
              <li>
                <Link href="/#executives" className="text-slate-400 hover:text-white transition-colors">
                  OUR EXECUTIVES
                </Link>
              </li>
              <li>
                <Link href="/#partners" className="text-slate-400 hover:text-white transition-colors">
                  PARTNERS
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-white transition-colors">
                  PROJECTS ARCHIVE
                </Link>
              </li>
              <li>
                <Link href="/#impact" className="text-slate-400 hover:text-white transition-colors">
                  COMBINED IMPACT
                </Link>
              </li>
              <li>
                <Link href="/#highlights" className="text-slate-400 hover:text-white transition-colors">
                  LATEST HIGHLIGHTS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* Subdomains / Operational Arms (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-6">
              OPERATIONAL ARMS
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://filmhouse.dovoix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-xs font-mono"
                >
                  <div>
                    <div className="text-white font-bold group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
                      <span>Dovoix FilmHouse</span>
                      <ExternalLink className="w-3 h-3 text-purple-400" />
                    </div>
                    <div className="text-slate-400 text-[11px]">filmhouse.dovoix.com</div>
                  </div>
                </a>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="group flex items-start gap-2 text-xs font-mono"
                >
                  <div>
                    <div className="text-white font-bold group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
                      <span>Dovoix Foundation</span>
                      <ExternalLink className="w-3 h-3 text-violet-400" />
                    </div>
                    <div className="text-slate-400 text-[11px]">foundation.dovoix.com</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-6">
              CONTACT HQ
            </h4>
            <div className="space-y-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <a href="mailto:contact@dovoix.com" className="hover:text-white transition-colors">
                  contact@dovoix.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-[11px] text-purple-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  <span>Open Contact Page →</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} DOVOIX. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Commercial & Impact Synergy</span>
            <span>Version 1.3 PRD</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
