import React from 'react';

export const PartnersSection: React.FC = () => {
  const partnerLogos = [
    {
      id: 'passeduai',
      name: 'PassEduAI',
      src: '/assets/partners/passeduai.png',
    },
    {
      id: 'game-changer',
      name: 'The Game Changer Conference',
      src: '/assets/partners/The%20Game%20Changer%20Conference%20(2).png',
    },
    {
      id: 'partner-1',
      name: 'Partner Organization',
      src: '/assets/partners/1001234917.png',
    },
    {
      id: 'partner-2',
      name: 'Partner Organization',
      src: '/assets/partners/GeeArtboard%201%20copy%209.jpg',
    },
    {
      id: 'partner-3',
      name: 'Partner Organization',
      src: '/assets/partners/IMG_2798.JPG',
    },
    {
      id: 'partner-4',
      name: 'Partner Organization',
      src: '/assets/partners/IMG_2800.JPG',
    },
    {
      id: 'partner-5',
      name: 'Partner Organization',
      src: '/assets/partners/IMG_2801.PNG',
    },
  ];

  // Triplicate array for smooth infinite marquee without gaps
  const marqueeItems = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="py-14 sm:py-16 lg:py-20 bg-white text-slate-900 relative overflow-hidden border-b border-[#e5e5e5] selection:bg-[#000000] selection:text-white">
      
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#99999815_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-reveal">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#000000] mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#000000] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#000000]" />
            </span>
            <span>OUR PARTNERS</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl font-extrabold text-[#000000] tracking-tight leading-snug sm:leading-tight">
            Powering the{' '}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#000000,#3a3938,#000000)] animate-text-gradient bg-[length:200%_auto]">
              Ecosystem.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] font-normal mt-2 max-w-xl mx-auto">
            Collaborating with forward-thinking organisations, platforms, and educational initiatives across Africa.
          </p>
        </div>

        {/* Continuous Moving Partner Logos Carousel */}
        <div className="relative w-full overflow-hidden py-3 sm:py-4">
          
          {/* Gradient Fade Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex items-center gap-4 sm:gap-6 w-max animate-marquee">
            {marqueeItems.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 h-24 sm:h-28 px-6 sm:px-8 rounded-2xl bg-[#fafafa] border border-[#e5e5e5] hover:border-black/30 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-14 sm:max-h-16 max-w-[150px] sm:max-w-[190px] object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};


