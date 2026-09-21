'use client';

import React, { useRef, useState, useCallback } from 'react';

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt rotation angle in degrees
  scale?: number; // Scale factor on hover (e.g. 1.02)
  glareOpacity?: number; // Max opacity of specular glare
  perspective?: number; // CSS perspective distance in px
}

export const Card3DTilt: React.FC<Card3DTiltProps> = ({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.02,
  glareOpacity = 0.15,
  perspective = 1000,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<React.CSSProperties>({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
  });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (-maxTilt to +maxTilt)
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      // Glare position in percentages
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      setTransformStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 0.08s ease-out',
      });

      setGlarePosition({
        x: glareX,
        y: glareY,
        opacity: glareOpacity,
      });
    },
    [maxTilt, scale, glareOpacity, perspective]
  );

  const handleMouseLeave = useCallback(() => {
    setTransformStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    });
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative will-change-transform transform-gpu ${className}`}
      style={{
        ...transformStyle,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}

      {/* Dynamic Specular Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-inherit overflow-hidden transition-opacity duration-300"
        style={{
          borderRadius: 'inherit',
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle 350px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.22), transparent 70%)`,
        }}
      />
    </div>
  );
};
