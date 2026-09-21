'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedWordsProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export const AnimatedWords: React.FC<AnimatedWordsProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.035,
  once = true,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: '-40px' });

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-[0.25em] last:mr-0 will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface FadeUpTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const FadeUpText: React.FC<FadeUpTextProps> = ({
  children,
  className = '',
  delay = 0.1,
  duration = 0.6,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: 'blur(3px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(3px)' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
