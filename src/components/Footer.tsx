import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Mail, MapPin, ExternalLink, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] text-white border-t border-[#3a3938]/40 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-12 border-b border-[#3a3938]/40">
          
          {/* Brand Info (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-4 sm:mb-6">
              <Logo />
            </div>
            <p className="text-xs text-[#999998] leading-relaxed font-normal mb-5 sm:mb-6 max-w-sm">
              Dovoix is a creative firm with two operational arms — FilmHouse (commercial production) and Foundation (social impact). Connecting commercial excellence with community transformation across Africa.
            </p>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dovoix Instagram"
                className="p-2 sm:p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#999998] hover:text-white border border-[#3a3938] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dovoix LinkedIn"
                className="p-2 sm:p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#999998] hover:text-white border border-[#3a3938] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dovoix Twitter"
                className="p-2 sm:p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#999998] hover:text-white border border-[#3a3938] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white mb-4 sm:mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs font-mono">
              <li>
                <Link href="/" className="text-[#999998] hover:text-white transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#999998] hover:text-white transition-colors">
                  PROJECTS ARCHIVE
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-[#999998] hover:text-white transition-colors">
                  STUDENT REGISTRATION
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#999998] hover:text-white transition-colors">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* Subdomains / Operational Arms (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white mb-4 sm:mb-6">
              OPERATIONAL ARMS
            </h4>
            <ul className="space-y-3.5 sm:space-y-4">
              <li>
                <a
                  href="https://filmhouse.dovoix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-xs font-mono"
                >
                  <div>
                    <div className="text-white font-bold group-hover:text-[#999998] transition-colors flex items-center gap-1.5">
                      <span>Dovoix FilmHouse</span>
                      <ExternalLink className="w-3 h-3 text-[#999998]" />
                    </div>
                    <div className="text-[#999998] text-[11px]">filmhouse.dovoix.com</div>
                  </div>
                </a>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="group flex items-start gap-2 text-xs font-mono"
                >
                  <div>
                    <div className="text-white font-bold group-hover:text-[#999998] transition-colors flex items-center gap-1.5">
                      <span>Dovoix Foundation</span>
                      <ExternalLink className="w-3 h-3 text-[#999998]" />
                    </div>
                    <div className="text-[#999998] text-[11px]">foundation.dovoix.com</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white mb-4 sm:mb-6">
              CONTACT HQ
            </h4>
            <div className="space-y-2.5 sm:space-y-3 text-xs font-mono text-[#999998]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white" />
                <a href="mailto:contact@dovoix.com" className="hover:text-white transition-colors">
                  contact@dovoix.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="pt-1 sm:pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-[11px] text-white hover:text-[#999998] transition-colors underline underline-offset-4"
                >
                  <span>Open Contact Page →</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#999998] gap-3 sm:gap-4">
          <p>© {new Date().getFullYear()} DOVOIX. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span>Commercial & Impact Synergy</span>
            <span>Version 1.4 PRD</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
