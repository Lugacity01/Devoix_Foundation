'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NIGERIAN_STATES } from '@/data/nigerianStates';
import { programsData } from '@/data/programsData';
import { StudentRegistrationInput } from '@/types';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StudentRegisterPage() {
  const [formData, setFormData] = useState<StudentRegistrationInput>({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    gender: 'Male',
    stateOfResidence: 'Lagos',
    lga: '',
    programOfInterest: 'Technology',
    projectCohort: 'Cohort 2026-A',
    howHeard: 'Social Media',
    personalStatement: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const selectedStateObj = NIGERIAN_STATES.find((s) => s.name === formData.stateOfResidence);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-16 sm:pt-32 sm:pb-24 bg-slate-50 min-h-screen selection:bg-purple-600 selection:text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-purple-600 mb-2 block">
            STUDENT INTAKE REGISTRATION
          </span>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4">
            Register for Dovoix Foundation Programs
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 max-w-xl mx-auto">
            Take the first step toward acquiring high-demand skills in design, video production, writing, and technology. No tuition fees required.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm text-center space-y-4 sm:space-y-6"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Application received.
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm lg:text-base max-w-lg mx-auto leading-relaxed">
              Thank you for registering your interest with Dovoix Foundation. Your submission has been logged into our intake portal and our admissions team will be in touch via WhatsApp / Email.
            </p>

            <div className="pt-4 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#080312] text-white text-xs font-mono font-bold uppercase tracking-wider border border-purple-500/30 hover:bg-purple-950 transition-colors"
              >
                Explore Active Projects
              </Link>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Section 1: About You */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-slate-100">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center font-bold text-xs sm:text-sm">
                  1
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">About You</h3>
              </div>

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
                    placeholder="e.g. Olayinka Chukwu"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
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
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                    Phone Number <span className="text-purple-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 801 234 5678"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 mb-1"
                  />
                  <span className="text-[10px] sm:text-[11px] text-purple-700 font-mono font-semibold block">WhatsApp number preferred</span>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                    Age <span className="text-purple-600">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="15"
                    max="45"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 21"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                    Gender <span className="text-purple-600">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {['Male', 'Female', 'Prefer not to say'].map((gen) => (
                      <label key={gen} className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          value={gen}
                          checked={formData.gender === gen}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="text-purple-600 focus:ring-purple-500"
                        />
                        <span>{gen}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Where You're From */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-slate-100">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center font-bold text-xs sm:text-sm">
                  2
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">Where You're From</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                    State of Residence <span className="text-purple-600">*</span>
                  </label>
                  <select
                    value={formData.stateOfResidence}
                    onChange={(e) => setFormData({ ...formData, stateOfResidence: e.target.value, lga: '' })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  >
                    {NIGERIAN_STATES.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name} State
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                    Local Government Area (Optional)
                  </label>
                  <select
                    value={formData.lga}
                    onChange={(e) => setFormData({ ...formData, lga: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  >
                    <option value="">Select LGA (Optional)</option>
                    {selectedStateObj?.lgas.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Your Interest */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-slate-100">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center font-bold text-xs sm:text-sm">
                  3
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">Your Interest</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                    Program of Interest <span className="text-purple-600">*</span>
                  </label>
                  <select
                    value={formData.programOfInterest}
                    onChange={(e) => setFormData({ ...formData, programOfInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  >
                    {programsData.map((prog) => (
                      <option key={prog.id} value={prog.name}>
                        {prog.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                    Project / Cohort <span className="text-purple-600">*</span>
                  </label>
                  <select
                    value={formData.projectCohort}
                    onChange={(e) => setFormData({ ...formData, projectCohort: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  >
                    <option value="Cohort 2026-A">Cohort 2026-A (Q1/Q2)</option>
                    <option value="Cohort 2026-B">Cohort 2026-B (Q3/Q4)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 4: Tell Us More */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-slate-100">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center font-bold text-xs sm:text-sm">
                  4
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">Tell Us More</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    value={formData.howHeard}
                    onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  >
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral / Friend</option>
                    <option value="Event">Community Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                      Brief Personal Statement (Optional)
                    </label>
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">Max 300 chars</span>
                  </div>
                  <textarea
                    rows={3}
                    maxLength={300}
                    value={formData.personalStatement}
                    onChange={(e) => setFormData({ ...formData, personalStatement: e.target.value })}
                    placeholder="Why do you want to join?"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Form Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-mono text-xs font-bold uppercase tracking-wider border border-purple-400/50 shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
