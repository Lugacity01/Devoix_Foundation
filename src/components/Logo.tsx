import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg transition-transform hover:opacity-95 ${className}`}
    >
      <img
        src="/assets/logo/Black_circle.png"
        alt="DoVoix"
        className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-contain border border-white/20 transition-transform duration-300 group-hover:scale-105"
      />
      <span className={`font-display text-lg sm:text-xl font-extrabold tracking-tight ${isLight ? 'text-white' : 'text-slate-900'}`}>
        DoVoix
      </span>
    </Link>
  );
};
