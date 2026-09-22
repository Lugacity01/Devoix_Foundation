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
              DoVoix Firm is Nigeria’s first socio-entertainment agency focused on bridging the opportunity gap through creativity, commercial production (DoVoix FilmHouse), and social impact (DoVoix Foundation).
            </p>
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <a
                href="https://www.instagram.com/dovoix_?stkn=MXByOWR2azZxbHlvdQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DoVoix Instagram"
                className="p-2 sm:p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#999998] hover:text-white border border-[#3a3938] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/dovoix-foundation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DoVoix LinkedIn"
                className="p-2 sm:p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#999998] hover:text-white border border-[#3a3938] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@dovoix.foundation?_r=1&_t=ZS-99w6osswkSt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DoVoix TikTok"
                className="p-2 sm:p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#999998] hover:text-white border border-[#3a3938] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43V10.7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-2.13z" />
                </svg>
              </a>
              <a
                href="https://wa.me/2348125615709"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DoVoix WhatsApp"
                className="p-2 sm:p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#999998] hover:text-white border border-[#3a3938] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.71 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
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
                  CAMPUS REGISTRATION
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-[#999998] hover:text-white transition-colors">
                  FREQUENTLY ASKED QUESTIONS
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
                <Link
                  href="/filmhouse"
                  className="group flex items-start gap-2 text-xs font-mono"
                >
                  <div>
                    <div className="text-white font-bold group-hover:text-[#999998] transition-colors flex items-center gap-1.5">
                      <span>DoVoix FilmHouse</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/20">Coming Soon</span>
                    </div>
                    <div className="text-[#999998] text-[11px]">Commercial Creative Arm</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="group flex items-start gap-2 text-xs font-mono"
                >
                  <div>
                    <div className="text-white font-bold group-hover:text-[#999998] transition-colors flex items-center gap-1.5">
                      <span>DoVoix Foundation</span>
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
                <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                <a href="mailto:dovoixfirm@gmail.com" className="hover:text-white transition-colors truncate">
                  dovoixfirm@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:+2348125615709" className="hover:text-white transition-colors">
                  +234 (0) 812 561 5709
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
                <span>Headquarters: Ibadan, Nigeria</span>
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
          <p>© {new Date().getFullYear()} DoVoix. All rights reserved.</p>
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/company/lugacity-optimal-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lugacity Optimal Solutions LinkedIn"
              className="text-[#999998]/40 hover:text-white transition-colors tracking-tight text-[9.5px] font-mono"
            >
              Crafted by Lugacity Optimal Solutions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
