'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, CheckCircle2, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'Partnership',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-28 pb-16 sm:pt-32 sm:pb-24 bg-slate-50 min-h-screen selection:bg-purple-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-purple-600 mb-2 block">
            GET IN TOUCH // GENERAL ENQUIRIES
          </span>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4">
            Contact Dovoix.
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600">
            Have questions about partnerships, brand campaigns, media features, or social impact programs? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Channels (Span 5) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 space-y-5 sm:space-y-6">
              <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 pb-3 sm:pb-4 border-b border-slate-100">
                Direct Channels
              </h2>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Email Enquiries</h3>
                  <a href="mailto:contact@dovoix.com" className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-purple-600 transition-colors">
                    contact@dovoix.com
                  </a>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-mono">Response within 24-48 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">HQ Phone & WhatsApp</h3>
                  <a href="tel:+2348000000000" className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-purple-600 transition-colors">
                    +234 (0) 800 DOVOIX HQ
                  </a>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-mono">Mon - Fri (9:00 AM - 5:00 PM WAT)</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Headquarters</h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">Lagos, Nigeria</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-mono">Operations across West Africa</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 sm:pt-4 border-t border-slate-100">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2.5 sm:mb-3">
                  CONNECT ON SOCIAL MEDIA
                </span>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dovoix Instagram"
                    className="p-2 sm:p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-purple-600 border border-slate-200 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dovoix LinkedIn"
                    className="p-2 sm:p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-purple-600 border border-slate-200 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dovoix Twitter"
                    className="p-2 sm:p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-purple-600 border border-slate-200 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Student Registration Callout */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-purple-50/70 border border-purple-200">
              <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 mb-1">Looking to register as a student?</h3>
              <p className="text-xs text-slate-600 mb-3 sm:mb-4">Please use our dedicated student intake form instead of general enquiries.</p>
              <Link href="/register" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-700 hover:underline">
                <span>Go to Student Registration →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Enquiry Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-100">
                Send an Enquiry
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 sm:py-12 text-center space-y-3 sm:space-y-4"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-4 sm:mb-6">
                    Thank you for reaching out to Dovoix. Our team will review your enquiry and get back to you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', subject: 'Partnership', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase tracking-wider border border-slate-200 hover:bg-slate-200"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                        Full Name <span className="text-purple-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                        Email Address <span className="text-purple-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                      Subject <span className="text-purple-600">*</span>
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                    >
                      <option value="Partnership">Partnership</option>
                      <option value="Press">Press / Media</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                      Your Message <span className="text-purple-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can Dovoix collaborate with you?"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-mono text-xs font-bold uppercase tracking-wider border border-purple-400/50 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
