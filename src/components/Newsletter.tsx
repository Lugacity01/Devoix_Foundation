'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-800/90 border border-slate-700/80 shadow-2xl text-center">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Stay connected with Dovoix Foundation
          </h2>

          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Subscribe to receive periodic impact reports, student cohort announcements, and updates on community projects.
          </p>

          {submitted ? (
            <div className="p-4 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-300 flex items-center justify-center gap-2 text-sm font-semibold">
              <CheckCircle className="w-5 h-5" />
              <span>Thank you for subscribing! You are now connected with Dovoix Foundation.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-sm font-semibold shadow transition-all whitespace-nowrap"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
