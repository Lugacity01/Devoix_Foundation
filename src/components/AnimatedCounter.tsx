'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string; // e.g. "200+", "15+", "100+", "9", "2"
  duration?: number; // duration in ms
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1800,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Extract numeric part and suffix/prefix (e.g. "200+" -> number: 200, suffix: "+")
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, '');

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease out expo curve for snappy deceleration
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = Math.floor(easeProgress * targetNumber);

            setDisplayValue(`${currentVal}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value, targetNumber, suffix, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {hasAnimated ? displayValue : `0${suffix}`}
    </span>
  );
};
