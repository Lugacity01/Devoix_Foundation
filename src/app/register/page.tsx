'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NIGERIAN_STATES } from '@/data/nigerianStates';
import { programsData } from '@/data/programsData';
import { StudentRegistrationInput } from '@/types';
import { CheckCircle2, User, MapPin, Sparkles, FileText, ArrowRight, ArrowLeft } from 'lucide-react';
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
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal mb-2 block">
            STUDENT INTAKE REGISTRATION
          </span>
          <h1 className="font-display text-4xl font-extrabold text-brand-dark tracking-tight mb-4">
            Register for Dovoix Foundation Programs
          </h1>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Take the first step toward acquiring high-demand skills in design, video production, writing, and technology. No tuition fees required.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl text-center space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Application received.
            </h2>

            <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
              Thank you for registering your interest with Dovoix Foundation. Your submission has been logged into our intake portal and our admissions team will be in touch via WhatsApp / Email.
            </p>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-navy text-white text-sm font-semibold shadow hover:bg-slate-900 transition-colors"
              >
                Explore Active Projects
              </Link>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: About You */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="font-display text-lg font-bold text-brand-dark">About You</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Olayinka Chukwu"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 801 234 5678"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal mb-1"
                  />
                  <span className="text-[11px] text-teal-600 font-semibold block">WhatsApp number preferred</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Age <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="15"
                    max="45"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 21"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Gender <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    {['Male', 'Female', 'Prefer not to say'].map((gen) => (
                      <label key={gen} className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          value={gen}
                          checked={formData.gender === gen}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="text-brand-teal focus:ring-brand-teal"
                        />
                        <span>{gen}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Where You're From */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="font-display text-lg font-bold text-brand-dark">Where You're From</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    State of Residence <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.stateOfResidence}
                    onChange={(e) => setFormData({ ...formData, stateOfResidence: e.target.value, lga: '' })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                  >
                    {NIGERIAN_STATES.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name} State
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Local Government Area (Optional)
                  </label>
                  <select
                    value={formData.lga}
                    onChange={(e) => setFormData({ ...formData, lga: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
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
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h3 className="font-display text-lg font-bold text-brand-dark">Your Interest</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Program of Interest <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.programOfInterest}
                    onChange={(e) => setFormData({ ...formData, programOfInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                  >
                    {programsData.map((prog) => (
                      <option key={prog.id} value={prog.name}>
                        {prog.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Project / Cohort <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.projectCohort}
                    onChange={(e) => setFormData({ ...formData, projectCohort: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                  >
                    <option value="Cohort 2026-A">Cohort 2026-A (Q1/Q2)</option>
                    <option value="Cohort 2026-B">Cohort 2026-B (Q3/Q4)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 4: Tell Us More */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <h3 className="font-display text-lg font-bold text-brand-dark">Tell Us More</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    value={formData.howHeard}
                    onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                  >
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral / Friend</option>
                    <option value="Event">Community Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase">
                      Brief Personal Statement (Optional)
                    </label>
                    <span className="text-[11px] text-slate-400">Max 300 chars</span>
                  </div>
                  <textarea
                    rows={3}
                    maxLength={300}
                    value={formData.personalStatement}
                    onChange={(e) => setFormData({ ...formData, personalStatement: e.target.value })}
                    placeholder="Why do you want to join?"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                  />
                </div>
              </div>
            </div>

            {/* Form Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-brand-navy hover:bg-slate-900 text-white font-display text-base font-bold shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Application</span>
              <ArrowRight className="w-5 h-5 text-brand-teal" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
