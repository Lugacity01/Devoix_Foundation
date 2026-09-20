'use client';

import React, { useState, useEffect } from 'react';
import { Mail, X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed or closed the modal in this session
    const isSubscribed = localStorage.getItem('dovoix_newsletter_subscribed');
    const isClosed = sessionStorage.getItem('dovoix_newsletter_dismissed');

    if (!isSubscribed && !isClosed) {
      // Trigger popup after a smooth 2-second delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('dovoix_newsletter_dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      localStorage.setItem('dovoix_newsletter_subscribed', 'true');

      // Auto close after 3 seconds on success
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in selection:bg-white selection:text-black"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-modal-title"
    >
      {/* Click outside to dismiss backdrop */}
      <div
        className="absolute inset-0"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0a0a0a] text-white border-2 border-[#3a3938] shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10 z-10 animate-scale-in">

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#999998]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3a3938]/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close newsletter popup"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-[#999998] hover:text-white border border-[#3a3938] transition-all hover:scale-105 active:scale-95"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {submitted ? (
          <div className="py-6 sm:py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 text-white border border-white/20 flex items-center justify-center mb-5 animate-bounce-subtle">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Welcome to the Inner Circle.
            </h3>

            <p className="text-xs sm:text-sm text-[#999998] font-normal max-w-xs mx-auto leading-relaxed mb-6">
              You are now subscribed to the official DoVoix Dispatch. Watch your inbox for our latest stories and opportunities.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Headline */}
            <h2
              id="newsletter-modal-title"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3"
            >
              Stay Ahead of the{' '}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,#999998,#ffffff)]">
                Movement.
              </span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#999998] font-normal leading-relaxed mb-6 sm:mb-8">
              Join brand leaders, creators, and changemakers across Africa. Receive exclusive updates on FilmHouse premieres, Foundation workshops, and creative opportunities.
            </p>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#999998]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#141414] border border-[#3a3938] text-white placeholder-[#999998]/60 text-xs sm:text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full group relative overflow-hidden py-3.5 px-6 rounded-xl bg-white hover:bg-slate-200 text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Subscribe to Dispatch</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#3a3938]/50 text-[10px] sm:text-[11px] font-mono text-[#999998]">
              <span>🔒 Zero spam. Unsubscribe anytime.</span>
              <button
                type="button"
                onClick={handleClose}
                className="text-[#999998] hover:text-white underline transition-colors"
              >
                Maybe later
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
