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
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg transition-transform hover:opacity-95 ${className}`}
    >
      <img
        src={isLight ? '/assets/logo/black_bg_logo.PNG' : '/assets/logo/white_bg_logo.PNG'}
        alt="DoVoix Foundation"
        className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
};
