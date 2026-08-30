import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg p-1 ${className}`}>
      {/* Visual Mark: Infinity-inspired dual-loop vector mark in Purple & Black */}
      <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-950 via-[#120726] to-[#080312] border border-purple-500/40 shadow-md group-hover:scale-105 transition-transform duration-300">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-purple-400"
        >
          {/* Dual Loop Infinity Symbol Path */}
          <path
            d="M13 14C9.13401 14 6 17.134 6 21C6 24.866 9.13401 28 13 28C17.5 28 22.5 14 27 14C30.866 14 34 17.134 34 21C34 24.866 30.866 28 27 28C22.5 28 17.5 14 13 14Z"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27 14C30.866 14 34 17.134 34 21C34 24.866 30.866 28 27 28"
            stroke="#C77DFF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`font-display text-xl font-bold tracking-tight ${isLight ? 'text-white' : 'text-slate-900'}`}>
          DOVOIX
        </span>
        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase -mt-1 ${isLight ? 'text-purple-400' : 'text-purple-600'}`}>
          FOUNDATION
        </span>
      </div>
    </Link>
  );
};
