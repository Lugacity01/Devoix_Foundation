import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export const ImpactSummary: React.FC = () => {
  const impactStats = [
    { number: '200+', label: 'Lives Impacted', subtext: 'Young creators and students empowered' },
    { number: '15+', label: 'Projects Executed', subtext: 'Completed commercial & community initiatives' },
    { number: '100+', label: 'Members', subtext: 'Active community creators & learners' },
    { number: '9', label: 'States Covered', subtext: 'Geographic footprint across Nigeria' },
    { number: '2', label: 'Countries', subtext: 'International operational reach' },
  ];

  return (
    <section id="impact" className="py-16 sm:py-20 lg:py-24 bg-[#fafafa] text-slate-900 relative overflow-hidden border-b border-[#e5e5e5] selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-reveal">
        
        {/* Section Header */}
        <div className="pb-6 sm:pb-8 mb-8 sm:mb-12 border-b border-[#e5e5e5]">
          <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#000000] mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#000000] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#000000]" />
            </span>
            <span>COMBINED IMPACT SUMMARY</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl font-extrabold text-[#000000] tracking-tight">
            Combined{' '}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#000000,#3a3938,#000000)] animate-text-gradient bg-[length:200%_auto]">
              Scale & Momentum.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] font-normal mt-1 sm:mt-2">
            Measuring the aggregate reach of DoVoix FilmHouse and DoVoix Foundation across Africa.
          </p>
        </div>

        {/* 5 Impact Statistics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-10 sm:mb-14">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl bg-white border border-[#e5e5e5] hover:border-black/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group ${
                idx === 4 ? 'col-span-2 sm:col-span-1 max-w-xs sm:max-w-none mx-auto sm:mx-0 w-full' : ''
              }`}
            >
              <div className="font-display text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-black text-[#000000] group-hover:text-[#3a3938] group-hover:scale-105 transition-all mb-1.5 sm:mb-2 origin-center text-center">
                {stat.number}
              </div>

              <div className="font-display text-xs sm:text-sm font-bold text-[#3a3938] mb-1 group-hover:text-[#000000] transition-colors text-center">
                {stat.label}
              </div>

              <div className="text-[10px] sm:text-[11px] font-mono text-[#999998] leading-tight text-center">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Visual & Founder Pull Quote */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#000000] text-white border-2 border-[#3a3938] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group">
          
          {/* Left Column: Co-Founder Pull Quote (Span 7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative z-10">
            <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-white/40 mb-3 sm:mb-4 group-hover:text-white/70 transition-colors" />

            <div className="font-display text-xs sm:text-sm text-white/85 leading-relaxed mb-5 sm:mb-6 space-y-2.5 sm:space-y-3">
              <p className="font-semibold text-white text-sm sm:text-base">
                On December 6th, 2025, the idea of DoVoix finally became a reality.
              </p>
              <p>
                But before then, DoVoix felt like a mirage; just questions, ideas, and possibilities that might never find their way into reality.
              </p>
              <p>
                Brick by brick, what started as a one-man idea became a community of inspired members and volunteers. We’ve grown beyond what I imagined, and that gives me joy, not simply because of our size, but because of what so many people can gain from coming in contact with DoVoix.
              </p>
              <p>
                From students in local communities, to creatives looking for an opportunity to shine, and brands whose stories are yet to be told, there is a reason we exist.
              </p>
              <p>
                Lastly, to every founder out there trying to show the world what they’re building, I’ll leave you with this:
              </p>
              <p className="font-semibold text-white italic border-l-2 border-white/60 pl-3 py-1 text-xs sm:text-sm">
                “It won’t make sense to the whole world until you make it make sense.”
              </p>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-[#3a3938]/60 flex items-center gap-3.5">
              <img
                src="/assets/team/donald-mojekwu.jpg"
                alt="Donald Mojekwu"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover object-center border-2 border-white/80 shrink-0 group-hover:scale-105 transition-transform shadow-md"
              />
              <div>
                <div className="font-display text-xs sm:text-sm font-bold text-white">Donald Mojekwu</div>
                <div className="text-[11px] font-mono text-[#999998]">Co-Founder & CEO, DoVoix</div>
              </div>
            </div>
          </div>

          {/* Right Column: Community & Storytelling Visual (Span 5) */}
          <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[auto] bg-[#141414] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              alt="DoVoix Community and Creative Journey"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-4 sm:p-5 rounded-xl bg-black/90 border border-[#3a3938] backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono font-bold text-white uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>DECEMBER 6, 2025 · THE JOURNEY</span>
              </div>
              <div className="text-xs sm:text-sm text-white font-bold mb-0.5">
                From a One-Man Vision to a Thriving Community
              </div>
              <p className="text-[11px] sm:text-xs text-[#999998] font-medium leading-snug">
                Empowering students in local communities, elevating creative talent, and telling stories that truly matter.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
