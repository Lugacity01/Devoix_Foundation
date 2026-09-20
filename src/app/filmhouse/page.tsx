'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Film, ArrowLeft, Mail, CheckCircle2, Sparkles, Clapperboard, Video, Award } from 'lucide-react';

export default function FilmHousePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-white selection:text-black flex flex-col justify-between relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[500px] bg-[#999998]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#99999812_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

      {/* Top Navigation */}
      <header className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141414] hover:bg-[#222222] border border-[#3a3938] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Main Hub</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#141414] border border-[#3a3938] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#999998] flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span>Commercial Arm</span>
          </span>
        </div>
      </header>

      {/* Main Hero Content */}
      <main className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center flex flex-col items-center">

        {/* Emblem Artwork */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-2 border-[#3a3938] bg-[#0a0a0a] shadow-2xl mb-8 group hover:border-white/60 transition-all duration-500 hover:scale-105">
          <img
            src="/assets/logo/foundation_logo.jpg"
            alt="DoVoix FilmHouse"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Coming Soon Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#3a3938] text-white text-xs font-mono font-bold uppercase tracking-wider mb-5">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>COMING SOON</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
          DoVoix{' '}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,#999998,#ffffff)]">
            FilmHouse.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-[#999998] font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
          The premier commercial creative arm of DoVoix. We produce films, commercials, and brand storytelling for clients who want to be remembered. Our dedicated portal is currently in production.
        </p>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full max-w-2xl mb-10 text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#111111] border border-[#3a3938] hover:border-white/40 transition-colors">
            <Clapperboard className="w-5 h-5 text-white mb-2" />
            <h3 className="font-display text-xs sm:text-sm font-bold text-white mb-1">Commercial Films</h3>
            <p className="text-[11px] font-mono text-[#999998]">High-end cinematic adverts and brand documentaries.</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#111111] border border-[#3a3938] hover:border-white/40 transition-colors">
            <Video className="w-5 h-5 text-white mb-2" />
            <h3 className="font-display text-xs sm:text-sm font-bold text-white mb-1">Creative Direction</h3>
            <p className="text-[11px] font-mono text-[#999998]">Narrative strategy, screenwriting, and post-production.</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#111111] border border-[#3a3938] hover:border-white/40 transition-colors">
            <Award className="w-5 h-5 text-white mb-2" />
            <h3 className="font-display text-xs sm:text-sm font-bold text-white mb-1">Direct Bookings</h3>
            <p className="text-[11px] font-mono text-[#999998]">Dedicated client rate cards and studio reservations.</p>
          </div>
        </div>

        {/* Early Access / Notification Form */}
        <div className="w-full max-w-md bg-[#111111] border border-[#3a3938] p-6 sm:p-8 rounded-3xl shadow-xl">
          {subscribed ? (
            <div className="py-4 text-center flex flex-col items-center animate-fade-in">
              <CheckCircle2 className="w-10 h-10 text-white mb-3" />
              <h3 className="font-display text-lg font-bold text-white mb-1">You're on the VIP list</h3>
              <p className="text-xs text-[#999998]">We will notify you immediately when FilmHouse premieres.</p>
            </div>
          ) : (
            <div>
              <h3 className="font-display text-sm sm:text-base font-bold text-white mb-1.5">
                Get Notified at Launch
              </h3>
              <p className="text-xs text-[#999998] mb-4">
                Be the first to access our reel showcase, client rate cards, and production bookings.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#999998]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#000000] border border-[#3a3938] text-white placeholder-[#999998]/60 text-xs sm:text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl bg-white hover:bg-slate-200 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2"
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>Notify Me at Premiere</span>
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Direct Contact Option */}
        <div className="mt-8 text-xs text-[#999998]">
          Have an urgent production inquiry?{' '}
          <Link href="/contact" className="text-white underline underline-offset-4 hover:text-[#999998] font-medium">
            Contact our production desk directly
          </Link>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#3a3938]/40 py-6 text-center text-xs font-mono text-[#999998]">
        <p>© {new Date().getFullYear()} DoVoix FilmHouse. All rights reserved.</p>
      </footer>
    </div>
  );
}
