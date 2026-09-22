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
      className={`relative inline-flex items-center justify-center h-10 sm:h-11 overflow-visible group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg transition-transform hover:opacity-95 ${className}`}
    >
      <img
        src="/assets/logo/Black_circle.png"
        alt="DoVoix"
        className={`h-16 sm:h-20 lg:h-24 w-auto max-w-none object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105 ${
          isLight ? 'filter brightness-0 invert' : ''
        }`}
      />
    </Link>
  );
};
