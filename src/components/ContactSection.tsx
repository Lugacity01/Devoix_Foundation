'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Instagram, Linkedin, Twitter } from 'lucide-react';

export const ContactSection: React.FC = () => {
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
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200 selection:bg-purple-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#000000] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider mb-4 shadow-md">
            <Mail className="w-4 h-4 text-white" />
            <span>GENERAL ENQUIRIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Work With Us.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal mt-3">
            Get in touch with the DoVoix parent team for partnerships, press coverage, or general enquiries.
          </p>
        </div>

        {/* Contact Grid: Details on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials (Span 5) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200 ">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
              Direct Contact Details
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">EMAIL US</div>
                  <a href="mailto:dovoixfirm@gmail.com" className="text-sm font-semibold text-slate-900 hover:text-purple-600 transition-colors">
                    dovoixfirm@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">PHONE & WHATSAPP</div>
                  <a href="tel:+2348125615709" className="text-sm font-semibold text-slate-900 hover:text-purple-600 transition-colors block">
                    +234 (0) 812 561 5709
                  </a>
                  <a href="https://wa.me/2348125615709" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600 hover:underline mt-0.5 font-mono inline-block">
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">HEADQUARTERS</div>
                  <p className="text-sm font-semibold text-slate-900">
                    Ibadan, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-slate-100">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-3">
                CONNECT ON SOCIAL MEDIA
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://www.instagram.com/dovoix_?stkn=MXByOWR2azZxbHlvdQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DoVoix Instagram"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-purple-600 border border-slate-200 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dovoix-foundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DoVoix LinkedIn"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-purple-600 border border-slate-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@dovoix.foundation?_r=1&_t=ZS-99w6osswkSt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DoVoix TikTok"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-purple-600 border border-slate-200 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43V10.7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-2.13z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/2348125615709"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DoVoix WhatsApp"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-purple-600 border border-slate-200 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.71 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: General Enquiry Form (Span 7) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 ">
            
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you for reaching out to DoVoix. Our team will review your enquiry and get back to you within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', email: '', subject: 'Partnership', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase tracking-wider border border-slate-200 hover:bg-slate-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                  Send Us a Direct Message
                </h3>

                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                  />
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                  >
                    <option value="Partnership">Partnership</option>
                    <option value="Press">Press / Media</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can DoVoix collaborate with you?"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs font-mono uppercase tracking-wider border border-purple-400/50 transition-all "
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
