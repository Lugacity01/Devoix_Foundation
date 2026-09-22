'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && firstName.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-800/90 border border-slate-700/80 text-center">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Stay connected with DoVoix Foundation
          </h2>

          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Subscribe to receive periodic impact reports, student cohort announcements, and updates on community projects.
          </p>

          {submitted ? (
            <div className="p-4 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-300 flex items-center justify-center gap-2 text-sm font-semibold">
              <CheckCircle className="w-5 h-5" />
              <span>Thank you for subscribing, {firstName}! You are now connected with DoVoix Foundation.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-sm font-semibold transition-all whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
