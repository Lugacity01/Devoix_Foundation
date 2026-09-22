'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NIGERIAN_STATES } from '@/data/nigerianStates';
import { CampusChapterRegistrationInput } from '@/types';
import { CheckCircle2, ArrowRight, Sparkles, AlertCircle, Users, Map, X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CampusRegisterPage() {
  const [formData, setFormData] = useState<CampusChapterRegistrationInput>({
    leadFullName: '',
    leadEmail: '',
    leadPhone: '',
    leadRole: 'Team Lead',
    campus: 'UI',
    institutionName: '',
    state: 'Oyo',
    lga: '',
    totalMembers: '10',
    activeMembers: '10',
    teamLeadsDetails: '',
    hasOrganisedActivities: 'No',
    previousActivities: '',
    whyRegister: '',
    hopeToAchieve: '',
    skillsToContribute: '',
    mobilisationPlan: '',
    willingToOrganiseActivity: 'Yes',
    estimatedReach: '100 - 300 students',
    existingPartnerships: '',
    additionalNotes: '',
    confirmedAccuracy: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [showVisualModal, setShowVisualModal] = useState(false);
  const [modalTab, setModalTab] = useState<'map' | 'leads'>('map');

  const registeredCampuses = [
    { code: 'UI', name: 'University of Ibadan', state: 'Oyo State' },
    { code: 'UNILAG', name: 'University of Lagos', state: 'Lagos State' },
    { code: 'UNILORIN', name: 'University of Ilorin', state: 'Kwara State' },
    { code: 'UNIPORT', name: 'University of Port Harcourt', state: 'Rivers State' },
    { code: 'LUTH', name: 'Lagos University Teaching Hospital', state: 'Lagos State' },
    { code: 'UNN', name: 'University of Nigeria, Nsukka', state: 'Enugu State' },
    { code: 'UB', name: 'University of Buea', state: 'Buea, Cameroon' },
    { code: 'ESUT', name: 'Enugu State University of Science & Tech', state: 'Enugu State' },
    { code: 'ABU ZARIA', name: 'Ahmadu Bello University, Zaria', state: 'Kaduna State' },
  ];

  const openVisualPopup = (tab: 'map' | 'leads') => {
    setModalTab(tab);
    setShowVisualModal(true);
  };

  const selectedStateObj = NIGERIAN_STATES.find((s) => s.name === formData.state);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirmedAccuracy) {
      alert('Please confirm that the information provided is accurate and your team has at least 10 active members.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-16 sm:pt-32 sm:pb-24 bg-[#06020e] min-h-screen text-white relative overflow-hidden selection:bg-purple-600 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1000px] h-[500px] bg-purple-900/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 text-base sm:text-lg lg:text-xl font-mono font-extrabold tracking-[0.25em] uppercase text-purple-400 mb-4 sm:mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500 shadow-[0_0_12px_#a855f7]" />
            </span>
            <span>CAMPUS REGISTRATION</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
            Register for DoVoix Foundation Programs
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-300 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Join your university campus chapter. Equipping young people across Nigeria and Africa with high-income creative, digital, and media skills.
          </p>

          {/* Interactive Pop-up Triggers */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => openVisualPopup('map')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-purple-900/40 hover:bg-purple-800/60 text-purple-200 border border-purple-500/40 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105 group"
            >
              <Map className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
              <span>View Interstate Network Map</span>
            </button>

            <button
              type="button"
              onClick={() => openVisualPopup('leads')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-purple-900/40 hover:bg-purple-800/60 text-purple-200 border border-purple-500/40 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105 group"
            >
              <Users className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>Meet Campus Chapter Leads</span>
            </button>
          </div>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto rounded-2xl sm:rounded-3xl bg-[#0c051f]/90 backdrop-blur-xl border border-purple-900/50 p-6 sm:p-10 lg:p-12 text-center space-y-4 sm:space-y-6 shadow-2xl"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Campus Chapter Application Received
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm lg:text-base max-w-lg mx-auto leading-relaxed">
              Thank you for registering your campus with DoVoix Foundation. Your team submission has been logged into our expansion portal and our campus chapter team will reach out via WhatsApp / Email to begin onboarding.
            </p>

            <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 text-white text-xs font-mono font-bold uppercase tracking-wider border border-purple-400/30 hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30"
              >
                Explore Active Projects
              </Link>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 text-slate-200 text-xs font-mono font-bold uppercase tracking-wider hover:bg-white/20 transition-colors border border-white/10"
              >
                Submit Another Application
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
            
            {/* Before You Register Alert Box */}
            <div className="rounded-2xl sm:rounded-3xl bg-purple-950/40 border border-purple-500/30 p-4 sm:p-6 flex items-start gap-3.5 sm:gap-4 text-slate-300 shadow-xl backdrop-blur-md">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <span className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider text-purple-200 block mb-1">
                  Before you register:
                </span>
                To establish a DoVoix Foundation Campus Chapter, your team must have a minimum of <strong className="text-white underline decoration-purple-400 font-bold">10 active student members</strong> and at least one designated team lead/representative who will serve as the primary contact with DoVoix Foundation.
              </div>
            </div>

            {/* Form Component */}
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              
              {/* Section 1: Lead Representative Info */}
              <div className="rounded-2xl sm:rounded-3xl bg-[#0c051f]/80 backdrop-blur-xl border border-purple-900/40 p-5 sm:p-8 space-y-4 sm:space-y-6 shadow-xl">
                <div className="flex items-center gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-white/10">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-bold text-xs sm:text-sm">
                    1
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white">
                    Representative & Contact Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      Full Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.leadFullName}
                      onChange={(e) => setFormData({ ...formData, leadFullName: e.target.value })}
                      placeholder="e.g. Mojekwu Donald"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.leadEmail}
                      onChange={(e) => setFormData({ ...formData, leadEmail: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      Phone Number <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.leadPhone}
                      onChange={(e) => setFormData({ ...formData, leadPhone: e.target.value })}
                      placeholder="+234 812 561 5709"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all font-sans mb-1"
                    />
                    <span className="text-[10px] sm:text-[11px] text-purple-400 font-mono font-semibold block">WhatsApp number preferred</span>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      Role / Designation <span className="text-purple-400">*</span>
                    </label>
                    <select
                      value={formData.leadRole}
                      onChange={(e) => setFormData({ ...formData, leadRole: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#080214] border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm font-medium transition-all font-sans"
                    >
                      <option value="Team Lead" className="bg-[#0c051f] text-white">Team Lead</option>
                      <option value="Deputy Representative" className="bg-[#0c051f] text-white">Deputy Representative</option>
                      <option value="General Coordinator" className="bg-[#0c051f] text-white">General Coordinator</option>
                      <option value="Other" className="bg-[#0c051f] text-white">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Campus & Location */}
              <div className="rounded-2xl sm:rounded-3xl bg-[#0c051f]/80 backdrop-blur-xl border border-purple-900/40 p-5 sm:p-8 space-y-4 sm:space-y-6 shadow-xl">
                <div className="flex items-center gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-white/10">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-bold text-xs sm:text-sm">
                    2
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white">Campus & Location</h3>
                </div>

                {/* Registered Campus Quick Select */}
                <div>
                  <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Select Campus Chapter ({registeredCampuses.length})
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-2.5 mb-4">
                    {registeredCampuses.map((c) => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => setFormData({ ...formData, campus: c.code })}
                        className={`p-2 sm:p-2.5 rounded-xl border text-center transition-all ${
                          formData.campus === c.code
                            ? 'bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-600/30 scale-[1.02]'
                            : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border-white/10 hover:border-purple-500/40'
                        }`}
                      >
                        <div className="font-display font-black text-xs sm:text-sm">{c.code}</div>
                        <div className={`text-[9px] truncate font-mono ${formData.campus === c.code ? 'text-purple-100' : 'text-slate-400'}`}>
                          {c.state}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      Institution Campus <span className="text-purple-400">*</span>
                    </label>
                    <select
                      value={formData.campus}
                      onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#080214] border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm font-medium transition-all font-sans"
                    >
                      {registeredCampuses.map((c) => (
                        <option key={c.code} value={c.code} className="bg-[#0c051f] text-white">
                          {c.code} — {c.name} ({c.state})
                        </option>
                      ))}
                      <option value="Other" className="bg-[#0c051f] text-white">Other Campus / Secondary School</option>
                    </select>
                  </div>

                  {formData.campus === 'Other' && (
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                        Enter Institution / School Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.institutionName}
                        onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                        placeholder="e.g. Federal University of Technology, Akure"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all font-sans"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      State of Institution <span className="text-purple-400">*</span>
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value, lga: '' })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#080214] border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm font-sans"
                    >
                      {NIGERIAN_STATES.map((s) => (
                        <option key={s.name} value={s.name} className="bg-[#0c051f] text-white">
                          {s.name} State
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      Local Government Area (Optional)
                    </label>
                    <select
                      value={formData.lga}
                      onChange={(e) => setFormData({ ...formData, lga: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#080214] border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm font-sans"
                    >
                      <option value="" className="bg-[#0c051f] text-slate-400">Select LGA (Optional)</option>
                      {selectedStateObj?.lgas.map((lga) => (
                        <option key={lga} value={lga} className="bg-[#0c051f] text-white">
                          {lga}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Team Information */}
              <div className="rounded-2xl sm:rounded-3xl bg-[#0c051f]/80 backdrop-blur-xl border border-purple-900/40 p-5 sm:p-8 space-y-4 sm:space-y-6 shadow-xl">
                <div className="flex items-center gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-white/10">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-bold text-xs sm:text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white">
                      Team Information
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">
                      Minimum requirement: 10 members
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      How many members are currently in your team? <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      min="10"
                      value={formData.totalMembers}
                      onChange={(e) => setFormData({ ...formData, totalMembers: e.target.value })}
                      placeholder="10"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all font-sans"
                    />
                    <span className="text-[10px] text-purple-300/80 font-mono mt-1 block">
                      • Minimum requirement: 10 members
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      How many members are willing to actively participate? <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.activeMembers}
                      onChange={(e) => setFormData({ ...formData, activeMembers: e.target.value })}
                      placeholder="10"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all font-sans"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      Names & Contact Details of Team Lead & Deputy/Representative <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.teamLeadsDetails}
                      onChange={(e) => setFormData({ ...formData, teamLeadsDetails: e.target.value })}
                      placeholder="1. Lead Name: Mojekwu Donald (Phone: 08125615709, Email: donald@...)\n2. Deputy: Akindilureni Oluwaseun (Phone: 09026888679, Email: seun@...)"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all resize-none font-sans"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      Have you organised any activities on campus before? <span className="text-purple-400">*</span>
                    </label>
                    <div className="flex gap-6 mt-1">
                      {['Yes', 'No'].map((opt) => (
                        <label key={opt} className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-200 cursor-pointer">
                          <input
                            type="radio"
                            name="hasOrganisedActivities"
                            value={opt}
                            checked={formData.hasOrganisedActivities === opt}
                            onChange={(e) => setFormData({ ...formData, hasOrganisedActivities: e.target.value as 'Yes' | 'No' })}
                            className="accent-purple-600 focus:ring-purple-500"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Purpose & Commitment */}
              <div className="rounded-2xl sm:rounded-3xl bg-[#0c051f]/80 backdrop-blur-xl border border-purple-900/40 p-5 sm:p-8 space-y-4 sm:space-y-6 shadow-xl">
                <div className="flex items-center gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-white/10">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-bold text-xs sm:text-sm">
                    4
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white">
                    Purpose & Commitment
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      1. Why do you want to register your campus with DoVoix Foundation? <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={formData.whyRegister}
                      onChange={(e) => setFormData({ ...formData, whyRegister: e.target.value })}
                      placeholder="Tell us what inspired you to bring DoVoix to your campus..."
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all resize-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      2. What do you hope to achieve through the campus chapter? <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={formData.hopeToAchieve}
                      onChange={(e) => setFormData({ ...formData, hopeToAchieve: e.target.value })}
                      placeholder="Key milestones, impact on students, skills trained..."
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all resize-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      3. What skills, interests, or areas can your team contribute to DoVoix Foundation? <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={formData.skillsToContribute}
                      onChange={(e) => setFormData({ ...formData, skillsToContribute: e.target.value })}
                      placeholder="e.g. Media production, design, event logistics, coding, community outreach..."
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all resize-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      4. How do you plan to mobilise students for DoVoix programmes and initiatives? <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={formData.mobilisationPlan}
                      onChange={(e) => setFormData({ ...formData, mobilisationPlan: e.target.value })}
                      placeholder="Social media, student union channels, departmental broadcasts, physical outreach..."
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all resize-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      5. Are you willing to organise or support at least one DoVoix-related activity on your campus when required? <span className="text-purple-400">*</span>
                    </label>
                    <div className="flex gap-6 mt-1">
                      {['Yes', 'No'].map((opt) => (
                        <label key={opt} className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-200 cursor-pointer">
                          <input
                            type="radio"
                            name="willingToOrganiseActivity"
                            value={opt}
                            checked={formData.willingToOrganiseActivity === opt}
                            onChange={(e) => setFormData({ ...formData, willingToOrganiseActivity: e.target.value as 'Yes' | 'No' })}
                            className="accent-purple-600 focus:ring-purple-500"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Final Outreach & Confirmation */}
              <div className="rounded-2xl sm:rounded-3xl bg-[#0c051f]/80 backdrop-blur-xl border border-purple-900/40 p-5 sm:p-8 space-y-4 sm:space-y-6 shadow-xl">
                <div className="flex items-center gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-white/10">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-bold text-xs sm:text-sm">
                    5
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white">
                    Final Outreach & Confirmation
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      1. Approximately how many students can your team reach directly? <span className="text-purple-400">*</span>
                    </label>
                    <select
                      value={formData.estimatedReach}
                      onChange={(e) => setFormData({ ...formData, estimatedReach: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#080214] border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm font-sans"
                    >
                      <option value="50 - 100 students" className="bg-[#0c051f] text-white">50 - 100 students</option>
                      <option value="100 - 300 students" className="bg-[#0c051f] text-white">100 - 300 students</option>
                      <option value="300 - 500 students" className="bg-[#0c051f] text-white">300 - 500 students</option>
                      <option value="500 - 1,000 students" className="bg-[#0c051f] text-white">500 - 1,000 students</option>
                      <option value="1,000+ students" className="bg-[#0c051f] text-white">1,000+ students</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      2. Do you currently have partnerships with student organisations, departments, clubs, or associations on campus?
                    </label>
                    <textarea
                      rows={2}
                      value={formData.existingPartnerships}
                      onChange={(e) => setFormData({ ...formData, existingPartnerships: e.target.value })}
                      placeholder="List relevant clubs, student unions, faculty associations..."
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all resize-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      3. Is there anything else you would like us to know about your team?
                    </label>
                    <textarea
                      rows={2}
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      placeholder="Any additional background, questions, or ideas..."
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/50 border border-purple-900/40 hover:border-purple-600/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-xs sm:text-sm placeholder:text-slate-500 transition-all resize-none font-sans"
                    />
                  </div>

                  {/* Final Declaration Checkbox */}
                  <div className="pt-3 border-t border-white/10">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        required
                        checked={formData.confirmedAccuracy}
                        onChange={(e) => setFormData({ ...formData, confirmedAccuracy: e.target.checked })}
                        className="w-5 h-5 rounded bg-black/50 border-purple-500/50 text-purple-600 focus:ring-purple-500 mt-0.5 shrink-0 accent-purple-600"
                      />
                      <span className="text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors leading-relaxed font-medium">
                        I confirm that the information provided is accurate and that our team has at least 10 active members.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Form Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-xs font-bold uppercase tracking-wider border border-purple-400/40 shadow-xl shadow-purple-600/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Submit Campus Registration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Official Campus Graphics Pop-Up Modal */}
      <AnimatePresence>
        {showVisualModal && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setShowVisualModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-[#0c051f] rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-500/40 shadow-2xl p-4 sm:p-6 flex flex-col items-center max-h-[90vh]"
            >
              {/* Modal Header & Tabs */}
              <div className="flex items-center justify-between w-full pb-3 mb-3 border-b border-white/10 text-white gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => setModalTab('map')}
                    className={`px-3 py-1.5 rounded-xl font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all ${
                      modalTab === 'map'
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    1. Network Map
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalTab('leads')}
                    className={`px-3 py-1.5 rounded-xl font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all ${
                      modalTab === 'leads'
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    2. Campus Leads
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setShowVisualModal(false)}
                  className="p-1.5 sm:px-3 sm:py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono font-bold flex items-center gap-1 text-slate-200"
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">Close</span>
                </button>
              </div>

              {/* Graphic Stage */}
              <div className="relative w-full aspect-[3/4] max-h-[68vh] overflow-hidden rounded-xl sm:rounded-2xl bg-black/80 flex items-center justify-center border border-purple-900/40">
                <img
                  src={modalTab === 'map' ? '/assets/campus_reg_1.jpeg' : '/assets/campus_reg_2.jpeg'}
                  alt={modalTab === 'map' ? 'DoVoix Foundation Interstate Project Network Map' : 'Introducing DoVoix Campus Leads'}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Bottom Details & Nav */}
              <div className="mt-3.5 w-full flex items-center justify-between gap-3 text-xs font-mono">
                <div className="text-left truncate">
                  <div className="text-[10px] uppercase font-bold text-purple-400">
                    {modalTab === 'map' ? 'INTERSTATE NETWORK MAP' : 'CAMPUS CHAPTER LEADS'}
                  </div>
                  <div className="font-display text-xs text-white font-bold truncate">
                    {modalTab === 'map' ? '9 Campus Chapters · 1 Goal' : 'Meet Your Chapter Leadership'}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setModalTab(modalTab === 'map' ? 'leads' : 'map')}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>Next Image</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
