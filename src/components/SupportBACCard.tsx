'use client';

import React, { useState } from 'react';
import { Copy, Check, Phone, ShieldCheck, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SupportBACCardProps {
  variant?: 'banner' | 'card' | 'sidebar';
  className?: string;
}

export const SupportBACCard: React.FC<SupportBACCardProps> = ({ variant = 'banner', className = '' }) => {
  const [copied, setCopied] = useState(false);
  const [showFlyerModal, setShowFlyerModal] = useState(false);

  const accountNumber = '6539687115';
  const formattedAccountNumber = '653-968-7115';
  const accountName = 'Dovoix Foundation';
  const bankName = 'Moniepoint Microfinance Bank';

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (variant === 'sidebar') {
    return (
      <div className={`rounded-2xl bg-gradient-to-br from-[#0c051f] via-[#050914] to-[#040711] border-2 border-purple-900/40 text-white p-5 sm:p-6 shadow-xl ${className}`}>
        <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span>CALL FOR SUPPORT · BAC 2.0</span>
        </div>

        <h3 className="font-display text-base font-bold text-white mb-2">
          Sponsor DoVoix Foundation
        </h3>
        
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          Support tuition-free creative & digital skills training for secondary school students across Nigeria.
        </p>

        {/* Moniepoint Debit Card UI */}
        <div className="rounded-xl bg-gradient-to-br from-[#0c0824] via-[#0b1026] to-[#040612] p-4 border border-purple-500/40 shadow-inner mb-4 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-[#0055ff] flex items-center justify-center font-bold text-white text-[10px]">
                M
              </div>
              <span className="font-display text-xs font-bold text-white">Moniepoint</span>
            </div>
            <div className="w-6 h-4 rounded bg-amber-300/80 border border-amber-500/60" />
          </div>

          <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">Official Account</div>
          <div className="font-mono text-lg font-black text-white tracking-wider mb-2 select-all">
            {formattedAccountNumber}
          </div>

          <div className="flex items-end justify-between pt-2 border-t border-white/10 text-[10px]">
            <div>
              <div className="text-white font-semibold text-xs">{accountName}</div>
              <div className="text-slate-400 text-[9px]">{bankName}</div>
            </div>
            <div className="px-1.5 py-0.5 rounded bg-white text-black font-display font-black text-[9px] italic">
              Verve
            </div>
          </div>
        </div>

        {/* 1-Click Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className={`w-full py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md mb-3 ${
            copied
              ? 'bg-emerald-500 text-white'
              : 'bg-white text-black hover:bg-purple-100 hover:scale-[1.02]'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied Account Number!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Account Details</span>
            </>
          )}
        </button>

        {/* Enquiries Hotline */}
        <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs font-mono">
          <div className="text-[10px] text-slate-400 uppercase">Enquiries Hotline:</div>
          <div className="flex justify-between text-slate-300">
            <span>Donald:</span>
            <a href="tel:08125615709" className="text-purple-300 hover:underline font-bold">08125615709</a>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Oluwaseun:</span>
            <a href="tel:09026888679" className="text-purple-300 hover:underline font-bold">09026888679</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Container Frame */}
      <div className="rounded-3xl bg-gradient-to-br from-[#0c051f] via-[#050914] to-[#040711] border-2 border-purple-900/40 text-white overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 relative">
        
        {/* Ambient Background Glows */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Mission Narrative & Enquiries (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
                <span>CALL FOR SUPPORT · BAC 2.0</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                DoVoix Foundation Project
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                The DoVoix Foundation is a youth-led organisation dedicated to bridging the digital divide and expanding access to opportunity for young people. We equip secondary school students with high-income digital and media skills, turning raw talent into practical, marketable abilities.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-purple-300 font-semibold mb-6">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% of donations directly sponsor student training sessions, facilitators, and toolkits.</span>
              </div>
            </div>

            {/* Direct Enquiries Hotline Contacts */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                FOR MORE ENQUIRIES & DIRECT SPONSORSHIP CALL:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:08125615709"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span>Donald: <strong>08125615709</strong></span>
                  </div>
                  <span className="text-[10px] text-purple-300 font-bold uppercase">Call</span>
                </a>

                <a
                  href="tel:09026888679"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span>Oluwaseun: <strong>09026888679</strong></span>
                  </div>
                  <span className="text-[10px] text-purple-300 font-bold uppercase">Call</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Moniepoint Payment Card (Span 5) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* The Digital Bank Card UI */}
            <div className="w-full max-w-sm rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c0824] via-[#0b1026] to-[#040612] p-6 sm:p-7 border-2 border-purple-500/40 shadow-2xl relative overflow-hidden group hover:border-purple-400/80 transition-all duration-300">
              
              {/* Card Surface Reflection */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
              
              {/* Card Header: Moniepoint Brand + Chip */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                {/* Moniepoint Emblem */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0055ff] flex items-center justify-center font-bold text-white text-sm shadow-md">
                    M
                  </div>
                  <span className="font-display text-sm sm:text-base font-extrabold text-white tracking-wide">
                    Moniepoint
                  </span>
                </div>

                {/* EMV Chip & Contactless Waves */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-6 rounded bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-200 border border-amber-500/80 shadow-inner flex items-center justify-center">
                    <div className="w-4 h-3 border border-amber-600/40 rounded-sm" />
                  </div>
                  <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8.5 16.5a5 5 0 0 1 0-9" />
                    <path d="M12 19a8.5 8.5 0 0 0 0-14" />
                  </svg>
                </div>
              </div>

              {/* Account Number Display */}
              <div className="mb-5 relative z-10">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-1">
                  OFFICIAL ACCOUNT NUMBER
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-black text-white tracking-wider flex items-center gap-2 select-all">
                  <span>{formattedAccountNumber}</span>
                </div>
              </div>

              {/* Card Bottom: Account Name & Verve Logo */}
              <div className="flex items-end justify-between pt-3 border-t border-white/10 relative z-10">
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Account Name</div>
                  <div className="font-display text-xs sm:text-sm font-bold text-white">{accountName}</div>
                  <div className="text-[10px] font-mono text-purple-300">{bankName}</div>
                </div>

                {/* Verve Badge */}
                <div className="px-2.5 py-1 rounded bg-white text-black font-display font-black text-xs italic tracking-tighter flex items-center gap-1 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block" />
                  <span>Verve</span>
                </div>
              </div>

              {/* 1-Click Copy Button */}
              <div className="mt-5 relative z-10">
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`w-full py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                    copied
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-black hover:bg-purple-100 hover:scale-[1.02]'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Account Number Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Account Number</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Official Flyer Modal Trigger */}
            <button
              type="button"
              onClick={() => setShowFlyerModal(true)}
              className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-purple-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              <span>View Official Support Flyer</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>

      {/* High-Resolution Flyer Modal */}
      <AnimatePresence>
        {showFlyerModal && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowFlyerModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-slate-950 rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-4 flex flex-col items-center"
            >
              <div className="flex items-center justify-between w-full pb-3 mb-3 border-b border-white/10 text-white">
                <span className="font-mono text-xs font-bold uppercase text-purple-300">Bag A Child 2.0 Official Flyer</span>
                <button
                  type="button"
                  onClick={() => setShowFlyerModal(false)}
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono font-bold"
                >
                  Close [ESC]
                </button>
              </div>

              <div className="relative w-full aspect-[3/4] max-h-[75vh] overflow-hidden rounded-2xl bg-black">
                <img
                  src="/assets/call_for_support_bac2.png"
                  alt="Bag A Child 2.0 Call For Support Official Flyer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-4 w-full flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-grow py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-mono text-xs font-bold uppercase transition-colors"
                >
                  {copied ? 'Copied 653-968-7115' : 'Copy Moniepoint Account'}
                </button>
                <a
                  href="/assets/call_for_support_bac2.png"
                  download="BAC_2.0_Call_For_Support.png"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-colors"
                >
                  Download
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
