'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: string[];
  bullets?: string[];
  closingText?: string;
  category: 'About DoVoix' | 'DoVoix Foundation' | 'DoVoix FilmHouse';
}

const faqData: FAQItem[] = [
  // About DoVoix
  {
    id: 1,
    category: 'About DoVoix',
    question: 'What exactly is DoVoix Firm?',
    answer: [
      'DoVoix Firm is a socio-entertainment organisation where creativity meets purpose. We combine media, storytelling, talent, and humanitarian service to help brands tell better stories while creating opportunities and meaningful impact for young people.',
      'DoVoix operates through two main arms: DoVoix FilmHouse, our commercial creative arm, and DoVoix Foundation, our social impact arm.'
    ]
  },
  {
    id: 2,
    category: 'About DoVoix',
    question: 'What is the difference between DoVoix Firm, DoVoix FilmHouse, and DoVoix Foundation?',
    answer: [
      'Think of DoVoix Firm as the parent organisation, while FilmHouse and Foundation are its two operational arms.',
      'DoVoix FilmHouse focuses on commercial creative work, helping brands and organisations communicate their stories through film, media, and creative talent.',
      'DoVoix Foundation focuses on social impact, particularly helping young people gain practical digital skills that can create income opportunities and support their education.',
      'Together, both arms operate under one identity and one larger purpose: using creativity to create opportunities and impact.'
    ]
  },
  {
    id: 3,
    category: 'About DoVoix',
    question: 'Who can work with DoVoix?',
    answer: [
      'DoVoix works with brands, organisations, institutions, individuals, creatives, and partners who believe in the power of creativity and purposeful storytelling.',
      'Whether you need creative production, brand storytelling, talent, partnerships, or want to support our social impact work, there is a place for you within the DoVoix ecosystem.'
    ]
  },

  // DoVoix Foundation
  {
    id: 4,
    category: 'DoVoix Foundation',
    question: 'What exactly is DoVoix Foundation?',
    answer: [
      'DoVoix Foundation is the social impact arm of DoVoix Firm, created to help young people gain practical digital skills that can become sources of income.',
      'We focus on skills such as graphic design, photography, and videography, particularly for young people and students in underserved communities and schools.',
      'The goal is not simply to teach a skill. It is to help young people turn skills into opportunities, earn money, and use that income to support their education and personal development.'
    ]
  },
  {
    id: 5,
    category: 'DoVoix Foundation',
    question: 'Who does DoVoix Foundation help?',
    answer: [
      'Our primary focus is young people and students, especially those in underserved communities and schools who may have limited access to practical digital skills and opportunities.',
      'We work with young people who want to learn, create, earn, and build a better future with the skills they acquire.'
    ]
  },
  {
    id: 6,
    category: 'DoVoix Foundation',
    question: 'What skills does DoVoix Foundation teach?',
    answer: [
      'Our training focuses on practical, monetizable digital and creative skills, including:'
    ],
    bullets: [
      'Graphic design',
      'Photography',
      'Videography'
    ],
    closingText: 'As the Foundation grows, we also intend to expand into other relevant digital skills that can create meaningful economic opportunities for young people.'
  },
  {
    id: 7,
    category: 'DoVoix Foundation',
    question: 'What is the Bag A Child Initiative?',
    answer: [
      'Bag A Child Initiative is one of DoVoix Foundation’s education-focused initiatives, created to support students who need assistance with basic school supplies.',
      'Beyond providing materials, the initiative reflects our broader belief that young people should have the resources and opportunities they need to stay focused on their education and pursue their potential.'
    ]
  },
  {
    id: 8,
    category: 'DoVoix Foundation',
    question: 'What happens after a young person completes your training?',
    answer: [
      'Completing the training is not meant to be the end of the journey.',
      'We want participants to be able to apply what they have learned, build a portfolio, find opportunities, and eventually monetize their skills.',
      'As the Foundation grows, we also aim to create stronger pathways through mentorship, community, partnerships, and opportunities that can help trained young people move from learning to earning.'
    ]
  },
  {
    id: 9,
    category: 'DoVoix Foundation',
    question: 'What if I want to support the mission but I’m not sure where I fit?',
    answer: [
      'There are many ways to contribute to the DoVoix mission.',
      'You can volunteer your time or skills, mentor a young person, support our initiatives, partner with the Foundation, provide resources, sponsor a programme, or help us reach more communities.',
      'You don’t have to figure everything out before reaching out. Tell us what you have to offer, and we’ll find where it can make the most impact.'
    ]
  },

  // DoVoix FilmHouse
  {
    id: 10,
    category: 'DoVoix FilmHouse',
    question: 'What exactly is DoVoix FilmHouse?',
    answer: [
      'DoVoix FilmHouse is the commercial creative arm of DoVoix Firm.',
      'It was created to help brands and organisations tell meaningful stories through film, media, and creative talent, while contributing to the larger DoVoix mission.'
    ]
  },
  {
    id: 11,
    category: 'DoVoix FilmHouse',
    question: 'What does DoVoix FilmHouse do?',
    answer: [
      'FilmHouse helps brands and organisations turn their ideas, experiences, and messages into compelling stories.',
      'Our work spans brand storytelling, documentaries, commercials, media production, PR-related creative content, and talent management.',
      'We also connect registered creative talents with brands and organisations that need their skills.'
    ]
  },
  {
    id: 12,
    category: 'DoVoix FilmHouse',
    question: 'What kind of creative work does DoVoix FilmHouse produce?',
    answer: [
      'Our creative work includes:'
    ],
    bullets: [
      'Brand stories',
      'Documentaries',
      'Commercials',
      'Short-form video content',
      'Social media content',
      'Interviews and visual storytelling',
      'Event and organisational coverage',
      'Creative campaigns',
      'Talent-led productions'
    ],
    closingText: 'At the heart of it all is a simple belief: everyone has a story, but not everyone knows how to tell it. FilmHouse exists to help tell those stories well.'
  }
];

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const categories = ['All', 'About DoVoix', 'DoVoix Foundation', 'DoVoix FilmHouse'];

  const filteredFaqs = activeCategory === 'All'
    ? faqData
    : faqData.filter((item) => item.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a] text-white relative overflow-hidden border-b border-[#3a3938]/40 selection:bg-white selection:text-black">

      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#999998]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#3a3938]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#99999812_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-reveal">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#141414] border border-[#3a3938] text-white text-sm sm:text-base font-mono font-extrabold uppercase tracking-wider shadow-md">
            <HelpCircle className="w-4 h-4 text-white" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar scroll-smooth px-1 py-1 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center mb-8 sm:mb-10 w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 border shrink-0 whitespace-nowrap ${activeCategory === cat
                  ? 'bg-white text-black border-white shadow-lg scale-105 font-bold'
                  : 'bg-[#141414] text-[#999998] border-[#3a3938] hover:text-white hover:border-white/40'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List with Framer Motion */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const displayNum = faq.id < 10 ? `0${faq.id}` : `${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'bg-[#141414] border-white/50 shadow-xl'
                    : 'bg-[#141414]/70 border-[#3a3938]/80 hover:border-[#999998]'
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-white text-black border-white' : 'bg-[#262626] border-[#3a3938] text-[#999998]'
                      }`}>
                      {displayNum}
                    </span>
                    <span className="font-display text-sm sm:text-base lg:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                        ? 'rotate-180 bg-white text-black border-white shadow-md'
                        : 'bg-[#262626] border-[#3a3938] text-white hover:bg-[#333333]'
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[#3a3938]/30">
                        <div className="text-xs sm:text-sm text-[#cccccc] font-normal leading-relaxed pl-10 sm:pl-12 space-y-3 pt-3">
                          {faq.answer.map((para, pIdx) => (
                            <p key={pIdx}>{para}</p>
                          ))}

                          {faq.bullets && faq.bullets.length > 0 && (
                            <ul className="space-y-1.5 my-2 pl-4 list-disc marker:text-white">
                              {faq.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="text-white">
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          )}

                          {faq.closingText && (
                            <p className="pt-1 text-[#999998]">{faq.closingText}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
